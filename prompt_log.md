# Appendix A: Prompt Log (HW03-AI)

| Mục | Giá trị |
|---|---|
| MSSV | 23120061 |
| Họ tên sinh viên | Nguyễn Thị Ánh Ngọc |
| Bài tập | HW03-AI: GUI & Usability on EShop |
| Chính sách AI | Open (khai báo + AI Audit Report bắt buộc) |
| Bloom-AI | G9.3 (Analyse), G9.4 (Collaborate) |
| Công cụ AI | Claude Code (Anthropic, claude-opus-5-5) |
| Múi giờ | Giờ Việt Nam (UTC+7), định dạng `HH:MM dd/mm/yyyy` |

**Quy ước mã:** `C##` là lượt trao đổi với Claude Code, đánh số theo thời gian qua mọi phiên. Mã này dùng để dẫn chiếu trong AI Audit Report và form [AI-03].

---

## 1. Claude Code (xuất tự động, nguyên văn)

> Phần dưới được xuất từ lịch sử phiên Claude Code bằng `python tools/export_prompt_log.py`. Script chỉ đọc các phiên thuộc HW03 (danh sách trắng `SESSIONS`), không lấy phiên khác. Không chỉnh sửa tay trong vùng này; chạy lại script trước mỗi commit để cập nhật.

<!-- CLAUDE-LOG:START -->

### C01 | 09:01 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Đọc kỹ đề bài của HW03, cùng với các nội dung liên quan (yêu cầu, template, slide,...) rồi tổng hợp cho tôi đề bài yêu cầu những gì, cần chuẩn bị những gì, sẽ nộp những gì thật chi tiết. Có thể tham khảo các HW01, HW02 đã làm.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: List workspace structure
- Bash: List course folder files and search for HW03
- Bash: Check available PDF tooling
- Bash: Extract HW03 PDF text
- Bash: Extract text from related slides and docs
- Bash: Read homework policies and S13 slide text
- Bash: Read AI-First GUI/Usability/Compatibility slide
- Read: C:\Users\Lenovo\.claude\projects\d--Dang-Test\949bce7e-1d8a-4c01-b51b-b31ff0b2e825\tool-results\bbnw9b6m9.txt
- Bash: Grep syllabus for HW03 and Bloom-AI references
- Bash: Read syllabus AI policy and anti-cheat sections
- Bash: List HW02 files (collapsed PNGs)
- Bash: Read HW02 README, group README, issue template
- Bash: Read HW02 notes and report/workflow headings
- Bash: Dump GUI checklist and test report templates
- Bash: Dump Excel templates with UTF-8 output
- Bash: Dump Excel templates with UTF-8 stdout
- Bash: Read rest of GUI checklist template; check .doc tools
- Bash: Read usability testing template .doc
- Bash: Extract text from damaged .doc via OLE
- Bash: Extract ASCII strings from usability template
- Bash: Inspect EShop README structure and UI mentions
- Bash: Read SRS overview, mobile and GUI requirements
- Bash: List web pages/routes and check upstream SUT head
- Bash: Read T01 seminar topic and in-class deck
- Bash: Check for SUS/UEQ refs and checklist structure
- Bash: Read cart/checkout/coupon spec and HW01 forms

**Output AI (nguyên văn):**

````text
Tôi sẽ bắt đầu bằng việc khảo sát cấu trúc thư mục để tìm tài liệu HW03.

Đã đọc đề HW03. Giờ tôi trích nội dung các tài liệu liên quan (chính sách homework, slide GUI/Usability, template checklist, syllabus) và xem cách HW01/HW02 đã tổ chức.

Tiếp theo: syllabus (phần HW03, G9.x), các template checklist/usability, và đặc tả EShop liên quan UI.

Giờ xem HW02 (bài gần nhất) đã tổ chức thế nào: README, WORKFLOW, forms, nhóm, bản nộp.

Giờ xem các template Excel/Word liên quan (GUI checklist, Usability template, Test report).

Đang đọc template UsabilityTestingTemplate.doc (file .doc cũ, cần trích kiểu khác); sau đó xem đặc tả EShop phần giao diện và mobile.

Giờ xem đặc tả EShop (README) để biết phần nào liên quan giao diện, Mobile và các màn hình.

Quan trọng: SRS có sẵn FR-21 đến FR-24 khớp đúng 4 IA của đề. Đọc kỹ phần này.

SUT trên GitHub vẫn là commit `85af3ba`, trùng bản đã dùng ở HW02. Xem thêm tài liệu Seminar T01 (GUI & Usability) và slide in-class tương ứng.

Gần đủ thông tin. Kiểm tra nhanh quy tắc coupon (FR-09) vì nó ảnh hưởng tới việc chuẩn bị dữ liệu cho các phiên usability.

Tôi đã đọc xong đề HW03 và các tài liệu đi kèm. Tóm tắt từng phần bên dưới. Mình là Nguyễn Thị Ánh Ngọc, MSSV 23120061 (lấy từ HW02), nên tên file nộp sẽ là `23120061_HW03_AI_GUIUsability_XXX.zip`.

**Tài liệu đã đọc:** Đề `2026.HW03.GUI Usability_En.pdf`, Homework Policies, Syllabus, slide S13 và slide "GUI + Usability + Compatibility Testing AI-First", brief và slide in-class Seminar T01, các template `GUI checklist_Template_Vi.xlsx`, `UsabilityTestingTemplate.doc`, `Test report_Template_En.xlsx`, SRS EShop (README), cùng README, `_NOTES`, repo nhóm và issue template của HW02.

---

## 1. Thông tin chung

| Mục | Nội dung |
|---|---|
| Mã bài | HW03-AI, bài cá nhân, đề ghi 10 giờ (thực tế sẽ lâu hơn vì có 8 phiên với người thật) |
| Deadline | Xem link nộp trên Moodle (đề không ghi). Không nhận bài trễ |
| Bloom-AI | G9.3 (Analyse) và G9.4 (Collaborate with AI for exploratory testing) |
| SUT | EShop. Bản trên GitHub vẫn là commit `85af3ba`, giống hệt bản đã dùng ở HW02 |
| Điểm | Task 1: 30, Task 2: 40, Task 3: 20, Agent Skills: 10 (tổng 100) |

**Nguyên tắc chấm (§2):**
- Phải dẫn AI đi qua từng bước của kỹ thuật, không được dùng một prompt chung chung kiểu "tạo checklist rồi tìm lỗi usability".
- Mọi output AI đều phải được mình review và sửa.
- Ghi log toàn bộ quá trình dùng AI.
- Viết bằng Markdown.
- Chấm theo số lượng và chất lượng của: Checklist, thiết kế và phân tích usability, bug report, ảnh chụp, danh sách người tham gia, link tham khảo.

## 2. Phạm vi và một phát hiện quan trọng

**4 khía cạnh giao diện (IA) đã có sẵn trong SRS.** Đề nói SRS "không đánh mã FR cho phần giao diện", nhưng SRS v2.0 thật ra có mục 8 với FR-21 đến FR-24, khớp đúng 4 IA. Nên dùng mục này làm oracle (căn cứ xác định Pass/Fail) và ghi rõ ánh xạ trong báo cáo:

| IA | SRS | Yêu cầu cụ thể (kiểm được ngay) |
|---|---|---|
| IA-01 Chuẩn chung | FR-21 | Toàn bộ tiếng Việt; nút tích cực màu xanh dương, nút hủy hoặc nguy hiểm màu đỏ; tiền dùng `₫` và có phân cách hàng nghìn; mỗi trang đúng 1 thẻ `<h1>`; thứ tự Tab từ trên xuống dưới, trái sang phải |
| IA-02 Form | FR-22 | Trường bắt buộc có `*`; email dùng `type="email"`; mật khẩu dùng `type="password"`; lỗi hiện **phía trên** nút submit; form từ 2 bước trở lên có Step Indicator |
| IA-03 Điều hướng | FR-23 | Navbar highlight trang hiện tại; link Giỏ hàng có badge số lượng; nút ghi "Đăng xuất" (không phải "Thoát"); có breadcrumb ở Giỏ hàng, Thanh toán, Chi tiết sản phẩm |
| IA-04 Phản hồi / trạng thái | FR-24 | Có toast hoặc badge sau khi "Thêm vào giỏ"; có dialog xác nhận khi xóa item; Empty State có icon và lời nhắn thân thiện; ảnh sản phẩm có `alt` không rỗng |

Một số yêu cầu UI khác cũng nằm rải rác trong các FR chức năng: Loading ở FR-05, Step Indicator "Bước 1 / 2" ở FR-03, nhãn "Tổng cộng" và giỏ trống có hình minh họa ở FR-07.

**Các màn hình có thể chọn:**
- Web (route): `/`, `/product/:id`, `/cart`, `/checkout`, `/login`, `/register`, `/forgot-password`, `/profile`
- Admin: Dashboard, Danh mục, Sản phẩm, Import CSV, Coupon, Đơn hàng, Người dùng
- Mobile: Chạy qua Expo Go

**Ràng buộc trong nhóm (§5):** Không ai trong nhóm (An, Hương, Ngọc) được trùng **màn hình chính** của GUI checklist, và cũng không được trùng **flow usability**. Nhóm cần một bảng phân công giống HW02.

## 3. Task 1: GUI Checklist (30 điểm)

1. **Thiết kế checklist trên 40 mục**, phủ đủ cả 4 IA. Đề khuyến khích làm nhiều màn hình, vì một màn hình khó ra 40 mục mà không bị nông hoặc lặp.
2. **Dùng AI tạo bản đầu**, sau đó mình review kỹ và **thêm các mục AI bỏ sót**. Với **mỗi mục tự thêm** phải giải thích vì sao AI bỏ sót, theo một trong ba nguyên nhân: Do prompt, do giới hạn của model, hoặc do đặc thù của giao diện. Đề gợi ý các mảng AI hay quên: Accessibility, RTL, dark mode.
3. **Chạy checklist trên SUT:** Mỗi mục ghi Passed hoặc Failed. Có **cột Notes** ghi lý do cho mỗi mục Failed. **Chỉ chụp ảnh các mục Failed.**
4. **Báo bug** ở cả report Markdown và GitHub Issues, mỗi issue phải đính kèm ảnh.

Gợi ý nguồn để làm checklist (theo slide):
- Nielsen 10, Norman 6, Shneiderman 8
- WCAG
- Checklist theo từng loại control: Text box, dropdown, button, checkbox, link, grid, date, validation
- Mẫu `GUI checklist_Template_Vi.xlsx`: Mỗi màn hình một sheet, cột `GUI No | Checkpoints | Yes | No | Remark`, cộng thêm một sheet "GUI list"

## 4. Task 2: Usability Evaluation (40 điểm, phần nặng nhất)

Là đánh giá có người điều phối (moderated), trên **1 flow end-to-end**, với **7 người thật** (7 phiên), cộng thêm **1 phiên pilot**.

**Phase 1: Lên kế hoạch và chuẩn bị**
- **Mục tiêu:** Muốn tìm hiểu điều gì (ví dụ: người dùng bị nghẽn ở đâu trong flow, mức độ tự tin khi hoàn thành).
- **Kịch bản nhiệm vụ:** Đưa **mục tiêu**, không đưa từng bước. Ví dụ: "Tìm áo khoác dưới 500.000₫ và thanh toán có dùng mã giảm giá".
- **Công cụ đo:** SUS hoặc UEQ-S điền sau mỗi phiên (hoặc thang tự chế nhưng phải có lý do bằng văn bản). Thêm bộ câu hỏi mở, tối thiểu phủ 4 chủ đề: **Clarity, error recovery, speed, trust**.
- **Tuyển 7 người:**
  - Đúng chân dung người dùng mục tiêu, **không phải người đang học HW03 của lớp này**, ưu tiên người không làm IT hoặc tester.
  - Có liên lạc kiểm chứng được (Zalo, email hoặc SĐT, che 4 số giữa, ví dụ `091****678`).
- **Pilot:** Chạy 1 phiên thử với 1 người để sửa kịch bản, flow hoặc thời gian trước khi chạy thật.

**Phase 2: Mỗi phiên**
- Nói rõ với người tham gia là đang test sản phẩm chứ không test họ, và nhờ họ think-aloud (vừa làm vừa nói ra suy nghĩ).
- Quan sát trung lập, không gợi ý, chỉ can thiệp khi họ bí hẳn.
- Quay màn hình (và ghi âm nếu được đồng ý). Ghi chú có cấu trúc: Chỗ vướng, lỗi, chỗ do dự, lời than phiền.
- Cuối phiên: Cho điền SUS hoặc UEQ-S, rồi hỏi các câu hỏi mở xoáy vào những chỗ đã quan sát thấy khó.

**Phase 3: Phân tích và báo cáo**
- **Tính điểm SUS cho 7 người:** Câu lẻ lấy (điểm − 1), câu chẵn lấy (5 − điểm), cộng lại rồi nhân 2,5. Mốc trung bình là 68.
- Nên thêm số liệu hiệu suất theo slide S13: Tỉ lệ hoàn thành, thời gian, số lỗi, số lần phải hỗ trợ (kèm mean, median, khoảng, độ lệch chuẩn).
- **Gom các điểm đau theo nhóm.** Tách riêng **bug đơn lẻ** và **vấn đề thiết kế mang tính hệ thống**.
- **Xếp hạng theo severity**, từ blocker (chặn hoàn thành nhiệm vụ) đến góp ý nhỏ về giao diện.
- Bug thật thì báo lên GitHub Issues kèm ảnh.
- ⚠️ **TA có thể gọi ngẫu nhiên 2 người để xác minh. Mạo danh thì Task 2 bị 0 điểm.** Cần báo trước cho người tham gia là có thể được gọi.

## 5. Task 3: Cross-Browser / Cross-Platform (20 điểm)

- **Chạy lại Task 1 trên ít nhất 3 nền tảng:** Chrome, Firefox, Safari (hoặc Chrome Android).
- **Expo Go trên điện thoại thật** được tính là 1 nền tảng và có thể thay cho Safari.
- **Nên dùng trial BrowserStack hoặc LambdaTest.** Trial hết hạn thì dùng Sauce Labs hoặc thiết bị thật, miễn là ảnh chụp thấy rõ **tên trình duyệt, OS, thiết bị cùng URL localhost**. Để cloud truy cập được `localhost:5173` cần bật **BrowserStack Local** hoặc **LambdaTest Tunnel**.
- **Mọi ảnh chụp phải có lớp chữ đè** thông tin của mình (xem điểm mơ hồ ở mục 10).

## 6. Agent Skill (10 điểm)

- Đề khuyến khích làm skill cho **GUI checklist** và **usability evaluation**, dùng lại được cho màn hình hoặc flow khác.
- Nộp kèm **video YouTube** chạy skill trọn vẹn trên 1 màn hình hoặc 1 flow (giống HW02).

## 7. Phần bắt buộc chung

| Mục | Yêu cầu |
|---|---|
| AI Audit Report (§9) | Phụ lục ghi mỗi lần tương tác: Tên tool, ngày giờ, prompt, output. Mở đầu bằng câu khai báo "I use AI tools for the following tasks". Syllabus yêu cầu thêm 3 form [AI-02] Audit Report, [AI-03] Disclosure (có ký) và [AI-05] Privacy Checklist cho mọi HW |
| AI Critique (§10) | 200 đến 300 từ, trả lời 3 câu: AI sai, thiên lệch hoặc thiếu ở đâu; vì sao AI không phát hiện ra; mình rút ra nguyên tắc gì khi làm việc với AI |
| Chống gian lận (§11) | Danh sách 7 người và ảnh chụp cross-platform **không được do AI tạo hay bịa ra** |
| Git (§12) | Mỗi bước một commit: Thiết kế checklist, chạy checklist, báo bug, **từng phiên usability**, phân tích. Nộp log dạng text |
| Vấn đáp (§13) | Bốc ngẫu nhiên 30% sinh viên, 5 đến 7 phút, vào tuần sau deadline |
| Vi phạm | Thiếu bất kỳ tài liệu bắt buộc nào: 0 điểm. Chép bài, **kể cả chép prompt**: Cả hai người 0 điểm |

## 8. Cần chuẩn bị gì

**Con người (phần tốn thời gian nhất, nên bắt đầu ngay)**
- 7 người ngoài lớp cộng 1 người cho pilot. Xin trước sự đồng ý ghi hình và đồng ý để TA gọi xác minh. `UsabilityTestingTemplate.doc` có sẵn mẫu Consent Form và Pre-test questionnaire để tham khảo.
- Lên lịch 8 phiên, mỗi phiên khoảng 30 đến 45 phút.

**Nhóm**
- Chốt bảng phân công màn hình chính và flow với An và Hương.
- Tạo repo Issues cho HW03 (hoặc dùng lại repo HW02). Sửa issue template: Thay "Test case phát hiện" và "technique EP/BVA" bằng "Checklist ID / Session ID" và "IA-01..04".

**Môi trường và dữ liệu**
- Chạy EShop đủ 3 phần (Backend, Web, Admin), thêm Mobile nếu dùng Expo Go.
- **Reset DB trước mỗi phiên usability** (`node database.js`). Lý do: Các mã `SAVE10` và `BIGBUY` chỉ dùng được 1 lần mỗi người, nên phiên sau sẽ bị lỗi giả nếu không reset.
- Nếu flow có bước Đăng ký thì cần chuẩn bị email riêng cho từng người tham gia.

**Công cụ**
- Đăng ký trial BrowserStack hoặc LambdaTest. Trial thường giới hạn số phút, nên chạy gọn.
- Phần mềm quay màn hình (OBS hoặc Game Bar).
- Bảng SUS hoặc UEQ-S bản tiếng Việt (Google Form hoặc giấy).
- Cách đè chữ lên ảnh chụp, ví dụ một bookmarklet chèn một div cố định góc màn hình.
- Có thể dùng thêm axe DevTools hoặc Lighthouse cho phần accessibility.

**Lưu ý:** Các mục FR-21, FR-22, FR-24 như `<h1>`, `type="email"`, `alt` cần xem DOM bằng DevTools ở **bước chạy test**. Việc này khác quy tắc "không dùng DevTools khi thiết kế" của skill HW02, nên ghi rõ trong WORKFLOW.

**Quyền riêng tư:** Không dán tên, SĐT hay video của người tham gia vào AI. Đặt mã P1 đến P7 trước khi nhờ AI tổng hợp ghi chú, và ghi việc này vào [AI-05].

## 9. Sẽ nộp gì (§14)

| # | Thành phần | Định dạng |
|---|---|---|
| 1 | Report chính: Báo cáo GUI checklist và báo cáo usability | MD + PDF |
| 2 | Bug report kèm **ảnh chụp trang GitHub Issues** | MD + PDF + ảnh |
| 3 | AI Critique và AI Audit Report (cùng forms AI-02, AI-03, AI-05) | MD + PDF |
| 4 | Git commit log | `.txt` |
| 5 | **File Excel checklist** (trên 40 mục, có cột Passed/Failed và Notes cho từng nền tảng) kèm Test summary | `.xlsx` (bảng tóm tắt chép vào MD theo Policy) |
| 6 | Hồ sơ usability: Kịch bản, ghi chú quan sát, câu trả lời SUS/UEQ-S, findings xếp theo severity, video (nếu có), **bảng 7 người tham gia** | MD/PDF + video |
| 7 | Ảnh chụp cross-browser và cross-platform | PNG |
| 8 | `README.md`: Bảng tự chấm và Test Summary (số màn hình/flow; số mục checklist thiết kế, đã chạy, Passed, Failed; số bug; số người tham gia; link video demo) | MD + PDF |
| 9 | Skills, thư mục `ai_raw`, tài liệu phụ trợ khác | |

Moodle giới hạn tối đa 20 file, mỗi file 20 MB. Video phiên usability sẽ nặng, nên nén mạnh hoặc chia zip. Không nên chỉ để link vì Policy phạt "lạm dụng link online".

## 10. Những điểm mơ hồ hoặc mâu thuẫn trong đề

1. **Thông tin đè lên ảnh chụp bị nói hai kiểu:** §6 Task 3 ghi "username in the form your student email", còn §11 ghi "student ID and full name". Cách an toàn là ghi cả ba: MSSV, họ tên, email sinh viên.
2. **Mức độ của "Perform Task 1 across 3 platforms":** Nên chạy **toàn bộ** checklist trên cả 3 nền tảng, mỗi nền tảng một cột kết quả. Nếu dùng Expo Go, các mục chỉ có trên web (`<h1>`, `type="email"`) ghi N/A hoặc đổi thành mục tương đương trên mobile.
3. **Pilot có cần là người thứ 8 không:** Đề không nói rõ. Nên chọn người thứ 8 và không tính kết quả pilot vào 7 phiên.
4. **Syllabus khác đề:** Syllabus ghi HW03 là "5-user remote test + Nielsen heuristics + AI vision review". Đề ghi 7 người, moderated. Theo đề, nhưng có thể dùng Nielsen làm khung cho checklist.
5. **Trùng bug với HW02:** Bug GUI có thể trùng bug HW02 đã báo (#42 đến #89, ví dụ nhãn giỏ hàng). Nên tìm trước và ghi `Related #`.

## 11. Dùng lại được từ HW02

- `tools/`: `export_prompt_log.py` (cập nhật danh sách session cho HW03), `md_to_pdf.py`, `fill_ai02.py`, `fill_ai03_05.py`
- `forms/` có chữ ký từ HW01
- Quy ước commit và label của repo nhóm
- Cách lưu output AI nguyên văn vào `ai_raw/`, kèm bảng "Thay đổi so với bản AI". Bảng này chính là bằng chứng cho yêu cầu "giải thích vì sao AI bỏ sót"
- Mô hình tracker trong `_NOTES.md`

Như thường lệ, mình tự commit; tôi chỉ đưa message và lệnh.

---

**Thứ tự làm gợi ý:**
1. Tuyển người và chốt phân công với nhóm ngay, vì đây là phần phụ thuộc người khác.
2. Song song đó làm Task 1 (AI tạo bản đầu, mình review, chạy trên Chrome).
3. Làm Task 3 trên 2 nền tảng còn lại.
4. Chạy pilot, rồi 7 phiên usability.
5. Phân tích, viết skill, quay video, viết report, nộp.

Bạn có muốn tôi tạo khung `Homeworks/HW03/` (thư mục, `_NOTES.md` dạng tracker như HW02, README, `.gitignore`) theo bản tóm tắt này không?
````

---

### C02 | 09:35 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
1. Đã tuyển đủ người.
2. Nên tạo 1 checklist cụ thể trước khi làm để tránh tình trạng bỏ sót khi context quá dài. Checklist bao gồm các việc phải làm và các file sẽ cần nộp. Nếu cần gì bạn có thể bổ sung thêm lúc tạo checklist, tôi sẽ kiểm tra file checklist.
3. Sao đã làm task 1 mà gợi ý task 3 rồi? Hay đây là quyết định chốt? Nhiều lúc mới làm tôi cũng chưa hình dung ra nên có thể để tới task đó tôi quyết.

Đồng thời, tôi muốn hỏi hai câu:
1. Nên tạo repo mới hay dùng lại của repo cũ? Có thể xem thử các HW khác nữa để quyết định xem repo như nào.
2. Kiểm tra xem sheet này để chia việc giữa 3 thành viên pick có ok không: https://docs.google.com/spreadsheets/d/1bcjUieuydZtFqkBUaZDjpnkLR_mpu6Al/edit?gid=946298440#gid=946298440
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Read saved memory files
- Bash: Inspect HW01/HW02 git remotes, history, gitignore
- Bash: Download the Google Sheet as xlsx into an isolated folder
- Bash: Dump all sheet contents, validations, formulas
- Bash: Read full guidance text and check-sheet formulas
- Bash: Spot-check sheet claims against app screens
- Bash: Check whether HW03 folder exists
- Write: d:\Dang\Test\Homeworks\HW03\_NOTES.md
- Bash: Check notes file for forbidden separators
- Write: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\hw03-coordination.md
- Write: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\leave-decisions-open.md
- Edit: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\MEMORY.md

**Output AI (nguyên văn):**

````text
Bắt đầu bằng việc xem lại các quy ước đã lưu, cấu trúc repo của HW01 và HW02, và thử tải sheet chia việc.

Đã tải được sheet. Giờ đọc toàn bộ nội dung, kèm data validation (dropdown) và công thức để kiểm tra logic chọn.

Sheet có 6 tab. Đọc đầy đủ các dòng hướng dẫn đang bị cắt và các công thức mảng ở tab "Kiểm tra".

Logic của sheet chạy đúng (Hương đã chọn đủ). Kiểm tra nhanh vài mô tả trong sheet so với app thật, vì các mô tả này ảnh hưởng tới việc chọn gói.

Đủ thông tin. Giờ tôi tạo file checklist tại `Homeworks/HW03/_NOTES.md`, theo mẫu tracker của HW02, và đánh dấu rõ các quyết định còn để ngỏ.

Kiểm tra file không có dấu "—" hay "·" (theo quy ước của bạn), rồi lưu ghi nhớ cho HW03.

Tôi đã tạo file checklist, trả lời cả hai câu hỏi và kiểm tra sheet chia việc. Tôi chưa tạo repo hay commit gì.

## 1. File checklist

Tạo tại [Homeworks/HW03/_NOTES.md](Homeworks/HW03/_NOTES.md), dùng cùng cấu trúc và ký hiệu (✅ 🔄 ⬜ ⏳ ❌) với tracker của HW02:

| Mục | Nội dung |
|---|---|
| 1. Đề bài yêu cầu | 23 yêu cầu, mỗi dòng ghi mục nguồn trong đề và trạng thái, cùng danh sách các trường hợp bị 0 điểm |
| 2. Quyết định còn mở | 11 quyết định (D1 đến D11), mỗi cái có cột "Cần trước" ghi bước đầu tiên chịu ảnh hưởng |
| 3. Các bước | Chuẩn bị; Task 1; Task 2 (thêm bảng cho pilot và từng phiên P1 đến P7, mỗi phiên một commit); Task 3 (bảng theo từng nền tảng); Agent Skill; phần chung |
| 4. Việc xuyên suốt | Có quy tắc không đưa họ tên, SĐT hay video của người tham gia vào AI |
| 5. File nộp | F1 đến F15, kèm đường dẫn dự kiến |
| 6. Chốt chặn trước khi nộp | K1 đến K13, mỗi mục là một điều kiện có thể làm mất điểm |
| GHI CHÚ | Thông tin nhóm, các lưu ý L1 đến L7 rút ra từ đề, và chỗ để ghi chất liệu cho Audit và Critique |

Đã ghi nhận việc bạn tuyển đủ 7 người (1.9: 🔄, vì bảng danh sách người tham gia chưa lập).

## 2. Về Task 3

Đó chỉ là gợi ý thứ tự, không phải quyết định đã chốt. Tôi nên ghi rõ điều đó ngay từ đầu. Trong checklist, chọn nền tảng và công cụ là D8 ⏳, bạn quyết khi làm tới Task 3.

Chỉ có một chỗ phụ thuộc (L1 trong file). Nếu lần chạy checklist ở Task 1 được tính là một trong 3 nền tảng, thì ảnh chụp ở Task 1 cũng cần có lớp chữ đè và URL localhost. Vì vậy chỉ cần xem lại câu này trước bước 1.8, không phải chốt hết Task 3.

## 3. Repo: Nên tạo mới cả hai

**Repo cá nhân: Tạo mới `angquoc/software-testing-2026-HW03` (Private).**
- HW01 và HW02 mỗi bài một repo riêng, nên làm vậy là đồng bộ với hai bài trước.
- `git_log.txt` chấm theo từng bước của HW03. Nếu dùng chung repo thì log sẽ lẫn 102 commit của HW02.
- Repo HW02 đã khớp với bản zip đã nộp, nên giữ nguyên.
- Các thư mục `tools/` và `forms/` thì copy sang.

**Repo Issues của nhóm: Nên tạo `software-testing-2026-HW03-group`, nhưng phải thống nhất với An và Hương trước** (vì là repo chung).
- README, template và label của repo HW02 gắn chặt với HW02 (FR, Pool, `technique: EP/BVA`).
- HW03 cần các trường khác: IA, trình duyệt/nền tảng, bug thuộc Task 1, 2 hay 3.
- Vẫn tham chiếu được bug cũ bằng `angquoc/software-testing-2026-HW02-group#45`.
- Có thể dùng `gh label clone` để chép lại label.

## 4. Sheet chia việc: Dùng được, có vài điểm nên sửa

Tôi đã tải sheet về và kiểm tra cả công thức. Phần chạy đúng:
- Dropdown lấy tên từ tab Thành viên; mỗi ô chỉ chứa một tên.
- Cảnh báo trùng tính theo cột "Nhóm", nên Web và Mobile của cùng một màn hình được tính là trùng.
- Tab "Kiểm tra" đang đúng: Hương "Đủ", An và Ngọc "Chưa đúng".
- Ba gói không trùng nhóm.
- Tôi đối chiếu vài mô tả với app thật và thấy khớp (ví dụ trang giỏ hàng ghi "Tổng tạm tính", nút "← Mua tiếp", không có nút +/-).

Những điểm nên sửa hoặc cân nhắc:
1. **Cột "Người nhận" ở tab "Gói gợi ý" không được kiểm tra.** Có người nhận Gói 2 nhưng ở hai tab chọn lại điền khác thì sheet không báo, và một người cũng có thể đứng tên ở hai gói. Nên ghi rõ "nhận gói xong vẫn phải chọn ở hai tab", hoặc bỏ cột này đi.
2. **Chọn gói theo 7 người bạn đã tuyển.**
   - Luồng của Gói 3 (FL-05, Admin) cần người đóng vai chủ shop.
   - Luồng của Gói 2 (FL-10, Mobile) chỉ cần người dùng smartphone, nhưng mỗi phiên phải đưa điện thoại có Expo Go cho họ và quay màn hình điện thoại.
3. **Gói 2 không dùng được Expo Go cho Task 3**, vì màn hình chính A-05 là trang Admin và Admin không có bản mobile. Gói 3 (W-06) thì có thể dùng Expo Go cho màn hình tương ứng M-06. Đây chỉ là thông tin để cân nhắc, không phải lựa chọn.
4. Gói 2 có luồng đi qua M-06 Hồ sơ, cùng nhóm màn hình với màn hình chính của Gói 3. Quy tắc của đề không cấm, nhưng bug có thể trùng, khi đó dùng `Related #`.
5. Theo quy ước viết của bạn: Ô A14 của tab Hướng dẫn có dấu "·", ô N13 của tab Chọn luồng có dấu "—".

Tôi cũng đã lưu vào bộ nhớ: Phiên này là phiên điều phối của HW03, và từ giờ những lựa chọn cho các bước sau sẽ được ghi là quyết định còn mở thay vì chọn sẵn.

Bạn xem lại file checklist nhé. Khi đã chốt D1 (repo) và D2 (gói), tôi sẽ dựng khung repo (bước 0.3, 0.4) và đưa bạn message cùng lệnh để tự commit.
````

---

### C03 | 10:13 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Tôi đã chọn gói trong drive. Bạn kiểm tra thử:
- Đụng với thành viên khác không.
- Đáp ứng yêu cầu đề bài không: Đúng đề, đạt được 100 điểm, làm được tất cả yêu cầu đề bài nói.
- Màn hình có bị chặn chỗ nào không (kiểu có nhưng không có ở mobile, nhìn tưởng có màn nhưng lại không có,...)
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Re-download sheet and show current selections
- Bash: Inspect web Profile page structure
- Bash: Inspect web nav, Register and Login structure
- Bash: Check SRS FR-01/04/11/14/15 and seed data
- Bash: Inspect admin tabs and category/product forms
- Bash: Check category refresh and mobile screen list
- Bash: List mobile screens
- Bash: Check hard-coded API URLs in frontends
- ToolSearch
- WebSearch
- Bash: Update HW03 tracker with package choice and findings

**Output AI (nguyên văn):**

````text
Tải lại sheet để xem lựa chọn mới.

Đã xác nhận rủi ro cho Safari. Giờ cập nhật tracker với lựa chọn mới và các lưu ý vừa tìm ra.

Gói 3 dùng được: Không trùng ai, đủ để làm hết các yêu cầu của đề, và các màn hình đều có thật. Có một rủi ro thật ở Task 3 (Safari), nhưng chưa cần quyết ngay. Tôi đã ghi tất cả vào tracker [_NOTES.md](_NOTES.md) (D2, 0.5, 1.5, 2.1 đã ✅; thêm D12, D13 và lưu ý L8 đến L12).

Lựa chọn của bạn (sheet tải về lúc 05/11):
- **Màn hình chính:** W-06 Hồ sơ và lịch sử đơn (`/profile`)
- **Màn hình phụ:** W-04 Đăng ký, W-03 Đăng nhập
- **Luồng usability:** FL-05 Admin: Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm

## 1. Không đụng thành viên khác

- **Hương:** Màn hình chính W-08, luồng FL-01. Không trùng nhóm màn hình hay nhóm luồng với bạn. Tab "Kiểm tra" báo "Đủ" cho cả hai.
- **An:** Chưa chọn. Gói còn lại là Gói 2 (A-05, FL-10), cũng không trùng ai.
- **Lưu ý nhỏ:** Luồng FL-10 đi qua M-06 Hồ sơ trên mobile, cùng nhóm màn hình với W-06 của bạn. Đề chỉ cấm trùng màn hình chính với màn hình chính, luồng với luồng, nên vẫn hợp lệ. Nếu bug trùng thì ghi `Related`.

## 2. Có đạt đủ yêu cầu để lên 100 điểm không

Lựa chọn này không làm giới hạn điểm ở mục nào. Còn được 100 hay không thì tùy chất lượng làm bài.

| Mục | Đánh giá |
|---|---|
| Task 1 (30) | **Đủ.** W-06 có form (họ tên, SĐT, địa chỉ, email chỉ đọc), nút lưu, bảng đơn hàng có trạng thái, nút hủy đơn, trạng thái trống và trạng thái chưa đăng nhập. W-04, W-03 có thêm ô email và mật khẩu. Cộng với navbar dùng chung thì phủ đủ 4 IA, và dễ vượt 40 mục |
| Task 2 (40) | **Đi được trọn luồng.** Danh sách danh mục tải lại sau khi thêm, và dropdown danh mục ở form sản phẩm lấy đúng danh sách đó, nên người tham gia chọn được danh mục vừa tạo. Rủi ro nằm ở người tham gia, xem mục 3 |
| Task 3 (20) | Làm được với Chrome và Firefox. **Safari có rủi ro**, xem mục 3 |
| Agent Skill (10) | Không bị ảnh hưởng |

## 3. Những chỗ bị chặn hoặc "tưởng có mà không có"

1. **Safari trên BrowserStack (L8, rủi ro lớn nhất).**
   - BrowserStack không đi qua tunnel bằng `localhost` trên Safari (cả macOS lẫn iOS). Nó tự đổi địa chỉ trang thành `bs-local.com`, nhưng không đổi được các địa chỉ `localhost` ghi cố định trong code.
   - Frontend web lại gọi API bằng `http://localhost:3000` cố định. Vì vậy trên Safari cloud, W-06 (cần đăng nhập và gọi API) nhiều khả năng không tải được dữ liệu.
   - Ngoài ra, ảnh chụp sẽ hiện `bs-local.com` thay vì URL localhost như đề yêu cầu.
   - Chrome và Firefox trên desktop không bị vấn đề này.
   - Đây vẫn là quyết định D8 của bạn. Chỉ nên thử 5 phút ngay khi có trial để biết sớm.
2. **Lịch sử đơn hàng trống sau mỗi lần reset (L9).** Dữ liệu mẫu không có đơn hàng nào. Muốn kiểm bảng đơn, nhãn và màu của 5 trạng thái, nút hủy đơn, bạn phải tự đặt vài đơn qua Giỏ hàng / Thanh toán, rồi đổi trạng thái trong Admin. Màn hình phụ dùng chung được, nên việc này không vi phạm gì.
3. **Một số yêu cầu SRS không có chỗ để kiểm trên các màn bạn chọn (L10).**
   - Step Indicator chỉ có ở W-05 Quên mật khẩu.
   - Breadcrumb chỉ bắt buộc ở Giỏ hàng, Thanh toán, Chi tiết sản phẩm.
   - Toast "Thêm vào giỏ" và dialog xóa item nằm ở màn của Hương.
   - W-06 không có ảnh sản phẩm, nên không kiểm được `alt`.
   - Cả 4 IA vẫn phủ được. Nếu muốn có cả mục Step Indicator thì có thể thêm W-05 làm màn hình phụ (D12, bạn quyết ở bước 1.1).
4. **FL-05 cần chuẩn bị (L11).**
   - Ô ảnh sản phẩm là ô nhập URL, không có nút tải ảnh lên, nên phải đưa sẵn cho người tham gia một URL ảnh.
   - Mật khẩu admin đúng là `Admin123!` (setup guide ghi sai).
   - Reset DB hoặc đổi tên danh mục giữa các phiên.
5. **Người tham gia (D13).** Đề yêu cầu 7 người khớp chân dung người dùng mục tiêu. Với luồng Admin, chân dung hợp lý là người đang hoặc sắp bán hàng online. Nếu 7 người bạn tuyển chủ yếu là người mua thông thường thì cần đổi luồng, hoặc viết lý do rõ ràng trong test plan. Bạn đã tuyển những ai?
6. **Mobile (L12).** Mobile có đủ các màn tương ứng (M-03, M-04, M-06 có lịch sử đơn), nên Expo Go vẫn là một lựa chọn cho Task 3. Admin không có bản mobile, nhưng FL-05 chạy trên máy tính nên không ảnh hưởng.

Khi đọc code để kiểm tra, tôi thấy vài chỗ app làm khác SRS ngay trên các màn của bạn. Tôi cố ý không liệt kê ra đây, để bước chạy checklist tự phát hiện và phần so sánh AI với người còn ý nghĩa. Có một chỗ không tránh được: Mô tả W-04 trong sheet ghi theo SRS, còn app thật khác ở một trường. Màn hình không bị chặn, đó chỉ là bug sẽ được ghi nhận khi chạy.

Nguồn:
- [BrowserStack: Set up Local Testing](https://www.browserstack.com/docs/live/local-testing/set-up-local-testing)
- [BrowserStack: Local Testing support](https://www.browserstack.com/support/local-testing)
````

---

### C04 | 10:20 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Hai link repo: https://github.com/angquoc/software-testing-2026-HW03 và https://github.com/angquoc/software-testing-2026-HW03-group. Cả hai tôi đề private, nếu repo nào cần để public thì nói tôi. Các phần thống nhất chung thì tôi sẽ là người quy định, giống HW02 group.

5. Người tham gia: Tôi có đủ, tôi có 1 người đã bán hàng online trên tiktok, các người còn lại là người dùng bình thường hay mua hàng thôi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check repo visibility, collaborators, issue status
- Bash: Check how forgot-password page is reachable in web UI
- PowerShell: Check gh availability and access to both new repos
- Bash: Find HW02-specific hardcoding in tools
- Read: d:\Dang\Test\Homeworks\HW02\tools\export_prompt_log.py
- Bash: Read md_to_pdf header and prompt_log manual sections
- Bash: Read prompt_log header and manual tail
- Bash: Init HW03 repo, add remote, create folder skeleton
- Bash: Check md_to_pdf file selection rules
- Read: d:\Dang\Test\Homeworks\HW03\tools\md_to_pdf.py
- Edit: d:\Dang\Test\Homeworks\HW03\tools\md_to_pdf.py
- Write: d:\Dang\Test\Homeworks\HW03\tools\export_prompt_log.py
- Write: d:\Dang\Test\Homeworks\HW03\prompt_log.md
- Write: d:\Dang\Test\Homeworks\HW03\.gitignore
- Edit: d:\Dang\Test\Homeworks\HW03\tools\export_prompt_log.py
- Write: d:\Dang\Test\Homeworks\HW03\README.md
- Bash: Export prompt log, verify sessions, clone group repo, check status
- Bash: Filter browser_instruction tag and re-export log

**Output AI (nguyên văn):**

````text
Kiểm tra hai repo (quyền truy cập, visibility) và xem lại các luồng còn trống phù hợp với người mua hàng thông thường.

Giờ dựng khung repo cá nhân tại `Homeworks/HW03` (giống cách HW02 đặt repo ngay trong thư mục bài). Bước này chưa phụ thuộc việc chọn luồng.
````


<!-- CLAUDE-LOG:END -->

---

## 2. Công cụ khác

(Chưa có. Nếu dùng ChatGPT, Gemini hay công cụ AI khác, dán nguyên văn prompt và output vào đây theo mã `G##`, `M##`.)
