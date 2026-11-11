# DEMO survey: Khảo sát màn hình

Bước: `[demo][survey]`, bản đã điền và đối chiếu với ảnh
Bản AI gốc: `ai_raw/DEMO_survey.md` (tạo lúc 2026-11-11 09:15, UTC+7)
Cập nhật: 2026-11-11 09:25 (UTC+7) (pha 3: AI điền bảng quan sát từ ảnh theo cách (b), đối chiếu với điều SV ghi; còn các ô `?` chờ SV điền)
Cập nhật: 2026-11-11 09:33 (UTC+7) (ghi câu trả lời của SV: Đã reset trước khi chụp và sau ảnh 06; hết ô `?`, chốt survey)
Cập nhật: 2026-11-11 09:31 (UTC+7) (ghi câu trả lời của SV: Không có thông báo sau khi xóa; còn chờ việc reset trước và sau khi chụp)
Cập nhật: 2026-11-11 09:30 (UTC+7) (SV cho phép đọc riêng bảng môi trường trong `checklist/00_survey.md`; AI chép trình duyệt, OS, độ phân giải, zoom, scale; còn chờ reset trước và sau khi chụp, thông báo sau khi xóa)
Cập nhật: 2026-11-11 09:30 (UTC+7) (ghi câu trả lời của SV cho mục 5 dòng 4 đến 8: Tài khoản, xóa, "EShop Admin", "Đăng xuất", F5; còn chờ bảng môi trường và thông báo sau khi xóa)

**Ai điền phần nào:**

- SV: Chụp 4 ảnh `survey_01`, `survey_02`, `survey_05`, `survey_06`; cho biết (trong lời nhắn, chưa ghi vào file) ba điểm: Mọi trang Admin dùng chung `http://localhost:5174/`, không có đường dẫn riêng cho Danh mục; form thêm mở sẵn nên không có ảnh 03; bấm xóa không có hộp thoại xác nhận nên không có ảnh 04. SV chọn cách điền (b).
- SV (09:30, trong lời nhắn): Trả lời mục 5 dòng 4 đến 8: Tài khoản `admin@eshop.com`; bấm "Xóa" thì dòng biến mất ngay lập tức; "EShop Admin" không phải link; "Đăng xuất" giống các nút khác trên menu, chỉ khác màu đỏ; bấm F5 ở trang Danh mục thì về lại Dashboard. AI chép vào các ô tương ứng.
- SV (09:30): Cho phép AI đọc **riêng bảng môi trường** trong `Homeworks/HW03/checklist/00_survey.md` (ngoại lệ của quy tắc không đọc `checklist/`; AI chỉ trích bảng này, không mở phần còn lại). AI chép 5 dòng: Trình duyệt, OS, độ phân giải, zoom, scale. Không chép ngày giờ, tài khoản, việc reset vì đó là của lần chụp T1 (08/11/2026).
- AI: Ghi ba điểm trên vào bảng (mục 1, 2, 3.5, 3.6); điền cột "Đã chụp" theo file có trong `screenshots/` và lời SV; điền các bảng quan sát từ ảnh; đọc ngày giờ chụp và kích thước ảnh từ ảnh (bảng môi trường, có ghi chú). Ô ảnh không cho thấy để `?`, liệt kê ở mục 5 cho SV xem trực tiếp rồi điền.

---

## 1. Mục đích và cách điền

Bảng này ghi lại **những gì nhìn thấy được** trên 1 màn hình đã chọn (A-01 Quản lý Danh mục, Web Admin), làm đầu vào cho bước `oracle` và `ai-draft`. Đây chưa phải checklist và chưa đánh giá đúng hay sai.

- Chỉ ghi điều nhìn thấy bằng mắt trên trình duyệt. **Không** mở DevTools, **không** xem mã nguồn trang.
- Không nhập dữ liệu sai để gây lỗi (ví dụ không bấm lưu khi để trống tên danh mục). Chỉ chụp các trạng thái có sẵn: Chưa đăng nhập gõ thẳng URL; đã đăng nhập Admin, danh sách có dữ liệu sau reset; khung thêm danh mục đang mở (nếu là khung riêng); hộp xác nhận khi bấm xóa (nếu có); danh sách trống sau khi xóa hết.
- Chép **nguyên văn** chữ trên giao diện (nhãn, placeholder, chữ trên nút, thông báo), kể cả chữ tiếng Anh, viết hoa, dấu câu.
- Ô nào không có thì ghi `Không có`. Ô nào không chắc thì ghi `?` và nêu ở mục câu hỏi.
- Màu ghi bằng tên màu nhìn thấy (ví dụ "xanh dương", "đỏ", "xám"); không cần mã màu.
- Thử rê chuột và bấm vào các chữ có thể là link (logo, tên hoặc lời chào Admin, chữ khác màu); ghi lại chữ nào là link và dẫn tới đâu.
- Bảng nào thiếu dòng thì thêm dòng. Cột "Ảnh" ghi số ảnh ở mục 2.

Môi trường khi chụp:

| Mục | Giá trị |
|---|---|
| Trình duyệt và phiên bản | Google Chrome 156.0.8078.81 (SV cho lấy lại từ bảng môi trường của T1, `Homeworks/HW03/checklist/00_survey.md`) |
| OS | Windows 11 Version 26H2 (Build 26300.9818) (SV cho lấy lại từ bảng môi trường của T1, `Homeworks/HW03/checklist/00_survey.md`) |
| Độ phân giải màn hình / kích thước cửa sổ | Màn hình 2560 x 1440 (SV cho lấy lại từ bảng môi trường của T1, `Homeworks/HW03/checklist/00_survey.md`); ảnh chụp 2559 x 1438 px, cửa sổ trình duyệt phóng to hết màn hình (thấy taskbar ở dưới) |
| Mức zoom trình duyệt | 100% (SV cho lấy lại từ bảng môi trường của T1, `Homeworks/HW03/checklist/00_survey.md`) |
| Scale của OS | 150% (SV cho lấy lại từ bảng môi trường của T1, `Homeworks/HW03/checklist/00_survey.md`) |
| Ngày giờ chụp | 2026-11-11, từ 09:18 đến 09:20 (AI đọc từ đồng hồ trên taskbar: Ảnh 01 lúc 9:18 SA, ảnh 02 và 05 lúc 9:19 SA, ảnh 06 lúc 9:20 SA) |
| Tài khoản dùng khi đã đăng nhập | `admin@eshop.com` (SV ghi) |
| Đã reset dữ liệu trước khi chụp | Có (SV ghi) |
| Đã reset dữ liệu sau khi xóa hết danh mục (ảnh 06) | Có (SV ghi) |

---

## 2. Danh sách màn hình và ảnh cần chụp

| Mã | Màn hình | URL | Vai trò | FR liên quan trong SRS |
|---|---|---|---|---|
| A-01 | Quản lý Danh mục (Web Admin) | `http://localhost:5174/` (SV ghi: Mọi trang Admin dùng chung địa chỉ này, không có đường dẫn riêng cho Danh mục; thanh địa chỉ ở ảnh 01, 02, 05, 06 đều là `localhost:5174`) | Chính (màn hình duy nhất) | FR-14 (Thêm / Xem / Xóa danh mục, tên bắt buộc); FR-12 (chỉ tài khoản admin); FR-21 đến FR-24 (yêu cầu giao diện) |

Đường vào: Mở `http://localhost:5174`, đăng nhập Admin, chọn "Danh mục" ở menu trái. Trang đăng nhập Admin chỉ là đường vào, không khảo sát như một màn hình.

Ảnh lưu trong `screenshots/`, đặt tên `survey_<số>_<nội dung>.png`. Chụp **cả cửa sổ trình duyệt** (thấy tiêu đề tab và thanh địa chỉ). Trang dài thì chụp nhiều ảnh `_1`, `_2`.

Thứ tự chụp đề xuất: Đăng nhập trước để biết đường dẫn của trang (ảnh 02 đến 05), rồi đăng xuất và gõ thẳng đường dẫn đó (ảnh 01), xóa hết danh mục ở cuối cùng (ảnh 06) rồi reset dữ liệu.

| Số | Tên file đề xuất | Màn hình | Trạng thái | Đã chụp |
|---|---|---|---|---|
| 01 | `survey_01_category_logged_out.png` | A-01 | Chưa đăng nhập, gõ thẳng đường dẫn trang Danh mục vào thanh địa chỉ: Thấy gì (trang nào, đường dẫn trên thanh địa chỉ sau khi tải xong) | Có. Vì không có đường dẫn riêng, ảnh này là gõ `localhost:5174` khi chưa đăng nhập |
| 02 | `survey_02_category_list.png` | A-01 | Đã đăng nhập Admin, dữ liệu sau reset, vừa chọn "Danh mục" ở menu trái. Trang dài thì `_1`, `_2` | Có (một ảnh, trang không phải cuộn) |
| 03 | `survey_03_category_add_open.png` | A-01 | Khung hoặc form thêm danh mục đang mở, các ô còn trống. Nếu form thêm luôn hiện sẵn trên trang (đã thấy ở ảnh 02) thì ghi `Không có` ở cột "Đã chụp" | Không có (SV ghi: Form mở sẵn; ảnh 02 thấy ô nhập và nút "Thêm mới" ngay trên bảng) |
| 04 | `survey_04_category_delete_confirm.png` | A-01 | Bấm nút xóa ở một dòng: Hộp xác nhận đang mở (chụp **trước** khi bấm đồng ý hay hủy). Nếu không có hộp xác nhận mà danh mục bị xóa ngay thì ghi vào mục câu hỏi, chụp trang sau khi xóa | Không có (SV ghi: Không có hộp thoại xác nhận khi xóa). Trang sau khi xóa hết: Ảnh 06 |
| 05 | `survey_05_dashboard_sidebar.png` | Thành phần dùng chung | Đã đăng nhập Admin, đang ở một trang Admin khác (ví dụ trang đầu tiên sau khi đăng nhập), để so mục "Danh mục" trên menu trái khi **không** được chọn | Có (trang Dashboard) |
| 06 | `survey_06_category_empty.png` | A-01 | Đã xóa hết danh mục qua giao diện: Danh sách trống. Nếu bị chặn không xóa được (ví dụ danh mục còn sản phẩm) thì chụp trang lúc bị chặn, chép nguyên văn thông báo vào mục câu hỏi và không cố vượt qua. Reset dữ liệu sau ảnh này | Có. Ảnh cho thấy cả 3 danh mục đã bị xóa; không thấy thông báo chặn |

---

## 3. A-01 Quản lý Danh mục (đường dẫn: `http://localhost:5174/`, dùng chung cho mọi trang Admin)

### 3.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Chưa đăng nhập, gõ thẳng đường dẫn trang Danh mục: Thấy gì (trang nào, đường dẫn trên thanh địa chỉ) | Trang đăng nhập: Một khung trắng giữa màn hình, tiêu đề "Admin Login", ô "Email", ô "Password" (hai chữ này là placeholder trong ô), nút "Login" nền xanh dương chữ trắng. Không có menu trái. Thanh địa chỉ vẫn là `localhost:5174` | 01 |
| Đang ở trang Danh mục, bấm tải lại trang (F5): Thấy gì | Về lại trang Dashboard (SV ghi) | |
| Đã đăng nhập Admin, chọn "Danh mục" ở menu trái: Thấy gì | Menu trái nền xanh đen; bên phải là tiêu đề "Quản lý Danh mục", một hàng gồm ô nhập và nút "Thêm mới", dưới là bảng 3 danh mục. Thanh địa chỉ không đổi (`localhost:5174`) | 02 |
| Tiêu đề trên tab trình duyệt | `frontend-admin` (giống nhau ở cả 4 ảnh: Trang đăng nhập, Danh mục, Dashboard, Danh mục trống) | 01, 02, 05, 06 |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | Vùng nội dung: "Quản lý Danh mục" (chữ đen, đậm). Menu trái có "EShop Admin" (chữ trắng, đậm, cỡ gần bằng) | 02 |
| Các tiêu đề phụ (theo thứ tự từ trên xuống) | Không có | 02 |
| Trang chia thành những phần nào (menu trái, thanh trên cùng, khối form, khối danh sách), phần nào nằm trên / bên trái | Hai cột: Menu trái (nền xanh đen, chiếm hết chiều cao) và vùng nội dung bên phải (nền xám rất nhạt). Không có thanh trên cùng. Vùng nội dung từ trên xuống: Tiêu đề; hàng form (ô nhập rộng bên trái, nút "Thêm mới" bên phải); bảng danh mục (nền trắng) | 02 |
| Form thêm danh mục: Luôn hiện trên trang, hay chỉ hiện sau khi bấm một nút (hộp nổi, khung mở rộng, trang khác) | Luôn hiện trên trang (SV ghi; ảnh 02 và 06 đều thấy ô nhập và nút "Thêm mới") | 02, 06 |
| Có breadcrumb không | Không có | 02 |
| Chữ hiển thị sẵn khác (hướng dẫn, ghi chú, tổng số danh mục) | Không có | 02 |
| Có chữ tiếng Anh hoặc chữ không dấu nào không (nguyên văn) | Trên A-01: Tiêu đề tab "frontend-admin"; "EShop Admin"; mục menu "Dashboard"; tên cột "ID". Trên trang đăng nhập (ảnh 01): "Admin Login", "Email", "Password", "Login". Trên Dashboard (ảnh 05, ngoài A-01): Tiêu đề "Dashboard", "Tổng doanh thu (Delivered)" | 01, 02, 05 |

### 3.2 Ô nhập (form thêm danh mục)

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|
| 1 | Không có (không có chữ nhãn bên trên hay bên trái ô) | Không có | "Tên danh mục mới" | Ô chữ một dòng, viền xám nhạt, rộng gần hết vùng nội dung | Trống | Không có | 02 |

### 3.3 Nút và link (không tính menu trái và thanh trên cùng)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | "Thêm mới" | Nút | Xanh dương | Trắng | Bên phải ô nhập, cùng hàng | 02 |
| 2 | "Xóa" | Nút (nhỏ) | Đỏ | Trắng | Cột "Hành động" trên từng dòng của bảng | 02 |

Không có nút hủy hay đóng form (form luôn hiện sẵn).

### 3.4 Danh sách danh mục

| Mục | Quan sát | Ảnh |
|---|---|---|
| Dạng hiển thị (bảng, thẻ, danh sách) | Bảng nền trắng; dòng tiêu đề cột nền xám nhạt, chữ đậm; các dòng ngăn bằng đường kẻ mảnh | 02 |
| Tên các cột (nguyên văn, theo thứ tự) | "ID", "Tên Danh Mục", "Hành động" | 02 |
| Số dòng đang hiển thị (sau reset) | 3 | 02 |
| Thứ tự sắp xếp nhìn thấy được (theo tên, theo mã, theo thời gian tạo, không rõ) | Theo ID tăng dần (#1, #2, #3); với 3 dòng không phân biệt được với thứ tự tạo | 02 |
| Cách ghi mã, ngày, số lượng nếu có (chép một dòng làm ví dụ) | `#1` / "Điện thoại" / nút "Xóa". Các dòng: #1 Điện thoại, #2 Laptop, #3 Phụ kiện. Không có cột ngày hay số lượng sản phẩm | 02 |
| Có phân trang, ô tìm kiếm, bộ lọc không | Không có | 02 |
| Nút hoặc link trên từng dòng (nguyên văn) | "Xóa" (chỉ một nút, không có nút sửa) | 02 |
| Khi trống: Thông báo (nguyên văn), icon hoặc hình minh họa, nút gợi ý | Không có thông báo, không có icon hay hình minh họa, không có nút gợi ý. Chỉ còn dòng tiêu đề cột "ID", "Tên Danh Mục", "Hành động" | 06 |
| Khi trống: Tiêu đề, form thêm và các phần khác của trang còn hiện không | Còn hiện: Tiêu đề "Quản lý Danh mục", ô nhập "Tên danh mục mới", nút "Thêm mới", menu trái | 06 |

### 3.5 Hộp xác nhận khi xóa

| Mục | Quan sát | Ảnh |
|---|---|---|
| Có hộp xác nhận không; nếu không thì bấm xóa xảy ra gì (dòng biến mất ngay, có thông báo không) | Không có hộp xác nhận (SV ghi). Bấm "Xóa" thì dòng biến mất ngay lập tức, không có thông báo nào (SV ghi) | 06 |
| Dạng hộp: Hộp thoại của trình duyệt (khung xám ở trên cùng, có tên trang `localhost:5174`) hay hộp nằm trong trang | Không có | |
| Tiêu đề hộp (nguyên văn) | Không có | |
| Nội dung (nguyên văn); có nêu tên danh mục sắp xóa không | Không có | |
| Các nút theo thứ tự trái sang phải (nguyên văn), màu nền, màu chữ | Không có | |
| Có nút đóng (X) không | Không có | |
| Sau khi xóa thành công: Có thông báo không (nguyên văn), thông báo hiện ở đâu, tự tắt hay phải bấm đóng | Không có thông báo nào (SV ghi; khớp ảnh 06 không thấy thông báo) | 06 |

### 3.6 Khung thêm danh mục (chỉ điền nếu form thêm không luôn hiện sẵn trên trang)

Không áp dụng: Form thêm luôn hiện sẵn trên trang (mục 3.1).

| Mục | Quan sát | Ảnh |
|---|---|---|
| Dạng khung (hộp nổi che trang, khung mở rộng trong trang, trang riêng) | Không có | |
| Tiêu đề khung (nguyên văn) | Không có | |
| Có nút đóng (X) không | Không có | |
| Phần trang phía sau còn nhìn thấy không (có lớp phủ tối không) | Không có | |

---

## 4. Menu trái và thanh trên cùng (dùng chung cho các trang Admin)

Chỉ có trạng thái đã đăng nhập Admin; trạng thái chưa đăng nhập ghi ở mục 3.1 dòng đầu. Không có thanh trên cùng; bảng dưới chỉ ghi menu trái.

| Mục | Đang ở trang Danh mục | Đang ở trang Admin khác (ảnh 05) | Ảnh |
|---|---|---|---|
| Logo / tên hệ thống (nguyên văn); có phải link không, dẫn tới đâu | "EShop Admin", chữ trắng đậm, không có hình logo; không phải link (SV ghi) | Giống trang Danh mục | 02, 05 |
| Các mục menu trái theo thứ tự (nguyên văn), có icon không | "Dashboard", "Danh mục", "Sản phẩm", "Mã Giảm Giá", "Đơn hàng", "Người dùng", "Đăng xuất". Không có icon | Giống trang Danh mục | 02, 05 |
| Mục "Danh mục": Màu nền, màu chữ, đậm nhạt, có vạch hay icon đánh dấu không | Chữ xanh dương; nền giống phần còn lại của menu (không có nền riêng); độ đậm nhìn như các mục khác; không có vạch hay icon | Chữ trắng; nền, độ đậm như các mục khác | 02, 05 |
| Mục nào được làm nổi bật (khác chính nó ở trang kia) | "Danh mục" (chữ xanh dương thay vì trắng) | "Dashboard" (chữ xanh dương; ở trang Danh mục mục này chữ trắng) | 02, 05 |
| Tên / lời chào Admin (nguyên văn); có phải link không | Không có | Không có | 02, 05 |
| Nút đăng xuất (nguyên văn), màu, vị trí | "Đăng xuất", chữ đỏ, không có nền riêng, mục cuối của menu trái (dưới "Người dùng"); SV ghi: Giống các nút khác trên menu, chỉ khác màu đỏ | Giống trang Danh mục | 02, 05 |
| Footer | Không có | Không có | 02, 05 |

---

## 5. Câu hỏi mở và ghi chú của sinh viên

| # | Màn hình | Ghi chú / câu hỏi | Ảnh |
|---|---|---|---|
| 1 | A-01 | SV ghi: Mọi trang Admin dùng chung `http://localhost:5174/`, Danh mục không có đường dẫn riêng. Vì vậy trạng thái "chưa đăng nhập, gõ thẳng URL" là gõ `localhost:5174` (ảnh 01) | 01, 02, 05 |
| 2 | A-01 | SV ghi: Form thêm mở sẵn, không có ảnh 03 | 02 |
| 3 | A-01 | SV ghi: Không có hộp thoại xác nhận khi xóa, không có ảnh 04 | |
| 4 | Tất cả | **Chờ SV điền:** Bảng môi trường mục 1: Phiên bản Chrome, phiên bản Windows, độ phân giải màn hình, mức zoom, scale của OS, tài khoản đã dùng, đã reset trước khi chụp chưa, đã reset sau ảnh 06 chưa. **SV trả lời (09:30):** Tài khoản `admin@eshop.com`; các mục còn lại "lấy lại của T1". Phiên này không được đọc thư mục `checklist/` nên chưa chép được; còn chờ SV dán giá trị. **SV cho phép (09:30):** Đọc riêng bảng môi trường của T1; AI đã chép trình duyệt, OS, độ phân giải, zoom, scale. Còn chờ: Đã reset trước khi chụp và sau ảnh 06 chưa. **SV trả lời (09:33):** Đã reset cả trước khi chụp và sau ảnh 06 | |
| 5 | A-01 | **Chờ SV thử rồi ghi** (mục 3.5): Bấm "Xóa" một dòng thì dòng biến mất ngay hay sau một lúc; lúc đó có thông báo nào hiện lên không (chép nguyên văn, hiện ở đâu, tự tắt hay phải bấm đóng). Nếu thông báo tự tắt nhanh, chụp thêm `survey_07_category_after_delete.png` lúc thông báo đang hiện (nhớ reset sau khi thử). **SV trả lời (09:30):** Dòng biến mất ngay lập tức. **SV trả lời (09:31):** Không có thông báo nào sau khi xóa. Không cần ảnh 07 | |
| 6 | Menu trái | **Chờ SV thử rồi ghi** (mục 4): Rê chuột và bấm vào "EShop Admin": Có phải link không, dẫn tới đâu. **SV trả lời (09:30):** Không phải link | |
| 7 | Menu trái | **Chờ SV thử rồi ghi** (mục 4): "Đăng xuất" trông như nút hay link khi rê chuột (con trỏ, gạch chân, đổi màu nền). **SV trả lời (09:30):** Giống các nút khác trên menu, chỉ khác màu đỏ | |
| 8 | A-01 | **Chờ SV thử rồi ghi:** Đang ở trang Danh mục mà bấm tải lại trang (F5) thì vẫn ở Danh mục hay về trang khác (trang nào). Hỏi vì mọi trang dùng chung một địa chỉ. **SV trả lời (09:30):** Về lại Dashboard | |

---

## 6. Những gì không ghi ở bước này

Các điểm sau cần DevTools, bàn phím hoặc nhập dữ liệu sai nên **không** khảo sát ở đây. Chúng sẽ thành mục checklist ở bước `ai-draft` và được kiểm ở bước `exec`:

- Thuộc tính HTML của ô nhập, số thẻ `<h1>`, thuộc tính `alt`.
- Thứ tự focus khi bấm Tab.
- Thông báo lỗi khi nhập sai (ví dụ bấm lưu khi để trống tên danh mục, tên trùng, tên chỉ có khoảng trắng).
- Độ tương phản màu, kích thước chữ đo bằng công cụ.

---

## 7. Đối chiếu phần sinh viên đã điền với ảnh

SV chưa điền trực tiếp vào file; bảng dưới đối chiếu ba điểm SV ghi trong lời nhắn với ảnh.

| Vị trí | SV ghi | Sau đối chiếu | Căn cứ |
|---|---|---|---|
| Mục 2, cột URL | Danh mục không có đường dẫn, tất cả dùng chung `http://localhost:5174/` | Giữ nguyên. Khớp ảnh | Thanh địa chỉ ở ảnh 01 (đăng nhập), 02 (Danh mục), 05 (Dashboard), 06 (Danh mục trống) đều là `localhost:5174` |
| Mục 2 ảnh 03, mục 3.1, 3.6 | Form mở sẵn nên không có ảnh 03 | Giữ nguyên. Khớp ảnh | Ảnh 02 và 06 thấy ô "Tên danh mục mới" và nút "Thêm mới" ngay khi vào trang |
| Mục 2 ảnh 04, mục 3.5 | Không có hộp thoại xác nhận khi xóa nên không có ảnh 04 | Giữ nguyên. Ảnh không đối chiếu được điểm này (không có ảnh lúc vừa bấm "Xóa"); ảnh 06 chỉ cho thấy cả 3 danh mục đã bị xóa và không có thông báo chặn | Ảnh 06 |
| Mục 1, ngày giờ chụp | (SV chưa ghi) | AI ghi 2026-11-11, 09:18 đến 09:20 theo đồng hồ trong ảnh; SV xác nhận | Đồng hồ taskbar ở ảnh 01 (9:18 SA), 02 và 05 (9:19 SA), 06 (9:20 SA) |
