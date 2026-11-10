# Bước `pilot`: Phiên thử và sửa sau pilot

**Mục tiêu:** Chạy một phiên thử với một người (`PL`, không tính vào số người tham gia) theo đúng bộ công cụ, trả lời từng điểm "Cần kiểm ở pilot" của kịch bản và bộ công cụ, rồi sửa kịch bản, bộ công cụ, test plan **trước** phiên thật đầu tiên.

**Đầu ra:** `pilot/notes.md`, `pilot/probe.md`, `pilot/scale.md` (dữ liệu của người thật, sinh viên ghi); cập nhật `01_test_plan.md`, `02_scenario.md`, `03_instruments.md`. Video pilot không đưa vào AI.

Quy trình dưới đây rút từ lần làm đầu (HW03 FL-05, pilot ngày 10/11/2026, phiên trực tiếp 16 phút, người pilot không đồng ý ghi âm).

## Pha 1: Chuẩn bị hồ sơ pilot (AI được làm, chỉ mẫu trống)

1. `pilot/notes.md`: Ghi chú đầu file (bước, mẫu dùng, chỉ dùng mã `PL`, người pilot không tính vào số người tham gia); phiếu thông tin trước phiên (I3) và phiếu ghi chú quan sát (I4) chép từ `03_instruments.md`, để trống.
2. Thêm mục cuối **"Kết quả kiểm bộ công cụ"**, hai bảng:
   - Kịch bản: Mọi điểm ở mục "Cần kiểm ở pilot" của `02_scenario.md`.
   - Bộ công cụ: Mọi điểm ở mục "Cần kiểm ở pilot" của `03_instruments.md`.

   Cột: Điểm cần kiểm, Quan sát ở pilot (trống), Cần sửa (trống). Dặn sinh viên thêm dòng **"Phát sinh: ..."** cho điều không có trong danh sách.
3. `pilot/probe.md` theo mẫu I6 (câu hỏi bắt buộc, câu hỏi theo tình huống chỉ ghi các câu đã hỏi, câu hỏi về điểm vướng); `pilot/scale.md` theo mẫu I5 (chép nguyên văn dòng `PL` từ bảng câu trả lời, ghi chú "khi tổng hợp thì loại dòng `PL`").

AI không điền bất kỳ ô quan sát, câu trả lời hay thời gian nào. **Dừng.**

## Pha 2: Sinh viên chạy pilot

Sinh viên chạy phiên đúng theo bộ công cụ, rồi điền hồ sơ: Phiếu thông tin, thông tin phiên, mốc thời gian, kết quả theo chặng, nhật ký sự kiện có mã, kiểm kết quả sau phiên, ghi chú cuối phiên, câu trả lời câu hỏi mở, thang đo, và bảng "Kết quả kiểm bộ công cụ" (quan sát, đề xuất sửa). Sai lệch trình tự so với kịch bản (ví dụ người pilot thao tác trước khi đọc kịch bản) ghi dưới bảng mốc thời gian, kèm cách đã tính thời gian.

## Pha 3: AI đọc hồ sơ pilot và đề xuất sửa

1. Đọc `pilot/notes.md`, `probe.md`, `scale.md` (đã ẩn danh, mã `PL`). Không đọc video. Chạy `check_usability.py privacy` trên ba file; thấy thông tin cá nhân thì báo sinh viên, không đọc tiếp phần đó.
2. Kiểm hồ sơ: Mọi điểm "Cần kiểm ở pilot" có quan sát; thời gian theo chặng tính đúng từ mốc (nếu có sai lệch trình tự thì cách tính đã ghi rõ); kết quả toàn luồng khớp cách xếp kết quả của kịch bản. Chỗ thiếu hoặc lệch: Hỏi sinh viên, không tự sửa số liệu.
3. Lập bảng đề xuất sửa từ cột "Cần sửa" và các dòng "Phát sinh": Mỗi đề xuất ghi file và mục bị ảnh hưởng, phương án (đánh chữ cái nếu có nhiều), hệ quả. Với con số (bội số thời gian chuẩn, ngưỡng "bế tắc hẳn", thời lượng phiên), tính sẵn giá trị theo từng phương án và so với số đo pilot. Ghi rõ hạn chế: Chỉ có số đo của **một** người.
4. **Dừng** chờ sinh viên chốt từng đề xuất. Sinh viên chọn khác đề xuất thì làm theo sinh viên.

## Pha 4: Cập nhật các bản review

Sửa trực tiếp `01_test_plan.md`, `02_scenario.md`, `03_instruments.md` (không sửa `ai_raw/`). Những chỗ đã sửa ở lần đầu, để tra:

| File | Chỗ sửa sau pilot ở lần đầu |
|---|---|
| `02_scenario.md` | Mục thời gian chuẩn: Điền cột "Sau pilot" (bội số mới, giá trị từng chặng, ghi "dùng cố định cho các phiên thật"), thêm bảng số đo pilot so với thời gian sinh viên tự làm và chuẩn cũ, lý do chọn, hạn chế. Mục can thiệp: Ngưỡng "bế tắc hẳn" theo chuẩn mới. Trạng thái ban đầu: Thêm điều kiện môi trường phát sinh (bộ gõ). Trình tự đưa kịch bản: Câu dặn đọc hết kịch bản rồi mới chạm chuột. Phiếu dữ liệu: Câu nói rõ được sao chép. Mục "Cần kiểm ở pilot": Dòng dẫn tới kết quả pilot. Mục tổng hợp quyết định: Đổi `⏳ Chỉnh sau pilot` thành "Đã chốt sau pilot: ..." |
| `03_instruments.md` | Danh sách chuẩn bị: Thêm dòng cho điều kiện phát sinh. Phiếu ghi chú: Thời gian chuẩn mới. Tin nhắn xin đồng ý: Thời lượng buổi thử theo số đo. Mục "Cần kiểm ở pilot": Dòng dẫn tới kết quả pilot |
| `01_test_plan.md` | Trình tự phiên: Thời lượng từng bước và tổng theo số đo pilot, kèm số đo. Vai trò người điều phối và tổng hợp quyết định: Trạng thái các quyết định chốt sau pilot |

Mỗi thay đổi một dòng trong bảng "Thay đổi so với bản AI" của file đó: Loại "Quyết định của SV", cột lý do ghi "Pilot" và chỗ trong hồ sơ (ví dụ "`pilot/notes.md` mục 8.1"). Các con số phải **giống nhau** ở cả ba file (thời gian chuẩn, ngưỡng, thời lượng); kiểm lại sau khi sửa.

Điểm pilot chưa kiểm được (ví dụ một câu hỏi mở chỉ dùng khi người tham gia không gặp lỗi, mà người pilot có gặp lỗi): Giữ nguyên, ghi "xem lại ở các phiên thật".

Tự kiểm: `check_usability.py format`, `changes`, `open` (không còn `⏳` nào ghi "sau pilot"), `privacy`; checklist bước `pilot` trong `lessons.md`. **Dừng**, đưa commit message (ví dụ `[T2][pilot] Run pilot session and refine scenario`).

## Quyết định còn mở

- ⏳ Dữ liệu pilot (ví dụ lỗi nhập giá người pilot gặp) có được đưa vào phần phân tích không: Chưa chốt ở lần đầu, để bước `analysis`.
