# Bước `exec`: Chạy checklist

**Mục tiêu:** Có kết quả Passed / Failed (hoặc giá trị khác đã chốt) cho mọi mục trên nền tảng thứ nhất, với Notes cho mục Failed và ảnh chụp mục Failed. Kết quả chỉ đến từ **lần chạy thật**.

**Đầu ra:** Cột kết quả của nền tảng thứ nhất (NT1) và sheet "Môi trường" trong file Excel; ảnh `screenshots/<mã mục>_<nền tảng>[_n].png`; log của lần chạy (nếu dùng script); `03_results.md` (tóm tắt kết quả).

Quy trình dưới đây rút từ lần làm đầu (HW03, NT1 Chrome trên Windows, 10/11/2026): Một script DevTools chỉ đọc dán vào Console, một script Playwright điều khiển Chrome cài trên máy cho kết quả nháp, sinh viên chạy tay các mục cần nhìn, AI điền kết quả nháp vào Excel từ log và ảnh, sinh viên review và chốt. Kết quả cuối: 51 Passed, 54 Failed, 7 Không chạy được.

## Hỏi trước khi làm

- Nền tảng thứ nhất (trình duyệt, OS, máy) và lần chạy này có tính là một nền tảng của cross-platform không. Nếu có, ảnh phải theo yêu cầu cross-platform (thấy tên trình duyệt, OS, URL; lớp chữ đè nếu đề yêu cầu).
- Cách chạy, sinh viên chọn (có thể trộn):
  - (a) Chạy tay toàn bộ theo cột "Cách kiểm".
  - (b) Thêm script DevTools **chỉ đọc trang**, dán vào Console, in bảng đo được cho các mục DevTools; sinh viên đối chiếu.
  - (c) Thêm script điều khiển trình duyệt thật (ví dụ Playwright, có giao diện) chạy các mục đo được, cho **kết quả nháp**; mục cần nhìn vẫn chạy tay.
- Ai chuẩn bị môi trường (reset dữ liệu, tạo dữ liệu, bật server): Sinh viên hay phiên điều phối. Script không tự làm việc này.

## Chuẩn bị

1. Reset dữ liệu và tạo dữ liệu theo điều kiện `ĐK-nn` của checklist, trước **mỗi** lần chạy (ở lần đầu: Reset DB, rồi chạy script tạo 5 đơn ở 5 trạng thái và một tài khoản không có đơn).
2. Server đang chạy; không có phiên khác (ví dụ phiên usability) dùng chung dữ liệu trong lúc chạy.
3. Kiểm thứ tự chạy: Mục làm đổi dữ liệu (hủy đơn) theo `ĐK` của nó; mục khóa tài khoản chạy cuối hoặc chờ hết thời gian khóa.
4. Ghi trước vào sheet "Môi trường": Trình duyệt và phiên bản, OS, độ phân giải và kích thước cửa sổ, zoom, scale của OS.

## Script (nếu sinh viên chọn (b) hoặc (c))

Skill **không** kèm script chạy sẵn: Script gắn chặt với từng hệ thống (nhãn, mã mục, tài khoản, dữ liệu), nên viết mới cho mỗi lần làm. Script của lần đầu nằm ở `checklist/tools/` của HW03, dùng làm ví dụ tham khảo (`references/example-hw03.md`).

### Quy tắc chung cho mọi script

- **Hộp đen:** Tìm phần tử theo chữ nhìn thấy trên trang (nhãn, chữ trên nút, như trong `00_survey.md`), không dựa vào mã nguồn hệ thống.
- Chỉ đo những gì **mục checklist yêu cầu**; không dùng script để tìm thêm mục. Điều đáng kiểm mà checklist chưa có: Ghi lại, bổ sung bằng commit riêng, ghi rõ là thêm sau khi chạy.
- Kết quả của script luôn là **nháp**. Mục cần mắt người (ngôn ngữ, màu, chính tả, highlight, căn lề, kiểu viết hoa) ghi "Chạy tay"; script chỉ in dữ liệu giúp nhìn (thông báo bắt được, tiêu đề tab, màu đo được).
- **AI không tự chạy script trên giao diện.** Sinh viên chạy (hoặc cho phép rõ ràng cho từng lần).

### (b) Script Console chỉ đọc trang

- Sinh viên mở trang cần kiểm, mở DevTools, dán script vào tab Console. Chạy ở từng màn hình và từng trạng thái (ví dụ đã đăng nhập và chưa đăng nhập).
- **Chỉ đọc:** Không sửa DOM, không đổi focus, không ghi storage, không gửi request. Chỉ dùng API chuẩn để chạy được trên nhiều trình duyệt.
- Chỉ phủ các mục có "Cách kiểm" là DevTools đo được bằng DOM hoặc computed style; liệt kê ở đầu script mục nào có, mục nào không (mục dùng Lighthouse, axe, tab Network, bàn phím, nhìn).
- In một bảng: Mã mục, màn hình, đo được, gợi ý nháp, ghi chú. Sinh viên đối chiếu với kết quả mong đợi rồi mới ghi kết quả. Ảnh chụp bảng trong Console dùng được làm ảnh bằng chứng cho mục Failed (hậu tố `_2`, `_3` cùng mã mục).

### (c) Script Playwright điều khiển trình duyệt thật

- Điều khiển trình duyệt **cài trên máy**, có giao diện (không headless), kích thước vùng trang cố định và ghi vào sheet "Môi trường".
- Đầu script ghi rõ: Cần chuẩn bị gì (script **không** tự reset dữ liệu, tạo dữ liệu hay bật server); script **đổi** dữ liệu gì (tài khoản tạo mới, hồ sơ bị sửa, đơn bị hủy, tài khoản bị khóa).
- Hỏi xác nhận đã chuẩn bị trước khi chạy; dừng chờ sinh viên ở bước script không làm được (ví dụ tự thêm sản phẩm vào giỏ hàng).
- Cờ dòng lệnh:
  - `--dry-run`: Chạy thử để gỡ lỗi script; gặp Failed chỉ ghi lại, không chụp, không dừng; kết quả không dùng cho Excel.
  - `--only=<nhóm>`: Chạy một số nhóm mục (ví dụ nhóm thêm sau để chụp ảnh bổ sung hoặc ảnh cho bug report).
  - `--log=<file>`: Ghi log nối tiếp ra file, không có mã màu.
  - `--no-shots`: Tắt chụp ảnh.
- Mỗi mục có kết quả theo từng màn hình; gộp: Có màn hình Failed thì Failed; điều kiện không tạo được ghi "Không chạy được" kèm lý do; lỗi của chính script ghi riêng để chạy tay.
- **Tự chụp toàn màn hình** ở màn hình Failed đầu tiên của mỗi mục (thấy thanh địa chỉ, tab, taskbar), đưa cửa sổ trình duyệt lên trước rồi mới chụp, đặt tên theo quy ước ảnh của dự án, ảnh đã có thì không ghi đè (thêm hậu tố). Hộp thoại `alert` tự đóng nên cần bước chụp riêng lúc hộp thoại đang mở.
- Bảng kết quả cuối in ra màn hình và ghi vào log dạng cột cách nhau bằng Tab.
- Lần chạy thật là lần không có `--dry-run`, có `--log`.

### Reset dữ liệu

- **Trước mỗi lần chạy** (kể cả lần chạy thêm một nhóm): Reset dữ liệu và tạo lại dữ liệu theo `ĐK-nn`; không có phiên khác dùng chung dữ liệu.
- Sau lần chạy có đổi dữ liệu: Nhắc reset trước khi dùng hệ thống cho việc khác.

### Ai chốt kết quả

- Script cho kết quả nháp; AI điền kết quả nháp vào Excel từ log và ảnh (mục "Sau lần chạy").
- **Sinh viên** review từng dòng và chốt. Chỉ kết quả sinh viên đã chốt mới là kết quả của lần chạy.

## Sau lần chạy

1. **Chạy tay** các mục "Chạy tay" và mục script báo lỗi; chụp ảnh cho mục Failed. Ghi giờ chạy tay vào sheet "Môi trường".
2. **Chụp bổ sung** khi ảnh tự chụp chưa thấy lỗi: Hộp thoại `alert` tự đóng trước khi chụp; lỗi chỉ thấy lúc rê chuột, lúc đang tải, trong tab Network. Ảnh bằng chứng từ Console (bảng của script DevTools) đặt hậu tố `_2`, `_3` cùng mã mục.
3. **AI điền kết quả nháp** vào cột NT1 của file Excel đang có (không chạy lại script dựng Excel, vì sẽ tạo file trống):
   - Chỉ từ bằng chứng của lần chạy thật: Log, ảnh trong `screenshots/`, ghi chú chạy tay của sinh viên.
   - Mục AI kết luận bằng cách **xem ảnh** (không có số đo trong log): Notes bắt đầu bằng `(AI xem ảnh)`.
   - Notes của mục Failed: Màn hình nào, thấy gì, khác mong đợi ở đâu; màn hình nào đạt cũng ghi ngắn. Mục "Không chạy được": Lý do (mục phụ thuộc nào Failed, bug nào chặn). Cột Ảnh: Tên các file.
   - Không có bằng chứng thì để trống và báo sinh viên; không suy kết quả.
   - Sheet "Môi trường", dòng Ghi chú: Kết quả do AI điền từ log nào và ảnh nào, sinh viên review và chốt.
4. **Sinh viên review** từng dòng và chốt. Sửa theo sinh viên.
5. Sheet "Tổng hợp" tự đếm; báo số Passed, Failed, Không chạy được.
6. Viết `03_results.md` (mục dưới) sau khi sinh viên đã chốt.

## Tóm tắt kết quả `03_results.md`

File **chỉ tóm tắt**: Kết quả từng mục, Notes và tên ảnh nằm trong Excel; nội dung mục nằm trong `02_checklist.md`. File phục vụ cả `exec` và `bugs` (đầu file ghi `[T1][exec]`, `[T1][bugs]`): Phần kết quả viết ở `exec`; phần issue (mục 3, cột Issue của mục 4, mục 6) điền khi xong `bugs` (`step-bugs.md`, Pha 4). Theo mẫu `assets/templates/results.md`:

1. **Môi trường chạy:** Tên ngắn, trình duyệt (cách điều khiển), OS, thiết bị, màn hình và cửa sổ (của script và khi chạy tay), zoom và scale, ngày giờ của từng lần chạy (lần chính, chạy tay, các nhóm chạy thêm), dữ liệu, người chạy và công cụ dùng cho nhóm mục nào, **cách chốt kết quả** (AI điền nháp từ log nào và ảnh nào, nhãn "(AI xem ảnh)", sinh viên chốt). Nếu nền tảng này cũng tính cho cross-platform, ghi ảnh có lớp chữ đè.
2. **Tổng hợp kết quả:**
   - Theo IA: Số mục, Passed, Failed, Không chạy được, đã thực thi (Passed + Failed), tỉ lệ Passed trên đã thực thi; dòng tổng. Ghi có mục N/A hay không, và "Không chạy được" không tính vào Passed / Failed.
   - Theo căn cứ (SRS, khuyến nghị) và theo nguồn (`AI`, `AI, SV sửa`, `SV thêm`). Nhóm nào cho kết quả đáng chú ý thì ghi một câu (ở lần đầu: Cả 5 mục sinh viên thêm đều Failed), vì đây là dữ liệu cho phần AI Critique.
3. **Mục Failed chính:** Xếp theo issue và severity (critical, high, medium), mỗi dòng một lỗi gốc và các mục CL của nó; câu cuối tóm tắt nhóm lỗi severity low.
4. **Danh sách đủ mục Failed**, chia theo IA: Mã, lỗi quan sát được (ngắn, chép nguyên văn chữ trên giao diện), màn hình, Issue (`#số`, "Bình luận #số", hoặc "Không báo").
5. **Mục Không chạy được:** Mã, IA, lý do (mục nào Failed hoặc bug nào chặn). Ghi thêm các mục chỉ một phần màn hình không chạy được.
6. **Bug:** Link bug report và ảnh danh sách issue; bảng chỉ số (số issue mới, theo severity, theo căn cứ, theo IA, số bình luận, số issue có `Related`); câu đối chiếu: Tổng mục Failed bằng số mục trong issue cộng số mục trong bình luận cộng số mục không báo.

Mọi con số đếm từ Excel (sheet "Tổng hợp" hoặc đọc bằng `openpyxl`) và từ `bug_report.md`, không đếm tay. Kiểm: Số dòng ở mục 4 bằng số Failed ở mục 2; số dòng ở mục 5 bằng số "Không chạy được".

## Tự kiểm

- Mọi dòng NT1 có kết quả; mục Failed có Notes và ít nhất một ảnh có trong `screenshots/`; tên ảnh đúng quy ước.
- Mục bị một bug chặn đã ghi "Không chạy được" kèm lý do, không ghi Failed.
- Giá trị thay thế dùng để vượt một bug (ví dụ số điện thoại mà trang chấp nhận) được ghi trong Notes của các mục dùng nó.
- Số liệu ở `03_results.md` khớp Excel.
- Checklist bước `exec` trong `lessons.md`.

**Dừng**, đưa commit message (ví dụ `[T1][exec] Execute checklist on Chrome Windows`). Nhắc reset dữ liệu nếu script đã đổi dữ liệu.
