# DEMO ai-draft: Checklist IA-02 Form (bản AI)

- Bước: `[demo][ai-draft]`, IA-02
- Thời gian tạo: 2026-11-11 10:02 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `01_oracle.md` (bản review, cập nhật 09:56) mục 2.2, 2.5, 3, 4, 5.2; `00_survey.md` (bản đã đối chiếu) mục 3.2, 3.3 và ảnh `survey_02`, `survey_06`; `ai_raw/DEMO_draft_IA-01.md` (quy ước, ĐK-01 đến ĐK-05); `references/sources.md` của skill

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-02 ở mục tổng hợp (A-01: UI-R06, UI-R09, UI-R19 phần form thêm, UI-R20); mục khuyến nghị NR-05, NR-07; quyết định CH-06, CH-07, vòng hai điểm A, B; giả định GĐ-05.
- `00_survey.md` và ảnh: Form thêm luôn hiện sẵn, gồm một ô (placeholder "Tên danh mục mới", không có nhãn nhìn thấy) và nút "Thêm mới" cùng hàng. Chỉ dùng để gọi đúng tên; **không** dùng để đoán kết quả.
- Dữ liệu và nguồn ngoài SRS: Giống bản nháp IA-01.

Quy ước: Giống bản nháp IA-01. Điểm riêng:

- "Form thêm" là ô "Tên danh mục mới" và nút "Thêm mới". Nút "Thêm mới" là nút submit của form (GĐ-05).
- Ngôn ngữ của thông báo lỗi kiểm ở AI-01-04, không nhắc lại ở đây.
- Mục kiểm vị trí, nội dung, cách hiển thị của thông báo lỗi phụ thuộc AI-02-03 (có thông báo hay không); cách ghi khi không có thông báo theo CHD-02.

---

## 2. Điều kiện chuẩn bị khi chạy

Dùng ĐK-01, ĐK-02, ĐK-04, ĐK-05 của bản nháp IA-01. Không có điều kiện mới.

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Xem bản nháp IA-01 | Mọi mục IA-02 |
| ĐK-02 | Xem bản nháp IA-01 | Mọi mục IA-02 |
| ĐK-04 | Xem bản nháp IA-01 | AI-02-05, AI-02-11, AI-02-12 |
| ĐK-05 | Xem bản nháp IA-01 | AI-02-11, AI-02-12 |

---

## 3. Bảng checklist IA-02

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-02-01 | Ô "Tên danh mục mới" có dấu `*` nằm ngoài ô (sát ô hoặc cạnh nhãn) không? | IA-02 | A-01 (có dữ liệu) | UI-R06, UI-R20 | Nhìn: Xem quanh ô khi ô còn trống, rồi gõ một chữ vào ô và xem lại | Có dấu `*` nằm ngoài khung ô, sát ô hoặc cạnh nhãn, và vẫn còn khi ô đã có chữ. Dấu `*` chỉ nằm trong placeholder thì không tính (vòng hai điểm A) |
| AI-02-02 | Trang có form thêm (ô nhập tên và nút để thêm) nhìn thấy được ngay khi vào trang không? | IA-02 | A-01 (có dữ liệu), A-01 (trống) | UI-R19 | Nhìn: Vào trang Danh mục từ menu trái ở cả hai trạng thái | Ô nhập tên và nút "Thêm mới" hiện ngay, không phải bấm thêm nút nào để mở, ở cả hai trạng thái |
| AI-02-03 | Bấm "Thêm mới" khi ô tên để trống, có thông báo lỗi nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | UI-R20 | Chuột: Để ô trống, bấm "Thêm mới" | Có thông báo lỗi nhìn thấy được trên trang. Bong bóng báo lỗi của trình duyệt có tính không: CHD-07 |
| AI-02-04 | Thông báo lỗi khi để trống tên có nằm phía trên nút "Thêm mới" không? | IA-02 | A-01 (có dữ liệu) | UI-R09 | Nhìn: Sau thao tác của AI-02-03, so vị trí thông báo với nút "Thêm mới" | Mép dưới của thông báo cao hơn mép trên của nút "Thêm mới" (GĐ-05); thông báo không nằm dưới nút. Không có thông báo thì ghi theo CHD-02 |
| AI-02-05 | Nhập tên chỉ gồm khoảng trắng rồi bấm "Thêm mới", có thông báo lỗi nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | UI-R20 | Bàn phím, chuột: Gõ 3 dấu cách vào ô, bấm "Thêm mới" (ĐK-04: Reset sau nếu có dòng mới) | Có thông báo lỗi nhìn thấy được, như khi để trống. Chuỗi toàn khoảng trắng có tính là "để trống" không: CHD-08 |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-02-06 | Thông báo lỗi khi để trống có nói rõ là tên danh mục không được để trống không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors); WCAG 2.2 SC 3.3.1 Error Identification | Nhìn: Đọc thông báo của AI-02-03 | Thông báo nhắc tới tên danh mục và việc phải nhập (ví dụ "Vui lòng nhập tên danh mục"); không chỉ ghi chung "Lỗi" hay "Dữ liệu không hợp lệ". Không có thông báo thì ghi theo CHD-02 |
| AI-02-07 | Sau khi báo lỗi để trống, focus có nằm ở ô "Tên danh mục mới" không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", golden rule về lỗi: Đưa focus về ô lỗi (theo `references/sources.md`) | Chuột, bàn phím: Bấm "Thêm mới" khi ô trống, sau đó gõ ngay một chữ (không bấm chuột vào ô) | Chữ vừa gõ hiện trong ô "Tên danh mục mới" |
| AI-02-08 | Khi báo lỗi để trống, ô "Tên danh mục mới" có được làm nổi bật (viền hoặc nền khác lúc bình thường) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", golden rule về lỗi: Làm nổi bật ô lỗi (theo `references/sources.md`) | Nhìn: So ô trước và sau khi bấm "Thêm mới" với ô trống | Viền hoặc nền của ô đổi khác (ví dụ viền đỏ) khi có lỗi |
| AI-02-09 | Thông báo lỗi có được khai báo để trình đọc màn hình tự đọc khi nó xuất hiện không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (chỉ ở `exec`): Sau AI-02-03, chuột phải vào thông báo, Inspect; xem thuộc tính của thông báo và phần tử chứa nó | Thông báo hoặc phần tử chứa nó có `role="alert"` hoặc `aria-live` (`assertive` hoặc `polite`). Thuộc tính nào được tính: CHD-10 |
| AI-02-10 | Bấm Enter trong ô "Tên danh mục mới" có cho kết quả như bấm nút "Thêm mới" không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", checklist Text Box: Enter gửi form (theo `references/sources.md`) | Bàn phím: Bấm vào ô (để trống), bấm Enter | Hiện cùng thông báo lỗi như khi bấm "Thêm mới" với ô trống (AI-02-03). Không có thông báo nào ở cả hai cách thì ghi theo CHD-02 |
| AI-02-11 | Sau khi thêm thành công, ô "Tên danh mục mới" có trở về trống (placeholder hiện lại) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Shneiderman rule 4 (Design dialogs to yield closure) | Bàn phím, chuột: Gõ `Thời trang` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Ô trống, placeholder "Tên danh mục mới" hiện lại |
| AI-02-12 | Sau khi báo lỗi để trống rồi thêm thành công một tên hợp lệ, thông báo lỗi cũ có biến mất không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", bảng lỗi GUI "Control/menu state not aligned with data state" (theo `references/sources.md`); Nielsen heuristic 1 | Chuột, bàn phím: Bấm "Thêm mới" khi ô trống (có lỗi), sau đó gõ `Thời trang 2` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Thông báo lỗi để trống không còn trên trang sau lần thêm thành công. Không có thông báo lỗi ở bước đầu thì ghi theo CHD-02 |
| AI-02-13 | Ô "Tên danh mục mới" có nhãn nhìn thấy được không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: NR-05 (WCAG 2.2 SC 3.3.2 Labels or Instructions) | Nhìn: Gõ một chữ vào ô để placeholder biến mất, xem ô còn chữ nào cho biết ô dùng để nhập gì | Có chữ nhãn nằm ngoài ô (trên hoặc bên trái ô), vẫn thấy khi ô đã có chữ; placeholder không tính là nhãn |
| AI-02-14 | Ô "Tên danh mục mới" có nhãn gắn với ô qua mã (tên truy cập không lấy từ placeholder) không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: NR-07 (WCAG 2.2 SC 1.3.1 Info and Relationships; SC 4.1.2 Name, Role, Value) | DevTools (chỉ ở `exec`): Inspect ô, mở tab Accessibility, xem "Name" và nguồn của nó | "Name" có giá trị, nguồn là thẻ `<label>` (gắn bằng `for` hoặc bọc ô), `aria-label` hoặc `aria-labelledby`; không phải chỉ từ placeholder |
| AI-02-15 | Ô "Tên danh mục mới" có được khai báo là trường bắt buộc qua mã không? | IA-02 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 1.3.1 Info and Relationships; SC 4.1.2 Name, Role, Value; nội dung đối chiếu với UI-R20 | DevTools (chỉ ở `exec`): Inspect ô, xem thuộc tính | Ô có thuộc tính `required` hoặc `aria-required="true"` |

---

## 4. Ma trận

Không có.

---

## 5. Truy vết oracle IA-02

| Oracle | Mục |
|---|---|
| UI-R06 | AI-02-01 |
| UI-R20 | AI-02-01 (phần `*`, trùng ý với UI-R06, một mục), AI-02-03, AI-02-05 |
| UI-R09 | AI-02-04 |
| UI-R19 (phần form thêm) | AI-02-02 |
| NR-05 | AI-02-13 |
| NR-07 | AI-02-14 |
| Ngoài SRS (khuyến nghị) khác | AI-02-06 đến AI-02-12, AI-02-15 |

Tổng: 15 mục (5 căn cứ SRS, 10 khuyến nghị, trong đó 2 từ NR).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| `type="email"`, `type="password"` (UI-R07, UI-R08) | `Không áp dụng`: Form thêm không có hai loại ô này; trang Admin Login không thuộc phạm vi (CH-01) |
| Step Indicator (UI-R10) | `Không áp dụng`: Form một bước |
| Độ dài tối đa của tên danh mục, thông báo khi vượt độ dài | SRS không nêu độ dài tối đa của tên danh mục (UI-R28 là của tên sản phẩm); không có oracle |
| Tên trùng với danh mục đã có | SRS không nói tên danh mục phải duy nhất; kiểm có bị từ chối hay không là kiểm logic (SV chốt chỉ kiểm hiển thị) |
| Bấm "Thêm mới" nhanh hai lần chỉ tạo một dòng (chống gửi trùng) | Kết quả là số bản ghi được tạo, thuộc phần chức năng mà SV chốt không kiểm. Dấu hiệu đang xử lý khi gửi nằm ở IA-04 (AI-04-09) |
| Tên có khoảng trắng ở hai đầu được cắt bớt khi lưu | Là kết quả lưu dữ liệu (logic); SRS không nói |
| Ngôn ngữ của thông báo lỗi | Đã có ở AI-01-04, không lặp lại |
| Nhiều giá trị để trống khác nhau (tab, xuống dòng) | Checklist GUI không phải domain testing; một giá trị toàn khoảng trắng (AI-02-05) là đủ |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CHD-07 | Nếu khi để trống chỉ hiện bong bóng báo lỗi mặc định của trình duyệt (ví dụ "Please fill out this field." ngay dưới ô), bong bóng đó có tính là "thông báo lỗi nhìn thấy được" không? | (a) Có tính; khi đó AI-02-04 (vị trí) và AI-01-04 (ngôn ngữ) xét trên bong bóng; (b) Không tính, chỉ tính thông báo do trang hiển thị | AI-02-03, AI-02-04, AI-01-04 |
| CHD-08 | Chuỗi toàn khoảng trắng có tính là "để trống" theo UI-R20 không? | (a) Có, giữ AI-02-05 căn cứ UI-R20; (b) Không chắc theo SRS, chuyển AI-02-05 thành khuyến nghị (Nielsen heuristic 5); (c) Bỏ AI-02-05 | AI-02-05 |
| CHD-09 | AI-02-15 (khai báo `required` qua mã) và AI-02-01 (dấu `*`) cùng nói về trường bắt buộc nhưng một mục cho người nhìn, một mục cho công cụ hỗ trợ. Giữ cả hai không? | (a) Giữ cả hai; (b) Bỏ AI-02-15 | AI-02-01, AI-02-15 |
| CHD-10 | AI-02-09: Thuộc tính nào được tính là "đã khai báo để trình đọc màn hình đọc"? | (a) Chỉ `role="alert"` hoặc `aria-live` trên thông báo hoặc phần tử chứa nó; (b) Như (a), hoặc ô có `aria-describedby` trỏ tới thông báo; (c) SV chọn khác | AI-02-09 |
