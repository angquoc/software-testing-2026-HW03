# T3 setup: Phương án nền tảng, công cụ và lớp chữ đè (bản AI)

- Bước: `[T3][setup]`
- Thời gian tạo: 2026-11-09 15:39
- Ghi chú: Bản AI nguyên văn, không sửa. Mọi lựa chọn trong file này là **quyết định mở** (⏳) để sinh viên chốt ở `01_setup.md`.

---

## 1. Căn cứ

| Nguồn | Nội dung dùng ở đây |
|---|---|
| Đề §6 Task 3 | Chạy Task 1 trên ít nhất 3 nền tảng; BrowserStack hoặc LambdaTest trial được ưu tiên mạnh; trial hết hạn thì được dùng công cụ cloud khác (Sauce Labs, CrossBrowserTesting) hoặc thiết bị thật; web phải phủ Chrome, Firefox, Safari (hoặc Android Chrome); Expo Go trên điện thoại thật thay được một nền tảng trình duyệt; mỗi ảnh có chữ đè email sinh viên |
| Đề §8 | Công cụ BrowserStack / LambdaTest phải khai trong AI Audit Report |
| Đề §11 | Ảnh cross-platform không được do AI tạo hay bịa; phải thấy MSSV và họ tên |
| WORKFLOW §3.3, §5 | Dùng đúng checklist Task 1; N/A kèm lý do; ảnh thấy tên trình duyệt / OS / thiết bị, URL localhost, lớp chữ đè MSSV, họ tên, email; ảnh lưu ở `cross_platform/screenshots/<nền tảng>/` |
| WORKFLOW §3.1.3 | Lần chạy Task 1 nếu được tính là một nền tảng của Task 3 thì ảnh phải theo yêu cầu Task 3 |
| README nhóm §3.3, §4.2, §5 | Tag nền tảng: `chrome`, `firefox`, `safari`, `android-chrome`, `expo-go`; tên nền tảng trong tiêu đề issue; URL local (Web `5173`, Backend `3000`); cảnh báo Safari trên BrowserStack đổi `localhost` thành `bs-local.com` trong khi frontend gọi API bằng `http://localhost:3000` ghi cố định |
| SRS mục 1, FR-20 | App Mobile (Expo) chạy qua IP LAN; có đủ Đăng nhập, Đăng ký, Hồ sơ, Lịch sử đơn hàng, nên Expo Go phủ được cả 3 màn hình của Task 1 |

## 2. Yêu cầu bắt buộc rút ra

| Mã | Yêu cầu | Nguồn |
|---|---|---|
| R-01 | Ít nhất 3 nền tảng, cùng một checklist Task 1 (mã `CL-xx` giữ nguyên) | Đề §6, WORKFLOW §3.3 |
| R-02 | Bộ nền tảng phải có Chrome và Firefox; nền tảng thứ ba là Safari hoặc Android Chrome. Expo Go được thay cho **một** trong ba (ví dụ thay Safari) | Đề §6 |
| R-03 | Mỗi ảnh thấy rõ tên trình duyệt / OS / thiết bị **và** URL localhost của SUT | Đề §6, WORKFLOW §3.3 |
| R-04 | Mỗi ảnh có lớp chữ đè: MSSV, họ tên, email sinh viên | Đề §6, §11, WORKFLOW §3.3 |
| R-05 | Ảnh chụp thật, không do AI tạo hay chỉnh nội dung | Đề §11, WORKFLOW §3.3 |
| R-06 | Excel có một cột kết quả cho mỗi nền tảng; mục không áp dụng ghi N/A kèm lý do | WORKFLOW §3.3 |
| R-07 | Ghi môi trường mỗi lần chạy: Trình duyệt và phiên bản, OS, độ phân giải, ngày giờ | WORKFLOW §3.1.3 |

Ghi chú về R-02: Đề viết "Use a BrowserStack or LambdaTest trial; these are strongly preferred. If your trial has expired, you may substitute ... or use real physical devices". Câu này có thể hiểu là thiết bị thật / máy cá nhân chỉ là phương án dự phòng. Không rõ việc chạy hoàn toàn trên máy cá nhân có bị trừ điểm hay không (câu hỏi mở Q-05).

## 3. Thông tin cần sinh viên cho biết trước khi chọn

| Mã | Câu hỏi | Ảnh hưởng tới |
|---|---|---|
| Q-01 | Có những thiết bị nào: Máy Mac? iPhone / iPad? Điện thoại Android và cáp USB (bật được USB debugging)? | Nền tảng P-07, P-08, P-09 |
| Q-02 | Đã từng đăng ký trial BrowserStack / LambdaTest bằng email nào chưa, còn bao nhiêu phút? | Công cụ cloud (mục 5) |
| Q-03 | Email sinh viên dùng cho lớp chữ đè là địa chỉ nào? | Nội dung lớp chữ đè (mục 8) |
| Q-04 | Lần chạy checklist Task 1 (`exec`) đã chạy chưa, trên nền tảng nào? Ảnh đã chụp có lớp chữ đè chưa? | Mục 9 |
| Q-05 | Có muốn hỏi TA việc chạy toàn bộ trên máy cá nhân / thiết bị thật (không dùng cloud) có được chấp nhận không? | Tổ hợp phương án (mục 10) |

## 4. Nền tảng ứng viên

| Mã | Nền tảng (tag) | Cách mở SUT | URL hiển thị trong ảnh | Ưu điểm | Nhược điểm / rủi ro | Mục dự kiến N/A |
|---|---|---|---|---|---|---|
| P-01 | Chrome trên Windows, máy cá nhân (`chrome`) | Mở trực tiếp `http://localhost:5173` | `localhost:5173` | Không tốn phút trial; có DevTools, Lighthouse, axe; trùng với lần chạy Task 1 nên có thể tính luôn | Không dùng công cụ cloud (xem Q-05); thanh trình duyệt không in chữ "Chrome", cần cách khác để chứng minh tên trình duyệt (mục 9) | Gần như không có |
| P-02 | Firefox trên Windows, máy cá nhân (`firefox`) | Như P-01 | `localhost:5173` | Không tốn phút trial; có DevTools; khác engine (Gecko) với Chrome nên dễ lộ khác biệt hiển thị form | Cùng OS với P-01, độ đa dạng thấp hơn; cùng rủi ro Q-05 | Mục cần extension chỉ có trên Chrome (nếu checklist dùng) |
| P-03 | Chrome hoặc Firefox trên cloud, Windows hoặc macOS (`chrome` / `firefox`) | BrowserStack Live hoặc LambdaTest Real Time + tunnel (mục 6) | `localhost:5173` trên thanh địa chỉ của trình duyệt từ xa; thanh công cụ của dịch vụ ghi OS, trình duyệt, phiên bản | Đúng công cụ đề ưu tiên; tên OS / trình duyệt hiện sẵn trên giao diện dịch vụ; chọn được OS khác máy mình | Tốn phút trial (mục 5); độ trễ khi gõ bàn phím, kiểm Tab order chậm; phải đăng nhập lại và có dữ liệu đơn hàng trên mỗi phiên | Mục cần công cụ cài thêm (axe extension) nếu không cài được trên máy từ xa |
| P-04 | Safari trên macOS, cloud (`safari`) | Như P-03 | Có thể bị đổi thành `bs-local.com:5173` (BrowserStack) | Phủ Safari (engine WebKit) như đề gợi ý | README nhóm §5: Frontend gọi API bằng `http://localhost:3000` ghi cố định, nên khi trang chạy dưới tên `bs-local.com` các trang cần API (Đăng nhập, Hồ sơ, Lịch sử đơn) có thể không tải được; có thể vướng CORS hoặc dev server chặn tên host lạ; URL trong ảnh không còn là `localhost` (trái R-03 nếu hiểu chặt) | Có thể phần lớn checklist nếu API không gọi được |
| P-05 | Safari trên iOS, cloud (`safari`) | Như P-03 | Tài liệu BrowserStack: Safari iOS 10 trở lên không hỗ trợ `http://localhost`, Local Testing tự đổi sang `bs-local.com` | Phủ Safari di động | Cùng rủi ro P-04, nặng hơn; DevTools trên iOS từ xa hạn chế (cần kiểm trên dịch vụ) | Mục cần DevTools, bàn phím Tab, hover |
| P-06 | Android Chrome, cloud, thiết bị thật của dịch vụ (`android-chrome`) | BrowserStack Live / LambdaTest Real Device + tunnel | Cần thử: Có giữ `localhost:5173` hay không | Phủ di động mà không cần điện thoại riêng; tên thiết bị hiện trên giao diện dịch vụ | Phút trial cho thiết bị di động có thể tính riêng hoặc ít hơn (cần kiểm); thao tác chạm qua chuột | Mục về Tab, hover; mục DevTools nếu dịch vụ không mở được |
| P-07 | Android Chrome, điện thoại thật của SV (`android-chrome`) | Cắm USB, `adb reverse` cổng `5173` và `3000` (mục 7), mở `http://localhost:5173` trên điện thoại | `localhost:5173` thật trên thanh địa chỉ | Không tốn phút; URL là localhost thật nên API `localhost:3000` cũng chạy; có DevTools từ xa qua `chrome://inspect` | Cần cáp và bật USB debugging; đề xếp thiết bị thật là phương án thay thế (Q-05); cần cách đặt lớp chữ đè (mục 8) | Mục về Tab, hover |
| P-08 | Expo Go trên điện thoại thật (`expo-go`) | Chạy Metro (Expo), mở bằng Expo Go qua LAN hoặc `adb reverse` | Không có thanh địa chỉ; Expo Go hiện URL dạng `exp://<host>:8081` ở màn hình dự án / menu dev | Đề cho phép rõ ràng thay một nền tảng trình duyệt; phủ Pool D | App là giao diện **khác** web (React Native), nhiều mục checklist web không áp dụng; README nhóm §5: Phải sửa `API_URL` trong `frontend-mobile/App.js` (việc của SV / phiên điều phối, phiên thiết kế không đọc mã); Expo Go trên store thường chỉ chạy SDK mới nhất, app cũ có thể báo không tương thích, cần thử sớm; "URL localhost" trong ảnh phải hiểu là URL Metro (Q-06) | Mục về thẻ HTML (`<h1>`, `type="email"`, `type="password"`, `alt`), Tab order, DevTools, navbar web, hover |
| P-09 | Safari trên iPhone thật của SV (`safari`) | Mở bằng IP LAN của máy chủ | `192.168.x.x:5173`, không phải localhost | Phủ Safari thật | iPhone không có tương đương `adb reverse` dễ dùng; URL không phải localhost (trái R-03); API `localhost:3000` ghi cố định sẽ trỏ vào chính iPhone nên các trang cần API không chạy | Phần lớn checklist |

## 5. Công cụ cloud

Số phút trial dưới đây lấy từ nguồn tổng hợp bên thứ ba, có thể đã đổi. Cần xem trang giá chính thức trước khi chọn.

| Mã | Công cụ | Gói miễn phí (theo nguồn tổng hợp) | Mở localhost | Ưu điểm | Nhược điểm |
|---|---|---|---|---|---|
| C-01 | BrowserStack Live | Trial khoảng 30 phút Live (không cần thẻ), dùng một lần | BrowserStack Local (ứng dụng hoặc binary `BrowserStackLocal`) | Được đề nêu tên; thiết bị thật nhiều; giao diện ghi rõ OS / trình duyệt | 30 phút ít so với một lượt checklist hơn 40 mục trên 3 màn hình; Safari / iOS đổi `localhost` thành `bs-local.com` |
| C-02 | LambdaTest Real Time (nay có nơi ghi tên TestMu AI) | Khoảng 60 phút Real Time mỗi tháng (có nguồn ghi chia thành phiên 10 phút), có tunnel | LambdaTest Tunnel (binary `LT` hoặc ứng dụng desktop) | Được đề nêu tên; số phút mỗi tháng nhiều hơn; có thể dùng cùng BrowserStack để cộng thời gian | Nếu giới hạn 10 phút một phiên thì phải đăng nhập lại SUT nhiều lần; xử lý localhost trên Safari / iOS chưa rõ, cần thử |
| C-03 | Sauce Labs (hoặc dịch vụ cloud khác) | Có trial, điều kiện cần xem | Sauce Connect | Đề cho phép khi trial BrowserStack / LambdaTest hết | Không được đề "ưu tiên"; thiết lập tunnel phức tạp hơn |

Ước lượng thời gian (để so với phút trial, chưa có số liệu thật): Checklist hơn 40 mục trên 3 màn hình, gồm cả đăng nhập, đặt đơn để có lịch sử, kiểm DevTools và chụp ảnh, có thể mất khoảng 45 đến 90 phút cho một nền tảng. Nếu đúng như vậy thì một trial 30 phút không đủ cho trọn một nền tảng. Các cách xử lý (đều là quyết định mở D-04):

- Chỉ dùng cloud cho một nền tảng và chuẩn bị trước dữ liệu (đơn hàng, tài khoản) để không tốn phút.
- Dùng cả BrowserStack và LambdaTest, mỗi dịch vụ một nền tảng.
- Chạy nhiều phiên ngắn, ghi kết quả ngay vào cột của nền tảng đó.

## 6. Cho cloud mở được localhost

### 6.1 Cách hoạt động

Tunnel chạy trên máy SV, nối tới hạ tầng của dịch vụ. Trình duyệt từ xa gõ `http://localhost:5173` sẽ được chuyển về máy SV. Tunnel chuyển mọi cổng localhost, nên cả Web (`5173`) và API (`3000`) đều tới được, frontend gọi `http://localhost:3000` vẫn chạy (trừ trường hợp Safari / iOS ở 6.3).

### 6.2 Các bước (chung cho C-01, C-02)

1. Phiên điều phối chạy server EShop (Backend `3000`, Web `5173`) và reset DB.
2. Lấy access key trong trang tài khoản của dịch vụ.
3. Chạy tunnel:
   - BrowserStack: Tải binary `BrowserStackLocal` cho Windows, chạy `BrowserStackLocal.exe --key <ACCESS_KEY>`, chờ dòng báo đã kết nối; hoặc dùng ứng dụng BrowserStack Local mà trang Live gợi ý tải khi mở URL localhost.
   - LambdaTest: Tải binary `LT` cho Windows, chạy `LT.exe --user <USERNAME> --key <ACCESS_KEY>`; hoặc dùng ứng dụng tunnel desktop của LambdaTest.
4. Mở phiên Live / Real Time, chọn OS và trình duyệt, gõ `http://localhost:5173/login`.
5. **Thử nhanh trước khi chạy cả checklist (smoke test):** Đăng nhập `test@eshop.com`, mở `/profile`, thấy được thông tin hồ sơ và lịch sử đơn. Nếu bước này lỗi thì tunnel hoặc API có vấn đề, dừng lại xử lý trước khi tốn phút.

Không đưa access key vào file trong repo hay vào prompt.

### 6.3 Rủi ro riêng với Safari (P-04, P-05)

- Tài liệu BrowserStack: Safari trên iOS 10 trở lên không hỗ trợ `http://localhost`, Local Testing tự đổi sang `bs-local.com` (ví dụ `localhost:5173` thành `bs-local.com:5173`); với Automate, Safari desktop cũng bị đổi.
- Hệ quả có thể gặp (chưa kiểm chứng trên EShop): Frontend gọi API `http://localhost:3000` ghi cố định thì trên thiết bị từ xa không tới được máy SV; nếu tới được thì có thể bị CORS chặn vì nguồn gọi là `bs-local.com`; dev server có thể chặn tên host lạ (thông báo kiểu "host is not allowed").
- URL trong ảnh là `bs-local.com`, không phải `localhost`. Cần quyết định có chấp nhận và giải thích trong báo cáo hay không (D-03).
- Sửa cấu hình SUT để né lỗi là thay đổi SUT, nên nếu làm thì phải ghi rõ trong báo cáo; phiên thiết kế không tự làm việc này.

### 6.4 Phương án không phù hợp: Tunnel công khai (ngrok, cloudflared)

Có thể đưa EShop ra một URL công khai rồi mở trên bất kỳ cloud nào, nhưng URL trong ảnh không phải localhost (trái R-03) và frontend vẫn gọi `http://localhost:3000` nên trang cần API không chạy. Liệt kê để thấy đã cân nhắc.

## 7. Thiết bị thật

### 7.1 Android Chrome qua USB (P-07)

1. Bật Developer options và USB debugging trên điện thoại, cắm cáp, chạy `adb devices` thấy thiết bị.
2. Chạy:
   ```
   adb reverse tcp:5173 tcp:5173
   adb reverse tcp:3000 tcp:3000
   ```
3. Mở Chrome trên điện thoại, gõ `http://localhost:5173`. URL hiển thị là localhost thật, API `localhost:3000` cũng tới được máy.
4. Cách thay thế: Chrome trên máy tính, mở `chrome://inspect/#devices`, bật Port forwarding cho `5173` và `3000`. Cách này cho thêm DevTools từ xa để kiểm các mục cần DevTools trên điện thoại.

### 7.2 Expo Go (P-08)

- Phiên điều phối / SV chạy Metro (`npx expo start`) và xử lý `API_URL` theo README nhóm §5 (IP LAN, hoặc `adb reverse tcp:3000 tcp:3000` nếu dùng localhost).
- Với Android có thể dùng thêm `adb reverse tcp:8081 tcp:8081` để Expo Go kết nối qua `exp://localhost:8081` (hoặc `127.0.0.1`), khi đó URL trong Expo Go là localhost; cần thử.
- Thử sớm: Mở app trong Expo Go có báo không tương thích SDK hay không.

## 8. Lớp chữ đè (MSSV, họ tên, email)

### 8.1 Nội dung

Theo README cá nhân: MSSV `23120061`, họ tên Nguyễn Thị Ánh Ngọc. Email chờ SV cung cấp (Q-03). Mẫu một dòng:

```
23120061 | Nguyễn Thị Ánh Ngọc | <email sinh viên>
```

Có thể thêm nhãn nền tảng và ngày (ví dụ `Firefox 1xx | Windows 11 | 2026-11-xx`). Nhãn tự gõ không thay được bằng chứng thật về tên trình duyệt (mục 9.2), chỉ để dễ đọc. Có thêm hay không là D-06.

Yêu cầu chung cho mọi cách: Chữ đủ to và tương phản để đọc được khi xem ảnh cỡ thường; đặt ở góc **không che** phần giao diện đang kiểm, thanh địa chỉ và tên trình duyệt / thiết bị; giữ cùng vị trí, cùng kiểu chữ trên mọi ảnh.

### 8.2 Các cách tạo

| Mã | Cách | Dùng được với | Ưu điểm | Nhược điểm |
|---|---|---|---|---|
| O-01 | Cửa sổ nhỏ luôn nằm trên cùng trên Windows: Ví dụ Sticky Notes hoặc Notepad bật PowerToys Always On Top (`Win+Ctrl+T`), hoặc một script nhỏ (tkinter / HTML) trong `tools/`; chụp cả màn hình | P-01, P-02, P-03 đến P-06 (cửa sổ cloud nằm trong trình duyệt máy SV), P-07 và P-08 khi chiếu màn hình điện thoại lên máy (O-03) | Không đụng vào DOM của SUT nên không làm sai kết quả checklist; một cách dùng cho mọi nền tảng; chữ có ngay lúc chụp | Phải chụp toàn màn hình hoặc vùng có cả cửa sổ chữ; có thể che mất một phần giao diện nếu đặt sai chỗ |
| O-02 | Chèn băng chữ vào chính trang web bằng extension / userscript (Tampermonkey, Stylus) | P-01, P-02 (máy cá nhân); khó hoặc không làm được trên cloud và điện thoại | Chữ nằm trong trang, chụp vùng trang là có | **Thay đổi DOM của SUT**: Có thể ảnh hưởng mục về bố cục, chồng lấn, Tab order, kết quả Lighthouse / axe, số phần tử; khó giải thích là kết quả của SUT gốc |
| O-03 | Chiếu màn hình điện thoại lên máy tính bằng scrcpy, kết hợp O-01 hoặc O-04 | P-07, P-08 (Android) | Tiêu đề cửa sổ scrcpy mặc định là tên model điện thoại, giúp đạt R-03 phần thiết bị; điều khiển điện thoại bằng chuột / bàn phím | Thêm một công cụ phải cài và khai báo; chỉ dùng cho Android |
| O-04 | OBS Studio: Nguồn chụp màn hình / cửa sổ + nguồn chữ, chụp ảnh bằng phím tắt Screenshot của OBS | Mọi nền tảng hiển thị trên máy tính (kể cả cloud, scrcpy) | Lớp chữ cố định, đồng nhất; quay video cùng lúc làm bằng chứng phụ | Thiết lập lâu hơn; ảnh do OBS xuất, cần chỉnh để không cắt mất thanh địa chỉ |
| O-05 | Chụp xong mới đóng chữ lên ảnh bằng script (Pillow, ImageMagick) hoặc Paint | Mọi nền tảng | Nhanh, đồng nhất | Là **chỉnh sửa ảnh sau khi chụp**: Lớp chữ không chứng minh được người chạy thật, dễ bị xem là trái tinh thần đề §11 và WORKFLOW §3.3; nếu script do AI viết thì càng dễ bị hiểu là AI can thiệp ảnh |
| O-06 | Chụp ảnh điện thoại bằng một máy ảnh khác, đặt tấm thẻ giấy ghi thông tin cạnh điện thoại | P-07, P-08, P-09 | Không cần phần mềm; khó làm giả | Ảnh lóa, nghiêng, khó đọc chữ nhỏ trên màn hình; không dùng được để kiểm chi tiết giao diện |

## 9. Nếu tính lần chạy checklist Task 1 là một trong 3 nền tảng

### 9.1 Khác biệt về yêu cầu ảnh

| Điểm | Task 1 đơn thuần (đề §6 Task 1, WORKFLOW §3.1.3) | Khi được tính là nền tảng Task 3 |
|---|---|---|
| Ảnh nào phải có | Chỉ mục Failed | Mục Failed **cộng** các ảnh Task 3 đã chốt ở D-07 (ví dụ ảnh tổng quan từng màn hình) |
| Lớp chữ đè | Không bắt buộc | **Bắt buộc** trên mọi ảnh, kể cả ảnh mục Failed của Task 1 |
| Khung ảnh | Đủ thấy lỗi | Phải thấy thanh địa chỉ với `localhost:5173/...` và bằng chứng tên trình duyệt / OS; không được cắt chỉ vùng lỗi |
| Ghi môi trường | Trình duyệt và phiên bản, OS, độ phân giải, ngày giờ | Như cũ, và cột kết quả trong Excel được dùng luôn làm cột của nền tảng đó |
| Nơi lưu | `checklist/screenshots/CL-xx_<nền tảng>.png` | Quyết định mở D-08 |

### 9.2 Bằng chứng tên trình duyệt / OS trên máy cá nhân

Thanh trình duyệt Chrome / Firefox trên Windows không in chữ tên trình duyệt. Các cách (D-05):

- Mỗi nền tảng thêm một ảnh môi trường `overview_env.png`: Trang `chrome://version` hoặc `about:support` (Firefox), cùng lớp chữ đè, chụp ngay trước khi chạy.
- Chụp toàn màn hình để thấy thanh tác vụ Windows có biểu tượng trình duyệt.
- Ghi tên trình duyệt / phiên bản trong lớp chữ đè (chỉ bổ trợ, như đã nói ở 8.1).

### 9.3 Hệ quả về thứ tự làm

Lớp chữ đè phải có **ngay lúc chụp**. Nếu lần chạy Task 1 đã chụp ảnh mà chưa có lớp chữ đè (Q-04), những ảnh đó không dùng được cho Task 3: Hoặc chụp lại trong một lần chạy mới, hoặc không tính lần chạy đó và chạy thêm một nền tảng khác. Vì vậy cần chốt D-01, D-05, D-06 và cách lớp chữ đè (D-02) **trước** khi chạy `exec` của Task 1.

## 10. Một số tổ hợp tham khảo

Chỉ để so sánh, không phải đề xuất chọn.

| Tổ hợp | Nền tảng | Đáp ứng R-02 | Có cloud | Rủi ro chính |
|---|---|---|---|---|
| T-A | P-01 Chrome (Task 1) + P-03 Firefox cloud + P-04 Safari macOS cloud | Đủ Chrome, Firefox, Safari | Có | Safari với `bs-local.com` và API ghi cố định; phút trial |
| T-B | P-01 Chrome (Task 1) + P-03 Firefox cloud + P-06 Android Chrome cloud | Đủ (Android Chrome thay Safari) | Có | Phút trial cho hai nền tảng cloud |
| T-C | P-01 Chrome (Task 1) + P-03 Firefox cloud + P-07 Android Chrome thật | Đủ | Có (một nền tảng) | Cần điện thoại Android và cáp |
| T-D | P-01 Chrome (Task 1) + P-02 Firefox máy cá nhân + P-07 hoặc P-08 | Đủ (P-08 thay một nền tảng) | Không | Q-05: Không dùng công cụ đề ưu tiên |
| T-E | P-01 Chrome (Task 1) + P-03 Firefox cloud + P-08 Expo Go | Đủ (Expo Go thay Safari) | Có (một nền tảng) | Nhiều mục N/A trên Expo Go nên phần so sánh mỏng; tương thích SDK |
| T-F | Thêm nền tảng thứ 4 vào bất kỳ tổ hợp nào | Vượt tối thiểu | Tùy | Tốn thời gian; bù rủi ro nếu một nền tảng không chạy được |

## 11. Quyết định mở

| Mã | Quyết định | Các lựa chọn | Phụ thuộc |
|---|---|---|---|
| ⏳ D-01 | Có tính lần chạy Task 1 là một nền tảng không, và nền tảng đó là gì | Tính (P-01 hoặc khác) / Không tính, chạy đủ 3 nền tảng riêng cho Task 3 | Q-04 |
| ⏳ D-02 | Bộ 3 (hoặc hơn) nền tảng | Các tổ hợp mục 10 hoặc tổ hợp khác từ mục 4 | Q-01, Q-02, Q-05 |
| ⏳ D-03 | Công cụ cloud và cách chia phút | C-01, C-02, C-03, hoặc kết hợp; chấp nhận `bs-local.com` trong ảnh Safari hay tránh Safari | Q-02, mục 6.3 |
| ⏳ D-04 | Cách xử lý giới hạn phút trial | Chuẩn bị dữ liệu trước / chia dịch vụ / nhiều phiên ngắn (mục 5) | D-03 |
| ⏳ D-05 | Cách chứng minh tên trình duyệt / OS / thiết bị trên ảnh | Ảnh `overview_env.png` / toàn màn hình có thanh tác vụ / tiêu đề scrcpy / giao diện dịch vụ cloud / kết hợp | D-02 |
| ⏳ D-06 | Cách tạo lớp chữ đè và nội dung (có thêm nhãn nền tảng, ngày không) | O-01 đến O-06 | Q-03, D-02 |
| ⏳ D-07 | Mỗi nền tảng chụp những ảnh nào | Chỉ mục Failed + `overview_<màn hình>.png` cho từng màn hình / trạng thái / Ảnh cho mọi mục / Mục Failed + mục N/A | WORKFLOW §5 |
| ⏳ D-08 | Ảnh của lần chạy Task 1 (nếu D-01 là "Tính") lưu ở đâu | Chỉ `checklist/screenshots/`, `02_compare.md` dẫn chiếu / Thêm bản sao vào `cross_platform/screenshots/<nền tảng>/` | D-01 |
| ⏳ D-09 | Dữ liệu cho mỗi nền tảng | Reset DB và tạo lại đơn hàng trước mỗi nền tảng (theo WORKFLOW §3.1.3) / dùng chung một bộ dữ liệu cho mọi nền tảng để dễ so sánh (ghi rõ trong báo cáo) | WORKFLOW §3.1.3 |
| ⏳ D-10 | Độ phân giải / kích thước cửa sổ cho các nền tảng desktop | Giống nhau trên mọi nền tảng / để mặc định của từng nền tảng và ghi lại | R-07 |
| ⏳ Q-06 | Với Expo Go (nếu chọn), "URL localhost" thể hiện bằng gì | URL Metro `exp://localhost:8081` qua `adb reverse` / `exp://<IP LAN>:8081` kèm giải thích / ảnh menu dev của Expo Go | P-08 |

## 12. Việc nên thử sớm (trước khi chạy cả checklist)

| Mã | Thử gì | Thành công khi |
|---|---|---|
| S-01 | Tunnel của công cụ cloud đã chọn với Chrome / Firefox | Đăng nhập được, `/profile` hiện hồ sơ và lịch sử đơn |
| S-02 | Safari (nếu chọn) qua tunnel | Như S-01; ghi lại URL thực tế hiển thị |
| S-03 | `adb reverse` trên điện thoại Android (nếu chọn) | Như S-01 với URL `localhost:5173` |
| S-04 | Expo Go (nếu chọn) | App mở được, đăng nhập được, xem được hồ sơ |
| S-05 | Lớp chữ đè đã chọn | Một ảnh thử thấy đủ: Lớp chữ đè, URL localhost, tên trình duyệt / OS / thiết bị, không che giao diện cần kiểm |

## 13. Nguồn tham khảo

- BrowserStack, Local Testing FAQs: https://www.browserstack.com/docs/local-testing/references/faqs
- BrowserStack, Why is my localhost URL redirected to bs-local.com on iOS / iPadOS devices: https://www.browserstack.com/support/faq/live/local-testing-live/why-is-my-localhost-url-redirected-to-bs-local-com-on-ios-ipados-devices
- BrowserStack, Troubleshooting Local Testing issues in iOS: https://www.browserstack.com/docs/live/local-testing/ios-troubleshooting-guide
- Thông tin trial BrowserStack (nguồn tổng hợp, cần kiểm lại trên trang chính thức): https://bug0.com/knowledge-base/browserstack-free-trial
- Thông tin gói miễn phí LambdaTest (nguồn tổng hợp, cần kiểm lại trên trang chính thức): https://toolradar.com/tools/lambdatest/pricing
