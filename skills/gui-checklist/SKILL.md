---
name: gui-checklist
description: Thiết kế GUI checklist cho một hoặc nhiều màn hình theo 4 khía cạnh giao diện IA-01 (tiêu chuẩn chung), IA-02 (form), IA-03 (điều hướng), IA-04 (phản hồi và trạng thái), đi từng bước survey (khảo sát màn hình qua ảnh sinh viên chụp), oracle (trích yêu cầu giao diện nguyên văn từ SRS), ai-draft (AI sinh checklist, mỗi IA một file), review (sinh viên giữ, sửa, bỏ, gộp, tách), add (sinh viên thêm mục AI bỏ sót kèm lý do), excel (xuất Excel để chạy), exec (chạy checklist bằng tay, script DevTools chỉ đọc hoặc script điều khiển trình duyệt cho kết quả nháp; sinh viên chốt), bugs (bug report, tìm trùng và tạo GitHub Issues bằng gh, chèn ảnh). Lưu nguyên văn bản AI vào ai_raw/, dừng chờ sinh viên review, viết bản review có bảng "Thay đổi so với bản AI" và cột "Vì sao AI bỏ sót". Kiểm thử hộp đen, không đọc mã nguồn, không tự mở giao diện, không dùng DevTools khi thiết kế. Dùng khi người dùng nói "GUI checklist", "checklist giao diện", "UI checklist", "kiểm thử giao diện màn hình", "làm survey (oracle, ai-draft, review, add, excel) cho màn hình", "checklist IA-01 đến IA-04", "chạy checklist", "báo bug lên Issues", kể cả khi chỉ đưa thư mục checklist và bảo "làm bước tiếp theo". Không dùng cho usability evaluation (dùng skill usability-evaluation); không tạo kết quả khi chưa có lần chạy thật.
---

# Thiết kế GUI checklist

Skill này dẫn AI đi qua hoạt động GUI checklist **từng bước một**, như một trợ lý có kỷ luật chứ không phải hộp đen sinh checklist. Sinh viên review và quyết định ở mọi bước; mọi output của AI được giữ nguyên văn để làm bằng chứng cho AI Audit Report, AI Critique và phần phân tích "AI bỏ sót gì".

Quy trình được rút từ lần làm thật đầu tiên: HW03 Task 1 trên EShop, màn hình chính W-06 Hồ sơ cá nhân & lịch sử đơn hàng, màn hình phụ W-04 Đăng ký, W-03 Đăng nhập (112 mục, 109 mục AI sinh, 5 mục sinh viên thêm). Những lỗi AI đã mắc ở lần đó được ghi thành checklist tự kiểm trong `references/lessons.md`; đọc nó trước khi giao bất kỳ bước nào.

## Phạm vi

| Bước | Nội dung | Ai làm | Trạng thái trong skill |
|---|---|---|---|
| `survey` | Khảo sát màn hình: Thành phần UI, trạng thái nhìn thấy được | AI lập bảng; sinh viên chụp ảnh; điền bảng theo cách sinh viên chọn | Đầy đủ |
| `oracle` | Trích yêu cầu giao diện nguyên văn từ SRS, gán mã, ánh xạ IA và màn hình | AI đề xuất, sinh viên review | Đầy đủ |
| `ai-draft` | AI sinh checklist, mỗi IA một file | AI | Đầy đủ |
| `review` | Giữ, sửa, bỏ, gộp, tách từng mục AI | **Sinh viên** quyết; AI lọc trước nếu được yêu cầu và soạn file | Đầy đủ |
| `add` | Thêm mục AI bỏ sót, mỗi mục có lý do | **Sinh viên** viết; AI kiểm | Đầy đủ |
| `excel` | Xuất checklist ra Excel | AI chạy script, sinh viên kiểm | Đầy đủ |
| `exec` | Chạy checklist trên nền tảng thứ nhất | **Sinh viên** chạy (tay hoặc script AI viết); AI điền kết quả nháp từ log và ảnh; sinh viên chốt | Đầy đủ |
| `bugs` | Chọn bug, tạo issue có ảnh, bug report | AI đề xuất và soạn; sinh viên chốt và cho phép đăng | Đầy đủ |

## Bước 0: Xác định ngữ cảnh (đầu mỗi phiên)

1. **Đọc quy trình của dự án.** Nếu dự án có `WORKFLOW.md` (hoặc tài liệu tương tự), đọc trước tiên. Quy tắc của dự án **ưu tiên hơn** mặc định của skill, trừ các ngoại lệ ở mục "Ngoại lệ so với quy trình của dự án"; chỗ nào dự án không nói thì dùng `references/rules.md`.
2. **Xác định**, hỏi người dùng nếu chưa rõ:
   - **Thư mục làm việc.** Mặc định `checklist/`. Làm cho màn hình khác với lần trước (ví dụ để demo) thì dùng thư mục riêng do sinh viên chỉ định (HW03: `demo/gui-checklist/`, xem `demo/README.md`), và không đọc thư mục của lần làm trước. **Không ghi đè** file của một lần làm khác; thấy thư mục đã có file thì hỏi.
   - Danh sách màn hình: Mã, tên, URL hoặc đường vào, vai trò (chính hay phụ), các trạng thái cần xét (chưa đăng nhập và đã đăng nhập, dữ liệu trống và có dữ liệu).
   - Nền tảng: Web, Web Admin hay Mobile.
   - Vị trí đặc tả (SRS) và cách ánh xạ IA sang mục của SRS (ví dụ EShop: IA-01 là FR-21, IA-02 là FR-22, IA-03 là FR-23, IA-04 là FR-24).
   - Danh sách file được đọc và không được đọc; nguồn checklist ngoài SRS được dùng (slide, template của môn).
   - Tiền tố tên file trong `ai_raw/` (mặc định `T1_`).
3. **Xác định bước hiện tại** từ các file trong thư mục làm việc:

   | Đã có | Bước tiếp theo |
   |---|---|
   | Chưa có gì | `survey` pha 1 |
   | `ai_raw/T1_survey.md` và `00_survey.md` giống hệt nhau | Chờ sinh viên (`survey` pha 2) |
   | `00_survey.md` đã điền, chưa có mục "Đối chiếu với ảnh" | `survey` pha 3 |
   | `00_survey.md` đã đối chiếu | `oracle` |
   | `ai_raw/T1_oracle.md`, chưa có `01_oracle.md` | Chờ sinh viên trả lời câu hỏi CH |
   | `01_oracle.md` | `ai-draft` |
   | Đủ 4 file `ai_raw/T1_draft_IA-0n.md`, chưa có `02_checklist.md` | `review` |
   | `02_checklist.md` có mục "Mục sinh viên thêm" còn trống | `add` |
   | `02_checklist.md` đã có mục sinh viên thêm, chưa có file Excel | `excel` |
   | Đã có file Excel, cột kết quả của nền tảng thứ nhất còn trống | `exec` |
   | Cột kết quả nền tảng thứ nhất đã chốt, chưa có `bugs/bug_report.md` | `bugs` |
   | `bugs/bug_report.md` còn mục ⏳ (ảnh chưa chèn, chưa chụp danh sách issue) | `bugs` (phần còn lại) |

4. **Bắt đầu từ giữa chừng** (các bước trước làm tay hoặc theo quy trình khác): Rà các bản review đã có theo mục "Rà bước trước" ở `references/rules.md`, báo cho sinh viên những gì thiếu. **Không tự viết lại**; chờ sinh viên quyết định.
5. **Nạp tài liệu:** Luôn đọc `references/rules.md` và `references/lessons.md`; đọc `references/step-<bước>.md` của bước sắp làm; đọc `references/sources.md` ở bước `ai-draft` và `add`. Bước `exec` và `bugs` đọc thêm README của repo nhóm (quy ước issue).

## Quy tắc cứng

Chi tiết ở `references/rules.md`. Tóm tắt:

- **Hộp đen.** Căn cứ là đặc tả, ảnh do sinh viên chụp và những gì sinh viên mô tả. Không đọc mã nguồn hệ thống, không tự mở giao diện, không tải HTML hay JS, không dùng DevTools ở các bước thiết kế (`survey` đến `excel`). DevTools chỉ dùng ở bước `exec`, để kiểm những gì **mục checklist yêu cầu**.
- **Thiếu thông tin thì hỏi.** Cần ảnh, cần quan sát thêm, đặc tả không nói: Dừng và nói rõ cần gì. Không tự lấy bằng đường bị cấm, không đoán rồi viết tiếp.
- **Mỗi lượt một bước**, xong thì dừng chờ sinh viên. Riêng `ai-draft`: Viết lần lượt 4 file IA trong cùng một lượt rồi dừng một lần (mục "Ngoại lệ so với quy trình của dự án").
- **Không bao giờ sửa hay ghi đè file trong `ai_raw/`** sau khi đã giao. AI làm lại thì lưu file mới `_v2`, `_v3`, đầu file ghi lần sửa, thời gian, lý do.
- **Chỗ đặc tả không nói:** Ghi thành câu hỏi mở hoặc giả định có phương án đánh chữ cái. AI không tự chọn, không khẳng định quá căn cứ.
- **Mục ngoài SRS** ghi rõ nguồn và ghi là **khuyến nghị**, không phải yêu cầu của SRS.
- **Kết quả chạy chỉ lấy từ lần chạy thật.** AI được điền kết quả **nháp** từ bằng chứng của lần chạy đó (log, ảnh, ghi chú chạy tay), ghi rõ mục nào AI kết luận bằng cách xem ảnh; sinh viên review và chốt. Không có bằng chứng thì để trống. AI không tạo hay chỉnh nội dung ảnh, không tự chạy script trên giao diện khi sinh viên chưa cho phép.
- **Đăng ra ngoài** (tạo, sửa issue, bình luận) chỉ làm khi sinh viên đã duyệt nội dung và cho phép rõ ràng; mặc định đưa lệnh để sinh viên chạy.
- **Bước `add` là của sinh viên.** AI không viết mục mới thay sinh viên; chỉ kiểm và chỉ ra chỗ chưa đạt.
- **Bản review** có bảng "Thay đổi so với bản AI" với cột Loại chỉ nhận 5 giá trị và cột "Vì sao AI bỏ sót" (chỉ với Loại "Thiếu"). Ghi rõ người phát hiện mỗi thay đổi; không đoán.
- **AI không tự commit.** Chỉ đưa commit message và lệnh.
- **Văn bản** tiếng Việt, giữ nguyên tên trường, nút, thông báo như trên giao diện; không dùng dấu "—" và "·"; chữ đầu sau dấu ":" viết hoa.

## Ngoại lệ so với quy trình của dự án

| Điểm | Skill làm | Quy trình của dự án có thể ghi | Lý do |
|---|---|---|---|
| Nhịp của `ai-draft` | Viết đủ 4 file IA (mỗi IA một file, lần lượt IA-01 đến IA-04) trong một lượt, rồi dừng **một lần** để sinh viên review cả 4 | Mỗi lượt một IA, dừng sau từng IA (ví dụ HW03 `WORKFLOW.md` mục 3.1) | Review cả 4 cùng lúc thì thấy được mục trùng giữa các IA và ý chung bị lặp (ở lần đầu, ý "thông báo bằng tiếng Việt" lặp ở 8 mục IA-04 và phải gom về IA-01), nên review có mạch hơn. Mỗi IA vẫn là một file và một commit riêng, nên vẫn tách bước như đề yêu cầu |

Ngoại lệ này áp dụng cả khi quy trình của dự án ghi khác. Khi chạy, báo cho sinh viên một câu rằng skill đang theo ngoại lệ này. Sinh viên muốn dừng sau từng IA thì làm theo sinh viên.

Ghi chú lịch sử: Lần làm đầu (HW03 Task 1) chạy `ai-draft` mỗi lượt một IA theo `WORKFLOW.md`. Ngoại lệ được đặt khi viết skill, rút từ lần làm đó; `WORKFLOW.md` của HW03 giữ nguyên vì ghi đúng cách bài đã làm.

## Vòng lặp cho mỗi bước

**Pha A: Chuẩn bị**

1. Đọc bản review của **tất cả** các bước trước: Quyết định đã chốt, giả định, ghi chú "để bước sau xét". Điểm nào bước trước dặn mà bước này không xử lý thì ghi lý do.
2. Xem mục "Hỏi trước khi viết" trong `references/step-<bước>.md`. Quyết định nào ảnh hưởng tới cấu trúc cả bản thì **hỏi trước khi viết** bản AI, vì `ai_raw/` không sửa được sau khi giao.

**Pha B: Viết bản AI**

3. Viết file `ai_raw/` theo mẫu trong `assets/templates/`. Mọi bản AI đều có mục câu hỏi mở cho sinh viên (mỗi câu có phương án đánh chữ cái nếu có thể) và không chọn thay sinh viên.
4. **Tự kiểm** trước khi giao: Chạy `scripts/check_checklist.py` (mục Tài nguyên), sửa hết ERROR; đi qua checklist của bước đó trong `references/lessons.md`. Chỉ sửa file `ai_raw/` khi **chưa giao** trong lượt này.

**Pha C: Dừng**

5. Báo cho sinh viên: Tóm tắt ngắn, các câu hỏi cần quyết định, commit message cho bản AI. Dừng.

**Pha D: Viết bản review**

6. Nhận quyết định và câu hỏi của sinh viên. Trả lời từng câu dựa trên đặc tả; kiểm tra mâu thuẫn giữa các quyết định với nhau và với các bước trước; quyết định làm đổi lớn cấu trúc thì trình bày phương án và chờ duyệt.
7. Viết bản review (bản đầy đủ của bước, không chỉ phần sửa), kết thúc bằng bảng "Thay đổi so với bản AI". Chạy lại script, đưa commit message. Dừng.

Sửa bản review sau đó: Sửa trực tiếp bản review, ghi thời gian cập nhật ở đầu file và thêm dòng vào bảng thay đổi.

## Tóm tắt các bước

| Bước | Việc chính | Đầu ra | Hướng dẫn |
|---|---|---|---|
| `survey` | 3 pha: AI lập bảng quan sát trống và danh sách ảnh; sinh viên chụp ảnh, chọn cách điền; AI kiểm ảnh, đối chiếu | `ai_raw/T1_survey.md`, `00_survey.md`, `screenshots/survey_*.png` | `references/step-survey.md` |
| `oracle` | Trích nguyên văn, mã `UI-Rnn`, IA, màn hình, cột Áp dụng; câu hỏi `CH-nn`; giả định `GĐ-nn`; điểm ngoài SRS; mục khuyến nghị `NR-nn` sinh viên chốt | `ai_raw/T1_oracle.md`, `01_oracle.md` | `references/step-oracle.md` |
| `ai-draft` | Mỗi IA một file: Điều kiện `ĐK-nn`, mục `AI-<IA>-<nn>`, truy vết, ý đã loại, câu hỏi `CHD-nn` | `ai_raw/T1_draft_IA-01.md` đến `..._IA-04.md` | `references/step-ai-draft.md` |
| `review` | Lọc trước (nếu sinh viên muốn), sinh viên quyết, soạn checklist mã `CL-nn` | `02_checklist.md` (phần mục AI) | `references/step-review-add.md` |
| `add` | Sinh viên thêm mục, AI kiểm; xét các mảng AI hay bỏ sót | `02_checklist.md` (mục sinh viên thêm) | `references/step-review-add.md` |
| `excel` | Xuất Excel từ `02_checklist.md` | File `.xlsx` | `references/step-excel.md` |
| `exec` | Chuẩn bị dữ liệu; chạy tay hoặc chạy script (sinh viên chạy); chạy tay và chụp bổ sung; AI điền kết quả nháp từ log và ảnh; sinh viên chốt | Cột NT1 và sheet "Môi trường" của Excel, `screenshots/<mã mục>_<nền tảng>.png`, log, `03_results.md` | `references/step-exec.md` |
| `bugs` | Chọn bug, tìm trùng, soạn issue theo template, tạo bằng `gh`, chèn ảnh, bình luận issue dùng chung, chụp danh sách issue | `bugs/bug_report.md`, issue trên repo nhóm, `bugs/screenshots/issues_list_*.png`, phần issue của `03_results.md` | `references/step-bugs.md` |

## Điểm dừng chờ sinh viên

- Trước khi viết bản AI của một bước, nếu có quyết định ảnh hưởng tới cấu trúc cả bản.
- `survey`: Sau pha 1 (chờ ảnh và bảng); trong pha 3 nếu ảnh chưa đủ; sau pha 3.
- `oracle`: Sau bản AI (chờ trả lời câu hỏi CH); sau bản review.
- `ai-draft`: Sau khi đã có **đủ 4 file IA** (dừng một lần, sinh viên review cả 4 cùng lúc).
- `review`: Sau bảng đề xuất lọc (nếu có); sau khi soạn `02_checklist.md`.
- `add`: Sau khi kiểm các mục sinh viên thêm.
- `excel`: Sau khi xuất file.
- `exec`: Trước khi chạy (chọn cách chạy, chuẩn bị dữ liệu); trong lúc sinh viên chạy; sau khi điền kết quả nháp (chờ sinh viên chốt).
- `bugs`: Sau bảng đề xuất chọn bug; sau khi soạn nội dung issue; trước mỗi lệnh đăng ra ngoài; sau khi viết bug report.
- Bất cứ lúc nào thiếu thông tin mà chỉ người dùng cung cấp được.

## Tài nguyên

- `references/rules.md`: Nguồn được đọc và không được đọc, hộp đen, mã và tên file, `ai_raw/`, bản review, bảng thay đổi, commit, định dạng, rà bước trước.
- `references/lessons.md`: Checklist tự kiểm theo từng bước, rút từ lỗi đã gặp.
- `references/step-survey.md`, `step-oracle.md`, `step-ai-draft.md`, `step-review-add.md`, `step-excel.md`: Hướng dẫn chi tiết, kèm "Hỏi trước khi viết".
- `references/step-exec.md`, `step-bugs.md`: Hướng dẫn bước chạy và báo bug, kèm quyết định còn mở.
- `references/sources.md`: Nguồn ngoài SRS đã dùng và cách ghi.
- `references/example-hw03.md`: Ví dụ rút gọn từ lần làm đầu.
- `assets/templates/`: Mẫu `ai_raw_header.md`, `survey.md`, `oracle.md`, `draft_ia.md`, `checklist.md`, `changes_table.md`, `results.md`.
- `scripts/check_checklist.py`: Kiểm tra máy móc (không đánh giá nội dung). Cách dùng:

  ```bash
  python -I <skill>/scripts/check_checklist.py format <file>...          # dấu "—", "·" ngoài phần trích nguyên văn
  python -I <skill>/scripts/check_checklist.py changes <file>...         # cột Loại, cột "Vì sao AI bỏ sót"
  python -I <skill>/scripts/check_checklist.py same ai_raw/T1_survey.md 00_survey.md
  python -I <skill>/scripts/check_checklist.py oracle 01_oracle.md       # mã UI-R trùng, cột Áp dụng, IA
  python -I <skill>/scripts/check_checklist.py draft ai_raw/T1_draft_IA-0*.md --oracle 01_oracle.md
  python -I <skill>/scripts/check_checklist.py checklist 02_checklist.md --oracle 01_oracle.md [--min 41]
  ```

- `scripts/build_checklist_xlsx.py`: Xuất Excel từ `02_checklist.md` (cần `openpyxl`). Cách dùng ở `references/step-excel.md`.
