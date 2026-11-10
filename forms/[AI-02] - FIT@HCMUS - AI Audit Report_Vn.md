> Bản text-based của `[AI-02] - FIT@HCMUS - AI Audit Report_Vn.docx` (bản binary: .docx / .pdf cùng tên). ⏳ Bản .docx và .pdf tạo sau khi điền xong.

Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)

CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)

CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0

# AI Audit Report — Mẫu 5 mục cho mỗi Artifact

Phụ lục bắt buộc đính kèm cho mọi bài tập có dùng AI (HW#01–HW#06, Seminar).

Tài liệu được biên soạn lại từ Med Kharbach, PhD (2026) — Mẫu Chính sách Sử dụng AI cho Giáo dục Đại học. Giấy phép CC BY-NC-SA 4.0. Phiên bản này được FIT@HCMUS điều chỉnh cho môn CS423 / CSC15003 Kiểm chứng Phần mềm.

## 1. Thông tin Sinh viên

| Mục | Giá trị |
|---|---|
| Họ tên sinh viên (in hoa): | NGUYỄN THỊ ÁNH NGỌC |
| MSSV: | 23120061 |
| Lớp / Khoá: | Kiểm thử phần mềm - CQ2023/3 |
| Mã bài tập (ví dụ HW#00, HW#02): | HW03-AI |
| Ngày làm bài: | 05/11/2026 đến ⏳ |
| Công cụ AI đã dùng: | Claude Code (Anthropic, claude-opus-5-5) |
| Công cụ AI đã dùng: | [x] Có  [ ] Không |

## 2. Hướng dẫn (đọc trước khi điền)

- Thêm 1 hàng cho mỗi artifact AI sinh (test case, script, checklist, OpenAPI spec, JMeter plan…).

- Dán nguyên văn prompt — KHÔNG paraphrase.

- Dán nguyên văn output AI (hoặc kèm screenshot có chú thích trong báo cáo).

- Gắn nhãn: VALID / INVALID / INCOMPLETE.

- Lý do phải dẫn chiếu slide, mục ISTQB, hoặc RFC kỹ thuật.

- Hiển thị bản sửa với phần thay đổi được tô sáng.

- Hàng mẫu in nghiêng — thay trước khi nộp.

## 3. Bảng Audit — 1 hàng / artifact

Nguyên văn prompt và output: `prompt_log.md` (Phụ lục A), dẫn bằng mã `Cnn`; bản gốc của AI ở `ai_raw/` của từng task. Công cụ khai báo theo đề §8: Claude Code là công cụ AI duy nhất; BrowserStack Live (bản trial) cho nền tảng N2 của Task 3, ⏳ ngày dùng.

| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB) | (5) Bản SV sửa |
|---|---|---|---|---|
| B01: Phân tích đề, kế hoạch làm bài, tracker, `WORKFLOW.md`, README và issue template của repo nhóm <br> Claude Code, phiên điều phối `949bce7e`, C01 đến C11, 05/11/2026 đến 07/11/2026 | Tóm tắt yêu cầu của đề, danh sách việc và file nộp, quy trình từng task, quy tắc hộp đen, quy tắc `ai_raw/` và bảng thay đổi, quy ước commit và Issues của nhóm | INCOMPLETE | Kế hoạch ban đầu đã gợi ý sẵn nền tảng của Task 3 khi chưa tới bước đó (sinh viên hỏi lại ở C02); README nhóm có quy tắc mà đề không yêu cầu, "không dùng chung người tham gia giữa các thành viên" (sinh viên bỏ ở C08). AI đề xuất đổi luồng FL-05 vì chỉ 1 trong 7 người đã tuyển từng bán hàng (C04, C05); sinh viên giữ luồng và yêu cầu AI lập tiêu chí để tuyển lại (C06). Để kiểm tra màn hình và luồng có đi được không trước khi chọn gói, AI đã đọc mã nguồn EShop (web `App.jsx`, `Profile.jsx`, `Register.jsx`, `Login.jsx`, `Cart.jsx`; admin `App.jsx`; mobile `App.js`; `backend/database.js`), không dùng cho thiết kế checklist. README nhóm có câu "frontend web gọi API bằng `http://localhost:3000` ghi cố định" rút ra từ lần đọc này, phiên Task 3 dẫn lại ở `01_setup.md` mục 1 (không đổi lựa chọn nền tảng). AI cũng tải Google Sheet chia việc của nhóm để kiểm tra công thức | Sinh viên yêu cầu để các lựa chọn của bước sau thành quyết định mở (⏳) (C02), bỏ quy tắc đề không yêu cầu (C08), giữ luồng FL-05 và tuyển người theo 6 tiêu chí (C06) |
| B02: Script `tools/export_prompt_log.py`, `tools/seed_orders.py` <br> Phiên điều phối `949bce7e`: `export_prompt_log.py` tạo ở C04 (05/11/2026), thêm phiên vào danh sách trắng ở C14, C22, C69, C94, C181; `seed_orders.py` tạo ở C16 (08/11/2026) | `export_prompt_log.py`: Sửa từ bản HW02, chỉ đọc các phiên HW03 trong danh sách trắng, lọc ngữ cảnh do IDE và hệ thống tự chèn. `seed_orders.py`: Tạo qua API 5 đơn ở 5 trạng thái cho `test@eshop.com` và tài khoản `newuser@eshop.com` không có đơn | VALID | Log được xuất lại trước mỗi lần commit, sinh viên không yêu cầu sửa script; danh sách trắng có đủ 6 phiên HW03. `seed_orders.py` dùng cho mọi lần chạy N1, N3 (ĐK-01; ví dụ C104, C112, C133, C153, C165), ma trận trạng thái ở N1, N3 có đủ 5 trạng thái; sinh viên tự dẫn script này cho phiên Task 1 (C55) và tự chạy theo lệnh AI đưa (C155). Để viết script, AI đọc route backend (`server.js`, các route register, cart, checkout, cancel, admin status) theo yêu cầu của sinh viên (C16); không dùng cho thiết kế checklist | Giữ nguyên |
| B03: Script `tools/md_to_pdf.py`, `tools/docx_to_md.py` <br> Phiên điều phối, C04, 05/11/2026 | `md_to_pdf.py`: Sửa từ bản HW02, bỏ qua thư mục nhóm khi xuất PDF. `docx_to_md.py`: Chép nguyên từ HW02 | ⏳ | `md_to_pdf.py` chưa chạy trong HW03 (bước xuất PDF chưa làm), log chưa đủ để kết luận. `docx_to_md.py` chạy ở phiên Tổng hợp (C179) để đọc mẫu form: Dừng với lỗi `UnicodeEncodeError` sau file đầu tiên khi in chữ tiếng Việt ra console cp1252; chạy lại với `PYTHONIOENCODING=utf-8` thì tạo đủ 3 file | ⏳ |
| B04: T1 `survey` <br> Phiên Task 1 `f2487351`, C13, C21, C26, C30, 07/11/2026 đến 09/11/2026 | `ai_raw/T1_survey.md` (bảng quan sát trống); bảng quan sát AI điền từ 7 ảnh theo yêu cầu của sinh viên | INCOMPLETE | Bản AI điền từ ảnh ghi navbar không có mục dẫn tới `/profile`; ảnh tĩnh không cho thấy lời chào là link. Giờ chụp sinh viên ghi chưa khớp đồng hồ trong ảnh | Sinh viên chụp thêm `survey_08` (lời chào là link), điền phần ảnh không thấy (tiêu đề tab, ô mật khẩu, ô Email bị khóa); sửa giờ chụp |
| B05: T1 `oracle` <br> Phiên `f2487351`, C42, C44, C45, C48, 09/11/2026 | `ai_raw/T1_oracle.md`: 50 yêu cầu `UI-R01` đến `UI-R50`, ánh xạ IA và màn hình, 10 câu hỏi mở, 4 giả định | INCOMPLETE | 20 dòng thay đổi: 1 Sai (UI-R41, navbar không có mục cho `/profile`), 19 Quyết định của SV (CH-01 đến CH-10). Câu trả lời ban đầu của sinh viên dùng chữ "bắt buộc" cho mục ngoài SRS; AI đề xuất đổi thành khuyến nghị kèm nguồn, đúng WORKFLOW mục 1.1 | Sinh viên trả lời CH-01 đến CH-10, chốt CH-05 (checklist GUI không kiểm logic), NR-01, NR-02 là khuyến nghị; sửa UI-R41 theo `survey_08` |
| B06: T1 `ai-draft` IA-01 đến IA-04 <br> Phiên `f2487351`, C50 (IA-01, 12:52), C56 (IA-02 đến IA-04, 15:03), 09/11/2026 | `ai_raw/T1_draft_IA-01.md` đến `IA-04.md`: 109 mục, CHD-01 đến CHD-16 | INCOMPLETE | 6 Sai (định nghĩa highlight; ô `readonly` theo template trái chuẩn HTML ở CL-22; điều kiện "ngày lớn hơn 12" không tạo được ở CL-24; CL-55, CL-56 trái UI-R08), 19 Thừa (ý chức năng, mục trùng), 14 Mơ hồ, 2 Thiếu (CL-109, CL-110). IA-02 đến IA-04 làm trong một lượt theo yêu cầu của sinh viên, khác WORKFLOW mục 3.1.2 (AI đã nhắc). Ở C56, sinh viên dán kết quả DevTools của ô Email trước khi có checklist; AI ghi rõ là kết quả quá sớm và mục AI-02-21 được viết sau khi đã thấy đoạn này | Bỏ hoặc gộp 5 mục, tách 3 mục thành 6, sửa 49 mục; các sửa đổi ở `02_checklist.md` mục 9 |
| B07: T1 `review`, `add`: Lọc trước IA-02 đến IA-04, soạn `02_checklist.md`, kiểm mục SV thêm <br> Phiên `f2487351`, C55, C64, C65, C67, C68, C76, C78, C79, 09/11/2026 đến 10/11/2026 | Bảng lọc theo 5 tiêu chí sinh viên đặt; `02_checklist.md` (112 mục); góp ý định dạng và nguồn cho mục sinh viên thêm | VALID | Sinh viên đồng ý toàn bộ đề xuất tinh chỉnh (C65) và chọn phương án ở từng câu hỏi; góp ý ở C78 bắt được nguồn sinh viên ghi không có trong slide và cột "Vì sao AI bỏ sót" chưa theo 3 giá trị quy định | Sinh viên viết CL-109 đến CL-112, chọn giữ CL-111, CL-112 với Loại Quyết định của SV, chốt dark mode, RTL không thêm mục |
| B08: T1 `excel` <br> Phiên `f2487351`, C88, 10/11/2026 | `HW03_T1_GUI_Checklist.xlsx`: 5 sheet, 3 nhóm cột kết quả, danh sách chọn, tổng hợp tự đếm | VALID | Nội dung lấy nguyên từ `02_checklist.md`; dùng được cho cả 3 nền tảng | Sinh viên chọn định dạng tự thiết kế |
| B09: T1 `exec`: Script `devtools_check.js`, `n1_chrome_checklist.js`, `capture_screen.ps1` <br> Phiên `f2487351`, C91, C99, C105 đến C117, C129, C132, C149, 10/11/2026 | Script Console chỉ đọc trang (17 mục), script Playwright có `--dry-run`, chia nhóm mục (thêm nhóm H, I, J khi chụp bổ sung), script tự chụp toàn màn hình ở màn hình Failed đầu tiên của mỗi mục | INCOMPLETE | Phải chạy thử 2 lần để sửa selector và thời gian chờ (sinh viên cho phép AI chạy thử trên localhost, kết quả chạy thử không ghi vào Excel). AI xếp CL-34 vào "chạy tay" dù đo được bằng script, sinh viên hỏi lại mới thêm nhóm H (C129). Ảnh CL-109 có 2 cửa sổ Chrome chồng nhau do cách chụp (C121). Ở C149, AI tự chạy nhóm J trong cửa sổ của nó nên sinh viên không theo dõi được log; 3 ảnh thiếu lớp chữ đè, phải xóa và sinh viên chạy lại; AI đổi tên 2 ảnh cũ sang `_1` làm lệch tên ảnh trong Excel | Sinh viên đổi chỉ dừng ở màn hình Failed đầu tiên (C114), tự chụp toàn màn hình (C117), yêu cầu AI chỉ đưa lệnh, sinh viên tự chạy (C151), sửa tên ảnh trong Excel (C160); lần chạy thật do sinh viên ngồi máy |
| B10: Điền cột NT1 (T1 `exec`) và NT3 (T3 N3) <br> Phiên Task 1 `f2487351` (NT1): C121, C123, C127, C129, C131, C134, C135, C160; phiên Task 3 `99fcf7b9` (NT3): C180, C182, C184, C185, C187, C188, C191, C195, C196; 10/11/2026 | Kết quả, Notes, tên ảnh của 112 mục mỗi nền tảng từ log script và ảnh; ô ghi "(AI xem ảnh)" là AI tự nhìn ảnh để kết luận. NT3 qua 3 bản nháp `cross_platform/ai_raw/T3_android-chrome_manual.md`, `_v2`, `_v3`, rồi chép vào Excel cùng sheet Môi trường và Ma trận trạng thái | INCOMPLETE | Log không ghi lần nào sinh viên đổi một kết quả Passed / Failed do AI điền (NT3: Sinh viên review xong bản nháp và cho chép vào Excel ở C196). Các chỗ phải sửa nằm ở bằng chứng và cách chạy: Ảnh CL-109 của N1 có 2 cửa sổ chồng nhau, sinh viên hỏi lại và AI đề xuất chụp lại (C121); AI để CL-34 chạy tay dù đo được, sinh viên hỏi lại mới thêm nhóm H (C129); AI đổi tên 2 ảnh cũ làm lệch tên ảnh trong Excel, sinh viên phát hiện (C160); ở N3, AI hướng dẫn chạy tay CL-05, CL-105, sinh viên hỏi lại mới thêm nhóm I (C187); AI đòi ảnh CL-06 phải thấy URL dù danh sách tab của Chrome Android không hiện URL, sinh viên chỉ ra giới hạn này (C188). AI tự hỏi lại trước khi chốt CL-68, CL-69 (giỏ đã có hàng chưa, C180) và đề xuất CL-34 của N3 là Failed dù script đo W-03, W-04 là Passed, sinh viên chấp nhận (C184, C196) | Sinh viên chụp bổ sung 4 ảnh tay của N1 (C134, C135), 11 ảnh CL-33 và ảnh CL-06 của N3 (C184, C195), kiểm tay CL-48 của N3, yêu cầu dùng script cho CL-34, CL-05, CL-105 (C129, C187), sửa tên ảnh trong Excel (C160), xác nhận giỏ hàng cho CL-68, CL-69 (C182), giữ ảnh CL-06 dù mất thanh trạng thái vì vẫn là ảnh thật (C196) |
| B11: T1 `bugs`: Danh sách bug, `bug_report.md`, issue trên GitHub <br> Phiên `f2487351`, C147, C149, C152, C154, C163, C164, 10/11/2026 | Danh sách 33 bug gộp theo lỗi gốc, severity đề xuất, tìm trùng bằng `gh issue list`; AI tạo 33 issue (#33 đến #65) bằng `gh issue create`, chèn ảnh bằng `gh issue edit`, bình luận #18, #29 | VALID | AI dừng hỏi trước khi tạo issue vì issue trên repo nhóm không xóa được; tự chỉ ra 3 bug chưa có ảnh đúng lỗi. Sinh viên đồng ý cách gộp và severity đề xuất (C149, C154), không sửa | Sinh viên chọn báo thêm mục khuyến nghị có ảnh thấy rõ lỗi (C149), tải ảnh lên GitHub và dán link vào `bugs/image_links.txt`, chụp trang Issues đã lọc |
| B12: Phiên điều phối: Theo dõi tiến độ, chạy server, reset và tạo dữ liệu, soạn tin nhắn, ước tính thời gian, soát thao tác bị cấm <br> Phiên `949bce7e`, C12 đến C198, 07/11/2026 đến 10/11/2026 | Bảng trạng thái từng task, lệnh commit, tin nhắn cho các phiên thiết kế, reset DB và seed, hồ sơ phiên trống P1 đến P7, ước tính giờ còn lại, kiểm tra các phiên thiết kế không đọc file bị cấm | INCOMPLETE | Soát được thao tác bị cấm của các phiên thiết kế (C69, C94) và thêm đủ phiên vào danh sách trắng. Nhưng: Ước tính dư (7 phiên usability 9 giờ ở C81; phần Tổng hợp 6 giờ ở C139), sinh viên hỏi lại mới tính lại; cách tính thời gian phiên usability trái quyết định đã chốt (tính cả phần xin đồng ý dù đã chốt xin qua tin nhắn; tính phần điền SUS nối tiếp dù người khác vẫn làm nhiệm vụ được trong lúc đó, C82); `03_instruments.md` mục I5 ghi người tham gia điền SUS trên máy của sinh viên nên máy bị chiếm (C83); bảo sinh viên tự ghi thông tin trình duyệt, OS đã có ở Task 1 (C102); hướng dẫn số ảnh cần chụp khác phiên Task 1 (C130); đề xuất đẩy ảnh vào repo nhóm để chèn vào issue, sinh viên chỉ ra issue của thành viên khác có ảnh mà không cần đẩy lên repo (C137, C139); kết luận sai là server đã tắt, bật thêm server làm mất dữ liệu đơn hàng (C146); đưa lệnh commit cho thay đổi đã commit và nhầm trạng thái N3 (C148) | Sinh viên yêu cầu tính lại ước tính (C81, C139), sửa mục I5 của `03_instruments.md` cho người tham gia điền SUS bằng link (C83), AI tự điền thông tin máy (C102), chuyển sang kéo ảnh vào bình luận để lấy link (C144, C147), xin lệnh reset và seed để tự chạy (C155) |
| B13: T2 `plan`, `scenario`, `instruments` <br> Phiên Task 2 `de8fb2a8` | ⏳ | ⏳ | ⏳ | ⏳ |
| B14: T2 `pilot`, phiên P1 đến P7 (phần AI hỗ trợ, dữ liệu đã ẩn danh) <br> ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B15: T2 `score`, `analysis`, `bugs` <br> ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B16: T3 `setup`, `firefox_triage.md` <br> Phiên Task 3 `99fcf7b9` | ⏳ | ⏳ | ⏳ | ⏳ |
| B17: T3 script `n3_android_checklist.js` và lần chạy N3 <br> Phiên `f2487351`, `99fcf7b9` | ⏳ | ⏳ | ⏳ | ⏳ |
| B18: T3 N2, `compare`, `bugs` <br> ⏳ | ⏳ | ⏳ | ⏳ | ⏳ |
| B19: Agent Skill `gui-checklist`, `usability-evaluation` <br> Phiên Agent Skill `a498e700` | ⏳ | ⏳ | ⏳ | ⏳ |
| B20: Tổng hợp: `checklist/03_results.md`, khung `report.md`, README, form <br> Phiên Tổng hợp, 10/11/2026 | Tóm tắt kết quả N1 và bug, khung báo cáo, Test Summary, bản `.md` của [AI-02], [AI-03], [AI-05] | ⏳ | ⏳ | ⏳ |

## 4. Tổng kết Độ chính xác AI

Tổng hợp verdict từ Mục 3 và điền vào bảng dưới.

| Chỉ số | Số lượng | Tỉ lệ |
|---|---|---|
| Tổng artifact AI sinh đã audit | ⏳ | 100% |
| VALID (đúng, dùng nguyên) | ⏳ | ⏳ |
| INVALID (sai; loại bỏ) | ⏳ | ⏳ |
| INCOMPLETE (chấp nhận sau khi sửa) | ⏳ | ⏳ |

## 5. Kết luận — Khi nào nên / không nên dùng AI?

Viết 80–150 chữ mô tả pattern quan sát được. AI mạnh ở đâu? AI sai ở đâu? Khuyến nghị của bạn cho việc dùng AI trong loại công việc này?

⏳ Sinh viên viết.

## 6. Mandatory Disclosure (dán nguyên văn)

"Tôi dùng AI (Claude Code, Anthropic, claude-opus-5-5) cho các việc sau: Task 1: Lập bảng khảo sát và điền bảng quan sát từ ảnh tôi chụp, trích yêu cầu giao diện từ SRS, sinh bản đầu 109 mục checklist (bản gốc lưu nguyên văn trong `checklist/ai_raw/`), lọc trước các mục của IA-02 đến IA-04 theo tiêu chí tôi đặt, soạn `02_checklist.md` theo quyết định của tôi, kiểm định dạng và nguồn cho các mục tôi thêm, xuất file Excel, viết script Console chỉ đọc trang và script Playwright cho lần chạy, điền nháp kết quả từ log và ảnh, soạn bug report, tạo issue và chèn ảnh vào issue bằng `gh` theo danh sách tôi duyệt. Task 2: ⏳. Task 3: ⏳. Agent Skill: ⏳. Chung: Viết `WORKFLOW.md`, README và issue template của repo nhóm, các script trong `tools/`, khung báo cáo, README, các form và Appendix B. Một phiên Claude Code làm điều phối: Theo dõi tiến độ, chạy server EShop, reset và tạo dữ liệu, xuất prompt log, soát thao tác bị cấm. Tôi review và quyết định ở mọi bước (các bảng "Thay đổi so với bản AI" ghi đủ chỗ tôi sửa); tôi tự chụp ảnh khảo sát, tự viết các mục CL-109 đến CL-112, tự ngồi máy chạy checklist và chốt kết quả, tự tải ảnh lên GitHub, tự commit. ⏳ (Phần Task 2: Danh sách người tham gia, ghi chú quan sát, câu trả lời của người tham gia do tôi thực hiện, không đưa vào AI.) AI Audit Report chi tiết ở Appendix B."

## Chữ ký

| Họ tên sinh viên (in hoa): | NGUYỄN THỊ ÁNH NGỌC |
|---|---|
| MSSV: | 23120061 |
| Lớp / Khoá: | Kiểm thử phần mềm - CQ2023/3 |
| Môn học: | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Giảng viên: | Lâm Quang Vũ <br> Hồ Tuấn Thanh <br> Trương Phước Lộc |
| Ngày: | ⏳ |
| Chữ ký: | ⏳ |

## Tham khảo

- Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.

- ISTQB Foundation Level Syllabus (latest version).

- Hardman, P. (2025). A Post-AI Learning Taxonomy.

- Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.

- Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.

- Anthropic (2025). Building reliable AI test agents — engineering blog.

- DeepEval & Promptfoo documentation — testing frameworks for LLM systems.
