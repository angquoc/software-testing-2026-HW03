# Bước `survey`: Khảo sát màn hình

**Mục tiêu:** Ghi lại **những gì nhìn thấy được** trên các màn hình đã chọn, ở mọi trạng thái tạo được mà không cần nhập dữ liệu sai, làm đầu vào cho `oracle` và `ai-draft`. Đây chưa phải checklist và chưa đánh giá đúng sai.

**Đầu ra:** `ai_raw/T1_survey.md` (bản gốc, giữ nguyên), `00_survey.md` (điền rồi đối chiếu), `screenshots/survey_<số>_<nội dung>.png`.

## Hỏi trước khi viết

- Danh sách màn hình, vai trò (chính, phụ), URL hoặc đường vào (menu nào, vai trò đăng nhập nào).
- Các trạng thái tạo được của từng màn hình: Chưa đăng nhập và đã đăng nhập (kể cả gõ thẳng URL của trang cần đăng nhập khi chưa đăng nhập, và ngược lại); dữ liệu trống và có dữ liệu; danh sách có nhiều trạng thái bản ghi.
- Dữ liệu để tạo các trạng thái đó có sẵn không, hay sinh viên phải tự tạo (ví dụ đặt đơn rồi đổi trạng thái, hoặc chạy script tạo dữ liệu). AI không tự giả định dữ liệu có sẵn.
- Thành phần dùng chung giữa các màn hình (navbar, sidebar, footer): Khảo sát một lần ở mục riêng.

## Pha 1: AI viết bản gốc

Theo mẫu `assets/templates/survey.md`:

1. **Mục đích và cách điền:** Chỉ ghi điều nhìn thấy bằng mắt; không DevTools, không xem mã nguồn trang; không nhập dữ liệu sai; chép **nguyên văn** chữ trên giao diện; ô không có thì ghi `Không có`, không chắc thì ghi `?` và nêu ở mục câu hỏi; màu ghi bằng tên màu nhìn thấy.
2. **Bảng môi trường khi chụp:** Trình duyệt và phiên bản, OS, độ phân giải, zoom, scale của OS, ngày giờ chụp, tài khoản dùng, đã reset dữ liệu chưa.
3. **Danh sách màn hình** (mã, tên, URL, vai trò, FR liên quan) và **danh sách ảnh cần chụp** (số, tên file đề xuất, màn hình, trạng thái, cột "Đã chụp"). Nhắc chụp **cả cửa sổ trình duyệt** để thấy tiêu đề tab và thanh địa chỉ; trang dài thì cuộn và chụp nhiều ảnh.
4. **Bảng quan sát cho từng màn hình:**

   | Nhóm | Mục quan sát |
   |---|---|
   | Thông tin chung | Thấy gì khi vào ở từng trạng thái; tiêu đề tab; tiêu đề lớn nhất và tiêu đề phụ (nguyên văn); bố cục (khối, cột, tab, bên nào trái hay phải); breadcrumb; chữ hiển thị sẵn; chữ tiếng Anh hoặc không dấu |
   | Ô nhập (mỗi ô một dòng) | Nhãn; dấu `*`; placeholder; loại ô nhìn thấy được (ô chữ, nhiều dòng, dropdown, ô bị khóa, ô che ký tự); giá trị có sẵn; chữ hướng dẫn quanh ô; nút trong ô |
   | Nút và link | Chữ nguyên văn; nút hay link; màu nền, màu chữ; vị trí |
   | Bảng, danh sách | Tên cột theo thứ tự; số dòng; thứ tự sắp xếp nhìn thấy được; cách ghi mã, ngày, tiền (chép một ví dụ); phân trang; nút trên từng dòng; trạng thái trống (thông báo, icon, nút gợi ý) |
   | Thành phần dùng chung | Logo; các mục theo thứ tự; badge; lời chào; nút đăng xuất; mục nào được làm nổi bật ở từng trang; footer |

5. **Câu hỏi mở và ghi chú của sinh viên:** Bảng trống để sinh viên ghi điều chưa chắc.
6. **Những gì không ghi ở bước này:** Thuộc tính HTML, số thẻ `<h1>`, thứ tự Tab, thông báo lỗi khi nhập sai, độ tương phản đo bằng công cụ. Các điểm này thành mục checklist ở `ai-draft` và được kiểm ở `exec`.

Ghi `ai_raw/T1_survey.md`, chép thành `00_survey.md`, chạy `check_checklist.py same` và `format`.

**Dừng.** Báo sinh viên: Danh sách ảnh cần chụp; nhắc thử rê chuột và bấm vào các chữ có thể là link (lời chào, logo, chữ khác màu) vì ảnh tĩnh không cho thấy; commit message của bản AI. Hỏi sinh viên chọn cách điền bảng quan sát:

- (a) Sinh viên tự điền toàn bộ bảng trong `00_survey.md`;
- (b) Sinh viên điền bảng môi trường và cột "Đã chụp", rồi nhờ AI điền các bảng quan sát từ ảnh; những ô ảnh không cho thấy (tiêu đề tab nếu ảnh bị cắt, ô có che ký tự không, ô có khóa không, chữ nào là link) sinh viên xem trực tiếp rồi điền.

## Pha 2: Sinh viên

Sinh viên chụp ảnh vào `screenshots/`, điền phần của mình theo cách đã chọn. Nhắc commit phần sinh viên điền **trước** khi AI viết lại.

## Pha 3: AI kiểm ảnh, điền (nếu được nhờ) và đối chiếu

1. **Kiểm ảnh trước.** Đọc từng ảnh. Thiếu ảnh cho một trạng thái, ảnh bị cắt không thấy được mục cần đối chiếu, ảnh sai màn hình: Liệt kê cụ thể cần chụp thêm hoặc chụp lại, rồi **dừng**.
2. **Điền từ ảnh** (chỉ khi sinh viên chọn (b)): Ghi cột Ảnh cho mọi dòng. Ô ảnh không cho thấy thì để `?` và liệt kê cho sinh viên điền; không suy đoán.
3. **Đối chiếu** phần sinh viên ghi với ảnh: Sửa chỗ ghi nhầm (chữ sai, hoa thường, nhầm nút với link, bỏ sót chữ hiển thị sẵn); đối chiếu ngày giờ chụp với đồng hồ trong ảnh nếu thấy.
4. Ghi đầu file đoạn "Ai điền phần nào" và thêm mục **"Đối chiếu phần sinh viên đã điền với ảnh"** (cột: Vị trí, SV ghi, Sau đối chiếu, Căn cứ). Mỗi chỗ sửa một dòng.
5. Bổ sung sau khi đã commit (ví dụ sinh viên phát hiện thêm một chữ là link và chụp thêm ảnh): Thêm ảnh vào danh sách, sửa bảng, ghi một dòng vào mục câu hỏi của sinh viên và một dòng vào mục đối chiếu, ghi ngày bổ sung. Báo cho sinh viên các bước sau đã dùng thông tin cũ (ví dụ `01_oracle.md`) để cập nhật.
6. Chạy `format`, đưa commit message. **Dừng.**

Bước `survey` không có bảng "Thay đổi so với bản AI": Việc điền bảng là đầu vào theo quy trình, không phải sửa bản AI. Chỗ sửa nằm ở mục đối chiếu.

## Ghi chú cho bước sau

- Mọi điểm thấy trên giao diện mà đặc tả có thể không nói (hành vi khi chưa đăng nhập, định dạng ngày, thứ tự sắp xếp, link phụ, placeholder) được `oracle` liệt kê ở mục "Điểm ngoài SRS".
- Survey chỉ dùng để xét **áp dụng** (màn hình có thành phần đó không) và để biết tên thành phần; **không** dùng để suy ra kết quả mong đợi.
