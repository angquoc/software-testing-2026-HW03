# T1 oracle: Yêu cầu giao diện trích từ SRS

Bước: `[T1][oracle]`, bản AI
Tạo lúc: 2026-11-09 01:53

---

## 1. Phạm vi và cách đọc

Nguồn trích: `Homeworks/eshop-sut/README.md` (SRS EShop, phiên bản 2.0, cập nhật 2026-05-14). Màn hình trong phạm vi:

| Mã | Màn hình | URL |
|---|---|---|
| W-06 | Hồ sơ cá nhân & lịch sử đơn hàng (màn hình chính) | `/profile` |
| W-04 | Đăng ký (màn hình phụ) | `/register` |
| W-03 | Đăng nhập (màn hình phụ) | `/login` |

Navbar và footer xuất hiện trên cả 3 màn hình nên yêu cầu về navbar được tính là áp dụng cho cả 3 (trạng thái chưa đăng nhập, đã đăng nhập hoặc cả hai, ghi rõ ở từng dòng).

Cách trích:

- Mỗi gạch đầu dòng của SRS là **một** yêu cầu, giữ **nguyên văn**, kể cả chữ in đậm, ký hiệu code và dấu câu của SRS (một số câu SRS có dấu gạch dài, được giữ nguyên vì là trích dẫn). Một gạch đầu dòng có nhiều ý thì vẫn giữ một mã; bước `ai-draft` sẽ tách thành nhiều mục checklist.
- Lấy toàn bộ mục 8 (FR-21 đến FR-24), toàn bộ các FR gắn trực tiếp với 3 màn hình (FR-01, FR-02, FR-04, FR-11), các ý của FR-10 liên quan tới thao tác của người dùng trên lịch sử đơn, và các ý giao diện ở FR khác có thể bị hiểu là áp dụng (để ghi rõ vì sao không áp dụng).
- Cột "Áp dụng" nhận một trong bốn giá trị: `Áp dụng`, `Áp dụng một phần` (ghi rõ phần nào), `Không áp dụng` (ghi lý do), `⏳ SV quyết định` (xem mục 4).
- IA theo WORKFLOW mục 1.1: IA-01 Tiêu chuẩn giao diện chung, IA-02 Form, IA-03 Điều hướng, IA-04 Phản hồi và trạng thái. Với ý nằm ngoài mục 8, IA là đề xuất của AI dựa trên nội dung ý.
- Bảng này chỉ trích yêu cầu và xét phạm vi áp dụng; **không** đánh giá giao diện hiện tại đạt hay không đạt. `00_survey.md` chỉ được dùng để xét áp dụng (ví dụ màn hình có ảnh sản phẩm hay không).

---

## 2. Bảng yêu cầu

### 2.1 FR-01: Đăng ký tài khoản

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R01 | Người dùng phải cung cấp: **Họ Tên**, **Email**, **Mật khẩu**. | IA-02 | W-04 | Áp dụng | Xác định các trường của form đăng ký; liên quan UI-R36 (dấu `*` cho trường bắt buộc) |
| UI-R02 | Email phải có định dạng hợp lệ (`user@domain.com`) và là duy nhất trong hệ thống. | IA-02 | W-04 | Áp dụng | Phần nhìn thấy được: Form từ chối email sai định dạng hoặc đã tồn tại và báo cho người dùng |
| UI-R03 | **Yêu cầu mật khẩu mạnh**: Tối thiểu 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số và 1 ký tự đặc biệt (`@`, `$`, `!`, `%`, `*`, `?`, `&`). | IA-02 | W-04 | Áp dụng | Phần nhìn thấy được: Form từ chối mật khẩu yếu và báo cho người dùng |
| UI-R04 | Phải có trường **Xác nhận mật khẩu** — hệ thống từ chối nếu hai trường không khớp. | IA-02 | W-04 | Áp dụng | |
| UI-R05 | Sau khi đăng ký thành công, người dùng được chuyển tới trang Đăng nhập. | IA-03 | W-04 (chuyển tới W-03) | Áp dụng | |

### 2.2 FR-02: Đăng nhập & Khóa tài khoản

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R06 | Người dùng nhập Email và Mật khẩu. | IA-02 | W-03 | Áp dụng | Xác định các trường của form đăng nhập |
| UI-R07 | Sau mỗi lần đăng nhập sai, hệ thống tăng bộ đếm lên **đúng 1 đơn vị**. | | | Không áp dụng | Bộ đếm nằm ở phía hệ thống, không hiển thị trên giao diện. Hệ quả nhìn thấy được (khóa sau 3 lần) nằm ở UI-R08 |
| UI-R08 | Nếu đăng nhập sai từ **3 lần trở lên** liên tiếp, tài khoản bị tạm khóa **30 giây** (môi trường demo). Hệ thống trả về thông báo lỗi phù hợp; không để lộ chi tiết nguyên nhân. | IA-04 | W-03 | Áp dụng một phần | Áp dụng phần thông báo lỗi hiển thị cho người dùng. Cơ chế khóa là chức năng, không phải giao diện |
| UI-R09 | Đăng nhập thành công trả về JWT Token. Token được lưu phía client và gửi kèm tất cả các yêu cầu có xác thực qua header `Authorization: Bearer <token>`. | | | Không áp dụng | Cơ chế xác thực, không phải yêu cầu giao diện |
| UI-R10 | Trường email phải dùng `type="email"` (có validate HTML5 format). | IA-02 | W-03 | Áp dụng | Trùng ý với UI-R37 (FR-22); ở bước `ai-draft` chỉ tạo một mục |

### 2.3 FR-03: Quên mật khẩu & Đặt lại mật khẩu

Chỉ trích các ý giao diện. Các ý còn lại của FR-03 (sinh OTP, OTP chỉ hợp lệ cho email đã yêu cầu, điều kiện mật khẩu mới) là chức năng của màn hình Quên mật khẩu, không thuộc phạm vi.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R11 | Giao diện phải hiển thị **chỉ báo bước (Step Indicator)** — ví dụ: "Bước 1 / 2". | | | Không áp dụng | Thuộc màn hình Quên mật khẩu, ngoài phạm vi. W-03 chỉ có link "Quên mật khẩu?" dẫn tới màn hình đó |
| UI-R12 | Có nút **Quay lại đăng nhập**. | | | Không áp dụng | Như UI-R11 |

### 2.4 FR-04: Quản lý hồ sơ cá nhân

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R13 | Người dùng đã đăng nhập có thể cập nhật: **Họ Tên**, **Số điện thoại**, **Địa chỉ giao hàng mặc định**. | IA-02 | W-06 | Áp dụng | Xác định các trường sửa được của form hồ sơ |
| UI-R14 | **Số điện thoại hợp lệ**: bắt đầu bằng số `0`, từ 10–11 chữ số. | IA-02 | W-06 | Áp dụng | Phần nhìn thấy được: Form từ chối số điện thoại không hợp lệ và báo cho người dùng |
| UI-R15 | Email không được phép thay đổi qua giao diện. | IA-02 | W-06 | Áp dụng | |
| UI-R16 | Người dùng chỉ có thể cập nhật hồ sơ của chính mình; không thể tự thay đổi thuộc tính `role`. | IA-02 | W-06 | ⏳ SV quyết định | Phần nhìn thấy được: Form không có trường để đổi `role`. Phần chặn ở phía hệ thống thuộc SEC-06 (UI-R50). Xem câu hỏi CH-05 |

### 2.5 FR-05, FR-06, FR-07: Các ý giao diện của màn hình khác

Trích để ghi rõ lý do không áp dụng, tránh bị dùng nhầm làm oracle cho 3 màn hình đã chọn. Riêng UI-R20 là quy định chung cho mọi trang.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R17 | Khi đang tải dữ liệu phải hiển thị trạng thái **loading**. | | | Không áp dụng | Thuộc FR-05 (trang chủ, danh sách sản phẩm). Xem câu hỏi CH-07 |
| UI-R18 | Khi không có kết quả tìm kiếm phải hiển thị thông báo **empty state** phù hợp. | | | Không áp dụng | Thuộc trang chủ (tìm kiếm). Empty state chung đã có ở UI-R47 (FR-24) |
| UI-R19 | Trang chủ chỉ có **đúng một thẻ `<h1>`**. | | | Không áp dụng | Chỉ nói về trang chủ. Quy định cho mọi trang nằm ở UI-R20 và UI-R34 |
| UI-R20 | Mỗi trang chỉ có 1 `<h1>` duy nhất. | IA-01 | W-06, W-04, W-03 | Áp dụng | Trùng ý với UI-R34 (FR-21); ở bước `ai-draft` chỉ tạo một mục |
| UI-R21 | Nút **Thêm vào giỏ hàng** — sau khi bấm hiển thị phản hồi trực quan (toast notification hoặc badge cập nhật). | | | Không áp dụng | Thuộc FR-06 (chi tiết sản phẩm); 3 màn hình không có nút này. Trùng ý với UI-R45 |
| UI-R22 | Nút **Xóa sản phẩm** phải có dialog xác nhận trước khi thực hiện. | | | Không áp dụng | Thuộc FR-07 (giỏ hàng). Trùng ý với UI-R46 |
| UI-R23 | Giỏ hàng trống phải có hình minh họa và thông báo rõ ràng. | | | Không áp dụng | Thuộc FR-07 (giỏ hàng) |

### 2.6 FR-10: Trạng thái đơn hàng (phần người dùng thao tác trên lịch sử đơn)

Theo `00_survey.md`, người dùng hủy đơn bằng nút "Hủy đơn" trong bảng lịch sử đơn ở W-06, nên các ý về quyền hủy của User có phần nhìn thấy được trên W-06. Các ý chỉ dành cho Admin không trích.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R24 | Đơn hàng có **5 trạng thái** và phải tuân theo sơ đồ chuyển đổi sau: (sơ đồ) `pending` và `confirmed` có nhánh **[User/Admin hủy]** sang `canceled`. | IA-04 | W-06 | ⏳ SV quyết định | Câu đầu là nguyên văn; phần sau là diễn giải từ sơ đồ (SRS không có câu chữ cho ý này). FR-20 nói rõ hơn cho Mobile: "chỉ được hủy khi `pending` hoặc `confirmed`". Danh sách 5 trạng thái (`pending`, `confirmed`, `shipping`, `delivered`, `canceled`) cũng là căn cứ cho UI-R30. Xem CH-05 |
| UI-R25 | Trạng thái `delivered` và `canceled` là **trạng thái kết thúc** — không được phép chuyển sang bất kỳ trạng thái nào khác. | IA-04 | W-06 | ⏳ SV quyết định | Phần nhìn thấy được: Không có thao tác hủy cho đơn ở hai trạng thái này. Xem CH-05 |
| UI-R26 | Khi đơn hàng đã ở trạng thái `shipping`, **User không được phép tự hủy** — chỉ Admin mới có thể thao tác. | IA-04 | W-06 | ⏳ SV quyết định | Phần nhìn thấy được: Người dùng không hủy được đơn đang giao trên W-06. Xem CH-05 |
| UI-R27 | Mọi chuyển đổi không hợp lệ phải trả về lỗi với thông báo phù hợp. | IA-04 | W-06 | ⏳ SV quyết định | Phần nhìn thấy được: Thông báo hiển thị khi thao tác hủy không hợp lệ. Xem CH-05 |

### 2.7 FR-11: Xem lịch sử đơn hàng (User)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R28 | Người dùng chỉ xem được đơn hàng của chính mình. | IA-04 | W-06 | ⏳ SV quyết định | Yêu cầu phân quyền dữ liệu; phần nhìn thấy được là danh sách đơn trên W-06 chỉ gồm đơn của tài khoản đang đăng nhập. Xem CH-05 |
| UI-R29 | Hiển thị: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái hiện tại. | IA-01 | W-06 | Áp dụng | SRS không quy định định dạng ngày, thứ tự cột hay thứ tự sắp xếp (xem mục 5) |
| UI-R30 | Trạng thái phải được dịch sang tiếng Việt rõ ràng và phân biệt màu sắc. | IA-01, IA-04 | W-06 | Áp dụng | Gồm 2 ý: Chữ tiếng Việt (IA-01, liên quan UI-R31) và mỗi trạng thái một màu (IA-04). SRS không cho bản dịch cụ thể hay màu cụ thể cho từng trạng thái (xem CH-06) |

### 2.8 FR-21: Tiêu chuẩn giao diện chung (IA-01)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R31 | **Nhất quán ngôn ngữ**: Toàn bộ giao diện dùng tiếng Việt (trừ thuật ngữ kỹ thuật chuẩn). | IA-01 | W-06, W-04, W-03 | Áp dụng | SRS không liệt kê "thuật ngữ kỹ thuật chuẩn" gồm những từ nào (xem CH-03) |
| UI-R32 | **Nhất quán màu sắc**: Các nút hành động tích cực (Submit, Mua hàng) dùng màu xanh dương. Các nút nguy hiểm/hủy bỏ dùng màu đỏ. | IA-01 | W-06, W-04, W-03 | Áp dụng | Gồm 2 ý (nút tích cực, nút nguy hiểm/hủy bỏ). Cần chốt mỗi nút trên 3 màn hình thuộc nhóm nào (xem CH-02) |
| UI-R33 | **Nhất quán đơn vị tiền**: Luôn dùng ký hiệu `₫` với định dạng phân cách hàng nghìn. | IA-01 | W-06 | Áp dụng | Chỉ W-06 có số tiền (cột Tổng tiền). SRS không nói dấu phân cách là dấu chấm hay dấu phẩy, và `₫` đặt trước hay sau số (xem CH-04) |
| UI-R34 | **Tiêu đề trang**: Mỗi trang có đúng 1 thẻ `<h1>` mô tả nội dung trang. | IA-01 | W-06, W-04, W-03 | Áp dụng | Gồm 2 ý: Đúng 1 thẻ `<h1>`, và nội dung `<h1>` mô tả đúng trang. Ý thứ nhất cần DevTools ở bước `exec` |
| UI-R35 | **Tab Order**: Thứ tự focus theo Tab phải đi từ trên xuống dưới, trái sang phải. | IA-01 | W-06, W-04, W-03 | Áp dụng | W-06 có hai khối đặt cạnh nhau (form hồ sơ bên trái, lịch sử đơn bên phải); SRS không nói thứ tự giữa hai khối (xem GĐ-03) |

### 2.9 FR-22: Form Requirements (IA-02)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R36 | Tất cả trường bắt buộc phải có ký hiệu `*` bên cạnh nhãn. | IA-02 | W-06, W-04, W-03 | Áp dụng | Trường bắt buộc ở W-04 theo UI-R01, ở W-03 theo UI-R06. Ở W-06, SRS không nói trường nào bắt buộc (xem CH-01) |
| UI-R37 | Trường Email phải dùng `type="email"`. | IA-02 | W-04, W-03; W-06 ⏳ | Áp dụng | Ở W-06, ô Email bị khóa, không nhập được (theo `00_survey.md`); có áp dụng hay không chờ SV quyết định (xem CH-08). Trùng ý với UI-R10. Cần DevTools ở bước `exec` |
| UI-R38 | Trường Mật khẩu phải dùng `type="password"` (không hiển thị rõ). | IA-02 | W-04, W-03 | Áp dụng | W-06 không có trường mật khẩu. Phần "không hiển thị rõ" kiểm bằng mắt; phần `type` cần DevTools |
| UI-R39 | Thông báo lỗi phải xuất hiện **trên** nút submit, không phải bên dưới. | IA-02, IA-04 | W-06, W-04, W-03 | Áp dụng | Cả 3 màn hình có form với nút gửi ("Cập nhật", "Đăng Ký", "Sign In") |
| UI-R40 | Các form có từ 2 bước trở lên phải có **Step Indicator** rõ ràng. | IA-02 | | Không áp dụng | Cả 3 form trong phạm vi đều chỉ có 1 bước (theo `00_survey.md`). Form nhiều bước duy nhất trong SRS là Quên mật khẩu (FR-03), ngoài phạm vi |

### 2.10 FR-23: Navigation Requirements (IA-03)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R41 | Thanh điều hướng (Navbar) phải **highlight** trang đang được chọn. | IA-03 | W-04, W-03; W-06 ⏳ | Áp dụng | Navbar có mục "Đăng nhập" và "Đăng ký" (khi chưa đăng nhập) nhưng không có mục riêng cho `/profile` (theo `00_survey.md`). Xem CH-09 |
| UI-R42 | Link "Giỏ hàng" phải hiển thị **badge số lượng** sản phẩm trong giỏ. | IA-03 | W-06, W-04, W-03 (navbar) | Áp dụng | Link "Giỏ hàng" có trên navbar của cả 3 màn hình. Muốn kiểm phải có sản phẩm trong giỏ khi chạy (xem GĐ-04) |
| UI-R43 | Nút Đăng xuất phải nhãn là "Đăng xuất" (không phải "Thoát"). | IA-03 | W-06, W-04, W-03 (navbar, đã đăng nhập) | Áp dụng | Nút chỉ có khi đã đăng nhập |
| UI-R44 | Breadcrumb bắt buộc có ở các trang con (Giỏ hàng, Thanh toán, Chi tiết sản phẩm). | IA-03 | | Không áp dụng | SRS liệt kê đúng 3 trang con, không có Hồ sơ, Đăng ký, Đăng nhập (xem GĐ-01) |

### 2.11 FR-24: Feedback & State Requirements (IA-04)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R45 | Sau khi bấm "Thêm vào giỏ", phải có phản hồi trực quan (toast/badge). | IA-04 | | Không áp dụng | 3 màn hình không có nút "Thêm vào giỏ" |
| UI-R46 | Khi xóa item khỏi giỏ phải có dialog xác nhận. | IA-04 | | Không áp dụng | 3 màn hình không có thao tác xóa item khỏi giỏ. Nút "Hủy đơn" ở W-06 không phải xóa item khỏi giỏ (xem CH-10) |
| UI-R47 | Trang trống (Empty State) phải có icon/hình minh họa và message thân thiện. | IA-04 | W-06 | Áp dụng | Trạng thái lịch sử đơn trống. Gồm 2 ý: Có icon/hình minh họa, có message thân thiện. "Thân thiện" chưa đo được, cần chốt tiêu chí ở bước `review` |
| UI-R48 | Tất cả ảnh sản phẩm phải có thuộc tính `alt` mô tả nội dung ảnh (không để rỗng). | IA-04 | | Không áp dụng | 3 màn hình không hiển thị ảnh sản phẩm (theo `00_survey.md`; bảng lịch sử đơn không có ảnh) |

### 2.12 Mục 9: Yêu cầu bảo mật có phần hiển thị trên giao diện

SRS ghi mục 9 là "Tham khảo". Chỉ trích hai ý có phần nhìn thấy được trên W-06.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R49 | SEC-04: Mọi dữ liệu từ user nhập vào khi hiển thị trên UI phải được escape đúng cách, không dùng `innerHTML` trực tiếp. | | W-06 (và lời chào trên navbar) | ⏳ SV quyết định | Họ Tên và Địa chỉ do người dùng nhập được hiển thị lại trên W-06 và trong "Chào, <Họ Tên>" trên navbar. Là yêu cầu bảo mật, không thuộc 4 IA. Xem CH-05 |
| UI-R50 | SEC-06: API cập nhật hồ sơ không được cho phép thay đổi trường `role` từ client. | | W-06 | ⏳ SV quyết định | Trùng ý với UI-R16. Phần chặn nằm ở API, không nhìn thấy trên giao diện. Xem CH-05 |

### 2.13 Các FR không trích

| FR | Lý do |
|---|---|
| FR-08, FR-09 | Thanh toán và mã giảm giá: Màn hình Checkout, ngoài phạm vi |
| FR-12 đến FR-19 | Web Admin, ngoài phạm vi Task 1 |
| FR-20 | Mobile, ngoài phạm vi; chỉ dùng câu về hủy đơn làm căn cứ phụ cho UI-R24 |
| Các ý còn lại của FR-05, FR-06, FR-07 | Nội dung chức năng của trang chủ, chi tiết sản phẩm, giỏ hàng; không phải yêu cầu giao diện của 3 màn hình |

---

## 3. Tổng hợp theo IA và màn hình

Chỉ gồm các mã `Áp dụng`, `Áp dụng một phần` và `⏳ SV quyết định` (đánh dấu ⏳). Đây là đầu vào cho bước `ai-draft` (mỗi lượt một IA).

| IA | W-06 Hồ sơ & lịch sử đơn | W-04 Đăng ký | W-03 Đăng nhập |
|---|---|---|---|
| IA-01 | UI-R20/R34, R29, R30, R31, R32, R33, R35 | UI-R20/R34, R31, R32, R35 | UI-R20/R34, R31, R32, R35 |
| IA-02 | UI-R13, R14, R15, R16 ⏳, R36, R37 ⏳, R39 | UI-R01, R02, R03, R04, R36, R37, R38, R39 | UI-R06, R10/R37, R36, R38, R39 |
| IA-03 | UI-R41 ⏳, R42, R43 | UI-R05, R41, R42, R43 | UI-R41, R42, R43 |
| IA-04 | UI-R24 ⏳, R25 ⏳, R26 ⏳, R27 ⏳, R28 ⏳, R30, R39, R47 | UI-R39 | UI-R08, R39 |
| Ngoài 4 IA | UI-R49 ⏳, R50 ⏳ | | |

Số lượng: 50 mã; 27 `Áp dụng` hoặc `Áp dụng một phần` (trong đó UI-R37 và UI-R41 còn chờ quyết định riêng cho W-06), 8 `⏳ SV quyết định`, 15 `Không áp dụng`. Các cặp trùng ý (UI-R10 và UI-R37, UI-R20 và UI-R34, UI-R16 và UI-R50, UI-R21 và UI-R45, UI-R22 và UI-R46) chỉ nên sinh **một** mục checklist mỗi cặp.

---

## 4. Câu hỏi mở và giả định

### 4.1 Câu hỏi mở (⏳ SV quyết định)

| Mã | Câu hỏi | Liên quan | Các phương án |
|---|---|---|---|
| CH-01 | Ở W-06, trường nào là trường bắt buộc (để áp UI-R36)? SRS FR-04 chỉ nói "có thể cập nhật" Họ Tên, Số điện thoại, Địa chỉ giao hàng | UI-R36 | (a) Không trường nào bắt buộc, UI-R36 không có gì để kiểm ở W-06; (b) Họ Tên bắt buộc (giả định từ FR-01 bắt buộc Họ Tên khi đăng ký); (c) Ghi thành câu hỏi gửi người ra đề |
| CH-02 | Mỗi nút trên 3 màn hình thuộc nhóm "hành động tích cực" (xanh dương) hay "nguy hiểm/hủy bỏ" (đỏ)? Các nút: "Sign In", "Đăng Ký", "Cập nhật", "Hủy đơn", "Thoát" (đăng xuất) | UI-R32 | SV chốt từng nút; điểm cần chốt nhất là nút đăng xuất (SRS không xếp nhóm cho nút này) |
| CH-03 | "Thuật ngữ kỹ thuật chuẩn" được phép để tiếng Anh gồm những từ nào? Ví dụ trên 3 màn hình: "Email", "EShop" (tên cửa hàng), "Username", "Sign In" | UI-R31 | SV chốt danh sách từ được phép |
| CH-04 | Định dạng tiền: Dấu phân cách hàng nghìn là dấu chấm hay dấu phẩy; `₫` đặt trước hay sau số? SRS chỉ yêu cầu "ký hiệu `₫`" và "phân cách hàng nghìn". Ví dụ trong SRS (bảng mã giảm giá FR-09) viết `300,000 ₫` | UI-R33 | (a) Chỉ kiểm có `₫` và có phân cách, không kiểm loại dấu; (b) Theo ví dụ trong SRS (`300,000 ₫`); (c) Theo quy ước tiếng Việt (`300.000 ₫`), ghi là nguồn ngoài SRS |
| CH-05 | Các ý mang tính nghiệp vụ hoặc phân quyền nhưng có phần nhìn thấy được trên W-06 có đưa vào checklist GUI không? | UI-R16, R24 đến R28, R49, R50 | (a) Đưa vào, chỉ kiểm phần nhìn thấy được (ví dụ nút "Hủy đơn" chỉ có ở đơn được phép hủy); (b) Chỉ đưa các ý về nút "Hủy đơn" (UI-R24 đến R27), bỏ các ý phân quyền và bảo mật; (c) Không đưa, vì thuộc kiểm thử chức năng / bảo mật |
| CH-06 | Bản dịch tiếng Việt và màu của từng trạng thái đơn: SRS không cho cụ thể. Kiểm theo tiêu chí nào? | UI-R30 | (a) Chỉ kiểm mỗi trạng thái có chữ tiếng Việt và 5 trạng thái có 5 màu khác nhau; (b) Thêm tiêu chí ngoài SRS (ví dụ trạng thái hủy dùng màu đỏ cho thống nhất với UI-R32), ghi là khuyến nghị |
| CH-07 | Có kiểm trạng thái loading ở W-06 (khi tải lịch sử đơn) không? SRS chỉ yêu cầu loading ở trang chủ (FR-05) | UI-R17 | (a) Không kiểm (giữ "Không áp dụng"); (b) Kiểm, nhưng ghi oracle là nguồn ngoài SRS (ví dụ heuristic "Visibility of system status" của Nielsen), là khuyến nghị |
| CH-08 | UI-R37 (`type="email"`) có áp dụng cho ô Email bị khóa ở W-06 không? | UI-R37 | (a) Có, vì SRS ghi "Trường Email" không phân biệt; (b) Không, vì người dùng không nhập vào ô này |
| CH-09 | UI-R41 (highlight trang đang chọn) kiểm thế nào ở W-06, khi navbar không có mục riêng cho `/profile`? | UI-R41 | (a) Không áp dụng cho W-06; (b) Coi lời chào "Chào, <Họ Tên>" là mục của trang hồ sơ và kiểm nó được highlight; (c) Ghi việc navbar thiếu mục cho trang hồ sơ thành một mục kiểm riêng theo nguồn ngoài SRS |
| CH-10 | Nút "Hủy đơn" ở W-06 có cần dialog xác nhận không? SRS chỉ yêu cầu dialog khi xóa item khỏi giỏ (UI-R46) | UI-R46 | (a) Không kiểm (giữ "Không áp dụng"); (b) Kiểm theo nguồn ngoài SRS (ví dụ heuristic "Error prevention" của Nielsen), là khuyến nghị |

### 4.2 Giả định của AI

| Mã | Giả định | Liên quan |
|---|---|---|
| GĐ-01 | Danh sách trang con trong FR-23 ("Giỏ hàng, Thanh toán, Chi tiết sản phẩm") là danh sách đầy đủ, nên Hồ sơ, Đăng ký, Đăng nhập không cần breadcrumb | UI-R44 |
| GĐ-02 | "Mỗi trang" trong FR-21 bao gồm cả trang Đăng ký, Đăng nhập và trang Hồ sơ ở cả trạng thái chưa đăng nhập (trang chỉ hiện "Vui lòng đăng nhập") | UI-R20, R31, R34 |
| GĐ-03 | Với UI-R35 ở W-06: Đi hết khối bên trái (form hồ sơ) rồi mới sang khối bên phải (lịch sử đơn) được coi là đúng "từ trên xuống dưới, trái sang phải" | UI-R35 |
| GĐ-04 | Badge giỏ hàng (UI-R42) kiểm trong trạng thái giỏ có ít nhất 1 sản phẩm; khi giỏ trống, SRS không nói badge hiện số 0 hay ẩn | UI-R42 |

---

## 5. Điểm thấy ở `00_survey.md` mà SRS không có yêu cầu

Các điểm dưới đây có trên giao diện nhưng **không** có oracle trong SRS. Nếu muốn đưa vào checklist ở bước `ai-draft` thì oracle phải là nguồn ngoài SRS (heuristic, WCAG, checklist theo loại control) và ghi là **khuyến nghị**. Danh sách chỉ để không bỏ sót, không phải kết luận đúng hay sai.

| # | Màn hình | Điểm quan sát được | Ghi chú |
|---|---|---|---|
| 1 | W-06 | Truy cập `/profile` khi chưa đăng nhập: Ở lại trang, chỉ hiện chữ "Vui lòng đăng nhập" | SRS không nói hành vi khi chưa đăng nhập ở trang hồ sơ |
| 2 | W-04, W-03 | Truy cập `/register`, `/login` khi đã đăng nhập: Vẫn hiện form | SRS không nói |
| 3 | W-06 | Định dạng cột Ngày đặt | FR-11 chỉ yêu cầu hiển thị "Ngày đặt", không quy định định dạng |
| 4 | W-06 | Thứ tự sắp xếp đơn trong lịch sử | SRS không nói |
| 5 | W-06 | Thông báo sau khi bấm "Cập nhật" thành công | SRS không yêu cầu thông báo thành công cho cập nhật hồ sơ |
| 6 | Cả 3 | Tiêu đề trên tab trình duyệt | SRS chỉ nói về thẻ `<h1>`, không nói về tiêu đề tab |
| 7 | W-04 | Dòng hướng dẫn yêu cầu mật khẩu dưới ô Mật khẩu | SRS không yêu cầu hiển thị hướng dẫn; nội dung hướng dẫn có thể đối chiếu với UI-R03 |
| 8 | W-04, W-03 | Link chuyển qua lại giữa Đăng ký và Đăng nhập, link "Quên mật khẩu?" | SRS không yêu cầu các link này |
| 9 | W-06, W-04 | Placeholder ("VD: 0912345678", "Nhập địa chỉ của bạn") | SRS không yêu cầu placeholder; ví dụ số điện thoại trong placeholder có thể đối chiếu với UI-R14 |

---

## 6. Thay đổi so với bản AI

(SV điền khi review. Xem WORKFLOW mục 2.2.)

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| | | | | |
