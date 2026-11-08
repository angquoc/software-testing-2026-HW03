# T1 survey: Khảo sát màn hình (bảng quan sát còn trống)

Bước: `[T1][survey]`, bản AI
Tạo lúc: 2026-11-07 23:15

---

## 1. Mục đích và cách điền

Bảng này ghi lại **những gì nhìn thấy được** trên 3 màn hình đã chọn, làm đầu vào cho bước `oracle` và `ai-draft`. Đây chưa phải checklist và chưa đánh giá đúng hay sai.

- Chỉ ghi điều nhìn thấy bằng mắt trên trình duyệt. **Không** mở DevTools, **không** xem mã nguồn trang.
- Không nhập dữ liệu sai để gây lỗi. Chỉ chụp các trạng thái có sẵn: Chưa đăng nhập, đã đăng nhập, lịch sử đơn trống, lịch sử đơn có đơn.
- Chép **nguyên văn** chữ trên giao diện (nhãn, placeholder, chữ trên nút, thông báo), kể cả chữ tiếng Anh, viết hoa, dấu câu.
- Ô nào không có thì ghi `Không có`. Ô nào không chắc thì ghi `?` và nêu ở mục 6 (Câu hỏi mở).
- Màu ghi bằng tên màu nhìn thấy (ví dụ "xanh dương", "đỏ", "xám"); không cần mã màu.
- Bảng nào thiếu dòng thì thêm dòng. Cột "Ảnh" ghi số ảnh ở mục 2 (ví dụ `01`).

Môi trường khi chụp:

| Mục | Giá trị |
|---|---|
| Trình duyệt và phiên bản | |
| OS | |
| Độ phân giải màn hình / kích thước cửa sổ | |
| Mức zoom trình duyệt | |
| Ngày giờ chụp | |
| Tài khoản dùng khi đã đăng nhập | |
| Đã reset dữ liệu trước khi chụp (`node database.js`) | |

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
| 01 | `survey_01_login_logged_out.png` | W-03 | Chưa đăng nhập, form trống | ☐ |
| 02 | `survey_02_register_logged_out.png` | W-04 | Chưa đăng nhập, form trống | ☐ |
| 03 | `survey_03_profile_logged_out.png` | W-06 | Chưa đăng nhập, gõ thẳng URL `/profile` (ghi lại trang hiện ra) | ☐ |
| 04 | `survey_04_profile_logged_in_no_orders.png` | W-06 | Đã đăng nhập, lịch sử đơn trống (ngay sau reset dữ liệu) | ☐ |
| 05 | `survey_05_profile_logged_in_with_orders.png` | W-06 | Đã đăng nhập, lịch sử đơn có đơn | ☐ |
| 06 | `survey_06_login_logged_in.png` | W-03 | Đã đăng nhập, gõ thẳng URL `/login` (ghi lại trang hiện ra) | ☐ |
| 07 | `survey_07_register_logged_in.png` | W-04 | Đã đăng nhập, gõ thẳng URL `/register` (ghi lại trang hiện ra) | ☐ |

Ghi chú cho ảnh 05: Dữ liệu mẫu không có đơn hàng, nên phải tự đặt đơn qua giỏ hàng / thanh toán. ⏳ **Quyết định mở (SV chốt):** Có tạo thêm đơn ở nhiều trạng thái khác nhau (đổi trạng thái ở Admin) để thấy được chữ và màu của từng trạng thái hay không, và tạo những trạng thái nào. Nếu có, chụp thêm các ảnh `survey_08_...` trở đi và ghi vào bảng 3.4.

---

## 3. W-06 Hồ sơ cá nhân & lịch sử đơn hàng (`/profile`)

### 3.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Khi chưa đăng nhập, gõ `/profile` thì thấy gì (ở lại trang, chuyển sang trang khác, thông báo gì) | | |
| Tiêu đề trên tab trình duyệt | | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | | |
| Các tiêu đề phụ trên trang (theo thứ tự từ trên xuống) | | |
| Trang chia thành những phần nào (khối, cột, tab), phần nào nằm trên / bên trái | | |
| Có breadcrumb không (chữ nguyên văn nếu có) | | |
| Chữ hiển thị sẵn khác (lời chào, hướng dẫn, ghi chú) | | |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | | |

### 3.2 Ô nhập trong phần hồ sơ

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được (ô chữ, ô nhiều dòng, dropdown, ô bị khóa / chỉ đọc, chỉ là chữ không sửa được...) | Giá trị có sẵn khi mở trang | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
| 5 | | | | | | | |

### 3.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí (dưới ô nào, góc nào) | Ảnh |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

### 3.4 Lịch sử đơn hàng

Khi **có** đơn:

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề của phần lịch sử đơn (nguyên văn) | | |
| Dạng hiển thị (bảng, danh sách thẻ, khác) | | |
| Tên các cột hoặc các thông tin hiển thị cho mỗi đơn (nguyên văn, theo thứ tự) | | |
| Số đơn đang hiển thị | | |
| Thứ tự sắp xếp nhìn thấy được (mới nhất trên cùng, cũ nhất trên cùng, không rõ) | | |
| Cách ghi mã đơn (ví dụ chép một mã) | | |
| Cách ghi ngày đặt (ví dụ chép một ngày) | | |
| Cách ghi tổng tiền (ví dụ chép một số tiền, kể cả ký hiệu tiền và dấu phân cách) | | |
| Có phân trang / nút "xem thêm" không | | |
| Mỗi đơn có nút hoặc link nào (nguyên văn, màu) | | |

Trạng thái đơn nhìn thấy được (mỗi trạng thái đã chụp một dòng):

| # | Chữ trạng thái trên giao diện (nguyên văn) | Màu chữ | Màu nền / nhãn | Ảnh |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

Khi **chưa có** đơn (trạng thái trống):

| Mục | Quan sát | Ảnh |
|---|---|---|
| Thông báo hiển thị (nguyên văn) | | |
| Có icon / hình minh họa không (mô tả ngắn) | | |
| Có nút hoặc link dẫn đi đâu không (nguyên văn) | | |

---

## 4. W-04 Đăng ký (`/register`)

### 4.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề trên tab trình duyệt | | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | | |
| Các tiêu đề phụ, chữ giới thiệu dưới tiêu đề | | |
| Form nằm ở đâu trên trang (giữa, trái, trong khung...) | | |
| Có chỉ báo bước (ví dụ "Bước 1 / 2") không | | |
| Có chữ hướng dẫn về yêu cầu mật khẩu hiển thị sẵn không (nguyên văn) | | |
| Có breadcrumb không | | |
| Khi đã đăng nhập, gõ `/register` thì thấy gì | | |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | | |

### 4.2 Ô nhập

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được (ô chữ, ô mật khẩu có che ký tự, checkbox, dropdown...) | Có nút ẩn / hiện mật khẩu không | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

Ghi chú cho cột "Loại ô": Muốn biết ô mật khẩu có che ký tự không thì gõ thử vài ký tự **hợp lệ** rồi nhìn; không bấm nút gửi.

### 4.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

---

## 5. W-03 Đăng nhập (`/login`)

### 5.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Tiêu đề trên tab trình duyệt | | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | | |
| Các tiêu đề phụ, chữ giới thiệu dưới tiêu đề | | |
| Form nằm ở đâu trên trang | | |
| Có breadcrumb không | | |
| Có hiển thị sẵn tài khoản demo hoặc gợi ý nào không (nguyên văn) | | |
| Khi đã đăng nhập, gõ `/login` thì thấy gì | | |
| Có chữ tiếng Anh hoặc chữ không dấu nào trên trang không (ghi nguyên văn) | | |

### 5.2 Ô nhập

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được | Có nút ẩn / hiện mật khẩu không | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |

### 5.3 Nút và link (không tính navbar)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

---

## 6. Navbar (dùng chung cho 3 màn hình)

| Mục | Chưa đăng nhập | Đã đăng nhập | Ảnh |
|---|---|---|---|
| Logo / tên cửa hàng (nguyên văn) | | | |
| Các mục trên navbar, theo thứ tự từ trái sang phải (nguyên văn) | | | |
| Có ô tìm kiếm không (placeholder nguyên văn) | | | |
| Link "Giỏ hàng": Có badge số lượng không, badge đang hiện số mấy | | | |
| Tên / avatar người dùng hiển thị thế nào | | | |
| Chữ trên nút đăng xuất (nguyên văn) | | | |
| Đang ở `/login`: Mục nào trên navbar được làm nổi bật (khác màu, gạch chân, in đậm), hay không mục nào | | | |
| Đang ở `/register`: Mục nào được làm nổi bật | | | |
| Đang ở `/profile`: Mục nào được làm nổi bật | | | |
| Có footer không, footer có gì | | | |

---

## 7. Câu hỏi mở và ghi chú của sinh viên

Ghi những điểm chưa chắc khi quan sát, hoặc điều thấy lạ mà các bảng trên chưa có chỗ ghi.

| # | Màn hình | Ghi chú / câu hỏi | Ảnh |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

---

## 8. Những gì không ghi ở bước này

Các điểm sau cần DevTools, bàn phím hoặc nhập dữ liệu sai nên **không** khảo sát ở đây. Chúng sẽ thành mục checklist ở bước `ai-draft` và được kiểm ở bước `exec`:

- Thuộc tính HTML của ô nhập (`type="email"`, `type="password"`), số thẻ `<h1>`, thuộc tính `alt` của ảnh.
- Thứ tự focus khi bấm Tab.
- Thông báo lỗi khi nhập sai, vị trí thông báo lỗi so với nút gửi, thông báo khi khóa tài khoản.
- Độ tương phản màu, kích thước chữ đo bằng công cụ.
