#!/usr/bin/env python3
"""Xuất checklist GUI đã review (Markdown) ra file Excel để chạy.

Nguồn duy nhất là file checklist đã review (mặc định `02_checklist.md`). Excel chỉ là bản trình bày:
Muốn sửa nội dung thì sửa file .md rồi chạy lại script, không sửa trong Excel.

Cách dùng:
  python -I build_checklist_xlsx.py --md checklist/02_checklist.md --out checklist/<tên>.xlsx \
      --title "HW03 Task 1: GUI Checklist <SUT> (<màn hình>)" \
      --student "<Họ tên> (<MSSV>)" [--platforms 3]

File Markdown cần có (theo assets/templates/checklist.md của skill):
  - Các bảng mục checklist: Ô tiêu đề đầu là "Mã", ô đầu mỗi dòng là "CL-<số>". Cột được nhận theo tên:
    Nội dung kiểm, IA, Màn hình, Oracle, Cách kiểm, Kết quả mong đợi, Nguồn, Vì sao AI bỏ sót (tùy chọn).
  - Mục có tiêu đề chứa "Quy ước": Danh sách gạch đầu dòng, chép sang sheet "Hướng dẫn".
  - Bảng điều kiện chuẩn bị: Ô đầu mỗi dòng là "ĐK-<số>", cột Mã, Điều kiện, Dùng cho.
  - Mục có tiêu đề chứa "Ma trận" (tùy chọn): Bảng ma trận. Cột có chữ "(ghi khi chạy)" ở tiêu đề thành
    cột điền khi chạy, lặp lại cho từng nền tảng. Dòng bắt đầu bằng "Mong đợi chung" thành ghi chú dưới bảng.

Sheet tạo ra: Checklist, Hướng dẫn, Môi trường, Ma trận... (nếu có), Tổng hợp (công thức tự đếm).
Cần: openpyxl.
"""
import argparse
import io
import re
import sys

try:
    from openpyxl import Workbook
    from openpyxl.formatting.rule import FormulaRule
    from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
    from openpyxl.utils import get_column_letter
    from openpyxl.worksheet.datavalidation import DataValidation
except ImportError:  # pragma: no cover
    sys.exit("Cần cài openpyxl: pip install openpyxl")

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

RESULTS = ["Passed", "Failed", "N/A", "Không chạy được"]
RESULT_FILLS = {"Passed": "C6EFCE", "Failed": "FFC7CE", "N/A": "D9D9D9", "Không chạy được": "F8CBAD"}
ITEM_COLS = [
    ("Mã", 8), ("Nội dung kiểm", 40), ("IA", 7), ("Màn hình", 20), ("Oracle", 30),
    ("Cách kiểm", 34), ("Kết quả mong đợi", 42), ("Nguồn", 18), ("Vì sao AI bỏ sót", 30),
]
RUN_COLS = [("Kết quả", 14), ("Notes", 40), ("Ảnh", 26)]

HEAD_FILL = PatternFill("solid", fgColor="1F4E78")
PLAT_FILL = PatternFill("solid", fgColor="2E75B6")
INPUT_FILL = PatternFill("solid", fgColor="FFF2CC")
WHITE_BOLD = Font(bold=True, color="FFFFFF")
BOLD = Font(bold=True)
TITLE = Font(bold=True, size=13)
THIN = Side(style="thin", color="999999")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
WRAP_TOP = Alignment(wrap_text=True, vertical="top")
WRAP_CENTER = Alignment(wrap_text=True, vertical="center", horizontal="center")


# ---------------------------------------------------------------- Đọc Markdown

def clean(text):
    """Bỏ định dạng Markdown trong ô: `code`, **đậm**, \\| ."""
    text = text.replace("\\|", "|").replace("**", "")
    text = re.sub(r"`([^`]*)`", r"\1", text)
    return text.strip()


def split_row(line):
    s = line.strip()
    if s.startswith("|"):
        s = s[1:]
    if s.endswith("|"):
        s = s[:-1]
    return [c.strip() for c in re.split(r"(?<!\\)\|", s)]


def parse(md):
    """Trả về danh sách khối: ('heading', level, text), ('table', heading, header, rows), ('para', heading, text),
    ('bullet', heading, depth, text)."""
    blocks = []
    lines = md.splitlines()
    heading = ""
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("#"):
            level = len(line) - len(line.lstrip("#"))
            heading = line.lstrip("#").strip()
            blocks.append(("heading", level, heading))
        elif (line.lstrip().startswith("|") and i + 1 < len(lines)
              and re.match(r"^\s*\|[\s:|-]+\|\s*$", lines[i + 1])):
            header = split_row(line)
            rows = []
            j = i + 2
            while j < len(lines) and lines[j].lstrip().startswith("|"):
                rows.append(split_row(lines[j]))
                j += 1
            blocks.append(("table", heading, header, rows))
            i = j
            continue
        else:
            m = re.match(r"^(\s*)- (.*)$", line)
            if m:
                blocks.append(("bullet", heading, len(m.group(1)) // 2, m.group(2)))
            elif line.strip() and not line.startswith("---"):
                blocks.append(("para", heading, line.strip()))
        i += 1
    return blocks


def cl_num(code):
    return int(code.split("-")[1])


def collect(blocks):
    items, conds, conventions, matrices = [], [], [], []
    matrix_heading = None
    for b in blocks:
        if b[0] == "heading":
            matrix_heading = b[2] if "Ma trận" in b[2] else None
            if matrix_heading:
                matrices.append({"title": re.sub(r"^\d+(\.\d+)*\.?\s*", "", matrix_heading),
                                 "notes": [], "header": None, "rows": []})
        elif b[0] == "table":
            _, heading, header, rows = b
            if header and header[0] == "Mã" and rows and re.match(r"^CL-\d+$", rows[0][0]):
                idx = {h: k for k, h in enumerate(header)}
                for r in rows:
                    if not re.match(r"^CL-\d+$", r[0]):
                        continue
                    items.append({name: clean(r[idx[name]]) if name in idx and idx[name] < len(r) else ""
                                  for name, _ in ITEM_COLS})
            elif rows and re.match(r"^ĐK-\d+$", rows[0][0]):
                conds.extend([clean(c) for c in r[:3]] for r in rows)
            elif matrix_heading and heading == matrix_heading:
                matrices[-1]["header"] = [clean(h) for h in header]
                matrices[-1]["rows"] = [[clean(c) for c in r] for r in rows]
        elif b[0] == "bullet" and "Quy ước" in b[1]:
            conventions.append((b[2], clean(b[3])))
        elif b[0] == "para" and matrix_heading and b[1] == matrix_heading and matrices[-1]["header"] is None:
            matrices[-1]["notes"].append(clean(b[2]))
    items.sort(key=lambda it: cl_num(it["Mã"]))
    codes = [it["Mã"] for it in items]
    dup = sorted({c for c in codes if codes.count(c) > 1})
    if dup:
        sys.exit("Mã CL bị trùng: " + ", ".join(dup))
    return items, conds, conventions, matrices


# ---------------------------------------------------------------- Ghi Excel

def plat_label(k):
    col = get_column_letter(2 + k)  # Môi trường!B4, C4, D4...
    return f"=\"NT{k + 1}: \"&IF('Môi trường'!{col}4=\"\",\"(chưa đặt tên)\",'Môi trường'!{col}4)"


def style_head(cell, fill=HEAD_FILL):
    cell.fill = fill
    cell.font = WHITE_BOLD
    cell.alignment = WRAP_CENTER
    cell.border = BORDER


def sheet_checklist(wb, items, n_plat):
    ws = wb.active
    ws.title = "Checklist"
    last = len(items) + 2
    for k, (name, width) in enumerate(ITEM_COLS, start=1):
        ws.cell(1, k, name)
        ws.merge_cells(start_row=1, end_row=2, start_column=k, end_column=k)
        style_head(ws.cell(1, k))
        style_head(ws.cell(2, k))
        ws.column_dimensions[get_column_letter(k)].width = width
    result_cols = []
    for p in range(n_plat):
        c0 = len(ITEM_COLS) + 1 + p * len(RUN_COLS)
        ws.cell(1, c0, plat_label(p))
        ws.merge_cells(start_row=1, end_row=1, start_column=c0, end_column=c0 + len(RUN_COLS) - 1)
        for k, (name, width) in enumerate(RUN_COLS):
            style_head(ws.cell(1, c0 + k), PLAT_FILL)
            ws.cell(2, c0 + k, name)
            style_head(ws.cell(2, c0 + k), PLAT_FILL)
            ws.column_dimensions[get_column_letter(c0 + k)].width = width
        result_cols.append(get_column_letter(c0))
    for r, it in enumerate(items, start=3):
        for k, (name, _) in enumerate(ITEM_COLS, start=1):
            c = ws.cell(r, k, it[name])
            c.alignment = WRAP_TOP
            c.border = BORDER
            if k == 1:
                c.font = BOLD
        for k in range(n_plat * len(RUN_COLS)):
            c = ws.cell(r, len(ITEM_COLS) + 1 + k)
            c.fill = INPUT_FILL
            c.alignment = WRAP_TOP
            c.border = BORDER
    ws.row_dimensions[1].height = 22
    ws.freeze_panes = "C3"
    ws.auto_filter.ref = f"A2:{get_column_letter(len(ITEM_COLS) + n_plat * len(RUN_COLS))}{last}"
    dv = DataValidation(type="list", formula1='"' + ",".join(RESULTS) + '"', allow_blank=True)
    dv.error = "Chọn Passed, Failed, N/A hoặc Không chạy được"
    ws.add_data_validation(dv)
    for col in result_cols:
        rng = f"{col}3:{col}{last}"
        dv.add(rng)
        for val, color in RESULT_FILLS.items():
            ws.conditional_formatting.add(
                rng, FormulaRule(formula=[f'${col}3="{val}"'], fill=PatternFill("solid", fgColor=color)))
    ws.print_title_rows = "1:2"
    ws.page_setup.orientation = "landscape"
    return result_cols, last


def sheet_guide(wb, title, student, src, conventions, conds, n_plat):
    ws = wb.create_sheet("Hướng dẫn")
    ws.column_dimensions["A"].width = 18
    ws.column_dimensions["B"].width = 90
    ws.column_dimensions["C"].width = 35
    rows = [
        (title, TITLE),
        (f"Sinh viên: {student}. Nguồn nội dung: {src}. Mã CL giữ cố định.", None),
        None,
        ("Ô cần điền", BOLD),
        (f"• Ô nền vàng là ô sinh viên điền khi chạy. Các ô khác lấy từ {src}, không sửa ở đây "
         "(sửa ở file .md rồi xuất lại).", None),
        (f"• Sheet \"Môi trường\": Điền tên ngắn và thông tin của từng nền tảng (NT1 đến NT{n_plat}). "
         "Tên ngắn tự hiện ở tiêu đề cột của sheet \"Checklist\".", None),
        ("• Sheet \"Checklist\", cột Kết quả: Chọn trong danh sách " + " / ".join(RESULTS)
         + ". Để trống nghĩa là chưa chạy.", None),
        ("• Cột Notes: Bắt buộc với mục Failed (thấy gì, khác mong đợi ở đâu, màn hình nào). "
         "N/A và Không chạy được ghi lý do.", None),
        ("• Cột Ảnh: Tên file ảnh của mục Failed. Mục Passed không cần ảnh.", None),
        ("• Sheet \"Ma trận...\" (nếu có): Ghi giá trị quan sát được khi chạy vào ô vàng.", None),
        ("• Sheet \"Tổng hợp\": Tự đếm, không cần điền.", None),
        None,
        ("Ý nghĩa kết quả", BOLD),
    ]
    r = 1
    for row in rows:
        if row:
            ws.cell(r, 1, row[0]).font = row[1] or Font()
        r += 1
    meaning = [
        ("Passed", "Kết quả thực tế khớp cột \"Kết quả mong đợi\""),
        ("Failed", "Không khớp; ghi Notes và ảnh"),
        ("N/A", "Mục không áp dụng được trên nền tảng này; ghi lý do"),
        ("Không chạy được", "Phụ thuộc mục khác hoặc trạng thái màn hình không tạo được; ghi lý do, "
                            "không tính vào Passed / Failed"),
    ]
    for a, b in meaning:
        ws.cell(r, 1, a).font = BOLD
        ws.cell(r, 2, b).alignment = WRAP_TOP
        r += 1
    r += 1
    ws.cell(r, 1, "Ví dụ cách ghi (minh họa định dạng, KHÔNG phải kết quả thật)").font = BOLD
    r += 1
    for a, b in [("Kết quả", "Failed"),
                 ("Notes", "<Màn hình>: <Thấy gì>, mong đợi <điều gì theo cột Kết quả mong đợi>"),
                 ("Ảnh", "screenshots/<nền tảng>/<mã mục>_<nội dung>.png")]:
        ws.cell(r, 1, a)
        ws.cell(r, 2, b)
        r += 1
    if conventions:
        r += 1
        ws.cell(r, 1, f"Quy ước ({src})").font = BOLD
        r += 1
        for depth, text in conventions:
            ws.cell(r, 1, ("    " * depth) + "• " + text).alignment = Alignment(wrap_text=False)
            r += 1
    if conds:
        r += 1
        ws.cell(r, 1, f"Điều kiện chuẩn bị ({src})").font = BOLD
        r += 1
        for k, h in enumerate(["Mã", "Điều kiện", "Dùng cho"], start=1):
            style_head(ws.cell(r, k, h))
        r += 1
        for cond in conds:
            for k, v in enumerate(cond, start=1):
                c = ws.cell(r, k, v)
                c.alignment = WRAP_TOP
                c.border = BORDER
            r += 1


def sheet_env(wb, n_plat):
    ws = wb.create_sheet("Môi trường")
    ws.column_dimensions["A"].width = 42
    ws.cell(1, 1, "Môi trường chạy (điền ô vàng)").font = TITLE
    style_head(ws.cell(3, 1, "Mục"))
    for p in range(n_plat):
        style_head(ws.cell(3, 2 + p, f"NT{p + 1}"))
        ws.column_dimensions[get_column_letter(2 + p)].width = 34
    fields = ["Tên ngắn (hiện ở tiêu đề cột Checklist)", "Trình duyệt và phiên bản", "OS và phiên bản",
              "Thiết bị / máy ảo / dịch vụ cloud", "Độ phân giải màn hình / kích thước cửa sổ",
              "Zoom trình duyệt", "Scale hiển thị của OS", "Ngày giờ chạy", "Người chạy", "Dùng cho", "Ghi chú"]
    for k, f in enumerate(fields, start=4):
        c = ws.cell(k, 1, f)
        c.border = BORDER
        c.font = BOLD
        for p in range(n_plat):
            cell = ws.cell(k, 2 + p)
            cell.fill = INPUT_FILL
            cell.border = BORDER
            cell.alignment = WRAP_TOP


def sheet_matrices(wb, matrices, n_plat):
    used = set()
    for mx in matrices:
        if not mx["header"]:
            continue
        base = re.sub(r"\s*\(.*$", "", mx["title"])[:31] or "Ma trận"
        name = base
        n = 2
        while name in used:
            name = f"{base[:28]} {n}"
            n += 1
        used.add(name)
        ws = wb.create_sheet(name)
        header = mx["header"]
        run = [k for k, h in enumerate(header) if "(ghi khi chạy)" in h]
        fixed = [k for k in range(len(header)) if k not in run]
        ws.cell(1, 1, ". ".join([mx["title"]] + mx["notes"])).font = BOLD
        col = 1
        for k in fixed:
            ws.cell(3, col, header[k])
            ws.merge_cells(start_row=3, end_row=4, start_column=col, end_column=col)
            style_head(ws.cell(3, col))
            style_head(ws.cell(4, col))
            ws.column_dimensions[get_column_letter(col)].width = 22
            col += 1
        if run:
            for p in range(n_plat):
                ws.cell(3, col, plat_label(p))
                ws.merge_cells(start_row=3, end_row=3, start_column=col, end_column=col + len(run) - 1)
                for j, k in enumerate(run):
                    style_head(ws.cell(3, col + j), PLAT_FILL)
                    ws.cell(4, col + j, header[k].replace("(ghi khi chạy)", "").strip())
                    style_head(ws.cell(4, col + j), PLAT_FILL)
                    ws.column_dimensions[get_column_letter(col + j)].width = 18
                col += len(run)
        r = 5
        notes = []
        for row in mx["rows"]:
            if row and row[0].startswith("Mong đợi chung"):
                notes.append(row[0] + ": " + "; ".join(c for c in row[1:] if c))
                continue
            c = 1
            for k in fixed:
                cell = ws.cell(r, c, row[k] if k < len(row) else "")
                cell.border = BORDER
                cell.alignment = WRAP_TOP
                c += 1
            for _ in range(n_plat * len(run)):
                cell = ws.cell(r, c)
                cell.fill = INPUT_FILL
                cell.border = BORDER
                c += 1
            r += 1
        for note in notes:
            r += 1
            ws.cell(r, 1, note)


def sheet_summary(wb, items, result_cols, last, n_plat):
    ws = wb.create_sheet("Tổng hợp")
    ws.column_dimensions["A"].width = 30
    ias = sorted({it["IA"] for it in items if it["IA"]})
    rng = lambda col: f"Checklist!${col}$3:${col}${last}"
    ws.cell(1, 1, "Tổng hợp (tự đếm từ sheet Checklist)").font = TITLE
    ws.cell(3, 1, "Số mục theo IA").font = BOLD
    heads = ["IA", "Số mục", "Căn cứ SRS", "Khuyến nghị", "Nguồn AI", "Nguồn AI, SV sửa", "Nguồn SV thêm"]
    for k, h in enumerate(heads, start=1):
        style_head(ws.cell(4, k, h))
        ws.column_dimensions[get_column_letter(k)].width = max(ws.column_dimensions[get_column_letter(k)].width or 0, 16)
    r = 5
    for ia in ias:
        ws.cell(r, 1, ia)
        ws.cell(r, 2, f"=COUNTIF({rng('C')},$A{r})")
        ws.cell(r, 3, f"=B{r}-D{r}")
        ws.cell(r, 4, f'=COUNTIFS({rng("C")},$A{r},{rng("E")},"Khuyến nghị*")')
        ws.cell(r, 5, f'=COUNTIFS({rng("C")},$A{r},{rng("H")},"AI (*")')
        ws.cell(r, 6, f'=COUNTIFS({rng("C")},$A{r},{rng("H")},"AI, SV sửa*")')
        ws.cell(r, 7, f'=COUNTIFS({rng("C")},$A{r},{rng("H")},"SV thêm*")')
        r += 1
    ws.cell(r, 1, "Tổng").font = BOLD
    for k in range(2, 8):
        col = get_column_letter(k)
        ws.cell(r, k, f"=SUM({col}5:{col}{r - 1})").font = BOLD
    r += 2
    ws.cell(r, 1, "Kết quả theo nền tảng").font = BOLD
    r += 1
    heads = ["Nền tảng", "Passed", "Failed", "N/A", "Không chạy được", "Chưa chạy (trống)",
             "Đã thực thi (Passed + Failed)", "Tỉ lệ Passed / đã thực thi"]
    for k, h in enumerate(heads, start=1):
        style_head(ws.cell(r, k, h))
    r += 1
    for p, col in enumerate(result_cols):
        ws.cell(r, 1, plat_label(p))
        for k, val in enumerate(RESULTS, start=2):
            ws.cell(r, k, f'=COUNTIF({rng(col)},"{val}")')
        ws.cell(r, 6, f"=COUNTBLANK({rng(col)})")
        ws.cell(r, 7, f"=B{r}+C{r}")
        ws.cell(r, 8, f'=IF(G{r}=0,"",B{r}/G{r})').number_format = "0.0%"
        r += 1
    r += 1
    ws.cell(r, 1, "Passed / Failed theo IA và nền tảng").font = BOLD
    r += 1
    style_head(ws.cell(r, 1, "IA"))
    for p in range(n_plat):
        style_head(ws.cell(r, 2 + 2 * p, f"NT{p + 1} Passed"))
        style_head(ws.cell(r, 3 + 2 * p, f"NT{p + 1} Failed"))
    r += 1
    for ia in ias:
        ws.cell(r, 1, ia)
        for p, col in enumerate(result_cols):
            ws.cell(r, 2 + 2 * p, f'=COUNTIFS({rng("C")},$A{r},{rng(col)},"Passed")')
            ws.cell(r, 3 + 2 * p, f'=COUNTIFS({rng("C")},$A{r},{rng(col)},"Failed")')
        r += 1
    r += 1
    ws.cell(r, 1, "Ghi chú: \"Đã thực thi\" chỉ tính Passed và Failed; N/A và Không chạy được ghi riêng.")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--md", required=True, help="File checklist đã review, ví dụ checklist/02_checklist.md")
    ap.add_argument("--out", required=True, help="File .xlsx đầu ra")
    ap.add_argument("--title", required=True, help="Dòng tiêu đề ở sheet Hướng dẫn")
    ap.add_argument("--student", required=True, help="Họ tên và MSSV")
    ap.add_argument("--platforms", type=int, default=3, help="Số nền tảng (nhóm cột kết quả), mặc định 3")
    a = ap.parse_args()
    with io.open(a.md, encoding="utf-8") as f:
        items, conds, conventions, matrices = collect(parse(f.read()))
    if not items:
        sys.exit("Không tìm thấy dòng mục CL-<số> nào trong " + a.md)
    src = a.md.replace("\\", "/").split("/")[-2:]
    src = "/".join(src)
    wb = Workbook()
    result_cols, last = sheet_checklist(wb, items, a.platforms)
    sheet_guide(wb, a.title, a.student, src, conventions, conds, a.platforms)
    sheet_env(wb, a.platforms)
    sheet_matrices(wb, matrices, a.platforms)
    sheet_summary(wb, items, result_cols, last, a.platforms)
    wb.save(a.out)
    per_ia = {}
    for it in items:
        per_ia[it["IA"]] = per_ia.get(it["IA"], 0) + 1
    print(f"Đã ghi {a.out}: {len(items)} mục ("
          + ", ".join(f"{k}: {v}" for k, v in sorted(per_ia.items())) + f"), {len(conds)} điều kiện, "
          f"{sum(1 for m in matrices if m['header'])} ma trận, {a.platforms} nền tảng")


if __name__ == "__main__":
    main()
