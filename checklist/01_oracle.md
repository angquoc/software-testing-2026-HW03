# T1 oracle: Yêu cầu giao diện trích từ SRS

Bước: `[T1][oracle]`, bản review
Bản AI gốc: `ai_raw/T1_oracle.md` (tạo lúc 2026-11-09 01:53)
Cập nhật: 2026-11-09 11:24 (vòng một: CH-01 đến CH-10) và vòng hai (CH-02, nguồn khuyến nghị, bỏ ý "canh lề chuẩn xác"). AI cập nhật file theo câu trả lời của sinh viên, sinh viên kiểm tra lại. Mọi thay đổi về nội dung ghi ở mục 6.

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
- Nguyên tắc chung đã chốt (CH-05): Checklist GUI **không** kiểm logic nghiệp vụ, phân quyền hay API; chỉ kiểm **trạng thái hiển thị** của giao diện dựa trên quyền và trạng thái dữ liệu (ví dụ nút nào hiện ở đơn nào).

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
| UI-R16 | Người dùng chỉ có thể cập nhật hồ sơ của chính mình; không thể tự thay đổi thuộc tính `role`. | IA-02 | W-06 | Áp dụng một phần | Chỉ kiểm phần hiển thị: Form không có trường để đổi `role`. Việc hệ thống chặn cập nhật hồ sơ người khác hay đổi `role` qua API thuộc kiểm thử chức năng / bảo mật (CH-05) |

### 2.5 FR-05, FR-06, FR-07: Các ý giao diện của màn hình khác

Trích để ghi rõ lý do không áp dụng, tránh bị dùng nhầm làm oracle cho 3 màn hình đã chọn. Riêng UI-R20 là quy định chung cho mọi trang.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R17 | Khi đang tải dữ liệu phải hiển thị trạng thái **loading**. | | | Không áp dụng | Thuộc FR-05 (trang chủ, danh sách sản phẩm), không phải oracle SRS cho 3 màn hình. SV chốt vẫn kiểm loading trên 3 màn hình theo nguồn ngoài SRS, xem mục 5.2 (CH-07) |
| UI-R18 | Khi không có kết quả tìm kiếm phải hiển thị thông báo **empty state** phù hợp. | | | Không áp dụng | Thuộc trang chủ (tìm kiếm). Empty state chung đã có ở UI-R47 (FR-24) |
| UI-R19 | Trang chủ chỉ có **đúng một thẻ `<h1>`**. | | | Không áp dụng | Chỉ nói về trang chủ. Quy định cho mọi trang nằm ở UI-R20 và UI-R34 |
| UI-R20 | Mỗi trang chỉ có 1 `<h1>` duy nhất. | IA-01 | W-06, W-04, W-03 | Áp dụng | Trùng ý với UI-R34 (FR-21); ở bước `ai-draft` chỉ tạo một mục |
| UI-R21 | Nút **Thêm vào giỏ hàng** — sau khi bấm hiển thị phản hồi trực quan (toast notification hoặc badge cập nhật). | | | Không áp dụng | Thuộc FR-06 (chi tiết sản phẩm); 3 màn hình không có nút này. Trùng ý với UI-R45 |
| UI-R22 | Nút **Xóa sản phẩm** phải có dialog xác nhận trước khi thực hiện. | | | Không áp dụng | Thuộc FR-07 (giỏ hàng). Trùng ý với UI-R46 |
| UI-R23 | Giỏ hàng trống phải có hình minh họa và thông báo rõ ràng. | | | Không áp dụng | Thuộc FR-07 (giỏ hàng) |

### 2.6 FR-10: Trạng thái đơn hàng (phần người dùng thao tác trên lịch sử đơn)

Theo `00_survey.md`, người dùng hủy đơn bằng nút "Hủy đơn" trong bảng lịch sử đơn ở W-06. Theo CH-05, chỉ kiểm **hiển thị** của nút và thông báo, không kiểm việc API có chấp nhận lệnh hủy hay không. Các ý chỉ dành cho Admin không trích.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R24 | Đơn hàng có **5 trạng thái** và phải tuân theo sơ đồ chuyển đổi sau: (sơ đồ) `pending` và `confirmed` có nhánh **[User/Admin hủy]** sang `canceled`. | IA-04 | W-06 | Áp dụng một phần | Câu đầu là nguyên văn; phần sau là diễn giải từ sơ đồ (SRS không có câu chữ cho ý này). FR-20 nói rõ hơn cho Mobile: "chỉ được hủy khi `pending` hoặc `confirmed`". Chỉ kiểm hiển thị: Nút "Hủy đơn" có ở đơn `pending` và `confirmed`. Danh sách 5 trạng thái cũng là căn cứ cho UI-R30 |
| UI-R25 | Trạng thái `delivered` và `canceled` là **trạng thái kết thúc** — không được phép chuyển sang bất kỳ trạng thái nào khác. | IA-04 | W-06 | Áp dụng một phần | Chỉ kiểm hiển thị: Không có nút "Hủy đơn" ở đơn `delivered` và `canceled` |
| UI-R26 | Khi đơn hàng đã ở trạng thái `shipping`, **User không được phép tự hủy** — chỉ Admin mới có thể thao tác. | IA-04 | W-06 | Áp dụng một phần | Chỉ kiểm hiển thị: Không có nút "Hủy đơn" ở đơn `shipping` |
| UI-R27 | Mọi chuyển đổi không hợp lệ phải trả về lỗi với thông báo phù hợp. | IA-04 | W-06 | Áp dụng một phần | Chỉ kiểm hiển thị: Khi hệ thống từ chối một thao tác hủy, giao diện hiện thông báo cho người dùng. Không kiểm phản hồi của API |

### 2.7 FR-11: Xem lịch sử đơn hàng (User)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R28 | Người dùng chỉ xem được đơn hàng của chính mình. | | W-06 | Không áp dụng | Yêu cầu phân quyền dữ liệu, thuộc kiểm thử chức năng / bảo mật (CH-05) |
| UI-R29 | Hiển thị: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái hiện tại. | IA-01 | W-06 | Áp dụng | SRS không quy định định dạng ngày, thứ tự cột hay thứ tự sắp xếp (xem mục 5.1) |
| UI-R30 | Trạng thái phải được dịch sang tiếng Việt rõ ràng và phân biệt màu sắc. | IA-01, IA-04 | W-06 | Áp dụng | Gồm 2 ý: Chữ tiếng Việt (IA-01, liên quan UI-R31) và mỗi trạng thái một màu (IA-04). Kiểm bằng một ma trận trạng thái (5 mã trạng thái của UI-R24, chữ hiển thị, màu), thiết kế ở bước `ai-draft` (CH-06). SRS không cho bản dịch hay màu cụ thể, nên ma trận chỉ kiểm: Mỗi trạng thái có chữ tiếng Việt rõ nghĩa và 5 trạng thái có màu phân biệt nhau |

### 2.8 FR-21: Tiêu chuẩn giao diện chung (IA-01)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R31 | **Nhất quán ngôn ngữ**: Toàn bộ giao diện dùng tiếng Việt (trừ thuật ngữ kỹ thuật chuẩn). | IA-01 | W-06, W-04, W-03 | Áp dụng | Thuật ngữ kỹ thuật chuẩn được giữ tiếng Anh (CH-03): Từ mang tính toàn cầu, dịch ra sẽ tối nghĩa hoặc dài dòng, ví dụ Email, App, Link, ID, Internet, Wifi, File, Loading. Tên cửa hàng "EShop": Xem GĐ-05 |
| UI-R32 | **Nhất quán màu sắc**: Các nút hành động tích cực (Submit, Mua hàng) dùng màu xanh dương. Các nút nguy hiểm/hủy bỏ dùng màu đỏ. | IA-01 | W-06, W-04, W-03 | Áp dụng | Gồm 2 ý. Nút tích cực (nút Submit của form): "Sign In", "Đăng Ký", "Cập nhật". Nút nguy hiểm/hủy bỏ: "Hủy đơn" và nút đăng xuất (CH-02) |
| UI-R33 | **Nhất quán đơn vị tiền**: Luôn dùng ký hiệu `₫` với định dạng phân cách hàng nghìn. | IA-01 | W-06 | Áp dụng | Chỉ W-06 có số tiền (cột Tổng tiền). Kiểm theo cách viết trong SRS (CH-04): Dấu phẩy phân cách hàng nghìn, `₫` đặt sau số, cách một khoảng, như `300,000 ₫` trong bảng mã giảm giá mẫu (FR-09) |
| UI-R34 | **Tiêu đề trang**: Mỗi trang có đúng 1 thẻ `<h1>` mô tả nội dung trang. | IA-01 | W-06, W-04, W-03 | Áp dụng | Gồm 2 ý: Đúng 1 thẻ `<h1>`, và nội dung `<h1>` mô tả đúng trang. Ý thứ nhất cần DevTools ở bước `exec` |
| UI-R35 | **Tab Order**: Thứ tự focus theo Tab phải đi từ trên xuống dưới, trái sang phải. | IA-01 | W-06, W-04, W-03 | Áp dụng | W-06 có hai khối đặt cạnh nhau (form hồ sơ bên trái, lịch sử đơn bên phải); SRS không nói thứ tự giữa hai khối (xem GĐ-03) |

### 2.9 FR-22: Form Requirements (IA-02)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R36 | Tất cả trường bắt buộc phải có ký hiệu `*` bên cạnh nhãn. | IA-02 | W-04, W-03 | Áp dụng | Chỉ kiểm các trường SRS quy định là bắt buộc (CH-01): W-04 theo UI-R01 (Họ Tên, Email, Mật khẩu) và UI-R04 (Xác nhận mật khẩu); W-03 theo UI-R06 (Email, Mật khẩu). SRS không quy định trường bắt buộc ở W-06 nên W-06 không có trường nào để kiểm |
| UI-R37 | Trường Email phải dùng `type="email"`. | IA-02 | W-06, W-04, W-03 | Áp dụng | Áp dụng cả cho ô Email bị khóa ở W-06 (CH-08). Trùng ý với UI-R10. Cần DevTools ở bước `exec` |
| UI-R38 | Trường Mật khẩu phải dùng `type="password"` (không hiển thị rõ). | IA-02 | W-04, W-03 | Áp dụng | W-06 không có trường mật khẩu. Phần "không hiển thị rõ" kiểm bằng mắt; phần `type` cần DevTools |
| UI-R39 | Thông báo lỗi phải xuất hiện **trên** nút submit, không phải bên dưới. | IA-02, IA-04 | W-06, W-04, W-03 | Áp dụng | Cả 3 màn hình có form với nút gửi ("Cập nhật", "Đăng Ký", "Sign In") |
| UI-R40 | Các form có từ 2 bước trở lên phải có **Step Indicator** rõ ràng. | IA-02 | | Không áp dụng | Cả 3 form trong phạm vi đều chỉ có 1 bước (theo `00_survey.md`). Form nhiều bước duy nhất trong SRS là Quên mật khẩu (FR-03), ngoài phạm vi |

### 2.10 FR-23: Navigation Requirements (IA-03)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R41 | Thanh điều hướng (Navbar) phải **highlight** trang đang được chọn. | IA-03 | W-06, W-04, W-03 | Áp dụng | Ở W-04, W-03: Mục "Đăng ký", "Đăng nhập" (khi chưa đăng nhập) được highlight khi đang ở trang tương ứng. Ở W-06 khi đã đăng nhập: Lời chào "Chào, <Họ Tên>" là mục navbar dẫn tới `/profile` (`00_survey.md`, ảnh 08), nên mong đợi lời chào được highlight khi đang ở `/profile`. Ở W-06 khi chưa đăng nhập: Navbar không có mục dẫn tới `/profile` nên mong đợi **không** mục nào được highlight (CH-09) |
| UI-R42 | Link "Giỏ hàng" phải hiển thị **badge số lượng** sản phẩm trong giỏ. | IA-03 | W-06, W-04, W-03 (navbar) | Áp dụng | Link "Giỏ hàng" có trên navbar của cả 3 màn hình. Muốn kiểm phải có sản phẩm trong giỏ khi chạy (xem GĐ-04) |
| UI-R43 | Nút Đăng xuất phải nhãn là "Đăng xuất" (không phải "Thoát"). | IA-03 | W-06, W-04, W-03 (navbar, đã đăng nhập) | Áp dụng | Nút chỉ có khi đã đăng nhập |
| UI-R44 | Breadcrumb bắt buộc có ở các trang con (Giỏ hàng, Thanh toán, Chi tiết sản phẩm). | IA-03 | | Không áp dụng | SRS liệt kê đúng 3 trang con, không có Hồ sơ, Đăng ký, Đăng nhập (xem GĐ-01) |

### 2.11 FR-24: Feedback & State Requirements (IA-04)

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R45 | Sau khi bấm "Thêm vào giỏ", phải có phản hồi trực quan (toast/badge). | IA-04 | | Không áp dụng | 3 màn hình không có nút "Thêm vào giỏ" |
| UI-R46 | Khi xóa item khỏi giỏ phải có dialog xác nhận. | IA-04 | | Không áp dụng | 3 màn hình không có thao tác xóa item khỏi giỏ. Dialog xác nhận cho nút "Hủy đơn" ở W-06 được kiểm theo nguồn ngoài SRS, xem mục 5.2 (CH-10) |
| UI-R47 | Trang trống (Empty State) phải có icon/hình minh họa và message thân thiện. | IA-04 | W-06 | Áp dụng | Trạng thái lịch sử đơn trống. Gồm 2 ý: Có icon/hình minh họa, có message thân thiện. "Thân thiện" chưa đo được, cần chốt tiêu chí ở bước `review` |
| UI-R48 | Tất cả ảnh sản phẩm phải có thuộc tính `alt` mô tả nội dung ảnh (không để rỗng). | IA-04 | | Không áp dụng | 3 màn hình không hiển thị ảnh sản phẩm (theo `00_survey.md`; bảng lịch sử đơn không có ảnh) |

### 2.12 Mục 9: Yêu cầu bảo mật có phần hiển thị trên giao diện

SRS ghi mục 9 là "Tham khảo". Hai ý dưới đây được xét vì có liên quan tới dữ liệu hiển thị trên W-06; theo CH-05 cả hai không đưa vào checklist GUI.

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R49 | SEC-04: Mọi dữ liệu từ user nhập vào khi hiển thị trên UI phải được escape đúng cách, không dùng `innerHTML` trực tiếp. | | | Không áp dụng | Yêu cầu bảo mật, thuộc kiểm thử bảo mật (CH-05) |
| UI-R50 | SEC-06: API cập nhật hồ sơ không được cho phép thay đổi trường `role` từ client. | | | Không áp dụng | Chặn ở API, không nhìn thấy trên giao diện; phần hiển thị (form không có trường `role`) đã nằm ở UI-R16 (CH-05) |

### 2.13 Các FR không trích

| FR | Lý do |
|---|---|
| FR-08, FR-09 | Thanh toán và mã giảm giá: Màn hình Checkout, ngoài phạm vi. Riêng cách viết số tiền trong bảng mã giảm giá mẫu của FR-09 được dùng làm căn cứ định dạng cho UI-R33 |
| FR-12 đến FR-19 | Web Admin, ngoài phạm vi Task 1 |
| FR-20 | Mobile, ngoài phạm vi; chỉ dùng câu về hủy đơn làm căn cứ phụ cho UI-R24 |
| Các ý còn lại của FR-05, FR-06, FR-07 | Nội dung chức năng của trang chủ, chi tiết sản phẩm, giỏ hàng; không phải yêu cầu giao diện của 3 màn hình |

---

## 3. Tổng hợp theo IA và màn hình

Chỉ gồm các mã `Áp dụng` và `Áp dụng một phần`. Đây là đầu vào cho bước `ai-draft` (mỗi lượt một IA), cùng với các mục ngoài SRS ở mục 5.2.

| IA | W-06 Hồ sơ & lịch sử đơn | W-04 Đăng ký | W-03 Đăng nhập |
|---|---|---|---|
| IA-01 | UI-R20/R34, R29, R30, R31, R32, R33, R35 | UI-R20/R34, R31, R32, R35 | UI-R20/R34, R31, R32, R35 |
| IA-02 | UI-R13, R14, R15, R16, R37, R39 | UI-R01, R02, R03, R04, R36, R37, R38, R39 | UI-R06, R10/R37, R36, R38, R39 |
| IA-03 | UI-R41, R42, R43 | UI-R05, R41, R42, R43 | UI-R41, R42, R43 |
| IA-04 | UI-R24, R25, R26, R27, R30, R39, R47 | UI-R39 | UI-R08, R39 |

Số lượng: 50 mã; 26 `Áp dụng`, 6 `Áp dụng một phần`, 18 `Không áp dụng`. Các cặp trùng ý còn áp dụng (UI-R10 và UI-R37, UI-R20 và UI-R34) chỉ sinh **một** mục checklist mỗi cặp.

---

## 4. Câu hỏi mở và giả định

### 4.1 Câu hỏi mở và quyết định của sinh viên

| Mã | Câu hỏi | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|
| CH-01 | Ở W-06, trường nào là trường bắt buộc (để áp UI-R36)? | Trường bắt buộc do SRS quy định; checklist chỉ kiểm dấu `*` bên cạnh nhãn của các trường SRS quy định là bắt buộc. (Ý "dấu `*` được canh lề chuẩn xác" đã bỏ vì mơ hồ, không kiểm được bằng Passed / Failed) | UI-R36 bỏ W-06 (SRS không quy định trường bắt buộc ở W-06) |
| CH-02 | Nút nào là "hành động tích cực" (xanh dương), nút nào "nguy hiểm/hủy bỏ" (đỏ)? | Nút đăng xuất xếp vào nhóm "nguy hiểm/hủy bỏ", kiểm màu đỏ theo UI-R32 (phương án (b) ở mục 4.3) | UI-R32 |
| CH-03 | "Thuật ngữ kỹ thuật chuẩn" được phép để tiếng Anh gồm những từ nào? | Từ mang tính toàn cầu, dịch ra tiếng Việt sẽ tối nghĩa hoặc dài dòng, ví dụ Email, App, Link, ID, Internet, Wifi, File, Loading | UI-R31 |
| CH-04 | Định dạng tiền: Dấu phân cách hàng nghìn và vị trí `₫`? | Chuẩn Việt Nam thường dùng dấu chấm (`300.000 ₫`), nhưng SRS ghi `300,000 ₫` nên kiểm đúng theo SRS | UI-R33 |
| CH-05 | Các ý nghiệp vụ, phân quyền, bảo mật có đưa vào checklist GUI không? | Không đưa logic vào checklist GUI (kiểm thử chức năng / bảo mật lo phần API). Checklist GUI kiểm trạng thái hiển thị của giao diện dựa trên quyền | UI-R16, R24 đến R27: Áp dụng một phần (chỉ phần hiển thị). UI-R28, R49, R50: Không áp dụng |
| CH-06 | Kiểm bản dịch và màu của từng trạng thái đơn theo tiêu chí nào? | Tạo một ma trận mapping đơn giản trong test case | UI-R30 |
| CH-07 | Có kiểm trạng thái loading ở W-06 không? | Có: Cần phản hồi thị giác khi gọi API | UI-R17 giữ Không áp dụng (oracle SRS); thêm mục ngoài SRS ở 5.2 |
| CH-08 | `type="email"` có áp dụng cho ô Email bị khóa ở W-06 không? | Có: Dùng đúng semantic HTML vẫn quan trọng cho screen reader (accessibility) và style nhất quán, dù ô bị disabled hoặc readonly | UI-R37 thêm W-06 |
| CH-09 | Kiểm highlight navbar ở `/profile` thế nào? | `/profile` không thuộc mục nào trên navbar thì không mục nào được highlight. Bổ sung: SV xác nhận lời chào "Chào, <Họ Tên>" là link tới `/profile` (ảnh `survey_08`), tức `/profile` **có** mục trên navbar khi đã đăng nhập | UI-R41 thêm W-06. Đã đăng nhập: Mong đợi lời chào được highlight. Chưa đăng nhập: Mong đợi không mục nào được highlight |
| CH-10 | Nút "Hủy đơn" có cần dialog xác nhận không? | Có: Hành động phá hủy dữ liệu cần dialog/modal xác nhận | UI-R46 giữ Không áp dụng (oracle SRS); thêm mục ngoài SRS ở 5.2 |

### 4.2 Giả định của AI

| Mã | Giả định | Liên quan |
|---|---|---|
| GĐ-01 | Danh sách trang con trong FR-23 ("Giỏ hàng, Thanh toán, Chi tiết sản phẩm") là danh sách đầy đủ, nên Hồ sơ, Đăng ký, Đăng nhập không cần breadcrumb | UI-R44 |
| GĐ-02 | "Mỗi trang" trong FR-21 bao gồm cả trang Đăng ký, Đăng nhập và trang Hồ sơ ở cả trạng thái chưa đăng nhập (trang chỉ hiện "Vui lòng đăng nhập") | UI-R20, R31, R34 |
| GĐ-03 | Với UI-R35 ở W-06: Đi hết khối bên trái (form hồ sơ) rồi mới sang khối bên phải (lịch sử đơn) được coi là đúng "từ trên xuống dưới, trái sang phải" | UI-R35 |
| GĐ-04 | Badge giỏ hàng (UI-R42) kiểm trong trạng thái giỏ có ít nhất 1 sản phẩm; khi giỏ trống, SRS không nói badge hiện số 0 hay ẩn | UI-R42 |
| GĐ-05 | Tên cửa hàng "EShop" là tên riêng, không phải chữ giao diện cần dịch, nên không xét theo UI-R31. (Thêm khi cập nhật theo CH-03; SV xác nhận) | UI-R31 |

### 4.3 Điểm chốt ở vòng hai

| Mã | Điểm cần chốt | Các phương án | Quyết định của SV |
|---|---|---|---|
| CH-02 | Nút đăng xuất thuộc nhóm màu nào trong UI-R32? Câu trả lời vòng một nêu hai dạng (Secondary/Neutral hoặc Danger), chưa chọn một | (a) Nút đăng xuất không thuộc nhóm "tích cực" hay "nguy hiểm/hủy bỏ" của SRS, nên UI-R32 không kiểm màu nút này; (b) Xếp vào nhóm "nguy hiểm/hủy bỏ", kiểm màu đỏ theo UI-R32; (c) Kiểm theo nguồn ngoài SRS: Dạng Secondary/Neutral, ghi là khuyến nghị | (b) |

---

## 5. Điểm ngoài SRS

### 5.1 Điểm thấy ở `00_survey.md` mà SRS không có yêu cầu

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

### 5.2 Mục kiểm theo nguồn ngoài SRS sinh viên đã chốt

Theo WORKFLOW mục 1.1, các mục này là **khuyến nghị** (không phải yêu cầu của SRS) và phải ghi nguồn. Sinh viên đồng ý ghi là khuyến nghị (thay cho chữ "bắt buộc" trong câu trả lời CH-07, CH-10) và dùng nguồn tham chiếu dưới đây (AI đề xuất theo các nguồn trong slide). Tiêu chí cụ thể (kiểm được bằng Passed / Failed) chốt ở bước `ai-draft` và `review`.

| Mã | Nội dung | Màn hình | IA | Nguồn đề xuất | Từ |
|---|---|---|---|---|---|
| NR-01 | Có phản hồi thị giác (trạng thái loading) khi giao diện đang chờ hệ thống: Tải lịch sử đơn, sau khi bấm "Cập nhật", "Đăng Ký", "Sign In" | W-06, W-04, W-03 | IA-04 | Nielsen heuristic 1: Visibility of system status | CH-07 |
| NR-02 | Có dialog / modal xác nhận trước khi hủy đơn bằng nút "Hủy đơn" | W-06 | IA-04 | Nielsen heuristic 5: Error prevention | CH-10 |

---

## 6. Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 1, Cách trích | Thêm nguyên tắc: Checklist GUI không kiểm logic, chỉ kiểm trạng thái hiển thị dựa trên quyền | Quyết định của SV | | CH-05 |
| 2.4, UI-R16 | `⏳ SV quyết định` thành `Áp dụng một phần`: Chỉ kiểm form không có trường đổi `role` | Quyết định của SV | | CH-05 |
| 2.5, UI-R17 | Giữ `Không áp dụng`; ghi chú loading được kiểm theo nguồn ngoài SRS (NR-01) | Quyết định của SV | | CH-07 |
| 2.6, UI-R24 đến UI-R27 | `⏳ SV quyết định` thành `Áp dụng một phần`: Chỉ kiểm hiển thị nút "Hủy đơn" theo trạng thái đơn và thông báo khi bị từ chối | Quyết định của SV | | CH-05 |
| 2.7, UI-R28 | `⏳ SV quyết định` thành `Không áp dụng` (phân quyền dữ liệu) | Quyết định của SV | | CH-05 |
| 2.7, UI-R30 | Thêm cách kiểm bằng ma trận trạng thái (mã trạng thái, chữ hiển thị, màu) | Quyết định của SV | | CH-06 |
| 2.8, UI-R31 | Thêm phạm vi "thuật ngữ kỹ thuật chuẩn" và danh sách ví dụ | Quyết định của SV | | CH-03 |
| 2.8, UI-R32 | Xếp nhóm các nút: "Sign In", "Đăng Ký", "Cập nhật" là nút tích cực (Submit); "Hủy đơn" và nút đăng xuất là nút nguy hiểm/hủy bỏ (màu đỏ) | Quyết định của SV | | CH-02, phương án (b) ở mục 4.3. Việc xếp 3 nút Submit và nút "Hủy đơn" là AI đề xuất khi cập nhật theo chữ "(Submit, Mua hàng)" và "hủy bỏ" trong SRS; SV xác nhận |
| 2.8, UI-R33 | Chốt định dạng tiền theo cách viết trong SRS (`300,000 ₫`) | Quyết định của SV | | CH-04 |
| 2.9, UI-R36 | Bỏ W-06 khỏi màn hình áp dụng; chỉ kiểm trường SRS quy định bắt buộc | Quyết định của SV | | CH-01 |
| 2.9, UI-R37 | W-06 từ `⏳` thành áp dụng (cả ô Email bị khóa) | Quyết định của SV | | CH-08 |
| 2.10, UI-R41 | Bản AI ghi "navbar không có mục riêng cho `/profile`"; thực tế lời chào "Chào, <Họ Tên>" là link tới `/profile` | Sai | | SV bấm thử lời chào và chụp ảnh `survey_08` (09/11/2026). Ảnh 01 đến 07 không cho thấy lời chào là link nên `00_survey.md` và bản AI đều ghi sai |
| 2.10, UI-R41 | W-06 từ `⏳` thành áp dụng. Đã đăng nhập: Mong đợi lời chào được highlight; chưa đăng nhập: Mong đợi không mục nào được highlight | Quyết định của SV | | CH-09, áp dụng theo việc lời chào là mục navbar của `/profile` |
| 2.11, UI-R46 | Giữ `Không áp dụng`; ghi chú dialog cho "Hủy đơn" được kiểm theo nguồn ngoài SRS (NR-02) | Quyết định của SV | | CH-10 |
| 2.12, UI-R49, UI-R50 | `⏳ SV quyết định` thành `Không áp dụng` | Quyết định của SV | | CH-05 |
| 4.1 | Thêm cột "Quyết định của SV" cho CH-01 đến CH-10 | Quyết định của SV | | Câu trả lời của SV |
| 4.2, GĐ-05 | Thêm giả định: "EShop" là tên riêng, không xét theo UI-R31 | Quyết định của SV | | AI đề xuất khi cập nhật theo CH-03; SV xác nhận |
| 4.3 | Thêm điểm chốt vòng hai: Nút đăng xuất xếp vào nhóm nguy hiểm/hủy bỏ, phương án (b) | Quyết định của SV | | Câu trả lời CH-02 vòng một nêu hai dạng, chưa chọn; vòng hai SV chọn (b) |
| 5.2 | Thêm 2 mục kiểm theo nguồn ngoài SRS (NR-01, NR-02), ghi là khuyến nghị kèm nguồn tham chiếu (thay cho chữ "bắt buộc" trong câu trả lời CH-07, CH-10) | Quyết định của SV | | CH-07, CH-10; WORKFLOW mục 1.1 |
| 4.1 CH-01, 2.9 UI-R36 | Bỏ ý "dấu `*` được canh lề chuẩn xác" (không tạo mục ngoài SRS cho vị trí dấu `*`) | Quyết định của SV | | Mơ hồ, không kiểm được bằng Passed / Failed (WORKFLOW mục 3.1.2) |
