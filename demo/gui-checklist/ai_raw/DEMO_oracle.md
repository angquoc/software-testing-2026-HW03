# DEMO oracle: Yêu cầu giao diện trích từ SRS (bản AI)

- Bước: `[demo][oracle]`
- Thời gian tạo: 2026-11-11 09:37 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `Homeworks/eshop-sut/README.md` (SRS phiên bản 2.0, cập nhật 2026-05-14), mục 2 đến 9; `00_survey.md` (bản đã đối chiếu, cập nhật 09:33) và ảnh `survey_01`, `survey_02`, `survey_05`, `survey_06`; hai quyết định của SV trước khi viết: (1) Checklist **chỉ kiểm trạng thái hiển thị** của giao diện, không kiểm thêm / xóa có thật sự đổi dữ liệu, không kiểm phân quyền, bảo mật; (2) **có** trích các ý giao diện ở FR khác và yêu cầu bảo mật có phần hiển thị, để ghi rõ vì sao áp dụng hay không

---

## 1. Phạm vi và cách đọc

Nguồn trích: `Homeworks/eshop-sut/README.md` (phiên bản 2.0, cập nhật 2026-05-14). Màn hình trong phạm vi:

| Mã | Màn hình | URL |
|---|---|---|
| A-01 | Quản lý Danh mục (Web Admin): Đăng nhập Admin, chọn "Danh mục" ở menu trái | `http://localhost:5174/` (mọi trang Admin dùng chung địa chỉ này, theo `00_survey.md` mục 2) |

Thành phần dùng chung: Menu trái của Admin (`00_survey.md` mục 4) được xét như một phần của A-01, ở trạng thái đang mở trang Danh mục. Trang "Admin Login" (ảnh 01, trạng thái chưa đăng nhập) có thuộc A-01 hay không chưa chốt: CH-01.

Cách trích:

- Mỗi gạch đầu dòng của SRS là **một** yêu cầu, giữ **nguyên văn** (kể cả chữ in đậm, ký hiệu code, dấu câu của SRS). Một gạch đầu dòng nhiều ý vẫn giữ một mã; bước `ai-draft` tách thành nhiều mục. Riêng SEC-04 là một dòng của bảng mục 9, cũng tính một mã.
- Lấy: Mục 8 của SRS (FR-21 đến FR-24); FR gắn trực tiếp với A-01 (FR-14, FR-12); các ý giao diện ở FR khác có thể bị hiểu là áp dụng cho A-01 (FR-05, FR-07, FR-15, FR-16, FR-18) và SEC-04, để ghi rõ vì sao áp dụng hay không.
- Cột "Áp dụng" nhận một trong bốn giá trị: `Áp dụng`, `Áp dụng một phần` (ghi rõ phần nào), `Không áp dụng` (ghi lý do), `⏳ SV quyết định`.
- IA theo ánh xạ của dự án (`WORKFLOW.md` mục 1.1): IA-01 là FR-21, IA-02 là FR-22, IA-03 là FR-23, IA-04 là FR-24. Với ý nằm ngoài mục 8, IA là đề xuất của AI dựa trên nội dung ý.
- Theo quyết định (1) của SV, phần chức năng của một yêu cầu (dữ liệu có đổi không, có bị từ chối không, quyền truy cập, API) ghi là không áp dụng; chỉ phần nhìn thấy được trên giao diện được xét.
- Bảng này chỉ trích yêu cầu và xét phạm vi áp dụng; **không** đánh giá giao diện hiện tại. Survey chỉ được dùng để xét áp dụng (A-01 có thành phần đó không).

---

## 2. Bảng yêu cầu

### 2.1 FR-21: Tiêu chuẩn Giao diện Chung

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R01 | **Nhất quán ngôn ngữ**: Toàn bộ giao diện dùng tiếng Việt (trừ thuật ngữ kỹ thuật chuẩn). | IA-01 | A-01 (trang Danh mục có dữ liệu và trống, menu trái); trang Admin Login tùy CH-01 | Áp dụng | Từ nào là "thuật ngữ kỹ thuật chuẩn": CH-02. Tiêu đề tab có tính vào "toàn bộ giao diện" không: CH-03 |
| UI-R02 | **Nhất quán màu sắc**: Các nút hành động tích cực (Submit, Mua hàng) dùng màu xanh dương. Các nút nguy hiểm/hủy bỏ dùng màu đỏ. | IA-01 | A-01 (nút "Thêm mới", nút "Xóa" trên từng dòng, mục "Đăng xuất" ở menu trái) | Áp dụng | Gồm 2 ý: Nút tích cực xanh dương; nút nguy hiểm / hủy bỏ đỏ. Nút nào thuộc nhóm nào: CH-04 |
| UI-R03 | **Nhất quán đơn vị tiền**: Luôn dùng ký hiệu `₫` với định dạng phân cách hàng nghìn. | IA-01 | Không có trong phạm vi | Không áp dụng | A-01 không hiển thị số tiền (`00_survey.md` mục 3.4: Bảng chỉ có ID, tên, nút "Xóa") |
| UI-R04 | **Tiêu đề trang**: Mỗi trang có đúng 1 thẻ `<h1>` mô tả nội dung trang. | IA-01 | A-01 (có dữ liệu và trống); trang Admin Login tùy CH-01 | Áp dụng | Gồm 2 ý: Đúng 1 thẻ `<h1>`; thẻ đó mô tả nội dung trang. Trùng ý với UI-R25; ở bước `ai-draft` chỉ tạo một mục cho ý "đúng 1 thẻ". Cách hiểu "trang" khi mọi trang dùng chung địa chỉ: GĐ-06 |
| UI-R05 | **Tab Order**: Thứ tự focus theo Tab phải đi từ trên xuống dưới, trái sang phải. | IA-01 | A-01 (menu trái, ô nhập, nút "Thêm mới", nút "Xóa") | Áp dụng | Bố cục hai cột (menu trái và vùng nội dung): Thứ tự nào là đúng: CH-05 |

### 2.2 FR-22: Form Requirements

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R06 | Tất cả trường bắt buộc phải có ký hiệu `*` bên cạnh nhãn. | IA-02 | A-01 (ô "Tên danh mục mới" của form thêm) | Áp dụng | Tên danh mục là trường bắt buộc theo UI-R20. Ô này không có nhãn nhìn thấy (`00_survey.md` mục 3.2), nên cách áp "bên cạnh nhãn": CH-06. Trùng ý một phần với UI-R20; chỉ tạo một mục cho ý `*` |
| UI-R07 | Trường Email phải dùng `type="email"`. | IA-02 | Trang Admin Login (ô "Email"), nếu CH-01 chọn xét trang này | ⏳ SV quyết định | Form thêm danh mục không có trường Email. Chỉ áp dụng nếu trang Admin Login thuộc phạm vi: CH-01 |
| UI-R08 | Trường Mật khẩu phải dùng `type="password"` (không hiển thị rõ). | IA-02 | Trang Admin Login (ô "Password"), nếu CH-01 chọn xét trang này | ⏳ SV quyết định | Như UI-R07: CH-01 |
| UI-R09 | Thông báo lỗi phải xuất hiện **trên** nút submit, không phải bên dưới. | IA-02 | A-01 (form thêm, nút "Thêm mới") | Áp dụng | Cách hiểu "trên" khi nút và ô nhập nằm cùng hàng: GĐ-05. Có kiểm thông báo khi để trống tên không: CH-07 |
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
| UI-R15 | Sau khi bấm "Thêm vào giỏ", phải có phản hồi trực quan (toast/badge). | IA-04 | Không có trong phạm vi | Không áp dụng | A-01 không có nút "Thêm vào giỏ". Phản hồi sau khi bấm "Thêm mới" hay "Xóa" danh mục SRS không yêu cầu: CH-08 |
| UI-R16 | Khi xóa item khỏi giỏ phải có dialog xác nhận. | IA-04 | Không có trong phạm vi | Không áp dụng | Yêu cầu dành cho giỏ hàng. Dialog xác nhận khi xóa danh mục SRS không yêu cầu: CH-09 |
| UI-R17 | Trang trống (Empty State) phải có icon/hình minh họa và message thân thiện. | IA-04 | A-01 (bảng danh mục không có dòng nào, ảnh 06) | Áp dụng | Gồm 2 ý: Có icon hoặc hình minh họa; có message thân thiện. Bảng trống tính là "trang trống": GĐ-04. Cách kiểm "thân thiện": CH-11 |
| UI-R18 | Tất cả ảnh sản phẩm phải có thuộc tính `alt` mô tả nội dung ảnh (không để rỗng). | IA-04 | Không có trong phạm vi | Không áp dụng | A-01 không hiển thị ảnh sản phẩm |

### 2.5 FR-14: Quản lý Danh mục (Category CRUD)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R19 | Admin có thể Thêm / Xem / Xóa danh mục. | IA-01, IA-02 | A-01 | Áp dụng một phần | Phần áp dụng: Trang có thành phần nhìn thấy được cho cả 3 thao tác (ô nhập và nút để thêm, bảng để xem, nút xóa trên từng dòng). Không áp dụng: Thao tác có thật sự thêm, xóa dữ liệu không (quyết định (1) của SV). IA là đề xuất của AI: IA-02 cho form thêm, IA-01 cho bảng và nút xóa |
| UI-R20 | Tên danh mục là bắt buộc, không được để trống. | IA-02 | A-01 (ô "Tên danh mục mới") | Áp dụng một phần | Phần áp dụng: Ô tên là trường bắt buộc, nên chịu UI-R06 (`*`) và UI-R09 (vị trí thông báo lỗi); có kiểm thông báo khi để trống không: CH-07. Không áp dụng: Hệ thống có từ chối lưu tên trống không (quyết định (1) của SV). Trùng ý một phần với UI-R06 |

### 2.6 FR-12: Kiểm soát truy cập (Access Control)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R21 | Phân hệ Admin chỉ dành cho tài khoản có `role = 'admin'`. | IA-03 | Không có trong phạm vi | Không áp dụng | Phân quyền: SV đã chọn không kiểm (quyết định (1)). Điểm survey liên quan (chưa đăng nhập thì thấy trang Admin Login) ghi ở mục 5.1 |
| UI-R22 | **Tất cả** các API Admin (`/api/admin/*`) và các API có tính ảnh hưởng dữ liệu (`POST/PUT/DELETE /api/products`, `/api/categories`, `/api/coupons`) đều phải yêu cầu: 1. Token JWT hợp lệ. 2. `role = 'admin'` trong Token. | IA-03 | Không có trong phạm vi | Không áp dụng | Yêu cầu về API, không có phần hiển thị; ngoài ra SV đã chọn không kiểm phân quyền. Trong SRS, hai ý 1 và 2 là danh sách đánh số con của gạch đầu dòng này |

### 2.7 Ý giao diện ở FR khác (xét để ghi rõ vì sao áp dụng hay không)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R23 | Khi đang tải dữ liệu phải hiển thị trạng thái **loading**. | IA-04 | Không có trong phạm vi (FR-05, trang chủ Web) | Không áp dụng | Yêu cầu của trang chủ (FR-05). Loading khi tải danh sách danh mục SRS không yêu cầu: CH-10 |
| UI-R24 | Khi không có kết quả tìm kiếm phải hiển thị thông báo **empty state** phù hợp. | IA-04 | Không có trong phạm vi (FR-05, tìm kiếm sản phẩm) | Không áp dụng | A-01 không có ô tìm kiếm (`00_survey.md` mục 3.4). Trạng thái trống của A-01 xét theo UI-R17 |
| UI-R25 | Mỗi trang chỉ có 1 `<h1>` duy nhất. | IA-01 | A-01 (có dữ liệu và trống) | Áp dụng | Nằm ở FR-05 nhưng nói "mỗi trang". Trùng ý với UI-R04; ở bước `ai-draft` chỉ tạo một mục |
| UI-R26 | Nút **Xóa sản phẩm** phải có dialog xác nhận trước khi thực hiện. | IA-04 | Không có trong phạm vi (FR-07, giỏ hàng) | Không áp dụng | Yêu cầu của giỏ hàng; trùng ý với UI-R16. Dialog khi xóa danh mục: CH-09 |
| UI-R27 | Giỏ hàng trống phải có hình minh họa và thông báo rõ ràng. | IA-04 | Không có trong phạm vi (FR-07, giỏ hàng) | Không áp dụng | Yêu cầu của giỏ hàng. Trạng thái trống của A-01 xét theo UI-R17 |
| UI-R28 | Tên sản phẩm: bắt buộc, tối đa 255 ký tự. | IA-02 | Không có trong phạm vi (FR-15, form sản phẩm) | Không áp dụng | Ràng buộc của tên sản phẩm, không phải tên danh mục. SRS không nêu độ dài tối đa của tên danh mục; không dùng 255 làm oracle cho A-01 |
| UI-R29 | Danh mục: bắt buộc, phải chọn từ danh sách có sẵn. | IA-02 | Không có trong phạm vi (FR-15, form sản phẩm) | Không áp dụng | Ô chọn danh mục nằm ở form sản phẩm, không ở A-01 |
| UI-R30 | Hệ thống hiển thị báo cáo rõ ràng: bao nhiêu dòng thành công, bao nhiêu dòng lỗi và lý do. | IA-04 | Không có trong phạm vi (FR-16, import CSV) | Không áp dụng | A-01 không có chức năng import |
| UI-R31 | Địa chỉ giao hàng phải được hiển thị **an toàn** (không render HTML). | IA-01 | Không có trong phạm vi (FR-18, đơn hàng Admin) | Không áp dụng | Yêu cầu của trang đơn hàng; ý hiển thị an toàn nói chung xét ở UI-R32 |
| UI-R32 | Mọi dữ liệu từ user nhập vào khi hiển thị trên UI phải được escape đúng cách, không dùng `innerHTML` trực tiếp. | IA-01 | Không có trong phạm vi (SEC-04) | Không áp dụng | Yêu cầu bảo mật: SV đã chọn không kiểm (quyết định (1)). Nếu bỏ quyết định này, ý có phần nhìn thấy được là tên danh mục chứa thẻ HTML hiện thành chữ trong bảng |

### 2.8 Các FR không trích

| FR | Lý do |
|---|---|
| FR-01, FR-03, FR-04 | Màn hình Đăng ký, Quên mật khẩu, Hồ sơ của Web người dùng; không có ý giao diện nào có thể bị hiểu là áp dụng cho A-01 |
| FR-02 | Đăng nhập của Web người dùng. Ý `type="email"` của FR-02 trùng ý với UI-R07; trang Admin Login xét ở CH-01 |
| FR-06, FR-08, FR-09, FR-10, FR-11 | Màn hình chi tiết sản phẩm, thanh toán, mã giảm giá, đơn hàng của người dùng; không có ý giao diện dùng cho A-01 |
| FR-13 | Dashboard là trang Admin khác. Menu trái dùng chung xét theo FR-23 |
| FR-17, FR-19 | Trang Mã Giảm Giá, Người dùng của Admin; không có ý giao diện dùng cho A-01 |
| FR-20 | Mobile |
| SEC-01, SEC-02, SEC-03, SEC-05, SEC-06, SEC-07 | Yêu cầu phía máy chủ hoặc API, không có phần hiển thị trên A-01 |

---

## 3. Tổng hợp theo IA và màn hình

Chỉ gồm các mã `Áp dụng` và `Áp dụng một phần`. Đây là đầu vào cho bước `ai-draft`. Hai mã `⏳ SV quyết định` (UI-R07, UI-R08) chờ CH-01.

| IA | A-01 Quản lý Danh mục |
|---|---|
| IA-01 | UI-R01, UI-R02, UI-R04, UI-R05, UI-R19 (phần bảng và nút xóa), UI-R25 |
| IA-02 | UI-R06, UI-R09, UI-R19 (phần form thêm), UI-R20 |
| IA-03 | UI-R11, UI-R13 |
| IA-04 | UI-R17 |

Số lượng: 32 mã; 10 `Áp dụng`, 2 `Áp dụng một phần`, 18 `Không áp dụng`, 2 `⏳ SV quyết định` (đếm bằng `check_checklist.py oracle`). Các cặp trùng ý: UI-R04 và UI-R25; UI-R06 và UI-R20 (phần `*`); mỗi cặp sinh **một** mục checklist.

Lưu ý cho SV: IA-03 và IA-04 có rất ít mã SRS áp dụng cho một màn hình Admin. Nếu muốn các IA này có thêm mục thì phải dùng nguồn ngoài SRS (ghi là khuyến nghị), qua các câu CH-08, CH-09, CH-10 và mục 5.1.

---

## 4. Câu hỏi mở và giả định

### 4.1 Câu hỏi mở (⏳ SV quyết định)

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CH-01 | Trang "Admin Login" (ảnh 01, thấy khi chưa đăng nhập và mở `localhost:5174`) có thuộc phạm vi checklist của A-01 không? | (a) Không, chỉ là đường vào; UI-R07, UI-R08 ghi `Không áp dụng`; (b) Có, xét như trạng thái chưa đăng nhập của A-01: Áp FR-21 và FR-22 (gồm UI-R07, UI-R08) cho trang này; (c) Chỉ xét các ý chung của FR-21 (ngôn ngữ, `<h1>`, màu nút) ở trang này, không xét UI-R07, UI-R08 | UI-R01, UI-R02, UI-R04, UI-R07, UI-R08 |
| CH-02 | Ở UI-R01, chữ tiếng Anh nào được coi là "thuật ngữ kỹ thuật chuẩn" (được giữ)? Survey thấy trên A-01: "ID", "Dashboard", "EShop Admin"; trên trang Admin Login: "Admin Login", "Email", "Password", "Login" | (a) Chỉ "ID"; (b) "ID" và "Dashboard"; (c) Không từ nào; (d) SV liệt kê. Riêng "EShop Admin" (tên hệ thống): (e) Là tên riêng, không cần dịch; (f) Phải dịch | UI-R01 |
| CH-03 | Tiêu đề tab trình duyệt (survey ghi `frontend-admin`) có tính vào "toàn bộ giao diện" của UI-R01 không? | (a) Có; (b) Không | UI-R01 |
| CH-04 | Ở UI-R02, nút nào thuộc nhóm "hành động tích cực" (xanh dương), nút nào thuộc nhóm "nguy hiểm/hủy bỏ" (đỏ)? | (a) "Thêm mới" tích cực, "Xóa" nguy hiểm, "Đăng xuất" (mục menu) không thuộc nhóm nào; (b) Như (a), nhưng "Đăng xuất" thuộc nhóm nguy hiểm/hủy bỏ; (c) Như (a), nhưng "Đăng xuất" thuộc nhóm tích cực; (d) SV phân khác | UI-R02 |
| CH-05 | Ở UI-R05, với bố cục hai cột (menu trái và vùng nội dung), thứ tự Tab nào là "từ trên xuống dưới, trái sang phải"? | (a) Hết các mục menu trái (trên xuống) rồi tới vùng nội dung (tiêu đề, ô nhập, "Thêm mới", các nút "Xóa" theo dòng); (b) Theo từng hàng nhìn thấy trên màn hình, trái sang phải rồi xuống hàng dưới; (c) Chỉ kiểm thứ tự trong vùng nội dung, không xét menu | UI-R05 |
| CH-06 | Ở UI-R06, ô "Tên danh mục mới" không có nhãn nhìn thấy, chỉ có placeholder. Kiểm `*` "bên cạnh nhãn" thế nào? | (a) Ô phải có nhãn nhìn thấy và `*` cạnh nhãn; không có nhãn thì mục Failed; (b) Có `*` sát ô (kể cả trong placeholder) là đạt; (c) Tách hai mục: `*` theo (a) là yêu cầu SRS, và "ô có nhãn nhìn thấy" là khuyến nghị (WCAG 2.2 SC 3.3.2) | UI-R06, UI-R20 |
| CH-07 | Khi bấm "Thêm mới" với ô tên để trống, có kiểm thông báo lỗi nhìn thấy được không? SRS nói tên không được để trống (UI-R20) và vị trí thông báo lỗi (UI-R09), nhưng không nói phải có thông báo | (a) Có: Kiểm có thông báo lỗi và kiểm vị trí của nó theo UI-R09; (b) Chỉ kiểm vị trí theo UI-R09; nếu không có thông báo thì mục ghi kết quả theo cách SV chốt; (c) Không kiểm | UI-R09, UI-R20 |
| CH-08 | Có kiểm phản hồi nhìn thấy được sau khi bấm "Thêm mới" hoặc "Xóa" danh mục thành công không? (SRS chỉ yêu cầu ở "Thêm vào giỏ", UI-R15) | (a) Không kiểm; (b) Kiểm cho cả hai, ghi là khuyến nghị (Nielsen heuristic 1, Visibility of system status; Shneiderman rule 3, Offer informative feedback); (c) Chỉ kiểm sau "Thêm mới"; (d) Chỉ kiểm sau "Xóa" | UI-R15 |
| CH-09 | Có kiểm dialog xác nhận khi bấm "Xóa" danh mục không? (SRS chỉ yêu cầu ở giỏ hàng, UI-R16, UI-R26) | (a) Không kiểm; (b) Kiểm, ghi là khuyến nghị (Nielsen heuristic 5, Error prevention) | UI-R16, UI-R26 |
| CH-10 | Có kiểm trạng thái loading khi danh sách danh mục đang tải không? (SRS chỉ yêu cầu ở trang chủ, UI-R23) | (a) Không kiểm; (b) Kiểm, ghi là khuyến nghị (Nielsen heuristic 1). Lưu ý: Ở bước `exec` có thể phải giả lập mạng chậm bằng DevTools mới thấy được | UI-R23 |
| CH-11 | Ở UI-R17, "message thân thiện" kiểm bằng tiêu chí nào để trả lời được Passed / Failed? | (a) Có một câu tiếng Việt nói rõ chưa có danh mục nào; (b) Như (a), và câu đó gợi ý bước tiếp theo (ví dụ dùng ô thêm phía trên); (c) Bỏ chữ "thân thiện" vì không kiểm được, chỉ kiểm có message | UI-R17 |

### 4.2 Giả định của AI

| Mã | Giả định | Liên quan |
|---|---|---|
| GĐ-01 | Menu trái của Admin là "Thanh điều hướng (Navbar)" mà FR-23 nói tới, dù nằm dọc bên trái | UI-R11, UI-R13 |
| GĐ-02 | Danh sách trang con trong UI-R14 (Giỏ hàng, Thanh toán, Chi tiết sản phẩm) là danh sách đóng, nên trang Admin không bắt buộc có breadcrumb | UI-R14 |
| GĐ-03 | "Highlight trang đang được chọn" hiểu là: Mục menu của trang đang mở trông khác **chính mục đó** khi đang ở trang khác (so ảnh 02 với ảnh 05), không so với các mục khác ("Đăng xuất" luôn khác màu các mục khác) | UI-R11 |
| GĐ-04 | "Trang trống (Empty State)" gồm trạng thái bảng danh mục không có dòng nào (ảnh 06), dù các phần khác của trang vẫn hiện | UI-R17 |
| GĐ-05 | Nút "Thêm mới" là nút submit của form thêm. Vì nút nằm cùng hàng với ô nhập, "thông báo lỗi xuất hiện trên nút submit" hiểu là thông báo nằm cao hơn mép trên của nút "Thêm mới" | UI-R09 |
| GĐ-06 | Mọi trang Admin dùng chung một địa chỉ, nên "trang" ở UI-R04, UI-R25 hiểu theo nội dung đang hiển thị (sau khi chọn "Danh mục" ở menu trái), không theo URL | UI-R04, UI-R25 |

---

## 5. Điểm ngoài SRS

### 5.1 Điểm thấy ở `00_survey.md` mà SRS không có yêu cầu

Nếu muốn đưa vào checklist thì oracle phải là nguồn ngoài SRS và ghi là **khuyến nghị**. Danh sách chỉ để không bỏ sót, không phải kết luận đúng hay sai.

| # | Màn hình | Điểm quan sát được | Ghi chú |
|---|---|---|---|
| 1 | A-01 | Trang Danh mục không có địa chỉ riêng; bấm F5 khi đang ở Danh mục thì về Dashboard (`00_survey.md` mục 3.1) | Nguồn có thể dùng: Nielsen heuristic 3 (User control and freedom) |
| 2 | A-01 | Chưa đăng nhập, mở `localhost:5174` thì thấy trang "Admin Login" (ảnh 01) | Phần phân quyền của FR-12 không kiểm (quyết định (1)); có xét trang này hay không: CH-01 |
| 3 | A-01 | Ô "Tên danh mục mới" không có nhãn nhìn thấy, chỉ có placeholder | Liên quan CH-06; nguồn có thể dùng: WCAG 2.2 SC 3.3.2 Labels or Instructions |
| 4 | A-01 | Bảng không có nút sửa, chỉ có "Xóa" | FR-14 chỉ yêu cầu Thêm / Xem / Xóa |
| 5 | A-01 | Kiểu viết hoa khác nhau: Tiêu đề "Quản lý Danh mục", tên cột "Tên Danh Mục", mục menu "Mã Giảm Giá" và "Đơn hàng" | Nguồn có thể dùng: Shneiderman rule 1 (Strive for consistency); Nielsen heuristic 4 |
| 6 | A-01 | Mã danh mục ghi dạng `#1`; bảng sắp theo ID tăng dần; không có phân trang, tìm kiếm, bộ lọc | SRS không nói cách ghi mã, thứ tự, phân trang |
| 7 | A-01 | Bấm "Xóa": Dòng biến mất ngay, không có hộp xác nhận, không có thông báo | Liên quan CH-08, CH-09 |
| 8 | A-01 | Tiêu đề tab là `frontend-admin` ở mọi trang Admin, kể cả trang đăng nhập | Liên quan CH-03; nguồn có thể dùng: WCAG 2.2 SC 2.4.2 Page Titled |
| 9 | Menu trái | Không có tên hay lời chào tài khoản đang đăng nhập | Nguồn có thể dùng: Nielsen heuristic 1 |
| 10 | Menu trái | "EShop Admin" không phải link; menu không có icon; "Đăng xuất" nằm cùng danh sách với các mục điều hướng, chữ đỏ | Màu của "Đăng xuất" xét theo CH-04; còn lại SRS không nói |

---

## 6. Thay đổi so với bản AI

(Bản AI để trống. Điền ở bản review `01_oracle.md`.)
