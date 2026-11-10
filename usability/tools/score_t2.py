#!/usr/bin/env python3
"""HW03 Task 2, bước score: Tính điểm SUS và số liệu hiệu suất từ hồ sơ phiên đã ẩn danh.

Đọc (chỉ mã P1 đến P7, bỏ qua pilot PL):
  usability/sessions/P<n>/scale.md   Dòng "Câu trả lời" (10 số 1 đến 5)
  usability/sessions/P<n>/notes.md   Mục 3 (mốc T0 đến T4) và mục 5 (nhật ký sự kiện, cột "Mã")
Không đọc participants.md, video, ghi âm.

Cách tính SUS (Brooke, 1996; 03_instruments.md mục I5):
  Câu lẻ (1, 3, 5, 7, 9): câu trả lời - 1. Câu chẵn (2, 4, 6, 8, 10): 5 - câu trả lời.
  SUS = tổng 10 điểm câu x 2,5 (0 đến 100).
Thời gian chặng: M1 = T1 - T0, M2 = T2 - T1, M3 = T3 - T2, toàn luồng = T4 - T0, tự kiểm tra = T4 - T3.
  Mốc nào không có giờ dạng mm:ss (ví dụ "Không đạt") thì chặng đó không có thời gian.
Độ lệch chuẩn: độ lệch chuẩn mẫu (chia n - 1).

Chạy: python -I score_t2.py   (in bảng Markdown ra màn hình)
"""
import io
import os
import re
import statistics as st
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "sessions")
CODES = ["P%d" % i for i in range(1, 8)]
BENCH = {"M1": 21.09, "M2": 48.57, "M3": 60.84, "Toàn luồng": 138.75}  # 02_scenario.md mục 4.4, ×3
EVENT_CODES = ["La", "Lb", "Lc", "Ld", "Le", "DD", "TS", "TK", "PN", "KH", "HO", "CT0", "CT1", "CT2", "CT3", "MT"]


def read(path):
    with io.open(path, encoding="utf-8") as f:
        return f.read()


def section(text, title_re):
    m = re.search(r"^## " + title_re + r".*?$(.*?)(?=^## |\Z)", text, re.M | re.S)
    return m.group(1) if m else ""


def sus(code):
    s = read(os.path.join(BASE, code, "scale.md"))
    m = re.search(r"^\| Câu trả lời \|(.*)\|\s*$", s, re.M)
    vals = [c.strip() for c in m.group(1).split("|")] if m else []
    if len(vals) != 10 or not all(v.isdigit() for v in vals):
        return None, None
    a = [int(v) for v in vals]
    items = [(x - 1) if i % 2 == 0 else (5 - x) for i, x in enumerate(a)]
    return a, sum(items) * 2.5


def secs(cell):
    m = re.search(r"(\d{2}):(\d{2})", cell)
    return int(m.group(1)) * 60 + int(m.group(2)) if m else None


def marks(code):
    t = section(read(os.path.join(BASE, code, "notes.md")), r"3\. Mốc thời gian")
    out = {}
    for row in re.findall(r"^\| (T[0-4]) \|[^|]*\|([^|]*)\|", t, re.M):
        out[row[0]] = secs(row[1])
    return out


def events(code):
    t = section(read(os.path.join(BASE, code, "notes.md")), r"5\. Nhật ký sự kiện")
    cnt = {c: 0 for c in EVENT_CODES}
    for line in t.splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 4 or cells[0].startswith("Mốc") or set(cells[0]) <= set("-"):
            continue
        for c in re.findall(r"`([A-Za-z]+\d?)`", cells[2]):
            if c in cnt:
                cnt[c] += 1
    return cnt


def fmt(x):
    if x is None:
        return "Không có"
    m, s = divmod(round(x), 60)
    return "%02d:%02d" % (m, s)


def stats(vals):
    v = [x for x in vals if x is not None]
    if not v:
        return "n = 0"
    sd = st.stdev(v) if len(v) > 1 else 0
    return "n = %d; TB %s; trung vị %s; min %s; max %s; độ lệch chuẩn %.1f giây" % (
        len(v), fmt(st.mean(v)), fmt(st.median(v)), fmt(min(v)), fmt(max(v)), sd)


def main():
    print("## SUS\n")
    print("| Mã | Câu 1 đến 10 | Điểm câu (sau quy đổi) | SUS |")
    print("|---|---|---|---|")
    scores = []
    for c in CODES:
        a, s = sus(c)
        if a is None:
            print("| %s | Không có | | Không có |" % c)
            continue
        items = [(x - 1) if i % 2 == 0 else (5 - x) for i, x in enumerate(a)]
        print("| %s | %s | %s | %.1f |" % (c, " ".join(map(str, a)), " ".join(map(str, items)), s))
        scores.append(s)
    print("\nSUS: n = %d; TB %.2f; trung vị %.2f; min %.1f; max %.1f; độ lệch chuẩn %.2f; số người >= 68: %d"
          % (len(scores), st.mean(scores), st.median(scores), min(scores), max(scores), st.stdev(scores),
             sum(1 for x in scores if x >= 68)))

    print("\n## Thời gian (giây tính từ mốc video)\n")
    print("| Mã | T0 | T1 | T2 | T3 | T4 | M1 | M2 | M3 | Toàn luồng | Tự kiểm tra |")
    print("|---|---|---|---|---|---|---|---|---|---|---|")
    per = {}
    for c in CODES:
        t = marks(c)
        d = lambda a, b: (t[b] - t[a]) if t.get(a) is not None and t.get(b) is not None else None
        r = {"M1": d("T0", "T1"), "M2": d("T1", "T2"), "M3": d("T2", "T3"), "Toàn luồng": d("T0", "T4"), "TK": d("T3", "T4")}
        per[c] = r
        print("| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |" % (
            c, *(fmt(t.get(k)) for k in ["T0", "T1", "T2", "T3", "T4"]),
            *(fmt(r[k]) for k in ["M1", "M2", "M3", "Toàn luồng", "TK"])))
    print()
    for k in ["M1", "M2", "M3", "Toàn luồng"]:
        vals = [per[c][k] for c in CODES]
        over = [c for c in CODES if per[c][k] is not None and per[c][k] > BENCH[k]]
        print("- %s (chuẩn %s): %s; vượt chuẩn: %s" % (k, "%.2f giây" % BENCH[k], stats(vals), ", ".join(over) or "không ai"))
    print("- Tự kiểm tra (T4 - T3): %s" % stats([per[c]["TK"] for c in CODES]))

    print("\n## Đếm mã sự kiện (mục 5 của notes.md; mỗi dòng nhật ký đếm một lần cho mỗi mã)\n")
    print("| Mã | " + " | ".join(EVENT_CODES) + " |")
    print("|---|" + "---|" * len(EVENT_CODES))
    tot = {k: 0 for k in EVENT_CODES}
    for c in CODES:
        e = events(c)
        for k in EVENT_CODES:
            tot[k] += e[k]
        print("| %s | %s |" % (c, " | ".join(str(e[k]) for k in EVENT_CODES)))
    print("| Tổng | %s |" % " | ".join(str(tot[k]) for k in EVENT_CODES))
    print("\nSố người có ít nhất một lần: " + "; ".join(
        "%s %d" % (k, sum(1 for c in CODES if events(c)[k] > 0)) for k in EVENT_CODES if tot[k]))


if __name__ == "__main__":
    main()
