# Quy tắc chung

Đây là mặc định của skill. Nếu dự án có tài liệu quy trình riêng (ví dụ `WORKFLOW.md`), tài liệu đó ưu tiên hơn.

## Mục lục

1. Nguồn được đọc và không được đọc
2. Kiểm thử hộp đen
3. Khi thiếu thông tin
4. Thư mục, tên file và mã
5. Bản AI trong `ai_raw/`
6. Bản review
7. Bảng "Thay đổi so với bản AI"
8. Mục checklist đạt chuẩn
9. Commit
10. Định dạng văn bản
11. Rà bước trước

---

## 1. Nguồn được đọc và không được đọc

| Được đọc | Không được đọc |
|---|---|
| Đề bài, tài liệu quy trình và README của dự án | Mã nguồn của hệ thống được test (backend, frontend, mobile) |
| Đặc tả của hệ thống (SRS) | Prompt log, ghi chú cá nhân của sinh viên (nếu dự án nêu tên) |
| Slide môn học về GUI testing; template checklist của môn | Lịch sử git (`git log`, `git show`, `git diff`). Ngoại lệ: `git checkout -- <file>` để khôi phục file trong `ai_raw/` lỡ sửa |
| Chính skill này | Log phiên AI (ví dụ file `.jsonl`) |
| File trong **thư mục làm việc** và ảnh trong `screenshots/` của nó | Thư mục làm việc của màn hình khác, kết quả và bug của bài khác (làm lệch bản AI), trừ khi sinh viên cho phép |
| File do chính phiên này tạo ra | Mọi file dự án ghi là cấm |

Liệt kê thư mục để biết tên file không phải là đọc nội dung, nhưng không mở file bị cấm dù tên có vẻ hữu ích.

## 2. Kiểm thử hộp đen

- Căn cứ thiết kế: Đặc tả, ảnh do sinh viên chụp, và những gì sinh viên mô tả lại sau khi tự thử.
- Không tự mở giao diện, không tải HTML, JS hay gọi API để "xem thử".
- Không dùng DevTools ở các bước thiết kế, và không yêu cầu sinh viên dùng DevTools khi khảo sát. Thuộc tính HTML, số thẻ `<h1>`, thứ tự Tab, độ tương phản là **nội dung cần kiểm** ở bước `exec`, không phải dữ liệu khảo sát.
- Hiểu biết chung về chuẩn (HTML, WCAG, hành vi của trình duyệt) được dùng để thiết kế vì đó không phải mã nguồn của hệ thống. Khi dùng, ghi rõ nguồn để sinh viên kiểm chứng.
- Cách kiểm của một mục phải làm được bằng thao tác của người dùng hoặc công cụ chuẩn của trình duyệt; không đòi biết cấu trúc bên trong hệ thống (ví dụ token lưu ở đâu).

## 3. Khi thiếu thông tin

- Thiếu ảnh, ảnh bị cắt, không thấy chi tiết cần đối chiếu: Liệt kê cụ thể cần chụp gì (màn hình nào, trạng thái nào, phần nào phải thấy), rồi dừng.
- Ảnh tĩnh không cho biết hành vi (chữ có phải link không, ô có sửa được không): Nhờ sinh viên thử và mô tả lại, hoặc chụp thêm.
- Đặc tả không nói: Ghi thành câu hỏi mở có phương án. Không tự chọn.
- Dữ liệu cần cho một trạng thái không có sẵn (ví dụ đơn ở đủ các trạng thái): Hỏi sinh viên cách tạo; không tự giả định dữ liệu có sẵn.
- Không bù chỗ thiếu bằng cách đọc mã nguồn, tự mở trang, hay đoán rồi viết như thể đã biết.

## 4. Thư mục, tên file và mã

```
<thư mục làm việc>/               mặc định checklist/
├── 00_survey.md                  survey: Bản sinh viên điền rồi AI đối chiếu
├── 01_oracle.md                  oracle: Bản review
├── 02_checklist.md               review và add: Checklist đã review
├── <tên>.xlsx                    excel
├── ai_raw/
│   ├── T1_survey.md
│   ├── T1_oracle.md
│   └── T1_draft_IA-01.md ... T1_draft_IA-04.md
└── screenshots/                  survey_<số>_<nội dung>.png
```

Nhiều ảnh cho cùng một nội dung (trang dài phải cuộn): Mọi ảnh có hậu tố đánh số từ `_1` (`survey_05_profile_1.png`, `survey_05_profile_2.png`). Chỉ một ảnh thì không thêm hậu tố.

| Mã | Ý nghĩa | Bước tạo | Ví dụ |
|---|---|---|---|
| `W-nn`, `A-nn`, `M-nn` | Màn hình (Web, Admin, Mobile), theo bảng của dự án | Bước 0 | `W-06` |
| `UI-Rnn` | Yêu cầu giao diện trích từ SRS | `oracle` | `UI-R41` |
| `CH-nn` | Câu hỏi mở cho sinh viên ở `oracle` | `oracle` | `CH-05` |
| `GĐ-nn` | Giả định của AI | `oracle` | `GĐ-03` |
| `NR-nn` | Mục kiểm theo nguồn ngoài SRS sinh viên chốt ở `oracle` | `oracle` | `NR-02` |
| `ĐK-nn` | Điều kiện chuẩn bị khi chạy | `ai-draft` | `ĐK-04` |
| `AI-<IA>-<nn>` | Mục trong bản AI (IA viết 2 chữ số) | `ai-draft` | `AI-02-07` |
| `CHD-nn` | Câu hỏi mở của bản AI, đánh số liên tục qua 4 file IA | `ai-draft` | `CHD-09` |
| `CL-nn` | Mục cuối cùng, giữ cố định sau khi chốt (Excel, ảnh, issue dẫn chiếu) | `review`, `add` | `CL-23` |

Mã đã dùng thì không dùng lại cho thứ khác, kể cả khi mục đó bị bỏ. Mục bổ sung được đánh số tiếp, không chèn giữa.

## 5. Bản AI trong `ai_raw/`

- Đầu file theo `assets/templates/ai_raw_header.md`: Tên bước, thời gian tạo (có múi giờ), công cụ, căn cứ. Sau đó là nguyên văn câu trả lời của AI. Không chép prompt.
- **Không bao giờ sửa hay ghi đè** sau khi đã giao. Trong cùng lượt, trước khi giao, được sửa lỗi do chính mình phát hiện khi tự kiểm.
- Sinh viên yêu cầu AI làm lại cả bước: Lưu file mới `..._v2.md` (rồi `_v3`). Đầu file ghi thêm: Lần sửa thứ mấy, thời gian, lý do. File cũ giữ nguyên.
- Sinh viên chỉ hỏi hoặc quyết định từng điểm: Không cần `_v2`; ghi thay đổi vào bản review.
- `survey`: `ai_raw/T1_survey.md` và `00_survey.md` ban đầu giống hệt nhau (kiểm bằng `check_checklist.py same`).

## 6. Bản review

Bản review là bản đầy đủ của bước (không chỉ ghi phần sửa). Đầu file:

```
# <Tên bước>: <Nội dung>

Bước: `[T1][<bước>]`, bản review
Bản AI gốc: `ai_raw/<file>` (tạo lúc <thời gian>)
Cập nhật: <thời gian> (<tóm tắt vòng cập nhật>)
```

Kèm đoạn "Ai làm phần nào" khi sinh viên và AI cùng viết một file (ví dụ `00_survey.md`, `02_checklist.md`).

Phần thân theo mẫu của bước, đã áp mọi quyết định. Bảng "Quyết định của SV" cho từng câu hỏi mở (CH, CHD). Mục cuối cùng luôn là "Thay đổi so với bản AI".

## 7. Bảng "Thay đổi so với bản AI"

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|

Cột "Loại" chỉ nhận một trong năm giá trị:

| Loại | Khi nào dùng |
|---|---|
| Sai | Bản AI trái với đặc tả hoặc với giao diện quan sát được |
| Thiếu | Đặc tả, giao diện hoặc nguồn checklist có mà bản AI không đưa vào |
| Thừa | Bản AI tự đặt quy tắc mà đặc tả không có, mục trùng lặp, hoặc mục không áp dụng cho màn hình đã chọn |
| Mơ hồ | Bản AI ghi chung chung, không kiểm chứng được |
| Quyết định của SV | Bản AI không sai, nhưng sinh viên chọn một phương án hoặc chốt một điểm đặc tả chưa rõ |

Cột "Vì sao AI bỏ sót" chỉ ghi khi Loại là "Thiếu", bắt đầu bằng một trong ba giá trị, kèm giải thích ngắn:

| Giá trị | Khi nào dùng |
|---|---|
| Prompt | Prompt hoặc dữ liệu đưa cho AI thiếu thông tin (ví dụ chưa có ảnh trạng thái đó) |
| Giới hạn model | AI đã có đủ thông tin mà vẫn không nghĩ tới |
| Đặc thù giao diện | Điểm chỉ có ở hệ thống hoặc màn hình đã chọn, khó suy ra từ kiến thức chung |

Quy tắc ghi:

- Ghi **mọi** thay đổi về nội dung. Không ghi thay đổi thuần hình thức.
- Mục bản AI đã xét và loại, sinh viên thêm lại: Loại "Quyết định của SV" (không phải "Thiếu"), lý do nêu chỗ bản AI đã loại.
- **Ghi rõ người phát hiện** theo đúng thông tin sinh viên cung cấp ("SV phát hiện", "AI đề xuất khi cập nhật, SV xác nhận"). Không rõ thì **hỏi**, không đoán.
- Bảng này là dữ liệu cho phân tích AI bỏ sót, AI Critique và AI Audit Report, nên lý do phải đủ để người khác hiểu vì sao bản AI chưa đúng.

## 8. Mục checklist đạt chuẩn

Mỗi mục (ở mọi bước, kể cả mục sinh viên thêm):

- Trả lời được bằng **Passed / Failed**, không mơ hồ ("giao diện đẹp", "hoặc tương đương", "đầy đủ" là mơ hồ).
- Chỉ kiểm **một** điều. Hai quan sát khác nhau thì tách hai mục.
- Ghi đủ: IA, màn hình (và trạng thái) áp dụng, oracle (`UI-Rnn` hoặc "Khuyến nghị: <nguồn>"), cách kiểm (Nhìn, Bàn phím, Chuột, DevTools, Công cụ; kèm dữ liệu cụ thể nếu cần), kết quả mong đợi.
- Không trùng mục khác. Một kiểm tra dùng cho nhiều màn hình là **một** mục, không nhân bản theo màn hình.
- Kết quả mong đợi chỉ nói phần **nhìn thấy được** trên giao diện; không lẫn kết quả chức năng nếu sinh viên đã chốt checklist không kiểm logic.
- Mục phụ thuộc mục khác hoặc trạng thái có thể không tạo được: Ghi điều kiện và cách ghi kết quả khi không chạy được (theo quyết định của sinh viên).

## 9. Commit

- AI chỉ đưa commit message và lệnh; sinh viên tự commit (và làm các việc dự án yêu cầu trước khi commit, ví dụ nhờ phiên khác xuất prompt log).
- Định dạng mặc định: `[T1][<bước>] <Verb> <nội dung>`, tiếng Anh, động từ mệnh lệnh, không dấu chấm cuối.
- Tách commit để lịch sử git thấy rõ phần AI và phần sinh viên:

  | Bước | Các commit |
  |---|---|
  | `survey` | (1) Bản AI và `00_survey.md` giống hệt; (2) ảnh và phần sinh viên điền; (3) bản đối chiếu |
  | `oracle` | (1) Bản AI; (2) bản review |
  | `ai-draft` | Mỗi IA một commit (4 commit) |
  | `review`, `add`, `excel` | Mỗi bước một commit |
  | Bản `_vN` | `... (AI revision N)` |

- Không biết sinh viên đã commit bản trước chưa (vì không được xem lịch sử git): Hỏi, hoặc đưa cả hai phương án lệnh.

## 10. Định dạng văn bản

- Tiếng Việt; giữ nguyên tên trường, nút, thông báo như trên giao diện (kể cả chữ tiếng Anh, viết hoa, dấu câu).
- Không dùng dấu "—" và dấu "·" làm dấu ngăn cách. Trong phần trích **nguyên văn** SRS thì giữ ký tự gốc và ghi chú điều đó.
- Chữ cái đầu tiên sau dấu ":" viết hoa (trừ code, tên label, đường dẫn, giờ).
- Giá trị có dấu cách ở đầu hoặc cuối: Viết rõ bằng chữ ("một dấu cách ở mỗi đầu") hoặc ký hiệu `␣` có chú thích, vì Markdown xóa dấu cách ở hai đầu đoạn code.

## 11. Rà bước trước (khi bắt đầu từ giữa chừng)

Đọc các bản đã có và báo cho sinh viên những điểm thiếu. Không tự sửa.

| Bước | Kiểm tra |
|---|---|
| `survey` | Có danh sách màn hình và trạng thái; ảnh đủ, đúng tên; bảng quan sát không có mục cần DevTools hay nhập dữ liệu sai; có mục đối chiếu với ảnh |
| `oracle` | Trích nguyên văn; mỗi mã có IA, màn hình, cột Áp dụng; "Không áp dụng" có lý do; câu hỏi CH đã có quyết định; có tổng hợp theo IA và màn hình; có bảng thay đổi |
| `ai-draft` | Đủ 4 file; mã `AI-<IA>-<nn>` không trùng; mỗi file có truy vết oracle, ý đã loại, câu hỏi CHD |
| `review`, `add` | Mã `CL` không trùng; trên 40 mục (hoặc mức dự án yêu cầu); đủ 4 IA; cột Nguồn; mục sinh viên thêm có "Vì sao AI bỏ sót"; có truy vết oracle và bảng thay đổi |
| Mọi bước | `ai_raw/` có bản AI tương ứng; tên file đúng; định dạng văn bản đúng (`check_checklist.py`) |
