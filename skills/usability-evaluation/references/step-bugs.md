# Bước `bugs`: Báo bug tìm được qua phiên usability

**Mục tiêu:** Mỗi bug thật tìm được qua phiên (pilot hoặc phiên thật) có một issue có ảnh, theo quy ước của nhóm. Vấn đề thiết kế **không** lên Issues; chỉ ghi ở `05_findings.md`.

**Đầu ra:** Mục Task 2 trong `bugs/bug_report.md`; issue trên repo nhóm; ảnh tái hiện trong `screenshots/` của usability (`flow_<số>_<nội dung>.png`); ảnh danh sách issue đã lọc (`bugs/screenshots/issues_list_T2[_n].png`).

Quy trình dưới đây rút từ lần làm đầu (HW03 FL-05: 2 issue, #66 medium từ pilot, #67 critical từ phiên P4). Phần tìm trùng, tạo issue bằng `gh`, chèn ảnh dùng như skill `gui-checklist` (`references/step-bugs.md` của skill đó, Pha 1 đến Pha 3).

## Chọn bug

- Chỉ là bug khi chỉ ra được **câu cụ thể của SRS** bị làm sai, hoặc người dùng bị chặn. Đối chiếu ở `05_findings.md` cột "Loại".
- Severity theo cây câu hỏi của nhóm, ghi lý do từng câu; AI đề xuất, sinh viên chốt.
- Lỗi phụ thấy khi tái hiện nhưng không thuộc bug đang báo: Ghi "Ngoài lề (không báo riêng)" trong chi tiết bug.

## Tái hiện ngoài phiên để chụp ảnh

Ảnh trong issue **không** lấy từ video phiên (có thể lộ người tham gia). Sinh viên tái hiện lại bug ngoài phiên, sau khi reset dữ liệu:

- **Bằng tay** khi lỗi đơn giản (lần đầu #66: Hai ảnh trước và sau khi bấm nút).
- **Bằng script** khi lỗi cần nhiều bước hoặc nhiều trường hợp (lần đầu #67: Script Playwright làm nhiều trường hợp sửa sản phẩm, E1 đến E8 theo bug report; mỗi trường hợp các bước tải lại trang, mở form, đổi ô, lưu, chụp hộp thoại trước khi bấm OK, chụp bảng ngay sau khi lưu, tải lại, mở lại form). Quy tắc:
  - Tìm phần tử theo chữ nhìn thấy trên trang (theo ảnh luồng); không đọc mã nguồn, không dùng DevTools, không gọi thẳng API.
  - Script **không tự kết luận** là bug; sinh viên xem ảnh và log rồi chốt.
  - Ghi ở đầu script: Chuẩn bị (reset dữ liệu, không có phiên nào đang chạy), dữ liệu bị đổi, reset lại sau khi chạy; cờ `--only=`, `--log=`, `--no-shots`.
  - Chụp toàn màn hình sau khi **phóng to cửa sổ trình duyệt của script**, để không lọt cửa sổ khác; trước khi chạy, đóng file có thông tin người tham gia ở mọi cửa sổ.
  - AI viết script; sinh viên chạy.

## Nội dung bug report (mục Task 2)

1. Đầu mục: Người báo; nguồn (hồ sơ pilot và phiên; sinh viên tái hiện ngoài phiên để chụp ảnh); môi trường; nơi để ảnh; câu "chỉ đưa lên Issues bug thật, vấn đề thiết kế ở `05_findings.md`".
2. Bảng issue: Mã `B-T2-nn`, Issue (link), Tiêu đề, Phát hiện ở (mã phiên và mốc video; ngày tái hiện, bằng tay hay script), Căn cứ (FR), Severity, IA, Ảnh. Câu cuối nêu label chung (`bug`, `platform`, `task: T2 usability`, gán cho người báo; `ia` nếu xác định được).
3. Chi tiết từng bug: Điều kiện tiên quyết; các bước tái hiện (nhiều trường hợp thì tách A, B); kết quả mong đợi (trích FR); kết quả thực tế (theo từng trường hợp, chép nguyên văn thông báo); severity kèm lý do theo cây câu hỏi; IA; ghi chú (phát hiện ở phiên nào, mốc, chỉ dùng mã người tham gia; script và log tái hiện; `Related #<số>` kèm lý do có thể cùng nguyên nhân; ngoài lề).
4. Ảnh danh sách issue đã lọc theo người báo và `task: T2 usability`.

Cập nhật cột "Loại" và mục "Bug đã báo lên Issues" của `05_findings.md` cho khớp số issue.

## Tự kiểm

- Mỗi phát hiện loại bug ở `05_findings.md` có đúng một issue; không có issue nào cho vấn đề thiết kế.
- Ảnh không có khuôn mặt, tên, liên lạc của người tham gia; `check_usability.py privacy` trên mục Task 2.
- Checklist bước `bugs` trong `lessons.md`.

**Dừng** trước mỗi lệnh đăng ra ngoài; sau khi viết bug report. Commit ví dụ `[T2][bugs] Report usability bugs`.
