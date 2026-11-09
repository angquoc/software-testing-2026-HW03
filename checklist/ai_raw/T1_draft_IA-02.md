# T1 ai-draft: Checklist IA-02 Form

Bước: `[T1][ai-draft]`, IA-02, bản AI
Tạo lúc: 2026-11-09 15:03

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-02 ở mục 3 (W-06: UI-R13, R14, R15, R16, R37, R39; W-04: UI-R01, R02, R03, R04, R36, R37, R38, R39; W-03: UI-R06, R10/R37, R36, R38, R39), quyết định CH-01 đến CH-10, giả định GĐ-01 đến GĐ-05.
- `00_survey.md` và ảnh `survey_01` đến `survey_08`: Chỉ dùng để biết form có những ô, nhãn, nút nào; **không** dùng để đoán kết quả.
- Thông tin sinh viên cung cấp: `tools/seed_orders.py` tạo 5 đơn ở 5 trạng thái và tài khoản `newuser@eshop.com` không có đơn.
- Nguồn ngoài SRS trong slide môn học: Slide "GUI + Usability + Compatibility Testing AI-First" (Nielsen 10 heuristics, Shneiderman 8 Golden Rules, checklist theo loại control của Waghmare: Text Box, Button, input-field validation; WCAG), slide S13, template `GUI checklist_Template_Vi.xlsx`.

Quy ước: Giống bản nháp IA-01.

- Mã mục: `AI-02-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục; cột "Màn hình" liệt kê các màn hình áp dụng.
- Cột "Oracle": Mã `UI-Rxx` khi căn cứ là SRS; mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ.
- Ô thứ nhất của form đăng nhập (W-03) hiện có nhãn "Username" (`00_survey.md` mục 5.2). Bản nháp gọi là "ô Email của W-03" vì UI-R06 yêu cầu người dùng nhập Email.

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`), rồi chạy `tools/seed_orders.py` | Mọi mục |
| ĐK-02 | Tài khoản đã có: `test@eshop.com` / `Test1234!` (dùng làm email trùng ở AI-02-05) | AI-02-05, mọi mục ở W-06 |
| ĐK-03 | Mỗi lần kiểm thông báo lỗi, bắt đầu từ form trống (tải lại trang) | AI-02-03 đến AI-02-06, AI-02-13, AI-02-16, AI-02-22 đến AI-02-27 |
| ĐK-04 | Cửa sổ trình duyệt ở kích thước mặc định của lần chạy (ghi vào môi trường chạy), zoom 100% | Mọi mục |

---

## 3. Bảng checklist IA-02

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-02-01 | Form đăng ký có đủ 3 ô Họ Tên, Email, Mật khẩu không? | IA-02 | W-04 | UI-R01 | Nhìn | Có 3 ô với nhãn Họ Tên, Email, Mật khẩu |
| AI-02-02 | Form đăng ký có ô "Xác nhận mật khẩu" không? | IA-02 | W-04 | UI-R04 | Nhìn | Có ô nhập thứ hai cho mật khẩu, nhãn "Xác nhận mật khẩu" (hoặc tương đương) |
| AI-02-03 | Khi Mật khẩu và Xác nhận mật khẩu không khớp, form có hiện thông báo lỗi và không đăng ký không? | IA-02 | W-04 | UI-R04 | Bàn phím (Họ Tên hợp lệ, email mới, Mật khẩu `Abcdef1!`, Xác nhận `Abcdef2!`, bấm "Đăng Ký") | Hiện thông báo lỗi về việc hai mật khẩu không khớp; vẫn ở trang Đăng ký. Không chạy được nếu AI-02-02 Failed (ghi chú phụ thuộc) |
| AI-02-04 | Khi Email sai định dạng, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R02 | Bàn phím (lần lượt `abc`, `abc@`, `abc@domain`, các ô khác hợp lệ, bấm "Đăng Ký") | Mỗi giá trị đều bị từ chối, có thông báo lỗi (của trình duyệt hoặc của trang); vẫn ở trang Đăng ký |
| AI-02-05 | Khi Email đã tồn tại, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R02 | Bàn phím (Email `test@eshop.com`, các ô khác hợp lệ) | Có thông báo lỗi cho biết email đã được dùng; vẫn ở trang Đăng ký |
| AI-02-06 | Khi mật khẩu yếu, form có hiện thông báo lỗi không? | IA-02 | W-04 | UI-R03 | Bàn phím (lần lượt `Ab1!xyz` (7 ký tự), `abcdef1!` (thiếu chữ hoa), `ABCDEF1!` (thiếu chữ thường), `Abcdefg!` (thiếu chữ số), `Abcdefg1` (thiếu ký tự đặc biệt), `Abcdef1#` (ký tự đặc biệt ngoài danh sách SRS)) | Cả 6 giá trị đều bị từ chối, có thông báo lỗi; vẫn ở trang Đăng ký |
| AI-02-07 | Nhãn ô thứ nhất của form đăng nhập có cho biết người dùng phải nhập Email không? | IA-02 | W-03 | UI-R06 | Nhìn | Nhãn là "Email" (hoặc có chữ Email), khớp với UI-R06 |
| AI-02-08 | Nhãn của các trường bắt buộc có dấu `*` bên cạnh không? | IA-02 | W-04, W-03 | UI-R36 (CH-01) | Nhìn | W-04: Họ Tên, Email, Mật khẩu, Xác nhận mật khẩu (nếu có ô này) đều có `*`. W-03: Email, Mật khẩu đều có `*` |
| AI-02-09 | Các ô Email có dùng `type="email"` không? | IA-02 | W-06 (đăng nhập, cả ô Email bị khóa), W-04, W-03 | UI-R10, UI-R37 (CH-08) | DevTools (Elements, xem thuộc tính `type` của ô) | Cả 3 ô Email có `type="email"` |
| AI-02-10 | Ô Email của form đăng nhập có chặn định dạng sai bằng validate HTML5 không? | IA-02 | W-03 | UI-R10 | Bàn phím (nhập `abc`, mật khẩu bất kỳ, bấm "Sign In") | Trình duyệt hiện bong bóng báo lỗi định dạng email ngay tại ô, form không được gửi |
| AI-02-11 | Các ô mật khẩu có dùng `type="password"` không? | IA-02 | W-04, W-03 | UI-R38 | DevTools (Elements) | Ô Mật khẩu (và Xác nhận mật khẩu nếu có) ở W-04, ô Mật khẩu ở W-03 có `type="password"` |
| AI-02-12 | Ký tự gõ vào ô mật khẩu có bị che không? | IA-02 | W-04, W-03 | UI-R38 | Bàn phím, Nhìn (gõ `Abcdef1!`) | Mỗi ký tự hiện thành dấu chấm hoặc dấu sao, không đọc được mật khẩu |
| AI-02-13 | Thông báo lỗi của form có nằm **trên** nút gửi không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | UI-R39 | Bàn phím, Nhìn (W-06: Số điện thoại `123`, bấm "Cập nhật"; W-04: email trùng như AI-02-05; W-03: đúng email, sai mật khẩu, bấm "Sign In") | Ở cả 3 màn hình, thông báo lỗi do trang hiển thị nằm phía trên nút gửi, không nằm dưới nút. (Bong bóng validate của trình duyệt không tính) |
| AI-02-14 | Ba ô Họ Tên, Số điện thoại, Địa chỉ giao hàng có sửa được không? | IA-02 | W-06 (đăng nhập) | UI-R13 | Chuột, Bàn phím (bấm vào từng ô và gõ thêm chữ) | Gõ được vào cả 3 ô |
| AI-02-15 | Ô Email có bị khóa, không sửa được không? | IA-02 | W-06 (đăng nhập) | UI-R15 | Chuột, Bàn phím (bấm vào ô Email và gõ) | Giá trị ô Email không đổi |
| AI-02-16 | Khi Số điện thoại không hợp lệ, form có hiện thông báo lỗi không? | IA-02 | W-06 (đăng nhập) | UI-R14 | Bàn phím (lần lượt `1912345678` (không bắt đầu bằng 0), `091234567` (9 chữ số), `091234567890` (12 chữ số), `09123abc45` (có chữ), bấm "Cập nhật") | Cả 4 giá trị bị từ chối, có thông báo lỗi |
| AI-02-17 | Số điện thoại hợp lệ ở hai biên 10 và 11 chữ số có được chấp nhận, không báo lỗi không? | IA-02 | W-06 (đăng nhập) | UI-R14 | Bàn phím (lần lượt `0912345678`, `09123456789`, bấm "Cập nhật") | Cả 2 giá trị không có thông báo lỗi |
| AI-02-18 | Form hồ sơ có ô hay lựa chọn nào để đổi vai trò (`role`) không? | IA-02 | W-06 (đăng nhập) | UI-R16 (CH-05) | Nhìn | Không có ô, dropdown hay lựa chọn nào liên quan tới vai trò |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-02-19 | Khi mở trang hồ sơ, các ô có hiện sẵn đúng dữ liệu hiện tại của tài khoản không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, checklist Text Box ("Correct pre-population or blank") | Nhìn (đăng nhập `test@eshop.com`, so với dữ liệu đã lưu ở lần cập nhật trước) | Ô Email hiện email đang đăng nhập; Họ Tên, Số điện thoại, Địa chỉ hiện đúng giá trị đã lưu (ô chưa có dữ liệu thì trống) |
| AI-02-20 | Ô Email bị khóa có nhìn khác ô sửa được (nền xám) và con trỏ chuột không đổi thành dạng nhập chữ khi rê lên không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, checklist Text Box ("disabled = greyed, no cursor, not editable") | Nhìn, Chuột | Ô Email có nền khác ô thường; rê chuột lên ô không thấy con trỏ nhập chữ (I-beam) |
| AI-02-21 | Mỗi ô nhập có tên đọc được bởi công cụ hỗ trợ (nhãn gắn với ô) không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships, SC 4.1.2 Name, Role, Value; slide AI-First, checklist Text Box ("Correct label") | DevTools (Elements, chọn ô, xem phần Accessibility, dòng "Name"); Chuột (bấm vào chữ nhãn) | Mọi ô có "Name" khớp với nhãn nhìn thấy; bấm vào chữ nhãn thì con trỏ nhảy vào ô tương ứng (riêng ô bị khóa chỉ xét "Name") |
| AI-02-22 | Thông báo lỗi có nói rõ ô nào sai và cần sửa thế nào không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors); WCAG 2.2 SC 3.3.1 Error Identification, SC 3.3.3 Error Suggestion | Bàn phím, Nhìn (dùng dữ liệu sai của AI-02-04, AI-02-06, AI-02-16) | Thông báo nêu tên ô (hoặc nằm ngay cạnh ô) và nêu điều kiện cần đạt, ví dụ mật khẩu yếu thì nêu điều kiện còn thiếu; không chỉ ghi chung chung "Lỗi" hay "Dữ liệu không hợp lệ" |
| AI-02-23 | Khi gửi form có lỗi, focus có được đưa về ô bị lỗi không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, "Golden rule: On error, return focus to the offending field"; template mục 3.14 | Bàn phím, Nhìn (gửi form có lỗi bằng chuột, rồi gõ phím ngay) | Ký tự gõ vào nằm ở ô bị lỗi (ô có dấu hiệu focus) |
| AI-02-24 | Ô bị lỗi có được làm nổi bật (viền, nền hoặc biểu tượng) không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, "Golden rule: ... highlight it"; WCAG 2.2 SC 1.4.1 Use of Color (không chỉ dùng màu) | Nhìn | Ô bị lỗi khác các ô còn lại, và dấu hiệu không chỉ là màu (có chữ báo lỗi hoặc biểu tượng đi kèm) |
| AI-02-25 | Sau khi form báo lỗi, các ô không có lỗi có giữ nguyên dữ liệu đã nhập không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Shneiderman rule 5 (Offer simple error handling) | Bàn phím, Nhìn (W-04: Họ Tên, Email hợp lệ, mật khẩu yếu; W-06: Họ Tên mới, số điện thoại sai) | Họ Tên, Email (W-04) và Họ Tên, Địa chỉ (W-06) vẫn còn giá trị vừa nhập. Ô mật khẩu được xóa hay giữ đều Passed |
| AI-02-26 | Ô Họ Tên có từ chối giá trị chỉ gồm khoảng trắng không? | IA-02 | W-06 (đăng nhập), W-04 | Khuyến nghị: Slide AI-First, checklist Text Box ("Rejects spaces-only") | Bàn phím (gõ 3 dấu cách, các ô khác hợp lệ, bấm nút gửi) | Có thông báo lỗi, giá trị không được chấp nhận |
| AI-02-27 | Bấm Enter trong ô một dòng có gửi form không? | IA-02 | W-06 (đăng nhập, ô Họ Tên), W-04 (ô Mật khẩu), W-03 (ô Mật khẩu) | Khuyến nghị: Slide AI-First, checklist Button ("One default button ... fires on Enter") | Bàn phím | Form được gửi như khi bấm nút gửi (có phản hồi: Chuyển trang, thông báo lỗi hoặc thông báo thành công) |
| AI-02-28 | Các ô nhập có khai báo mục đích nhập (thuộc tính `autocomplete`) để trình duyệt gợi ý đúng không? | IA-02 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.3.5 Identify Input Purpose | DevTools (Elements) | Họ Tên: `name`; Email: `email` (W-03 có thể là `username`); Số điện thoại: `tel`; Địa chỉ: `street-address`; Mật khẩu ở W-03: `current-password`; Mật khẩu ở W-04: `new-password` |
| AI-02-29 | Ô mật khẩu có cho dán (Ctrl + V) không? | IA-02 | W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum) (cho phép dùng trình quản lý mật khẩu, dán) | Bàn phím (sao chép `Test1234!` rồi dán vào ô) | Ô nhận đủ ký tự đã dán (đếm số dấu che bằng số ký tự) |
| AI-02-30 | Dòng hướng dẫn mật khẩu ở form đăng ký có nêu đủ điều kiện của SRS không? | IA-02 | W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.2 Labels or Instructions; nội dung đối chiếu với UI-R03 | Nhìn | Dòng hướng dẫn nêu đủ: Tối thiểu 8 ký tự, chữ hoa, chữ thường, chữ số, ký tự đặc biệt **và** danh sách ký tự đặc biệt được chấp nhận (`@ $ ! % * ? &`) |
| AI-02-31 | Ví dụ trong placeholder của ô Số điện thoại có hợp lệ theo quy tắc của SRS không? | IA-02 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 4 (Consistency and standards); nội dung đối chiếu với UI-R14 | Nhìn (xóa trống ô để thấy placeholder) | Số trong placeholder bắt đầu bằng `0` và có 10 hoặc 11 chữ số |

---

## 4. Truy vết oracle IA-02

| Oracle | Mục |
|---|---|
| UI-R01 | AI-02-01 |
| UI-R02 | AI-02-04, AI-02-05 |
| UI-R03 | AI-02-06 |
| UI-R04 | AI-02-02, AI-02-03 |
| UI-R06 | AI-02-07 |
| UI-R10, UI-R37 | AI-02-09, AI-02-10 |
| UI-R13 | AI-02-14 |
| UI-R14 | AI-02-16, AI-02-17 |
| UI-R15 | AI-02-15 |
| UI-R16 | AI-02-18 |
| UI-R36 | AI-02-08 |
| UI-R38 | AI-02-11, AI-02-12 |
| UI-R39 | AI-02-13 (UI-R39 cũng thuộc IA-04 theo `01_oracle.md`; chỉ tạo một mục ở đây, bản nháp IA-04 tham chiếu lại) |
| Ngoài SRS (khuyến nghị) | AI-02-19 đến AI-02-31 |

Tổng: 31 mục (18 căn cứ SRS, 13 khuyến nghị).

---

## 5. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Kiểm từng biên của quy tắc mật khẩu và số điện thoại (domain testing, BVA đầy đủ) | Thuộc kiểm thử chức năng. Checklist GUI chỉ kiểm form có từ chối và có báo cho người dùng (CH-05); dữ liệu ở AI-02-06, AI-02-16, AI-02-17 chỉ đủ để làm hiện thông báo |
| Độ dài tối đa của Họ Tên, Địa chỉ (slide AI-First, Text Box "Stops at max width"; template mục 2.07, 2.08) | SRS không cho độ dài tối đa nên không có mong đợi để kết luận Passed / Failed. Phần hiển thị chữ dài đã có ở AI-01-34 |
| Template mục 2.04 đến 2.13 (kiểu dữ liệu `varchar`, `int`, cho phép null) | Thuộc kiểm thử dữ liệu và chức năng, không quan sát được trên giao diện |
| Template mục 2.02 (cho nhập chữ vào số điện thoại) | Đã gộp vào dữ liệu `09123abc45` của AI-02-16 |
| Nút hiện / ẩn mật khẩu | SRS không yêu cầu; là tiện ích, không phải tiêu chuẩn có nguồn rõ trong slide |
| Hot key (Alt + chữ gạch chân) của checklist Button | Không phổ biến trên web và có thể trùng phím tắt trình duyệt |
| Vị trí thông báo lỗi khi khóa tài khoản và các thông báo phản hồi khác | Thuộc IA-04 |
| Ô Email bị khóa có bị bỏ qua khi Tab không | Đã có ở AI-01-22 (IA-01) |

---

## 6. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Liên quan |
|---|---|---|
| CHD-05 | AI-02-03 chỉ chạy được khi có ô Xác nhận mật khẩu. Nếu AI-02-02 Failed thì ghi AI-02-03 là Failed (kèm ghi chú phụ thuộc) hay đánh dấu "Không chạy được"? | AI-02-02, AI-02-03 |
| CHD-06 | AI-02-04 và AI-02-10 chấp nhận cả bong bóng validate của trình duyệt. Với AI-02-13 (UI-R39), bong bóng của trình duyệt không tính vì trang không điều khiển vị trí của nó. Đồng ý cách tính này không? | AI-02-04, AI-02-10, AI-02-13 |
| CHD-07 | AI-02-06 có giá trị `Abcdef1#` (ký tự đặc biệt không nằm trong danh sách của UI-R03). Giữ giá trị này (đọc danh sách trong ngoặc là danh sách đóng) hay bỏ (đọc là ví dụ)? | AI-02-06, AI-02-30 |
| CHD-08 | AI-02-28 đặt mong đợi cụ thể cho từng ô theo danh sách giá trị của HTML. Giữ mức chi tiết này hay chỉ kiểm "có thuộc tính `autocomplete` phù hợp"? | AI-02-28 |
