# Ví dụ rút gọn: HW03 Task 1 trên EShop

Lần làm đầu, dùng để tra cách viết. Bản đầy đủ nằm ở thư mục `checklist/` của bài HW03 (đọc chỉ khi sinh viên cho phép, vì có thể làm lệch bản AI cho màn hình mới).

## Phạm vi

| Mã | Màn hình | URL | Vai trò | Trạng thái đã khảo sát |
|---|---|---|---|---|
| W-06 | Hồ sơ cá nhân & lịch sử đơn hàng | `/profile` | Chính | Chưa đăng nhập; đã đăng nhập, không có đơn; đã đăng nhập, 5 đơn ở 5 trạng thái |
| W-04 | Đăng ký | `/register` | Phụ | Chưa đăng nhập; đã đăng nhập (gõ thẳng URL) |
| W-03 | Đăng nhập | `/login` | Phụ | Chưa đăng nhập; đã đăng nhập (gõ thẳng URL) |

8 ảnh survey; ảnh thứ 8 chụp bổ sung sau khi sinh viên phát hiện lời chào trên navbar là link.

## Số liệu qua các bước

| Bước | Kết quả |
|---|---|
| `oracle` | 50 mã: 26 Áp dụng, 6 Áp dụng một phần, 18 Không áp dụng; 10 câu hỏi CH; 5 giả định GĐ; 2 mục khuyến nghị NR |
| `ai-draft` | 109 mục (IA-01: 35, IA-02: 31, IA-03: 18, IA-04: 25); 16 câu hỏi CHD |
| `review` | Bỏ hoặc gộp 5 mục, tách 3 mục thành 6, thêm 1 mục từ CHD-09 |
| `add` | Sinh viên thêm 4 mục |
| Cuối | 112 mục `CL` (58 AI giữ nguyên, 49 AI SV sửa, 5 SV thêm); 50 căn cứ SRS, 62 khuyến nghị |

## Một dòng oracle

| Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
|---|---|---|---|---|---|
| UI-R41 | Thanh điều hướng (Navbar) phải **highlight** trang đang được chọn. | IA-03 | W-06, W-04, W-03 | Áp dụng | Ở W-06 khi đã đăng nhập: Lời chào là mục navbar dẫn tới `/profile`, nên mong đợi lời chào được highlight. Khi chưa đăng nhập: Không mục nào được highlight (CH-09) |

## Một mục AI được tách khi review

Bản AI:

| Mã | Nội dung kiểm | Oracle | Kết quả mong đợi |
|---|---|---|---|
| AI-02-22 | Thông báo lỗi có nói rõ ô nào sai và cần sửa thế nào không? | Khuyến nghị: Nielsen heuristic 9; WCAG 2.2 SC 3.3.1 Error Identification, SC 3.3.3 Error Suggestion | Thông báo nêu tên ô (hoặc nằm ngay cạnh ô) và nêu điều kiện cần đạt; không chỉ ghi chung chung "Lỗi" hay "Dữ liệu không hợp lệ" |

(Màn hình của bản AI: W-06 (đăng nhập), W-04, W-03. Các cột đã rút gọn.)

Bản review tách thành hai mục, bỏ W-03 (vì yêu cầu không lộ nguyên nhân khi đăng nhập sai):

| Mã | Nội dung kiểm | Màn hình | Oracle | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|
| CL-55 | Thông báo lỗi có cho biết ô nào bị lỗi không? | W-06 (đăng nhập), W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.1 Error Identification; Nielsen heuristic 9 | Thông báo có tên ô, hoặc nằm ngay dưới ô bị lỗi. Thông báo nào không xuất hiện thì phần đó ghi "Không chạy được" | AI, SV sửa (AI-02-22) |
| CL-56 | Thông báo lỗi có nêu điều kiện cần đạt để sửa không? | W-06 (đăng nhập), W-04 | Khuyến nghị: WCAG 2.2 SC 3.3.3 Error Suggestion; Nielsen heuristic 9 | Thông báo nêu điều kiện cần đạt, ví dụ mật khẩu yếu thì nêu "tối thiểu 8 ký tự" | AI, SV sửa (AI-02-22) |

Dòng trong bảng thay đổi:

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| CL-55, CL-56 (AI-02-22) | Tách thành 2 mục theo WCAG 3.3.1 và 3.3.3; viết lại mong đợi đo được | Mơ hồ | | Bản AI kiểm 2 điều và ghi "không chỉ ghi chung chung", không đo được |
| CL-55, CL-56 (AI-02-22) | Bỏ W-03 | Sai | | Đòi thông báo đăng nhập sai nêu ô nào sai trái với UI-R08 ("không để lộ chi tiết nguyên nhân") |

## Một mục sinh viên thêm

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn | Vì sao AI bỏ sót |
|---|---|---|---|---|---|---|---|---|
| CL-109 | Ở kích thước màn hình điện thoại (rộng 360 px), trang có hiển thị vừa vặn, không có thanh cuộn ngang và không có phần tử chồng lên nhau không? | IA-01 | W-06 (đăng nhập, có đơn), W-04, W-03 | Khuyến nghị: WCAG 2.2 SC 1.4.10 Reflow | DevTools (Device Toolbar, rộng 360 px) | Không có thanh cuộn ngang, không có phần tử chồng lên nhau | SV thêm | Giới hạn model: AI có WCAG và slide về responsive trong đầu vào nhưng chỉ kiểm cửa sổ 1366 x 768 và zoom 200% |
