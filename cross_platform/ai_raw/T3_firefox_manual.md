# T3 firefox: Kết quả N2 đầy đủ 112 mục (bản AI)

- Bước: `[T3][firefox]`
- Thời gian: 2026-11-11 11:20
- Nền tảng: Firefox 159.0 trên Windows 11, máy của SV (D-28: Trial BrowserStack 1 phút mỗi thiết bị, LambdaTest Freemium 2 phiên khoảng 2 phút; ảnh `browserstack_trial_limit.png`, `lambdatest_trial_limit_1.png`, `_2.png`)
- Nguồn: `checklist/tools/n2_run_log.txt` (nhóm A đến G, 10:42 đến 10:50), `n2_cl34_log.txt` (CL-34), `n2_extra_log.txt` (ảnh tổng quan, CL-05, CL-105), `n2_recheck_log.txt` (nhóm K: CL-33 và 10 mục SV bấm tay), AI xem ảnh (các mục "Chạy tay")
- Ghi chú: Cột "Nguồn kết quả" cho biết kết quả do script đo, SV bấm tay hay AI xem ảnh đề xuất. Mọi kết quả là **nháp**; SV review rồi mới chép vào Excel. Cột Kết quả chỉ dùng 4 giá trị của Excel: Passed, Failed, N/A, Không chạy được. D-16 đã bỏ cho N2 nên không có ô trống.

---

## 1. Tổng hợp

| Kết quả | Số mục |
|---|---|
| Failed | 53 |
| Passed | 51 |
| N/A | 0 |
| Không chạy được | 8 |
| **Tổng** | **112** |

Mục Failed còn thiếu ảnh: Không có.

## 2. Bảng 112 mục (cột NT2)

| Mã | IA | Kết quả | Nguồn kết quả | Notes | Ảnh |
|---|---|---|---|---|---|
| CL-01 | IA-01 | Failed | AI xem ảnh | W-03: Nhãn ô thứ nhất là "Username" (tiếng Anh) | `CL-01.png` |
| CL-02 | IA-01 | Failed | AI xem ảnh | W-03: Nút gửi ghi "Sign In" (tiếng Anh) | `CL-02.png` |
| CL-03 | IA-01 | Passed | AI xem ảnh | Tiêu đề trang, tiêu đề khối, tiêu đề cột bảng đều tiếng Việt |  |
| CL-04 | IA-01 | Passed | AI xem ảnh | Navbar ở hai trạng thái đăng nhập và footer ("© 2026 EShop SUT. Dành cho mục đích kiểm thử.") là tiếng Việt; "EShop" không xét (GĐ-05) |  |
| CL-05 | IA-01 | Failed | Script nhóm I, AI xem ảnh | W-06: Hủy cùng một đơn Đã xác nhận ở 2 tab, tab A nhận hộp thoại "Lỗi: Cannot cancel this order." (tiếng Anh, thông báo kỹ thuật). Các thông báo khác script bắt được đều tiếng Việt | `CL-05.png` |
| CL-06 | IA-01 | Failed | AI xem ảnh | Tiêu đề tab ở W-03, W-04, W-06 (cả hai trạng thái) đều là "frontend-web" (script đọc được, thấy trên tab trong mọi ảnh) | `CL-06.png` |
| CL-07 | IA-01 | Passed | AI xem ảnh | 5 chữ trạng thái tiếng Việt, khác nhau: Chờ xác nhận, Đã xác nhận, Đang giao, Đã giao, Đã hủy |  |
| CL-08 | IA-01 | Failed | AI xem ảnh | W-04: Nút "Đăng Ký" nền đỏ; "Sign In" (W-03) và "Cập nhật" (W-06) nền xanh dương | `CL-08.png` |
| CL-09 | IA-01 | Passed | AI xem ảnh | Nút "Hủy đơn" và nút "Thoát" đều nền đỏ |  |
| CL-10 | IA-01 | Passed | Script | [W-06 (đăng nhập)] Tổng tiền: 10,000,000 ₫ / 8,000,000 ₫ / 28,000,000 ₫ / 36,000,000 ₫ / 45,000,000 ₫ |  |
| CL-11 | IA-01 | Passed | Script | [W-06 (đăng nhập)] Phần số: 10,000,000 / 8,000,000 / 28,000,000 / 36,000,000 / 45,000,000 |  |
| CL-12 | IA-01 | Passed | Script | [W-06 (đăng nhập)] Tổng tiền: 10,000,000 ₫ / 8,000,000 ₫ / 28,000,000 ₫ / 36,000,000 ₫ / 45,000,000 ₫ |  |
| CL-13 | IA-01 | Failed | Script | [W-03] 0 thẻ <h1>:  // [W-04] 0 thẻ <h1>:  // [W-06 (chưa đăng nhập)] 0 thẻ <h1>:  // [W-06 (đăng nhập)] 0 thẻ <h1>: | `CL-13.png` |
| CL-14 | IA-01 | Failed | Script | [W-03] <h1>: (không có); mong đợi nói về đăng nhập // [W-04] <h1>: (không có); mong đợi nói về đăng ký // [W-06 (chưa đăng nhập)] <h1>: (không có); mong đợi nói về hồ sơ cá nhân // [W-06 (đăng nhập)] <h1>: (không có); mo | `CL-14.png` |
| CL-15 | IA-01 | Failed | Script | [W-03] navbar có 4 mục; 5 lần Tab đầu: "Sign In" > "EShop" > "Giỏ hàng" > "Đăng nhập" > "Đăng ký" | `CL-15.png` |
| CL-16 | IA-01 | Failed | Script | [W-03] thứ tự focus: "Sign In" > "" > "" > "Quên mật khẩu?" > "Đăng ký ngay"; ngược bố cục ở: "Sign In" > "" | `CL-16.png` |
| CL-17 | IA-01 | Passed | Script | [W-06 (đăng nhập)] sau "Cập nhật": "Hủy đơn" > "Hủy đơn" > "Hủy đơn"; số nút Hủy đơn bấm được: 3 |  |
| CL-18 | IA-01 | Passed | Script | [W-06 (đăng nhập)] Tiêu đề cột: Mã ĐH, Ngày đặt, Tổng tiền, Trạng thái, Thao tác; 5 đơn; 0 dòng thiếu thông tin |  |
| CL-19 | IA-01 | Failed | Script | [W-03] lang="en" // [W-04] lang="en" // [W-06 (chưa đăng nhập)] lang="en" // [W-06 (đăng nhập)] lang="en" | `CL-19.png` |
| CL-20 | IA-01 | Failed | Script | [Cả 3] W-03: "frontend-web" / W-04: "frontend-web" / W-06: "frontend-web" | `CL-20.png` |
| CL-21 | IA-01 | Passed | Script | [W-03] 9 phần tử nhận focus đều đổi hình thức // [W-04] 9 phần tử nhận focus đều đổi hình thức // [W-06 (đăng nhập)] 11 phần tử nhận focus đều đổi hình thức |  |
| CL-22 | IA-01 | Passed | Script | [W-06 (đăng nhập)] readonly=false, disabled=true; Tab không dừng ở ô Email |  |
| CL-23 | IA-01 | Failed | Script | [W-03] axe-core: 1 lỗi tương phản, ví dụ .text-blue-500 (3.67:1) // [W-04] axe-core: 2 lỗi tương phản, ví dụ p (2.53:1); button (3.76:1) // [W-06 (đăng nhập)] axe-core: 5 lỗi tương phản, ví dụ .text-yellow-300 > span (3. | `CL-23.png` |
| CL-24 | IA-01 | Không chạy được | Script (D-25) | Dữ liệu seed ngày 11/11/2026 có số ngày trùng số tháng nên không phân biệt được thứ tự. Bằng chứng gián tiếp: navigator.language "en-US", Intl locale "en-US", ngày mẫu 9/11/2026 Firefox viết "11/9/2026" (tháng / ngày / năm), số mẫu 10000000 viết "10,000,000"; Tổng tiền trên trang "10,000,000 ₫" giống định dạng mặc định của Firefox (overview_env_2.png, overview_profile.png) |  |
| CL-25 | IA-01 | Failed | AI xem ảnh | W-03: Tiêu đề trang "Đăng Ký", navbar "Đăng nhập", nút "Sign In": Cùng hành động đăng nhập dùng 3 cách gọi | `CL-25.png` |
| CL-26 | IA-01 | Failed | AI xem ảnh | "Đăng Ký Tài Khoản", "Đăng Ký" viết hoa chữ đầu mọi từ; "Hồ sơ của bạn", "Lịch sử đơn hàng" chỉ viết hoa chữ đầu | `CL-26_1.png`, `CL-26_2.png` |
| CL-27 | IA-01 | Failed | AI xem ảnh | Nút "Đăng Ký" viết hoa mọi từ; navbar "Đăng ký", "Đăng nhập", "Giỏ hàng" chỉ viết hoa chữ đầu | `CL-27.png` |
| CL-28 | IA-01 | Passed | Script | [Cả 3] W-03: Ô thứ nhất (Username / Email): ui-sans-serif, 16px, rgb(55, 65, 81); Mật khẩu: ui-sans-serif, 16px, rgb(55, 65, 81) // W-04: Họ Tên: ui-sans-serif, 16px, rgb(55, 65, 81); Email: ui-sans-serif, 16px, rgb(55, |  |
| CL-29 | IA-01 | Passed | Script | [Cả 3] W-03: cao 40px, ui-sans-serif, 16px, bo góc 4px / W-04: cao 40px, ui-sans-serif, 16px, bo góc 4px / W-06 (đăng nhập): cao 40px, ui-sans-serif, 16px, bo góc 4px |  |
| CL-30 | IA-01 | Passed | Script | [W-03] "Đăng Ký" 24px; nhãn lớn nhất 16px; body 16px (thẻ h1 đến h6) // [W-04] "Đăng Ký Tài Khoản" 24px; nhãn lớn nhất 16px; body 16px (thẻ h1 đến h6) // [W-06 (đăng nhập)] "Hồ sơ của bạn" 24px, "Lịch sử đơn hàng" 24px; |  |
| CL-31 | IA-01 | Passed | AI xem ảnh | Nhãn và ô nhập trong mỗi form thẳng cạnh trái (W-03, W-04, W-06) |  |
| CL-32 | IA-01 | Passed | Script | [W-03] cửa sổ 1366 x 768; cuộn ngang: không; chồng lấn: 0; chữ bị cắt: 0 // [W-04] cửa sổ 1366 x 768; cuộn ngang: không; chồng lấn: 0; chữ bị cắt: 0 // [W-06 (đăng nhập)] cửa sổ 1366 x 768; cuộn ngang: không; chồng lấn: |  |
| CL-33 | IA-01 | Passed | SV zoom tay (nhóm K), AI xem ảnh | Zoom 200% bằng Ctrl và + (thanh địa chỉ hiện "200%", vùng trang rộng 683 px): Cả 3 màn hình chuyển sang bố cục một cột, navbar đủ mục, không bị cắt, không chồng lấn, không cuộn ngang. Script báo devicePixelRatio 1 (Firefox của Playwright không đổi giá trị này khi zoom), không ảnh hưởng kết luận | `CL-33_1.png`, `CL-33_2.png`, `CL-33_3.png` |
| CL-34 | IA-01 | Passed | Script nhóm H | Họ Tên 50 ký tự (giống N1, N3), cửa sổ 1366 px: Lời chào 1 dòng, navbar cao 64 px, không tràn, không chồng lấn ở W-06, W-04, W-03 (ảnh chụp cả khi Passed) | `CL-34_1.png`, `CL-34_2.png`, `CL-34_3.png` |
| CL-35 | IA-01 | Passed | AI xem ảnh | Không thấy lỗi chính tả hay sai dấu trong các ảnh đã chụp (chỉ xét chữ có trong ảnh) |  |
| CL-36 | IA-02 | Passed | Script | [W-04] Họ Tên: có / Email: có / Mật khẩu: có |  |
| CL-37 | IA-02 | Failed | Script | [W-04] Không có ô Xác nhận mật khẩu / Nhập lại mật khẩu | `CL-37.png` |
| CL-38 | IA-02 | Không chạy được | Script | [W-04] Không có ô Xác nhận mật khẩu (CL-37) |  |
| CL-39 | IA-02 | Không chạy được | Script | [W-04] 3/3 giá trị chỉ nhận thông báo mật khẩu yếu. Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆ |  |
| CL-40 | IA-02 | Không chạy được | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; chưa tới bướ |  |
| CL-41 | IA-02 | Passed | Script | [W-04] Thông báo: Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.; ; trang /register |  |
| CL-42 | IA-02 | Failed | Script | [W-03] Nhãn ô thứ nhất: "Username" | `CL-42.png` |
| CL-43 | IA-02 | Failed | Script | [W-03] Ô thứ nhất (Username / Email): KHÔNG có * / Mật khẩu: KHÔNG có * // [W-04] Họ Tên: KHÔNG có * / Email: KHÔNG có * / Mật khẩu: KHÔNG có * | `CL-43.png` |
| CL-44 | IA-02 | Failed | Script | [W-03] Ô thứ nhất (Username / Email): type="text" // [W-04] Email: type="text" // [W-06 (đăng nhập)] Email (Không đổi): type="text" | `CL-44.png` |
| CL-45 | IA-02 | Failed | Script | [W-03] Ô không báo lỗi định dạng HTML5 khi nhập "abc" | `CL-45.png` |
| CL-46 | IA-02 | Failed | Script | [W-03] Mật khẩu: type="text". Ảnh CL-46.png chụp lúc ô trống; mật khẩu hiện chữ thấy rõ ở CL-47.png ("Sai12345!"), CL-89.png | `CL-46.png` |
| CL-47 | IA-02 | Failed | Script | [W-03] Thông báo nằm dưới / ngang nút gửi: Đăng nhập thất bại. Vui lòng kiểm tra lại. // [W-06 (đăng nhập)] Không có thông báo lỗi của trang | `CL-47.png` |
| CL-48 | IA-02 | Passed | Script | [W-06 (đăng nhập)] Họ Tên: gõ được / Số điện thoại: gõ được / Địa chỉ giao hàng: gõ được |  |
| CL-49 | IA-02 | Passed | Script | [W-06 (đăng nhập)] Ô Email trước "test@eshop.com", sau khi gõ "test@eshop.com" |  |
| CL-50 | IA-02 | Passed | Script | [W-06 (đăng nhập)] Thông báo: (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.; |  |
| CL-51 | IA-02 | Passed | Script | [W-06 (đăng nhập)] Không có ô / lựa chọn nào về vai trò |  |
| CL-52 | IA-02 | Failed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Sau khi tải lại: Email "test@eshop.com", Họ Tên "Test User", SĐT "", Địa chỉ ""; lúc SV bấm Cập nhật: (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-52.png` |
| CL-53 | IA-02 | Passed | Script | [W-06 (đăng nhập)] Nền ô Email rgb(243, 244, 246); nền ô Họ Tên rgb(255, 255, 255) |  |
| CL-54 | IA-02 | Failed | Script | [W-03] Ô thứ nhất (Username / Email): "" / Mật khẩu: "" (tên tính gần đúng; xác nhận ở dòng Name trong Accessibility) // [W-04] Họ Tên: "" / Email: "" / Mật khẩu: "" (tên tính gần đúng; xác nhận ở dòng Name trong Accessi | `CL-54.png` |
| CL-55 | IA-02 | Passed | Script | [W-04 email] Không có thông báo về email (mật khẩu bị chặn trước) (phần email không kiểm được vì trang Đăng ký chặn mật khẩu hợp lệ; phần mật khẩu Passed) |  |
| CL-56 | IA-02 | Passed | AI xem ảnh | W-04 nêu đủ điều kiện mật khẩu; W-06 hộp thoại nêu "nhập đúng 9-10 chữ số" (lệch UI-R14, đã ghi ở CL-101); W-03 "Đăng nhập thất bại. Vui lòng kiểm tra lại." không có điều kiện để nêu |  |
| CL-57 | IA-02 | Failed | Script | [W-04 mật khẩu yếu (thay email trùng)] Sau khi báo lỗi, focus ở: "Đăng Ký"; mong đợi ô Mật khẩu // [W-06 (đăng nhập)] Sau khi báo lỗi, focus ở: "Cập nhật"; mong đợi ô Số điện thoại | `CL-57.png` |
| CL-58 | IA-02 | Failed | Script | [W-04 mật khẩu yếu (thay email trùng)] Ô Mật khẩu trông giống hệt các ô còn lại (viền, nền, bóng) // [W-03] Đăng nhập sai không xác định ô bị lỗi; xem tay // [W-06 (đăng nhập)] Ô Số điện thoại trông giống hệt các ô còn l | `CL-58.png` |
| CL-59 | IA-02 | Passed | Script | [W-04] Sau khi báo lỗi: Họ Tên "HW03 Test", Email "hw03.n2.weak.mwbkpzgf@eshop.com" // [W-03] Sau khi báo lỗi: ô thứ nhất "test@eshop.com" // [W-06 (đăng nhập)] Sau khi báo lỗi: Họ Tên "HW03 Tam", Địa chỉ giữ nguyên |  |
| CL-60 | IA-02 | Không chạy được | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; chưa tới bướ |  |
| CL-61 | IA-02 | Passed | Script | [W-04] Enter trong ô Mật khẩu: phản hồi Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT. // [W-03] Enter trong ô Mật khẩu: có phản hồi (trang /) // [W-06 (đăng nhập)] Enter tro |  |
| CL-62 | IA-02 | Failed | Script | [W-03] Ô thứ nhất (Username / Email): (không có) / Mật khẩu: (không có) // [W-04] Email: (không có) / Mật khẩu: (không có) // [W-06 (đăng nhập)] Email (Không đổi): (không có) / Số điện thoại: (không có) | `CL-62.png` |
| CL-63 | IA-02 | Passed | Script | [W-03] Dán "Test1234!": ô nhận 9 ký tự |  |
| CL-64 | IA-02 | Passed | Script | [W-04] Hướng dẫn: "Yêu cầu: Tối thiểu 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt." |  |
| CL-65 | IA-03 | Không chạy được | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không đăng k |  |
| CL-66 | IA-03 | Failed | AI xem ảnh | W-03 "Đăng nhập", W-04 "Đăng ký", W-06 lời chào trông giống hệt khi ở trang khác; không mục nào được highlight | `CL-66_1.png`, `CL-66_2.png`, `CL-66_3.png` |
| CL-67 | IA-03 | Passed | AI xem ảnh | W-06 chưa đăng nhập (CL-78.png cũ, overview), W-03 và W-04 đã đăng nhập (CL-79.png, CL-33_2, CL-33_3): Không có mục nào bị highlight sai |  |
| CL-68 | IA-03 | Failed | Script | [W-06 (đăng nhập)] Link giỏ hàng: "Giỏ hàng"; badge "(không có)" // [W-04 (đăng nhập)] Link giỏ hàng: "Giỏ hàng"; badge "(không có)" // [W-03 (đăng nhập)] Link giỏ hàng: "Giỏ hàng"; badge "(không có)". SV tự chuẩn bị giỏ hàng trong cửa sổ Firefox khi script dừng | `CL-68.png` |
| CL-69 | IA-03 | Failed | Script | [W-06 (đăng nhập)] Link giỏ hàng: "Giỏ hàng"; badge "(không có)". SV tự chuẩn bị giỏ hàng trong cửa sổ Firefox khi script dừng | `CL-69.png` |
| CL-70 | IA-03 | Failed | Script | [W-06 (đăng nhập)] Chữ trên nút: "Thoát" | `CL-70.png` |
| CL-71 | IA-03 | Passed | Script | [W-03] Bấm "Giỏ hàng (navbar)": tới /cart // [W-03] Bấm "Đăng nhập (navbar)": tới /login // [W-03] Bấm "Đăng ký (navbar)": tới /register // [W-03] Bấm "Quên mật khẩu?": tới /forgot-password // [W-03] Bấm "Đăng ký ngay": |  |
| CL-72 | IA-03 | Passed | SV bấm tay (nhóm K), script ghi | [W-06 (chưa đăng nhập, SV bấm)] SV bấm logo: tới /. Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-73 | IA-03 | Passed | Script | [W-03] Enter trên "Giỏ hàng (navbar)": tới /cart // [W-03] Enter trên "Đăng nhập (navbar)": tới /login // [W-03] Enter trên "Đăng ký (navbar)": tới /register // [W-03] Enter trên "Quên mật khẩu?": tới /forgot-password // |  |
| CL-74 | IA-03 | Failed | Script | [W-03] Không đổi khi rê chuột: EShop // [W-04] Không đổi khi rê chuột: EShop // [W-06 (đăng nhập)] Không đổi khi rê chuột: EShop | `CL-74.png` |
| CL-75 | IA-03 | Passed | Script | [chưa đăng nhập] W-03: EShop, Giỏ hàng, Đăng nhập, Đăng ký / W-04: EShop, Giỏ hàng, Đăng nhập, Đăng ký / W-06: EShop, Giỏ hàng, Đăng nhập, Đăng ký // [đăng nhập] W-03: EShop, Giỏ hàng, Chào,, Thoát / W-04: EShop, Giỏ hàn |  |
| CL-76 | IA-03 | Failed | Script | [W-06 (đăng nhập)] <a> href="/profile", tên "Chào, Test User", title "" | `CL-76.png` |
| CL-77 | IA-03 | Passed | SV bấm tay (nhóm K), script ghi | [W-03 (SV bấm)] Sau khi SV bấm Back: trang /login; form đăng nhập có. Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-78 | IA-03 | Failed | Script | [W-06 (chưa đăng nhập)] Ở lại /profile, không có link / nút tới /login | `CL-78.png` |
| CL-79 | IA-03 | Failed | Script | [W-03 (đăng nhập)] Vẫn hiện form như chưa đăng nhập // [W-04 (đăng nhập)] Vẫn hiện form như chưa đăng nhập | `CL-79.png` |
| CL-80 | IA-03 | Passed | Script | [W-03] Sau khi đăng nhập: lời chào có, nút đăng xuất có |  |
| CL-81 | IA-03 | Passed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Sau khi SV bấm Thoát (trang /profile): ô Họ Tên không, bảng đơn không, email không. Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-82 | IA-03 | Passed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Navbar sau khi SV bấm Thoát: EShop, Giỏ hàng, Đăng nhập, Đăng ký. Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-83 | IA-03 | Passed | Script | [W-03] Có vùng main, chứa nội dung: có // [W-04] Có vùng main, chứa nội dung: có // [W-06 (chưa đăng nhập)] Có vùng main, chứa nội dung: có // [W-06 (đăng nhập)] Có vùng main, chứa nội dung: có |  |
| CL-84 | IA-04 | Passed | AI xem ảnh | 5 màu nền nhãn khác nhau: vàng nhạt, chàm (tím nhạt), xanh dương nhạt, xanh lá nhạt, hồng (đỏ nhạt); số đo màu giống N1. Xem mục 3 |  |
| CL-85 | IA-04 | Passed | Script | [W-06 (đăng nhập)] Chờ xác nhận: có nút bấm được; Đã xác nhận: có nút bấm được |  |
| CL-86 | IA-04 | Passed | Script | [W-06 (đăng nhập)] Đã giao: không có nút; Đã hủy: không có nút |  |
| CL-87 | IA-04 | Failed | Script | [W-06 (đăng nhập)] Đang giao: có nút bấm được | `CL-87.png` |
| CL-88 | IA-04 | Failed | Script | [W-06 (đăng nhập) đơn Đang giao] Bấm Hủy đơn ở đơn Đang giao: thông báo (hộp) Hủy đơn thành công!; trạng thái "Đã hủy" | `CL-88_1.png`, `CL-88_2.png` |
| CL-89 | IA-04 | Failed | Script | [W-03] Lần 4 (mật khẩu đúng) vẫn bị từ chối, tức tài khoản đã bị chặn, nhưng thông báo không nói bị khóa / thử lại sau. lần 1: Đăng nhập thất bại. Vui lòng kiểm tra lại. // lần 2: Đăng nhập thất bại. Vui lòng kiểm tra lạ | `CL-89.png` |
| CL-90 | IA-04 | Passed | Script | [W-03] Thông báo khóa: "Đăng nhập thất bại. Vui lòng kiểm tra lại." |  |
| CL-91 | IA-04 | Failed | Script | [W-06 (đăng nhập, không có đơn)] Khối chỉ có: "Bạn chưa có đơn hàng nào." | `CL-91.png` |
| CL-92 | IA-04 | Passed | AI xem ảnh | "Bạn chưa có đơn hàng nào." là câu đầy đủ, không có từ kỹ thuật (CL-91.png) |  |
| CL-93 | IA-04 | Failed | Script | [W-06 (đăng nhập, không có đơn)] Không có link / nút; khối chỉ có: "Bạn chưa có đơn hàng nào." | `CL-93.png` |
| CL-94 | IA-04 | Failed | Script | [W-06 (đăng nhập)] Không thấy dấu hiệu đang tải trước khi bảng hiện (mạng chậm). Ảnh chụp sau sự kiện (bằng chứng là số đo của script) | `CL-94.png` |
| CL-95 | IA-04 | Passed | Script | [W-06 (đăng nhập)] Không hiện nhầm thông báo chưa có đơn |  |
| CL-96 | IA-04 | Failed | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không có lần. Ảnh chụp sau sự kiện (bằng chứng là số đo của script) | `CL-96.png` |
| CL-97 | IA-04 | Failed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] SV bấm "Hủy đơn" đơn #5: không có hộp xác nhận; trạng thái sau khi bấm "Đã hủy" | `CL-97_1.png`, `CL-97_2.png` |
| CL-98 | IA-04 | Không chạy được | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Không có hộp xác nhận (CL-97 Failed) |  |
| CL-99 | IA-04 | Passed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Lần bấm ở CL-97 đã hủy luôn; trạng thái (không tải lại): "Đã hủy". Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-100 | IA-04 | Passed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Thông báo: (hộp) Hủy đơn thành công!. Lần chạy 1 script bấm không có tác dụng: Failed |  |
| CL-101 | IA-04 | Failed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] SV bấm Cập nhật với Số điện thoại 0912345678: thông báo (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. / (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-101_1.png`, `CL-101_2.png` |
| CL-102 | IA-04 | Failed | SV bấm tay (nhóm K), script ghi | [W-06 (đăng nhập, SV bấm)] Lời chào sau khi SV bấm Cập nhật (không tải lại): "Chào, Test User"; thông báo (hộp) Cập nhật thành công! | `CL-102_1.png`, `CL-102_2.png` |
| CL-103 | IA-04 | Passed | Script | [W-03] Thông báo: Đăng nhập thất bại. Vui lòng kiểm tra lại.; trang /login |  |
| CL-104 | IA-04 | Không chạy được | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không đăng k |  |
| CL-105 | IA-04 | Failed | Script, AI xem ảnh | Mất kết nối: W-03 báo "Đăng nhập thất bại. Vui lòng kiểm tra lại." (nhóm I); W-06 hộp thoại "Lỗi cập nhật" (nhóm K, SV bấm); không nói là mất kết nối / thử lại sau | `CL-105_1.png`, `CL-105_2.png` |
| CL-106 | IA-04 | Failed | Script | [W-04 mật khẩu yếu] 0/1 thông báo nằm trong role="alert" / "status" / aria-live: Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT. // [W-03] 0/1 thông báo nằm trong role="alert" | `CL-106.png` |
| CL-107 | IA-04 | Failed | Script | [W-06 (đăng nhập)] Không đổi khi rê chuột: /^cập nhật$/i, /^(thoát/đăng xuất)$/i | `CL-107.png` |
| CL-108 | IA-04 | Failed | Script | [W-06 (đăng nhập) (SĐT 912345678)] Sau khi xóa cookie và storage của trang, bấm Cập nhật: trang /profile; thông báo (hộp) Cập nhật thành công! | `CL-108_1.png`, `CL-108_2.png` |
| CL-109 | IA-01 | Failed | Script | [W-06 (đăng nhập)] cửa sổ 360 x 800; cuộn ngang: CÓ; chồng lấn: 0. Ảnh: Cửa sổ 360 px nằm đè lên cửa sổ lớn, chỉ thấy "http://localhost:5...", thấy tiêu đề cột "Trạng Th" bị cắt ở mép phải | `CL-109.png` |
| CL-110 | IA-02 | Failed | Script | [W-06 (đăng nhập)] Số " 0912345678 ": (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-110_1.png`, `CL-110_2.png` |
| CL-111 | IA-02 | Failed | Script | [W-03] Mật khẩu: không có nút hiện / ẩn // [W-04] Mật khẩu: không có nút hiện / ẩn | `CL-111.png` |
| CL-112 | IA-04 | Failed | Script | [W-04] Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không có lần. Ảnh chụp sau sự kiện (bằng chứng là số đo của script) | `CL-112.png` |

## 3. Ma trận trạng thái (sheet "Ma trận trạng thái", cột NT2)

| Mã trạng thái | Chữ hiển thị | Màu nền nhãn | Nút "Hủy đơn" quan sát |
|---|---|---|---|
| pending | Chờ xác nhận | Vàng nhạt (chữ nâu) | Có, bấm được |
| confirmed | Đã xác nhận | Chàm / tím nhạt (chữ chàm) | Có, bấm được |
| shipping | Đang giao | Xanh dương nhạt | Có, bấm được (CL-87 Failed) |
| delivered | Đã giao | Xanh lá nhạt | Không có |
| canceled | Đã hủy | Hồng / đỏ nhạt (chữ đỏ sẫm) | Không có |

## 4. Sheet "Môi trường", cột NT2

| Mục | NT2 |
|---|---|
| Tên ngắn | Firefox Windows |
| Trình duyệt và phiên bản | Firefox 159.0 (build 20261030230438), bản Firefox do Playwright 1.65 tải về (`ms-playwright\firefox-1572`, trang about:support ghi thương hiệu "Nightly"); điều khiển bằng Playwright, có giao diện. Ngôn ngữ en-US |
| OS và phiên bản | Windows 11 Home Single Language 26H2 (build 26300), cùng máy với N1 |
| Thiết bị / máy ảo / dịch vụ cloud | Máy cá nhân của SV (D-28). Không dùng cloud: Trial BrowserStack Live chỉ 1 phút mỗi thiết bị, LambdaTest Freemium 2 phiên khoảng 2 phút (ảnh trong `cross_platform/screenshots/firefox/`) |
| Độ phân giải màn hình / kích thước cửa sổ | Màn hình 2560 x 1440; script: Vùng trang 1366 x 768 (CL-109 dùng 360 x 800) |
| Zoom trình duyệt | 100% (CL-33: 200% bằng Ctrl và +) |
| Scale hiển thị của OS | 150% |
| Ngày giờ chạy | 11/11/2026: Script nhóm A đến G 10:42 đến 10:50; nhóm H (CL-34) 10:55; nhóm I 10:58 và 11:05; nhóm K (SV bấm tay, CL-33) 11:07 đến 11:12 |
| Người chạy | Nguyễn Thị Ánh Ngọc (chạy script `checklist/tools/n2_firefox_checklist.js`; nhóm K SV bấm tay, script ghi kết quả) |
| Ghi chú | Lần chạy 1 có 10 mục (CL-72, CL-77, CL-81, CL-82, CL-97, CL-99, CL-100, CL-101, CL-52, CL-102) mà cú bấm của script không có tác dụng trên Firefox; đã kiểm lại bằng tay ở nhóm K và lấy kết quả nhóm K (ảnh cũ giữ ở thư mục tạm, không đưa vào repo). Dữ liệu seed ngày 11/11/2026 nên CL-24 không xem trực tiếp được (D-25). Lớp chữ đè: Sticky Notes |

## 5. Khác với NT1 (Chrome Windows) hoặc NT3 (Android Chrome)

Dùng cho `02_compare.md`; chưa phải kết luận.

| Mã | NT1 | NT3 | NT2 |
|---|---|---|---|
| CL-11 | Passed | Failed | Passed |
| CL-15 | Failed | N/A | Failed |
| CL-16 | Failed | N/A | Failed |
| CL-17 | Passed | N/A | Passed |
| CL-21 | Passed | N/A | Passed |
| CL-24 | Failed | Passed | Không chạy được |
| CL-32 | Passed | N/A | Passed |
| CL-33 | Passed | Failed | Passed |
| CL-34 | Passed | Failed | Passed |
| CL-73 | Passed | N/A | Passed |
| CL-74 | Failed | N/A | Failed |
| CL-107 | Failed | N/A | Failed |

## 6. SV cần quyết khi review

| Mã | Việc | Lựa chọn |
|---|---|---|
| ⏳ D-30 | Ảnh CL-46 (ô mật khẩu trống, không thấy mật khẩu hiện chữ) | Giữ `CL-46.png` và dẫn thêm `CL-47.png`, `CL-89.png` trong Notes (bản nháp đang làm vậy) / Chép `CL-47.png` thành `CL-46_2.png` |
| ⏳ D-31 | Ảnh CL-109 (cửa sổ 360 px che một phần URL) | Giữ, URL vẫn thấy `localhost:5...` / Chụp tay lại |
| ⏳ D-32 | Ghi kết quả 10 mục của nhóm K | Lấy kết quả SV bấm tay, Notes ghi lần 1 script bấm không có tác dụng (bản nháp đang làm vậy) / Ghi cả hai kết quả |
