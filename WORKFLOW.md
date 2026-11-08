# Quy trình làm bài HW03: GUI & Usability trên EShop

Tài liệu này mô tả cách làm bài HW03: Các bước của từng task, file đầu ra, cách commit và các quy tắc phải giữ. Mọi phiên AI tham gia làm bài phải đọc file này trước khi bắt đầu.

Phạm vi của sinh viên (theo bảng phân công của nhóm):

| Task | Phạm vi |
|---|---|
| Task 1: GUI Checklist | Màn hình chính W-06 Hồ sơ cá nhân & lịch sử đơn hàng (Web, `/profile`); màn hình phụ W-04 Đăng ký (`/register`), W-03 Đăng nhập (`/login`) |
| Task 2: Usability Evaluation | Luồng FL-05 (Web Admin): Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới |
| Task 3: Cross-Browser / Cross-Platform | Chạy checklist của Task 1 trên ít nhất 3 nền tảng (nền tảng chốt khi tới Task 3) |

---

## 1. Nguyên tắc chung

### 1.1 Kiểm thử hộp đen

- Căn cứ để thiết kế checklist và kịch bản là đặc tả của EShop: `Homeworks/eshop-sut/README.md` (SRS), đặc biệt mục 8 (FR-21 đến FR-24), cùng với những gì nhìn thấy trên giao diện (ảnh do sinh viên chụp).
- Ánh xạ khía cạnh giao diện (IA) của đề sang SRS:

  | IA | SRS | Nội dung |
  |---|---|---|
  | IA-01 | FR-21 | Tiêu chuẩn giao diện chung |
  | IA-02 | FR-22 | Form |
  | IA-03 | FR-23 | Điều hướng |
  | IA-04 | FR-24 | Phản hồi và trạng thái |

  Các ý giao diện nằm trong FR khác (ví dụ FR-01, FR-02, FR-04, FR-11 cho các màn hình đã chọn) cũng là oracle.
- Ngoài SRS, checklist được dùng các nguồn giảng viên dạy trong slide: Heuristic của Nielsen, Norman, Shneiderman; WCAG; checklist theo từng loại control (text box, dropdown, button, checkbox, link, bảng, ngày, validation). Mục lấy từ nguồn ngoài SRS phải ghi rõ nguồn, và ghi rõ đó là **khuyến nghị** chứ không phải yêu cầu của SRS.
- **Không** đọc mã nguồn EShop (`backend/`, `frontend-web/`, `frontend-admin/`, `frontend-mobile/`).
- **Không** tự mở trang, **không** tải HTML/JS của trang bằng curl hay cách khác. Thông tin giao diện chỉ lấy từ ảnh do sinh viên chụp.
- **Không** dùng DevTools ở các bước thiết kế (khảo sát, trích oracle, sinh và review checklist, thiết kế kịch bản). DevTools và công cụ kiểm tra (Lighthouse, axe...) chỉ dùng ở bước **chạy** checklist (mục 3.1.3).
- Chỗ nào đặc tả không nói rõ thì ghi thành **giả định** hoặc **câu hỏi mở**, không tự đặt ra quy tắc.

### 1.2 AI-First, có người kiểm soát

- AI được dẫn qua **từng bước** của kỹ thuật như trong slide, mỗi lượt chỉ làm **một bước** (hoặc một phần của bước, ví dụ một IA), sau đó dừng lại chờ sinh viên review. Không dùng một prompt chung chung kiểu "tạo checklist và tìm lỗi usability".
- Sinh viên review và quyết định sửa gì ở mọi output của AI.
- Output của AI ở mỗi bước được lưu **nguyên văn** trong `ai_raw/`. **Không bao giờ sửa hay ghi đè file trong `ai_raw/`.** Mọi chỉnh sửa nằm ở bản review.
- Khi AI viết lại output của một bước (theo yêu cầu của sinh viên), bản viết lại cũng là output của AI: Lưu thành **file mới** có đuôi `_v2`, `_v3`... File cũ giữ nguyên.
- Những gì phải do **người thật** làm thì AI không được tạo hay bịa (đề §11): Danh sách người tham gia, ghi chú quan sát và câu trả lời của người tham gia, kết quả chạy checklist, ảnh chụp các nền tảng.

### 1.3 Phiên điều phối và phiên thiết kế

| Phiên | Làm gì |
|---|---|
| Phiên thiết kế | Làm các bước của Task 1, Task 2, Task 3 theo tài liệu này |
| Phiên điều phối | Theo dõi tiến độ, xuất prompt log, chạy server EShop, kiểm tra phiên thiết kế không đọc file bị cấm. Phiên thiết kế **không** chạy script xuất prompt log |

### 1.4 Phiên thiết kế được đọc và không được đọc

| Được đọc | Không được đọc |
|---|---|
| Đề bài `Homeworks/HW03/2026.HW03.GUI Usability_En.pdf` | `Homeworks/HW03/prompt_log.md` |
| `Homeworks/HW03/README.md`, `Homeworks/HW03/WORKFLOW.md` | `Homeworks/HW03/_NOTES.md` |
| README của repo nhóm `Homeworks/HW03/HW03_group/README.md` (quy ước commit, Issues) | Lịch sử git (`git log`, `git show`, `git diff`). Ngoại lệ: Được dùng `git checkout -- <file>` để khôi phục một file trong `ai_raw/` nếu lỡ sửa |
| SRS của EShop (mục 1.1) | Mã nguồn EShop (mục 1.1) |
| Slide môn học: S13 GUI Testing & Usability Testing; GUI + Usability + Compatibility Testing AI-First; tài liệu tham khảo trong `Slides/Refs/` về GUI và usability | Thư mục `Homeworks/HW02/` (bug và kết quả HW02 làm lệch bản AI) và thư mục `DA/` |
| Template trong thư mục `Templates/` của môn học (UI Checklist, UsabilityTestingTemplate) | `usability/participants.md` và mọi file có thông tin cá nhân của người tham gia (mục 1.5) |
| File trong thư mục của task đang làm và ảnh trong `screenshots/` | File `.jsonl` trong `~/.claude/projects/` |
| File do chính phiên đó tạo ra | Video và file ghi âm các phiên usability |

### 1.5 Riêng tư của người tham gia

- Họ tên, SĐT, Zalo, email, khuôn mặt, giọng nói của người tham gia **chỉ** nằm trong `usability/participants.md` và trong video gốc. Hai thứ này **không** được đưa vào AI.
- Mọi file khác (ghi chú phiên, câu trả lời thang đo, phân tích) chỉ dùng mã **P1 đến P7** (và `PL` cho người pilot).
- Ảnh chụp từ video phải cắt bỏ khuôn mặt và thông tin cá nhân trước khi lưu vào repo hay đưa vào AI.
- Liên lạc trong `participants.md` che 4 số giữa (ví dụ `091****678`).

---

## 2. Cấu trúc thư mục

```
HW03/
├── checklist/                  Task 1
│   ├── 00_survey.md            Khảo sát màn hình, bản SV điền quan sát rồi review
│   ├── 01_oracle.md            Yêu cầu giao diện trích từ SRS, ánh xạ IA, bản đã review
│   ├── 02_checklist.md         Checklist đã review: Mục AI giữ / sửa / bỏ, mục SV thêm và lý do AI bỏ sót
│   ├── 03_results.md           Tóm tắt kết quả chạy (chép từ Excel)
│   ├── <file Excel checklist>  Định dạng chốt khi tới bước excel
│   ├── ai_raw/                 Output nguyên văn của AI
│   └── screenshots/            Ảnh khảo sát và ảnh các mục Failed
├── usability/                  Task 2
│   ├── 01_test_plan.md
│   ├── 02_scenario.md
│   ├── 03_instruments.md       Thang đo, câu hỏi mở, phiếu ghi chú, phiếu thông tin, lời đồng ý
│   ├── participants.md         Bảng 7 người (chỉ SV đọc, mục 1.5)
│   ├── pilot/                  Hồ sơ phiên pilot và các điểm đã sửa sau pilot
│   ├── sessions/P1/ ... P7/    Hồ sơ từng phiên
│   ├── 04_scores.md            Điểm thang đo và số liệu hiệu suất
│   ├── 05_findings.md          Gom pain point, bug và vấn đề thiết kế, severity, đề xuất
│   ├── screenshots/            Ảnh khảo sát các trang Admin của luồng FL-05 (SV chụp)
│   └── ai_raw/
├── cross_platform/             Task 3
│   ├── 01_setup.md             Công cụ, nền tảng, cách tạo lớp chữ đè
│   ├── 02_compare.md           So sánh kết quả giữa các nền tảng
│   └── screenshots/<nền tảng>/
├── bugs/
│   ├── bug_report.md           Danh sách bug và số issue
│   └── screenshots/            Ảnh trang issue
└── skills/                     Agent Skill
```

### 2.1 File trong `ai_raw/`

- Đặt tên theo task và bước: `T1_survey.md`, `T1_oracle.md`, `T1_draft_IA-01.md`, `T2_plan.md`, `T2_scenario.md`...
- Đầu file ghi tên bước và thời gian tạo, sau đó là nguyên văn câu trả lời của AI. Không chép prompt vào file (prompt đã có trong prompt log).
- File bản viết lại (`_v2`, `_v3`...) ghi thêm ở đầu: Lần sửa thứ mấy, thời gian, lý do sửa.

### 2.2 Bảng "Thay đổi so với bản AI"

Cuối mỗi bản review có mục **"Thay đổi so với bản AI"**:

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|

Cột "Loại" chỉ nhận một trong các giá trị:

| Loại | Khi nào dùng |
|---|---|
| Sai | Bản AI trái với đặc tả hoặc với giao diện quan sát được |
| Thiếu | Đặc tả, giao diện hoặc nguồn checklist có mà bản AI không đưa vào |
| Thừa | Bản AI tự đặt quy tắc mà đặc tả không có, hoặc có mục trùng lặp, không áp dụng cho màn hình đã chọn |
| Mơ hồ | Bản AI ghi chung chung, không kiểm chứng được (ví dụ "giao diện đẹp, dễ dùng") |
| Quyết định của SV | Bản AI không sai, nhưng sinh viên chọn một trong các phương án hoặc chốt một điểm đặc tả chưa rõ |

Cột "Vì sao AI bỏ sót" (đề §6 Task 1) chỉ nhận một trong ba giá trị, kèm giải thích ngắn:

| Giá trị | Khi nào dùng |
|---|---|
| Prompt | Prompt hoặc dữ liệu đưa cho AI thiếu thông tin (ví dụ không đưa ảnh trạng thái lỗi, không nhắc tới bàn phím) |
| Giới hạn model | AI đã có đủ thông tin mà vẫn không nghĩ tới (ví dụ accessibility, RTL, dark mode) |
| Đặc thù giao diện | Điểm chỉ có ở EShop hoặc ở màn hình đã chọn, khó suy ra từ kiến thức chung |

Bảng này là dữ liệu cho phần phân tích AI bỏ sót, AI Critique và AI Audit Report, nên ghi đủ mọi thay đổi về nội dung. Không cần ghi thay đổi thuần hình thức.

---

## 3. Các bước

### 3.1 Task 1: GUI Checklist

| Bước | Nội dung | Ai làm | Đầu ra |
|---|---|---|---|
| `survey` | Khảo sát 3 màn hình: Thành phần UI, trạng thái nhìn thấy được | AI lập bảng, SV chụp ảnh và điền | `ai_raw/T1_survey.md`, `screenshots/survey_*.png`, `00_survey.md` |
| `oracle` | Trích yêu cầu giao diện từ SRS, gán mã, ánh xạ IA và màn hình | AI đề xuất, SV review | `ai_raw/T1_oracle.md`, `01_oracle.md` |
| `ai-draft` | AI sinh checklist, **mỗi lượt một IA** (IA-01 đến IA-04) | AI | `ai_raw/T1_draft_IA-01.md` đến `..._IA-04.md` |
| `review` | SV review từng mục AI: Giữ, sửa, bỏ, gộp mục trùng | **SV** | `02_checklist.md` (phần mục AI) |
| `add` | SV thêm mục AI bỏ sót, mỗi mục có lý do | **SV** | `02_checklist.md` (phần mục SV thêm), bảng "Thay đổi so với bản AI" |
| `excel` | Xuất checklist ra Excel | SV, AI hỗ trợ | File Excel |
| `exec` | Chạy checklist trên nền tảng thứ nhất | **SV** | Kết quả trong Excel, `03_results.md`, ảnh mục Failed |
| `bugs` | Báo bug lên Issues của nhóm | SV, AI hỗ trợ viết | `bugs/bug_report.md`, issue trên repo nhóm |

#### 3.1.1 `survey`: Khảo sát màn hình

- **Chỉ quan sát.** Bảng quan sát chỉ hỏi những gì **nhìn thấy được** mà không cần DevTools: Tiêu đề, nhãn, placeholder, loại ô nhập nhìn thấy được, dấu `*`, giá trị mặc định, nút và màu nút, link, bảng, chữ hiển thị sẵn, navbar.
- Được chụp thêm các trạng thái thấy được mà không cần nhập dữ liệu sai: Chưa đăng nhập và đã đăng nhập, lịch sử đơn trống và có đơn.
- Thứ tự và file:
  1. AI viết `ai_raw/T1_survey.md` (danh sách màn hình, bảng quan sát còn trống), đồng thời tạo `00_survey.md` có **nội dung giống hệt** để sinh viên điền.
  2. Sinh viên chụp ảnh vào `screenshots/` và điền bảng **ngay trong `00_survey.md`**.
  3. AI đọc ảnh và bảng sinh viên đã điền rồi viết lại `00_survey.md` (đối chiếu với ảnh, sửa chỗ ghi nhầm). `ai_raw/T1_survey.md` giữ nguyên làm bản gốc.

#### 3.1.2 `oracle`, `ai-draft`, `review`, `add`: Thiết kế checklist

- `oracle`: Trích **nguyên văn** từ SRS, gán mã dạng `UI-R01, UI-R02, ...`, mỗi yêu cầu ghi IA và màn hình áp dụng. Yêu cầu không áp dụng cho các màn hình đã chọn vẫn liệt kê, ghi "Không áp dụng" kèm lý do.
- `ai-draft`: Mỗi lượt một IA. Đầu vào của AI: `01_oracle.md`, `00_survey.md` và ảnh, các nguồn checklist trong slide (mục 1.1). Mã mục trong bản AI có dạng `AI-<IA>-<số>` (ví dụ `AI-02-07`).
- Mỗi mục checklist phải:
  - Kiểm tra được bằng câu trả lời Passed / Failed, không mơ hồ.
  - Chỉ kiểm **một** điều.
  - Ghi IA, màn hình áp dụng, oracle (mã `UI-Rxx` hoặc nguồn ngoài SRS), cách kiểm (nhìn, bàn phím, chuột, DevTools, công cụ) và kết quả mong đợi.
  - Không trùng với mục khác. Một kiểm tra dùng cho nhiều màn hình là **một** mục, không nhân bản theo màn hình để tăng số lượng.
- Checklist cuối cùng có trên 40 mục và có mục cho cả 4 IA. Mã mục cuối cùng có dạng `CL-<số>` (ví dụ `CL-23`), giữ cố định sau khi chốt (Excel, ảnh, issue đều dẫn chiếu mã này). Mỗi mục ghi **Nguồn**: `AI` (giữ nguyên), `AI, SV sửa`, hoặc `SV thêm`, cùng mã `AI-xx-xx` gốc nếu có.
- `add`: Sinh viên xét thêm các mảng AI thường bỏ sót (đề gợi ý accessibility, RTL, dark mode), cùng mọi điểm khác sinh viên thấy cần. Mỗi mục thêm phải có cột "Vì sao AI bỏ sót" (mục 2.2).
- Định dạng Excel (template của môn, skill `test-case-writing`, hoặc tự thiết kế) chốt khi tới bước `excel`.

#### 3.1.3 `exec`: Chạy checklist

- Reset dữ liệu EShop trước mỗi đợt chạy: `cd backend && node database.js`. Dữ liệu mẫu không có đơn hàng: Muốn kiểm lịch sử đơn thì tự đặt đơn qua giỏ hàng / thanh toán và đổi trạng thái ở Admin trước khi chạy.
- Mỗi mục ghi **Passed** hoặc **Failed**. Mục không áp dụng được trên một nền tảng ghi **N/A** kèm lý do.
- Mỗi mục Failed: Cột **Notes** ghi lý do Failed (thấy gì, khác mong đợi ở đâu, ở màn hình nào) và có **ảnh chụp**. Mục Passed không cần ảnh (đề §6 Task 1).
- DevTools và công cụ kiểm tra chỉ dùng để kiểm những gì **mục checklist yêu cầu** (ví dụ `type="email"`, số thẻ `<h1>`, thuộc tính `alt`, độ tương phản). Không dùng để tìm thêm mục mới; nếu trong lúc chạy phát hiện điều đáng kiểm mà checklist chưa có, ghi lại để bổ sung bằng một commit riêng, ghi rõ là thêm sau khi chạy.
- Ghi môi trường của lần chạy: Trình duyệt và phiên bản, OS, độ phân giải, ngày giờ.
- Kết quả thực tế chỉ lấy từ lần chạy thật.
- Nếu lần chạy này được tính là một trong 3 nền tảng của Task 3 thì ảnh cũng phải theo yêu cầu của Task 3 (mục 3.3).

### 3.2 Task 2: Usability Evaluation

| Bước | Nội dung | Ai làm | Đầu ra |
|---|---|---|---|
| `plan` | Test plan: Mục đích, câu hỏi cần trả lời, mục tiêu, chân dung người dùng, phương pháp, môi trường và thiết bị, vai trò người điều phối, số liệu thu thập, nội dung báo cáo (9 phần của slide) | AI đề xuất, SV review | `ai_raw/T2_plan.md`, `01_test_plan.md` |
| `scenario` | Kịch bản dạng **mục tiêu**, không đưa từng bước; trạng thái ban đầu, tiêu chí hoàn thành, thời gian chuẩn | AI đề xuất, SV review | `ai_raw/T2_scenario.md`, `02_scenario.md` |
| `instruments` | Thang đo sau phiên; câu hỏi mở (tối thiểu: clarity, error recovery, speed, trust); phiếu ghi chú quan sát; phiếu thông tin trước phiên; lời dặn mở đầu và lời xin đồng ý | AI đề xuất, SV review | `ai_raw/T2_instruments.md`, `03_instruments.md` |
| `participants` | Bảng 7 người | **SV** (không đưa vào AI) | `participants.md` |
| `pilot` | Chạy phiên pilot, sửa kịch bản và công cụ | **SV** | `pilot/`, cập nhật `02_scenario.md`, `03_instruments.md` |
| `P1` đến `P7` | Chạy từng phiên | **SV** | `sessions/P<n>/` |
| `score` | Tính điểm thang đo, số liệu hiệu suất | SV, AI hỗ trợ (dữ liệu đã ẩn danh) | `04_scores.md` |
| `analysis` | Gom pain point, tách bug đơn lẻ và vấn đề thiết kế, xếp severity, đề xuất | SV, AI hỗ trợ (dữ liệu đã ẩn danh) | `05_findings.md` |
| `bugs` | Báo bug thật lên Issues | SV, AI hỗ trợ viết | `bugs/bug_report.md`, issue trên repo nhóm |

#### 3.2.1 Tiêu chí người tham gia

Cả 7 người phải đạt đủ:

1. Đang hoặc đã từng bán hàng online, và tự tay đăng sản phẩm (tên, giá, ảnh, mô tả) ít nhất vài lần, trên bất kỳ kênh nào (sàn, mạng xã hội, web riêng).
2. Tự dùng được máy tính hoặc laptop với trình duyệt.
3. Chưa từng thấy hoặc dùng EShop.
4. Không học môn Kiểm thử phần mềm kỳ này.
5. Có liên lạc kiểm chứng được và đồng ý để TA gọi xác minh.
6. Đồng ý cho quay màn hình (ghi âm nếu được).

Ưu tiên người không làm IT hay tester. Người pilot không tính vào 7 người.

#### 3.2.2 Chạy một phiên

1. **Chuẩn bị:** Reset DB; mở trang đăng nhập Admin (`http://localhost:5174`); chuẩn bị sẵn thông tin đưa cho người tham gia theo `02_scenario.md` (tài khoản admin, thông tin sản phẩm, URL ảnh); bật quay màn hình.
2. **Mở đầu:** Đọc lời dặn trong `03_instruments.md`: Đang kiểm thử sản phẩm, không kiểm tra người tham gia; nhờ vừa làm vừa nói ra suy nghĩ (think-aloud); xin đồng ý ghi hình. Người tham gia điền phiếu thông tin trước phiên.
3. **Trong phiên:** Đưa mục tiêu, không hướng dẫn cách làm. Quan sát trung lập, không gợi ý, không giải thích giao diện. Chỉ can thiệp khi người tham gia bế tắc hẳn; mỗi lần can thiệp ghi lại (thời điểm, lý do, đã nói gì).
4. **Ghi chú:** Ghi theo mốc thời gian trong video: Chỗ vướng, lỗi, do dự, lời than phiền, chỗ làm sai rồi tự sửa.
5. **Kết thúc:** Người tham gia điền thang đo, sau đó hỏi các câu hỏi mở, xoáy vào những chỗ đã quan sát thấy khó.

Hồ sơ mỗi phiên trong `sessions/P<n>/`:

| File | Nội dung |
|---|---|
| `notes.md` | Thông tin phiên (ngày giờ, thời lượng, thiết bị, có hoàn thành không, số lần can thiệp), ghi chú quan sát theo mốc thời gian |
| `scale.md` | Câu trả lời thang đo nguyên văn |
| `probe.md` | Câu hỏi mở và câu trả lời (ghi theo ý, không ghi tên) |
| `P<n>_<số>_<nội dung>.png` | Ảnh chụp từ video, đã che thông tin cá nhân |

Video gốc **không** commit lên git (đã chặn trong `.gitignore`), chỉ đưa vào bản nộp.

#### 3.2.3 Phân tích

- Điểm thang đo tính bằng script hoặc công thức, ghi rõ cách tính.
- AI chỉ được đọc dữ liệu đã ẩn danh (mã P1 đến P7).
- Severity của từng finding do **sinh viên** chốt; AI chỉ được đề xuất.
- Chỉ bug thật (hệ thống sai so với đặc tả hoặc chặn người dùng) mới đưa lên Issues. Vấn đề thiết kế mang tính hệ thống ghi trong `05_findings.md`.

### 3.3 Task 3: Cross-Browser / Cross-Platform

| Bước | Nội dung | Đầu ra |
|---|---|---|
| `setup` | Chọn công cụ và nền tảng, cấu hình tunnel nếu dùng cloud, cách tạo lớp chữ đè | `cross_platform/01_setup.md` |
| `<nền tảng>` | Chạy checklist của Task 1 trên một nền tảng | Kết quả trong Excel (một cột kết quả cho mỗi nền tảng), `screenshots/<nền tảng>/` |
| `bugs` | Báo bug chỉ xuất hiện trên một số nền tảng | `bugs/bug_report.md`, issue trên repo nhóm |
| `compare` | So sánh kết quả giữa các nền tảng | `cross_platform/02_compare.md` |

- Dùng **đúng checklist** của Task 1. Mục không áp dụng được trên một nền tảng (ví dụ mục về thẻ HTML khi chạy trên app mobile) ghi N/A kèm lý do.
- Ảnh chụp phải thấy rõ **tên trình duyệt / OS / thiết bị** và **URL localhost** của SUT, và có **lớp chữ đè** gồm MSSV, họ tên, email sinh viên (đề §6 Task 3 và §11).
- Ảnh không được do AI tạo hay chỉnh sửa nội dung.

---

## 4. Commit

### 4.1 Định dạng

Theo mục 3 README của repo nhóm:

```
[<phạm vi>][<bước>] <Verb> <nội dung>
```

- Tiếng Anh, bắt đầu bằng động từ dạng mệnh lệnh, không có dấu chấm cuối. Ví dụ: `[T1][review] Review AI checklist items`.
- Phạm vi: `T1`, `T2`, `T3`; commit không thuộc task nào: `[setup]`, `[skill]`, `[report]`, `[forms]`.
- **Sinh viên tự commit.** AI chỉ đưa commit message và lệnh. Trước mỗi commit, sinh viên nhờ phiên điều phối xuất prompt log.

### 4.2 Tách commit trong mỗi bước

Tách để lịch sử git cho thấy rõ phần AI viết và phần sinh viên sửa.

| Bước | Các commit | Ví dụ message |
|---|---|---|
| `[T1][survey]` | (1) `ai_raw/T1_survey.md` và `00_survey.md` giống hệt (bản AI) | `[T1][survey] Add screen survey table (AI draft)` |
| | (2) Ảnh và bảng quan sát sinh viên điền | `[T1][survey] Record UI observations and screenshots` |
| | (3) `00_survey.md` do AI viết lại sau khi đọc ảnh | `[T1][survey] Review survey against screenshots` |
| `[T1][oracle]` | (1) Bản AI, (2) bản review | `[T1][oracle] Add UI requirement extract (AI draft)` |
| `[T1][ai-draft]` | Mỗi IA một commit | `[T1][ai-draft] Add AI-generated checklist draft for IA-02` |
| `[T1][review]`, `[T1][add]` | Mỗi bước một commit | `[T1][add] Add items missed by AI with reasons` |
| `[T2][plan]`, `[T2][scenario]`, `[T2][instruments]` | (1) Bản AI, (2) bản review | `[T2][plan] Add usability test plan (AI draft)` |
| `[T2][P1]` đến `[T2][P7]` | **Mỗi phiên một commit** (đề §12) | `[T2][P3] Record session P3 notes and scale answers` |
| Bất kỳ bước nào | AI viết lại theo yêu cầu: Thêm `ai_raw/..._v2.md` và cập nhật bản review | `[T1][oracle] Fix screen mapping (AI revision 1)` |

Sửa lại một bước đã commit thì giữ nguyên tag của bước đó.

---

## 5. Ảnh chụp

| Loại | Thư mục | Tên file |
|---|---|---|
| Khảo sát | `checklist/screenshots/` | `survey_<số>_<nội dung>.png`, ví dụ `survey_01_profile_logged_in.png` |
| Khảo sát luồng usability (Web Admin) | `usability/screenshots/` | `flow_<số>_<nội dung>.png`, ví dụ `flow_03_category_list.png` |
| Mục Failed (nền tảng thứ nhất) | `checklist/screenshots/` | `<mã mục>_<nền tảng>.png`, ví dụ `CL-23_chrome.png` |
| Cross-platform | `cross_platform/screenshots/<nền tảng>/` | `<mã mục>.png` hoặc `overview_<màn hình>.png` |
| Phiên usability | `usability/sessions/P<n>/` | `P<n>_<số>_<nội dung>.png` |
| Trang issue | `bugs/screenshots/` | `issue_<số issue>.png` |

Nhiều ảnh cho cùng một nội dung (ví dụ trang dài phải cuộn, một mục Failed cần nhiều ảnh): Mọi ảnh đều có hậu tố chung đánh số từ `_1`, ví dụ `flow_06_product_list_1.png`, `flow_06_product_list_2.png`. Chỉ có một ảnh thì không thêm hậu tố.

---

## 6. Bug report và GitHub Issues

Repo của nhóm: https://github.com/angquoc/software-testing-2026-HW03-group. Quy ước đầy đủ nằm ở mục 4 README của repo này. Tóm tắt:

- Tiêu đề: `[MSSV][T1|T2|T3][<Mã màn hình hoặc mã luồng>][<Nền tảng>] Mô tả ngắn: Hành vi sai so với đặc tả`
- Dùng template "Bug report", bắt buộc có ảnh chụp.
- Gắn đủ: Một `severity`, một `platform`, một `task`, ít nhất một `ia` (T2 gắn `ia` nếu xác định được).
- Tìm issue trùng trước khi tạo. Mỗi bug một issue. Ghi số issue vào `bugs/bug_report.md` và chụp trang issue.

---

## 7. Định dạng văn bản

- Viết tiếng Việt; giữ nguyên tên trường, nút, thông báo như trên giao diện.
- Không dùng dấu "—" và dấu "·".
- Chữ cái đầu tiên sau dấu ":" viết hoa (trừ code, tên label, đường dẫn, giờ).
