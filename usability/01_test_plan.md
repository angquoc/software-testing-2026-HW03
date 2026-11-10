# Test plan usability cho luồng FL-05

- Bước: `[T2][plan]`, bản đã review
- Bản AI gốc: `ai_raw/T2_plan.md` (2026-11-08)
- Ngày review: 2026-11-09
- Ảnh khảo sát dùng khi review: `screenshots/flow_01` đến `flow_11`

---

## 0. Phạm vi và căn cứ

| Mục | Nội dung |
|---|---|
| Luồng | FL-05 (Web Admin): Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới |
| Hệ thống | EShop Web Admin, `http://localhost:5174` (SRS mục 1) |
| Đặc tả liên quan | FR-06 (trang chi tiết sản phẩm hiển thị Danh mục), FR-12 (chỉ tài khoản admin vào được Admin), FR-14 (tên danh mục bắt buộc), FR-15 (tên sản phẩm bắt buộc, tối đa 255 ký tự; giá bắt buộc, > 0; danh mục bắt buộc, chọn từ danh sách có sẵn), FR-21 đến FR-24 (giao diện chung, form, điều hướng, phản hồi) |
| Cấu trúc test plan | 9 phần theo slide S13 "Typical test plan format" và slide GUI + Usability AI-First "The 9-part test plan" |
| Yêu cầu của đề | §6 Task 2: 7 người thật, phiên có người điều phối (moderated), think-aloud, quay màn hình, thang đo SUS hoặc UEQ-S, câu hỏi mở tối thiểu về clarity, error recovery, speed, trust, có 1 phiên pilot |
| Ảnh giao diện | `usability/screenshots/flow_01` đến `flow_11`, do sinh viên chụp ngày 2026-11-08 và 2026-11-09. Kết quả đối chiếu giả định ở mục 10.1 |

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
| Q2 | Người dùng có tạo được danh mục ngay lần đầu không? Hệ thống **không hiện thông báo** sau khi bấm "Thêm mới" (flow_05), vậy người dùng dựa vào đâu để biết đã tạo thành công, và họ có chắc chắn không? | Tạo danh mục | Clarity, Trust |
| Q3 | Người dùng có tự chuyển sang được nơi thêm sản phẩm không? Trên trang "Quản lý Sản phẩm", khối "Import sản phẩm từ CSV" nằm **trên** form "Thêm sản phẩm mới" (flow_06): Người dùng có vào nhầm khối này không? | Chuyển chặng | Clarity, Speed |
| Q4 | Trong form thêm sản phẩm, người dùng có tìm và chọn **đúng danh mục vừa tạo** không? Ô danh mục mặc định chọn sẵn "Điện thoại", không có lựa chọn trống, danh mục mới nằm cuối danh sách (flow_07, flow_08) | Thêm sản phẩm | Clarity, Trust |
| Q5 | Người dùng có hiểu trường nào bắt buộc và định dạng nhập (giá, ảnh) không? Các ô chỉ có placeholder, không có nhãn, không có dấu `*` (flow_07; FR-22), ô giá không có dấu phân cách hàng nghìn | Thêm sản phẩm | Clarity |
| Q6 | Khi nhập thiếu hoặc sai, thông báo lỗi có giúp người dùng tự sửa và đi tiếp không? | Thêm sản phẩm | Error recovery |
| Q7 | Sau khi bấm "Lưu sản phẩm", hệ thống **không hiện thông báo** và form tự xoá trắng (flow_10); sản phẩm mới nằm cuối bảng, bảng không có cột Danh mục (flow_11). Người dùng có chắc chắn rằng sản phẩm đã được tạo và nằm đúng danh mục mới không? Họ kiểm tra bằng cách nào? | Kết thúc | Trust |
| Q8 | Chặng nào tốn thời gian nhất, và toàn luồng có hoàn thành trong thời gian chuẩn không? | Toàn luồng | Speed |
| Q9 | Câu chữ, thuật ngữ trên Admin có quen thuộc với người bán hàng không? FR-21 yêu cầu giao diện tiếng Việt, nhưng trang đăng nhập dùng tiếng Anh ("Admin Login", "Login", flow_01) | Toàn luồng | Clarity |
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
| M1 | Đăng nhập Admin | Người tham gia đọc xong kịch bản | Vào được trang Dashboard (flow_02) |
| M2 | Tạo danh mục mới | Kết thúc M1 | Danh mục mới xuất hiện ở dòng cuối bảng danh mục (flow_05) |
| M3 | Thêm sản phẩm vào danh mục mới | Kết thúc M2 | Người tham gia bấm "Lưu sản phẩm" và sản phẩm xuất hiện ở dòng cuối bảng sản phẩm (flow_11). Sản phẩm có nằm đúng danh mục mới hay không được người điều phối kiểm sau phiên (D6) |

- Dữ liệu đưa cho người tham gia (tài khoản admin, tên danh mục, thông tin sản phẩm, URL ảnh): Chốt ở bước `scenario`.
- Câu chữ kịch bản, trạng thái ban đầu, tiêu chí hoàn thành, thời gian chuẩn (benchmark) cho từng chặng và toàn luồng: Chốt ở bước `scenario` (slide S13 "Task components").
- QĐ1 (đã chốt ở `02_scenario.md` mục 8): Không thêm chặng M4 "Tự kiểm tra sản phẩm đã nằm trong danh mục mới"; chỉ quan sát xem người tham gia có tự kiểm tra không (D7), rồi hỏi lại bằng câu hỏi mở C7 (`03_instruments.md` mục I6.1).

---

## 4. Chân dung người dùng (User profile)

Người dùng mục tiêu của Web Admin EShop là **chủ shop hoặc nhân viên đăng sản phẩm** của một cửa hàng online. Vì vậy người tham gia là người có kinh nghiệm bán hàng online thật.

Tiêu chí bắt buộc, cả 7 người phải đạt đủ:

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
| Địa điểm | **Tùy từng người tham gia**: Trực tiếp (ngồi cạnh, dùng laptop của sinh viên) hoặc từ xa (gọi video, chia sẻ màn hình, cho điều khiển máy từ xa). Hình thức của mỗi phiên ghi trong `sessions/P<n>/notes.md` |

Trình tự một phiên (thời lượng chỉnh theo số đo ở pilot, `pilot/notes.md` mục 8.2):

| Bước | Nội dung | Thời lượng |
|---|---|---|
| 1 | Chuẩn bị: Reset DB, mở trang đăng nhập Admin, bật quay màn hình | Trước phiên |
| 2 | Mở đầu: Lời dặn (đang kiểm thử sản phẩm, không kiểm tra người tham gia), giới thiệu think-aloud, xin đồng ý ghi hình | 2 đến 3 phút |
| 3 | Phiếu thông tin trước phiên | 1 đến 2 phút |
| 4 | Đưa kịch bản, người tham gia làm nhiệm vụ | 2 đến 5 phút (tối đa 15 phút, `02_scenario.md` mục 4.2) |
| 5 | Thang đo sau phiên | 2 đến 3 phút |
| 6 | Câu hỏi mở, xoáy vào chỗ đã quan sát thấy khó | 5 đến 10 phút |
| 7 | Cảm ơn, dừng quay | 1 phút |

Tổng khoảng 15 đến 25 phút mỗi phiên (pilot: 16 phút); tối đa khoảng 35 phút nếu người tham gia dùng hết 15 phút làm nhiệm vụ.

Số đo ở pilot: Mở đầu và phiếu thông tin 3 phút; làm nhiệm vụ khoảng 1,5 phút; form SUS 2 phút; câu hỏi mở 5 phút. Phần làm nhiệm vụ để 2 đến 5 phút (dài hơn số đo pilot) vì chỉ có một người pilot và chuẩn toàn luồng ×3 là 02:18.75.

---

## 6. Môi trường và thiết bị (Test environment & equipment)

| Thành phần | Chi tiết |
|---|---|
| Kiểu môi trường | Phiên trực tiếp: Phòng đơn giản một phòng, người điều phối ngồi gần người tham gia (slide S13 "Simple single room setups"). Phiên từ xa: Mỗi bên ở chỗ của mình, kết nối qua ứng dụng gọi video |
| Máy chạy SUT | Laptop của sinh viên chạy backend (`localhost:3000`) và Web Admin (`localhost:5174`), dùng cho cả hai hình thức |
| Dữ liệu | Reset trước **mỗi** phiên: `cd backend && node database.js` (README nhóm mục 5), để mọi người bắt đầu từ cùng trạng thái và danh mục do người trước tạo không còn |
| Trình duyệt | Một trình duyệt cố định cho cả 7 phiên; ghi tên và phiên bản |
| Màn hình | Ghi độ phân giải và mức zoom; giữ cố định giữa các phiên |
| Thiết bị nhập | Chuột và bàn phím (ghi rõ nếu người tham gia dùng touchpad) |
| Quay màn hình | Phần mềm quay màn hình kèm âm thanh micro; video gốc không commit lên git, chỉ đưa vào bản nộp |
| Đo thời gian | Lấy theo mốc thời gian trong video |
| Biểu mẫu | Phiếu thông tin, thang đo, câu hỏi mở, phiếu ghi chú quan sát (bước `instruments`) |
| Phiên từ xa | Ứng dụng gọi video có chia sẻ màn hình và cho điều khiển máy từ xa; ghi rõ công cụ và độ trễ quan sát được |

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
| Sau phiên | Kiểm D6 (mục 8.1); lưu hồ sơ vào `sessions/P<n>/`, chỉ dùng mã P<n>, cắt bỏ khuôn mặt và thông tin cá nhân khỏi ảnh chụp từ video |

QĐ4 (đã chốt ở `02_scenario.md` mục 5): "Bế tắc hẳn" là không tiến triển ở cùng một chặng khoảng 2 phút (giảm từ 3 phút sau pilot), hỏi cách làm từ lần thứ hai, hoặc nói muốn bỏ cuộc; can thiệp theo 4 mức (0 là nhắc think-aloud, không tính).

---

## 8. Số liệu thu thập và cách đánh giá (Evaluation measures & data)

### 8.1 Số liệu hiệu suất (performance data, khách quan)

| Mã | Số liệu | Cách thu | Phục vụ |
|---|---|---|---|
| D1 | Kết quả từng chặng M1 đến M3 và toàn luồng: Tự hoàn thành / Hoàn thành nhờ can thiệp / Không hoàn thành | Quan sát, video | O1 |
| D2 | Thời gian từng chặng và toàn luồng | Mốc thời gian trong video | O2, Q8 |
| D3 | Số lỗi theo loại: (a) Bấm sai chỗ khi tìm đường, kể cả vào nhầm khối "Import sản phẩm từ CSV"; (b) Hệ thống báo lỗi nhập liệu; (c) Lưu sản phẩm với danh mục mặc định "Điện thoại" hoặc danh mục khác không phải danh mục mới; (d) Nhập giá thừa hoặc thiếu chữ số 0; (e) Phải làm lại một thao tác | Video, phiếu ghi chú | O2, O4 |
| D4 | Số lần can thiệp | Phiếu ghi chú | O1 |
| D5 | Số lần do dự rõ (dừng lâu, nói không biết làm gì) | Video, think-aloud | O2 |
| D6 | Kết quả cuối trong hệ thống: Danh mục mới tồn tại; sản phẩm tồn tại với đúng tên, giá và đúng danh mục mới | Người điều phối kiểm sau phiên. Bảng sản phẩm của Admin không có cột Danh mục (flow_11), nên kiểm danh mục bằng trang chi tiết sản phẩm trên web bán hàng (FR-06 yêu cầu hiển thị Danh mục) hoặc form "Sửa" của sản phẩm trong Admin (chưa có ảnh form "Sửa") | O1, Q7 |
| D7 | Người tham gia có tự kiểm tra kết quả sau khi lưu không, và kiểm bằng cách nào | Quan sát | Q2, Q7 |

### 8.2 Số liệu ý kiến (preference data, chủ quan)

| Mã | Số liệu | Cách thu |
|---|---|---|
| D8 | Điểm thang đo chuẩn sau phiên | Phiếu thang đo |
| D9 | Câu trả lời câu hỏi mở về clarity, error recovery, speed, trust | Phỏng vấn sau phiên, ghi theo ý |
| D10 | Lời nói khi think-aloud và lời than phiền | Video, phiếu ghi chú |

QĐ5 (đã chốt ở `03_instruments.md` mục I5): Dùng **SUS** (10 câu, điểm 0 đến 100, cách tính rõ, dễ so với mốc tham khảo thường dùng là 68). Người tham gia tự điền Google Form sau khi làm xong nhiệm vụ; câu trả lời chép nguyên văn vào `scale.md` (D8).

### 8.3 Liên kết câu hỏi với số liệu

| Câu hỏi | Hiệu suất | Ý kiến |
|---|---|---|
| Q1, Q3 | D2 (thời gian M2, đầu M3), D3 (a), D5 | D9 (clarity), D10 |
| Q2 | D1 (M2), D7 | D9 (trust), D10 |
| Q4 | D3 (c), D6 | D9 (clarity, trust) |
| Q5, Q6 | D3 (b), D3 (d), D4 | D9 (error recovery) |
| Q7 | D6, D7 | D9 (trust) |
| Q8 | D2 | D9 (speed) |
| Q9 | D5 | D9 (clarity), D10 |
| Q10 | | D8 |

### 8.4 Cách tổng hợp và đánh giá

- Thời gian: Trung bình, trung vị, khoảng (min, max), độ lệch chuẩn cho từng chặng và toàn luồng (slide S13 "Summarizing performance results"). Phiên từ xa được đánh dấu riêng trong bảng tổng hợp vì độ trễ có thể làm lệch thời gian.
- Độ chính xác: % người tự hoàn thành, % hoàn thành kể cả nhờ can thiệp, % hoàn thành trong thời gian chuẩn, số lỗi trung bình mỗi chặng.
- Thang đo: Tính điểm từng người và trung bình 7 người bằng script hoặc công thức, ghi rõ cách tính (`04_scores.md`).
- Câu hỏi mở và think-aloud: Gom ý theo chủ đề, tách tích cực và tiêu cực (slide S13 "Summarizing preference results").
- Phân tích: Bắt đầu từ chặng thất bại hoặc có vấn đề rõ; xác định lỗi của người dùng và nguồn gốc; đối chiếu với SRS (FR-06, FR-12, FR-14, FR-15, FR-21 đến FR-24) để tách bug khỏi vấn đề thiết kế; xếp ưu tiên theo **criticality = severity × probability** (slide S13 "Analyzing Data"), trong đó probability là số người gặp vấn đề trên 7.
- ⏳ Quyết định để mở (bước `analysis`): Thang severity cho finding usability (README nhóm cho phép thang riêng, ví dụ Nielsen 0 đến 4); bug đưa lên Issues vẫn dùng 4 mức `severity` của nhóm. Severity do sinh viên chốt, AI chỉ đề xuất.

---

## 9. Nội dung báo cáo (Report contents)

Báo cáo usability (phần Task 2 trong báo cáo chính, dựa trên `04_scores.md` và `05_findings.md`):

1. Tóm tắt: Luồng, số người tham gia, tỷ lệ hoàn thành, điểm thang đo trung bình, các vấn đề nghiêm trọng nhất.
2. Mục đích và câu hỏi cần trả lời (mục 1, 2).
3. Người tham gia: Bảng thống kê đặc điểm theo mã P1 đến P7 (không có thông tin cá nhân); danh sách 7 người kèm liên lạc đã che số nằm ở `participants.md`.
4. Phương pháp, môi trường, kịch bản, hình thức từng phiên (trực tiếp hay từ xa); những gì đã sửa sau pilot.
5. Kết quả hiệu suất: Bảng D1 đến D7 theo từng người và tổng hợp.
6. Kết quả thang đo: Điểm từng người, trung bình, cách tính.
7. Phát hiện: Pain point đã gom nhóm, mỗi phát hiện có số người gặp, bằng chứng (mốc video, ảnh, trích lời think-aloud), phân loại bug hay vấn đề thiết kế, severity, criticality.
8. Đề xuất cải tiến theo thứ tự ưu tiên.
9. Bug đã báo lên Issues: Số issue, liên kết.
10. Hạn chế của nghiên cứu: Mẫu nhỏ (7 người), một người điều phối kiêm ghi chú, chạy trên localhost với dữ liệu demo, trộn phiên trực tiếp và từ xa, hiệu ứng bị quan sát khi think-aloud.
11. Phụ lục: Kịch bản, biểu mẫu, hồ sơ từng phiên `sessions/P1/` đến `sessions/P7/`, video (nếu có).

---

## 10. Giả định và rủi ro

### 10.1 Giả định đã đối chiếu với ảnh

| Mã | Giả định | Kết quả | Căn cứ |
|---|---|---|---|
| G1 | Web Admin có khu vực riêng để quản lý danh mục và khu vực riêng để quản lý sản phẩm | Đúng. Sidebar có "Danh mục" (trang "Quản lý Danh mục") và "Sản phẩm" (trang "Quản lý Sản phẩm"). Thêm danh mục bằng một ô nhập và nút "Thêm mới" ngay trên bảng, không có form riêng | flow_02, flow_03, flow_06 |
| G2 | Form thêm sản phẩm có trường chọn danh mục từ danh sách, và danh mục vừa tạo có trong danh sách đó | Đúng. Danh mục mới có ngay trong danh sách, không cần tải lại trang (SV xác nhận). Ô mặc định chọn "Điện thoại", không có lựa chọn trống | flow_08, flow_09 |
| G3 | Form thêm sản phẩm có trường ảnh nhập bằng URL | Đúng. Ô "URL Ảnh" dạng ô nhập chữ | flow_07 |
| G4 | Reset DB xoá danh mục và sản phẩm người tham gia trước đã tạo | Đúng một phần. Bảng danh mục ban đầu chỉ có 3 danh mục mẫu. Kiểm lại ở pilot: Reset sau khi đã tạo dữ liệu rồi xem danh mục, sản phẩm mới đã mất chưa | flow_03 |

### 10.2 Rủi ro

| Rủi ro | Ảnh hưởng | Cách giảm |
|---|---|---|
| Người tham gia để nguyên danh mục mặc định "Điện thoại"; sản phẩm vẫn lưu được và không có thông báo, nên cả người tham gia và người điều phối có thể không nhận ra sản phẩm nằm sai danh mục | Đánh giá sai kết quả hoàn thành M3 | Người điều phối luôn kiểm D6 sau phiên; ghi lỗi D3 (c) |
| Người tham gia quên think-aloud | Thiếu dữ liệu định tính | Nhắc bằng câu trung lập đã chuẩn hoá |
| Quên reset DB giữa các phiên | Trạng thái ban đầu khác nhau, số liệu không so sánh được | Đưa reset vào checklist chuẩn bị phiên |
| Phiên từ xa có độ trễ | Thời gian đo bị lệch | Ghi rõ phiên chạy từ xa; đánh dấu riêng khi tổng hợp (mục 8.4) |
| Lộ thông tin cá nhân trong video, ảnh | Vi phạm riêng tư | Không đưa video vào AI; cắt khuôn mặt và thông tin cá nhân khỏi ảnh trước khi lưu |

---

## 11. Tổng hợp các quyết định

| Mã | Quyết định | Trạng thái |
|---|---|---|
| QĐ1 | Có thêm chặng M4 "tự kiểm tra kết quả" vào kịch bản hay chỉ quan sát | Đã chốt ở `02_scenario.md` mục 8: Chỉ quan sát |
| QĐ2 | Câu chữ kịch bản, dữ liệu đưa cho người tham gia, tiêu chí hoàn thành, thời gian chuẩn | Đã chốt ở `02_scenario.md` (QĐ2a đến QĐ2d): Dùng từ "danh mục"; giá ghi `2990000`; kịch bản và phiếu dữ liệu trong file mở sẵn; thời gian chuẩn bằng thời gian SV tự làm ×3 sau pilot (toàn luồng 02:18.75), cố định cho P1 đến P7 |
| QĐ3 | Trực tiếp hay từ xa | Đã chốt: Tùy từng người tham gia, ghi hình thức trong hồ sơ phiên, đánh dấu riêng phiên từ xa khi tổng hợp thời gian |
| QĐ4 | Định nghĩa "bế tắc hẳn" và câu can thiệp chuẩn | Đã chốt ở `02_scenario.md` mục 5: Ngưỡng 2 phút (giảm từ 3 phút sau pilot), 4 mức can thiệp |
| QĐ5 | SUS hay UEQ-S | Đã chốt ở `03_instruments.md` mục I5: SUS, tự điền Google Form |
| QĐ6 | Thang severity cho finding usability | ⏳ Bước `analysis` |

---

## Thay đổi so với bản AI

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục 0 | Bỏ lưu ý "chưa có ảnh chụp màn hình Admin", thêm dòng "Ảnh giao diện" | Quyết định của SV | | SV đã chụp `flow_01` đến `flow_11` |
| Mục 10.1 | Đổi G1 đến G4 từ giả định thành kết quả đối chiếu với ảnh (G1, G2, G3 đúng; G4 đúng một phần, kiểm lại ở pilot) | Quyết định của SV | | flow_02, flow_03, flow_06 đến flow_09; SV xác nhận danh mục mới có ngay trong danh sách |
| Mục 3.2, M1 đến M3 | Ghi rõ dấu hiệu kết thúc theo giao diện thật: Trang Dashboard; dòng cuối bảng danh mục; dòng cuối bảng sản phẩm. Việc sản phẩm nằm đúng danh mục chuyển sang kiểm sau phiên (D6) | Thiếu | Prompt: Bản AI viết khi chưa có ảnh nên không biết giao diện thực tế | flow_02, flow_05, flow_11 |
| Mục 8.1, D6 | Thêm cách kiểm danh mục của sản phẩm: Trang chi tiết trên web bán hàng (FR-06) hoặc form "Sửa" trong Admin, vì bảng sản phẩm không có cột Danh mục | Thiếu | Đặc thù giao diện: Bảng sản phẩm của Admin không hiển thị danh mục | flow_11, FR-06 |
| Mục 2, Q2 và Q7 | Nêu rõ hệ thống không hiện thông báo sau khi lưu; câu hỏi chuyển sang việc người dùng dựa vào đâu để biết đã thành công | Thiếu | Prompt: Chưa có ảnh trạng thái sau khi lưu | flow_05, flow_10; SV xác nhận không có thông báo nào |
| Mục 2, Q3; mục 8.1, D3 (a) | Thêm rủi ro vào nhầm khối "Import sản phẩm từ CSV" nằm trên form thêm sản phẩm | Thiếu | Đặc thù giao diện: Bố cục trang "Quản lý Sản phẩm" của EShop | flow_06 |
| Mục 2, Q4; mục 8.1, D3 (c) | Thêm chi tiết ô danh mục mặc định chọn "Điện thoại", không có lựa chọn trống; thêm loại lỗi "lưu với danh mục không phải danh mục mới" | Thiếu | Đặc thù giao diện: Giá trị mặc định của ô danh mục | flow_07, flow_08 |
| Mục 2, Q5; mục 8.1, D3 (d) | Thêm chi tiết các ô không có nhãn, không có dấu `*`, ô giá không có dấu phân cách; thêm loại lỗi "nhập giá thừa hoặc thiếu chữ số 0" | Thiếu | Prompt: Chưa có ảnh form sản phẩm | flow_07, flow_09; FR-21, FR-22 |
| Mục 2, Q9 | Thêm chi tiết trang đăng nhập dùng tiếng Anh, trái với FR-21 | Thiếu | Prompt: Chưa có ảnh trang đăng nhập | flow_01; FR-21 |
| Mục 8.1, D7 | Thêm "kiểm bằng cách nào" và liên kết với Q2 | Thiếu | Prompt: Chưa biết hệ thống không có thông báo, nên cách người dùng tự kiểm trở thành dữ liệu chính cho Q2 | flow_05, flow_10 |
| Mục 10.2 | Bỏ rủi ro "danh mục mới không hiện trong form sản phẩm" | Thừa | | Đã kiểm là không xảy ra (flow_08, SV xác nhận) |
| Mục 10.2 | Thêm rủi ro sản phẩm nằm sai danh mục mà không ai nhận ra | Thiếu | Đặc thù giao diện: Danh mục mặc định cộng với việc không có thông báo và không có cột Danh mục | flow_07, flow_10, flow_11 |
| Mục 5, 6, 8.4, 9, 10.2, 11 (QĐ3) | Chốt địa điểm: Tùy từng người tham gia; ghi hình thức trong hồ sơ phiên; đánh dấu riêng phiên từ xa khi tổng hợp thời gian; thêm vào hạn chế của nghiên cứu | Quyết định của SV | | SV chọn phương án "Tùy từng người" |
| Mục 7 (QĐ4), mục 11 (QĐ2, QĐ4) | Cập nhật theo kết quả sau pilot: Thời gian chuẩn ×3 (toàn luồng 02:18.75), ngưỡng "bế tắc hẳn" 2 phút | Quyết định của SV | | Pilot; `02_scenario.md` mục 4.4, 5 |
| Mục 5, trình tự phiên | Chỉnh thời lượng: Mở đầu 2 đến 3 phút, phiếu thông tin 1 đến 2 phút, làm nhiệm vụ 2 đến 5 phút (tối đa 15 phút); tổng 15 đến 25 phút (trước đó 25 đến 40 phút); thêm số đo pilot | Quyết định của SV | | Pilot: Cả phiên 16 phút, làm nhiệm vụ khoảng 1,5 phút (`pilot/notes.md` mục 2, 8.2) |
| Mục 3.2, 7, 8.2, 11 (QĐ1, QĐ2, QĐ4, QĐ5) | Cập nhật trạng thái từ "⏳" thành "Đã chốt", dẫn tới chỗ chốt trong `02_scenario.md` và `03_instruments.md` | Quyết định của SV | | SV chốt các quyết định này ở bước `scenario` và `instruments` |
| Mục 0, 8.4 | Thêm FR-06 vào đặc tả liên quan | Thiếu | Prompt: Bản AI chỉ xét các FR của phân hệ Admin, chưa nghĩ tới việc kiểm kết quả qua web bán hàng | FR-06 |
