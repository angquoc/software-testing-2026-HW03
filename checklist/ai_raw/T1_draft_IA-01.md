# T1 ai-draft: Checklist IA-01 Tiêu chuẩn giao diện chung

Bước: `[T1][ai-draft]`, IA-01, bản AI
Tạo lúc: 2026-11-09 12:52

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-01 ở mục 3 (UI-R20/R34, R29, R30, R31, R32, R33, R35), quyết định CH-01 đến CH-10, giả định GĐ-01 đến GĐ-05.
- `00_survey.md` và ảnh `survey_01` đến `survey_08`: Chỉ dùng để biết màn hình có những phần tử nào (tên nút, vị trí khối), **không** dùng để đoán kết quả.
- Nguồn ngoài SRS trong slide môn học: Slide "GUI + Usability + Compatibility Testing AI-First" (Nielsen 10 heuristics, Shneiderman 8 Golden Rules, checklist theo loại control của Waghmare, WCAG), slide S13 GUI Testing & Usability Testing, template `GUI checklist_Template_Vi.xlsx` (mục 1.xx Aesthetic check, 3.xx Usability checklist).

Quy ước:

- Mã mục: `AI-01-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục; cột "Màn hình" liệt kê các màn hình áp dụng.
- Cột "Oracle": Mã `UI-Rxx` khi căn cứ là SRS. Mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ (Lighthouse, axe).
- Trạng thái của W-06: "W-06 (đăng nhập)" là trang hồ sơ khi đã đăng nhập; "W-06 (chưa đăng nhập)" là trang chỉ hiện "Vui lòng đăng nhập" (GĐ-02).

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`), đăng nhập `test@eshop.com` | Mọi mục ở W-06 (đăng nhập) |
| ĐK-02 | Có ít nhất 1 đơn ở mỗi trạng thái `pending`, `confirmed`, `shipping`, `delivered`, `canceled` (đặt đơn qua giỏ hàng / thanh toán, đổi trạng thái ở Admin) | AI-01-07, AI-01-10 đến AI-01-12, AI-01-18, AI-01-24 |
| ĐK-03 | Một tài khoản có lịch sử đơn trống | AI-01-05 |
| ĐK-04 | Cửa sổ trình duyệt ở kích thước mặc định của lần chạy (ghi vào môi trường chạy), zoom 100% | Mọi mục, trừ khi mục ghi khác |

---

## 3. Bảng checklist IA-01

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-01-01 | Nhãn của mọi ô nhập và placeholder có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi nhãn và placeholder là tiếng Việt; chỉ được giữ tiếng Anh các thuật ngữ kỹ thuật chuẩn theo CH-03 (ví dụ Email) |
| AI-01-02 | Chữ trên mọi nút và link trong nội dung trang có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi chữ trên nút và link là tiếng Việt, trừ thuật ngữ kỹ thuật chuẩn theo CH-03 |
| AI-01-03 | Các tiêu đề trên trang (tiêu đề trang, tiêu đề khối, tiêu đề cột bảng) có dùng tiếng Việt không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R31 | Nhìn | Mọi tiêu đề là tiếng Việt, trừ thuật ngữ kỹ thuật chuẩn theo CH-03 |
| AI-01-04 | Các mục trên navbar và chữ ở footer có dùng tiếng Việt không? | IA-01 | W-06, W-04, W-03 (navbar ở cả hai trạng thái đăng nhập) | UI-R31 | Nhìn | Mọi mục navbar và chữ footer là tiếng Việt; tên cửa hàng "EShop" không xét (GĐ-05) |
| AI-01-05 | Các thông báo hiển thị cho người dùng (thông báo khi chưa đăng nhập, thông báo lịch sử đơn trống, thông báo lỗi và thông báo thành công sau khi gửi form) có dùng tiếng Việt không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R31 | Nhìn (gửi form với dữ liệu sai để làm hiện thông báo lỗi) | Mọi thông báo là tiếng Việt, không có thông báo kỹ thuật tiếng Anh (ví dụ thông báo lỗi trả thẳng từ server) |
| AI-01-06 | Tiêu đề trên tab trình duyệt có dùng tiếng Việt không? | IA-01 | W-06, W-04, W-03 | UI-R31 | Nhìn | Tiêu đề tab là tiếng Việt (không phải tên kỹ thuật của dự án) |
| AI-01-07 | Chữ trạng thái đơn trong bảng lịch sử có là tiếng Việt và khác nhau cho từng trạng thái không? Kiểm theo ma trận ở mục 4 | IA-01 | W-06 (đăng nhập) | UI-R30, UI-R31 | Nhìn | Cả 5 trạng thái hiển thị bằng chữ tiếng Việt (không hiện mã `pending`, `confirmed`...), và 5 chữ khác nhau. Phần màu của trạng thái kiểm ở IA-04 |
| AI-01-08 | Nút hành động tích cực (nút Submit của form: "Sign In", "Đăng Ký", "Cập nhật") có nền màu xanh dương không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R32 | Nhìn | Nền của cả 3 nút là màu xanh dương |
| AI-01-09 | Nút nguy hiểm / hủy bỏ ("Hủy đơn" và nút đăng xuất trên navbar) có nền màu đỏ không? | IA-01 | W-06, W-04, W-03 (nút đăng xuất khi đã đăng nhập); W-06 (nút "Hủy đơn") | UI-R32 (CH-02) | Nhìn | Nền của nút "Hủy đơn" và nút đăng xuất là màu đỏ |
| AI-01-10 | Mọi số tiền trong cột Tổng tiền có ký hiệu `₫` không? | IA-01 | W-06 (đăng nhập) | UI-R33 | Nhìn | Mọi dòng có ký hiệu `₫` (không dùng "đ", "VND", "VNĐ") |
| AI-01-11 | Số tiền có phân cách hàng nghìn bằng dấu phẩy không? | IA-01 | W-06 (đăng nhập) | UI-R33 (CH-04) | Nhìn | Mọi số tiền có phân cách hàng nghìn bằng dấu phẩy, ví dụ `300,000` |
| AI-01-12 | Ký hiệu `₫` có đặt sau số, cách số một khoảng trắng không? | IA-01 | W-06 (đăng nhập) | UI-R33 (CH-04) | Nhìn | Dạng `300,000 ₫` ở mọi dòng |
| AI-01-13 | Mỗi trang có đúng một thẻ `<h1>` không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R20, UI-R34 | DevTools (đếm `<h1>` trong Elements, hoặc chạy `document.querySelectorAll('h1').length` trong Console) | Mỗi trang có đúng 1 thẻ `<h1>` |
| AI-01-14 | Nội dung thẻ `<h1>` có mô tả đúng trang đang mở không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | UI-R34 | DevTools (đọc chữ trong `<h1>`) | `<h1>` của W-03 nói về đăng nhập, của W-04 nói về đăng ký, của W-06 nói về hồ sơ cá nhân (hoặc hồ sơ và lịch sử đơn) |
| AI-01-15 | Khi bấm Tab từ đầu trang, focus có đi qua các mục navbar theo thứ tự từ trái sang phải trước khi vào nội dung trang không? | IA-01 | W-06, W-04, W-03 | UI-R35 | Bàn phím (bấm vào thanh địa chỉ rồi Tab liên tục) | Focus đi: Logo "EShop" (nếu logo là link), rồi các mục navbar từ trái sang phải, rồi mới tới phần tử đầu tiên của nội dung |
| AI-01-16 | Trong form, focus có đi từ trên xuống dưới theo đúng thứ tự hiển thị không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | UI-R35 | Bàn phím | W-03: "Username" (ô thứ nhất), "Mật khẩu", "Quên mật khẩu?", "Sign In", "Đăng ký ngay". W-04: "Họ Tên", "Email", "Mật khẩu", "Đăng Ký", "Đăng nhập". W-06: "Họ Tên", "Số điện thoại", "Địa chỉ giao hàng", "Cập nhật" (ô Email: Xem AI-01-22) |
| AI-01-17 | Ở W-06, focus có đi hết khối bên trái (form hồ sơ) rồi mới sang khối bên phải (lịch sử đơn), và trong bảng đi từ dòng trên xuống dòng dưới không? | IA-01 | W-06 (đăng nhập, có đơn) | UI-R35 (GĐ-03) | Bàn phím | Sau nút "Cập nhật", focus tới nút "Hủy đơn" của dòng trên cùng có nút này, rồi lần lượt xuống các dòng dưới |
| AI-01-18 | Bảng lịch sử đơn có hiển thị đủ 4 thông tin: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái không? | IA-01 | W-06 (đăng nhập, có đơn) | UI-R29 | Nhìn | Có đủ 4 cột (hoặc 4 thông tin) cho mọi đơn, không ô nào trống |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-01-19 | Thẻ `<html>` có khai báo ngôn ngữ tiếng Việt không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 3.1.1 Language of Page | DevTools (xem thuộc tính `lang` của `<html>`) | `<html lang="vi">` |
| AI-01-20 | Tiêu đề tab trình duyệt có mô tả đúng trang và khác nhau giữa các trang không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.2 Page Titled | Nhìn | Mỗi trang có tiêu đề tab riêng, nói đúng chức năng trang (ví dụ có chữ "Đăng nhập" ở W-03) |
| AI-01-21 | Khi bấm Tab, phần tử đang được focus có dấu hiệu nhìn thấy được (viền, khung, đổi màu) không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 2.4.7 Focus Visible | Bàn phím, Nhìn | Mọi phần tử nhận focus (ô nhập, nút, link, mục navbar) đều có dấu hiệu focus thấy rõ |
| AI-01-22 | Ô Email bị khóa ở W-06 có bị bỏ qua khi bấm Tab không? | IA-01 | W-06 (đăng nhập) | Khuyến nghị: Template `GUI checklist_Template_Vi.xlsx` mục 3.12, 3.13 (field read-only / disable không có thứ tự tab) | Bàn phím | Focus đi thẳng từ navbar tới ô "Họ Tên", không dừng ở ô Email |
| AI-01-23 | Độ tương phản giữa chữ và nền có đạt tối thiểu 4.5:1 (chữ thường) và 3:1 (chữ lớn) không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.3 Contrast (Minimum) | Công cụ (Lighthouse hoặc axe DevTools, mục Contrast) | Công cụ không báo lỗi tương phản. Cần xem kỹ: Placeholder, dòng hướng dẫn nhỏ màu xám, lời chào trên navbar, nhãn trạng thái đơn, chữ trắng trên nút đỏ |
| AI-01-24 | Ngày đặt có hiển thị theo thứ tự ngày / tháng / năm không? | IA-01 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide S13 (Localization and Internationalization); slide AI-First, checklist Date field ("correct entry format") | Nhìn (đối chiếu với ngày đặt đơn thật, chọn đơn có ngày lớn hơn 12 để phân biệt) | Ngày hiển thị dạng ngày / tháng / năm theo quy ước tiếng Việt, ví dụ đơn đặt ngày 25/11/2026 hiện "25/11/2026" |
| AI-01-25 | Cùng một hành động có dùng cùng một từ ở mọi chỗ (navbar, tiêu đề trang, nút, link) không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: Nielsen heuristic 4 (Consistency and standards) | Nhìn | Ví dụ: Hành động đăng nhập dùng cùng một từ ở mục navbar, tiêu đề trang, nút gửi và link trên trang Đăng ký; tương tự cho đăng ký |
| AI-01-26 | Các tiêu đề trên 3 màn hình có dùng cùng một kiểu viết hoa không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Shneiderman rule 1 (Strive for consistency); template mục 1.18 | Nhìn | Mọi tiêu đề cùng kiểu: Hoặc chỉ viết hoa chữ đầu, hoặc viết hoa chữ đầu mọi từ |
| AI-01-27 | Chữ trên các nút và mục navbar có dùng cùng một kiểu viết hoa không? | IA-01 | W-06, W-04, W-03 | Khuyến nghị: Shneiderman rule 1 (Strive for consistency) | Nhìn | Mọi nút và mục navbar cùng một kiểu viết hoa |
| AI-01-28 | Nhãn ô nhập trên 3 màn hình có cùng font, cỡ chữ và màu không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Template mục 1.12 (font nhất quán theo từng loại thành phần) | DevTools (Computed: `font-family`, `font-size`, `color` của nhãn) | Ba giá trị giống nhau ở mọi nhãn |
| AI-01-29 | Các nút Submit ("Sign In", "Đăng Ký", "Cập nhật") có cùng chiều cao, font và bo góc không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Button ("All buttons similar size/shape, same font") | DevTools (Computed: `height`, `font-family`, `font-size`, `border-radius`) | Các giá trị giống nhau ở cả 3 nút |
| AI-01-30 | Cỡ chữ của tiêu đề có lớn hơn cỡ chữ nội dung và nhãn không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Template mục 1.15 | DevTools (Computed `font-size`) hoặc Nhìn | Tiêu đề có `font-size` lớn hơn nhãn và nội dung thường |
| AI-01-31 | Trong mỗi form, nhãn và ô nhập có canh lề trái thẳng hàng với nhau không? | IA-01 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Text Box ("alignment consistent with siblings") | Nhìn (hoặc DevTools đo vị trí cạnh trái) | Cạnh trái của mọi nhãn và ô nhập trong cùng form thẳng một hàng |
| AI-01-32 | Ở cửa sổ 1366 x 768, trang có hiển thị đủ nội dung, không chữ bị cắt, không phần tử chồng lên nhau, không có thanh cuộn ngang không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: Template mục 1.17; slide AI-First (ví dụ OrangeHRM: "Does the layout hold at 1366x768") | DevTools (Device Toolbar, đặt 1366 x 768) | Không có chữ bị cắt, chồng lấn hay thanh cuộn ngang |
| AI-01-33 | Khi zoom trình duyệt 200%, mọi nội dung và chức năng vẫn dùng được, không bị cắt hay chồng lấn không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.4 Resize Text | Bàn phím (Ctrl và dấu +), Nhìn | Đọc được mọi chữ, bấm được mọi nút, không chồng lấn |
| AI-01-34 | Khi Họ Tên dài (ví dụ 50 ký tự hợp lệ), lời chào trên navbar và ô "Họ Tên" có hiển thị gọn, không tràn hay đẩy lệch các mục khác không? | IA-01 | W-06, W-04, W-03 (navbar khi đã đăng nhập) | Khuyến nghị: Slide S13 ("text overflow, misalignment") | Nhìn (cập nhật Họ Tên dài ở W-06, rồi xem navbar ở cả 3 trang) | Lời chào không tràn ra ngoài navbar, không đẩy nút đăng xuất xuống dòng; ô "Họ Tên" hiển thị được chữ (cuộn trong ô nếu dài) |
| AI-01-35 | Chữ hiển thị trên 3 màn hình có lỗi chính tả hoặc sai dấu tiếng Việt không? | IA-01 | W-06 (cả hai trạng thái), W-04, W-03 | Khuyến nghị: Slide AI-First, danh sách thành phần GUI cần kiểm ("orthography") | Nhìn | Không có lỗi chính tả, không sai dấu |

---

## 4. Ma trận trạng thái đơn (dùng cho AI-01-07)

Theo CH-06. SRS không cho bản dịch cụ thể, nên cột "Chữ hiển thị" ghi khi chạy; mục Passed khi cả 5 dòng đạt cột "Mong đợi".

| Mã trạng thái (FR-10) | Chữ hiển thị (ghi khi chạy) | Mong đợi |
|---|---|---|
| `pending` | | Chữ tiếng Việt, không phải mã tiếng Anh |
| `confirmed` | | Chữ tiếng Việt, không phải mã tiếng Anh |
| `shipping` | | Chữ tiếng Việt, không phải mã tiếng Anh |
| `delivered` | | Chữ tiếng Việt, không phải mã tiếng Anh |
| `canceled` | | Chữ tiếng Việt, không phải mã tiếng Anh |
| Cả 5 dòng | | 5 chữ khác nhau |

Ma trận này có thể dùng chung với mục kiểm màu trạng thái ở IA-04 (thêm cột "Màu").

---

## 5. Truy vết oracle IA-01

| Oracle | Mục |
|---|---|
| UI-R20, UI-R34 | AI-01-13, AI-01-14 |
| UI-R29 | AI-01-18 |
| UI-R30 | AI-01-07 (phần chữ; phần màu ở IA-04) |
| UI-R31 | AI-01-01 đến AI-01-07 |
| UI-R32 | AI-01-08, AI-01-09 |
| UI-R33 | AI-01-10, AI-01-11, AI-01-12 |
| UI-R35 | AI-01-15, AI-01-16, AI-01-17 |
| Ngoài SRS (khuyến nghị) | AI-01-19 đến AI-01-35 |

Tổng: 35 mục (18 căn cứ SRS, 17 khuyến nghị).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Màu trạng thái đơn (phần thứ hai của UI-R30) | Thuộc IA-04 theo `01_oracle.md`; sẽ đưa vào bản nháp IA-04 |
| Template mục 1.01 (màu nền website tối), 1.16 (ảnh món ăn có viền), 1.22 (ô tìm kiếm nhà hàng) | Đặc thù trang web nhà hàng của template, không áp dụng cho 3 màn hình |
| Template mục 1.13 (cỡ chữ nội dung 11pt) | Đơn vị pt dành cho in ấn; SRS và slide không cho chuẩn cỡ chữ web, khó kiểm Passed / Failed |
| Template mục 1.19 (logo ở góc trên trái) | Có thể kiểm, nhưng ít giá trị với 3 màn hình đã chọn; để SV quyết định ở bước `review` / `add` nếu cần |
| Tiêu đề cột viết tắt (ví dụ "Mã ĐH") | Template mục 3.16 chỉ nói về viết tắt trên nút và option box; không có nguồn trực tiếp cho tiêu đề cột |
| Dark mode, RTL | Đề bài nêu là mảng AI thường bỏ sót; SRS không yêu cầu và EShop không có chế độ tối / ngôn ngữ RTL quan sát được ở bước survey. Để SV xét ở bước `add` |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Liên quan |
|---|---|---|
| CHD-01 | Tách kiểm ngôn ngữ (UI-R31) thành 6 mục theo loại phần tử (AI-01-01 đến AI-01-06) có hợp lý, hay gộp lại thành ít mục hơn? | AI-01-01 đến AI-01-06 |
| CHD-02 | AI-01-24 đặt mong đợi ngày / tháng / năm theo quy ước tiếng Việt; SRS không quy định định dạng ngày. Giữ mục này (khuyến nghị) hay bỏ? | AI-01-24 |
| CHD-03 | AI-01-22 theo template của môn (ô read-only / disable không nhận focus). Một số hướng dẫn accessibility lại cho phép ô read-only nhận focus để screen reader đọc được. Giữ mong đợi theo template hay đổi? | AI-01-22 |
| CHD-04 | AI-01-16 và AI-01-17 liệt kê thứ tự focus mong đợi dựa trên vị trí phần tử thấy ở survey. Nếu bố cục khi chạy khác survey thì lấy thứ tự theo bố cục thực tế lúc chạy | AI-01-16, AI-01-17 |
