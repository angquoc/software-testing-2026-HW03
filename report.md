# HW03-AI: GUI & Usability trên EShop

| | |
|---|---|
| MSSV | 23120061 |
| Họ tên | Nguyễn Thị Ánh Ngọc |
| Lớp | Kiểm thử phần mềm - CQ2023/3 |
| Môn học | CS423 / CSC15003 - Software Testing |
| Bloom-AI | G9.3 (Analyse), G9.4 (Collaborate) |
| Công cụ AI | Claude Code (Anthropic, claude-opus-5-5) |
| SUT | [EShop](https://github.com/ttbhanh/eshop-sut), commit `85af3ba` |
| Repo nhóm (GitHub Issues) | https://github.com/angquoc/software-testing-2026-HW03-group |
| Ngày nộp | ⏳ |

> Báo cáo này là bản tổng hợp. Chi tiết từng bước nằm trong thư mục của từng task (`checklist/`, `usability/`, `cross_platform/`), mỗi bước một file và có bản gốc của AI trong `ai_raw/`. Các đường dẫn bên dưới tính từ thư mục gốc của bài.

## Mục lục

- [1. Cách làm](#1-cách-làm)
- [2. Task 1: GUI Checklist](#2-task-1-gui-checklist)
- [3. Task 2: Usability Evaluation](#3-task-2-usability-evaluation)
- [4. Task 3: Cross-Browser / Cross-Platform](#4-task-3-cross-browser--cross-platform)
- [5. Agent Skill](#5-agent-skill)
- [6. Test Summary](#6-test-summary)
- [AI Critique](#ai-critique)
- [Mandatory Disclosure](#mandatory-disclosure)
- [Self-Assessment](#self-assessment)
- [Appendix A: Prompt log](#appendix-a-prompt-log)
- [Appendix B: AI Audit Report](#appendix-b-ai-audit-report)

---

## 1. Cách làm

### 1.1 Phạm vi

Theo bảng phân công của nhóm (không trùng màn hình chính và luồng với hai thành viên còn lại):

| Task | Phạm vi |
|---|---|
| Task 1: GUI Checklist | Màn hình chính W-06 Hồ sơ cá nhân & lịch sử đơn hàng (`/profile`); màn hình phụ W-04 Đăng ký (`/register`), W-03 Đăng nhập (`/login`). Web, `http://localhost:5173` |
| Task 2: Usability Evaluation | Luồng FL-05 (Web Admin, `http://localhost:5174`): Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới; 7 người tham gia và 1 người pilot |
| Task 3: Cross-Browser / Cross-Platform | Chạy checklist của Task 1 trên 3 nền tảng: N1 Chrome trên Windows (chính là lần chạy của Task 1), N2 Firefox trên BrowserStack Live, N3 Chrome trên điện thoại Android thật. Chi tiết ở [`cross_platform/01_setup.md`](cross_platform/01_setup.md) |

### 1.2 Ánh xạ khía cạnh giao diện (IA) sang SRS

Đề nói SRS không đánh mã FR cho phần giao diện, nhưng SRS của EShop (bản 2.0) có mục 8 với FR-21 đến FR-24 khớp với 4 IA của đề. Báo cáo dùng ánh xạ sau:

| IA | SRS | Nội dung |
|---|---|---|
| IA-01 | FR-21 | Tiêu chuẩn giao diện chung |
| IA-02 | FR-22 | Form |
| IA-03 | FR-23 | Điều hướng |
| IA-04 | FR-24 | Phản hồi và trạng thái |

Các ý giao diện nằm trong FR khác của 3 màn hình (FR-01, FR-02, FR-04, FR-10, FR-11) cũng là oracle. Mục lấy từ nguồn ngoài SRS (Nielsen, Shneiderman, WCAG 2.2, checklist theo loại control trong slide) ghi rõ là **khuyến nghị** kèm nguồn.

### 1.3 Nguyên tắc

Quy trình đầy đủ ở [`WORKFLOW.md`](WORKFLOW.md).

- **Kiểm thử hộp đen.** Căn cứ là SRS của EShop và ảnh sinh viên chụp. Không đọc mã nguồn, không để AI tự mở giao diện ở bước thiết kế, không dùng DevTools từ bước khảo sát tới khi xong checklist. DevTools và công cụ kiểm tra (axe-core, Lighthouse) chỉ dùng ở bước chạy, cho đúng những gì mục checklist yêu cầu.
- **AI làm từng bước.** AI được dẫn qua từng bước của kỹ thuật trong slide, mỗi lượt một bước rồi dừng chờ sinh viên review. Output của AI lưu **nguyên văn** trong `ai_raw/`, không sửa; bản review là file riêng, có bảng **"Thay đổi so với bản AI"** (Loại: Sai, Thiếu, Thừa, Mơ hồ, Quyết định của SV). Với Loại "Thiếu", cột "Vì sao AI bỏ sót" nhận một trong ba giá trị: Prompt, Giới hạn model, Đặc thù giao diện.
- **Tách phiên.** Một phiên Claude Code làm điều phối (theo dõi tiến độ, chạy server EShop, reset dữ liệu, xuất prompt log, soát thao tác bị cấm). Mỗi task có một phiên thiết kế riêng, không đọc ghi chú điều phối. Sinh viên gửi mọi tin nhắn và tự commit.
- **Việc của người thật.** Danh sách người tham gia, ghi chú quan sát, câu trả lời của người tham gia, kết quả chạy checklist và ảnh các nền tảng không do AI tạo (đề §11).
- **Riêng tư.** Họ tên, liên lạc, khuôn mặt, giọng nói của người tham gia chỉ nằm trong `usability/participants.md` và video gốc, không đưa vào AI; mọi file khác dùng mã P1 đến P7.

---

## 2. Task 1: GUI Checklist

Thư mục: [`checklist/`](checklist/)

### 2.1 Các bước

| Bước | Kết quả | Ai làm | File |
|---|---|---|---|
| `survey` | Khảo sát 3 màn hình qua 8 ảnh (chưa và đã đăng nhập, lịch sử đơn trống và có 5 đơn, lời chào là link tới hồ sơ). AI lập bảng quan sát, điền từ ảnh theo yêu cầu của sinh viên; sinh viên điền phần ảnh không thấy (tiêu đề tab, ô mật khẩu có che ký tự không, ô Email có khóa không) và kiểm lại | AI lập bảng và điền từ ảnh, SV chụp ảnh và kiểm | [`00_survey.md`](checklist/00_survey.md) |
| `oracle` | Trích nguyên văn SRS thành 50 yêu cầu `UI-R01` đến `UI-R50` (26 Áp dụng, 6 Áp dụng một phần, 18 Không áp dụng kèm lý do), ánh xạ IA và màn hình; 10 câu hỏi mở CH-01 đến CH-10 do sinh viên quyết; 2 mục khuyến nghị ngoài SRS (NR-01 trạng thái đang tải, NR-02 hộp xác nhận hủy đơn) | AI đề xuất, SV review | [`01_oracle.md`](checklist/01_oracle.md) |
| `ai-draft` | AI sinh 109 mục: IA-01 35, IA-02 31, IA-03 18, IA-04 25, kèm câu hỏi mở CHD-01 đến CHD-16. IA-01 một lượt riêng; IA-02 đến IA-04 làm chung một lượt theo yêu cầu của sinh viên (khai ở Appendix B), mỗi IA vẫn một file và một commit | AI | [`ai_raw/T1_draft_IA-01.md`](checklist/ai_raw/T1_draft_IA-01.md) đến [`IA-04.md`](checklist/ai_raw/T1_draft_IA-04.md) |
| `review` | Sinh viên review từng mục, trả lời CHD-01 đến CHD-16. Với IA-02 đến IA-04, AI lọc trước theo 5 tiêu chí sinh viên đặt (mục kiểm nhiều điều, mơ hồ, trùng, nguồn yếu, lệch oracle); sinh viên quyết từng đề xuất. Bỏ hoặc gộp 5 mục, tách 3 mục thành 6, thêm CL-69 | **SV**, AI lọc trước | [`02_checklist.md`](checklist/02_checklist.md) mục 3, 6, 8 |
| `add` | Sinh viên thêm CL-109 đến CL-112, mỗi mục ghi lý do AI bỏ sót; xét accessibility, dark mode, RTL | **SV**, AI kiểm định dạng và nguồn | [`02_checklist.md`](checklist/02_checklist.md) mục 5 |
| `excel` | Xuất 112 mục ra Excel: Mỗi nền tảng một nhóm cột Kết quả / Notes / Ảnh, danh sách chọn Passed / Failed / N/A / Không chạy được, sheet Môi trường, Ma trận trạng thái đơn, Tổng hợp tự đếm | SV chọn định dạng, AI xuất | [`HW03_T1_GUI_Checklist.xlsx`](checklist/HW03_T1_GUI_Checklist.xlsx) |
| `exec` | Chạy trên N1 (Chrome 156, Windows 11) ngày 10/11/2026: Script Playwright cho mục có kết quả khách quan, script Console chỉ đọc trang cho mục thuộc tính HTML, axe-core và Lighthouse cho độ tương phản, chạy tay cho mục cần nhìn. Ảnh cho mọi mục Failed | **SV** chạy và chốt, AI viết script và điền nháp | [`03_results.md`](checklist/03_results.md), [`screenshots/`](checklist/screenshots/), [`tools/`](checklist/tools/) |
| `bugs` | 33 issue mới, 2 bình luận vào issue đã có | SV duyệt danh sách và tải ảnh, AI soạn và tạo issue bằng `gh` | [`bugs/bug_report.md`](bugs/bug_report.md) |

### 2.2 Checklist cuối

**112 mục** (`CL-01` đến `CL-112`), phủ đủ 4 IA. Một kiểm tra dùng cho nhiều màn hình là một mục; cột "Màn hình" liệt kê màn hình áp dụng.

| IA | Số mục | Nguồn AI | Nguồn AI, SV sửa | Nguồn SV thêm | Căn cứ SRS | Khuyến nghị |
|---|---|---|---|---|---|---|
| IA-01 Tiêu chuẩn giao diện chung | 36 | 30 | 5 | 1 | 18 | 18 |
| IA-02 Form | 31 | 11 | 18 | 2 | 16 | 15 |
| IA-03 Điều hướng | 19 | 8 | 10 | 1 | 6 | 13 |
| IA-04 Phản hồi và trạng thái | 26 | 9 | 16 | 1 | 10 | 16 |
| **Tổng** | **112** | **58** | **49** | **5** | **50** | **62** |

Mỗi mục có: Câu hỏi trả lời được bằng Passed / Failed, IA, màn hình, oracle (mã `UI-Rxx` hoặc nguồn khuyến nghị), cách kiểm (Nhìn, Bàn phím, Chuột, DevTools, Công cụ), kết quả mong đợi, nguồn (`AI`, `AI, SV sửa` kèm mã `AI-xx-xx` gốc, `SV thêm`). Truy vết từng mã `UI-Rxx` tới mục checklist ở `02_checklist.md` mục 7.2. Trạng thái đơn hàng kiểm bằng ma trận 5 trạng thái (chữ hiển thị, màu nhãn, nút "Hủy đơn"), sheet "Ma trận trạng thái" của Excel.

### 2.3 Mục AI bỏ sót và lý do

| Mã | Nội dung | IA | Vì sao AI bỏ sót |
|---|---|---|---|
| CL-109 | Ở khổ rộng 360 px, trang hiển thị vừa, không có thanh cuộn ngang, không chồng lấn (WCAG 2.2 SC 1.4.10 Reflow; slide AI-First về responsive) | IA-01 | **Giới hạn model:** AI có WCAG và slide về responsive trong đầu vào nhưng chỉ kiểm cửa sổ 1366 x 768 (CL-32) và zoom 200% (CL-33), không kiểm khổ điện thoại |
| CL-110 | Ô Số điện thoại chấp nhận số hợp lệ bị dính khoảng trắng hai đầu, thường gặp khi sao chép / dán (slide AI-First, checklist Text Box "test spaces + chars"; Nielsen 5) | IA-02 | **Giới hạn model:** AI chỉ kiểm chuỗi toàn khoảng trắng ở ô Họ Tên (CL-60), bỏ qua khoảng trắng thừa khi dán |
| CL-111 | Ô mật khẩu có nút hiện / ẩn mật khẩu (Nielsen 5, 9) | IA-02 | Không phải bỏ sót: AI đã xét và loại (bản nháp IA-02 mục 5, SRS không yêu cầu). Sinh viên giữ lại vì đây là tính năng UX cơ bản giúp người dùng tự phát hiện lỗi gõ phím |
| CL-112 | Bấm nhanh nhiều lần vào nút gửi thì form chỉ gửi một lần (slide AI-First, checklist Button "Single / double / multi-click", ví dụ double-submit) | IA-04 | Không phải bỏ sót: AI đã xét và loại (bản nháp IA-04 mục 6, cho là trùng CL-96). Sinh viên giữ lại để kiểm riêng việc chống gửi trùng bằng số request; CL-96 chỉ kiểm dấu hiệu đang xử lý |
| CL-69 | Badge "Giỏ hàng" đếm theo tổng số lượng (1 sản phẩm số lượng 2 thì hiện "2") | IA-03 | Thêm ở bước `review` từ câu hỏi CHD-09 của chính bản AI: SRS không nói badge đếm số loại hay tổng số lượng; sinh viên chốt tổng số lượng |

Các mảng đề gợi ý:

| Mảng | Kết luận |
|---|---|
| Accessibility | Bản AI đã có nhiều mục theo WCAG 2.2 (CL-19 `lang`, CL-21, CL-22, CL-23 tương phản, CL-54 nhãn gắn với ô, CL-62 `autocomplete`, CL-106 `role="alert"`); sinh viên thêm CL-109 (Reflow) |
| Dark mode | Không thêm mục: 3 màn hình không có chế độ tối hay nút chuyển giao diện, SRS không yêu cầu |
| RTL | Không thêm mục: Giao diện chỉ có tiếng Việt, không có lựa chọn ngôn ngữ, SRS không yêu cầu |

### 2.4 Đánh giá bản AI

Đếm từ bảng "Thay đổi so với bản AI" của từng bước:

| Bước | Số dòng | Sai | Thiếu | Thừa | Mơ hồ | Quyết định của SV |
|---|---|---|---|---|---|---|
| `oracle` ([`01_oracle.md`](checklist/01_oracle.md) mục 6) | 20 | 1 | 0 | 0 | 0 | 19 |
| `review`, `add` ([`02_checklist.md`](checklist/02_checklist.md) mục 9) | 60 | 6 | 2 | 19 | 14 | 19 |

Ở bước `survey`, bảng đối chiếu ([`00_survey.md`](checklist/00_survey.md) mục 9) có 3 dòng, trong đó bản AI điền từ ảnh ghi sai là navbar không có mục dẫn tới `/profile`.

Các chỗ AI sai chính:

- **Chỉ thấy ảnh tĩnh.** AI ghi navbar không có mục cho trang hồ sơ (UI-R41), trong khi lời chào "Chào, <Họ Tên>" là link tới `/profile`. Sinh viên bấm thử và chụp thêm ảnh `survey_08`. Lỗi này kéo theo định nghĩa "highlight" sai ở bản nháp IA-03 (so mục navbar với các mục khác thay vì so với chính nó ở trang khác), làm sai mong đợi của CL-66, CL-67.
- **Áp dụng máy móc template.** Với ô Email bị khóa ở W-06, AI lấy mong đợi "ô bị bỏ qua khi bấm Tab" theo template của môn (mục 3.12, 3.13), trái với chuẩn HTML (ô `readonly` vẫn nhận focus để screen reader đọc được). Sinh viên sửa theo HTML Living Standard và WCAG 2.2 SC 4.1.2 (CL-22).
- **Không biết dữ liệu được tạo thế nào.** CL-24 đòi "chọn đơn có ngày lớn hơn 12" để phân biệt ngày / tháng, nhưng đơn do `tools/seed_orders.py` tạo đều mang ngày chạy (9 hoặc 10).
- **Mâu thuẫn với chính oracle.** CL-55, CL-56 đòi thông báo đăng nhập sai phải nêu ô nào sai, trái với UI-R08 ("không để lộ chi tiết nguyên nhân").
- **Trôi sang kiểm thử chức năng.** 19 dòng Thừa, phần lớn là ý "bị từ chối / không đăng ký", kiểm biên số điện thoại, kiểm từng quy tắc mật khẩu: Đây là kết quả chức năng, sinh viên đã chốt ở CH-05 là checklist GUI chỉ kiểm trạng thái hiển thị.
- **Mơ hồ.** 14 dòng, ví dụ "hoặc tương đương", "trang hiện đầy đủ", "5 màu khác nhau", một mục kiểm 2 điều nên khi Failed không biết vì sao.

### 2.5 Kết quả chạy trên N1

Chi tiết: [`checklist/03_results.md`](checklist/03_results.md). Kết quả từng mục, Notes và ảnh: Cột NT1 của file Excel.

| IA | Số mục | Passed | Failed | Không chạy được |
|---|---|---|---|---|
| IA-01 | 36 | 19 | 17 | 0 |
| IA-02 | 31 | 13 | 14 | 4 |
| IA-03 | 19 | 10 | 8 | 1 |
| IA-04 | 26 | 9 | 15 | 2 |
| **Tổng** | **112** | **51** | **54** | **7** |

- Đã thực thi (Passed + Failed) 105 trên 112 mục, tỉ lệ Passed 48,6%. Không có N/A.
- 7 mục Không chạy được: 5 mục bị chặn vì trang Đăng ký từ chối mọi mật khẩu hợp lệ (#33), 2 mục phụ thuộc vào thành phần không có (ô Xác nhận mật khẩu, hộp xác nhận hủy đơn).
- Mục Failed có căn cứ SRS: 25 trên 46 mục đã thực thi. Mục khuyến nghị: 29 trên 59. Cả 5 mục sinh viên thêm đều Failed.
- Phát hiện chính: Không đăng ký được qua giao diện; ô Mật khẩu ở trang đăng nhập hiện rõ mật khẩu; đơn "Đang giao" vẫn hủy được; số điện thoại hợp lệ bị từ chối; trang đăng nhập có tiêu đề "Đăng Ký" và chữ tiếng Anh ("Username", "Sign In"); không báo tài khoản bị khóa; không có `<h1>`, `lang="en"`, ô Email `type="text"`; trang hồ sơ tràn ngang ở khổ 360 px.

### 2.6 Bug

Chi tiết: [`bugs/bug_report.md`](bugs/bug_report.md). Ảnh trang Issues đã lọc: [`bugs/screenshots/`](bugs/screenshots/).

- **33 issue mới, #33 đến #65**, mỗi issue có ảnh: 1 critical, 2 high, 9 medium, 21 low. 18 issue từ mục Failed có căn cứ SRS, 15 issue từ mục khuyến nghị có ảnh thấy rõ lỗi.
- **2 bình luận** vào issue đã có của thành viên khác cho thành phần dùng chung (navbar): #18 badge giỏ hàng (CL-68, CL-69), #29 nút "Thoát" (CL-70). 9 issue có ghi `Related` tới issue khác.
- 8 mục Failed theo khuyến nghị không báo lên Issues vì ảnh không cho thấy rõ lỗi (trạng thái rê chuột, đang tải, focus, tab Network); lý do từng mục ở `bug_report.md` mục 4.

---

## 3. Task 2: Usability Evaluation

Thư mục: [`usability/`](usability/). Luồng FL-05 (Web Admin): Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới.

### 3.1 Phase 1: Plan & prepare

| Bước | Kết quả | File |
|---|---|---|
| Mục tiêu đánh giá (test plan 9 phần) | ⏳ | [`01_test_plan.md`](usability/01_test_plan.md) |
| Kịch bản dạng mục tiêu, tiêu chí hoàn thành, thời gian chuẩn | ⏳ | [`02_scenario.md`](usability/02_scenario.md) |
| Bộ công cụ: Thang đo, câu hỏi mở (clarity, error recovery, speed, trust), phiếu ghi chú, phiếu thông tin, lời dặn và lời xin đồng ý | ⏳ | [`03_instruments.md`](usability/03_instruments.md) |
| 7 người tham gia (liên lạc che 4 số giữa) | ⏳ | [`participants.md`](usability/participants.md) |
| Pilot và các điểm đã sửa sau pilot | ⏳ | [`pilot/`](usability/pilot/) |

### 3.2 Phase 2: Các phiên

| Phiên | Ngày giờ | Thời lượng | Hoàn thành nhiệm vụ | Số lần can thiệp | Hồ sơ |
|---|---|---|---|---|---|
| P1 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P1/`](usability/sessions/P1/) |
| P2 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P2/`](usability/sessions/P2/) |
| P3 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P3/`](usability/sessions/P3/) |
| P4 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P4/`](usability/sessions/P4/) |
| P5 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P5/`](usability/sessions/P5/) |
| P6 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P6/`](usability/sessions/P6/) |
| P7 | ⏳ | ⏳ | ⏳ | ⏳ | [`sessions/P7/`](usability/sessions/P7/) |

### 3.3 Phase 3: Điểm thang đo và số liệu hiệu suất

⏳ Điểm từng người, trung bình, độ lệch; tỉ lệ hoàn thành, thời gian, số lỗi, số lần hỗ trợ; cách tính. File: `usability/04_scores.md`.

### 3.4 Phase 3: Pain point, bug đơn lẻ và vấn đề thiết kế theo severity

⏳ Gom pain point, tách bug đơn lẻ và vấn đề thiết kế mang tính hệ thống, xếp severity, đề xuất. File: `usability/05_findings.md`.

### 3.5 Bug của Task 2

⏳ Issue trên repo nhóm và mục Task 2 trong [`bugs/bug_report.md`](bugs/bug_report.md).

---

## 4. Task 3: Cross-Browser / Cross-Platform

Thư mục: [`cross_platform/`](cross_platform/). Dùng đúng checklist 112 mục của Task 1; mỗi nền tảng một nhóm cột trong file Excel.

### 4.1 Nền tảng, công cụ và lớp chữ đè

⏳ Tóm tắt từ [`cross_platform/01_setup.md`](cross_platform/01_setup.md): Nền tảng, công cụ, cách mở `localhost`, lớp chữ đè (MSSV, họ tên, email sinh viên).

### 4.2 Kết quả từng nền tảng

| Nền tảng | Công cụ | Đã chạy | Passed | Failed | N/A | Không chạy được | Ảnh |
|---|---|---|---|---|---|---|---|
| N1: Chrome 156, Windows 11 | Máy cá nhân, Playwright và chạy tay | 112 | 51 | 54 | 0 | 7 | [`checklist/screenshots/`](checklist/screenshots/), [`cross_platform/screenshots/chrome/`](cross_platform/screenshots/chrome/) |
| N2: Firefox, Windows 11 | BrowserStack Live | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| N3: Chrome Android | Điện thoại thật | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | [`cross_platform/screenshots/android-chrome/`](cross_platform/screenshots/android-chrome/) |

### 4.3 So sánh giữa các nền tảng

⏳ File: `cross_platform/02_compare.md`.

### 4.4 Bug chỉ xuất hiện trên một số nền tảng

⏳

---

## 5. Agent Skill

⏳ Thư mục: [`skills/`](skills/) (`gui-checklist`, `usability-evaluation`). Thành phần từng skill, cách dùng, kết quả chạy demo ở [`demo/`](demo/).

**Video demo:** ⏳

---

## 6. Test Summary

Bảng đầy đủ ở [`README.md`](README.md).

| Task | Phạm vi | Thiết kế | Đã chạy | Passed | Failed | Bug |
|---|---|---|---|---|---|---|
| Task 1 (N1 Chrome Windows) | 3 màn hình | 112 mục | 105 (7 Không chạy được) | 51 | 54 | 33 issue (#33 đến #65), 2 bình luận |
| Task 2 | 1 luồng, 7 người | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| Task 3 (N2, N3) | ⏳ | 112 mục mỗi nền tảng | ⏳ | ⏳ | ⏳ | ⏳ |

---

## AI Critique

⏳ 200 đến 300 từ, viết sau khi xong cả 3 task. Trả lời: AI sai, thiên lệch hay thiếu ở đâu; vì sao AI không bắt được; nguyên tắc rút ra khi làm việc với AI.

---

## Mandatory Disclosure

"Tôi dùng AI (Claude Code, Anthropic, claude-opus-5-5) cho các việc sau: Task 1: Lập bảng khảo sát và điền bảng quan sát từ ảnh tôi chụp, trích yêu cầu giao diện từ SRS, sinh bản đầu 109 mục checklist (bản gốc lưu nguyên văn trong `checklist/ai_raw/`), lọc trước các mục của IA-02 đến IA-04 theo tiêu chí tôi đặt, soạn `02_checklist.md` theo quyết định của tôi, kiểm định dạng và nguồn cho các mục tôi thêm, xuất file Excel, viết script Console chỉ đọc trang và script Playwright cho lần chạy, điền nháp kết quả từ log và ảnh, soạn bug report, tạo issue và chèn ảnh vào issue bằng `gh` theo danh sách tôi duyệt. Task 2: ⏳. Task 3: ⏳. Agent Skill: ⏳. Chung: Viết `WORKFLOW.md`, README và issue template của repo nhóm, các script trong `tools/`, khung báo cáo, README, các form và Appendix B. Một phiên Claude Code làm điều phối: Theo dõi tiến độ, chạy server EShop, reset và tạo dữ liệu, xuất prompt log, soát thao tác bị cấm. Tôi review và quyết định ở mọi bước (các bảng "Thay đổi so với bản AI" ghi đủ chỗ tôi sửa); tôi tự chụp ảnh khảo sát, tự viết các mục CL-109 đến CL-112, tự ngồi máy chạy checklist và chốt kết quả, tự tải ảnh lên GitHub, tự commit. ⏳ (Phần Task 2: Danh sách người tham gia, ghi chú quan sát, câu trả lời của người tham gia do tôi thực hiện, không đưa vào AI.) AI Audit Report chi tiết ở Appendix B."

---

## Self-Assessment

| No. | Criteria | Grade | Self-Assessed Grade |
|---|---|---|---|
| 1 | Task 1: GUI Checklist (design + execution + bug report) | 30 | ⏳ |
| 2 | Task 2: Usability Evaluation (task scenario + 7 sessions + analysis) | 40 | ⏳ |
| 3 | Task 3: Cross-Browser / Cross-Platform (≥ 3 platforms) | 20 | ⏳ |
| 4 | Agent Skills | 10 | ⏳ |
| | **Total** | **100** | ⏳ |

---

## Appendix A: Prompt log

Xem [`prompt_log.md`](prompt_log.md) (và `prompt_log.pdf`). Log xuất tự động từ transcript Claude Code bằng [`tools/export_prompt_log.py`](tools/export_prompt_log.py), chỉ gồm các phiên của HW03 (danh sách trắng): Phiên điều phối `949bce7e`, phiên Task 1 `f2487351`, phiên Task 2 `de8fb2a8`, phiên Task 3 `99fcf7b9`, phiên Agent Skill `a498e700`, ⏳ phiên Tổng hợp. Mỗi lượt có mã `Cnn`, thời gian, công cụ, prompt và output nguyên văn, danh sách thao tác AI đã làm (đọc, ghi file, chạy lệnh). Không dùng công cụ AI nào khác.

---

## Appendix B: AI Audit Report

> Theo mẫu [AI-02] (5 mục cho mỗi artifact). Nguyên văn prompt và output ở `prompt_log.md` (Appendix A, dẫn bằng mã `Cnn`); bản gốc của AI ở `ai_raw/` của từng task. Cột (4) dựa trên bảng "Thay đổi so với bản AI" của từng bước. Phần in đậm ở cột (5) là phần sinh viên thay đổi. Bản form: [`forms/[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md`](forms/).

Công cụ khai báo theo đề §8: Claude Code (Anthropic, claude-opus-5-5) là công cụ AI duy nhất; BrowserStack Live (bản trial) cho nền tảng N2 của Task 3, ⏳ ngày dùng.

"I use AI tools for the following tasks" (Tôi dùng công cụ AI cho các việc dưới đây):

| Artifact | (1) Prompt + công cụ + thời gian | (2) Output AI | (3) Verdict | (4) Lý do | (5) Bản SV sửa |
|---|---|---|---|---|---|
| B01: Phân tích đề, kế hoạch làm bài, tracker, `WORKFLOW.md`, README và issue template của repo nhóm | Claude Code, phiên điều phối `949bce7e`, C01 đến C11, 05/11/2026 đến 07/11/2026 | Tóm tắt yêu cầu của đề, danh sách việc và file nộp, quy trình từng task, quy tắc hộp đen, quy tắc `ai_raw/` và bảng thay đổi, quy ước commit và Issues của nhóm | **INCOMPLETE** | Kế hoạch ban đầu đã gán sẵn nền tảng của Task 3 khi chưa tới bước đó; README nhóm có quy tắc mà đề không yêu cầu (không dùng chung người tham gia giữa các thành viên). Để kiểm tra màn hình và luồng có đi được không trước khi chọn gói, AI đã đọc mã nguồn EShop (web `App.jsx`, `Profile.jsx`, `Register.jsx`, `Login.jsx`, `Cart.jsx`; admin `App.jsx`; mobile `App.js`; `backend/database.js`), không dùng cho thiết kế checklist. README nhóm có câu "frontend web gọi API bằng `http://localhost:3000` ghi cố định" rút ra từ lần đọc này, phiên Task 3 dẫn lại ở `01_setup.md` mục 1 (không đổi lựa chọn nền tảng). AI cũng tải Google Sheet chia việc của nhóm để kiểm tra công thức | Sinh viên yêu cầu **để các lựa chọn của bước sau thành quyết định mở (⏳)**, **bỏ quy tắc đề không yêu cầu** |
| B02: Script `tools/export_prompt_log.py`, `tools/md_to_pdf.py`, `tools/docx_to_md.py` | Phiên điều phối, 05/11/2026 | Sửa từ bản HW02: Danh sách phiên HW03, lọc thẻ `browser_instruction`, bỏ qua thư mục nhóm khi xuất PDF | ⏳ | ⏳ | ⏳ |
| B03: Script `tools/seed_orders.py` | Phiên điều phối, 08/11/2026 | Tạo 5 đơn ở 5 trạng thái cho `test@eshop.com` và tài khoản `newuser@eshop.com` không có đơn | **VALID** | Dùng được cho mọi lần chạy (ĐK-01); ma trận trạng thái ở N1 có đủ 5 trạng thái. Để viết script, AI đọc route backend (`server.js`, các route register, cart, checkout, cancel, admin status) theo yêu cầu của sinh viên; không dùng cho thiết kế checklist | Giữ nguyên |
| B04: T1 `survey` | Phiên Task 1 `f2487351`, C13, C21, C26, C30, 07/11/2026 đến 09/11/2026 | `ai_raw/T1_survey.md` (bảng quan sát trống); bảng quan sát AI điền từ 7 ảnh theo yêu cầu của sinh viên | **INCOMPLETE** | Bản AI điền từ ảnh ghi navbar không có mục dẫn tới `/profile`; ảnh tĩnh không cho thấy lời chào là link. Giờ chụp sinh viên ghi chưa khớp đồng hồ trong ảnh | Sinh viên **chụp thêm `survey_08`** (lời chào là link), điền phần ảnh không thấy (tiêu đề tab, ô mật khẩu, ô Email bị khóa); sửa giờ chụp |
| B05: T1 `oracle` | Phiên `f2487351`, C42, C44, C45, C48, 09/11/2026 | `ai_raw/T1_oracle.md`: 50 yêu cầu `UI-R01` đến `UI-R50`, ánh xạ IA và màn hình, 10 câu hỏi mở, 4 giả định | **INCOMPLETE** | 20 dòng thay đổi: 1 Sai (UI-R41, navbar không có mục cho `/profile`), 19 Quyết định của SV (CH-01 đến CH-10). Câu trả lời ban đầu của sinh viên dùng chữ "bắt buộc" cho mục ngoài SRS; AI đề xuất đổi thành khuyến nghị kèm nguồn, đúng WORKFLOW mục 1.1 | Sinh viên trả lời **CH-01 đến CH-10**, chốt **CH-05** (checklist GUI không kiểm logic), **NR-01, NR-02** là khuyến nghị; sửa UI-R41 theo `survey_08` |
| B06: T1 `ai-draft` IA-01 đến IA-04 | Phiên `f2487351`, C50 (IA-01, 12:52), C56 (IA-02 đến IA-04, 15:03), 09/11/2026 | `ai_raw/T1_draft_IA-01.md` đến `IA-04.md`: 109 mục, CHD-01 đến CHD-16 | **INCOMPLETE** | 6 Sai (định nghĩa highlight; ô `readonly` theo template trái chuẩn HTML ở CL-22; điều kiện "ngày lớn hơn 12" không tạo được ở CL-24; CL-55, CL-56 trái UI-R08), 19 Thừa (ý chức năng, mục trùng), 14 Mơ hồ, 2 Thiếu (CL-109, CL-110). IA-02 đến IA-04 làm trong một lượt theo yêu cầu của sinh viên, khác WORKFLOW mục 3.1.2 (AI đã nhắc). Ở C56, sinh viên dán kết quả DevTools của ô Email trước khi có checklist; AI ghi rõ là kết quả quá sớm và mục AI-02-21 được viết sau khi đã thấy đoạn này | Bỏ hoặc gộp **5 mục**, tách **3 mục thành 6**, sửa **49 mục**; các sửa đổi ở `02_checklist.md` mục 9 |
| B07: T1 `review`, `add`: Lọc trước IA-02 đến IA-04, soạn `02_checklist.md`, kiểm mục SV thêm | Phiên `f2487351`, C55, C64, C65, C67, C68, C76, C78, C79, 09/11/2026 đến 10/11/2026 | Bảng lọc theo 5 tiêu chí sinh viên đặt; `02_checklist.md` (112 mục); góp ý định dạng và nguồn cho mục sinh viên thêm | **VALID** | Sinh viên đồng ý toàn bộ đề xuất tinh chỉnh (C65) và chọn phương án ở từng câu hỏi; góp ý ở C78 bắt được nguồn sinh viên ghi không có trong slide và cột "Vì sao AI bỏ sót" chưa theo 3 giá trị quy định | Sinh viên **viết CL-109 đến CL-112**, chọn giữ **CL-111, CL-112** với Loại Quyết định của SV, chốt **dark mode, RTL** không thêm mục |
| B08: T1 `excel` | Phiên `f2487351`, C88, 10/11/2026 | `HW03_T1_GUI_Checklist.xlsx`: 5 sheet, 3 nhóm cột kết quả, danh sách chọn, tổng hợp tự đếm | **VALID** | Nội dung lấy nguyên từ `02_checklist.md`; dùng được cho cả 3 nền tảng | Sinh viên chọn **định dạng tự thiết kế** |
| B09: T1 `exec`: Script `devtools_check.js`, `n1_chrome_checklist.js`, `capture_screen.ps1` | Phiên `f2487351`, C91, C99, C105 đến C117, C129, C132, C149, 10/11/2026 | Script Console chỉ đọc trang (17 mục), script Playwright có `--dry-run`, chia nhóm mục (thêm nhóm H, I, J khi chụp bổ sung), script tự chụp toàn màn hình ở màn hình Failed đầu tiên của mỗi mục | **INCOMPLETE** | Phải chạy thử 2 lần để sửa selector và thời gian chờ (sinh viên cho phép AI chạy thử trên localhost, kết quả chạy thử không ghi vào Excel). AI xếp CL-34 vào "chạy tay" dù đo được bằng script, sinh viên hỏi lại mới thêm nhóm H (C129). Ảnh CL-109 có 2 cửa sổ Chrome chồng nhau do cách chụp (C121). Ở C149, AI tự chạy nhóm J trong cửa sổ của nó nên sinh viên không theo dõi được log; 3 ảnh thiếu lớp chữ đè, phải xóa và sinh viên chạy lại; AI đổi tên 2 ảnh cũ sang `_1` làm lệch tên ảnh trong Excel | Sinh viên đổi **chỉ dừng ở màn hình Failed đầu tiên** (C114), **tự chụp toàn màn hình** (C117), yêu cầu **AI chỉ đưa lệnh, sinh viên tự chạy** (C151), **sửa tên ảnh trong Excel** (C160); lần chạy thật do sinh viên ngồi máy |
| B10: T1 `exec`: Điền cột NT1 | Phiên `f2487351`, C123, C127, C135, C160, 10/11/2026 | Kết quả, Notes, tên ảnh của 112 mục từ log và ảnh; ô ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận | ⏳ | ⏳ Sinh viên ghi số ô đã sửa khi review | ⏳ |
| B11: T1 `bugs`: Danh sách bug, `bug_report.md`, issue trên GitHub | Phiên `f2487351`, C147, C149, C152, C154, C163, C164, 10/11/2026 | Danh sách 33 bug gộp theo lỗi gốc, severity đề xuất, tìm trùng bằng `gh issue list`; AI tạo 33 issue (#33 đến #65) bằng `gh issue create`, chèn ảnh bằng `gh issue edit`, bình luận #18, #29 | **VALID** | AI dừng hỏi trước khi tạo issue vì issue trên repo nhóm không xóa được; tự chỉ ra 3 bug chưa có ảnh đúng lỗi. Sinh viên đồng ý cách gộp và severity đề xuất (C149, C154), không sửa | Sinh viên chọn **báo thêm mục khuyến nghị có ảnh thấy rõ lỗi** (C149), **tải ảnh lên GitHub** và dán link vào `bugs/image_links.txt`, chụp trang Issues đã lọc |
| B12: Phiên điều phối: Theo dõi tiến độ, chạy server, reset dữ liệu, soạn tin nhắn, xuất log | Phiên `949bce7e`, 05/11/2026 đến 10/11/2026 | ⏳ | ⏳ | ⏳ | ⏳ |
| B13: T2 `plan`, `scenario`, `instruments` | Phiên Task 2 `de8fb2a8` | ⏳ | ⏳ | ⏳ | ⏳ |
| B14: T2 `pilot`, phiên P1 đến P7 (phần AI hỗ trợ, dữ liệu đã ẩn danh) | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B15: T2 `score`, `analysis`, `bugs` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B16: T3 `setup`, `firefox_triage.md` | Phiên Task 3 `99fcf7b9` | ⏳ | ⏳ | ⏳ | ⏳ |
| B17: T3 script `n3_android_checklist.js` và lần chạy N3 | Phiên `f2487351`, `99fcf7b9` | ⏳ | ⏳ | ⏳ | ⏳ |
| B18: T3 N2, `compare`, `bugs` | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B19: Agent Skill `gui-checklist`, `usability-evaluation` | Phiên Agent Skill `a498e700` | ⏳ | ⏳ | ⏳ | ⏳ |
| B20: Tổng hợp: `checklist/03_results.md`, khung `report.md`, README, form | Phiên Tổng hợp, 10/11/2026 | Tóm tắt kết quả N1 và bug, khung báo cáo, Test Summary, bản `.md` của [AI-02], [AI-03], [AI-05] | ⏳ | ⏳ | ⏳ |

### Tổng kết độ chính xác AI

⏳ Đếm khi bảng trên đủ dòng.

| Chỉ số | Số lượng | Tỉ lệ |
|---|---|---|
| Tổng artifact AI sinh đã audit | ⏳ | 100% |
| VALID (đúng, dùng nguyên) | ⏳ | ⏳ |
| INVALID (sai, loại bỏ) | ⏳ | ⏳ |
| INCOMPLETE (chấp nhận sau khi sửa) | ⏳ | ⏳ |

### Kết luận: Khi nào nên, không nên dùng AI?

⏳ 80 đến 150 chữ, sinh viên viết.
