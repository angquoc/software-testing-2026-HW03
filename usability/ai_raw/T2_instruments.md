# T2 instruments: Bộ công cụ cho phiên usability luồng FL-05 (bản AI)

- Bước: `[T2][instruments]`
- Thời gian tạo: 2026-11-09 14:27
- Công cụ: Claude Code (Claude Opus 5.5)

---

## 0. Căn cứ và danh sách công cụ

| Nguồn | Dùng cho |
|---|---|
| Đề §6 Task 2 | Thang đo chuẩn sau phiên (SUS hoặc UEQ-S); câu hỏi mở tối thiểu về clarity, error recovery, speed, trust; mở đầu "đang kiểm thử sản phẩm, không kiểm tra bạn", think-aloud; ghi chú có cấu trúc về chỗ vướng, lỗi, do dự, lời than phiền |
| `01_test_plan.md` mục 4 (phiếu thông tin), mục 5 (trình tự phiên), mục 7 (vai trò người điều phối), mục 8 (D1 đến D10) | Nội dung phiếu thông tin, phiếu ghi chú, liên kết câu hỏi mở với Q1 đến Q10 |
| `02_scenario.md` mục 4.5 (mốc T0 đến T4), mục 5 (can thiệp), mục 6 (tình huống đặc biệt), mục 8 (QĐ1) | Cấu trúc phiếu ghi chú, mã sự kiện, câu hỏi "Làm sao bạn biết..." |
| WORKFLOW mục 1.5, 3.2.2 | Riêng tư (chỉ dùng mã P1 đến P7, `PL`); cấu trúc hồ sơ phiên `notes.md`, `scale.md`, `probe.md` |
| Slide S13 "Questionnaires", slide AI-First "What to probe for preference" | Dạng câu hỏi (Likert, điền, branching); hỏi trong bối cảnh nhiệm vụ vừa làm, câu chữ trung lập |
| Template `UsabilityTestingTemplate.doc` | Phiếu thông tin người tham gia, lời đồng ý, pre-test và post-test questionnaire |

Bộ công cụ gồm:

| Mã | Công cụ | Dùng lúc | Lưu ở |
|---|---|---|---|
| I1 | Danh sách chuẩn bị phiên | Trước phiên | Người điều phối dùng, không lưu theo phiên |
| I2 | Lời dặn mở đầu và lời xin đồng ý | Bước 2 của phiên | Đọc theo văn bản; việc đồng ý ghi theo QĐ-I1 |
| I3 | Phiếu thông tin trước phiên | Bước 3 | `sessions/P<n>/notes.md` (phần đầu) |
| I4 | Phiếu ghi chú quan sát | Bước 4 | `sessions/P<n>/notes.md` |
| I5 | Thang đo sau phiên | Bước 5 | `sessions/P<n>/scale.md` |
| I6 | Câu hỏi mở | Bước 6 | `sessions/P<n>/probe.md` |
| I7 | Lời kết thúc | Bước 7 | Đọc theo văn bản |

---

## I1. Danh sách chuẩn bị phiên

Lấy từ `01_test_plan.md` mục 6, 7 và `02_scenario.md` mục 3. Đánh dấu từng dòng trước mỗi phiên.

| # | Việc | Xong |
|---|---|---|
| 1 | Phiên trước (nếu có): Đã kiểm D6 và ghi vào `notes.md` của phiên trước | ☐ |
| 2 | Reset DB: `cd backend && node database.js` | ☐ |
| 3 | Backend (`localhost:3000`) và Web Admin (`localhost:5174`) đang chạy | ☐ |
| 4 | Trình duyệt dùng hồ sơ riêng (hoặc chế độ khách), không có mật khẩu đã lưu, tắt dịch tự động và tiện ích chèn gợi ý | ☐ |
| 5 | Trình duyệt mở `http://localhost:5174`, trang "Admin Login", một tab, zoom 100% | ☐ |
| 6 | URL ảnh trong phiếu dữ liệu mở được trong ngày | ☐ |
| 7 | Phiên trực tiếp: File kịch bản và phiếu dữ liệu mở sẵn ở cửa sổ riêng. Phiên từ xa: Nội dung đã sẵn sàng để gửi qua tin nhắn | ☐ |
| 8 | Phiên từ xa: Ứng dụng gọi video đã cấp quyền điều khiển máy, đã thử với người tham gia | ☐ |
| 9 | Phần mềm quay màn hình có thu micro, đã thử ghi vài giây và nghe lại | ☐ |
| 10 | Có sẵn I2 đến I7 (bản in hoặc file) và đồng hồ hiển thị giờ để đối chiếu mốc video | ☐ |
| 11 | Ghi môi trường vào I4: Trình duyệt và phiên bản, OS, độ phân giải, hình thức phiên | ☐ |

---

## I2. Lời dặn mở đầu và lời xin đồng ý

Người điều phối đọc nguyên văn để mọi phiên giống nhau. Phần trong `[ ]` là ghi chú cho người điều phối, không đọc.

### I2.1 Trước khi bật quay

> Cảm ơn bạn đã dành thời gian. Mình là [tên người điều phối], sinh viên môn Kiểm thử phần mềm. Hôm nay mình đang kiểm thử một trang quản trị bán hàng tên là EShop, để tìm ra chỗ nào trên trang khó dùng.
>
> Mình muốn nói rõ: **Mình đang kiểm tra trang web, không phải kiểm tra bạn.** Không có câu trả lời đúng hay sai. Nếu bạn thấy chỗ nào khó, đó chính là thứ mình cần tìm, và đó là lỗi của trang web chứ không phải của bạn.
>
> Phiên này kéo dài khoảng 30 đến 40 phút. Bạn có thể dừng bất cứ lúc nào mà không cần nói lý do.

### I2.2 Xin đồng ý

> Để mình xem lại sau, mình xin phép **quay lại màn hình máy tính** trong lúc bạn làm, và **ghi âm giọng nói** nếu bạn đồng ý. Mình không quay mặt bạn.
>
> Video chỉ dùng cho bài tập này: Mình xem lại để ghi chú, và nộp kèm bài cho giảng viên chấm. Video không đăng lên mạng. Trong mọi ghi chép, bạn được gọi bằng một mã (ví dụ P3), không ghi tên.
>
> Giảng viên hoặc trợ giảng có thể gọi điện cho bạn để xác nhận bạn đã tham gia. Số điện thoại hoặc Zalo của bạn chỉ để trong danh sách người tham gia, không để trong ghi chép của phiên.
>
> Bạn có đồng ý:
> 1. Cho quay màn hình không?
> 2. Cho ghi âm giọng nói không?
> 3. Để giảng viên hoặc trợ giảng gọi xác minh không?

[Ghi câu trả lời ba ý. Không đồng ý ý 1 hoặc ý 3 thì không chạy phiên, vì đó là tiêu chí bắt buộc ở test plan mục 4. Không đồng ý ý 2 thì vẫn chạy, ghi chú tay kỹ hơn.]

⏳ Quyết định để mở (QĐ-I1): Cách lưu bằng chứng đồng ý.

| Phương án | Cách làm | Ưu điểm | Nhược điểm |
|---|---|---|---|
| A | Bật quay **trước** I2.2, người tham gia nói "Tôi đồng ý" trong video; ghi thêm cột đồng ý trong `participants.md` | Không có giấy tờ chứa tên; bằng chứng nằm trong video gốc (không đưa vào repo, không đưa vào AI) | Giọng nói có trong video ngay cả khi người tham gia không đồng ý ghi âm phần còn lại; phải tắt micro sau đó nếu họ từ chối ý 2 |
| B | Phiếu đồng ý giấy có tên và chữ ký, SV giữ riêng (không chụp, không đưa vào repo); ghi cột đồng ý trong `participants.md` | Giống template của môn (consent form) | Tạo thêm một giấy tờ có thông tin cá nhân phải tự giữ; khó làm với phiên từ xa |

### I2.3 Giới thiệu think-aloud (sau khi bật quay)

> Trong lúc làm, mình nhờ bạn **vừa làm vừa nói ra những gì bạn đang nghĩ**: Bạn đang tìm gì, định bấm vào đâu, thấy chỗ nào lạ hay khó hiểu. Cứ nói tự nhiên, như đang nói một mình.
>
> Trong lúc bạn làm, mình sẽ không giải thích hay chỉ cách, vì mình muốn biết một người lần đầu dùng trang này sẽ làm thế nào. Nếu bạn im lặng lâu, mình có thể hỏi "Bạn đang nghĩ gì?" để nhắc bạn nói tiếp. Bạn có câu hỏi gì trước khi bắt đầu không?

⏳ Quyết định để mở (QĐ-I2): Có cho người tham gia tập think-aloud 1 phút với một việc không liên quan (ví dụ tìm một trang tin tức trên trình duyệt) trước khi vào nhiệm vụ không. Tập giúp người tham gia nói tự nhiên hơn, nhưng thêm thời gian và phải dùng một trang khác ngoài EShop.

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
| B7 | (Đề xuất thêm của AI) Bạn thường đăng sản phẩm bằng thiết bị nào? | ☐ Chủ yếu điện thoại ☐ Chủ yếu máy tính ☐ Cả hai |

Ghi chú: B7 không có trong test plan. AI đề xuất vì nhiều người bán quen đăng sản phẩm bằng ứng dụng trên điện thoại; khi phân tích, điều này có thể giải thích vì sao một người vướng ở form trên máy tính. SV quyết định giữ hay bỏ.

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
| Đồng ý | Quay màn hình ☐ Ghi âm ☐ Gọi xác minh ☐ |
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

Thời gian chuẩn lấy từ `02_scenario.md` mục 4.4.

| Chặng | Thời gian (tính từ mốc) | Thời gian chuẩn | Vượt chuẩn | Kết quả |
|---|---|---|---|---|
| M1 | T1 − T0 = | 00:35.15 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| M2 | T2 − T1 = | 01:20.95 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| M3 | T3 − T2 = | 01:41.40 | ☐ | ☐ Tự HT ☐ HT nhờ can thiệp ☐ Không HT |
| Toàn luồng | T4 − T0 = | 03:51.25 | ☐ | |
| Tự kiểm tra | T4 − T3 = | | | |

### I4.4 Nhật ký sự kiện

Mỗi dòng một sự kiện. Cột "Mã" dùng bảng mã ở I4.5.

| Mốc video | Chặng | Mã | Mô tả ngắn (thấy gì, ở màn hình nào) | Trích lời think-aloud (nếu có) |
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
| `CT0` đến `CT3` | Can thiệp theo mức 0 đến 3 (`02_scenario.md` mục 5); ghi lý do và câu đã nói | D4 |
| `MT` | Vấn đề môi trường (URL ảnh hỏng, SUT lỗi, mất kết nối) | Ghi chú phiên |

### I4.6 Kiểm kết quả sau phiên (D6)

Làm sau khi người tham gia ra về (hoặc kết thúc cuộc gọi), **trước khi reset DB**.

| Mục kiểm | Kết quả | Cách kiểm |
|---|---|---|
| Có đúng một danh mục "Loa Bluetooth" (đúng chính tả) | ☐ Đạt ☐ Không | Bảng "Quản lý Danh mục" |
| Có sản phẩm "Loa Bluetooth JBL Flip 6" | ☐ Đạt ☐ Không | Bảng sản phẩm |
| Giá hiện `2990000 ₫` | ☐ Đạt ☐ Không (giá thấy: ____) | Bảng sản phẩm |
| Ảnh hiện được | ☐ Đạt ☐ Không | Bảng sản phẩm |
| Sản phẩm thuộc danh mục "Loa Bluetooth" | ☐ Đạt ☐ Không (danh mục thấy: ____) | ☐ Trang chi tiết trên web bán hàng ☐ Form "Sửa" trong Admin |

### I4.7 Ghi chú cuối phiên

Ba điểm vướng nổi bật nhất của phiên này, để hỏi kỹ ở câu hỏi mở (I6.3):

1.
2.
3.

---

## I5. Thang đo sau phiên

⏳ Quyết định để mở (QĐ5, từ test plan): SUS hay UEQ-S. AI viết sẵn cả hai để SV chọn một.

| Tiêu chí | SUS | UEQ-S |
|---|---|---|
| Số câu | 10 câu, thang 5 mức | 8 cặp tính từ, thang 7 mức |
| Kết quả | Một điểm 0 đến 100 | Hai điểm: Pragmatic (dễ dùng, hiệu quả) và Hedonic (thú vị, mới mẻ), mỗi điểm từ −3 đến +3, cùng điểm tổng |
| Cách tính | Công thức cố định, dễ làm bằng bảng tính | Đổi 1 đến 7 thành −3 đến +3 rồi lấy trung bình; diễn giải cần bảng benchmark của nhóm tác giả UEQ |
| Khớp với câu hỏi của test plan | Q10 (đánh giá chung về mức dễ dùng) | Q10; phần Hedonic ít liên quan tới các câu hỏi Q1 đến Q9 (đều về dễ dùng) |
| Thời gian | Khoảng 2 phút | Khoảng 1 phút |

Gợi ý của AI: **SUS**. Lý do: Các câu hỏi của test plan đều xoáy vào mức dễ dùng (pragmatic); SUS cho một con số dễ tính, dễ giải thích trong báo cáo, và test plan mục 8.2 đã nêu mốc tham khảo 68. Cả hai bản dịch dưới đây là **bản dịch của AI**, cần kiểm câu chữ ở pilot.

⏳ Quyết định để mở (QĐ-I3): Cách người tham gia điền thang đo. Phiên trực tiếp: Phiếu giấy hay biểu mẫu trên máy. Phiên từ xa: Biểu mẫu online (không hỏi tên, chỉ có ô mã) hay người điều phối đọc từng câu và ghi lại. Dù cách nào, câu trả lời chép nguyên văn vào `scale.md`.

### I5.1 Phương án SUS

Hướng dẫn đọc cho người tham gia:

> Bây giờ mình nhờ bạn đánh giá **trang quản trị bạn vừa dùng**. Với mỗi câu, bạn chọn mức đồng ý từ 1 (Rất không đồng ý) đến 5 (Rất đồng ý). Bạn chọn theo cảm nhận đầu tiên, không cần suy nghĩ lâu. Nếu câu nào bạn thấy không trả lời được, hãy chọn 3.

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
- Giữ nguyên thứ tự và câu chữ (câu chẵn là câu phủ định); không đảo chiều thang trên phiếu.

Mẫu `scale.md`:

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Câu trả lời | | | | | | | | | | |

### I5.2 Phương án UEQ-S

Hướng dẫn đọc cho người tham gia:

> Bây giờ mình nhờ bạn đánh giá **trang quản trị bạn vừa dùng**. Mỗi dòng có hai từ trái nghĩa. Bạn chọn một ô gần với từ mô tả đúng hơn cảm nhận của bạn. Ô ở giữa là trung lập. Chọn theo cảm nhận đầu tiên.

| # | Bên trái | 1 | 2 | 3 | 4 | 5 | 6 | 7 | Bên phải |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Cản trở | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Hỗ trợ |
| 2 | Phức tạp | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Dễ dàng |
| 3 | Kém hiệu quả | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Hiệu quả |
| 4 | Khó hiểu | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Rõ ràng |
| 5 | Nhàm chán | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Hấp dẫn |
| 6 | Không thú vị | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Thú vị |
| 7 | Thông thường | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Sáng tạo |
| 8 | Quen thuộc | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | Đi đầu |

Cách tính (Schrepp và cộng sự, 2017):

- Đổi câu trả lời 1 đến 7 thành −3 đến +3 (trừ 4).
- Pragmatic = trung bình câu 1 đến 4; Hedonic = trung bình câu 5 đến 8; tổng = trung bình cả 8 câu.
- Diễn giải bằng bảng benchmark của nhóm tác giả UEQ.
- AI chưa kiểm được UEQ-S có bản tiếng Việt chính thức hay không; nếu chọn phương án này, SV kiểm trên trang của UEQ và dùng bản chính thức nếu có.

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

Với mỗi điểm ở I4.7 chưa được hỏi qua I6.1, I6.2: Nhắc lại khoảnh khắc đó một cách trung lập ("Ở đoạn [mô tả], mình thấy bạn dừng lại một lúc...") rồi hỏi "Lúc đó bạn đang nghĩ gì?".

### I6.4 Mẫu `probe.md`

| Câu | Ý chính của câu trả lời | Trích nguyên văn đáng chú ý |
|---|---|---|
| C1 | | |
| ... | | |

---

## I7. Lời kết thúc

> Cảm ơn bạn rất nhiều. Những gì bạn gặp hôm nay giúp mình tìm ra chỗ nào trên trang cần sửa. Một lần nữa, những chỗ khó là vấn đề của trang web, không phải của bạn.
>
> Như đã nói, giảng viên hoặc trợ giảng có thể gọi cho bạn trong vài tuần tới để xác nhận bạn đã tham gia. Nếu sau này bạn muốn rút lại dữ liệu của mình, bạn cứ nhắn mình.

[Dừng quay. Làm I4.6 (kiểm D6) trước khi reset DB.]

---

## 8. Cần kiểm ở pilot

| Điểm cần kiểm | Vì sao |
|---|---|
| Câu chữ bản dịch thang đo có câu nào người pilot hỏi lại hoặc hiểu sai không | Bản dịch của AI, chưa kiểm |
| Thời lượng I2 đến I3, I5, I6 so với test plan mục 5 (3 đến 5, 2 đến 3, 2 đến 3, 5 đến 10 phút) | Nếu quá dài thì rút câu ở I6.1 |
| Người điều phối kịp ghi I4.4 trong lúc quan sát không | Nếu không kịp thì chỉ ghi mốc và mã, điền mô tả khi xem lại video |
| Câu C4 khi người tham gia không gặp lỗi có quá giả định không | Có thể bỏ phần hỏi thêm |

---

## 9. Tổng hợp các quyết định để mở ⏳

| Mã | Quyết định | Gợi ý của AI |
|---|---|---|
| QĐ5 | SUS hay UEQ-S | SUS |
| QĐ-I1 | Cách lưu bằng chứng đồng ý | A: Đồng ý bằng lời trong video, ghi cột trong `participants.md` |
| QĐ-I2 | Có tập think-aloud 1 phút trước nhiệm vụ không | Không tập; chỉ giải thích như I2.3 |
| QĐ-I3 | Cách người tham gia điền thang đo (trực tiếp và từ xa) | Trực tiếp: Phiếu giấy. Từ xa: Người điều phối đọc từng câu và ghi lại |
| (B7) | Giữ câu B7 về thiết bị thường dùng để đăng sản phẩm không | Giữ |
