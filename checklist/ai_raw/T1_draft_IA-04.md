# T1 ai-draft: Checklist IA-04 Phản hồi và trạng thái

Bước: `[T1][ai-draft]`, IA-04, bản AI
Tạo lúc: 2026-11-09 15:03

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Các mã có IA-04 ở mục 3 (W-06: UI-R24, R25, R26, R27, R30, R39, R47; W-04: UI-R39; W-03: UI-R08, R39), hai mục ngoài SRS đã chốt ở mục 5.2 (NR-01 loading, NR-02 dialog xác nhận hủy đơn), quyết định CH-01 đến CH-10, điểm ngoài SRS ở mục 5.1 (dòng 5).
- `00_survey.md` và ảnh `survey_01` đến `survey_08`: Chỉ dùng để biết màn hình có những nút, bảng, thông báo nào; **không** dùng để đoán kết quả.
- Thông tin sinh viên cung cấp: `tools/seed_orders.py` tạo 5 đơn ở 5 trạng thái và tài khoản `newuser@eshop.com` không có đơn.
- Nguồn ngoài SRS trong slide môn học: Slide "GUI + Usability + Compatibility Testing AI-First" (Nielsen 10 heuristics, Shneiderman 8 Golden Rules, checklist Button của Waghmare, bảng phân loại lỗi GUI, ví dụ trang lỗi 503, WCAG).

Quy ước: Giống bản nháp IA-01.

- Mã mục: `AI-04-<số>`. Mỗi mục kiểm **một** điều, trả lời được bằng Passed / Failed.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục.
- Mã trạng thái đơn (`pending`, `confirmed`, `shipping`, `delivered`, `canceled`) chỉ dùng để chỉ đơn; khi chạy, xác định đơn nào ở trạng thái nào theo dữ liệu `tools/seed_orders.py` tạo ra.
- UI-R39 (vị trí thông báo lỗi so với nút gửi) thuộc cả IA-02 và IA-04; đã tạo mục ở bản nháp IA-02 (AI-02-13), bản này không lặp lại.

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-01 | Reset dữ liệu (`cd backend && node database.js`), rồi chạy `tools/seed_orders.py`. Đăng nhập `test@eshop.com` / `Test1234!` (tài khoản có 5 đơn ở 5 trạng thái) | Mọi mục ở W-06 có đơn |
| ĐK-02 | Đăng nhập `newuser@eshop.com` (tài khoản không có đơn) | AI-04-08, AI-04-09 |
| ĐK-03 | Các mục hủy đơn làm đổi dữ liệu: Chạy lại ĐK-01 trước mỗi mục AI-04-05, AI-04-13 đến AI-04-17 | AI-04-05, AI-04-13 đến AI-04-17 |
| ĐK-04 | Giả lập mạng chậm: DevTools, tab Network, chọn "Slow 4G" (hoặc "3G") | AI-04-10 đến AI-04-12 |
| ĐK-05 | Các mục khóa tài khoản làm `test@eshop.com` bị khóa 30 giây: Chạy sau cùng, hoặc chờ hết 30 giây trước mục kế tiếp | AI-04-06, AI-04-07 |
| ĐK-06 | Cửa sổ trình duyệt ở kích thước mặc định của lần chạy, zoom 100% | Mọi mục |

---

## 3. Bảng checklist IA-04

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-04-01 | Năm trạng thái đơn có màu phân biệt nhau không? Kiểm theo ma trận ở mục 4 | IA-04 | W-06 (đăng nhập, có đơn) | UI-R30 (CH-06) | Nhìn (ghi màu chữ và màu nền nhãn của từng trạng thái vào ma trận) | 5 trạng thái có 5 màu khác nhau (không có hai trạng thái trùng màu) |
| AI-04-02 | Đơn `pending` và `confirmed` có nút "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R24 (CH-05) | Nhìn (ma trận mục 4) | Có nút "Hủy đơn" ở cả 2 đơn |
| AI-04-03 | Đơn `delivered` và `canceled` có ẩn nút "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R25 (CH-05) | Nhìn (ma trận mục 4) | Không có nút "Hủy đơn" (cũng không có nút bị làm mờ) ở cả 2 đơn |
| AI-04-04 | Đơn `shipping` có ẩn nút "Hủy đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R26 (CH-05) | Nhìn (ma trận mục 4) | Không có nút "Hủy đơn" (cũng không có nút bị làm mờ) ở đơn này |
| AI-04-05 | Khi hệ thống từ chối một lệnh hủy, giao diện có hiện thông báo cho người dùng không? | IA-04 | W-06 (đăng nhập, có đơn) | UI-R27 (CH-05) | Chuột (mở W-06 ở 2 tab; ở tab B hủy đơn `pending`; quay lại tab A, **không** tải lại, bấm "Hủy đơn" của cùng đơn đó) | Tab A hiện thông báo tiếng Việt cho biết không hủy được đơn; không im lặng, không hiện lỗi kỹ thuật |
| AI-04-06 | Sau 3 lần đăng nhập sai liên tiếp, trang có hiện thông báo tài khoản bị tạm khóa không? | IA-04 | W-03 | UI-R08 | Bàn phím (`test@eshop.com`, mật khẩu `Sai12345!` 3 lần; lần thứ 4 trong vòng 30 giây dùng mật khẩu đúng) | Lần thứ 4 hiện thông báo cho biết tài khoản đang tạm khóa / cần thử lại sau, không đăng nhập vào |
| AI-04-07 | Thông báo khi tài khoản bị tạm khóa có tránh để lộ chi tiết nguyên nhân không? | IA-04 | W-03 | UI-R08 | Nhìn (thông báo ở AI-04-06) | Thông báo không nêu số lần sai, không nêu ô nào sai, không chứa thông tin kỹ thuật (mã lỗi, tên bảng, stack trace) |
| AI-04-08 | Trang lịch sử đơn trống có icon hoặc hình minh họa không? | IA-04 | W-06 (đăng nhập, không có đơn) | UI-R47 | Nhìn (ĐK-02) | Có icon hoặc hình minh họa trong khối "Lịch sử đơn hàng" |
| AI-04-09 | Thông báo lịch sử đơn trống có thân thiện không? | IA-04 | W-06 (đăng nhập, không có đơn) | UI-R47 | Nhìn (ĐK-02) | Đề xuất tiêu chí đo được (chờ chốt, CHD-13): Câu tiếng Việt đầy đủ, không dùng từ kỹ thuật, **và** có gợi ý bước tiếp theo (ví dụ link hoặc nút "Mua sắm ngay" về trang chủ) |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-04-10 | Khi lịch sử đơn đang tải, có dấu hiệu đang tải không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: NR-01 (Nielsen heuristic 1, Visibility of system status) | DevTools (ĐK-04), tải lại trang | Trước khi bảng đơn hiện ra, khối "Lịch sử đơn hàng" có dấu hiệu đang tải (vòng xoay, khung mờ hoặc chữ "Đang tải") |
| AI-04-11 | Trong lúc lịch sử đơn đang tải, trang có tránh hiện nhầm thông báo "chưa có đơn" không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state") | DevTools (ĐK-04), tải lại trang, quan sát từ lúc trang hiện | Không lúc nào hiện "Bạn chưa có đơn hàng nào." với tài khoản có đơn |
| AI-04-12 | Sau khi bấm nút gửi, có dấu hiệu đang chờ hệ thống xử lý không? | IA-04 | W-06 (đăng nhập, "Cập nhật"), W-04 ("Đăng Ký"), W-03 ("Sign In") | Khuyến nghị: NR-01 (Nielsen heuristic 1, Visibility of system status) | DevTools (ĐK-04), Chuột | Từ lúc bấm tới lúc có kết quả, nút hoặc form có dấu hiệu đang xử lý (nút bị khóa, đổi chữ, vòng xoay) |
| AI-04-13 | Bấm "Hủy đơn" có hiện dialog xác nhận trước khi hủy không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: NR-02 (Nielsen heuristic 5, Error prevention); slide AI-First, checklist Button ("Uncorrectable action: Yes/No confirmation") | Chuột (đơn `pending`) | Hiện dialog / modal hỏi xác nhận; đơn chưa bị hủy khi dialog đang mở |
| AI-04-14 | Chọn "không" (hoặc đóng) dialog xác nhận thì đơn có giữ nguyên không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột (đơn `pending`, chọn nút không đồng ý trong dialog) | Chữ trạng thái và nút "Hủy đơn" của đơn không đổi, kể cả sau khi tải lại trang |
| AI-04-15 | Dialog xác nhận có nêu đơn nào sẽ bị hủy không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Nielsen heuristic 5 (Error prevention) | Nhìn | Nội dung dialog có mã đơn (ví dụ "#5") |
| AI-04-16 | Sau khi hủy đơn thành công, chữ trạng thái của dòng đó có đổi ngay mà không cần tải lại trang không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state"); Nielsen heuristic 1 | Chuột (hủy đơn `pending`, xác nhận nếu có dialog) | Dòng đơn hiện chữ của trạng thái `canceled` (giống chữ ở ma trận mục 4) ngay sau khi hủy |
| AI-04-17 | Sau khi hủy đơn thành công, trang có báo hủy thành công không? | IA-04 | W-06 (đăng nhập, có đơn) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback) | Chuột, Nhìn | Có thông báo tiếng Việt cho biết đã hủy đơn |
| AI-04-18 | Sau khi cập nhật hồ sơ thành công, trang có báo cập nhật thành công không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback); `01_oracle.md` mục 5.1 dòng 5 | Bàn phím, Chuột (sửa Địa chỉ giao hàng, bấm "Cập nhật") | Có thông báo tiếng Việt cho biết đã cập nhật |
| AI-04-19 | Sau khi đổi Họ Tên, lời chào trên navbar có hiện tên mới mà không cần tải lại trang không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Slide AI-First, bảng phân loại lỗi GUI ("Control/menu state not aligned with data state") | Bàn phím, Chuột (đổi Họ Tên thành "Test User Moi", bấm "Cập nhật") | Navbar hiện "Chào, Test User Moi" ngay sau khi cập nhật |
| AI-04-20 | Khi đăng nhập sai (chưa tới mức bị khóa), trang có hiện thông báo lỗi không? | IA-04 | W-03 | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors) | Bàn phím (`test@eshop.com`, mật khẩu `Sai12345!`, 1 lần) | Có thông báo tiếng Việt cho biết đăng nhập không thành công; vẫn ở `/login` |
| AI-04-21 | Sau khi đăng ký thành công, người dùng có nhận được thông báo đăng ký thành công không? | IA-04 | W-04 (chuyển tới W-03) | Khuyến nghị: Shneiderman rule 4 (Design dialogues to yield closure) | Bàn phím, Chuột (email mới, dữ liệu hợp lệ) | Có thông báo đăng ký thành công (trước khi chuyển trang hoặc trên trang Đăng nhập) |
| AI-04-22 | Khi mất kết nối tới hệ thống, bấm nút gửi có hiện thông báo dễ hiểu không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Nielsen heuristic 9; slide AI-First, ví dụ trang lỗi 503 ("is the message clear & recoverable?") | DevTools (trang đã tải xong, tab Network chọn "Offline", rồi bấm nút gửi với dữ liệu hợp lệ) | Có thông báo tiếng Việt cho biết không kết nối được / thử lại sau; không im lặng, không hiện chữ kỹ thuật (ví dụ "Network Error", "Failed to fetch") |
| AI-04-23 | Thông báo lỗi và thông báo thành công có được công cụ hỗ trợ đọc tự động khi xuất hiện không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (Elements, chọn phần tử thông báo) | Phần tử thông báo có `role="alert"`, `role="status"` hoặc `aria-live` |
| AI-04-24 | Các nút có đổi hình thức khi rê chuột lên không? | IA-04 | W-06 (đăng nhập), W-04, W-03 | Khuyến nghị: Slide AI-First, checklist Button ("Hover highlights") | Chuột, Nhìn | "Cập nhật", "Hủy đơn", "Đăng Ký", "Sign In" và nút đăng xuất đổi màu (hoặc độ đậm, bóng) khi rê chuột |
| AI-04-25 | Khi phiên đăng nhập không còn hợp lệ, bấm "Cập nhật" có hiện thông báo yêu cầu đăng nhập lại không? | IA-04 | W-06 (đăng nhập) | Khuyến nghị: Nielsen heuristic 9 | DevTools (tab Application, xóa dữ liệu đăng nhập trong Local Storage / Cookies, **không** tải lại trang), rồi bấm "Cập nhật" | Có thông báo tiếng Việt cho biết cần đăng nhập lại (hoặc chuyển sang `/login`); không im lặng, không hiện chữ kỹ thuật |

---

## 4. Ma trận trạng thái đơn (dùng cho AI-04-01 đến AI-04-04)

Theo CH-06, nối tiếp ma trận ở bản nháp IA-01 (thêm cột "Màu" và "Nút Hủy đơn"). Cột "Chữ hiển thị" và "Màu" ghi khi chạy.

| Mã trạng thái (FR-10) | Chữ hiển thị (ghi khi chạy) | Màu chữ / màu nền nhãn (ghi khi chạy) | Nút "Hủy đơn" mong đợi | Nút "Hủy đơn" quan sát (ghi khi chạy) | Oracle nút |
|---|---|---|---|---|---|
| `pending` | | | Có | | UI-R24 |
| `confirmed` | | | Có | | UI-R24 |
| `shipping` | | | Không | | UI-R26 |
| `delivered` | | | Không | | UI-R25 |
| `canceled` | | | Không | | UI-R25 |
| Cả 5 dòng | | 5 màu khác nhau (AI-04-01) | | | |

---

## 5. Truy vết oracle IA-04

| Oracle | Mục |
|---|---|
| UI-R08 | AI-04-06, AI-04-07 |
| UI-R24 | AI-04-02 |
| UI-R25 | AI-04-03 |
| UI-R26 | AI-04-04 |
| UI-R27 | AI-04-05 |
| UI-R30 | AI-04-01 (phần màu; phần chữ ở AI-01-07) |
| UI-R39 | AI-02-13 (bản nháp IA-02) |
| UI-R47 | AI-04-08, AI-04-09 |
| NR-01 | AI-04-10, AI-04-12 |
| NR-02 | AI-04-13 |
| Ngoài SRS khác (khuyến nghị) | AI-04-11, AI-04-14 đến AI-04-25 |

Tổng: 25 mục (9 căn cứ SRS, 16 khuyến nghị, trong đó 3 mục từ NR-01, NR-02 đã chốt ở `01_oracle.md`).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Trạng thái không chỉ được thể hiện bằng màu (WCAG 2.2 SC 1.4.1) | Đã được bảo đảm bởi AI-01-07 (mỗi trạng thái có chữ riêng) |
| Bấm nút gửi hai lần liên tiếp chỉ gửi một lần (slide AI-First: "No debounce, duplicate orders"; checklist Button "Single / double / multi-click") | Kết quả nhìn thấy được trùng với AI-04-12 (nút bị khóa khi đang xử lý); phần hệ thống có tạo bản ghi trùng hay không thuộc kiểm thử chức năng (CH-05) |
| Thông báo đăng nhập sai giống nhau khi sai email và khi sai mật khẩu | Chống dò tài khoản là yêu cầu bảo mật (CH-05) |
| Thông báo khóa có ghi thời gian chờ còn lại | Có thể mâu thuẫn với ý "không để lộ chi tiết nguyên nhân" của UI-R08; không có nguồn rõ |
| Thời gian hiển thị của thông báo dạng toast (tự ẩn quá nhanh) | Không có ngưỡng đo được trong nguồn của slide để kết luận Passed / Failed |
| Đăng nhập lại được sau 30 giây | Kiểm cơ chế khóa, thuộc kiểm thử chức năng (`01_oracle.md`, UI-R08) |
| Lịch sử đơn tải thất bại thì hiện lỗi, không hiện "chưa có đơn" | Muốn tạo lỗi chỉ cho request lịch sử đơn cần biết địa chỉ API (không có trong survey); phần mất kết nối chung đã có ở AI-04-22 |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Liên quan |
|---|---|---|
| CHD-13 | UI-R47 yêu cầu message "thân thiện" (`01_oracle.md` ghi cần chốt tiêu chí ở bước `review`). Đồng ý tiêu chí đề xuất ở AI-04-09 (câu đầy đủ, không từ kỹ thuật, có gợi ý bước tiếp theo) không? Ý "có gợi ý bước tiếp theo" có nên tách thành mục riêng không? | AI-04-09 |
| CHD-14 | AI-04-07 hiểu "không để lộ chi tiết nguyên nhân" là không nêu số lần sai, ô nào sai, thông tin kỹ thuật. Cách hiểu này đúng ý SRS không? | AI-04-07 |
| CHD-15 | AI-04-03, AI-04-04 coi nút "Hủy đơn" bị làm mờ (disabled) là Failed vì SRS dùng chữ "không được phép" và CH-05 kiểm hiển thị. Hay chấp nhận nút bị làm mờ là Passed? | AI-04-03, AI-04-04 |
| CHD-16 | AI-04-05 tạo tình huống bị từ chối bằng cách hủy cùng một đơn ở 2 tab. Nếu AI-04-04 Failed (đơn `shipping` có nút "Hủy đơn"), có dùng thêm đơn `shipping` làm tình huống thứ hai cho AI-04-05 không? | AI-04-05 |
