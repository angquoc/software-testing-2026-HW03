# DEMO oracle: Yêu cầu giao diện trích từ SRS

Bước: `[demo][oracle]`, bản review
Bản AI gốc: `ai_raw/DEMO_oracle.md` (tạo lúc 2026-11-11 09:37, UTC+7)
Cập nhật: 2026-11-11 09:56 (UTC+7) (vòng hai: Chốt điểm A đến D ở mục 4.3; thêm `NR-07`; SV xác nhận GĐ-01 đến GĐ-06)
Cập nhật: 2026-11-11 09:48 (UTC+7) (vòng một: Áp quyết định của SV cho CH-01 đến CH-11, thêm mục `NR-01` đến `NR-06`; còn chờ các điểm chốt vòng hai ở mục 4.3)

---

## 1. Phạm vi và cách đọc

Nguồn trích: `Homeworks/eshop-sut/README.md` (phiên bản 2.0, cập nhật 2026-05-14). Màn hình trong phạm vi:

| Mã | Màn hình | URL |
|---|---|---|
| A-01 | Quản lý Danh mục (Web Admin): Đăng nhập Admin, chọn "Danh mục" ở menu trái | `http://localhost:5174/` (mọi trang Admin dùng chung địa chỉ này, theo `00_survey.md` mục 2) |

Thành phần dùng chung: Menu trái của Admin (`00_survey.md` mục 4) được xét như một phần của A-01, ở trạng thái đang mở trang Danh mục. Trang "Admin Login" (ảnh 01) **không** thuộc phạm vi, chỉ là đường vào (CH-01).

Cách trích:

- Mỗi gạch đầu dòng của SRS là **một** yêu cầu, giữ **nguyên văn** (kể cả chữ in đậm, ký hiệu code, dấu câu của SRS). Một gạch đầu dòng nhiều ý vẫn giữ một mã; bước `ai-draft` tách thành nhiều mục. Riêng SEC-04 là một dòng của bảng mục 9, cũng tính một mã.
- Lấy: Mục 8 của SRS (FR-21 đến FR-24); FR gắn trực tiếp với A-01 (FR-14, FR-12); các ý giao diện ở FR khác có thể bị hiểu là áp dụng cho A-01 (FR-05, FR-07, FR-15, FR-16, FR-18) và SEC-04, để ghi rõ vì sao áp dụng hay không.
- Cột "Áp dụng" nhận một trong bốn giá trị: `Áp dụng`, `Áp dụng một phần` (ghi rõ phần nào), `Không áp dụng` (ghi lý do), `⏳ SV quyết định`.
- IA theo ánh xạ của dự án (`WORKFLOW.md` mục 1.1): IA-01 là FR-21, IA-02 là FR-22, IA-03 là FR-23, IA-04 là FR-24. Với ý nằm ngoài mục 8, IA là đề xuất của AI dựa trên nội dung ý.
- Theo quyết định của SV trước khi viết bản AI, checklist **chỉ kiểm trạng thái hiển thị**: Phần chức năng của một yêu cầu (dữ liệu có đổi không, có bị từ chối không, quyền truy cập, API) ghi là không áp dụng; chỉ phần nhìn thấy được trên giao diện được xét.
- Bảng này chỉ trích yêu cầu và xét phạm vi áp dụng; **không** đánh giá giao diện hiện tại. Survey chỉ được dùng để xét áp dụng (A-01 có thành phần đó không).

---

## 2. Bảng yêu cầu

### 2.1 FR-21: Tiêu chuẩn Giao diện Chung

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R01 | **Nhất quán ngôn ngữ**: Toàn bộ giao diện dùng tiếng Việt (trừ thuật ngữ kỹ thuật chuẩn). | IA-01 | A-01 (trang Danh mục có dữ liệu và trống, menu trái, tiêu đề tab) | Áp dụng | Thuật ngữ được giữ: Chỉ "ID"; "Dashboard" phải dịch; "EShop Admin" là tên riêng, không dịch (CH-02). Tiêu đề tab tính vào "toàn bộ giao diện" (CH-03) |
| UI-R02 | **Nhất quán màu sắc**: Các nút hành động tích cực (Submit, Mua hàng) dùng màu xanh dương. Các nút nguy hiểm/hủy bỏ dùng màu đỏ. | IA-01 | A-01 (nút "Thêm mới", nút "Xóa" trên từng dòng, mục "Đăng xuất" ở menu trái) | Áp dụng | Gồm 2 ý: Nút tích cực xanh dương; nút nguy hiểm / hủy bỏ đỏ. Phân nhóm (CH-04): "Thêm mới" tích cực; "Xóa" và "Đăng xuất" nguy hiểm / hủy bỏ |
| UI-R03 | **Nhất quán đơn vị tiền**: Luôn dùng ký hiệu `₫` với định dạng phân cách hàng nghìn. | IA-01 | Không có trong phạm vi | Không áp dụng | A-01 không hiển thị số tiền (`00_survey.md` mục 3.4: Bảng chỉ có ID, tên, nút "Xóa") |
| UI-R04 | **Tiêu đề trang**: Mỗi trang có đúng 1 thẻ `<h1>` mô tả nội dung trang. | IA-01 | A-01 (có dữ liệu và trống) | Áp dụng | Gồm 2 ý: Đúng 1 thẻ `<h1>`; thẻ đó mô tả nội dung trang. Trùng ý với UI-R25; ở bước `ai-draft` chỉ tạo một mục cho ý "đúng 1 thẻ". Cách hiểu "trang" khi mọi trang dùng chung địa chỉ: GĐ-06 |
| UI-R05 | **Tab Order**: Thứ tự focus theo Tab phải đi từ trên xuống dưới, trái sang phải. | IA-01 | A-01 (menu trái, ô nhập, nút "Thêm mới", nút "Xóa") | Áp dụng | Thứ tự đúng (CH-05): Hết các mục menu trái (trên xuống), rồi tới vùng nội dung (ô nhập, "Thêm mới", các nút "Xóa" theo dòng) |

### 2.2 FR-22: Form Requirements

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R06 | Tất cả trường bắt buộc phải có ký hiệu `*` bên cạnh nhãn. | IA-02 | A-01 (ô "Tên danh mục mới" của form thêm) | Áp dụng | Tên danh mục là trường bắt buộc theo UI-R20. SV chốt (CH-06, điểm A): Dấu `*` phải nằm **ngoài** ô, sát ô hoặc cạnh nhãn; `*` nằm trong placeholder không tính (mất đi khi gõ). Ý "ô có nhãn" tách thành hai khuyến nghị NR-05 (nhãn nhìn thấy) và NR-07 (nhãn gắn với ô) (điểm B). Trùng ý một phần với UI-R20; chỉ tạo một mục cho ý `*` |
| UI-R07 | Trường Email phải dùng `type="email"`. | IA-02 | Không có trong phạm vi | Không áp dụng | Form thêm danh mục không có trường Email; trang Admin Login không thuộc phạm vi (CH-01) |
| UI-R08 | Trường Mật khẩu phải dùng `type="password"` (không hiển thị rõ). | IA-02 | Không có trong phạm vi | Không áp dụng | Như UI-R07 (CH-01) |
| UI-R09 | Thông báo lỗi phải xuất hiện **trên** nút submit, không phải bên dưới. | IA-02 | A-01 (form thêm, nút "Thêm mới") | Áp dụng | Cách hiểu "trên" khi nút và ô nhập nằm cùng hàng: GĐ-05. Tình huống tạo thông báo: Bấm "Thêm mới" khi ô tên để trống (CH-07) |
| UI-R10 | Các form có từ 2 bước trở lên phải có **Step Indicator** rõ ràng. | IA-02 | Không có trong phạm vi | Không áp dụng | Form thêm danh mục chỉ có một bước (một ô và một nút, `00_survey.md` mục 3.2, 3.3) |

### 2.3 FR-23: Navigation Requirements

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R11 | Thanh điều hướng (Navbar) phải **highlight** trang đang được chọn. | IA-03 | A-01 (menu trái, khi đang mở Danh mục) | Áp dụng | Menu trái tính là "Navbar": GĐ-01. Định nghĩa "highlight": GĐ-03 |
| UI-R12 | Link "Giỏ hàng" phải hiển thị **badge số lượng** sản phẩm trong giỏ. | IA-03 | Không có trong phạm vi | Không áp dụng | Phân hệ Admin không có giỏ hàng; menu trái không có link "Giỏ hàng" (`00_survey.md` mục 4) |
| UI-R13 | Nút Đăng xuất phải nhãn là "Đăng xuất" (không phải "Thoát"). | IA-03 | A-01 (mục cuối của menu trái) | Áp dụng | |
| UI-R14 | Breadcrumb bắt buộc có ở các trang con (Giỏ hàng, Thanh toán, Chi tiết sản phẩm). | IA-03 | Không có trong phạm vi | Không áp dụng | Danh sách trang con không có trang Admin nào (GĐ-02) |

### 2.4 FR-24: Feedback & State Requirements

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R15 | Sau khi bấm "Thêm vào giỏ", phải có phản hồi trực quan (toast/badge). | IA-04 | Không có trong phạm vi | Không áp dụng | A-01 không có nút "Thêm vào giỏ". Phản hồi sau khi bấm "Thêm mới" và "Xóa" danh mục kiểm theo khuyến nghị NR-01, NR-02 (CH-08) |
| UI-R16 | Khi xóa item khỏi giỏ phải có dialog xác nhận. | IA-04 | Không có trong phạm vi | Không áp dụng | Yêu cầu dành cho giỏ hàng. Hộp xác nhận khi xóa danh mục kiểm theo khuyến nghị NR-03 (CH-09) |
| UI-R17 | Trang trống (Empty State) phải có icon/hình minh họa và message thân thiện. | IA-04 | A-01 (bảng danh mục không có dòng nào, ảnh 06) | Áp dụng | Gồm 2 ý: Có icon hoặc hình minh họa; có message thân thiện. Bảng trống tính là "trang trống": GĐ-04. "Thân thiện" kiểm bằng (CH-11 ý 1): Có một câu tiếng Việt đầy đủ nói chưa có danh mục, không dùng từ kỹ thuật. Ý gợi ý bước tiếp theo tách thành khuyến nghị NR-06 |
| UI-R18 | Tất cả ảnh sản phẩm phải có thuộc tính `alt` mô tả nội dung ảnh (không để rỗng). | IA-04 | Không có trong phạm vi | Không áp dụng | A-01 không hiển thị ảnh sản phẩm |

### 2.5 FR-14: Quản lý Danh mục (Category CRUD)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R19 | Admin có thể Thêm / Xem / Xóa danh mục. | IA-01, IA-02 | A-01 | Áp dụng một phần | Phần áp dụng: Trang có thành phần nhìn thấy được cho cả 3 thao tác (ô nhập và nút để thêm, bảng để xem, nút xóa trên từng dòng). Không áp dụng: Thao tác có thật sự thêm, xóa dữ liệu không (SV chốt chỉ kiểm hiển thị). IA là đề xuất của AI: IA-02 cho form thêm, IA-01 cho bảng và nút xóa |
| UI-R20 | Tên danh mục là bắt buộc, không được để trống. | IA-02 | A-01 (ô "Tên danh mục mới") | Áp dụng một phần | Phần áp dụng: Ô tên là trường bắt buộc, nên chịu UI-R06 (`*`); bấm "Thêm mới" khi ô trống thì có thông báo lỗi nhìn thấy được, vị trí theo UI-R09 (CH-07). Không áp dụng: Hệ thống có từ chối lưu tên trống không (SV chốt chỉ kiểm hiển thị). Trùng ý một phần với UI-R06 |

### 2.6 FR-12: Kiểm soát truy cập (Access Control)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R21 | Phân hệ Admin chỉ dành cho tài khoản có `role = 'admin'`. | IA-03 | Không có trong phạm vi | Không áp dụng | Phân quyền: SV đã chọn không kiểm. Điểm survey liên quan (chưa đăng nhập thì thấy trang Admin Login) ghi ở mục 5.1 |
| UI-R22 | **Tất cả** các API Admin (`/api/admin/*`) và các API có tính ảnh hưởng dữ liệu (`POST/PUT/DELETE /api/products`, `/api/categories`, `/api/coupons`) đều phải yêu cầu: 1. Token JWT hợp lệ. 2. `role = 'admin'` trong Token. | IA-03 | Không có trong phạm vi | Không áp dụng | Yêu cầu về API, không có phần hiển thị; ngoài ra SV đã chọn không kiểm phân quyền. Trong SRS, hai ý 1 và 2 là danh sách đánh số con của gạch đầu dòng này |

### 2.7 Ý giao diện ở FR khác (xét để ghi rõ vì sao áp dụng hay không)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R23 | Khi đang tải dữ liệu phải hiển thị trạng thái **loading**. | IA-04 | Không có trong phạm vi (FR-05, trang chủ Web) | Không áp dụng | Yêu cầu của trang chủ (FR-05). Loading khi tải danh sách danh mục kiểm theo khuyến nghị NR-04 (CH-10) |
| UI-R24 | Khi không có kết quả tìm kiếm phải hiển thị thông báo **empty state** phù hợp. | IA-04 | Không có trong phạm vi (FR-05, tìm kiếm sản phẩm) | Không áp dụng | A-01 không có ô tìm kiếm (`00_survey.md` mục 3.4). Trạng thái trống của A-01 xét theo UI-R17 |
| UI-R25 | Mỗi trang chỉ có 1 `<h1>` duy nhất. | IA-01 | A-01 (có dữ liệu và trống) | Áp dụng | Nằm ở FR-05 nhưng nói "mỗi trang". Trùng ý với UI-R04; ở bước `ai-draft` chỉ tạo một mục |
| UI-R26 | Nút **Xóa sản phẩm** phải có dialog xác nhận trước khi thực hiện. | IA-04 | Không có trong phạm vi (FR-07, giỏ hàng) | Không áp dụng | Yêu cầu của giỏ hàng; trùng ý với UI-R16. Hộp xác nhận khi xóa danh mục: NR-03 |
| UI-R27 | Giỏ hàng trống phải có hình minh họa và thông báo rõ ràng. | IA-04 | Không có trong phạm vi (FR-07, giỏ hàng) | Không áp dụng | Yêu cầu của giỏ hàng. Trạng thái trống của A-01 xét theo UI-R17 |
| UI-R28 | Tên sản phẩm: bắt buộc, tối đa 255 ký tự. | IA-02 | Không có trong phạm vi (FR-15, form sản phẩm) | Không áp dụng | Ràng buộc của tên sản phẩm, không phải tên danh mục. SRS không nêu độ dài tối đa của tên danh mục; không dùng 255 làm oracle cho A-01 |
| UI-R29 | Danh mục: bắt buộc, phải chọn từ danh sách có sẵn. | IA-02 | Không có trong phạm vi (FR-15, form sản phẩm) | Không áp dụng | Ô chọn danh mục nằm ở form sản phẩm, không ở A-01 |
| UI-R30 | Hệ thống hiển thị báo cáo rõ ràng: bao nhiêu dòng thành công, bao nhiêu dòng lỗi và lý do. | IA-04 | Không có trong phạm vi (FR-16, import CSV) | Không áp dụng | A-01 không có chức năng import |
| UI-R31 | Địa chỉ giao hàng phải được hiển thị **an toàn** (không render HTML). | IA-01 | Không có trong phạm vi (FR-18, đơn hàng Admin) | Không áp dụng | Yêu cầu của trang đơn hàng; ý hiển thị an toàn nói chung xét ở UI-R32 |
| UI-R32 | Mọi dữ liệu từ user nhập vào khi hiển thị trên UI phải được escape đúng cách, không dùng `innerHTML` trực tiếp. | IA-01 | Không có trong phạm vi (SEC-04) | Không áp dụng | Yêu cầu bảo mật: SV đã chọn không kiểm. Nếu bỏ quyết định này, ý có phần nhìn thấy được là tên danh mục chứa thẻ HTML hiện thành chữ trong bảng |

### 2.8 Các FR không trích

| FR | Lý do |
|---|---|
| FR-01, FR-03, FR-04 | Màn hình Đăng ký, Quên mật khẩu, Hồ sơ của Web người dùng; không có ý giao diện nào có thể bị hiểu là áp dụng cho A-01 |
| FR-02 | Đăng nhập của Web người dùng. Ý `type="email"` của FR-02 trùng ý với UI-R07; trang Admin Login không thuộc phạm vi (CH-01) |
| FR-06, FR-08, FR-09, FR-10, FR-11 | Màn hình chi tiết sản phẩm, thanh toán, mã giảm giá, đơn hàng của người dùng; không có ý giao diện dùng cho A-01 |
| FR-13 | Dashboard là trang Admin khác. Menu trái dùng chung xét theo FR-23 |
| FR-17, FR-19 | Trang Mã Giảm Giá, Người dùng của Admin; không có ý giao diện dùng cho A-01 |
| FR-20 | Mobile |
| SEC-01, SEC-02, SEC-03, SEC-05, SEC-06, SEC-07 | Yêu cầu phía máy chủ hoặc API, không có phần hiển thị trên A-01 |

---

## 3. Tổng hợp theo IA và màn hình

Chỉ gồm các mã `Áp dụng` và `Áp dụng một phần`, cùng các mục khuyến nghị `NR-nn` SV đã chốt (mục 5.2). Đây là đầu vào cho bước `ai-draft`.

| IA | A-01: Mã SRS | A-01: Khuyến nghị đã chốt |
|---|---|---|
| IA-01 | UI-R01, UI-R02, UI-R04, UI-R05, UI-R19 (phần bảng và nút xóa), UI-R25 | Không có |
| IA-02 | UI-R06, UI-R09, UI-R19 (phần form thêm), UI-R20 | NR-05, NR-07 |
| IA-03 | UI-R11, UI-R13 | Không có |
| IA-04 | UI-R17 | NR-01, NR-02, NR-03, NR-04, NR-06 |

Số lượng: 32 mã; 10 `Áp dụng`, 2 `Áp dụng một phần`, 20 `Không áp dụng`, 0 `⏳ SV quyết định` (đếm bằng `check_checklist.py oracle`); 7 mục khuyến nghị `NR-01` đến `NR-07`. Các cặp trùng ý: UI-R04 và UI-R25; UI-R06 và UI-R20 (phần `*`); mỗi cặp sinh **một** mục checklist.

IA-03 chỉ có 2 mã SRS và không có mục khuyến nghị nào. SV chốt không thêm ở bước này (mục 4.3 điểm D); xét thêm ở bước `add`.

---

## 4. Câu hỏi mở và giả định

### 4.1 Câu hỏi mở và quyết định của SV

| Mã | Câu hỏi | Các phương án | Liên quan | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|---|---|
| CH-01 | Trang "Admin Login" (ảnh 01) có thuộc phạm vi checklist của A-01 không? | (a) Không, chỉ là đường vào; (b) Có, áp FR-21 và FR-22; (c) Chỉ xét các ý chung của FR-21 | UI-R01, UI-R02, UI-R04, UI-R07, UI-R08 | (a) Không. Demo giữ đúng một màn hình "Quản lý Danh mục" | UI-R07, UI-R08 thành `Không áp dụng`; bỏ trang Admin Login khỏi cột Màn hình của UI-R01, UI-R04 |
| CH-02 | Chữ tiếng Anh nào được coi là "thuật ngữ kỹ thuật chuẩn"? | (a) Chỉ "ID"; (b) "ID" và "Dashboard"; (c) Không từ nào; (d) SV liệt kê. "EShop Admin": (e) Tên riêng; (f) Phải dịch | UI-R01 | (a) Chỉ giữ "ID" (thuật ngữ toàn cầu; SV ghi: Giống T1); "Dashboard" phải dịch. "EShop Admin": (e) Tên riêng, không dịch | UI-R01: Mục kiểm ngôn ngữ coi "Dashboard" là chữ tiếng Anh phải dịch; "ID", "EShop Admin" được giữ |
| CH-03 | Tiêu đề tab trình duyệt có tính vào UI-R01 không? | (a) Có; (b) Không | UI-R01 | (a) Có (SV ghi: Giống T1) | UI-R01 áp cho cả tiêu đề tab |
| CH-04 | Nút nào thuộc nhóm "tích cực", nút nào thuộc nhóm "nguy hiểm/hủy bỏ"? | (a) "Thêm mới" tích cực, "Xóa" nguy hiểm, "Đăng xuất" không thuộc nhóm nào; (b) Như (a), nhưng "Đăng xuất" nguy hiểm; (c) Như (a), nhưng "Đăng xuất" tích cực; (d) Phân khác | UI-R02 | (b) "Đăng xuất" thuộc nhóm nguy hiểm, đỏ (SV ghi: Giống T1) | UI-R02: "Thêm mới" xanh dương; "Xóa" và "Đăng xuất" đỏ |
| CH-05 | Thứ tự Tab nào là "trên xuống, trái sang phải" với bố cục hai cột? | (a) Hết menu trái rồi tới vùng nội dung; (b) Theo từng hàng; (c) Chỉ vùng nội dung | UI-R05 | (a) Hết menu trái rồi tới nội dung (SV ghi: Giống T1, hết khối trái rồi sang khối phải) | UI-R05: Kết quả mong đợi là thứ tự (a) |
| CH-06 | Ô "Tên danh mục mới" không có nhãn nhìn thấy. Kiểm `*` "bên cạnh nhãn" thế nào? | (a) Ô phải có nhãn và `*` cạnh nhãn; (b) Có `*` sát ô (kể cả trong placeholder) là đạt; (c) Tách hai mục: `*` theo (a) là yêu cầu SRS, "ô có nhãn nhìn thấy" là khuyến nghị (WCAG 2.2 SC 3.3.2) | UI-R06, UI-R20 | (c) Tách hai mục: Dấu `*` cạnh ô theo SRS; mục "có nhãn gắn với ô" là khuyến nghị theo WCAG | UI-R06 kiểm `*` ngoài ô, sát ô hoặc cạnh nhãn (điểm A); thêm NR-05, NR-07 (điểm B) |
| CH-07 | Bấm "Thêm mới" khi ô tên trống, có kiểm thông báo lỗi không? | (a) Kiểm có thông báo và vị trí; (b) Chỉ kiểm vị trí; (c) Không kiểm | UI-R09, UI-R20 | (a) Kiểm có thông báo lỗi và vị trí của nó | UI-R20 phần áp dụng gồm "có thông báo lỗi nhìn thấy được"; UI-R09 dùng tình huống này |
| CH-08 | Có kiểm phản hồi sau khi bấm "Thêm mới" hoặc "Xóa" thành công không? | (a) Không; (b) Cả hai, khuyến nghị; (c) Chỉ Thêm; (d) Chỉ Xóa | UI-R15 | (b) Cả hai, Thêm và Xóa (khuyến nghị) | Thêm NR-01, NR-02 |
| CH-09 | Có kiểm dialog xác nhận khi bấm "Xóa" danh mục không? | (a) Không; (b) Có, khuyến nghị | UI-R16, UI-R26 | (b) Có (khuyến nghị; SV ghi: T1 đã chốt hành động xóa cần hộp xác nhận) | Thêm NR-03 |
| CH-10 | Có kiểm trạng thái loading khi danh sách đang tải không? | (a) Không; (b) Có, khuyến nghị | UI-R23 | (b) Có (khuyến nghị; SV ghi: T1 đã chốt có kiểm loading) | Thêm NR-04 |
| CH-11 | "Message thân thiện" ở UI-R17 kiểm bằng tiêu chí nào? | (a) Câu tiếng Việt nói rõ chưa có danh mục; (b) Như (a) và gợi ý bước tiếp theo; (c) Bỏ chữ "thân thiện", chỉ kiểm có message | UI-R17 | Tách hai mục (SV ghi: Như T1): (1) Có câu tiếng Việt đầy đủ nói chưa có danh mục, không dùng từ kỹ thuật; (2) Có gợi ý bước tiếp theo (khuyến nghị) | UI-R17 ý "thân thiện" kiểm theo (1); thêm NR-06 cho (2) |

### 4.2 Giả định của AI

SV xác nhận cả 6 giả định ở vòng hai (mục 4.3 điểm C).

| Mã | Giả định | Liên quan | Trạng thái |
|---|---|---|---|
| GĐ-01 | Menu trái của Admin là "Thanh điều hướng (Navbar)" mà FR-23 nói tới, dù nằm dọc bên trái | UI-R11, UI-R13 | Đã xác nhận (điểm C, mục 4.3) |
| GĐ-02 | Danh sách trang con trong UI-R14 (Giỏ hàng, Thanh toán, Chi tiết sản phẩm) là danh sách đóng, nên trang Admin không bắt buộc có breadcrumb | UI-R14 | Đã xác nhận (điểm C, mục 4.3) |
| GĐ-03 | "Highlight trang đang được chọn" hiểu là: Mục menu của trang đang mở trông khác **chính mục đó** khi đang ở trang khác (so ảnh 02 với ảnh 05), không so với các mục khác ("Đăng xuất" luôn khác màu các mục khác) | UI-R11 | Đã xác nhận (điểm C, mục 4.3) |
| GĐ-04 | "Trang trống (Empty State)" gồm trạng thái bảng danh mục không có dòng nào (ảnh 06), dù các phần khác của trang vẫn hiện | UI-R17 | Đã xác nhận (điểm C, mục 4.3) |
| GĐ-05 | Nút "Thêm mới" là nút submit của form thêm. Vì nút nằm cùng hàng với ô nhập, "thông báo lỗi xuất hiện trên nút submit" hiểu là thông báo nằm cao hơn mép trên của nút "Thêm mới" | UI-R09 | Đã xác nhận (điểm C, mục 4.3) |
| GĐ-06 | Mọi trang Admin dùng chung một địa chỉ, nên "trang" ở UI-R04, UI-R25 hiểu theo nội dung đang hiển thị (sau khi chọn "Danh mục" ở menu trái), không theo URL | UI-R04, UI-R25 | Đã xác nhận (điểm C, mục 4.3) |

### 4.3 Điểm chốt ở vòng hai

| Điểm | Vấn đề | Các phương án | Liên quan | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|---|---|
| A | CH-06: SV ghi "dấu `*` cạnh ô", khác phương án (c) của bản AI ("`*` cạnh nhãn"). Ô hiện chỉ có placeholder, nên cần chốt: Dấu `*` nằm **trong** placeholder có tính là "cạnh ô" không? | (a) Có: `*` trong placeholder hoặc sát ngoài ô đều đạt; (b) Không: `*` phải nằm ngoài ô, sát ô (hoặc cạnh nhãn nếu có nhãn) | UI-R06 | (b) Không. Dấu `*` phải nằm ngoài ô, sát ô hoặc cạnh nhãn (SV ghi: Giống T1, `*` bên cạnh nhãn); `*` trong placeholder mất đi khi gõ | UI-R06: Kết quả mong đợi là `*` nằm ngoài ô |
| B | CH-06: SV ghi "có nhãn **gắn với** ô", phương án (c) của bản AI ghi "có nhãn **nhìn thấy**" (WCAG 2.2 SC 3.3.2). Hai ý kiểm khác nhau: Nhãn nhìn thấy kiểm bằng mắt; nhãn gắn với ô (WCAG 2.2 SC 1.3.1, 4.1.2) kiểm bằng DevTools ở bước `exec` (thẻ `<label for>` hoặc `aria-label`) | (a) NR-05 chỉ kiểm có nhãn nhìn thấy (SC 3.3.2); (b) NR-05 chỉ kiểm nhãn gắn với ô qua mã (SC 1.3.1, 4.1.2); (c) Tách hai mục khuyến nghị: NR-05 nhãn nhìn thấy, thêm NR-07 nhãn gắn với ô | NR-05 | (c) Tách 2 mục khuyến nghị: Nhãn nhìn thấy (kiểm bằng mắt) và nhãn gắn với ô (kiểm bằng DevTools ở bước chạy) (SV ghi: Giống T1 có mục nhãn gắn với ô) | NR-05 chỉ còn nhãn nhìn thấy; thêm NR-07 |
| C | SV chưa trả lời về GĐ-01 đến GĐ-06 | (a) Xác nhận cả 6; (b) SV sửa giả định nào (ghi mã và cách hiểu mới) | GĐ-01 đến GĐ-06 | (a) Xác nhận cả 6 | Cột Trạng thái ở mục 4.2 |
| D | Mục 5.1 có 10 điểm thấy ở survey mà SRS không yêu cầu; SV chưa chọn điểm nào ngoài các điểm đã thành NR qua CH | (a) Không thêm NR nào nữa ở bước này (vẫn có thể thêm ở bước `add`); (b) SV chọn số điểm ở mục 5.1 để AI ghi thành NR | Mục 5.1 | (a) Không thêm ở bước này; SV sẽ tự thêm ở bước `add` | Không có NR mới từ mục 5.1 |

---

## 5. Điểm ngoài SRS

### 5.1 Điểm thấy ở `00_survey.md` mà SRS không có yêu cầu

Nếu muốn đưa vào checklist thì oracle phải là nguồn ngoài SRS và ghi là **khuyến nghị**. Danh sách chỉ để không bỏ sót, không phải kết luận đúng hay sai.

| # | Màn hình | Điểm quan sát được | Ghi chú |
|---|---|---|---|
| 1 | A-01 | Trang Danh mục không có địa chỉ riêng; bấm F5 khi đang ở Danh mục thì về Dashboard (`00_survey.md` mục 3.1) | Nguồn có thể dùng: Nielsen heuristic 3 (User control and freedom) |
| 2 | A-01 | Chưa đăng nhập, mở `localhost:5174` thì thấy trang "Admin Login" (ảnh 01) | Phân quyền không kiểm; trang Admin Login không thuộc phạm vi (CH-01) |
| 3 | A-01 | Ô "Tên danh mục mới" không có nhãn nhìn thấy, chỉ có placeholder | Đã thành NR-05, NR-07 (CH-06, điểm B) |
| 4 | A-01 | Bảng không có nút sửa, chỉ có "Xóa" | FR-14 chỉ yêu cầu Thêm / Xem / Xóa |
| 5 | A-01 | Kiểu viết hoa khác nhau: Tiêu đề "Quản lý Danh mục", tên cột "Tên Danh Mục", mục menu "Mã Giảm Giá" và "Đơn hàng" | Nguồn có thể dùng: Shneiderman rule 1 (Strive for consistency); Nielsen heuristic 4 |
| 6 | A-01 | Mã danh mục ghi dạng `#1`; bảng sắp theo ID tăng dần; không có phân trang, tìm kiếm, bộ lọc | SRS không nói cách ghi mã, thứ tự, phân trang |
| 7 | A-01 | Bấm "Xóa": Dòng biến mất ngay, không có hộp xác nhận, không có thông báo | Đã thành NR-02, NR-03 (CH-08, CH-09) |
| 8 | A-01 | Tiêu đề tab là `frontend-admin` ở mọi trang Admin, kể cả trang đăng nhập | Phần ngôn ngữ đã vào UI-R01 (CH-03). Phần "tiêu đề tab mô tả trang" chưa có mục; nguồn có thể dùng: WCAG 2.2 SC 2.4.2 Page Titled |
| 9 | Menu trái | Không có tên hay lời chào tài khoản đang đăng nhập | Nguồn có thể dùng: Nielsen heuristic 1 |
| 10 | Menu trái | "EShop Admin" không phải link; menu không có icon; "Đăng xuất" nằm cùng danh sách với các mục điều hướng, chữ đỏ | Màu của "Đăng xuất" đã vào UI-R02 (CH-04); còn lại SRS không nói |

### 5.2 Mục kiểm theo nguồn ngoài SRS sinh viên đã chốt

Các mục dưới đây là **khuyến nghị**, không phải yêu cầu của SRS. Nguồn đề xuất do AI đề xuất theo `references/sources.md` của skill; SV xác nhận khi review bản này.

| Mã | Nội dung | Màn hình | IA | Nguồn đề xuất | Từ |
|---|---|---|---|---|---|
| NR-01 | Sau khi bấm "Thêm mới" với tên hợp lệ, có phản hồi nhìn thấy được rằng đã thêm xong (thông báo, hoặc dòng mới hiện trong bảng kèm dấu hiệu) | A-01 | IA-04 | Nielsen heuristic 1 (Visibility of system status); Shneiderman rule 3 (Offer informative feedback) | CH-08 |
| NR-02 | Sau khi xóa một danh mục, có phản hồi nhìn thấy được rằng đã xóa xong | A-01 | IA-04 | Nielsen heuristic 1; Shneiderman rule 3 | CH-08 |
| NR-03 | Bấm "Xóa" thì có hộp xác nhận trước khi xóa | A-01 | IA-04 | Nielsen heuristic 5 (Error prevention) | CH-09 |
| NR-04 | Khi danh sách danh mục đang tải, có dấu hiệu đang tải | A-01 | IA-04 | Nielsen heuristic 1 | CH-10 |
| NR-05 | Ô "Tên danh mục mới" có nhãn nhìn thấy được (kiểm bằng mắt) | A-01 | IA-02 | WCAG 2.2 SC 3.3.2 Labels or Instructions | CH-06, điểm B |
| NR-07 | Ô "Tên danh mục mới" có nhãn gắn với ô qua mã (thẻ `<label for>` hoặc `aria-label`, `aria-labelledby`), kiểm bằng DevTools ở bước `exec` | A-01 | IA-02 | WCAG 2.2 SC 1.3.1 Info and Relationships; SC 4.1.2 Name, Role, Value | Điểm B |
| NR-06 | Khi danh sách trống, có gợi ý bước tiếp theo (ví dụ chỉ tới ô thêm phía trên) | A-01 | IA-04 | Nielsen heuristic 10 (Help and documentation); Shneiderman rule 3 | CH-11 |

---

## 6. Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 1, mục 2.1 (UI-R01, UI-R04) | Trang Admin Login không thuộc phạm vi; bỏ khỏi cột Màn hình | Quyết định của SV | | CH-01 (a): Demo giữ đúng một màn hình |
| Mục 2.2 (UI-R07, UI-R08) | `⏳ SV quyết định` thành `Không áp dụng` | Quyết định của SV | | CH-01 (a) |
| Mục 2.1 (UI-R01) | Ghi rõ thuật ngữ được giữ ("ID"), chữ phải dịch ("Dashboard"), tên riêng ("EShop Admin"); tiêu đề tab thuộc phạm vi | Quyết định của SV | | CH-02 (a) và (e); CH-03 (a) |
| Mục 2.1 (UI-R02) | Ghi phân nhóm: "Thêm mới" tích cực; "Xóa", "Đăng xuất" nguy hiểm / hủy bỏ | Quyết định của SV | | CH-04 (b) |
| Mục 2.1 (UI-R05) | Ghi thứ tự Tab đúng: Hết menu trái rồi tới vùng nội dung | Quyết định của SV | | CH-05 (a) |
| Mục 2.2 (UI-R06), mục 5.2 (NR-05) | Mục SRS kiểm `*` cạnh ô; tách ý "ô có nhãn" thành khuyến nghị NR-05; hai chi tiết còn chờ ở điểm A, B | Quyết định của SV | | CH-06 (c), SV sửa chữ của phương án: "`*` cạnh ô" thay cho "`*` cạnh nhãn", "nhãn gắn với ô" thay cho "nhãn nhìn thấy" |
| Mục 2.2 (UI-R09), mục 2.5 (UI-R20) | Phần áp dụng của UI-R20 gồm "có thông báo lỗi nhìn thấy được khi để trống"; UI-R09 dùng tình huống này | Quyết định của SV | | CH-07 (a) |
| Mục 2.4 (UI-R15), mục 5.2 (NR-01, NR-02) | Thêm hai mục khuyến nghị phản hồi sau khi thêm và sau khi xóa | Quyết định của SV | | CH-08 (b) |
| Mục 2.4 (UI-R16), mục 2.7 (UI-R26), mục 5.2 (NR-03) | Thêm mục khuyến nghị hộp xác nhận khi xóa danh mục | Quyết định của SV | | CH-09 (b) |
| Mục 2.7 (UI-R23), mục 5.2 (NR-04) | Thêm mục khuyến nghị dấu hiệu đang tải | Quyết định của SV | | CH-10 (b) |
| Mục 2.4 (UI-R17), mục 5.2 (NR-06) | Ý "thân thiện" kiểm bằng câu tiếng Việt đầy đủ nói chưa có danh mục, không dùng từ kỹ thuật; ý gợi ý bước tiếp theo tách thành NR-06 | Quyết định của SV | | CH-11: SV chọn tách hai mục, kết hợp phương án (a) (thêm điều kiện "không dùng từ kỹ thuật") và (b) (phần gợi ý thành khuyến nghị) |
| Mục 3 | Cập nhật tổng hợp: Thêm cột khuyến nghị đã chốt; số mã `Không áp dụng` từ 18 lên 20, `⏳` từ 2 xuống 0 | Quyết định của SV | | Hệ quả của CH-01 và CH-06 đến CH-11 |
| Mục 2.2 (UI-R06) | Dấu `*` phải nằm ngoài ô, sát ô hoặc cạnh nhãn; `*` trong placeholder không tính | Quyết định của SV | | Vòng hai điểm A (b): `*` trong placeholder mất đi khi gõ |
| Mục 5.2 (NR-05, NR-07) | NR-05 chỉ kiểm nhãn nhìn thấy; thêm NR-07 kiểm nhãn gắn với ô bằng DevTools | Quyết định của SV | | Vòng hai điểm B (c) |
