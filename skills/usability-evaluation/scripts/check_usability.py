#!/usr/bin/env python3
"""Kiểm tra máy móc cho các file của skill usability-evaluation.

Script không đánh giá nội dung. Nó chỉ bắt các lỗi định dạng, bảng thay đổi, mã trùng và dấu hiệu lộ thông tin
cá nhân của người tham gia.

Lệnh:
  format   FILE...                  Dấu "—", "·" ngoài phần trích dẫn (dòng ">")
  changes  FILE...                  Bảng "Thay đổi so với bản AI": Cột Loại chỉ nhận 5 giá trị; cột
                                    "Vì sao AI bỏ sót" có giá trị khi và chỉ khi Loại là "Thiếu"
  ids      FILE...                  Mã định nghĩa trùng trong cùng file (Q, O, M, D, C, I, QĐ...: ô đầu của dòng bảng)
  open     FILE...                  Liệt kê quyết định còn mở (dòng có "⏳")
  privacy  FILE... [--allow-domain eshop.com ...]
                                    Số điện thoại chưa che, email ngoài các tên miền được phép. Không chạy trên
                                    file danh sách người tham gia (AI không được đọc file đó)

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
ID = re.compile(r"^(Q|O|M|D|C|G|T|I|QĐ|QĐ-I|CH|GĐ)\d+[a-z]?$")
PHONE = re.compile(r"(?<![\d*])(?:\+84|0)(?:[\s.]?\d){9,10}(?![\d*])")
EMAIL = re.compile(r"[\w.+-]+@([\w-]+\.)+[\w-]+")
FORBIDDEN_NAMES = ("participants.md",)

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
    lines = text.splitlines()
    heading = ""
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("#"):
            heading = line.lstrip("#").strip()
        if (line.lstrip().startswith("|") and i + 1 < len(lines)
                and re.match(r"^\s*\|[\s:|-]+\|\s*$", lines[i + 1])):
            header = split_row(line)
            rows = []
            j = i + 2
            while j < len(lines) and lines[j].lstrip().startswith("|"):
                rows.append((j + 1, split_row(lines[j])))
                j += 1
            yield heading, header, rows
            i = j
            continue
        i += 1


def col(header, name):
    for k, h in enumerate(header):
        if h.startswith(name):
            return k
    return None


def cell(row, k):
    return row[k] if k is not None and k < len(row) else ""


def cmd_format(files):
    for path in files:
        for n, line in enumerate(read(path).splitlines(), start=1):
            if line.lstrip().startswith(">"):
                continue
            checked = re.sub(r"\"[—·]\"|“[—·]”|`[^`]*`", "", line)
            for ch in ("—", "·"):
                if ch in checked:
                    report("ERROR", f"{path}:{n}: Có dấu \"{ch}\" ngoài phần trích dẫn")


def cmd_changes(files):
    for path in files:
        found = False
        for heading, header, rows in tables(read(path)):
            if "Thay đổi so với bản AI" not in heading:
                continue
            found = True
            k_loai, k_vs = col(header, "Loại"), col(header, "Vì sao AI bỏ sót")
            if k_loai is None or k_vs is None:
                report("ERROR", f"{path}: Bảng thay đổi thiếu cột Loại hoặc \"Vì sao AI bỏ sót\"")
                continue
            counts = {}
            for n, row in rows:
                loai, vs = cell(row, k_loai), cell(row, k_vs)
                counts[loai] = counts.get(loai, 0) + 1
                if loai not in LOAI:
                    report("ERROR", f"{path}:{n}: Loại \"{loai}\" không thuộc {LOAI}")
                if loai == "Thiếu" and not vs.startswith(VI_SAO):
                    report("ERROR", f"{path}:{n}: Loại Thiếu nhưng \"Vì sao AI bỏ sót\" không bắt đầu bằng "
                                    f"một trong {VI_SAO}")
                if loai != "Thiếu" and vs:
                    report("ERROR", f"{path}:{n}: \"Vì sao AI bỏ sót\" chỉ ghi khi Loại là Thiếu")
            print(f"{path}: {len(rows)} dòng thay đổi; " + ", ".join(f"{k}: {v}" for k, v in counts.items()))
        if not found:
            report("WARN", f"{path}: Không thấy mục \"Thay đổi so với bản AI\"")


def cmd_ids(files):
    for path in files:
        seen = {}
        for heading, header, rows in tables(read(path)):
            if "Thay đổi so với bản AI" in heading or "Tổng hợp" in heading:
                continue
            if not header or header[0] not in ("Mã", "#", "Chặng", "Mốc"):
                continue
            for n, row in rows:
                code = row[0]
                if not ID.match(code):
                    continue
                key = (header[0], code, " ".join(header))
                if key in seen:
                    report("ERROR", f"{path}:{n}: {code} đã định nghĩa ở dòng {seen[key]} trong bảng cùng loại")
                seen[key] = n
        print(f"{path}: {len(seen)} mã định nghĩa")


def cmd_open(files):
    for path in files:
        count = 0
        for n, line in enumerate(read(path).splitlines(), start=1):
            if "⏳" in line:
                count += 1
                print(f"{path}:{n}: {line.strip()[:160]}")
        print(f"{path}: {count} dòng còn mở")


def cmd_privacy(files, allow):
    for path in files:
        if path.replace("\\", "/").split("/")[-1] in FORBIDDEN_NAMES:
            report("ERROR", f"{path}: Không chạy trên file danh sách người tham gia (AI không được đọc file này)")
            continue
        for n, line in enumerate(read(path).splitlines(), start=1):
            for m in PHONE.finditer(line):
                report("ERROR", f"{path}:{n}: Có chuỗi giống số điện thoại chưa che: {m.group(0)}")
            for m in EMAIL.finditer(line):
                domain = m.group(0).split("@", 1)[1].lower()
                if not any(domain == d or domain.endswith("." + d) for d in allow):
                    report("ERROR", f"{path}:{n}: Có email ngoài tên miền được phép: {m.group(0)}")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    for name in ("format", "changes", "ids", "open"):
        sub.add_parser(name).add_argument("files", nargs="+")
    p = sub.add_parser("privacy")
    p.add_argument("files", nargs="+")
    p.add_argument("--allow-domain", nargs="*", default=["eshop.com", "example.com"])
    a = ap.parse_args()
    if a.cmd == "format":
        cmd_format(a.files)
    elif a.cmd == "changes":
        cmd_changes(a.files)
    elif a.cmd == "ids":
        cmd_ids(a.files)
    elif a.cmd == "open":
        cmd_open(a.files)
    elif a.cmd == "privacy":
        cmd_privacy(a.files, a.allow_domain)
    print(f"Tổng: {errors} ERROR")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
