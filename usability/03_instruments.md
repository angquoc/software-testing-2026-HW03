# Bộ công cụ cho phiên usability: Luồng FL-05 (Web Admin)

- Bước: `[T2][instruments]`, bản đã review
- Bản AI gốc: `ai_raw/T2_instruments.md` (2026-11-09 14:27)
- Test plan: `01_test_plan.md`; kịch bản: `02_scenario.md`

---

## 0. Căn cứ và danh sách công cụ

| Nguồn | Dùng cho |
|---|---|
| Đề §6 Task 2 | Thang đo chuẩn sau phiên (SUS); câu hỏi mở tối thiểu về clarity, error recovery, speed, trust; mở đầu "đang kiểm thử sản phẩm, không kiểm tra bạn", think-aloud; ghi chú có cấu trúc về chỗ vướng, lỗi, do dự, lời than phiền |
| `01_test_plan.md` mục 4 (phiếu thông tin), mục 5 (trình tự phiên), mục 7 (vai trò người điều phối), mục 8 (D1 đến D10) | Nội dung phiếu thông tin, phiếu ghi chú, liên kết câu hỏi mở với Q1 đến Q10 |
| `02_scenario.md` mục 4.5 (mốc T0 đến T4), mục 5 (can thiệp), mục 6 (tình huống đặc biệt), mục 8 (QĐ1) | Cấu trúc phiếu ghi chú, mã sự kiện, câu hỏi "Làm sao bạn biết..." |
| WORKFLOW mục 1.5, 3.2.2 | Riêng tư (chỉ dùng mã P1 đến P7, `PL`); cấu trúc hồ sơ phiên `notes.md`, `scale.md`, `probe.md` |
| Slide S13 "Questionnaires", slide AI-First "What to probe for preference" | Dạng câu hỏi (Likert, điền, branching); hỏi trong bối cảnh nhiệm vụ vừa làm, câu chữ trung lập |
| Template `UsabilityTestingTemplate.doc` | Phiếu thông tin người tham gia, lời đồng ý, pre-test và post-test questionnaire |

Bộ công cụ gồm:

| Mã | Công cụ | Dùng lúc | Lưu ở |
|---|---|---|---|
| I1 | Danh sách chuẩn bị phiên | Trước phiên | Người điều phối dùng, không lưu theo phiên |
| I2 | Tin nhắn xin đồng ý, lời dặn mở đầu, giới thiệu think-aloud | Trước ngày phiên (tin nhắn); bước 2 của phiên | Ảnh chụp tin nhắn: Ngoài thư mục `Homeworks/HW03/` (mục I2.1); cột đồng ý trong `participants.md` |
| I3 | Phiếu thông tin trước phiên | Bước 3 | `sessions/P<n>/notes.md` (phần đầu) |
| I4 | Phiếu ghi chú quan sát | Bước 4 | `sessions/P<n>/notes.md` |
| I5 | Thang đo SUS sau phiên (Google Form, người tham gia tự điền) | Bước 5 | Google Form của SV; chép nguyên văn vào `sessions/P<n>/scale.md` |
| I6 | Câu hỏi mở | Bước 6 | `sessions/P<n>/probe.md` |
| I7 | Lời kết thúc | Bước 7 | Đọc cho người tham gia nghe |

---

## I1. Danh sách chuẩn bị phiên

Lấy từ `01_test_plan.md` mục 6, 7 và `02_scenario.md` mục 3. Đánh dấu từng dòng trước mỗi phiên.

| # | Việc | Xong |
|---|---|---|
| 1 | Đã có tin nhắn đồng ý của người tham gia (I2.1), ảnh chụp đã lưu ngoài repo, cột đồng ý trong `participants.md` đã điền | ☐ |
| 2 | Phiên trước (nếu có): Đã kiểm D6 và ghi vào `notes.md` của phiên trước | ☐ |
| 3 | Reset DB: `cd backend && node database.js` | ☐ |
| 4 | Backend (`localhost:3000`) và Web Admin (`localhost:5174`) đang chạy | ☐ |
| 5 | Trình duyệt dùng hồ sơ riêng (hoặc chế độ khách), không có mật khẩu đã lưu, tắt dịch tự động và tiện ích chèn gợi ý | ☐ |
| 6 | Trình duyệt mở `http://localhost:5174`, trang "Admin Login", một tab, zoom 100% | ☐ |
| 7 | URL ảnh trong phiếu dữ liệu mở được trong ngày | ☐ |
| 8 | Phiên trực tiếp: File kịch bản và phiếu dữ liệu mở sẵn ở cửa sổ riêng. Phiên từ xa: Nội dung đã sẵn sàng để gửi qua tin nhắn | ☐ |
| 9 | Phiên từ xa: Ứng dụng gọi video đã cấp quyền điều khiển máy, đã thử với người tham gia | ☐ |
| 10 | Phần mềm quay màn hình có thu micro (nếu người tham gia đồng ý ghi âm), đã thử ghi vài giây và nghe lại | ☐ |
| 11 | Có sẵn I2 đến I7 (bản in hoặc file) và đồng hồ hiển thị giờ để đối chiếu mốc video | ☐ |
| 12 | Link Google Form SUS (I5) mở được, đang nhận câu trả lời; tin nhắn chứa link soạn sẵn để gửi ngay sau T4; nhớ mã P<n> của phiên này để đọc cho người tham gia | ☐ |
| 13 | Ghi môi trường vào I4: Trình duyệt và phiên bản, OS, độ phân giải, hình thức phiên | ☐ |
| 14 | Bộ gõ tiếng Việt đặt về chế độ tiếng Anh; biết cách chuyển bộ gõ trên máy để nói cho người tham gia (`02_scenario.md` mục 3, 7) | ☐ |

---

## I2. Xin đồng ý, lời dặn mở đầu và giới thiệu think-aloud

Các đoạn trích dẫn ở I2.2 và I2.3 là **văn bản người điều phối đọc cho người tham gia nghe**, để người tham gia nắm được tình hình và để 7 phiên được mở đầu giống nhau. Không cần ghi âm riêng phần này để nộp; I2.3 nằm sau lúc bật quay nên tự có trong video. Phần trong `[ ]` là ghi chú cho người điều phối, không đọc.

### I2.1 Tin nhắn xin đồng ý (gửi trước ngày phiên)

Gửi qua kênh liên lạc đã dùng khi tuyển (Zalo, Messenger...), áp dụng cho cả phiên trực tiếp và từ xa:

> Chào bạn, mình là [tên người điều phối], sinh viên môn Kiểm thử phần mềm. Cảm ơn bạn đã nhận lời tham gia buổi thử trang quản trị bán hàng EShop vào [ngày giờ], [trực tiếp tại ... / qua cuộc gọi video].
>
> Buổi thử khoảng 15 đến 30 phút. Mình kiểm tra trang web, không kiểm tra bạn. Bạn có thể dừng bất cứ lúc nào mà không cần nói lý do.
>
> Để mình xem lại sau, mình xin phép:
> 1. **Quay lại màn hình máy tính** trong lúc bạn làm (không quay mặt bạn).
> 2. **Ghi âm giọng nói** trong lúc bạn làm (không bắt buộc).
> 3. Để **giảng viên hoặc trợ giảng gọi điện xác minh** bạn đã tham gia.
>
> Video chỉ dùng cho bài tập: Mình xem lại để ghi chú và nộp kèm bài cho giảng viên chấm, không đăng lên mạng. Trong mọi ghi chép, bạn được gọi bằng một mã (ví dụ P3), không ghi tên. Số liên lạc của bạn chỉ nằm trong danh sách người tham gia.
>
> Bạn trả lời giúp mình từng ý: Ý 1 đồng ý / không, ý 2 đồng ý / không, ý 3 đồng ý / không. Cảm ơn bạn!

[Không đồng ý ý 1 hoặc ý 3 thì không mời vào 7 người, vì đó là tiêu chí bắt buộc ở test plan mục 4. Không đồng ý ý 2 thì vẫn chạy phiên (mục I2.4).]

Lưu bằng chứng (QĐ-I1, SV chốt):

- Chụp màn hình tin nhắn trả lời. Ảnh có tên và ảnh đại diện của người tham gia, nên **lưu ngoài thư mục `Homeworks/HW03/`** (`.gitignore` chỉ chặn file video, không chặn ảnh), không commit, không đưa vào AI (WORKFLOW mục 1.5).
- Trong `participants.md` ghi cột đồng ý: Ngày nhắn, kênh, đồng ý ý 1 / 2 / 3.

### I2.2 Lời dặn mở đầu (trước khi bật quay)

> Cảm ơn bạn đã dành thời gian. Như mình đã nhắn, hôm nay mình đang kiểm thử một trang quản trị bán hàng tên là EShop, để tìm ra chỗ nào trên trang khó dùng.
>
> Mình muốn nói rõ: **Mình đang kiểm tra trang web, không phải kiểm tra bạn.** Không có câu trả lời đúng hay sai. Nếu bạn thấy chỗ nào khó, đó chính là thứ mình cần tìm, và đó là lỗi của trang web chứ không phải của bạn.
>
> Bạn đã đồng ý cho mình quay màn hình [và ghi âm]. Bạn vẫn đồng ý chứ? Bạn có thể dừng bất cứ lúc nào.

[Người tham gia vẫn đồng ý thì bật quay. Nếu họ đổi ý về ghi âm thì tắt micro, chuyển sang cách ghi ở I2.4.]

### I2.3 Giới thiệu think-aloud (sau khi bật quay)

> Trong lúc làm, mình nhờ bạn **vừa làm vừa nói ra những gì bạn đang nghĩ**: Bạn đang tìm gì, định bấm vào đâu, thấy chỗ nào lạ hay khó hiểu. Cứ nói tự nhiên, như đang nói một mình.
>
> Trong lúc bạn làm, mình sẽ không giải thích hay chỉ cách, vì mình muốn biết một người lần đầu dùng trang này sẽ làm thế nào. Nếu bạn im lặng lâu, mình có thể hỏi "Bạn đang nghĩ gì?" để nhắc bạn nói tiếp. Bạn có câu hỏi gì trước khi bắt đầu không?

Không cho tập think-aloud trước nhiệm vụ (QĐ-I2, SV chốt). Người tham gia nói ít thì xử lý theo I2.4.

### I2.4 Khi think-aloud không đủ

| Tình huống | Cách xử lý | Ghi vào |
|---|---|---|
| Người tham gia nói ít hoặc im lặng | Nhắc bằng câu mức 0 ("Bạn đang nghĩ gì?", "Bạn đang tìm gì?") khi im lặng lâu hoặc khi dừng tay, khoảng 20 giây (đề xuất, kiểm ở pilot). Không nhắc liên tục để không làm gián đoạn và kéo dài thời gian. Sau nhiệm vụ, hỏi lại những khoảnh khắc đó ở I6.3 | Mã `CT0` trong I4.4 (không tính là can thiệp) |
| Người tham gia rành công nghệ, làm nhanh, ít nói | Không ép nói nhiều hay làm chậm lại; làm nhanh cũng là dữ liệu (D2). Phần "vì sao" lấy qua câu hỏi mở C2 đến C7. Đặc điểm B2, B5, B6 ở I3 dùng để giải thích khi phân tích | I4.4, `probe.md` |
| Người tham gia không đồng ý ghi âm | Video vẫn quay màn hình. Người điều phối ghi tay câu nói đáng chú ý **ngay lúc nghe**, gần nguyên văn nhất có thể, kèm mốc giờ của video; đánh dấu "(ghi tay)" ở cột trích lời. Báo cáo ghi phiên này không có âm thanh (test plan mục 9, phần hạn chế) | I4.1, cột "Trích lời" ở I4.4 |

---

## I3. Phiếu thông tin trước phiên

Theo `01_test_plan.md` mục 4. Không ghi tên, chỉ ghi mã. Người điều phối đọc câu hỏi và đánh dấu, hoặc người tham gia tự đánh dấu.

**Mã người tham gia:** P__ (hoặc `PL`)

**Phần A: Xác nhận tiêu chí** (người điều phối hỏi lại để xác nhận, đã sàng lọc khi tuyển)

| # | Câu hỏi | Có | Không |
|---|---|---|---|
| A1 | Bạn đang hoặc đã từng bán hàng online, và tự tay đăng sản phẩm (tên, giá, ảnh, mô tả) ít nhất vài lần? | ☐ | ☐ |
| A2 | Bạn tự dùng được máy tính hoặc laptop với trình duyệt? | ☐ | ☐ |
| A3 | Bạn đã từng thấy hoặc dùng trang EShop này chưa? | ☐ | ☐ |
| A4 | Bạn có đang học môn Kiểm thử phần mềm kỳ này không? | ☐ | ☐ |

[A1, A2 phải là "Có"; A3, A4 phải là "Không". Sai một ý thì không tính người này vào 7 người.]

**Phần B: Đặc điểm**

| # | Câu hỏi | Lựa chọn |
|---|---|---|
| B1 | Bạn thuộc nhóm tuổi nào? | ☐ 18 đến 24 ☐ 25 đến 34 ☐ 35 đến 44 ☐ 45 trở lên |
| B2 | Công việc chính của bạn thuộc lĩnh vực nào? | ☐ Kinh doanh, bán hàng ☐ Văn phòng, hành chính ☐ Sinh viên ☐ Công nghệ thông tin (lập trình, kiểm thử, quản trị hệ thống) ☐ Khác: ____ |
| B3 | Bạn đã bán hàng online trên những kênh nào? (chọn nhiều) | ☐ Sàn TMĐT (Shopee, Lazada, Tiki, TikTok Shop...) ☐ Mạng xã hội (Facebook, Zalo, Instagram...) ☐ Website riêng ☐ Khác: ____ |
| B4 | Ước lượng bạn đã tự đăng bao nhiêu sản phẩm? | ☐ Dưới 10 ☐ 10 đến 50 ☐ 51 đến 200 ☐ Trên 200 |
| B5 | Bạn đã từng dùng trang quản trị bán hàng nào chưa (ví dụ Shopee Kênh Người Bán, Haravan, Sapo, WordPress / WooCommerce)? | ☐ Chưa ☐ Rồi, tên: ____ |
| B6 | Bạn tự đánh giá mức độ quen dùng máy tính của mình | 1 (rất ít dùng) ☐ 2 ☐ 3 ☐ 4 ☐ 5 (dùng hằng ngày, thành thạo) ☐ |
| B7 | Bạn thường đăng sản phẩm bằng thiết bị nào? | ☐ Chủ yếu điện thoại ☐ Chủ yếu máy tính ☐ Cả hai |

Ghi chú: B7 không có trong test plan, do AI đề xuất và SV giữ. Nhiều người bán quen đăng sản phẩm bằng ứng dụng trên điện thoại; khi phân tích, điều này có thể giải thích vì sao một người vướng ở form trên máy tính.

---

## I4. Phiếu ghi chú quan sát

Mẫu cho `sessions/P<n>/notes.md`. Người điều phối ghi nhanh trong phiên, rồi xem lại video để điền mốc thời gian chính xác.

### I4.1 Thông tin phiên

| Mục | Giá trị |
|---|---|
| Mã | P__ |
| Ngày, giờ bắt đầu | |
| Hình thức | ☐ Trực tiếp ☐ Từ xa (công cụ: ____, độ trễ quan sát được: ____) |
| Trình duyệt và phiên bản | |
| OS, độ phân giải, zoom | |
| Thiết bị nhập người tham gia dùng | ☐ Chuột ☐ Touchpad ☐ Khác |
| Đồng ý (theo tin nhắn I2.1, xác nhận lại ở I2.2) | Quay màn hình ☐ Ghi âm ☐ Gọi xác minh ☐ |
| Video có âm thanh | ☐ Có ☐ Không (trích lời ghi tay, I2.4) |
| Thời lượng cả phiên | |
| Kết quả toàn luồng | ☐ Tự hoàn thành ☐ Hoàn thành nhờ can thiệp ☐ Không hoàn thành |
| Số lần can thiệp (được tính) | |

### I4.2 Mốc thời gian

Theo `02_scenario.md` mục 4.5. Ghi theo mốc trong video (`mm:ss`).

| Mốc | Sự kiện | Mốc video |
|---|---|---|
| T0 | Đọc xong kịch bản, bắt đầu thao tác | |
| T1 | Trang Dashboard hiện ra (hết M1) | |
| T2 | Dòng "Loa Bluetooth" hiện trong bảng danh mục (hết M2) | |
| T3 | Bấm "Lưu sản phẩm" lần cuối, sản phẩm hiện trong bảng (hết M3) | |
| T4 | Nói "Tôi làm xong rồi" | |

### I4.3 Kết quả theo chặng

Thời gian chuẩn lấy từ `02_scenario.md` mục 4.4, cột "Sau pilot" (×3, cố định cho P1 đến P7).

| Chặng | Thời gian (tính từ mốc) | Thời gian chuẩn | Vượt chuẩn | Kết quả |
|---|---|---|---|---|
| M1 | T1 − T0 = | 00:21.09 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| M2 | T2 − T1 = | 00:48.57 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| M3 | T3 − T2 = | 01:00.84 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| Toàn luồng | T4 − T0 = | 02:18.75 | ☐ | |
| Tự kiểm tra | T4 − T3 = | | | |

HT: Hoàn thành.

### I4.4 Nhật ký sự kiện

Mỗi dòng một sự kiện. Cột "Mã" dùng bảng mã ở I4.5.

| Mốc video | Chặng | Mã | Mô tả ngắn (thấy gì, ở màn hình nào) | Trích lời think-aloud (nếu có; ghi "(ghi tay)" nếu không có âm thanh) |
|---|---|---|---|---|
| | | | | |

### I4.5 Bảng mã sự kiện

| Mã | Ý nghĩa | Số liệu |
|---|---|---|
| `La` | Bấm sai chỗ khi tìm đường, kể cả vào khối "Import sản phẩm từ CSV" | D3 (a) |
| `Lb` | Hệ thống báo lỗi nhập liệu (ghi nguyên văn thông báo) | D3 (b) |
| `Lc` | Lưu sản phẩm với danh mục không phải "Loa Bluetooth" | D3 (c) |
| `Ld` | Nhập giá sai (thừa hoặc thiếu chữ số 0, gõ dấu chấm) | D3 (d) |
| `Le` | Phải làm lại một thao tác (tạo trùng danh mục, xoá nhầm, sửa lại sản phẩm...) | D3 (e) |
| `DD` | Do dự rõ: Dừng lâu, nói không biết làm gì | D5 |
| `TS` | Tự phát hiện và tự sửa lỗi của mình | D3, Q6 |
| `TK` | Tự kiểm tra kết quả (ghi kiểm bằng cách nào) | D7 |
| `PN` | Than phiền, bực bội, nói giao diện khó hiểu | D10 |
| `KH` | Khen, nói chỗ nào dễ | D10 |
| `HO` | Hỏi người điều phối (ghi câu hỏi và câu trả lời) | Mục 5 kịch bản |
| `CT0` đến `CT3` | Nhắc think-aloud (mức 0, không tính) hoặc can thiệp mức 1 đến 3 (`02_scenario.md` mục 5); ghi lý do và câu đã nói | D4 (chỉ mức 1 đến 3) |
| `MT` | Vấn đề môi trường (URL ảnh hỏng, SUT lỗi, mất kết nối) | Ghi chú phiên |

### I4.6 Kiểm kết quả sau phiên (D6)

Phiên trực tiếp: Làm trong lúc người tham gia điền Google Form SUS trên điện thoại (I5). Phiên từ xa: Làm sau khi kết thúc cuộc gọi. Cả hai trường hợp đều làm **trước khi reset DB**.

| Mục kiểm | Kết quả | Cách kiểm |
|---|---|---|
| Có đúng một danh mục "Loa Bluetooth" (đúng chính tả) | ☐ Đạt ☐ Không | Bảng "Quản lý Danh mục" |
| Có sản phẩm "Loa Bluetooth JBL Flip 6" | ☐ Đạt ☐ Không | Bảng sản phẩm |
| Giá hiện `2990000 ₫` | ☐ Đạt ☐ Không (giá thấy: ____) | Bảng sản phẩm |
| Ảnh hiện được | ☐ Đạt ☐ Không | Bảng sản phẩm |
| Sản phẩm thuộc danh mục "Loa Bluetooth" | ☐ Đạt ☐ Không (danh mục thấy: ____) | Form "Sửa" của sản phẩm trong Admin (chốt ở pilot) |

### I4.7 Ghi chú cuối phiên

Ba điểm vướng nổi bật nhất của phiên này, để hỏi kỹ ở câu hỏi mở (I6.3):

1.
2.
3.

---

## I5. Thang đo SUS sau phiên

Thang đo: **SUS** (QĐ5, SV chốt). Bản dịch dưới đây là **bản dịch của AI**, cần kiểm câu chữ ở pilot.

Cách thu (QĐ-I3, SV chốt): Áp dụng cho mọi phiên, trực tiếp và từ xa. Sau khi người tham gia nói "Tôi làm xong rồi" (T4), họ **tự điền một Google Form** gồm 10 câu SUS. Người điều phối không đọc câu hỏi, không nhìn màn hình của người tham gia trong lúc điền, để câu trả lời không bị ảnh hưởng bởi việc nói trước mặt người làm bài.

Cách làm Google Form (SV tạo; nội dung lấy đúng bảng dưới):

| Mục | Thiết lập |
|---|---|
| Câu đầu | "Mã người tham gia" (câu trả lời ngắn, bắt buộc). Người điều phối đọc mã P<n> cho người tham gia tự gõ. Sau khi người tham gia gửi, người điều phối mở tab câu trả lời kiểm dòng mới nhất có đúng mã không; gõ sai thì ghi lại trong `notes.md` và sửa mã khi chép sang `scale.md`, dựa vào dấu thời gian |
| 10 câu SUS | Mỗi câu một thang tuyến tính 1 đến 5, nhãn hai đầu "Rất không đồng ý" (1) và "Rất đồng ý" (5); đúng thứ tự và câu chữ như bảng dưới; **bắt buộc trả lời** |
| Thông tin cá nhân | Không có câu hỏi tên, số điện thoại, email. Tắt "Thu thập địa chỉ email"; không bắt đăng nhập (WORKFLOW mục 1.5) |
| Hiển thị | Không trộn thứ tự câu; tắt "Xem tóm tắt câu trả lời" để người tham gia không thấy câu trả lời của người khác |
| Pilot | `PL` cũng điền form này với mã `PL`; khi tổng hợp thì loại dòng `PL` |

Cách đưa form:

| Hình thức phiên | Cách đưa |
|---|---|
| Trực tiếp | Gửi link form qua tin nhắn (kênh đã dùng khi xin đồng ý) và đọc mã P<n> cho người tham gia; người tham gia điền trên **điện thoại của mình**. Máy của người điều phối được giải phóng: Trong lúc người tham gia điền, người điều phối làm I4.6 (kiểm D6), ghi I4.7, rồi reset DB cho phiên sau, không để người tham gia nhìn thấy trang Admin trong lúc kiểm |
| Từ xa | Gửi link form qua tin nhắn; người tham gia điền trên thiết bị của mình (có thể dừng điều khiển máy từ xa trong lúc điền) |

Sau phiên: Mở bảng câu trả lời của form, chép **nguyên văn** dòng của mã P<n> (dấu thời gian và 10 câu trả lời) vào `sessions/P<n>/scale.md`. `04_scores.md` tính điểm từ các file `scale.md` (hoặc từ file xuất của form), ghi rõ cách tính.

Đầu form (người tham gia tự đọc):

> Bạn đánh giá **trang quản trị bạn vừa dùng**. Với mỗi câu, chọn mức đồng ý từ 1 (Rất không đồng ý) đến 5 (Rất đồng ý). Trả lời theo cảm nhận đầu tiên, không cần suy nghĩ lâu. Câu nào bạn thấy không trả lời được thì chọn 3.

Lời người điều phối nói khi đưa form:

> Bây giờ mình nhờ bạn điền một phiếu ngắn 10 câu về trang bạn vừa dùng. Mình vừa gửi link qua tin nhắn, bạn mở trên điện thoại nhé. Ô đầu tiên bạn ghi mã **P<n>** [đọc mã của phiên]. Bạn cứ điền theo cảm nhận của mình, mình không xem trong lúc bạn điền.

| # | Câu | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| 1 | Tôi nghĩ tôi sẽ muốn dùng trang quản trị này thường xuyên (nếu tôi bán hàng trên cửa hàng này). | ☐ | ☐ | ☐ | ☐ | ☐ |
| 2 | Tôi thấy trang quản trị này phức tạp một cách không cần thiết. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 3 | Tôi thấy trang quản trị này dễ dùng. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 4 | Tôi nghĩ tôi sẽ cần người rành kỹ thuật giúp thì mới dùng được trang quản trị này. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 5 | Tôi thấy các chức năng của trang quản trị này được kết nối với nhau tốt. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 6 | Tôi thấy trang quản trị này có quá nhiều chỗ không nhất quán. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 | Tôi nghĩ hầu hết mọi người sẽ học dùng trang quản trị này rất nhanh. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 8 | Tôi thấy trang quản trị này rất rườm rà, khó thao tác. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 9 | Tôi cảm thấy rất tự tin khi dùng trang quản trị này. | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 | Tôi phải học nhiều thứ trước khi có thể bắt đầu dùng trang quản trị này. | ☐ | ☐ | ☐ | ☐ | ☐ |

1 = Rất không đồng ý, 2 = Không đồng ý, 3 = Trung lập, 4 = Đồng ý, 5 = Rất đồng ý.

Cách tính (Brooke, 1996), ghi lại trong `04_scores.md`:

- Câu lẻ (1, 3, 5, 7, 9): Điểm câu = câu trả lời − 1.
- Câu chẵn (2, 4, 6, 8, 10): Điểm câu = 5 − câu trả lời.
- Điểm SUS = tổng 10 điểm câu × 2,5 (từ 0 đến 100).
- Giữ nguyên thứ tự và câu chữ (câu chẵn là câu phủ định); không đảo chiều thang.

Mẫu `scale.md`:

| Mã | Dấu thời gian (Google Form) |
|---|---|
| P__ | |

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Câu trả lời | | | | | | | | | | |

---

## I6. Câu hỏi mở

Hỏi **sau** thang đo (đề §6 Task 2). Câu chữ trung lập, không gợi ý câu trả lời (slide AI-First: "keep wording neutral"); hỏi trong bối cảnh nhiệm vụ vừa làm. Ghi câu trả lời theo ý vào `probe.md`, không ghi tên.

### I6.1 Câu hỏi bắt buộc (hỏi mọi người, theo thứ tự)

| # | Khía cạnh (đề) | Câu hỏi | Hỏi thêm nếu cần | Liên kết |
|---|---|---|---|---|
| C1 | Mở đầu | Bạn kể lại giúp mình bạn đã làm nhiệm vụ này như thế nào? | | Toàn luồng |
| C2 | Clarity | Lúc mới vào trang quản trị, bạn tìm chỗ tạo danh mục bằng cách nào? | Có chỗ nào bạn không chắc nên bấm vào đâu không? | Q1, Q3 |
| C3 | Clarity | Trong form đăng sản phẩm, có ô nào bạn không chắc phải điền gì, hoặc không biết có bắt buộc không? | Bạn dựa vào đâu để biết ô đó cần điền gì? | Q5, Q9 |
| C4 | Error recovery | Trong lúc làm, có lúc nào bạn làm sai hoặc phải làm lại không? Lúc đó bạn nhận ra bằng cách nào, và sửa ra sao? | Nếu không có lúc nào: Nếu bạn lỡ nhập sai giá hoặc chọn nhầm danh mục, bạn nghĩ mình sẽ phát hiện và sửa thế nào? | Q6, D3 |
| C5 | Speed | Bạn thấy làm việc này nhanh hay chậm so với cách bạn vẫn đăng sản phẩm? | Phần nào làm bạn mất thời gian nhất? | Q8 |
| C6 | Trust | Sau khi tạo danh mục, làm sao bạn biết danh mục đã được tạo? | Bạn chắc chắn đến mức nào? | Q2 |
| C7 | Trust | Làm sao bạn biết sản phẩm đã vào đúng danh mục Loa Bluetooth? | Nếu cần chắc chắn hơn, bạn sẽ kiểm ở đâu? | Q4, Q7 (QĐ1 của kịch bản) |
| C8 | Tổng kết | Điều gì trên trang này bạn thấy dễ dùng nhất? | | Slide S13, câu dạng điền |
| C9 | Tổng kết | Nếu được sửa một điều trên trang này, bạn sẽ sửa gì? | | Đề xuất cải tiến |

### I6.2 Câu hỏi theo tình huống (chỉ hỏi khi đã quan sát thấy)

Dạng branching theo slide S13: Chỉ hỏi khi phiếu ghi chú có mã tương ứng.

| Khi thấy | Câu hỏi | Liên kết |
|---|---|---|
| `La` ở khối "Import sản phẩm từ CSV" | Mình thấy bạn có xem phần nhập từ file ở đầu trang sản phẩm. Lúc đó bạn nghĩ phần đó dùng để làm gì? | Q3 |
| `Lc` (lưu với danh mục khác) | Lúc bấm lưu, bạn có để ý ô danh mục đang chọn gì không? | Q4 |
| `Ld` (giá sai hoặc gõ dấu chấm) | Bạn thấy ô giá thế nào khi nhập số tiền? | Q5, Q6 |
| `Lb` (hệ thống báo lỗi) | Thông báo lúc đó nói gì với bạn? Nó có giúp bạn biết phải sửa gì không? | Q6 |
| `DD` lâu ở trang đăng nhập | Lúc ở trang đăng nhập, bạn đang nghĩ gì? | Q9 |
| `TK` (có tự kiểm tra) | Mình thấy bạn có kiểm lại sau khi lưu. Điều gì khiến bạn muốn kiểm lại? | Q2, Q7 |
| Không có `TK` | (Đã có ở C6, C7; không hỏi thêm) | |
| Có can thiệp (`CT1` đến `CT3`) | Lúc mình nhắc, bạn đang bị vướng ở đâu? | D4 |

### I6.3 Câu hỏi về điểm vướng của phiên

Với mỗi điểm ở I4.7 chưa được hỏi qua I6.1, I6.2, và mỗi đoạn người tham gia im lặng lâu (I2.4): Nhắc lại khoảnh khắc đó một cách trung lập ("Ở đoạn [mô tả], mình thấy bạn dừng lại một lúc...") rồi hỏi "Lúc đó bạn đang nghĩ gì?". Phần này bù cho những đoạn think-aloud ít.

### I6.4 Mẫu `probe.md`

| Câu | Ý chính của câu trả lời | Trích nguyên văn đáng chú ý |
|---|---|---|
| C1 | | |
| ... | | |

---

## I7. Lời kết thúc

> Cảm ơn bạn rất nhiều. Những gì bạn gặp hôm nay giúp mình tìm ra chỗ nào trên trang cần sửa. Một lần nữa, những chỗ khó là vấn đề của trang web, không phải của bạn.
>
> Như đã nhắn, giảng viên hoặc trợ giảng có thể gọi cho bạn trong vài tuần tới để xác nhận bạn đã tham gia. Nếu sau này bạn muốn rút lại dữ liệu của mình, bạn cứ nhắn mình.

[Dừng quay. Phiên từ xa: Làm I4.6 (kiểm D6) trước khi reset DB. Phiên trực tiếp: I4.6 và reset DB đã làm trong lúc người tham gia điền form.]

---

## 8. Cần kiểm ở pilot

Pilot đã chạy ngày 2026-11-10; kết quả từng điểm ở `pilot/notes.md` mục 8.2. Các thay đổi sau pilot ghi ở bảng "Thay đổi so với bản AI" (căn cứ: pilot).

| Điểm cần kiểm | Vì sao |
|---|---|
| Câu chữ bản dịch SUS có câu nào người pilot hỏi lại hoặc hiểu sai không | Bản dịch của AI, chưa kiểm |
| Tin nhắn I2.1 có rõ không, người pilot trả lời được từng ý không | QĐ-I1 |
| Ngưỡng khoảng 20 giây im lặng trước khi nhắc think-aloud có hợp lý không | I2.4 |
| Thời lượng I2.2 đến I3, I5, I6 so với test plan mục 5 (3 đến 5, 2 đến 3, 2 đến 3, 5 đến 10 phút) | Nếu quá dài thì rút câu ở I6.1 |
| Google Form: Người pilot gõ mã `PL` đúng; form không thu email; câu trả lời của `PL` hiện đúng trong bảng câu trả lời | QĐ-I3 |
| Người điều phối kịp ghi I4.4 trong lúc quan sát không | Nếu không kịp thì chỉ ghi mốc và mã, điền mô tả khi xem lại video |
| Câu C4 khi người tham gia không gặp lỗi có quá giả định không | Có thể bỏ phần hỏi thêm |
| Trong lúc người pilot điền form trên điện thoại, người điều phối có kịp kiểm D6 và reset DB không | I5, I4.6 |

---

## 9. Tổng hợp các quyết định

| Mã | Quyết định | Trạng thái |
|---|---|---|
| QĐ5 | SUS hay UEQ-S | Đã chốt: SUS |
| QĐ-I1 | Cách lưu bằng chứng đồng ý | Đã chốt: Tin nhắn xin đồng ý trước ngày phiên, chụp màn hình câu trả lời, lưu ngoài thư mục `Homeworks/HW03/`; xác nhận lại bằng lời ở đầu phiên |
| QĐ-I2 | Có tập think-aloud 1 phút trước nhiệm vụ không | Đã chốt: Không tập; người nói ít xử lý theo I2.4 |
| QĐ-I3 | Cách người tham gia trả lời thang đo | Đã chốt: Mọi người tự điền Google Form sau T4 trên thiết bị của mình (phiên trực tiếp: điện thoại, link gửi qua tin nhắn), người điều phối không xem; chép nguyên văn vào `scale.md` |
| (B7) | Giữ câu B7 về thiết bị thường dùng để đăng sản phẩm không | Đã chốt: Giữ |

---

## Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục I2 (đầu mục) | Thêm giải thích: Lời dặn là văn bản đọc cho người tham gia nghe để họ nắm tình hình và để các phiên giống nhau; không cần ghi âm riêng để nộp | Mơ hồ | | SV hỏi "đọc nguyên văn" là để ghi âm nộp hay để nói với người tham gia; bản AI không nói rõ mục đích |
| Mục I2.1 (mới), I2.2, I1 dòng 1 (QĐ-I1) | Xin đồng ý bằng tin nhắn trước ngày phiên, chụp màn hình câu trả lời; I2.2 chỉ xác nhận lại bằng lời. Thay hai phương án của AI (đồng ý bằng lời trong video; phiếu giấy có chữ ký) | Quyết định của SV | | SV đề xuất. Dùng được cho cả phiên từ xa; không cần quay trước khi có đồng ý |
| Mục I2.1, lưu bằng chứng | Ghi rõ ảnh chụp tin nhắn có tên và ảnh đại diện nên lưu ngoài thư mục `Homeworks/HW03/`, không commit, không đưa vào AI | Thiếu | Prompt: Cách xin đồng ý qua tin nhắn do SV đưa ra sau khi AI viết, nên bản AI chưa xét chỗ lưu ảnh chụp tin nhắn (có tên và ảnh đại diện; `.gitignore` của repo chỉ chặn file video) | WORKFLOW mục 1.5; `.gitignore` |
| Mục I2.4 (mới) | Thêm cách xử lý khi think-aloud không đủ: Người nói ít (nhắc mức 0 khoảng 20 giây, hỏi lại ở I6.3), người rành công nghệ làm nhanh, người không đồng ý ghi âm (ghi tay ngay lúc nghe, đánh dấu "(ghi tay)") | Thiếu | Giới hạn model: AI có đủ thông tin (ghi âm không bắt buộc ở test plan mục 4) nhưng không nghĩ tới việc think-aloud sẽ không thu được khi không có âm thanh | SV hỏi ba tình huống này |
| Mục I4.1 | Thêm dòng "Video có âm thanh"; dòng đồng ý dẫn tới tin nhắn I2.1 | Thiếu | Giới hạn model: Như dòng trên | I2.4 |
| Mục I4.4, I4.5 | Cột trích lời thêm "(ghi tay)"; mã `CT0` ghi rõ là nhắc think-aloud, không tính vào D4 | Mơ hồ | | Bản AI gộp `CT0` với can thiệp mà không nói rõ chỉ mức 1 đến 3 được tính |
| Mục I3, B7 | Giữ câu B7, bỏ chữ "Đề xuất thêm của AI" khỏi câu hỏi, ghi trong ghi chú là SV giữ | Quyết định của SV | | SV giữ theo gợi ý của AI |
| Mục I5 (QĐ5) | Chốt SUS; bỏ phần UEQ-S và bảng so sánh (bản đầy đủ vẫn ở `ai_raw/T2_instruments.md`) | Quyết định của SV | | SV chọn SUS theo gợi ý của AI |
| Mục I5 (QĐ-I3) | Mọi người tự điền Google Form sau T4; người điều phối không đọc câu, không xem lúc điền. Thêm thiết lập form (mã điền sẵn, câu bắt buộc, không thu email, không trộn câu), cách đưa form theo hình thức phiên, cách chép sang `scale.md`; sửa lời hướng dẫn; thêm dấu thời gian vào mẫu `scale.md` | Quyết định của SV | | SV chọn để câu trả lời không bị ảnh hưởng khi nói trước mặt người điều phối, và để tổng hợp từ form. Gợi ý của AI là phiếu giấy (trực tiếp) và đọc từng câu (từ xa) |
| Mục I5, cách thu | Bỏ hướng "người điều phối đọc từng câu" (SV đã cân nhắc trước khi chuyển sang Google Form) | Thiếu | Giới hạn model: Bản AI đưa phương án "đọc từng câu" mà không nêu rằng trả lời trước mặt người điều phối có thể làm điểm cao hơn | SV đổi sang tự điền Google Form sau khi thấy hạn chế này |
| Mục I2.3 (QĐ-I2) | Chốt không tập think-aloud trước nhiệm vụ; dẫn tới I2.4 | Quyết định của SV | | SV chọn "Không cần"; trùng gợi ý của AI |
| Mục I1 | Dòng 12 mới: Kiểm link Google Form và mã điền sẵn trước phiên | Thiếu | Prompt: Khi AI viết, chưa có quyết định dùng Google Form | QĐ-I3 |
| Mục I6.3 | Thêm việc hỏi lại các đoạn im lặng lâu để bù think-aloud ít | Thiếu | Giới hạn model: Như dòng I2.4 | I2.4 |
| Mục I1 | Dòng 1 mới (đã có tin nhắn đồng ý); dòng 10: Thu micro chỉ khi người tham gia đồng ý ghi âm | Thiếu | Prompt: Khi AI viết, chưa có QĐ-I1 | QĐ-I1 |
| Mục 8 | Bỏ dòng về UEQ-S; thêm kiểm tin nhắn đồng ý, ngưỡng nhắc think-aloud, Google Form | Quyết định của SV | | QĐ5, QĐ-I1, QĐ-I3, I2.4 |
| Mục I4.6 | Cách kiểm danh mục chốt là form "Sửa" trong Admin; bỏ lựa chọn trang chi tiết trên web bán hàng | Quyết định của SV | | Pilot: Kiểm bằng form "Sửa" được, không cần chạy web bán hàng (`pilot/notes.md` mục 6, 8.1) |
| Mục I4.3 | Thời gian chuẩn đổi từ ×5 sang ×3: M1 00:21.09, M2 00:48.57, M3 01:00.84, toàn luồng 02:18.75 | Quyết định của SV | | Pilot: SV giảm bội số sau khi người pilot làm toàn luồng 01:24 (`02_scenario.md` mục 4.4; `pilot/notes.md` mục 4) |
| Mục I1 dòng 14 | Thêm việc đặt bộ gõ tiếng Việt về chế độ tiếng Anh trước phiên | Quyết định của SV | | Pilot: Bộ gõ đang bật làm người pilot gõ sai email ở M1 (`pilot/notes.md` mục 5, 8.1) |
| Mục I2.1 | Thời lượng buổi thử trong tin nhắn đổi từ "30 đến 40 phút" thành "15 đến 30 phút" | Quyết định của SV | | Pilot: Cả phiên 16 phút (`pilot/notes.md` mục 2, 8.2); test plan mục 5 đổi thành 15 đến 25 phút, cộng thời gian chuẩn bị và trò chuyện |
| Mục 8 | Thêm dòng dẫn tới kết quả pilot | Quyết định của SV | | Pilot đã chạy (`pilot/notes.md` mục 8.2) |
| Mục I5, I1 dòng 12, mục 8 | Bỏ link điền sẵn mã; người điều phối đọc mã P<n> cho người tham gia tự gõ, kiểm lại mã trong tab câu trả lời sau khi gửi | Quyết định của SV | | SV chọn cách đơn giản hơn; không phải tạo 8 link riêng |
| Mục I5, I4.6, I7, I1 dòng 12, mục 8, 9 | Phiên trực tiếp: Gửi link form qua tin nhắn, người tham gia điền trên điện thoại của mình (thay cho đưa máy của người điều phối); trong lúc đó người điều phối kiểm D6, ghi I4.7, reset DB | Quyết định của SV | | Máy của người điều phối không bị chiếm, nên phần kiểm và reset chạy song song với việc điền form, rút ngắn thời gian giữa hai phiên |
