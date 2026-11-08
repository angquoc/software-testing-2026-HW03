# T2 plan: Test plan usability cho luồng FL-05 (bản AI)

- Bước: `[T2][plan]`
- Thời gian tạo: 2026-11-08 20:25
- Công cụ: Claude Code (Claude Opus 5.5)

---

## 0. Phạm vi và căn cứ

| Mục | Nội dung |
|---|---|
| Luồng | FL-05 (Web Admin): Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới |
| Hệ thống | EShop Web Admin, `http://localhost:5174` (SRS mục 1) |
| Đặc tả liên quan | FR-12 (chỉ tài khoản admin vào được Admin), FR-14 (tên danh mục bắt buộc), FR-15 (tên sản phẩm bắt buộc, tối đa 255 ký tự; giá bắt buộc, > 0; danh mục bắt buộc, chọn từ danh sách có sẵn), FR-21 đến FR-24 (giao diện chung, form, điều hướng, phản hồi) |
| Cấu trúc test plan | 9 phần theo slide S13 "Typical test plan format" và slide GUI + Usability AI-First "The 9-part test plan" |
| Yêu cầu của đề | §6 Task 2: 7 người thật, phiên có người điều phối (moderated), think-aloud, quay màn hình, thang đo SUS hoặc UEQ-S, câu hỏi mở tối thiểu về clarity, error recovery, speed, trust, có 1 phiên pilot |

Lưu ý: Bản plan này viết khi **chưa có ảnh chụp màn hình Admin**. Các chỗ phụ thuộc giao diện được ghi thành giả định (mục 10).

---

## 1. Mục đích (Purpose)

Đánh giá xem một người bán hàng online **lần đầu dùng EShop** có tự hoàn thành được việc **tạo một danh mục mới rồi đăng một sản phẩm vào đúng danh mục đó** trên Web Admin hay không, mà không cần ai hướng dẫn; đồng thời tìm ra những chỗ trên luồng khiến họ chậm lại, làm sai, do dự hoặc mất tin tưởng.

Loại test theo Rubin (slide S13): **Assessment**. Lý do: Giao diện Admin đã hoàn chỉnh, nhiệm vụ xác định rõ, người điều phối ít can thiệp và có thu số liệu định lượng (thời gian, tỷ lệ hoàn thành, số lỗi, điểm thang đo).

Kết quả dùng để:

- Gom pain point theo từng chặng của luồng, tách **bug** (hệ thống sai so với SRS hoặc chặn người dùng) khỏi **vấn đề thiết kế** mang tính hệ thống.
- Xếp mức độ nghiêm trọng và đưa ra đề xuất cải tiến.
- Báo bug thật lên GitHub Issues của nhóm.

---

## 2. Câu hỏi cần trả lời (Problem statement)

| Mã | Câu hỏi | Chặng | Khía cạnh probe của đề |
|---|---|---|---|
| Q1 | Sau khi đăng nhập Admin, người dùng có tự tìm được nơi quản lý danh mục không, và mất bao lâu? | Tạo danh mục | Clarity, Speed |
| Q2 | Người dùng có tạo được danh mục ngay lần đầu không, và có **nhận biết** được là đã tạo thành công không? | Tạo danh mục | Clarity, Trust |
| Q3 | Người dùng có tự chuyển sang được nơi thêm sản phẩm không? | Chuyển chặng | Clarity, Speed |
| Q4 | Trong form thêm sản phẩm, người dùng có tìm và chọn **đúng danh mục vừa tạo** không? | Thêm sản phẩm | Clarity, Trust |
| Q5 | Người dùng có hiểu trường nào bắt buộc và định dạng nhập (giá, ảnh) không? | Thêm sản phẩm | Clarity |
| Q6 | Khi nhập thiếu hoặc sai, thông báo lỗi có giúp người dùng tự sửa và đi tiếp không? | Thêm sản phẩm | Error recovery |
| Q7 | Sau khi lưu, người dùng có chắc chắn rằng sản phẩm đã được tạo và nằm đúng danh mục mới không? Họ kiểm tra bằng cách nào? | Kết thúc | Trust |
| Q8 | Chặng nào tốn thời gian nhất, và toàn luồng có hoàn thành trong thời gian chuẩn không? | Toàn luồng | Speed |
| Q9 | Câu chữ, thuật ngữ trên Admin có quen thuộc với người bán hàng không (FR-21 yêu cầu giao diện tiếng Việt)? | Toàn luồng | Clarity |
| Q10 | Đánh giá chủ quan chung của người dùng về mức dễ dùng của luồng (điểm thang đo) ra sao? | Toàn luồng | (Thang đo) |

---

## 3. Mục tiêu và nhiệm vụ (Test objectives & tasks)

### 3.1 Mục tiêu

| Mã | Mục tiêu | Trả lời câu hỏi |
|---|---|---|
| O1 | Đo tỷ lệ hoàn thành toàn luồng: Tự hoàn thành, hoàn thành nhờ can thiệp, không hoàn thành | Q1 đến Q8 |
| O2 | Xác định chặng gây vướng nhiều nhất (theo thời gian, số lỗi, số lần do dự) | Q1, Q3, Q4, Q8 |
| O3 | Đánh giá phản hồi của hệ thống ở hai điểm "lưu": Sau khi tạo danh mục và sau khi thêm sản phẩm | Q2, Q7 |
| O4 | Đánh giá khả năng tự sửa lỗi nhập liệu trong form sản phẩm | Q5, Q6 |
| O5 | Thu điểm thang đo chuẩn và ý kiến về clarity, error recovery, speed, trust | Q9, Q10 |

### 3.2 Nhiệm vụ

Luồng FL-05 được giao cho người tham gia như **một kịch bản dạng mục tiêu** (không đưa từng bước). Để đo, người điều phối chia luồng thành các chặng (người tham gia không thấy cách chia này):

| Chặng | Nội dung | Dấu hiệu bắt đầu | Dấu hiệu kết thúc |
|---|---|---|---|
| M1 | Đăng nhập Admin | Người tham gia đọc xong kịch bản | Vào được trang Admin sau đăng nhập |
| M2 | Tạo danh mục mới | Kết thúc M1 | Danh mục mới xuất hiện trong danh sách danh mục |
| M3 | Thêm sản phẩm vào danh mục mới | Kết thúc M2 | Sản phẩm được lưu với đúng danh mục mới |

- Dữ liệu đưa cho người tham gia (tài khoản admin, tên danh mục, thông tin sản phẩm, URL ảnh): Chốt ở bước `scenario`.
- Câu chữ kịch bản, trạng thái ban đầu, tiêu chí hoàn thành, thời gian chuẩn (benchmark) cho từng chặng và toàn luồng: Chốt ở bước `scenario` (slide S13 "Task components").
- ⏳ Quyết định để mở: Có thêm chặng M4 "Tự kiểm tra sản phẩm đã nằm trong danh mục mới" (ví dụ xem lại danh sách sản phẩm) vào kịch bản hay không, hay chỉ quan sát xem người tham gia có tự kiểm tra không (phục vụ Q7).

---

## 4. Chân dung người dùng (User profile)

Người dùng mục tiêu của Web Admin EShop là **chủ shop hoặc nhân viên đăng sản phẩm** của một cửa hàng online. Vì vậy người tham gia là người có kinh nghiệm bán hàng online thật.

Tiêu chí bắt buộc (theo WORKFLOW mục 3.2.1), cả 7 người phải đạt đủ:

1. Đang hoặc đã từng bán hàng online, và tự tay đăng sản phẩm (tên, giá, ảnh, mô tả) ít nhất vài lần, trên bất kỳ kênh nào (sàn, mạng xã hội, web riêng).
2. Tự dùng được máy tính hoặc laptop với trình duyệt.
3. Chưa từng thấy hoặc dùng EShop.
4. Không học môn Kiểm thử phần mềm kỳ này.
5. Có liên lạc kiểm chứng được và đồng ý để TA gọi xác minh.
6. Đồng ý cho quay màn hình (ghi âm nếu được).

Ưu tiên người không làm IT hay tester. Người pilot (`PL`) cũng nên đạt các tiêu chí trên, nhưng không tính vào 7 người.

Đặc điểm thu qua phiếu thông tin trước phiên (chỉ dùng mã P1 đến P7, không ghi tên):

| Đặc điểm | Dạng câu trả lời |
|---|---|
| Nhóm tuổi | Chọn khoảng |
| Nghề nghiệp hoặc lĩnh vực (có làm IT không) | Chọn |
| Kênh bán hàng đã dùng | Chọn nhiều: Sàn TMĐT, mạng xã hội, web riêng, khác |
| Số lần tự đăng sản phẩm (ước lượng) | Chọn khoảng |
| Đã từng dùng trang quản trị bán hàng nào chưa | Có / Không, kể tên nếu có |
| Mức độ quen dùng máy tính | Thang 1 đến 5 |

Số lượng: 7 người (đề §6 Task 2) cộng 1 người pilot.

---

## 5. Phương pháp và thiết kế (Method & test design)

| Mục | Lựa chọn |
|---|---|
| Hình thức | Có người điều phối (moderated), một người tham gia một phiên |
| Thu thập định tính | Think-aloud đồng thời (vừa làm vừa nói), quan sát, câu hỏi mở sau phiên |
| Thu thập định lượng | Thời gian từng chặng, hoàn thành hay không, số lỗi, số lần can thiệp, điểm thang đo |
| Thiết kế | Một điều kiện duy nhất: Cả 7 người làm **cùng một kịch bản, cùng dữ liệu, cùng trạng thái ban đầu** (template Usability của môn: "Each participant uses the SAME scenario"). Không có nhóm so sánh |
| Hướng dẫn trước phiên | **Không** demo hay hướng dẫn giao diện (khác với mục "User Training" trong template của môn), vì mục tiêu là đo khả năng tự tìm đường của người dùng mới (đề: "give participants a goal, not step-by-step instructions") |
| Pilot | 1 phiên với `PL` trước 7 phiên thật, để phát hiện kịch bản khó hiểu, luồng hỏng, thời gian không hợp lý; sửa kịch bản và công cụ rồi mới chạy P1 |
| ⏳ Địa điểm | Trực tiếp (ngồi cạnh người tham gia, dùng máy của sinh viên) hay từ xa (gọi video và cho điều khiển máy từ xa). SV chốt theo điều kiện của từng người tham gia |

Trình tự một phiên (thời lượng ước lượng, chỉnh sau pilot):

| Bước | Nội dung | Thời lượng |
|---|---|---|
| 1 | Chuẩn bị: Reset DB, mở trang đăng nhập Admin, bật quay màn hình | Trước phiên |
| 2 | Mở đầu: Lời dặn (đang kiểm thử sản phẩm, không kiểm tra người tham gia), giới thiệu think-aloud, xin đồng ý ghi hình | 3 đến 5 phút |
| 3 | Phiếu thông tin trước phiên | 2 đến 3 phút |
| 4 | Đưa kịch bản, người tham gia làm nhiệm vụ | 10 đến 15 phút |
| 5 | Thang đo sau phiên | 2 đến 3 phút |
| 6 | Câu hỏi mở, xoáy vào chỗ đã quan sát thấy khó | 5 đến 10 phút |
| 7 | Cảm ơn, dừng quay | 1 phút |

Tổng khoảng 25 đến 40 phút mỗi phiên.

---

## 6. Môi trường và thiết bị (Test environment & equipment)

| Thành phần | Chi tiết |
|---|---|
| Kiểu môi trường | Phòng đơn giản một phòng, người điều phối ngồi gần người tham gia (slide S13 "Simple single room setups") |
| Máy chạy SUT | Laptop của sinh viên chạy backend (`localhost:3000`) và Web Admin (`localhost:5174`) |
| Dữ liệu | Reset trước **mỗi** phiên: `cd backend && node database.js` (README nhóm mục 5), để mọi người bắt đầu từ cùng trạng thái và danh mục do người trước tạo không còn |
| Trình duyệt | Một trình duyệt cố định cho cả 7 phiên; ghi tên và phiên bản |
| Màn hình | Ghi độ phân giải và mức zoom; giữ cố định giữa các phiên |
| Thiết bị nhập | Chuột và bàn phím (ghi rõ nếu người tham gia dùng touchpad) |
| Quay màn hình | Phần mềm quay màn hình kèm âm thanh micro; video gốc không commit lên git, chỉ đưa vào bản nộp |
| Đo thời gian | Lấy theo mốc thời gian trong video |
| Biểu mẫu | Phiếu thông tin, thang đo, câu hỏi mở, phiếu ghi chú quan sát (bước `instruments`) |
| Nếu chạy từ xa | Ứng dụng gọi video có chia sẻ màn hình và cho điều khiển máy từ xa; ghi rõ công cụ và độ trễ quan sát được |

---

## 7. Vai trò người điều phối (Test monitor role)

Sinh viên vừa là người điều phối vừa là người ghi chú.

| Thời điểm | Việc làm |
|---|---|
| Trước phiên | Kiểm tra SUT chạy, DB đã reset, quay màn hình đã bật, có sẵn kịch bản và biểu mẫu |
| Mở đầu | Đọc lời dặn theo đúng văn bản trong `03_instruments.md` để các phiên giống nhau |
| Trong phiên | Đưa mục tiêu, **không** gợi ý, **không** giải thích giao diện, không trả lời câu hỏi "làm thế nào"; chỉ nhắc nói ra suy nghĩ bằng câu trung lập (ví dụ "Bạn đang nghĩ gì?", "Bạn đang tìm gì?") |
| Can thiệp | Chỉ khi người tham gia bế tắc hẳn. Mỗi lần can thiệp ghi: Thời điểm, chặng, lý do, câu đã nói. Chặng có can thiệp tính là "hoàn thành nhờ can thiệp" |
| Ghi chú | Theo mốc thời gian trong video: Chỗ vướng, lỗi, do dự, lời than phiền, chỗ làm sai rồi tự sửa, câu nói đáng chú ý |
| Kết thúc | Đưa thang đo, sau đó hỏi câu hỏi mở và hỏi thêm về những chỗ đã quan sát thấy khó |
| Sau phiên | Lưu hồ sơ vào `sessions/P<n>/`, chỉ dùng mã P<n>, cắt bỏ khuôn mặt và thông tin cá nhân khỏi ảnh chụp từ video |

⏳ Quyết định để mở: Định nghĩa "bế tắc hẳn" (ví dụ không tiến triển sau một khoảng thời gian nhất định, hoặc người tham gia tự nói muốn bỏ cuộc) và câu can thiệp chuẩn. Chốt ở bước `scenario` hoặc `instruments`, chỉnh lại sau pilot.

---

## 8. Số liệu thu thập và cách đánh giá (Evaluation measures & data)

### 8.1 Số liệu hiệu suất (performance data, khách quan)

| Mã | Số liệu | Cách thu | Phục vụ |
|---|---|---|---|
| D1 | Kết quả từng chặng M1 đến M3 và toàn luồng: Tự hoàn thành / Hoàn thành nhờ can thiệp / Không hoàn thành | Quan sát, video | O1 |
| D2 | Thời gian từng chặng và toàn luồng | Mốc thời gian trong video | O2, Q8 |
| D3 | Số lỗi theo loại: Bấm sai chỗ khi tìm đường; hệ thống báo lỗi nhập liệu; chọn sai danh mục; phải làm lại một thao tác | Video, phiếu ghi chú | O2, O4 |
| D4 | Số lần can thiệp | Phiếu ghi chú | O1 |
| D5 | Số lần do dự rõ (dừng lâu, nói không biết làm gì) | Video, think-aloud | O2 |
| D6 | Kết quả cuối trong hệ thống: Danh mục mới tồn tại; sản phẩm tồn tại với đúng tên, giá và đúng danh mục mới | Người điều phối kiểm tra sau phiên | O1, Q7 |
| D7 | Người tham gia có tự kiểm tra kết quả sau khi lưu không | Quan sát | Q7 |

### 8.2 Số liệu ý kiến (preference data, chủ quan)

| Mã | Số liệu | Cách thu |
|---|---|---|
| D8 | Điểm thang đo chuẩn sau phiên | Phiếu thang đo |
| D9 | Câu trả lời câu hỏi mở về clarity, error recovery, speed, trust | Phỏng vấn sau phiên, ghi theo ý |
| D10 | Lời nói khi think-aloud và lời than phiền | Video, phiếu ghi chú |

⏳ Quyết định để mở (bước `instruments`): Dùng **SUS** hay **UEQ-S**. Gợi ý của AI: SUS (10 câu, điểm 0 đến 100, cách tính rõ, dễ so với mốc tham khảo thường dùng là 68); UEQ-S (8 cặp tính từ) cho thêm hai mặt pragmatic và hedonic nhưng cần bảng benchmark riêng để diễn giải.

### 8.3 Liên kết câu hỏi với số liệu

| Câu hỏi | Hiệu suất | Ý kiến |
|---|---|---|
| Q1, Q3 | D2 (thời gian M2, đầu M3), D3 (bấm sai chỗ), D5 | D9 (clarity), D10 |
| Q2 | D1 (M2), D7 | D9 (trust), D10 |
| Q4 | D3 (chọn sai danh mục), D6 | D9 (clarity, trust) |
| Q5, Q6 | D3 (lỗi nhập liệu), D4 | D9 (error recovery) |
| Q7 | D6, D7 | D9 (trust) |
| Q8 | D2 | D9 (speed) |
| Q9 | D5 | D9 (clarity), D10 |
| Q10 | | D8 |

### 8.4 Cách tổng hợp và đánh giá

- Thời gian: Trung bình, trung vị, khoảng (min, max), độ lệch chuẩn cho từng chặng và toàn luồng (slide S13 "Summarizing performance results").
- Độ chính xác: % người tự hoàn thành, % hoàn thành kể cả nhờ can thiệp, % hoàn thành trong thời gian chuẩn, số lỗi trung bình mỗi chặng.
- Thang đo: Tính điểm từng người và trung bình 7 người bằng script hoặc công thức, ghi rõ cách tính (`04_scores.md`).
- Câu hỏi mở và think-aloud: Gom ý theo chủ đề, tách tích cực và tiêu cực (slide S13 "Summarizing preference results").
- Phân tích: Bắt đầu từ chặng thất bại hoặc có vấn đề rõ; xác định lỗi của người dùng và nguồn gốc; đối chiếu với SRS (FR-12, FR-14, FR-15, FR-21 đến FR-24) để tách bug khỏi vấn đề thiết kế; xếp ưu tiên theo **criticality = severity × probability** (slide S13 "Analyzing Data"), trong đó probability là số người gặp vấn đề trên 7.
- ⏳ Quyết định để mở (bước `analysis`): Thang severity cho finding usability (README nhóm cho phép thang riêng, ví dụ Nielsen 0 đến 4); bug đưa lên Issues vẫn dùng 4 mức `severity` của nhóm. Severity do sinh viên chốt, AI chỉ đề xuất.

---

## 9. Nội dung báo cáo (Report contents)

Báo cáo usability (phần Task 2 trong báo cáo chính, dựa trên `04_scores.md` và `05_findings.md`):

1. Tóm tắt: Luồng, số người tham gia, tỷ lệ hoàn thành, điểm thang đo trung bình, các vấn đề nghiêm trọng nhất.
2. Mục đích và câu hỏi cần trả lời (mục 1, 2).
3. Người tham gia: Bảng thống kê đặc điểm theo mã P1 đến P7 (không có thông tin cá nhân); danh sách 7 người kèm liên lạc đã che số nằm ở `participants.md`.
4. Phương pháp, môi trường, kịch bản; những gì đã sửa sau pilot.
5. Kết quả hiệu suất: Bảng D1 đến D7 theo từng người và tổng hợp.
6. Kết quả thang đo: Điểm từng người, trung bình, cách tính.
7. Phát hiện: Pain point đã gom nhóm, mỗi phát hiện có số người gặp, bằng chứng (mốc video, ảnh, trích lời think-aloud), phân loại bug hay vấn đề thiết kế, severity, criticality.
8. Đề xuất cải tiến theo thứ tự ưu tiên.
9. Bug đã báo lên Issues: Số issue, liên kết.
10. Hạn chế của nghiên cứu: Mẫu nhỏ (7 người), một người điều phối kiêm ghi chú, chạy trên localhost với dữ liệu demo, hiệu ứng bị quan sát khi think-aloud.
11. Phụ lục: Kịch bản, biểu mẫu, hồ sơ từng phiên `sessions/P1/` đến `sessions/P7/`, video (nếu có).

---

## 10. Giả định và rủi ro

### 10.1 Giả định (cần kiểm lại khi có ảnh chụp màn hình Admin)

| Mã | Giả định | Căn cứ |
|---|---|---|
| G1 | Web Admin có khu vực riêng để quản lý danh mục và khu vực riêng để quản lý sản phẩm | FR-14, FR-15 |
| G2 | Form thêm sản phẩm có trường chọn danh mục từ danh sách, và danh mục vừa tạo có trong danh sách đó | FR-15 "phải chọn từ danh sách có sẵn" |
| G3 | Form thêm sản phẩm có trường ảnh nhập bằng URL | WORKFLOW mục 3.2.2 nhắc "URL ảnh"; header CSV ở FR-16 có `imageUrl`. SRS không nói rõ form thêm sản phẩm có trường này |
| G4 | Reset DB xoá danh mục và sản phẩm người tham gia trước đã tạo | README nhóm mục 5 |

### 10.2 Rủi ro

| Rủi ro | Ảnh hưởng | Cách giảm |
|---|---|---|
| Luồng có bug chặn (ví dụ danh mục mới không hiện trong form sản phẩm) | Người tham gia không hoàn thành được, phiên mất ý nghĩa về thời gian | Phát hiện ở pilot; nếu là bug thật thì vẫn giữ trong kịch bản, ghi nhận như một finding, chuẩn bị câu can thiệp chuẩn |
| Người tham gia quên think-aloud | Thiếu dữ liệu định tính | Nhắc bằng câu trung lập đã chuẩn hoá |
| Quên reset DB giữa các phiên | Trạng thái ban đầu khác nhau, số liệu không so sánh được | Đưa reset vào checklist chuẩn bị phiên |
| Chạy từ xa có độ trễ | Thời gian đo bị lệch | Ghi rõ phiên chạy từ xa; xem xét tách khi tổng hợp |
| Lộ thông tin cá nhân trong video, ảnh | Vi phạm riêng tư (WORKFLOW mục 1.5) | Không đưa video vào AI; cắt khuôn mặt và thông tin cá nhân khỏi ảnh trước khi lưu |

---

## 11. Tổng hợp các quyết định để mở ⏳

| Mã | Quyết định | Bước chốt |
|---|---|---|
| QĐ1 | Có thêm chặng M4 "tự kiểm tra kết quả" vào kịch bản hay chỉ quan sát | `scenario` |
| QĐ2 | Câu chữ kịch bản, dữ liệu đưa cho người tham gia, tiêu chí hoàn thành, thời gian chuẩn | `scenario` |
| QĐ3 | Trực tiếp hay từ xa (có thể khác nhau giữa các người tham gia) | `plan` (SV review) hoặc theo từng phiên |
| QĐ4 | Định nghĩa "bế tắc hẳn" và câu can thiệp chuẩn | `scenario` hoặc `instruments`, chỉnh sau `pilot` |
| QĐ5 | SUS hay UEQ-S | `instruments` |
| QĐ6 | Thang severity cho finding usability | `analysis` |
