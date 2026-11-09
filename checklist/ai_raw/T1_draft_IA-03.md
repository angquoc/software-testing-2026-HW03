# T1 ai-draft: Checklist IA-03 Điều hướng

Bước: `[T1][ai-draft]`, IA-03, bản AI
Tạo lúc: 2026-11-09 15:03

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-03 ở mục 3 (W-06: UI-R41, R42, R43; W-04: UI-R05, R41, R42, R43; W-03: UI-R41, R42, R43), quyết định CH-01 đến CH-10 (nhất là CH-09), giả định GĐ-01 đến GĐ-05, điểm ngoài SRS ở mục 5.1 (dòng 1, 2, 8).
- `00_survey.md` và ảnh `survey_01` đến `survey_08`: Chỉ dùng để biết navbar và trang có những mục, link nào; **không** dùng để đoán kết quả.
- Thông tin sinh viên cung cấp: `tools/seed_orders.py` tạo 5 đơn ở 5 trạng thái và tài khoản `newuser@eshop.com` không có đơn.
- Nguồn ngoài SRS trong slide môn học: Slide "GUI + Usability + Compatibility Testing AI-First" (Nielsen 10 heuristics, Norman 6 principles, checklist Hyperlink của Waghmare, WCAG), template `GUI checklist_Template_Vi.xlsx` (mục 3.xx Navigation check).

Quy ước: Giống bản nháp IA-01.

- Mã mục: `AI-03-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục.
- "Highlight" (UI-R41): Mục navbar của trang đang mở nhìn khác các mục còn lại (màu chữ, màu nền, gạch chân hoặc in đậm) khi **không** rê chuột.

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`), rồi chạy `tools/seed_orders.py` | Mọi mục |
| ĐK-02 | Giỏ hàng có đúng 2 sản phẩm **khác nhau**, mỗi sản phẩm số lượng 1 (thêm từ trang chủ). Chọn dữ liệu này để số sản phẩm và tổng số lượng cùng bằng 2 (xem CHD-09) | AI-03-03 |
| ĐK-03 | Một email chưa đăng ký (ví dụ `ia03.<giờ chạy>@eshop.com`) và mật khẩu hợp lệ `Abcdef1!` | AI-03-01 |
| ĐK-04 | Cửa sổ trình duyệt ở kích thước mặc định của lần chạy, zoom 100% | Mọi mục |

---

## 3. Bảng checklist IA-03

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-03-01 | Sau khi đăng ký thành công, trình duyệt có chuyển tới trang Đăng nhập không? | IA-03 | W-04 (chuyển tới W-03) | UI-R05 | Bàn phím, Chuột (dữ liệu ĐK-03, bấm "Đăng Ký") | URL đổi thành `/login` và trang hiện form đăng nhập |
| AI-03-02 | Mục navbar của trang đang mở có được highlight không? | IA-03 | W-03 (chưa đăng nhập), W-04 (chưa đăng nhập), W-06 (đăng nhập) | UI-R41 (CH-09) | Nhìn (không rê chuột lên navbar) | W-03: "Đăng nhập" khác các mục còn lại. W-04: "Đăng ký" khác các mục còn lại. W-06: Lời chào "Chào, <Họ Tên>" khác cách nó hiện ở W-03, W-04 khi đã đăng nhập |
| AI-03-03 | Khi trang đang mở không có mục tương ứng trên navbar, có mục nào bị highlight sai không? | IA-03 | W-06 (chưa đăng nhập), W-03 (đăng nhập), W-04 (đăng nhập) | UI-R41 (CH-09) | Nhìn | Không mục nào trên navbar nhìn khác các mục còn lại |
| AI-03-04 | Link "Giỏ hàng" có hiện badge số lượng khi giỏ có sản phẩm không? | IA-03 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R42 (GĐ-04) | Nhìn (ĐK-02) | Cạnh chữ "Giỏ hàng" có badge hiện số 2 ở cả 3 màn hình |
| AI-03-05 | Nút đăng xuất trên navbar có nhãn "Đăng xuất" không? | IA-03 | W-06, W-04, W-03 (đã đăng nhập) | UI-R43 | Nhìn | Chữ trên nút là "Đăng xuất" (không phải "Thoát") |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-03-06 | Mỗi link (trên navbar và trong trang, trừ logo: Xem AI-03-07) có dẫn tới đúng trang theo chữ trên link không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Hyperlink ("goes to the correct page"); template mục 3.01 | Chuột (bấm từng link, ghi URL trang mở ra) | "Giỏ hàng": Trang giỏ hàng. "Đăng nhập" (navbar và link ở W-04): `/login`. "Đăng ký" (navbar), "Đăng ký ngay": `/register`. "Quên mật khẩu?": Trang quên mật khẩu. "Chào, <Họ Tên>": `/profile` |
| AI-03-07 | Logo "EShop" có là link về trang chủ không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Template mục 3.04 (có liên kết đến trang chủ ở mỗi trang con) | Chuột | Bấm logo thì về trang chủ `/` |
| AI-03-08 | Khi một link đang được focus, bấm Enter có mở trang như khi bấm chuột không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Hyperlink ("opens on click / Enter"); WCAG 2.2 SC 2.1.1 Keyboard | Bàn phím (Tab tới từng link rồi bấm Enter) | Mọi link mở đúng trang như AI-03-06 |
| AI-03-09 | Khi rê chuột lên mục navbar và link trong trang, chúng có đổi hình thức (gạch chân hoặc đổi màu) không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Template mục 1.08; slide AI-First, checklist Hyperlink ("underlined") | Chuột, Nhìn | Mọi mục navbar và link ("Quên mật khẩu?", "Đăng ký ngay", "Đăng nhập" ở W-04) đổi hình thức khi rê chuột |
| AI-03-10 | Con trỏ chuột có đổi thành bàn tay khi rê lên link và nút không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Norman principle Affordance ("How do I use it?") | Chuột, Nhìn | Con trỏ dạng bàn tay trên mọi link, mục navbar và nút bấm được |
| AI-03-11 | Navbar có cùng các mục, cùng thứ tự, cùng vị trí trên cả 3 màn hình (trong cùng trạng thái đăng nhập) không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 3.2.3 Consistent Navigation; Shneiderman rule 1 | Nhìn (so ảnh chụp 3 trang ở cùng trạng thái) | Chưa đăng nhập: Cùng một bộ mục và thứ tự ở cả 3 trang. Đã đăng nhập: Như vậy |
| AI-03-12 | Mục đích của từng link có hiểu được từ chữ trên link (hoặc tên đọc được bởi công cụ hỗ trợ) không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.4 Link Purpose (In Context) | Nhìn; DevTools (Accessibility, dòng "Name") cho lời chào | Mọi link nói rõ nơi sẽ tới. Riêng lời chào "Chào, <Họ Tên>": Chữ hoặc "Name" cho biết link dẫn tới hồ sơ |
| AI-03-13 | Nút Back của trình duyệt có đưa về đúng trang trước và trang hiện đúng không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột (W-03, bấm "Đăng ký ngay" tới W-04, bấm Back; đã đăng nhập: Trang chủ, bấm lời chào tới W-06, bấm Back) | Về đúng trang trước, trang hiện đầy đủ, không trắng trang hay báo lỗi |
| AI-03-14 | Khi chưa đăng nhập mà mở `/profile`, trang có cho đường đi tới trang đăng nhập không? | IA-03 | W-06 (chưa đăng nhập) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors); `01_oracle.md` mục 5.1 dòng 1 | Nhìn, Chuột | Có link hoặc nút tới `/login` ngay trong thông báo, hoặc trang tự chuyển sang `/login` |
| AI-03-15 | Khi đã đăng nhập mà mở `/login` hoặc `/register`, trang có tránh hiện lại form như chưa đăng nhập không? | IA-03 | W-03 (đăng nhập), W-04 (đăng nhập) | Khuyến nghị: Nielsen heuristic 5 (Error prevention); `01_oracle.md` mục 5.1 dòng 2 | Nhìn | Trang tự chuyển đi (ví dụ trang chủ hoặc hồ sơ), hoặc báo đã đăng nhập; không hiện form trống để đăng nhập / đăng ký lại |
| AI-03-16 | Sau khi đăng nhập thành công, trang có rời `/login` và navbar có chuyển sang trạng thái đã đăng nhập không? | IA-03 | W-03 | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Bàn phím, Chuột (`test@eshop.com` / `Test1234!`, bấm "Sign In") | URL không còn là `/login`; navbar có lời chào và nút đăng xuất |
| AI-03-17 | Sau khi bấm nút đăng xuất ở trang hồ sơ, trang có thôi hiện dữ liệu hồ sơ và navbar có về trạng thái chưa đăng nhập không? | IA-03 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Chuột | Không còn thấy form hồ sơ và lịch sử đơn; navbar có "Đăng nhập", "Đăng ký" |
| AI-03-18 | Trang có vùng điều hướng và vùng nội dung chính được đánh dấu (`<nav>`, `<main>`) để công cụ hỗ trợ nhảy thẳng tới nội dung không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.1 Bypass Blocks, SC 1.3.1 Info and Relationships | DevTools (Elements, hoặc cây Accessibility) | Navbar nằm trong `<nav>` (hoặc vai trò `navigation`), nội dung trang nằm trong `<main>` (hoặc vai trò `main`) |

---

## 4. Truy vết oracle IA-03

| Oracle | Mục |
|---|---|
| UI-R05 | AI-03-01 |
| UI-R41 | AI-03-02, AI-03-03 |
| UI-R42 | AI-03-04 |
| UI-R43 | AI-03-05 |
| Ngoài SRS (khuyến nghị) | AI-03-06 đến AI-03-18 |

Tổng: 18 mục (5 căn cứ SRS, 13 khuyến nghị).

---

## 5. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Breadcrumb (UI-R44) | `Không áp dụng` theo `01_oracle.md` (GĐ-01) |
| Thứ tự Tab trên navbar | Đã có ở AI-01-15 (IA-01) |
| Màu chữ link đã truy cập (template mục 1.07) | Ứng dụng một trang, link nằm trên navbar dùng chung; khó tạo điều kiện "đã truy cập" ổn định để kết luận |
| Template mục 3.05 (thông báo khi chuyển trang) | Không phải quy ước phổ biến của web hiện nay, không có nguồn khác trong slide ủng hộ |
| Mã đơn ở lịch sử đơn là link tới chi tiết đơn | SRS không có trang chi tiết đơn cho User; survey thấy mã đơn không phải link |
| Badge khi giỏ trống (hiện 0 hay ẩn) | SRS không nói (GĐ-04) |
| Badge cập nhật ngay khi thêm sản phẩm, không cần tải lại | Thao tác thêm sản phẩm ở trang khác (ngoài phạm vi); UI-R45 `Không áp dụng` |

---

## 6. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Liên quan |
|---|---|---|
| CHD-09 | UI-R42 ghi "badge số lượng sản phẩm trong giỏ": Là số **loại** sản phẩm hay **tổng số lượng**? ĐK-02 chọn dữ liệu để hai cách hiểu cho cùng kết quả. Có cần thêm một mục với 1 sản phẩm số lượng 2 để chốt cách hiểu không? | AI-03-04 |
| CHD-10 | AI-03-03 mở rộng quyết định CH-09 cho W-03, W-04 khi đã đăng nhập (navbar không có mục "Đăng nhập", "Đăng ký" nên không mục nào được highlight). Đồng ý mở rộng không? | AI-03-03 |
| CHD-11 | AI-03-15 cho rằng người đã đăng nhập không nên thấy lại form đăng nhập / đăng ký. SRS không nói; có giữ mục này (khuyến nghị) không? | AI-03-15 |
