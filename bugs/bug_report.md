# Bug report: Task 1 (GUI Checklist), nền tảng N1 Chrome trên Windows

- Người báo: 23120061, Nguyễn Thị Ánh Ngọc
- Repo Issues của nhóm: https://github.com/angquoc/software-testing-2026-HW03-group
- Nguồn: Các mục Failed của `checklist/HW03_T1_GUI_Checklist.xlsx` (cột NT1), lần chạy `exec` ngày 10/11/2026
- Môi trường: Chrome 156.0.8078.81, Windows 11 Home Single Language 26H2 (build 26300.9818), màn hình 2560 x 1440, cửa sổ 1366 x 768
- Ảnh: `checklist/screenshots/`; mỗi issue có ảnh trong mục "Ảnh chụp", tên file ghi ngay trên ảnh

## 1. Cách chọn bug

- Mục Failed có căn cứ SRS (UI-Rxx): Báo hết.
- Mục Failed theo khuyến nghị (WCAG, Nielsen, slide): Chỉ báo khi ảnh đã có cho thấy rõ lỗi; mục phải chụp thêm mới thấy lỗi thì không báo (mục 4).
- Các mục cùng một lỗi gốc được gộp vào một issue.
- Lỗi ở thành phần dùng chung (navbar) đã có issue của người khác: Không tạo issue mới, bình luận vào issue đó (mục 3).
- Severity chọn theo câu hỏi ở README mục 4.3 của repo nhóm.

## 2. Issue đã tạo

| Mã | Issue | Tiêu đề | Mục CL | Severity | IA | Liên quan |
|---|---|---|---|---|---|---|
| B-01 | [#33](https://github.com/angquoc/software-testing-2026-HW03-group/issues/33) | [W-04] Đăng ký từ chối mật khẩu hợp lệ "Abcdef1!" với thông báo mật khẩu quá yếu | CL-65 | critical | IA-02 |  |
| B-02 | [#34](https://github.com/angquoc/software-testing-2026-HW03-group/issues/34) | [W-03] Ô Mật khẩu ở trang đăng nhập hiện rõ mật khẩu (type="text") | CL-46 | high | IA-02 |  |
| B-03 | [#35](https://github.com/angquoc/software-testing-2026-HW03-group/issues/35) | [W-06] Đơn "Đang giao" vẫn có nút "Hủy đơn" và bị hủy khi bấm | CL-87, CL-88 | high | IA-04 |  |
| B-04 | [#36](https://github.com/angquoc/software-testing-2026-HW03-group/issues/36) | [W-06] Số điện thoại hợp lệ 0912345678 bị từ chối khi cập nhật hồ sơ | CL-101, CL-110, CL-52 | medium | IA-02 |  |
| B-05 | [#37](https://github.com/angquoc/software-testing-2026-HW03-group/issues/37) | [W-03] Sau 3 lần đăng nhập sai không có thông báo tài khoản bị tạm khóa | CL-89 | medium | IA-04 |  |
| B-06 | [#38](https://github.com/angquoc/software-testing-2026-HW03-group/issues/38) | [W-04] Form đăng ký không có ô "Xác nhận mật khẩu" | CL-37 | medium | IA-02 |  |
| B-07 | [#39](https://github.com/angquoc/software-testing-2026-HW03-group/issues/39) | [W-03] Form đăng nhập dùng chữ tiếng Anh: Nhãn "Username", nút "Sign In" | CL-01, CL-02, CL-42 | low | IA-01, IA-02 |  |
| B-08 | [#40](https://github.com/angquoc/software-testing-2026-HW03-group/issues/40) | [W-03, W-04, W-06] Ô Email dùng type="text", không chặn định dạng email sai bằng HTML5 | CL-44, CL-45 | medium | IA-02 |  |
| B-09 | [#41](https://github.com/angquoc/software-testing-2026-HW03-group/issues/41) | [W-03] Trang đăng nhập có tiêu đề "Đăng Ký" | CL-14, CL-25 | medium | IA-01 |  |
| B-10 | [#42](https://github.com/angquoc/software-testing-2026-HW03-group/issues/42) | [W-03, W-04, W-06] Không có thẻ <h1> ở trang đăng nhập, đăng ký và hồ sơ | CL-13 | low | IA-01 | Related #19 |
| B-11 | [#43](https://github.com/angquoc/software-testing-2026-HW03-group/issues/43) | [W-03] Lần bấm Tab đầu tiên ở trang đăng nhập nhảy vào nút "Sign In" trước navbar và các ô nhập | CL-15, CL-16 | medium | IA-01 |  |
| B-12 | [#44](https://github.com/angquoc/software-testing-2026-HW03-group/issues/44) | [W-06] Hộp thoại lỗi hủy đơn hiện tiếng Anh "Lỗi: Cannot cancel this order." | CL-05 | low | IA-01 |  |
| B-13 | [#45](https://github.com/angquoc/software-testing-2026-HW03-group/issues/45) | [W-03, W-04, W-06] Tiêu đề tab trình duyệt là "frontend-web" ở mọi trang | CL-06, CL-20 | low | IA-01 |  |
| B-14 | [#46](https://github.com/angquoc/software-testing-2026-HW03-group/issues/46) | [W-04] Nút "Đăng Ký" nền đỏ thay vì xanh dương | CL-08 | low | IA-01 | Related #27 |
| B-15 | [#47](https://github.com/angquoc/software-testing-2026-HW03-group/issues/47) | [W-03, W-04] Nhãn trường bắt buộc không có dấu * | CL-43 | low | IA-02 | Related #28 |
| B-16 | [#48](https://github.com/angquoc/software-testing-2026-HW03-group/issues/48) | [W-03] Thông báo lỗi đăng nhập nằm dưới nút "Sign In" | CL-47 | low | IA-02, IA-04 | Related #26 |
| B-17 | [#49](https://github.com/angquoc/software-testing-2026-HW03-group/issues/49) | [W-03, W-04, W-06] Navbar không highlight mục của trang đang mở | CL-66 | low | IA-03 |  |
| B-18 | [#50](https://github.com/angquoc/software-testing-2026-HW03-group/issues/50) | [W-06] Lịch sử đơn trống không có icon và không gợi ý bước tiếp theo | CL-91, CL-93 | low | IA-04 | Related #15 |
| B-19 | [#51](https://github.com/angquoc/software-testing-2026-HW03-group/issues/51) | [W-03, W-04, W-06] Thẻ <html> khai báo lang="en" cho giao diện tiếng Việt | CL-19 | low | IA-01 |  |
| B-20 | [#52](https://github.com/angquoc/software-testing-2026-HW03-group/issues/52) | [W-03, W-04, W-06] Độ tương phản chữ dưới 4.5:1 ở link, dòng hướng dẫn mật khẩu, nút đỏ và lời chào | CL-23 | low | IA-01 | Related #23 |
| B-21 | [#53](https://github.com/angquoc/software-testing-2026-HW03-group/issues/53) | [W-06] Ngày đặt hàng hiển thị theo tháng/ngày/năm | CL-24 | low | IA-01 |  |
| B-22 | [#54](https://github.com/angquoc/software-testing-2026-HW03-group/issues/54) | [W-03, W-04, W-06] Kiểu viết hoa của tiêu đề, nút và navbar không nhất quán | CL-26, CL-27 | low | IA-01 |  |
| B-23 | [#55](https://github.com/angquoc/software-testing-2026-HW03-group/issues/55) | [W-03, W-04, W-06] Nhãn không gắn với ô nhập, ô không có tên đọc được | CL-54 | low | IA-02 | Related #24 |
| B-24 | [#56](https://github.com/angquoc/software-testing-2026-HW03-group/issues/56) | [W-04, W-06] Ô bị lỗi trông giống hệt các ô khác | CL-58 | low | IA-02 |  |
| B-25 | [#57](https://github.com/angquoc/software-testing-2026-HW03-group/issues/57) | [W-03, W-04, W-06] Ô Email, Mật khẩu, Số điện thoại không có thuộc tính autocomplete | CL-62 | low | IA-02 |  |
| B-26 | [#58](https://github.com/angquoc/software-testing-2026-HW03-group/issues/58) | [W-06] Lời chào "Chào, <Họ Tên>" là link tới hồ sơ nhưng không cho biết dẫn tới đâu | CL-76 | low | IA-03 |  |
| B-27 | [#59](https://github.com/angquoc/software-testing-2026-HW03-group/issues/59) | [W-06] Mở /profile khi chưa đăng nhập chỉ hiện "Vui lòng đăng nhập", không có đường tới trang đăng nhập | CL-78 | medium | IA-03 |  |
| B-28 | [#60](https://github.com/angquoc/software-testing-2026-HW03-group/issues/60) | [W-03, W-04] Đã đăng nhập mà mở /login, /register vẫn hiện form như chưa đăng nhập | CL-79 | medium | IA-03 |  |
| B-29 | [#61](https://github.com/angquoc/software-testing-2026-HW03-group/issues/61) | [W-06] Đổi Họ Tên xong, lời chào trên navbar vẫn hiện tên cũ khi chưa tải lại trang | CL-102 | low | IA-04 | Related #36 |
| B-30 | [#62](https://github.com/angquoc/software-testing-2026-HW03-group/issues/62) | [W-03, W-06] Mất kết nối chỉ báo "Đăng nhập thất bại" / "Lỗi cập nhật", không nói là mất kết nối | CL-105 | low | IA-04 |  |
| B-31 | [#63](https://github.com/angquoc/software-testing-2026-HW03-group/issues/63) | [W-03, W-04] Thông báo lỗi của form không nằm trong role="alert" hay aria-live | CL-106 | low | IA-04 | Related #25 |
| B-32 | [#64](https://github.com/angquoc/software-testing-2026-HW03-group/issues/64) | [W-06] Khổ màn hình 360 px: Trang hồ sơ có thanh cuộn ngang, cột "Thao tác" bị khuất | CL-109 | medium | IA-01 |  |
| B-33 | [#65](https://github.com/angquoc/software-testing-2026-HW03-group/issues/65) | [W-03, W-04] Ô mật khẩu không có nút hiện / ẩn mật khẩu | CL-111 | low | IA-02 |  |

Mọi issue có label `bug`, `platform: web`, `task: T1 checklist`, được gán cho chính người báo.

## 3. Bình luận vào issue đã có (thành phần dùng chung)

| Issue | Mục CL | Nội dung | Trạng thái |
|---|---|---|---|
| Related #18 (Link "Giỏ hàng" không có badge số lượng) | CL-68, CL-69 | Lỗi cũng xuất hiện ở navbar của W-03, W-04, W-06 khi đã đăng nhập; ảnh CL-68_chrome_1, CL-68_chrome_2, CL-69_chrome | Đã bình luận: [#18](https://github.com/angquoc/software-testing-2026-HW03-group/issues/18#issuecomment-6762778316) |
| Related #29 (Nút đăng xuất ghi "Thoát") | CL-70 | Lỗi cũng xuất hiện ở navbar của W-03, W-04, W-06; ảnh CL-70_chrome | Đã bình luận: [#29](https://github.com/angquoc/software-testing-2026-HW03-group/issues/29#issuecomment-6762778772) |

## 4. Mục Failed không báo lên Issues

| Mục CL | Lý do |
|---|---|
| CL-57 | Ảnh chưa thấy được focus nằm ở nút gửi sau khi báo lỗi |
| CL-74, CL-107 | Lỗi chỉ thấy khi đang rê chuột; ảnh không có trạng thái này |
| CL-94, CL-96 | Lỗi chỉ thấy lúc đang tải / đang chờ khi mạng chậm; ảnh không có trạng thái này |
| CL-97 | Ảnh chỉ thấy đơn đã bị hủy, không chứng minh được là không có hộp xác nhận |
| CL-108 | Ảnh không thấy bước xóa dữ liệu site |
| CL-112 | Ảnh không thấy tab Network với 3 request |

Các mục CL-20, CL-25, CL-52, CL-101, CL-110 không có issue riêng vì đã gộp vào issue của lỗi gốc (xem cột Mục CL ở mục 2).

## 5. Ảnh danh sách issue

⏳ Sau khi chèn ảnh, chụp trang Issues đã lọc `author:angquoc label:"task: T1 checklist"`, đủ #33 đến #65, lưu ở `bugs/screenshots/issues_list_T1_<số>.png` (WORKFLOW mục 5).
