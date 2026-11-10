# T1 ai-draft: Checklist IA-0<n> <Tên IA>

<!-- Đầu file theo ai_raw_header.md -->

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-0<n> ở mục tổng hợp (<Màn hình 1>: UI-R..; <Màn hình 2>: UI-R..), mục khuyến nghị NR-.., quyết định CH-01 đến CH-.., giả định GĐ-01 đến GĐ-...
- `00_survey.md` và ảnh: Chỉ dùng để biết màn hình có những thành phần nào; **không** dùng để đoán kết quả.
- Thông tin dữ liệu sinh viên cung cấp: <tài khoản, cách tạo dữ liệu>.
- Nguồn ngoài SRS: <slide, template đã đọc>.

Quy ước: <File IA-01 ghi đầy đủ; file IA-02 đến IA-04 ghi "Giống bản nháp IA-01" và chỉ thêm điểm riêng>

- Mã mục: `AI-0<n>-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục; cột "Màn hình" liệt kê các màn hình và trạng thái áp dụng.
- Cột "Oracle": Mã `UI-Rnn` khi căn cứ là SRS; mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ. DevTools và công cụ chỉ dùng ở bước `exec`.

---

## 2. Điều kiện chuẩn bị khi chạy

<!-- Đánh số ĐK liên tục qua 4 file; ĐK đã có ở file trước thì dẫn mã -->

| Mã | Điều kiện | Dùng cho |
|---|---|---|

---

## 3. Bảng checklist IA-0<n>

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|

---

## 4. Ma trận <tên> (nếu có, dùng cho AI-0<n>-..)

| <Khóa> | <Cột mong đợi> | <Cột> (ghi khi chạy) | Oracle |
|---|---|---|---|
| Mong đợi chung | <mong đợi áp cho cả bảng> | | |

---

## 5. Truy vết oracle IA-0<n>

| Oracle | Mục |
|---|---|
| Ngoài SRS (khuyến nghị) | |

Tổng: <N> mục (<a> căn cứ SRS, <b> khuyến nghị).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|

---

## 7. Câu hỏi mở cho bước `review`

<!-- Đánh số CHD liên tục qua 4 file -->

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CHD-<nn> | | (a) ...; (b) ... | AI-0<n>-.. |
