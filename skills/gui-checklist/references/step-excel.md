# Bước `excel`: Xuất checklist ra Excel

**Mục tiêu:** File Excel để chạy checklist trên một hoặc nhiều nền tảng, có cột kết quả, Notes, ảnh và bảng tự đếm. Nội dung lấy hoàn toàn từ `02_checklist.md`.

**Đầu ra:** File `.xlsx` trong thư mục làm việc (tên theo dự án).

## Hỏi trước khi làm

- Định dạng Excel: (a) Script của skill (`scripts/build_checklist_xlsx.py`, bố cục đã dùng ở lần làm đầu); (b) template checklist của môn; (c) skill `test-case-writing`; (d) khác. Dự án có thể đã chốt ở `WORKFLOW.md`.
- Số nền tảng cần nhóm cột kết quả (lần đầu: 3, NT1 cho lần chạy `exec`, NT2 và NT3 cho cross-platform).
- Tiêu đề và dòng thông tin sinh viên (họ tên, MSSV) ghi ở sheet Hướng dẫn.

## Cách làm với script của skill

```bash
python -I <skill>/scripts/build_checklist_xlsx.py --md <thư mục>/02_checklist.md --out <thư mục>/<tên>.xlsx \
    --title "<Mã bài> Task 1: GUI Checklist <hệ thống> (<danh sách màn hình>)" \
    --student "<Họ tên> (<MSSV>)" --platforms 3
```

Script đọc từ `02_checklist.md`:

| Phần trong file .md | Vào Excel |
|---|---|
| Mọi bảng có ô đầu `CL-nn` (kể cả bảng mục sinh viên thêm) | Sheet "Checklist", sắp theo số `CL`; cột "Vì sao AI bỏ sót" lấy từ bảng có cột này |
| Gạch đầu dòng trong mục có tiêu đề chứa "Quy ước" | Sheet "Hướng dẫn", phần Quy ước |
| Bảng `ĐK-nn` | Sheet "Hướng dẫn", phần Điều kiện chuẩn bị |
| Bảng trong mục có tiêu đề chứa "Ma trận"; cột có chữ "(ghi khi chạy)"; dòng "Mong đợi chung" | Sheet ma trận riêng, cột ghi khi chạy lặp cho từng nền tảng; dòng mong đợi chung thành ghi chú |

Sheet tạo ra:

- **Checklist:** Cột nội dung (Mã đến "Vì sao AI bỏ sót"), rồi mỗi nền tảng một nhóm Kết quả, Notes, Ảnh (ô vàng để điền). Cột Kết quả có danh sách chọn `Passed`, `Failed`, `N/A`, `Không chạy được` và tô màu theo giá trị. Cố định hàng tiêu đề và hai cột đầu, có bộ lọc.
- **Hướng dẫn:** Cách điền, ý nghĩa kết quả, ví dụ cách ghi (ghi rõ không phải kết quả thật), quy ước, điều kiện chuẩn bị.
- **Môi trường:** Mỗi nền tảng một cột (tên ngắn, trình duyệt, OS, thiết bị, độ phân giải, zoom, scale, ngày giờ, người chạy). Tên ngắn tự hiện ở tiêu đề cột của các sheet khác.
- **Ma trận** (nếu có).
- **Tổng hợp:** Công thức đếm số mục theo IA và theo nguồn, kết quả theo nền tảng, Passed / Failed theo IA và nền tảng.

## Nguyên tắc

- Excel là bản trình bày. Muốn sửa nội dung thì sửa `02_checklist.md` rồi chạy lại script; không sửa ô nội dung trong Excel.
- Script bỏ định dạng Markdown trong ô (dấu `` ` ``, `**`).
- Chạy lại script sau khi đã có kết quả sẽ tạo file mới **không có kết quả**. Nếu đã bắt đầu chạy, hỏi sinh viên trước; không ghi đè file đang có kết quả.

## Tự kiểm

- Thông báo cuối của script: Số mục khớp với mục tổng hợp của `02_checklist.md`, đủ 4 IA, số điều kiện và số ma trận đúng.
- Mở lại bằng `openpyxl` (hoặc nhờ sinh viên mở) kiểm vài dòng đầu, cuối và một dòng mục sinh viên thêm.

**Dừng**, đưa commit message (ví dụ `[T1][excel] Build Excel checklist`).

## Định dạng khác

Chọn template của môn hoặc `test-case-writing`: Đọc hướng dẫn của template hoặc skill đó; chỉ chuyển hình thức, không viết lại nội dung mục. Cột nào template không có (Nguồn, "Vì sao AI bỏ sót") thì hỏi sinh viên đặt ở đâu.
