# T3 android-chrome: Nháp kết quả các mục "Chạy tay" của N3 (bản AI)

- Bước: `[T3][android-chrome]`, sau lần chạy `checklist/tools/n3_run_log_2.txt` (10/11/2026, 16:20 đến 16:29)
- Thời gian tạo: 2026-11-10 16:44
- Ghi chú: Bản AI nguyên văn, không sửa. Kết quả dưới đây là **đề xuất** do AI xem ảnh trong `cross_platform/screenshots/android-chrome/` và đọc log của script; sinh viên review rồi mới chép vào cột NT3 của Excel. Mục nào ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận, theo cách ghi của N1.

---

## 1. Mục sinh viên đã tự kiểm hoặc xác nhận (không phải đề xuất của AI)

| Mã | Kết quả | Ghi chú |
|---|---|---|
| CL-48 | Passed | Script bị lỗi (nhãn chặn chỗ bấm, xem log); SV kiểm tay trên điện thoại: Ba ô Họ Tên, Số điện thoại, Địa chỉ giao hàng gõ được |
| CL-68 | Failed (giữ kết quả script) | SV xác nhận đã thêm 2 sản phẩm khác nhau vào giỏ trước khi bấm Enter; navbar không có badge. Ảnh `CL-68.png` |
| CL-69 | Failed (giữ kết quả script) | SV xác nhận đã chuẩn bị giỏ 1 sản phẩm, số lượng 2; navbar không có badge. Ảnh `CL-69.png` |
| CL-33 | (SV đang làm) | Phóng to 200% bằng Chrome > Cài đặt > Hỗ trợ tiếp cận; SV chụp ảnh bổ sung |
| CL-34 | (SV đang làm) | Họ Tên dài trên navbar; SV chụp ảnh bổ sung |

## 2. Đề xuất cho các mục "Chạy tay" xem được từ ảnh

| Mã | Đề xuất | Notes (AI xem ảnh) | Ảnh căn cứ | Cần SV làm thêm |
|---|---|---|---|---|
| CL-01 | Failed | W-03: Nhãn ô thứ nhất là "Username" (tiếng Anh). Placeholder ở W-06 ("VD: 0912345678", "Nhập địa chỉ của bạn") và các nhãn còn lại là tiếng Việt | `overview_login_1.png` | Chép một bản ảnh thành `CL-01.png` |
| CL-02 | Failed | W-03: Nút gửi ghi "Sign In" (tiếng Anh). Các nút và link khác ("Quên mật khẩu?", "Đăng ký ngay", "Đăng Ký", "Đăng nhập", "Cập nhật", "Hủy đơn", "Thoát") là tiếng Việt | `overview_login_1.png` | Chép thành `CL-02.png` |
| CL-03 | Passed | Tiêu đề trang và khối: "Đăng Ký" (W-03), "Đăng Ký Tài Khoản" (W-04), "Hồ sơ của bạn", "Lịch sử đơn hàng" (W-06); tiêu đề cột: Mã ĐH, Ngày đặt, Tổng tiền, Trạng thái, Thao tác. Đều tiếng Việt | `overview_login_1.png`, `overview_register_1.png`, `overview_profile_1.png`, `overview_profile_2.png` | |
| CL-04 | Passed | Navbar chưa đăng nhập: Giỏ hàng, Đăng nhập, Đăng ký; đã đăng nhập: Giỏ hàng, "Chào, Test User", Thoát. Footer: Phần nhìn thấy "© 2026 EShop SUT. Dành ch..." là tiếng Việt, phần còn lại bị cửa sổ nổi Samsung Notes che. "EShop" không xét (GĐ-05) | `overview_login_2.png`, `overview_register_2.png`, `CL-79.png` | Xem lại phần footer bị che trên điện thoại nếu muốn chắc chắn |
| CL-05 | Failed | W-06: Khi hủy đơn bị từ chối (CL-88, 2 tab), hộp thoại hiện "Lỗi: Cannot cancel this order." (tiếng Anh, thông báo kỹ thuật). Các thông báo khác script bắt được đều tiếng Việt: "Mật khẩu quá yếu!...", "Đăng nhập thất bại. Vui lòng kiểm tra lại.", "Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.", "Cập nhật thành công!", "Lỗi cập nhật", "Hủy đơn thành công!", "Vui lòng đăng nhập", "Bạn chưa có đơn hàng nào." | **Chưa có ảnh**: Phần 2 tab của CL-88 Passed nên script không chụp hộp thoại này | Chụp bổ sung: Mở `/profile` ở 2 tab, hủy một đơn ở tab B, quay lại tab A bấm "Hủy đơn" của cùng đơn, chụp khi hộp thoại "Lỗi: Cannot cancel this order." đang hiện |
| CL-06 | Failed | Tiêu đề tab ở W-03, W-04, W-06 (cả hai trạng thái) đều là "frontend-web" (script đọc `document.title`). Chrome trên điện thoại không hiện tiêu đề ở thanh trên nên ảnh tổng quan không thấy | **Chưa có ảnh thấy tiêu đề** | Chụp bổ sung màn hình danh sách tab của Chrome (nút số tab cạnh thanh địa chỉ), nơi hiện tiêu đề "frontend-web". Ảnh `CL-20.png` (Failed cùng nguyên nhân) cũng nên kiểm lại xem có thấy tiêu đề không |
| CL-07 | Passed | 5 chữ trạng thái tiếng Việt, khác nhau: Chờ xác nhận, Đã xác nhận, Đang giao, Đã giao, Đã hủy. Trong ảnh thấy rõ 4 chữ; dòng #1 ("Đã giao") bị cửa sổ nổi che, chữ lấy từ log của script | `overview_profile_2.png`, `CL-11.png` | |
| CL-08 | Failed | W-04: Nút "Đăng Ký" nền đỏ; "Sign In" (W-03) và "Cập nhật" (W-06) nền xanh dương | `overview_register_1.png` | Chép thành `CL-08.png` |
| CL-09 | Passed | Nút "Hủy đơn" và nút "Thoát" đều nền đỏ | `overview_profile_2.png`, `CL-79.png` | |
| CL-25 | Failed | W-03: Tiêu đề trang ghi "Đăng Ký", navbar ghi "Đăng nhập", nút ghi "Sign In": Cùng hành động đăng nhập dùng 3 cách gọi. Link trên W-04 ghi "Đăng nhập" | `overview_login_1.png` | Chép thành `CL-25.png` |
| CL-26 | Failed | W-04 "Đăng Ký Tài Khoản" và W-03 "Đăng Ký" viết hoa chữ đầu mọi từ; W-06 "Hồ sơ của bạn", "Lịch sử đơn hàng" chỉ viết hoa chữ đầu | `overview_register_1.png`, `overview_profile_2.png` | Chép thành `CL-26_1.png`, `CL-26_2.png` |
| CL-27 | Failed | Nút "Đăng Ký" (W-04) viết hoa mọi từ; navbar "Đăng ký", "Đăng nhập", "Giỏ hàng" chỉ viết hoa chữ đầu | `overview_register_1.png` | Chép thành `CL-27.png` |
| CL-31 | Passed | Nhãn và ô nhập trong mỗi form thẳng cạnh trái (W-03, W-04, W-06) | `overview_login_1.png`, `overview_register_1.png`, `CL-91.png` | |
| CL-35 | Passed | Không thấy lỗi chính tả hay sai dấu trong các ảnh đã chụp (chỉ xét chữ có trong ảnh) | Các ảnh tổng quan | |
| CL-56 | Passed | W-04: Thông báo mật khẩu yếu nêu đủ điều kiện ("tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt"); W-06: Hộp thoại nêu "nhập đúng 9-10 chữ số" (điều kiện này lệch UI-R14, đã ghi ở CL-101) | `CL-101_1.png`; thông báo W-04 có trong `CL-57.png`, `CL-58.png` | |
| CL-66 | Failed | W-03: "Đăng nhập" trên navbar trông giống hệt khi ở `/profile` (chưa đăng nhập); W-04: "Đăng ký" cũng vậy; W-06 (đăng nhập): Lời chào vàng giống hệt ở `/login` khi đã đăng nhập. Không mục nào được highlight | `overview_login_1.png`, `overview_register_1.png`, `CL-78.png`, `CL-79.png`, `overview_profile_1.png` | Chép một ảnh thành `CL-66.png` (hoặc `_1`, `_2` để so sánh) |
| CL-67 | Passed | W-06 chưa đăng nhập (`CL-78.png`) và W-03 đã đăng nhập (`CL-79.png`): Mọi mục navbar trông như ở trang khác, không có mục nào bị highlight sai | `CL-78.png`, `CL-79.png` | W-04 khi đã đăng nhập chưa có ảnh: Xem tay trên điện thoại |
| CL-84 | Passed | 5 màu nền nhãn khác nhau: Chờ xác nhận vàng nhạt, Đã xác nhận chàm (tím nhạt), Đang giao xanh dương nhạt, Đã giao xanh lá nhạt (dòng #1 bị cửa sổ nổi che, chỉ thấy mép màu xanh lá), Đã hủy hồng (đỏ nhạt) | `overview_profile_2.png` | Kiểm lại màu "Đã giao" trên điện thoại |
| CL-92 | Passed | "Bạn chưa có đơn hàng nào." là câu đầy đủ, không có từ kỹ thuật | `CL-91.png` | |
| CL-105 | Failed | Mất kết nối: W-03 báo "Đăng nhập thất bại. Vui lòng kiểm tra lại."; W-06 hộp thoại "Lỗi cập nhật". Không nói là mất kết nối / thử lại sau. W-04 không chạy được (form đăng ký bị chặn vì mật khẩu) | **Chưa có ảnh**: Script ghi "Chạy tay" nên không chụp | Chụp bổ sung: Bật chế độ máy bay (hoặc tắt server backend), bấm "Sign In" ở W-03 và "Cập nhật" ở W-06, chụp khi thông báo đang hiện (`CL-105_1.png`, `CL-105_2.png`) |

## 3. Ma trận trạng thái (sheet "Ma trận trạng thái", cột NT3)

| Mã trạng thái | Chữ hiển thị | Màu nền nhãn | Nút "Hủy đơn" quan sát |
|---|---|---|---|
| pending | Chờ xác nhận | Vàng nhạt (chữ nâu) | Có, bấm được |
| confirmed | Đã xác nhận | Chàm / tím nhạt (chữ chàm) | Có, bấm được |
| shipping | Đang giao | Xanh dương nhạt | Có, bấm được (CL-87 Failed) |
| delivered | Đã giao | Xanh lá nhạt (chỉ thấy mép, bị cửa sổ nổi che) | Không có |
| canceled | Đã hủy | Hồng / đỏ nhạt (chữ đỏ sẫm) | Không có |

## 4. Tổng hợp nếu SV chấp nhận các đề xuất ở mục 2

| Nhóm | Số mục |
|---|---|
| Đề xuất Failed | 10 (CL-01, 02, 05, 06, 08, 25, 26, 27, 66, 105) |
| Đề xuất Passed | 10 (CL-03, 04, 07, 09, 31, 35, 56, 67, 84, 92) |
| Cần ảnh bổ sung trước khi ghi Failed | CL-05, CL-06, CL-105 (chưa có ảnh nào thấy lỗi) |
| Cần chép ảnh tổng quan thành `CL-xx.png` | CL-01, 02, 08, 25, 26, 27, 66 |

Cộng với kết quả script (40 Failed, 33 Passed, 1 Passed một phần), CL-48 Passed và CL-33, CL-34 SV đang làm: N3 dự kiến có 50 Failed, 44 Passed (gồm 1 mục Passed một phần), 8 N/A, 7 Không chạy được, 2 mục chờ (CL-33, CL-34), tổng 112.
