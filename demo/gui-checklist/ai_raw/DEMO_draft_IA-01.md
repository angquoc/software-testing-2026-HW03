# DEMO ai-draft: Checklist IA-01 Tiêu chuẩn giao diện chung (bản AI)

- Bước: `[demo][ai-draft]`, IA-01
- Thời gian tạo: 2026-11-11 09:59 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `01_oracle.md` (bản review, cập nhật 09:56) mục 2, 3, 4, 5.2; `00_survey.md` (bản đã đối chiếu) và ảnh `survey_01`, `survey_02`, `survey_05`, `survey_06`; `references/sources.md` của skill

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-01 ở mục tổng hợp (A-01: UI-R01, UI-R02, UI-R04, UI-R05, UI-R19 phần bảng và nút xóa, UI-R25); không có mục khuyến nghị `NR` nào thuộc IA-01; quyết định CH-01 đến CH-11 và vòng hai điểm A đến D; giả định GĐ-01 đến GĐ-06 (SV đã xác nhận).
- `00_survey.md` và ảnh: Chỉ dùng để biết màn hình có những thành phần nào và gọi đúng tên; **không** dùng để đoán kết quả.
- Dữ liệu: Tài khoản `admin@eshop.com` / `Admin123!` (SRS mục 1); dữ liệu mẫu sau reset có 3 danh mục; trạng thái trống tạo bằng cách xóa hết danh mục qua giao diện rồi reset (cách SV đã dùng ở survey).
- Nguồn ngoài SRS: Nielsen 10 heuristics, Shneiderman 8 Golden Rules, WCAG 2.2 (chuẩn công khai). Slide "GUI + Usability + Compatibility Testing AI-First" và template GUI checklist của môn **không** được đọc trực tiếp trong phiên này; mục nào dẫn hai nguồn này ghi "(theo `references/sources.md`)" để SV kiểm lại (CHD-03).

Quy ước (dùng chung cho 4 file):

- Mã mục: `AI-01-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed. Nội dung kiểm viết dạng câu hỏi Có / Không.
- Màn hình ghi kèm trạng thái: `A-01 (có dữ liệu)` là trang Danh mục sau reset; `A-01 (trống)` là trang Danh mục sau khi xóa hết danh mục; `menu trái` là menu dùng chung khi đang ở trang Danh mục. Một kiểm tra dùng cho nhiều trạng thái là **một** mục.
- Cột "Oracle": Mã `UI-Rnn` khi căn cứ là SRS; mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn (và mã `NR-nn` nếu SV đã chốt ở `oracle`).
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ. DevTools và công cụ chỉ dùng ở bước `exec`.
- Theo quyết định của SV ở `oracle`: Kết quả mong đợi chỉ nói phần **nhìn thấy được**; không kiểm thêm, xóa có thật sự đổi dữ liệu, không kiểm phân quyền, bảo mật. Trang Admin Login không thuộc phạm vi (CH-01).
- Ý "chữ trên giao diện bằng tiếng Việt, không có chữ kỹ thuật" chỉ nằm ở các mục IA-01 (AI-01-01 đến AI-01-04); các file IA khác không nhắc lại.
- Tên gọi: Bản nháp gọi các thành phần theo chữ trên giao diện (ô "Tên danh mục mới", nút "Thêm mới", nút "Xóa", mục "Danh mục", "Đăng xuất" ở menu trái).

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`); mở `http://localhost:5174`, đăng nhập `admin@eshop.com` / `Admin123!`, chọn "Danh mục" ở menu trái. Đây là trạng thái `A-01 (có dữ liệu)` | Mọi mục, trừ khi ghi khác |
| ĐK-02 | Cửa sổ Chrome phóng to hết màn hình, zoom trình duyệt 100% (trừ mục đổi zoom). Ghi kích thước cửa sổ vào sheet "Môi trường" khi chạy | Mọi mục |
| ĐK-03 | Trạng thái `A-01 (trống)`: Sau khi chạy xong các mục ở trạng thái có dữ liệu, bấm "Xóa" lần lượt mọi dòng. Chạy xong các mục ở trạng thái trống thì reset lại theo ĐK-01 | AI-01-08, AI-01-09, AI-01-10 và các mục trạng thái trống ở IA-03, IA-04 |
| ĐK-04 | Mục làm đổi dữ liệu (thêm, xóa danh mục) chạy **sau** các mục chỉ nhìn; reset theo ĐK-01 sau khi chạy | AI-01-04, AI-01-18, các mục đổi dữ liệu ở IA-02 và IA-04 |
| ĐK-05 | Tên hợp lệ dùng khi cần thêm một danh mục: `Thời trang` (chưa có trong dữ liệu mẫu). Cần thêm lần nữa trong cùng đợt chạy thì dùng `Thời trang 2`, `Thời trang 3` | AI-01-04, các mục thêm danh mục ở IA-02 và IA-04 |

---

## 3. Bảng checklist IA-01

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-01-01 | Tiêu đề trên tab trình duyệt có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Nhìn: Đọc chữ trên tab trình duyệt | Tiêu đề tab là chữ tiếng Việt; chỉ được giữ "ID" và tên riêng "EShop Admin" (CH-02, CH-03) |
| AI-01-02 | Các mục ở menu trái có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu), menu trái | UI-R01 | Nhìn: Đọc từng mục menu từ trên xuống | Mọi mục menu là chữ tiếng Việt; "EShop Admin" là tên riêng, được giữ; "Dashboard" là chữ tiếng Anh phải dịch (CH-02) |
| AI-01-03 | Chữ cố định ở vùng nội dung (tiêu đề trang, placeholder, tên cột, chữ trên nút) có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Nhìn: Đọc tiêu đề, placeholder của ô nhập, tên các cột, chữ trên "Thêm mới" và "Xóa". Không tính tên danh mục là dữ liệu (ví dụ "Laptop") (CHD-05) | Mọi chữ cố định là tiếng Việt, trừ thuật ngữ "ID" (CH-02) |
| AI-01-04 | Các thông báo hiện ra khi thao tác (thông báo lỗi khi để trống tên, thông báo sau khi thêm hoặc xóa, nếu có) có bằng tiếng Việt và không chứa chữ kỹ thuật không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Chuột: Bấm "Thêm mới" khi ô tên trống; thêm tên "Thời trang" (ĐK-05); xóa một dòng. Đọc mọi thông báo hiện ra (kể cả hộp thoại của trình duyệt) | Mọi thông báo là câu tiếng Việt; không có mã lỗi, tên trường kỹ thuật, chữ "Error", "undefined", "null", chuỗi JSON. Thao tác nào không có thông báo thì phần đó ghi theo CHD-02 |
| AI-01-05 | Nút "Thêm mới" có nền màu xanh dương không? | IA-01 | A-01 (có dữ liệu) | UI-R02 | Nhìn | Nền nút màu xanh dương (nhóm hành động tích cực, CH-04) |
| AI-01-06 | Nút "Xóa" trên các dòng có màu đỏ không? | IA-01 | A-01 (có dữ liệu) | UI-R02 | Nhìn: Xem nút "Xóa" ở mọi dòng | Nút "Xóa" ở mọi dòng có màu đỏ (nhóm nguy hiểm, CH-04) |
| AI-01-07 | Mục "Đăng xuất" ở menu trái có màu đỏ không? | IA-01 | A-01 (có dữ liệu), menu trái | UI-R02 | Nhìn | "Đăng xuất" có màu đỏ (nhóm nguy hiểm / hủy bỏ, CH-04). Chữ đỏ không nền có tính là đạt không: CHD-01 |
| AI-01-08 | Trang có đúng một thẻ `<h1>` không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R04, UI-R25 | DevTools (chỉ ở `exec`): Console `document.querySelectorAll('h1').length` ở cả hai trạng thái | Kết quả là 1 ở cả hai trạng thái |
| AI-01-09 | Chữ trong thẻ `<h1>` có mô tả nội dung trang Danh mục không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R04 | DevTools (chỉ ở `exec`): Console `document.querySelector('h1').textContent` | Chữ trong `<h1>` nói về quản lý danh mục (có chữ "Danh mục"); không phải tên hệ thống "EShop Admin" hay tên trang khác (GĐ-06) |
| AI-01-10 | Thứ tự focus khi bấm Tab có đi hết các mục menu trái (từ trên xuống) rồi mới tới vùng nội dung không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R05 | Bàn phím: Bấm vào thanh địa chỉ, bấm Tab liên tục, ghi lại thứ tự phần tử nhận focus | Focus đi lần lượt các mục menu từ trên xuống (tới "Đăng xuất"), sau đó mới vào vùng nội dung (CH-05) |
| AI-01-11 | Trong vùng nội dung, focus có đi theo thứ tự ô "Tên danh mục mới", nút "Thêm mới", rồi các nút "Xóa" từ dòng trên xuống dòng dưới không? | IA-01 | A-01 (có dữ liệu) | UI-R05 | Bàn phím: Tiếp tục bấm Tab sau mục menu cuối | Thứ tự: Ô nhập, "Thêm mới", "Xóa" dòng 1, "Xóa" dòng 2, "Xóa" dòng 3 |
| AI-01-12 | Ở trạng thái có dữ liệu, trang có bảng hiển thị mỗi danh mục trên một dòng, mỗi dòng có mã và tên danh mục không? | IA-01 | A-01 (có dữ liệu) | UI-R19 | Nhìn | Có bảng; số dòng bằng số danh mục sau reset; mỗi dòng có mã và tên |
| AI-01-13 | Mỗi dòng của bảng có nút xóa nhìn thấy được không? | IA-01 | A-01 (có dữ liệu) | UI-R19 | Nhìn | Mỗi dòng có một nút xóa ("Xóa") |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-01-14 | Thẻ `<html>` có khai báo ngôn ngữ tiếng Việt (`lang="vi"`) không? | IA-01 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 3.1.1 Language of Page; nội dung đối chiếu với UI-R01 | DevTools (chỉ ở `exec`): Console `document.documentElement.lang` | Giá trị là `vi` (hoặc bắt đầu bằng `vi`) |
| AI-01-15 | Chữ tiếng Việt trên trang có hiển thị đủ dấu, không có ký tự lỗi (ô vuông, dấu hỏi, chữ bị tách dấu) không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: Slide S13 GUI Testing & Usability Testing, phần Localization (theo `references/sources.md`) | Nhìn: Đọc tiêu đề, menu, tên cột, placeholder, nút ở zoom 100% | Mọi chữ có dấu hiển thị đúng, không có ký tự lỗi |
| AI-01-16 | Chữ trên trang có đạt độ tương phản tối thiểu với nền không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.4.3 Contrast (Minimum) | Công cụ (chỉ ở `exec`): DevTools (color picker hiện tỉ lệ tương phản) hoặc Lighthouse / axe; đo các mục menu (kể cả mục đang chọn và "Đăng xuất"), placeholder của ô nhập, chữ trên "Thêm mới" và "Xóa", tên cột, chữ trong bảng | Mọi chữ thường đạt tỉ lệ ít nhất 4,5:1; chữ lớn (từ 24 px, hoặc từ 18,66 px in đậm) ít nhất 3:1. Tách hay gộp các phần đo: CHD-06 |
| AI-01-17 | Ở zoom 200%, mọi chữ và nút trên trang còn đọc được, không bị cắt, không chồng lên nhau không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.4.4 Resize Text | Bàn phím: Ctrl + phím cộng tới 200%; cuộn xem hết trang | Không có chữ, nút hay ô nào bị cắt mất hoặc chồng lên nhau; vẫn bấm được "Thêm mới" và "Xóa" |
| AI-01-18 | Tên danh mục dài có hiển thị trong bảng mà không tràn sang cột khác hay đẩy nút "Xóa" ra ngoài bảng không? | IA-01 | A-01 (có dữ liệu) | Khuyến nghị: Slide S13 GUI Testing & Usability Testing, phần text overflow, misalignment (theo `references/sources.md`) | Chuột, bàn phím: Thêm danh mục có tên dài 100 ký tự không có dấu cách (độ dài: CHD-04), xem dòng mới trong bảng (ĐK-04) | Tên xuống dòng hoặc bị rút gọn có dấu "..." trong cột "Tên Danh Mục"; không đè lên cột khác; nút "Xóa" của dòng đó vẫn nằm trong cột "Hành động" |
| AI-01-19 | Mọi phần tử bấm được (các mục menu, ô nhập, "Thêm mới", các nút "Xóa") có nhận được focus bằng phím Tab không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.1.1 Keyboard | Bàn phím: Bấm Tab đi hết trang, đánh dấu phần tử nào nhận focus | Không phần tử bấm được nào bị bỏ qua |
| AI-01-20 | Phần tử đang có focus có viền hoặc dấu hiệu nhìn thấy được không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.4.7 Focus Visible | Bàn phím: Bấm Tab qua từng phần tử, nhìn phần tử đang có focus | Mỗi phần tử nhận focus đều có viền hoặc đổi nền rõ ràng, phân biệt được với lúc không có focus |

---

## 4. Ma trận

Không có. Các mục IA-01 không kiểm cùng một tập trạng thái bản ghi.

---

## 5. Truy vết oracle IA-01

| Oracle | Mục |
|---|---|
| UI-R01 | AI-01-01, AI-01-02, AI-01-03, AI-01-04 |
| UI-R02 | AI-01-05, AI-01-06, AI-01-07 |
| UI-R04 | AI-01-08, AI-01-09 |
| UI-R25 | AI-01-08 (trùng ý với UI-R04, một mục) |
| UI-R05 | AI-01-10, AI-01-11 |
| UI-R19 (phần bảng và nút xóa) | AI-01-12, AI-01-13 |
| Ngoài SRS (khuyến nghị) | AI-01-14 đến AI-01-20 |

Tổng: 20 mục (13 căn cứ SRS, 7 khuyến nghị).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Đơn vị tiền `₫` (UI-R03) | `Không áp dụng` trong oracle: A-01 không hiển thị tiền |
| Ngôn ngữ, `<h1>`, màu nút ở trang Admin Login | Trang Admin Login không thuộc phạm vi (CH-01) |
| Nút giữ đúng nhóm màu khi rê chuột hoặc khi có focus | SRS chỉ nói màu của nút, không nói theo trạng thái; dễ thành mục lặp với AI-01-05 đến AI-01-07 |
| Kiểu viết hoa nhất quán ("Quản lý Danh mục", "Tên Danh Mục", "Mã Giảm Giá"); tiêu đề tab mô tả đúng trang (WCAG 2.4.2); F5 về Dashboard; không có lời chào tài khoản | Các điểm ở `01_oracle.md` mục 5.1; SV chốt tự xét ở bước `add` (vòng hai điểm D), nên bản nháp không sinh mục |
| Font chữ, cỡ chữ nhất quán giữa các khối | Không có nguồn đã đọc trong phiên này để nêu mức đo được; SV xét ở `add` nếu cần |
| Khổ màn hình hẹp (reflow 320 px, WCAG 2.2 SC 1.4.10), dark mode, RTL | Mảng đề gợi ý xét thêm. Web Admin dùng trên máy tính; bản nháp không sinh mục, để SV xét ở bước `add` |
| Hiển thị an toàn tên danh mục chứa thẻ HTML (SEC-04, UI-R32) | `Không áp dụng`: SV chốt không kiểm bảo mật |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CHD-01 | UI-R02 nói "nút ... dùng màu đỏ". Mục "Đăng xuất" trên menu có chữ màu, không có nền riêng. Thế nào là đạt? | (a) Chữ đỏ là đạt; (b) Phải có nền đỏ như nút "Xóa" | AI-01-07 |
| CHD-02 | Mục phụ thuộc một thành phần có thể không xuất hiện (ví dụ kiểm nội dung thông báo trong khi thao tác không có thông báo nào) ghi kết quả thế nào? | (a) "Không chạy được" kèm lý do, mục gốc kiểm "có xuất hiện không" mới ghi Failed; (b) Failed; (c) N/A | AI-01-04 và các mục phụ thuộc ở IA-02, IA-04 |
| CHD-03 | Một số mục khuyến nghị dẫn slide S13, slide AI-First hoặc template của môn theo `references/sources.md`, phiên này không đọc trực tiếp các nguồn đó. Xử lý thế nào? | (a) Giữ nguồn như ghi, SV kiểm lại slide khi review; (b) Đổi sang nguồn chuẩn công khai (Nielsen, WCAG) nếu có; (c) Bỏ mục nào không có nguồn chuẩn | AI-01-15, AI-01-18, các mục ghi "theo `references/sources.md`" ở IA-02, IA-03 |
| CHD-04 | Tên dài dùng ở AI-01-18 bao nhiêu ký tự? SRS không nêu độ dài tối đa của tên danh mục (UI-R28 là của tên sản phẩm) | (a) 100 ký tự; (b) 255 ký tự; (c) SV chọn giá trị khác | AI-01-18 |
| CHD-05 | Tên danh mục là dữ liệu (ví dụ "Laptop"). Có tính vào yêu cầu "toàn bộ giao diện dùng tiếng Việt" không? | (a) Không tính dữ liệu, chỉ tính chữ cố định của giao diện; (b) Có tính | AI-01-03 |
| CHD-06 | AI-01-16 đo tương phản nhiều phần (menu, placeholder, nút, bảng) trong một mục. Giữ một mục hay tách? | (a) Giữ một mục, Notes ghi phần nào không đạt; (b) Tách theo khu vực: Menu trái; vùng nội dung | AI-01-16 |
