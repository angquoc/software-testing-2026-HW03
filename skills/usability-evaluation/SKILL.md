---
name: usability-evaluation
description: Thiết kế usability evaluation có người điều phối (moderated) cho một luồng end-to-end, đi từng bước plan (test plan 9 phần theo slide S13, sau khi có ảnh khảo sát luồng), scenario (kịch bản dạng mục tiêu, phiếu dữ liệu, trạng thái ban đầu, tiêu chí hoàn thành, thời gian chuẩn, can thiệp), instruments (danh sách chuẩn bị, xin đồng ý, lời dặn think-aloud, phiếu thông tin, phiếu ghi chú quan sát có mã sự kiện, thang đo SUS hoặc UEQ-S, câu hỏi mở về clarity, error recovery, speed, trust), pilot (chuẩn bị hồ sơ phiên thử, đọc kết quả pilot đã ẩn danh, đề xuất và áp các chỗ sửa sau pilot vào kịch bản, bộ công cụ, test plan). Lưu nguyên văn bản AI vào ai_raw/, dừng chờ sinh viên review, viết bản review có bảng "Thay đổi so với bản AI". Bảo vệ riêng tư người tham gia, không bịa dữ liệu của người thật. Dùng khi người dùng nói "usability test", "usability evaluation", "đánh giá khả dụng", "test plan usability", "kịch bản nhiệm vụ", "task scenario", "SUS", "UEQ-S", "think-aloud", "câu hỏi probe", "làm plan (scenario, instruments) cho luồng", "pilot", "sửa sau pilot", kể cả khi chỉ đưa thư mục usability và bảo "làm bước tiếp theo". Các bước participants, phiên thật, score, analysis mới có khung. Không dùng cho GUI checklist (dùng skill gui-checklist).
---

# Thiết kế usability evaluation

Skill này dẫn AI đi qua phần thiết kế của một usability evaluation **từng bước một**: Test plan, kịch bản nhiệm vụ, bộ công cụ cho phiên. Sinh viên review và quyết định ở mọi bước; mọi output của AI được giữ nguyên văn cho AI Audit Report và AI Critique. Những gì do **người thật** làm (danh sách người tham gia, ghi chú quan sát, câu trả lời thang đo, câu trả lời phỏng vấn) AI không được tạo hay bịa.

Quy trình được rút từ lần làm thật đầu tiên: HW03 Task 2 trên EShop, luồng FL-05 (Web Admin): Đăng nhập Admin, tạo danh mục, thêm sản phẩm vào danh mục mới, 7 người tham gia là người bán hàng online. Những lỗi AI đã mắc ở lần đó được ghi trong `references/lessons.md`; đọc nó trước khi giao bất kỳ bước nào.

## Phạm vi

| Bước | Nội dung | Ai làm | Trạng thái trong skill |
|---|---|---|---|
| `plan` | Pha 0: Ảnh khảo sát luồng. Test plan 9 phần: Mục đích, câu hỏi, mục tiêu và nhiệm vụ, chân dung người dùng, phương pháp, môi trường, vai trò người điều phối, số liệu, nội dung báo cáo | Sinh viên chụp ảnh; AI đề xuất, sinh viên review | Đầy đủ |
| `scenario` | Kịch bản dạng mục tiêu, phiếu dữ liệu, trạng thái ban đầu, thành phần nhiệm vụ, thời gian chuẩn, can thiệp, tình huống đặc biệt | AI đề xuất, sinh viên review; sinh viên tự đo thời gian | Đầy đủ |
| `instruments` | Danh sách chuẩn bị, xin đồng ý và lời dặn, phiếu thông tin, phiếu ghi chú, thang đo, câu hỏi mở, lời kết | AI đề xuất, sinh viên review | Đầy đủ |
| `participants` | Bảng người tham gia | **Sinh viên**, không đưa vào AI | Khung, bổ sung sau |
| `pilot` | Phiên thử; sửa kịch bản, công cụ, test plan theo kết quả | **Sinh viên** chạy và ghi; AI chuẩn bị mẫu trống, đọc hồ sơ đã ẩn danh, đề xuất sửa; sinh viên chốt | Đầy đủ |
| `P1` đến `Pn` | Từng phiên | **Sinh viên** | Khung, bổ sung sau |
| `score`, `analysis`, `bugs` | Tính điểm, gom phát hiện, báo bug | Sinh viên, AI hỗ trợ trên dữ liệu đã ẩn danh | Khung, bổ sung sau |

## Bước 0: Xác định ngữ cảnh (đầu mỗi phiên)

1. **Đọc quy trình của dự án** (`WORKFLOW.md` hoặc tương tự) trước tiên. Quy tắc của dự án ưu tiên hơn mặc định của skill.
2. **Xác định**, hỏi người dùng nếu chưa rõ:
   - **Thư mục làm việc.** Mặc định `usability/`. Làm cho luồng khác với lần trước (ví dụ để demo) thì dùng thư mục riêng do sinh viên chỉ định (HW03: `demo/usability-evaluation/`, xem `demo/README.md`), và không đọc thư mục của lần làm trước. **Không ghi đè** file của lần làm khác.
   - Luồng: Mã, tên, các chặng, nền tảng, URL hoặc đường vào, vai trò đăng nhập.
   - Yêu cầu của đề: Số người tham gia, thang đo cho phép, khía cạnh câu hỏi mở tối thiểu, có pilot không.
   - Tiêu chí người tham gia mà dự án đã chốt (nếu có).
   - Vị trí đặc tả (SRS); danh sách file được và không được đọc; **file chứa thông tin cá nhân của người tham gia** (không bao giờ đọc).
   - Tiền tố tên file trong `ai_raw/` (mặc định `T2_`).
3. **Xác định bước hiện tại** từ các file trong thư mục làm việc:

   | Đã có | Bước tiếp theo |
   |---|---|
   | Chưa có ảnh luồng trong `screenshots/` | `plan` pha 0 (danh sách ảnh cần chụp) |
   | Có ảnh, chưa có `ai_raw/T2_plan.md` | `plan` |
   | `ai_raw/T2_plan.md`, chưa có `01_test_plan.md` | Chờ sinh viên review plan |
   | `01_test_plan.md` | `scenario` |
   | `ai_raw/T2_scenario.md`, chưa có `02_scenario.md` | Chờ sinh viên review kịch bản |
   | `02_scenario.md` | `instruments` |
   | `ai_raw/T2_instruments.md`, chưa có `03_instruments.md` | Chờ sinh viên review công cụ |
   | `03_instruments.md`, chưa có `pilot/` | `pilot` pha 1 (mẫu hồ sơ pilot) |
   | `pilot/` có mẫu, chưa điền | Chờ sinh viên chạy pilot |
   | `pilot/notes.md` đã điền, các mục "Cần kiểm ở pilot" chưa dẫn tới kết quả pilot | `pilot` pha 3 (đề xuất sửa) |
   | Đã sửa sau pilot | Bước của người thật (`references/step-later.md`) |

4. **Bắt đầu từ giữa chừng:** Rà các bản đã có theo mục "Rà bước trước" ở `references/rules.md`, báo cho sinh viên những gì thiếu, không tự viết lại.
5. **Nạp tài liệu:** Luôn đọc `references/rules.md` và `references/lessons.md`; đọc `references/step-<bước>.md` của bước sắp làm.

## Quy tắc cứng

Chi tiết ở `references/rules.md`. Tóm tắt:

- **Riêng tư người tham gia.** Không đọc file danh sách người tham gia, video, ghi âm, ảnh chưa che mặt. Mọi file AI viết hay đọc chỉ dùng mã `P1` đến `Pn` (và `PL` cho người pilot). Chạy `check_usability.py privacy` trước khi giao.
- **Không bịa dữ liệu của người thật.** Danh sách người tham gia, ghi chú quan sát, câu trả lời thang đo và phỏng vấn, thời gian đo được, kết quả phiên chỉ đến từ sinh viên. AI chỉ đưa mẫu trống.
- **Hộp đen.** Căn cứ là đặc tả, ảnh luồng do sinh viên chụp và những gì sinh viên tự thử rồi mô tả. Không đọc mã nguồn, không tự mở giao diện.
- **Có ảnh luồng trước khi viết plan.** Thiếu ảnh thì liệt kê ảnh cần chụp và dừng.
- **Mỗi lượt một bước**, xong thì dừng chờ sinh viên.
- **Không bao giờ sửa hay ghi đè file trong `ai_raw/`** sau khi đã giao; bản làm lại lưu `_v2`, `_v3`.
- **Quyết định để mở:** Mỗi điểm cần sinh viên chọn có mã `QĐn`, các phương án đánh chữ cái và dấu `⏳`. AI không chọn thay. Điểm thuộc bước chưa làm (ví dụ thang severity ở `analysis`) giữ `⏳` và ghi bước sẽ chốt.
- **Số liệu chưa có căn cứ** (thời gian chuẩn, ngưỡng can thiệp) ghi rõ là đề xuất chưa đo, kèm cách đo.
- **Bản review** có bảng "Thay đổi so với bản AI" (5 giá trị Loại, cột "Vì sao AI bỏ sót"); ghi rõ người phát hiện; không đoán.
- **AI không tự commit.** Chỉ đưa commit message và lệnh.
- **Văn bản** tiếng Việt; giữ nguyên chữ trên giao diện; không dùng dấu "—" và "·"; chữ đầu sau dấu ":" viết hoa.

## Vòng lặp cho mỗi bước

**Pha A: Chuẩn bị.** Đọc bản review của mọi bước trước (quyết định `QĐ` đã chốt, ⏳ còn mở, mục "Cần kiểm ở pilot"). Xem mục "Hỏi trước khi viết" của bước; quyết định ảnh hưởng tới cấu trúc cả bản thì hỏi trước.

**Pha B: Viết bản AI.** Viết `ai_raw/T2_<bước>.md` theo mẫu trong `assets/templates/`. Mỗi bản có mục "Tổng hợp các quyết định để mở ⏳" và mục "Cần kiểm ở pilot" (từ `scenario` trở đi). Tự kiểm bằng `scripts/check_usability.py` và checklist của bước trong `lessons.md`.

**Pha C: Dừng.** Báo sinh viên: Tóm tắt ngắn, các quyết định cần chọn, commit message. Dừng.

**Pha D: Viết bản review.** Áp quyết định và câu hỏi của sinh viên; kiểm mâu thuẫn với các bước trước; cập nhật trạng thái quyết định ở cả bước trước nếu bước này chốt điểm bước trước để mở; viết bản review đầy đủ, kết thúc bằng bảng thay đổi. Chạy lại script, đưa commit message. Dừng.

## Tóm tắt các bước

| Bước | Việc chính | Đầu ra | Hướng dẫn |
|---|---|---|---|
| `plan` | Pha 0: Danh sách ảnh luồng, chờ ảnh. Test plan 9 phần, câu hỏi `Qn` gắn khía cạnh probe, mục tiêu `On`, chặng `Mn`, số liệu `Dn`, giả định đối chiếu ảnh `Gn`, rủi ro | `screenshots/flow_*.png`, `ai_raw/T2_plan.md`, `01_test_plan.md` | `references/step-plan.md` |
| `scenario` | Kịch bản mục tiêu, phiếu dữ liệu, trạng thái ban đầu, thành phần nhiệm vụ, cách đo thời gian chuẩn, mốc `Tn`, can thiệp, tình huống đặc biệt, trình tự | `ai_raw/T2_scenario.md`, `02_scenario.md` | `references/step-scenario.md` |
| `instruments` | `I1` đến `I7`: Chuẩn bị, đồng ý và lời dặn, phiếu thông tin, phiếu ghi chú và mã sự kiện, thang đo, câu hỏi mở `Cn`, lời kết | `ai_raw/T2_instruments.md`, `03_instruments.md` | `references/step-instruments.md` |
| `pilot` | Mẫu hồ sơ pilot có bảng "Kết quả kiểm bộ công cụ"; sinh viên chạy và ghi; AI kiểm hồ sơ, đề xuất sửa có tính sẵn con số; áp vào 3 bản review | `pilot/notes.md`, `probe.md`, `scale.md`; cập nhật `01`, `02`, `03` | `references/step-pilot.md` |
| Các bước còn lại | Khung, bổ sung sau | | `references/step-later.md` |

## Điểm dừng chờ sinh viên

- `plan` pha 0: Khi chưa có hoặc chưa đủ ảnh luồng.
- Trước khi viết bản AI, nếu có quyết định ảnh hưởng tới cấu trúc cả bản.
- Sau bản AI của mỗi bước; sau bản review của mỗi bước.
- Khi một số liệu cần sinh viên tự đo hoặc tự thử (thời gian chuẩn, hành vi của một ô nhập).
- `pilot`: Sau khi chuẩn bị mẫu (chờ sinh viên chạy); sau bảng đề xuất sửa (chờ chốt); sau khi cập nhật 3 bản review.
- Mọi bước của người thật.

## Tài nguyên

- `references/rules.md`: Nguồn được đọc và không được đọc, riêng tư, hộp đen, tên file và mã, `ai_raw/`, bản review, bảng thay đổi, quyết định để mở, commit, định dạng, rà bước trước.
- `references/lessons.md`: Checklist tự kiểm theo từng bước, rút từ lỗi đã gặp.
- `references/step-plan.md`, `step-scenario.md`, `step-instruments.md`, `step-pilot.md`: Hướng dẫn chi tiết.
- `references/step-later.md`: Khung các bước của người thật và quyết định còn mở.
- `references/example-fl05.md`: Ví dụ rút gọn từ lần làm đầu.
- `assets/templates/`: Mẫu `ai_raw_header.md`, `plan.md`, `scenario.md`, `instruments.md`, `changes_table.md`.
- `scripts/check_usability.py`: Kiểm tra máy móc (không đánh giá nội dung). Cách dùng:

  ```bash
  python -I <skill>/scripts/check_usability.py format <file>...     # dấu "—", "·" ngoài phần trích dẫn
  python -I <skill>/scripts/check_usability.py changes <file>...    # cột Loại, cột "Vì sao AI bỏ sót"
  python -I <skill>/scripts/check_usability.py ids <file>...        # mã Q, O, M, D, C, QĐ... trùng trong file
  python -I <skill>/scripts/check_usability.py open <file>...       # liệt kê quyết định còn ⏳
  python -I <skill>/scripts/check_usability.py privacy <file>... [--allow-domain eshop.com]
                                                                    # số điện thoại chưa che, email lạ
  ```
