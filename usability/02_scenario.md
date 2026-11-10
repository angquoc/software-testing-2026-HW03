# Kịch bản nhiệm vụ: Luồng FL-05 (Web Admin)

- Bước: `[T2][scenario]`, bản đã review
- Bản AI gốc: `ai_raw/T2_scenario.md` (2026-11-09 01:50)
- Test plan: `01_test_plan.md`

---

## 0. Căn cứ

| Nguồn | Dùng cho |
|---|---|
| `01_test_plan.md` mục 3.2 (chặng M1 đến M3), mục 8 (số liệu D1 đến D10), mục 11 (QĐ1, QĐ2, QĐ4) | Khung kịch bản, số liệu cần thu, các quyết định |
| Đề §6 Task 2 | Kịch bản dạng mục tiêu, không đưa từng bước |
| Slide S13 "Task selection for evaluation", "Task components" | Mỗi nhiệm vụ có 4 phần: Task, Machine state, Successful completion criteria, Benchmark |
| SRS FR-02, FR-14, FR-15 | Ràng buộc dữ liệu (tên bắt buộc, giá > 0, danh mục chọn từ danh sách), khoá tài khoản sau 3 lần sai |
| Ảnh `screenshots/flow_01` đến `flow_11` | Trạng thái giao diện thật: Danh mục mẫu đang có, ô danh mục mặc định "Điện thoại", không có thông báo sau khi lưu |
| SV thử ô "Giá tiền" (2026-11-09) | Gõ `2.990.000` thì ô tự thành `2.990000`, không đổi được dấu (mục 2.2) |

---

## 1. Nguyên tắc viết kịch bản

1. **Mục tiêu, không phải các bước:** Kịch bản nói người tham gia cần đạt được gì, không nói bấm vào đâu.
2. **Không dùng nhãn nút làm gợi ý:** Kịch bản tránh dùng nguyên văn chữ trên nút và menu ("Thêm mới", "Lưu sản phẩm", "Quản lý Danh mục"), để đo được việc người tham gia tự tìm đường (Q1, Q3). Riêng từ "danh mục" được giữ (mục 2.1).
3. **Bối cảnh thật:** Người tham gia đóng vai người bán hàng, đúng với chân dung người dùng ở mục 4 của test plan.
4. **Cùng một kịch bản cho cả 7 người:** Cùng câu chữ, cùng dữ liệu, cùng trạng thái ban đầu.
5. **Người tham gia tự quyết định khi nào xong:** Kịch bản yêu cầu nói "Tôi làm xong rồi" khi thấy đã xong. Mốc này cho biết người tham gia có tự kiểm tra kết quả hay không, và mất bao lâu (D7, Q7).

---

## 2. Kịch bản đưa cho người tham gia

### 2.1 Câu chữ

Dùng từ **"danh mục"** (QĐ2a, SV chốt phương án A): Đây là từ người bán quen dùng trên các sàn và khớp tên luồng FL-05. Từ này trùng nhãn "Danh mục" trên sidebar (`flow_02`), nên khi phân tích Q1 cần nhớ rằng kịch bản đã có sẵn gợi ý này.

> Bạn vừa nhận quản lý một cửa hàng online bán đồ công nghệ. Cửa hàng chuẩn bị bán thêm loa Bluetooth, nhưng hiện chưa có danh mục nào cho loại hàng này.
>
> Nhiệm vụ của bạn: Vào trang quản trị của cửa hàng, tạo một danh mục mới tên là **Loa Bluetooth**, rồi đăng sản phẩm đầu tiên vào **đúng danh mục đó**. Thông tin đăng nhập và thông tin sản phẩm có trong phiếu dữ liệu.
>
> Bạn cứ làm theo cách bạn thấy hợp lý. Khi thấy đã xong, hãy nói: "Tôi làm xong rồi".

### 2.2 Phiếu dữ liệu

Câu đầu phiếu (người tham gia thấy):

> Bạn có thể sao chép (copy) thông tin trong phiếu này để dán vào trang.

| Thông tin | Giá trị |
|---|---|
| Trang quản trị | Đã mở sẵn trên trình duyệt |
| Email đăng nhập | `admin@eshop.com` |
| Mật khẩu | `Admin123!` |
| Tên danh mục mới | Loa Bluetooth |
| Tên sản phẩm | Loa Bluetooth JBL Flip 6 |
| Giá bán | `2990000` |
| Mô tả | Loa chống nước IP67, pin 12 giờ, âm thanh mạnh mẽ, phù hợp mang đi du lịch. |
| Ảnh sản phẩm (URL) | `https://cdn2.cellphones.com.vn/x/media/catalog/product/j/b/jbl_flip_6_5_1.png` |

Ghi chú về dữ liệu:

- Tên danh mục "Loa Bluetooth" không trùng 3 danh mục mẫu "Điện thoại", "Laptop", "Phụ kiện" (`flow_03`). Cũng không dùng "Bàn phím", vì SV đã dùng tên này khi chụp ảnh khảo sát.
- Giá ghi `2990000`, không có dấu phân cách (QĐ2b, SV chốt). Lý do: SV đã thử ô "Giá tiền"; khi gõ `2.990.000` thì ô tự đổi thành `2.990000` và không sửa thành dấu khác được. Nếu phiếu ghi có dấu chấm, gần như mọi người sẽ vấp cùng một chỗ và làm lu mờ các vấn đề khác của luồng. Nếu người tham gia vẫn tự gõ dấu chấm theo thói quen thì ghi lại (mục 6).
- URL ảnh do SV chọn: Một ảnh thật của sản phẩm. Trước mỗi ngày chạy phiên, kiểm lại URL mở được và ảnh hiện được trong bảng sản phẩm của Admin (như dòng cuối `flow_11`).
- URL ảnh dài, gõ tay thì mất thời gian và dễ sai mà không nói lên gì về giao diện. Người bán thật thường sao chép rồi dán URL, nên phiếu được đưa ở dạng sao chép được (QĐ2c). Sau pilot, phiếu ghi rõ ở câu đầu là được sao chép, vì người pilot dừng lại hỏi có được sao chép Mô tả và URL ảnh không (`pilot/notes.md` mục 5, mốc 00:58).

Cách đưa kịch bản và phiếu dữ liệu (QĐ2c, SV chốt phương án B):

| Hình thức phiên | Cách đưa |
|---|---|
| Trực tiếp | Kịch bản (mục 2.1) và toàn bộ phiếu dữ liệu nằm trong **một file văn bản mở sẵn** trên máy, ở cửa sổ riêng cạnh trình duyệt |
| Từ xa | Gửi kịch bản và toàn bộ phiếu dữ liệu qua tin nhắn trong ứng dụng gọi video |

---

## 3. Trạng thái ban đầu (Machine state)

Áp dụng cho mọi phiên, kể cả pilot:

| Mục | Trạng thái |
|---|---|
| Dữ liệu | Đã reset: `cd backend && node database.js`. Bảng danh mục chỉ có 3 danh mục mẫu (`flow_03`) |
| Backend, Web Admin | Đang chạy (`localhost:3000`, `localhost:5174`) |
| Trình duyệt | Đang mở `http://localhost:5174`, trang "Admin Login" (`flow_01`), chưa đăng nhập, chỉ một tab, zoom 100% |
| File kịch bản và phiếu dữ liệu | Phiên trực tiếp: Đã mở sẵn trong một cửa sổ riêng, không che trình duyệt. Phiên từ xa: Sẵn sàng để gửi qua tin nhắn |
| Mật khẩu đã lưu | **Không có.** `flow_02` cho thấy trình duyệt của SV có biểu tượng quản lý mật khẩu; nếu trình duyệt tự điền mật khẩu admin thì M1 không còn ý nghĩa. Dùng một hồ sơ trình duyệt riêng (hoặc chế độ khách) không lưu mật khẩu cho các phiên |
| Tiện ích trình duyệt | Tắt các tiện ích có thể tự dịch trang hoặc chèn gợi ý (ví dụ dịch tự động) |
| Bộ gõ tiếng Việt | Đặt về chế độ tiếng Anh (gõ không dấu) trước phiên; khi đưa kịch bản, nói cho người tham gia cách bật lại nếu cần gõ tiếng Việt (mục 7). Lý do: Ở pilot, bộ gõ đang bật làm người pilot gõ sai email ở M1 và không biết tắt ở đâu (`pilot/notes.md` mục 5, mốc 00:04) |
| Ảnh sản phẩm | URL ảnh đã kiểm mở được trong ngày chạy phiên |
| Quay màn hình | Đã bật trước khi người tham gia đọc kịch bản |

---

## 4. Các thành phần nhiệm vụ (Task components)

Theo slide S13 "Task components". Người tham gia chỉ thấy kịch bản và phiếu dữ liệu ở mục 2; bảng dưới đây dành cho người điều phối.

### 4.1 Theo chặng

| Chặng | Nhiệm vụ | Trạng thái ban đầu | Tiêu chí hoàn thành | Thời gian chuẩn |
|---|---|---|---|---|
| M1 | Đăng nhập trang quản trị | Trang "Admin Login", chưa đăng nhập | Trang Dashboard hiện ra (`flow_02`) | Mục 4.4 |
| M2 | Tạo danh mục "Loa Bluetooth" | Đang ở Dashboard | Bảng danh mục có đúng **một** dòng "Loa Bluetooth" (đúng chính tả, có dấu) | Mục 4.4 |
| M3 | Đăng sản phẩm vào danh mục mới | Danh mục "Loa Bluetooth" đã có | Bảng sản phẩm có dòng "Loa Bluetooth JBL Flip 6", cột Giá hiện `2990000 ₫` (bảng không có dấu phân cách, `flow_11`) và ảnh hiện được; **và** sản phẩm thuộc danh mục "Loa Bluetooth" (người điều phối kiểm sau phiên, D6) | Mục 4.4 |

### 4.2 Toàn luồng

| Thành phần | Nội dung |
|---|---|
| Nhiệm vụ | Kịch bản ở mục 2.1 |
| Trạng thái ban đầu | Mục 3 |
| Tiêu chí hoàn thành | M1, M2, M3 đều đạt, và người tham gia đã nói "Tôi làm xong rồi" |
| Thời gian chuẩn | Mục 4.4, tính từ T0 (đọc xong kịch bản) tới T4 (nói "Tôi làm xong rồi") |
| Thời gian tối đa | 15 phút (test plan mục 5). Hết 15 phút thì dừng, các chặng chưa đạt tính là "Không hoàn thành" |

### 4.3 Cách xếp kết quả

| Kết quả | Khi nào |
|---|---|
| Tự hoàn thành | Đạt tiêu chí, không có can thiệp nào được tính (mục 5) |
| Hoàn thành nhờ can thiệp | Đạt tiêu chí, có ít nhất một can thiệp được tính |
| Không hoàn thành | Không đạt tiêu chí khi hết thời gian tối đa, người tham gia bỏ cuộc, hoặc dữ liệu sai (ví dụ sản phẩm nằm trong danh mục "Điện thoại", giá sai) mà người tham gia không tự sửa trước khi nói "Tôi làm xong rồi" |

Tự hoàn thành nhưng vượt thời gian chuẩn vẫn là "Tự hoàn thành"; việc vượt thời gian chuẩn được tổng hợp riêng (test plan mục 8.4).

### 4.4 Thời gian chuẩn

QĐ2d: SV đã đo sau khi file này chốt và chọn bội số ×5 (bảng dưới). Sau pilot, SV giảm bội số xuống **×3**; cột "Sau pilot" là thời gian chuẩn **dùng cố định cho P1 đến P7**. Cách làm:

1. SV tự làm toàn bộ luồng với đúng phiếu dữ liệu ở mục 2.2, sau khi reset, bấm giờ từng chặng (thời gian của người đã biết giao diện).
2. Đặt thời gian chuẩn bằng một bội số của thời gian đó để tính tới người dùng mới; SV chọn bội số và ghi lý do.
3. Chạy pilot, xem người pilot có vượt nhiều không, chỉnh lại con số rồi giữ cố định cho P1 đến P7.

Bản AI có đề xuất ban đầu (M1 1 phút, M2 2 phút, M3 4 phút, toàn luồng 7 phút) nhưng chưa có căn cứ đo; các con số này không dùng cho đến khi SV đo xong.

Định dạng thời gian: `phút:giây.phần trăm giây`.

| Chặng | Thời gian SV tự làm | Bội số | Thời gian chuẩn | Sau pilot |
|---|---|---|---|---|
| M1 | 00:07.03 | ×5 | 00:35.15 | ×3: **00:21.09** |
| M2 | 00:16.19 | ×5 | 01:20.95 | ×3: **00:48.57** |
| M3 | 00:20.28 | ×5 | 01:41.40 | ×3: **01:00.84** |
| Toàn luồng | 00:46.25 | ×5 | 03:51.25 | ×3: **02:18.75** |

Bội số ×5 (SV chọn trước pilot): Đủ chỗ cho người dùng mới tìm menu và đọc form lần đầu, nhưng vẫn đủ chặt để thấy chặng nào làm người dùng vướng. Các phương án đã xét lúc đó: ×3 (toàn luồng 02:18.75) và ×10 (toàn luồng 07:42.50).

Sau pilot (SV chốt ×3). Số đo của người pilot (`pilot/notes.md` mục 4):

| Chặng | Pilot | So với thời gian SV tự làm | Chuẩn ×5 cũ | Chuẩn ×3 mới |
|---|---|---|---|---|
| M1 | 00:16 | ×2,3 | 00:35.15 | 00:21.09 |
| M2 | 00:18 | ×1,1 | 01:20.95 | 00:48.57 |
| M3 | 00:40 | ×2,0 | 01:41.40 | 01:00.84 |
| Toàn luồng | 01:24 | ×1,8 | 03:51.25 | 02:18.75 |

Lý do chọn ×3: Người pilot nhanh hơn chuẩn ×5 rất nhiều ở mọi chặng (toàn luồng chỉ bằng khoảng 36% chuẩn), nên chuẩn ×5 gần như không phân biệt được chặng nào làm người dùng vướng. Với ×3, người pilot vẫn nằm trong chuẩn ở mọi chặng, và còn chỗ cho người chậm hơn người pilot. Các phương án đã xét: ×2 (toàn luồng 01:32.50; M1 của người pilot đã vượt chuẩn, M3 vừa đủ, quá sát một người đo) và ×4 (toàn luồng 03:05.00, gần với ×5 cũ).

Hạn chế: Chỉ có số đo của một người pilot (nhóm tuổi 18 đến 24, tự đánh giá mức quen dùng máy tính 4/5), có thể nhanh hơn 7 người tham gia. Mốc M1 của người pilot tính từ đầu video vì người pilot đăng nhập trước khi đọc kịch bản (`pilot/notes.md` mục 3); mục 7 đã thêm lời dặn để P1 đến P7 không lặp lại.

Ghi chú: Tổng ba chặng là 00:43.50, ít hơn toàn luồng 00:02.75. Phần chênh là khoảng T3 đến T4 (từ lúc bấm "Lưu sản phẩm" tới lúc nói "Tôi làm xong rồi"), vì chặng M1 bắt đầu ngay tại T0.

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

Định nghĩa "bế tắc hẳn" và câu can thiệp chuẩn (QĐ4, SV đồng ý đề xuất của AI; sau pilot giảm ngưỡng thời gian từ 3 phút xuống 2 phút).

**Bế tắc hẳn** khi có ít nhất một trong các dấu hiệu sau:

- Không tiến triển ở cùng một chặng trong khoảng 2 phút (chỉ đi lại giữa các trang đã xem, hoặc ngồi im). Lý do giảm từ 3 phút: Với chuẩn ×3, chặng dài nhất (M3) có chuẩn 01:00.84; 2 phút đã gần gấp đôi chuẩn này. Người pilot không bị bế tắc lần nào nên ngưỡng chưa được thử trực tiếp;
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
| Vào khối "Import sản phẩm từ CSV" (`flow_06`) | Để người tham gia tự nhận ra | D3 (a), Q3 |
| Lưu sản phẩm khi ô danh mục vẫn là "Điện thoại" | Không nhắc. Nếu người tham gia tự phát hiện và sửa trước T4 thì vẫn có thể đạt M3 | D3 (c), Q4 |
| Nhập giá sai (thừa hoặc thiếu chữ số 0) | Không nhắc | D3 (d), Q5, Q6 |
| Tự gõ dấu chấm vào ô giá theo thói quen, dù phiếu ghi `2990000` (ô sẽ tự đổi thành dạng như `2.990000`, theo SV thử) | Không nhắc; ghi lại người tham gia có nhận ra và sửa không | D3 (d), Q5, Q6 |
| Tạo danh mục sai chính tả hoặc tạo trùng hai lần | Không nhắc; ghi số dòng thừa | D3 (e), Q2 |
| Đăng nhập sai 3 lần, bị khoá 30 giây (FR-02) | Nếu người tham gia không hiểu chuyện gì xảy ra quá 30 giây thì nói lại email và mật khẩu đúng như phiếu (mức 1) | D3 (b), Q6 |
| Bấm "Xóa" một danh mục hoặc sản phẩm mẫu | Không ngăn; ghi lại. Reset sau phiên | D3 (e) |
| Ảnh sản phẩm không hiện dù URL dán đúng | Ghi là vấn đề môi trường (URL hỏng), không tính lỗi người dùng; thay URL trước phiên sau | Ghi chú phiên |
| SUT lỗi (trang trắng, không phản hồi) | Dừng phiên, ghi lại, khôi phục SUT. Nếu là bug thì báo theo quy trình bug | Ghi chú phiên |

---

## 7. Trình tự đưa kịch bản trong phiên

1. Sau phần mở đầu và phiếu thông tin trước phiên (test plan mục 5), chỉ cho người tham gia cửa sổ file kịch bản đã mở sẵn (phiên trực tiếp) hoặc gửi kịch bản và phiếu dữ liệu qua tin nhắn (phiên từ xa). Nói thêm: "Bộ gõ đang để chế độ tiếng Anh. Nếu cần gõ tiếng Việt, bạn bấm [cách chuyển bộ gõ trên máy này]." (mục 3)
2. Nhờ người tham gia **đọc to hết** kịch bản trước khi chạm vào chuột hay bàn phím: "Bạn đọc to giúp mình hết phần nhiệm vụ này nhé. Đọc xong rồi bạn hẵng bắt đầu làm." Lý do: Ở pilot, người pilot đăng nhập trước rồi mới đọc kịch bản, làm mốc T1 rơi trước T0 (`pilot/notes.md` mục 3).
3. Hỏi: "Bạn có câu hỏi gì về nhiệm vụ không?" Chỉ giải thích về mục tiêu, không nói gì về giao diện.
4. Ghi mốc T0, người tham gia bắt đầu.
5. File kịch bản và phiếu dữ liệu để nguyên trong suốt phiên; người tham gia tự chuyển qua lại giữa file và trình duyệt.
6. Khi người tham gia nói "Tôi làm xong rồi" (T4), hoặc hết 15 phút: Chuyển sang thang đo và câu hỏi mở.
7. Sau phiên: Người điều phối kiểm D6 (danh mục của sản phẩm), rồi reset DB.

---

## 8. Chặng M4 "tự kiểm tra kết quả" (QĐ1)

SV chốt phương án B: **Không thêm M4, chỉ quan sát.** Kịch bản không có câu nào nhắc kiểm tra; người điều phối xem người tham gia có tự kiểm trong khoảng T3 đến T4 không (D7).

Lý do: Giữ hành vi tự nhiên của người bán khi dùng Admin; kịch bản ngắn hơn. Hạn chế được chấp nhận: Nếu ít người tự kiểm thì chỉ biết họ có kiểm được hay không qua lời kể.

Câu hỏi mở "Làm sao bạn biết sản phẩm đã vào đúng danh mục Loa Bluetooth?" đã được đưa vào nhóm câu bắt buộc ở bước `instruments` (câu C7, `03_instruments.md` mục I6.1).

---

## 9. Cần kiểm ở pilot

Pilot đã chạy ngày 2026-11-10; kết quả từng điểm ở `pilot/notes.md` mục 8.1. Các thay đổi sau pilot ghi ở bảng "Thay đổi so với bản AI" (căn cứ: pilot).

| Điểm cần kiểm | Vì sao |
|---|---|
| URL ảnh hiện được trong bảng sản phẩm | Tránh lỗi môi trường làm hỏng M3 |
| Câu chữ kịch bản có gây hiểu nhầm không (ví dụ người pilot hỏi lại "danh mục là gì") | Kiểm lại QĐ2a |
| Người pilot có chuyển qua lại giữa file phiếu dữ liệu và trình duyệt dễ dàng không | Kiểm lại QĐ2c |
| Thời gian từng chặng so với thời gian chuẩn | QĐ2d |
| Ngưỡng 3 phút cho "bế tắc hẳn" có hợp lý không | QĐ4 |
| Reset DB có xoá danh mục và sản phẩm vừa tạo không | Giả định G4 trong test plan |
| Cách kiểm danh mục của sản phẩm sau phiên: Trang chi tiết trên web bán hàng hay form "Sửa" trong Admin (chưa có ảnh form "Sửa") | D6 trong test plan mục 8.1 |

---

## 10. Tổng hợp các quyết định

| Mã | Quyết định | Trạng thái |
|---|---|---|
| QĐ1 | Có thêm chặng M4 "tự kiểm tra kết quả" không | Đã chốt: B, chỉ quan sát. Câu hỏi mở liên quan: C7 trong `03_instruments.md` |
| QĐ2a | Dùng từ "danh mục" hay "nhóm hàng" | Đã chốt: A, "danh mục" |
| QĐ2b | Cách ghi giá trên phiếu | Đã chốt: `2990000` |
| QĐ2c | Đưa phiếu dữ liệu bằng giấy hay file | Đã chốt: B, toàn bộ trong file văn bản mở sẵn (trực tiếp); gửi qua tin nhắn (từ xa). Sau pilot: Phiếu ghi rõ được sao chép |
| QĐ2d | Thời gian chuẩn từng chặng và toàn luồng | Đã chốt sau pilot: Thời gian SV tự làm ×3 (mục 4.4); toàn luồng 02:18.75; cố định cho P1 đến P7 |
| QĐ4 | Định nghĩa "bế tắc hẳn", các mức can thiệp và câu can thiệp chuẩn | Đã chốt: Theo đề xuất của AI (mục 5); sau pilot giảm ngưỡng thời gian xuống 2 phút |

---

## Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 2.1 (QĐ2a) | Chốt từ "danh mục"; bỏ bảng phương án; thêm lưu ý khi phân tích Q1 rằng kịch bản đã có sẵn gợi ý từ sidebar | Quyết định của SV | | SV chọn phương án A theo gợi ý của AI |
| Mục 2.2, giá (QĐ2b) | Ghi giá `2990000` thay cho `2.990.000 ₫` | Quyết định của SV | | SV thử ô "Giá tiền": Gõ `2.990.000` thì ô tự đổi thành `2.990000`, không sửa được. Gợi ý A của AI dựa trên việc chưa biết ô giá xử lý dấu chấm thế nào |
| Mục 0, mục 2.2 | Thêm căn cứ và ghi chú về hành vi của ô giá khi gõ dấu chấm | Thiếu | Prompt: AI chưa có thông tin về cách ô giá xử lý dấu chấm (chưa có ảnh, không được tự mở giao diện) | Kết quả SV thử ngày 2026-11-09 |
| Mục 2.2, URL ảnh | Giữ URL ảnh do SV chọn; ghi chú đổi thành "URL do SV chọn, kiểm lại trước mỗi ngày chạy phiên" | Quyết định của SV | | Bản AI để SV tự chọn URL vì AI không kiểm được URL có tồn tại không |
| Mục 2.2, 3, 7 (QĐ2c) | Chốt phương án B: Kịch bản và toàn bộ phiếu dữ liệu nằm trong một file văn bản mở sẵn (trực tiếp), gửi qua tin nhắn (từ xa). Thêm dòng "File kịch bản và phiếu dữ liệu" vào trạng thái ban đầu; sửa bước 1 và 5 của trình tự | Quyết định của SV | | SV chọn B thay cho gợi ý A (phiếu giấy) của AI |
| Mục 4.1, M3 | Tiêu chí giá đổi từ "giá đúng 2.990.000 ₫" thành "cột Giá hiện `2990000 ₫`" | Sai | | Bảng sản phẩm hiển thị giá không có dấu phân cách (`flow_11`); tiêu chí của bản AI không khớp với cái người điều phối nhìn thấy |
| Mục 4.1, 4.2, 4.4 (QĐ2d) | Bỏ các con số đề xuất (1, 2, 4, 7 phút); giữ cách đo 3 bước của AI; thêm bảng đo. Thời gian chuẩn bằng thời gian SV tự làm ×5: M1 00:35.15, M2 01:20.95, M3 01:41.40, toàn luồng 03:51.25 | Quyết định của SV | | SV tự làm luồng sau khi reset và bấm giờ (toàn luồng 00:46.25), rồi chọn bội số ×5. Bản AI tự ghi rằng các con số đề xuất chưa có căn cứ đo |
| Mục 5 (QĐ4) | Chốt định nghĩa "bế tắc hẳn" và 4 mức can thiệp theo đề xuất của AI | Quyết định của SV | | SV đồng ý đề xuất |
| Mục 6 | Tách dòng "Nhập giá sai" thành hai dòng: Sai số chữ số 0, và tự gõ dấu chấm dù phiếu ghi `2990000` | Thiếu | Prompt: AI chưa biết hành vi của ô giá khi gõ dấu chấm | Kết quả SV thử ô giá; QĐ2b |
| Mục 8 (QĐ1) | Chốt phương án B: Không thêm M4, chỉ quan sát; việc có hỏi "Làm sao bạn biết..." chuyển sang bước `instruments` (để mở) | Quyết định của SV | | SV chọn B theo gợi ý của AI |
| Mục 9 | Bỏ dòng "Ô giá nhận 2.990.000 như thế nào" | Thừa | | Đã biết qua lần SV thử; phiếu không còn ghi dấu chấm |
| Mục 4.4, 10 (QĐ2d) | Điền cột "Sau pilot": Giảm bội số từ ×5 xuống ×3 (M1 00:21.09, M2 00:48.57, M3 01:00.84, toàn luồng 02:18.75), cố định cho P1 đến P7; thêm bảng số đo pilot, lý do và hạn chế | Quyết định của SV | | Pilot: Người pilot làm toàn luồng 01:24, chỉ bằng ×1,8 thời gian SV tự làm (`pilot/notes.md` mục 4, 8.1). SV quyết giảm ×5 và chọn ×3 trong ba phương án ×2, ×3, ×4 |
| Mục 5, 10 (QĐ4) | Giảm ngưỡng "bế tắc hẳn" từ khoảng 3 phút xuống khoảng 2 phút | Quyết định của SV | | Pilot (`pilot/notes.md` mục 8.1); chuẩn ×3 của M3 chỉ còn 01:00.84 |
| Mục 7, bước 2 | Dặn người tham gia đọc to hết kịch bản rồi mới chạm chuột, bàn phím | Quyết định của SV | | Pilot: Người pilot đăng nhập trước khi đọc kịch bản, mốc T1 rơi trước T0 (`pilot/notes.md` mục 3, 8.1) |
| Mục 3, mục 7 bước 1 | Thêm dòng "Bộ gõ tiếng Việt" vào trạng thái ban đầu: Để chế độ tiếng Anh; khi đưa kịch bản, nói cách bật lại | Quyết định của SV | | Pilot: Bộ gõ đang bật làm người pilot gõ sai email và không biết tắt (`pilot/notes.md` mục 5, 8.1) |
| Mục 2.2, 10 (QĐ2c) | Thêm câu đầu phiếu dữ liệu "Bạn có thể sao chép (copy) thông tin trong phiếu này để dán vào trang." | Quyết định của SV | | Pilot: Người pilot dừng lại hỏi có được sao chép Mô tả và URL ảnh không (`pilot/notes.md` mục 5, 8.1) |
| Mục 4.2 | Bỏ cụm "khớp thời lượng làm nhiệm vụ" ở dòng thời gian tối đa, chỉ dẫn tới test plan mục 5 | Quyết định của SV | | Pilot: Test plan mục 5 đổi thời lượng làm nhiệm vụ theo số đo pilot; thời gian tối đa vẫn là 15 phút |
| Mục 9 | Thêm dòng dẫn tới kết quả pilot | Quyết định của SV | | Pilot đã chạy (`pilot/notes.md` mục 8.1) |
| Mục 9 | Thêm dòng kiểm việc chuyển qua lại giữa file phiếu và trình duyệt, và dòng kiểm cách kiểm danh mục cho D6 | Thiếu | Prompt: QĐ2c chưa chốt khi AI viết; prompt không nhắc rằng D6 có hai cách kiểm và form "Sửa" chưa có ảnh | QĐ2c; `01_test_plan.md` mục 8.1 (D6) |
