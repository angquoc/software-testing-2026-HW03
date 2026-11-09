# T3 setup: Nền tảng, công cụ và lớp chữ đè

- Bước: `[T3][setup]`
- Bản gốc của AI: `ai_raw/T3_setup.md` (giữ nguyên, không sửa)
- Trạng thái: Đã chốt mọi quyết định

---

## 1. Căn cứ

| Nguồn | Nội dung dùng ở đây |
|---|---|
| Đề §6 Task 3 | Chạy Task 1 trên ít nhất 3 nền tảng; BrowserStack hoặc LambdaTest trial được ưu tiên mạnh; web phải phủ Chrome, Firefox, Safari (hoặc Android Chrome); mỗi ảnh có chữ đè email sinh viên |
| Đề §8 | Công cụ BrowserStack / LambdaTest phải khai trong AI Audit Report |
| Đề §11 | Ảnh cross-platform không được do AI tạo hay bịa; phải thấy MSSV và họ tên |
| WORKFLOW §3.3, §5 | Dùng đúng checklist Task 1; N/A kèm lý do; ảnh thấy tên trình duyệt / OS / thiết bị, URL localhost, lớp chữ đè MSSV, họ tên, email; ảnh lưu ở `cross_platform/screenshots/<nền tảng>/` |
| WORKFLOW §3.1.3 | Lần chạy Task 1 được tính là một nền tảng của Task 3 thì ảnh phải theo yêu cầu Task 3 |
| README nhóm §3.3, §4.2, §5 | Tag nền tảng `chrome`, `firefox`, `android-chrome`; URL local (Web `5173`, Backend `3000`); frontend gọi API bằng `http://localhost:3000` ghi cố định |

## 2. Yêu cầu bắt buộc

| Mã | Yêu cầu | Nguồn |
|---|---|---|
| R-01 | Ít nhất 3 nền tảng, cùng một checklist Task 1 (mã `CL-xx` giữ nguyên) | Đề §6, WORKFLOW §3.3 |
| R-02 | Bộ nền tảng có Chrome, Firefox và Safari hoặc Android Chrome | Đề §6 |
| R-03 | Mỗi ảnh thấy rõ tên trình duyệt / OS / thiết bị **và** URL localhost của SUT | Đề §6, WORKFLOW §3.3 |
| R-04 | Mỗi ảnh có lớp chữ đè: MSSV, họ tên, email sinh viên | Đề §6, §11, WORKFLOW §3.3 |
| R-05 | Ảnh chụp thật, không do AI tạo hay chỉnh nội dung | Đề §11, WORKFLOW §3.3 |
| R-06 | Excel có một cột kết quả cho mỗi nền tảng; mục không áp dụng ghi N/A kèm lý do | WORKFLOW §3.3 |
| R-07 | Ghi môi trường mỗi lần chạy: Trình duyệt và phiên bản, OS, độ phân giải, ngày giờ | WORKFLOW §3.1.3 |

## 3. Thông tin của sinh viên

| Mã | Câu hỏi | Trả lời |
|---|---|---|
| Q-01 | Thiết bị sẵn có | Máy tính Windows và điện thoại Android; không có Mac, iPhone |
| Q-02 | Tài khoản BrowserStack / LambdaTest | Chưa tạo tài khoản nào, nên trial của cả hai dịch vụ còn nguyên |
| Q-03 | Email sinh viên cho lớp chữ đè | `23120061@student.hcmus.edu.vn` |
| Q-04 | Lần chạy Task 1 | Chưa chạy xong, nên ảnh của lần chạy này sẽ được chụp theo yêu cầu Task 3 ngay từ đầu |

## 4. Nền tảng đã chọn (tổ hợp T-C)

| Thứ tự | Nền tảng (tag) | Mã phương án | Chạy ở đâu | Cách mở SUT | URL trong ảnh |
|---|---|---|---|---|---|
| N1 | Chrome trên Windows (`chrome`) | P-01 | Máy cá nhân; **chính là lần chạy `exec` của Task 1** | Mở trực tiếp `http://localhost:5173` | `localhost:5173/...` |
| N2 | Firefox trên cloud (`firefox`) | P-03 | BrowserStack Live (D-03), máy từ xa chạy Windows 11 (D-14) | Tunnel (mục 7.2) | `localhost:5173/...` trên thanh địa chỉ của Firefox từ xa |
| N3 | Android Chrome trên điện thoại thật (`android-chrome`) | P-07 | Điện thoại Android của SV, cắm USB | `adb reverse` cổng `5173` và `3000` (mục 7.3) | `localhost:5173/...` trên thanh địa chỉ Chrome của điện thoại |

Đối chiếu yêu cầu:

- R-02: Có Chrome (N1), Firefox (N2), Android Chrome (N3) thay cho Safari.
- Dùng công cụ cloud đề ưu tiên cho một nền tảng (N2). N3 là thiết bị thật, đề cho phép.
- Không dùng Safari nên không gặp vấn đề `bs-local.com` (bản AI mục 6.3).

## 5. Lớp chữ đè

### 5.1 Nội dung

```
23120061
Nguyễn Thị Ánh Ngọc
23120061@student.hcmus.edu.vn
```

Xếp một dòng hay ba dòng đều được, miễn đọc rõ. Lớp chữ đè **chỉ** gồm ba thông tin trên, không thêm nhãn nền tảng hay ngày (D-06b): Nhãn tự gõ không chứng minh được ảnh thật sự chụp trên nền tảng đó. Thông số nền tảng được chụp từ chính hệ thống trong một ảnh môi trường riêng (mục 6.3).

### 5.2 Cách tạo trên máy tính (N1, N2): Cửa sổ Sticky Notes ghim nổi trên màn hình

1. Mở Sticky Notes (ứng dụng ghi chú có sẵn của Windows, D-15), tạo một ghi chú có nội dung 5.1, cỡ chữ đủ lớn để đọc rõ khi xem ảnh cỡ thường.
2. Thu nhỏ ghi chú vừa đủ chữ.
3. Giữ ghi chú luôn nằm trên cùng các cửa sổ khác. Cách ghim thực tế (tính năng của Sticky Notes hay một công cụ ghim như PowerToys Always On Top `Win+Ctrl+T`) ghi lại vào đây khi thiết lập, để khai báo trong báo cáo.
4. Đặt ghi chú ở một góc **không che**: Thanh địa chỉ, tên trình duyệt / thiết bị, thanh tác vụ, phần giao diện đang kiểm. Giữ cùng vị trí trên mọi ảnh của một nền tảng. Nếu mục đang kiểm nằm đúng góc đó thì dời ghi chú tạm thời.

Cách này không đụng vào trang của SUT nên không ảnh hưởng kết quả checklist (DOM, bố cục, Tab order, Lighthouse, axe).

### 5.3 Với điện thoại Android (N3)

Ghi chú trên máy tính chỉ nằm trên màn hình máy tính, nên với N3 lớp chữ đè được tạo **ngay trên điện thoại** bằng chế độ đa màn hình (multi-window) của Android, kiểu **cửa sổ nổi nhỏ (pop-up view)** (D-13b): Chrome vẫn chiếm toàn màn hình, ghi chú Samsung Notes (D-15) thu thành cửa sổ nhỏ nằm đè lên. Chụp toàn màn hình điện thoại (thường là `Nguồn` + `Giảm âm lượng`).

1. Tạo một ghi chú trong Samsung Notes có nội dung 5.1, cỡ chữ đủ lớn.
2. Mở Chrome toàn màn hình, mở ghi chú dưới dạng pop-up view, thu nhỏ vừa đủ chữ.
3. Đặt cửa sổ nổi ở một góc **không che** thanh địa chỉ và phần giao diện đang kiểm; giữ cùng vị trí trên mọi ảnh, chỉ dời tạm khi mục đang kiểm nằm đúng góc đó.
4. Chụp thử (S-05) để kiểm: Thấy đủ lớp chữ đè, thanh địa chỉ `localhost:5173/...`, phần giao diện đang kiểm.
5. Chép ảnh từ điện thoại sang máy tính, đặt tên theo mục 6.3. Không chỉnh sửa ảnh.

Lý do chọn pop-up view thay cho chia đôi màn hình: Chrome giữ kích thước màn hình thật, bàn phím ảo không chiếm gần hết vùng hiển thị, nên kết quả các mục về vị trí thông báo lỗi, nút submit gần với cách dùng bình thường.

Lưu ý chung cho N3:

- Cửa sổ nổi phải giữ ngoài các vùng đang kiểm; nếu có lúc cửa sổ nổi che phần giao diện liên quan tới một mục thì ghi lại trong Notes của mục đó.
- Chrome trên Android tự ẩn thanh địa chỉ khi cuộn xuống. Trước khi chụp, cuộn ngược lên một chút cho thanh địa chỉ hiện lại.
- Ảnh chụp trên điện thoại không tự cho thấy tên model. Bằng chứng thiết bị nằm trong ảnh môi trường (mục 6.3).

## 6. Chụp ảnh

### 6.1 Cách chụp: Toàn màn hình

- Chụp toàn màn hình máy tính, ví dụ `Win+PrtSc` (lưu thẳng vào `Pictures\Screenshots`).
- Không bật chế độ toàn màn hình của trình duyệt (`F11`) vì sẽ ẩn thanh địa chỉ.
- Để thanh tác vụ Windows luôn hiện (tắt tự ẩn).
- Với N2 (cloud): Ảnh sẽ có hai thanh địa chỉ: Của trình duyệt máy SV (trang của dịch vụ cloud) và của Firefox từ xa (`localhost:5173/...`). Thanh địa chỉ của Firefox từ xa và thanh công cụ của dịch vụ (ghi OS, trình duyệt, phiên bản) phải đọc rõ được.
- Với N3: Chụp toàn màn hình **điện thoại** (không phải máy tính); thanh địa chỉ Chrome và cửa sổ ghi chú phải cùng hiện (mục 5.3).

### 6.2 Mỗi ảnh phải thấy được

| Nền tảng | Tên trình duyệt / OS / thiết bị | URL localhost | Lớp chữ đè |
|---|---|---|---|
| N1 Chrome Windows | Thanh tác vụ Windows có biểu tượng Chrome đang mở; phiên bản Chrome và OS nằm ở ảnh môi trường | Thanh địa chỉ Chrome | Ghi chú Sticky Notes ghim nổi |
| N2 Firefox cloud | Thanh công cụ của dịch vụ cloud ghi OS, trình duyệt, phiên bản; thêm ảnh môi trường | Thanh địa chỉ Firefox từ xa | Ghi chú Sticky Notes ghim nổi |
| N3 Android Chrome | Thanh địa chỉ và giao diện cho thấy Chrome Android; model, phiên bản Android và Chrome nằm ở ảnh môi trường | Thanh địa chỉ Chrome trên điện thoại | Ghi chú Samsung Notes dạng pop-up view (mục 5.3) |

Ảnh môi trường không cần URL localhost, nhưng vẫn phải có lớp chữ đè (R-04).

### 6.3 Ảnh của mỗi nền tảng

Mỗi nền tảng chụp:

1. **Mọi mục Failed:** Mỗi mục ít nhất một ảnh.
2. **Một ảnh tổng quan cho mỗi màn hình:** 3 màn hình (Hồ sơ cá nhân & lịch sử đơn hàng `/profile`, Đăng ký `/register`, Đăng nhập `/login`), tức 3 ảnh tổng quan cho một nền tảng. Ảnh tổng quan `/profile` chụp ở trạng thái đã đăng nhập bằng tài khoản `test@eshop.com`, với dữ liệu sau khi reset và seed (D-11, D-09).
3. **Một ảnh môi trường** (`overview_env.png`, D-05): Trang do chính hệ thống hiển thị các thông số của nền tảng, chụp trong cùng buổi chạy, có lớp chữ đè. Ngày giờ lấy từ đồng hồ trên thanh tác vụ Windows hoặc thanh trạng thái điện thoại trong ảnh.

   | Nền tảng | Trang chụp gợi ý | Thông số thấy được |
   |---|---|---|
   | N1 `chrome` | `chrome://version` | Phiên bản Chrome, phiên bản Windows |
   | N2 `firefox` | `about:support` trong Firefox từ xa, cùng thanh công cụ của dịch vụ cloud | Phiên bản Firefox, OS máy từ xa |
   | N3 `android-chrome` | `chrome://version` trên điện thoại (dòng OS có phiên bản Android và mã model); thêm trang Giới thiệu điện thoại nếu cần | Phiên bản Chrome, phiên bản Android, model |

   Một trang không đủ thông số thì chụp nhiều ảnh, đánh số `overview_env_1.png`, `overview_env_2.png`.

Mục Passed và N/A không chụp.

Tên file (theo WORKFLOW §5):

| Nền tảng | Ảnh mục Failed | Ảnh tổng quan |
|---|---|---|
| N1 `chrome` | Chỉ lưu ở `checklist/screenshots/CL-xx_chrome.png` (ảnh Failed của Task 1), không sao chép sang `cross_platform/`; `02_compare.md` dẫn chiếu tới đó (D-08) | `cross_platform/screenshots/chrome/overview_profile.png`, `overview_register.png`, `overview_login.png` |
| N2 `firefox` | `cross_platform/screenshots/firefox/CL-xx.png` | `cross_platform/screenshots/firefox/overview_profile.png`, `overview_register.png`, `overview_login.png` |
| N3 `android-chrome` | `cross_platform/screenshots/android-chrome/CL-xx.png` | `cross_platform/screenshots/android-chrome/overview_profile.png`, `overview_register.png`, `overview_login.png` |

Ảnh môi trường của mỗi nền tảng nằm cùng thư mục với ảnh tổng quan: `cross_platform/screenshots/<nền tảng>/overview_env.png`.

Trang phải cuộn mới thấy hết (ví dụ `/profile` có nhiều đơn, hay màn hình điện thoại) hoặc một mục Failed cần nhiều ảnh: Đánh số hậu tố từ `_1`, ví dụ `overview_profile_1.png`, `overview_profile_2.png` (WORKFLOW §5). Tính cả nhóm ảnh này là "một ảnh tổng quan" của màn hình đó.

### 6.4 Dữ liệu và độ phân giải

- **Dữ liệu (D-09):** Trước **mỗi** nền tảng, reset DB (`cd backend && node database.js`) rồi seed lại dữ liệu (đơn hàng của `test@eshop.com` để có lịch sử đơn). Phiên điều phối thực hiện. Như vậy ba nền tảng bắt đầu từ cùng một trạng thái dữ liệu.
- **Độ phân giải (D-10):** N1 và N2 dùng cùng một độ phân giải màn hình. Ghi giá trị của N1 khi chạy, rồi chọn đúng giá trị đó cho máy Windows 11 từ xa ở N2 (trong phần cài đặt độ phân giải của phiên cloud). N3 dùng độ phân giải màn hình thật của điện thoại, ghi lại ở R-07.

## 7. Thiết lập từng nền tảng

### 7.1 N1: Chrome trên Windows (lần chạy `exec` của Task 1)

Vì lần chạy này được tính là nền tảng N1, mọi ảnh của `exec` phải theo mục 5 và 6 **ngay từ ảnh đầu tiên**:

1. Trước khi chạy: Reset DB và seed dữ liệu (mục 6.4); mở và ghim ghi chú Sticky Notes (mục 5.2), kiểm thanh tác vụ đang hiện.
2. Chạy checklist như WORKFLOW §3.1.3. Ảnh mục Failed chụp toàn màn hình, có lớp chữ đè, thấy thanh địa chỉ `localhost:5173/...`.
3. Chụp thêm 3 ảnh tổng quan và ảnh môi trường `overview_env.png` (mục 6.3).
4. Ghi môi trường (R-07): Phiên bản Chrome (xem ở `chrome://version`), phiên bản Windows, độ phân giải, ngày giờ.
5. Cột kết quả của lần chạy này trong Excel là cột của nền tảng `chrome`.

Ảnh tổng quan và ảnh môi trường của N1 (`cross_platform/screenshots/chrome/`) đưa thẳng vào commit `[T1][exec]` cùng kết quả chạy, không có commit `[T3][chrome]` riêng (D-12).

### 7.2 N2: Firefox trên cloud

1. Đăng ký trial BrowserStack Live (D-03). Theo nguồn tổng hợp (cần xem lại trên trang chính thức khi đăng ký): Khoảng 30 phút Live, dùng một lần. Ghi lại số phút thực tế của trial vào đây.
2. **Chuẩn bị xong mọi thứ trước khi bật tunnel và mở phiên cloud (D-04)**, để phút trial chỉ dùng cho việc chạy checklist:
   - Phiên điều phối chạy server EShop (Backend `3000`, Web `5173`), reset DB và seed dữ liệu (mục 6.4).
   - Ghi chú Sticky Notes đã ghim đúng vị trí (mục 5.2).
   - File Excel mở sẵn ở cột `firefox`, dữ liệu nhập cho các mục form (email, mật khẩu đúng / sai...) chép sẵn để dán.
   - Lưu ý: Phiên đăng nhập SUT nằm trong trình duyệt từ xa, nên bước đăng nhập `test@eshop.com` vẫn phải làm trong phiên cloud.
3. Lấy access key trong trang tài khoản BrowserStack, chạy tunnel BrowserStack Local trên Windows: `BrowserStackLocal.exe --key <ACCESS_KEY>` (chờ dòng báo đã kết nối), hoặc ứng dụng BrowserStack Local mà trang Live gợi ý tải khi mở URL localhost. Không đưa access key vào file trong repo hay vào prompt.
4. Mở phiên Live, chọn Firefox trên Windows 11 (D-14), đặt độ phân giải giống N1 (mục 6.4), gõ `http://localhost:5173/login`.
5. Smoke test (S-01) trước khi chạy cả checklist.
6. Chạy checklist, chụp ảnh theo mục 6; mục cần DevTools dùng DevTools của Firefox từ xa (`F12` trong phiên).
7. Ghi môi trường (R-07) theo thông tin dịch vụ hiển thị.

Phút trial có thể không đủ cho một lượt hơn 40 mục (ước lượng của bản AI: Khoảng 45 đến 90 phút một nền tảng, chưa đo thật). Cách xử lý đã chọn là chuẩn bị sẵn mọi thứ ở bước 2 (D-04). Nếu vẫn hết phút giữa chừng thì ghi rõ các mục chưa chạy, không tự điền kết quả.

### 7.3 N3: Android Chrome trên điện thoại thật

1. Cài Android SDK Platform-Tools (có `adb`) trên Windows.
2. Trên điện thoại: Bật Developer options và USB debugging, cắm cáp, chấp nhận hộp thoại cho phép gỡ lỗi; trên máy chạy `adb devices` thấy thiết bị.
3. Chạy:
   ```
   adb reverse tcp:5173 tcp:5173
   adb reverse tcp:3000 tcp:3000
   ```
4. Mở Chrome trên điện thoại, gõ `http://localhost:5173/login`. URL hiển thị là localhost thật, API `localhost:3000` cũng tới được máy.
5. Cách thay thế cho bước 3: Chrome trên máy tính, mở `chrome://inspect/#devices`, bật Port forwarding cho `5173` và `3000`. Trang này cũng mở được DevTools từ xa cho các mục cần DevTools.
6. Phiên điều phối reset DB và seed dữ liệu (mục 6.4); mở Chrome toàn màn hình và ghi chú Samsung Notes dạng pop-up view (mục 5.3).
7. Smoke test (S-03), chạy checklist, chụp ảnh theo mục 6.
8. Ghi môi trường (R-07): Model điện thoại, phiên bản Android, phiên bản Chrome, độ phân giải màn hình.

Mục dự kiến N/A trên N3: Mục về phím Tab và hover (không có bàn phím vật lý, không có chuột). Mục cần DevTools chạy được nếu dùng `chrome://inspect`. Danh sách N/A cụ thể chốt khi chạy, mỗi mục ghi lý do.

## 8. Quyết định

Đã chốt toàn bộ, không còn quyết định mở. Danh sách quyết định và lý do nằm ở bảng "Thay đổi so với bản AI" cuối file.

## 9. Việc nên thử sớm

| Mã | Thử gì | Thành công khi |
|---|---|---|
| S-01 | Tunnel của dịch vụ cloud với Firefox (N2) | Đăng nhập được `test@eshop.com`, `/profile` hiện hồ sơ và lịch sử đơn |
| S-03 | `adb reverse` trên điện thoại Android (N3) | Như S-01, với URL `localhost:5173` trên điện thoại |
| S-05 | Lớp chữ đè và cách chụp | Một ảnh thử trên mỗi nền tảng thấy đủ: Lớp chữ đè, URL localhost, tên trình duyệt / OS / thiết bị, không che giao diện cần kiểm |

Nên làm S-05 trên N1 trước khi bắt đầu `exec` của Task 1.

## 10. Phương án không chọn

Các nền tảng P-02, P-04, P-05, P-06, P-08, P-09, công cụ C-03, các cách tạo lớp chữ đè O-02, O-04, O-05 và các tổ hợp T-A, T-B, T-D, T-E, T-F, cùng ưu nhược của từng phương án, xem bản AI `ai_raw/T3_setup.md` (mục 4, 5, 8, 10).

## 11. Nguồn tham khảo

- BrowserStack, Local Testing FAQs: https://www.browserstack.com/docs/local-testing/references/faqs
- Thông tin trial BrowserStack (nguồn tổng hợp, cần kiểm lại trên trang chính thức): https://bug0.com/knowledge-base/browserstack-free-trial
- Thông tin gói miễn phí LambdaTest (nguồn tổng hợp, cần kiểm lại trên trang chính thức): https://toolradar.com/tools/lambdatest/pricing

---

## Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 3 | Trả lời Q-01 đến Q-04: Windows và Android, chưa có tài khoản cloud, email `23120061@student.hcmus.edu.vn`, Task 1 chưa chạy | Quyết định của SV | | Thông tin của SV |
| Mục 3 | Bỏ Q-05 (có hỏi TA về việc không dùng cloud) | Quyết định của SV | | Tổ hợp T-C có dùng cloud cho N2 nên không cần hỏi |
| Mục 4 (D-01) | Tính lần chạy Task 1 trên Chrome Windows (P-01) là nền tảng N1 | Quyết định của SV | | Task 1 chưa chạy nên chụp được ảnh theo yêu cầu Task 3 ngay từ đầu |
| Mục 4 (D-02) | Chọn tổ hợp T-C: Chrome Windows, Firefox cloud, Android Chrome thật | Quyết định của SV | | Có sẵn máy Windows và điện thoại Android, không có thiết bị Apple |
| Mục 5.2 (D-06) | Lớp chữ đè bằng cửa sổ Notepad ghim nổi (O-01) | Quyết định của SV | | Không đụng vào DOM của SUT, dùng được cho N1 và N2 |
| Mục 6.1 (D-05 một phần) | Chụp toàn màn hình | Quyết định của SV | | Thấy được thanh tác vụ, thanh công cụ cloud và cửa sổ Notepad trong cùng ảnh |
| Mục 6.3 (D-07) | Mỗi nền tảng chụp mục Failed và một ảnh tổng quan cho mỗi màn hình | Quyết định của SV | | Đủ R-03, R-04 cho từng màn hình mà không phải chụp mọi mục |
| Mục 5.3 | Tách riêng cách có lớp chữ đè cho điện thoại (D-13) vì Notepad chỉ nằm trên màn hình máy tính | Quyết định của SV | | Hệ quả của việc chọn T-C và O-01 cùng lúc; bản AI chỉ ghi chung ở bảng O-01 |
| Mục 5.3 (D-13) | Lớp chữ đè cho N3 tạo ngay trên điện thoại bằng chế độ đa màn hình (ứng dụng ghi chú + Chrome), chụp toàn màn hình điện thoại; bỏ hai lựa chọn scrcpy và máy ảnh kèm thẻ giấy | Thiếu | Giới hạn model: Bản AI chỉ nghĩ tới cách đặt lớp chữ đè từ máy tính hoặc vật thể bên ngoài, bỏ qua tính năng đa màn hình có sẵn của Android | SV chỉ ra điện thoại có chế độ đa màn hình; không cần cài thêm công cụ |
| Mục 5.3, 6.2 | Thêm lưu ý: Đa màn hình có thể thu nhỏ vùng hiển thị của Chrome (D-13b), Chrome tự ẩn thanh địa chỉ khi cuộn, ảnh điện thoại không có tên model (D-05) | Thiếu | Giới hạn model: Các rủi ro này chỉ nảy sinh khi đổi sang cách đa màn hình | Hệ quả của cách đa màn hình; mất bằng chứng thiết bị mà tiêu đề cửa sổ scrcpy từng cho |
| Mục 5.1 (D-06b) | Lớp chữ đè không thêm nhãn nền tảng và ngày | Quyết định của SV | | Nhãn tự gõ không chứng minh được ảnh chụp trên nền tảng đó |
| Mục 6.2, 6.3 (D-05) | Mỗi nền tảng thêm một ảnh môi trường `overview_env.png` chụp trang thông số của chính hệ thống (`chrome://version`, `about:support`), có lớp chữ đè | Quyết định của SV | | Thông số do hệ thống hiển thị là bằng chứng nền tảng, thay cho nhãn tự gõ |
| Mục 4, 7.2 (D-03) | Dịch vụ cloud cho N2 là BrowserStack Live; bỏ các bước của LambdaTest | Quyết định của SV | | Lựa chọn của SV giữa hai dịch vụ đề ưu tiên |
| Mục 7.2 (D-04) | Xử lý giới hạn phút trial bằng cách chuẩn bị sẵn dữ liệu và mọi thứ trước khi bật tunnel | Quyết định của SV | | Phút trial chỉ dùng cho việc chạy checklist |
| Mục 6.3 (D-08) | Ảnh mục Failed của N1 chỉ lưu ở `checklist/screenshots/`, không sao chép | Quyết định của SV | | Tránh hai bản của cùng một ảnh; `02_compare.md` dẫn chiếu |
| Mục 6.4 (D-09) | Reset DB và seed lại dữ liệu trước mỗi nền tảng | Quyết định của SV | | Ba nền tảng bắt đầu từ cùng trạng thái dữ liệu; đúng WORKFLOW §3.1.3 |
| Mục 6.4 (D-10) | N1 và N2 dùng cùng độ phân giải | Quyết định của SV | | Kết quả hai nền tảng desktop so sánh được |
| Mục 6.3 (D-11) | Ảnh tổng quan `/profile` chụp khi đã đăng nhập `test@eshop.com` | Quyết định của SV | | Tài khoản có sẵn trong đặc tả, có dữ liệu sau khi seed |
| Mục 7.1 (D-12) | Ảnh tổng quan và ảnh môi trường của N1 vào thẳng commit `[T1][exec]` | Quyết định của SV | | N1 chính là lần chạy `exec` của Task 1 |
| Mục 5.3 (D-13b) | Đa màn hình trên điện thoại dùng cửa sổ nổi nhỏ (pop-up view) | Quyết định của SV | | Chrome giữ kích thước màn hình thật |
| Mục 4, 7.2 (D-14) | Firefox cloud chạy trên Windows 11 | Quyết định của SV | | Cùng OS với N1, nên khác biệt giữa N1 và N2 chủ yếu do trình duyệt |
| Mục 5.2, 5.3 (D-15) | Lớp chữ đè trên máy tính dùng Sticky Notes (thay Notepad), trên điện thoại dùng Samsung Notes | Quyết định của SV | | Công cụ thực tế SV dùng |
| Mục 6.3 | Thêm cách đặt tên khi trang phải cuộn hoặc màn hình điện thoại cần nhiều ảnh (hậu tố `_1`, `_2`) | Thiếu | Giới hạn model: Quy tắc có sẵn ở WORKFLOW §5 nhưng bản AI không áp vào ảnh tổng quan | WORKFLOW §5 |
| Mục 7.3 | Thêm bước cài Android SDK Platform-Tools (`adb`) trước khi dùng `adb reverse` | Thiếu | Giới hạn model: Bản AI coi như đã có `adb` | Không có `adb` thì không chạy được bước 7.3 |
| Mục 8 | Thêm D-11 (trạng thái `/profile` trong ảnh tổng quan), D-12 (commit của ảnh tổng quan N1), D-13b, D-14 (OS cho Firefox cloud), D-15 (tên công cụ cho lớp chữ đè) | Thiếu | Giới hạn model: Các điểm này chỉ nảy sinh khi đã chọn nền tảng và loại ảnh | Cần chốt trước khi chạy |
| Mục 10 | Bỏ khỏi bản review các phương án không chọn, dẫn chiếu sang bản AI | Quyết định của SV | | Bản review chỉ giữ phương án đã chọn |
