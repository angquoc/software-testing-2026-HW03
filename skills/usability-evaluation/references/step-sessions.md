# Bước `P1` đến `Pn`: Ghi hồ sơ từng phiên

**Mục tiêu:** Mỗi phiên thật có một hồ sơ đầy đủ theo bộ công cụ (`03_instruments.md`), chỉ dùng mã người tham gia, đúng với những gì sinh viên quan sát và người tham gia trả lời. Hồ sơ là đầu vào của `score` và `analysis`.

**Đầu ra:** `sessions/P<n>/notes.md` (phiếu thông tin I3, thông tin phiên, mốc thời gian, kết quả theo chặng, nhật ký sự kiện, kiểm kết quả sau phiên, ghi chú cuối phiên), `sessions/P<n>/scale.md` (thang đo nguyên văn), `sessions/P<n>/probe.md` (câu hỏi mở), ảnh `P<n>_<số>_<nội dung>.png` đã che thông tin cá nhân.

Quy trình dưới đây rút từ lần làm đầu (HW03 FL-05, 7 phiên trực tiếp, cùng một máy, không phiên nào có âm thanh).

## Ai làm gì

| Việc | Ai làm |
|---|---|
| Chạy phiên, quan sát, ghi chú tay theo mốc video, hỏi câu hỏi mở, kiểm kết quả sau phiên, chép câu trả lời thang đo | **Sinh viên** |
| Chuyển ghi chú tay của sinh viên (đã ẩn danh) thành `notes.md`, `scale.md`, `probe.md` theo mẫu; gắn mã sự kiện; tính thời gian từng chặng từ mốc | AI, khi sinh viên đưa ghi chú |
| Kiểm và chốt hồ sơ | **Sinh viên** |

AI chỉ **chép và sắp xếp** những gì sinh viên ghi. Không thêm quan sát, lời nói, mốc thời gian hay câu trả lời mà ghi chú không có. Không xem video.

## Thông tin cần hỏi nếu ghi chú thiếu

- Giờ bắt đầu và kết thúc phiên; mốc video của từng `Tn`.
- Mốc video và mô tả của từng sự kiện đáng ghi (do dự, lỗi, hỏi người điều phối, can thiệp).
- Kết quả từng mục kiểm kết quả sau phiên khi người tham gia có lỗi dữ liệu.
- Câu trả lời thang đo (chép từ bảng câu trả lời của form).

## Mặc định khi ghi chú không nói (lần đầu, sinh viên chốt ngày 10/11 và 11/11/2026)

Chỉ dùng khi sinh viên đã chốt cho dự án đó; dự án khác thì hỏi lại:

- Chỉ hỏi các câu hỏi mở bắt buộc (C1 đến C9); câu theo tình huống và câu hỏi lại điểm vướng ghi "(Không hỏi)", lý do "chỉ hỏi C1 đến C9". Sinh viên sẽ nói rõ nếu có hỏi thêm.
- Người tham gia gõ đúng mã trong form thang đo (người điều phối đọc mã).
- Kết quả cuối kiểm bằng form "Sửa" trong Admin; mục kiểm không được nhắc là Đạt.
- Chi tiết phiên không được nhắc là đúng như đã quan sát.
- Quy trình thật của phiên: Lời mở đầu gửi qua tin nhắn trước; tại phiên chỉ hỏi lại một câu xác nhận đồng ý; phiếu thông tin (I3) điền trước khi bật quay. Vì vậy thời lượng phiên tính từ lúc bật quay, gồm làm nhiệm vụ, điền form thang đo, câu hỏi mở. Ghi điều này vào phần cách làm của `score` và phần phương pháp của báo cáo.

## Cách ghi

- Theo đúng mẫu I4 của `03_instruments.md`; mã sự kiện theo bảng mã I4.5; thời gian chuẩn lấy từ cột "Sau pilot" của kịch bản.
- Lời nói ghi tay đánh dấu "(ghi tay)" khi phiên không có âm thanh.
- **Sai lệch quy trình của người điều phối** (gợi ý ngoài các mức can thiệp chuẩn, dừng phiên sớm, không đáp bằng câu chuẩn) ghi đúng như đã xảy ra, kèm mốc: Gợi ý ngoài quy trình vẫn tính là can thiệp. Không làm đẹp số liệu.
- Kết quả theo chặng xếp theo "Cách xếp kết quả" của kịch bản (dữ liệu sai mà người tham gia không tự sửa là "Không hoàn thành").
- **Không tính điểm thang đo** ở bước này; để `score` tính bằng script.
- Sinh viên chép `notes.md` của phiên trước làm điểm bắt đầu: Kiểm và sửa mọi nhãn `P<n-1>` còn sót.
- Ảnh chụp từ video: Sinh viên cắt bỏ khuôn mặt và thông tin cá nhân trước khi lưu hay đưa vào AI.

## Tự kiểm

- `check_usability.py privacy` trên ba file của phiên (không có tên, số điện thoại, email của người tham gia).
- Mã trong mọi file đúng `P<n>` của phiên.
- Mốc thời gian đúng thứ tự; thời gian chặng tính đúng từ mốc; vượt chuẩn đánh dấu đúng.
- Mọi dòng nhật ký có mã sự kiện; mỗi lần can thiệp có mốc, chặng, mức, lý do, câu đã nói.
- Checklist bước `sessions` trong `lessons.md`.

**Dừng** sau mỗi phiên, chờ sinh viên kiểm. Mỗi phiên một commit (ví dụ `[T2][P3] Record session P3 notes and SUS answers`).
