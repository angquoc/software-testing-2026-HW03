# DEMO survey: Khảo sát màn hình (bản AI)

- Bước: `[demo][survey]`, pha 1 (bảng quan sát còn trống)
- Thời gian tạo: 2026-11-11 09:15 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `Homeworks/eshop-sut/README.md` mục 1 (URL Web Admin, tài khoản mặc định), mục 6 (FR-12, FR-14), mục 8 (FR-21 đến FR-24); quyết định của sinh viên trước khi viết: Mã màn hình `A-01`; chụp 4 nhóm trạng thái (có dữ liệu sau reset, danh sách trống, chưa đăng nhập gõ thẳng URL, khung thêm và hộp xác nhận xóa); danh sách trống tạo bằng cách xóa hết danh mục qua giao diện rồi reset

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
| Trình duyệt và phiên bản | |
| OS | |
| Độ phân giải màn hình / kích thước cửa sổ | |
| Mức zoom trình duyệt | |
| Scale của OS | |
| Ngày giờ chụp | |
| Tài khoản dùng khi đã đăng nhập | |
| Đã reset dữ liệu trước khi chụp | |
| Đã reset dữ liệu sau khi xóa hết danh mục (ảnh 06) | |

---

## 2. Danh sách màn hình và ảnh cần chụp

| Mã | Màn hình | URL | Vai trò | FR liên quan trong SRS |
|---|---|---|---|---|
| A-01 | Quản lý Danh mục (Web Admin) | `http://localhost:5174` + đường dẫn khi chọn "Danh mục" ở menu trái: `?` (SV ghi đường dẫn thấy trên thanh địa chỉ) | Chính (màn hình duy nhất) | FR-14 (Thêm / Xem / Xóa danh mục, tên bắt buộc); FR-12 (chỉ tài khoản admin); FR-21 đến FR-24 (yêu cầu giao diện) |

Đường vào: Mở `http://localhost:5174`, đăng nhập Admin, chọn "Danh mục" ở menu trái. Trang đăng nhập Admin chỉ là đường vào, không khảo sát như một màn hình.

Ảnh lưu trong `screenshots/`, đặt tên `survey_<số>_<nội dung>.png`. Chụp **cả cửa sổ trình duyệt** (thấy tiêu đề tab và thanh địa chỉ). Trang dài thì chụp nhiều ảnh `_1`, `_2`.

Thứ tự chụp đề xuất: Đăng nhập trước để biết đường dẫn của trang (ảnh 02 đến 05), rồi đăng xuất và gõ thẳng đường dẫn đó (ảnh 01), xóa hết danh mục ở cuối cùng (ảnh 06) rồi reset dữ liệu.

| Số | Tên file đề xuất | Màn hình | Trạng thái | Đã chụp |
|---|---|---|---|---|
| 01 | `survey_01_category_logged_out.png` | A-01 | Chưa đăng nhập, gõ thẳng đường dẫn trang Danh mục vào thanh địa chỉ: Thấy gì (trang nào, đường dẫn trên thanh địa chỉ sau khi tải xong) | |
| 02 | `survey_02_category_list.png` | A-01 | Đã đăng nhập Admin, dữ liệu sau reset, vừa chọn "Danh mục" ở menu trái. Trang dài thì `_1`, `_2` | |
| 03 | `survey_03_category_add_open.png` | A-01 | Khung hoặc form thêm danh mục đang mở, các ô còn trống. Nếu form thêm luôn hiện sẵn trên trang (đã thấy ở ảnh 02) thì ghi `Không có` ở cột "Đã chụp" | |
| 04 | `survey_04_category_delete_confirm.png` | A-01 | Bấm nút xóa ở một dòng: Hộp xác nhận đang mở (chụp **trước** khi bấm đồng ý hay hủy). Nếu không có hộp xác nhận mà danh mục bị xóa ngay thì ghi vào mục câu hỏi, chụp trang sau khi xóa | |
| 05 | `survey_05_dashboard_sidebar.png` | Thành phần dùng chung | Đã đăng nhập Admin, đang ở một trang Admin khác (ví dụ trang đầu tiên sau khi đăng nhập), để so mục "Danh mục" trên menu trái khi **không** được chọn | |
| 06 | `survey_06_category_empty.png` | A-01 | Đã xóa hết danh mục qua giao diện: Danh sách trống. Nếu bị chặn không xóa được (ví dụ danh mục còn sản phẩm) thì chụp trang lúc bị chặn, chép nguyên văn thông báo vào mục câu hỏi và không cố vượt qua. Reset dữ liệu sau ảnh này | |

---

## 3. A-01 Quản lý Danh mục (đường dẫn: `?`)

### 3.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| Chưa đăng nhập, gõ thẳng đường dẫn trang Danh mục: Thấy gì (trang nào, đường dẫn trên thanh địa chỉ) | | |
| Đã đăng nhập Admin, chọn "Danh mục" ở menu trái: Thấy gì | | |
| Tiêu đề trên tab trình duyệt | | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | | |
| Các tiêu đề phụ (theo thứ tự từ trên xuống) | | |
| Trang chia thành những phần nào (menu trái, thanh trên cùng, khối form, khối danh sách), phần nào nằm trên / bên trái | | |
| Form thêm danh mục: Luôn hiện trên trang, hay chỉ hiện sau khi bấm một nút (hộp nổi, khung mở rộng, trang khác) | | |
| Có breadcrumb không | | |
| Chữ hiển thị sẵn khác (hướng dẫn, ghi chú, tổng số danh mục) | | |
| Có chữ tiếng Anh hoặc chữ không dấu nào không (nguyên văn) | | |

### 3.2 Ô nhập (form thêm danh mục)

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |

### 3.3 Nút và link (không tính menu trái và thanh trên cùng)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

Gợi ý những nút có thể có (SV ghi nút thật sự thấy, bỏ dòng không có): Nút mở form thêm; nút lưu trong form; nút hủy hoặc đóng form; nút xóa trên từng dòng; nút khác trên từng dòng (nếu có).

### 3.4 Danh sách danh mục

| Mục | Quan sát | Ảnh |
|---|---|---|
| Dạng hiển thị (bảng, thẻ, danh sách) | | |
| Tên các cột (nguyên văn, theo thứ tự) | | |
| Số dòng đang hiển thị (sau reset) | | |
| Thứ tự sắp xếp nhìn thấy được (theo tên, theo mã, theo thời gian tạo, không rõ) | | |
| Cách ghi mã, ngày, số lượng nếu có (chép một dòng làm ví dụ) | | |
| Có phân trang, ô tìm kiếm, bộ lọc không | | |
| Nút hoặc link trên từng dòng (nguyên văn) | | |
| Khi trống: Thông báo (nguyên văn), icon hoặc hình minh họa, nút gợi ý | | |
| Khi trống: Tiêu đề, form thêm và các phần khác của trang còn hiện không | | |

### 3.5 Hộp xác nhận khi xóa

| Mục | Quan sát | Ảnh |
|---|---|---|
| Có hộp xác nhận không; nếu không thì bấm xóa xảy ra gì (dòng biến mất ngay, có thông báo không) | | |
| Dạng hộp: Hộp thoại của trình duyệt (khung xám ở trên cùng, có tên trang `localhost:5174`) hay hộp nằm trong trang | | |
| Tiêu đề hộp (nguyên văn) | | |
| Nội dung (nguyên văn); có nêu tên danh mục sắp xóa không | | |
| Các nút theo thứ tự trái sang phải (nguyên văn), màu nền, màu chữ | | |
| Có nút đóng (X) không | | |
| Sau khi xóa thành công: Có thông báo không (nguyên văn), thông báo hiện ở đâu, tự tắt hay phải bấm đóng | | |

### 3.6 Khung thêm danh mục (chỉ điền nếu form thêm không luôn hiện sẵn trên trang)

| Mục | Quan sát | Ảnh |
|---|---|---|
| Dạng khung (hộp nổi che trang, khung mở rộng trong trang, trang riêng) | | |
| Tiêu đề khung (nguyên văn) | | |
| Có nút đóng (X) không | | |
| Phần trang phía sau còn nhìn thấy không (có lớp phủ tối không) | | |

---

## 4. Menu trái và thanh trên cùng (dùng chung cho các trang Admin)

Chỉ có trạng thái đã đăng nhập Admin; trạng thái chưa đăng nhập ghi ở mục 3.1 dòng đầu.

| Mục | Đang ở trang Danh mục | Đang ở trang Admin khác (ảnh 05) | Ảnh |
|---|---|---|---|
| Logo / tên hệ thống (nguyên văn); có phải link không, dẫn tới đâu | | | |
| Các mục menu trái theo thứ tự (nguyên văn), có icon không | | | |
| Mục "Danh mục": Màu nền, màu chữ, đậm nhạt, có vạch hay icon đánh dấu không | | | |
| Mục nào được làm nổi bật (khác chính nó ở trang kia) | | | |
| Tên / lời chào Admin (nguyên văn); có phải link không | | | |
| Nút đăng xuất (nguyên văn), màu, vị trí | | | |
| Footer | | | |

---

## 5. Câu hỏi mở và ghi chú của sinh viên

| # | Màn hình | Ghi chú / câu hỏi | Ảnh |
|---|---|---|---|
| 1 | | | |

---

## 6. Những gì không ghi ở bước này

Các điểm sau cần DevTools, bàn phím hoặc nhập dữ liệu sai nên **không** khảo sát ở đây. Chúng sẽ thành mục checklist ở bước `ai-draft` và được kiểm ở bước `exec`:

- Thuộc tính HTML của ô nhập, số thẻ `<h1>`, thuộc tính `alt`.
- Thứ tự focus khi bấm Tab.
- Thông báo lỗi khi nhập sai (ví dụ bấm lưu khi để trống tên danh mục, tên trùng, tên chỉ có khoảng trắng).
- Độ tương phản màu, kích thước chữ đo bằng công cụ.
