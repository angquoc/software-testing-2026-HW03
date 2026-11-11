# DEMO ai-draft: Checklist IA-03 Điều hướng (bản AI)

- Bước: `[demo][ai-draft]`, IA-03
- Thời gian tạo: 2026-11-11 10:03 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `01_oracle.md` (bản review, cập nhật 09:56) mục 2.3, 3, 4; `00_survey.md` (bản đã đối chiếu) mục 3.1, 4 và ảnh `survey_02`, `survey_05`, `survey_06`; `ai_raw/DEMO_draft_IA-01.md` (quy ước, ĐK-01 đến ĐK-05); `references/sources.md` của skill

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-03 ở mục tổng hợp (A-01: UI-R11, UI-R13); không có mục khuyến nghị `NR` nào thuộc IA-03; giả định GĐ-01 (menu trái là Navbar), GĐ-03 (định nghĩa highlight), GĐ-06 (trang hiểu theo nội dung, không theo URL).
- `00_survey.md` và ảnh: Menu trái có các mục "Dashboard", "Danh mục", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng", "Đăng xuất"; mọi trang Admin dùng chung địa chỉ `localhost:5174`. Chỉ dùng để gọi đúng tên; **không** dùng để đoán kết quả.
- Dữ liệu và nguồn ngoài SRS: Giống bản nháp IA-01.

Quy ước: Giống bản nháp IA-01. Điểm riêng:

- "Highlight" theo GĐ-03: So một mục menu với **chính nó** khi đang ở trang khác, không so với các mục khác ("Đăng xuất" luôn khác màu các mục khác).
- Màu của "Đăng xuất" kiểm ở AI-01-07 (IA-01), không nhắc lại ở đây.
- Kết quả mong đợi khi bấm một mục menu chỉ nói trang hiện ra (tiêu đề nhìn thấy), không kiểm nội dung của trang đó.

---

## 2. Điều kiện chuẩn bị khi chạy

Dùng ĐK-01, ĐK-02, ĐK-03 của bản nháp IA-01. Thêm:

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-06 | Vào trang Danh mục bằng cách bấm "Danh mục" ở menu trái khi đang ở một trang Admin khác (không gõ địa chỉ, vì mọi trang dùng chung `localhost:5174` và bấm F5 sẽ về Dashboard). Ghi lại trang vừa rời đi | AI-03-01, AI-03-02, AI-03-04, AI-03-06 |

---

## 3. Bảng checklist IA-03

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-03-01 | Khi đang ở trang Danh mục, mục "Danh mục" ở menu trái có trông khác chính nó khi đang ở trang Dashboard không? | IA-03 | A-01 (có dữ liệu), A-01 (trống), menu trái | UI-R11 | Nhìn: Ở Dashboard, ghi lại cách hiển thị của mục "Danh mục"; bấm "Danh mục" (ĐK-06), so lại. Làm ở cả hai trạng thái | Mục "Danh mục" khác lúc ở Dashboard ở ít nhất một điểm nhìn thấy được: Màu chữ, màu nền, độ đậm, hoặc vạch / icon đánh dấu (GĐ-03). Chỉ đổi màu chữ có đủ không: CHD-11 |
| AI-03-02 | Khi đang ở trang Danh mục, các mục menu khác có trông giống chính chúng khi không được chọn (không bị highlight) không? | IA-03 | A-01 (có dữ liệu), menu trái | UI-R11 | Nhìn: So mục "Dashboard" ở trang Danh mục với mục "Dashboard" ở một trang Admin khác không phải Dashboard (ví dụ "Sản phẩm"); làm tương tự cho các mục còn lại trừ "Đăng xuất" | Ở trang Danh mục, chỉ có mục "Danh mục" được highlight; mọi mục khác trông giống lúc không được chọn |
| AI-03-03 | Mục đăng xuất ở menu trái có nhãn đúng là "Đăng xuất" không? | IA-03 | A-01 (có dữ liệu), menu trái | UI-R13 | Nhìn | Chữ là "Đăng xuất", không phải "Thoát" hay chữ khác |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-03-04 | Đang ở một trang Admin khác, bấm "Danh mục" ở menu trái có mở trang Quản lý Danh mục không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", checklist Hyperlink: Link mở đúng trang (theo `references/sources.md`) | Chuột: Từ Dashboard bấm "Danh mục"; lặp lại từ một trang khác (ví dụ "Sản phẩm") | Trang hiện tiêu đề "Quản lý Danh mục", form thêm và bảng danh mục |
| AI-03-05 | Từ trang Danh mục, bấm từng mục menu khác có mở đúng trang tương ứng không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", checklist Hyperlink: Link mở đúng trang (theo `references/sources.md`) | Chuột: Từ trang Danh mục bấm lần lượt "Dashboard", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng" (mỗi lần quay lại Danh mục). Không bấm "Đăng xuất" | Mỗi mục mở trang có tiêu đề ứng với tên mục; không mục nào mở trang trắng, trang lỗi hay trang của mục khác |
| AI-03-06 | Bấm nút Back của trình duyệt khi đang ở trang Danh mục có quay về trang Admin vừa rời đi, vẫn ở trạng thái đăng nhập không? | IA-03 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột: Vào Danh mục từ Dashboard (ĐK-06), bấm nút Back của trình duyệt | Hiện lại trang Dashboard (trang vừa rời đi), menu trái vẫn hiện; không ra trang Admin Login, không ra trang trắng hay trang ngoài Admin. Mục này có trùng điểm SV để dành cho bước `add` không: CHD-12 |
| AI-03-07 | Rê chuột lên một mục menu có hiệu ứng nhìn thấy được (đổi màu chữ, nền, hoặc con trỏ hình bàn tay) không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: Template GUI checklist của môn, mục hiệu ứng khi rê chuột (theo `references/sources.md`) | Chuột: Rê lần lượt lên từng mục menu (kể cả "Đăng xuất"), không bấm | Mỗi mục có ít nhất một thay đổi nhìn thấy được khi rê chuột |
| AI-03-08 | Đưa focus tới một mục menu bằng phím Tab rồi bấm Enter có mở trang của mục đó không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 2.1.1 Keyboard | Bàn phím: Bấm Tab tới mục "Dashboard", bấm Enter; quay lại Danh mục bằng bàn phím theo cách tương tự | Mở đúng trang của mục, như khi bấm chuột |
| AI-03-09 | Bấm Tab lần đầu trên trang có hiện link bỏ qua menu để tới thẳng nội dung chính (skip link) không? | IA-03 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 2.4.1 Bypass Blocks | Bàn phím: Bấm vào thanh địa chỉ, bấm Tab một lần, nhìn góc trên trang | Hiện link kiểu "Bỏ qua đến nội dung chính"; bấm Enter thì focus tới vùng nội dung. Có tính đạt khi không có skip link nhưng có landmark (AI-03-10) không: CHD-13 |
| AI-03-10 | Menu trái có được khai báo là vùng điều hướng (landmark `<nav>` hoặc `role="navigation"`) không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships; SC 2.4.1 Bypass Blocks | DevTools (chỉ ở `exec`): Inspect một mục menu, xem phần tử cha | Menu nằm trong thẻ `<nav>` hoặc phần tử có `role="navigation"` |
| AI-03-11 | Mục menu của trang đang mở có được đánh dấu qua mã để công cụ hỗ trợ biết đó là trang hiện tại không? | IA-03 | A-01 (có dữ liệu), menu trái | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships; nội dung đối chiếu với UI-R11 | DevTools (chỉ ở `exec`): Inspect mục "Danh mục" khi đang ở trang Danh mục | Mục có `aria-current="page"` (hoặc `aria-current` khác `false`) |

---

## 4. Ma trận

Không có.

---

## 5. Truy vết oracle IA-03

| Oracle | Mục |
|---|---|
| UI-R11 | AI-03-01, AI-03-02 |
| UI-R13 | AI-03-03 |
| Ngoài SRS (khuyến nghị) | AI-03-04 đến AI-03-11 |

Tổng: 11 mục (3 căn cứ SRS, 8 khuyến nghị).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Badge số lượng ở link "Giỏ hàng" (UI-R12) | `Không áp dụng`: Admin không có giỏ hàng |
| Breadcrumb (UI-R14) | `Không áp dụng`: Trang Admin không thuộc danh sách trang con (GĐ-02) |
| Bấm "Đăng xuất" thì về trang Admin Login; sau khi đăng xuất bấm Back không vào lại được trang Danh mục | Trang Admin Login không thuộc phạm vi (CH-01); việc chặn vào lại là phân quyền (SV chốt không kiểm) |
| Trang Danh mục có địa chỉ riêng; bấm F5 thì vẫn ở Danh mục | Điểm ở `01_oracle.md` mục 5.1 số 1; SV chốt tự xét ở bước `add` (vòng hai điểm D) |
| "EShop Admin" là link về trang đầu | Điểm ở mục 5.1 số 10; SV chốt tự xét ở bước `add` |
| Màu "Đăng xuất" | Đã có ở AI-01-07 |
| Menu hiển thị đúng ở khổ màn hình hẹp (thu gọn thành nút menu) | Mảng khổ hẹp để SV xét ở bước `add` (xem bản nháp IA-01 mục 6) |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CHD-11 | Theo GĐ-03, highlight là mục trông khác chính nó ở trang khác. Nếu chỉ khác màu chữ (không đổi nền, độ đậm, không có vạch đánh dấu) thì có tính là highlight không? | (a) Có, bất kỳ khác biệt nhìn thấy được nào cũng tính; (b) Không, phải khác ở nền, độ đậm hoặc có dấu đánh dấu | AI-03-01 |
| CHD-12 | AI-03-06 (nút Back) gần với điểm "trang không có địa chỉ riêng, F5 về Dashboard" mà SV đã để dành cho bước `add` (vòng hai điểm D). Giữ AI-03-06 không? | (a) Giữ, vì Back khác F5; (b) Bỏ, để SV xét cùng điểm đó ở bước `add` | AI-03-06 |
| CHD-13 | WCAG 2.4.1 có thể đạt bằng skip link hoặc bằng landmark. Giữ hai mục riêng hay gộp? | (a) Giữ hai mục AI-03-09, AI-03-10 như hiện tại; (b) Gộp một mục: Đạt khi có skip link **hoặc** menu được khai báo là landmark | AI-03-09, AI-03-10 |
