# T1 results: Kết quả chạy checklist trên nền tảng N1

Bước: `[T1][exec]`, `[T1][bugs]`
Nguồn số liệu: Cột NT1 của [`HW03_T1_GUI_Checklist.xlsx`](HW03_T1_GUI_Checklist.xlsx) (sheet "Checklist", "Môi trường"), [`../bugs/bug_report.md`](../bugs/bug_report.md)
Cập nhật: 2026-11-10 16:30

File này chỉ tóm tắt. Kết quả từng mục, Notes và tên ảnh nằm trong file Excel; nội dung mục checklist nằm trong [`02_checklist.md`](02_checklist.md).

---

## 1. Môi trường chạy (NT1)

| Mục | Giá trị |
|---|---|
| Tên ngắn | Chrome Windows |
| Trình duyệt | Google Chrome 156.0.8078.81 (bản cài trên máy, điều khiển bằng Playwright, có giao diện) |
| OS | Windows 11 Home Single Language 26H2 (build 26300.9818) |
| Thiết bị | Máy cá nhân của sinh viên |
| Màn hình, cửa sổ | Màn hình 2560 x 1440; script: Vùng trang 1366 x 768 (CL-109 dùng 360 x 800); chạy tay CL-33 và ảnh chụp tay CL-34, CL-68_2: Cửa sổ Chrome mở toàn màn hình |
| Zoom, scale | Zoom 100% (CL-33: 200%); scale hiển thị của Windows 150% |
| Ngày giờ | 10/11/2026: Script từ 11:46 đến 11:54; chạy tay và chụp bổ sung từ 13:20 đến 13:27; nhóm H (CL-34) lúc 13:46; nhóm I (ảnh CL-05, CL-105) lúc 14:01; nhóm J (ảnh cho bug report) lúc 15:06 |
| Dữ liệu | Reset DB rồi chạy `tools/seed_orders.py` (ĐK-01): `test@eshop.com` có 5 đơn ở 5 trạng thái, `newuser@eshop.com` không có đơn |
| Người chạy | Nguyễn Thị Ánh Ngọc. Script `tools/n1_chrome_checklist.js` cho mục có kết quả khách quan; script Console `tools/devtools_check.js` cho mục thuộc tính HTML; mục cần nhìn chạy tay |
| Cách chốt kết quả | AI điền nháp cột NT1 từ log (`tools/n1_run_log.txt`, `tools/n1_cl34_log.txt`) và ảnh; ô ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận. Sinh viên review và chốt |

Ảnh của N1 có lớp chữ đè (MSSV, họ tên, email sinh viên) vì N1 cũng là một nền tảng của Task 3. Ảnh mục Failed: [`screenshots/`](screenshots/), tên `CL-xx_chrome.png` (nhiều ảnh thì `_1`, `_2`...).

---

## 2. Tổng hợp kết quả

### 2.1 Theo IA

| IA | Số mục | Passed | Failed | Không chạy được | Đã thực thi (Passed + Failed) | Tỉ lệ Passed / đã thực thi |
|---|---|---|---|---|---|---|
| IA-01 Tiêu chuẩn giao diện chung | 36 | 19 | 17 | 0 | 36 | 52,8% |
| IA-02 Form | 31 | 13 | 14 | 4 | 27 | 48,1% |
| IA-03 Điều hướng | 19 | 10 | 8 | 1 | 18 | 55,6% |
| IA-04 Phản hồi và trạng thái | 26 | 9 | 15 | 2 | 24 | 37,5% |
| **Tổng** | **112** | **51** | **54** | **7** | **105** | **48,6%** |

Không có mục N/A. "Không chạy được" không tính vào Passed / Failed (quy ước CHD-05 ở `02_checklist.md` mục 1).

### 2.2 Theo căn cứ và nguồn của mục

| Nhóm | Số mục | Passed | Failed | Không chạy được |
|---|---|---|---|---|
| Căn cứ SRS (UI-Rxx) | 50 | 21 | 25 | 4 |
| Khuyến nghị (WCAG, Nielsen, slide) | 62 | 30 | 29 | 3 |
| Nguồn `AI` | 58 | 30 | 26 | 2 |
| Nguồn `AI, SV sửa` | 49 | 21 | 23 | 5 |
| Nguồn `SV thêm` (CL-69, CL-109 đến CL-112) | 5 | 0 | 5 | 0 |

Cả 5 mục sinh viên thêm đều Failed.

---

## 3. Mục Failed chính

Xếp theo issue và severity. Danh sách đủ 54 mục ở mục 4.

| Issue | Severity | Lỗi | Mục CL |
|---|---|---|---|
| [#33](https://github.com/angquoc/software-testing-2026-HW03-group/issues/33) | critical | W-04 từ chối mọi mật khẩu hợp lệ (`Abcdef1!`, `Test1234!`) với thông báo "Mật khẩu quá yếu!", nên không đăng ký được. Lỗi này chặn 5 mục (mục 5) | CL-65 (Không chạy được) |
| [#34](https://github.com/angquoc/software-testing-2026-HW03-group/issues/34) | high | W-03: Ô Mật khẩu có `type="text"`, mật khẩu hiện rõ khi gõ | CL-46 |
| [#35](https://github.com/angquoc/software-testing-2026-HW03-group/issues/35) | high | W-06: Đơn "Đang giao" vẫn có nút "Hủy đơn" bấm được và bị hủy thật | CL-87, CL-88 |
| [#36](https://github.com/angquoc/software-testing-2026-HW03-group/issues/36) | medium | W-06: Số điện thoại hợp lệ `0912345678` bị từ chối ("Vui lòng nhập đúng 9-10 chữ số"), nên không lưu được SĐT và Địa chỉ | CL-101, CL-110, CL-52 |
| [#37](https://github.com/angquoc/software-testing-2026-HW03-group/issues/37) | medium | W-03: Sau 3 lần sai, tài khoản bị chặn nhưng thông báo vẫn là "Đăng nhập thất bại", không nói bị tạm khóa | CL-89 |
| [#38](https://github.com/angquoc/software-testing-2026-HW03-group/issues/38) | medium | W-04: Không có ô "Xác nhận mật khẩu" | CL-37 |
| [#40](https://github.com/angquoc/software-testing-2026-HW03-group/issues/40) | medium | Ô Email có `type="text"` ở cả 3 màn hình, không chặn định dạng sai bằng HTML5 | CL-44, CL-45 |
| [#41](https://github.com/angquoc/software-testing-2026-HW03-group/issues/41) | medium | W-03: Trang đăng nhập có tiêu đề "Đăng Ký" | CL-14, CL-25 |
| [#43](https://github.com/angquoc/software-testing-2026-HW03-group/issues/43) | medium | W-03: Lần bấm Tab đầu tiên nhảy vào nút "Sign In" (`tabindex=1`) trước navbar và các ô | CL-15, CL-16 |
| [#59](https://github.com/angquoc/software-testing-2026-HW03-group/issues/59) | medium | W-06 khi chưa đăng nhập chỉ hiện "Vui lòng đăng nhập", không có đường tới trang đăng nhập | CL-78 |
| [#60](https://github.com/angquoc/software-testing-2026-HW03-group/issues/60) | medium | Đã đăng nhập mà mở `/login`, `/register` vẫn hiện form như chưa đăng nhập | CL-79 |
| [#64](https://github.com/angquoc/software-testing-2026-HW03-group/issues/64) | medium | Khổ 360 px: W-06 có thanh cuộn ngang, cột "Thao tác" bị khuất | CL-109 |

Các lỗi còn lại (severity low) chủ yếu là: Chữ tiếng Anh ("Username", "Sign In", "Cannot cancel this order.", tiêu đề tab "frontend-web"), không có `<h1>`, `lang="en"`, nút "Đăng Ký" nền đỏ, thiếu dấu `*`, nhãn không gắn với ô, thiếu `autocomplete`, độ tương phản dưới 4.5:1, ngày hiện theo tháng/ngày/năm, navbar không highlight, thông báo lỗi không nằm trong `role="alert"`.

---

## 4. Danh sách 54 mục Failed

Cột "Issue": Số issue trên repo nhóm; "Bình luận #18" là bình luận vào issue đã có của thành viên khác (thành phần dùng chung); "Không báo" là mục Failed không đưa lên Issues, lý do ở `bug_report.md` mục 4.

### 4.1 IA-01 (17 mục)

| Mã | Lỗi quan sát được | Màn hình | Issue |
|---|---|---|---|
| CL-01 | Nhãn ô thứ nhất là "Username" | W-03 | #39 |
| CL-02 | Nút gửi ghi "Sign In" | W-03 | #39 |
| CL-05 | Hộp thoại "Lỗi: Cannot cancel this order." khi hủy đơn bị từ chối | W-06 | #44 |
| CL-06 | Tiêu đề tab là "frontend-web" | Cả 3 | #45 |
| CL-08 | Nút "Đăng Ký" nền đỏ, không phải xanh dương | W-04 | #46 |
| CL-13 | Không có thẻ `<h1>` (tiêu đề là h2 / h3) | Cả 3 | #42 |
| CL-14 | Không có `<h1>`; tiêu đề lớn nhất của trang đăng nhập là "Đăng Ký" | Cả 3 | #41 |
| CL-15 | Lần Tab đầu tiên vào "Sign In" trước navbar | W-03 | #43 |
| CL-16 | Focus vào "Sign In" trước các ô nằm trên nó | W-03 | #43 |
| CL-19 | `<html lang="en">` | Cả 3 | #51 |
| CL-20 | Cả 3 trang cùng tiêu đề tab "frontend-web" | Cả 3 | #45 |
| CL-23 | axe-core báo tương phản dưới ngưỡng: Link xanh 3.67:1, dòng hướng dẫn mật khẩu 2.53:1, nút đỏ 3.76:1, lời chào vàng 3.92:1 | Cả 3 | #52 |
| CL-24 | Ngày đặt hiện "11/10/2026" cho đơn ngày 10/11/2026 | W-06 | #53 |
| CL-25 | Cùng hành động đăng nhập có 3 cách gọi: Tiêu đề "Đăng Ký", navbar "Đăng nhập", nút "Sign In" | W-03 | #41 |
| CL-26 | "Đăng Ký Tài Khoản" viết hoa mọi từ; "Hồ sơ của bạn" chỉ viết hoa chữ đầu | W-04, W-06 | #54 |
| CL-27 | Nút "Đăng Ký" viết hoa mọi từ; navbar "Đăng ký" chỉ viết hoa chữ đầu | W-04, navbar | #54 |
| CL-109 | Rộng 360 px: Có thanh cuộn ngang, bảng lịch sử đơn tràn, cột "Thao tác" bị khuất | W-06 | #64 |

### 4.2 IA-02 (14 mục)

| Mã | Lỗi quan sát được | Màn hình | Issue |
|---|---|---|---|
| CL-37 | Form đăng ký không có ô Xác nhận mật khẩu | W-04 | #38 |
| CL-42 | Nhãn ô thứ nhất là "Username", không nói phải nhập Email | W-03 | #39 |
| CL-43 | Nhãn trường bắt buộc không có dấu `*` | W-03, W-04 | #47 |
| CL-44 | Ô Email có `type="text"` | Cả 3 | #40 |
| CL-45 | Nhập "abc" vẫn gửi được form, không có bong bóng báo định dạng | W-03 | #40 |
| CL-46 | Ô Mật khẩu có `type="text"`, mật khẩu hiện rõ | W-03 | #34 |
| CL-47 | Thông báo lỗi đăng nhập nằm dưới nút "Sign In" | W-03 | #48 |
| CL-52 | SĐT `0912345678` và Địa chỉ bị từ chối nên sau khi tải lại vẫn trống | W-06 | #36 |
| CL-54 | Tên đọc được (Name) của ô rỗng, nhãn không gắn với ô | Cả 3 | #55 |
| CL-57 | Sau khi báo lỗi, focus nằm ở nút gửi, không về ô lỗi | W-04, W-06 | Không báo |
| CL-58 | Ô bị lỗi trông giống hệt các ô khác | W-04, W-06 | #56 |
| CL-62 | Ô Email, Mật khẩu, Số điện thoại không có `autocomplete` | Cả 3 | #57 |
| CL-110 | Số `" 0912345678 "` bị từ chối (số này không có khoảng trắng cũng bị từ chối) | W-06 | #36 |
| CL-111 | Ô mật khẩu không có nút hiện / ẩn mật khẩu | W-03, W-04 | #65 |

### 4.3 IA-03 (8 mục)

| Mã | Lỗi quan sát được | Màn hình | Issue |
|---|---|---|---|
| CL-66 | Mục navbar của trang đang mở không được highlight | Cả 3 | #49 |
| CL-68 | Giỏ có 2 sản phẩm, link "Giỏ hàng" không có badge | Cả 3 (đăng nhập) | Bình luận #18 |
| CL-69 | Giỏ có 1 sản phẩm số lượng 2, link "Giỏ hàng" không có badge | Cả 3 (đăng nhập) | Bình luận #18 |
| CL-70 | Nút đăng xuất ghi "Thoát" | Cả 3 | Bình luận #29 |
| CL-74 | Logo "EShop" không đổi hình thức khi rê chuột | Cả 3 | Không báo |
| CL-76 | Lời chào là link tới `/profile` nhưng chỉ ghi "Chào, Test User", không cho biết dẫn tới hồ sơ | W-06 | #58 |
| CL-78 | Mở `/profile` khi chưa đăng nhập: Chỉ có chữ "Vui lòng đăng nhập", không có link, không tự chuyển | W-06 | #59 |
| CL-79 | Đã đăng nhập mà mở `/login`, `/register` vẫn hiện form | W-03, W-04 | #60 |

### 4.4 IA-04 (15 mục)

| Mã | Lỗi quan sát được | Màn hình | Issue |
|---|---|---|---|
| CL-87 | Đơn #2 Đang giao có nút "Hủy đơn" bấm được | W-06 | #35 |
| CL-88 | Hủy đơn #2 Đang giao thành công, không có thông báo từ chối | W-06 | #35 |
| CL-89 | 4 lần đều báo "Đăng nhập thất bại...", không nói tài khoản bị tạm khóa | W-03 | #37 |
| CL-91 | Lịch sử đơn trống chỉ có chữ, không có icon / hình minh họa | W-06 | #50 |
| CL-93 | Lịch sử đơn trống không gợi ý bước tiếp theo | W-06 | #50 |
| CL-94 | Mạng chậm: Không có dấu hiệu đang tải trước khi bảng lịch sử hiện | W-06 | Không báo |
| CL-96 | Mạng chậm: Nút gửi không bị khóa, không đổi chữ, không có vòng xoay | W-03, W-06 | Không báo |
| CL-97 | Bấm "Hủy đơn" thì đơn bị hủy ngay, không có hộp xác nhận | W-06 | Không báo |
| CL-101 | Cập nhật với SĐT hợp lệ bị từ chối, không có thông báo thành công | W-06 | #36 |
| CL-102 | Đổi Họ Tên thành công nhưng lời chào navbar vẫn hiện tên cũ khi chưa tải lại | W-06 | #61 |
| CL-105 | Mất kết nối: W-03 báo "Đăng nhập thất bại", W-06 báo "Lỗi cập nhật", không nói là mất kết nối | W-03, W-06 | #62 |
| CL-106 | Thông báo lỗi không nằm trong `role="alert"` / `aria-live` | W-03, W-04 | #63 |
| CL-107 | Nút "Cập nhật" và "Thoát" không đổi hình thức khi rê chuột | W-06 | Không báo |
| CL-108 | Sau "Clear site data", bấm "Cập nhật" vẫn báo "Cập nhật thành công!", không yêu cầu đăng nhập lại | W-06 | Không báo |
| CL-112 | Bấm nhanh 3 lần gửi 3 request (`POST /api/login`, `PUT /api/users/me`) | W-03, W-06 | Không báo |

---

## 5. Mục Không chạy được (7 mục)

| Mã | IA | Lý do |
|---|---|---|
| CL-38 | IA-02 | Không có ô Xác nhận mật khẩu (CL-37 Failed) |
| CL-39 | IA-02 | Trang Đăng ký từ chối mọi mật khẩu hợp lệ (#33), nên với email sai chỉ thấy thông báo mật khẩu |
| CL-40 | IA-02 | #33: Form không gửi đi được, chưa tới bước kiểm email trùng |
| CL-60 | IA-02 | #33: Chưa tới bước kiểm Họ Tên chỉ có khoảng trắng |
| CL-65 | IA-03 | #33: Không đăng ký thành công được nên không kiểm được việc chuyển tới trang Đăng nhập (ảnh `CL-65_chrome.png` dùng cho #33) |
| CL-98 | IA-04 | Không có hộp xác nhận hủy đơn (CL-97 Failed) |
| CL-104 | IA-04 | #33: Không đăng ký thành công được |

Ngoài ra, phần W-04 của CL-96, CL-105 và CL-112 không chạy được vì #33; ba mục này vẫn Failed theo W-03, W-06.

---

## 6. Bug

Chi tiết: [`../bugs/bug_report.md`](../bugs/bug_report.md). Ảnh trang Issues đã lọc: [`../bugs/screenshots/issues_list_T1_1.png`](../bugs/screenshots/issues_list_T1_1.png), [`_2`](../bugs/screenshots/issues_list_T1_2.png).

| Chỉ số | Số lượng |
|---|---|
| Issue mới | 33 (#33 đến #65), mỗi issue có ảnh |
| Theo severity | 1 critical, 2 high, 9 medium, 21 low |
| Theo căn cứ | 18 issue từ mục Failed có căn cứ SRS (#33 đến #50), 15 issue từ mục khuyến nghị có ảnh thấy rõ lỗi (#51 đến #65) |
| Theo IA (một issue có thể gắn 2 IA) | IA-01: 12, IA-02: 12, IA-03: 4, IA-04: 7 |
| Bình luận vào issue đã có | 2 (#18 badge giỏ hàng: CL-68, CL-69; #29 nút "Thoát": CL-70) |
| Issue có ghi `Related` tới issue khác | 9 |

Đối chiếu 54 mục Failed: 43 mục nằm trong 33 issue (nhiều mục cùng lỗi gốc gộp chung một issue), 3 mục nằm trong 2 bình luận, 8 mục không báo vì ảnh không cho thấy rõ lỗi (CL-57, CL-74, CL-94, CL-96, CL-97, CL-107, CL-108, CL-112).
