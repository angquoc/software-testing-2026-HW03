# T1 oracle: Yêu cầu giao diện trích từ SRS

<!-- Đầu file theo ai_raw_header.md (bản AI) hoặc rules.md mục 6 (bản review) -->

---

## 1. Phạm vi và cách đọc

Nguồn trích: `<đường dẫn SRS>` (<phiên bản, ngày cập nhật>). Màn hình trong phạm vi:

| Mã | Màn hình | URL |
|---|---|---|

Cách trích:

- Mỗi gạch đầu dòng của SRS là **một** yêu cầu, giữ **nguyên văn** (kể cả chữ in đậm, ký hiệu code, dấu câu của SRS). Một gạch đầu dòng nhiều ý vẫn giữ một mã; bước `ai-draft` tách thành nhiều mục.
- Lấy: <mục giao diện chung của SRS>, các FR gắn trực tiếp với màn hình đã chọn, và các ý giao diện ở FR khác có thể bị hiểu là áp dụng (để ghi rõ vì sao không áp dụng).
- Cột "Áp dụng" nhận một trong bốn giá trị: `Áp dụng`, `Áp dụng một phần` (ghi rõ phần nào), `Không áp dụng` (ghi lý do), `⏳ SV quyết định`.
- IA theo <ánh xạ của dự án>. Với ý nằm ngoài mục giao diện chung, IA là đề xuất của AI dựa trên nội dung ý.
- Bảng này chỉ trích yêu cầu và xét phạm vi áp dụng; **không** đánh giá giao diện hiện tại. Survey chỉ được dùng để xét áp dụng.

---

## 2. Bảng yêu cầu

### 2.1 <FR-xx: Tên>

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R01 | | | | | |

<!-- Lặp cho từng FR. Cuối mục 2: -->

### 2.<n> Các FR không trích

| FR | Lý do |
|---|---|

---

## 3. Tổng hợp theo IA và màn hình

Chỉ gồm các mã `Áp dụng` và `Áp dụng một phần`. Đây là đầu vào cho bước `ai-draft`.

| IA | <Màn hình 1> | <Màn hình 2> | <Màn hình 3> |
|---|---|---|---|
| IA-01 | | | |
| IA-02 | | | |
| IA-03 | | | |
| IA-04 | | | |

Số lượng: <N> mã; <a> `Áp dụng`, <b> `Áp dụng một phần`, <c> `Không áp dụng`, <d> `⏳ SV quyết định` (đếm bằng `check_checklist.py oracle`). Các cặp trùng ý: <liệt kê>, mỗi cặp sinh **một** mục checklist.

---

## 4. Câu hỏi mở và giả định

### 4.1 Câu hỏi mở (⏳ SV quyết định)

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CH-01 | | (a) ...; (b) ... | UI-Rxx |

<!-- Bản review: Thêm cột "Quyết định của SV" và "Ảnh hưởng"; nếu cần vòng hai, thêm mục 4.3 "Điểm chốt ở vòng hai" -->

### 4.2 Giả định của AI

| Mã | Giả định | Liên quan |
|---|---|---|
| GĐ-01 | | |

---

## 5. Điểm ngoài SRS

### 5.1 Điểm thấy ở `00_survey.md` mà SRS không có yêu cầu

Nếu muốn đưa vào checklist thì oracle phải là nguồn ngoài SRS và ghi là **khuyến nghị**. Danh sách chỉ để không bỏ sót, không phải kết luận đúng hay sai.

| # | Màn hình | Điểm quan sát được | Ghi chú |
|---|---|---|---|

<!-- Bản review thêm: -->

### 5.2 Mục kiểm theo nguồn ngoài SRS sinh viên đã chốt

| Mã | Nội dung | Màn hình | IA | Nguồn đề xuất | Từ |
|---|---|---|---|---|---|
| NR-01 | | | | | CH-xx |

---

## 6. Thay đổi so với bản AI

<!-- Bản AI để trống. Bản review theo changes_table.md -->
