# HW03-AI: GUI & Usability on EShop (Software Testing 2026)

Sinh viên: Nguyễn Thị Ánh Ngọc
MSSV: 23120061

SUT: [EShop](https://github.com/ttbhanh/eshop-sut) (commit `85af3ba`)

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `report.md` / `report.pdf` | Báo cáo chính: GUI checklist, usability evaluation, cross-platform, Agent Skill, AI Critique, Disclosure, AI Audit Report |
| `prompt_log.md` / `.pdf` | Prompt log có timestamp |
| `checklist/` | GUI checklist: Bản AI nguyên văn (`ai_raw/`), bản đã review, file Excel, ảnh các mục Failed |
| `usability/` | Test plan, kịch bản, bộ công cụ (thang đo, câu hỏi), bảng người tham gia, hồ sơ từng phiên (`sessions/`), phân tích |
| `cross_platform/` | Kết quả và ảnh chụp trên từng nền tảng |
| `bugs/` | Bug report, liên kết tới GitHub Issues của nhóm, ảnh trang Issues |
| `skills/` | Agent Skill |
| `demo/` | Kết quả chạy Agent Skill trên màn hình / luồng khác, dùng cho video demo |
| `forms/` | [AI-02] Audit Report, [AI-03] Disclosure, [AI-05] Privacy Checklist |
| `tools/` | Script hỗ trợ (xuất prompt log, xuất PDF, ...) |
| `WORKFLOW.md` / `.pdf` | Quy trình làm bài: Các bước của từng task, nguyên tắc kiểm thử hộp đen, cách lưu bản AI và bảng "Thay đổi so với bản AI", riêng tư người tham gia |
| `git_log.txt` | Git commit log |

## Phạm vi đã chọn

| Task | Lựa chọn |
|---|---|
| Task 1: GUI checklist | Màn hình chính: Hồ sơ cá nhân & lịch sử đơn hàng (Web, `/profile`); màn hình phụ: Đăng ký (`/register`), Đăng nhập (`/login`) |
| Task 2: Usability | Luồng Web Admin: Đăng nhập Admin → Tạo danh mục → Thêm sản phẩm vào danh mục mới (7 người tham gia) |
| Task 3: Cross-platform | Checklist của Task 1 trên 3 nền tảng: N1 Chrome trên Windows (lần chạy của Task 1), N2 Firefox trên Windows (máy sinh viên; trial BrowserStack, LambdaTest không đủ thời gian), N3 Chrome trên điện thoại Android thật (`cross_platform/01_setup.md`) |

## Test Summary Report

### Tổng quan

| Chỉ số | Giá trị |
|---|---|
| Số màn hình (Task 1) | 3: W-06 Hồ sơ & lịch sử đơn hàng (chính), W-04 Đăng ký, W-03 Đăng nhập |
| Số luồng (Task 2) | 1: FL-05 Web Admin |
| Số mục checklist thiết kế | 112 (IA-01: 36, IA-02: 31, IA-03: 19, IA-04: 26); nguồn: AI 58, AI có SV sửa 49, SV thêm 5 |
| Số nền tảng (Task 3) | 3 (N1, N2, N3) |
| Số người tham gia (Task 2) | 7 (P1 đến P7) và 1 người pilot |
| Số bug | Task 1: 33 issue (#33 đến #65) và 2 bình luận vào issue đã có (#18, #29). Task 2: 2 issue (#66, #67). Task 3: 1 issue (#104, CL-11 trên Android Chrome); #53 của Task 1 cập nhật nguyên nhân |

### Kết quả chạy checklist theo nền tảng

"Đã chạy" là Passed + Failed; N/A là mục không áp dụng được trên nền tảng đó (ví dụ phím Tab, rê chuột trên điện thoại); "Không chạy được" là mục bị chặn bởi một lỗi khác hoặc thiếu thành phần cần kiểm. N/A và Không chạy được không tính vào Passed / Failed. Chi tiết N1: `checklist/03_results.md`; N3 và so sánh: `report.md` mục 4.

| Nền tảng | Thiết kế | Đã chạy | Passed | Failed | N/A | Không chạy được |
|---|---|---|---|---|---|---|
| N1: Chrome 156, Windows 11 (Task 1) | 112 | 105 | 51 | 54 | 0 | 7 |
| N2: Firefox 159, Windows 11 (máy cá nhân) | 112 | 104 | 51 | 53 | 0 | 8 |
| N3: Chrome 156 Android, Samsung SM-G998B (điện thoại thật) | 112 | 97 | 45 | 52 | 8 | 7 |

### Task 3 theo IA (N3)

| IA | Thiết kế | Đã chạy | Passed | Failed | N/A | Không chạy được |
|---|---|---|---|---|---|---|
| IA-01 Tiêu chuẩn giao diện chung | 36 | 31 | 14 | 17 | 5 | 0 |
| IA-02 Form | 31 | 27 | 13 | 14 | 0 | 4 |
| IA-03 Điều hướng | 19 | 16 | 9 | 7 | 2 | 1 |
| IA-04 Phản hồi và trạng thái | 26 | 23 | 9 | 14 | 1 | 2 |
| **Tổng** | **112** | **97** | **45** | **52** | **8** | **7** |

So với N1, 13 mục có kết quả khác: 8 mục thành N/A trên điện thoại (phím Tab, rê chuột, cửa sổ 1366 x 768); CL-11 (dấu phân cách số tiền), CL-33 (zoom 200%), CL-34 (Họ Tên dài) từ Passed thành Failed; CL-24 (định dạng ngày) từ Failed thành Passed.

### Task 1 theo IA (N1)

| IA | Thiết kế | Đã chạy | Passed | Failed | Không chạy được |
|---|---|---|---|---|---|
| IA-01 Tiêu chuẩn giao diện chung | 36 | 36 | 19 | 17 | 0 |
| IA-02 Form | 31 | 27 | 13 | 14 | 4 |
| IA-03 Điều hướng | 19 | 18 | 10 | 8 | 1 |
| IA-04 Phản hồi và trạng thái | 26 | 24 | 9 | 15 | 2 |
| **Tổng** | **112** | **105** | **51** | **54** | **7** |

### Bug

| Task | Issue | Critical | High | Medium | Low |
|---|---|---|---|---|---|
| Task 1 | 33 (#33 đến #65) | 1 | 2 | 9 | 21 |
| Task 2 | 2 (#66, #67) | 1 | 0 | 1 | 0 |
| Task 3 | 1 (#104) | 0 | 0 | 0 | 1 |

### Task 2: Usability

| Chỉ số | Giá trị |
|---|---|
| Thang đo | SUS |
| Điểm SUS trung bình (độ lệch chuẩn) | 61,25 (14,73), n = 6; P7 không điền vì phiên dừng ở M1 |
| Số người hoàn thành nhiệm vụ | 3 / 7 tự hoàn thành (P2, P3, P6); không ai hoàn thành nhờ can thiệp |
| Thời gian toàn luồng trung bình | 01:50 (chuẩn 02:18.75), n = 6 |
| Số finding theo severity | 9: 1 critical, 6 medium, 2 low; trong đó 2 bug lên Issues (#66 medium, #67 critical), 7 vấn đề thiết kế |
| Video phiên | 8 video quay màn hình (pilot và P1 đến P7, khoảng 1,7 GB) trên Google Drive vì vượt giới hạn dung lượng Moodle: https://drive.google.com/drive/folders/1F3yh5FepAw1AIM6zg_cOZecwqOl_TKtI?usp=sharing |

## Video demo

| Nội dung | Link |
|---|---|
| Agent Skill `gui-checklist`: Chạy trọn từ `survey` tới `excel` trên màn hình Web Admin A-01 "Quản lý Danh mục" (kết quả ở `demo/gui-checklist/`) | https://youtu.be/_7iWiIJfpMw |

## Self-Assessment

| No. | Criteria | Grade | Self-Assessed Grade |
|---|---|---|---|
| 1 | Task 1: GUI Checklist (design + execution + bug report) | 30 | 30 |
| 2 | Task 2: Usability Evaluation (task scenario + 7 sessions + analysis) | 40 | 40 |
| 3 | Task 3: Cross-Browser / Cross-Platform (≥ 3 platforms) | 20 | 20 |
| 4 | Agent Skills | 10 | 10 |
| | **Total** | **100** | **100** |
