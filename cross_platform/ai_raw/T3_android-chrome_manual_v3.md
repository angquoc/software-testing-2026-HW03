# T3 android-chrome: Kết quả N3 đầy đủ 112 mục (bản AI, lần sửa 2)

- Bước: `[T3][android-chrome]`
- Lần sửa: 2 (bản gốc `T3_android-chrome_manual.md` và lần sửa 1 `T3_android-chrome_manual_v2.md` giữ nguyên)
- Thời gian: 2026-11-10 17:13
- Lý do sửa: Gộp thành bảng đủ 112 mục để chép vào cột NT3 của Excel; thêm kết quả và ảnh của nhóm I (CL-05, CL-105) và CL-06; ảnh tổng quan đã chép thành `CL-xx.png` cho các mục Failed xem từ ảnh
- Nguồn: `checklist/tools/n3_run_log_2.txt` (lần chạy đầy đủ, 16:20 đến 16:29), `n3_cl34_log.txt` (CL-34), `n3_extra_log.txt` (CL-05, CL-105), SV kiểm tay (CL-48, CL-33), AI xem ảnh (các mục "Chạy tay")
- Ghi chú: Cột "Nguồn kết quả" cho biết kết quả do script đo, SV tự kiểm hay AI xem ảnh đề xuất. Mọi kết quả là **nháp**; sinh viên review rồi mới chép vào Excel. Cột Kết quả chỉ dùng 4 giá trị của Excel: Passed, Failed, N/A, Không chạy được.

---

## 1. Tổng hợp

| Kết quả | Số mục |
|---|---|
| Failed | 52 |
| Passed | 45 |
| N/A | 8 |
| Không chạy được | 7 |
| **Tổng** | **112** |

Mục Failed còn thiếu ảnh: CL-06.

## 2. Bảng 112 mục (cột NT3)

| Mã | IA | Kết quả | Nguồn kết quả | Notes | Ảnh |
|---|---|---|---|---|---|
| CL-01 | IA-01 | Failed | AI xem ảnh | W-03: Nhãn ô thứ nhất là "Username" (tiếng Anh) | `CL-01.png` |
| CL-02 | IA-01 | Failed | AI xem ảnh | W-03: Nút gửi ghi "Sign In" (tiếng Anh) | `CL-02.png` |
| CL-03 | IA-01 | Passed | AI xem ảnh | Tiêu đề trang, tiêu đề khối, tiêu đề cột bảng đều tiếng Việt |  |
| CL-04 | IA-01 | Passed | AI xem ảnh | Navbar ở cả hai trạng thái đăng nhập và footer ("© 2026 EShop SUT. Dành cho kiểm thử...") là tiếng Việt; "EShop" không xét (GĐ-05) |  |
| CL-05 | IA-01 | Failed | Script nhóm I | W-06: Hủy cùng một đơn ở 2 tab, tab A nhận hộp thoại "Lỗi: Cannot cancel this order." (tiếng Anh, thông báo kỹ thuật) | `CL-05.png` |
| CL-06 | IA-01 | Failed | Script (document.title) | Tiêu đề tab ở W-03, W-04, W-06 (cả hai trạng thái) đều là "frontend-web". Chrome Android không hiện tiêu đề trên thanh địa chỉ; ảnh lấy từ danh sách tab |  |
| CL-07 | IA-01 | Passed | AI xem ảnh | 5 chữ trạng thái tiếng Việt, khác nhau: Chờ xác nhận, Đã xác nhận, Đang giao, Đã giao, Đã hủy |  |
| CL-08 | IA-01 | Failed | AI xem ảnh | W-04: Nút "Đăng Ký" nền đỏ; "Sign In" (W-03) và "Cập nhật" (W-06) nền xanh dương | `CL-08.png` |
| CL-09 | IA-01 | Passed | AI xem ảnh | Nút "Hủy đơn" và nút "Thoát" đều nền đỏ |  |
| CL-10 | IA-01 | Passed | Script |  |  |
| CL-11 | IA-01 | Failed | Script | W-06 (đăng nhập): Phần số: 10.000.000 \| 8.000.000 \| 28.000.000 \| 36.000.000 \| 45.000.000 | `CL-11.png` |
| CL-12 | IA-01 | Passed | Script |  |  |
| CL-13 | IA-01 | Failed | Script | W-03, W-04, W-06 (chưa đăng nhập), W-06 (đăng nhập): 0 thẻ <h1>: | `CL-13.png` |
| CL-14 | IA-01 | Failed | Script | W-03: <h1>: (không có); mong đợi nói về đăng nhập; W-04: <h1>: (không có); mong đợi nói về đăng ký; W-06 (chưa đăng nhập): <h1>: (không có); mong đợi nói về hồ sơ cá nhân; W-06 (đăng nhập): <h1>: (không có); mo | `CL-14.png` |
| CL-15 | IA-01 | N/A | Script | Điện thoại không có bàn phím vật lý; bàn phím ảo không có phím Tab nên không chuyển focus bằng Tab được |  |
| CL-16 | IA-01 | N/A | Script | Điện thoại không có bàn phím vật lý; bàn phím ảo không có phím Tab nên không chuyển focus bằng Tab được |  |
| CL-17 | IA-01 | N/A | Script | Điện thoại không có bàn phím vật lý; bàn phím ảo không có phím Tab nên không chuyển focus bằng Tab được |  |
| CL-18 | IA-01 | Passed | Script |  |  |
| CL-19 | IA-01 | Failed | Script | W-03, W-04, W-06 (chưa đăng nhập), W-06 (đăng nhập): lang="en" | `CL-19.png` |
| CL-20 | IA-01 | Failed | Script | Cả 3: W-03: "frontend-web" \| W-04: "frontend-web" \| W-06: "frontend-web" | `CL-20.png` |
| CL-21 | IA-01 | N/A | Script | Điện thoại không có bàn phím vật lý; bàn phím ảo không có phím Tab nên không chuyển focus bằng Tab được |  |
| CL-22 | IA-01 | Passed | Script |  |  |
| CL-23 | IA-01 | Failed | Script | W-03: axe-core: 1 lỗi tương phản, ví dụ .text-blue-500 (3.67:1); W-04: axe-core: 2 lỗi tương phản, ví dụ p (2.53:1); button (3.76:1); W-06 (đăng nhập): axe-core: 5 lỗi tương phản, ví dụ .text-yellow-300 > span (3. | `CL-23.png` |
| CL-24 | IA-01 | Passed | Script |  |  |
| CL-25 | IA-01 | Failed | AI xem ảnh | W-03: Tiêu đề trang "Đăng Ký", navbar "Đăng nhập", nút "Sign In": Cùng hành động đăng nhập dùng 3 cách gọi | `CL-25.png` |
| CL-26 | IA-01 | Failed | AI xem ảnh | "Đăng Ký Tài Khoản", "Đăng Ký" viết hoa chữ đầu mọi từ; "Hồ sơ của bạn", "Lịch sử đơn hàng" chỉ viết hoa chữ đầu | `CL-26_1.png`, `CL-26_2.png` |
| CL-27 | IA-01 | Failed | AI xem ảnh | Nút "Đăng Ký" viết hoa mọi từ; navbar "Đăng ký", "Đăng nhập", "Giỏ hàng" chỉ viết hoa chữ đầu | `CL-27.png` |
| CL-28 | IA-01 | Passed | Script |  |  |
| CL-29 | IA-01 | Passed | Script |  |  |
| CL-30 | IA-01 | Passed | Script |  |  |
| CL-31 | IA-01 | Passed | AI xem ảnh | Nhãn và ô nhập trong mỗi form thẳng cạnh trái (W-03, W-04, W-06) |  |
| CL-32 | IA-01 | N/A | Script | Màn hình điện thoại không đặt được cửa sổ 1366 x 768; khổ điện thoại được kiểm ở CL-109 |  |
| CL-33 | IA-01 | Failed | SV làm tay, AI xem ảnh | Zoom 200% (Chrome > Cài đặt > Hỗ trợ tiếp cận): W-03 không thấy nút "Thoát", trang cuộn ngang; W-04 mục "Đăng nhập" trên navbar bị cắt; W-06 lời chào bị cắt, bảng chỉ thấy cột Mã ĐH và Ngày đặt, ngày bị cắt "10/11/202" | `CL-33_1.png`, `CL-33_10.png`, `CL-33_11.png`, `CL-33_2.png`, `CL-33_3.png`, `CL-33_4.png`, `CL-33_5.png`, `CL-33_6.png`, `CL-33_7.png`, `CL-33_8.png`, `CL-33_9.png` |
| CL-34 | IA-01 | Failed | Script nhóm H, AI xem ảnh (SV chốt) | Họ Tên 50 ký tự (giống N1): Lời chào xuống 4 dòng, navbar cao gấp đôi, "Giỏ hàng" bị ép xuống 2 dòng, dính sát "EShop" ở cả W-06, W-04, W-03. N1 (1366 px): Passed | `CL-34_1.png`, `CL-34_2.png`, `CL-34_3.png` |
| CL-35 | IA-01 | Passed | AI xem ảnh | Không thấy lỗi chính tả hay sai dấu trong các ảnh đã chụp |  |
| CL-36 | IA-02 | Passed | Script |  |  |
| CL-37 | IA-02 | Failed | Script | W-04: Không có ô Xác nhận mật khẩu / Nhập lại mật khẩu | `CL-37.png` |
| CL-38 | IA-02 | Không chạy được | Script | W-04: Không có ô Xác nhận mật khẩu (CL-37) |  |
| CL-39 | IA-02 | Không chạy được | Script | W-04: 3/3 giá trị chỉ nhận thông báo mật khẩu yếu. Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆ |  |
| CL-40 | IA-02 | Không chạy được | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; chưa tới bướ |  |
| CL-41 | IA-02 | Passed | Script |  |  |
| CL-42 | IA-02 | Failed | Script | W-03: Nhãn ô thứ nhất: "Username" | `CL-42.png` |
| CL-43 | IA-02 | Failed | Script | W-03: Ô thứ nhất (Username / Email): KHÔNG có * \| Mật khẩu: KHÔNG có *; W-04: Họ Tên: KHÔNG có * \| Email: KHÔNG có * \| Mật khẩu: KHÔNG có * | `CL-43.png` |
| CL-44 | IA-02 | Failed | Script | W-03: Ô thứ nhất (Username / Email): type="text"; W-04: Email: type="text"; W-06 (đăng nhập): Email (Không đổi): type="text" | `CL-44.png` |
| CL-45 | IA-02 | Failed | Script | W-03: Ô không báo lỗi định dạng HTML5 khi nhập "abc" | `CL-45.png` |
| CL-46 | IA-02 | Failed | Script | W-03: Mật khẩu: type="text" | `CL-46.png` |
| CL-47 | IA-02 | Failed | Script | W-03: Thông báo nằm dưới / ngang nút gửi: Đăng nhập thất bại. Vui lòng kiểm tra lại.; W-06 (đăng nhập): Không có thông báo lỗi của trang | `CL-47.png` |
| CL-48 | IA-02 | Passed | SV kiểm tay | Script lỗi (nhãn chặn chỗ bấm); SV kiểm tay trên điện thoại: Ba ô Họ Tên, Số điện thoại, Địa chỉ giao hàng gõ được |  |
| CL-49 | IA-02 | Passed | Script |  |  |
| CL-50 | IA-02 | Passed | Script |  |  |
| CL-51 | IA-02 | Passed | Script |  |  |
| CL-52 | IA-02 | Failed | Script | W-06 (đăng nhập): Sau khi tải lại: Email "test@eshop.com", Họ Tên "Test User", SĐT "", Địa chỉ ""; lúc bấm Cập nhật: (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-52.png` |
| CL-53 | IA-02 | Passed | Script |  |  |
| CL-54 | IA-02 | Failed | Script | W-03: Ô thứ nhất (Username / Email): "" \| Mật khẩu: "" (tên tính gần đúng; xác nhận ở dòng Name trong Accessibility); W-04: Họ Tên: "" \| Email: "" \| Mật khẩu: "" (tên tính gần đúng; xác nhận ở dòng Name trong Accessi | `CL-54.png` |
| CL-55 | IA-02 | Passed | Script | Phần W-04 email không chạy được (mật khẩu bị chặn trước); phần còn lại Passed |  |
| CL-56 | IA-02 | Passed | AI xem ảnh | W-04 nêu đủ điều kiện mật khẩu; W-06 hộp thoại nêu "nhập đúng 9-10 chữ số" (lệch UI-R14, đã ghi ở CL-101) |  |
| CL-57 | IA-02 | Failed | Script | W-04 mật khẩu yếu (thay email trùng): Sau khi báo lỗi, focus ở: "Đăng Ký"; mong đợi ô Mật khẩu; W-06 (đăng nhập): Sau khi báo lỗi, focus ở: "Cập nhật"; mong đợi ô Số điện thoại | `CL-57.png` |
| CL-58 | IA-02 | Failed | Script | W-04 mật khẩu yếu (thay email trùng): Ô Mật khẩu trông giống hệt các ô còn lại (viền, nền, bóng); W-03: Đăng nhập sai không xác định ô bị lỗi; xem tay; W-06 (đăng nhập): Ô Số điện thoại trông giống hệt các ô còn l | `CL-58.png` |
| CL-59 | IA-02 | Passed | Script |  |  |
| CL-60 | IA-02 | Không chạy được | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; chưa tới bướ |  |
| CL-61 | IA-02 | Passed | Script |  |  |
| CL-62 | IA-02 | Failed | Script | W-03: Ô thứ nhất (Username / Email): (không có) \| Mật khẩu: (không có); W-04: Email: (không có) \| Mật khẩu: (không có); W-06 (đăng nhập): Email (Không đổi): (không có) \| Số điện thoại: (không có) | `CL-62.png` |
| CL-63 | IA-02 | Passed | Script |  |  |
| CL-64 | IA-02 | Passed | Script |  |  |
| CL-65 | IA-03 | Không chạy được | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không đăng k |  |
| CL-66 | IA-03 | Failed | AI xem ảnh | W-03 "Đăng nhập", W-04 "Đăng ký", W-06 lời chào trông giống hệt khi ở trang khác; không mục nào được highlight | `CL-66_1.png`, `CL-66_2.png`, `CL-66_3.png` |
| CL-67 | IA-03 | Passed | AI xem ảnh | W-06 chưa đăng nhập và W-03 đã đăng nhập: Không có mục nào bị highlight sai (W-04 đã đăng nhập chưa có ảnh riêng) |  |
| CL-68 | IA-03 | Failed | Script, SV xác nhận | Giỏ có 2 sản phẩm khác nhau (SV đã thêm khi script dừng chờ); navbar "Giỏ hàng" không có badge ở W-06, W-04, W-03 | `CL-68.png` |
| CL-69 | IA-03 | Failed | Script, SV xác nhận | Giỏ có 1 sản phẩm số lượng 2 (SV đã chuẩn bị); navbar không có badge | `CL-69.png` |
| CL-70 | IA-03 | Failed | Script | W-06 (đăng nhập): Chữ trên nút: "Thoát" | `CL-70.png` |
| CL-71 | IA-03 | Passed | Script |  |  |
| CL-72 | IA-03 | Passed | Script |  |  |
| CL-73 | IA-03 | N/A | Script | Điện thoại không có bàn phím vật lý; bàn phím ảo không có phím Tab nên không chuyển focus bằng Tab được; không đưa focus tới link "Giỏ hàng (navbar)" để bấm Enter được |  |
| CL-74 | IA-03 | N/A | Script | Màn hình cảm ứng không có con trỏ chuột nên không có trạng thái rê chuột (hover) |  |
| CL-75 | IA-03 | Passed | Script |  |  |
| CL-76 | IA-03 | Failed | Script | W-06 (đăng nhập): <a> href="/profile", tên "Chào, Test User", title "" | `CL-76.png` |
| CL-77 | IA-03 | Passed | Script |  |  |
| CL-78 | IA-03 | Failed | Script | W-06 (chưa đăng nhập): Ở lại /profile, không có link / nút tới /login | `CL-78.png` |
| CL-79 | IA-03 | Failed | Script | W-03 (đăng nhập), W-04 (đăng nhập): Vẫn hiện form như chưa đăng nhập | `CL-79.png` |
| CL-80 | IA-03 | Passed | Script |  |  |
| CL-81 | IA-03 | Passed | Script |  |  |
| CL-82 | IA-03 | Passed | Script |  |  |
| CL-83 | IA-03 | Passed | Script |  |  |
| CL-84 | IA-04 | Passed | AI xem ảnh | 5 màu nền nhãn khác nhau: vàng nhạt, chàm (tím nhạt), xanh dương nhạt, xanh lá nhạt, hồng (đỏ nhạt). Xem sheet "Ma trận trạng thái" |  |
| CL-85 | IA-04 | Passed | Script |  |  |
| CL-86 | IA-04 | Passed | Script |  |  |
| CL-87 | IA-04 | Failed | Script | W-06 (đăng nhập): Đang giao: có nút bấm được | `CL-87.png` |
| CL-88 | IA-04 | Failed | Script | W-06 (đăng nhập) đơn Đang giao: Bấm Hủy đơn ở đơn Đang giao: thông báo (hộp) Hủy đơn thành công!; trạng thái "Đã hủy" | `CL-88_1.png`, `CL-88_2.png` |
| CL-89 | IA-04 | Failed | Script | W-03: Lần 4 (mật khẩu đúng) vẫn bị từ chối, tức tài khoản đã bị chặn, nhưng thông báo không nói bị khóa / thử lại sau. lần 1: Đăng nhập thất bại. Vui lòng kiểm tra lại. \|\| lần 2: Đăng nhập thất bại. Vui lòng kiểm tra lạ | `CL-89.png` |
| CL-90 | IA-04 | Passed | Script |  |  |
| CL-91 | IA-04 | Failed | Script | W-06 (đăng nhập, không có đơn): Khối chỉ có: "Bạn chưa có đơn hàng nào." | `CL-91.png` |
| CL-92 | IA-04 | Passed | AI xem ảnh | "Bạn chưa có đơn hàng nào." là câu đầy đủ, không có từ kỹ thuật |  |
| CL-93 | IA-04 | Failed | Script | W-06 (đăng nhập, không có đơn): Không có link / nút; khối chỉ có: "Bạn chưa có đơn hàng nào." | `CL-93.png` |
| CL-94 | IA-04 | Failed | Script | W-06 (đăng nhập): Không thấy dấu hiệu đang tải trước khi bảng hiện (mạng chậm) | `CL-94.png` |
| CL-95 | IA-04 | Passed | Script |  |  |
| CL-96 | IA-04 | Failed | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không có lần | `CL-96.png` |
| CL-97 | IA-04 | Failed | Script | W-06 (đăng nhập): Bấm "Hủy đơn" đơn #5: không có hộp xác nhận; trạng thái sau khi bấm "Đã hủy" | `CL-97_1.png`, `CL-97_2.png` |
| CL-98 | IA-04 | Không chạy được | Script | W-06 (đăng nhập): Không có hộp xác nhận (CL-97 Failed) |  |
| CL-99 | IA-04 | Passed | Script |  |  |
| CL-100 | IA-04 | Passed | Script |  |  |
| CL-101 | IA-04 | Failed | Script | W-06 (đăng nhập): Cập nhật với Số điện thoại 0912345678: thông báo (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-101_1.png`, `CL-101_2.png` |
| CL-102 | IA-04 | Failed | Script | W-06 (đăng nhập): Lời chào sau khi cập nhật (không tải lại): "Chào, Test User"; lúc bấm Cập nhật: (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.. Thử thêm với SĐT 912345678 (app chấp nhận): (hộp) Cập | `CL-102_1.png`, `CL-102_2.png` |
| CL-103 | IA-04 | Passed | Script |  |  |
| CL-104 | IA-04 | Không chạy được | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không đăng k |  |
| CL-105 | IA-04 | Failed | Script nhóm I | Mất kết nối: W-03 báo "Đăng nhập thất bại. Vui lòng kiểm tra lại."; W-06 hộp thoại "Lỗi cập nhật"; không nói là mất kết nối / thử lại sau. W-04 không chạy được (form đăng ký bị chặn vì mật khẩu) | `CL-105_1.png`, `CL-105_2.png` |
| CL-106 | IA-04 | Failed | Script | W-04 mật khẩu yếu: 0/1 thông báo nằm trong role="alert" / "status" / aria-live: Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.; W-03: 0/1 thông báo nằm trong role="alert" | `CL-106.png` |
| CL-107 | IA-04 | N/A | Script | Màn hình cảm ứng không có con trỏ chuột nên không có trạng thái rê chuột (hover) |  |
| CL-108 | IA-04 | Failed | Script | W-06 (đăng nhập) (SĐT 912345678): Sau Clear site data, bấm Cập nhật: trang /profile; thông báo (hộp) Cập nhật thành công! | `CL-108_1.png`, `CL-108_2.png` |
| CL-109 | IA-01 | Failed | Script | W-06 (đăng nhập): vùng trang 397 x 781 px CSS (khổ thật của điện thoại; CL-109 ghi 360 px); cuộn ngang: CÓ; chồng lấn: 0 | `CL-109.png` |
| CL-110 | IA-02 | Failed | Script | W-06 (đăng nhập): Số " 0912345678 ": (hộp) Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số. | `CL-110_1.png`, `CL-110_2.png` |
| CL-111 | IA-02 | Failed | Script | W-03, W-04: Mật khẩu: không có nút hiện / ẩn | `CL-111.png` |
| CL-112 | IA-04 | Failed | Script | W-04: Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("Abcdef1!") với thông báo "Mật khẩu quá yếu! Phải dài tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và KÝ TỰ ĐẶC BIỆT.", nên form không gửi đi được; không có lần | `CL-112.png` |

## 3. Ma trận trạng thái (sheet "Ma trận trạng thái", cột NT3)

| Mã trạng thái | Chữ hiển thị | Màu nền nhãn | Nút "Hủy đơn" quan sát |
|---|---|---|---|
| pending | Chờ xác nhận | Vàng nhạt (chữ nâu) | Có, bấm được |
| confirmed | Đã xác nhận | Chàm / tím nhạt (chữ chàm) | Có, bấm được |
| shipping | Đang giao | Xanh dương nhạt | Có, bấm được (CL-87 Failed) |
| delivered | Đã giao | Xanh lá nhạt | Không có |
| canceled | Đã hủy | Hồng / đỏ nhạt (chữ đỏ sẫm) | Không có |

## 4. Sheet "Môi trường", cột NT3 (từ log của script)

| Mục | NT3 |
|---|---|
| Tên ngắn | Android Chrome |
| Trình duyệt và phiên bản | Google Chrome 156.0.8078.79 cho Android (điều khiển bằng Playwright qua cáp USB; bật cờ "Enable command line on non-rooted devices") |
| OS và phiên bản | Android 15 (SDK 35, bản dựng AP3A.240905.015.A2.G998BXXSJHZC2) |
| Thiết bị | Samsung SM-G998B (điện thoại thật của SV), kết nối `adb reverse` cổng 5173 và 3000 |
| Độ phân giải màn hình / vùng trang | Màn hình 1080 x 2400 (override, vật lý 1440 x 3200), mật độ 450; vùng trang 384 x 755 px CSS (khi đăng nhập ở W-06 đo được 397 x 781), devicePixelRatio 2.8125 |
| Zoom trình duyệt | 100% (CL-33 đặt tạm 200%) |
| Cỡ chữ hệ thống | 1.15 |
| Ngày giờ chạy | 10/11/2026: Lần chạy đầy đủ 16:20 đến 16:29; CL-34 16:52; CL-05, CL-105 17:11 |
| Người chạy | Nguyễn Thị Ánh Ngọc (chạy script `checklist/tools/n3_android_checklist.js`) |
| Ghi chú | Lớp chữ đè: Samsung Notes dạng cửa sổ nổi. Một số ảnh có thông báo của Chrome về cờ dòng lệnh, không che phần đang kiểm. Web chạy qua bộ chuyển tiếp 127.0.0.1:5173 sang [::1]:5173 vì server web chỉ nghe IPv6 |
