"""Đóng gói bài nộp HW03 cho Moodle.

Chạy SAU commit cuối:  python tools/package.py
1. Xuất git_log.txt (git log --date=iso).
2. Gom mọi file git đang theo dõi (git ls-files) cùng git_log.txt vào một file zip,
   đặt trong thư mục gốc 23120061_HW03_AI_GUIUsability_100/.
3. Cắt zip thành các phần 19 MB (.zip.001, .zip.002, ...) trong HW03_submit/, như HW02.
   Moodle: Tối đa 20 file, mỗi file 20 MB. Ghép lại bằng 7-Zip (mở file .001) hoặc
   lệnh: copy /b name.zip.001+name.zip.002+... name.zip
Không đưa video .mp4 (bị .gitignore chặn), _NOTES.md, bugs/image_links.txt, node_modules vào bản nộp.
"""
import os
import subprocess
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
HW = os.path.dirname(HERE)
NAME = "23120061_HW03_AI_GUIUsability_100"
OUT_DIR = os.path.join(HW, "HW03_submit")
PART = 19922944  # 19 MB, giống HW02


def main():
    log = subprocess.run(["git", "log", "--date=iso"], cwd=HW, capture_output=True, check=True).stdout
    with open(os.path.join(HW, "git_log.txt"), "wb") as f:
        f.write(log)
    files = subprocess.run(["git", "ls-files", "-z"], cwd=HW, capture_output=True, check=True).stdout
    files = [p for p in files.decode("utf-8").split("\0") if p] + ["git_log.txt"]
    os.makedirs(OUT_DIR, exist_ok=True)
    for old in os.listdir(OUT_DIR):
        if old.startswith(NAME):
            os.remove(os.path.join(OUT_DIR, old))
    zpath = os.path.join(OUT_DIR, NAME + ".zip")
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
        for p in files:
            full = os.path.join(HW, p)
            if os.path.isfile(full):
                z.write(full, NAME + "/" + p)
    size = os.path.getsize(zpath)
    with open(zpath, "rb") as f:
        i = 1
        while True:
            chunk = f.read(PART)
            if not chunk:
                break
            with open(f"{zpath}.{i:03d}", "wb") as g:
                g.write(chunk)
            i += 1
    os.remove(zpath)
    print(f"{len(files)} file, zip {size / 1048576:.1f} MB, {i - 1} phần trong {OUT_DIR}")


if __name__ == "__main__":
    main()
