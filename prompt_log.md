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
- Bash: Update tracker with repo setup and participant info

**Output AI (nguyên văn):**

````text
Kiểm tra hai repo (quyền truy cập, visibility) và xem lại các luồng còn trống phù hợp với người mua hàng thông thường.

Giờ dựng khung repo cá nhân tại `Homeworks/HW03` (giống cách HW02 đặt repo ngay trong thư mục bài). Bước này chưa phụ thuộc việc chọn luồng.

Giờ cập nhật tracker: Đánh dấu D1 xong, ghi tiến độ dựng khung và ghi nhận thông tin người tham gia.

Cả hai repo cứ để Private. Riêng luồng usability nên đổi, vì chỉ 1 trong 7 người bạn tuyển hợp với FL-05.

## 1. Repo: Giữ Private cả hai

- **Repo cá nhân:** Để Private để không ai chép được prompt (chép prompt thì cả hai cùng 0 điểm). Người chấm xem `git_log.txt` trong file zip, không cần vào repo.
- **Repo nhóm:** Private vẫn được, nhưng phải mời An và Hương làm collaborator thì họ mới tạo issue được. Đề yêu cầu nộp ảnh chụp trang Issues trong zip, nên TA không cần mở repo. Nếu TA đòi xem trực tiếp thì mời TA làm collaborator, không cần chuyển sang Public.
- Máy không có `gh` nên tôi không xem được visibility hay danh sách collaborator. Tôi chỉ xác nhận được cả hai repo truy cập được bằng tài khoản của bạn và đang trống.

## 2. Khung repo cá nhân đã dựng xong (chưa commit)

Repo nằm tại [Homeworks/HW03](.), cách đặt giống HW02:
- **Git:** Đã chạy `git init` với nhánh `main` và gắn remote vào `software-testing-2026-HW03`.
- **[.gitignore](.gitignore):** Chặn `_NOTES.md`, file đề, zip, video, `HW03_group/`, `HW03_submit/`, `git_log.txt`.
- **[README.md](README.md):** Khung có phạm vi đã chọn và bảng tự chấm 30/40/20/10.
- **[prompt_log.md](prompt_log.md):** Đã xuất 4 lượt, chỉ từ phiên này.
- **Thư mục:** `checklist/`, `usability/`, `cross_platform/`, `bugs/`, `skills/`, `forms/`, `tools/`.
- **[tools/](tools/):**
  - `export_prompt_log.py`: Chỉ lấy phiên `949bce7e`. Tôi lọc thêm một dòng do hệ thống tự chèn vào prompt đầu tiên.
  - `md_to_pdf.py`: Bỏ qua thư mục của nhóm.
  - `docx_to_md.py`: Copy nguyên từ HW02.
  - Hai script điền form chứa nội dung HW02, nên để tới bước G4 mới viết lại.
- **Repo nhóm:** Đã clone vào `HW03_group/` (repo cá nhân không theo dõi thư mục này). Bạn đặt quy ước nhóm, nên tôi chưa viết gì vào đó. Khi cần, tôi có thể soạn nháp README và issue template cho bạn sửa, giống HW02.

Lệnh commit đầu tiên (định dạng theo HW02, vì D3 chưa chốt nên bạn có thể đổi):
```
cd D:\Dang\Test\Homeworks\HW03
git add .
git commit -m "[setup] Init folder structure, README, prompt log and tools"
git push -u origin main
```
`git status` đã xác nhận `_NOTES.md` và `HW03_group/` không bị đưa vào commit.

## 3. Luồng FL-05 không hợp với người đã tuyển

Đề yêu cầu 7 người khớp chân dung người dùng mục tiêu. Luồng Admin (tạo danh mục, đăng sản phẩm) có người dùng mục tiêu là chủ shop, trong khi bạn có 1 người bán hàng trên TikTok và 6 người mua hàng thông thường. Giữ FL-05 thì Task 2 (40 điểm) dễ bị trừ ở tiêu chí chọn người. Các luồng dành cho người mua mà chưa ai lấy:

| Lựa chọn | Luồng | Hợp với 7 người | Ảnh hưởng tới An | Ghi chú |
|---|---|---|---|---|
| **A (tôi đề xuất)** | FL-02 Web: Đăng ký → Đăng nhập → Cập nhật hồ sơ | Cả 7 người | Gói 2 đang gợi ý FL-10, cùng nhóm "Tài khoản", nên An phải đổi luồng | Độ nặng "Vừa", bằng FL-05, nên tổng độ nặng của gói không đổi. Đi qua đúng 3 màn của bạn (W-04, W-03, W-06), nên kết quả usability bổ sung cho Task 1 |
| B | FL-03 Web: Quên mật khẩu → OTP → Đặt lại → Đăng nhập | Cả 7 người | Không | Không đụng ai. Luồng ngắn, nên ít phát hiện hơn. Mỗi người cần có sẵn một tài khoản. Câu hỏi về độ tin cậy (trust) rất hợp với luồng này |
| C | FL-04 Web: Xem lịch sử đơn → Hủy đơn | Cả 7 người | Không | Độ nặng "Nhẹ". Policy nói chọn việc quá đơn giản sẽ bị giới hạn điểm tối đa |
| D | Giữ FL-05 | 1/7 | Không | Phải viết lý do trong test plan; rủi ro điểm cao nhất |

Nếu chọn A, An có thể lấy một luồng Admin hợp với màn hình chính A-05 (ví dụ FL-06 tạo mã giảm giá). Nhưng khi đó An cũng gặp đúng vấn đề tìm người từng bán hàng, nên nên hỏi An đã tuyển những ai.

Tracker đã cập nhật: D1 ✅; D2, 1.5, 2.1 chuyển sang 🔄 (luồng đang xem lại); D13 ghi thông tin về 7 người. Mục "Cần khai báo" ghi việc phiên này đã đọc mã nguồn EShop để kiểm tra màn hình, vì việc đó phải khai trong Audit.

Bạn chọn A, B, C hay D? Chốt xong thì sửa sheet, tôi sẽ kiểm tra lại.
````

---

### C05 | 10:26 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Khoan, tôi chưa hiểu, chỉ là chủ shop thôi đúng không, ý tôi là bạn ấy có bán hàng ở tiktok, cũng có web riêng để bán á, không đạt sao?
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
Mình viết chưa rõ nên bạn hiểu nhầm. **Người bạn bán hàng trên TikTok và có web riêng là đạt, và còn là người tham gia lý tưởng nhất cho FL-05.** Vấn đề nằm ở 6 người còn lại.

- **Đề yêu cầu cả 7 người đều khớp chân dung người dùng mục tiêu:** "Recruit seven (7) real participants who match your target user profile" (§6, Task 2).
- **FL-05 là luồng của Admin:** Người dùng mục tiêu là người quản lý shop (tạo danh mục, đăng sản phẩm).
- **Với 7 người bạn đã kể:** 1 người bán hàng đạt, còn 6 người chỉ hay mua hàng thì không khớp vai chủ shop. Vì vậy FL-05 chỉ có 1/7 người đúng đối tượng.

Mình chưa biết rõ về 6 người kia nên hỏi lại: Trong 6 người đó có ai **từng bán hàng hoặc đang định bán hàng online** không, kể cả bán nhỏ lẻ trên Facebook, Shopee hay Zalo? Họ không cần chuyên nghiệp.
- **Nếu phần lớn là có:** Giữ FL-05 được. Chân dung người dùng ghi là "người bán hàng nhỏ lẻ hoặc sắp mở shop online", và bảng 7 người ghi rõ kinh nghiệm bán hàng của từng người.
- **Nếu phần lớn chỉ là người mua:** Nên đổi sang một luồng của người mua (A, B hoặc C ở tin trước). Cả 7 người đều hợp các luồng đó, kể cả người bạn bán hàng, vì người đó cũng là người mua.
````

---

### C06 | 10:27 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Bạn nói rõ đi, nói xem người tôi cần tuyển phải đạt chỉ tiêu nào, tôi sẽ tìm, không đổi luồng.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Record kept flow and recruitment criteria in tracker

**Output AI (nguyên văn):**

````text
Bạn giữ FL-05, nên tôi ghi lại quyết định này vào tracker cùng bộ tiêu chí tuyển người bên dưới.

Giữ FL-05 thì đây là tiêu chí để tuyển. Người bạn bán hàng trên TikTok và có web riêng đã đạt, nên bạn cần tìm thêm **6 người đạt**, cộng **1 người cho pilot** (pilot không tính vào 7 người).

## Bắt buộc: Cả 7 người phải đạt đủ 6 điều

| # | Tiêu chí | Lý do |
|---|---|---|
| 1 | **Đang hoặc đã từng bán hàng online, và tự tay đăng sản phẩm** (tên, giá, ảnh, mô tả) ít nhất vài lần. Kênh nào cũng được: Shopee, Lazada, TikTok Shop, Facebook, Zalo, Instagram, web riêng | Luồng là "tạo danh mục, đăng sản phẩm", đúng việc của người bán. Chỉ phụ đóng gói hay trả lời khách mà chưa từng tự đăng sản phẩm thì **không tính** |
| 2 | Tự dùng được máy tính hoặc laptop với trình duyệt | Trang Admin chỉ có trên máy tính |
| 3 | Chưa từng thấy hoặc dùng EShop | Để quan sát được lần đầu dùng |
| 4 | Không học môn Kiểm thử phần mềm kỳ này | Đề loại người đang làm HW03 |
| 5 | Có Zalo, email hoặc SĐT, và **đồng ý để TA gọi xác minh** | TA gọi ngẫu nhiên 2 người; mạo danh thì Task 2 bị 0 điểm |
| 6 | Đồng ý cho quay màn hình (ghi âm nếu được) | Đề yêu cầu nộp bằng chứng của từng phiên |

## Ưu tiên (có thì tốt hơn, không bắt buộc)

- Không làm IT hay tester (đề ghi là "preferred").
- Đa dạng về kênh bán (sàn, mạng xã hội, web riêng), thời gian bán (mới bán vs bán lâu), độ tuổi. Phần phân tích sẽ có nhiều thứ để so sánh hơn.
- Có người từng dùng trang quản lý của sàn (Seller Center hoặc trang admin của web riêng, như người bạn TikTok), và có người chỉ bán qua Facebook hoặc Zalo.

## Câu hỏi để sàng lọc nhanh khi rủ người

1. Bạn có bán hàng online không? Bán ở đâu, bao lâu rồi?
2. Bạn có tự đăng sản phẩm lên (tên, giá, ảnh, mô tả) không, hay người khác đăng?
3. Bạn có hay dùng máy tính không?
4. Bạn có làm IT không? Có đang học môn Kiểm thử phần mềm không?
5. Bạn có đồng ý cho quay màn hình, và đồng ý để giảng viên gọi điện xác nhận không?

Câu 1 và 2 phải trả lời "có", câu 4 phải trả lời "không".

## Ghi lại cho mỗi người (dùng cho bảng 7 người)

Họ tên; liên lạc (che 4 số giữa, ví dụ `091****678`); nhóm tuổi; nghề; kênh bán và thời gian bán; đã từng dùng trang quản lý shop chưa; mức dùng máy tính; có làm IT không; ngày giờ phiên; đã đồng ý ghi hình và đồng ý cho TA gọi chưa.

Trong 6 người mua hàng bạn đã tuyển, ai từng tự đăng bán món gì đó online (kể cả bán nhỏ lẻ trên Facebook) thì vẫn có thể giữ. Khi đó ghi rõ kinh nghiệm bán của họ trong bảng. Tôi cũng khuyên không dùng chung người với An và Hương. Đề không cấm, nhưng tránh nhầm khi TA gọi.

Tôi đã ghi các tiêu chí này vào [_NOTES.md](_NOTES.md), ở mục "Tiêu chí tuyển người tham gia". Tracker cũng đã cập nhật: D2 và D13 xong, luồng chốt là FL-05, còn 1.9 ghi "1/7 người đạt, đang tuyển thêm".
````

---

### C07 | 10:33 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Tôi đã commit repo cá nhân.
- Tôi cần bạn quy ước repo nhóm, có thể tham khảo bên HW02, tôi sẽ là người đọc file và duyệt, nếu ok thì tôi commit, nếu cần sửa thì tôi sẽ sửa hoặc nói bạn sửa.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Read HW02 issue config and HW03 commit log
- Write: d:\Dang\Test\Homeworks\HW03\HW03_group\README.md
- Edit: d:\Dang\Test\Homeworks\HW03\HW03_group\README.md
- Write: d:\Dang\Test\Homeworks\HW03\HW03_group\.github\ISSUE_TEMPLATE\bug_report.yml
- Write: d:\Dang\Test\Homeworks\HW03\HW03_group\.github\ISSUE_TEMPLATE\config.yml
- Bash: Validate issue form YAML and check separators
- Bash: Update tracker for repo setup and group draft

**Output AI (nguyên văn):**

````text
Tôi soạn README quy ước và issue template cho repo nhóm trong `HW03_group/`, dựa theo HW02 và chỉnh cho HW03. Trước hết xem lại config template của HW02.

Các ví dụ tiêu đề đang dùng MSSV của Hương, như vậy không ổn. Đổi sang MSSV giả để không gán ví dụ cho ai.

Tôi đã soạn xong bản nháp quy ước cho repo nhóm, nằm trong `HW03/HW03_group/` và chưa commit. YAML của issue form đã kiểm tra hợp lệ, không có dấu "—" hay "·". Tôi cũng thấy commit `7372a21 [setup]` của bạn trên repo cá nhân.

**File để duyệt:**
- [HW03_group/README.md](HW03_group/README.md)
- [HW03_group/.github/ISSUE_TEMPLATE/bug_report.yml](HW03_group/.github/ISSUE_TEMPLATE/bug_report.yml)
- [HW03_group/.github/ISSUE_TEMPLATE/config.yml](HW03_group/.github/ISSUE_TEMPLATE/config.yml) (tắt issue trống)

## README có 5 mục, giữ khung của HW02

1. **Phân công:** Quy tắc giống trong sheet (trùng màn hình chính hay trùng luồng đều không được, Web và Mobile tính chung; màn hình phụ dùng chung được). Bảng đã điền lựa chọn của Hương và của bạn, An để trống. Thêm cột "Nền tảng (Task 3)" để mỗi người tự điền khi chốt.
2. **Repo cá nhân:** Như HW02, thêm 2 điều: Không gửi nhau checklist do AI sinh, và không đưa thông tin người tham gia lên repo nhóm.
3. **Quy ước commit:** Giữ định dạng `[<phạm vi>][<bước>] <Verb> ...`, đổi tag cho HW03:
   - **T1:** `survey`, `oracle`, `ai-draft`, `review`, `add`, `excel`, `exec`, `bugs`
   - **T2:** `plan`, `scenario`, `instruments`, `participants`, `pilot`, `P1` đến `P7` (mỗi phiên một commit, đúng §12 của đề), `score`, `analysis`, `bugs`
   - **T3:** `setup`, tên nền tảng (`chrome`, `firefox`, `safari`, `android-chrome`, `expo-go`), `bugs`, `compare`
4. **Quy ước Issues:** Mục 4.1 đến 4.5, xem phần cần duyệt bên dưới.
5. **Môi trường dùng chung:** URL; tài khoản admin (mật khẩu đúng là `Admin123!`); reset DB trước mỗi phiên; dữ liệu mẫu không có đơn hàng; mã giảm giá chỉ dùng 1 lần mỗi người; cách chạy mobile; cảnh báo Safari trên cloud.

**Issue template** có thêm các trường cho HW03: Task, mã màn hình hoặc luồng, IA (chọn được nhiều), mục checklist hoặc mã phiên kèm mốc thời gian trong video, trình duyệt / OS / thiết bị.

## Những chỗ tôi tự đặt ra, bạn nên xem kỹ

| # | Nội dung | Vị trí |
|---|---|---|
| 1 | **Bug ở navbar hoặc màn hình phụ dùng chung:** Chỉ một issue; người gặp sau comment vào issue đó và ghi `Related` trong report cá nhân. **Bug trên màn hình chính của người khác:** Báo cho chủ màn hình, không tự tạo issue | 4.1 |
| 2 | Bug trùng với HW02 vẫn được tạo issue mới cho HW03, nhưng phải dẫn chiếu sang issue của repo HW02 | 4.1 |
| 3 | **Task 2:** Chỉ bug thật mới lên Issues; vấn đề thiết kế (khó hiểu, chậm, thiếu tin cậy nhưng không sai đặc tả) chỉ ghi trong report. Đề dùng chữ "genuine bugs" nên tôi hiểu như vậy | 4.1 |
| 4 | Tiêu đề issue: `[MSSV][T1/T2/T3][Mã màn hình/luồng][Nền tảng] ...`. Ví dụ dùng `2312xxxx` để không gán cho ai | 4.2 |
| 5 | **Label:** Bỏ `technique` và `pool` của HW02; thêm `task: *` (3 label) và `ia: *` (4 label). Mỗi issue gắn đủ severity, platform, task, ia | 4.3 |
| 6 | Cách tách T1 với T3: Bug chỉ xuất hiện trên một số nền tảng thì gắn T3 | 4.3 |
| 7 | Thang severity: Giữ 4 mức và bộ câu hỏi chọn mức của HW02, sửa ví dụ cho GUI. Severity trong phần usability của report cá nhân được dùng thang riêng | 4.3 |
| 8 | **Ảnh:** Ảnh T3 có lớp chữ đè MSSV, họ tên, email; ảnh T2 không để lộ người tham gia | 4.4 |
| 9 | Không dùng chung người tham gia giữa các thành viên (đề không cấm, đây là gợi ý của tôi) | 2.5 |

Trong tracker, D3 (quy ước commit) và D6 (thang severity) đang để 🔄 chờ bạn duyệt.

## Sau khi bạn duyệt

Commit tách đôi giống HW02:
```
cd D:\Dang\Test\Homeworks\HW03\HW03_group
git add README.md
git commit -m "[docs] Add README: allocation, commit and issue conventions, labels"
git add .github
git commit -m "[template] Add bug report issue form and disable blank issues"
git push -u origin main
```

Hai việc phải làm tay trên GitHub (máy không có `gh`):
- **Tạo 14 label**, màu theo bảng ở mục 4.3: `severity: critical`, `severity: high`, `severity: medium`, `severity: low`; `platform: web`, `platform: admin`, `platform: mobile`; `task: T1 checklist`, `task: T2 usability`, `task: T3 cross-platform`; `ia: IA-01`, `ia: IA-02`, `ia: IA-03`, `ia: IA-04`. Label `bug` GitHub có sẵn.
- **Mời An và Hương** làm collaborator, vì repo đang Private.
````

---

### C08 | 10:47 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Không dùng chung người tham gia giữa các thành viên (đề không cấm, đây là gợi ý của tôi) -> Bỏ phần này. Đề không cấm thì không quy định vào. 

Các phần khác thì tôi duyệt.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Edit: d:\Dang\Test\Homeworks\HW03\HW03_group\README.md
- Bash: Update tracker and confirm rule removed
- Write: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\no-extra-rules-beyond-assignment.md
- Edit: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\MEMORY.md

**Output AI (nguyên văn):**

````text
Bỏ quy định đó ở README nhóm, và bỏ luôn dòng tương ứng trong tiêu chí tuyển người ở tracker.

Đã bỏ quy định không dùng chung người tham gia ở cả hai nơi. Câu này chỉ còn xuất hiện trong dòng 0.6 của tracker, ở dạng ghi lại việc bạn đã bỏ nó.

- **[README nhóm](HW03_group/README.md) mục 2.5:** Chỉ giữ ý "không đưa thông tin cá nhân của người tham gia lên repo nhóm".
- **[_NOTES.md](_NOTES.md):** Bỏ dòng này khỏi tiêu chí tuyển người. D3 và D6 chuyển sang ✅ (bạn đã duyệt). Bước 0.6 chờ bạn commit, tạo label và mời thành viên.

Tôi cũng đã ghi nhớ: Từ giờ điều gì đề không yêu cầu hay cấm thì tôi chỉ nêu trong chat, không đưa vào tài liệu.

Lệnh commit cho repo nhóm:
```
cd D:\Dang\Test\Homeworks\HW03\HW03_group
git add README.md
git commit -m "[docs] Add README: allocation, commit and issue conventions, labels"
git add .github
git commit -m "[template] Add bug report issue form and disable blank issues"
git push -u origin main
```

Sau khi push, còn hai việc làm tay trên GitHub:
- **Tạo 14 label**, màu theo bảng ở mục 4.3.
- **Mời An và Hương** làm collaborator.
````

---

### C09 | 15:22 05/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Đã mời An và Hương
- Hướng dẫn chi tiết cách tạo 14 label.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check group repo commits and recent session files
- Bash: Check if HW02 session has HW03 work today
- Bash: Update tracker step 0.6

**Output AI (nguyên văn):**

````text
Trước khi viết hướng dẫn, tôi kiểm tra hai việc: Repo nhóm đã push chưa, và phiên này có phải phiên mới không (nếu mới thì phải thêm vào danh sách phiên của prompt log).

Đây là cách tạo 14 label trên giao diện web của GitHub. Tôi đã kiểm tra: Repo nhóm có đủ 2 commit (`4206224` docs, `8148302` template) và đã khớp với GitHub. Tracker bước 0.6 cũng đã cập nhật.

## Các bước

1. Mở trang label của repo nhóm: https://github.com/angquoc/software-testing-2026-HW03-group/labels
   (Hoặc vào tab **Issues** → bấm nút **Labels** cạnh ô tìm kiếm.)
2. Bấm nút **New label** màu xanh ở góc phải.
3. Điền 3 ô theo bảng bên dưới:
   - **Label name:** Gõ **đúng y** tên trong bảng, kể cả dấu cách sau dấu `:` và chữ hoa/thường. Issue template và README dùng đúng tên này.
   - **Description:** Không bắt buộc, nhưng nên điền. Khi chọn label, mô tả hiện ra giúp cả nhóm gắn đúng.
   - **Color:** Xóa mã màu đang có trong ô, dán mã hex có dấu `#` (ví dụ `#B60205`). Ô xem trước bên trên sẽ đổi màu.
4. Bấm **Create label**.
5. Lặp lại bước 2 đến 4 cho đủ 14 label.

## 14 label cần tạo

| # | Label name | Description | Color |
|---|---|---|---|
| 1 | `severity: critical` | Mất hoặc lộ dữ liệu, vượt quyền, chặn luồng chính | `#B60205` |
| 2 | `severity: high` | Sai đặc tả quan trọng, không có cách đi vòng | `#D93F0B` |
| 3 | `severity: medium` | Sai đặc tả hoặc khó dùng, có cách đi vòng | `#FBCA04` |
| 4 | `severity: low` | Lỗi hiển thị, câu chữ, màu sắc, căn chỉnh | `#C2E0C6` |
| 5 | `platform: web` | Frontend Web (localhost:5173) | `#1D76DB` |
| 6 | `platform: admin` | Web Admin (localhost:5174) | `#1D76DB` |
| 7 | `platform: mobile` | App Mobile (Expo Go) | `#1D76DB` |
| 8 | `task: T1 checklist` | Phát hiện khi chạy GUI checklist | `#0E8A16` |
| 9 | `task: T2 usability` | Phát hiện qua phiên usability | `#0E8A16` |
| 10 | `task: T3 cross-platform` | Chỉ xuất hiện trên một số nền tảng | `#0E8A16` |
| 11 | `ia: IA-01` | Chuẩn giao diện chung (FR-21) | `#5319E7` |
| 12 | `ia: IA-02` | Form (FR-22) | `#5319E7` |
| 13 | `ia: IA-03` | Điều hướng (FR-23) | `#5319E7` |
| 14 | `ia: IA-04` | Phản hồi và trạng thái (FR-24) | `#5319E7` |

## Lưu ý

- **Label `bug`:** GitHub tạo sẵn khi lập repo, và template tự gắn label này. **Không xóa, không đổi tên.**
- **Các label mặc định khác** (`documentation`, `duplicate`, `enhancement`, `good first issue`, `help wanted`, `invalid`, `question`, `wontfix`): Giữ hay xóa tùy bạn. Quy ước nhóm không dùng tới chúng.
- **Gõ sai tên hoặc màu:** Bấm **Edit** ở dòng label đó để sửa. Issue đã gắn label vẫn giữ nguyên.
- **Kiểm tra sau khi tạo:**
  1. Trang Labels hiện đủ 15 label (14 label mới cộng `bug`).
  2. Vào **Issues** → **New issue**, thấy form **Bug report** với các trường MSSV, Task, Màn hình hoặc luồng, IA.
  3. Chỉ xem form, **đừng bấm Submit**. Quy ước nhóm là không xóa issue, nên một issue thử sẽ phải nằm lại trên repo.

Tạo xong thì báo tôi để đánh dấu ✅ bước 0.6.
````

---

### C10 | 23:00 06/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Đã tạo và kiểm tra.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Mark step 0.6 done and list prep status

**Output AI (nguyên văn):**

````text
Bước 0.6 đã chuyển sang ✅ (06/11) trong [_NOTES.md](Homeworks/HW03/_NOTES.md). Repo nhóm đã có đủ quy ước, issue template, 14 label và đủ thành viên.

Phần chuẩn bị còn 4 việc:

| # | Việc | Ai làm |
|---|---|---|
| 0.2 | Xem deadline trên Moodle | Bạn |
| 0.4 | Hai script điền form AI-02, AI-03, AI-05: Đã hẹn làm ở bước G4 nên chưa cần làm bây giờ | Tôi |
| 0.7 | Chạy EShop: Backend, Web, Admin, và Mobile nếu cần | Bạn chạy, tôi hỗ trợ nếu lỗi |
| 0.8 | Viết `WORKFLOW.md` cho HW03: Nguyên tắc dẫn AI từng bước; cách lưu `ai_raw/` và bảng "Thay đổi so với bản AI"; cách đặt tên ảnh; quy tắc riêng tư cho người tham gia | Tôi soạn, bạn duyệt |

Bên cạnh đó, việc tuyển thêm 6 người cho FL-05 vẫn đang chạy song song (mục 1.9).

Bạn muốn tôi soạn `WORKFLOW.md` (0.8) trước, hay bắt đầu Task 1 bước 1.1 (khảo sát màn hình W-06, W-04, W-03)? Nếu bắt đầu Task 1 thì EShop cần đang chạy (0.7).
````

---

### C11 | 23:05 06/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
1. Deadline 13h 11/11. Nhưng tôi muốn nộp muộn nhất là vào tối ngày 10/11
2. Viết WORKFLOW trước đi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Record deadline; read HW02 workflow
- Bash: Copy assignment PDF into HW03 and confirm ignored
- Write: d:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Bash: Check separators, add WORKFLOW to README, update tracker
- Edit: d:\Dang\Test\Homeworks\HW03\README.md

**Output AI (nguyên văn):**

````text
Ghi deadline vào tracker, rồi đọc `WORKFLOW.md` của HW02 để dựng bản HW03 theo cùng khung.

README vẫn ghi Task 2 "Chưa chốt", trong khi luồng đã chốt là FL-05. Sửa luôn.

Tôi đã soạn xong [WORKFLOW.md](Homeworks/HW03/WORKFLOW.md), dựa theo khung của HW02 và chỉnh cho 3 task của HW03. Deadline cũng đã ghi vào tracker: 13:00 ngày 11/11, mục tiêu nộp muộn nhất tối 10/11.

## Nội dung WORKFLOW

| Mục | Nội dung chính |
|---|---|
| Phạm vi | W-06 (chính), W-04, W-03 (phụ); luồng FL-05; Task 3 chốt khi làm tới |
| 1.1 Hộp đen | Căn cứ là SRS (bảng ánh xạ IA-01 đến IA-04 sang FR-21 đến FR-24) và các nguồn trong slide (Nielsen, Norman, Shneiderman, WCAG, checklist theo control). Mục lấy ngoài SRS phải ghi rõ nguồn và ghi là "khuyến nghị". Không đọc mã nguồn, không dùng DevTools khi thiết kế, chỉ dùng khi chạy |
| 1.2 AI-First | Mỗi lượt AI làm một bước; output gốc để trong `ai_raw/` và không bao giờ sửa. Thêm quy tắc của đề §11: AI không được tạo hay bịa danh sách người tham gia, ghi chú phiên, kết quả chạy, ảnh nền tảng |
| 1.3, 1.4 | Phân biệt phiên điều phối và phiên thiết kế, cùng danh sách file phiên thiết kế được đọc và không được đọc. Mới so với HW02: Cấm đọc thư mục HW02 (bug cũ sẽ làm lệch bản AI), `participants.md` và video |
| 1.5 Riêng tư | Thông tin cá nhân chỉ nằm trong `participants.md` và video gốc. Các file khác chỉ dùng mã P1 đến P7 và `PL` (người pilot) |
| 2 Cấu trúc | Cây thư mục của từng task. Bảng "Thay đổi so với bản AI" thêm cột **"Vì sao AI bỏ sót"**, nhận 3 giá trị Prompt / Giới hạn model / Đặc thù giao diện, đúng yêu cầu §6 Task 1 |
| 3.1 Task 1 | Các bước `survey` → `oracle` → `ai-draft` (mỗi lượt một IA) → `review` → `add` → `excel` → `exec` → `bugs`. Có tiêu chí cho một mục checklist tốt; mã mục AI có dạng `AI-02-07`, mã mục cuối có dạng `CL-23`, kèm cột Nguồn (AI / AI, SV sửa / SV thêm); quy tắc chạy checklist (Passed / Failed / N/A, Notes, ảnh chỉ cho mục Failed) |
| 3.2 Task 2 | 9 bước từ `plan` tới `bugs`, tiêu chí 7 người đã chốt, cách chạy một phiên (5 bước), danh sách file của mỗi phiên, quy tắc phân tích (AI chỉ đọc dữ liệu đã ẩn danh, severity do bạn chốt) |
| 3.3 Task 3 | Dùng đúng checklist của Task 1, mục không áp dụng ghi N/A, yêu cầu về ảnh (tên nền tảng, URL localhost, lớp chữ đè) |
| 4 đến 7 | Quy ước commit theo README nhóm, cách tách commit bản AI và bản review, cách đặt tên ảnh, quy ước Issues, định dạng văn bản |

## Những chỗ bạn nên xem kỹ

1. **Ngôn ngữ báo cáo (D4):** Mục 7 ghi "Viết tiếng Việt" giống HW02, nhưng D4 trong tracker vẫn đang mở. Bạn xác nhận giúp tiếng Việt hay đổi ngôn ngữ khác.
2. **Mục do bạn thêm sau khi chạy (3.1.3):** Nếu lúc chạy checklist phát hiện điều đáng kiểm mà checklist chưa có, mục đó được thêm bằng commit riêng và ghi rõ là "thêm sau khi chạy". Như vậy phần so sánh AI với người không bị lẫn.
3. **Ảnh trong phiên usability (3.2.2):** Chỉ chụp từ video và phải che thông tin cá nhân. Video gốc không đưa lên git, chỉ có trong bản nộp.
4. **Các quyết định còn mở** vẫn để ngỏ trong WORKFLOW: Định dạng Excel (chốt ở bước `excel`), nền tảng Task 3, thang đo SUS hay UEQ-S (chọn ở bước `instruments`).

## Việc khác tôi đã làm

- Copy file đề vào `Homeworks/HW03/` để phiên thiết kế đọc được. File này đã bị `.gitignore` chặn nên không lên repo.
- [README.md](Homeworks/HW03/README.md): Thêm dòng `WORKFLOW.md` vào bảng cấu trúc, điền luồng Task 2 (trước đó ghi "Chưa chốt").
- Tracker: Bước 0.8 để 🔄 chờ bạn duyệt.

Duyệt xong thì commit:
```
cd D:\Dang\Test\Homeworks\HW03
python tools/export_prompt_log.py
git add WORKFLOW.md README.md prompt_log.md
git commit -m "[setup] Add HW03 workflow and update scope in README"
git push
```
````

---

### C12 | 23:09 07/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
1. Tiếng Việt.
2 + 3. Đồng ý
4. Làm tới bước nào, tôi sẽ chốt bước đó, vì không thể chắc chắn bây giờ khi chưa làm được.

Tôi đã commit.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check commit and mark D4, 0.8 done in tracker

**Output AI (nguyên văn):**

````text
Tracker đã cập nhật: D4 ✅ (Tiếng Việt), 0.8 ✅ (commit `0f28406`). Các quyết định còn lại để mở tới khi làm tới bước tương ứng (đã ghi nhớ từ trước).

Phần chuẩn bị chỉ còn **0.7: Chạy EShop**. Theo WORKFLOW mục 1.3, phiên điều phối (phiên này) lo việc chạy server, nên tôi có thể bật Backend, Web và Admin ngay khi bạn bảo.

**Task 1 nên làm ở một phiên Claude mới**, không làm ở phiên này. Phiên này đã đọc mã nguồn EShop để kiểm tra màn hình, nên nếu dùng nó để thiết kế checklist thì vi phạm quy tắc hộp đen trong WORKFLOW mục 1.1. Cách làm giống HW02:

1. Mở phiên Claude Code mới trong `D:\Dang\Test`.
2. Prompt đầu tiên nên nói rõ: Đọc `Homeworks/HW03/WORKFLOW.md` trước, làm bước `[T1][survey]` cho W-06, W-04, W-03, chỉ làm một bước rồi dừng chờ bạn review.
3. Gửi tôi session ID của phiên mới để tôi thêm vào danh sách phiên trong `tools/export_prompt_log.py`.

**Thời gian:** Từ hôm nay (07/11) tới tối 10/11 còn khoảng 4 ngày. Việc dễ trễ nhất là Task 2, vì còn phải tuyển thêm 6 người rồi chạy 8 phiên (pilot và 7 phiên). Nên hẹn lịch với người tham gia ngay từ bây giờ, làm song song với Task 1.

Bạn muốn tôi bật EShop luôn không?
````

---

### C13 | 23:13 07/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Đọc file WORKFLOW.md cho tôi và làm theo trong WORKFLOW đã yêu cầu. Rồi hãy làm bước survey của task 1.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Glob: **/WORKFLOW.md
- Read: d:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Read: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\hw03-coordination.md
- Bash: List HW03 folder and show its README
- Bash: Show SRS outline and lines mentioning target screens
- Bash: Read SRS overview, account, order history and GUI sections
- Bash: Extract assignment PDF text and grep Task 1 parts
- Bash: Read Task 1 section of assignment and screen codes in group README
- Bash: Get current time and confirm output folders are empty
- Write: d:\Dang\Test\Homeworks\HW03\checklist\ai_raw\T1_survey.md
- Bash: Copy survey to 00_survey.md, verify identical and no banned dashes

**Output AI (nguyên văn):**

````text
Tôi đã đọc WORKFLOW.md (HW03) và SRS; giờ xem đề bài PDF phần Task 1 để lấy đúng mô tả màn hình W-03, W-04, W-06.

Tôi đã đọc [WORKFLOW.md](Homeworks/HW03/WORKFLOW.md) của HW03 (phiên này là phiên thiết kế) và làm xong bước `survey` của Task 1, đúng mục 3.1.1. Tôi chỉ đọc SRS, đề bài PDF và README; không đọc mã nguồn, không mở trang, không đọc `_NOTES.md` hay `prompt_log.md`.

**Hai file đã tạo, nội dung giống hệt nhau (đã so bằng `cmp`):**
- [checklist/ai_raw/T1_survey.md](Homeworks/HW03/checklist/ai_raw/T1_survey.md): Bản gốc của AI, không sửa về sau.
- [checklist/00_survey.md](Homeworks/HW03/checklist/00_survey.md): Bạn điền quan sát vào file này.

**Trong file có:**
- Bảng ghi môi trường lúc chụp, danh sách 3 màn hình W-06, W-04, W-03 và 7 ảnh cần chụp, đã đặt sẵn tên theo dạng `survey_<số>_<nội dung>.png`.
- Bảng quan sát còn trống cho từng màn hình: Thông tin chung, ô nhập, nút và link.
- Riêng W-06 có thêm bảng lịch sử đơn cho 3 trường hợp: Có đơn, từng trạng thái đơn (chữ và màu), và lịch sử trống.
- Bảng navbar so sánh lúc chưa và đã đăng nhập, kèm mục nào được làm nổi bật ở từng trang.
- Bảng câu hỏi mở, và danh sách những điểm không khảo sát ở bước này vì cần DevTools, bàn phím hoặc nhập dữ liệu sai.

**Một việc bạn cần quyết định (để mở ⏳ trong file, mục 2):** Dữ liệu mẫu không có đơn hàng. Bạn có muốn tự tạo đơn ở nhiều trạng thái khác nhau để chụp chữ và màu của từng trạng thái không, và nếu có thì những trạng thái nào.

**Việc tiếp theo của bạn:**
1. Nhờ phiên điều phối xuất prompt log, rồi commit bản AI:
   ```
   cd d:/Dang/Test/Homeworks/HW03
   git add checklist/ai_raw/T1_survey.md checklist/00_survey.md
   git commit -m "[T1][survey] Add screen survey table (AI draft)"
   ```
2. Chụp ảnh vào `checklist/screenshots/` và điền bảng ngay trong `00_survey.md`. Sau đó commit `[T1][survey] Record UI observations and screenshots`.
3. Báo tôi khi xong. Tôi sẽ đọc ảnh và bảng bạn điền rồi viết lại `00_survey.md` (đối chiếu với ảnh, sửa chỗ ghi nhầm). File trong `ai_raw/` giữ nguyên.
````

---

### C14 | 23:14 07/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Tôi đã đang mở phiên mới để nó chạy.
- Tôi gom đủ 7 người rồi. Quan trọng là để họ test được thì mình phải deploy lên chứ nhỉ (?) chứ họ đâu thể tự chạy dưới local như mình, họ chỉ là user bình thường mà.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Identify newest sessions and their first prompts
- Bash: Confirm new session is HW03 Task 1; check Vite host config
- Bash: Whitelist new session, update tracker, re-export log
- Edit: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\hw03-coordination.md

**Output AI (nguyên văn):**

````text
Kiểm tra phiên mới bạn vừa mở để thêm vào danh sách phiên của prompt log, và xem lại cách Admin gọi API (ảnh hưởng trực tiếp tới câu hỏi deploy).

Phiên mới (`f2487351`) đúng là phiên làm Task 1. Thêm vào danh sách phiên của prompt log.

Không cần deploy. Đây là đánh giá **có người điều phối** (moderated): Người tham gia dùng **máy của bạn**, EShop vẫn chạy local, bạn ngồi cạnh (hoặc gọi online) để quan sát và quay màn hình. Đề không yêu cầu người tham gia tự chạy hay tự truy cập app. Slide S13 cũng mô tả đúng cách này: Phòng đơn giản, người quan sát ngồi gần người dùng.

## Hai cách tổ chức phiên mà không cần deploy

| Cách | Làm thế nào | Phù hợp khi |
|---|---|---|
| **Gặp trực tiếp** | Người tham gia ngồi vào laptop của bạn, mở sẵn trang Admin `localhost:5174`. Bạn quay màn hình (OBS hoặc Xbox Game Bar), có thể thu cả tiếng | Gặp được người tham gia. Đơn giản nhất và ít rủi ro nhất |
| **Online, điều khiển từ xa** | Gọi qua Zoom, Google Meet hoặc Zalo. Người tham gia điều khiển máy bạn qua AnyDesk, TeamViewer, Chrome Remote Desktop, hoặc tính năng Remote Control của Zoom. Bạn quay màn hình máy mình | Người ở xa. Google Meet không cho điều khiển máy, nên phải kết hợp với một trong các công cụ trên |

Hai cách này dùng xen kẽ được, ví dụ người gần thì gặp trực tiếp, người xa thì làm online. Chỉ cần ghi rõ phiên nào làm theo cách nào trong test plan và trong `notes.md` của phiên đó.

## Vì sao không nên deploy hay mở tunnel (ngrok, Cloudflare...)

1. **Trang Admin gọi API bằng địa chỉ ghi cố định `http://localhost:3000/api`.** Trên máy người tham gia, địa chỉ này trỏ về chính máy của họ, nên đăng nhập sẽ không được. Muốn chạy được thì phải **sửa mã nguồn EShop**, tức là đổi SUT, và phải khai báo việc này.
2. **Vite 8 mặc định chặn tên miền lạ.** Muốn dùng được thì phải sửa thêm cấu hình.
3. **Lộ trang Admin ra internet với mật khẩu mặc định:** Ai có link cũng sửa được dữ liệu. Ngoài ra vẫn phải reset DB giữa các phiên.
4. **Tốn thời gian**, trong khi chỉ còn khoảng 4 ngày.

Chọn gặp trực tiếp hay online là một phần của test plan (bước `[T2][plan]`, mục "Môi trường và thiết bị"), nên bạn chốt khi làm tới bước đó.

## Việc khác tôi đã làm

- Phiên mới `f2487351` (Task 1) đã được thêm vào danh sách phiên của prompt log. Tôi đã xuất lại prompt log: 14 lượt từ 2 phiên.
- Tracker: Mục 1.9 ghi "đã gom đủ 7 người, chưa lập bảng `participants.md`". Thêm mục "Phiên Claude của HW03".
- EShop: Nếu phiên Task 1 cần server, bạn bảo tôi để bật Backend, Web và Admin.
````

---

### C15 | 23:34 07/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Gặp trực tiếp thì tôi có thể gặp cỡ 5 người, quay màn hình thao tác có cần quay mặt người thực hiện không?
- Qua online là phải xài TeamViewer hả?
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
## 1. Không cần quay mặt người tham gia

Đề chỉ yêu cầu "Record the screen (and audio, with consent)", tức là quay **màn hình**, và ghi **âm** nếu người tham gia đồng ý. Không có yêu cầu quay mặt.

- **Không quay mặt** còn khớp với WORKFLOW mục 1.5 (khuôn mặt là thông tin cá nhân, không đưa vào repo hay AI), và video cũng nhẹ hơn để vừa giới hạn 20 MB của Moodle.
- **TA xác minh** bằng cách gọi điện cho 2 người trong bảng danh sách, không dựa vào video.
- **Nên ghi âm** nếu họ đồng ý. Phần think-aloud (vừa làm vừa nói) nằm trong tiếng nói, nên có âm thanh thì ghi chú và trích lời người tham gia sẽ chính xác hơn.

Cách quay khi gặp trực tiếp: Dùng OBS hoặc Xbox Game Bar (`Win + G`) trên laptop của bạn, bật micro để thu cả lời think-aloud.

## 2. Online không bắt buộc dùng TeamViewer

Cần một công cụ cho phép người tham gia **điều khiển máy của bạn**. Có vài lựa chọn:

| Công cụ | Cách dùng | Lưu ý |
|---|---|---|
| **Zoom** | Bạn chia sẻ màn hình, người tham gia bấm xin điều khiển (Request Remote Control), bạn bấm đồng ý | Gọi điện và điều khiển trong cùng một app. Cả hai nên dùng app Zoom trên máy tính; trên trình duyệt hoặc điện thoại thường không điều khiển được |
| **AnyDesk** | Người tham gia cài AnyDesk, nhập ID máy bạn, bạn bấm chấp nhận. Gọi điện riêng qua Zalo hoặc Meet | Nhẹ, dễ dùng với người không làm IT |
| **Chrome Remote Desktop** | Bạn tạo mã hỗ trợ, người tham gia nhập mã trên trình duyệt Chrome | Thường phải đăng nhập tài khoản Google |
| **TeamViewer** | Tương tự AnyDesk | Bản miễn phí đôi khi bị khóa vì nghi là dùng thương mại, nên không phải lựa chọn ổn định nhất |

Nếu 2 người làm online đã có sẵn Zoom thì Zoom là gọn nhất. Nếu chưa có thì AnyDesk dễ cài nhất.

Ba lưu ý khi làm online:
- **Người tham gia phải dùng máy tính**, không dùng điện thoại, đúng với tiêu chí số 2.
- **Quay màn hình bằng OBS trên máy bạn**, chọn thu cả âm thanh máy tính (tiếng người tham gia qua cuộc gọi) và micro của bạn.
- **Điều khiển từ xa có độ trễ.** Ghi rõ trong test plan rằng 2 phiên này làm online. Khi phân tích các câu trả lời về tốc độ (speed), cần xét đến yếu tố này.

**Không được** làm theo kiểu người tham gia đọc cho bạn bấm hộ. Khi đó người thao tác là bạn, không còn đo được người dùng thật gặp khó ở đâu.

Việc chọn công cụ và chia 5 người gặp trực tiếp, 2 người online sẽ ghi vào test plan ở bước `[T2][plan]`, mục "Môi trường và thiết bị".
````

---

### C16 | 19:33 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Phiên 1 đã làm xong, xuất log và đưa commit.
- Chạy ứng dụng.
- Quyết định mở (SV chốt): Có tạo thêm đơn ở nhiều trạng thái khác nhau (đổi trạng thái ở Admin) để thấy được chữ và màu của từng trạng thái hay không, và tạo những trạng thái nào. -> Tôi muốn nhiều trạng thái để có thể thấy chữ và màu của từng trạng thái đầy đủ có thể có. Chắc nhờ bạn luôn vì bạn chạy ứng dụng và có thể reset db các thứ mà nhỉ?
- Tổng thể cả HW03 này, theo ứng tính của bạn, sẽ hoàn thành trong bao nhiêu tiếng? Tôi có kịp theo deadline tôi đặt ra không?
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Show HW03 changes from Task 1 session
- Bash: Check EShop deps, server status, API endpoints
- Bash: Verify survey copies identical; skim headings
- Bash: Check seeded users and cart/checkout API spec
- Bash: Locate backend routes for setup data
- Bash: Find route definitions with any quote style
- Bash: Read register, cart, checkout, cancel, status routes
- Bash: Reset EShop database to seed data
- Bash: Start EShop backend on port 3000
- Bash: Start EShop web frontend on port 5173
- Bash: Start EShop admin frontend on port 5174
- Bash: Wait for servers to respond; list products
- Bash: Create 5 orders in 5 statuses and an empty account
- Bash: Verify empty account logs in with no orders
- Bash: Save seed script to tools, log audit note, export log
- Bash: Update tracker for EShop run and survey status

**Output AI (nguyên văn):**

````text
Bắt đầu với 3 việc chạy song song: Xem phiên Task 1 đã tạo những file gì (để chia commit cho đúng), kiểm tra EShop đã cài thư viện chưa, và đọc API spec để chuẩn bị tạo đơn hàng.

Đã xong cả 4 việc. EShop đang chạy với dữ liệu mới, và ước tính thời gian thì khá căng so với mốc tối 10/11.

## 1. Commit cho bước vừa xong

Phiên Task 1 mới làm xong phần AI của bước survey: `ai_raw/T1_survey.md` và `00_survey.md` giống hệt nhau, đúng commit thứ nhất của bước survey trong WORKFLOW. Prompt log đã xuất lại: 16 lượt từ 2 phiên.

```
cd D:\Dang\Test\Homeworks\HW03
git add tools/export_prompt_log.py
git commit -m "[setup] Add Task 1 design session to prompt log whitelist"
git add tools/seed_orders.py
git commit -m "[setup] Add script to seed orders in all statuses for Task 1"
git add checklist prompt_log.md
git commit -m "[T1][survey] Add screen survey table (AI draft)"
git push
```
Lệnh `git add checklist` cũng ghi nhận việc xóa file `checklist/ai_raw/.gitkeep` (thư mục giờ đã có file thật nên không cần nữa).

## 2. EShop đang chạy

Web `http://localhost:5173`, Admin `http://localhost:5174`, Backend cổng 3000. Tôi đã reset DB trước khi bật.

## 3. Dữ liệu đơn hàng ở đủ 5 trạng thái

Đơn hàng được tạo qua API thanh toán, đúng đường mà trang web dùng. Trạng thái đổi qua API Admin theo đúng thứ tự của state machine trong FR-10.

| Tài khoản | Dùng để chụp |
|---|---|
| `test@eshop.com` / `Test1234!` | Lịch sử **có đơn**: #5 pending, #4 canceled (người dùng tự hủy khi còn chờ), #3 confirmed, #2 shipping, #1 delivered. Tổng tiền mỗi đơn khác nhau, từ 8 triệu tới 45 triệu |
| `newuser@eshop.com` / `NewUser123!` | Lịch sử **trống** (ảnh 04). Tài khoản này được thêm vào, vì sau khi tạo đơn thì `test@eshop.com` không còn trống nữa |

Lưu ý:
- **Báo phiên Task 1** rằng ảnh 04 chụp bằng `newuser@eshop.com`, và các trạng thái còn lại chụp thành ảnh `survey_08` trở đi.
- **Đừng reset DB trong lúc đang chụp.** Nếu đã lỡ reset, chạy lại `python tools/seed_orders.py`. Mục đích dùng của script đã ghi trong phần đầu file.
- Để viết script, tôi phải đọc các route liên quan trong backend. Việc này đã ghi vào mục "Cần khai báo" trong tracker.

## 4. Ước tính thời gian: Khá căng

| Phần | Ước tính |
|---|---|
| Task 1 (từ survey tới báo bug) | 10 đến 12 giờ |
| Task 2 (chuẩn bị 3 giờ, pilot 1 giờ, 7 phiên khoảng 7 giờ chưa tính đi lại, ghi chép sau phiên 3 giờ, phân tích và báo bug 4 giờ) | 18 đến 20 giờ |
| Task 3 (thiết lập 1 đến 2 giờ, 2 nền tảng còn lại 3 đến 4 giờ, so sánh và bug 1 giờ) | 5 đến 7 giờ |
| Agent Skill và video | 3 đến 4 giờ |
| Tổng hợp (report, Critique, Audit, form, README, PDF, zip) | 6 đến 8 giờ |
| **Tổng** | **Khoảng 42 đến 50 giờ làm việc** |

Bây giờ là 19:36 ngày 08/11. Từ giờ tới tối 10/11, nếu làm rất dồn thì có khoảng 30 đến 32 giờ. Tính tới deadline thật (13:00 ngày 11/11) thì thêm được chừng 5 đến 6 giờ buổi sáng. Như vậy:
- Làm đủ tất cả ở mức kỹ như HW02 thì khó xong trước tối 10/11.
- Muốn kịp phải làm song song và bớt bớt ở vài chỗ.

**Đường găng là Task 2:** Phải xong test plan, kịch bản và bộ câu hỏi, rồi chạy pilot, mới chạy được 7 phiên thật. Lịch của 7 người lại không do bạn quyết. Vài gợi ý để bạn cân nhắc (quyết định là của bạn):
- **Mở thêm một phiên thiết kế riêng cho Task 2 ngay tối nay hoặc sáng mai**, chạy song song với phiên Task 1, để có test plan và kịch bản sớm.
- **Hẹn lịch với 7 người** trong ngày 9 và 10/11 ngay bây giờ.
- **Thứ tự ưu tiên theo điểm:** Task 2 (40), Task 1 (30), Task 3 (20), Skill (10).
- **Khoảng dự phòng:** Nếu tối 10/11 chưa xong thì còn buổi sáng 11/11 trước 13:00.
````

---

### C17 | 20:00 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Tôi đã commit.
- Bây giờ tôi sẽ chụp, không reset db.
- Trong lúc đó, tôi sẽ mở 1 phiên chạy task 2 được, đúng không? Về lịch của 7 người, bạn yên tâm, tôi đều hẹn được, tôi đã hỏi trước rồi, họ sẽ luôn rảnh khi tôi cần.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Confirm the three new commits

**Output AI (nguyên văn):**

````text
Đã thấy đủ 3 commit, working tree sạch.

Được, mở phiên Task 2 song song với phiên Task 1 không có vấn đề gì. Hai phiên ghi vào hai thư mục khác nhau (`checklist/` và `usability/`), nên không đụng file của nhau. Có vài điểm cần giữ:

1. **Prompt đầu tiên:** Bảo phiên mới đọc `Homeworks/HW03/WORKFLOW.md` rồi làm bước `[T2][plan]` (mục 3.2), chỉ làm một bước rồi dừng chờ bạn review. Tiêu chí 7 người đã có sẵn trong WORKFLOW mục 3.2.1, nên phiên đó tự đọc được.
2. **Không đưa tên, liên lạc của 7 người cho phiên Task 2** (WORKFLOW mục 1.5). Bảng `participants.md` bạn tự lập. Phiên Task 2 chỉ cần biết số người, cách tổ chức (5 gặp trực tiếp, 2 online) và chân dung chung, không cần biết là ai.
3. **Commit tách theo thư mục:** Commit của Task 1 chỉ `git add checklist/ ...`, của Task 2 chỉ `git add usability/ ...`. `prompt_log.md` dùng chung, nên đi kèm commit nào làm sau cũng được. Trước khi commit thì nhờ tôi xuất prompt log như cũ, tôi sẽ đưa lệnh tách sẵn cho từng task.
4. **Dữ liệu EShop dùng chung:**
   - Các bước chuẩn bị của Task 2 (plan, scenario, instruments) không cần reset DB. Chụp ảnh trang Admin để làm kịch bản thì cứ chụp, không ảnh hưởng tới đơn hàng của Task 1.
   - Khi tới pilot và 7 phiên thật thì phải reset DB trước mỗi phiên, và reset sẽ xóa 5 đơn hàng. Vì vậy reset thì báo tôi: Tôi reset và chạy lại `tools/seed_orders.py`, để dữ liệu của Task 1 luôn có sẵn khi cần.
5. **Gửi tôi session ID của phiên Task 2** (hoặc báo "đã mở" để tôi tự tìm) để tôi thêm vào danh sách phiên của prompt log.
````

---

### C18 | 20:21 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Đọc file WORKFLOW.md cho tôi và làm theo trong WORKFLOW đã yêu cầu. Rồi hãy làm bước plan của task 2.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Glob: **/WORKFLOW.md
- Read: d:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Read: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\hw03-coordination.md
- PowerShell: List HW03, Templates and Slides files
- PowerShell: List course templates and slides
- Read: D:\Dang\Test\Homeworks\HW03\README.md
- Read: D:\Dang\Test\Homeworks\HW03\2026.HW03.GUI Usability_En.pdf
- Bash: Search S13 slide text for test plan sections
- Bash: Print usability portion of S13 slide
- Bash: Search AI-First slide for usability content
- Bash: Print usability part of AI-First slide
- PowerShell: Extract text from usability testing template via Word
- Grep: ^#{1,4}
- Read: D:\Dang\Test\Homeworks\eshop-sut\README.md
- Read: C:\Users\Lenovo\AppData\Local\Temp\claude\1ee42ba0f2ad5af7\de8fb2a8-8661-4c27-bebc-c7667ef44584\tasks\b23qlz0f6.output
- ToolSearch
- TaskStop
- PowerShell: List running Word processes
- Bash: Extract readable text from usability template .doc
- Grep: severity|T2|usability|FL-
- PowerShell: Get current date and time
- Write: D:\Dang\Test\Homeworks\HW03\usability\ai_raw\T2_plan.md
- Grep: —|·

**Output AI (nguyên văn):**

````text
Tôi đã đọc WORKFLOW.md và đề bài. Đang đọc slide S13 (phần test plan 9 mục) và SRS mục FR-12/14/15 để soạn bản AI cho bước `plan` của Task 2.

Đang đọc SRS (mục 1, 6 và 8) để lấy căn cứ cho test plan.

Tôi đã viết xong bản AI cho bước `plan` của Task 2 trong [usability/ai_raw/T2_plan.md](Homeworks/HW03/usability/ai_raw/T2_plan.md). Theo WORKFLOW, giờ tôi dừng để bạn review. Tôi chưa tạo `01_test_plan.md`, vì đó là bản review của bạn.

**Tôi đã đọc:** WORKFLOW.md, README HW03, đề bài, README nhóm, SRS (mục 1, 6, 8), slide S13, slide GUI + Usability AI-First và template UsabilityTestingTemplate. Tôi không đọc các file bị cấm (`_NOTES.md`, `prompt_log.md`, HW02, mã nguồn EShop) và không mở giao diện EShop.

**Nội dung bản AI:** Gồm 9 phần theo slide S13, cộng phần giả định, rủi ro và bảng quyết định để mở.
- **Mục đích:** Loại test Assessment (theo cách phân loại của Rubin trong slide).
- **10 câu hỏi cần trả lời (Q1 đến Q10):** Mỗi câu gắn với một trong bốn khía cạnh đề yêu cầu: clarity, error recovery, speed, trust.
- **Chia luồng thành 3 chặng để đo:** M1 Đăng nhập, M2 Tạo danh mục, M3 Thêm sản phẩm. Người tham gia vẫn chỉ nhận một kịch bản dạng mục tiêu.
- **Chân dung người dùng:** Theo đúng 6 tiêu chí ở WORKFLOW 3.2.1.
- **Số liệu:** 7 loại số liệu hiệu suất (D1 đến D7) và 3 loại số liệu ý kiến (D8 đến D10), có bảng nối từng câu hỏi với số liệu.
- **Tổng hợp:** Cách tính theo slide, xếp ưu tiên bằng criticality = severity × probability.

**Những chỗ bạn nên xem kỹ khi review:**
1. **4 giả định G1 đến G4 (mục 10):** Tôi viết khi chưa có ảnh màn hình Admin. Chỗ cần kiểm nhất là G3: Form thêm sản phẩm có ô nhập URL ảnh hay không. SRS không nói rõ điều này.
2. **6 quyết định để mở QĐ1 đến QĐ6 (mục 11):** Tôi chỉ đưa gợi ý, không chốt. QĐ3 (làm trực tiếp hay từ xa) thuộc ngay bước `plan` nên bạn chốt khi review. Các quyết định còn lại để tới bước `scenario`, `instruments` hoặc `analysis`.
3. **Bỏ phần demo giao diện trước phiên:** Template của môn có mục "User Training", nhưng tôi bỏ vì đề yêu cầu chỉ đưa mục tiêu, không hướng dẫn. Đây là một điểm bạn cần xác nhận.

**Commit (1) bản AI** (bạn tự commit). Trước khi commit, nhờ phiên điều phối xuất prompt log. Nhắc phiên đó thêm phiên này vào danh sách phiên của HW03 (whitelist), ID có thể là `de8fb2a8-8661-4c27-bebc-c7667ef44584` (tôi suy ra từ đường dẫn thư mục tạm, phiên điều phối nên kiểm lại).

```
cd Homeworks/HW03
git add usability/ai_raw/T2_plan.md
git commit -m "[T2][plan] Add usability test plan (AI draft)"
```

Review xong, bạn gửi tôi các điểm muốn sửa. Tôi sẽ viết `01_test_plan.md` kèm bảng "Thay đổi so với bản AI", rồi đưa bạn message cho commit (2).
````

---

### C19 | 20:57 08/11/2026 | Tool: Claude Code (n/a) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Tôi đã chụp đầy đủ các ảnh và điền thông tin ở mục đầu, hãy kiểm tra. Để tiết kiệm thời gian, bạn hãy dựa vào ảnh tôi chụp (nếu thiếu gì bảo tôi bổ sung) và điền thông tin vào bảng ở những gì có thể điền nhờ ảnh, tôi sẽ là người kiểm tra lại.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
(Không có phản hồi: Phiên bị dừng hoặc chưa hoàn tất)
````

---

### C20 | 20:57 08/11/2026 | Tool: Claude Code (n/a) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
[Request interrupted by user]
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
(Không có phản hồi: Phiên bị dừng hoặc chưa hoàn tất)
````

---

### C21 | 20:57 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Tôi đã chụp đầy đủ các ảnh và điền thông tin ở mục đầu, hãy kiểm tra. Để tiết kiệm thời gian, bạn hãy dựa vào ảnh tôi chụp (nếu thiếu gì bảo tôi bổ sung) và điền thông tin vào bảng ở những gì có thể điền nhờ ảnh, tôi sẽ là người kiểm tra lại.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: List screenshots and diff the filled survey against AI draft
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_01_login_logged_out.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_02_register_logged_out.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_03_profile_logged_out.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_04_profile_logged_in_no_orders.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_05_profile_logged_in_with_orders.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_06_login_logged_in.png
- Read: d:\Dang\Test\Homeworks\HW03\checklist\screenshots\survey_07_register_logged_in.png
- Bash: Get time and back up the student-filled survey
- Write: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Bash: Check for banned dash characters and count open fill-ins

**Output AI (nguyên văn):**

````text
Tôi đã điền các bảng quan sát trong [00_survey.md](Homeworks/HW03/checklist/00_survey.md) dựa trên 7 ảnh. Bảng môi trường và cột "Đã chụp" vẫn giữ phần bạn điền. Đầu file ghi rõ phần nào bạn điền, phần nào AI điền từ ảnh. File [ai_raw/T1_survey.md](Homeworks/HW03/checklist/ai_raw/T1_survey.md) giữ nguyên.

**Ảnh không cho thấy những điểm sau, bạn cần bổ sung** (đã ghi `? (SV bổ sung)` trong file và liệt kê ở mục 7):
1. **Tiêu đề trên tab trình duyệt** của cả 3 trang. Ảnh bắt đầu từ thanh địa chỉ nên không thấy tab. Bạn chỉ cần ghi chữ, không cần chụp lại.
2. **Ô Mật khẩu có che ký tự không** (trang Đăng nhập và Đăng ký). Gõ thử vài ký tự hợp lệ rồi nhìn, không bấm gửi.
3. **Ô Email ở trang hồ sơ có sửa được không.** Ô có nền xám, nhìn như bị khóa; bạn bấm vào thử.
4. **Ngày đặt thật của các đơn.** Bảng hiện "11/8/2026" nhưng bạn chụp ngày 08/11/2026. Nếu đơn đặt ngày 08/11 thì trang đang ghi theo kiểu tháng/ngày/năm.
5. **Không bắt buộc:** Không ảnh nào thấy badge trên "Giỏ hàng", nhưng chưa rõ lúc chụp giỏ có hàng không. Nếu muốn ghi trạng thái này thì thêm 1 sản phẩm vào giỏ rồi chụp `survey_08_navbar_cart_has_items.png`.
6. **Không bắt buộc:** Mức Scale hiển thị của Windows, sẽ có ích khi so sánh ở Task 3.

**Tôi đã sửa một chỗ bạn ghi** (có ghi lại ở mục 9 của file): "Ngày giờ chụp" thành "từ 20:40 đến 20:54", theo đồng hồ Windows trong ảnh. Ảnh 06 và 07 chụp lúc 20:54.

**Vài điểm đáng chú ý khi đọc ảnh.** Tôi chỉ ghi lại như quan sát, việc đánh giá đúng sai để sang bước `oracle` / `ai-draft`:
- Trang `/login` có tiêu đề "Đăng Ký", ô "Username" và nút "Sign In".
- Form đăng ký chỉ có 3 ô, không có ô xác nhận mật khẩu. Nút "Đăng Ký" màu đỏ.
- Không có dấu `*` ở bất kỳ ô nào. Không có breadcrumb, và navbar không làm nổi bật mục nào ở cả 3 trang.
- Nút đăng xuất ghi "Thoát". Khi đã đăng nhập, vào `/login` và `/register` vẫn thấy form.
- Đơn "Đang giao" vẫn có nút "Hủy đơn".
- Lịch sử đơn trống chỉ có dòng chữ, không có icon. Vào `/profile` khi chưa đăng nhập chỉ thấy "Vui lòng đăng nhập", không có link tới trang đăng nhập.

**Commit.** WORKFLOW tách commit (2) là bản bạn điền và commit (3) là bản AI viết lại. Trước khi sửa, tôi đã lưu bản bạn điền tại `C:\Users\Lenovo\AppData\Local\Temp\claude\1ee42ba0f2ad5af7\f2487351-0e33-45bc-9c36-5d86cc37bed3\scratchpad\00_survey_SV.md`. Nếu đã commit bản AI (1), bạn nhờ phiên điều phối xuất prompt log rồi chạy ngay, trước khi sửa gì thêm:

```
cd d:/Dang/Test/Homeworks/HW03
S=C:/Users/Lenovo/AppData/Local/Temp/claude/1ee42ba0f2ad5af7/f2487351-0e33-45bc-9c36-5d86cc37bed3/scratchpad
cp checklist/00_survey.md $S/00_survey_AI.md
cp $S/00_survey_SV.md checklist/00_survey.md
git add checklist/screenshots checklist/00_survey.md
git commit -m "[T1][survey] Record UI observations and screenshots"
cp $S/00_survey_AI.md checklist/00_survey.md
git add checklist/00_survey.md
git commit -m "[T1][survey] Review survey against screenshots"
```

Sau đó bạn kiểm tra lại và điền các ô `? (SV bổ sung)`, rồi commit riêng phần này với message như `[T1][survey] Fill remaining observations after check`.

Khi xong, bạn báo tôi để sang bước `oracle`.
````

---

### C22 | 21:02 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Tôi đã chụp xong các ảnh cho phiên 1 và bảo phiên 1 điền bảng dựa trên ảnh, tôi kiểm tra sau. Hiện tại phiên đó đã làm xong phần điền bảng, bảo tôi nên commit 2 lần: 1 lần ảnh tôi chụp và điền, 1 lần AI điền. Tôi review xong sẽ ra commit thứ ba. Nên cần bạn xuất log, đưa message để tôi commit.
- Phiên 2 cũng đã có và viết xong kế hoạch plan ban đầu. Tôi nên commit hay bổ sung ảnh chụp màn hình admin cho phiên 2 viết lại rồi mới commit?
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Show HW03 changes and newest session files
- Bash: Show hunk layout of survey file changes
- Bash: Read recent turns of the Task 1 session
- Bash: Find backup of user-filled survey and diff vs AI draft
- Bash: Back up user version; skim Task 2 plan structure
- Bash: Whitelist Task 2 session, update tracker, export log

**Output AI (nguyên văn):**

````text
Kiểm tra trạng thái repo, tìm session ID của phiên Task 2, và xem phiên Task 1 đã lưu những gì (để chia commit cho đúng).

Diff gồm nhiều đoạn xen kẽ nhau. Tôi xem phiên Task 1 đã hướng dẫn tách commit cụ thể thế nào, và có lưu riêng bản bạn điền ở đâu không.
````


<!-- CLAUDE-LOG:END -->

---

## 2. Công cụ khác

(Chưa có. Nếu dùng ChatGPT, Gemini hay công cụ AI khác, dán nguyên văn prompt và output vào đây theo mã `G##`, `M##`.)
