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
| `exec` (NT1 Chrome trên Windows) | Script Playwright cho kết quả nháp 39 Passed, 44 Failed, 7 Không chạy được, 22 Chạy tay; sau khi chạy tay, chụp bổ sung, AI điền từ log và ảnh (21 mục "AI xem ảnh"), sinh viên chốt: 51 Passed, 54 Failed, 7 Không chạy được |
| `bugs` | 33 issue mới, 2 bình luận vào issue dùng chung, 8 mục Failed không báo vì ảnh không thấy lỗi; 2 ảnh danh sách issue |
| `03_results.md` | Tóm tắt NT1: Tỉ lệ Passed trên đã thực thi 48,6% (thấp nhất IA-04: 37,5%); cả 5 mục sinh viên thêm đều Failed; đối chiếu 54 mục Failed = 43 mục trong 33 issue + 3 mục trong 2 bình luận + 8 mục không báo |

## Script của bước `exec` (ví dụ tham khảo)

Nằm ở `checklist/tools/` của HW03, **không** kèm trong skill vì gắn chặt EShop (nhãn, mã CL, tài khoản, dữ liệu). Đọc để tham khảo cách làm khi viết script mới (khi sinh viên cho phép, như phần còn lại của `checklist/`); không chép phần đặc thù.

| File | Nội dung | Phần tham khảo được |
|---|---|---|
| `devtools_check.js` | Script Console chỉ đọc trang, in bảng kết quả nháp cho các mục DevTools của W-03, W-04, W-06 | Cách tìm phần tử theo chữ nhìn thấy; cách in bảng mã mục, đo được, gợi ý |
| `n1_chrome_checklist.js` | Script Playwright điều khiển Chrome cài trên máy (NT1), các nhóm mục A đến J, cờ `--dry-run`, `--only=`, `--log=`, `--no-shots` | Phần đầu file (chuẩn bị, dữ liệu bị đổi, cách chạy); cách gộp kết quả theo màn hình; danh sách "Chạy tay"; tự chụp mục Failed; bảng cuối dạng Tab |
| `capture_screen.ps1` | Chụp toàn màn hình Windows, đưa cửa sổ Chrome của script lên trước | Cách chụp thấy thanh địa chỉ, tab, taskbar (chỉ Windows) |
| `package.json` | Phụ thuộc `playwright-core`, `axe-core` (không tải trình duyệt; dùng Chrome cài trên máy) | |
| `n1_run_log.txt`, `n1_cl34_log.txt`, `n1_shots_log.txt`, `n1_bugshots_log.txt` | Log của lần chạy thật và các lần chạy thêm một nhóm | Dạng log và bảng cuối mà AI dùng để điền cột NT1 |

Dữ liệu chạy được tạo bằng `tools/seed_orders.py` của HW03 (gọi API như giao diện, không sửa DB trực tiếp), sau khi reset DB.

## Một issue (rút gọn)

Tiêu đề: `[23120061][T1][W-04][Chrome] Đăng ký từ chối mật khẩu hợp lệ "Abcdef1!" với thông báo mật khẩu quá yếu`. Label: `bug`, `ia: IA-02`, `platform: web`, `severity: critical`, `task: T1 checklist`. Thân theo các trường của template nhóm; trường "Mục checklist" ghi `CL-65 (và CL-39, CL-40, CL-60, CL-104, ...: Không chạy được vì lỗi này)`; trường "Ảnh chụp":

```markdown
**CL-65_chrome.png**

![CL-65_chrome.png](https://github.com/user-attachments/assets/...)
```

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
