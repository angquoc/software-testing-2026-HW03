> Bản text-based của `[AI-03] - FIT@HCMUS - AI Disclosure Form_Vn.docx` (bản binary: .docx / .pdf cùng tên).

Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)

CS423 / CSC15003 – Kiểm chứng Phần mềm (AI-augmented · 2026)

CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0

# Biểu mẫu Khai báo Sử dụng AI

Đính kèm cho mọi bài tập có dùng AI ở bất kỳ mức nào.

Tài liệu được biên soạn lại từ Med Kharbach, PhD (2026) — Mẫu Chính sách Sử dụng AI cho Giáo dục Đại học. Giấy phép CC BY-NC-SA 4.0. Phiên bản này được FIT@HCMUS điều chỉnh cho môn CS423 / CSC15003 Kiểm chứng Phần mềm.

## 1. Thông tin Môn học & Sinh viên

| Mục | Giá trị |
|---|---|
| Môn học: | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Mã bài tập: | HW03-AI |
| Tên bài tập: | GUI & Usability on EShop (GUI checklist cho W-06 Hồ sơ & lịch sử đơn hàng, W-04 Đăng ký, W-03 Đăng nhập; usability evaluation luồng FL-05 Web Admin với 7 người tham gia; chạy checklist trên 3 nền tảng) |
| Cấp độ AI (1–5): | Cấp 4 – AI hỗ trợ sản xuất |
| Ngày: | 11/11/2026 |
| Họ tên sinh viên: | Nguyễn Thị Ánh Ngọc |
|  |  |
| MSSV: | 23120061 |

## 2. Câu hỏi Khai báo

### 1. Công cụ AI đã dùng:

Liệt kê mọi công cụ AI dùng cho bài tập này (ví dụ AI Tool (e.g., ChatGPT, Claude, Gemini), ChatGPT, GitHub Copilot, Cursor, Gemini).

Claude Code (Anthropic, claude-opus-5-5), chạy trong VS Code: 1 phiên điều phối (949bce7e), 1 phiên Task 1 (f2487351), 1 phiên Task 2 (de8fb2a8), 1 phiên Task 3 (99fcf7b9), 1 phiên Agent Skill (a498e700), 1 phiên Tổng hợp (c934f0c0), 1 phiên demo Agent Skill (d485f4ce). Không dùng công cụ AI nào khác. Công cụ không phải AI được đề §8 yêu cầu khai: BrowserStack Live và LambdaTest (bản trial) đã thử cho nền tảng N2 của Task 3 nhưng không đủ thời gian, nên N2 chạy trên Firefox cài trên máy.

### 2. Giai đoạn nào của bài tập có dùng AI:

Tick tất cả: [x] brainstorm  [x] outline  [x] viết nháp  [x] phản hồi  [x] sửa chữa  [x] code  [x] phân tích dữ liệu  [ ] thiết kế đồ hoạ  [x] khác (ghi rõ).

Khác: Dẫn AI qua từng bước của GUI checklist (khảo sát màn hình từ ảnh sinh viên chụp, trích yêu cầu giao diện từ SRS, sinh checklist theo từng IA; bản gốc của AI lưu trong `checklist/ai_raw/`); lọc trước các mục cần sửa theo tiêu chí sinh viên đặt; điền nháp kết quả chạy từ log và ảnh; soạn bug report, tạo issue và chèn ảnh bằng `gh`; điều phối nhiều phiên và soát thao tác bị cấm. Code: Script Console chỉ đọc trang và script Playwright cho lần chạy checklist, script tạo dữ liệu đơn hàng, script xuất prompt log, xuất PDF, Agent Skill. Task 2: Đề xuất test plan, kịch bản, bộ công cụ, chép ghi chú đã ẩn danh vào hồ sơ phiên, gom phát hiện và đề xuất severity. Task 3: Đề xuất nền tảng, phân loại mục cho N2, script Playwright cho N2, N3, điền nháp kết quả, so sánh nền tảng. Phân tích dữ liệu: Script tính điểm SUS, thời gian, đếm mã sự kiện trên dữ liệu đã ẩn danh; đếm bảng "Thay đổi so với bản AI".

### 3. Prompt / nhiệm vụ chính cho AI:

Dán nguyên văn 2–3 prompt quan trọng nhất. Để xem đầy đủ, đính kèm Phụ lục A (prompt_log.md).

(1) C64 – Claude Code – 15:42 09/11/2026 (review bản AI của IA-02 đến IA-04): "Tôi đã review xong IA-01. Với IA-02, IA-03, IA-04, hãy giúp tôi lọc trước, mỗi lượt một IA (bắt đầu IA-02), KHÔNG ghi vào 02_checklist.md, chỉ trả về bảng cho tôi quyết: Mục kiểm nhiều hơn một điều (nên tách). Mục mơ hồ, khó trả lời Passed / Failed (đề xuất câu mong đợi đo được). Mục trùng với mục khác, kể cả trùng chéo với IA-01 đã review và các IA khác (đề xuất gộp vào mục nào). Mục khuyến nghị có nguồn yếu hoặc ít giá trị với 3 màn hình (để tôi cân nhắc bỏ). Mục lệch với quyết định CH-01 đến CH-10 hoặc giả định GĐ trong 01_oracle.md. [...]"

(2) C99 – Claude Code – 09:49 10/11/2026 (chuẩn bị chạy checklist): "Bước `exec` (chuẩn bị): CHỈ VIẾT script Playwright cho N1 (Chrome trên Windows), CHƯA ĐƯỢC CHẠY. Trong lượt này KHÔNG được: Mở trình duyệt; chạy script, npx playwright test, node, curl hay bất kỳ lệnh nào gọi tới localhost:3000, 5173, 5174; reset DB; chạy tools/seed_orders.py. [...] Chỉ làm các mục có kết quả khách quan trong 02_checklist.md; mục cần nhìn (ngôn ngữ, màu, chính tả, highlight, căn lề, kiểu viết hoa) thì in "Chạy tay". [...] Kết quả chỉ là nháp, tôi chốt. [...] Tìm phần tử theo chữ nhìn thấy trên trang như 00_survey.md, không đọc mã nguồn EShop."

(3) C147 – Claude Code – 14:52 10/11/2026 (báo bug): "gh đã đăng nhập (nếu lệnh gh không có trong PATH thì gọi "C:\Program Files\GitHub CLI\gh.exe"). Ảnh: Tạo issue trước, chưa có ảnh, phần "Ảnh chụp" để chỗ trống. In danh sách tên ảnh cần dùng. Tôi sẽ kéo cả loạt ảnh vào một ô bình luận trên GitHub và dán đoạn link sinh ra vào bugs/image_links.txt; sau đó bạn ghép theo thuộc tính alt (tên file) và dùng gh issue edit chèn ảnh vào từng issue."


Toàn bộ prompt có timestamp, nguyên văn: Phụ lục A (prompt_log.md).

### 4. Phần cụ thể AI đóng góp:

Càng cụ thể càng tốt. Ví dụ: 'AI sinh TC01–TC15 ở Mục 3.2; tôi viết lại TC04 và TC11; AI KHÔNG đóng góp vào Mục 1, 2, 4, hoặc AI Critique.'

Task 1: AI viết bảng khảo sát và điền bảng quan sát từ ảnh tôi chụp (`00_survey.md`), bản gốc trích yêu cầu giao diện (`ai_raw/T1_oracle.md`, 50 mã UI-R), bản gốc 109 mục checklist (`ai_raw/T1_draft_IA-01.md` đến `IA-04.md`), bảng lọc đề xuất cho IA-02 đến IA-04, file `02_checklist.md` soạn theo quyết định của tôi (58 mục giữ nguyên của AI, 49 mục AI có tôi sửa), file Excel, script `devtools_check.js`, `n1_chrome_checklist.js`, `capture_screen.ps1`, nháp kết quả cột NT1 (ô "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận), `bugs/bug_report.md`, nội dung 33 issue #33 đến #65 và việc tạo issue, chèn ảnh bằng `gh`, `checklist/03_results.md`. Task 2: Bản gốc test plan, kịch bản, bộ công cụ (`usability/ai_raw/`), các chỗ sửa sau pilot, hồ sơ 7 phiên chép từ ghi chú đã ẩn danh của tôi, script `score_t2.py` và `04_scores.md`, bản gốc `05_findings.md` (9 phát hiện), script tái hiện bug `edit_product_check.js`, issue #66, #67. Task 3: `01_setup.md`, `firefox_triage.md`, script `n2_firefox_checklist.js`, `n3_android_checklist.js`, nháp cột NT2, NT3, `02_compare.md`, issue của Task 3. Agent Skill: Hai skill `gui-checklist`, `usability-evaluation`; ở video demo, câu trả lời cho câu hỏi của skill và bản nháp mục thêm ở bước add do phiên điều phối soạn theo yêu cầu của tôi, tôi đọc và sửa trước khi gửi. Chung: `WORKFLOW.md`, README và issue template của repo nhóm, `tools/` (xuất prompt log, xuất PDF, `seed_orders.py`), khung `report.md`, README, các form, Appendix B.

AI KHÔNG đóng góp vào: Ảnh khảo sát và ảnh chụp tay (tôi chụp), nội dung 4 mục CL-109 đến CL-112 (tôi viết, AI chỉ kiểm định dạng và nguồn), các quyết định CH-01 đến CH-10, CHD-01 đến CHD-16 và giữ / sửa / bỏ từng mục, việc ngồi máy chạy checklist và chốt kết quả, việc tải ảnh lên GitHub. Task 2: Tuyển và lập danh sách 7 người tham gia (không đưa vào AI), điều phối và ghi chú mọi phiên, đo thời gian chuẩn, video phiên; câu trả lời SUS và câu hỏi mở do người tham gia đưa ra; chốt thang severity và thứ tự ưu tiên. Task 3: Ngồi máy chạy N2, N3, ảnh chụp các nền tảng, kiểm ngôn ngữ trình duyệt. Ý chính của phần Kết luận ở Appendix B, điểm tự chấm. Chi tiết từng artifact: AI Audit Report (Appendix B của report.md).

### 5. Cách tôi rà soát / chỉnh sửa / xác minh đầu ra AI:

Mô tả phương pháp xác minh (chạy test, kiểm tra spec, hỏi TA, tra RFC, đối chiếu ISTQB syllabus, v.v.).

Mỗi bước review bản AI và ghi mọi chỗ sửa vào bảng "Thay đổi so với bản AI" (Loại: Sai, Thiếu, Thừa, Mơ hồ, Quyết định của SV; với Loại Thiếu ghi lý do AI bỏ sót: Prompt, Giới hạn model, Đặc thù giao diện); đối chiếu với SRS của EShop (mục 8, FR-21 đến FR-24 và các FR của 3 màn hình), slide S13 và slide GUI + Usability + Compatibility AI-First, WCAG 2.2, HTML Living Standard; bấm thử trên giao diện thật khi bản AI suy từ ảnh tĩnh (ví dụ lời chào là link tới hồ sơ); chạy checklist thật trên Chrome, xem từng ảnh mục Failed trước khi chốt; với script, cho chạy thử có giới hạn rồi tự chạy lần thật và xem log; duyệt danh sách bug và severity trước khi AI tạo issue. Một phiên Claude riêng làm điều phối, soát thao tác bị cấm (đọc mã nguồn, đọc ghi chú điều phối, đọc dữ liệu người tham gia). Toàn bộ prompt nằm trong prompt log. Kết quả rà soát: Appendix B (VALID, INCOMPLETE, INVALID). Task 2: Đối chiếu số liệu với hồ sơ phiên, tự tái hiện bug #67 trước khi có script, chọn thang severity của nhóm. Task 3: Bấm tay lại 10 mục script N2 nghi sai, kiểm Chrome tiếng Việt để tìm nguyên nhân CL-11, CL-24.

### 6. Trích dẫn (nếu môn yêu cầu):

Môn Kiểm chứng Phần mềm dùng phong cách IEEE. Ví dụ: Anthropic. (2026). AI Tool (e.g., ChatGPT, Claude, Gemini) [Large language model]. https://claude.ai

[1] Anthropic, "Claude Code (claude-opus-5-5)," [Large language model], 2026. [Online]. Available: https://claude.ai

## 3. Cam đoan Trung thực

Bằng việc ký tên dưới đây, tôi cam đoan thông tin khai báo ở trên là chính xác và đầy đủ. Tôi hiểu rằng việc không khai báo hoặc khai báo sai lệch về việc dùng AI sẽ bị coi là vi phạm liêm chính học thuật và có thể dẫn đến điểm 0 cho bài tập cùng việc bị chuyển lên hội đồng kỷ luật.

## Chữ ký

| Họ tên sinh viên (in hoa): | NGUYỄN THỊ ÁNH NGỌC |
|---|---|
| MSSV: | 23120061 |
| Lớp / Khoá: | Kiểm thử phần mềm - CQ2023/3 |
| Môn học: | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Giảng viên: | Lâm Quang Vũ <br> Hồ Tuấn Thanh <br> Trương Phước Lộc |
| Ngày: | 11/11/2026 |
| Chữ ký: | *(Ảnh chữ ký: Xem bản PDF)* |

## Tham khảo

Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.

ISTQB Foundation Level Syllabus (latest version).

Hardman, P. (2025). A Post-AI Learning Taxonomy.

Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.

Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.

Anthropic (2025). Building reliable AI test agents — engineering blog.

DeepEval & Promptfoo documentation — testing frameworks for LLM systems.
