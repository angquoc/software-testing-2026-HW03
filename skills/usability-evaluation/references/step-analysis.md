# Bước `analysis`: Gom phát hiện, tách bug, xếp severity

**Mục tiêu:** Từ số liệu và hồ sơ phiên, gom các pain point thành phát hiện, tách **bug** (hệ thống sai một câu cụ thể của SRS hoặc chặn người dùng) khỏi **vấn đề thiết kế**, xếp theo severity và criticality, đưa đề xuất cải tiến, trả lời câu hỏi của test plan. Severity do **sinh viên** chốt; AI chỉ đề xuất.

**Đầu ra:** `ai_raw/T2_analysis.md`, `05_findings.md`.

Quy trình dưới đây rút từ lần làm đầu (HW03 FL-05: 9 phát hiện, 2 là bug).

## Đầu vào

`04_scores.md`; hồ sơ phiên đã ẩn danh (khi dự án cho phép); hồ sơ pilot chỉ làm bằng chứng phụ, không tính vào số người; test plan (câu hỏi `Qn`, cách tính criticality); SRS; ảnh luồng; bug report (nếu đã tái hiện bug).

## Hỏi trước khi viết

- **Thang severity:** Thang 4 mức của nhóm (cây câu hỏi dùng cho Issues) hay thang usability riêng (ví dụ Nielsen 0 đến 4). Ở lần đầu, câu này để mở tới bản AI; bản AI chấm theo Nielsen, sinh viên chọn thang của nhóm nên phải chấm lại cả bảng.
- **Quy tắc ưu tiên** khi công thức criticality và mức độ hậu quả không cùng chiều (ví dụ bug làm mất dữ liệu nhưng ít người gặp): Theo criticality, hay đưa lỗi mất dữ liệu lên đầu.

Nếu sinh viên chưa muốn chốt, để dạng quyết định mở có phương án.

## Pha B: Bản AI `ai_raw/T2_analysis.md`

Theo mẫu `assets/templates/findings.md`:

1. **Cách gom và xếp hạng:**
   - Gom: Bắt đầu từ chặng thất bại và các mã sự kiện lặp lại; gộp các quan sát cùng **nguyên nhân trên giao diện** thành một phát hiện; thêm ý từ câu hỏi mở và lời think-aloud.
   - Tách bug và vấn đề thiết kế: Chỉ là bug khi chỉ ra được **câu cụ thể của SRS** bị làm sai (hoặc người dùng bị chặn); còn lại là vấn đề thiết kế, chỉ ghi trong file này.
   - Probability: Số người gặp / tổng số người; pilot không tính.
   - Severity theo thang đã chốt; criticality = severity (quy đổi ra số) × probability.
2. **Bảng phát hiện:** Mã `Fn`, phát hiện, chặng, người gặp (ghi thêm `PL` hoặc người "suýt gặp" trong ngoặc), probability, loại (bug kèm mã và số issue, hoặc thiết kế), severity, lý do theo cây câu hỏi, criticality. Ghi chú về xếp hạng: Thứ tự, phát hiện có probability thấp chỉ vì ít người dùng tới tính năng đó (nêu tỷ lệ trên số người đã dùng tính năng), giới hạn của thang (cây câu hỏi dựng cho bug làm phần lớn vấn đề thiết kế rơi vào cùng một mức).
3. **Chi tiết từng phát hiện:** Quan sát (ai, mốc video, việc gì, dẫn `04_scores.md`); lời người tham gia (chép nguyên văn, ghi mã và câu hỏi); nguyên nhân trên giao diện (dẫn ảnh luồng); **phần do cách làm bài** nếu có (kịch bản, phiếu dữ liệu, môi trường làm tăng hoặc giảm số người gặp); đối chiếu SRS (trích câu); đề xuất; câu hỏi `Qn` liên quan.
4. **Điểm tích cực** kèm bằng chứng.
5. **Trả lời câu hỏi của test plan** (`Q1` đến `Qn`): Trả lời ngắn và căn cứ (mã số liệu, mã phát hiện).
6. **Đề xuất cải tiến theo thứ tự ưu tiên.**
7. **Bug đã báo lên Issues** (mã, issue, phát hiện, severity); phát hiện không báo và lý do.
8. **Hạn chế:** Mẫu nhỏ và đồng nhất; một người điều phối kiêm ghi chú; không có âm thanh; sai lệch quy trình của người điều phối; cách kiểm bị bug làm sai; ảnh hưởng của cách đưa kịch bản; môi trường máy; số người có điểm thang đo.
9. **Quyết định** (mở hoặc đã chốt).

Tự kiểm: Mọi phát hiện có ít nhất một quan sát dẫn mốc hoặc mục số liệu; người gặp khớp với `04_scores.md`; criticality tính đúng; mọi bug có câu SRS; `check_usability.py format`, `ids`, `privacy`; checklist bước `analysis` trong `lessons.md`. **Dừng**, đưa commit message.

## Pha D: Bản review `05_findings.md`

- Áp thang severity và quy tắc ưu tiên đã chốt; chấm lại từng dòng theo thang mới nếu đổi thang, ghi lý do theo cây câu hỏi; tính lại criticality; sắp lại bảng và danh sách đề xuất.
- Cập nhật trạng thái quyết định của test plan (ví dụ thang severity) ở cả `01_test_plan.md`.
- Bảng thay đổi. **Dừng**, đưa commit message (ví dụ `[T2][analysis] Synthesise findings and rank by severity`).
