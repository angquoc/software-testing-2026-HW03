# Bước `scenario`: Kịch bản nhiệm vụ

**Mục tiêu:** Biến luồng thành một kịch bản **dạng mục tiêu** (đề: "give participants a goal, not step-by-step instructions"), cùng mọi thứ người điều phối cần để 7 phiên giống nhau và đo được: Phiếu dữ liệu, trạng thái ban đầu, thành phần nhiệm vụ theo slide S13 ("Task components": Task, Machine state, Successful completion criteria, Benchmark), mốc thời gian, can thiệp, tình huống đặc biệt.

**Đầu ra:** `ai_raw/T2_scenario.md`, `02_scenario.md`.

## Hỏi trước khi viết

- Có hành vi nào của ô nhập trong luồng mà sinh viên **chưa thử** nhưng ảnh hưởng tới phiếu dữ liệu không (ô số có tự định dạng không, gõ dấu phân cách thì sao, ô ảnh nhận URL hay file)? Nhờ sinh viên thử trước; nếu chưa thử được thì ghi `QĐ` có phương án và để "cần kiểm ở pilot".
- Dữ liệu thật mà AI không kiểm được (URL ảnh có tồn tại không): Để sinh viên chọn.

## Pha B: AI viết bản gốc

Theo mẫu `assets/templates/scenario.md`:

0. **Căn cứ:** Plan (chặng, số liệu, quyết định), đề, slide, SRS, ảnh, kết quả sinh viên thử.
1. **Nguyên tắc viết kịch bản:** Mục tiêu, không phải các bước; **không dùng nguyên văn nhãn nút và menu** làm gợi ý (để đo được việc tự tìm đường); bối cảnh thật đúng chân dung người dùng; cùng một kịch bản cho mọi người; người tham gia tự nói khi xong (một câu cố định, ví dụ "Tôi làm xong rồi").
2. **Kịch bản đưa cho người tham gia:**
   - Câu chữ (khối trích dẫn). Từ khóa không tránh được mà trùng nhãn trên giao diện: Đưa phương án (`QĐ`) và ghi lưu ý khi phân tích câu hỏi tìm đường.
   - Phiếu dữ liệu: Tài khoản, giá trị cần nhập. Dữ liệu không trùng dữ liệu mẫu và dữ liệu sinh viên đã dùng khi chụp ảnh. Cách ghi giá trị có định dạng (số tiền) theo kết quả sinh viên đã thử. Dữ liệu dài (URL) đưa ở dạng sao chép được.
   - Cách đưa kịch bản và phiếu (`QĐ`: giấy, file mở sẵn, tin nhắn), theo hình thức phiên.
3. **Trạng thái ban đầu:** Dữ liệu đã reset; hệ thống đang chạy; trình duyệt ở trang bắt đầu, một tab, zoom; **không có mật khẩu đã lưu** (hồ sơ trình duyệt riêng hoặc chế độ khách) để chặng đăng nhập có ý nghĩa; tắt dịch tự động và tiện ích chèn gợi ý; dữ liệu bên ngoài (URL ảnh) đã kiểm trong ngày; quay màn hình đã bật.
4. **Thành phần nhiệm vụ:**
   - Theo chặng: Nhiệm vụ, trạng thái ban đầu, **tiêu chí hoàn thành theo đúng cái người điều phối nhìn thấy trên giao diện** (theo ảnh), thời gian chuẩn.
   - Toàn luồng: Thêm thời gian tối đa và việc gì xảy ra khi hết giờ.
   - Cách xếp kết quả: Tự hoàn thành, hoàn thành nhờ can thiệp, không hoàn thành (kể cả khi dữ liệu sai mà người tham gia không tự sửa).
   - **Thời gian chuẩn:** AI **không** đưa con số làm chuẩn. Ghi cách đo: Sinh viên tự làm luồng với đúng phiếu dữ liệu sau khi reset, bấm giờ từng chặng; nhân một bội số do sinh viên chọn (đưa vài phương án, ví dụ x3, x5, x10, kèm hệ quả); chỉnh một lần sau pilot rồi giữ cố định. Bảng đo để trống, có cột "Sau pilot". Nếu muốn nêu con số tham khảo thì ghi rõ "chưa có căn cứ đo, không dùng cho đến khi sinh viên đo xong".
   - Mốc `T0` đến `Tn`: Sự kiện quan sát được tại mỗi mốc; khoảng từ lúc lưu lần cuối tới lúc nói xong là thời gian tự kiểm tra.
5. **Can thiệp:** Định nghĩa "bế tắc hẳn" (ví dụ không tiến triển khoảng 3 phút ở một chặng, hỏi cách làm từ lần thứ hai, nói muốn bỏ cuộc), là đề xuất để `QĐ`; các mức can thiệp kèm câu nói chuẩn (mức 0 chỉ là nhắc think-aloud, không tính); cách trả lời khi người tham gia hỏi (trả lời về mục tiêu và dữ liệu, không trả lời về cách làm); cách ghi mỗi lần can thiệp.
6. **Tình huống đặc biệt:** Bảng (tình huống, cách xử lý, ghi vào số liệu nào). Gồm các lỗi dễ xảy ra **theo giao diện thật** (vào nhầm khối, để nguyên giá trị mặc định, nhập sai định dạng, tạo trùng), cơ chế của hệ thống có thể gặp (khóa tài khoản), lỗi môi trường, hệ thống lỗi.
7. **Trình tự đưa kịch bản trong phiên.**
8. Câu hỏi thiết kế còn mở của plan liên quan tới kịch bản (ví dụ có thêm chặng "tự kiểm tra kết quả" không): Phương án và hệ quả.
9. **Cần kiểm ở pilot:** Mỗi giả định, con số, cách đưa phiếu còn chưa chắc.
10. **Tổng hợp các quyết định để mở ⏳.**

Tự kiểm: `format`, `ids`, `privacy`; checklist bước `scenario` trong `lessons.md`. **Dừng**, đưa commit message.

## Pha D: Bản review `02_scenario.md`

- Áp quyết định; điền bảng thời gian chuẩn bằng số sinh viên đo (định dạng `phút:giây.phần trăm giây`), ghi bội số và lý do sinh viên chọn, các phương án đã xét.
- Kiểm tiêu chí hoàn thành khớp với ảnh (ví dụ giá hiện không có dấu phân cách trong bảng thì tiêu chí ghi đúng như vậy).
- Cập nhật trạng thái các quyết định của plan mà bước này chốt, ở cả `01_test_plan.md`.
- Viết bảng thay đổi. Chạy lại script. **Dừng.**
