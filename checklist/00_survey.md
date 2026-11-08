# T1 survey: Khảo sát màn hình

Bước: `[T1][survey]`, bản đã đối chiếu với ảnh
Bản AI gốc: `ai_raw/T1_survey.md` (tạo lúc 2026-11-07 23:15)
Cập nhật: 2026-11-09 01:12

Ai điền phần nào:

- Bảng môi trường (mục 1) và cột "Đã chụp" (mục 2): Sinh viên điền.
- Các bảng quan sát ở mục 3 đến mục 6: AI điền dựa trên 7 ảnh trong `screenshots/` theo yêu cầu của sinh viên; sinh viên kiểm tra lại.
- Các ô ảnh không cho thấy (tiêu đề tab, ô mật khẩu có che ký tự không, ô Email có khóa không, giỏ hàng lúc chụp): Sinh viên xem trực tiếp rồi điền.

---

## 1. Mục đích và cách điền

Bảng này ghi lại **những gì nhìn thấy được** trên 3 màn hình đã chọn, làm đầu vào cho bước `oracle` và `ai-draft`. Đây chưa phải checklist và chưa đánh giá đúng hay sai.

- Chỉ ghi điều nhìn thấy bằng mắt trên trình duyệt. **Không** mở DevTools, **không** xem mã nguồn trang.
- Không nhập dữ liệu sai để gây lỗi. Chỉ chụp các trạng thái có sẵn: Chưa đăng nhập, đã đăng nhập, lịch sử đơn trống, lịch sử đơn có đơn.
- Chép **nguyên văn** chữ trên giao diện (nhãn, placeholder, chữ trên nút, thông báo), kể cả chữ tiếng Anh, viết hoa, dấu câu.
- Ô nào không có thì ghi `Không có`. Ô nào không chắc thì ghi `?` và nêu ở mục 7 (Câu hỏi mở).
- Màu ghi bằng tên màu nhìn thấy (ví dụ "xanh dương", "đỏ", "xám"); không cần mã màu.
- Bảng nào thiếu dòng thì thêm dòng. Cột "Ảnh" ghi số ảnh ở mục 2 (ví dụ `01`).

Môi trường khi chụp:

| Mục | Giá trị |
|---|---|
| Trình duyệt và phiên bản | Google Chrome 156.0.8078.81 |
| OS | Windows 11 Version 26H2 (Build 26300.9818) |
| Độ phân giải màn hình / kích thước cửa sổ | 2560 x 1440 |
| Mức zoom trình duyệt | 100% |
| Scale của Windows | 150% |
| Ngày giờ chụp | 08/11/2026, từ 20:40 đến 20:54 (theo đồng hồ Windows trong ảnh) |
| Tài khoản dùng khi đã đăng nhập | test@eshop.com / Test1234! (Dùng cho Lịch sử có đơn) và newuser@eshop.com / NewUser123! (Dùng cho Lịch sử trống) |
| Đã reset dữ liệu trước khi chụp (`node database.js`) | x |

---

## 2. Danh sách màn hình và ảnh cần chụp

| Mã | Màn hình | URL | Vai trò | FR liên quan trong SRS |
|---|---|---|---|---|
| W-06 | Hồ sơ cá nhân & lịch sử đơn hàng | `http://localhost:5173/profile` | Màn hình chính | FR-04, FR-11 (và FR-10 cho tên trạng thái đơn), FR-21 đến FR-24 |
| W-04 | Đăng ký | `http://localhost:5173/register` | Màn hình phụ | FR-01, FR-21 đến FR-24 |
| W-03 | Đăng nhập | `http://localhost:5173/login` | Màn hình phụ | FR-02, FR-21 đến FR-24 |

Ảnh lưu trong `checklist/screenshots/`, đặt tên `survey_<số>_<nội dung>.png`. Chụp **toàn trang** (cuộn hết nếu trang dài, hoặc chụp nhiều ảnh `_2`, `_3`).

| Số | Tên file đề xuất | Màn hình | Trạng thái | Đã chụp |
|---|---|---|---|---|
| 01 | `survey_01_login_logged_out.png` | W-03 | Chưa đăng nhập, form trống | x |
| 02 | `survey_02_register_logged_out.png` | W-04 | Chưa đăng nhập, form trống | x |
| 03 | `survey_03_profile_logged_out.png` | W-06 | Chưa đăng nhập, gõ thẳng URL `/profile` (ghi lại trang hiện ra) | x |
| 04 | `survey_04_profile_logged_in_no_orders.png` | W-06 | Đã đăng nhập, lịch sử đơn trống (ngay sau reset dữ liệu) | x |
| 05 | `survey_05_profile_logged_in_with_orders.png` | W-06 | Đã đăng nhập, lịch sử đơn có đơn | x |
| 06 | `survey_06_login_logged_in.png` | W-03 | Đã đăng nhập, gõ thẳng URL `/login` (ghi lại trang hiện ra) | x |
| 07 | `survey_07_register_logged_in.png` | W-04 | Đã đăng nhập, gõ thẳng URL `/register` (ghi lại trang hiện ra) | x |

---

## 3. W-06 Hồ sơ cá nhân & lịch sử đơn hàng (`/profile`)

### 3.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Khi chưa đăng nhập, gõ `/profile` thì thấy gì (ở lại trang, chuyển sang trang khác, thông báo gì) | Ở lại `/profile`, không chuyển trang. Giữa trang chỉ có một dòng chữ "Vui lòng đăng nhập", không có link hay nút dẫn tới trang đăng nhập. Navbar ở trạng thái chưa đăng nhập | 03 |
| Tiêu đề trên tab trình duyệt | frontend-web | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | Có hai tiêu đề cùng cỡ chữ, in đậm: "Hồ sơ của bạn" (khối trái) và "Lịch sử đơn hàng" (khối phải). Không có tiêu đề chung cho cả trang | 04, 05 |
| Các tiêu đề phụ trên trang (theo thứ tự từ trên xuống) | Không có ngoài hai tiêu đề trên | 04, 05 |
| Trang chia thành những phần nào (khối, cột, tab), phần nào nằm trên / bên trái | Hai khối nền trắng đặt cạnh nhau, không có tab: Bên trái (hẹp hơn) là form "Hồ sơ của bạn"; bên phải (rộng hơn) là "Lịch sử đơn hàng" | 04, 05 |
| Có breadcrumb không (chữ nguyên văn nếu có) | Không có | 04, 05 |
| Chữ hiển thị sẵn khác (lời chào, hướng dẫn, ghi chú) | Chỉ có chữ "(Không đổi)" trong nhãn Email. Lời chào "Chào, <Họ Tên>" nằm trên navbar (xem mục 6) | 04, 05 |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | "Email" (nhãn); "EShop" (logo); viết tắt "Mã ĐH" ở tiêu đề cột | 04, 05 |

### 3.2 Ô nhập trong phần hồ sơ

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được (ô chữ, ô nhiều dòng, dropdown, ô bị khóa / chỉ đọc, chỉ là chữ không sửa được...) | Giá trị có sẵn khi mở trang | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|
| 1 | Email (Không đổi) | Không có | Ô đã có giá trị nên không thấy placeholder | Ô một dòng, nền xám, bị khóa | Email của tài khoản đang đăng nhập (`newuser@eshop.com`, `test@eshop.com`) | Không có (ngoài chữ "(Không đổi)" trong nhãn) | 04, 05 |
| 2 | Họ Tên | Không có | Không thấy (ô đã có giá trị) | Ô chữ một dòng, nền trắng | Họ tên của tài khoản ("Khách Mới", "Test User") | Không có | 04, 05 |
| 3 | Số điện thoại | Không có | VD: 0912345678 | Ô chữ một dòng, nền trắng | Trống | Không có | 04, 05 |
| 4 | Địa chỉ giao hàng | Không có | Nhập địa chỉ của bạn | Ô nhiều dòng (có góc kéo giãn ở góc dưới phải) | Trống | Không có | 04, 05 |

### 3.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí (dưới ô nào, góc nào) | Ảnh |
|---|---|---|---|---|---|---|
| 1 | Cập nhật | Nút | Xanh dương | Trắng | Dưới ô "Địa chỉ giao hàng", rộng hết khối trái | 04, 05 |
| 2 | Hủy đơn | Nút (nhỏ) | Đỏ | Trắng | Cột "Thao tác" của bảng lịch sử đơn, chỉ ở một số dòng (xem 3.4) | 05 |

### 3.4 Lịch sử đơn hàng

Khi **có** đơn:

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề của phần lịch sử đơn (nguyên văn) | Lịch sử đơn hàng | 05 |
| Dạng hiển thị (bảng, danh sách thẻ, khác) | Bảng; hàng tiêu đề có nền xám nhạt, chữ đậm; các dòng ngăn bằng đường kẻ ngang | 05 |
| Tên các cột hoặc các thông tin hiển thị cho mỗi đơn (nguyên văn, theo thứ tự) | Mã ĐH, Ngày đặt, Tổng tiền, Trạng thái, Thao tác | 05 |
| Số đơn đang hiển thị | 5 | 05 |
| Thứ tự sắp xếp nhìn thấy được (mới nhất trên cùng, cũ nhất trên cùng, không rõ) | Mã đơn giảm dần từ trên xuống (#5, #4, #3, #2, #1). Cả 5 đơn cùng một ngày nên không thấy được thứ tự theo ngày | 05 |
| Cách ghi mã đơn (ví dụ chép một mã) | #5 | 05 |
| Cách ghi ngày đặt (ví dụ chép một ngày) | 11/8/2026 (dạng M/D/YYYY) | 05 |
| Cách ghi tổng tiền (ví dụ chép một số tiền, kể cả ký hiệu tiền và dấu phân cách) | 10,000,000 ₫ (dấu phẩy phân cách hàng nghìn, ký hiệu nhìn như ₫ tức chữ đ có gạch dưới, đặt sau số, cách một khoảng). Chữ đỏ, in đậm | 05 |
| Có phân trang / nút "xem thêm" không | Không có | 05 |
| Mỗi đơn có nút hoặc link nào (nguyên văn, màu) | Nút "Hủy đơn" (nền đỏ, chữ trắng) ở 3 đơn: #5 "Chờ xác nhận", #3 "Đã xác nhận", #2 "Đang giao". Đơn #4 "Đã hủy" và #1 "Đã giao" để trống cột Thao tác. Mã đơn không có dạng link | 05 |

Trạng thái đơn nhìn thấy được (mỗi trạng thái đã chụp một dòng):

| # | Chữ trạng thái trên giao diện (nguyên văn) | Màu chữ | Màu nền / nhãn | Ảnh |
|---|---|---|---|---|
| 1 | Chờ xác nhận | Vàng sẫm / nâu | Vàng nhạt | 05 |
| 2 | Đã xác nhận | Tím xanh (chàm) | Tím nhạt | 05 |
| 3 | Đang giao | Xanh dương | Xanh dương nhạt | 05 |
| 4 | Đã giao | Xanh lá | Xanh lá nhạt | 05 |
| 5 | Đã hủy | Đỏ | Hồng / đỏ nhạt | 05 |

Khi **chưa có** đơn (trạng thái trống):

| Mục | Quan sát | Ảnh |
|---|---|---|
| Thông báo hiển thị (nguyên văn) | Bạn chưa có đơn hàng nào. | 04 |
| Có icon / hình minh họa không (mô tả ngắn) | Không có | 04 |
| Có nút hoặc link dẫn đi đâu không (nguyên văn) | Không có | 04 |

---

## 4. W-04 Đăng ký (`/register`)

### 4.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề trên tab trình duyệt | frontend-web | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | Đăng Ký Tài Khoản | 02 |
| Các tiêu đề phụ, chữ giới thiệu dưới tiêu đề | Không có | 02 |
| Form nằm ở đâu trên trang (giữa, trái, trong khung...) | Giữa trang, trong một khung nền trắng có viền mảnh; tiêu đề căn giữa | 02 |
| Có chỉ báo bước (ví dụ "Bước 1 / 2") không | Không có | 02 |
| Có chữ hướng dẫn về yêu cầu mật khẩu hiển thị sẵn không (nguyên văn) | Có, chữ nhỏ màu xám dưới ô Mật khẩu: "Yêu cầu: Tối thiểu 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt." | 02 |
| Có breadcrumb không | Không có | 02 |
| Khi đã đăng nhập, gõ `/register` thì thấy gì | Vẫn ở `/register`, form đăng ký hiện đầy đủ như khi chưa đăng nhập; navbar ở trạng thái đã đăng nhập ("Chào, Test User", "Thoát") | 07 |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | "Email" (nhãn); "EShop" (logo) | 02 |

### 4.2 Ô nhập

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được (ô chữ, ô mật khẩu có che ký tự, checkbox, dropdown...) | Có nút ẩn / hiện mật khẩu không | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|---|
| 1 | Họ Tên | Không có | Không có | Ô chữ một dòng | Không áp dụng | Trống | Không có | 02 |
| 2 | Email | Không có | Không có | Ô chữ một dòng | Không áp dụng | Trống | Không có | 02 |
| 3 | Mật khẩu | Không có | Không có | Ô một dòng; ký tự bị che | Không thấy nút nào trong ô (lúc ô trống) | Trống | "Yêu cầu: Tối thiểu 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt." | 02 |

Form chỉ có 3 ô trên; không có ô nào khác (không có ô xác nhận mật khẩu, checkbox hay dropdown).

### 4.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | Đăng Ký | Nút | Đỏ | Trắng | Dưới dòng hướng dẫn mật khẩu, rộng hết khung form | 02 |
| 2 | Đăng nhập | Link (sau chữ thường "Đã có tài khoản?") | Không có | Xanh dương | Dưới nút "Đăng Ký", căn giữa | 02 |

---

## 5. W-03 Đăng nhập (`/login`)

### 5.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề trên tab trình duyệt | frontend-web | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | Đăng Ký | 01 |
| Các tiêu đề phụ, chữ giới thiệu dưới tiêu đề | Không có | 01 |
| Form nằm ở đâu trên trang | Giữa trang, trong một khung nền trắng có viền mảnh; tiêu đề căn giữa (bố cục giống trang Đăng ký) | 01 |
| Có breadcrumb không | Không có | 01 |
| Có hiển thị sẵn tài khoản demo hoặc gợi ý nào không (nguyên văn) | Không có | 01 |
| Khi đã đăng nhập, gõ `/login` thì thấy gì | Vẫn ở `/login`, form đăng nhập hiện đầy đủ như khi chưa đăng nhập; navbar ở trạng thái đã đăng nhập ("Chào, Test User", "Thoát") | 06 |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | "Username" (nhãn); "Sign In" (nút); "EShop" (logo) | 01 |

### 5.2 Ô nhập

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được | Có nút ẩn / hiện mật khẩu không | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|---|
| 1 | Username | Không có | Không có | Ô chữ một dòng | Không áp dụng | Trống | Không có | 01 |
| 2 | Mật khẩu | Không có | Không có | Ô một dòng; ký tự bị che | Không thấy nút nào trong ô (lúc ô trống) | Trống | Không có | 01 |

Form chỉ có 2 ô trên; không có checkbox (ví dụ "Ghi nhớ đăng nhập").

### 5.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | Quên mật khẩu? | Link | Không có | Xanh dương | Dưới ô Mật khẩu, căn phải | 01 |
| 2 | Sign In | Nút | Xanh dương | Trắng | Dưới link "Quên mật khẩu?", rộng hết khung form | 01 |
| 3 | Đăng ký ngay | Link (sau chữ thường "Chưa có tài khoản?") | Không có | Xanh dương | Dưới nút "Sign In", căn giữa | 01 |

---

## 6. Navbar (dùng chung cho 3 màn hình)

| Mục | Chưa đăng nhập | Đã đăng nhập | Ảnh |
|---|---|---|---|
| Logo / tên cửa hàng (nguyên văn) | "EShop", chữ trắng in đậm, góc trái; nền navbar xanh dương | Giống khi chưa đăng nhập | 01 đến 07 |
| Các mục trên navbar, theo thứ tự từ trái sang phải (nguyên văn) | Bên phải: Giỏ hàng, Đăng nhập, Đăng ký (đều chữ trắng) | Bên phải: Giỏ hàng (chữ trắng), Chào, <Họ Tên> (chữ vàng), Thoát (nút) | 01, 03, 04, 05 |
| Có ô tìm kiếm không (placeholder nguyên văn) | Không có | Không có | 01 đến 07 |
| Link "Giỏ hàng": Có badge số lượng không, badge đang hiện số mấy | Không thấy badge vì giỏ không có hàng | Không thấy badge vì giỏ không có hàng | 01 đến 07 |
| Tên / avatar người dùng hiển thị thế nào | Không áp dụng | Chữ "Chào, <Họ Tên>" màu vàng (ví dụ "Chào, Test User", "Chào, Khách Mới"); không có avatar | 04, 05 |
| Chữ trên nút đăng xuất (nguyên văn) | Không áp dụng | Thoát (nút nền đỏ, chữ trắng, ở góc phải) | 04 đến 07 |
| Đang ở `/login`: Mục nào trên navbar được làm nổi bật (khác màu, gạch chân, in đậm), hay không mục nào | Không mục nào ("Đăng nhập" cùng màu, cùng kiểu với các mục khác) | Không mục nào (chữ vàng "Chào, ..." hiện giống nhau ở mọi trang nên không phải dấu hiệu trang đang chọn) | 01, 06 |
| Đang ở `/register`: Mục nào được làm nổi bật | Không mục nào ("Đăng ký" cùng màu, cùng kiểu với các mục khác) | Không mục nào | 02, 07 |
| Đang ở `/profile`: Mục nào được làm nổi bật | Không mục nào | Không mục nào (navbar không có mục riêng cho trang hồ sơ) | 03, 04, 05 |
| Có footer không, footer có gì | Có, nền xanh đen sẫm, chữ trắng căn giữa: "© 2026 EShop SUT. Dành cho mục đích kiểm thử." | Giống khi chưa đăng nhập | 01 đến 07 |

---

## 7. Câu hỏi mở và ghi chú của sinh viên

Ghi những điểm chưa chắc khi quan sát, hoặc điều thấy lạ mà các bảng trên chưa có chỗ ghi.

| # | Màn hình | Ghi chú / câu hỏi | Ảnh |
|---|---|---|---|
| 1 | Cả 3 | Ảnh bắt đầu từ thanh địa chỉ nên không thấy tiêu đề trên tab trình duyệt. SV đã bổ sung chữ trên tab của `/login`, `/register`, `/profile` vào mục 3.1, 4.1, 5.1 | |
| 2 | W-06 | Ngày đặt hiện "11/8/2026" được viết dưới dạng M/D/YYYY | 05 |
| 3 | Cả 3 | Không thấy badge trên "Giỏ hàng" ở ảnh nào vì trong giỏ khi đó không có hàng | 01 đến 07 |

---

## 8. Những gì không ghi ở bước này

Các điểm sau cần DevTools, bàn phím hoặc nhập dữ liệu sai nên **không** khảo sát ở đây. Chúng sẽ thành mục checklist ở bước `ai-draft` và được kiểm ở bước `exec`:

- Thuộc tính HTML của ô nhập (`type="email"`, `type="password"`), số thẻ `<h1>`, thuộc tính `alt` của ảnh.
- Thứ tự focus khi bấm Tab.
- Thông báo lỗi khi nhập sai, vị trí thông báo lỗi so với nút gửi, thông báo khi khóa tài khoản.
- Độ tương phản màu, kích thước chữ đo bằng công cụ.

---

## 9. Đối chiếu phần sinh viên đã điền với ảnh

| Vị trí | SV ghi | Sau đối chiếu | Căn cứ |
|---|---|---|---|
| Mục 1, "Ngày giờ chụp" | 20:40 08/11/2026 | 08/11/2026, từ 20:40 đến 20:54 | Đồng hồ Windows trong ảnh: 01 lúc 20:42, 02 lúc 20:41, 03 lúc 20:43, 04 lúc 20:44, 05 lúc 20:40, 06 và 07 lúc 20:54 |
| Mục 2, ghi chú dưới bảng ảnh | (SV đã xóa ghi chú "Quyết định mở" về đơn ở nhiều trạng thái) | Giữ theo SV. Ảnh 05 đã có đủ 5 trạng thái đơn nên không cần ảnh `survey_08` trở đi cho trạng thái đơn | Ảnh 05 |
