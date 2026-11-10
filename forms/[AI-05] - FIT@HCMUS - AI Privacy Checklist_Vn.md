> Bản text-based của `[AI-05] - FIT@HCMUS - AI Privacy Checklist_Vn.docx` (bản binary: .docx / .pdf cùng tên). ⏳ Bản .docx và .pdf tạo sau khi đánh dấu xong và ký.

Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)

CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)

CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0

# Bảng Kiểm Quyền Riêng tư & Sử dụng AI Có Trách nhiệm

Thực hiện bảng kiểm này TRƯỚC KHI nộp bất kỳ bài tập có dùng AI.

Tài liệu được biên soạn lại từ Med Kharbach, PhD (2026) — Mẫu Chính sách Sử dụng AI cho Giáo dục Đại học. Giấy phép CC BY-NC-SA 4.0. Phiên bản này được FIT@HCMUS điều chỉnh cho môn CS423 / CSC13003 Kiểm chứng Phần mềm.

## 1. Trước khi dùng AI

- [ ] ⏳ Đã xác nhận Cấp độ AI cho bài tập này.

- [ ] ⏳ Dùng tài khoản Claude Pro tự chọn (không phải tài khoản cá nhân).

- [ ] ⏳ Đã đọc Thoả thuận AI của môn học.

- [ ] ⏳ Hiểu rõ artifact nào KHÔNG được sinh bằng AI.

## 2. Trong khi dùng AI

- [ ] ⏳ Không nhập dữ liệu cá nhân của bạn, khách hàng, bệnh nhân.

- [ ] ⏳ Không paste nguyên si tài liệu có bản quyền lên AI.

- [ ] ⏳ Không paste code công ty / code open-source giới hạn license.

- [ ] ⏳ Đã ghi mọi prompt + phản hồi AI vào prompt_log.md có timestamp.

## 3. Trước khi nộp bài

- [ ] ⏳ Mọi artifact AI sinh đã được gắn tag trong AI Audit Report.

- [ ] ⏳ Mọi trích dẫn AI đã được xác minh (nguồn thực sự tồn tại).

- [ ] ⏳ Mọi code AI sinh đã được thực thi và test.

- [ ] ⏳ AI Critique 200–300 chữ đã có trong báo cáo.

- [ ] ⏳ Đoạn Mandatory Disclosure ở cuối báo cáo.

- [ ] ⏳ Đính kèm AI Use Disclosure Form.

- [ ] ⏳ Sẵn sàng cho vấn đáp ngẫu nhiên 5–7 phút tuần kế nộp bài.

## 4. Cam đoan Cuối cùng

Trách nhiệm cuối cùng về độ chính xác, tính nguyên bản, và liêm chính của bài nộp này thuộc về tôi. Mọi việc dùng AI không khai báo đều bị coi là vi phạm liêm chính học thuật.

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

---

## Căn cứ để sinh viên đánh dấu (xóa mục này trước khi nộp)

Các dòng dưới đây chỉ ghi sự kiện để sinh viên tự quyết từng ô; không phải câu trả lời.

| Ô | Sự kiện liên quan |
|---|---|
| Cấp độ AI | [AI-03] của HW01 và HW02 khai "Cấp 4 – AI hỗ trợ sản xuất"; ô Cấp độ AI của [AI-03] HW03 đang để ⏳ |
| Tài khoản Claude | Chưa có thông tin trong các file của bài |
| Thoả thuận AI | Mẫu [AI-01] nằm trong `Homeworks/AI Templates/` |
| Artifact không được sinh bằng AI | Đề §11: Danh sách 7 người tham gia, ảnh cross-platform. WORKFLOW mục 1.2 thêm: Ghi chú quan sát, câu trả lời của người tham gia, kết quả chạy checklist |
| Dữ liệu cá nhân | Họ tên, liên lạc, khuôn mặt, giọng nói của người tham gia không đưa vào AI (WORKFLOW mục 1.5; `participants.md` và video thuộc danh sách cấm đọc). Thông tin của chính sinh viên (họ tên, MSSV, email sinh viên) có đưa cho AI: Lớp chữ đè trên ảnh, người báo trong issue, AI xem ảnh chụp màn hình có lớp chữ đè (C123) |
| Tài liệu có bản quyền | AI đọc chữ trích từ slide môn học, template GUI checklist của môn và SRS của EShop để làm oracle và nguồn checklist |
| Code giới hạn license | Phiên điều phối đọc mã nguồn EShop (repo công khai của môn) ngày 05/11 để kiểm tra màn hình, và route backend ngày 08/11 để viết `seed_orders.py` (khai ở Appendix B, B01, B02) |
| Prompt log | `prompt_log.md` xuất tự động, có timestamp, gồm đủ 6 phiên HW03 trong danh sách trắng (cả phiên Tổng hợp `c934f0c0`); sinh viên xác nhận chỉ dùng Claude Code, không dùng công cụ AI nào khác |
| Trích dẫn đã xác minh | Ở C78, AI chỉ ra hai nguồn trong mục sinh viên thêm không có trong slide ("Mobile viewport layout", "Responsive Web Design"), đã sửa |
| Code AI sinh đã chạy | `seed_orders.py`, `devtools_check.js`, `n1_chrome_checklist.js`, `capture_screen.ps1` đã chạy trong lần chạy N1; `n3_android_checklist.js` đã chạy cho N3; `docx_to_md.py` chạy được khi đặt `PYTHONIOENCODING=utf-8` (Appendix B, B03); `md_to_pdf.py` chưa chạy; ⏳ script của Agent Skill |
| AI Critique, Disclosure, Disclosure Form | `report.md`: AI Critique ⏳; Mandatory Disclosure có bản nháp, còn ⏳ phần Task 2, Task 3, Skill; [AI-03] chưa ký |
