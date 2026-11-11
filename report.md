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
| Ngày nộp | 11/11/2026 |

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
| Task 3: Cross-Browser / Cross-Platform | Chạy checklist của Task 1 trên 3 nền tảng: N1 Chrome trên Windows (chính là lần chạy của Task 1), N2 Firefox trên Windows (chạy trên máy sinh viên vì bản trial của BrowserStack, LambdaTest không đủ thời gian), N3 Chrome trên điện thoại Android thật. Chi tiết ở [`cross_platform/01_setup.md`](cross_platform/01_setup.md) |

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

| Bước | Kết quả | Ai làm | File |
|---|---|---|---|
| `plan` | Test plan 9 phần theo slide S13. Loại test theo Rubin: **Assessment** (giao diện đã hoàn chỉnh, nhiệm vụ rõ, có số liệu định lượng). 10 câu hỏi Q1 đến Q10 gắn với 4 khía cạnh probe của đề (clarity, error recovery, speed, trust) và với ảnh khảo sát luồng `flow_01` đến `flow_11`; 5 mục tiêu O1 đến O5; luồng chia 3 chặng M1 Đăng nhập, M2 Tạo danh mục, M3 Đăng sản phẩm (người tham gia không thấy cách chia); số liệu D1 đến D10; chân dung: Chủ shop hoặc nhân viên đăng sản phẩm, đã từng tự đăng sản phẩm bán online, chưa từng dùng EShop, không học môn này | AI đề xuất, SV review | [`01_test_plan.md`](usability/01_test_plan.md) |
| `scenario` | Kịch bản dạng mục tiêu, không đưa từng bước: "Tạo một danh mục mới tên là **Loa Bluetooth**, rồi đăng sản phẩm đầu tiên vào **đúng danh mục đó**"; phiếu dữ liệu cho sao chép; trạng thái ban đầu (reset DB); tiêu chí hoàn thành từng chặng; mốc T0 đến T4; mức can thiệp; tình huống đặc biệt. Thời gian chuẩn do SV tự làm và bấm giờ (toàn luồng 00:46.25), nhân bội số | AI đề xuất, **SV đo thời gian và chốt** | [`02_scenario.md`](usability/02_scenario.md) |
| `instruments` | I1 danh sách chuẩn bị; I2 tin nhắn xin đồng ý (gửi trước ngày phiên), lời dặn, giới thiệu think-aloud; I3 phiếu thông tin; I4 phiếu ghi chú quan sát có bảng mã sự kiện (`La`, `Lb`, `Lc`, `Ld`, `Le` cho lỗi, `DD`, `HO`, `MT`, `TK`, `CT1`...); I5 thang đo **SUS** (Google Form, người tham gia điền trên điện thoại của mình và gõ mã P do người điều phối đọc); I6 câu hỏi mở C1 đến C9 theo 4 khía cạnh probe | AI đề xuất, SV review | [`03_instruments.md`](usability/03_instruments.md) |
| `participants` | 7 người thật, ngoài lớp; liên lạc che 4 số giữa; cột đồng ý | **SV** (không đưa vào AI) | [`participants.md`](usability/participants.md) |
| `pilot` | 1 phiên `PL` ngày 10/11/2026 (16 phút). Sửa sau pilot: Giảm bội số thời gian chuẩn từ ×5 xuống **×3** (toàn luồng 03:51.25 thành **02:18.75**, vì người pilot chỉ dùng khoảng 36% chuẩn ×5); ngưỡng "bế tắc hẳn" từ 3 xuống 2 phút; đặt bộ gõ về tiếng Anh trước phiên (`PL` gõ sai email vì bộ gõ tiếng Việt); nói rõ được sao chép từ phiếu; người tham gia chỉ chạm chuột sau khi đọc to xong kịch bản; chỉnh thời lượng phiên trong test plan theo số đo. Pilot cũng phát hiện bug #66 | **SV** chạy và ghi; AI chuẩn bị mẫu, đề xuất sửa | [`pilot/`](usability/pilot/) |

Bảng "Thay đổi so với bản AI" của 3 bước thiết kế:

| Bước | Số dòng | Sai | Thiếu | Thừa | Mơ hồ | Quyết định của SV |
|---|---|---|---|---|---|---|
| `plan` | 19 | 0 | 10 | 1 | 0 | 8 |
| `scenario` | 19 | 1 | 3 | 1 | 0 | 14 |
| `instruments` | 22 | 0 | 7 | 0 | 2 | 13 |

### 3.2 Phase 2: Các phiên

Cả 7 phiên trực tiếp, cùng một máy (Chrome 156, Windows 11, chuột), cùng kịch bản, dữ liệu và trạng thái ban đầu (reset DB giữa hai phiên, trong lúc người tham gia điền form SUS). Không phiên nào có âm thanh; lời nói được ghi tay ngay lúc nghe.

| Phiên | Ngày giờ bắt đầu | Thời lượng | Hoàn thành toàn luồng | Can thiệp được tính | SUS | Hồ sơ |
|---|---|---|---|---|---|---|
| P1 | 10/11/2026 21:30 | 45 phút | Không (giá thiếu một chữ số 0, sai danh mục) | 2 (`CT1`) | 55,0 | [`sessions/P1/`](usability/sessions/P1/) |
| P2 | 10/11/2026 22:21 | 17 phút | **Tự hoàn thành** | 0 | 87,5 | [`sessions/P2/`](usability/sessions/P2/) |
| P3 | 10/11/2026 22:39 | 21 phút | **Tự hoàn thành** | 0 | 62,5 | [`sessions/P3/`](usability/sessions/P3/) |
| P4 | 11/11/2026 00:30 | 10 phút | Không (bỏ cuộc vì bug #67) | 0 | 45,0 | [`sessions/P4/`](usability/sessions/P4/) |
| P5 | 10/11/2026 23:54 | 11 phút | Không (sai danh mục) | 0 | 52,5 | [`sessions/P5/`](usability/sessions/P5/) |
| P6 | 10/11/2026 23:00 | 20 phút | **Tự hoàn thành** | 0 | 65,0 | [`sessions/P6/`](usability/sessions/P6/) |
| P7 | 11/11/2026 00:07 | 2 phút | Không (không đăng nhập được, dừng ở M1) | 0 | Không có | [`sessions/P7/`](usability/sessions/P7/) |

Người tham gia (phiếu thông tin I3, chỉ mã P): 6/7 là sinh viên 18 đến 24 tuổi, bán qua mạng xã hội, đã đăng dưới 50 sản phẩm, tự đánh giá quen máy tính mức 4 hoặc 5; P7 là nội trợ 25 đến 34 tuổi, bán cả trên sàn TMĐT, đã đăng 51 đến 200 sản phẩm, quen máy tính mức 3. Không ai từng dùng trang quản trị bán hàng.

Mỗi phiên có `notes.md` (phiếu ghi chú, nhật ký sự kiện theo mốc video, kiểm kết quả D6), `scale.md` (câu trả lời SUS chép từ Google Form), `probe.md` (câu hỏi mở) và một commit riêng. Thời lượng tính từ lúc bật quay; P1 dài vì người tham gia ngồi chờ người điều phối ghi chú trước câu hỏi mở.

Sai lệch quy trình của người điều phối, ghi đúng như đã xảy ra: P1 nhận 2 lần gợi ý ngoài quy trình (tính là `CT1`); P7 bị dừng sớm thay vì can thiệp mức 1 theo `02_scenario.md` mục 6; D6 của P4 không xác định được vì người điều phối kiểm bằng form "Sửa" trên trang chưa tải lại, đúng chỗ bug #67 làm sai.

Video quay màn hình của mọi phiên (pilot và P1 đến P7) nộp kèm trong bản nộp, không commit lên git. Cách nén và chia file theo giới hạn dung lượng của Moodle chốt lúc đóng gói (⏳).

### 3.3 Phase 3: Điểm thang đo và số liệu hiệu suất

Chi tiết: [`usability/04_scores.md`](usability/04_scores.md). SUS tính theo Brooke (1996) bằng [`usability/tools/score_t2.py`](usability/tools/score_t2.py) (câu lẻ trừ 1, câu chẵn lấy 5 trừ, tổng nhân 2,5); thời gian từ mốc video; lỗi đếm từ mã sự kiện.

| Chỉ số | Kết quả |
|---|---|
| Tự hoàn thành toàn luồng | **3/7 (43%)**: P2, P3, P6. Không ai hoàn thành nhờ can thiệp |
| Hoàn thành trong thời gian chuẩn (02:18.75) | 2/7 (29%): P3, P6. P2 vượt 0,25 giây (nhỏ hơn sai số của mốc ghi theo giây) |
| Tự hoàn thành từng chặng | M1 6/7; M2 6/6 người tới được; **M3 3/6 người tới được** |
| Thời gian trung bình (n = 6, người tới được mốc cuối chặng) | M1 00:16 (chuẩn 00:21.09); M2 00:30 (00:48.57); M3 00:54 (01:00.84); toàn luồng **01:50** (02:18.75), độ lệch chuẩn 22,2 giây |
| Lỗi (17 lần, 5/7 người) | `La` bấm sai chỗ 3; `Lb` hệ thống báo lỗi 3 (đều của P7); `Lc` lưu sai danh mục 3; `Ld` giá sai 1; `Le` làm lại thao tác 7. Theo chặng: M1 5, M2 4, M3 8 |
| Do dự | 13 lần ở 6/7 người, trong đó 11 lần là mở lại kịch bản đọc (nhiều nhất ở Dashboard và ngay sau khi tạo danh mục) |
| Kết quả cuối trong hệ thống (D6) | Danh mục mới tạo đúng 6/6; sản phẩm vào đúng danh mục: 3/6 chắc chắn, 2/6 sai (P1, P5), 1/6 không xác định (P4) |
| Tự kiểm tra kết quả (D7) | 6/6 người tới M3 có tự kiểm tra, nhưng chỉ nhìn tên và ảnh trong bảng; không ai chủ động kiểm danh mục (bảng không có cột danh mục) |
| **SUS** (n = 6, P7 không điền) | Trung bình **61,25**, trung vị 58,75, độ lệch chuẩn 14,73, thấp nhất 45,0 (P4), cao nhất 87,5 (P2); 1/6 người từ 68 trở lên. Nhóm tự hoàn thành 71,7; nhóm không hoàn thành 50,8 |

Sinh viên chốt 2 cách báo số liệu: Thời gian tính cho mọi người tới được mốc cuối chặng, không báo riêng nhóm tự hoàn thành (QĐ-S1); giữ P1 trong trung bình SUS dù P1 chọn 5 cho cả câu khen lẫn câu chê, báo thêm trung bình khi bỏ P1 (62,50) để so (QĐ-S2).

Nhận xét: Thời gian không phải vấn đề chính, mọi chặng có trung bình dưới chuẩn; người làm nhanh lại hay sai (P1 nhanh nhất ở M3 nhưng sai giá và danh mục). Vấn đề nằm ở **độ đúng của kết quả ở M3** và việc người dùng không biết mình đã sai.

### 3.4 Phase 3: Pain point, bug đơn lẻ và vấn đề thiết kế theo severity

Chi tiết: [`usability/05_findings.md`](usability/05_findings.md). Tách bug và vấn đề thiết kế theo SRS: Hệ thống làm sai một câu cụ thể của SRS thì là **bug** (báo lên Issues), SRS không yêu cầu thì là **vấn đề thiết kế**. Severity theo thang 4 mức của nhóm (QĐ6, sinh viên chốt thay cho thang Nielsen của bản AI); criticality = severity quy đổi (critical 4 đến low 1) × probability (số người gặp / 7). Thứ tự: F5 đầu tiên vì làm mất dữ liệu (QĐ-A2), còn lại theo criticality.

| Mã | Phát hiện | Người gặp | Loại | Severity | Criticality |
|---|---|---|---|---|---|
| F5 | Sau khi lưu ở form "Sửa", bảng hiện sai; lần sửa tiếp theo trên trang chưa tải lại ghi đè dữ liệu, kể cả của sản phẩm khác | P4 (1/7) | **Bug** #67 | critical | 0,57 |
| F2 | Không biết bước tiếp theo và khi nào là xong: Không có thông báo sau khi tạo danh mục và sau khi lưu sản phẩm, form tự xoá trắng | 5/7 | Thiết kế (một phần do kịch bản ở file riêng) | medium | 1,43 |
| F1 | Ô danh mục không nhãn, chọn sẵn "Điện thoại", bị bỏ qua; sản phẩm vào sai danh mục mà người dùng không biết | P1, P4, P5 (3/7) | Thiết kế | medium | 0,86 |
| F3 | Đăng nhập: Không xem được mật khẩu, không cảnh báo Caps Lock, thông báo "Đăng nhập thất bại" chung chung | P5, P7 (2/7) | Thiết kế | medium | 0,57 |
| F4 | Nút "Thêm mới" tạo ngay danh mục không tên khi ô tên trống | P1, P4 (2/7), cả người pilot | **Bug** #66 | medium | 0,57 |
| F6 | Ô giá không có dấu phân cách hàng nghìn, gõ tay dễ thiếu chữ số 0 | P1 (1/7), cả người pilot | Thiết kế | medium | 0,29 |
| F8 | Khối "Import sản phẩm từ CSV" ở đầu trang sản phẩm gây khó hiểu | P6 (1/7) | Thiết kế | medium | 0,29 |
| F7 | Giao diện trông lỗi thời, "giống AI làm" | P2, P6 (2/7) | Thiết kế (thẩm mỹ) | low | 0,29 |
| F9 | Nút "Xóa" xóa ngay, không hỏi xác nhận | P4 (1/7) | Thiết kế | low | 0,14 |

Pain point lớn nhất theo chặng là **M3**: 3/6 người tới M3 không hoàn thành. F1 là nguyên nhân chính (P1, P5 lưu vào "Điện thoại"), nhưng vẫn là vấn đề thiết kế vì SRS FR-15 chỉ yêu cầu "phải chọn từ danh sách có sẵn" và hệ thống có chọn sẵn. Lời người tham gia khớp với hành vi: P1, P5 trả lời "không có ô nào không chắc phải điền gì" vì không thấy ô danh mục, P5 (C7): "Ủa có phần đó hả, chết, hình như quên bỏ rồi."

Điểm tích cực: Menu bên trái dễ thấy (6/6 người tự tìm được "Danh mục", không ai vượt chuẩn ở M2); tạo danh mục nhanh khi đã nhập tên; người tham gia cảm nhận luồng nhanh.

Đề xuất theo thứ tự ưu tiên: (1) Sửa #67, danh sách và form "Sửa" luôn lấy dữ liệu mới nhất; (2) thông báo sau khi tạo danh mục và lưu sản phẩm, có đường dẫn sang bước tiếp theo; (3) ô danh mục bắt chọn, có nhãn, bảng có cột danh mục; (4) nút hiện mật khẩu, cảnh báo Caps Lock, thông báo lỗi có gợi ý; (5) sửa #66 và làm rõ ô tên danh mục; (6) giá có dấu phân cách; (7) thu gọn khối CSV; (8) rà thẩm mỹ; (9) hỏi xác nhận trước khi xoá.

Hạn chế: Mẫu nhỏ và đồng nhất (6/7 là sinh viên 18 đến 24 tuổi, bán qua mạng xã hội, quen máy tính); một người điều phối kiêm ghi chú, không có âm thanh; kịch bản ở file riêng làm tăng số lần mở lại kịch bản (F2) và giảm lỗi gõ giá (F6) vì người tham gia sao chép.

### 3.5 Bug của Task 2

Chi tiết: [`bugs/bug_report.md`](bugs/bug_report.md) mục Task 2. Ảnh trang Issues đã lọc: [`bugs/screenshots/issues_list_T2.png`](bugs/screenshots/issues_list_T2.png).

| Mã | Issue | Nội dung | Phát hiện ở | Severity |
|---|---|---|---|---|
| B-T2-01 | [#66](https://github.com/angquoc/software-testing-2026-HW03-group/issues/66) | Nút "Thêm mới" tạo danh mục có tên trống (sai FR-14) | Pilot, gặp lại ở P1, P4 | medium |
| B-T2-02 | [#67](https://github.com/angquoc/software-testing-2026-HW03-group/issues/67) | Sau khi lưu ở form "Sửa", bảng sản phẩm hiện sai và lần sửa tiếp theo (chưa tải lại trang) ghi đè dữ liệu, kể cả tên của sản phẩm khác (sai FR-15); mọi lần đều báo "Cập nhật thành công!" | P4; sinh viên tái hiện ngoài phiên bằng script [`usability/tools/edit_product_check.js`](usability/tools/edit_product_check.js) (8 trường hợp, tìm phần tử theo chữ trên trang, có log và ảnh) | critical |

Các vấn đề thiết kế F1, F2, F3, F6, F7, F8, F9 không báo lên Issues vì không sai câu cụ thể nào của SRS.

---

## 4. Task 3: Cross-Browser / Cross-Platform

Thư mục: [`cross_platform/`](cross_platform/). Dùng đúng checklist 112 mục của Task 1; mỗi nền tảng một nhóm cột trong file Excel.

### 4.1 Nền tảng, công cụ và lớp chữ đè

Chi tiết: [`cross_platform/01_setup.md`](cross_platform/01_setup.md).

| Nền tảng | Chạy ở đâu | Cách mở `localhost` | Lớp chữ đè |
|---|---|---|---|
| N1: Chrome trên Windows | Máy cá nhân; chính là lần chạy `exec` của Task 1 | Mở trực tiếp `http://localhost:5173` | Sticky Notes ghim nổi trên màn hình |
| N2: Firefox trên Windows 11 | Máy cá nhân (D-28, đổi từ BrowserStack Live sáng 11/11/2026, xem dưới bảng) | Mở trực tiếp `http://localhost:5173` | Sticky Notes ghim nổi trên màn hình |
| N3: Chrome trên điện thoại Android thật | Điện thoại của sinh viên, cắm USB | `adb reverse` cổng 5173 và 3000 | Samsung Notes dạng cửa sổ nổi |

- Đáp ứng đề: Có Chrome, Firefox và Android Chrome (thay cho Safari), đủ 3 nền tảng. Công cụ cloud đề ưu tiên đã được thử cho N2 nhưng bản trial không đủ thời gian (xem dưới); N3 là thiết bị thật, đề cho phép.
- Lớp chữ đè **chỉ** gồm MSSV, họ tên, email sinh viên (`23120061@student.hcmus.edu.vn`); thông số nền tảng được chụp từ chính hệ thống trong ảnh môi trường riêng (`overview_env`), vì nhãn tự gõ không chứng minh được ảnh chụp trên nền tảng đó.
- Mỗi ảnh chụp toàn màn hình, thấy được trình duyệt, URL `localhost` và lớp chữ đè.
- **N2 đổi từ cloud sang máy cá nhân (D-28).** Sáng 11/11/2026 sinh viên đăng ký trial: BrowserStack Live chỉ cho mỗi thiết bị tối đa 1 phút trong bản trial; LambdaTest Freemium chỉ có 2 phiên, mỗi phiên khoảng 2 phút, trong khi kế hoạch N2 cần 20 đến 25 phút. Bằng chứng: `cross_platform/screenshots/firefox/browserstack_trial_limit.png`, `lambdatest_trial_limit_1.png`, `_2.png`. ⏳ Phạm vi chạy N2 trên máy (D-29).
- Kế hoạch N2 lập khi còn dự tính chạy trên cloud, nên không chạy lại cả 112 mục vì giới hạn phút của bản trial: Phiên Task 3 phân loại từng mục ([`cross_platform/firefox_triage.md`](cross_platform/firefox_triage.md)), 17 mục nhóm A kiểm bằng script Console, 44 mục nhóm B chạy tay, 51 mục nhóm C không chạy lại (để trống ô Kết quả, ghi lý do ở Notes theo D-16) vì kết quả do nội dung, dữ liệu hay logic của trang quyết định, ít phụ thuộc trình duyệt, hoặc tốn nhiều phút (khóa tài khoản, 2 tab, giả lập mạng).

### 4.2 Kết quả từng nền tảng

"Đã chạy" là Passed + Failed. N/A là mục không áp dụng được trên nền tảng đó (ghi lý do trong Notes); "Không chạy được" là mục bị chặn bởi lỗi khác hoặc thiếu thành phần cần kiểm.

| Nền tảng | Công cụ | Đã chạy | Passed | Failed | N/A | Không chạy được | Tỉ lệ Passed / đã chạy | Ảnh |
|---|---|---|---|---|---|---|---|---|
| N1: Chrome 156, Windows 11 | Máy cá nhân; Playwright, script Console, chạy tay | 105 | 51 | 54 | 0 | 7 | 48,6% | [`checklist/screenshots/`](checklist/screenshots/), [`cross_platform/screenshots/chrome/`](cross_platform/screenshots/chrome/) |
| N2: Firefox, Windows 11 | Máy cá nhân | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| N3: Chrome 156 Android, Samsung SM-G998B | Điện thoại thật qua cáp USB; Playwright, chạy tay | 97 | 45 | 52 | 8 | 7 | 46,4% | [`cross_platform/screenshots/android-chrome/`](cross_platform/screenshots/android-chrome/) |

**Môi trường N3** (sheet "Môi trường" của Excel, cột NT3):

| Mục | Giá trị |
|---|---|
| Trình duyệt | Google Chrome 156.0.8078.79 cho Android, điều khiển bằng Playwright qua cáp USB (bật cờ "Enable command line on non-rooted devices") |
| OS, thiết bị | Android 15 (SDK 35); điện thoại thật của sinh viên Samsung SM-G998B; `adb reverse` cổng 5173 và 3000 để mở `localhost` |
| Màn hình | 1080 x 2400 (vật lý 1440 x 3200); vùng trang 384 x 755 px CSS (W-06 khi đăng nhập 397 x 781); devicePixelRatio 2.8125 |
| Zoom, cỡ chữ | Zoom 100% (CL-33: 200%, đặt trong Chrome > Cài đặt > Hỗ trợ tiếp cận); mật độ màn hình 450, cỡ chữ hệ thống 1.15 |
| Ngày giờ | 10/11/2026: Script đầy đủ từ 16:20 đến 16:29; CL-33 chạy tay khoảng 16:48 đến 16:51; nhóm H (CL-34) lúc 16:52; nhóm I (CL-05, CL-105) lúc 17:11; ảnh CL-06 chụp tay |
| Người chạy | Nguyễn Thị Ánh Ngọc: Chạy `checklist/tools/n3_android_checklist.js` (gồm nhóm H, I); kiểm tay CL-33, CL-48; chụp tay CL-06 |
| Lớp chữ đè | Samsung Notes dạng cửa sổ nổi (MSSV, họ tên, email sinh viên). Một số ảnh có thông báo của Chrome về cờ dòng lệnh, không che phần đang kiểm |
| Cách chốt kết quả | AI điền nháp từ log (`n3_run_log_2.txt`, `n3_cl34_log.txt`, `n3_extra_log.txt`) và ảnh, qua bản nháp `cross_platform/ai_raw/T3_android-chrome_manual_v3.md`; ô ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận. Sinh viên review và chốt |

N3 theo IA:

| IA | Số mục | Passed | Failed | N/A | Không chạy được |
|---|---|---|---|---|---|
| IA-01 | 36 | 14 | 17 | 5 | 0 |
| IA-02 | 31 | 13 | 14 | 0 | 4 |
| IA-03 | 19 | 9 | 7 | 2 | 1 |
| IA-04 | 26 | 9 | 14 | 1 | 2 |
| **Tổng** | **112** | **45** | **52** | **8** | **7** |

Mục Failed nào của N3 cũng có ảnh trong `cross_platform/screenshots/android-chrome/`. 7 mục Không chạy được giống N1 (trang Đăng ký từ chối mật khẩu hợp lệ, không có ô Xác nhận mật khẩu, không có hộp xác nhận hủy đơn).

### 4.3 So sánh giữa các nền tảng

⏳ So sánh đủ 3 nền tảng: `cross_platform/02_compare.md`.

Khác biệt giữa N1 và N3 (13 trên 112 mục có kết quả khác nhau):

| Mục | N1 | N3 | Ghi chú của N3 |
|---|---|---|---|
| CL-15, CL-16, CL-17, CL-21, CL-73 | Failed (CL-15, CL-16), Passed (CL-17, CL-21, CL-73) | N/A | Điện thoại không có bàn phím vật lý, bàn phím ảo không có phím Tab |
| CL-74, CL-107 | Failed | N/A | Màn hình cảm ứng không có trạng thái rê chuột |
| CL-32 | Passed | N/A | Không đặt được cửa sổ 1366 x 768; khổ điện thoại kiểm ở CL-109 |
| CL-11 | Passed | Failed | Tổng tiền phân cách hàng nghìn bằng dấu chấm (`10.000.000`); mong đợi theo UI-R33 là dấu phẩy, ví dụ `300,000` (CH-04) |
| CL-24 | Failed | Passed | Ngày đặt hiện theo ngày / tháng / năm (`10/11/2026`) |
| CL-33 | Passed | Failed | Zoom 200%: W-03 không thấy nút "Thoát", trang cuộn ngang; W-04 mục "Đăng nhập" trên navbar bị cắt; W-06 lời chào bị cắt, bảng chỉ thấy cột Mã ĐH và Ngày đặt |
| CL-34 | Passed | Failed | Họ Tên 50 ký tự: Lời chào xuống 4 dòng, navbar cao gấp đôi, "Giỏ hàng" bị ép xuống 2 dòng ở cả 3 màn hình |

CL-11 và CL-24 đổi ngược nhau giữa hai nền tảng. Sinh viên kiểm thêm ngày 11/11/2026 trên cùng máy Windows: Chrome giao diện tiếng Anh hiện `11/10/2026` và `10,000,000 ₫`, Chrome mở bằng `--lang=vi` hiện `10/11/2026` và `10.000.000 ₫`; Console cho locale `en-US` và `vi` ([`cross_platform/screenshots/chrome/CL-24_locale_1.png`](cross_platform/screenshots/chrome/CL-24_locale_1.png) đến `_4.png`). Như vậy định dạng ngày và tiền **đổi theo ngôn ngữ của trình duyệt**: N1 chạy Chrome tiếng Anh, điện thoại N3 dùng tiếng Việt, và không ngôn ngữ nào đạt cả hai mục. Issue #53 (CL-24) đã sửa lại nguyên nhân và thêm 4 ảnh; CL-11 báo thành issue riêng của Task 3 (⏳ sau N2).

### 4.4 Bug chỉ xuất hiện trên một số nền tảng

⏳

---

## 5. Agent Skill

Thư mục: [`skills/`](skills/). Hai skill viết lại từ chính quy trình đã làm tay ở Task 1 và Task 2, để dùng lại cho màn hình và luồng khác. Bản trong repo là nguồn chính; bản cài cho Claude Code ở `.claude/skills/` được chép từ đây và kiểm bằng `diff -r` (giống hệt nhau).

| Skill | Các bước | Thành phần |
|---|---|---|
| [`gui-checklist`](skills/gui-checklist/SKILL.md) | `survey` → `oracle` → `ai-draft` (mỗi IA một file) → `review` → `add` → `excel` → `exec` (nền tảng thứ nhất, kèm tóm tắt `03_results.md`) → `bugs` | `SKILL.md` (bảng bước, cách nhận biết bước tiếp theo từ trạng thái thư mục, quy tắc chung); `references/` (một file cho mỗi bước, `rules.md`, `sources.md`, `lessons.md`, `example-hw03.md`); `assets/templates/` (mẫu bản AI, bảng thay đổi, oracle, checklist, kết quả); `scripts/build_checklist_xlsx.py` (xuất Excel), `scripts/check_checklist.py` (kiểm định dạng, mã, truy vết) |
| [`usability-evaluation`](skills/usability-evaluation/SKILL.md) | `plan` → `scenario` → `instruments` → `participants` → `pilot` → các phiên P1 đến Pn → `score` → `analysis` → `bugs` | `SKILL.md`; `references/` (một file cho mỗi bước, `rules.md`, `lessons.md`, `example-fl05.md`); `assets/templates/` (mẫu test plan, kịch bản, bộ công cụ, điểm, phát hiện); `scripts/check_usability.py` (kiểm định dạng, bảng thay đổi, mã, quyết định còn mở, riêng tư) |

Nguyên tắc chung của cả hai skill, lấy từ cách làm bài:

- **Mỗi lượt một bước**, lưu nguyên văn bản AI vào `ai_raw/`, dừng chờ sinh viên review, rồi viết bản review có bảng "Thay đổi so với bản AI" (Loại: Sai, Thiếu, Thừa, Mơ hồ, Quyết định của SV; cột "Vì sao AI bỏ sót").
- **Quyết định để mở:** Mỗi điểm cần sinh viên chọn có mã và dấu ⏳; AI không chọn thay.
- **Hộp đen:** Không đọc mã nguồn, không tự mở giao diện ở bước thiết kế; kết quả chạy chỉ lấy từ lần chạy thật do sinh viên ngồi máy.
- **Riêng tư (usability):** AI không đọc danh sách người tham gia và video; chỉ chép ghi chú đã ẩn danh theo mã P; không bịa dữ liệu của người thật.
- **Bài học** từ bảng thay đổi của HW03 ghi trong `lessons.md` để lần sau AI tránh lại: Ví dụ ảnh tĩnh không cho thấy link (survey), áp template máy móc trái chuẩn HTML (ai-draft), phải hỏi thang severity và quy tắc ưu tiên trước khi chấm (analysis), AI tính nhẩm SUS sai ở P5 (sessions).
- Script viết riêng cho EShop (`checklist/tools/`, `usability/tools/`) không đưa vào skill; skill chỉ mô tả cách làm và trỏ tới các script này làm ví dụ.

**Demo** ([`demo/`](demo/)): Chạy `gui-checklist` trên một màn hình khác phạm vi HW03, Web Admin A-01 "Quản lý Danh mục", trong một phiên Claude Code mới (`d485f4ce`) đọc skill từ `.claude/skills/`, ngày 11/11/2026 từ 09:12 đến 10:28. Phiên demo không đọc `checklist/`, `usability/` và mã nguồn EShop.

| Bước | Kết quả trong `demo/gui-checklist/` |
|---|---|
| `survey` | 4 ảnh sinh viên chụp (chưa đăng nhập, có dữ liệu, menu trái, bảng trống); AI điền bảng quan sát từ ảnh, đối chiếu với điều sinh viên ghi |
| `oracle` | 32 mã `UI-R` (10 Áp dụng, 2 Áp dụng một phần, 20 Không áp dụng), 11 câu hỏi CH, 6 giả định, 7 mục khuyến nghị NR; bảng thay đổi 14 dòng |
| `ai-draft` | 60 mục, mỗi IA một file, 16 câu hỏi CHD |
| `review` | AI lọc trước theo 5 tiêu chí, sinh viên chốt 20 đề xuất: Bỏ 6 mục, tách 1 mục, đổi nguồn yếu sang Nielsen hoặc WCAG |
| `add` | 4 mục sinh viên thêm (CL-56 đến CL-59), trong đó CL-59 (tên đọc được của nút "Xóa" trên từng dòng) là mục AI bỏ sót; kết luận accessibility, dark mode, RTL |
| `excel` | `DEMO_GUI_checklist_A-01.xlsx`, 59 mục, xuất bằng `scripts/build_checklist_xlsx.py` của skill |

Demo dừng ở `excel` (không chạy `exec`, `bugs`) vì hết thời gian. Không demo `usability-evaluation`. Để kịp quay, câu trả lời cho các câu hỏi CH, CHD, đề xuất lọc P và bản nháp 4 mục ở bước `add` do phiên điều phối soạn theo yêu cầu của sinh viên, dựa trên các quyết định đã chốt ở Task 1; sinh viên đọc, sửa rồi gửi (Appendix B, B21).

**Video demo:** ⏳

---

## 6. Test Summary

Bảng đầy đủ ở [`README.md`](README.md).

| Task | Phạm vi | Thiết kế | Đã chạy | Passed | Failed | Bug |
|---|---|---|---|---|---|---|
| Task 1 (N1 Chrome Windows) | 3 màn hình | 112 mục | 105 (7 Không chạy được) | 51 | 54 | 33 issue (#33 đến #65), 2 bình luận |
| Task 2 | 1 luồng (FL-05, 3 chặng), 7 người và 1 pilot | Kịch bản 1 nhiệm vụ, 10 câu hỏi, SUS, 9 câu hỏi mở | 7 phiên (P7 dừng ở M1) | 3 tự hoàn thành | 4 không hoàn thành | 2 issue (#66, #67); 9 phát hiện (2 bug, 7 vấn đề thiết kế); SUS trung bình 61,25 (n = 6) |
| Task 3: N2 Firefox Windows | 3 màn hình | 112 mục | ⏳ | ⏳ | ⏳ | ⏳ |
| Task 3: N3 Chrome Android | 3 màn hình | 112 mục | 97 (8 N/A, 7 Không chạy được) | 45 | 52 | ⏳ |

---

## AI Critique

> Bản nháp do phiên điều phối viết từ các bảng "Thay đổi so với bản AI" và prompt log; sinh viên sửa lại (⏳).

**AI sai, thiên lệch, thiếu ở đâu.** Ở Task 1, AI chỉ nhìn ảnh tĩnh nên cho rằng navbar không có mục dẫn tới `/profile`, trong khi lời chào là link; AI áp mẫu của môn học một cách máy móc (ô `readonly` không nhận focus, trái chuẩn HTML) và đòi "đơn có ngày lớn hơn 12" mà dữ liệu không tạo được. 19 dòng Thừa cho thấy AI hay trôi sang kiểm thử chức năng. Đáng chú ý nhất: Cả 5 mục sinh viên thêm đều Failed, tức AI bỏ sót đúng những chỗ có lỗi (khổ 360 px, khoảng trắng khi dán, chống gửi trùng). Ở Task 2, AI chấm severity theo thang Nielsen thay vì thang của nhóm, xếp bug mất dữ liệu sau vấn đề thiết kế vì chỉ nhìn tích severity và tần suất, và tính nhẩm SUS sai (P5: 55 thay vì 52,5). Ở Task 3, không phiên nào đoán trước định dạng ngày, tiền phụ thuộc ngôn ngữ trình duyệt, cũng không lường được bản trial chỉ cho 1 đến 2 phút.

**Vì sao AI không bắt được.** AI không chạy giao diện ở bước thiết kế, nên mọi điều không có trong ảnh hay SRS (hành vi khi bấm, tải lại trang, ngôn ngữ, múi giờ, giới hạn công cụ) đều là chỗ mù. AI cũng không biết quy ước riêng của nhóm hay cách dữ liệu được tạo nếu không được đưa vào prompt, và dễ tin vào số tự tính.

**Nguyên tắc rút ra.** (1) Mỗi lượt một bước, lưu bản AI nguyên văn và ghi bảng thay đổi, để thấy rõ chỗ AI sai. (2) Bắt AI ghi giả định và câu hỏi mở (⏳) thay vì tự chọn. (3) Đưa quy ước của nhóm và cách tạo dữ liệu vào prompt ngay từ đầu. (4) Con số phải ra từ script, không tính nhẩm. (5) Kết quả chạy, ảnh và quyết định cuối luôn do người ngồi máy chốt.

---

## Mandatory Disclosure

"Tôi dùng AI (Claude Code, Anthropic, claude-opus-5-5) cho các việc sau: Task 1: Lập bảng khảo sát và điền bảng quan sát từ ảnh tôi chụp, trích yêu cầu giao diện từ SRS, sinh bản đầu 109 mục checklist (bản gốc lưu nguyên văn trong `checklist/ai_raw/`), lọc trước các mục của IA-02 đến IA-04 theo tiêu chí tôi đặt, soạn `02_checklist.md` theo quyết định của tôi, kiểm định dạng và nguồn cho các mục tôi thêm, xuất file Excel, viết script Console chỉ đọc trang và script Playwright cho lần chạy, điền nháp kết quả từ log và ảnh, soạn bug report, tạo issue và chèn ảnh vào issue bằng `gh` theo danh sách tôi duyệt. Task 2: Đề xuất test plan, kịch bản, bộ công cụ (bản gốc trong `usability/ai_raw/`), chuẩn bị mẫu hồ sơ pilot và các phiên, đọc hồ sơ pilot đã ẩn danh và đề xuất các chỗ sửa sau pilot, chép ghi chú đã ẩn danh của tôi vào hồ sơ từng phiên, viết script tính SUS và số liệu, đề xuất gom phát hiện và severity, viết script tái hiện bug #67, soạn và tạo issue #66, #67. Task 3: Đề xuất nền tảng, công cụ và cách chụp ảnh, phân loại 112 mục cho N2, viết script Playwright cho N3, điền nháp kết quả N3 từ log và ảnh, đề xuất cách so sánh và báo bug. Agent Skill: Viết hai skill `gui-checklist`, `usability-evaluation` từ quy trình đã làm, theo phạm vi và quyết định của tôi. Chung: Viết `WORKFLOW.md`, README và issue template của repo nhóm, các script trong `tools/`, khung báo cáo, README, các form và Appendix B. Một phiên Claude Code làm điều phối: Theo dõi tiến độ, chạy server EShop, reset và tạo dữ liệu, xuất prompt log, soát thao tác bị cấm. Tôi review và quyết định ở mọi bước (các bảng "Thay đổi so với bản AI" ghi đủ chỗ tôi sửa); tôi tự chụp ảnh khảo sát, tự viết các mục CL-109 đến CL-112, tự ngồi máy chạy checklist và chốt kết quả, tự tải ảnh lên GitHub, tự commit. Ở video demo Agent Skill, các câu trả lời cho câu hỏi của skill và bản nháp mục thêm ở bước `add` do phiên điều phối soạn theo yêu cầu của tôi, tôi đọc và sửa trước khi gửi. Ở Task 2, tôi tự tuyển 7 người tham gia và người pilot, tự lập danh sách người tham gia (không đưa vào AI), tự điều phối và ghi chú mọi phiên, tự đo thời gian chuẩn, chốt thang severity và thứ tự ưu tiên; câu trả lời SUS do người tham gia tự điền trên Google Form. Ở Task 3, tôi tự chạy N2, N3 trên BrowserStack và điện thoại của mình, tự chụp ảnh có lớp chữ đè và chốt kết quả. AI Audit Report chi tiết ở Appendix B."

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

Xem [`prompt_log.md`](prompt_log.md) (và `prompt_log.pdf`). Log xuất tự động từ transcript Claude Code bằng [`tools/export_prompt_log.py`](tools/export_prompt_log.py), chỉ gồm các phiên của HW03 (danh sách trắng): Phiên điều phối `949bce7e`, phiên Task 1 `f2487351`, phiên Task 2 `de8fb2a8`, phiên Task 3 `99fcf7b9`, phiên Agent Skill `a498e700`, phiên Tổng hợp `c934f0c0`. Mỗi lượt có mã `Cnn`, thời gian, công cụ, prompt và output nguyên văn, danh sách thao tác AI đã làm (đọc, ghi file, chạy lệnh). Không dùng công cụ AI nào khác.

---

## Appendix B: AI Audit Report

> Theo mẫu [AI-02] (5 mục cho mỗi artifact). Nguyên văn prompt và output ở `prompt_log.md` (Appendix A, dẫn bằng mã `Cnn`); bản gốc của AI ở `ai_raw/` của từng task. Cột (4) dựa trên bảng "Thay đổi so với bản AI" của từng bước. Phần in đậm ở cột (5) là phần sinh viên thay đổi. Bản form: [`forms/[AI-02] - FIT@HCMUS - AI Audit Report_Vn.md`](forms/).

Công cụ khai báo theo đề §8: Claude Code (Anthropic, claude-opus-5-5) là công cụ AI duy nhất; BrowserStack Live và LambdaTest (bản trial) đã thử cho nền tảng N2 của Task 3 ngày 11/11/2026 nhưng không đủ thời gian chạy (ảnh trong `cross_platform/screenshots/firefox/`), nên N2 chạy trên Firefox cài trên máy sinh viên.

"I use AI tools for the following tasks" (Tôi dùng công cụ AI cho các việc dưới đây):

| Artifact | (1) Prompt + công cụ + thời gian | (2) Output AI | (3) Verdict | (4) Lý do | (5) Bản SV sửa |
|---|---|---|---|---|---|
| B01: Phân tích đề, kế hoạch làm bài, tracker, `WORKFLOW.md`, README và issue template của repo nhóm | Claude Code, phiên điều phối `949bce7e`, C01 đến C11, 05/11/2026 đến 07/11/2026 | Tóm tắt yêu cầu của đề, danh sách việc và file nộp, quy trình từng task, quy tắc hộp đen, quy tắc `ai_raw/` và bảng thay đổi, quy ước commit và Issues của nhóm | **INCOMPLETE** | Kế hoạch ban đầu đã gợi ý sẵn nền tảng của Task 3 khi chưa tới bước đó (sinh viên hỏi lại ở C02); README nhóm có quy tắc mà đề không yêu cầu, "không dùng chung người tham gia giữa các thành viên" (sinh viên bỏ ở C08). AI đề xuất đổi luồng FL-05 vì chỉ 1 trong 7 người đã tuyển từng bán hàng (C04, C05); sinh viên giữ luồng và yêu cầu AI lập tiêu chí để tuyển lại (C06). Để kiểm tra màn hình và luồng có đi được không trước khi chọn gói, AI đã đọc mã nguồn EShop (web `App.jsx`, `Profile.jsx`, `Register.jsx`, `Login.jsx`, `Cart.jsx`; admin `App.jsx`; mobile `App.js`; `backend/database.js`), không dùng cho thiết kế checklist. README nhóm có câu "frontend web gọi API bằng `http://localhost:3000` ghi cố định" rút ra từ lần đọc này, phiên Task 3 dẫn lại ở `01_setup.md` mục 1 (không đổi lựa chọn nền tảng). AI cũng tải Google Sheet chia việc của nhóm để kiểm tra công thức | Sinh viên yêu cầu **để các lựa chọn của bước sau thành quyết định mở (⏳)** (C02), **bỏ quy tắc đề không yêu cầu** (C08), **giữ luồng FL-05** và tuyển người theo 6 tiêu chí (C06) |
| B02: Script `tools/export_prompt_log.py`, `tools/seed_orders.py` | Phiên điều phối `949bce7e`: `export_prompt_log.py` tạo ở C04 (05/11/2026), thêm phiên vào danh sách trắng ở C14, C22, C69, C94, C181; `seed_orders.py` tạo ở C16 (08/11/2026) | `export_prompt_log.py`: Sửa từ bản HW02, chỉ đọc các phiên HW03 trong danh sách trắng, lọc ngữ cảnh do IDE và hệ thống tự chèn. `seed_orders.py`: Tạo qua API 5 đơn ở 5 trạng thái cho `test@eshop.com` và tài khoản `newuser@eshop.com` không có đơn | **VALID** | Log được xuất lại trước mỗi lần commit, sinh viên không yêu cầu sửa script; danh sách trắng có đủ 6 phiên HW03. `seed_orders.py` dùng cho mọi lần chạy N1, N3 (ĐK-01; ví dụ C104, C112, C133, C153, C165), ma trận trạng thái ở N1, N3 có đủ 5 trạng thái; sinh viên tự dẫn script này cho phiên Task 1 (C55) và tự chạy theo lệnh AI đưa (C155). Để viết script, AI đọc route backend (`server.js`, các route register, cart, checkout, cancel, admin status) theo yêu cầu của sinh viên (C16); không dùng cho thiết kế checklist | Giữ nguyên |
| B03: Script `tools/md_to_pdf.py`, `tools/docx_to_md.py` | Phiên điều phối, C04, 05/11/2026 | `md_to_pdf.py`: Sửa từ bản HW02, bỏ qua thư mục nhóm khi xuất PDF. `docx_to_md.py`: Chép nguyên từ HW02 | ⏳ | `md_to_pdf.py` chưa chạy trong HW03 (bước xuất PDF chưa làm), log chưa đủ để kết luận. `docx_to_md.py` chạy ở phiên Tổng hợp (C179) để đọc mẫu form: Dừng với lỗi `UnicodeEncodeError` sau file đầu tiên khi in chữ tiếng Việt ra console cp1252; chạy lại với `PYTHONIOENCODING=utf-8` thì tạo đủ 3 file | ⏳ |
| B04: T1 `survey` | Phiên Task 1 `f2487351`, C13, C21, C26, C30, 07/11/2026 đến 09/11/2026 | `ai_raw/T1_survey.md` (bảng quan sát trống); bảng quan sát AI điền từ 7 ảnh theo yêu cầu của sinh viên | **INCOMPLETE** | Bản AI điền từ ảnh ghi navbar không có mục dẫn tới `/profile`; ảnh tĩnh không cho thấy lời chào là link. Giờ chụp sinh viên ghi chưa khớp đồng hồ trong ảnh | Sinh viên **chụp thêm `survey_08`** (lời chào là link), điền phần ảnh không thấy (tiêu đề tab, ô mật khẩu, ô Email bị khóa); sửa giờ chụp |
| B05: T1 `oracle` | Phiên `f2487351`, C42, C44, C45, C48, 09/11/2026 | `ai_raw/T1_oracle.md`: 50 yêu cầu `UI-R01` đến `UI-R50`, ánh xạ IA và màn hình, 10 câu hỏi mở, 4 giả định | **INCOMPLETE** | 20 dòng thay đổi: 1 Sai (UI-R41, navbar không có mục cho `/profile`), 19 Quyết định của SV (CH-01 đến CH-10). Câu trả lời ban đầu của sinh viên dùng chữ "bắt buộc" cho mục ngoài SRS; AI đề xuất đổi thành khuyến nghị kèm nguồn, đúng WORKFLOW mục 1.1 | Sinh viên trả lời **CH-01 đến CH-10**, chốt **CH-05** (checklist GUI không kiểm logic), **NR-01, NR-02** là khuyến nghị; sửa UI-R41 theo `survey_08` |
| B06: T1 `ai-draft` IA-01 đến IA-04 | Phiên `f2487351`, C50 (IA-01, 12:52), C56 (IA-02 đến IA-04, 15:03), 09/11/2026 | `ai_raw/T1_draft_IA-01.md` đến `IA-04.md`: 109 mục, CHD-01 đến CHD-16 | **INCOMPLETE** | 6 Sai (định nghĩa highlight; ô `readonly` theo template trái chuẩn HTML ở CL-22; điều kiện "ngày lớn hơn 12" không tạo được ở CL-24; CL-55, CL-56 trái UI-R08), 19 Thừa (ý chức năng, mục trùng), 14 Mơ hồ, 2 Thiếu (CL-109, CL-110). IA-02 đến IA-04 làm trong một lượt theo yêu cầu của sinh viên, khác WORKFLOW mục 3.1.2 (AI đã nhắc). Ở C56, sinh viên dán kết quả DevTools của ô Email trước khi có checklist; AI ghi rõ là kết quả quá sớm và mục AI-02-21 được viết sau khi đã thấy đoạn này | Bỏ hoặc gộp **5 mục**, tách **3 mục thành 6**, sửa **49 mục**; các sửa đổi ở `02_checklist.md` mục 9 |
| B07: T1 `review`, `add`: Lọc trước IA-02 đến IA-04, soạn `02_checklist.md`, kiểm mục SV thêm | Phiên `f2487351`, C55, C64, C65, C67, C68, C76, C78, C79, 09/11/2026 đến 10/11/2026 | Bảng lọc theo 5 tiêu chí sinh viên đặt; `02_checklist.md` (112 mục); góp ý định dạng và nguồn cho mục sinh viên thêm | **VALID** | Sinh viên đồng ý toàn bộ đề xuất tinh chỉnh (C65) và chọn phương án ở từng câu hỏi; góp ý ở C78 bắt được nguồn sinh viên ghi không có trong slide và cột "Vì sao AI bỏ sót" chưa theo 3 giá trị quy định | Sinh viên **viết CL-109 đến CL-112**, chọn giữ **CL-111, CL-112** với Loại Quyết định của SV, chốt **dark mode, RTL** không thêm mục |
| B08: T1 `excel` | Phiên `f2487351`, C88, 10/11/2026 | `HW03_T1_GUI_Checklist.xlsx`: 5 sheet, 3 nhóm cột kết quả, danh sách chọn, tổng hợp tự đếm | **VALID** | Nội dung lấy nguyên từ `02_checklist.md`; dùng được cho cả 3 nền tảng | Sinh viên chọn **định dạng tự thiết kế** |
| B09: T1 `exec`: Script `devtools_check.js`, `n1_chrome_checklist.js`, `capture_screen.ps1` | Phiên `f2487351`, C91, C99, C105 đến C117, C129, C132, C149, 10/11/2026 | Script Console chỉ đọc trang (17 mục), script Playwright có `--dry-run`, chia nhóm mục (thêm nhóm H, I, J khi chụp bổ sung), script tự chụp toàn màn hình ở màn hình Failed đầu tiên của mỗi mục | **INCOMPLETE** | Phải chạy thử 2 lần để sửa selector và thời gian chờ (sinh viên cho phép AI chạy thử trên localhost, kết quả chạy thử không ghi vào Excel). AI xếp CL-34 vào "chạy tay" dù đo được bằng script, sinh viên hỏi lại mới thêm nhóm H (C129). Ảnh CL-109 có 2 cửa sổ Chrome chồng nhau do cách chụp (C121). Ở C149, AI tự chạy nhóm J trong cửa sổ của nó nên sinh viên không theo dõi được log; 3 ảnh thiếu lớp chữ đè, phải xóa và sinh viên chạy lại; AI đổi tên 2 ảnh cũ sang `_1` làm lệch tên ảnh trong Excel | Sinh viên đổi **chỉ dừng ở màn hình Failed đầu tiên** (C114), **tự chụp toàn màn hình** (C117), yêu cầu **AI chỉ đưa lệnh, sinh viên tự chạy** (C151), **sửa tên ảnh trong Excel** (C160); lần chạy thật do sinh viên ngồi máy |
| B10: Điền cột NT1 (T1 `exec`) và NT3 (T3 N3) | Phiên Task 1 `f2487351` (NT1): C121, C123, C127, C129, C131, C134, C135, C160; phiên Task 3 `99fcf7b9` (NT3): C180, C182, C184, C185, C187, C188, C191, C195, C196; 10/11/2026 | Kết quả, Notes, tên ảnh của 112 mục mỗi nền tảng từ log script và ảnh; ô ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận. NT3 qua 3 bản nháp `cross_platform/ai_raw/T3_android-chrome_manual.md`, `_v2`, `_v3`, rồi chép vào Excel cùng sheet Môi trường và Ma trận trạng thái | **INCOMPLETE** | Log không ghi lần nào sinh viên đổi một kết quả Passed / Failed do AI điền (NT3: Sinh viên review xong bản nháp và cho chép vào Excel ở C196). Các chỗ phải sửa nằm ở bằng chứng và cách chạy: Ảnh CL-109 của N1 có 2 cửa sổ chồng nhau, sinh viên hỏi lại và AI đề xuất chụp lại (C121); AI để CL-34 chạy tay dù đo được, sinh viên hỏi lại mới thêm nhóm H (C129); AI đổi tên 2 ảnh cũ làm lệch tên ảnh trong Excel, sinh viên phát hiện (C160); ở N3, AI hướng dẫn chạy tay CL-05, CL-105, sinh viên hỏi lại mới thêm nhóm I (C187); AI đòi ảnh CL-06 phải thấy URL dù danh sách tab của Chrome Android không hiện URL, sinh viên chỉ ra giới hạn này (C188). AI tự hỏi lại trước khi chốt CL-68, CL-69 (giỏ đã có hàng chưa, C180) và đề xuất CL-34 của N3 là Failed dù script đo W-03, W-04 là Passed, sinh viên chấp nhận (C184, C196) | Sinh viên **chụp bổ sung** 4 ảnh tay của N1 (C134, C135), 11 ảnh CL-33 và ảnh CL-06 của N3 (C184, C195), **kiểm tay CL-48** của N3, **yêu cầu dùng script** cho CL-34, CL-05, CL-105 (C129, C187), **sửa tên ảnh trong Excel** (C160), **xác nhận giỏ hàng** cho CL-68, CL-69 (C182), giữ ảnh CL-06 dù mất thanh trạng thái vì vẫn là ảnh thật (C196) |
| B11: T1 `bugs`: Danh sách bug, `bug_report.md`, issue trên GitHub | Phiên `f2487351`, C147, C149, C152, C154, C163, C164, 10/11/2026 | Danh sách 33 bug gộp theo lỗi gốc, severity đề xuất, tìm trùng bằng `gh issue list`; AI tạo 33 issue (#33 đến #65) bằng `gh issue create`, chèn ảnh bằng `gh issue edit`, bình luận #18, #29 | **VALID** | AI dừng hỏi trước khi tạo issue vì issue trên repo nhóm không xóa được; tự chỉ ra 3 bug chưa có ảnh đúng lỗi. Sinh viên đồng ý cách gộp và severity đề xuất (C149, C154), không sửa | Sinh viên chọn **báo thêm mục khuyến nghị có ảnh thấy rõ lỗi** (C149), **tải ảnh lên GitHub** và dán link vào `bugs/image_links.txt`, chụp trang Issues đã lọc |
| B12: Phiên điều phối: Theo dõi tiến độ, chạy server, reset và tạo dữ liệu, soạn tin nhắn, ước tính thời gian, soát thao tác bị cấm | Phiên `949bce7e`, từ C12, 07/11/2026 đến 11/11/2026 | Bảng trạng thái từng task, lệnh commit, tin nhắn cho các phiên thiết kế, reset DB và seed, hồ sơ phiên trống P1 đến P7, ước tính giờ còn lại, kiểm tra các phiên thiết kế không đọc file bị cấm | **INCOMPLETE** | Soát được thao tác bị cấm của các phiên thiết kế (C69, C94) và thêm đủ phiên vào danh sách trắng. Nhưng: Ước tính dư (7 phiên usability 9 giờ ở C81; phần Tổng hợp 6 giờ ở C139), sinh viên hỏi lại mới tính lại; cách tính thời gian phiên usability trái quyết định đã chốt (tính cả phần xin đồng ý dù đã chốt xin qua tin nhắn; tính phần điền SUS nối tiếp dù người khác vẫn làm nhiệm vụ được trong lúc đó, C82); `03_instruments.md` mục I5 ghi người tham gia điền SUS trên máy của sinh viên nên máy bị chiếm (C83); bảo sinh viên tự ghi thông tin trình duyệt, OS đã có ở Task 1 (C102); hướng dẫn số ảnh cần chụp khác phiên Task 1 (C130); đề xuất đẩy ảnh vào repo nhóm để chèn vào issue, sinh viên chỉ ra issue của thành viên khác có ảnh mà không cần đẩy lên repo (C137, C139); kết luận sai là server đã tắt, bật thêm server làm mất dữ liệu đơn hàng (C146); đưa lệnh commit cho thay đổi đã commit và nhầm trạng thái N3 (C148); báo bug #67 "chưa tạo issue" khi issue đã có (C236). Phát hiện đúng: DB bị script tái hiện bug để lại dữ liệu thử (C229); kết quả N1, N3 ngược nhau ở CL-11, CL-24 có thể do ngôn ngữ trình duyệt, hướng dẫn kiểm bằng Chrome `--lang=vi` (C234 đến C238); seed vào ngày 11/11 làm ngày đặt không phân biệt được ngày/tháng (C249, C252) | Sinh viên yêu cầu **tính lại ước tính** (C81, C139), **sửa mục I5 của `03_instruments.md`** cho người tham gia điền SUS bằng link (C83), AI **tự điền thông tin máy** (C102), chuyển sang **kéo ảnh vào bình luận để lấy link** (C144, C147), xin **lệnh reset và seed để tự chạy** (C155), giao **viết report một lần** khi xong các task (C244) |
| B13: T2 `plan`, `scenario`, `instruments` | Phiên Task 2 `de8fb2a8`: `plan` C18, C24, C29, C31, C33 (08/11 đến 09/11/2026); `scenario` C36, C37, C41, C51, C52; `instruments` C54, C57, C58, C60 (09/11/2026); sửa `instruments` theo cách điền SUS C84 đến C86 (10/11/2026) | `ai_raw/T2_plan.md`, `T2_scenario.md`, `T2_instruments.md`: Test plan 9 phần, 10 câu hỏi Q1 đến Q10, chặng M1 đến M3, số liệu D1 đến D10; kịch bản mục tiêu, phiếu dữ liệu, thời gian chuẩn đề xuất 1, 2, 4, 7 phút; bộ công cụ I1 đến I7, thang SUS, câu hỏi mở C1 đến C9, mã sự kiện | **INCOMPLETE** | Bảng thay đổi: `plan` 19 dòng (10 Thiếu, 1 Thừa, 8 Quyết định của SV), `scenario` 19 dòng (1 Sai, 3 Thiếu, 1 Thừa, 14 Quyết định của SV), `instruments` 22 dòng (7 Thiếu, 2 Mơ hồ, 13 Quyết định của SV). Thời gian chuẩn của bản AI không có căn cứ đo. AI chỉ biết giao diện qua ảnh: Sinh viên phải bổ sung ảnh trang Admin (C24, C29) và trả lời việc có thông báo sau khi tạo hay không (C31), các câu Q2, Q7 mới đúng thực tế. Ở C57 AI viết "người điều phối đọc nguyên văn" làm sinh viên hiểu là phải ghi âm | Sinh viên **tự làm và bấm giờ** để đặt thời gian chuẩn ×5 (C52), chốt **QĐ1** (không thêm chặng M4) và các **QĐ2** của kịch bản (C51), chốt cách **điền SUS trên điện thoại của người tham gia, đọc mã P** (C84 đến C86) |
| B14: T2 `pilot`, phiên P1 đến P7 (phần AI hỗ trợ, dữ liệu đã ẩn danh) | Phiên `de8fb2a8`: Sửa sau pilot C118 (10/11/2026); ghi hồ sơ phiên C203 đến C221 (10/11 đến 11/11/2026). Hồ sơ trống P1 đến P7 do phiên điều phối tạo | Đề xuất sửa kịch bản, bộ công cụ, test plan theo `pilot/notes.md` mục 8; chép ghi chú tay đã ẩn danh của sinh viên vào `notes.md`, `scale.md`, `probe.md` của từng phiên, hỏi lại chỗ thiếu mốc | **INCOMPLETE** | Lúc ghi P5, AI tính nhẩm SUS ra 55, đúng là 52,5 (đính chính ở `04_scores.md` mục 8). AI tính thời lượng phiên theo cách khác cách sinh viên đo (C206, C214 đến C216: Sinh viên tính từ lúc bật quay, phần mở đầu đã gửi qua tin nhắn). AI ghi đúng các sai lệch quy trình của người điều phối (2 gợi ý ở P1, dừng sớm P7) thay vì bỏ qua | Sinh viên **ghi chú tay mọi phiên**, **chọn bội số ×3** sau pilot (C118), chốt **cách tính thời lượng phiên** (C206, C214), chốt **cách ghi P7** (C217, C218) và D6 của P4 (C227) |
| B15: T2 `score`, `analysis`, `bugs` (#66, #67, script `edit_product_check.js`) | Phiên `de8fb2a8`: Bug #66 C189 đến C193 (10/11/2026); bug #67 và script C221 đến C231; `score`, `analysis` C232, C235, C239, C240 (11/11/2026) | `ai_raw/T2_score.md` và script `score_t2.py`; `ai_raw/T2_analysis.md` (9 phát hiện, severity theo Nielsen); script tái hiện 8 trường hợp E1 đến E8, issue #66, #67 | **INCOMPLETE** | `score`: Script tính trung bình thời gian tự kiểm tra có cả P4 với 00:00 (ra 00:10 thay vì 00:12); 2 Quyết định của SV (QĐ-S1, QĐ-S2). `analysis`: Bản AI chấm severity theo thang Nielsen 0 đến 4, sinh viên đổi sang thang 4 mức của nhóm nên phải chấm lại cả bảng (QĐ6); 4 dòng thay đổi đều là Quyết định của SV. Bug #67: Mô tả ban đầu hẹp hơn lỗi thật; sinh viên chỉ ra lỗi nghiêm trọng hơn và đề nghị viết script phủ các trường hợp (C222, C223); lần chạy đầu thiếu trường hợp, sinh viên bảo chạy lại có thêm E8 (C226) | Sinh viên **tự tái hiện** #67 trước khi có script (C221, C222), **đề nghị viết script** (C223), chốt **QĐ-S1** (a), **QĐ-S2** (b), **QĐ6** (thang của nhóm), **QĐ-A2** (F5 lên đầu) (C235, C239, C240), tải ảnh issue lên GitHub |
| B16: T3 `setup`, `firefox_triage.md` | Phiên Task 3 `99fcf7b9`: `setup` C62, C72 đến C75, C77 (09/11/2026); triage C126, C199 (10/11/2026) | `ai_raw/` của `01_setup.md`: Phương án nền tảng, công cụ, lớp chữ đè, cách chụp, cách mở `localhost`; `firefox_triage.md`: 112 mục chia nhóm A (Console) 17, B (chạy tay) 44, C (không chạy lại) 51 | **INCOMPLETE** | `01_setup.md`: 26 dòng thay đổi, 5 Thiếu (lớp chữ đè cho điện thoại; cài `adb`; đặt tên khi cần nhiều ảnh dù quy tắc có sẵn ở WORKFLOW; các quyết định D-11 đến D-15), 21 Quyết định của SV. Bản AI chưa tính lớp chữ đè trên điện thoại (sinh viên chỉ ra ở C73). `firefox_triage.md`: 4 Quyết định của SV | Sinh viên chọn **N3 là điện thoại thật**, **không thêm nhãn nền tảng vào lớp chữ đè** (D-06b, C74), **BrowserStack Live** (D-03, C77), **lập triage trước khi đăng ký trial** (C126), chốt **D-16 đến D-19** (C199) |
| B17: T3 script `n3_android_checklist.js` và lần chạy N3 | Phiên `99fcf7b9`: C156, C157, C159, C166, C169, C171, C173, C174, C180 đến C188, C191 (10/11/2026) | Script Playwright điều khiển Chrome trên điện thoại qua cáp USB, chia nhóm mục, tự chụp ảnh; nhóm H (CL-34), I (CL-05, CL-105) thêm sau | **INCOMPLETE** | Lần chạy đầu không chạy được: Kẹt ở bước bật cờ dòng lệnh (C157), điện thoại báo `localhost` không gửi dữ liệu vì web chỉ nghe IPv6 (C166), nhóm C dừng vì không đăng nhập được (C169). AI hướng dẫn chạy tay CL-05, CL-105 dù script làm được (C187); đòi ảnh CL-06 thấy URL dù danh sách tab của Chrome Android không hiện URL (C188) | Sinh viên **ngồi máy chạy mọi lần**, **reset DB** trước mỗi lần, yêu cầu **xóa bộ ảnh cũ và chạy lại** (C173, C174), **chụp tay** CL-33, CL-06 (C184, C195), **yêu cầu dùng script** cho CL-05, CL-105 (C187) |
| B18: T3 N2, `compare`, `bugs` | Phiên `99fcf7b9`: Kiểm ngôn ngữ trình duyệt C241, C246 (11/11/2026); CL-24 cho N2 C255; ⏳ | Đề xuất cách ghi CL-11, CL-24 theo ngôn ngữ trình duyệt (D-20 đến D-26); ⏳ | ⏳ | ⏳ | Sinh viên **tự kiểm Chrome tiếng Việt** (`--lang=vi`) và chụp 4 ảnh, chốt **D-20 đến D-26**; ⏳ |
| B19: Agent Skill `gui-checklist`, `usability-evaluation` | Phiên Agent Skill `a498e700`: C93, C97, C106 (10/11/2026); bổ sung bước sau C170, C176, C202 (10/11/2026), C247 (11/11/2026) | `skills/gui-checklist/`, `skills/usability-evaluation/`: `SKILL.md`, file từng bước, mẫu, script kiểm, `lessons.md`; chép sang `.claude/skills/` và kiểm `diff -r` | **INCOMPLETE** | Bản đầu viết cả các bước chưa làm thật; sinh viên giới hạn chỉ viết các bước đã xong, bước sau để khung (C97). Sinh viên quyết ngoại lệ "4 IA một lượt" ghi vào `SKILL.md` (C106), không đưa script riêng của EShop vào `scripts/` của skill (C176), thêm file tóm tắt `03_results.md` (C202). Các bước sau phiên của usability viết từ file thật của Task 2 ở C247, không đọc hồ sơ phiên | Sinh viên chốt **phạm vi 2 skill** (D9), **chỉ viết bước đã làm thật** (C97), **ngoại lệ ai-draft** (C106), **không đưa script EShop vào skill** (C176) |
| B20: Tổng hợp: `checklist/03_results.md`, khung `report.md`, README, form | Phiên Tổng hợp `c934f0c0`, C179, C200, 10/11/2026 | Tóm tắt kết quả N1 và bug, khung báo cáo, Test Summary, bản `.md` của [AI-02], [AI-03], [AI-05]; điền verdict B02, B10, B12 từ log | **VALID** | Phần Task 1 và N3 lấy số từ Excel và `bug_report.md`, dùng nguyên; các ô cần sinh viên quyết được để ⏳ đúng như yêu cầu ở C179, không tự chọn thay. Ở C200 phiên giữ ⏳ cho B03 vì log chưa đủ để kết luận | Sinh viên chốt **chỉ dùng Claude Code**, **nộp đủ video**, **để cấp độ AI và điểm tự chấm tới cuối** (C200). Phần Task 2, Task 3, Skill của report do phiên điều phối viết tiếp (B12, C244) |
| B21: Demo Agent Skill `gui-checklist` trên A-01 "Quản lý Danh mục" | Phiên demo `d485f4ce`, C269 đến C291, 11/11/2026 09:12 đến 10:28 | `demo/gui-checklist/`: Bảng khảo sát, oracle (32 mã, 7 NR), 4 file ai-draft (60 mục), bảng lọc 20 đề xuất, `02_checklist.md` (59 mục), file Excel | **INCOMPLETE** | Bảng thay đổi của `02_checklist.md` có 36 dòng: 2 Thiếu (CL-59 do sinh viên thêm; ghi chú "Không chạy được" cho CL-26, CL-27 do AI tự phát hiện khi soạn), 1 Thừa, 8 Mơ hồ, 25 Quyết định của SV; `01_oracle.md` 14 dòng đều là Quyết định của SV. Bản AI dẫn nguồn slide và template mà phiên chưa đọc, phải đổi sang Nielsen, WCAG hoặc bỏ (CHD-03). Skill chạy đúng quy trình: Mỗi bước dừng chờ, lưu `ai_raw/`, script kiểm báo 0 lỗi, nhắc sinh viên đường dẫn commit. **Câu trả lời CH-01 đến CH-11, CHD-01 đến CHD-16, P-01 đến P-20 và bản nháp 4 mục `add` do phiên điều phối `949bce7e` soạn theo yêu cầu của sinh viên** để kịp quay (C280 trở đi của phiên điều phối) | Sinh viên **chụp 4 ảnh khảo sát**, đọc và gửi các câu trả lời, chọn **giữ CL-06 (đủ dấu)**, **tách CL-04, CL-05**, **bỏ mục Enter gửi form**, **sửa tiêu chí câu đầy đủ** (P-01, P-05, P-10, P-19); dừng demo ở `excel` |


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
