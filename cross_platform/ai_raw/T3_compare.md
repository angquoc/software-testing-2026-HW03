# T3 compare: So sánh kết quả checklist trên 3 nền tảng

- Bước: `[T3][compare]`
- Bản AI, lưu nguyên văn trước khi review
- Nguồn: Cột NT1, NT2, NT3 của `checklist/HW03_T1_GUI_Checklist.xlsx` (cùng checklist 112 mục của Task 1); môi trường chi tiết ở sheet "Môi trường"
- Bug: `bugs/bug_report.md` mục 8 đến 11

---

## 1. Ba nền tảng

| | Trình duyệt | OS / thiết bị | Ngôn ngữ trình duyệt | Cách chạy | Ngày |
|---|---|---|---|---|---|
| N1 | Chrome 156.0.8078.81 | Windows 11, máy SV, vùng trang 1366 x 768 | Tiếng Anh (`en-US`) | Script Playwright (lần chạy Task 1) | 10/11/2026 |
| N2 | Firefox 159.0 (bản của Playwright) | Windows 11, cùng máy N1, vùng trang 1366 x 768 | Tiếng Anh (`en-US`) | Script Playwright, 10 mục SV bấm tay (nhóm K) | 11/11/2026 |
| N3 | Chrome 156.0.8078.79 cho Android | Android 15, Samsung SM-G998B, vùng trang 384 x 755 | Tiếng Việt | Script Playwright qua USB, vài mục SV làm tay | 10/11/2026 |

## 2. Tổng hợp kết quả

| | Passed | Failed | N/A | Không chạy được | Có kết luận (Passed + Failed) | Tỉ lệ Passed trên mục có kết luận |
|---|---|---|---|---|---|---|
| N1 Chrome Windows | 51 | 54 | 0 | 7 | 105 / 112 | 48,6% |
| N2 Firefox Windows | 51 | 53 | 0 | 8 | 104 / 112 | 49,0% |
| N3 Android Chrome | 45 | 52 | 8 | 7 | 97 / 112 | 46,4% |

12 / 112 mục có kết quả khác nhau giữa các nền tảng (mục 3); 100 mục giống nhau trên cả 3. N1 và N2 giống nhau ở 111 / 112 mục: Đổi engine (Blink sang Gecko) trên cùng máy không làm đổi kết quả.

## 3. Các mục khác nhau và nguyên nhân

| Mã | Nội dung | N1 | N2 | N3 | Nguyên nhân | Bug |
|---|---|---|---|---|---|---|
| CL-11 | Tiền phân cách hàng nghìn bằng dấu phẩy | Passed | Passed | Failed | **Ngôn ngữ trình duyệt:** Trình duyệt tiếng Việt hiện "10.000.000 ₫", tiếng Anh hiện "10,000,000 ₫" (kiểm chéo cùng máy: `chrome/CL-24_locale_1.png` đến `_4`) | #104 (mới) |
| CL-24 | Ngày theo ngày / tháng / năm | Failed | Không chạy được | Passed | **Ngôn ngữ trình duyệt:** Tiếng Anh hiện tháng / ngày / năm, tiếng Việt hiện ngày / tháng / năm. N2: Dữ liệu ngày 11/11 không phân biệt được (mục 4) | #53 (Task 1, đã bình luận) |
| CL-33 | Zoom 200% vẫn dùng được | Passed | Passed | Failed | **Khổ màn hình:** Trên điện thoại (vùng trang hẹp), zoom 200% làm navbar bị cắt (mất nút "Thoát", mục "Đăng nhập"), bảng đơn chỉ còn 2 cột, trang cuộn ngang; trên máy tính (683 px khi zoom) trang chuyển sang một cột, không bị cắt | ⏳ D-33 |
| CL-34 | Họ Tên dài trên navbar | Passed | Passed | Failed | **Khổ màn hình:** Rộng 384 px, lời chào 50 ký tự xuống 4 dòng, navbar cao gấp đôi, "Giỏ hàng" bị ép 2 dòng; rộng 1366 px vẫn một dòng | ⏳ D-33 |
| CL-15, CL-16 | Thứ tự focus khi bấm Tab | Failed | Failed | N/A | **Thiết bị cảm ứng:** Điện thoại không có phím Tab | Không (đã có issue Task 1) |
| CL-17, CL-21, CL-73 | Thứ tự focus ở W-06, viền focus, Enter trên link | Passed | Passed | N/A | **Thiết bị cảm ứng:** Điện thoại không có phím Tab | Không |
| CL-74, CL-107 | Đổi hình thức khi rê chuột | Failed | Failed | N/A | **Thiết bị cảm ứng:** Không có con trỏ chuột | Không |
| CL-32 | Hiển thị đủ ở cửa sổ 1366 x 768 | Passed | Passed | N/A | **Khổ màn hình:** Mục riêng cho máy tính; điện thoại kiểm ở CL-109 | Không |

Hai mục CL-11 và CL-24 cho thấy trang định dạng số và ngày theo ngôn ngữ của trình duyệt, không cố định tiếng Việt. Vì kỳ vọng của hai mục ngược nhau (SRS viết tiền kiểu `300,000 ₫`, ngày theo quy ước Việt Nam), không trình duyệt nào đạt cả hai.

## 4. Giới hạn

- **N2 chạy trên máy SV, không qua cloud (D-28):** Trial BrowserStack Live chỉ cho 1 phút mỗi thiết bị, LambdaTest Freemium 2 phiên khoảng 2 phút (`firefox/browserstack_trial_limit.png`, `lambdatest_trial_limit_1.png`, `_2.png`). Firefox là bản do Playwright tải về (about:support ghi thương hiệu "Nightly"), không phải bản cài từ mozilla.org.
- **CL-24 trên N2 "Không chạy được" (D-25):** Đơn seed ngày 11/11/2026 có số ngày trùng số tháng. Bằng chứng gián tiếp: Firefox `en-US` tự viết ngày mẫu 9/11/2026 là "11/9/2026" và tiền trên trang giống định dạng mặc định của Firefox (`firefox/overview_env_2.png`).
- **10 mục của N2 do SV bấm tay (nhóm K):** CL-72, CL-77, CL-81, CL-82, CL-97, CL-99, CL-100, CL-101, CL-52, CL-102. Ở lần chạy 1, cú bấm của script không có tác dụng trên Firefox; bấm tay cho kết quả giống N1.
- **Ngôn ngữ trình duyệt khác nhau giữa các nền tảng** (N1, N2 tiếng Anh; N3 tiếng Việt): Đây là nguồn của khác biệt CL-11, CL-24, không phải do hệ điều hành hay engine.
- **N3 có 8 mục N/A** (bàn phím, chuột, cửa sổ máy tính), nên tỉ lệ ở mục 2 của N3 tính trên ít mục hơn.

## 5. Quyết định

| Mã | Quyết định | Đã chốt |
|---|---|---|
| D-28 | Nơi chạy N2 khi trial cloud không đủ | Firefox trên máy SV |
| D-30 | Ảnh CL-46 trên N2 chụp lúc ô mật khẩu trống | Giữ `CL-46.png`, Notes dẫn thêm `CL-47.png`, `CL-89.png` (thấy mật khẩu hiện chữ) |
| D-31 | Ảnh CL-109 trên N2 (cửa sổ 360 px che một phần URL) | Giữ |
| D-32 | Ghi kết quả 10 mục SV bấm tay ở N2 | Lấy kết quả bấm tay, Notes ghi lần 1 script bấm không có tác dụng |
| ⏳ D-33 | Có báo issue cho CL-33, CL-34 (chỉ Failed trên điện thoại) không | Chưa chốt |

---
