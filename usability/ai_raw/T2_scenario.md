# T2 scenario: Kịch bản nhiệm vụ cho luồng FL-05 (bản AI)

- Bước: `[T2][scenario]`
- Thời gian tạo: 2026-11-09 01:50
- Công cụ: Claude Code (Claude Opus 5.5)

---

## 0. Căn cứ

| Nguồn | Dùng cho |
|---|---|
| `01_test_plan.md` mục 3.2 (chặng M1 đến M3), mục 8 (số liệu D1 đến D10), mục 11 (QĐ1, QĐ2, QĐ4) | Khung kịch bản, số liệu cần thu, các quyết định cần đưa phương án |
| Đề §6 Task 2 | Kịch bản dạng mục tiêu, không đưa từng bước |
| Slide S13 "Task selection for evaluation", "Task components" | Mỗi nhiệm vụ có 4 phần: Task, Machine state, Successful completion criteria, Benchmark |
| SRS FR-02, FR-14, FR-15 | Ràng buộc dữ liệu (tên bắt buộc, giá > 0, danh mục chọn từ danh sách), khoá tài khoản sau 3 lần sai |
| Ảnh `screenshots/flow_01` đến `flow_11` | Trạng thái giao diện thật: Danh mục mẫu đang có, ô danh mục mặc định "Điện thoại", không có thông báo sau khi lưu |

---

## 1. Nguyên tắc viết kịch bản

1. **Mục tiêu, không phải các bước:** Kịch bản nói người tham gia cần đạt được gì, không nói bấm vào đâu.
2. **Không dùng nhãn nút làm gợi ý:** Kịch bản tránh dùng nguyên văn chữ trên nút và menu ("Thêm mới", "Lưu sản phẩm", "Quản lý Danh mục"), để đo được việc người tham gia tự tìm đường (Q1, Q3).
3. **Bối cảnh thật:** Người tham gia đóng vai người bán hàng, đúng với chân dung người dùng ở mục 4 của test plan.
4. **Cùng một kịch bản cho cả 7 người:** Cùng câu chữ, cùng dữ liệu, cùng trạng thái ban đầu.
5. **Người tham gia tự quyết định khi nào xong:** Kịch bản yêu cầu nói "Tôi làm xong rồi" khi thấy đã xong. Mốc này cho biết người tham gia có tự kiểm tra kết quả hay không, và mất bao lâu (D7, Q7).

---

## 2. Kịch bản đưa cho người tham gia

### 2.1 Câu chữ

⏳ Quyết định để mở (QĐ2a): Dùng từ "danh mục" hay "nhóm hàng" trong kịch bản.

| Phương án | Ưu điểm | Nhược điểm |
|---|---|---|
| A: "danh mục" | Là từ người bán quen dùng trên các sàn; khớp tên luồng FL-05 | Trùng nhãn "Danh mục" trên sidebar (flow_02), nên là một gợi ý cho Q1 |
| B: "nhóm hàng" | Không trùng nhãn nào trên giao diện, đo Q1 sạch hơn | Người tham gia phải tự liên hệ "nhóm hàng" với "Danh mục"; có thể làm tăng thời gian M2 vì lý do câu chữ chứ không phải vì giao diện |

Gợi ý của AI: Phương án A, vì từ "danh mục" là cách người bán thật gọi khái niệm này; gợi ý từ sidebar là thứ người dùng thật cũng có.

Câu chữ kịch bản (viết theo phương án A; nếu chọn B thì thay "danh mục" bằng "nhóm hàng"):

> Bạn vừa nhận quản lý một cửa hàng online bán đồ công nghệ. Cửa hàng chuẩn bị bán thêm loa Bluetooth, nhưng hiện chưa có danh mục nào cho loại hàng này.
>
> Nhiệm vụ của bạn: Vào trang quản trị của cửa hàng, tạo một danh mục mới tên là **Loa Bluetooth**, rồi đăng sản phẩm đầu tiên vào **đúng danh mục đó**. Thông tin đăng nhập và thông tin sản phẩm có trong phiếu dữ liệu.
>
> Bạn cứ làm theo cách bạn thấy hợp lý. Khi thấy đã xong, hãy nói: "Tôi làm xong rồi".

### 2.2 Phiếu dữ liệu

| Thông tin | Giá trị |
|---|---|
| Trang quản trị | Đã mở sẵn trên trình duyệt |
| Email đăng nhập | `admin@eshop.com` |
| Mật khẩu | `Admin123!` |
| Tên danh mục mới | Loa Bluetooth |
| Tên sản phẩm | Loa Bluetooth JBL Flip 6 |
| Giá bán | Xem QĐ2b |
| Mô tả | Loa chống nước IP67, pin 12 giờ, âm thanh mạnh mẽ, phù hợp mang đi du lịch. |
| Ảnh sản phẩm (URL) | `<URL ảnh do SV chọn>` |

Ghi chú về dữ liệu:

- Tên danh mục "Loa Bluetooth" không trùng 3 danh mục mẫu "Điện thoại", "Laptop", "Phụ kiện" (flow_03). Cũng không dùng "Bàn phím", vì SV đã dùng tên này khi chụp ảnh khảo sát.
- URL ảnh: SV chọn một ảnh thật của sản phẩm, kiểm trước là mở được trên trình duyệt và hiện được trong bảng sản phẩm của Admin (như ảnh ở dòng cuối flow_11). AI không tự đặt URL vì không kiểm được URL có tồn tại hay không.
- URL ảnh dài, gõ tay thì mất thời gian và dễ sai mà không nói lên gì về giao diện. Người bán thật thường sao chép rồi dán URL. Vì vậy URL cần được đưa ở dạng sao chép được (xem QĐ2c).

⏳ Quyết định để mở (QĐ2b): Cách ghi giá trên phiếu.

| Phương án | Ghi trên phiếu | Ưu điểm | Nhược điểm |
|---|---|---|---|
| A | `2.990.000 ₫` | Giống cách người bán viết giá hằng ngày; cho thấy ô giá xử lý thế nào khi người dùng gõ dấu chấm (Q5, Q6, D3 (b), D3 (d)) | Nếu ô giá không nhận dấu chấm, có thể nhiều người vấp cùng một chỗ, làm lu mờ các vấn đề khác |
| B | `2990000` | Giảm biến động do định dạng; tập trung vào tìm đường và chọn danh mục | Không thật; bỏ qua một điểm dễ sai mà người dùng thật sẽ gặp |

Gợi ý của AI: Phương án A, vì Q5 và loại lỗi D3 (d) trong test plan nhắm đúng vào điểm này. Cách ô giá xử lý dấu chấm chưa biết (chưa có ảnh); cần thử ở pilot (mục 6).

⏳ Quyết định để mở (QĐ2c): Cách đưa phiếu dữ liệu.

| Phương án | Phiên trực tiếp | Phiên từ xa |
|---|---|---|
| A | Phiếu in giấy để cạnh máy; URL ảnh để trong một file văn bản mở sẵn trên máy để sao chép | Gửi toàn bộ phiếu qua tin nhắn trong ứng dụng gọi video |
| B | Toàn bộ phiếu trong một file văn bản mở sẵn trên máy | Như phương án A |

Gợi ý của AI: Phương án A cho phiên trực tiếp, vì phiếu giấy luôn nhìn thấy được mà không phải chuyển cửa sổ; chỉ URL cần sao chép.

---

## 3. Trạng thái ban đầu (Machine state)

Áp dụng cho mọi phiên, kể cả pilot:

| Mục | Trạng thái |
|---|---|
| Dữ liệu | Đã reset: `cd backend && node database.js`. Bảng danh mục chỉ có 3 danh mục mẫu (flow_03) |
| Backend, Web Admin | Đang chạy (`localhost:3000`, `localhost:5174`) |
| Trình duyệt | Đang mở `http://localhost:5174`, trang "Admin Login" (flow_01), chưa đăng nhập, chỉ một tab, zoom 100% |
| Mật khẩu đã lưu | **Không có.** flow_02 cho thấy trình duyệt của SV có biểu tượng quản lý mật khẩu; nếu trình duyệt tự điền mật khẩu admin thì M1 không còn ý nghĩa. Dùng một hồ sơ trình duyệt riêng (hoặc chế độ khách) không lưu mật khẩu cho các phiên |
| Tiện ích trình duyệt | Tắt các tiện ích có thể tự dịch trang hoặc chèn gợi ý (ví dụ dịch tự động) |
| Ảnh sản phẩm | URL ảnh đã kiểm mở được trong ngày chạy phiên |
| Quay màn hình | Đã bật trước khi người tham gia đọc kịch bản |

---

## 4. Các thành phần nhiệm vụ (Task components)

Theo slide S13 "Task components". Người tham gia chỉ thấy kịch bản ở mục 2; bảng dưới đây dành cho người điều phối.

### 4.1 Theo chặng

| Chặng | Nhiệm vụ | Trạng thái ban đầu | Tiêu chí hoàn thành | Thời gian chuẩn (đề xuất) |
|---|---|---|---|---|
| M1 | Đăng nhập trang quản trị | Trang "Admin Login", chưa đăng nhập | Trang Dashboard hiện ra (flow_02) | 1 phút |
| M2 | Tạo danh mục "Loa Bluetooth" | Đang ở Dashboard | Bảng danh mục có đúng **một** dòng "Loa Bluetooth" (đúng chính tả, có dấu) | 2 phút |
| M3 | Đăng sản phẩm vào danh mục mới | Danh mục "Loa Bluetooth" đã có | Bảng sản phẩm có dòng "Loa Bluetooth JBL Flip 6" với giá đúng 2.990.000 ₫ và ảnh hiện được; **và** sản phẩm thuộc danh mục "Loa Bluetooth" (người điều phối kiểm sau phiên, D6) | 4 phút |

### 4.2 Toàn luồng

| Thành phần | Nội dung |
|---|---|
| Nhiệm vụ | Kịch bản ở mục 2.1 |
| Trạng thái ban đầu | Mục 3 |
| Tiêu chí hoàn thành | M1, M2, M3 đều đạt, và người tham gia đã nói "Tôi làm xong rồi" |
| Thời gian chuẩn (đề xuất) | 7 phút, tính từ lúc người tham gia đọc xong kịch bản tới lúc nói "Tôi làm xong rồi" |
| Thời gian tối đa | 15 phút (khớp thời lượng làm nhiệm vụ trong test plan mục 5). Hết 15 phút thì dừng, các chặng chưa đạt tính là "Không hoàn thành" |

### 4.3 Cách xếp kết quả

| Kết quả | Khi nào |
|---|---|
| Tự hoàn thành | Đạt tiêu chí, không có can thiệp nào được tính (mục 5) |
| Hoàn thành nhờ can thiệp | Đạt tiêu chí, có ít nhất một can thiệp được tính |
| Không hoàn thành | Không đạt tiêu chí khi hết thời gian tối đa, người tham gia bỏ cuộc, hoặc dữ liệu sai (ví dụ sản phẩm nằm trong danh mục "Điện thoại", giá sai) mà người tham gia không tự sửa trước khi nói "Tôi làm xong rồi" |

Tự hoàn thành nhưng vượt thời gian chuẩn vẫn là "Tự hoàn thành"; việc vượt thời gian chuẩn được tổng hợp riêng (test plan mục 8.4).

### 4.4 Thời gian chuẩn

⏳ Quyết định để mở (QĐ2d): Các con số ở mục 4.1 và 4.2 là đề xuất ban đầu, chưa có căn cứ đo. Cách chốt AI gợi ý:

1. SV tự làm toàn bộ luồng với đúng phiếu dữ liệu, sau khi reset, bấm giờ từng chặng (thời gian của người đã biết giao diện).
2. Đặt thời gian chuẩn bằng một bội số của thời gian đó để tính tới người dùng mới; SV chọn bội số và ghi lý do.
3. Chạy pilot, xem người pilot có vượt nhiều không, chỉnh lại con số rồi giữ cố định cho P1 đến P7.

### 4.5 Mốc thời gian cần ghi trong mỗi phiên

| Mốc | Sự kiện quan sát được |
|---|---|
| T0 | Người tham gia đọc xong kịch bản, bắt đầu thao tác |
| T1 | Trang Dashboard hiện ra (hết M1) |
| T2 | Dòng "Loa Bluetooth" hiện trong bảng danh mục (hết M2) |
| T3 | Bấm "Lưu sản phẩm" lần cuối, sản phẩm hiện trong bảng (hết M3) |
| T4 | Người tham gia nói "Tôi làm xong rồi" |

Khoảng T3 đến T4 là thời gian người tham gia dành để tự kiểm tra kết quả (D7, Q7).

---

## 5. Can thiệp

⏳ Quyết định để mở (QĐ4): Định nghĩa "bế tắc hẳn" và câu can thiệp chuẩn.

Đề xuất của AI:

**Bế tắc hẳn** khi có ít nhất một trong các dấu hiệu sau:

- Không tiến triển ở cùng một chặng trong khoảng 3 phút (chỉ đi lại giữa các trang đã xem, hoặc ngồi im);
- Người tham gia hỏi người điều phối cách làm từ lần thứ hai trở đi;
- Người tham gia nói muốn bỏ cuộc.

**Các mức can thiệp:**

| Mức | Câu nói chuẩn | Có tính là can thiệp không |
|---|---|---|
| 0 | "Bạn đang nghĩ gì?", "Bạn đang tìm gì?" | Không (đây là lời nhắc think-aloud) |
| 1 | Nhắc lại mục tiêu: "Nhiệm vụ là tạo danh mục Loa Bluetooth rồi đăng sản phẩm vào đúng danh mục đó." | Có |
| 2 | Chỉ ra khu vực trên màn hình: "Bạn thử xem phần menu bên trái." | Có |
| 3 | Làm hộ hoặc nói rõ thao tác, chỉ khi cần để người tham gia đi tiếp tới chặng sau | Có; chặng đó tính là "Không hoàn thành" |

Mỗi lần can thiệp ghi: Mốc thời gian, chặng, mức, lý do, câu đã nói.

Khi người tham gia hỏi lúc đang làm: Chỉ trả lời câu hỏi về **mục tiêu hoặc dữ liệu** (ví dụ "Tên danh mục là gì?"). Câu hỏi về **cách làm** thì đáp: "Bạn cứ làm theo cách bạn nghĩ là đúng."

---

## 6. Tình huống đặc biệt

Người điều phối không can thiệp trong các tình huống dưới đây, trừ khi rơi vào "bế tắc hẳn". Mọi tình huống đều ghi vào phiếu ghi chú.

| Tình huống | Cách xử lý | Ghi vào |
|---|---|---|
| Vào khối "Import sản phẩm từ CSV" (flow_06) | Để người tham gia tự nhận ra | D3 (a), Q3 |
| Lưu sản phẩm khi ô danh mục vẫn là "Điện thoại" | Không nhắc. Nếu người tham gia tự phát hiện và sửa trước T4 thì vẫn có thể đạt M3 | D3 (c), Q4 |
| Nhập giá sai (thừa hoặc thiếu chữ số 0, hoặc hệ thống hiểu sai dấu chấm) | Không nhắc | D3 (d), Q5, Q6 |
| Tạo danh mục sai chính tả hoặc tạo trùng hai lần | Không nhắc; ghi số dòng thừa | D3 (e), Q2 |
| Đăng nhập sai 3 lần, bị khoá 30 giây (FR-02) | Nếu người tham gia không hiểu chuyện gì xảy ra quá 30 giây thì nói lại email và mật khẩu đúng như phiếu (mức 1) | D3 (b), Q6 |
| Bấm "Xóa" một danh mục hoặc sản phẩm mẫu | Không ngăn; ghi lại. Reset sau phiên | D3 (e) |
| Ảnh sản phẩm không hiện dù URL dán đúng | Ghi là vấn đề môi trường (URL hỏng), không tính lỗi người dùng; thay URL trước phiên sau | Ghi chú phiên |
| SUT lỗi (trang trắng, không phản hồi) | Dừng phiên, ghi lại, khôi phục SUT. Nếu là bug thì báo theo quy trình bug | Ghi chú phiên |

---

## 7. Trình tự đưa kịch bản trong phiên

1. Sau phần mở đầu và phiếu thông tin trước phiên (test plan mục 5), đưa kịch bản và phiếu dữ liệu.
2. Nhờ người tham gia **đọc to** kịch bản.
3. Hỏi: "Bạn có câu hỏi gì về nhiệm vụ không?" Chỉ giải thích về mục tiêu, không nói gì về giao diện.
4. Ghi mốc T0, người tham gia bắt đầu.
5. Kịch bản và phiếu dữ liệu để nguyên cạnh người tham gia trong suốt phiên.
6. Khi người tham gia nói "Tôi làm xong rồi" (T4), hoặc hết 15 phút: Chuyển sang thang đo và câu hỏi mở.
7. Sau phiên: Người điều phối kiểm D6 (danh mục của sản phẩm), rồi reset DB.

---

## 8. Có thêm chặng M4 "tự kiểm tra kết quả" không (QĐ1)

⏳ Quyết định để mở (QĐ1).

| Phương án | Cách làm | Ưu điểm | Nhược điểm |
|---|---|---|---|
| A: Thêm M4 | Thêm vào kịch bản câu: "Sau khi đăng, hãy kiểm tra lại cho chắc sản phẩm đã nằm đúng danh mục Loa Bluetooth." | Đo trực tiếp việc người dùng **có kiểm được** hay không. Bảng sản phẩm không có cột Danh mục (flow_11), nên M4 có thể cho thấy rõ một vấn đề thiết kế | Là một gợi ý rằng có điều cần kiểm, làm giảm khả năng quan sát hành vi tự nhiên; thêm thời gian phiên |
| B: Chỉ quan sát | Không thêm câu nào; xem người tham gia có tự kiểm trong khoảng T3 đến T4 không (D7), rồi hỏi trong câu hỏi mở: "Làm sao bạn biết sản phẩm đã vào đúng danh mục?" | Giữ hành vi tự nhiên; kịch bản ngắn hơn | Nếu ít người tự kiểm, sẽ không biết họ có kiểm được hay không, chỉ biết qua lời kể |

Gợi ý của AI: Phương án B, vì mục đích test plan là quan sát cách người bán dùng Admin một cách tự nhiên; câu hỏi "Làm sao bạn biết..." đưa vào bước `instruments`.

---

## 9. Cần kiểm ở pilot

| Điểm cần kiểm | Vì sao |
|---|---|
| Ô giá nhận `2.990.000` như thế nào | Quyết định QĐ2b; chưa có ảnh về hành vi này |
| URL ảnh hiện được trong bảng sản phẩm | Tránh lỗi môi trường làm hỏng M3 |
| Câu chữ kịch bản có gây hiểu nhầm không (ví dụ người pilot hỏi lại "danh mục là gì") | Quyết định QĐ2a |
| Thời gian từng chặng so với thời gian chuẩn | Quyết định QĐ2d |
| Ngưỡng 3 phút cho "bế tắc hẳn" có hợp lý không | Quyết định QĐ4 |
| Reset DB có xoá danh mục và sản phẩm vừa tạo không | Giả định G4 trong test plan |

---

## 10. Tổng hợp các quyết định để mở ⏳

| Mã | Quyết định | Gợi ý của AI |
|---|---|---|
| QĐ1 | Có thêm chặng M4 "tự kiểm tra kết quả" không | B: Chỉ quan sát, hỏi lại trong câu hỏi mở |
| QĐ2a | Dùng từ "danh mục" hay "nhóm hàng" trong kịch bản | A: "danh mục" |
| QĐ2b | Ghi giá `2.990.000 ₫` hay `2990000` trên phiếu | A: `2.990.000 ₫`, kiểm ở pilot |
| QĐ2c | Đưa phiếu dữ liệu bằng giấy hay file | A: Giấy, riêng URL để trong file để sao chép |
| QĐ2d | Thời gian chuẩn từng chặng và toàn luồng | SV tự đo, nhân bội số, chỉnh sau pilot |
| QĐ4 | Định nghĩa "bế tắc hẳn", các mức can thiệp và câu can thiệp chuẩn | Ngưỡng 3 phút, 4 mức như mục 5 |
