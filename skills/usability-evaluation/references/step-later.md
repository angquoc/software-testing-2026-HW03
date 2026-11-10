# Các bước sau `pilot`: Khung, bổ sung sau

Các bước dưới đây **chưa làm xong** ở lần làm đầu, nên skill chưa có quy trình đã kiểm chứng. Phần dưới chỉ là khung: Ràng buộc đã chốt từ trước (ở `rules.md` và quy trình của dự án) và các quyết định còn mở. Không tự điền nội dung cho các quyết định mở; khi sinh viên làm tới bước nào, hỏi và ghi lại, rồi cập nhật file này sau khi làm thật.

Khi được gọi ở các bước này: Đọc quy trình của dự án, làm theo quy trình đó, báo cho sinh viên rằng skill chưa có hướng dẫn đã kiểm chứng cho bước này.

Ràng buộc chung đã có (không phải quy trình mới):

- Danh sách người tham gia, ghi chú quan sát, thời gian đo, câu trả lời thang đo và câu hỏi mở, ảnh chụp là của **người thật**; AI không tạo, không bịa (`rules.md` mục 3).
- AI không đọc file danh sách người tham gia, video, ghi âm (`rules.md` mục 1, 2).
- AI chỉ được đọc dữ liệu đã ẩn danh (mã `P1` đến `Pn`), khi dự án cho phép.
- Severity của từng phát hiện do sinh viên chốt; AI chỉ được đề xuất (nếu dự án cho phép).

---

## `participants`: Bảng người tham gia

**Trạng thái:** Bổ sung sau. Việc của sinh viên, không đưa vào AI.

Quyết định mở:

- ⏳ AI có đưa mẫu bảng trống không, và mẫu gồm những cột nào. (Lần làm đầu có một mẫu do AI soạn trong `ai_raw/`, nhưng bước này chưa xong nên chưa đưa vào skill.)

## `P1` đến `Pn`: Từng phiên

**Trạng thái:** Bổ sung sau.

Quyết định mở:

- ⏳ AI có hỗ trợ gì sau phiên không (ví dụ kiểm định dạng hồ sơ phiên, kiểm riêng tư), và được đọc file nào.
- ⏳ Cấu trúc hồ sơ mỗi phiên ngoài mẫu phiếu ghi chú ở `instruments`.

## `score`: Tính điểm và số liệu hiệu suất

**Trạng thái:** Bổ sung sau.

Quyết định mở:

- ⏳ Tính điểm thang đo bằng script hay công thức bảng tính; có đưa script vào skill không.
- ⏳ Cách tổng hợp số liệu hiệu suất và cách đánh dấu phiên từ xa.

## `analysis`: Gom phát hiện

**Trạng thái:** Bổ sung sau.

Quyết định mở:

- ⏳ Thang severity cho phát hiện usability (lần làm đầu để mở tới bước này).
- ⏳ Cách gom pain point, cách tách bug khỏi vấn đề thiết kế, cách tính mức ưu tiên.
- ⏳ AI được đề xuất tới đâu.

## `bugs`: Báo bug

**Trạng thái:** Bổ sung sau.

Quyết định mở:

- ⏳ AI có soạn nội dung issue không, theo mẫu nào; cách kiểm issue trùng.
