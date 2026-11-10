# Bước `participants`: Danh sách người tham gia

**Mục tiêu:** Danh sách người tham gia thật, đạt tiêu chí của test plan, có liên lạc kiểm chứng được (đã che), có bằng chứng đồng ý. Đây là dữ liệu của **người thật**: Sinh viên lập và giữ.

**Đầu ra:** File danh sách người tham gia (lần đầu: `usability/participants.md`). AI **không đọc** file này và không đưa nội dung của nó vào bất kỳ file nào khác.

## Việc của sinh viên

- Tuyển đủ số người đề yêu cầu cộng một người pilot, theo tiêu chí bắt buộc ở test plan mục 4.
- Mỗi người một mã (`P1` đến `Pn`, `PL` cho pilot). Mọi file khác chỉ dùng mã.
- Liên lạc che 4 số giữa (ví dụ `091****678`), theo yêu cầu của đề.
- Ghi cột đồng ý theo tin nhắn xin đồng ý (I2.1 của bộ công cụ): Ngày nhắn, kênh, đồng ý từng ý (quay màn hình, ghi âm, được gọi xác minh). Ảnh chụp tin nhắn lưu ngoài repo.

## Việc AI được làm

- Đưa **mẫu bảng trống** khi sinh viên yêu cầu, cột lấy từ tiêu chí ở test plan, yêu cầu liên lạc của đề và cột đồng ý của I2.1. Không điền dòng nào.
- Nhắc các điểm của quy trình: Mỗi người có mã trước khi chạy phiên; file không commit lên repo nhóm; khi cần, liệt kê thư mục để biết file đã có, nhưng không mở.

Không có bản AI và bản review cho bước này. Commit do sinh viên quyết định theo quy trình của dự án (ví dụ `[T2][participants] Add participant list`).
