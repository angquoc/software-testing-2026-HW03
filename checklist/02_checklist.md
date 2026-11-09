# T1 checklist: Checklist đã review

Bước: `[T1][review]` (phần mục AI) và `[T1][add]` (phần mục SV thêm)
Bản AI gốc: `ai_raw/T1_draft_IA-01.md` (2026-11-09 12:52), `ai_raw/T1_draft_IA-02.md`, `ai_raw/T1_draft_IA-03.md`, `ai_raw/T1_draft_IA-04.md` (2026-11-09 15:03)
Cập nhật: 2026-11-09 16:39 (bước `review`), 2026-11-10 00:34 (bước `add`)

Ai làm phần nào:

- Sinh viên review từng mục AI (giữ, sửa, bỏ, gộp, tách) và trả lời các câu hỏi mở CHD-01 đến CHD-16.
- Với IA-02, IA-03, IA-04: AI lọc trước theo yêu cầu của sinh viên (mục kiểm nhiều điều, mục mơ hồ, mục trùng, nguồn yếu, mục lệch với `01_oracle.md`). Sinh viên quyết định từng đề xuất.
- AI soạn file này theo quyết định của sinh viên; sinh viên kiểm tra lại. Mọi thay đổi về nội dung ghi ở mục 9.
- Phần mục sinh viên tự thêm (bước `add`, mục 5): Sinh viên viết nội dung; AI kiểm tra định dạng, nguồn, phạm vi và sửa theo quyết định của sinh viên.

---

## 1. Quy ước

- Mã mục cuối: `CL-<số>`, giữ cố định sau khi chốt (Excel, ảnh, issue đều dẫn chiếu mã này).
- Cột "Nguồn": `AI` (giữ nguyên nội dung của bản AI), `AI, SV sửa` (kèm mã `AI-xx-xx` gốc), `SV thêm`.
- Cột "Oracle": Mã `UI-Rxx` khi căn cứ là SRS (`01_oracle.md`). Mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ (Lighthouse, axe). DevTools và công cụ chỉ dùng ở bước `exec`.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục; cột "Màn hình" liệt kê các màn hình áp dụng.
- Trạng thái của W-06: "W-06 (đăng nhập)" là trang hồ sơ khi đã đăng nhập; "W-06 (chưa đăng nhập)" là trang chỉ hiện "Vui lòng đăng nhập" (GĐ-02).
- Kết quả mỗi mục: **Passed** hoặc **Failed**. Mục (hoặc phần màn hình của mục) không chạy được vì phụ thuộc vào một mục khác, hay vì trạng thái màn hình không tạo được, ghi **"Không chạy được"** kèm lý do, không tính vào Passed / Failed (CHD-05).
- Trạng thái màn hình có thể không tạo được (CHD-11):
  - Nếu khi đã đăng nhập, mở `/login` hoặc `/register` mà trang tự chuyển đi (CL-79 Passed), mọi phần kiểm W-03, W-04 ở trạng thái đã đăng nhập ghi "Không chạy được".
  - Nếu khi chưa đăng nhập, mở `/profile` mà trang tự chuyển sang `/login` (một trường hợp Passed của CL-78), mọi phần kiểm W-06 chưa đăng nhập ghi "Không chạy được".
- Highlight trên navbar (UI-R41): Mục navbar của trang đang mở nhìn khác **chính mục đó** khi đang ở trang khác (màu chữ, màu nền, gạch chân hoặc in đậm), quan sát khi **không** rê chuột.

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`), rồi chạy `tools/seed_orders.py`. Script tạo 5 đơn ở 5 trạng thái cho `test@eshop.com` / `Test1234!` và tài khoản `newuser@eshop.com` / `NewUser123!` không có đơn | Mọi mục |
| ĐK-02 | Cửa sổ trình duyệt ở kích thước mặc định của lần chạy (ghi vào môi trường chạy), zoom 100% | Mọi mục, trừ khi mục ghi khác |
| ĐK-03 | Mỗi lần kiểm thông báo lỗi của form, bắt đầu từ form trống (tải lại trang) | CL-38 đến CL-41, CL-47, CL-50, CL-55 đến CL-60 |
| ĐK-04 | Giỏ hàng có đúng 2 sản phẩm **khác nhau**, mỗi sản phẩm số lượng 1, thêm từ trang chủ khi đang đăng nhập `test@eshop.com` | CL-68 |
| ĐK-05 | Giỏ hàng có đúng 1 sản phẩm, số lượng 2, thêm khi đang đăng nhập `test@eshop.com` | CL-69 |
| ĐK-06 | Một email chưa đăng ký (ví dụ `ia03.<giờ chạy>@eshop.com`) và mật khẩu hợp lệ `Abcdef1!` | CL-65, CL-104, CL-112 |
| ĐK-07 | Giả lập mạng chậm: DevTools, tab Network, chọn "Slow 4G" (hoặc "3G") | CL-94 đến CL-96, CL-112 |
| ĐK-08 | Các mục hủy đơn làm đổi dữ liệu: Chạy lại ĐK-01 trước mỗi mục CL-88, CL-97 đến CL-100 | CL-88, CL-97 đến CL-100 |
| ĐK-09 | Các mục khóa tài khoản làm `test@eshop.com` bị khóa 30 giây: Chạy sau cùng, hoặc chờ hết 30 giây trước mục kế tiếp | CL-89, CL-90 |

---

## 3. Checklist

### 3.1 IA-01 Tiêu chuẩn giao diện chung

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-01 | Nhãn của mọi ô nhập và placeholder có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi nhãn và placeholder là tiếng Việt; chỉ được giữ tiếng Anh các thuật ngữ kỹ thuật chuẩn theo CH-03 (ví dụ Email) | AI (AI-01-01) |
| CL-02 | Chữ trên mọi nút và link trong nội dung trang có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi chữ trên nút và link là tiếng Việt, trừ thuật ngữ kỹ thuật chuẩn theo CH-03 | AI (AI-01-02) |
| CL-03 | Các tiêu đề trên trang (tiêu đề trang, tiêu đề khối, tiêu đề cột bảng) có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi tiêu đề là tiếng Việt, trừ thuật ngữ kỹ thuật chuẩn theo CH-03 | AI (AI-01-03) |
| CL-04 | Các mục trên navbar và chữ ở footer có dùng tiếng Việt không? | IA-01 | W-06, W-04, W-03 (navbar ở cả hai trạng thái đăng nhập) | UI-R31 | Nhìn | Mọi mục navbar và chữ footer là tiếng Việt; tên cửa hàng "EShop" không xét (GĐ-05) | AI (AI-01-04) |
| CL-05 | Các thông báo hiển thị cho người dùng có dùng tiếng Việt không? Gồm: Thông báo khi chưa đăng nhập, thông báo lịch sử đơn trống, thông báo lỗi và thông báo thành công sau khi gửi form, thông báo hủy đơn (thành công và bị từ chối), thông báo khóa tài khoản, thông báo mất kết nối, thông báo hết phiên đăng nhập | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R31 | Nhìn (ghi lại các thông báo xuất hiện khi chạy CL-38 đến CL-41, CL-50, CL-88 đến CL-93, CL-100 đến CL-105, CL-108) | Mọi thông báo là tiếng Việt, không có thông báo kỹ thuật tiếng Anh (ví dụ thông báo lỗi trả thẳng từ server, "Network Error", "Failed to fetch"). Thông báo nào không xuất hiện thì không xét | AI, SV sửa (AI-01-05) |
| CL-06 | Tiêu đề trên tab trình duyệt có dùng tiếng Việt không? | IA-01 | W-06, W-04, W-03 | UI-R31 | Nhìn | Tiêu đề tab là tiếng Việt (không phải tên kỹ thuật của dự án) | AI (AI-01-06) |
| CL-07 | Chữ trạng thái đơn trong bảng lịch sử có là tiếng Việt và khác nhau cho từng trạng thái không? Kiểm theo ma trận ở mục 4 | IA-01 | W-06 (đăng nhập) | UI-R30, UI-R31 | Nhìn | Cả 5 trạng thái hiển thị bằng chữ tiếng Việt (không hiện mã `pending`, `confirmed`...), và 5 chữ khác nhau. Phần màu của trạng thái kiểm ở CL-84 | AI (AI-01-07) |
| CL-08 | Nút hành động tích cực (nút Submit của form: "Sign In", "Đăng Ký", "Cập nhật") có nền màu xanh dương không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R32 | Nhìn | Nền của cả 3 nút là màu xanh dương | AI (AI-01-08) |
| CL-09 | Nút nguy hiểm / hủy bỏ ("Hủy đơn" và nút đăng xuất trên navbar) có nền màu đỏ không? | IA-01 | W-06, W-04, W-03 (nút đăng xuất khi đã đăng nhập); W-06 (nút "Hủy đơn") | UI-R32 (CH-02) | Nhìn | Nền của nút "Hủy đơn" và nút đăng xuất là màu đỏ | AI (AI-01-09) |
| CL-10 | Mọi số tiền trong cột Tổng tiền có ký hiệu `₫` không? | IA-01 | W-06 (đăng nhập) | UI-R33 | Nhìn | Mọi dòng có ký hiệu `₫` (không dùng "đ", "VND", "VNĐ") | AI (AI-01-10) |
| CL-11 | Số tiền có phân cách hàng nghìn bằng dấu phẩy không? | IA-01 | W-06 (đăng nhập) | UI-R33 (CH-04) | Nhìn | Mọi số tiền có phân cách hàng nghìn bằng dấu phẩy, ví dụ `300,000` | AI (AI-01-11) |
| CL-12 | Ký hiệu `₫` có đặt sau số, cách số một khoảng trắng không? | IA-01 | W-06 (đăng nhập) | UI-R33 (CH-04) | Nhìn | Dạng `300,000 ₫` ở mọi dòng | AI (AI-01-12) |
| CL-13 | Mỗi trang có đúng một thẻ `<h1>` không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R20, UI-R34 | DevTools (đếm `<h1>` trong Elements, hoặc chạy `document.querySelectorAll('h1').length` trong Console) | Mỗi trang có đúng 1 thẻ `<h1>` | AI (AI-01-13) |
| CL-14 | Nội dung thẻ `<h1>` có mô tả đúng trang đang mở không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R34 | DevTools (đọc chữ trong `<h1>`) | `<h1>` của W-03 nói về đăng nhập, của W-04 nói về đăng ký, của W-06 nói về hồ sơ cá nhân (hoặc hồ sơ và lịch sử đơn) | AI (AI-01-14) |
| CL-15 | Khi bấm Tab từ đầu trang, focus có đi qua các mục navbar theo thứ tự từ trái sang phải trước khi vào nội dung trang không? | IA-01 | W-06, W-04, W-03 | UI-R35 | Bàn phím (bấm vào thanh địa chỉ rồi Tab liên tục) | Focus đi: Logo "EShop" (nếu logo là link), rồi các mục navbar từ trái sang phải, rồi mới tới phần tử đầu tiên của nội dung | AI (AI-01-15) |
| CL-16 | Trong form, focus có đi từ trên xuống dưới theo đúng thứ tự hiển thị không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R35 | Bàn phím | Thứ tự focus theo đúng vị trí các phần tử trên bố cục **thực tế lúc chạy** (CHD-04). Theo survey: W-03: "Username" (ô thứ nhất), "Mật khẩu", "Quên mật khẩu?", "Sign In", "Đăng ký ngay". W-04: "Họ Tên", "Email", "Mật khẩu", "Đăng Ký", "Đăng nhập". W-06: "Họ Tên", "Số điện thoại", "Địa chỉ giao hàng", "Cập nhật" (ô Email: Xem CL-22) | AI, SV sửa (AI-01-16) |
| CL-17 | Ở W-06, focus có đi hết khối bên trái (form hồ sơ) rồi mới sang khối bên phải (lịch sử đơn), và trong bảng đi từ dòng trên xuống dòng dưới không? | IA-01 | W-06 (đăng nhập, có đơn) | UI-R35 (GĐ-03) | Bàn phím | Sau nút "Cập nhật", focus tới nút "Hủy đơn" của dòng trên cùng có nút này, rồi lần lượt xuống các dòng dưới. Nếu bố cục lúc chạy khác survey thì lấy thứ tự theo bố cục thực tế (CHD-04) | AI, SV sửa (AI-01-17) |
| CL-18 | Bảng lịch sử đơn có hiển thị đủ 4 thông tin: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái không? | IA-01 | W-06 (đăng nhập, có đơn) | UI-R29 | Nhìn | Có đủ 4 cột (hoặc 4 thông tin) cho mọi đơn, không ô nào trống | AI (AI-01-18) |
| CL-19 | Thẻ `<html>` có khai báo ngôn ngữ tiếng Việt không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 3.1.1 Language of Page | DevTools (xem thuộc tính `lang` của `<html>`) | `<html lang="vi">` | AI (AI-01-19) |
| CL-20 | Tiêu đề tab trình duyệt có mô tả đúng trang và khác nhau giữa các trang không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.2 Page Titled | Nhìn | Mỗi trang có tiêu đề tab riêng, nói đúng chức năng trang (ví dụ có chữ "Đăng nhập" ở W-03) | AI (AI-01-20) |
| CL-21 | Khi bấm Tab, phần tử đang được focus có dấu hiệu nhìn thấy được (viền, khung, đổi màu) không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.7 Focus Visible | Bàn phím, Nhìn | Mọi phần tử nhận focus (ô nhập, nút, link, mục navbar) đều có dấu hiệu focus thấy rõ | AI (AI-01-21) |
| CL-22 | Ô Email bị khóa ở W-06 có được khai báo không sửa được bằng thuộc tính chuẩn HTML (`readonly` hoặc `disabled`) không? | IA-01 | W-06 (đăng nhập) | Khuyến nghị: HTML Living Standard (thuộc tính `readonly`, `disabled`); WCAG 2.2 SC 4.1.2 Name, Role, Value | DevTools (Elements, phần Accessibility); Bàn phím (Tab qua ô để đối chiếu) | Ô có thuộc tính `readonly` hoặc `disabled`, và phần Accessibility hiện trạng thái tương ứng ("Read-only: true" hoặc "Disabled: true"). Hành vi Tab khớp với thuộc tính: `readonly` thì Tab dừng ở ô, `disabled` thì Tab bỏ qua ô. Cả hai trường hợp đều Passed. Failed khi ô chỉ bị khóa bằng hình thức (ví dụ tô xám) mà không có thuộc tính nào trong hai thuộc tính trên. (Việc gõ phím không đổi được giá trị kiểm ở CL-49) | AI, SV sửa (AI-01-22) |
| CL-23 | Độ tương phản giữa chữ và nền có đạt tối thiểu 4.5:1 (chữ thường) và 3:1 (chữ lớn) không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.3 Contrast (Minimum) | Công cụ (Lighthouse hoặc axe DevTools, mục Contrast) | Công cụ không báo lỗi tương phản. Cần xem kỹ: Placeholder, dòng hướng dẫn nhỏ màu xám, lời chào trên navbar, nhãn trạng thái đơn, chữ trắng trên nút đỏ | AI (AI-01-23) |
| CL-24 | Ngày đặt có hiển thị theo thứ tự ngày / tháng / năm không? | IA-01 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide S13 (Localization and Internationalization); slide AI-First, checklist Date field ("correct entry format") | Nhìn (đối chiếu với ngày tạo đơn thật của `tools/seed_orders.py`; chọn đơn có số ngày khác số tháng để phân biệt) | Ngày hiển thị dạng ngày / tháng / năm theo quy ước tiếng Việt, ví dụ đơn tạo ngày 9 tháng 11 năm 2026 hiện "9/11/2026" hoặc "09/11/2026" | AI, SV sửa (AI-01-24) |
| CL-25 | Cùng một hành động có dùng cùng một từ ở mọi chỗ (navbar, tiêu đề trang, nút, link) không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: Nielsen heuristic 4 (Consistency and standards) | Nhìn | Ví dụ: Hành động đăng nhập dùng cùng một từ ở mục navbar, tiêu đề trang, nút gửi và link trên trang Đăng ký; tương tự cho đăng ký | AI (AI-01-25) |
| CL-26 | Các tiêu đề trên 3 màn hình có dùng cùng một kiểu viết hoa không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Shneiderman rule 1 (Strive for consistency); template mục 1.18 | Nhìn | Mọi tiêu đề cùng kiểu: Hoặc chỉ viết hoa chữ đầu, hoặc viết hoa chữ đầu mọi từ | AI (AI-01-26) |
| CL-27 | Chữ trên các nút và mục navbar có dùng cùng một kiểu viết hoa không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: Shneiderman rule 1 (Strive for consistency) | Nhìn | Mọi nút và mục navbar cùng một kiểu viết hoa | AI (AI-01-27) |
| CL-28 | Nhãn ô nhập trên 3 màn hình có cùng font, cỡ chữ và màu không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Template mục 1.12 (font nhất quán theo từng loại thành phần) | DevTools (Computed: `font-family`, `font-size`, `color` của nhãn) | Ba giá trị giống nhau ở mọi nhãn | AI (AI-01-28) |
| CL-29 | Các nút Submit ("Sign In", "Đăng Ký", "Cập nhật") có cùng chiều cao, font và bo góc không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Button ("All buttons similar size/shape, same font") | DevTools (Computed: `height`, `font-family`, `font-size`, `border-radius`) | Các giá trị giống nhau ở cả 3 nút | AI (AI-01-29) |
| CL-30 | Cỡ chữ của tiêu đề có lớn hơn cỡ chữ nội dung và nhãn không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Template mục 1.15 | DevTools (Computed `font-size`) hoặc Nhìn | Tiêu đề có `font-size` lớn hơn nhãn và nội dung thường | AI (AI-01-30) |
| CL-31 | Trong mỗi form, nhãn và ô nhập có canh lề trái thẳng hàng với nhau không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Text Box ("alignment consistent with siblings") | Nhìn (hoặc DevTools đo vị trí cạnh trái) | Cạnh trái của mọi nhãn và ô nhập trong cùng form thẳng một hàng | AI (AI-01-31) |
| CL-32 | Ở cửa sổ 1366 x 768, trang có hiển thị đủ nội dung, không chữ bị cắt, không phần tử chồng lên nhau, không có thanh cuộn ngang không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: Template mục 1.17; slide AI-First (ví dụ OrangeHRM: "Does the layout hold at 1366x768") | DevTools (Device Toolbar, đặt 1366 x 768) | Không có chữ bị cắt, chồng lấn hay thanh cuộn ngang | AI (AI-01-32) |
| CL-33 | Khi zoom trình duyệt 200%, mọi nội dung và chức năng vẫn dùng được, không bị cắt hay chồng lấn không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.4 Resize Text | Bàn phím (Ctrl và dấu +), Nhìn | Đọc được mọi chữ, bấm được mọi nút, không chồng lấn | AI (AI-01-33) |
| CL-34 | Khi Họ Tên dài (ví dụ 50 ký tự hợp lệ), lời chào trên navbar và ô "Họ Tên" có hiển thị gọn, không tràn hay đẩy lệch các mục khác không? | IA-01 | W-06, W-04, W-03 (navbar khi đã đăng nhập) | Khuyến nghị: Slide S13 ("text overflow, misalignment") | Nhìn (cập nhật Họ Tên dài ở W-06, rồi xem navbar ở cả 3 trang) | Lời chào không tràn ra ngoài navbar, không đẩy nút đăng xuất xuống dòng; ô "Họ Tên" hiển thị được chữ (cuộn trong ô nếu dài) | AI (AI-01-34) |
| CL-35 | Chữ hiển thị trên 3 màn hình có lỗi chính tả hoặc sai dấu tiếng Việt không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | Khuyến nghị: Slide AI-First, danh sách thành phần GUI cần kiểm ("orthography") | Nhìn | Không có lỗi chính tả, không sai dấu | AI (AI-01-35) |

### 3.2 IA-02 Form

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-36 | Form đăng ký có đủ 3 ô Họ Tên, Email, Mật khẩu không? | IA-02 | W-04 | UI-R01 | Nhìn | Có 3 ô với nhãn Họ Tên, Email, Mật khẩu | AI (AI-02-01) |
| CL-37 | Form đăng ký có ô "Xác nhận mật khẩu" không? | IA-02 | W-04 | UI-R04 | Nhìn | Có ô nhập thứ hai cho mật khẩu, nhãn chứa cụm "Xác nhận mật khẩu" hoặc "Nhập lại mật khẩu" | AI, SV sửa (AI-02-02) |
| CL-38 | Khi Mật khẩu và Xác nhận mật khẩu không khớp, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R04 | Bàn phím (Họ Tên hợp lệ, email mới, Mật khẩu `Abcdef1!`, Xác nhận `Abcdef2!`, bấm "Đăng Ký") | Có thông báo lỗi, vẫn ở trang Đăng ký. Nếu CL-37 Failed (không có ô Xác nhận mật khẩu) thì ghi "Không chạy được" | AI, SV sửa (AI-02-03) |
| CL-39 | Khi Email sai định dạng, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R02 | Bàn phím (lần lượt `abc`, `abc@`, `@domain.com`, các ô khác hợp lệ, bấm "Đăng Ký") | Mỗi giá trị đều làm hiện thông báo lỗi (của trình duyệt hoặc của trang), vẫn ở trang Đăng ký | AI, SV sửa (AI-02-04) |
| CL-40 | Khi Email đã tồn tại, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R02 | Bàn phím (Email `test@eshop.com`, các ô khác hợp lệ) | Có thông báo lỗi, vẫn ở trang Đăng ký | AI, SV sửa (AI-02-05) |
| CL-41 | Khi mật khẩu yếu, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R03 | Bàn phím (Mật khẩu `abcdefgh`, các ô khác hợp lệ, bấm "Đăng Ký") | Có thông báo lỗi, vẫn ở trang Đăng ký | AI, SV sửa (AI-02-06) |
| CL-42 | Nhãn ô thứ nhất của form đăng nhập có cho biết người dùng phải nhập Email không? | IA-02 | W-03 | UI-R06 | Nhìn | Nhãn là "Email" (hoặc có chữ Email), khớp với UI-R06 | AI (AI-02-07) |
| CL-43 | Nhãn của các trường bắt buộc có dấu `*` bên cạnh không? | IA-02 | W-04, W-03 | UI-R36 (CH-01) | Nhìn | W-04: Họ Tên, Email, Mật khẩu, Xác nhận mật khẩu (nếu có ô này) đều có `*`. W-03: Email, Mật khẩu đều có `*` | AI (AI-02-08) |
| CL-44 | Các ô Email có dùng `type="email"` không? | IA-02 | W-06 (đăng nhập, cả ô Email bị khóa), W-04, W-03 | UI-R10, UI-R37 (CH-08) | DevTools (Elements, xem thuộc tính `type` của ô) | Cả 3 ô Email có `type="email"` | AI (AI-02-09) |
| CL-45 | Ô Email của form đăng nhập có chặn định dạng sai bằng validate HTML5 không? | IA-02 | W-03 | UI-R10 | Bàn phím (nhập `abc`, mật khẩu bất kỳ, bấm "Sign In") | Trình duyệt hiện bong bóng báo lỗi định dạng email ngay tại ô, form không được gửi | AI (AI-02-10) |
| CL-46 | Các ô mật khẩu có dùng `type="password"` không? | IA-02 | W-04, W-03 | UI-R38 | DevTools (Elements) | Ô Mật khẩu (và Xác nhận mật khẩu nếu có) ở W-04, ô Mật khẩu ở W-03 có `type="password"` | AI (AI-02-11) |
| CL-47 | Thông báo lỗi của form có nằm **trên** nút gửi không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | UI-R39 | Bàn phím, Nhìn (W-06: Số điện thoại `123`, bấm "Cập nhật"; W-04: email trùng như CL-40; W-03: đúng email, sai mật khẩu, bấm "Sign In") | Ở cả 3 màn hình, thông báo lỗi do trang hiển thị nằm phía trên nút gửi, không nằm dưới nút. Bong bóng validate của trình duyệt không tính (CHD-06). Màn hình nào không hiện thông báo của trang (CL-40, CL-50, CL-103 Failed) thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-02-13) |
| CL-48 | Ba ô Họ Tên, Số điện thoại, Địa chỉ giao hàng có sửa được không? | IA-02 | W-06 (đăng nhập) | UI-R13 | Chuột, Bàn phím (bấm vào từng ô và gõ thêm chữ) | Gõ được vào cả 3 ô | AI (AI-02-14) |
| CL-49 | Ô Email có bị khóa, không sửa được không? | IA-02 | W-06 (đăng nhập) | UI-R15 | Chuột, Bàn phím (bấm vào ô Email và gõ) | Giá trị ô Email không đổi | AI (AI-02-15) |
| CL-50 | Khi Số điện thoại không hợp lệ, form có hiện thông báo lỗi không? | IA-02 | W-06 (đăng nhập) | UI-R14 | Bàn phím (Số điện thoại `123`, bấm "Cập nhật") | Có thông báo lỗi, vẫn ở trang hồ sơ | AI, SV sửa (AI-02-16) |
| CL-51 | Form hồ sơ có ô hay lựa chọn nào để đổi vai trò (`role`) không? | IA-02 | W-06 (đăng nhập) | UI-R16 (CH-05) | Nhìn | Không có ô, dropdown hay lựa chọn nào liên quan tới vai trò | AI (AI-02-18) |
| CL-52 | Khi mở trang hồ sơ, các ô có hiện sẵn đúng dữ liệu hiện tại của tài khoản không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, checklist Text Box ("Correct pre-population or blank") | Nhìn (đăng nhập `test@eshop.com`; cập nhật Số điện thoại `0912345678`, Địa chỉ giao hàng `227 Nguyễn Văn Cừ`, bấm "Cập nhật", rồi tải lại trang) | Ô Email hiện `test@eshop.com`; Họ Tên, Số điện thoại, Địa chỉ giao hàng hiện đúng các giá trị vừa lưu | AI, SV sửa (AI-02-19) |
| CL-53 | Ô Email bị khóa có nhìn khác các ô sửa được không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, checklist Text Box ("disabled = greyed") | Nhìn | Ô Email có nền khác các ô sửa được | AI, SV sửa (AI-02-20) |
| CL-54 | Mỗi ô nhập có tên đọc được bởi công cụ hỗ trợ (nhãn gắn với ô) không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships, SC 4.1.2 Name, Role, Value; slide AI-First, checklist Text Box ("Correct label") | DevTools (Elements, chọn ô, xem phần Accessibility, dòng "Name"). Cách kiểm phụ: Bấm vào chữ nhãn xem con trỏ có nhảy vào ô không | Mọi ô có "Name" khớp với nhãn nhìn thấy | AI, SV sửa (AI-02-21) |
| CL-55 | Thông báo lỗi có cho biết ô nào bị lỗi không? | IA-02 | W-06 (đăng nhập), W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.1 Error Identification; Nielsen heuristic 9 | Bàn phím, Nhìn (dùng dữ liệu sai của CL-39, CL-41, CL-50) | Thông báo có tên ô (Email, Mật khẩu, Số điện thoại), hoặc nằm ngay dưới ô bị lỗi. Thông báo nào không xuất hiện thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-02-22) |
| CL-56 | Thông báo lỗi có nêu điều kiện cần đạt để sửa không? | IA-02 | W-06 (đăng nhập), W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.3 Error Suggestion; Nielsen heuristic 9 | Bàn phím, Nhìn (dùng dữ liệu sai của CL-39, CL-41, CL-50) | Thông báo nêu điều kiện cần đạt, ví dụ mật khẩu yếu thì nêu "tối thiểu 8 ký tự" hoặc điều kiện còn thiếu; số điện thoại sai thì nêu "bắt đầu bằng 0, 10 đến 11 chữ số". Thông báo nào không xuất hiện thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-02-22) |
| CL-57 | Khi gửi form có lỗi, focus có được đưa về ô bị lỗi không? | IA-02 | W-06 (đăng nhập), W-04 | Khuyến nghị: Slide AI-First, "Golden rule: On error, return focus to the offending field"; template mục 3.14 | Bàn phím, Nhìn (chỉ dùng lỗi do trang báo: W-04 email trùng như CL-40, W-06 Số điện thoại `123`; gửi form bằng chuột, rồi gõ phím ngay) | W-04: Ký tự gõ vào nằm ở ô Email. W-06: Ký tự gõ vào nằm ở ô Số điện thoại. Thông báo nào không xuất hiện thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-02-23) |
| CL-58 | Ô bị lỗi có được làm nổi bật không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, "Golden rule: ... highlight it" | Nhìn | Ô bị lỗi nhìn khác các ô còn lại (viền, nền hoặc biểu tượng) | AI, SV sửa (AI-02-24) |
| CL-59 | Sau khi form báo lỗi, các ô không có lỗi có giữ nguyên dữ liệu đã nhập không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Shneiderman rule 5 (Offer simple error handling) | Bàn phím, Nhìn (W-04: Họ Tên, Email hợp lệ, mật khẩu yếu; W-06: Họ Tên mới, số điện thoại sai) | Họ Tên, Email (W-04) và Họ Tên, Địa chỉ (W-06) vẫn còn giá trị vừa nhập. Ô mật khẩu được xóa hay giữ đều Passed | AI (AI-02-25) |
| CL-60 | Ô Họ Tên có từ chối giá trị chỉ gồm khoảng trắng không? | IA-02 | W-04 | Khuyến nghị: Slide AI-First, checklist Text Box ("Rejects spaces-only") | Bàn phím (gõ 3 dấu cách, các ô khác hợp lệ, bấm nút gửi) | Có thông báo lỗi, giá trị không được chấp nhận | AI, SV sửa (AI-02-26) |
| CL-61 | Bấm Enter trong ô một dòng có gửi form không? | IA-02 | W-06 (đăng nhập, ô Họ Tên), W-04 (ô Mật khẩu), W-03 (ô Mật khẩu) | Khuyến nghị: Slide AI-First, checklist Button ("One default button ... fires on Enter") | Bàn phím | Form được gửi như khi bấm nút gửi (có phản hồi: Chuyển trang, thông báo lỗi hoặc thông báo thành công) | AI (AI-02-27) |
| CL-62 | Các ô Email, Mật khẩu, Số điện thoại có khai báo mục đích nhập (thuộc tính `autocomplete`) phù hợp không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.3.5 Identify Input Purpose | DevTools (Elements) | Mỗi ô Email, Mật khẩu, Số điện thoại có thuộc tính `autocomplete` với giá trị đúng loại dữ liệu của ô | AI, SV sửa (AI-02-28) |
| CL-63 | Ô mật khẩu ở form đăng nhập có cho dán (Ctrl + V) không? | IA-02 | W-03 | Khuyến nghị: WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum) (cho phép dùng trình quản lý mật khẩu, dán) | Bàn phím (sao chép `Test1234!` rồi dán vào ô) | Ô nhận đủ ký tự đã dán (đếm số dấu che bằng số ký tự) | AI, SV sửa (AI-02-29) |
| CL-64 | Dòng hướng dẫn mật khẩu ở form đăng ký có nêu đủ điều kiện của SRS không? | IA-02 | W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.2 Labels or Instructions; nội dung đối chiếu với UI-R03 | Nhìn | Dòng hướng dẫn nêu đủ 5 điều kiện: Tối thiểu 8 ký tự, chữ hoa, chữ thường, chữ số, ký tự đặc biệt | AI, SV sửa (AI-02-30) |

### 3.3 IA-03 Điều hướng

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-65 | Sau khi đăng ký thành công, trình duyệt có chuyển tới trang Đăng nhập không? | IA-03 | W-04 (chuyển tới W-03) | UI-R05 | Bàn phím, Chuột (dữ liệu ĐK-06, bấm "Đăng Ký") | URL đổi thành `/login` và trang hiện form đăng nhập | AI (AI-03-01) |
| CL-66 | Mục navbar của trang đang mở có được highlight không? | IA-03 | W-03 (chưa đăng nhập), W-04 (chưa đăng nhập), W-06 (đăng nhập) | UI-R41 (CH-09) | Nhìn (không rê chuột lên navbar; so với cách chính mục đó hiện ở trang chủ) | W-03: "Đăng nhập" nhìn khác cách nó hiện ở trang chủ. W-04: "Đăng ký" nhìn khác cách nó hiện ở trang chủ. W-06: Lời chào "Chào, <Họ Tên>" nhìn khác cách nó hiện ở trang chủ | AI, SV sửa (AI-03-02) |
| CL-67 | Khi trang đang mở không có mục tương ứng trên navbar, có mục nào bị highlight sai không? | IA-03 | W-06 (chưa đăng nhập), W-03 (đăng nhập), W-04 (đăng nhập) | UI-R41 (CH-09, CHD-10) | Nhìn (không rê chuột) | Mọi mục navbar hiện giống hệt khi ở trang chủ (cùng trạng thái đăng nhập) | AI, SV sửa (AI-03-03) |
| CL-68 | Link "Giỏ hàng" có hiện badge số lượng khi giỏ có sản phẩm không? | IA-03 | W-06 (đăng nhập), W-04 (đăng nhập), W-03 (đăng nhập) | UI-R42 (GĐ-04) | Nhìn (ĐK-04) | Cạnh chữ "Giỏ hàng" có badge hiện số 2 ở cả 3 màn hình | AI, SV sửa (AI-03-04) |
| CL-69 | Badge của "Giỏ hàng" có đếm theo tổng số lượng sản phẩm không? | IA-03 | W-06 (đăng nhập) | UI-R42 (CHD-09: Badge đếm tổng số lượng) | Nhìn (ĐK-05) | Badge hiện số 2 (không phải 1) | SV thêm (từ CHD-09 của bản AI IA-03) |
| CL-70 | Nút đăng xuất trên navbar có nhãn "Đăng xuất" không? | IA-03 | W-06, W-04, W-03 (đã đăng nhập) | UI-R43 | Nhìn | Chữ trên nút là "Đăng xuất" (không phải "Thoát") | AI (AI-03-05) |
| CL-71 | Mỗi link (trên navbar và trong trang, trừ logo: Xem CL-72) có dẫn tới đúng trang theo chữ trên link không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Hyperlink ("goes to the correct page"); template mục 3.01 | Chuột (bấm từng link, ghi URL trang mở ra) | "Giỏ hàng": Trang giỏ hàng. "Đăng nhập" (navbar và link ở W-04): `/login`. "Đăng ký" (navbar), "Đăng ký ngay": `/register`. "Quên mật khẩu?": Trang quên mật khẩu. "Chào, <Họ Tên>": `/profile` | AI (AI-03-06) |
| CL-72 | Logo "EShop" có là link về trang chủ không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Template mục 3.04 (có liên kết đến trang chủ ở mỗi trang con) | Chuột | Bấm logo thì về trang chủ `/` | AI (AI-03-07) |
| CL-73 | Khi một link đang được focus, bấm Enter có mở trang như khi bấm chuột không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Hyperlink ("opens on click / Enter"); WCAG 2.2 SC 2.1.1 Keyboard | Bàn phím (Tab tới từng link rồi bấm Enter) | Mọi link mở đúng trang như CL-71 | AI (AI-03-08) |
| CL-74 | Khi rê chuột lên mục navbar và link trong trang, chúng có đổi hình thức (gạch chân hoặc đổi màu) không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Template mục 1.08; slide AI-First, checklist Hyperlink ("underlined") | Chuột, Nhìn | Mọi mục navbar (trừ nút đăng xuất: Xem CL-107) và link ("Quên mật khẩu?", "Đăng ký ngay", "Đăng nhập" ở W-04) đổi hình thức khi rê chuột | AI, SV sửa (AI-03-09) |
| CL-75 | Navbar có cùng các mục, cùng thứ tự, cùng vị trí trên cả 3 màn hình (trong cùng trạng thái đăng nhập) không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 3.2.3 Consistent Navigation; Shneiderman rule 1 | Nhìn (so ảnh chụp 3 trang ở cùng trạng thái) | Chưa đăng nhập: Cùng một bộ mục và thứ tự ở cả 3 trang. Đã đăng nhập: Như vậy | AI (AI-03-11) |
| CL-76 | Lời chào "Chào, <Họ Tên>" có cho biết link dẫn tới hồ sơ không? | IA-03 | W-06, W-04, W-03 (đã đăng nhập) | Khuyến nghị: WCAG 2.2 SC 2.4.4 Link Purpose (In Context) | Nhìn; DevTools (Accessibility, dòng "Name"; thuộc tính `title`) | Chữ, `title` hoặc "Name" của lời chào cho biết link dẫn tới hồ sơ / tài khoản | AI, SV sửa (AI-03-12) |
| CL-77 | Nút Back của trình duyệt có đưa về đúng trang trước và trang hiện đúng không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột (W-03, bấm "Đăng ký ngay" tới W-04, bấm Back; đã đăng nhập: Trang chủ, bấm lời chào tới W-06, bấm Back) | URL và tiêu đề trang (`<h1>`) giống trang trước; form hoặc bảng hiện ra, không trắng trang | AI, SV sửa (AI-03-13) |
| CL-78 | Khi chưa đăng nhập mà mở `/profile`, trang có cho đường đi tới trang đăng nhập không? | IA-03 | W-06 (chưa đăng nhập) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors); `01_oracle.md` mục 5.1 dòng 1 | Nhìn, Chuột | Có link hoặc nút tới `/login` ngay trong thông báo, hoặc trang tự chuyển sang `/login` | AI (AI-03-14) |
| CL-79 | Khi đã đăng nhập mà mở `/login` hoặc `/register`, trang có tránh hiện lại form như chưa đăng nhập không? | IA-03 | W-03 (đăng nhập), W-04 (đăng nhập) | Khuyến nghị: Nielsen heuristic 5 (Error prevention); `01_oracle.md` mục 5.1 dòng 2 | Nhìn | Trang tự chuyển đi (ví dụ trang chủ hoặc hồ sơ), hoặc báo đã đăng nhập; không hiện form trống để đăng nhập / đăng ký lại | AI (AI-03-15) |
| CL-80 | Sau khi đăng nhập thành công, navbar có chuyển sang trạng thái đã đăng nhập không? | IA-03 | W-03 | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Bàn phím, Chuột (`test@eshop.com` / `Test1234!`, bấm "Sign In") | Navbar có lời chào và nút đăng xuất ngay sau khi đăng nhập | AI, SV sửa (AI-03-16) |
| CL-81 | Sau khi bấm nút đăng xuất ở trang hồ sơ, trang có thôi hiện dữ liệu hồ sơ không? | IA-03 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Chuột | Không còn thấy Họ Tên, Email và lịch sử đơn | AI, SV sửa (AI-03-17) |
| CL-82 | Sau khi bấm nút đăng xuất, navbar có về trạng thái chưa đăng nhập không? | IA-03 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Chuột | Navbar hiện "Đăng nhập", "Đăng ký", không còn lời chào | AI, SV sửa (AI-03-17) |
| CL-83 | Trang có vùng nội dung chính được đánh dấu để công cụ hỗ trợ nhảy thẳng tới nội dung không? | IA-03 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.1 Bypass Blocks, SC 1.3.1 Info and Relationships | DevTools (Elements, hoặc cây Accessibility) | Nội dung trang nằm trong `<main>` (hoặc phần tử có vai trò `main`) | AI, SV sửa (AI-03-18) |

### 3.4 IA-04 Phản hồi và trạng thái

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-84 | Năm trạng thái đơn có màu phân biệt nhau không? Kiểm theo ma trận ở mục 4 | IA-04 | W-06 (đăng nhập, có đơn) | UI-R30 (CH-06) | Nhìn (ghi tên màu nền nhãn của từng trạng thái vào ma trận, theo cách ghi ở survey: vàng, chàm, xanh dương, xanh lá, đỏ...) | 5 tên màu nền nhãn khác nhau | AI, SV sửa (AI-04-01) |
| CL-85 | Đơn `pending` và `confirmed` có nút "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R24 (CH-05) | Nhìn (ma trận mục 4) | Có nút "Hủy đơn" ở cả 2 đơn | AI (AI-04-02) |
| CL-86 | Đơn `delivered` và `canceled` có không cho bấm "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R25 (CH-05) | Nhìn (ma trận mục 4) | Ở cả 2 đơn, nút "Hủy đơn" bị ẩn, hoặc hiện nhưng bị làm mờ (disabled). Cả hai cách đều Passed (CHD-15) | AI, SV sửa (AI-04-03) |
| CL-87 | Đơn `shipping` có không cho bấm "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R26 (CH-05) | Nhìn (ma trận mục 4) | Nút "Hủy đơn" bị ẩn, hoặc hiện nhưng bị làm mờ (disabled). Cả hai cách đều Passed (CHD-15) | AI, SV sửa (AI-04-04) |
| CL-88 | Khi hệ thống từ chối một lệnh hủy, giao diện có hiện thông báo cho người dùng không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R27 (CH-05) | Chuột. Tình huống 1: Mở W-06 ở 2 tab; ở tab B hủy đơn `pending`; quay lại tab A, **không** tải lại, bấm "Hủy đơn" của cùng đơn đó (xác nhận nếu có dialog). Tình huống 2 (chỉ khi CL-87 Failed vì đơn `shipping` có nút bấm được): Bấm "Hủy đơn" ở đơn `shipping` (CHD-16) | Ở mỗi tình huống, có thông báo cho biết không hủy được đơn; không im lặng | AI, SV sửa (AI-04-05) |
| CL-89 | Sau 3 lần đăng nhập sai liên tiếp, trang có hiện thông báo tài khoản bị tạm khóa không? | IA-04 | W-03 | UI-R08 | Bàn phím (`test@eshop.com`, mật khẩu `Sai12345!` 3 lần; lần thứ 4 trong vòng 30 giây dùng mật khẩu đúng) | Chậm nhất ở lần thử thứ 4 có thông báo cho biết tài khoản đang tạm khóa / cần thử lại sau. Ghi lại thông báo xuất hiện ở lần thứ mấy | AI, SV sửa (AI-04-06) |
| CL-90 | Thông báo khi tài khoản bị tạm khóa có tránh để lộ chi tiết nguyên nhân không? | IA-04 | W-03 | UI-R08 (CHD-14) | Nhìn (thông báo ở CL-89) | Thông báo không nêu số lần sai, không nêu ô nào sai. Nếu CL-89 Failed thì ghi "Không chạy được" | AI, SV sửa (AI-04-07) |
| CL-91 | Trang lịch sử đơn trống có icon hoặc hình minh họa không? | IA-04 | W-06 (đăng nhập, không có đơn) | UI-R47 | Nhìn (đăng nhập `newuser@eshop.com`) | Có icon hoặc hình minh họa trong khối "Lịch sử đơn hàng" | AI (AI-04-08) |
| CL-92 | Thông báo lịch sử đơn trống có là câu đầy đủ, không dùng từ kỹ thuật không? | IA-04 | W-06 (đăng nhập, không có đơn) | UI-R47 (CHD-13) | Nhìn (đăng nhập `newuser@eshop.com`) | Thông báo là một câu đầy đủ, không có từ kỹ thuật | AI, SV sửa (AI-04-09) |
| CL-93 | Trang lịch sử đơn trống có gợi ý bước tiếp theo cho người dùng không? | IA-04 | W-06 (đăng nhập, không có đơn) | UI-R47 (CHD-13) | Nhìn, Chuột (đăng nhập `newuser@eshop.com`) | Có link hoặc nút gợi ý bước tiếp theo (ví dụ "Mua sắm ngay" về trang chủ) | AI, SV sửa (AI-04-09) |
| CL-94 | Khi lịch sử đơn đang tải, có dấu hiệu đang tải không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: NR-01 (Nielsen heuristic 1, Visibility of system status) | DevTools (ĐK-07), tải lại trang | Trước khi bảng đơn hiện ra, khối "Lịch sử đơn hàng" có dấu hiệu đang tải (vòng xoay, khung mờ hoặc chữ "Đang tải") | AI (AI-04-10) |
| CL-95 | Trong lúc lịch sử đơn đang tải, trang có tránh hiện nhầm thông báo "chưa có đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state") | DevTools (ĐK-07), tải lại trang, quan sát từ lúc trang hiện | Không lúc nào hiện "Bạn chưa có đơn hàng nào." với tài khoản có đơn | AI (AI-04-11) |
| CL-96 | Sau khi bấm nút gửi, có dấu hiệu đang chờ hệ thống xử lý không? | IA-04 | W-06 (đăng nhập, "Cập nhật"), W-04 ("Đăng Ký"), W-03 ("Sign In") | Khuyến nghị: NR-01 (Nielsen heuristic 1, Visibility of system status) | DevTools (ĐK-07), Chuột | Từ lúc bấm tới lúc có kết quả, nút hoặc form có dấu hiệu đang xử lý (nút bị khóa, đổi chữ, vòng xoay) | AI (AI-04-12) |
| CL-97 | Bấm "Hủy đơn" có hiện dialog xác nhận trước khi hủy không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: NR-02 (Nielsen heuristic 5, Error prevention); slide AI-First, checklist Button ("Uncorrectable action: Yes/No confirmation") | Chuột (đơn `pending`) | Hiện dialog / modal hỏi xác nhận. Dialog của trang hoặc hộp xác nhận của trình duyệt đều tính | AI, SV sửa (AI-04-13) |
| CL-98 | Chọn "không" (hoặc đóng) dialog xác nhận thì đơn có giữ nguyên không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột (đơn `pending`, chọn nút không đồng ý trong dialog) | Chữ trạng thái và nút "Hủy đơn" của đơn không đổi, kể cả sau khi tải lại trang. Nếu CL-97 Failed thì ghi "Không chạy được" | AI, SV sửa (AI-04-14) |
| CL-99 | Sau khi hủy đơn thành công, chữ trạng thái của dòng đó có đổi ngay mà không cần tải lại trang không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state"); Nielsen heuristic 1 | Chuột (hủy đơn `pending`, xác nhận nếu có dialog) | Dòng đơn hiện chữ của trạng thái `canceled` (giống chữ ở ma trận mục 4) ngay sau khi hủy | AI (AI-04-16) |
| CL-100 | Sau khi hủy đơn thành công, trang có báo hủy thành công không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback) | Chuột, Nhìn | Có thông báo cho biết đã hủy đơn | AI, SV sửa (AI-04-17) |
| CL-101 | Sau khi cập nhật hồ sơ thành công, trang có báo cập nhật thành công không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback); `01_oracle.md` mục 5.1 dòng 5 | Bàn phím, Chuột (Số điện thoại `0912345678`, bấm "Cập nhật") | Có thông báo cho biết đã cập nhật | AI, SV sửa (AI-04-18) |
| CL-102 | Sau khi đổi Họ Tên, lời chào trên navbar có hiện tên mới mà không cần tải lại trang không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state") | Bàn phím, Chuột (đổi Họ Tên thành "Test User Moi", bấm "Cập nhật") | Navbar hiện "Chào, Test User Moi" ngay sau khi cập nhật | AI (AI-04-19) |
| CL-103 | Khi đăng nhập sai (chưa tới mức bị khóa), trang có hiện thông báo lỗi không? | IA-04 | W-03 | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors) | Bàn phím (`test@eshop.com`, mật khẩu `Sai12345!`, 1 lần) | Có thông báo cho biết đăng nhập không thành công; vẫn ở `/login` | AI, SV sửa (AI-04-20) |
| CL-104 | Sau khi đăng ký thành công, người dùng có nhận được thông báo đăng ký thành công không? | IA-04 | W-04 (chuyển tới W-03) | Khuyến nghị: Shneiderman rule 4 (Design dialogues to yield closure) | Bàn phím, Chuột (email mới, dữ liệu hợp lệ) | Có thông báo đăng ký thành công (trước khi chuyển trang hoặc trên trang Đăng nhập) | AI (AI-04-21) |
| CL-105 | Khi mất kết nối tới hệ thống, bấm nút gửi có hiện thông báo dễ hiểu không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Nielsen heuristic 9; slide AI-First, ví dụ trang lỗi 503 ("is the message clear & recoverable?") | DevTools (trang đã tải xong, tab Network chọn "Offline", rồi bấm nút gửi với dữ liệu hợp lệ) | Có thông báo cho biết không kết nối được / thử lại sau; không im lặng | AI, SV sửa (AI-04-22) |
| CL-106 | Thông báo lỗi và thông báo thành công có được công cụ hỗ trợ đọc tự động khi xuất hiện không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (Elements, chọn phần tử thông báo) | Phần tử thông báo có `role="alert"`, `role="status"` hoặc `aria-live`. Màn hình nào không có thông báo của trang thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-04-23) |
| CL-107 | Các nút có đổi hình thức khi rê chuột lên không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Button ("Hover highlights") | Chuột, Nhìn | "Cập nhật", "Hủy đơn", "Đăng Ký", "Sign In" và nút đăng xuất đổi màu (hoặc độ đậm, bóng) khi rê chuột | AI (AI-04-24) |
| CL-108 | Khi phiên đăng nhập không còn hợp lệ, bấm "Cập nhật" có hiện thông báo yêu cầu đăng nhập lại không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 9 | DevTools (tab Application, Storage, bấm "Clear site data", **không** tải lại trang), rồi bấm "Cập nhật" | Có thông báo cho biết cần đăng nhập lại (hoặc chuyển sang `/login`); không im lặng | AI, SV sửa (AI-04-25) |

---

## 4. Ma trận trạng thái đơn (dùng cho CL-07, CL-84 đến CL-87)

Theo CH-06. SRS không cho bản dịch hay màu cụ thể, nên cột "Chữ hiển thị" và "Màu nền nhãn" ghi khi chạy. Dữ liệu: 5 đơn do `tools/seed_orders.py` tạo (ĐK-01).

| Mã trạng thái (FR-10) | Chữ hiển thị (ghi khi chạy) | Màu nền nhãn (ghi khi chạy) | Nút "Hủy đơn" mong đợi | Nút "Hủy đơn" quan sát (ghi khi chạy) | Oracle nút |
|---|---|---|---|---|---|
| `pending` | | | Có, bấm được | | UI-R24 |
| `confirmed` | | | Có, bấm được | | UI-R24 |
| `shipping` | | | Ẩn hoặc bị làm mờ | | UI-R26 |
| `delivered` | | | Ẩn hoặc bị làm mờ | | UI-R25 |
| `canceled` | | | Ẩn hoặc bị làm mờ | | UI-R25 |
| Mong đợi chung | Chữ tiếng Việt, không phải mã; 5 chữ khác nhau (CL-07) | 5 tên màu khác nhau (CL-84) | | | |

---

## 5. Mục sinh viên thêm (bước `add`)

Sinh viên thêm ở bước `add` (WORKFLOW mục 3.1.2). CL-69 là mục mới nhưng phát sinh từ câu hỏi CHD-09 của bản AI ở bước `review`, nên nằm trong bảng IA-03 (mục 3.3).

Cách ghi:

- Mã tiếp nối từ CL-109. Cột "Nguồn" ghi `SV thêm`.
- Cột "Vì sao AI bỏ sót" ghi một trong ba giá trị `Prompt`, `Giới hạn model`, `Đặc thù giao diện`, kèm giải thích ngắn (WORKFLOW mục 2.2). Mục mà bản AI đã xét và loại (không phải bỏ sót) ghi "Không áp dụng" và giải thích; ở mục 9 các mục này có Loại `Quyết định của SV`.
- Mỗi mục thêm có một dòng ở bảng mục 9.

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn | Vì sao AI bỏ sót |
|---|---|---|---|---|---|---|---|---|
| CL-109 | Ở kích thước màn hình điện thoại (rộng 360 px), trang có hiển thị vừa vặn, không có thanh cuộn ngang và không có phần tử chồng lên nhau không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.10 Reflow; slide AI-First (Responsively App, kiểm ở các mức 360 / 768 / 1024 / 1440); slide S13 (responsive design) | DevTools (Device Toolbar, rộng 360 px) | Không có thanh cuộn ngang, không có phần tử (nhãn, ô nhập, bảng, nút) chồng lên nhau | SV thêm | Giới hạn model: AI có WCAG và slide về responsive trong đầu vào nhưng chỉ kiểm cửa sổ 1366 x 768 (CL-32) và zoom 200% (CL-33), không kiểm khổ màn hình điện thoại |
| CL-110 | Ô Số điện thoại có chấp nhận số hợp lệ bị dính khoảng trắng ở hai đầu (thường gặp khi sao chép / dán) không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, checklist Text Box ("test spaces + chars"); Nielsen heuristic 5 (Error prevention) | Bàn phím (Số điện thoại `" 0912345678 "`, một dấu cách ở mỗi đầu, bấm "Cập nhật") | Không có thông báo lỗi | SV thêm | Giới hạn model: AI đã kiểm chuỗi chỉ có khoảng trắng ở ô Họ Tên (CL-60) nhưng bỏ qua thói quen sao chép / dán làm dư khoảng trắng ở số điện thoại |
| CL-111 | Ô mật khẩu có nút (icon con mắt) để người dùng chọn hiện / ẩn mật khẩu vừa nhập không? | IA-02 | W-04, W-03 | Khuyến nghị: Nielsen heuristic 5 (Error prevention), heuristic 9 (Help users recognize, diagnose, and recover from errors) | Chuột, Nhìn (gõ `Abcdef1!`, bấm icon con mắt hai lần) | Mặc định ký tự bị che (CL-46). Bấm icon lần thứ nhất thì ký tự hiện rõ, bấm lần nữa thì che lại | SV thêm | Không áp dụng: AI đã xét và loại (bản nháp IA-02 mục 5: SRS không yêu cầu, không có nguồn rõ trong slide). SV giữ lại vì đây là tính năng UX cơ bản giúp người dùng tự phát hiện lỗi gõ phím |
| CL-112 | Khi bấm liên tiếp nhiều lần vào nút gửi, form có chỉ được gửi một lần không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Button ("Single / double / multi-click behave correctly"); ví dụ "Double-submit on double-click: No debounce, duplicate orders" | DevTools (ĐK-07, tab Network), Chuột (bấm nhanh 3 lần vào "Cập nhật", "Đăng Ký" với dữ liệu ĐK-06, "Sign In") | Ở mỗi màn hình, tab Network chỉ ghi 1 request gửi form | SV thêm | Không áp dụng: AI đã xét và loại (bản nháp IA-04 mục 6: Phần nhìn thấy được trùng CL-96, phần tạo bản ghi trùng thuộc kiểm thử chức năng). SV giữ lại để kiểm riêng việc chống gửi trùng; CL-96 chỉ kiểm dấu hiệu đang xử lý |

Các mảng đề gợi ý xét thêm (WORKFLOW mục 3.1.2):

| Mảng | Kết luận |
|---|---|
| Accessibility | Đã có nhiều mục căn cứ WCAG 2.2 trong bản AI (ví dụ CL-19, CL-21, CL-22, CL-23, CL-54, CL-106) và CL-109 |
| Dark mode | Không thêm mục. SV không thấy chế độ tối hay nút chuyển giao diện ở 3 màn hình; SRS không yêu cầu |
| RTL | Không thêm mục. Giao diện chỉ có tiếng Việt, không có lựa chọn ngôn ngữ (`00_survey.md`); SRS không yêu cầu |

---

## 6. Mục AI đã bỏ hoặc gộp

| Mã AI | Xử lý | Lý do |
|---|---|---|
| AI-02-12 | Gộp vào CL-46 (AI-02-11) | Ô `type="password"` thì trình duyệt luôn che ký tự; hai mục gần như luôn cùng kết quả |
| AI-02-17 | Bỏ; số `0912345678` dùng làm dữ liệu cho CL-101 | Kiểm biên số điện thoại là kiểm thử chức năng (CH-05); trùng thao tác cập nhật thành công với CL-101 |
| AI-02-31 | Bỏ | Chỉ kiểm một dòng chữ cố định (placeholder), nguồn chung chung; ít giá trị |
| AI-03-10 | Bỏ | Con trỏ bàn tay trên nút không có nguồn chắc (nút HTML mặc định dùng con trỏ mũi tên); phản hồi khi rê chuột lên link đã có ở CL-74 |
| AI-04-15 | Bỏ | Nguồn chung chung; ít giá trị vì người dùng vừa bấm nút trên chính dòng đơn đó |

---

## 7. Tổng hợp

### 7.1 Số mục

| IA | Số mục | Nguồn AI | Nguồn AI, SV sửa | Nguồn SV thêm | Căn cứ SRS | Khuyến nghị |
|---|---|---|---|---|---|---|
| IA-01 | 36 (CL-01 đến CL-35, CL-109) | 30 | 5 | 1 | 18 | 18 |
| IA-02 | 31 (CL-36 đến CL-64, CL-110, CL-111) | 11 | 18 | 2 | 16 | 15 |
| IA-03 | 19 (CL-65 đến CL-83) | 8 | 10 | 1 | 6 | 13 |
| IA-04 | 26 (CL-84 đến CL-108, CL-112) | 9 | 16 | 1 | 10 | 16 |
| Tổng | 112 | 58 | 49 | 5 | 50 | 62 |

Bản AI có 109 mục. Bỏ hoặc gộp 5 mục (mục 6), tách 3 mục thành 6 (AI-02-22, AI-03-17, AI-04-09), thêm 1 mục (CL-69). Bước `add` thêm 4 mục (CL-109 đến CL-112).

### 7.2 Truy vết oracle

| Oracle | Mục |
|---|---|
| UI-R01 | CL-36 |
| UI-R02 | CL-39, CL-40 |
| UI-R03 | CL-41 |
| UI-R04 | CL-37, CL-38 |
| UI-R05 | CL-65 |
| UI-R06 | CL-42 |
| UI-R08 | CL-89, CL-90 |
| UI-R10, UI-R37 | CL-44, CL-45 |
| UI-R13 | CL-48 |
| UI-R14 | CL-50 |
| UI-R15 | CL-49 |
| UI-R16 | CL-51 |
| UI-R20, UI-R34 | CL-13, CL-14 |
| UI-R24 | CL-85 |
| UI-R25 | CL-86 |
| UI-R26 | CL-87 |
| UI-R27 | CL-88 |
| UI-R29 | CL-18 |
| UI-R30 | CL-07 (chữ), CL-84 (màu) |
| UI-R31 | CL-01 đến CL-07 |
| UI-R32 | CL-08, CL-09 |
| UI-R33 | CL-10, CL-11, CL-12 |
| UI-R35 | CL-15, CL-16, CL-17 |
| UI-R36 | CL-43 |
| UI-R38 | CL-46 |
| UI-R39 | CL-47 |
| UI-R41 | CL-66, CL-67 |
| UI-R42 | CL-68, CL-69 |
| UI-R43 | CL-70 |
| UI-R47 | CL-91, CL-92, CL-93 |
| NR-01 | CL-94, CL-96 |
| NR-02 | CL-97 |
| Ngoài SRS khác (khuyến nghị) | CL-19 đến CL-35, CL-52 đến CL-64, CL-71 đến CL-83, CL-95, CL-98 đến CL-108, CL-109 đến CL-112 |

---

## 8. Quyết định của sinh viên cho câu hỏi mở của bản AI

| Mã | Câu hỏi (tóm tắt) | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|
| CHD-01 | Tách 6 mục ngôn ngữ hay gộp? | Giữ 6 mục | CL-01 đến CL-06 |
| CHD-02 | Giữ mục định dạng ngày? | Giữ (khuyến nghị) | CL-24 |
| CHD-03 | Ô Email bị khóa: Theo template môn học hay theo chuẩn HTML và accessibility? | Sửa theo chuẩn HTML và accessibility toàn cầu, không áp dụng máy móc template môn học | CL-22 |
| CHD-04 | Thứ tự focus mong đợi lấy theo survey hay bố cục lúc chạy? | Lấy theo bố cục thực tế lúc chạy | CL-16, CL-17 |
| CHD-05 | Mục phụ thuộc không chạy được thì ghi gì? | (b) Ghi "Không chạy được", không tính Passed / Failed | Mục 1; CL-38, CL-47, CL-55 đến CL-57, CL-90, CL-98, CL-106 |
| CHD-06 | Bong bóng validate của trình duyệt có tính cho UI-R39? | (a) Không tính | CL-47 |
| CHD-07 | Danh sách ký tự đặc biệt của UI-R03 là danh sách đóng hay ví dụ? | (b) Là ví dụ | CL-41, CL-64 |
| CHD-08 | Mức chi tiết của mục `autocomplete`? | (b) Chỉ kiểm ô Email, Mật khẩu, Số điện thoại có `autocomplete` phù hợp | CL-62 |
| CHD-09 | Badge giỏ hàng đếm số loại hay tổng số lượng? | (c) Chốt đếm tổng số lượng; thêm mục 1 sản phẩm số lượng 2, mong đợi "2" | CL-68, CL-69 |
| CHD-10 | Áp CH-09 cho W-03, W-04 khi đã đăng nhập? | (a) Đồng ý | CL-67 |
| CHD-11 | Giữ mục "đã đăng nhập thì không thấy lại form đăng nhập / đăng ký"? | (a) Giữ, kèm ghi chú "Không chạy được" cho trạng thái không tạo được | CL-79, mục 1 |
| CHD-13 | Tiêu chí "thân thiện" của UI-R47? | (a) Tách thành 2 mục | CL-92, CL-93 |
| CHD-14 | "Không để lộ chi tiết nguyên nhân" nghĩa là gì? | (a) Không nêu số lần sai và ô nào sai | CL-90 |
| CHD-15 | Nút "Hủy đơn" bị làm mờ tính Passed hay Failed? | (b) Passed | CL-86, CL-87, mục 4 |
| CHD-16 | Dùng đơn `shipping` làm tình huống thứ hai cho UI-R27? | (a) Có, nếu đơn `shipping` có nút bấm được | CL-88 |

(CHD-12 đã bị AI bỏ trong bản nháp IA-03 trước khi giao cho sinh viên.)

---

## 9. Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 2, ĐK-01 (bản AI IA-01: ĐK-01 đến ĐK-03) | Tạo dữ liệu đơn và tài khoản không có đơn bằng `tools/seed_orders.py` thay vì đặt đơn qua giỏ hàng, đổi trạng thái ở Admin | Mơ hồ | | Bản AI IA-01 ghi "một tài khoản có lịch sử đơn trống" mà không nêu tài khoản nào. SV cung cấp thông tin về `tools/seed_orders.py` |
| Mục 1 | Thêm quy ước "Không chạy được" và các trạng thái màn hình có thể không tạo được | Quyết định của SV | | CHD-05 (b), CHD-11 (a) |
| Mục 1, quy ước Highlight (bản AI IA-03) | Định nghĩa lại: So mục navbar với **chính nó** ở trang khác, không so với các mục còn lại | Sai | | Khi đã đăng nhập, lời chào luôn màu vàng, khác các mục màu trắng (`00_survey.md` mục 6). Định nghĩa cũ làm CL-67 Failed sai |
| CL-05 (AI-01-05) | Mở rộng danh sách thông báo: Thêm thông báo hủy đơn, khóa tài khoản, mất kết nối, hết phiên; thêm ví dụ "Network Error", "Failed to fetch" | Thừa | | Gom ý "tiếng Việt, không có chữ kỹ thuật" đang bị lặp ở AI-04-05, 07, 09, 17, 18, 20, 22, 25 về một mục |
| CL-16, CL-17 (AI-01-16, AI-01-17) | Thứ tự focus mong đợi lấy theo bố cục thực tế lúc chạy | Quyết định của SV | | CHD-04 |
| CL-22 (AI-01-22) | Đổi mong đợi "ô bị bỏ qua khi bấm Tab" (theo template mục 3.12, 3.13) thành "dùng thuộc tính `readonly` hoặc `disabled`, hành vi Tab khớp với thuộc tính"; đổi nguồn sang HTML Living Standard và WCAG 2.2 SC 4.1.2 | Sai | | Theo chuẩn HTML, ô `readonly` vẫn nhận focus để screen reader đọc được; mong đợi của bản AI trái với chuẩn này (CHD-03) |
| CL-22 (AI-01-22) | Bỏ ý "gõ phím không đổi được giá trị" khỏi bản sửa của CL-22 | Thừa | | Trùng với CL-49 (UI-R15, căn cứ SRS) |
| CL-24 (AI-01-24) | Bỏ điều kiện "chọn đơn có ngày lớn hơn 12"; chọn đơn có số ngày khác số tháng; đổi ví dụ | Sai | | Đơn do `tools/seed_orders.py` tạo đều mang ngày 9 hoặc 10, nên không tạo được điều kiện của bản AI |
| CL-37 (AI-02-02) | "Hoặc tương đương" thành "nhãn chứa cụm 'Xác nhận mật khẩu' hoặc 'Nhập lại mật khẩu'" | Mơ hồ | | Không rõ chữ nào được chấp nhận |
| CL-38, CL-39, CL-40, CL-41, CL-50 (AI-02-03, 04, 05, 06, 16) | Mong đợi chỉ còn "Có thông báo lỗi, vẫn ở trang hiện tại"; bỏ ý "bị từ chối / không đăng ký" và ý về nội dung thông báo | Thừa | | "Bị từ chối" là kết quả chức năng (CH-05); nội dung thông báo kiểm ở CL-55, CL-56 |
| CL-38 (AI-02-03) | Thêm ghi chú: Nếu CL-37 Failed thì ghi "Không chạy được" | Quyết định của SV | | CHD-05 (b) |
| CL-39 (AI-02-04) | Thay giá trị `abc@domain` bằng `@domain.com` | Mơ hồ | | Ô `type="email"` chấp nhận `abc@domain`; SRS không nói có bắt buộc phần đuôi hay không, nên không kết luận được |
| CL-41, CL-50 (AI-02-06, AI-02-16) | Giảm dữ liệu còn 1 giá trị mỗi mục (`abcdefgh`, `123`) | Thừa | | Kiểm từng quy tắc là domain testing, thuộc kiểm thử chức năng (CH-05). Chính bản AI (mục 5) ghi dữ liệu chỉ cần đủ làm hiện thông báo |
| CL-41 (AI-02-06) | Bỏ giá trị `Abcdef1#` | Quyết định của SV | | CHD-07 (b): Danh sách ký tự đặc biệt của UI-R03 chỉ là ví dụ |
| CL-46 (AI-02-11, AI-02-12) | Gộp AI-02-12 vào AI-02-11 | Thừa | | Ô `type="password"` thì trình duyệt luôn che ký tự |
| CL-47 (AI-02-13) | Thêm ghi chú bong bóng trình duyệt không tính (đã có trong bản AI, SV chốt) và ghi chú "Không chạy được" khi không có thông báo | Quyết định của SV | | CHD-06 (a), CHD-05 (b) |
| AI-02-17 | Bỏ; dùng `0912345678` làm dữ liệu cho CL-101 | Thừa | | Kiểm biên là kiểm thử chức năng (CH-05); trùng thao tác với CL-101 |
| CL-52 (AI-02-19) | Thêm bước chuẩn bị với giá trị cụ thể; mong đợi theo giá trị vừa lưu | Mơ hồ | | "So với dữ liệu đã lưu ở lần cập nhật trước" không cho giá trị cụ thể |
| CL-53 (AI-02-20) | Bỏ ý con trỏ chuột, chỉ giữ ý nền khác ô thường | Thừa | | Ít giá trị; ô `disabled` trên Chrome tự hiện con trỏ mũi tên |
| CL-54 (AI-02-21) | Mong đợi chỉ còn "Name khớp với nhãn"; bấm nhãn thành cách kiểm phụ | Mơ hồ | | Bản AI kiểm 2 quan sát trong một mục; khi Failed khó biết vì sao |
| CL-55, CL-56 (AI-02-22) | Tách thành 2 mục theo WCAG 3.3.1 và 3.3.3; viết lại mong đợi đo được | Mơ hồ | | Bản AI kiểm 2 điều và ghi "không chỉ ghi chung chung", không đo được |
| CL-55, CL-56 (AI-02-22) | Bỏ W-03 | Sai | | Đòi thông báo đăng nhập sai nêu ô nào sai trái với UI-R08 ("không để lộ chi tiết nguyên nhân") và với CL-90 |
| CL-57 (AI-02-23) | Chỉ dùng lỗi do trang báo (email trùng, số điện thoại `123`), nêu ô mong đợi; bỏ W-03 | Mơ hồ | | Với lỗi định dạng email, trình duyệt tự đưa focus về ô nên mục luôn Passed; ở W-03 không xác định được ô bị lỗi |
| CL-58 (AI-02-24) | Bỏ ý "không chỉ dùng màu" | Thừa | | Ý này đạt khi có chữ thông báo, đã kiểm ở CL-55 |
| CL-60 (AI-02-26) | Chỉ giữ W-04, bỏ W-06 | Thừa | | SRS không định nghĩa trường bắt buộc ở W-06 (CH-01), frontend không có cơ sở để chặn khoảng trắng |
| CL-62 (AI-02-28) | Bỏ mong đợi giá trị cụ thể cho từng ô; chỉ kiểm ô Email, Mật khẩu, Số điện thoại | Quyết định của SV | | CHD-08 (b) |
| CL-63 (AI-02-29) | Chỉ giữ W-03 | Thừa | | WCAG 3.3.8 áp dụng cho bước xác thực (đăng nhập), không cho đăng ký |
| CL-64 (AI-02-30) | Bỏ ý danh sách ký tự đặc biệt | Quyết định của SV | | CHD-07 (b) |
| AI-02-31 | Bỏ | Thừa | | Ít giá trị, nguồn chung chung |
| CL-66 (AI-03-02) | Mong đợi so lời chào và các mục với cách chúng hiện ở trang chủ | Sai | | Theo quy ước Highlight đã sửa |
| CL-67 (AI-03-03) | Mong đợi "mọi mục navbar hiện giống hệt khi ở trang chủ"; giữ W-03, W-04 khi đã đăng nhập | Sai | | Theo quy ước Highlight đã sửa; CHD-10 (a) |
| CL-68 (AI-03-04) | Ghi rõ thêm sản phẩm khi đang đăng nhập và chỉ kiểm ở trạng thái đăng nhập; bỏ "W-06 (cả hai trạng thái)" | Mơ hồ | | Nếu giỏ hàng gắn với tài khoản, số trên badge có thể khác giữa hai trạng thái |
| CL-69 | Thêm mục: 1 sản phẩm số lượng 2, badge hiện "2" | Quyết định của SV | | CHD-09 (c): Chốt badge đếm tổng số lượng |
| CL-74 (AI-03-09) | Không xét nút đăng xuất | Thừa | | Trùng với CL-107 |
| AI-03-10 | Bỏ | Thừa | | Quy ước con trỏ trên nút không có nguồn chắc; trùng phản hồi khi rê chuột với CL-74 |
| CL-76 (AI-03-12) | Chỉ giữ ý về lời chào | Thừa | | Các link khác đã tự nói rõ nơi tới; phần chung không thêm giá trị |
| CL-77 (AI-03-13) | "Trang hiện đầy đủ" thành "URL và `<h1>` giống trang trước; form hoặc bảng hiện ra" | Mơ hồ | | Không đo được |
| CL-80 (AI-03-16) | Bỏ ý "rời `/login`", chỉ giữ ý navbar | Thừa | | Trùng với CL-79 (CHD-11 giữ CL-79) |
| CL-81, CL-82 (AI-03-17) | Tách thành 2 mục: Dữ liệu trên trang và trạng thái navbar | Mơ hồ | | Bản AI kiểm 2 điều trong một mục |
| CL-83 (AI-03-18) | Chỉ giữ ý `<main>` | Thừa | | Có `<main>` là đủ cho WCAG 2.4.1; navbar ngắn nên ý `<nav>` ít giá trị |
| CL-84 (AI-04-01) | Ghi tên màu nền nhãn theo cách ghi của survey; Passed khi 5 tên khác nhau | Mơ hồ | | "5 màu khác nhau" không rõ khi hai màu chỉ khác sắc độ |
| CL-86, CL-87 (AI-04-03, AI-04-04) | Nút bị làm mờ (disabled) cũng Passed | Quyết định của SV | | CHD-15 (b) |
| CL-88 (AI-04-05) | Bỏ ý "tiếng Việt, không lỗi kỹ thuật"; thêm tình huống 2 với đơn `shipping` | Quyết định của SV | | Ý ngôn ngữ gom về CL-05; CHD-16 (a) |
| CL-89 (AI-04-06) | Bỏ ý "không đăng nhập vào" | Thừa | | Cơ chế khóa là chức năng (`01_oracle.md`, UI-R08; CH-05) |
| CL-89 (AI-04-06) | Mong đợi "chậm nhất ở lần thử thứ 4", ghi lại lần xuất hiện | Mơ hồ | | SRS không nói lần sai thứ 3 có báo khóa ngay hay không |
| CL-90 (AI-04-07) | Bỏ ý "không chứa thông tin kỹ thuật"; chốt cách hiểu | Quyết định của SV | | Ý kỹ thuật gom về CL-05; CHD-14 (a) |
| CL-92, CL-93 (AI-04-09) | Tách thành 2 mục; bỏ ý tiếng Việt | Quyết định của SV | | CHD-13 (a); ý tiếng Việt đã có ở CL-05 |
| CL-97 (AI-04-13) | Chỉ giữ "có dialog"; ghi rõ hộp xác nhận của trình duyệt cũng tính | Mơ hồ | | Ý "đơn chưa bị hủy" được bảo đảm khi có dialog; NR-02 không quy định kiểu dialog |
| CL-98 (AI-04-14) | Thêm ghi chú "Không chạy được" khi CL-97 Failed | Quyết định của SV | | CHD-05 (b) |
| AI-04-15 | Bỏ | Thừa | | Ít giá trị, nguồn chung chung |
| CL-100, CL-101, CL-103, CL-105, CL-108 (AI-04-17, 18, 20, 22, 25) | Bỏ ý "tiếng Việt" và "không hiện chữ kỹ thuật" | Thừa | | Trùng với CL-05 |
| CL-101 (AI-04-18) | Dữ liệu đổi từ "sửa Địa chỉ giao hàng" sang Số điện thoại `0912345678` | Quyết định của SV | | Thay cho AI-02-17 đã bỏ |
| CL-103 (AI-04-20) | Là điều kiện của phần W-03 trong CL-47 | Quyết định của SV | | CHD-05 (b) |
| CL-106 (AI-04-23) | Thêm ghi chú "Không chạy được" khi không có thông báo | Quyết định của SV | | CHD-05 (b) |
| CL-108 (AI-04-25) | Cách kiểm đổi thành "Clear site data" | Mơ hồ | | Cách kiểm của bản AI đòi biết hệ thống lưu token ở đâu, trái với kiểm thử hộp đen |
| CL-109 (bước `add`) | Thêm mục kiểm hiển thị ở khổ màn hình điện thoại (rộng 360 px) | Thiếu | Giới hạn model: AI có WCAG và slide về responsive nhưng chỉ kiểm 1366 x 768 và zoom 200% | WCAG 2.2 SC 1.4.10 Reflow; slide AI-First (Responsively App); slide S13 |
| CL-110 (bước `add`) | Thêm mục ô Số điện thoại chấp nhận số hợp lệ bị dính khoảng trắng hai đầu | Thiếu | Giới hạn model: AI chỉ kiểm chuỗi toàn khoảng trắng (CL-60), bỏ qua khoảng trắng thừa khi sao chép / dán | Slide AI-First, checklist Text Box ("test spaces + chars"); Nielsen heuristic 5 |
| CL-111 (bước `add`) | Thêm lại mục nút hiện / ẩn mật khẩu mà bản nháp IA-02 (mục 5) đã loại | Quyết định của SV | | Giúp người dùng tự phát hiện lỗi gõ phím (Nielsen heuristic 5, 9); mặc định vẫn che ký tự theo UI-R38 |
| CL-112 (bước `add`) | Thêm lại mục chống gửi trùng khi bấm nút gửi nhiều lần mà bản nháp IA-04 (mục 6) đã loại; kiểm bằng số request trong tab Network để không trùng CL-96 | Quyết định của SV | | Slide AI-First: Checklist Button ("Single / double / multi-click behave correctly") và ví dụ double-submit |
| Mục 5 (bước `add`) | Ghi kết luận sau khi xét dark mode và RTL: Không thêm mục | Quyết định của SV | | Bản nháp IA-01 (mục 6) để hai mảng này cho SV xét. SV không thấy chế độ tối hay lựa chọn ngôn ngữ trên giao diện; SRS không yêu cầu |
