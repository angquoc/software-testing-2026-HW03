# Bug report: Task 1 (GUI Checklist), nền tảng N1 Chrome trên Windows

- Người báo: 23120061, Nguyễn Thị Ánh Ngọc
- Repo Issues của nhóm: https://github.com/angquoc/software-testing-2026-HW03-group
- Nguồn: Các mục Failed của `checklist/HW03_T1_GUI_Checklist.xlsx` (cột NT1), lần chạy `exec` ngày 10/11/2026
- Môi trường: Chrome 156.0.8078.81, Windows 11 Home Single Language 26H2 (build 26300.9818), màn hình 2560 x 1440, cửa sổ 1366 x 768
- Ảnh: `checklist/screenshots/`; mỗi issue có ảnh trong mục "Ảnh chụp", tên file ghi ngay trên ảnh

## 1. Cách chọn bug

- Mục Failed có căn cứ SRS (UI-Rxx): Báo hết.
- Mục Failed theo khuyến nghị (WCAG, Nielsen, slide): Chỉ báo khi ảnh đã có cho thấy rõ lỗi; mục phải chụp thêm mới thấy lỗi thì không báo (mục 4).
- Các mục cùng một lỗi gốc được gộp vào một issue.
- Lỗi ở thành phần dùng chung (navbar) đã có issue của người khác: Không tạo issue mới, bình luận vào issue đó (mục 3).
- Severity chọn theo câu hỏi ở README mục 4.3 của repo nhóm.

## 2. Issue đã tạo

| Mã | Issue | Tiêu đề | Mục CL | Severity | IA | Liên quan |
|---|---|---|---|---|---|---|
| B-01 | [#33](https://github.com/angquoc/software-testing-2026-HW03-group/issues/33) | [W-04] Đăng ký từ chối mật khẩu hợp lệ "Abcdef1!" với thông báo mật khẩu quá yếu | CL-65 | critical | IA-02 |  |
| B-02 | [#34](https://github.com/angquoc/software-testing-2026-HW03-group/issues/34) | [W-03] Ô Mật khẩu ở trang đăng nhập hiện rõ mật khẩu (type="text") | CL-46 | high | IA-02 |  |
| B-03 | [#35](https://github.com/angquoc/software-testing-2026-HW03-group/issues/35) | [W-06] Đơn "Đang giao" vẫn có nút "Hủy đơn" và bị hủy khi bấm | CL-87, CL-88 | high | IA-04 |  |
| B-04 | [#36](https://github.com/angquoc/software-testing-2026-HW03-group/issues/36) | [W-06] Số điện thoại hợp lệ 0912345678 bị từ chối khi cập nhật hồ sơ | CL-101, CL-110, CL-52 | medium | IA-02 |  |
| B-05 | [#37](https://github.com/angquoc/software-testing-2026-HW03-group/issues/37) | [W-03] Sau 3 lần đăng nhập sai không có thông báo tài khoản bị tạm khóa | CL-89 | medium | IA-04 |  |
| B-06 | [#38](https://github.com/angquoc/software-testing-2026-HW03-group/issues/38) | [W-04] Form đăng ký không có ô "Xác nhận mật khẩu" | CL-37 | medium | IA-02 |  |
| B-07 | [#39](https://github.com/angquoc/software-testing-2026-HW03-group/issues/39) | [W-03] Form đăng nhập dùng chữ tiếng Anh: Nhãn "Username", nút "Sign In" | CL-01, CL-02, CL-42 | low | IA-01, IA-02 |  |
| B-08 | [#40](https://github.com/angquoc/software-testing-2026-HW03-group/issues/40) | [W-03, W-04, W-06] Ô Email dùng type="text", không chặn định dạng email sai bằng HTML5 | CL-44, CL-45 | medium | IA-02 |  |
| B-09 | [#41](https://github.com/angquoc/software-testing-2026-HW03-group/issues/41) | [W-03] Trang đăng nhập có tiêu đề "Đăng Ký" | CL-14, CL-25 | medium | IA-01 |  |
| B-10 | [#42](https://github.com/angquoc/software-testing-2026-HW03-group/issues/42) | [W-03, W-04, W-06] Không có thẻ <h1> ở trang đăng nhập, đăng ký và hồ sơ | CL-13 | low | IA-01 | Related #19 |
| B-11 | [#43](https://github.com/angquoc/software-testing-2026-HW03-group/issues/43) | [W-03] Lần bấm Tab đầu tiên ở trang đăng nhập nhảy vào nút "Sign In" trước navbar và các ô nhập | CL-15, CL-16 | medium | IA-01 |  |
| B-12 | [#44](https://github.com/angquoc/software-testing-2026-HW03-group/issues/44) | [W-06] Hộp thoại lỗi hủy đơn hiện tiếng Anh "Lỗi: Cannot cancel this order." | CL-05 | low | IA-01 |  |
| B-13 | [#45](https://github.com/angquoc/software-testing-2026-HW03-group/issues/45) | [W-03, W-04, W-06] Tiêu đề tab trình duyệt là "frontend-web" ở mọi trang | CL-06, CL-20 | low | IA-01 |  |
| B-14 | [#46](https://github.com/angquoc/software-testing-2026-HW03-group/issues/46) | [W-04] Nút "Đăng Ký" nền đỏ thay vì xanh dương | CL-08 | low | IA-01 | Related #27 |
| B-15 | [#47](https://github.com/angquoc/software-testing-2026-HW03-group/issues/47) | [W-03, W-04] Nhãn trường bắt buộc không có dấu * | CL-43 | low | IA-02 | Related #28 |
| B-16 | [#48](https://github.com/angquoc/software-testing-2026-HW03-group/issues/48) | [W-03] Thông báo lỗi đăng nhập nằm dưới nút "Sign In" | CL-47 | low | IA-02, IA-04 | Related #26 |
| B-17 | [#49](https://github.com/angquoc/software-testing-2026-HW03-group/issues/49) | [W-03, W-04, W-06] Navbar không highlight mục của trang đang mở | CL-66 | low | IA-03 |  |
| B-18 | [#50](https://github.com/angquoc/software-testing-2026-HW03-group/issues/50) | [W-06] Lịch sử đơn trống không có icon và không gợi ý bước tiếp theo | CL-91, CL-93 | low | IA-04 | Related #15 |
| B-19 | [#51](https://github.com/angquoc/software-testing-2026-HW03-group/issues/51) | [W-03, W-04, W-06] Thẻ <html> khai báo lang="en" cho giao diện tiếng Việt | CL-19 | low | IA-01 |  |
| B-20 | [#52](https://github.com/angquoc/software-testing-2026-HW03-group/issues/52) | [W-03, W-04, W-06] Độ tương phản chữ dưới 4.5:1 ở link, dòng hướng dẫn mật khẩu, nút đỏ và lời chào | CL-23 | low | IA-01 | Related #23 |
| B-21 | [#53](https://github.com/angquoc/software-testing-2026-HW03-group/issues/53) | [W-06] Ngày đặt hàng hiển thị theo tháng/ngày/năm | CL-24 | low | IA-01 |  |
| B-22 | [#54](https://github.com/angquoc/software-testing-2026-HW03-group/issues/54) | [W-03, W-04, W-06] Kiểu viết hoa của tiêu đề, nút và navbar không nhất quán | CL-26, CL-27 | low | IA-01 |  |
| B-23 | [#55](https://github.com/angquoc/software-testing-2026-HW03-group/issues/55) | [W-03, W-04, W-06] Nhãn không gắn với ô nhập, ô không có tên đọc được | CL-54 | low | IA-02 | Related #24 |
| B-24 | [#56](https://github.com/angquoc/software-testing-2026-HW03-group/issues/56) | [W-04, W-06] Ô bị lỗi trông giống hệt các ô khác | CL-58 | low | IA-02 |  |
| B-25 | [#57](https://github.com/angquoc/software-testing-2026-HW03-group/issues/57) | [W-03, W-04, W-06] Ô Email, Mật khẩu, Số điện thoại không có thuộc tính autocomplete | CL-62 | low | IA-02 |  |
| B-26 | [#58](https://github.com/angquoc/software-testing-2026-HW03-group/issues/58) | [W-06] Lời chào "Chào, <Họ Tên>" là link tới hồ sơ nhưng không cho biết dẫn tới đâu | CL-76 | low | IA-03 |  |
| B-27 | [#59](https://github.com/angquoc/software-testing-2026-HW03-group/issues/59) | [W-06] Mở /profile khi chưa đăng nhập chỉ hiện "Vui lòng đăng nhập", không có đường tới trang đăng nhập | CL-78 | medium | IA-03 |  |
| B-28 | [#60](https://github.com/angquoc/software-testing-2026-HW03-group/issues/60) | [W-03, W-04] Đã đăng nhập mà mở /login, /register vẫn hiện form như chưa đăng nhập | CL-79 | medium | IA-03 |  |
| B-29 | [#61](https://github.com/angquoc/software-testing-2026-HW03-group/issues/61) | [W-06] Đổi Họ Tên xong, lời chào trên navbar vẫn hiện tên cũ khi chưa tải lại trang | CL-102 | low | IA-04 | Related #36 |
| B-30 | [#62](https://github.com/angquoc/software-testing-2026-HW03-group/issues/62) | [W-03, W-06] Mất kết nối chỉ báo "Đăng nhập thất bại" / "Lỗi cập nhật", không nói là mất kết nối | CL-105 | low | IA-04 |  |
| B-31 | [#63](https://github.com/angquoc/software-testing-2026-HW03-group/issues/63) | [W-03, W-04] Thông báo lỗi của form không nằm trong role="alert" hay aria-live | CL-106 | low | IA-04 | Related #25 |
| B-32 | [#64](https://github.com/angquoc/software-testing-2026-HW03-group/issues/64) | [W-06] Khổ màn hình 360 px: Trang hồ sơ có thanh cuộn ngang, cột "Thao tác" bị khuất | CL-109 | medium | IA-01 |  |
| B-33 | [#65](https://github.com/angquoc/software-testing-2026-HW03-group/issues/65) | [W-03, W-04] Ô mật khẩu không có nút hiện / ẩn mật khẩu | CL-111 | low | IA-02 |  |

Mọi issue có label `bug`, `platform: web`, `task: T1 checklist`, được gán cho chính người báo.

## 3. Bình luận vào issue đã có (thành phần dùng chung)

| Issue | Mục CL | Nội dung | Trạng thái |
|---|---|---|---|
| Related #18 (Link "Giỏ hàng" không có badge số lượng) | CL-68, CL-69 | Lỗi cũng xuất hiện ở navbar của W-03, W-04, W-06 khi đã đăng nhập; ảnh CL-68_chrome_1, CL-68_chrome_2, CL-69_chrome | Đã bình luận: [#18](https://github.com/angquoc/software-testing-2026-HW03-group/issues/18#issuecomment-6762778316) |
| Related #29 (Nút đăng xuất ghi "Thoát") | CL-70 | Lỗi cũng xuất hiện ở navbar của W-03, W-04, W-06; ảnh CL-70_chrome | Đã bình luận: [#29](https://github.com/angquoc/software-testing-2026-HW03-group/issues/29#issuecomment-6762778772) |

## 4. Mục Failed không báo lên Issues

| Mục CL | Lý do |
|---|---|
| CL-57 | Ảnh chưa thấy được focus nằm ở nút gửi sau khi báo lỗi |
| CL-74, CL-107 | Lỗi chỉ thấy khi đang rê chuột; ảnh không có trạng thái này |
| CL-94, CL-96 | Lỗi chỉ thấy lúc đang tải / đang chờ khi mạng chậm; ảnh không có trạng thái này |
| CL-97 | Ảnh chỉ thấy đơn đã bị hủy, không chứng minh được là không có hộp xác nhận |
| CL-108 | Ảnh không thấy bước xóa dữ liệu site |
| CL-112 | Ảnh không thấy tab Network với 3 request |

Các mục CL-20, CL-25, CL-52, CL-101, CL-110 không có issue riêng vì đã gộp vào issue của lỗi gốc (xem cột Mục CL ở mục 2).

## 5. Ảnh danh sách issue

Trang Issues đã lọc `author:angquoc label:"task: T1 checklist"`, đủ #33 đến #65: `bugs/screenshots/issues_list_T1_1.png`, `bugs/screenshots/issues_list_T1_2.png` (WORKFLOW mục 5).

---

# Bug report: Task 2 (Usability Evaluation), luồng FL-05 trên Web Admin

- Người báo: 23120061, Nguyễn Thị Ánh Ngọc
- Nguồn: Phiên usability (pilot `PL` và P1 đến P7, hồ sơ ở `usability/pilot/`, `usability/sessions/`); SV tái hiện lại bug ngoài phiên để chụp ảnh
- Môi trường: Chrome 156.0.8078.81, Windows 11 Home Single Language 26H2 (build 26300.9818)
- Ảnh: `usability/screenshots/`
- Chỉ đưa lên Issues **bug thật** (hệ thống sai so với đặc tả hoặc chặn người dùng); vấn đề thiết kế ghi ở `usability/05_findings.md` (README nhóm mục 4.1)

## 6. Issue đã tạo (Task 2)

| Mã | Issue | Tiêu đề | Phát hiện ở | Căn cứ | Severity | IA | Ảnh |
|---|---|---|---|---|---|---|---|
| B-T2-01 | [#66](https://github.com/angquoc/software-testing-2026-HW03-group/issues/66) | [FL-05] Bấm "Thêm mới" khi chưa nhập tên vẫn tạo danh mục không tên | PL (pilot), mốc 00:29; SV tái hiện 10/11/2026 | FR-14 | medium | IA-02, IA-04 | `flow_12_category_empty_name.png`, `flow_13_category_empty_created.png` |
| B-T2-02 | [#67](https://github.com/angquoc/software-testing-2026-HW03-group/issues/67) | [FL-05] Sau khi lưu ở form "Sửa", bảng sản phẩm hiện sai và lần sửa tiếp theo (chưa tải lại trang) ghi đè dữ liệu | P4, mốc 01:55 đến 02:18; SV tái hiện bằng script 11/11/2026 | FR-15 | critical | IA-02, IA-04 | `flow_14` đến `flow_18` (`flow_14_product_edit_list_wrong_names.png`, ...) |

Issue Task 2 có label `bug`, `platform: admin`, `task: T2 usability`, được gán cho chính người báo.

### B-T2-01: Chi tiết

- **Điều kiện tiên quyết:** Đã reset DB; đăng nhập Admin `admin@eshop.com`; đang ở trang "Quản lý Danh mục" (bảng có 3 danh mục mẫu).
- **Các bước tái hiện:**
  1. Để trống ô "Tên danh mục mới".
  2. Bấm "Thêm mới".
- **Kết quả mong đợi:** FR-14: "Tên danh mục là bắt buộc, không được để trống." Hệ thống không tạo danh mục khi tên để trống.
- **Kết quả thực tế:** Bảng danh mục có thêm dòng `#4` với cột "Tên Danh Mục" trống; không có thông báo lỗi nào.
- **Severity:** `medium`. Theo câu hỏi ở README nhóm mục 4.3: Không lộ hay mất dữ liệu, không chặn luồng (câu 1: Không); người dùng tránh được bằng cách nhập tên, hoặc xoá dòng trống bằng nút "Xóa" (câu 2: Không); sai đặc tả FR-14 nhưng có cách đi vòng (câu 3: Có).
- **IA:** IA-02 (form không chặn trường bắt buộc để trống), IA-04 (không có phản hồi lỗi).
- **Ghi chú:** Phát hiện ở phiên pilot: Người pilot tưởng nút "Thêm mới" mở form tạo danh mục, bấm khi chưa nhập tên và hệ thống tạo ngay một dòng trống (`usability/pilot/notes.md` mục 5). Người pilot không tính vào 7 người; bug được SV tái hiện lại và chụp ảnh ngoài phiên.

### B-T2-02: Chi tiết

- **Điều kiện tiên quyết:** Đã reset DB; đăng nhập Admin `admin@eshop.com`; vào trang "Quản lý Sản phẩm" (bảng có 5 sản phẩm mẫu).
- **Các bước tái hiện, trường hợp A (ghi đè tên sản phẩm khác):**
  1. Bấm "Sửa" ở dòng "iPhone 15 Pro Max", đổi giá `30000000` thành `30000222`, bấm "Lưu sản phẩm". Hộp thoại báo "Cập nhật thành công!", bấm OK.
  2. Không tải lại trang. Bảng lúc này hiện tên "iPhone 15 Pro Max" ở **mọi dòng**; cột Giá và Ảnh vẫn là giá trị cũ, kể cả ở dòng vừa sửa (`flow_14`, chụp ở trường hợp tương tự với "MacBook Pro M3").
  3. Bấm "Sửa" ở dòng thứ hai (sản phẩm "Samsung Galaxy S24 Ultra"). Form điền sẵn tên "iPhone 15 Pro Max". Chỉ đổi giá thành `28000222`, bấm "Lưu sản phẩm", OK.
  4. Tải lại trang, vào lại "Sản phẩm".
- **Các bước tái hiện, trường hợp B (mất thay đổi của lần sửa trước, giống P4):**
  1. Bấm "Sửa" ở dòng "Tai nghe AirPods Pro 2", đổi URL ảnh và danh mục, bấm "Lưu sản phẩm", OK (`flow_16`).
  2. Không tải lại trang, bấm "Sửa" lại đúng dòng đó. Form hiện URL ảnh và danh mục **cũ** (`flow_17`).
  3. Chỉ đổi mô tả, bấm "Lưu sản phẩm", OK.
  4. Tải lại trang, vào lại "Sản phẩm", bấm "Sửa" dòng đó.
- **Kết quả mong đợi:** FR-15: "Admin có thể Thêm / Xem / Sửa / Xóa sản phẩm." và "Khi Sửa một sản phẩm, chỉ sản phẩm đó bị thay đổi — các sản phẩm khác giữ nguyên." Sau khi lưu, bảng và form "Sửa" hiện đúng dữ liệu đã lưu; lần sửa sau không làm mất thay đổi của lần trước, không đổi sản phẩm khác.
- **Kết quả thực tế:**
  - A: Sau khi tải lại, sản phẩm thứ hai mang tên "iPhone 15 Pro Max" (`flow_15`): Tên của một sản phẩm khác bị ghi đè dù người dùng không sửa tên.
  - B: Sau khi tải lại, URL ảnh và danh mục trở về giá trị trước lần sửa thứ nhất; chỉ mô tả của lần sửa thứ hai còn (`flow_18`).
  - Cả hai lần lưu đều báo "Cập nhật thành công!". Nếu sửa một lần trên trang vừa tải lại thì mọi ô đều được lưu đúng (script, trường hợp E1 đến E6).
- **Severity:** `critical` (AI đề xuất, SV chốt). Theo README nhóm mục 4.3, câu 1: Có làm mất dữ liệu: Thao tác sửa bình thường (sửa hai sản phẩm, hoặc sửa một sản phẩm hai lần mà không tải lại trang) ghi đè dữ liệu đã lưu, kể cả của sản phẩm khác, trong khi hệ thống vẫn báo thành công nên admin không biết để sửa lại.
- **IA:** IA-04 (bảng hiện sai trạng thái sau khi lưu), IA-02 (form "Sửa" điền sẵn giá trị sai).
- **Ghi chú:**
  - Phát hiện ở phiên P4: P4 sửa URL ảnh và danh mục lúc 01:55, bảng vẫn hiện ảnh hỏng nên P4 sửa thêm hai lần (02:12, 02:18) trên trang chưa tải lại rồi bỏ cuộc (`usability/sessions/P4/notes.md` mục 5). Người điều phối kiểm D6 cũng trên trang chưa tải lại nên không nhận ra.
  - Tái hiện bằng script `usability/tools/edit_product_check.js` (8 trường hợp E1 đến E8, lần chạy 01:24:21 ngày 11/11/2026; log `usability/tools/edit_check_log.txt`, ảnh gốc `usability/tools/edit_check_shots/`). Script tìm phần tử theo chữ nhìn thấy trên trang, không đọc mã nguồn.
  - Related #9: Issue #9 báo trang thanh toán vẫn dùng giá cũ sau khi Admin đổi giá; nếu lần đổi giá trong #9 làm trên trang chưa tải lại sau một lần sửa khác, giá có thể đã không được lưu, tức cùng nguyên nhân với bug này.
  - Ngoài lề (không báo riêng): Tải lại trang Admin khi đang ở "Sản phẩm" thì bị đưa về Dashboard (IA-03).

## 7. Ảnh danh sách issue (Task 2)

Trang Issues đã lọc `author:angquoc label:"task: T2 usability"`, đủ #66 và #67: `bugs/screenshots/issues_list_T2.png` (WORKFLOW mục 5; một ảnh nên không có hậu tố).
