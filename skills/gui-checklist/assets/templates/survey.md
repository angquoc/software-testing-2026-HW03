# T1 survey: Khảo sát màn hình

<!-- Đầu file theo ai_raw_header.md. Bản đối chiếu (pha 3) thêm đoạn "Ai điền phần nào" ngay dưới đầu file. -->

---

## 1. Mục đích và cách điền

Bảng này ghi lại **những gì nhìn thấy được** trên <số> màn hình đã chọn, làm đầu vào cho bước `oracle` và `ai-draft`. Đây chưa phải checklist và chưa đánh giá đúng hay sai.

- Chỉ ghi điều nhìn thấy bằng mắt trên trình duyệt. **Không** mở DevTools, **không** xem mã nguồn trang.
- Không nhập dữ liệu sai để gây lỗi. Chỉ chụp các trạng thái có sẵn: <liệt kê>.
- Chép **nguyên văn** chữ trên giao diện (nhãn, placeholder, chữ trên nút, thông báo), kể cả chữ tiếng Anh, viết hoa, dấu câu.
- Ô nào không có thì ghi `Không có`. Ô nào không chắc thì ghi `?` và nêu ở mục câu hỏi.
- Màu ghi bằng tên màu nhìn thấy (ví dụ "xanh dương", "đỏ", "xám"); không cần mã màu.
- Thử rê chuột và bấm vào các chữ có thể là link (lời chào, logo, chữ khác màu); ghi lại chữ nào là link và dẫn tới đâu.
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

---

## 2. Danh sách màn hình và ảnh cần chụp

| Mã | Màn hình | URL | Vai trò | FR liên quan trong SRS |
|---|---|---|---|---|

Ảnh lưu trong `screenshots/`, đặt tên `survey_<số>_<nội dung>.png`. Chụp **cả cửa sổ trình duyệt** (thấy tiêu đề tab và thanh địa chỉ). Trang dài thì chụp nhiều ảnh `_1`, `_2`.

| Số | Tên file đề xuất | Màn hình | Trạng thái | Đã chụp |
|---|---|---|---|---|

---

## 3. <Mã> <Tên màn hình> (`<URL>`)

### 3.1 Thông tin chung

| Mục | Quan sát | Ảnh |
|---|---|---|
| <Ở trạng thái X, mở URL thì thấy gì> | | |
| Tiêu đề trên tab trình duyệt | | |
| Tiêu đề lớn nhất trên trang (chữ nguyên văn) | | |
| Các tiêu đề phụ (theo thứ tự từ trên xuống) | | |
| Trang chia thành những phần nào (khối, cột, tab), phần nào nằm trên / bên trái | | |
| Có breadcrumb không | | |
| Chữ hiển thị sẵn khác (lời chào, hướng dẫn, ghi chú) | | |
| Có chữ tiếng Anh hoặc chữ không dấu nào không (nguyên văn) | | |

### 3.2 Ô nhập

| # | Nhãn (nguyên văn) | Có `*` cạnh nhãn | Placeholder | Loại ô nhìn thấy được | Giá trị có sẵn | Chữ hướng dẫn quanh ô | Ảnh |
|---|---|---|---|---|---|---|---|

### 3.3 Nút và link (không tính thành phần dùng chung)

| # | Chữ trên nút / link (nguyên văn) | Nút hay link | Màu nền | Màu chữ | Vị trí | Ảnh |
|---|---|---|---|---|---|---|

### 3.4 <Bảng / danh sách, nếu có>

| Mục | Quan sát | Ảnh |
|---|---|---|
| Dạng hiển thị (bảng, thẻ) | | |
| Tên các cột (nguyên văn, theo thứ tự) | | |
| Số dòng đang hiển thị | | |
| Thứ tự sắp xếp nhìn thấy được | | |
| Cách ghi mã, ngày, tiền (chép một ví dụ) | | |
| Có phân trang không | | |
| Nút hoặc link trên từng dòng | | |
| Khi trống: Thông báo (nguyên văn), icon, nút gợi ý | | |

<!-- Lặp mục 3 cho từng màn hình -->

---

## <n>. <Thành phần dùng chung> (dùng chung cho các màn hình)

| Mục | Chưa đăng nhập | Đã đăng nhập | Ảnh |
|---|---|---|---|
| Logo / tên cửa hàng | | | |
| Các mục theo thứ tự (nguyên văn) | | | |
| Badge (số lượng) | | | |
| Tên / lời chào người dùng; có phải link không | | | |
| Nút đăng xuất (nguyên văn) | | | |
| Đang ở <trang>: Mục nào được làm nổi bật | | | |
| Footer | | | |

---

## <n+1>. Câu hỏi mở và ghi chú của sinh viên

| # | Màn hình | Ghi chú / câu hỏi | Ảnh |
|---|---|---|---|

---

## <n+2>. Những gì không ghi ở bước này

Các điểm sau cần DevTools, bàn phím hoặc nhập dữ liệu sai nên **không** khảo sát ở đây. Chúng sẽ thành mục checklist ở bước `ai-draft` và được kiểm ở bước `exec`:

- Thuộc tính HTML của ô nhập, số thẻ `<h1>`, thuộc tính `alt`.
- Thứ tự focus khi bấm Tab.
- Thông báo lỗi khi nhập sai.
- Độ tương phản màu, kích thước chữ đo bằng công cụ.

<!-- Pha 3 thêm: -->

## <n+3>. Đối chiếu phần sinh viên đã điền với ảnh

| Vị trí | SV ghi | Sau đối chiếu | Căn cứ |
|---|---|---|---|
