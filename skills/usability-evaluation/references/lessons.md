# Bài học: Checklist tự kiểm trước khi giao

Rút từ các bảng "Thay đổi so với bản AI" của lần làm đầu (HW03 Task 2, EShop, luồng FL-05 Web Admin). Mỗi mục ghi lỗi đã gặp để hiểu vì sao có quy tắc. Đi qua checklist của bước đang làm **trước khi giao** bản AI và bản review.

## Chung cho mọi bước

- [ ] Không có thông tin cá nhân của người tham gia; chạy `check_usability.py privacy`.
- [ ] Không có dữ liệu "của người thật" do AI tạo (thời gian đo, câu trả lời, ghi chú).
- [ ] Mỗi điểm cần chọn có mã `QĐ`, phương án đánh chữ, dấu `⏳`; AI không chọn thay.
- [ ] Quyết định bước này chốt cho bước trước đã được cập nhật ở cả bản review của bước trước.
  *Đã gặp:* Plan có 5 quyết định để mở, chốt dần ở `scenario` và `instruments`; phải quay lại cập nhật trạng thái ở plan.
- [ ] Hành vi của giao diện mà ảnh không cho thấy đã được hỏi sinh viên thử, không đoán.
- [ ] Bảng thay đổi ghi đúng người phát hiện và ghi rõ khi sinh viên chọn khác gợi ý của AI.

## `plan`

- [ ] Đã có ảnh luồng trước khi viết, gồm trạng thái **ngay sau mỗi lần lưu**.
  *Đã gặp:* Bản AI viết khi chưa có ảnh; khi review với ảnh có 10 dòng loại Thiếu: Không có thông báo sau khi lưu, form tự xóa trắng, khối nhập CSV nằm trên form thêm, ô danh mục mặc định chọn sẵn, ô không có nhãn và không có dấu `*`, trang đăng nhập tiếng Anh, dấu hiệu kết thúc chặng chưa theo giao diện thật.
- [ ] Mỗi câu hỏi `Qn` dựa trên một điểm thấy trong ảnh hoặc một yêu cầu SRS, gắn chặng và khía cạnh probe.
- [ ] Dấu hiệu kết thúc chặng quan sát được trên giao diện; kết quả không thấy được trong phiên ghi là kiểm sau phiên, kèm cách kiểm.
  *Đã gặp:* Bảng sản phẩm không có cột danh mục; phải kiểm bằng trang chi tiết trên web bán hàng (một FR ngoài phân hệ Admin) hoặc form sửa (loại Thiếu, "Đặc thù giao diện").
- [ ] Đã xét FR của màn hình khác có thể dùng để kiểm kết quả cuối.
- [ ] Rủi ro do giao diện đã nêu (giá trị mặc định cộng với không có thông báo khiến dữ liệu sai mà không ai nhận ra).
- [ ] Giả định về giao diện đã đối chiếu với ảnh; rủi ro đã loại trừ bằng ảnh thì bỏ.
  *Đã gặp:* Rủi ro "danh mục mới không hiện trong form sản phẩm" đã được ảnh và sinh viên xác nhận là không xảy ra (loại Thừa).

## `scenario`

- [ ] Kịch bản không dùng nguyên văn nhãn nút, menu; từ khóa trùng nhãn có ghi lưu ý khi phân tích.
- [ ] Cách ghi dữ liệu trên phiếu đã được sinh viên thử trên ô thật.
  *Đã gặp:* Phiếu đề xuất ghi giá `2.990.000 ₫`; sinh viên thử thì ô tự đổi thành `2.990000` và không sửa được, nên phiếu ghi `2990000` (loại Thiếu, "Prompt").
- [ ] Tiêu chí hoàn thành ghi đúng **cái người điều phối nhìn thấy** trên giao diện, không theo định dạng mong muốn.
  *Đã gặp:* Tiêu chí "giá đúng 2.990.000 ₫" trong khi bảng hiện `2990000 ₫` (loại Sai).
- [ ] Không có con số thời gian chuẩn chưa có căn cứ đo; có cách đo và bảng để sinh viên điền.
  *Đã gặp:* Bản AI đưa 1, 2, 4, 7 phút; sinh viên tự đo (toàn luồng 46 giây) và chọn bội số x5.
- [ ] Trạng thái ban đầu loại trừ mật khẩu đã lưu và tiện ích tự dịch.
- [ ] Tình huống đặc biệt đi theo lỗi dễ xảy ra trên giao diện thật, tách các biến thể khác nhau (nhập sai số chữ số 0 khác với gõ dấu chấm theo thói quen).
- [ ] Có mục "Cần kiểm ở pilot" cho mọi giả định và con số chưa chắc.

## `instruments`

- [ ] Mục đích của văn bản đọc cho người tham gia được nói rõ.
  *Đã gặp:* Sinh viên hỏi "đọc nguyên văn" là để ghi âm nộp hay để nói với người tham gia (loại Mơ hồ).
- [ ] Có cách xử lý khi think-aloud không đủ: Người nói ít, người làm nhanh ít nói, người không đồng ý ghi âm.
  *Đã gặp:* Bản AI không nghĩ tới việc think-aloud không thu được khi không có âm thanh, dù plan ghi ghi âm là không bắt buộc (loại Thiếu, "Giới hạn model").
- [ ] Cách đưa thang đo nêu hạn chế: Trả lời trước mặt người điều phối có thể làm điểm cao hơn.
  *Đã gặp:* Bản AI đề xuất người điều phối đọc từng câu cho phiên từ xa mà không nêu hạn chế này; sinh viên đổi sang tự điền form (loại Thiếu, "Giới hạn model").
- [ ] Bằng chứng đồng ý có tên hoặc ảnh đại diện được lưu ngoài repo.
- [ ] Mã nhắc think-aloud (mức 0) ghi rõ không tính là can thiệp.
  *Đã gặp:* Bản AI gộp mã nhắc với mã can thiệp mà không nói rõ mức nào được tính (loại Mơ hồ).
- [ ] Mã sự kiện ở phiếu ghi chú khớp số liệu của plan và tình huống của kịch bản.
- [ ] Câu hỏi mở phủ đủ khía cạnh đề yêu cầu, câu chữ trung lập; có phần hỏi theo tình huống và hỏi lại điểm vướng.
- [ ] Danh sách chuẩn bị đã cập nhật theo mọi quyết định (form thang đo, tin nhắn đồng ý).

## `pilot`

- [ ] Mẫu hồ sơ pilot có bảng kiểm từng điểm "Cần kiểm ở pilot", có chỗ ghi điều **phát sinh**.
  *Đã gặp:* Ba điểm quan trọng nhất của pilot là phát sinh, không có trong danh sách: Bộ gõ tiếng Việt đang bật làm người pilot gõ sai email; người pilot hỏi có được sao chép từ phiếu dữ liệu không; người pilot đăng nhập trước khi đọc kịch bản nên mốc T1 rơi trước T0.
- [ ] Trạng thái ban đầu có cả điều kiện của máy (bộ gõ, ngôn ngữ bàn phím), không chỉ của trình duyệt.
- [ ] Kịch bản dặn rõ thời điểm bắt đầu thao tác (đọc hết rồi mới chạm chuột) để mốc thời gian đúng thứ tự.
- [ ] Phiếu dữ liệu nói rõ được sao chép, nếu đưa ở dạng sao chép được.
- [ ] Bội số thời gian chuẩn được kiểm lại bằng số đo pilot; ngưỡng "bế tắc hẳn" chỉnh theo chuẩn mới.
  *Đã gặp:* Người pilot làm toàn luồng trong 01:24, khoảng 36% chuẩn x5 cũ (03:51.25), nên chuẩn x5 không phân biệt được chặng vướng; sinh viên giảm xuống x3 (02:18.75) và giảm ngưỡng "bế tắc hẳn" từ 3 xuống 2 phút.
- [ ] Thời lượng phiên trong test plan và trong tin nhắn xin đồng ý cập nhật theo số đo.
  *Đã gặp:* Test plan ước lượng 25 đến 40 phút; pilot 16 phút. Test plan đổi thành 15 đến 25 phút, tin nhắn đổi thành 15 đến 30 phút.
- [ ] Ghi hạn chế khi chỉnh theo một người pilot (nhóm tuổi, mức quen máy tính của người đó).
- [ ] Con số sau pilot giống nhau ở cả test plan, kịch bản, bộ công cụ.
- [ ] Lỗi chỉ lộ ra khi người điều phối kiểm kết quả sau phiên thì câu hỏi theo tình huống cho lỗi đó không hỏi được; ghi lại trong hồ sơ.
  *Đã gặp:* Người pilot lưu giá thiếu một chữ số 0 mà không nhận ra; lỗi chỉ thấy lúc kiểm kết quả sau phiên, khi câu hỏi mở đã xong.

## `sessions` (P1 đến Pn)

- [ ] Không tính điểm thang đo lúc ghi phiên; để `score` tính bằng script.
  *Đã gặp:* Lúc ghi phiên P5, AI tính nhẩm điểm SUS ra 55; script cho 52,5. `04_scores.md` phải ghi đính chính.
- [ ] Hồ sơ chép từ phiên trước không còn nhãn `P<n-1>`.
- [ ] Sai lệch quy trình của người điều phối ghi đúng như đã xảy ra, kèm mốc.
  *Đã gặp:* P1 nhận 2 gợi ý ngoài quy trình (tính là can thiệp mức 1); P7 bị dừng ở M1 thay vì can thiệp mức 1 theo kịch bản; P3 hỏi cách làm nhưng không được đáp bằng câu chuẩn. Cả ba được ghi vào hồ sơ và phần hạn chế.
- [ ] Cách kiểm kết quả sau phiên không bị chính lỗi của hệ thống làm sai.
  *Đã gặp:* Người điều phối kiểm danh mục của P4 bằng form "Sửa" trên trang chưa tải lại; do bug #67, form hiện giá trị cũ nên kết quả của P4 "không xác định được". Lần sau tải lại trang trước khi kiểm.
- [ ] Quy trình thật của phiên khác test plan (mở đầu qua tin nhắn, phiếu thông tin trước khi quay) được ghi ở phần cách làm, và thời lượng phiên tính đúng theo quy trình thật.
- [ ] Mặc định chỉ dùng khi sinh viên đã chốt; chi tiết không có trong ghi chú thì hỏi.

## `score`

Bảng thay đổi của `04_scores.md` chỉ có 2 dòng, đều là "Quyết định của SV": Bản AI đã để mở đúng hai chỗ có nhiều cách báo số liệu. Giữ cách làm này.

- [ ] Chỗ có nhiều cách báo số liệu đưa thành `QĐ-Sn` có phương án.
  *Đã gặp:* Thời gian báo theo mọi người tới được mốc cuối chặng hay chỉ người tự hoàn thành (chỉ 3 người); sinh viên chọn mọi người tới được mốc. Người chọn mức 5 cho cả câu khen lẫn câu chê của SUS; sinh viên chọn giữ trong trung bình và báo thêm trung bình khi bỏ người đó (chênh 1,25 điểm).
- [ ] Người bỏ cuộc không được tính vào thời gian tự kiểm tra.
  *Đã gặp:* Script tính P4 (bỏ cuộc, T4 trùng T3) là 00:00, cho trung bình 00:10; đúng là 00:12 trên 5 người. Bản AI ghi cả hai con số và lý do.
- [ ] Vượt chuẩn nhỏ hơn độ chính xác của mốc thì ghi rõ.
  *Đã gặp:* P2 vượt chuẩn toàn luồng 0,25 giây trong khi mốc ghi theo giây.
- [ ] Tỷ lệ theo chặng ghi cả trên tổng người và trên số người tới được chặng.
- [ ] Bảng nào do script, bảng nào tổng hợp tay được ghi ở phần cách làm.
- [ ] Phần nhận xét chỉ mô tả số liệu; gom và xếp hạng để `analysis`.

## `analysis`

Bảng thay đổi của `05_findings.md` chỉ có "Quyết định của SV", nhưng một quyết định làm phải chấm lại cả bảng.

- [ ] Hỏi thang severity **trước** khi chấm.
  *Đã gặp:* Bản AI chấm theo Nielsen 0 đến 4; sinh viên chọn thang 4 mức của nhóm (cây câu hỏi dùng cho Issues), nên mọi dòng phải chấm lại, thêm cột "Lý do theo cây câu hỏi" và tính lại criticality.
- [ ] Hỏi quy tắc ưu tiên khi criticality và hậu quả không cùng chiều.
  *Đã gặp:* Bug làm mất dữ liệu chỉ 1/7 người gặp nên criticality thấp; sinh viên chọn đưa nó lên đầu danh sách.
- [ ] Ghi giới hạn của thang: Cây câu hỏi dựng cho bug làm phần lớn vấn đề thiết kế cùng một mức.
- [ ] Probability thấp vì ít người dùng tới tính năng thì nêu tỷ lệ trên số người đã dùng tính năng đó.
- [ ] Chỉ là bug khi chỉ ra được câu SRS bị làm sai.
  *Đã gặp:* Ô danh mục chọn sẵn mặc định là nguyên nhân chính làm M3 thất bại, nhưng hệ thống không sai câu "Danh mục: bắt buộc, phải chọn từ danh sách có sẵn", nên là vấn đề thiết kế, không lên Issues.
- [ ] Tách phần do cách làm bài khỏi phần do giao diện.
  *Đã gặp:* Kịch bản ở file riêng làm tăng số lần mở lại kịch bản; phiếu cho sao chép làm giảm lỗi gõ giá. Hai phát hiện ghi rõ có thể bị đánh giá lệch.
- [ ] Đối chiếu lời nói với hành vi.
  *Đã gặp:* P1, P5 trả lời "không có ô nào không chắc phải điền gì", nhưng thực ra không thấy ô danh mục.
- [ ] Pilot chỉ là bằng chứng phụ, không tính vào số người gặp.

## `bugs`

- [ ] Ảnh issue chụp khi tái hiện ngoài phiên, không lấy từ video phiên.
- [ ] Ảnh tự chụp bằng script không lọt cửa sổ khác.
  *Đã gặp:* Script tái hiện bug #67 phóng to cửa sổ Chrome của script rồi mới chụp, để không lọt cửa sổ đang mở file có thông tin người tham gia; trước khi chạy, đóng file đó ở mọi cửa sổ.
- [ ] Script tái hiện không tự kết luận; sinh viên xem ảnh và log rồi chốt.
- [ ] Bug thấy ở pilot vẫn báo được (người pilot không tính vào số người, nhưng bug là thật).
  *Đã gặp:* #66 phát hiện ở pilot, sinh viên tái hiện và chụp lại.
- [ ] Ghi `Related #<số>` khi bug có thể cùng nguyên nhân với issue khác, kèm lý do.
- [ ] Mỗi phát hiện loại bug có đúng một issue; vấn đề thiết kế không lên Issues.
