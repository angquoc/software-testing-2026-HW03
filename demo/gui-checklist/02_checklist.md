# DEMO checklist: Checklist đã review

Bước: `[demo][review]` (phần mục AI) và `[demo][add]` (phần mục SV thêm)
Bản AI gốc: `ai_raw/DEMO_draft_IA-01.md` (09:59), `ai_raw/DEMO_draft_IA-02.md` (10:02), `ai_raw/DEMO_draft_IA-03.md` (10:03), `ai_raw/DEMO_draft_IA-04.md` (10:04), ngày 2026-11-11, UTC+7
Cập nhật: 2026-11-11 10:12 (UTC+7) (bước `review`); bước `add`: ⏳ chưa làm

Ai làm phần nào:

- Sinh viên trả lời các câu hỏi CHD-01 đến CHD-16 và chọn cách review (b): AI lọc trước cả 4 IA theo 5 tiêu chí (mục kiểm nhiều điều, mơ hồ, trùng, nguồn yếu, lệch oracle).
- AI đưa 20 đề xuất lọc (P-01 đến P-20, nằm trong câu trả lời của phiên, không lưu trong `ai_raw/`). Sinh viên đồng ý 15 đề xuất và quyết định khác ở 5 đề xuất: P-01 (giữ mục, đổi căn cứ sang UI-R01), P-03 (giữ mục, đổi nguồn), P-05 (bỏ mục), P-10 (tách hai mục), P-19 (phương án (b), sửa tiêu chí của CHD-16).
- AI soạn file này theo quyết định của sinh viên; sinh viên kiểm tra lại. Mọi thay đổi về nội dung ghi ở mục 9.
- Phần mục sinh viên tự thêm (mục 5): Sinh viên viết nội dung; AI kiểm định dạng, nguồn, phạm vi và sửa theo quyết định của sinh viên.

---

## 1. Quy ước

- Mã mục cuối: `CL-<số>`, giữ cố định sau khi chốt (Excel, ảnh, issue đều dẫn chiếu mã này).
- Cột "Nguồn": `AI` (giữ nguyên nội dung của bản AI), `AI, SV sửa` (kèm mã `AI-xx-xx` gốc), `SV thêm`. Mục AI được tách thành hai thì cả hai `CL` ghi cùng mã AI gốc.
- Cột "Oracle": Mã `UI-Rnn` khi căn cứ là SRS (`01_oracle.md`). Mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn (và mã `NR-nn` nếu SV đã chốt ở `oracle`). Nguồn khuyến nghị chỉ dùng Nielsen 10 heuristics, Shneiderman 8 Golden Rules, WCAG 2.2; sau CHD-03 không còn mục nào dẫn slide hay template mà phiên AI không đọc trực tiếp.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ. DevTools và công cụ chỉ dùng ở bước `exec`.
- Một kiểm tra dùng cho nhiều trạng thái là **một** mục. Trạng thái: `A-01 (có dữ liệu)` là trang Danh mục sau reset; `A-01 (trống)` là trang Danh mục sau khi xóa hết danh mục; `menu trái` là menu dùng chung khi đang ở trang Danh mục.
- Kết quả mỗi mục: **Passed** hoặc **Failed**. Mục cần một thành phần mà khi chạy không xuất hiện (ví dụ kiểm nội dung thông báo trong khi không có thông báo, kiểm hộp xác nhận trong khi không có hộp) ghi **"Không chạy được"** kèm lý do, không tính Passed hay Failed (CHD-02). Mục kiểm "có xuất hiện không" mới là mục ghi Failed.
- Chỉ kiểm phần **nhìn thấy được** của giao diện; không kiểm thêm, xóa có thật sự đổi dữ liệu, không kiểm phân quyền, bảo mật (quyết định ở `oracle`). Trang Admin Login không thuộc phạm vi (CH-01).
- Định nghĩa đã chốt:
  - **Highlight** (CL-33, CL-34): Mục menu của trang đang mở trông khác **chính nó** khi đang ở trang khác (GĐ-03). Khác "rõ" là nhận ra được bằng mắt ở zoom 100% mà không cần phóng to; chỉ khác màu chữ cũng tính (CHD-11).
  - **Thông báo lỗi** (CL-04, CL-05, CL-22 đến CL-28, CL-30): Chỉ tính thông báo do trang hiển thị; bong bóng báo lỗi mặc định của trình duyệt không tính (CHD-07).
  - **Câu trọn ý** (CL-43): Câu nói trọn một ý, không phải từ hay cụm từ đơn lẻ (ví dụ chỉ "Trống" hay "Empty"); câu không có chủ ngữ như "Chưa có danh mục nào." vẫn tính là câu trọn ý (P-19).
  - **Để trống** (CL-22, CL-24): Gồm ô không có ký tự nào và ô chỉ có khoảng trắng (CHD-08).
  - **Chữ của giao diện** (CL-01 đến CL-06): Không tính tên danh mục, vì đó là dữ liệu (CHD-05).

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`); mở `http://localhost:5174`, đăng nhập `admin@eshop.com` / `Admin123!`, chọn "Danh mục" ở menu trái. Đây là trạng thái `A-01 (có dữ liệu)` | Mọi mục, trừ khi ghi khác |
| ĐK-02 | Cửa sổ Chrome phóng to hết màn hình, zoom trình duyệt 100% (trừ CL-18). Ghi kích thước cửa sổ vào sheet "Môi trường" khi chạy | Mọi mục |
| ĐK-03 | Trạng thái `A-01 (trống)`: Sau khi chạy xong các mục ở trạng thái có dữ liệu, bấm "Xóa" lần lượt mọi dòng. Chạy xong các mục ở trạng thái trống thì reset lại theo ĐK-01 | CL-10, CL-11, CL-12, CL-21, CL-33, CL-42, CL-43, CL-44 |
| ĐK-04 | Mục làm đổi dữ liệu (thêm, xóa danh mục) chạy **sau** các mục chỉ nhìn; reset theo ĐK-01 sau khi chạy | CL-04, CL-05, CL-24, CL-29, CL-30, CL-46 đến CL-52, CL-54, CL-55 |
| ĐK-05 | Tên hợp lệ dùng khi cần thêm một danh mục: `Thời trang` (chưa có trong dữ liệu mẫu). Cần thêm lần nữa trong cùng đợt chạy thì dùng `Thời trang 2`, `Thời trang 3` | CL-04, CL-05, CL-29, CL-30, CL-46, CL-47, CL-50, CL-53, CL-54, CL-55 |
| ĐK-06 | Vào trang Danh mục bằng cách bấm "Danh mục" ở menu trái khi đang ở một trang Admin khác (không gõ địa chỉ, vì mọi trang dùng chung `localhost:5174` và bấm F5 sẽ về Dashboard). Ghi lại trang vừa rời đi | CL-33, CL-34, CL-36, CL-45 |
| ĐK-07 | Giả lập mạng chậm: DevTools, tab Network, chọn preset "3G" (bản Chrome cũ gọi là "Slow 3G") (CHD-15). Vì bấm F5 sẽ về Dashboard, bật giả lập khi đang ở Dashboard rồi bấm "Danh mục" (ĐK-06). Tắt giả lập sau khi chạy xong mục | CL-45, CL-50 |
| ĐK-08 | Giả lập mất kết nối: Đang ở trang Danh mục, DevTools, tab Network, chọn "Offline". Tắt sau khi chạy xong mục | CL-53 |

---

## 3. Checklist

### 3.1 IA-01 Tiêu chuẩn giao diện chung

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-01 | Tiêu đề trên tab trình duyệt có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Nhìn: Đọc chữ trên tab trình duyệt | Tiêu đề tab là chữ tiếng Việt; chỉ được giữ "ID" và tên riêng "EShop Admin" (CH-02, CH-03) | AI (AI-01-01) |
| CL-02 | Các mục ở menu trái có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu), menu trái | UI-R01 | Nhìn: Đọc từng mục menu từ trên xuống | Mọi mục menu là chữ tiếng Việt; "EShop Admin" là tên riêng, được giữ; "Dashboard" là chữ tiếng Anh phải dịch (CH-02) | AI (AI-01-02) |
| CL-03 | Chữ cố định ở vùng nội dung (tiêu đề trang, placeholder, tên cột, chữ trên nút) có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Nhìn: Đọc tiêu đề, placeholder của ô nhập, tên các cột, chữ trên "Thêm mới" và "Xóa". Không tính tên danh mục là dữ liệu (ví dụ "Laptop") (CHD-05) | Mọi chữ cố định là tiếng Việt, trừ thuật ngữ "ID" (CH-02) | AI (AI-01-03) |
| CL-04 | Các thông báo hiện ra khi thao tác (thông báo lỗi khi để trống tên, thông báo sau khi thêm hoặc xóa) có bằng tiếng Việt không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Chuột: Bấm "Thêm mới" khi ô tên trống; thêm tên `Thời trang` (ĐK-05, ĐK-04); xóa một dòng. Đọc mọi thông báo hiện ra (kể cả hộp thoại của trình duyệt); không xét bong bóng báo lỗi mặc định của trình duyệt (CHD-07) | Mọi thông báo là câu tiếng Việt. Thao tác nào không có thông báo thì Notes ghi rõ; cả ba thao tác đều không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-01-04) |
| CL-05 | Các thông báo hiện ra khi thao tác có tránh được chữ kỹ thuật không? | IA-01 | A-01 (có dữ liệu) | UI-R01 | Chuột: Như CL-04 (dùng chung các thông báo của lần thao tác đó) | Không thông báo nào có mã lỗi, tên trường kỹ thuật, chữ "Error", "undefined", "null", chuỗi JSON. Cả ba thao tác đều không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-01-04) |
| CL-06 | Chữ tiếng Việt trên trang có hiển thị đủ dấu, không có ký tự lỗi (ô vuông, dấu hỏi, chữ bị tách dấu) không? | IA-01 | A-01 (có dữ liệu), menu trái | UI-R01 | Nhìn: Đọc tiêu đề, menu, tên cột, placeholder, nút ở zoom 100% | Mọi chữ có dấu hiển thị đúng, không có ký tự lỗi | AI, SV sửa (AI-01-15) |
| CL-07 | Nút "Thêm mới" có nền màu xanh dương không? | IA-01 | A-01 (có dữ liệu) | UI-R02 | Nhìn | Nền nút màu xanh dương (nhóm hành động tích cực, CH-04) | AI (AI-01-05) |
| CL-08 | Nút "Xóa" trên các dòng có màu đỏ không? | IA-01 | A-01 (có dữ liệu) | UI-R02 | Nhìn: Xem nút "Xóa" ở mọi dòng | Nút "Xóa" ở mọi dòng có màu đỏ (nhóm nguy hiểm, CH-04) | AI (AI-01-06) |
| CL-09 | Mục "Đăng xuất" ở menu trái có màu đỏ không? | IA-01 | A-01 (có dữ liệu), menu trái | UI-R02 | Nhìn | "Đăng xuất" có chữ hoặc nền màu đỏ, dễ nhận ra (nhóm nguy hiểm / hủy bỏ, CH-04, CHD-01) | AI, SV sửa (AI-01-07) |
| CL-10 | Trang có đúng một thẻ `<h1>` không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R04, UI-R25 | DevTools (chỉ ở `exec`): Console `document.querySelectorAll('h1').length` ở cả hai trạng thái | Kết quả là 1 ở cả hai trạng thái | AI (AI-01-08) |
| CL-11 | Chữ trong thẻ `<h1>` có mô tả nội dung trang Danh mục không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R04 | DevTools (chỉ ở `exec`): Console `document.querySelector('h1').textContent` | Chữ trong `<h1>` nói về quản lý danh mục (có chữ "Danh mục"); không phải tên hệ thống "EShop Admin" hay tên trang khác (GĐ-06) | AI (AI-01-09) |
| CL-12 | Thứ tự focus khi bấm Tab có đi hết các mục menu trái (từ trên xuống) rồi mới tới vùng nội dung không? | IA-01 | A-01 (có dữ liệu), A-01 (trống) | UI-R05 | Bàn phím: Bấm vào thanh địa chỉ, bấm Tab liên tục, ghi lại thứ tự phần tử nhận focus | Focus đi lần lượt các mục menu từ trên xuống (tới "Đăng xuất"), sau đó mới vào vùng nội dung (CH-05) | AI (AI-01-10) |
| CL-13 | Trong vùng nội dung, focus có đi theo thứ tự ô "Tên danh mục mới", nút "Thêm mới", rồi các nút "Xóa" từ dòng trên xuống dòng dưới không? | IA-01 | A-01 (có dữ liệu) | UI-R05 | Bàn phím: Tiếp tục bấm Tab sau mục menu cuối | Thứ tự: Ô nhập, "Thêm mới", "Xóa" dòng 1, "Xóa" dòng 2, "Xóa" dòng 3 | AI (AI-01-11) |
| CL-14 | Ở trạng thái có dữ liệu, trang có bảng hiển thị mỗi danh mục trên một dòng, mỗi dòng có mã và tên danh mục không? | IA-01 | A-01 (có dữ liệu) | UI-R19 | Nhìn | Có bảng; số dòng bằng số danh mục sau reset; mỗi dòng có mã và tên | AI (AI-01-12) |
| CL-15 | Mỗi dòng của bảng có nút xóa nhìn thấy được không? | IA-01 | A-01 (có dữ liệu) | UI-R19 | Nhìn | Mỗi dòng có một nút xóa ("Xóa") | AI (AI-01-13) |
| CL-16 | Thẻ `<html>` có khai báo ngôn ngữ tiếng Việt (`lang="vi"`) không? | IA-01 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 3.1.1 Language of Page; nội dung đối chiếu với UI-R01 | DevTools (chỉ ở `exec`): Console `document.documentElement.lang` | Giá trị là `vi` (hoặc bắt đầu bằng `vi`) | AI (AI-01-14) |
| CL-17 | Chữ trên trang có đạt độ tương phản tối thiểu với nền không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.4.3 Contrast (Minimum) | Công cụ (chỉ ở `exec`): DevTools (color picker hiện tỉ lệ tương phản) hoặc Lighthouse / axe; đo các mục menu (kể cả mục đang chọn và "Đăng xuất"), placeholder của ô nhập, chữ trên "Thêm mới" và "Xóa", tên cột, chữ trong bảng | Mọi chữ thường đạt tỉ lệ ít nhất 4,5:1; chữ lớn (từ 24 px, hoặc từ 18,66 px in đậm) ít nhất 3:1. Phần nào không đạt thì ghi ở Notes | AI, SV sửa (AI-01-16) |
| CL-18 | Ở zoom 200%, trang có hiển thị mà không có chữ, nút hay ô nào bị cắt hoặc chồng lên nhau không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.4.4 Resize Text | Bàn phím: Ctrl + phím cộng tới 200%; cuộn xem hết trang | Không có chữ, nút hay ô nào bị cắt mất hoặc chồng lên nhau | AI, SV sửa (AI-01-17) |
| CL-19 | Phần tử đang có focus có viền hoặc dấu hiệu nhìn thấy được không? | IA-01 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.4.7 Focus Visible | Bàn phím: Bấm Tab qua từng phần tử, nhìn phần tử đang có focus | Mỗi phần tử nhận focus đều có viền hoặc đổi nền rõ ràng, phân biệt được với lúc không có focus | AI (AI-01-20) |

### 3.2 IA-02 Form

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-20 | Ô "Tên danh mục mới" có dấu `*` nằm ngoài ô (sát ô hoặc cạnh nhãn) không? | IA-02 | A-01 (có dữ liệu) | UI-R06, UI-R20 | Nhìn: Xem quanh ô khi ô còn trống, rồi gõ một chữ vào ô và xem lại | Có dấu `*` nằm ngoài khung ô, sát ô hoặc cạnh nhãn, và vẫn còn khi ô đã có chữ. Dấu `*` chỉ nằm trong placeholder thì không tính (vòng hai điểm A) | AI (AI-02-01) |
| CL-21 | Trang có form thêm (ô nhập tên và nút để thêm) nhìn thấy được ngay khi vào trang không? | IA-02 | A-01 (có dữ liệu), A-01 (trống) | UI-R19 | Nhìn: Vào trang Danh mục từ menu trái ở cả hai trạng thái | Ô nhập tên và nút "Thêm mới" hiện ngay, không phải bấm thêm nút nào để mở, ở cả hai trạng thái | AI (AI-02-02) |
| CL-22 | Bấm "Thêm mới" khi ô tên để trống, có thông báo lỗi nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | UI-R20 | Chuột: Để ô trống, bấm "Thêm mới" | Có thông báo lỗi do trang hiển thị. Chỉ có bong bóng báo lỗi mặc định của trình duyệt thì không tính (CHD-07) | AI, SV sửa (AI-02-03) |
| CL-23 | Thông báo lỗi khi để trống tên có nằm phía trên nút "Thêm mới" không? | IA-02 | A-01 (có dữ liệu) | UI-R09 | Nhìn: Sau thao tác của CL-22, so vị trí thông báo với nút "Thêm mới" | Mép dưới của thông báo cao hơn mép trên của nút "Thêm mới" (GĐ-05); thông báo không nằm dưới nút. Không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-02-04) |
| CL-24 | Nhập tên chỉ gồm khoảng trắng rồi bấm "Thêm mới", có thông báo lỗi nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | UI-R20 | Bàn phím, chuột: Gõ 3 dấu cách vào ô, bấm "Thêm mới" (ĐK-04: Reset sau nếu có dòng mới) | Có thông báo lỗi nhìn thấy được, như khi để trống (chuỗi toàn khoảng trắng tính là để trống, CHD-08) | AI, SV sửa (AI-02-05) |
| CL-25 | Thông báo lỗi khi để trống có nói rõ là tên danh mục không được để trống không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors); WCAG 2.2 SC 3.3.1 Error Identification | Nhìn: Đọc thông báo của CL-22 | Thông báo nhắc tới tên danh mục và việc phải nhập (ví dụ "Vui lòng nhập tên danh mục"); không chỉ ghi chung "Lỗi" hay "Dữ liệu không hợp lệ". Không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-02-06) |
| CL-26 | Sau khi báo lỗi để trống, focus có nằm ở ô "Tên danh mục mới" không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors) | Chuột, bàn phím: Bấm "Thêm mới" khi ô trống, sau đó gõ ngay một chữ (không bấm chuột vào ô) | Chữ vừa gõ hiện trong ô "Tên danh mục mới". Không có thông báo lỗi ở CL-22 thì ghi "Không chạy được" | AI, SV sửa (AI-02-07) |
| CL-27 | Khi báo lỗi để trống, ô "Tên danh mục mới" có được làm nổi bật (viền hoặc nền khác lúc bình thường) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 3.3.1 Error Identification | Nhìn: So ô trước và sau khi bấm "Thêm mới" với ô trống | Viền hoặc nền của ô đổi khác (ví dụ viền đỏ) khi có lỗi. Không có thông báo lỗi ở CL-22 thì ghi "Không chạy được" | AI, SV sửa (AI-02-08) |
| CL-28 | Thông báo lỗi có được khai báo để trình đọc màn hình tự đọc khi nó xuất hiện không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (chỉ ở `exec`): Sau CL-22, chuột phải vào thông báo, Inspect; xem thuộc tính của thông báo và phần tử chứa nó | Thông báo hoặc phần tử chứa nó có `role="alert"` hoặc `aria-live` (`assertive` hoặc `polite`) (CHD-10). Không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-02-09) |
| CL-29 | Sau khi thêm thành công, ô "Tên danh mục mới" có trở về trống (placeholder hiện lại) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Shneiderman rule 4 (Design dialogs to yield closure) | Bàn phím, chuột: Gõ `Thời trang` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Ô trống, placeholder "Tên danh mục mới" hiện lại | AI (AI-02-11) |
| CL-30 | Sau khi báo lỗi để trống rồi thêm thành công một tên hợp lệ, thông báo lỗi cũ có biến mất không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Chuột, bàn phím: Bấm "Thêm mới" khi ô trống (có lỗi), sau đó gõ `Thời trang 2` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Thông báo lỗi để trống không còn trên trang sau lần thêm thành công. Không có thông báo lỗi ở bước đầu thì ghi "Không chạy được" | AI, SV sửa (AI-02-12) |
| CL-31 | Ô "Tên danh mục mới" có nhãn nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: NR-05 (WCAG 2.2 SC 3.3.2 Labels or Instructions) | Nhìn: Gõ một chữ vào ô để placeholder biến mất, xem ô còn chữ nào cho biết ô dùng để nhập gì | Có chữ nhãn nằm ngoài ô (trên hoặc bên trái ô), vẫn thấy khi ô đã có chữ; placeholder không tính là nhãn | AI (AI-02-13) |
| CL-32 | Ô "Tên danh mục mới" có nhãn gắn với ô qua mã (tên truy cập không lấy từ placeholder) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: NR-07 (WCAG 2.2 SC 1.3.1 Info and Relationships; SC 4.1.2 Name, Role, Value) | DevTools (chỉ ở `exec`): Inspect ô, mở tab Accessibility, xem "Name" và nguồn của nó | "Name" có giá trị, nguồn là thẻ `<label>` (gắn bằng `for` hoặc bọc ô), `aria-label` hoặc `aria-labelledby`; không phải chỉ từ placeholder | AI (AI-02-14) |

### 3.3 IA-03 Điều hướng

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-33 | Khi đang ở trang Danh mục, mục "Danh mục" ở menu trái có trông khác chính nó khi đang ở trang Dashboard không? | IA-03 | A-01 (có dữ liệu), A-01 (trống), menu trái | UI-R11 | Nhìn: Ở Dashboard, ghi lại cách hiển thị của mục "Danh mục"; bấm "Danh mục" (ĐK-06), so lại. Làm ở cả hai trạng thái | Mục "Danh mục" khác rõ so với lúc ở Dashboard ở ít nhất một điểm: Màu chữ, màu nền, độ đậm, hoặc vạch / icon đánh dấu (GĐ-03). Khác rõ là nhận ra được bằng mắt ở zoom 100% mà không cần phóng to; chỉ khác màu chữ cũng tính (CHD-11) | AI, SV sửa (AI-03-01) |
| CL-34 | Khi đang ở trang Danh mục, các mục menu khác có trông giống chính chúng khi không được chọn (không bị highlight) không? | IA-03 | A-01 (có dữ liệu), menu trái | UI-R11 | Nhìn: So mục "Dashboard" ở trang Danh mục với mục "Dashboard" ở một trang Admin khác không phải Dashboard (ví dụ "Sản phẩm"); làm tương tự cho các mục còn lại trừ "Đăng xuất" | Ở trang Danh mục, chỉ có mục "Danh mục" được highlight; mọi mục khác trông giống lúc không được chọn | AI (AI-03-02) |
| CL-35 | Mục đăng xuất ở menu trái có nhãn đúng là "Đăng xuất" không? | IA-03 | A-01 (có dữ liệu), menu trái | UI-R13 | Nhìn | Chữ là "Đăng xuất", không phải "Thoát" hay chữ khác | AI (AI-03-03) |
| CL-36 | Đang ở một trang Admin khác, bấm "Danh mục" ở menu trái có mở trang Quản lý Danh mục không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.4.4 Link Purpose (In Context) | Chuột: Từ Dashboard bấm "Danh mục"; lặp lại từ một trang khác (ví dụ "Sản phẩm") | Trang hiện tiêu đề "Quản lý Danh mục", form thêm và bảng danh mục | AI, SV sửa (AI-03-04) |
| CL-37 | Từ trang Danh mục, bấm từng mục menu khác có mở đúng trang tương ứng không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.4.4 Link Purpose (In Context) | Chuột: Từ trang Danh mục bấm lần lượt "Dashboard", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng" (mỗi lần quay lại Danh mục). Không bấm "Đăng xuất" | Mỗi mục mở trang có tiêu đề ứng với tên mục; không mục nào mở trang trắng, trang lỗi hay trang của mục khác | AI, SV sửa (AI-03-05) |
| CL-38 | Đưa focus tới một mục menu bằng phím Tab rồi bấm Enter có mở trang của mục đó không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.1.1 Keyboard | Bàn phím: Bấm Tab tới mục "Dashboard", bấm Enter; quay lại Danh mục bằng bàn phím theo cách tương tự | Mở đúng trang của mục, như khi bấm chuột | AI (AI-03-08) |
| CL-39 | Bấm Tab lần đầu trên trang có hiện link bỏ qua menu để tới thẳng nội dung chính (skip link) không? | IA-03 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 2.4.1 Bypass Blocks | Bàn phím: Bấm vào thanh địa chỉ, bấm Tab một lần, nhìn góc trên trang | Hiện link kiểu "Bỏ qua đến nội dung chính" | AI, SV sửa (AI-03-09) |
| CL-40 | Menu trái có được khai báo là vùng điều hướng (landmark `<nav>` hoặc `role="navigation"`) không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships; SC 2.4.1 Bypass Blocks | DevTools (chỉ ở `exec`): Inspect một mục menu, xem phần tử cha | Menu nằm trong thẻ `<nav>` hoặc phần tử có `role="navigation"` | AI (AI-03-10) |
| CL-41 | Mục menu của trang đang mở có được đánh dấu qua mã để công cụ hỗ trợ biết đó là trang hiện tại không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships; nội dung đối chiếu với UI-R11 | DevTools (chỉ ở `exec`): Inspect mục "Danh mục" khi đang ở trang Danh mục | Mục có `aria-current="page"` (hoặc `aria-current` khác `false`) | AI (AI-03-11) |

### 3.4 IA-04 Phản hồi và trạng thái

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-42 | Khi danh sách danh mục trống, trang có icon hoặc hình minh họa cho trạng thái trống không? | IA-04 | A-01 (trống) | UI-R17 | Nhìn (ĐK-03) | Có icon hoặc hình minh họa ở vùng bảng (GĐ-04) | AI (AI-04-01) |
| CL-43 | Khi danh sách trống, trang có một câu tiếng Việt trọn ý cho biết chưa có danh mục nào, không dùng từ kỹ thuật không? | IA-04 | A-01 (trống) | UI-R17 | Nhìn (ĐK-03) | Có một câu tiếng Việt trọn ý nói rõ chưa có danh mục (ví dụ "Chưa có danh mục nào."); không phải từ hay cụm từ đơn lẻ như "Trống", "Empty"; không có chữ như "null", "No data", "0 rows" (CH-11 ý 1, P-19) | AI, SV sửa (AI-04-02) |
| CL-44 | Khi danh sách trống, trang có gợi ý bước tiếp theo cho người dùng không? | IA-04 | A-01 (trống) | Khuyến nghị: NR-06 (Nielsen heuristic 10, Help and documentation; Shneiderman rule 3) | Nhìn (ĐK-03) | Có chữ gợi ý việc nên làm tiếp (ví dụ "Nhập tên ở ô phía trên và bấm Thêm mới để tạo danh mục đầu tiên") | AI (AI-04-03) |
| CL-45 | Khi danh sách danh mục đang tải, trang có dấu hiệu đang tải không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-04 (Nielsen heuristic 1, Visibility of system status) | DevTools (chỉ ở `exec`): ĐK-07, bấm "Danh mục" từ Dashboard (ĐK-06), nhìn vùng bảng trước khi các dòng hiện ra | Có dấu hiệu đang tải (vòng quay, chữ "Đang tải...", khung xám) ở vùng bảng | AI, SV sửa (AI-04-04) |
| CL-46 | Sau khi bấm "Thêm mới" với tên hợp lệ, có phản hồi nhìn thấy được cho biết đã thêm xong không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-01 (Nielsen heuristic 1; Shneiderman rule 3, Offer informative feedback) | Bàn phím, chuột: Gõ `Thời trang` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Có thông báo thành công (toast, dòng chữ), hoặc dòng mới có nền khác các dòng còn lại ngay sau khi thêm. Chỉ có dòng mới xuất hiện mà không có dấu hiệu nào khác thì chưa đạt | AI, SV sửa (AI-04-05) |
| CL-47 | Thông báo thêm thành công có nêu tên danh mục vừa thêm không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback) | Nhìn: Đọc thông báo của CL-46 | Thông báo có tên "Thời trang". Không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-04-06) |
| CL-48 | Sau khi xóa một danh mục, có phản hồi nhìn thấy được cho biết đã xóa xong không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-02 (Nielsen heuristic 1; Shneiderman rule 3) | Chuột: Bấm "Xóa" ở một dòng (đồng ý nếu có hộp xác nhận) (ĐK-04) | Có thông báo cho biết đã xóa (toast, dòng chữ). Chỉ có dòng biến mất thì chưa đạt | AI (AI-04-07) |
| CL-49 | Bấm "Xóa" ở một dòng có hiện hộp xác nhận trước khi xóa không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-03 (Nielsen heuristic 5, Error prevention) | Chuột: Bấm "Xóa" ở một dòng (ĐK-04: Reset nếu dòng bị xóa) | Hiện hộp xác nhận (hộp của trình duyệt hoặc hộp trong trang) | AI, SV sửa (AI-04-08) |
| CL-50 | Khi đang gửi yêu cầu thêm (mạng chậm), nút "Thêm mới" có dấu hiệu đang xử lý không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | DevTools (chỉ ở `exec`): ĐK-07; gõ `Thời trang 2` (ĐK-05), bấm "Thêm mới", nhìn nút ngay sau khi bấm (ĐK-04) | Trong lúc chờ, nút bị khóa (mờ, không bấm được) hoặc đổi chữ (ví dụ "Đang thêm...") hoặc có vòng quay | AI (AI-04-09) |
| CL-51 | Hộp xác nhận khi xóa có nêu tên danh mục sắp bị xóa không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 5 (Error prevention) | Nhìn: Đọc hộp xác nhận của CL-49 | Nội dung hộp có tên danh mục của dòng vừa bấm. Không có hộp xác nhận thì ghi "Không chạy được" | AI, SV sửa (AI-04-10) |
| CL-52 | Bấm hủy trong hộp xác nhận thì dòng danh mục có còn trong bảng không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột: Bấm "Xóa" ở một dòng, bấm nút hủy (hoặc đóng hộp) | Dòng vẫn hiện trong bảng như trước. Không có hộp xác nhận thì ghi "Không chạy được" | AI, SV sửa (AI-04-11) |
| CL-53 | Khi mất kết nối, bấm "Thêm mới" với tên hợp lệ có thông báo lỗi nhìn thấy được không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors) | DevTools (chỉ ở `exec`): ĐK-08; gõ `Thời trang 3` (ĐK-05), bấm "Thêm mới" | Có thông báo lỗi nhìn thấy được trên trang cho biết không thêm được | AI, SV sửa (AI-04-12) |
| CL-54 | Thông báo thêm thành công có được khai báo để trình đọc màn hình tự đọc không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (chỉ ở `exec`): Khi thông báo của CL-46 đang hiện, Inspect thông báo | Thông báo hoặc phần tử chứa nó có `role="status"`, `role="alert"` hoặc `aria-live`. Không có thông báo thì ghi "Không chạy được" | AI, SV sửa (AI-04-13) |
| CL-55 | Sau khi thêm thành công, dòng danh mục mới có hiện trong bảng ngay mà không cần tải lại trang không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | Nhìn: Sau thao tác của CL-46, không bấm F5, nhìn bảng | Dòng "Thời trang" hiện trong bảng ngay sau khi bấm | AI, SV sửa (AI-04-14) |

---

## 4. Ma trận

Không có.

---

## 5. Mục sinh viên thêm (bước `add`)

⏳ Chờ sinh viên viết.

Cách ghi:

- Mã tiếp nối từ CL-56. Cột "Nguồn" ghi `SV thêm`.
- Cột "Vì sao AI bỏ sót" ghi một trong ba giá trị `Prompt`, `Giới hạn model`, `Đặc thù giao diện`, kèm giải thích ngắn. Mục mà bản AI đã xét và loại (không phải bỏ sót) ghi "Không áp dụng: AI đã xét và loại (<file>, mục ...)" và giải thích; ở mục 9 các mục này có Loại `Quyết định của SV`.
- Mỗi mục thêm có một dòng ở bảng mục 9.

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn | Vì sao AI bỏ sót |
|---|---|---|---|---|---|---|---|---|

Các mảng đề gợi ý xét thêm:

| Mảng | Kết luận |
|---|---|
| Accessibility | ⏳ Chờ sinh viên |
| Dark mode | ⏳ Chờ sinh viên |
| RTL | ⏳ Chờ sinh viên |

---

## 6. Mục AI đã bỏ hoặc gộp

| Mã AI | Xử lý | Lý do |
|---|---|---|
| AI-01-18 | Bỏ | Tên dài không tràn cột: Nguồn là slide S13 (phiên AI không đọc trực tiếp); Nielsen và WCAG không có tiêu chí cùng ý (CHD-03, P-02) |
| AI-01-19 | Bỏ | Mọi phần tử nhận focus bằng Tab: Trùng kết quả với CL-12, CL-13; phần tử bị bỏ qua thì hai mục thứ tự Tab đã Failed (P-20) |
| AI-02-10 | Bỏ | Enter gửi form: Nguồn là slide AI-First (không đọc trực tiếp); SV chọn bỏ thay vì đổi sang Nielsen heuristic 7 (CHD-03, P-05) |
| AI-02-15 | Bỏ | Khai báo `required` qua mã: SV giữ mục dấu `*` (CL-20), bỏ mục này (CHD-09) |
| AI-03-06 | Bỏ | Nút Back của trình duyệt: Gần điểm "không có địa chỉ riêng, F5 về Dashboard" mà SV để dành cho bước `add` (CHD-12) |
| AI-03-07 | Bỏ | Hiệu ứng khi rê chuột lên menu: Nguồn là template của môn (không đọc trực tiếp); WCAG không đòi hiệu ứng rê chuột, Nielsen không có heuristic cùng ý (CHD-03, P-08) |

---

## 7. Tổng hợp

### 7.1 Số mục

| IA | Số mục | Nguồn AI | Nguồn AI, SV sửa | Nguồn SV thêm | Căn cứ SRS | Khuyến nghị |
|---|---|---|---|---|---|---|
| IA-01 | 19 | 13 | 6 | 0 | 15 | 4 |
| IA-02 | 13 | 5 | 8 | 0 | 5 | 8 |
| IA-03 | 9 | 5 | 4 | 0 | 3 | 6 |
| IA-04 | 14 | 4 | 10 | 0 | 2 | 12 |
| Tổng | 55 | 27 | 28 | 0 | 25 | 30 |

Bản AI có 60 mục. Bỏ 6 mục (mục 6), tách 1 mục thành 2 (AI-01-04 thành CL-04, CL-05), thêm 0 mục từ câu trả lời CHD. Bước `add`: ⏳ chưa làm.

### 7.2 Truy vết oracle

| Oracle | Mục |
|---|---|
| UI-R01 | CL-01, CL-02, CL-03, CL-04, CL-05, CL-06 |
| UI-R02 | CL-07, CL-08, CL-09 |
| UI-R04 | CL-10, CL-11 |
| UI-R25 | CL-10 (trùng ý với UI-R04, một mục) |
| UI-R05 | CL-12, CL-13 |
| UI-R06 | CL-20 |
| UI-R09 | CL-23 |
| UI-R11 | CL-33, CL-34 |
| UI-R13 | CL-35 |
| UI-R17 | CL-42, CL-43 |
| UI-R19 | CL-14, CL-15, CL-21 |
| UI-R20 | CL-20 (phần `*`, trùng ý với UI-R06, một mục), CL-22, CL-24 |
| NR-01 | CL-46 |
| NR-02 | CL-48 |
| NR-03 | CL-49 |
| NR-04 | CL-45 |
| NR-05 | CL-31 |
| NR-06 | CL-44 |
| NR-07 | CL-32 |
| Khuyến nghị khác | CL-16 đến CL-19, CL-25 đến CL-30, CL-36 đến CL-41, CL-47, CL-50 đến CL-55 |

---

## 8. Quyết định của sinh viên cho câu hỏi mở của bản AI

Không có số CHD nào bị bỏ trước khi giao (CHD-01 đến CHD-16 đều có trong bản AI).

| Mã | Câu hỏi (tóm tắt) | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|
| CHD-01 | "Đăng xuất" chữ đỏ không nền có tính là nút đỏ không | Có tính; mục kiểm màu đỏ dễ nhận ra | CL-09 |
| CHD-02 | Mục phụ thuộc thành phần không xuất hiện ghi gì | "Không chạy được", không tính Passed / Failed (SV ghi: Giống T1) | Mục 1; CL-04, CL-05, CL-23, CL-25 đến CL-28, CL-30, CL-47, CL-51, CL-52, CL-54 |
| CHD-03 | Nguồn slide, template phiên AI không đọc trực tiếp | Đổi sang Nielsen hoặc WCAG nếu cùng ý; không đổi được thì bỏ mục | Mục 1; CL-26, CL-27, CL-30, CL-36, CL-37, CL-55 đổi nguồn; CL-06 đổi căn cứ sang UI-R01 (P-01); bỏ AI-01-18, AI-02-10, AI-03-07 |
| CHD-04 | Độ dài tên dài | 100 ký tự | Không dùng tới: Mục dùng giá trị này (AI-01-18) đã bỏ |
| CHD-05 | Tên danh mục có tính vào yêu cầu tiếng Việt không | Không tính; tên danh mục là dữ liệu | Mục 1; CL-03 |
| CHD-06 | Mục tương phản: Một mục hay tách | Giữ một mục | CL-17 |
| CHD-07 | Bong bóng báo lỗi của trình duyệt có tính là thông báo lỗi không | Không tính (SV ghi: Giống T1) | Mục 1; CL-04, CL-22 |
| CHD-08 | Chuỗi toàn khoảng trắng có tính là để trống không | Có (SV ghi: Giống T1) | Mục 1; CL-24 |
| CHD-09 | Giữ mục `required` qua mã song song với mục `*` không | Bỏ mục `required`, giữ mục `*` | Bỏ AI-02-15 |
| CHD-10 | Thuộc tính nào tính là đã khai báo cho trình đọc màn hình | `role="alert"` hoặc `aria-live` (SV ghi: Giống T1) | CL-28 |
| CHD-11 | Chỉ khác màu chữ có tính là highlight không | Có tính, nếu khác rõ so với chính nó ở trang khác (GĐ-03) | Mục 1; CL-33 |
| CHD-12 | Giữ mục nút Back không | Bỏ, để dành cho bước `add` | Bỏ AI-03-06 |
| CHD-13 | Skip link và landmark: Hai mục hay gộp | Hai mục riêng (một mục kiểm một điều) | CL-39, CL-40 |
| CHD-14 | Mục "dòng mới hiện ngay" có trái quyết định chỉ kiểm hiển thị không | Không trái, giữ: Dòng mới hiện ra là trạng thái hiển thị | CL-55 |
| CHD-15 | Mức giả lập mạng chậm | Preset "3G" (Slow 3G) của DevTools | ĐK-07 |
| CHD-16 | Tiêu chí "câu tiếng Việt đầy đủ" | Ban đầu: Câu có đủ chủ ngữ và vị ngữ, không dùng từ kỹ thuật (SV ghi: Giống T1). Sửa ở P-19: Câu trọn ý, không phải từ hay cụm từ đơn lẻ (ví dụ chỉ "Trống" hay "Empty"), không dùng từ kỹ thuật; câu không chủ ngữ như "Chưa có danh mục nào." vẫn đạt | Mục 1; CL-43 |

---

## 9. Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| CL-04, CL-05 (AI-01-04) | Tách thành 2 mục: Thông báo bằng tiếng Việt; thông báo không có chữ kỹ thuật | Mơ hồ | | Bản AI kiểm 2 điều trong một mục. AI đề xuất giữ một mục (P-10); SV quyết tách: Một mục kiểm một điều |
| CL-04 (AI-01-04) | Không xét bong bóng báo lỗi của trình duyệt; ghi "Không chạy được" khi cả ba thao tác đều không có thông báo | Quyết định của SV | | CHD-07, CHD-02 |
| CL-06 (AI-01-15) | Giữ mục; đổi căn cứ từ "Khuyến nghị: Slide S13" sang UI-R01 (mục chuyển sang nhóm căn cứ SRS) | Quyết định của SV | | AI đề xuất bỏ vì không có nguồn Nielsen hay WCAG cùng ý (P-01); SV quyết giữ, căn cứ là yêu cầu giao diện tiếng Việt của FR-21 |
| CL-09 (AI-01-07) | Mong đợi: "Đăng xuất" có chữ hoặc nền màu đỏ, dễ nhận ra | Quyết định của SV | | CHD-01 |
| CL-17 (AI-01-16) | Bỏ câu dẫn CHD-06; phần không đạt ghi ở Notes | Quyết định của SV | | CHD-06: Giữ một mục |
| CL-18 (AI-01-17) | Mong đợi chỉ còn "không có chữ, nút hay ô nào bị cắt hoặc chồng lên nhau"; bỏ vế "vẫn bấm được" | Mơ hồ | | Bản AI kiểm 3 điều. AI đề xuất khi lọc (P-11), SV đồng ý |
| AI-01-18 | Bỏ | Quyết định của SV | | Nguồn slide S13 không đọc trực tiếp, không có Nielsen hay WCAG cùng ý (CHD-03). AI đề xuất (P-02), SV đồng ý |
| AI-01-19 | Bỏ | Thừa | | Trùng kết quả với CL-12, CL-13. AI đề xuất khi lọc (P-20), SV đồng ý |
| CL-22 (AI-02-03) | Mong đợi: Chỉ tính thông báo do trang hiển thị, bong bóng của trình duyệt không tính | Quyết định của SV | | CHD-07 |
| CL-23, CL-25, CL-28, CL-30, CL-47, CL-51, CL-52, CL-54 (AI-02-04, AI-02-06, AI-02-09, AI-02-12, AI-04-06, AI-04-10, AI-04-11, AI-04-13) | Thay câu "ghi theo CHD-02" bằng "ghi Không chạy được" | Quyết định của SV | | CHD-02 |
| CL-24 (AI-02-05) | Mong đợi ghi rõ chuỗi toàn khoảng trắng tính là để trống; giữ căn cứ UI-R20 | Quyết định của SV | | CHD-08 |
| CL-26, CL-27 (AI-02-07, AI-02-08) | Thêm ghi chú "Không có thông báo lỗi ở CL-22 thì ghi Không chạy được" | Thiếu | Giới hạn model: AI đã đặt câu hỏi CHD-02 về mục phụ thuộc nhưng không ghi chú phụ thuộc ở hai mục này | AI phát hiện khi soạn bản review, áp theo quy ước CHD-02; SV xác nhận khi kiểm file này |
| CL-26 (AI-02-07) | Đổi nguồn từ slide AI-First sang Nielsen heuristic 9; giữ mục | Quyết định của SV | | CHD-03. AI đề xuất đổi hoặc bỏ (P-03), SV chọn đổi |
| CL-27 (AI-02-08) | Đổi nguồn từ slide AI-First sang WCAG 2.2 SC 3.3.1 | Quyết định của SV | | CHD-03. AI đề xuất (P-04), SV đồng ý |
| CL-28 (AI-02-09) | Mong đợi chỉ tính `role="alert"` hoặc `aria-live`; bỏ câu dẫn CHD-10 | Quyết định của SV | | CHD-10 |
| AI-02-10 | Bỏ | Quyết định của SV | | Nguồn slide AI-First không đọc trực tiếp (CHD-03). AI đề xuất đổi sang Nielsen heuristic 7 hoặc bỏ (P-05), SV chọn bỏ |
| CL-30 (AI-02-12) | Bỏ phần nguồn slide, giữ Nielsen heuristic 1 | Quyết định của SV | | CHD-03. AI đề xuất (P-06), SV đồng ý |
| AI-02-15 | Bỏ | Quyết định của SV | | CHD-09 |
| CL-33 (AI-03-01) | Mong đợi: Khác rõ (nhận ra bằng mắt ở zoom 100%, không cần phóng to); chỉ khác màu chữ cũng tính | Quyết định của SV | | CHD-11. Định nghĩa "khác rõ" do AI đề xuất khi lọc (P-18), SV đồng ý |
| CL-36, CL-37 (AI-03-04, AI-03-05) | Đổi nguồn từ slide AI-First sang WCAG 2.2 SC 2.4.4 Link Purpose (In Context) | Quyết định của SV | | CHD-03. AI đề xuất (P-07), SV đồng ý |
| AI-03-06 | Bỏ | Quyết định của SV | | CHD-12: Để dành cho bước `add` |
| AI-03-07 | Bỏ | Quyết định của SV | | Nguồn template không đọc trực tiếp, không có Nielsen hay WCAG cùng ý (CHD-03). AI đề xuất (P-08), SV đồng ý |
| CL-39 (AI-03-09) | Chỉ kiểm skip link hiện ra; bỏ vế "bấm Enter thì focus tới nội dung" và câu dẫn CHD-13 | Mơ hồ | | Bản AI kiểm 2 điều. AI đề xuất (P-12), SV đồng ý; CHD-13 giữ hai mục riêng |
| CL-43 (AI-04-02) | Tiêu chí: Câu trọn ý, không phải từ hay cụm từ đơn lẻ, không dùng từ kỹ thuật; câu không chủ ngữ vẫn đạt | Quyết định của SV | | CHD-16 và P-19 (b): AI chỉ ra ví dụ của bản AI ("Chưa có danh mục nào.") trái với tiêu chí "đủ chủ ngữ và vị ngữ" của CHD-16; SV sửa tiêu chí |
| CL-45 (AI-04-04) | Chỉ kiểm có dấu hiệu đang tải; bỏ vế "không hiện trạng thái trống khi đang tải" | Mơ hồ | | Bản AI kiểm 2 điều. AI đề xuất (P-13), SV đồng ý |
| CL-46 (AI-04-05) | "Làm nổi bật trong giây lát" sửa thành "dòng mới có nền khác các dòng còn lại ngay sau khi thêm" | Mơ hồ | | Không đo được. AI đề xuất (P-17), SV đồng ý |
| CL-49 (AI-04-08) | Bỏ vế "dòng chưa biến mất khi hộp đang mở" | Mơ hồ | | Bản AI kiểm 2 điều. AI đề xuất (P-14), SV đồng ý |
| CL-52 (AI-04-11) | Chỉ kiểm dòng còn trong bảng; bỏ vế "hộp đóng" | Mơ hồ | | Bản AI kiểm 2 điều. AI đề xuất (P-15), SV đồng ý |
| CL-53 (AI-04-12) | Bỏ vế "không im lặng, không hiện như đã thêm thành công" | Mơ hồ | | Bản AI kiểm nhiều điều. AI đề xuất (P-16), SV đồng ý |
| CL-55 (AI-04-14) | Bỏ phần nguồn slide, giữ Nielsen heuristic 1; bỏ câu dẫn CHD-14 | Quyết định của SV | | CHD-03, CHD-14. AI đề xuất (P-09), SV đồng ý |
| ĐK-07 | Mức giả lập mạng: Preset "3G" (Slow 3G) | Quyết định của SV | | CHD-15 |
| Mục 1 | Thêm quy ước "Không chạy được" và các định nghĩa đã chốt (highlight, thông báo lỗi, câu trọn ý, để trống, chữ của giao diện); nguồn khuyến nghị chỉ dùng Nielsen, Shneiderman, WCAG | Quyết định của SV | | CHD-02, CHD-03, CHD-05, CHD-07, CHD-08, CHD-11, P-19 |
