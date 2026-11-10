# Bước `score`: Điểm thang đo và số liệu hiệu suất

**Mục tiêu:** Tính điểm thang đo và các số liệu hiệu suất (D1 đến D8 của test plan) từ hồ sơ phiên đã ẩn danh, ghi rõ cách tính, để `analysis` dùng. Bước này chỉ **mô tả số liệu**; gom và xếp hạng phát hiện là việc của `analysis`.

**Đầu ra:** Script tính toán (lần đầu: `usability/tools/score_t2.py`), `ai_raw/T2_score.md`, `04_scores.md`.

Quy trình dưới đây rút từ lần làm đầu (HW03 FL-05, 7 phiên, SUS 6 người).

## Đầu vào

- `sessions/P1/` đến `sessions/Pn/` (`notes.md`, `scale.md`, `probe.md`), chỉ mã `P1` đến `Pn`, khi dự án cho phép. Không dùng pilot `PL` cho số liệu chính. Không đọc danh sách người tham gia, video.
- Test plan (số liệu D1 đến D10, cách tổng hợp mục 8.4), kịch bản (thời gian chuẩn sau pilot, cách xếp kết quả), bộ công cụ (cách tính thang đo, bảng mã sự kiện).

## Pha A: Script

Viết script đọc hồ sơ phiên, **in bảng Markdown ra màn hình**, không ghi file:

- Thang đo: Đọc dòng câu trả lời của `scale.md`; tính theo cách tính ở bộ công cụ (SUS: Câu lẻ = câu trả lời − 1, câu chẵn = 5 − câu trả lời, tổng × 2,5). In câu trả lời, điểm từng câu sau quy đổi, điểm SUS; trung bình, trung vị, min, max, độ lệch chuẩn, số người từ mốc tham khảo trở lên.
- Thời gian: Đọc mốc `Tn` ở `notes.md`; tính thời gian từng chặng, toàn luồng, tự kiểm tra; mốc không có giờ thì chặng không có thời gian. Độ lệch chuẩn mẫu (chia n − 1). In người vượt chuẩn.
- Đếm mã sự kiện trong cột "Mã" của nhật ký; mỗi dòng đếm một lần cho mỗi mã; in số người có ít nhất một lần.
- Ghi ở đầu script: File đọc, file không đọc, cách tính, cách chạy.

Các bảng cần đọc hiểu (kết quả từng chặng, can thiệp, kết quả cuối, cách tự kiểm) tổng hợp tay từ `notes.md`; ghi rõ ở phần cách làm bảng nào do script, bảng nào tổng hợp tay.

## Pha B: Bản AI `ai_raw/T2_score.md`

Theo mẫu `assets/templates/scores.md`:

0. **Cách làm:** Cách tính thang đo (nguồn), thời gian (công thức từng chặng, độ lệch chuẩn mẫu, chuẩn dùng), cách đếm mã, hình thức phiên (trực tiếp hay từ xa, có âm thanh không), cách tính thời lượng phiên.
1. **Người tham gia:** Bảng đặc điểm (phần B của phiếu thông tin) theo mã; câu tóm tắt nhóm chung và người khác nhóm; xác nhận mọi người đạt tiêu chí.
2. **Kết quả theo chặng (D1) và can thiệp (D4):** Bảng từng người; bảng chỉ số (tự hoàn thành, hoàn thành kể cả nhờ can thiệp, hoàn thành trong thời gian chuẩn, tự hoàn thành từng chặng tính cả trên tổng người và trên số người tới được chặng, tổng can thiệp); câu nêu chặng thất bại nhiều nhất.
3. **Thời gian (D2):** Bảng mốc và thời gian từng người; bảng thống kê từng chặng (chuẩn, n, trung bình, trung vị, min, max, độ lệch chuẩn, người vượt chuẩn); nhận xét số liệu.
4. **Lỗi theo loại (D3):** Bảng đếm theo người và loại; số người; chi tiết từng loại (ai, mốc, việc gì); lỗi theo chặng.
5. **Do dự (D5), hỏi người điều phối, vấn đề môi trường:** Bảng đếm, chia nguyên nhân do dự nếu ghi chú cho biết.
6. **Kết quả cuối (D6):** Bảng từng mục kiểm theo người; mục không xác định được ghi rõ vì sao.
7. **Tự kiểm tra (D7):** Có tự kiểm không, kiểm bằng cách nào, có kiểm đúng điều quan trọng không; thời gian tự kiểm.
8. **Thang đo (D8):** Bảng từng người, bảng chỉ số, nhận xét (so mốc tham khảo, so nhóm hoàn thành và không hoàn thành, câu có điểm bất thường, kiểu trả lời không nhất quán).
9. **Thời lượng phiên.**
10. **Lưu ý khi dùng số liệu:** Mẫu nhỏ, mẫu đồng nhất, sai lệch quy trình, cách kiểm bị ảnh hưởng, không có âm thanh.

Mỗi chỗ có nhiều cách báo số liệu thì để **quyết định mở có phương án**, không chọn thay. Ở lần đầu:

- `QĐ-S1`: Thời gian báo theo (a) mọi người tới được mốc cuối của chặng, (b) chỉ người tự hoàn thành, (c) cả hai. Sinh viên chọn (a).
- `QĐ-S2`: Người có kiểu trả lời thang đo không nhất quán (chọn cùng một mức cho cả câu khen lẫn câu chê): (a) giữ, ghi chú; (b) giữ, báo thêm trung bình khi bỏ người đó; (c) bỏ. Sinh viên chọn (b).

Tự kiểm: Mọi con số lấy từ kết quả script hoặc từ bảng tổng hợp tay có dẫn mục; đối chiếu con số trong `notes.md` (nếu lúc ghi phiên có ghi điểm) với script; `check_usability.py format`, `ids`, `privacy`; checklist bước `score` trong `lessons.md`. **Dừng**, đưa commit message.

## Pha D: Bản review `04_scores.md`

Áp quyết định; bỏ phương án không chọn; ghi "QĐ-Sn (SV chốt phương án ...)" tại chỗ; bảng thay đổi. Đính chính con số đã ghi sai ở bước trước thì ghi rõ (ví dụ điểm của một người bị tính nhẩm sai lúc ghi phiên). **Dừng**, đưa commit message (ví dụ `[T2][score] Score SUS results across 7 sessions`).
