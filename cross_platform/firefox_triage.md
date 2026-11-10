# T3 firefox: Phân nhóm 112 mục trước khi chạy trên BrowserStack

- Bước: `[T3][firefox]` (chuẩn bị trước khi đăng ký trial)
- Bản gốc của AI: `ai_raw/T3_firefox_triage.md` (giữ nguyên, không sửa)
- Trạng thái: Đã review; đã chốt D-16 đến D-19 (mục 6)

---

## 1. Mục đích và căn cứ

Trial BrowserStack Live chỉ có khoảng 30 phút (`01_setup.md` mục 7.2), không đủ chạy cả 112 mục trên Firefox (N2). Danh sách này chia 112 mục thành 3 nhóm **trước khi đăng ký trial**, để phút trial chỉ dùng cho các mục cần thiết nhất.

Căn cứ phân nhóm:

- Cột "Cách kiểm" và kết quả N1 (Chrome) trong `checklist/HW03_T1_GUI_Checklist.xlsx`, sheet Checklist.
- Script `checklist/tools/devtools_check.js`: Chỉ đọc trang, chạy được trên Chrome và Firefox, kiểm 17 mục (CL-13, CL-14, CL-19, CL-22, CL-28 đến CL-32, CL-44, CL-46, CL-54, CL-62, CL-76, CL-83, CL-106, CL-109).
- `01_setup.md`: Các quyết định D-03, D-04, D-07, D-10 (cùng vùng trang 1366 x 768 với N1).

## 2. Tiêu chí ba nhóm

| Nhóm | Tên | Tiêu chí | Số mục |
|---|---|---|---|
| A | Console | Mục có trong `devtools_check.js`: Dán script vào Console của Firefox từ xa ở mỗi trang / trạng thái, đọc bảng gợi ý rồi tự chốt Passed / Failed | 17 |
| B | Ưu tiên chạy tay | Kết quả **có thể khác giữa trình duyệt** (engine hiển thị, mô hình focus, validate HTML5, locale, bfcache, zoom), hoặc kiểm được mà không tốn thêm phút. Chia hai cách làm: | 44 |
| | B-phiên | Thao tác trong phiên cloud, theo thứ tự ở mục 3 | 12 |
| | B-ảnh | Mục "Nhìn" thấy được trong ảnh tổng quan (`overview_*.png`) và ảnh môi trường đã phải chụp theo D-07; SV xem ảnh và chốt **sau** phiên, không tốn phút | 32 |
| C | Không chạy lại | Kết quả do nội dung, dữ liệu hay logic của trang quyết định, ít phụ thuộc trình duyệt; hoặc tốn nhiều thời gian (khóa tài khoản, 2 tab, đổi tài khoản, giả lập mạng); hoặc Chrome ghi "Không chạy được" vì lỗi của trang | 51 |

Danh sách mã theo nhóm:

- **A (17):** CL-13, CL-14, CL-19, CL-22, CL-28, CL-29, CL-30, CL-31, CL-32, CL-44, CL-46, CL-54, CL-62, CL-76, CL-83, CL-106, CL-109
- **B-phiên (12):** CL-15, CL-16, CL-17, CL-21, CL-33, CL-34, CL-45, CL-77, CL-78, CL-80, CL-81, CL-82
- **B-ảnh (32):** CL-01, CL-02, CL-03, CL-04, CL-06, CL-07, CL-08, CL-09, CL-10, CL-11, CL-12, CL-18, CL-20, CL-24, CL-25, CL-26, CL-27, CL-35, CL-36, CL-37, CL-42, CL-43, CL-51, CL-53, CL-64, CL-66, CL-70, CL-84, CL-85, CL-86, CL-87, CL-111
- **C (51):** CL-05, CL-23, CL-38, CL-39, CL-40, CL-41, CL-47, CL-48, CL-49, CL-50, CL-52, CL-55, CL-56, CL-57, CL-58, CL-59, CL-60, CL-61, CL-63, CL-65, CL-67, CL-68, CL-69, CL-71, CL-72, CL-73, CL-74, CL-75, CL-79, CL-88, CL-89, CL-90, CL-91, CL-92, CL-93, CL-94, CL-95, CL-96, CL-97, CL-98, CL-99, CL-100, CL-101, CL-102, CL-103, CL-104, CL-105, CL-107, CL-108, CL-110, CL-112

Hai mục nên chú ý:

- **CL-24 (định dạng ngày):** Chrome hiện tháng / ngày / năm. Kiểu lỗi này thường do trang định dạng ngày theo locale của trình duyệt, nên Firefox trên máy cloud (và Chrome trên điện thoại ở N3) có thể ra kết quả khác. Đây là ứng viên tốt nhất cho bug "chỉ xuất hiện trên một số nền tảng". Ảnh tổng quan `/profile` phải thấy rõ cột Ngày đặt.
- **CL-33, CL-34:** Đã chạy trên Chrome (NT1 có kết quả và ảnh): Cả hai Passed. Trên Android Chrome (NT3) cả hai Failed (zoom 200% làm navbar và bảng bị cắt; Họ Tên dài làm lời chào xuống 4 dòng, đẩy lệch navbar), nên đây là hai mục có kết quả khác nhau giữa nền tảng, đáng chạy trên Firefox.

## 3. Thứ tự trong phiên cloud

Thời gian ghi bên cạnh là **ước lượng của AI, chưa đo thật**. Tổng khoảng 20 đến 25 phút.

### 3.1 Chuẩn bị trước khi bật tunnel (không tốn phút)

1. Mọi việc ở `01_setup.md` mục 7.2 bước 2 (server, reset và seed, Sticky Notes, Excel mở ở cột NT2).
2. Mở sẵn `checklist/tools/devtools_check.js` để chép.
3. Chuẩn bị cách đưa script vào máy từ xa nếu dán từ máy SV không được (mục 4).
4. In hoặc mở sẵn danh sách B-phiên ở mục 3.2 để làm theo.

### 3.2 Trong phiên

| Bước | Trang / trạng thái | Việc làm | Mục | Ước lượng |
|---|---|---|---|---|
| 1 | Bất kỳ | Mở `about:support`, chụp `overview_env.png` (cùng thanh công cụ BrowserStack) | Ảnh môi trường | 1 phút |
| 2 | Bất kỳ | Thử dán một dòng vào Console (gõ `allow pasting` nếu Firefox yêu cầu) để biết dán từ máy SV có chạy không; không được thì dùng cách ở mục 4 | | 1 phút |
| 3 | `/login` | Đăng nhập `test@eshop.com`; quan sát navbar đổi trạng thái | CL-80 | 1 phút |
| 4 | `/profile` đã đăng nhập | Bật Responsive Design Mode (`Ctrl+Shift+M`) 1366 x 768, dán script, chụp màn hình khi bảng kết quả đang hiện | A (trừ CL-109) | 2 phút |
| 5 | như trên | Đặt rộng 360, dán lại script | CL-109 | 1 phút |
| 6 | như trên | Tắt Responsive Design Mode; một lượt Tab từ thanh địa chỉ qua hết trang | CL-15, CL-16, CL-17, CL-21 | 2 phút |
| 7 | như trên | Chụp `overview_profile` (cuộn nếu cần, `_1`, `_2`), thấy đủ 5 đơn, cột Ngày đặt, Tổng tiền, footer | Ảnh cho B-ảnh | 1 phút |
| 8 | như trên | Zoom 200% (`Ctrl` + `+`), xem bố cục, rồi về 100% | CL-33 | 1 phút |
| 9 | `/profile` | Bấm đăng xuất | CL-81, CL-82 | 0,5 phút |
| 10 | `/profile` chưa đăng nhập | Dán script; xem và bấm đường đi tới trang đăng nhập; chụp màn hình trang | A, CL-78 | 1,5 phút |
| 11 | `/login` | Lượt Tab; chụp `overview_login` | CL-15, CL-16, CL-21 | 1,5 phút |
| 12 | `/login` | Nhập `abc` vào ô thứ nhất, mật khẩu bất kỳ, bấm "Sign In"; quan sát bong bóng validate | CL-45 | 1 phút |
| 13 | `/login` (đang có thông báo lỗi) | Dán script với 1366 x 768, rồi rộng 360 | A, CL-32, CL-109, CL-106 | 2 phút |
| 14 | `/login` | Zoom 200% rồi về 100% | CL-33 | 0,5 phút |
| 15 | `/register` | Lượt Tab; chụp `overview_register` | CL-15, CL-16, CL-21 | 1,5 phút |
| 16 | `/register` | Bấm "Đăng Ký" với mật khẩu yếu để có thông báo lỗi; dán script với 1366 x 768, rồi rộng 360; zoom 200% | A, CL-106, CL-33 | 2,5 phút |
| 17 | `/login` sang `/register` | Bấm "Đăng ký ngay", bấm Back; đăng nhập, bấm lời chào tới `/profile`, bấm Back | CL-77 | 1,5 phút |
| 18 | `/profile` đã đăng nhập | Chỉ làm nếu còn phút: Đổi Họ Tên dài, xem navbar ở 3 trang | CL-34 | 2 phút |

Mỗi mục Failed trong phiên chụp ngay một ảnh toàn màn hình. Một ảnh có thể là bằng chứng cho nhiều mục (ví dụ bảng kết quả script); khi đó lưu một bản cho mỗi mã mục (`CL-xx.png`), như cách đã làm ở N1.

### 3.3 Sau phiên (không tốn phút)

1. Xem ảnh tổng quan và ảnh môi trường, chốt 32 mục B-ảnh. Mục Failed dùng chính ảnh tổng quan làm bằng chứng, lưu thêm một bản tên `CL-xx.png`.
2. Đối chiếu bảng gợi ý của script với "Kết quả mong đợi" và chốt nhóm A.
3. Điền sheet "Môi trường" cột NT2 (R-07).
4. Ghi nhóm C theo D-16: Để trống ô Kết quả, ghi lý do ở Notes (mục 5).

## 4. Đưa script vào máy từ xa

BrowserStack Live thường cho dán chữ từ máy SV sang máy từ xa, nhưng chưa kiểm với một file khoảng 21 KB. Bước 2 ở mục 3.2 dùng để thử. Nếu không dán được, dùng cách dự phòng đã chốt ở D-17: **Phục vụ file qua tunnel** (dòng đầu của bảng dưới). Dòng thứ hai giữ lại để tham khảo:

| Cách | Làm thế nào | Ghi chú |
|---|---|---|
| Phục vụ file qua tunnel | Trước phiên, chép **riêng** `devtools_check.js` vào một thư mục trống, chạy một server tĩnh ở đó (ví dụ `python -m http.server 8099`); trong phiên, mở `http://localhost:8099/devtools_check.js` ở tab khác của Firefox từ xa, chọn hết, chép, dán vào Console của tab SUT | Tunnel chuyển mọi cổng localhost nên Firefox từ xa mở được; chép và dán trong cùng máy từ xa nên không phụ thuộc đồng bộ clipboard. Chỉ phục vụ đúng một file, không phục vụ cả thư mục `tools/` |
| Không dùng script | Kiểm nhóm A bằng tay qua Inspector và Accessibility của Firefox | Tốn phút hơn nhiều; có thể phải chuyển một phần nhóm A sang C |

## 5. Ghi kết quả nhóm C

Cột kết quả trong Excel chỉ nhận `Passed`, `Failed`, `N/A`, `Không chạy được`; ô trống được sheet "Tổng hợp" đếm là "Chưa chạy (trống)".

Đã chốt D-16: **Để trống**.

| Lựa chọn D-16 | Cách ghi | Nhận xét |
|---|---|---|
| **Để trống (đã chọn)** | Ô Kết quả trống; Notes ghi "Không chạy trên N2 do giới hạn phút trial BrowserStack; xem mục C trong `firefox_triage.md`" | Đúng thực tế; sheet "Tổng hợp" tự đếm là chưa chạy |
| Chạy nếu còn phút (không chọn) | Sau bước 18, chạy tiếp các mục C theo thứ tự SV chọn; mục còn lại để trống như trên | Tăng số mục đã chạy trên N2 |

Không được dùng:

- **Chép kết quả Chrome sang cột Firefox:** Trái WORKFLOW §3.1.3 ("Kết quả thực tế chỉ lấy từ lần chạy thật") và đề §11.
- **Ghi `N/A`:** `N/A` dành cho mục không áp dụng được trên nền tảng (R-06); các mục C áp dụng được, chỉ là không chạy.
- **Ghi `Không chạy được`:** Ở N1 giá trị này nghĩa là đã thử nhưng trang chặn; trên N2 các mục C không được thử.

Hệ quả cần nêu trong `02_compare.md`: Trên N2 chỉ chạy khoảng 61 / 112 mục (A, B), so sánh với N1 và N3 chỉ trên phần chung đó, và nêu lý do (giới hạn trial).

## 6. Quyết định

| Mã | Quyết định | Các lựa chọn | Đã chốt |
|---|---|---|---|
| D-16 | Cách ghi nhóm C trên N2 | Để trống, ghi lý do ở Notes / Chạy tiếp nếu còn phút, phần còn lại để trống | Để trống, ghi lý do ở Notes |
| D-17 | Cách dự phòng nếu không dán được script | Phục vụ file qua tunnel / Kiểm nhóm A bằng tay | Phục vụ file script qua tunnel: Mở server tạm trên máy SV, mở URL của file trong Firefox từ xa |
| D-18 | Có giữ cách xem B-ảnh từ ảnh tổng quan sau phiên không | Giữ (32 mục, không tốn phút) / Chuyển một phần sang C | Giữ nguyên |
| D-19 | Có chạy CL-33, CL-34 trên Chrome trước khi chạy N2 không | Có / Không | Không cần: CL-33, CL-34 đã chạy trên Chrome (NT1 có kết quả và ảnh) |

## 7. Bảng 112 mục

| Mã | IA | Nội dung kiểm | Kết quả Chrome (N1) | Nhóm | Ghi chú |
|---|---|---|---|---|---|
| CL-01 | IA-01 | Nhãn của mọi ô nhập và placeholder có dùng tiếng Việt không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-02 | IA-01 | Chữ trên mọi nút và link trong nội dung trang có dùng tiếng Việt không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-03 | IA-01 | Các tiêu đề trên trang (tiêu đề trang, tiêu đề khối, tiêu đề cột bảng) có dùng tiếng Việt không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-04 | IA-01 | Các mục trên navbar và chữ ở footer có dùng tiếng Việt không? | Passed | B-ảnh | Footer có thể cần ảnh cuộn (`_2`) |
| CL-05 | IA-01 | Các thông báo hiển thị cho người dùng có dùng tiếng Việt không? Gồm: Thông báo khi chưa đăng nhập, thông báo lịch sử đơn trống, thông báo lỗi và thông báo thành công sau khi gửi form, thông báo hủy đơn (thành công và bị từ chối), thông báo khóa tài khoản, thông báo mất kết nối, thông báo hết phiên đăng nhập | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-06 | IA-01 | Tiêu đề trên tab trình duyệt có dùng tiếng Việt không? | Failed | B-ảnh | Tiêu đề tab nằm trong ảnh toàn màn hình |
| CL-07 | IA-01 | Chữ trạng thái đơn trong bảng lịch sử có là tiếng Việt và khác nhau cho từng trạng thái không? Kiểm theo ma trận ở mục 4 | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-08 | IA-01 | Nút hành động tích cực (nút Submit của form: "Sign In", "Đăng Ký", "Cập nhật") có nền màu xanh dương không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-09 | IA-01 | Nút nguy hiểm / hủy bỏ ("Hủy đơn" và nút đăng xuất trên navbar) có nền màu đỏ không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-10 | IA-01 | Mọi số tiền trong cột Tổng tiền có ký hiệu ₫ không? | Passed | B-ảnh | Định dạng số có thể theo ngôn ngữ (locale) của trình duyệt, máy cloud có thể khác máy SV |
| CL-11 | IA-01 | Số tiền có phân cách hàng nghìn bằng dấu phẩy không? | Passed | B-ảnh | Như CL-10 |
| CL-12 | IA-01 | Ký hiệu ₫ có đặt sau số, cách số một khoảng trắng không? | Passed | B-ảnh | Như CL-10 |
| CL-13 | IA-01 | Mỗi trang có đúng một thẻ <h1> không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-14 | IA-01 | Nội dung thẻ <h1> có mô tả đúng trang đang mở không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-15 | IA-01 | Khi bấm Tab từ đầu trang, focus có đi qua các mục navbar theo thứ tự từ trái sang phải trước khi vào nội dung trang không? | Failed | B-phiên | Mô hình focus của Firefox khác Chrome (link, phần tử có `tabindex`); Chrome Failed ở W-03 do `tabindex=1` |
| CL-16 | IA-01 | Trong form, focus có đi từ trên xuống dưới theo đúng thứ tự hiển thị không? | Failed | B-phiên | Làm chung một lượt Tab với CL-15 |
| CL-17 | IA-01 | Ở W-06, focus có đi hết khối bên trái (form hồ sơ) rồi mới sang khối bên phải (lịch sử đơn), và trong bảng đi từ dòng trên xuống dòng dưới không? | Passed | B-phiên | Làm chung một lượt Tab với CL-15 ở W-06 |
| CL-18 | IA-01 | Bảng lịch sử đơn có hiển thị đủ 4 thông tin: Mã đơn, Ngày đặt, Tổng tiền, Trạng thái không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-19 | IA-01 | Thẻ <html> có khai báo ngôn ngữ tiếng Việt không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-20 | IA-01 | Tiêu đề tab trình duyệt có mô tả đúng trang và khác nhau giữa các trang không? | Failed | B-ảnh | So tiêu đề tab trong 3 ảnh tổng quan |
| CL-21 | IA-01 | Khi bấm Tab, phần tử đang được focus có dấu hiệu nhìn thấy được (viền, khung, đổi màu) không? | Passed | B-phiên | Viền focus mặc định của Firefox khác Chrome; quan sát trong cùng lượt Tab |
| CL-22 | IA-01 | Ô Email bị khóa ở W-06 có được khai báo không sửa được bằng thuộc tính chuẩn HTML (readonly hoặc disabled) không? | Passed | A | Script đọc readonly / disabled; nếu gợi ý "Xem tay" thì xem phần Accessibility của Firefox |
| CL-23 | IA-01 | Độ tương phản giữa chữ và nền có đạt tối thiểu 4.5:1 (chữ thường) và 3:1 (chữ lớn) không? | Failed | C | Màu do CSS quyết định, giống nhau giữa trình duyệt. Firefox không có Lighthouse; nếu chạy thì dùng tab Accessibility, "Check for issues" > Contrast |
| CL-24 | IA-01 | Ngày đặt có hiển thị theo thứ tự ngày / tháng / năm không? | Failed | B-ảnh | **Rủi ro khác biệt cao:** Chrome hiện tháng / ngày / năm, kiểu này thường do định dạng theo locale của trình duyệt; Firefox trên máy cloud có thể ra khác. Đối chiếu ngày tạo đơn của seed |
| CL-25 | IA-01 | Cùng một hành động có dùng cùng một từ ở mọi chỗ (navbar, tiêu đề trang, nút, link) không? | Failed | B-ảnh | So chữ của cùng hành động trên 3 ảnh tổng quan |
| CL-26 | IA-01 | Các tiêu đề trên 3 màn hình có dùng cùng một kiểu viết hoa không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-27 | IA-01 | Chữ trên các nút và mục navbar có dùng cùng một kiểu viết hoa không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-28 | IA-01 | Nhãn ô nhập trên 3 màn hình có cùng font, cỡ chữ và màu không? | Passed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-29 | IA-01 | Các nút Submit ("Sign In", "Đăng Ký", "Cập nhật") có cùng chiều cao, font và bo góc không? | Passed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-30 | IA-01 | Cỡ chữ của tiêu đề có lớn hơn cỡ chữ nội dung và nhãn không? | Passed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-31 | IA-01 | Trong mỗi form, nhãn và ô nhập có canh lề trái thẳng hàng với nhau không? | Passed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-32 | IA-01 | Ở cửa sổ 1366 x 768, trang có hiển thị đủ nội dung, không chữ bị cắt, không phần tử chồng lên nhau, không có thanh cuộn ngang không? | Passed | A | Firefox Responsive Design Mode (`Ctrl+Shift+M`) đặt 1366 x 768 rồi dán lại script (script báo "Chưa đúng kích thước" nếu sai) |
| CL-33 | IA-01 | Khi zoom trình duyệt 200%, mọi nội dung và chức năng vẫn dùng được, không bị cắt hay chồng lấn không? | Passed | B-phiên | Bố cục khi zoom phụ thuộc engine. Chrome (NT1) Passed, Android Chrome (NT3) Failed |
| CL-34 | IA-01 | Khi Họ Tên dài (ví dụ 50 ký tự hợp lệ), lời chào trên navbar và ô "Họ Tên" có hiển thị gọn, không tràn hay đẩy lệch các mục khác không? | Passed | B-phiên | Làm cuối nếu còn phút: Phải sửa Họ Tên (đổi dữ liệu). Tràn chữ phụ thuộc cách engine ngắt dòng. Chrome (NT1) Passed, Android Chrome (NT3) Failed |
| CL-35 | IA-01 | Chữ hiển thị trên 3 màn hình có lỗi chính tả hoặc sai dấu tiếng Việt không? | Passed | B-ảnh | Chỉ xét chữ có trong ảnh; W-06 chưa đăng nhập lấy từ ảnh chụp lúc chạy Console ở trạng thái đó (nếu có chụp) |
| CL-36 | IA-02 | Form đăng ký có đủ 3 ô Họ Tên, Email, Mật khẩu không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-37 | IA-02 | Form đăng ký có ô "Xác nhận mật khẩu" không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-38 | IA-02 | Khi Mật khẩu và Xác nhận mật khẩu không khớp, form có hiện thông báo lỗi không? | Không chạy được | C | Chrome "Không chạy được": Không có ô Xác nhận mật khẩu |
| CL-39 | IA-02 | Khi Email sai định dạng, form có hiện thông báo lỗi không? | Không chạy được | C | Chrome "Không chạy được": Trang Đăng ký từ chối mọi mật khẩu hợp lệ |
| CL-40 | IA-02 | Khi Email đã tồn tại, form có hiện thông báo lỗi không? | Không chạy được | C | Như CL-39 |
| CL-41 | IA-02 | Khi mật khẩu yếu, form có hiện thông báo lỗi không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-42 | IA-02 | Nhãn ô thứ nhất của form đăng nhập có cho biết người dùng phải nhập Email không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-43 | IA-02 | Nhãn của các trường bắt buộc có dấu * bên cạnh không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-44 | IA-02 | Các ô Email có dùng type="email" không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-45 | IA-02 | Ô Email của form đăng nhập có chặn định dạng sai bằng validate HTML5 không? | Failed | B-phiên | Validate HTML5 do trình duyệt thực hiện; Firefox có bong bóng báo lỗi riêng. Sau khi làm thì W-03 đang có thông báo lỗi, dán script cho CL-106 |
| CL-46 | IA-02 | Các ô mật khẩu có dùng type="password" không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-47 | IA-02 | Thông báo lỗi của form có nằm trên nút gửi không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-48 | IA-02 | Ba ô Họ Tên, Số điện thoại, Địa chỉ giao hàng có sửa được không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-49 | IA-02 | Ô Email có bị khóa, không sửa được không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-50 | IA-02 | Khi Số điện thoại không hợp lệ, form có hiện thông báo lỗi không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-51 | IA-02 | Form hồ sơ có ô hay lựa chọn nào để đổi vai trò (role) không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-52 | IA-02 | Khi mở trang hồ sơ, các ô có hiện sẵn đúng dữ liệu hiện tại của tài khoản không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-53 | IA-02 | Ô Email bị khóa có nhìn khác các ô sửa được không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-54 | IA-02 | Mỗi ô nhập có tên đọc được bởi công cụ hỗ trợ (nhãn gắn với ô) không? | Failed | A | Script tính tên gần đúng; xác nhận ở Accessibility Inspector của Firefox nếu gợi ý "Xem tay" |
| CL-55 | IA-02 | Thông báo lỗi có cho biết ô nào bị lỗi không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-56 | IA-02 | Thông báo lỗi có nêu điều kiện cần đạt để sửa không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-57 | IA-02 | Khi gửi form có lỗi, focus có được đưa về ô bị lỗi không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-58 | IA-02 | Ô bị lỗi có được làm nổi bật không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-59 | IA-02 | Sau khi form báo lỗi, các ô không có lỗi có giữ nguyên dữ liệu đã nhập không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-60 | IA-02 | Ô Họ Tên có từ chối giá trị chỉ gồm khoảng trắng không? | Không chạy được | C | Như CL-39 |
| CL-61 | IA-02 | Bấm Enter trong ô một dòng có gửi form không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-62 | IA-02 | Các ô Email, Mật khẩu, Số điện thoại có khai báo mục đích nhập (thuộc tính autocomplete) phù hợp không? | Failed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-63 | IA-02 | Ô mật khẩu ở form đăng nhập có cho dán (Ctrl + V) không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-64 | IA-02 | Dòng hướng dẫn mật khẩu ở form đăng ký có nêu đủ điều kiện của SRS không? | Passed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-65 | IA-03 | Sau khi đăng ký thành công, trình duyệt có chuyển tới trang Đăng nhập không? | Không chạy được | C | Như CL-39 |
| CL-66 | IA-03 | Mục navbar của trang đang mở có được highlight không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-67 | IA-03 | Khi trang đang mở không có mục tương ứng trên navbar, có mục nào bị highlight sai không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-68 | IA-03 | Link "Giỏ hàng" có hiện badge số lượng khi giỏ có sản phẩm không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-69 | IA-03 | Badge của "Giỏ hàng" có đếm theo tổng số lượng sản phẩm không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-70 | IA-03 | Nút đăng xuất trên navbar có nhãn "Đăng xuất" không? | Failed | B-ảnh | Nhìn; xem từ ảnh tổng quan sau phiên, không tốn phút |
| CL-71 | IA-03 | Mỗi link (trên navbar và trong trang, trừ logo: Xem CL-72) có dẫn tới đúng trang theo chữ trên link không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-72 | IA-03 | Logo "EShop" có là link về trang chủ không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-73 | IA-03 | Khi một link đang được focus, bấm Enter có mở trang như khi bấm chuột không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-74 | IA-03 | Khi rê chuột lên mục navbar và link trong trang, chúng có đổi hình thức (gạch chân hoặc đổi màu) không? | Failed | C | Kiểu rê chuột do CSS quyết định |
| CL-75 | IA-03 | Navbar có cùng các mục, cùng thứ tự, cùng vị trí trên cả 3 màn hình (trong cùng trạng thái đăng nhập) không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-76 | IA-03 | Lời chào "Chào, <Họ Tên>" có cho biết link dẫn tới hồ sơ không? | Failed | A | Chỉ chạy được khi đã đăng nhập |
| CL-77 | IA-03 | Nút Back của trình duyệt có đưa về đúng trang trước và trang hiện đúng không? | Passed | B-phiên | Cách Firefox giữ trang trong bộ nhớ khi bấm Back (bfcache) khác Chrome |
| CL-78 | IA-03 | Khi chưa đăng nhập mà mở /profile, trang có cho đường đi tới trang đăng nhập không? | Failed | B-phiên | Không tốn thêm thời gian: Làm khi đang ở `/profile` chưa đăng nhập để chạy Console |
| CL-79 | IA-03 | Khi đã đăng nhập mà mở /login hoặc /register, trang có tránh hiện lại form như chưa đăng nhập không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-80 | IA-03 | Sau khi đăng nhập thành công, navbar có chuyển sang trạng thái đã đăng nhập không? | Passed | B-phiên | Không tốn thêm thời gian: Quan sát ngay khi đăng nhập đầu phiên |
| CL-81 | IA-03 | Sau khi bấm nút đăng xuất ở trang hồ sơ, trang có thôi hiện dữ liệu hồ sơ không? | Passed | B-phiên | Không tốn thêm thời gian: Bấm đăng xuất để chuyển sang trạng thái chưa đăng nhập |
| CL-82 | IA-03 | Sau khi bấm nút đăng xuất, navbar có về trạng thái chưa đăng nhập không? | Passed | B-phiên | Như CL-81 |
| CL-83 | IA-03 | Trang có vùng nội dung chính được đánh dấu để công cụ hỗ trợ nhảy thẳng tới nội dung không? | Passed | A | Script `devtools_check.js` kiểm được trên Firefox |
| CL-84 | IA-04 | Năm trạng thái đơn có màu phân biệt nhau không? Kiểm theo ma trận ở mục 4 | Passed | B-ảnh | Cần ảnh tổng quan `/profile` thấy đủ 5 đơn của seed |
| CL-85 | IA-04 | Đơn pending và confirmed có nút "Hủy đơn" không? | Passed | B-ảnh | Như CL-84; nếu không phân biệt được nút bấm được hay không qua ảnh thì chuyển sang chạy trong phiên |
| CL-86 | IA-04 | Đơn delivered và canceled có không cho bấm "Hủy đơn" không? | Passed | B-ảnh | Như CL-85 |
| CL-87 | IA-04 | Đơn shipping có không cho bấm "Hủy đơn" không? | Failed | B-ảnh | Như CL-85 |
| CL-88 | IA-04 | Khi hệ thống từ chối một lệnh hủy, giao diện có hiện thông báo cho người dùng không? | Failed | C | Tốn thời gian (2 tab); làm đổi dữ liệu |
| CL-89 | IA-04 | Sau 3 lần đăng nhập sai liên tiếp, trang có hiện thông báo tài khoản bị tạm khóa không? | Failed | C | Tốn thời gian (3 lần sai, chờ khóa) |
| CL-90 | IA-04 | Thông báo khi tài khoản bị tạm khóa có tránh để lộ chi tiết nguyên nhân không? | Passed | C | Phụ thuộc CL-89 |
| CL-91 | IA-04 | Trang lịch sử đơn trống có icon hoặc hình minh họa không? | Failed | C | Phải đăng nhập tài khoản khác (newuser@eshop.com) |
| CL-92 | IA-04 | Thông báo lịch sử đơn trống có là câu đầy đủ, không dùng từ kỹ thuật không? | Passed | C | Như CL-91 |
| CL-93 | IA-04 | Trang lịch sử đơn trống có gợi ý bước tiếp theo cho người dùng không? | Failed | C | Như CL-91 |
| CL-94 | IA-04 | Khi lịch sử đơn đang tải, có dấu hiệu đang tải không? | Failed | C | Cần giả lập mạng chậm; logic hiển thị của trang |
| CL-95 | IA-04 | Trong lúc lịch sử đơn đang tải, trang có tránh hiện nhầm thông báo "chưa có đơn" không? | Passed | C | Như CL-94 |
| CL-96 | IA-04 | Sau khi bấm nút gửi, có dấu hiệu đang chờ hệ thống xử lý không? | Failed | C | Như CL-94 |
| CL-97 | IA-04 | Bấm "Hủy đơn" có hiện dialog xác nhận trước khi hủy không? | Failed | C | Logic của trang; Chrome Failed vì không có hộp xác nhận |
| CL-98 | IA-04 | Chọn "không" (hoặc đóng) dialog xác nhận thì đơn có giữ nguyên không? | Không chạy được | C | Chrome "Không chạy được": Không có hộp xác nhận |
| CL-99 | IA-04 | Sau khi hủy đơn thành công, chữ trạng thái của dòng đó có đổi ngay mà không cần tải lại trang không? | Passed | C | Làm đổi dữ liệu (hủy đơn) |
| CL-100 | IA-04 | Sau khi hủy đơn thành công, trang có báo hủy thành công không? | Passed | C | Như CL-99 |
| CL-101 | IA-04 | Sau khi cập nhật hồ sơ thành công, trang có báo cập nhật thành công không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-102 | IA-04 | Sau khi đổi Họ Tên, lời chào trên navbar có hiện tên mới mà không cần tải lại trang không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-103 | IA-04 | Khi đăng nhập sai (chưa tới mức bị khóa), trang có hiện thông báo lỗi không? | Passed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-104 | IA-04 | Sau khi đăng ký thành công, người dùng có nhận được thông báo đăng ký thành công không? | Không chạy được | C | Như CL-39 |
| CL-105 | IA-04 | Khi mất kết nối tới hệ thống, bấm nút gửi có hiện thông báo dễ hiểu không? | Failed | C | Thông báo do trang tự đặt ("Đăng nhập thất bại...", "Lỗi cập nhật"), không lấy chữ lỗi của trình duyệt |
| CL-106 | IA-04 | Thông báo lỗi và thông báo thành công có được công cụ hỗ trợ đọc tự động khi xuất hiện không? | Failed | A | Cần có thông báo lỗi đang hiện trên trang khi dán script (ví dụ sau khi làm CL-45 ở W-03) |
| CL-107 | IA-04 | Các nút có đổi hình thức khi rê chuột lên không? | Failed | C | Như CL-74 |
| CL-108 | IA-04 | Khi phiên đăng nhập không còn hợp lệ, bấm "Cập nhật" có hiện thông báo yêu cầu đăng nhập lại không? | Failed | C | Logic phiên đăng nhập của trang |
| CL-109 | IA-01 | Ở kích thước màn hình điện thoại (rộng 360 px), trang có hiển thị vừa vặn, không có thanh cuộn ngang và không có phần tử chồng lên nhau không? | Failed | A | Responsive Design Mode đặt rộng 360 rồi dán lại script |
| CL-110 | IA-02 | Ô Số điện thoại có chấp nhận số hợp lệ bị dính khoảng trắng ở hai đầu (thường gặp khi sao chép / dán) không? | Failed | C | Kết quả do nội dung, dữ liệu hoặc logic của trang quyết định, ít phụ thuộc trình duyệt |
| CL-111 | IA-02 | Ô mật khẩu có nút (icon con mắt) để người dùng chọn hiện / ẩn mật khẩu vừa nhập không? | Failed | B-ảnh | Có hay không có icon con mắt nhìn thấy trong ảnh W-03, W-04. Firefox không có nút hiện mật khẩu riêng của trình duyệt (Edge có), nên kết quả là của trang |
| CL-112 | IA-04 | Khi bấm liên tiếp nhiều lần vào nút gửi, form có chỉ được gửi một lần không? | Failed | C | Logic gửi form của trang; cần tab Network |

---

## Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 5, 6 (D-16) | Nhóm C trên N2: Để trống ô Kết quả, ghi lý do ở Notes | Quyết định của SV | | Đúng thực tế; không chép kết quả Chrome, không ghi N/A hay Không chạy được |
| Mục 4, 6 (D-17) | Cách dự phòng khi không dán được script: Phục vụ file script qua tunnel (server tạm trên máy SV, mở URL trong Firefox từ xa) | Quyết định của SV | | Không phụ thuộc đồng bộ clipboard, giữ được nhóm A chạy bằng script |
| Mục 2, 6 (D-18) | Giữ cách xem 32 mục B-ảnh từ ảnh tổng quan sau phiên | Quyết định của SV | | Không tốn phút trial |
| Mục 2, 6, 7 (D-19) | Không cần chạy thêm CL-33, CL-34 trên Chrome; sửa các chỗ ghi "Chrome chưa chạy" thành kết quả thật của NT1 (Passed cả hai) và ghi kết quả NT3 (Failed cả hai) | Quyết định của SV | | NT1 đã có kết quả và ảnh cho CL-33, CL-34 sau khi bản AI được viết |
