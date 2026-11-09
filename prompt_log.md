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

Mọi thứ đã sẵn sàng để commit. Prompt log đã xuất lại: 22 lượt từ 3 phiên (thêm phiên Task 2 `de8fb2a8`).

## 1. Commit cho Task 1, và commit bản AI của Task 2

Phiên Task 1 đã sao lưu bản bạn điền (bảng môi trường, cột "Đã chụp" đánh `x`) trước khi điền tiếp, nên tách được đúng 2 commit. Tôi giữ thêm một bản sao trong scratchpad của phiên điều phối. Lệnh dưới đây chỉ đưa bản sao lưu đó vào commit, **không đụng tới file `00_survey.md` đang có** (chạy trong PowerShell):

```powershell
cd D:\Dang\Test\Homeworks\HW03

# Danh sách phiên của prompt log
git add tools/export_prompt_log.py
git commit -m "[setup] Add Task 2 design session to prompt log whitelist"

# Task 1, commit 2: Ảnh + bản bạn điền
git add checklist/screenshots
$h = git hash-object -w --path=checklist/00_survey.md "C:\Users\Lenovo\AppData\Local\Temp\claude\1ee42ba0f2ad5af7\949bce7e-1d8a-4c01-b51b-b31ff0b2e825\scratchpad\00_survey_SV.md"
git update-index --cacheinfo "100644,$h,checklist/00_survey.md"
git commit -m "[T1][survey] Record UI observations and screenshots"

# Task 1, commit 3: Bảng AI điền từ ảnh
git add checklist/00_survey.md
git commit -m "[T1][survey] Fill observation tables from screenshots (AI)"

# Task 2: Bản AI của test plan
git add usability/ai_raw/T2_plan.md prompt_log.md
git commit -m "[T2][plan] Add usability test plan (AI draft)"
git push
```

Sau commit thứ 2 của Task 1, chạy `git show --stat HEAD` sẽ thấy 7 ảnh và `00_survey.md` chỉ khác bản AI ở bảng môi trường và cột "Đã chụp". Review xong bản AI điền thì commit tiếp: `[T1][survey] Review AI-filled survey`.

Phiên Task 1 còn chờ bạn bổ sung 4 điểm mà ảnh không cho thấy:
1. Tiêu đề trên tab trình duyệt của 3 trang.
2. Ô mật khẩu có che ký tự không.
3. Ô Email ở trang hồ sơ có sửa được không.
4. Ngày đặt đơn hiển thị theo định dạng nào.

## 2. Phiên Task 2: Commit bản AI trước, rồi mới bổ sung ảnh Admin

Lý do nên commit ngay:
- **Bản đầu là bằng chứng gốc cho Audit.** Phiên Task 2 đã ghi rõ plan viết khi chưa có ảnh Admin và dồn các chỗ phụ thuộc giao diện thành giả định ở mục 10. Giữ bản này cho thấy AI đã giả định gì khi chưa thấy giao diện, và đó cũng là chất liệu tốt cho AI Critique.
- **Không mất công gì thêm.** Theo WORKFLOW mục 1.2, khi AI viết lại thì phải lưu thành file mới `ai_raw/T2_plan_v2.md`, bản cũ giữ nguyên. Commit bây giờ hay sau thì bản gốc vẫn phải giữ.

Trình tự tiếp theo:
1. Chụp các trang Admin của luồng FL-05: Trang đăng nhập Admin, Dashboard và sidebar, trang Danh mục, form Thêm sản phẩm. Chỉ chụp những gì thấy được, chưa cần tạo danh mục hay sản phẩm (nên không phải reset DB).
2. Đưa ảnh cho phiên Task 2 để kiểm lại các giả định ở mục 10. Phiên đó lưu bản viết lại vào `ai_raw/T2_plan_v2.md`, commit `[T2][plan] Check UI assumptions against admin screenshots (AI revision 1)`.
3. Bạn review, ra `01_test_plan.md`, commit `[T2][plan] Review usability test plan`.

**Một chỗ WORKFLOW còn thiếu:** Mục 5 chưa quy định nơi để ảnh khảo sát trang Admin cho Task 2. Tôi đề xuất để ở `usability/screenshots/admin_<số>_<nội dung>.png` (ví dụ `admin_01_login.png`). Bạn đồng ý thì tôi thêm một dòng vào WORKFLOW mục 5 để phiên Task 2 làm theo.
````

---

### C23 | 21:19 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Tôi đồng ý.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Edit: d:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Bash: Add admin screenshots folder to WORKFLOW tree and create it
- Bash: Verify intermediate commit matches user-filled backup

**Output AI (nguyên văn):**

````text
Kiểm tra commit `25211f0` có đúng là bản bạn điền không.

Đã thêm vào [WORKFLOW.md](Homeworks/HW03/WORKFLOW.md) hai chỗ: Mục 5 có dòng ảnh khảo sát trang Admin, lưu ở `usability/screenshots/admin_<số>_<nội dung>.png`, và cây thư mục ở mục 2 có thêm `usability/screenshots/`. Thư mục này cũng đã được tạo.

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add WORKFLOW.md usability/screenshots
git commit -m "[setup] Add admin screenshot folder for Task 2 to workflow"
git push
```
Phiên Task 2 đã đọc WORKFLOW từ trước, nên khi đưa ảnh thì nhắc nó đọc lại mục 5.

**Có một chỗ commit không ra như dự tính.** Commit `25211f0` (`Record UI observations and screenshots`) chỉ có 7 ảnh, **không có** bản `00_survey.md` bạn điền. Có lẽ lệnh `git hash-object` / `git update-index` không chạy được (ví dụ chạy trong Git Bash thay vì PowerShell, nên biến `$h` rỗng). Vì vậy phần bạn điền (bảng môi trường, cột "Đã chụp") nằm chung với phần AI điền trong commit `4be2ba8`.

- **Đề xuất của tôi: Để nguyên.** Đầu file `00_survey.md` đã ghi rõ phần nào bạn điền, phần nào AI điền từ ảnh, nên ai đọc vẫn tách được. Các commit đã push lên GitHub; sửa lại lịch sử thì phải force push, rủi ro hơn lợi ích.
- Nếu bạn vẫn muốn tách cho đúng thì báo tôi. Tôi sẽ đưa cách làm, kèm cảnh báo rõ về force push.
````

---

### C24 | 21:30 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Đọc lại WORKFLOW ở Mục 5, đồng thời bổ sung các ảnh và tên ảnh của trang admin mà bạn cần để tôi bổ sung.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Edit: D:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Edit: D:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Write: D:\Dang\Test\Homeworks\HW03\usability\screenshots\.gitkeep

**Output AI (nguyên văn):**

````text
Mục 5 hiện chỉ có tên ảnh khảo sát cho Task 1 (`checklist/screenshots/survey_*`). Chưa có chỗ nào cho ảnh khảo sát trang Admin của Task 2, nên tôi thêm một dòng vào mục 5 và thêm thư mục tương ứng vào cây thư mục ở mục 2.

Tôi đã sửa WORKFLOW.md ở hai chỗ:
- **Mục 5:** Thêm dòng "Khảo sát luồng usability (Web Admin)". Ảnh lưu ở `usability/screenshots/`, tên theo dạng `flow_<số>_<nội dung>.png`. Trang dài cần cuộn thì thêm `_2`, `_3`.
- **Mục 2:** Thêm thư mục `usability/screenshots/` vào cây thư mục. Tôi cũng đã tạo sẵn thư mục này (kèm file `.gitkeep`).

## Ảnh trang Admin cần chụp

Mục đích của bộ ảnh là kiểm 4 giả định G1 đến G4 trong bản plan và làm căn cứ cho bước `scenario`.

**Trước khi chụp:**
- Reset DB: `cd backend && node database.js`.
- Mở `http://localhost:5174` và chụp **cả cửa sổ trình duyệt**, thấy được thanh URL.
- Chỉ chụp các trạng thái của luồng đúng (nhập dữ liệu hợp lệ). Trạng thái lỗi để dành cho phiên pilot, giống quy tắc khảo sát ở mục 3.1.1.

| # | Tên file | Trạng thái cần chụp | Dùng để kiểm |
|---|---|---|---|
| 1 | `flow_01_admin_login.png` | Trang đăng nhập Admin, chưa nhập gì | M1 |
| 2 | `flow_02_admin_home.png` | Trang đầu tiên sau khi đăng nhập `admin@eshop.com`, thấy đủ menu, navbar hoặc sidebar | G1, Q1 |
| 3 | `flow_03_category_list.png` | Trang quản lý danh mục, danh sách mặc định sau khi reset | G1, G4 |
| 4 | `flow_04_category_form_empty.png` | Form hoặc ô thêm danh mục khi chưa nhập (nếu form nằm ngay trong ảnh 3 thì bỏ ảnh này) | Q2 |
| 5 | `flow_05_category_form_filled.png` | Đã nhập một tên danh mục hợp lệ, chưa bấm lưu | Q2 |
| 6 | `flow_06_category_created.png` | **Ngay** sau khi bấm lưu: Thông báo nếu có, danh sách đã có danh mục mới | Q2, O3 |
| 7 | `flow_07_product_list.png` | Trang quản lý sản phẩm | G1, Q3 |
| 8 | `flow_08_product_form_empty.png` | Form thêm sản phẩm khi chưa nhập; form dài thì thêm `_2` | G3, Q5 |
| 9 | `flow_09_product_category_dropdown.png` | Ô chọn danh mục đang mở, thấy (hoặc không thấy) danh mục vừa tạo | G2, Q4 |
| 10 | `flow_10_product_form_filled.png` | Đã điền đủ dữ liệu hợp lệ và chọn danh mục mới, chưa bấm lưu | Q5 |
| 11 | `flow_11_product_created.png` | **Ngay** sau khi bấm lưu: Thông báo nếu có, trang được chuyển tới | Q7, O3 |
| 12 | `flow_12_product_in_list.png` | Sản phẩm mới trong danh sách sản phẩm, thấy cột danh mục nếu có | Q7, D6 |

**Lưu ý khi chụp:**
- Thông báo dạng toast có thể tắt rất nhanh, nhất là ở ảnh 6 và 11. Nếu không kịp chụp, bạn quay màn hình rồi cắt khung hình từ video, và ghi rõ là ảnh cắt từ video.
- Nếu đi từ ảnh 6 sang ảnh 7 mà phải tải lại trang thì ghi lại chuyện này. Đây là dữ liệu cho câu hỏi Q4.

Chụp xong, bạn gửi tôi danh sách file hoặc dán ảnh. Tôi sẽ đối chiếu với G1 đến G4 và đưa kết quả vào `01_test_plan.md` cùng bảng "Thay đổi so với bản AI".

**Commit thay đổi WORKFLOW** (bạn tự commit). Nên tách riêng khỏi commit bản AI:

```
cd Homeworks/HW03
git add WORKFLOW.md usability/screenshots/.gitkeep
git commit -m "[setup] Add naming rule for usability flow screenshots"
```
````

---

### C25 | 22:06 08/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Tôi xin thông tin đăng nhập của admin.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
Tài khoản Admin mặc định theo SRS (mục 1, [README.md:21-23](Homeworks/eshop-sut/README.md#L21-L23)):

- Email: `admin@eshop.com`
- Mật khẩu: `Admin123!`
- Trang đăng nhập: `http://localhost:5174`

Nếu đăng nhập không được, bạn reset DB rồi thử lại: `cd backend && node database.js`. Lệnh này đưa dữ liệu về mặc định, kể cả tài khoản admin.
````

---

### C26 | 00:15 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Tôi đã điền các phần ? cũng như sửa lại bảng ghi chú, kiểm tra xem còn chỗ nào nữa không. Đồng thời phần Mức scale hiển thị của Windows (Settings, Display, Scale) chưa ghi; ảnh rộng 2560 px. Nên ghi thêm vì ảnh hưởng cỡ chữ khi so sánh giữa các nền tảng ở Task 3 là sao? Vì tôi chưa hiểu mức scale hiển thị của Window mà bạn nói đến, tôi tưởng mình đã điền hết rồi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Diff current survey against AI-filled copy and find remaining question marks
- Read: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Bash: Check whether the commit-sequence copies were made
- Write: C:\Users\Lenovo\AppData\Local\Temp\claude\1ee42ba0f2ad5af7\f2487351-0e33-45bc-9c36-5d86cc37bed3\scratchpad\00_survey_AI.md

**Output AI (nguyên văn):**

````text
Còn **4 chỗ cần sửa** trong [00_survey.md](Homeworks/HW03/checklist/00_survey.md), cộng một dòng (số 6) về Windows scale, giải thích ở dưới:

1. **Dòng 185, ô Mật khẩu ở trang Đăng nhập** vẫn còn `? (SV bổ sung...)`. Trang Đăng ký bạn đã điền "ký tự bị che", trang Đăng nhập thì chưa.
2. **Dòng 82, placeholder của ô Họ Tên** đang ghi "Ô trống". Điều này mâu thuẫn với cột "Giá trị có sẵn" ở cùng dòng ("Khách Mới", "Test User"): Ô có chữ thì không thể thấy placeholder. Bạn chọn một trong hai cách:
   - Ghi "Không thấy (ô đã có giá trị)", giống cách ghi ở ô Email dòng 81.
   - Xóa tạm chữ trong ô (không bấm "Cập nhật") để xem placeholder là gì rồi chép lại.
3. **Dòng 105 và mục 7 số 2, định dạng ngày.** Trang hiện "11/8/2026", không có số 0 ở đầu, nên đúng ra là dạng `M/D/YYYY` (tháng/ngày/năm). Dạng `mm/dd/yyyy` sẽ hiện "11/08/2026". Chi tiết này nhỏ nhưng có ích khi viết mục checklist về định dạng ngày.
4. **Mục 7 đánh số 1, 2, 3, 6.** Cần đánh lại thành 1, 2, 3, 4.

Các chỗ còn lại đã ổn: Tiêu đề tab "frontend-web", ô Email bị khóa, giỏ trống nên không có badge.

### Về "mức scale hiển thị của Windows"

Đây là gợi ý thêm của tôi. WORKFLOW và đề bài **không** yêu cầu ghi mục này, nên bảng môi trường của bạn đã đủ theo yêu cầu.

Windows có hai mức phóng to khác nhau:

| | Ở đâu | Bạn đã ghi |
|---|---|---|
| Zoom trình duyệt | Chrome, Ctrl + / Ctrl − | 100% |
| Scale của Windows | Settings → System → Display → Scale (thường 100%, 125%, 150%) | Chưa |

Màn hình 2K (2560 x 1440) thường được Windows để scale 150%. Khi đó mọi thứ, kể cả trang web, được phóng to 1,5 lần. Trang web vì vậy "thấy" màn hình chỉ rộng khoảng 1700 px chứ không phải 2560 px. Nhìn cỡ chữ và chiều cao navbar trong ảnh, máy bạn có vẻ đang ở khoảng 150%, nhưng phải mở Settings mới chắc.

Mục này có ích ở Task 3. Khi so sánh với máy khác, ví dụ laptop 1920 x 1080 scale 125%, bố cục và cỡ chữ có thể khác nhau chỉ vì scale khác nhau chứ không phải lỗi. Có số scale thì bạn giải thích được ngay. Bạn có thể:
- Mở Settings xem rồi thêm một dòng "Scale của Windows" vào bảng môi trường, rồi xóa dòng số 6 ở mục 7 (tôi khuyên cách này, mất khoảng 10 giây).
- Hoặc xóa dòng số 6 nếu không muốn ghi.

### Commit

Tôi thấy chuỗi lệnh commit lần trước chưa chạy. Tôi cũng viết nó theo cú pháp bash, nên nếu chạy trong PowerShell (terminal mặc định của VS Code) sẽ bị lỗi. Tôi đã tạo lại bản AI điền hôm qua trong scratchpad, nên vẫn tách được 3 commit: Bạn điền, AI điền từ ảnh, bạn kiểm tra.

Nếu bạn **chưa** commit gì cho bước survey ngoài bản AI (1), thì sau khi sửa xong 4 chỗ trên, nhờ phiên điều phối xuất prompt log rồi chạy trong PowerShell:

```powershell
cd D:\Dang\Test\Homeworks\HW03
$S = "C:\Users\Lenovo\AppData\Local\Temp\claude\1ee42ba0f2ad5af7\f2487351-0e33-45bc-9c36-5d86cc37bed3\scratchpad"
Copy-Item checklist\00_survey.md "$S\00_survey_SV_check.md"
Copy-Item "$S\00_survey_SV.md" checklist\00_survey.md
git add checklist/screenshots checklist/00_survey.md
git commit -m "[T1][survey] Record UI observations and screenshots"
Copy-Item "$S\00_survey_AI.md" checklist\00_survey.md
git add checklist/00_survey.md
git commit -m "[T1][survey] Review survey against screenshots"
Copy-Item "$S\00_survey_SV_check.md" checklist\00_survey.md
git add checklist/00_survey.md
git commit -m "[T1][survey] Fill remaining observations after check"
```

Nếu bạn đã commit theo cách khác thì đừng chạy chuỗi này; báo tôi, tôi sẽ điều chỉnh.
````

---

### C27 | 00:16 09/11/2026 | Tool: Claude Code (n/a) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
<task-notification>
<task-id>by4813fgh</task-id>
<task-id>btaj5ir3x</task-id>
<task-id>bklma4d4y</task-id>
<task-id>__orphan_summary__:shell</task-id>
<status>stopped</status>
<summary>3 background shell command tasks didn't finish before the previous session ended. Task ids: by4813fgh, btaj5ir3x, bklma4d4y.</summary>
<note>No completion record was found for them in the previous session. They may have been stopped (via the UI, Monitor timeout, or agent teardown — these leave no transcript marker), or they may have been running when the previous Claude Code process exited. They have been marked stopped. Task ids in this notification beginning with "__orphan_summary" are internal scan markers, not tasks.</note>
</task-notification>
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
(Không có phản hồi: Phiên bị dừng hoặc chưa hoàn tất)
````

---

### C28 | 00:16 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Chạy lại server cho tôi, nãy tôi lỡ tắt mất. Phần task 1 chắc giờ chưa cần vì đã có ảnh rồi, giờ tôi cần chạy để chụp ảnh cho task 2.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check whether EShop ports are free
- Bash: Start EShop backend on port 3000
- Bash: Start EShop web frontend on port 5173
- Bash: Start EShop admin frontend on port 5174
- Bash: Wait for servers and verify admin login and data
- Bash: Check orders, categories and accounts in current DB
- Bash: Find which session ran the DB reset
- Bash: Inspect the Task 1 session tool call at 00:17
- Bash: Inspect Task 1 session events around 00:17

**Output AI (nguyên văn):**

````text
Cả 3 cổng đang trống. Bật lại server, không reset DB, nên dữ liệu cũ (5 đơn hàng, tài khoản `newuser`) vẫn còn.

Server đã chạy, nhưng API Admin báo 0 đơn hàng, khác với 5 đơn đã tạo hôm qua. Kiểm tra lại trực tiếp bằng tài khoản `test@eshop.com`.

Không phiên Claude nào chạy lệnh reset: Ở các thời điểm đó, phiên Task 1 chỉ ghi file vào scratchpad của nó. Lúc tắt server, có thể bạn đã chạy `node database.js`.

Server đã chạy lại:
- Web: `http://localhost:5173`
- Admin: `http://localhost:5174`, đăng nhập `admin@eshop.com` / `Admin123!`
- API cổng 3000. Đã kiểm tra trả 200 và đăng nhập Admin được.

**DB đang ở trạng thái dữ liệu mẫu ban đầu.** File DB được sửa lúc 00:17 ngày 09/11, nên 5 đơn hàng và tài khoản `newuser@eshop.com` đã mất. Hiện chỉ còn 3 danh mục mẫu (Điện thoại, Laptop, Phụ kiện) và 5 sản phẩm.

- **Với ảnh Task 2, như vậy là đúng.** Mỗi phiên usability đều bắt đầu từ dữ liệu mẫu, nên ảnh chụp bây giờ sẽ giống hệt những gì người tham gia thấy.
- **Chỉ chụp, không tạo danh mục hay sản phẩm.** Nếu lỡ tạo thì báo tôi để reset trước pilot.
- **Task 1:** Khi tới bước chạy checklist cần lịch sử đơn hàng, bạn báo tôi để chạy lại `tools/seed_orders.py`. Ảnh khảo sát của Task 1 đã chụp xong nên không bị ảnh hưởng.

Ảnh lưu ở `usability/screenshots/admin_<số>_<nội dung>.png`, theo WORKFLOW mục 5 vừa thêm.
````

---

### C29 | 01:05 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Tôi đã chụp xong, bạn có thể kiểm tra. Vì không có flow_04 nên tôi đã bỏ và đánh số thứ tự lại cho các phần về sau.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Glob: Homeworks/HW03/usability/screenshots/*
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_01_admin_login.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_02_admin_home.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_03_category_list.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_04_category_form_filled.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_05_category_created.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_06_product_list_1.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_06_product_list_2.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_07_product_form_empty.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_08_product_category_dropdown.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_09_product_form_filled.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_10_product_created.png
- Read: d:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_11_product_in_list.png
- PowerShell: List screenshot sizes and pixel dimensions

**Output AI (nguyên văn):**

````text
Tôi đã xem hết 12 ảnh. Có 1 ảnh hỏng cần chụp lại và vài điểm nhỏ về cách chụp. Về nội dung, ảnh đủ để kiểm cả 4 giả định trong bản plan.

## 1. Tình trạng file

| File | Tình trạng |
|---|---|
| `flow_08_product_category_dropdown.png` | **Hỏng**: Ảnh chỉ có 3×1 pixel, 123 byte. Cần chụp lại (cách chụp ở cuối mục này) |
| `flow_07_product_form_empty.png`, `flow_09_product_form_filled.png` | Ảnh cắt vùng, không thấy khung trình duyệt và URL. URL ở mọi trang đều là `localhost:5174` nên không mất thông tin. Giữ được, nhưng nếu tiện thì chụp lại cả cửa sổ cho đồng bộ |
| `flow_06_product_list_1.png` và `flow_06_product_list_2.png` | Mục 5 quy định ảnh đầu không có hậu tố, ảnh sau mới thêm `_2`. Nên đổi `flow_06_product_list_1.png` thành `flow_06_product_list.png` |
| `.gitkeep` | Không còn trong thư mục. Thư mục đã có ảnh nên không cần file này nữa |
| Các ảnh còn lại | Đạt |

**Cách chụp lại flow_08:** Danh sách xổ xuống của trình duyệt sẽ tự đóng khi bạn mở công cụ cắt ảnh (Win+Shift+S). Bạn bấm vào ô danh mục cho danh sách mở ra, rồi nhấn phím **PrtScn**. Phím này chụp toàn màn hình mà không làm mất focus, nên danh sách vẫn mở trong ảnh.

## 2. Kiểm 4 giả định của bản plan

| Giả định | Kết quả | Căn cứ |
|---|---|---|
| G1: Có khu vực danh mục và khu vực sản phẩm riêng | **Đúng**. Sidebar có hai mục "Danh mục" và "Sản phẩm" | flow_02 |
| G2: Danh mục vừa tạo có trong ô chọn danh mục | **Đúng một phần**. flow_09 cho thấy "Bàn phím" đã được chọn. Còn thiếu ảnh danh sách đang mở (flow_08) | flow_09 |
| G3: Có ô nhập URL ảnh | **Đúng**. Có ô "URL Ảnh" dạng ô nhập chữ | flow_07 |
| G4: Reset DB xoá dữ liệu cũ | **Đúng một phần**. flow_03 chỉ có 3 danh mục mẫu. Chưa có ảnh chụp sau một lần reset để đối chiếu | flow_03 |

## 3. Những điểm thấy được trên ảnh, ảnh hưởng tới plan và kịch bản

Đây chỉ là quan sát để bạn cân nhắc khi review. Tôi chưa sửa gì vào bản plan.

1. **Tạo danh mục không có form riêng.** Trang chỉ có một ô nhập (placeholder "Tên danh mục mới") và nút "Thêm mới" (flow_03). Vì vậy bạn bỏ flow_04 cũ là đúng.
2. **Sau khi bấm lưu không thấy thông báo nào.** Ở flow_05, dòng #4 "Bàn phím" hiện ra và ô nhập tự xoá. Ở flow_10, form tự xoá trắng. Cả hai ảnh đều không có thông báo trong khung nhìn. Điểm này liên quan trực tiếp tới Q2 và Q7.
3. **Ô danh mục mặc định chọn sẵn "Điện thoại"** (flow_07). Nếu người tham gia quên đổi, sản phẩm vẫn lưu được nhưng nằm sai danh mục mà không có cảnh báo. Đây là rủi ro chính của chặng M3 (Q4, lỗi "chọn sai danh mục" trong D3).
4. **Danh sách sản phẩm không có cột Danh mục**, và sản phẩm mới nằm cuối danh sách, phải cuộn xuống mới thấy (flow_11).
   - Người tham gia không kiểm được ngay trên trang này là sản phẩm đã vào đúng danh mục (Q7).
   - Người điều phối cũng phải kiểm D6 bằng cách khác: Nút "Sửa" hoặc trang web bán hàng.
   - Điểm này ảnh hưởng tới quyết định QĐ1 (có thêm chặng M4 "tự kiểm tra kết quả" hay không).
5. **Form sản phẩm không có nhãn và không có dấu `*`.** Các ô chỉ có placeholder, gõ chữ vào là mất gợi ý (flow_09). FR-22 yêu cầu dấu `*` cho trường bắt buộc. Điểm này liên quan tới Q5.
6. **Khối "Import sản phẩm từ CSV" nằm trên form "Thêm sản phẩm mới".** Người dùng mới có thể vào nhầm khối này trước. Điểm này liên quan tới Q3.
7. **Trang đăng nhập dùng tiếng Anh** ("Admin Login", "Login", "Email", "Password"), trong khi các trang khác dùng tiếng Việt (FR-21). Điểm này liên quan tới Q9.
8. **Giá hiển thị không có dấu phân cách hàng nghìn**, ví dụ "40000000 ₫" (FR-21). Ô nhập giá cũng vậy, nên rất dễ gõ thừa hoặc thiếu một số 0. Trong flow_09 bạn nhập 40.000.000 cho một bàn phím: Nếu bạn định nhập 4.000.000 thì đây chính là kiểu lỗi người tham gia dễ mắc.

## 4. Cần bạn xác nhận

Hai câu dưới đây ảnh không trả lời được, chỉ bạn biết vì bạn đã thao tác trực tiếp:
- **(a)** Lúc bấm "Thêm mới" và "Lưu sản phẩm", có thông báo nào hiện lên rồi tắt nhanh không?
- **(b)** Danh mục "Bàn phím" có hiện ngay trong ô chọn danh mục không, hay bạn phải tải lại trang?

Bạn chụp lại flow_08, trả lời (a), (b) và gửi các điểm muốn sửa trong bản plan. Sau đó tôi viết `01_test_plan.md` kèm bảng "Thay đổi so với bản AI".

Lệnh commit ảnh (bạn tự commit, sau khi đã đổi tên và chụp lại flow_08):

```
cd Homeworks/HW03
git add usability/screenshots/
git commit -m "[T2][plan] Add admin flow screenshots for plan review"
```
````

---

### C30 | 01:10 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Tôi đã sửa và thêm những phần bạn nói, kiểm tra lại giúp tôi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Diff current survey against AI-filled version and check leftovers

**Output AI (nguyên văn):**

````text
Tôi đã so bản hiện tại với bản AI điền: **Bảng đã đủ, không còn ô `?` nào cần điền.** Không có dấu "—" hay "·".

Bạn đã sửa xong:
- Thêm dòng "Scale của Windows: 150%" vào bảng môi trường.
- Điền tiêu đề tab "frontend-web" cho cả 3 trang.
- Ô Email ghi "bị khóa"; placeholder của ô Họ Tên ghi "Không thấy (ô đã có giá trị)".
- Ô Mật khẩu ở cả hai trang ghi "ký tự bị che".
- Badge giỏ hàng ghi "Không thấy badge vì giỏ không có hàng".
- Mục 7 còn 3 dòng, đánh số 1, 2, 3; ngày ghi đúng dạng `M/D/YYYY`.

Có 3 chỗ nhỏ, sửa hay không tùy bạn, không ảnh hưởng nội dung:
1. **Dòng 11** vẫn giải thích ký hiệu `? (SV bổ sung)`, trong khi file không còn ô nào như vậy. Có thể đổi thành: "Các ô ảnh không cho thấy (tiêu đề tab, ô mật khẩu có che ký tự không, ô Email có khóa không, giỏ hàng lúc chụp): Sinh viên xem trực tiếp rồi điền."
2. **Dòng 5** vẫn ghi "Cập nhật: 2026-11-08 20:58", có thể đổi sang thời điểm bạn sửa xong.
3. **Dòng 106** chỉ ghi "11/8/2026". Có thể thêm "(dạng M/D/YYYY)" để bảng 3.4 tự đọc được, khỏi phải lật xuống mục 7.

Chuỗi lệnh commit ở lượt trước vẫn dùng được: Bản bạn điền ban đầu và bản AI điền đều còn trong scratchpad. Bạn sửa xong (hoặc bỏ qua) 3 chỗ trên, nhờ phiên điều phối xuất prompt log, rồi chạy chuỗi lệnh PowerShell đó.

Commit xong thì báo tôi để sang bước `oracle`.
````

---

### C31 | 01:11 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
a. Không có thông báo nào.
b. Có ngay.

Tôi đã thêm lại flow_08
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- PowerShell: List screenshots with dimensions
- Read: D:\Dang\Test\Homeworks\HW03\usability\screenshots\flow_08_product_category_dropdown.png
- AskUserQuestion

**Output AI (nguyên văn):**

````text
No response requested.
````

---

### C32 | 01:14 09/11/2026 | Tool: Claude Code (n/a) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
<task-notification>
<task-id>bgl8t1d50</task-id>
<task-id>bsfudp6xq</task-id>
<task-id>b7c00q2in</task-id>
<task-id>__orphan_summary__:shell</task-id>
<status>stopped</status>
<summary>3 background shell command tasks didn't finish before the previous session ended. Task ids: bgl8t1d50, bsfudp6xq, b7c00q2in.</summary>
<note>No completion record was found for them in the previous session. They may have been stopped (via the UI, Monitor timeout, or agent teardown — these leave no transcript marker), or they may have been running when the previous Claude Code process exited. They have been marked stopped. Task ids in this notification beginning with "__orphan_summary" are internal scan markers, not tasks.</note>
</task-notification>
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
(Không có phản hồi: Phiên bị dừng hoặc chưa hoàn tất)
````

---

### C33 | 01:14 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Tiếp tục.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Write: D:\Dang\Test\Homeworks\HW03\usability\01_test_plan.md
- Grep: —|·
- Write: d:\Dang\Test\Homeworks\HW03\usability\01_test_plan.md
- Grep: —|·

**Output AI (nguyên văn):**

````text
Bạn giữ cả 5 thay đổi và chọn QĐ3 là "Tùy từng người". Tôi viết `01_test_plan.md` theo đúng các quyết định này.

Tôi đã viết xong bản review [usability/01_test_plan.md](Homeworks/HW03/usability/01_test_plan.md). Bản AI gốc trong `ai_raw/` giữ nguyên.

**Đã đưa vào bản review:**
- **C1:** Mục 10.1 có thêm cột kết quả kiểm. G1, G2, G3 đúng. G4 mới đúng một phần, sẽ kiểm tiếp ở pilot.
- **C2:** Dấu hiệu kết thúc của M1 đến M3 giờ viết theo giao diện thật. M3 chỉ tính là hoàn thành đúng khi D6 xác nhận sản phẩm nằm trong danh mục mới.
- **C2 (tiếp):** D6 nói rõ cách kiểm: Tên và giá xem trên bảng của Admin, còn danh mục xem qua trang chi tiết sản phẩm hoặc nút "Sửa". Hai cách này chưa có ảnh, nên tôi thêm **QĐ7** để chốt ở bước pilot.
- **C3, C4:** Bổ sung Q2, Q3, Q4, Q5, Q7, Q9 theo ảnh. D3 tách thành 5 loại lỗi (a) đến (e). Ở Q2 và Q7 có thêm một dòng ghi chú: SRS không quy định Admin phải hiện thông báo sau khi lưu, nên chưa coi đó là bug.
- **C5:** Bỏ rủi ro "danh mục mới không hiện trong form" vì đã kiểm là không xảy ra. Thêm rủi ro "sản phẩm vào sai danh mục mà không ai biết": Người điều phối kiểm D6 sau mỗi phiên, trước khi reset DB.
- **QĐ3 (Tùy từng người):** Mỗi phiên ghi hình thức trực tiếp hay từ xa trong `notes.md`. Khi tổng hợp, thời gian của phiên từ xa được ghi tách riêng. Phần hạn chế của báo cáo có thêm ý "trộn phiên trực tiếp và từ xa".

Bảng **"Thay đổi so với bản AI"** ở cuối file có 14 dòng:
- **9 dòng Thiếu:** 7 dòng ghi lý do Prompt (bản AI viết khi chưa có ảnh), 2 dòng ghi lý do Đặc thù giao diện.
- **2 dòng Mơ hồ**, **1 dòng Thừa** và **1 dòng Quyết định của SV**.

Các quyết định còn để mở cho bước sau: QĐ1, QĐ2, QĐ4, QĐ5, QĐ6, QĐ7.

**Commit** (bạn tự commit; nhớ nhờ phiên điều phối xuất prompt log trước). Nếu bạn chưa commit ảnh thì commit ảnh trước, sau đó mới commit bản review:

```
cd Homeworks/HW03
git add usability/screenshots/
git commit -m "[T2][plan] Add admin flow screenshots for plan review"
git add usability/01_test_plan.md
git commit -m "[T2][plan] Review test plan against admin screenshots"
```

(Nhắc lại: `flow_06_product_list_1.png` vẫn nên đổi tên thành `flow_06_product_list.png` trước khi commit ảnh.)

Bước tiếp theo của Task 2 là `scenario`.

Tôi viết `01_test_plan.md` với các thay đổi C1 đến C5 và chốt QĐ3 là "Tùy từng người".

I've written the reviewed test plan to [usability/01_test_plan.md](Homeworks/HW03/usability/01_test_plan.md). [ai_raw/T2_plan.md](Homeworks/HW03/usability/ai_raw/T2_plan.md) is untouched.

**What changed from the AI draft:**
- **C1, assumptions G1 to G4:** These are now checked against the screenshots instead of being assumptions. G1, G2 and G3 hold. G4 holds only partly, so it gets checked again at the pilot.
- **C2, how a session ends and how to check the result:** The end of each stage now matches the real UI (Dashboard, last row of the category table, last row of the product table). The product table has no category column, so after each session you check the product's category another way. Use the product detail page on the shop site (FR-06 says it shows the category) or the product's edit form in Admin. I have no screenshot of that edit form yet.
- **C3 and C4, questions and error types:**
  - Q2 and Q7 now say the system shows no message after saving.
  - Q3 adds the CSV import block sitting above the product form.
  - Q4 adds that the category field is preset to "Điện thoại".
  - Q5 adds that the fields have no labels, no `*` marks, and no thousands separators in the price.
  - Q9 adds that the login page is in English.
  - Error count D3 is split into 5 types (a) to (e), so each type can be tallied separately.
- **C5, risks:** I removed the risk "new category doesn't appear in the product form", since that turned out not to happen. I added the risk that a product lands in the wrong category without anyone noticing.
- **QĐ3, in person or remote:** Settled as "it depends on the participant". Each session file records which one it was, remote sessions are marked separately when timings are summarised, and the mix is listed as a limitation of the study.
- **Changes table:** The section "Thay đổi so với bản AI" has 14 rows. Two follow-up decisions also stay open: whether to add a stage M4 where participants check their own result (QĐ1), and the scenario data and benchmark time (QĐ2).

When I saved the file, the tool said it was "updated" rather than "created". If you had already started your own version of `01_test_plan.md`, it has been overwritten, so let me know and I'll merge your content back in. Otherwise you can ignore this.

You'll do the commits yourself. Ask the coordination session to export the prompt log first. Commit (2), the reviewed plan; if you haven't committed the screenshots yet, commit them separately first with the command from my earlier message:

```
cd Homeworks/HW03
git add usability/01_test_plan.md
git commit -m "[T2][plan] Review usability test plan against admin screenshots"
```

The next step is `[T2][scenario]`.
````

---

### C34 | 01:15 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Tôi đã bổ sung xong 00_survey.
- Tôi đã chụp các ảnh cho task 2.
- Task 2 đang làm file lại sau khi có ảnh.

Xuất log, kiểm tra, và đưa tôi các commit.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Show repo status and newest sessions
- Bash: Show WORKFLOW diff and latest turns of both design sessions
- Bash: Consolidate WORKFLOW naming, check servers, export log
- Bash: Update tracker for survey done and plan progress

**Output AI (nguyên văn):**

````text
Kiểm tra trạng thái repo và xem có phiên Claude mới nào cần thêm vào danh sách phiên không.

Prompt log đã xuất lại (34 lượt từ 3 phiên), không có phiên mới nào. Server vẫn đang chạy (API cổng 3000 trả 404 ở trang gốc là bình thường, Web và Admin trả 200).

## Kết quả kiểm tra

- **Task 1, `00_survey.md`:** Lượt kiểm tra cuối của phiên Task 1 xác nhận không còn ô nào cần điền. Hai commit trước (`25211f0`, `4be2ba8`) đã push lên GitHub, nên bộ 3 commit dựng lại từ scratchpad mà phiên Task 1 gợi ý không dùng được nữa. Giờ chỉ cần thêm 1 commit review.
- **Task 2, ảnh:** Đủ 11 ảnh `flow_*`. Ảnh `flow_08` chụp lại đã bình thường (14 KB, trước đó hỏng chỉ 123 byte).
- **WORKFLOW:** Phiên Task 2 đã tự thêm quy ước `flow_<số>_<nội dung>.png`, trùng với dòng `admin_...` tôi thêm trước đó. Ảnh của bạn đặt theo `flow_`, nên tôi giữ `flow_`, bỏ dòng `admin_` và dòng thư mục trùng trong cây thư mục.
- **Dữ liệu:** Lúc chụp bạn đã tạo danh mục "Bàn phím" và 1 sản phẩm, nên DB không còn là dữ liệu mẫu. Trước pilot tôi sẽ reset.

**Tùy chọn trước khi commit:** Phiên Task 2 gợi ý đổi `flow_06_product_list_1.png` thành `flow_06_product_list.png` (theo quy ước, ảnh đầu không có hậu tố). Nếu đổi thì đổi trước khi chạy lệnh dưới đây. Không đổi cũng được.

## Lệnh commit (PowerShell)

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/00_survey.md
git commit -m "[T1][survey] Review AI-filled survey"
git add WORKFLOW.md
git commit -m "[setup] Use flow_ naming for Task 2 screenshots in workflow"
git add usability/screenshots prompt_log.md
git commit -m "[T2][plan] Add admin flow screenshots for assumption check"
git push
```

`git add usability/screenshots` cũng ghi nhận việc xóa file `.gitkeep` (thư mục giờ đã có ảnh nên không cần nữa).

## Tiếp theo

- **Phiên Task 1:** Sang bước `[T1][oracle]`. Tracker đã đánh dấu bước survey ✅.
- **Phiên Task 2:** Khi viết lại xong `ai_raw/T2_plan_v2.md`, báo tôi để xuất log và đưa commit `[T2][plan] ... (AI revision 1)`.
````

---

### C35 | 01:18 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Mục 5 quy định ảnh đầu không có hậu tố là do quy định ở WORKLOW sao? Nếu vậy thì bỏ giúp tôi nhé, vì ảnh liên quan đến nhau thì phải có hậu tố chung.
- Phiên 2 đã viết xong.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check commits, status and suffix rules in WORKFLOW
- Bash: Inspect 01_test_plan header and Task 2 session's last reply
- Bash: Change image suffix rule in WORKFLOW and export log
- Bash: Update tracker for test plan review

**Output AI (nguyên văn):**

````text
Đúng vậy: Mục 5 của WORKFLOW ghi "thêm `_2`, `_3`" cho ảnh thứ hai trở đi, nên ảnh đầu không có hậu tố. Tôi sửa lại quy tắc này, rồi kiểm tra bản viết lại của phiên Task 2.

Đã sửa quy tắc ảnh trong [WORKFLOW.md](WORKFLOW.md) mục 5. Prompt log đã xuất lại (35 lượt từ 3 phiên).

## 1. Quy tắc hậu tố ảnh

Đúng như bạn nghĩ, quy tắc cũ ("thêm `_2`, `_3`") nằm trong WORKFLOW mục 5. Tôi đã bỏ phần đó ở cả hai dòng (ảnh `flow_` và ảnh mục Failed), rồi thêm một quy tắc chung ngay dưới bảng:

> Nhiều ảnh cho cùng một nội dung: Mọi ảnh đều có hậu tố chung đánh số từ `_1`, ví dụ `flow_06_product_list_1.png`, `flow_06_product_list_2.png`. Chỉ có một ảnh thì không thêm hậu tố.

Như vậy giữ nguyên tên `flow_06_product_list_1.png`, không cần đổi. Khi gặp lại hai phiên thiết kế, nhắc chúng đọc lại mục 5, vì cả hai đã đọc WORKFLOW từ trước.

## 2. Bản test plan của phiên Task 2

Phiên Task 2 không tạo `ai_raw/T2_plan_v2.md` mà viết thẳng bản review `usability/01_test_plan.md`. Bản AI gốc `ai_raw/T2_plan.md` vẫn giữ nguyên, nên vẫn đúng WORKFLOW.

**Bạn đọc kỹ file này trước khi commit**, vì toàn bộ nội dung review do AI viết từ ảnh và từ câu trả lời của bạn:
- **Bảng "Thay đổi so với bản AI" (14 dòng ở cuối file):** Kiểm các cột "Loại" và "Vì sao AI bỏ sót". Bảng này sẽ dùng cho Audit và AI Critique.
- **QĐ3** đã chốt là "tùy từng người" (5 người gặp trực tiếp, 2 người online).
- **Các quyết định còn mở** (QĐ1, QĐ2, QĐ4 đến QĐ7) sẽ chốt ở các bước `scenario`, `instruments` và pilot.

## 3. Lệnh commit (PowerShell)

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/00_survey.md
git commit -m "[T1][survey] Review AI-filled survey"
git add WORKFLOW.md
git commit -m "[setup] Unify screenshot naming rules in workflow"
git add usability/screenshots
git commit -m "[T2][plan] Add admin flow screenshots for assumption check"
git add usability/01_test_plan.md prompt_log.md
git commit -m "[T2][plan] Review usability test plan against admin screenshots"
git push
```

Commit thứ hai gồm cả hai lần sửa WORKFLOW: Gộp về một quy ước `flow_` và đổi quy tắc hậu tố.

Tiếp theo:
- **Phiên Task 1:** `[T1][oracle]`.
- **Phiên Task 2:** `[T2][scenario]`.
````

---

### C36 | 01:43 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
C2, how a session ends and how to check the result: The end of each stage now matches the real UI (Dashboard, last row of the category table, last row of the product table). The product table has no category column, so after each session you check the product's category another way. Use the product detail page on the shop site (FR-06 says it shows the category) or the product's edit form in Admin. I have no screenshot of that edit form yet.

Changes table: The section "Thay đổi so với bản AI" has 14 rows. Two follow-up decisions also stay open: whether to add a stage M4 where participants check their own result (QĐ1), and the scenario data and benchmark time (QĐ2).
When I saved the file, the tool said it was "updated" rather than "created". If you had already started your own version of 01_test_plan.md, it has been overwritten, so let me know and I'll merge your content back in. Otherwise you can ignore this.


-> Nói rõ các đoạn này cho tôi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
Xin lỗi, tin trước tôi lỡ viết bằng tiếng Anh. Dưới đây là giải thích rõ từng đoạn.

## 1. Đoạn C2: Khi nào một chặng kết thúc, và kiểm kết quả thế nào

**Vì sao cần "dấu hiệu kết thúc":** Để đo thời gian từng chặng (D2), bạn phải biết chính xác lúc nào trên video thì một chặng xong. Bản AI viết dấu hiệu theo kiểu chung chung, vì lúc đó chưa có ảnh. Bản review ghi theo đúng màn hình thật:

| Chặng | Kết thúc khi nhìn thấy | Ảnh |
|---|---|---|
| M1 Đăng nhập | Trang "Dashboard" hiện ra | flow_02 |
| M2 Tạo danh mục | Danh mục mới hiện ở **dòng cuối** bảng danh mục | flow_05 |
| M3 Thêm sản phẩm | Người tham gia bấm "Lưu sản phẩm" và sản phẩm hiện ở **dòng cuối** bảng sản phẩm | flow_11 |

**Vì sao phải kiểm danh mục sau phiên:** Bảng sản phẩm trong Admin chỉ có 4 cột: Ảnh, Tên SP, Giá, Hành động. **Không có cột Danh mục.** Vì vậy, nhìn màn hình lúc người tham gia làm, bạn không biết sản phẩm đã vào danh mục nào. Rủi ro này có thật vì ba điều cộng lại:
- Ô danh mục mặc định chọn sẵn "Điện thoại".
- Lưu xong không có thông báo.
- Bảng không cho thấy danh mục.

Nếu người tham gia quên đổi ô danh mục, sản phẩm vẫn lưu được nhưng nằm trong "Điện thoại", và cả hai bên đều không nhận ra.

Vì thế, **sau mỗi phiên** bạn tự kiểm sản phẩm có nằm đúng danh mục mới không (số liệu D6). Có hai cách:
- **Cách 1, trang web bán hàng:** Mở `http://localhost:5173`, vào trang chi tiết của sản phẩm vừa tạo. FR-06 yêu cầu trang này hiển thị Danh mục.
- **Cách 2, nút "Sửa" trong Admin:** Bấm "Sửa" ở dòng sản phẩm đó và xem ô danh mục đang chọn gì. Tôi **chưa có ảnh form "Sửa"**, nên chưa biết form này có hiện danh mục hay không. Nếu muốn dùng cách này, bạn chụp thêm `flow_12_product_edit_form.png`, và nhớ thoát ra mà không bấm lưu.

Việc người tham gia **tự** kiểm kết quả là chuyện khác: Đó là quyết định QĐ1, xem mục 2.

## 2. Đoạn về bảng "Thay đổi so với bản AI" và các quyết định còn mở

**Bảng thay đổi** ở cuối `01_test_plan.md` có 14 dòng. Mỗi dòng ghi một chỗ bản review khác bản AI:

| Loại | Số dòng | Gồm những gì |
|---|---|---|
| Thiếu | 10 | Những gì bản AI chưa có vì chưa thấy giao diện: Dấu hiệu kết thúc chặng, cách kiểm D6, không có thông báo, khối CSV, danh mục mặc định, form không nhãn và không `*`, trang đăng nhập tiếng Anh, D7, rủi ro sai danh mục, FR-06 |
| Quyết định của SV | 3 | Bỏ lưu ý "chưa có ảnh"; chốt kết quả G1 đến G4; chốt QĐ3 |
| Thừa | 1 | Bỏ rủi ro "danh mục mới không hiện trong form", vì đã kiểm là không xảy ra |

Với 10 dòng "Thiếu", cột "Vì sao AI bỏ sót" chia như sau:
- **6 dòng "Prompt":** Lúc viết bản AI chưa có ảnh, nên AI thiếu thông tin.
- **4 dòng "Đặc thù giao diện":** Những điểm chỉ có ở EShop, như bảng không có cột Danh mục hay ô danh mục mặc định "Điện thoại".

Bảng này là dữ liệu cho phần AI Critique và AI Audit Report sau này.

**Sửa lại một chỗ tôi ghi sai:** Tin trước tôi nói còn "hai" quyết định mở. Thực ra plan có 6 quyết định, mới chốt 1 (QĐ3), **còn mở 5**:

| Mã | Nội dung | Chốt ở bước |
|---|---|---|
| QĐ1 | Có thêm chặng M4 bắt người tham gia **tự kiểm tra** sản phẩm đã vào đúng danh mục, hay chỉ quan sát xem họ có tự kiểm không | `scenario` (bước tiếp theo) |
| QĐ2 | Câu chữ kịch bản, dữ liệu đưa cho người tham gia (tên danh mục, tên, giá, URL ảnh sản phẩm), tiêu chí hoàn thành, thời gian chuẩn của từng chặng | `scenario` (bước tiếp theo) |
| QĐ4 | Thế nào là "bế tắc hẳn" (lúc được phép can thiệp) và câu can thiệp chuẩn | `scenario` hoặc `instruments` |
| QĐ5 | Dùng thang SUS hay UEQ-S | `instruments` |
| QĐ6 | Thang severity cho các phát hiện usability | `analysis` |

QĐ1 và QĐ2 là hai quyết định cần chốt ngay ở bước kế tiếp. Có lẽ vì vậy tôi đã ghi nhầm thành "còn hai".

## 3. Đoạn về chữ "updated"

Khi ghi file `01_test_plan.md`, công cụ báo "updated" (đã cập nhật) chứ không báo "created" (tạo mới). Thường thì điều này có nghĩa là trước đó đã có một file trùng tên. Tôi không đọc file đó trước khi ghi. Vì vậy, nếu lúc ấy bạn đã có sẵn `01_test_plan.md` với nội dung riêng, nội dung đó đã bị bản của tôi thay mất. File chưa được commit nên git cũng không khôi phục được.

- Nếu trước đó **chưa có** file này, hoặc chỉ là file trống: Bạn bỏ qua đoạn này.
- Nếu **đã có** nội dung của bạn: Bạn báo tôi phần nội dung đó (dán lại hoặc nhớ ý chính), tôi sẽ gộp vào bản hiện tại.
````

---

### C37 | 01:47 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Tôi chỉ sửa lại một vài thứ trong đó thôi, như bỏ các tham chiếu về WORKFLOW.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Grep: WORKFLOW|3\.2\.1|1\.5
- Read: d:\Dang\Test\Homeworks\HW03\usability\01_test_plan.md

**Output AI (nguyên văn):**

````text
Vậy không có nội dung nào của bạn bị mất, không cần gộp gì thêm. Tôi đã kiểm lại: Trong `01_test_plan.md` không còn chỗ nào nhắc tới WORKFLOW, và bảng "Thay đổi so với bản AI" vẫn giữ nguyên 14 dòng.

Bỏ các tham chiếu này chỉ là sửa hình thức, nội dung không đổi. WORKFLOW mục 2.2 nói không cần ghi thay đổi thuần hình thức, nên bạn không phải thêm dòng nào vào bảng.

Phần bạn sửa sẽ nằm chung trong commit (2) của bước `plan`, dùng lệnh tôi đã đưa ở tin trước. Commit xong, mình sang bước `[T2][scenario]` và chốt QĐ1, QĐ2 ở đó.
````

---

### C38 | 01:48 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Tôi có một số thay đổi ở file 01_test_plan.md nên phiền bạn xuất lại prompt trước khi tôi commit, trước đó tôi chưa commit.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Re-export prompt log and check status
- Bash: Show latest commits and sync state

**Output AI (nguyên văn):**

````text
Đã xuất lại prompt log: 38 lượt từ 3 phiên, không có phiên lạ. File `01_test_plan.md` không có dấu "—" hay "·".

3 commit đầu đã có trên máy (`1f290ab`, `c14ff6c`, `e8653e5`) nhưng chưa push: Nhánh đang đi trước GitHub 3 commit. Còn lại commit bản review:

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add usability/01_test_plan.md prompt_log.md
git commit -m "[T2][plan] Review usability test plan against admin screenshots"
git push
```

Lệnh `git push` cuối sẽ đẩy cả 4 commit lên GitHub.
````

---

### C39 | 01:49 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Tôi đã commit xong.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
Vậy là xong bước `survey` của Task 1. Commit (1) đến (3) theo WORKFLOW đã có, cộng thêm commit kiểm tra lại của bạn. Tôi không kiểm tra lại các commit này, vì phiên thiết kế không được đọc lịch sử git.

Bước tiếp theo là `oracle`. Tôi chưa bắt đầu, vì nên có một prompt riêng cho bước này: Prompt log khi đó sẽ cho thấy bạn dẫn AI qua từng bước, thay vì bước `oracle` chạy theo câu "Tôi đã commit xong". Bạn có thể gửi một câu như "Làm bước oracle của Task 1".

Ở bước `oracle`, tôi sẽ làm theo WORKFLOW mục 3.1.2:
- Trích **nguyên văn** các yêu cầu giao diện từ SRS: FR-21 đến FR-24, cùng các ý giao diện trong FR-01, FR-02, FR-04, FR-10, FR-11.
- Gán mã `UI-R01`, `UI-R02`, ... và ghi IA cùng màn hình áp dụng (W-06, W-04, W-03) cho từng yêu cầu.
- Yêu cầu không áp dụng cho 3 màn hình này vẫn liệt kê, ghi "Không áp dụng" kèm lý do.
- Chỗ SRS chưa rõ thì ghi thành giả định hoặc câu hỏi mở để bạn chốt.
- Đầu ra: `ai_raw/T1_oracle.md` (giữ nguyên) và `01_oracle.md` (bản để bạn review).
````

---

### C40 | 01:49 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Tôi đã commit xong.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- (không)

**Output AI (nguyên văn):**

````text
Bước `[T2][plan]` đã xong: Đã commit bản AI, bộ ảnh khảo sát và bản review.

Bước tiếp theo là `[T2][scenario]`. Cũng như bước `plan`, tôi viết bản AI vào `usability/ai_raw/T2_scenario.md` rồi dừng để bạn review. Bản AI sẽ gồm:
- **Kịch bản dạng mục tiêu:** Chỉ nêu việc cần đạt, không đưa từng bước.
- **Trạng thái ban đầu** của mỗi phiên.
- **Dữ liệu đưa cho người tham gia:** Tên danh mục, tên, giá, mô tả và URL ảnh sản phẩm.
- **Tiêu chí hoàn thành và thời gian chuẩn** cho từng chặng M1 đến M3 và cả luồng.
- **Gợi ý cho các quyết định đang mở:** QĐ1 (có thêm chặng M4 "tự kiểm tra kết quả" không), QĐ2 (chính phần dữ liệu và thời gian chuẩn ở trên), QĐ4 (thế nào là "bế tắc hẳn" và câu can thiệp chuẩn). Tôi chỉ đưa phương án để bạn chọn, không chốt thay bạn.

Bạn muốn tôi bắt đầu bước `scenario` ngay không?
````

---

### C41 | 01:50 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `de8fb2a8`

**Prompt (nguyên văn):**

````text
Bắt đầu đi.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Read: d:\Dang\Test\Homeworks\HW03\usability\01_test_plan.md
- PowerShell: Get current date and time
- Write: D:\Dang\Test\Homeworks\HW03\usability\ai_raw\T2_scenario.md
- Grep: —|·

**Output AI (nguyên văn):**

````text
Tôi đã viết xong bản AI cho bước `scenario` trong [usability/ai_raw/T2_scenario.md](Homeworks/HW03/usability/ai_raw/T2_scenario.md). Theo WORKFLOW, giờ tôi dừng để bạn review.

**Nội dung chính:**
- **Kịch bản (mục 2.1):** Người tham gia đóng vai người quản lý shop đồ công nghệ. Họ phải tạo danh mục **Loa Bluetooth** rồi đăng sản phẩm đầu tiên vào đúng danh mục đó. Khi thấy đã xong thì nói "Tôi làm xong rồi". Câu chữ cố ý không dùng chữ trên nút và menu, để không gợi ý đường đi.
- **Phiếu dữ liệu (mục 2.2):** Gồm tài khoản admin, tên danh mục, sản phẩm "Loa Bluetooth JBL Flip 6", giá 2.990.000 ₫ và một câu mô tả ngắn.
- **Trạng thái ban đầu (mục 3):** Có thêm một điểm tôi thấy trên flow_02: Trình duyệt của bạn đang lưu mật khẩu. Nếu trình duyệt tự điền mật khẩu admin thì chặng M1 mất ý nghĩa, nên các phiên cần dùng một hồ sơ trình duyệt riêng hoặc chế độ khách.
- **Thành phần nhiệm vụ (mục 4):** Có tiêu chí hoàn thành cho từng chặng và cho toàn luồng, giới hạn 15 phút, và 5 mốc thời gian T0 đến T4. Khoảng từ T3 (bấm lưu sản phẩm) tới T4 (nói "xong rồi") cho biết người tham gia có tự kiểm tra kết quả hay không.
- **Can thiệp (mục 5):** Có 4 mức, mức 0 là lời nhắc nói ra suy nghĩ nên không tính là can thiệp. Mỗi mức có câu nói chuẩn.
- **Tình huống đặc biệt (mục 6):** 8 tình huống, ví dụ vào nhầm khối CSV, quên đổi danh mục "Điện thoại", bị khoá đăng nhập theo FR-02.
- **Những điểm cần kiểm ở pilot (mục 9).**

**Quyết định để mở (mục 10):** Mỗi quyết định có các phương án và gợi ý của AI. Bạn chốt khi review.

| Mã | Quyết định | Gợi ý của AI |
|---|---|---|
| QĐ1 | Có thêm chặng M4 "tự kiểm tra kết quả" không | Không thêm, chỉ quan sát rồi hỏi lại sau phiên |
| QĐ2a | Kịch bản dùng từ "danh mục" hay "nhóm hàng" | "danh mục" |
| QĐ2b | Phiếu ghi giá `2.990.000 ₫` hay `2990000` | `2.990.000 ₫`, rồi kiểm ở pilot xem ô giá xử lý dấu chấm thế nào |
| QĐ2c | Đưa phiếu dữ liệu bằng giấy hay bằng file | Giấy, riêng URL ảnh để trong file cho dễ sao chép |
| QĐ2d | Thời gian chuẩn | Bạn tự làm luồng và bấm giờ, nhân với một bội số, chỉnh lại sau pilot |
| QĐ4 | Thế nào là "bế tắc hẳn" | Không tiến triển khoảng 3 phút ở cùng một chặng, hoặc hỏi cách làm từ lần thứ hai, hoặc nói muốn bỏ cuộc |

**Bạn cần chuẩn bị thêm:**
- **URL ảnh sản phẩm:** Tôi để chỗ trống `<URL ảnh do SV chọn>`. Tôi không tự đặt URL vì không kiểm được URL đó có tồn tại không. Bạn chọn một ảnh thật và kiểm là ảnh hiện được trong Admin.
- **Bấm giờ để chốt QĐ2d:** Nếu muốn chốt thời gian chuẩn ngay ở bản review, bạn tự làm luồng một lần với đúng phiếu dữ liệu và bấm giờ từng chặng.

Commit (1) bản AI (bạn tự commit, nhớ nhờ phiên điều phối xuất prompt log trước):

```
cd Homeworks/HW03
git add usability/ai_raw/T2_scenario.md
git commit -m "[T2][scenario] Add task scenario (AI draft)"
```

Review xong, bạn gửi tôi các quyết định và điểm muốn sửa. Tôi sẽ viết `02_scenario.md` kèm bảng "Thay đổi so với bản AI".
````

---

### C42 | 01:50 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
WORKFLOW có thay đổi một số thứ (mục 5), nhưng bạn có thể đọc lại hết nếu muốn. Sau đó làm bước oracle của Task 1.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Read: d:\Dang\Test\Homeworks\HW03\WORKFLOW.md
- Bash: Read SRS product, cart, checkout, admin and mobile sections
- Bash: Get current time and list checklist folder
- Write: d:\Dang\Test\Homeworks\HW03\checklist\ai_raw\T1_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\ai_raw\T1_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\ai_raw\T1_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\ai_raw\T1_oracle.md
- Bash: Verify code counts, dashes, and copy oracle to review file

**Output AI (nguyên văn):**

````text
Tôi đã đọc lại toàn bộ WORKFLOW. Thay đổi ở mục 5 chỉ thêm ảnh khảo sát luồng usability và quy tắc hậu tố `_1`, `_2` khi có nhiều ảnh, không ảnh hưởng bước `oracle`. Bước `oracle` của Task 1 đã xong.

**File đã tạo (giống hệt nhau, đã so bằng `cmp`):**
- [checklist/ai_raw/T1_oracle.md](Homeworks/HW03/checklist/ai_raw/T1_oracle.md): Bản AI, giữ nguyên về sau.
- [checklist/01_oracle.md](Homeworks/HW03/checklist/01_oracle.md): Bản để bạn review. Cuối file có bảng "Thay đổi so với bản AI" còn trống.

**Nội dung:**
- **50 mã từ `UI-R01` đến `UI-R50`.** Mỗi gạch đầu dòng của SRS là một mã, trích nguyên văn, kèm IA, màn hình và lý do. Lấy từ:
  - Toàn bộ FR-21 đến FR-24.
  - Toàn bộ FR-01, FR-02, FR-04, FR-11, và các ý của FR-10 về việc người dùng hủy đơn.
  - Các ý giao diện ở FR-03, FR-05, FR-06, FR-07 dễ bị dùng nhầm làm oracle.
  - SEC-04 và SEC-06.
- **Kết quả xét áp dụng:**

  | Áp dụng (kể cả một phần) | Bạn quyết định | Không áp dụng |
  |---|---|---|
  | 27 | 8 | 15 |

- **Bảng tổng hợp theo IA và màn hình** ở mục 3, là đầu vào cho bước `ai-draft`. Có ghi 5 cặp yêu cầu trùng ý, mỗi cặp chỉ nên thành một mục checklist.
- **Mục 5 liệt kê 9 điểm thấy trên giao diện mà SRS không có yêu cầu**, ví dụ định dạng ngày, thứ tự sắp xếp đơn, hành vi `/profile` khi chưa đăng nhập. Nếu muốn kiểm các điểm này ở `ai-draft` thì phải dùng nguồn ngoài SRS và ghi là khuyến nghị.
- File chỉ trích yêu cầu, không đánh giá giao diện hiện tại đạt hay không đạt.

**10 câu hỏi mở bạn cần chốt (mục 4.1, mỗi câu có sẵn các phương án):**

| Mã | Nội dung | Ghi chú |
|---|---|---|
| CH-01 | Ở W-06, trường nào là trường bắt buộc (để kiểm dấu `*`) | |
| CH-02 | Mỗi nút thuộc nhóm "tích cực" (xanh dương) hay "nguy hiểm/hủy bỏ" (đỏ) | Đặc biệt là nút đăng xuất |
| CH-03 | Từ tiếng Anh nào được tính là "thuật ngữ kỹ thuật chuẩn" | |
| CH-04 | Dấu phân cách hàng nghìn là chấm hay phẩy | Ví dụ trong SRS viết `300,000 ₫` |
| CH-05 | Có đưa các ý nghiệp vụ, phân quyền, bảo mật vào checklist GUI không | Gồm nút "Hủy đơn" theo FR-10, FR-11 ý 1, SEC-04, SEC-06 |
| CH-06 | Tiêu chí kiểm tên tiếng Việt và màu của từng trạng thái đơn | |
| CH-07 | Có kiểm trạng thái loading ở W-06 không | |
| CH-08 | Ô Email bị khóa ở W-06 có phải dùng `type="email"` không | |
| CH-09 | Kiểm highlight navbar ở `/profile` thế nào | Navbar không có mục cho trang hồ sơ |
| CH-10 | Nút "Hủy đơn" có cần dialog xác nhận không | |

Mục 4.2 có 4 giả định của AI để bạn xem lại.

**Bạn cần quyết định một điểm định dạng:** 5 câu trích từ SRS có sẵn dấu "—". Tôi giữ nguyên vì WORKFLOW yêu cầu trích nguyên văn, dù mục 7 cấm dấu này. Nếu bạn muốn thay dấu đó trong bản review thì ghi vào bảng thay đổi.

**Commit bản AI** (nhờ phiên điều phối xuất prompt log trước):

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/ai_raw/T1_oracle.md checklist/01_oracle.md
git commit -m "[T1][oracle] Add UI requirement extract (AI draft)"
```

Sau đó bạn review `01_oracle.md`: Chốt các câu hỏi mở, sửa mã, IA hoặc màn hình nếu cần, rồi ghi mọi thay đổi về nội dung vào bảng "Thay đổi so với bản AI". Xong thì commit `[T1][oracle] Review UI requirement extract`.
````

---

### C43 | 09:23 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
- Task 1 và 2 đã xong bản AI tạo, hãy xuất log và đưa tôi message commit trong lúc tôi review file.
- Tôi nghĩ bạn nên thêm 1 phần cho bạn về ước tính thời gian, mỗi lần tôi nhắn với bạn, hãy kèm số thời gian ước tính cần làm xong và số thời gian còn lại ở cuối tin nhắn. Bạn có thể ước tính sai cũng không sao vì nó chỉ là ước tính, nhưng những thời gian người làm thì tốn nhiều thời gian hơn, còn AI làm thì ít thời gian hơn. Bạn cũng có thể xem số giờ ở các tin nhắn như 1 cơ sở mở để ước lượng.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check time, status, WORKFLOW diff and new files
- Bash: Compare oracle copies, export log, check sessions
- Write: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\time-estimate-footer.md
- Edit: C:\Users\Lenovo\.claude\projects\d--Dang-Test\memory\MEMORY.md
- Bash: Add time estimate table to tracker
- Bash: Update tracker statuses for oracle and scenario

**Output AI (nguyên văn):**

````text
Kiểm tra trạng thái repo (WORKFLOW vừa bị sửa, nên xem ai sửa gì), giờ hiện tại, và các file mới của hai phiên.

Lưu yêu cầu báo thời gian vào bộ nhớ, và thêm bảng ước tính vào tracker để lần nào tính lại cũng dựa trên cùng một cơ sở.

Prompt log đã xuất lại: 43 lượt từ 3 phiên, không có phiên mới. Bản AI của cả hai task đã có:
- **Task 1:** `ai_raw/T1_oracle.md` và `01_oracle.md` giống hệt nhau, bạn review trên `01_oracle.md`.
- **Task 2:** `ai_raw/T2_scenario.md`, chưa có bản review.

Lệnh commit cho bản AI:

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/ai_raw/T1_oracle.md checklist/01_oracle.md
git commit -m "[T1][oracle] Add UI requirement extract (AI draft)"
git add usability/ai_raw/T2_scenario.md prompt_log.md
git commit -m "[T2][scenario] Add task scenario (AI draft)"
git push
```

**Nên commit ngay, trước khi sửa `01_oracle.md`.** Như vậy commit review sau sẽ chỉ chứa phần bạn sửa, giống cách đã làm với `00_survey.md`. Review xong thì commit tiếp:
- `[T1][oracle] Review UI requirement extract`
- `[T2][scenario] Review task scenario` (ghi vào `02_scenario.md`)

**Về phần ước tính thời gian:** Từ nay, cuối mỗi tin nhắn tôi sẽ ghi số giờ làm việc còn lại và thời gian còn tới 2 mốc. Bảng ước tính chi tiết theo từng phần nằm trong `_NOTES.md`, mục "Ước tính thời gian". Tôi cập nhật bảng này mỗi khi xong một bước, nên các con số giữa các tin nhắn sẽ nhất quán. Cơ sở để ước tính là thời gian thực tế từ các tin nhắn: Bước survey của Task 1 và bước plan của Task 2 mỗi bước mất khoảng 2,5 giờ phía bạn.

Hiện tổng ước tính còn khoảng 39 giờ làm việc, nhiều hơn số giờ còn tới mốc tối 10/11. Phần nặng nhất là Task 2 với khoảng 16,5 giờ, trong đó 7 phiên usability chiếm khoảng 7 giờ. Nếu được, bạn nên chạy pilot và các phiên đầu tiên ngay trong hôm nay hoặc sáng mai.

⏱ Còn khoảng **39 giờ** làm việc | Còn **36 giờ 37 phút** tới mốc 22:00 10/11 (tôi tạm hiểu "tối 10/11" là 22:00; nếu bạn định giờ khác thì báo tôi) | **51 giờ 37 phút** tới deadline 13:00 11/11
````

---

### C44 | 11:23 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
CH-01: Trường nào bắt buộc sẽ được quy định rõ trong tài liệu đặc tả (SRS). Trong GUI checklist, bạn không cần list lại toàn bộ logic bắt buộc mà chỉ cần viết tiêu chí: "Kiểm tra hiển thị dấu * kế bên label của các trường được quy định là bắt buộc. Đảm bảo dấu * canh lề chuẩn xác.

CH-02:  Nút "Đăng xuất" thường mang tính chất thoát phiên bản, không phá hủy dữ liệu, nên chuẩn UX thường đặt nó ở dạng Secondary/Neutral (ví dụ: nút outline xám hoặc text trơn) để không quá chói, hoặc ở dạng Danger (đỏ) nếu hệ thống cực kỳ đề cao bảo mật.

CH-03: Là các từ mang tính toàn cầu, nếu dịch ra tiếng Việt sẽ rất tối nghĩa hoặc dài dòng. Ví dụ: Email, App, Link, ID, Internet, Wifi, File, Loading.

CH-04: Chuẩn Việt Nam thường dùng dấu chấm . cho hàng nghìn (300.000 ₫). Tuy nhiên, nếu SRS đã ghi 300,000 ₫, GUI Testing bắt buộc phải test đúng theo spec của SRS.

CH-05: Không đưa logic vào GUI checklist. Function/Security Testing sẽ lo việc người dùng có thực sự gọi được API hủy đơn hay không. Tuy nhiên, GUI checklist phải kiểm tra trạng thái hiển thị của UI dựa trên quyền đó.

CH-06: Cần tạo một mapping ma trận đơn giản trong test case.

CH-07: Có. UX tốt bắt buộc phải có phản hồi thị giác khi gọi API.

CH-08: Nên có. Dù ô input đang ở trạng thái disabled hoặc readonly, việc sử dụng đúng chuẩn Semantic HTML (type="email") vẫn rất quan trọng để hỗ trợ Screen Reader (Accessibility) và định dạng style nhất quán.

CH-09: Nếu /profile không thuộc bất kỳ tab điều hướng chính nào trên thanh Navbar, thì không có tab nào trên Navbar được sáng lên (highlight) cả.

CH-10: Về mặt UX, hành động phá hủy dữ liệu bắt buộc phải có Dialog/Modal xác nhận.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check review file is still identical to AI draft and get time
- Write: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Bash: Verify applicability counts and check file status

**Output AI (nguyên văn):**

````text
Tôi đã cập nhật [01_oracle.md](Homeworks/HW03/checklist/01_oracle.md) theo 10 câu trả lời của bạn; [ai_raw/T1_oracle.md](Homeworks/HW03/checklist/ai_raw/T1_oracle.md) giữ nguyên. Theo `git status`, bản AI (commit 1) đã được commit; hiện chỉ có `01_oracle.md` đang thay đổi.

**Kết quả sau khi cập nhật:** 50 mã, gồm 26 `Áp dụng`, 6 `Áp dụng một phần`, 18 `Không áp dụng`, không còn mã nào ở trạng thái ⏳. Bảng "Thay đổi so với bản AI" có 18 dòng, đều là "Quyết định của SV" và đều dẫn tới câu hỏi tương ứng.

Những chỗ đổi chính:
- **UI-R16 và UI-R24 đến R27** thành `Áp dụng một phần`: Chỉ kiểm phần hiển thị, ví dụ nút "Hủy đơn" có hay không theo trạng thái đơn. **UI-R28, R49, R50** thành `Không áp dụng` (CH-05).
- **UI-R36 bỏ W-06**, vì SRS không quy định trường nào bắt buộc ở trang hồ sơ (CH-01). **UI-R37 và UI-R41 áp dụng thêm cho W-06** (CH-08, CH-09).
- **Mục 5.2 mới gồm 3 mục ngoài SRS:** NR-01 loading (CH-07), NR-02 dialog khi hủy đơn (CH-10), NR-03 vị trí dấu `*` (CH-01).

**Cần bạn xem lại 4 điểm:**

1. **CH-02 vẫn chưa chốt.** Câu trả lời của bạn nêu hai dạng cho nút đăng xuất (Secondary/Neutral hoặc Danger) mà chưa chọn một. Mục 4.3 có 3 phương án:
   - (a) Không kiểm màu nút này.
   - (b) Kiểm màu đỏ theo SRS.
   - (c) Kiểm dạng Neutral theo nguồn ngoài SRS, ghi là khuyến nghị.

2. **Chữ "bắt buộc" ở CH-07 và CH-10.** WORKFLOW mục 1.1 quy định mục lấy từ ngoài SRS phải ghi là **khuyến nghị**. Vì vậy NR-01 và NR-02 được ghi là khuyến nghị, kèm nguồn Nielsen heuristic 1 và 5. Nếu bạn muốn dùng nguồn khác thì sửa ở mục 5.2.

3. **NR-03 "canh lề chuẩn xác" hiện chưa kiểm được bằng Passed / Failed.** Nếu để nguyên, bước review sẽ phải xếp mục này vào loại "Mơ hồ". Tôi để tiêu chí cụ thể cho bước `ai-draft` / `review` chốt, ví dụ dấu `*` nằm ngay sau nhãn, cùng dòng, cùng cỡ chữ.

4. **Ba điểm tôi tự đề xuất khi cập nhật, cần bạn xác nhận** (đã ghi rõ trong bảng thay đổi):
   - Xếp nhóm màu cho các nút: "Sign In", "Đăng Ký", "Cập nhật" là nút Submit, tức hành động tích cực; "Hủy đơn" là nút hủy bỏ.
   - GĐ-05: "EShop" là tên riêng, không xét theo UI-R31.
   - UI-R27: Vẫn kiểm thông báo hiển thị khi hệ thống từ chối thao tác hủy. Tôi xếp đây là phần hiển thị chứ không phải logic; nếu bạn thấy đây là logic thì chuyển sang `Không áp dụng`.

Sau khi chốt CH-02 và kiểm tra lại, bạn nhờ phiên điều phối xuất prompt log rồi commit:

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/01_oracle.md
git commit -m "[T1][oracle] Review UI requirement extract"
```

Bước tiếp theo là `ai-draft`, mỗi lượt một IA, bắt đầu từ IA-01.
````

---

### C45 | 11:31 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
1. b
2. Đồng ý bỏ bắt buộc thành khuyến nghị và gán nguồn tham chiếu.
3. Đồng ý việc loại bỏ cụm "canh lề chuẩn xác" để tránh mơ hồ.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Bash: Check for leftover references to removed or pending items
- Edit: d:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md

**Output AI (nguyên văn):**

````text
Tôi đã cập nhật [01_oracle.md](Homeworks/HW03/checklist/01_oracle.md) theo 3 quyết định của bạn:

1. **CH-02 chọn (b):** Nút đăng xuất được xếp vào nhóm nguy hiểm/hủy bỏ cùng với "Hủy đơn", nên UI-R32 sẽ kiểm nút này có màu đỏ. Mục 4.3 ghi lại phương án bạn chọn.
2. **Khuyến nghị và nguồn tham chiếu:** Mục 5.2 ghi rõ bạn đồng ý dùng "khuyến nghị" thay cho chữ "bắt buộc" trong câu trả lời CH-07 và CH-10. Nguồn tham chiếu:
   - NR-01 (loading): Nielsen heuristic 1, Visibility of system status.
   - NR-02 (dialog khi hủy đơn): Nielsen heuristic 5, Error prevention.
3. **Bỏ cụm "canh lề chuẩn xác":** Mục NR-03 bị xóa, nên mục 5.2 còn 2 mục. Câu trả lời CH-01 ở mục 4.1 và ghi chú của UI-R36 cũng bỏ cụm này.

Bảng "Thay đổi so với bản AI" đã có dòng cho cả 3 điểm. Không còn điểm nào ở trạng thái ⏳; các dấu ⏳ còn lại trong file chỉ nằm trong cột ghi trạng thái cũ của bảng thay đổi.

Còn một việc nhỏ: Trong bảng thay đổi có 3 điểm tôi tự đề xuất, đang chờ bạn xác nhận:
- Cách xếp nhóm màu cho các nút "Sign In", "Đăng Ký", "Cập nhật" và "Hủy đơn".
- GĐ-05: "EShop" là tên riêng, không xét theo UI-R31.
- UI-R27 vẫn kiểm thông báo hiển thị khi hệ thống từ chối thao tác hủy.

Nếu bạn đồng ý cả 3 thì không cần sửa gì, file đã sẵn sàng để commit (nhờ phiên điều phối xuất prompt log trước):

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/01_oracle.md
git commit -m "[T1][oracle] Review UI requirement extract"
```

Bước tiếp theo là `ai-draft` cho IA-01.
````

---

### C46 | 11:35 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Task 1: Tôi đã review và xong file 01_oracle.md. Nhờ bạn kiểm tra, xuất log và đưa tôi message commit trong lúc tôi review task 2.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check commits and diff of reviewed oracle
- Bash: Check open marks, separators, and sections 5 to 6
- Bash: Export log and update tracker and estimates

**Output AI (nguyên văn):**

````text
Kiểm tra bản AI đã được commit chưa, rồi xem phần bạn sửa trong `01_oracle.md`.

Bản review `01_oracle.md` dùng được để commit. Có một điểm (CH-09) bạn nên tự bấm thử trên trang trước khi sang bước `ai-draft`, xem cuối mục 1. Prompt log đã xuất lại: 46 lượt từ 3 phiên.

## 1. Kết quả kiểm tra

- **Không còn quyết định nào để ngỏ.** Mọi mục ⏳ của bản AI đã được chốt. Ký hiệu ⏳ chỉ còn ở dòng 25 (phần giải thích các giá trị của cột "Áp dụng") và trong bảng thay đổi, nơi nó mô tả trạng thái cũ, nên không sao.
- **Dấu "—" chỉ còn trong 5 câu trích nguyên văn SRS** (UI-R04, R11, R21, R25, R26). Quy ước cho phép giữ nguyên trong câu trích.
- **Phần đầu file** ghi rõ đây là bản review, AI cập nhật theo câu trả lời của bạn và bạn kiểm tra lại.
- **Bảng thay đổi có 19 dòng**, đủ cột theo WORKFLOW mục 2.2. Dòng nào cũng thuộc loại "Quyết định của SV". Điều này hợp lý: Bước oracle chỉ là trích SRS, các ⏳ là câu hỏi AI để lại cho bạn chọn, AI không trích sai hay sót. Cột "Vì sao AI bỏ sót" vì vậy để trống hết, và đó không phải lỗi.
- **Nhất quán:** Bảng tổng hợp mục 3 đã bỏ hết mục ⏳ và các mã chuyển sang "Không áp dụng" (R28, R49, R50). NR-01 và NR-02 ghi rõ là khuyến nghị, có nguồn Nielsen, đúng WORKFLOW mục 1.1.

**Điểm nên kiểm lại: CH-09 / UI-R41.** Bản review chốt là navbar không có mục nào dành cho `/profile`, nên ở W-06 mong đợi không có mục nào được highlight. Bạn thử bấm vào lời chào "Chào, <Họ Tên>" trên navbar khi đã đăng nhập:
- **Nếu lời chào dẫn tới `/profile`** thì nó chính là mục navbar của trang hồ sơ. Khi đó UI-R41 ở W-06 nên đổi thành "lời chào được highlight khi đang ở `/profile`".
- **Nếu không bấm được** thì giữ nguyên.

Lưu ý: Phiên điều phối này đã đọc mã nguồn hôm 05/11 (đã khai trong mục "Cần khai báo"). Vì vậy tôi chỉ nêu đây là chỗ bạn tự bấm thử để kiểm bằng mắt, không đưa kết luận. Nếu cần sửa thì sửa trước khi commit, hoặc nhờ phiên Task 1 sửa và thêm một dòng vào bảng thay đổi.

## 2. Lệnh commit

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/01_oracle.md prompt_log.md
git commit -m "[T1][oracle] Review UI requirement extract"
git push
```

Commit xong thì phiên Task 1 sang bước `[T1][ai-draft]`, mỗi lượt một IA. Bạn có thể cho nó chạy IA-01 trong lúc review scenario của Task 2.

## 3. Ước tính

Bước review oracle mất khoảng 2 giờ (09:23 tới 11:24), nhiều hơn mức 0,5 giờ tôi dự tính. Vì vậy tôi đã tăng thời gian cho các bước review còn lại. Tổng ước tính hiện là khoảng 39,75 giờ, chi tiết ở `_NOTES.md`.

⏱ Còn khoảng **39,75 giờ** làm việc | Còn **34 giờ 24 phút** tới mốc 22:00 10/11 | **49 giờ 24 phút** tới deadline 13:00 11/11
````

---

### C47 | 11:49 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Hãy chạy lại web để tôi bấm thử.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check which EShop servers are running
- Bash: Start EShop backend on port 3000
- Bash: Start EShop web frontend on port 5173
- Bash: Start EShop admin frontend on port 5174
- Bash: Wait for servers and verify test login

**Output AI (nguyên văn):**

````text
Cả 3 server đều đang tắt. Bật lại cả 3, không reset DB.

Web đã chạy lại, bạn bấm thử được rồi. Admin cũng đã bật.

- **Web:** `http://localhost:5173`
- **Đăng nhập:** `test@eshop.com` / `Test1234!` (đã kiểm tra đăng nhập được)
- **Admin:** `http://localhost:5174`

Cách thử cho CH-09:
1. Đăng nhập, rồi đứng ở một trang khác `/profile` (ví dụ trang chủ).
2. Di chuột vào lời chào "Chào, <Họ Tên>" trên navbar: Xem con trỏ có đổi thành bàn tay, chữ có gạch chân không.
3. Bấm vào lời chào: Xem có chuyển sang `/profile` không.
4. Nếu chuyển được, ở `/profile` xem lời chào có được làm nổi bật khác các mục còn lại không, và chụp lại nếu cần.

Lưu ý về dữ liệu: DB vẫn giữ danh mục "Bàn phím" và sản phẩm bạn tạo lúc chụp ảnh Task 2. Lịch sử đơn của `test@eshop.com` đang trống (5 đơn đã mất từ lần reset lúc 00:17). Lần này chỉ cần thử navbar nên không ảnh hưởng.

⏱ Còn khoảng **39,75 giờ** làm việc | Còn **34 giờ 10 phút** tới mốc 22:00 10/11 | **49 giờ 10 phút** tới deadline 13:00 11/11
````

---

### C48 | 12:25 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `f2487351`

**Prompt (nguyên văn):**

````text
Tôi muốn nói rõ phần này, khi nhấn vào <Chào,...> thì sẽ được chuyển vào profile như ảnh.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check status, save screenshot as survey_08, find navbar rows in survey
- Read: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\00_survey.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Edit: D:\Dang\Test\Homeworks\HW03\checklist\01_oracle.md
- Bash: Check for remaining stale statements about navbar profile item

**Output AI (nguyên văn):**

````text
Giờ sửa `01_oracle.md`: UI-R41, CH-09 và bảng thay đổi.

Tôi đã cập nhật cả hai file theo ảnh của bạn. Ảnh đã lưu vào repo thành `checklist/screenshots/survey_08_navbar_greeting_link.png`.

**Phần survey ([00_survey.md](Homeworks/HW03/checklist/00_survey.md)):**
- Thêm ảnh 08 vào danh sách ảnh, ghi rõ là chụp bổ sung ngày 09/11/2026.
- Mục 6 (navbar), dòng lời chào: Ghi rõ "Chào, <Họ Tên>" là link tới `/profile`. Khi rê chuột, chữ có gạch chân và thanh trạng thái hiện `localhost:5173/profile`.
- Mục 6, dòng "Đang ở `/profile`": Bỏ câu sai "navbar không có mục riêng cho trang hồ sơ". Thay bằng quan sát từ ảnh: Lúc không rê chuột, lời chào màu vàng, không gạch chân, trông giống hệt khi ở `/login` và `/register`.
- Ghi việc bổ sung này vào mục 7 và bảng đối chiếu ở mục 9.

**Phần oracle ([01_oracle.md](Homeworks/HW03/checklist/01_oracle.md)):**
- UI-R41 ở W-06 tách thành hai trường hợp:
  - Đã đăng nhập: Mong đợi lời chào được highlight, vì đây là mục navbar dẫn tới trang đang mở.
  - Chưa đăng nhập: Mong đợi không mục nào được highlight, vì khi đó navbar không có mục dẫn tới `/profile`.
- Mục 4.1, dòng CH-09: Ghi thêm việc bạn xác nhận lời chào là link.
- Bảng thay đổi có thêm một dòng loại **"Sai"**: Bản AI ghi navbar không có mục cho `/profile`, vì ảnh 01 đến 07 không cho thấy lời chào là link. Dòng này dùng được cho phần phân tích AI bỏ sót sau này.

**Cần bạn xác nhận:** Tôi áp dụng quy tắc CH-09 của bạn theo chiều ngược lại. Bạn nói nếu `/profile` không thuộc mục nào thì không highlight; nay `/profile` có mục là lời chào, nên mong đợi lời chào được highlight theo FR-23. Nếu bạn muốn giữ mong đợi "không mục nào được highlight" ở W-06 thì báo tôi.

Vì survey đã commit trước đó, nên commit phần sửa survey riêng (giữ tag `[T1][survey]` theo WORKFLOW 4.2), rồi mới commit bản review oracle. Nhờ phiên điều phối xuất prompt log trước:

```powershell
cd D:\Dang\Test\Homeworks\HW03
git add checklist/00_survey.md checklist/screenshots/survey_08_navbar_greeting_link.png
git commit -m "[T1][survey] Record navbar greeting link to profile"
git add checklist/01_oracle.md
git commit -m "[T1][oracle] Review UI requirement extract"
```
````

---

### C49 | 12:47 09/11/2026 | Tool: Claude Code (claude-opus-5-5) | Session `949bce7e`

**Prompt (nguyên văn):**

````text
Do có sự thay đổi nên tôi cần bạn kiểm tra, xuất lại log và đưa tôi commit message cho task 1.
````

**Thao tác AI đã thực hiện (đọc/ghi file, chạy lệnh):**

- Bash: Check status and CH-09/UI-R41 changes
- Bash: Show survey changes and full UI-R41 note
- Bash: Export log and recheck separators

**Output AI (nguyên văn):**

````text
(Không có phản hồi: Phiên bị dừng hoặc chưa hoàn tất)
````


<!-- CLAUDE-LOG:END -->

---

## 2. Công cụ khác

(Chưa có. Nếu dùng ChatGPT, Gemini hay công cụ AI khác, dán nguyên văn prompt và output vào đây theo mã `G##`, `M##`.)
