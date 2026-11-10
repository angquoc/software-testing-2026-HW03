#!/usr/bin/env python3
"""Kiểm tra máy móc cho các file của skill gui-checklist.

Script không đánh giá nội dung (mục checklist đúng hay sai, mong đợi có hợp lý không). Nó chỉ bắt các lỗi
đếm, đánh mã, tham chiếu và định dạng mà AI hay mắc khi làm tay.

Lệnh:
  format    FILE...                 Dấu "—", "·" ngoài phần trích nguyên văn (dòng ">" và cột "Nguyên văn ...")
  changes   FILE...                 Bảng "Thay đổi so với bản AI": Cột Loại chỉ nhận 5 giá trị; cột
                                    "Vì sao AI bỏ sót" có giá trị khi và chỉ khi Loại là "Thiếu"
  same      FILE_A FILE_B           Hai file giống hệt (bản AI survey và bản để sinh viên điền)
  oracle    ORACLE_FILE             Mã UI-Rnn trùng; cột IA, Áp dụng nhận giá trị hợp lệ; dòng "Không áp dụng"
                                    có lý do; đếm theo cột Áp dụng
  draft     DRAFT_FILE... [--oracle ORACLE_FILE]
                                    Mã AI-<IA>-<số> trùng hoặc sai IA của file; ô bắt buộc trống; cột Oracle là
                                    UI-Rnn có trong oracle hoặc bắt đầu bằng "Khuyến nghị"
  checklist CHECKLIST_FILE [--oracle ORACLE_FILE] [--min 41]
                                    Mã CL trùng hoặc nhảy số; tổng số mục; IA nào chưa có mục; cột Nguồn hợp lệ;
                                    mục SV thêm có "Vì sao AI bỏ sót"; mã UI-Rnn được dẫn có trong oracle và đang
                                    áp dụng; mã áp dụng trong oracle mà chưa có mục nào

Quy ước mà script dựa vào (theo assets/templates của skill):
  - Bảng Markdown chuẩn, ô tiêu đề đầu là "Mã".
  - Bỏ qua mục "Thay đổi so với bản AI" khi tìm định nghĩa mã.

Mã thoát: 1 nếu có ERROR, 0 nếu không.
"""
import argparse
import io
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

LOAI = ["Sai", "Thiếu", "Thừa", "Mơ hồ", "Quyết định của SV"]
VI_SAO = ("Prompt", "Giới hạn model", "Đặc thù giao diện")
AP_DUNG = ("Áp dụng", "Áp dụng một phần", "Không áp dụng", "⏳ SV quyết định")
IA_OK = re.compile(r"^(IA-0[1-4])(, IA-0[1-4])*$")
NGUON = re.compile(r"^(AI \(AI-\d{2}-\d{2}\)|AI, SV sửa \(AI-\d{2}-\d{2}(, AI-\d{2}-\d{2})*\)|SV thêm.*)$")
UIR = re.compile(r"\bUI-R(\d+)\b")
UIR_RANGE = re.compile(r"\bUI-R(\d+) đến (?:UI-)?R(\d+)\b")
SLASH_R = re.compile(r"\bUI-R(\d+)((?:/R\d+)+)")

errors = 0


def report(level, msg):
    global errors
    if level == "ERROR":
        errors += 1
    print(f"{level}: {msg}")


def read(path):
    with io.open(path, encoding="utf-8") as f:
        return f.read()


def split_row(line):
    s = line.strip()
    if s.startswith("|"):
        s = s[1:]
    if s.endswith("|"):
        s = s[:-1]
    return [c.strip() for c in re.split(r"(?<!\\)\|", s)]


def tables(text):
    """Trả về (tiêu đề mục gần nhất, các tiêu đề cha, ô tiêu đề, [(số dòng, ô)]) cho mỗi bảng."""
    lines = text.splitlines()
    stack = {}
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("#"):
            level = len(line) - len(line.lstrip("#"))
            stack = {k: v for k, v in stack.items() if k < level}
            stack[level] = line.lstrip("#").strip()
        if (line.lstrip().startswith("|") and i + 1 < len(lines)
                and re.match(r"^\s*\|[\s:|-]+\|\s*$", lines[i + 1])):
            header = split_row(line)
            rows = []
            j = i + 2
            while j < len(lines) and lines[j].lstrip().startswith("|"):
                rows.append((j + 1, split_row(lines[j])))
                j += 1
            yield " / ".join(stack[k] for k in sorted(stack)), header, rows
            i = j
            continue
        i += 1


def in_changes(heading):
    return "Thay đổi so với bản AI" in heading


def col(header, name):
    for k, h in enumerate(header):
        if h.startswith(name):
            return k
    return None


def cell(row, k):
    return row[k] if k is not None and k < len(row) else ""


def expand_uir(text):
    nums = set(int(n) for n in UIR.findall(text))
    for a, b in UIR_RANGE.findall(text):
        nums.update(range(int(a), int(b) + 1))
    for first, rest in SLASH_R.findall(text):
        nums.update(int(n) for n in re.findall(r"R(\d+)", rest))
    return nums


# ---------------------------------------------------------------- format

def cmd_format(files):
    for path in files:
        text = read(path)
        skip_cols = {}
        lines = text.splitlines()
        header = None
        for n, line in enumerate(lines, start=1):
            if line.lstrip().startswith(">"):
                continue
            if line.lstrip().startswith("|"):
                cells = split_row(line)
                if header is None or not lines[n - 2].lstrip().startswith("|"):
                    header = cells
                    skip_cols = {k for k, h in enumerate(header) if h.startswith("Nguyên văn")}
                checked = " | ".join(c for k, c in enumerate(cells) if k not in skip_cols)
            else:
                header = None
                checked = line
            checked = re.sub(r"\"[—·]\"|“[—·]”|`[^`]*`", "", checked)
            for ch in ("—", "·"):
                if ch in checked:
                    report("ERROR", f"{path}:{n}: Có dấu \"{ch}\" ngoài phần trích nguyên văn")


# ---------------------------------------------------------------- changes

def cmd_changes(files):
    for path in files:
        found = False
        for heading, header, rows in tables(read(path)):
            if not in_changes(heading):
                continue
            found = True
            k_loai, k_vs = col(header, "Loại"), col(header, "Vì sao AI bỏ sót")
            if k_loai is None:
                report("ERROR", f"{path}: Bảng thay đổi không có cột Loại")
                continue
            if k_vs is None:
                report("ERROR", f"{path}: Bảng thay đổi không có cột \"Vì sao AI bỏ sót\"")
            counts = {}
            for n, row in rows:
                loai = cell(row, k_loai)
                counts[loai] = counts.get(loai, 0) + 1
                if loai not in LOAI:
                    report("ERROR", f"{path}:{n}: Loại \"{loai}\" không thuộc {LOAI}")
                if k_vs is None:
                    continue
                vs = cell(row, k_vs)
                if loai == "Thiếu" and not vs.startswith(VI_SAO):
                    report("ERROR", f"{path}:{n}: Loại Thiếu nhưng cột \"Vì sao AI bỏ sót\" không bắt đầu bằng "
                                    f"một trong {VI_SAO}")
                if loai != "Thiếu" and vs:
                    report("ERROR", f"{path}:{n}: Cột \"Vì sao AI bỏ sót\" chỉ ghi khi Loại là Thiếu")
            print(f"{path}: {len(rows)} dòng thay đổi; " + ", ".join(f"{k}: {v}" for k, v in counts.items()))
        if not found:
            report("WARN", f"{path}: Không thấy mục \"Thay đổi so với bản AI\"")


# ---------------------------------------------------------------- same

def cmd_same(a, b):
    if read(a).replace("\r\n", "\n") != read(b).replace("\r\n", "\n"):
        report("ERROR", f"{a} và {b} không giống hệt nhau")
    else:
        print(f"{a} và {b} giống hệt nhau")


# ---------------------------------------------------------------- oracle

def load_oracle(path):
    """Trả về {số: giá trị cột Áp dụng}."""
    result = {}
    for heading, header, rows in tables(read(path)):
        if in_changes(heading) or not header or header[0] != "Mã":
            continue
        k_ap = col(header, "Áp dụng")
        for n, row in rows:
            m = re.match(r"^UI-R(\d+)$", row[0])
            if m and k_ap is not None:
                result.setdefault(int(m.group(1)), []).append((n, cell(row, k_ap), row, header))
    return result


def cmd_oracle(path):
    data = load_oracle(path)
    if not data:
        report("ERROR", f"{path}: Không thấy dòng UI-Rnn nào")
        return
    counts = {}
    for num, defs in sorted(data.items()):
        if len(defs) > 1:
            report("ERROR", f"{path}: UI-R{num:02d} định nghĩa {len(defs)} lần (dòng "
                            + ", ".join(str(d[0]) for d in defs) + ")")
        n, ap, row, header = defs[0]
        counts[ap] = counts.get(ap, 0) + 1
        if ap not in AP_DUNG:
            report("ERROR", f"{path}:{n}: Cột Áp dụng \"{ap}\" không thuộc {AP_DUNG}")
        ia = cell(row, col(header, "IA"))
        if ap.startswith("Áp dụng") and not IA_OK.match(ia):
            report("ERROR", f"{path}:{n}: Mã áp dụng nhưng cột IA \"{ia}\" không hợp lệ")
        if ap.startswith("Áp dụng") and not cell(row, col(header, "Màn hình")):
            report("ERROR", f"{path}:{n}: Mã áp dụng nhưng chưa ghi màn hình")
        if ap == "Không áp dụng" and not cell(row, col(header, "Lý do")):
            report("ERROR", f"{path}:{n}: \"Không áp dụng\" phải có lý do")
    nums = sorted(data)
    missing = [n for n in range(nums[0], nums[-1] + 1) if n not in data]
    if missing:
        report("WARN", f"{path}: Nhảy số UI-R: " + ", ".join(f"R{n:02d}" for n in missing))
    print(f"{path}: {len(data)} mã; " + ", ".join(f"{k}: {v}" for k, v in counts.items()))


# ---------------------------------------------------------------- draft

def check_oracle_ref(path, n, code, text, oracle, applies_only=False):
    if text.startswith("Khuyến nghị"):
        if ":" not in text:
            report("ERROR", f"{path}:{n}: {code}: Mục khuyến nghị phải ghi nguồn sau dấu \":\"")
        return
    nums = expand_uir(text)
    if not nums:
        report("ERROR", f"{path}:{n}: {code}: Cột Oracle phải là UI-Rnn hoặc bắt đầu bằng \"Khuyến nghị\"")
        return
    if oracle is None:
        return
    for num in sorted(nums):
        if num not in oracle:
            report("ERROR", f"{path}:{n}: {code}: UI-R{num:02d} không có trong oracle")
        elif not oracle[num][0][1].startswith("Áp dụng"):
            report("ERROR", f"{path}:{n}: {code}: UI-R{num:02d} đang \"{oracle[num][0][1]}\" trong oracle")


REQUIRED = ["Nội dung kiểm", "IA", "Màn hình", "Oracle", "Cách kiểm", "Kết quả mong đợi"]


def cmd_draft(files, oracle_path):
    oracle = load_oracle(oracle_path) if oracle_path else None
    for path in files:
        m = re.search(r"IA-0([1-4])", path)
        file_ia = m.group(1) if m else None
        seen = {}
        for heading, header, rows in tables(read(path)):
            if in_changes(heading) or not header or header[0] != "Mã":
                continue
            for n, row in rows:
                code = row[0]
                mm = re.match(r"^AI-(\d{2})-(\d{2})$", code)
                if not mm:
                    continue
                if code in seen:
                    report("ERROR", f"{path}:{n}: {code} trùng với dòng {seen[code]}")
                seen[code] = n
                if file_ia and mm.group(1) != "0" + file_ia:
                    report("ERROR", f"{path}:{n}: {code} không thuộc IA-0{file_ia} của file")
                for name in REQUIRED:
                    if not cell(row, col(header, name)):
                        report("ERROR", f"{path}:{n}: {code}: Cột \"{name}\" trống")
                ia = cell(row, col(header, "IA"))
                if file_ia and ia and f"IA-0{file_ia}" not in ia:
                    report("ERROR", f"{path}:{n}: {code}: Cột IA \"{ia}\" khác IA của file")
                check_oracle_ref(path, n, code, cell(row, col(header, "Oracle")), oracle)
        print(f"{path}: {len(seen)} mục")


# ---------------------------------------------------------------- checklist

def cmd_checklist(path, oracle_path, minimum):
    oracle = load_oracle(oracle_path) if oracle_path else None
    items = {}
    per_ia = {}
    used = set()
    for heading, header, rows in tables(read(path)):
        if in_changes(heading) or not header or header[0] != "Mã":
            continue
        for n, row in rows:
            code = row[0]
            mm = re.match(r"^CL-(\d+)$", code)
            if not mm:
                continue
            num = int(mm.group(1))
            if num in items:
                report("ERROR", f"{path}:{n}: {code} trùng với dòng {items[num]}")
            items[num] = n
            for name in REQUIRED + ["Nguồn"]:
                if not cell(row, col(header, name)):
                    report("ERROR", f"{path}:{n}: {code}: Cột \"{name}\" trống")
            ia = cell(row, col(header, "IA"))
            if not IA_OK.match(ia):
                report("ERROR", f"{path}:{n}: {code}: Cột IA \"{ia}\" không hợp lệ")
            for one in ia.split(", "):
                per_ia[one] = per_ia.get(one, 0) + 1
            nguon = cell(row, col(header, "Nguồn"))
            if nguon and not NGUON.match(nguon):
                report("ERROR", f"{path}:{n}: {code}: Cột Nguồn \"{nguon}\" không theo dạng "
                                "\"AI (AI-xx-xx)\", \"AI, SV sửa (AI-xx-xx)\" hoặc \"SV thêm\"")
            k_vs = col(header, "Vì sao AI bỏ sót")
            if nguon.startswith("SV thêm") and k_vs is not None:
                vs = cell(row, k_vs)
                if not vs.startswith(VI_SAO + ("Không áp dụng",)):
                    report("ERROR", f"{path}:{n}: {code}: Mục SV thêm thiếu \"Vì sao AI bỏ sót\" hợp lệ")
            orc = cell(row, col(header, "Oracle"))
            check_oracle_ref(path, n, code, orc, oracle)
            used.update(expand_uir(orc) if not orc.startswith("Khuyến nghị") else set())
    if not items:
        report("ERROR", f"{path}: Không thấy mục CL-<số> nào")
        return
    nums = sorted(items)
    gaps = [n for n in range(nums[0], nums[-1] + 1) if n not in items]
    if gaps:
        report("WARN", f"{path}: Nhảy số CL: " + ", ".join(f"CL-{n:02d}" for n in gaps))
    if len(items) < minimum:
        report("ERROR", f"{path}: Có {len(items)} mục, cần ít nhất {minimum}")
    for ia in ("IA-01", "IA-02", "IA-03", "IA-04"):
        if not per_ia.get(ia):
            report("ERROR", f"{path}: {ia} chưa có mục nào")
    if oracle is not None:
        not_covered = [k for k, v in oracle.items() if v[0][1].startswith("Áp dụng") and k not in used]
        for k in sorted(not_covered):
            report("WARN", f"{path}: UI-R{k:02d} đang áp dụng trong oracle mà chưa có mục CL nào dẫn tới "
                           "(có thể đúng nếu trùng ý với mã khác; ghi rõ trong truy vết)")
    print(f"{path}: {len(items)} mục; " + ", ".join(f"{k}: {v}" for k, v in sorted(per_ia.items())))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("format")
    p.add_argument("files", nargs="+")
    p = sub.add_parser("changes")
    p.add_argument("files", nargs="+")
    p = sub.add_parser("same")
    p.add_argument("a")
    p.add_argument("b")
    p = sub.add_parser("oracle")
    p.add_argument("file")
    p = sub.add_parser("draft")
    p.add_argument("files", nargs="+")
    p.add_argument("--oracle")
    p = sub.add_parser("checklist")
    p.add_argument("file")
    p.add_argument("--oracle")
    p.add_argument("--min", type=int, default=41)
    a = ap.parse_args()
    if a.cmd == "format":
        cmd_format(a.files)
    elif a.cmd == "changes":
        cmd_changes(a.files)
    elif a.cmd == "same":
        cmd_same(a.a, a.b)
    elif a.cmd == "oracle":
        cmd_oracle(a.file)
    elif a.cmd == "draft":
        cmd_draft(a.files, a.oracle)
    elif a.cmd == "checklist":
        cmd_checklist(a.file, a.oracle, a.min)
    print(f"Tổng: {errors} ERROR")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
