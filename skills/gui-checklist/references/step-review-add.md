# Bước `review` và `add`: Checklist đã review

**Mục tiêu:** Từ 4 bản AI, sinh viên quyết định từng mục (giữ, sửa, bỏ, gộp, tách), rồi thêm mục AI bỏ sót kèm lý do. Kết quả là checklist cuối cùng với mã `CL-nn` cố định, có truy vết tới bản AI và tới oracle.

**Đầu ra:** `02_checklist.md` (một file cho cả hai bước; bước `review` viết phần mục AI, bước `add` điền mục "Mục sinh viên thêm").

---

## Bước `review`

### Hỏi trước khi làm

Sinh viên chọn một trong hai cách:

- (a) **Sinh viên tự review** từng mục và gửi quyết định cho AI soạn file.
- (b) **AI lọc trước:** AI đọc 4 bản và đưa bảng đề xuất; sinh viên quyết định từng đề xuất, rồi review phần còn lại.

Có thể trộn (ví dụ tự review IA-01, nhờ lọc IA-02 đến IA-04). Ghi cách đã dùng vào đoạn "Ai làm phần nào" đầu file.

### Pha 1: Bảng đề xuất lọc (chỉ với cách (b))

AI đọc lại 4 bản AI cùng `01_oracle.md`, đưa đề xuất trong câu trả lời (không ghi vào `ai_raw/`, vì prompt log đã lưu), nhóm theo loại:

| Loại đề xuất | Dấu hiệu |
|---|---|
| Mục kiểm nhiều điều | Kết quả mong đợi có hai quan sát độc lập; khi Failed không biết vì sao |
| Mục mơ hồ | "hoặc tương đương", "đầy đủ", "thân thiện", "đúng" mà không nêu cụ thể |
| Mục trùng | Hai mục cho cùng kết quả, hoặc một ý chung bị nhắc lại ở nhiều mục |
| Nguồn yếu | Nguồn chung chung, áp dụng máy móc template của trang web khác, hoặc chuẩn áp sai phạm vi |
| Lệch với oracle | Mục kiểm cái mà quyết định CH đã loại (ví dụ kết quả chức năng), hoặc mâu thuẫn với một mã khác (ví dụ đòi thông báo nêu ô sai trong khi SRS cấm lộ nguyên nhân) |
| Dữ liệu không tạo được | Điều kiện dữ liệu mà sinh viên không tạo được |
| Cách kiểm trái hộp đen | Đòi biết cấu trúc bên trong hệ thống |

Mỗi đề xuất: Mã AI, vấn đề, phương án (giữ, sửa thành gì, bỏ, gộp với mã nào, tách thành gì). AI không tự áp đề xuất. **Dừng** chờ sinh viên quyết định từng đề xuất và trả lời các câu hỏi CHD.

### Pha 2: Soạn `02_checklist.md`

Theo mẫu `assets/templates/checklist.md`:

1. **Quy ước:** Mã `CL-nn`; cột Nguồn; cột Oracle; cột Cách kiểm; trạng thái màn hình; cách ghi kết quả (Passed, Failed, và giá trị khác nếu sinh viên đã chốt, ví dụ "Không chạy được" cho mục phụ thuộc); định nghĩa đã chốt cho các khái niệm dễ hiểu sai (ví dụ "highlight" so mục navbar với **chính nó** ở trang khác).
2. **Điều kiện chuẩn bị:** Gộp `ĐK-nn` của 4 bản thành một bảng, đánh số lại nếu cần; cột "Dùng cho" ghi mã `CL`.
3. **Checklist theo IA:** Mỗi IA một bảng, cột như bản AI và thêm cột **Nguồn**:
   - `AI (AI-xx-yy)`: Giữ nguyên nội dung bản AI.
   - `AI, SV sửa (AI-xx-yy)`: Có sửa nội dung. Một mục AI tách thành hai thì cả hai `CL` ghi cùng mã AI gốc.
   - `SV thêm (từ CHD-nn ...)`: Mục mới phát sinh từ câu trả lời CHD trong lúc review; nằm trong bảng IA tương ứng.
   - Đánh mã `CL` theo thứ tự IA-01 đến IA-04, liên tục, không chèn giữa.
4. **Ma trận** (nếu có): Chuyển mã sang `CL`.
5. **Mục sinh viên thêm:** Để sẵn tiêu đề, cách ghi và bảng trống (có cột "Vì sao AI bỏ sót") cho bước `add`.
6. **Mục AI đã bỏ hoặc gộp:** Mã AI, xử lý, lý do.
7. **Tổng hợp:** Số mục theo IA (tổng, nguồn AI, AI SV sửa, SV thêm, căn cứ SRS, khuyến nghị); câu tóm tắt "Bản AI có N mục, bỏ hoặc gộp ..., tách ..., thêm ..."; bảng truy vết oracle (mã `UI-Rnn` và `NR-nn` tới mã `CL`).
8. **Quyết định của sinh viên cho câu hỏi CHD:** Mã, câu hỏi tóm tắt, quyết định, ảnh hưởng. Ghi số CHD đã bị bỏ trước khi giao.
9. **Thay đổi so với bản AI:** Mỗi mục sửa, bỏ, gộp, tách là một hoặc nhiều dòng; quyết định CHD; quy ước mới.

Tự kiểm: `check_checklist.py checklist 02_checklist.md --oracle 01_oracle.md` (mã trùng, nhảy số, tổng số mục, đủ 4 IA, cột Nguồn, oracle), `changes`, `format`; checklist bước `review` trong `lessons.md`. **Dừng**, đưa commit message.

---

## Bước `add`

### Nguyên tắc

- **Sinh viên viết mục mới.** AI không đề xuất nội dung mục mới, không viết thay. Nếu được hỏi "còn thiếu gì", AI chỉ nhắc các mảng đề bài gợi ý (accessibility, RTL, dark mode) và mảng nào bản AI đã ghi ở mục "Ý đã xét nhưng không đưa vào", để sinh viên tự xét.
- Mỗi mục thêm có cột **"Vì sao AI bỏ sót"**, nhận một trong ba giá trị `Prompt`, `Giới hạn model`, `Đặc thù giao diện`, kèm giải thích ngắn. Mục bản AI đã xét và loại (không phải bỏ sót) ghi `Không áp dụng: AI đã xét và loại (<file>, mục ...)`, kèm lý do sinh viên giữ lại; ở bảng thay đổi, mục này có Loại "Quyết định của SV".

### AI kiểm mục sinh viên thêm

Với mỗi mục, AI kiểm và báo (không tự sửa nội dung):

- Đạt chuẩn ở `rules.md` mục 8 (kiểm một điều, Passed / Failed được, đủ cột).
- Không trùng mục đã có; nếu gần trùng, chỉ ra mã và khác biệt cần làm rõ.
- Nguồn có thật và đúng phạm vi (ví dụ tiêu chí WCAG đúng số và đúng nội dung); mục ngoài SRS ghi là khuyến nghị.
- Màn hình, IA, cách kiểm khớp với survey và oracle.
- Giá trị "Vì sao AI bỏ sót" khớp với đầu vào AI đã có (AI có đủ thông tin mà không nghĩ tới là `Giới hạn model`; prompt thiếu thông tin là `Prompt`).

Sinh viên quyết định sửa gì; AI cập nhật file theo quyết định đó.

### Cập nhật `02_checklist.md`

- Mã tiếp nối mã `CL` cuối cùng của bước `review`. Cột Nguồn ghi `SV thêm`.
- Bảng "Các mảng đề gợi ý xét thêm" (accessibility, RTL, dark mode): Kết luận của sinh viên cho từng mảng, kể cả khi không thêm mục (ghi lý do).
- Cập nhật mục tổng hợp và truy vết; thêm mỗi mục một dòng vào bảng thay đổi (Loại "Thiếu" kèm cột "Vì sao AI bỏ sót", hoặc "Quyết định của SV" với mục AI đã loại); ghi thời gian cập nhật bước `add` ở đầu file.
- Chạy lại `checklist`, `changes`, `format`. **Dừng**, đưa commit message.
