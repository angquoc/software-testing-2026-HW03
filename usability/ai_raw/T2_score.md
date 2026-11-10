# T2 score: Điểm thang đo và số liệu hiệu suất luồng FL-05 (bản AI)

- Bước: `[T2][score]`
- Thời gian tạo: 2026-11-11 01:45
- Công cụ: Claude Code (Claude Opus 5.5)
- Dữ liệu: `sessions/P1/` đến `sessions/P7/` (`notes.md`, `scale.md`, `probe.md`), chỉ mã P1 đến P7; không dùng pilot `PL`; không đọc `participants.md`, video
- Script: `tools/score_t2.py` (SUS, thời gian, đếm mã sự kiện); các bảng D1, D4, D6, D7 tổng hợp tay từ `notes.md` mục 2, 4, 6

---

## 0. Cách làm

| Mục | Cách làm |
|---|---|
| SUS (D8) | Brooke (1996), `03_instruments.md` mục I5: Câu lẻ = câu trả lời − 1; câu chẵn = 5 − câu trả lời; SUS = tổng × 2,5. Tính bằng `tools/score_t2.py` từ dòng "Câu trả lời" của `scale.md` |
| Thời gian (D2) | Theo mốc video ở `notes.md` mục 3: M1 = T1 − T0, M2 = T2 − T1, M3 = T3 − T2, toàn luồng = T4 − T0, tự kiểm tra = T4 − T3. Độ lệch chuẩn là độ lệch chuẩn mẫu. Thời gian chuẩn ×3 (`02_scenario.md` mục 4.4): M1 00:21.09, M2 00:48.57, M3 01:00.84, toàn luồng 02:18.75 |
| Đếm mã sự kiện (D3, D5, D7) | Đếm mã trong cột "Mã" của nhật ký sự kiện (`notes.md` mục 5); mỗi dòng nhật ký đếm một lần cho mỗi mã |
| Hình thức phiên | Cả 7 phiên trực tiếp, cùng một máy (Chrome 156, Windows 11, chuột). Không phiên nào có âm thanh, lời nói ghi tay. Không có phiên từ xa nên không cần đánh dấu riêng (test plan mục 8.4) |
| Thời lượng phiên | Tính từ lúc bật quay: Gồm làm nhiệm vụ, điền form SUS, câu hỏi mở. Phần mở đầu đã gửi qua tin nhắn trước phiên (tại phiên chỉ hỏi lại một câu xác nhận đồng ý); phiếu thông tin (I3) điền trước khi quay |

## 1. Người tham gia (I3, phần B)

| Mã | Tuổi (B1) | Công việc (B2) | Kênh bán (B3) | Số sản phẩm đã đăng (B4) | Đã dùng trang quản trị bán hàng (B5) | Quen máy tính 1 đến 5 (B6) | Thiết bị đăng sản phẩm (B7) |
|---|---|---|---|---|---|---|---|
| P1 | 18 đến 24 | Sinh viên | Mạng xã hội | Dưới 10 | Chưa | 5 | Cả hai |
| P2 | 18 đến 24 | Sinh viên | Mạng xã hội | Dưới 10 | Chưa | 4 | Cả hai |
| P3 | 18 đến 24 | Sinh viên | Mạng xã hội | Dưới 10 | Chưa | 4 | Cả hai |
| P4 | 18 đến 24 | Sinh viên | Mạng xã hội | Dưới 10 | Chưa | 5 | Cả hai |
| P5 | 18 đến 24 | Sinh viên | Mạng xã hội | 10 đến 50 | Chưa | 4 | Cả hai |
| P6 | 18 đến 24 | Sinh viên | Mạng xã hội | Dưới 10 | Chưa | 4 | Cả hai |
| P7 | 25 đến 34 | Khác: Nội trợ | Sàn TMĐT, mạng xã hội | 51 đến 200 | Chưa | 3 | Cả hai |

Tóm tắt: 6 trên 7 người là sinh viên 18 đến 24 tuổi, bán qua mạng xã hội, đã đăng dưới 50 sản phẩm, tự đánh giá quen máy tính 4 hoặc 5. Chỉ P7 khác nhóm (25 đến 34 tuổi, nội trợ, bán cả trên sàn TMĐT, đã đăng 51 đến 200 sản phẩm, quen máy tính mức 3). Không ai từng dùng trang quản trị bán hàng (B5). Cả 7 người đều đạt A1 đến A4.

## 2. Kết quả theo chặng (D1) và can thiệp (D4)

| Mã | M1 Đăng nhập | M2 Tạo danh mục | M3 Đăng sản phẩm | Toàn luồng | Can thiệp được tính (D4) | Ghi chú |
|---|---|---|---|---|---|---|
| P1 | Tự HT | Tự HT | Không HT | Không HT | 2 (`CT1` lúc 01:24 ở M3, `CT1` lúc 01:47 sau T3) | Giá thiếu một chữ số 0; sản phẩm ở danh mục "Điện thoại" |
| P2 | Tự HT | Tự HT | Tự HT | **Tự HT** | 0 | |
| P3 | Tự HT | Tự HT | Tự HT | **Tự HT** | 0 | |
| P4 | Tự HT | Tự HT | Không HT | Không HT | 0 | Bỏ cuộc lúc 02:18 vì bảng không hiện ảnh (bug #67) |
| P5 | Tự HT | Tự HT | Không HT | Không HT | 0 | Sản phẩm ở danh mục "Điện thoại" |
| P6 | Tự HT | Tự HT | Tự HT | **Tự HT** | 0 | |
| P7 | Không HT | Không HT (chưa bắt đầu) | Không HT (chưa bắt đầu) | Không HT | 0 | Không đăng nhập được; người điều phối dừng phiên ở M1 |

HT: Hoàn thành.

| Chỉ số | Kết quả |
|---|---|
| Tự hoàn thành toàn luồng | 3/7 (43%): P2, P3, P6 |
| Hoàn thành kể cả nhờ can thiệp | 3/7 (43%); không ai hoàn thành nhờ can thiệp (P1 có 2 lần `CT1` nhưng vẫn không hoàn thành) |
| Hoàn thành trong thời gian chuẩn (toàn luồng ≤ 02:18.75) | 2/7 (29%): P3, P6. P2 tự hoàn thành nhưng vượt chuẩn 0,25 giây (nhỏ hơn sai số của mốc ghi theo giây) |
| Tự hoàn thành từng chặng | M1 6/7 (86%); M2 6/7 (86%), tức 6/6 người tới được M2; M3 3/7 (43%), tức 3/6 người tới được M3 |
| Tổng số can thiệp được tính | 2 (cả hai ở P1) |

Chặng thất bại nhiều nhất là M3: 3 trên 6 người tới được M3 không hoàn thành (P1, P5 sai danh mục; P1 sai giá; P4 bỏ cuộc).

## 3. Thời gian (D2)

| Mã | T0 | T1 | T2 | T3 | T4 | M1 | M2 | M3 | Toàn luồng | Tự kiểm tra |
|---|---|---|---|---|---|---|---|---|---|---|
| P1 | 00:16 | 00:30 | 01:10 | 01:43 | 02:01 | 00:14 | 00:40 | 00:33 | 01:45 | 00:18 |
| P2 | 00:34 | 00:58 | 01:35 | 02:45 | 02:53 | 00:24 | 00:37 | 01:10 | 02:19 | 00:08 |
| P3 | 00:23 | 00:43 | 01:00 | 01:35 | 01:45 | 00:20 | 00:17 | 00:35 | 01:22 | 00:10 |
| P4 | 00:09 | 00:25 | 00:47 | 02:18 | 02:18 (dừng) | 00:16 | 00:22 | 01:31 | 02:09 | Không áp dụng (bỏ cuộc) |
| P5 | 00:10 | 00:24 | 00:58 | 01:58 | 02:04 | 00:14 | 00:34 | 01:00 | 01:54 | 00:06 |
| P6 | 00:17 | 00:26 | 00:56 | 01:30 | 01:46 | 00:09 | 00:30 | 00:34 | 01:29 | 00:16 |
| P7 | 00:10 | Không có | Không có | Không có | Không có | Không có | Không có | Không có | Không có | Không có |

**Cách 1: Mọi người tới được mốc cuối của chặng** (gồm cả người làm sai dữ liệu hoặc bỏ cuộc):

| Chặng | Chuẩn | n | Trung bình | Trung vị | Min | Max | Độ lệch chuẩn | Vượt chuẩn |
|---|---|---|---|---|---|---|---|---|
| M1 | 00:21.09 | 6 | 00:16 | 00:15 | 00:09 | 00:24 | 5,2 giây | P2 |
| M2 | 00:48.57 | 6 | 00:30 | 00:32 | 00:17 | 00:40 | 8,9 giây | Không ai |
| M3 | 01:00.84 | 6 | 00:54 | 00:48 | 00:33 | 01:31 | 23,9 giây | P2, P4 |
| Toàn luồng | 02:18.75 | 6 | 01:50 | 01:50 | 01:22 | 02:19 | 22,2 giây | P2 |

**Cách 2: Chỉ người tự hoàn thành toàn luồng** (P2, P3, P6; tính tay từ bảng trên):

| Chặng | n | Trung bình | Trung vị | Min | Max |
|---|---|---|---|---|---|
| M1 | 3 | 00:18 | 00:20 | 00:09 | 00:24 |
| M2 | 3 | 00:28 | 00:30 | 00:17 | 00:37 |
| M3 | 3 | 00:46 | 00:35 | 00:34 | 01:10 |
| Toàn luồng | 3 | 01:43 | 01:29 | 01:22 | 02:19 |

Nhận xét số liệu:

- Thời gian không phải vấn đề chính: Mọi chặng có trung bình dưới chuẩn. Người làm nhanh lại hay sai (P1 nhanh nhất ở M3, 00:33, nhưng sai giá và danh mục), còn người tự hoàn thành chậm hơn do đọc lại kịch bản (P2).
- M3 dao động nhiều nhất (độ lệch chuẩn 23,9 giây), do P4 mất 01:31 vì sửa ảnh ba lần (bug #67).
- Phần lớn thời gian thêm ở M2 và M3 là lúc mở lại kịch bản đọc (xem D5).

⏳ QĐ-S1: Báo cáo thời gian chính theo cách nào: (a) Cách 1, (b) Cách 2, (c) Cả hai (cách 1 làm số chính, cách 2 làm số phụ).

## 4. Lỗi theo loại (D3)

Đếm từ `notes.md` mục 5 bằng `tools/score_t2.py`. Mã theo `03_instruments.md` I4.5.

| Mã | (a) `La` Bấm sai chỗ | (b) `Lb` Hệ thống báo lỗi | (c) `Lc` Lưu sai danh mục | (d) `Ld` Giá sai | (e) `Le` Làm lại thao tác | Tổng |
|---|---|---|---|---|---|---|
| P1 | 1 | 0 | 1 | 1 | 1 | 4 |
| P2 | 0 | 0 | 0 | 0 | 0 | 0 |
| P3 | 0 | 0 | 0 | 0 | 0 | 0 |
| P4 | 1 | 0 | 1 | 0 | 4 | 6 |
| P5 | 0 | 0 | 1 | 0 | 0 | 1 |
| P6 | 1 | 0 | 0 | 0 | 0 | 1 |
| P7 | 0 | 3 | 0 | 0 | 2 | 5 |
| Tổng | 3 | 3 | 3 | 1 | 7 | 17 |
| Số người | 3 | 1 | 3 | 1 | 3 | 5 |

Chi tiết từng loại:

- (a) `La`: P1 (00:48) và P4 (00:40) bấm "Thêm mới" khi ô tên danh mục còn trống, tạo ra dòng không tên (bug #66); P6 rời trang sản phẩm sang "Mã giảm giá" vì không hiểu khối "Import sản phẩm từ CSV" (01:00).
- (b) `Lb`: Chỉ P7: Ba lần (hoặc hơn) "Đăng nhập thất bại" do Caps Lock bật mà không biết.
- (c) `Lc`: P1, P4, P5 lưu sản phẩm khi chưa chọn danh mục, sản phẩm vào "Điện thoại". P4 tự sửa sau đó; P1, P5 không nhận ra.
- (d) `Ld`: P1 gõ tay giá, thiếu một chữ số 0 (`299000`). Những người khác đều sao chép giá từ phiếu (P2, P3, P5, P6 theo ghi chú; P4 sao chép các ô).
- (e) `Le`: P1, P4 xóa dòng danh mục trống; P4 sửa sản phẩm ba lần (bug #67); P7 gõ lại rồi dán lại mật khẩu.

Lỗi theo chặng (tổng số mã `La`, `Lb`, `Lc`, `Ld`, `Le`): M1 5 (đều của P7); M2 4 (P1, P4); M3 8 (P1, P4, P5, P6). Trung bình trên 7 người: M1 0,71; M2 0,57; M3 1,14 lỗi mỗi người.

## 5. Do dự (D5), hỏi người điều phối, vấn đề môi trường

| Mã | `DD` | Trong đó: mở lại kịch bản đọc | `HO` | `MT` |
|---|---|---|---|---|
| P1 | 1 | 0 (do dự lúc đọc xong đề, chưa hiểu đề) | 0 | 0 |
| P2 | 3 | 3 (ở Dashboard, sau khi tạo danh mục, sau khi lưu sản phẩm) | 1 (có được sao chép không) | 1 (chuột lạ) |
| P3 | 2 | 2 (ở danh mục, trước khi vào sản phẩm) | 1 (hỏi ghi thẳng các bước được không) | 0 |
| P4 | 2 | 2 (ở Dashboard, trước khi vào sản phẩm) | 0 | 1 (chuột trượt) |
| P5 | 4 | 3 (ở Dashboard, trước khi vào sản phẩm, sau khi lưu); 1 ở trang đăng nhập (không thấy mật khẩu đã dán) | 0 | 0 |
| P6 | 1 | 1 (ở Dashboard) | 0 | 0 |
| P7 | 0 | 0 | 0 | 0 |
| Tổng | 13 | 11 | 2 | 2 |

6 trên 7 người có ít nhất một lần do dự; 11 trên 13 lần là mở lại kịch bản đọc. Chỗ hay do dự nhất là Dashboard (P2, P4, P5, P6 đều mở lại kịch bản ngay sau khi đăng nhập) và lúc vừa tạo xong danh mục.

## 6. Kết quả cuối trong hệ thống (D6)

| Mã | Đúng một danh mục "Loa Bluetooth" | Có sản phẩm | Giá `2990000 ₫` | Ảnh hiện được | Sản phẩm thuộc "Loa Bluetooth" |
|---|---|---|---|---|---|
| P1 | Đạt | Đạt | **Không** (`299000 ₫`) | Đạt | **Không** (Điện thoại) |
| P2 | Đạt | Đạt | Đạt | Đạt | Đạt |
| P3 | Đạt | Đạt | Đạt | Đạt | Đạt |
| P4 | Đạt | Đạt | Đạt | Không xác định được | Không xác định được |
| P5 | Đạt | Đạt | Đạt | Đạt | **Không** (Điện thoại) |
| P6 | Đạt | Đạt | Đạt | Đạt | Đạt |
| P7 | Không (chưa tạo) | Không | Không | Không | Không |

P4: Người điều phối kiểm trên trang chưa tải lại. Theo bug #67, bảng và form "Sửa" trên trang chưa tải lại có thể hiện giá trị cũ, nên ảnh và danh mục của P4 không xác định được (`sessions/P4/notes.md` mục 6). Các phiên khác không có lần lưu bằng form "Sửa" nên D6 không bị ảnh hưởng.

Tổng hợp: Danh mục mới tạo đúng ở 6/6 người tới M2. Sản phẩm vào đúng danh mục mới: 3/6 chắc chắn (P2, P3, P6), 2/6 sai (P1, P5), 1/6 không xác định (P4).

## 7. Tự kiểm tra kết quả (D7)

| Mã | Có tự kiểm tra (`TK`) | Kiểm bằng cách nào | Có kiểm danh mục của sản phẩm không |
|---|---|---|---|
| P1 | Có, sau lời nhắc `CT1` lúc 01:47 | Mở form "Sửa"; chỉ xem tên, ảnh, mô tả, các ô đã điền đủ chưa | Không (form có ô danh mục nhưng không để ý) |
| P2 | Có | Đọc lại kịch bản, nhìn ảnh và sản phẩm trong bảng | Không |
| P3 | Có | Cuộn xuống bảng xem ảnh và tên, đọc lại kịch bản | Không |
| P4 | Có, 3 lần | Cuộn bảng xem ảnh, mở form "Sửa" | Có, nhưng tình cờ (phát hiện chưa chọn danh mục khi mở form để sửa ảnh) |
| P5 | Có | Cuộn bảng thấy ảnh, đọc lại kịch bản | Không |
| P6 | Có | Đọc lại kịch bản, thấy sản phẩm trong bảng | Không |
| P7 | Không áp dụng (dừng ở M1) | | |

6/6 người tới M3 đều có tự kiểm tra, nhưng chủ yếu bằng bảng sản phẩm (ảnh, tên). Bảng sản phẩm không có cột danh mục (`flow_11`), nên không ai chủ động kiểm danh mục; người duy nhất thấy sai danh mục (P4) là nhờ mở form để sửa ảnh. Thời gian tự kiểm tra (T4 − T3): Trung bình 00:12, từ 00:06 đến 00:18 (5 người, không tính P4 vì P4 bỏ cuộc; script in trung bình 00:10 vì có tính P4 với 00:00).

## 8. Thang đo SUS (D8)

| Mã | Câu trả lời câu 1 đến 10 | Điểm câu sau quy đổi | SUS |
|---|---|---|---|
| P1 | 5, 5, 5, 5, 5, 3, 3, 2, 4, 5 | 4, 0, 4, 0, 4, 2, 2, 3, 3, 0 | 55,0 |
| P2 | 5, 1, 4, 1, 4, 1, 5, 1, 2, 1 | 4, 4, 3, 4, 3, 4, 4, 4, 1, 4 | 87,5 |
| P3 | 2, 2, 3, 2, 2, 3, 4, 1, 4, 2 | 1, 3, 2, 3, 1, 2, 3, 4, 3, 3 | 62,5 |
| P4 | 1, 2, 2, 2, 2, 3, 2, 3, 3, 2 | 0, 3, 1, 3, 1, 2, 1, 2, 2, 3 | 45,0 |
| P5 | 2, 2, 2, 2, 2, 3, 3, 2, 3, 2 | 1, 3, 1, 3, 1, 2, 2, 3, 2, 3 | 52,5 |
| P6 | 1, 1, 3, 1, 2, 2, 3, 2, 4, 1 | 0, 4, 2, 4, 1, 3, 2, 3, 3, 4 | 65,0 |
| P7 | Không có (không điền form, phiên dừng ở M1) | | |

| Chỉ số | Giá trị |
|---|---|
| n | 6 (P7 không có điểm) |
| Trung bình | 61,25 |
| Trung vị | 58,75 |
| Min, max | 45,0 (P4); 87,5 (P2) |
| Độ lệch chuẩn | 14,73 |
| Số người từ 68 trở lên (mốc tham khảo thường dùng) | 1/6 (P2) |

Nhận xét số liệu:

- Trung bình 61,25 thấp hơn mốc tham khảo 68. Người tự hoàn thành có điểm cao hơn: P2, P3, P6 trung bình 71,7; P1, P4, P5 (không hoàn thành) trung bình 50,8.
- Điểm thấp nhất là P4 (45), người gặp bug #67 và bỏ cuộc.
- Câu 1 ("muốn dùng thường xuyên") thấp ở 4/6 người (P3, P4, P5, P6 chọn 1 hoặc 2).
- P1 chọn 5 cho cả câu khen (1, 3, 5) lẫn câu chê (2, 4, 10). Kiểu trả lời này có thể do đọc nhầm câu phủ định. Số liệu giữ nguyên.
- Đính chính: Điểm P5 đúng là 52,5 (lúc ghi phiên P5 AI tính nhẩm ra 55, sai).

⏳ QĐ-S2: Điểm của P1 (kiểu trả lời không nhất quán): (a) Giữ trong trung bình, chỉ ghi chú; (b) Giữ, và báo thêm trung bình khi bỏ P1 (62,5) để so; (c) Bỏ khỏi trung bình.

## 9. Thời lượng phiên

| Mã | Thời lượng (tính từ lúc bật quay) | Ghi chú |
|---|---|---|
| P1 | 45 phút | Gồm thời gian người tham gia ngồi chờ người điều phối ghi chú trước câu hỏi mở |
| P2 | 17 phút | |
| P3 | 21 phút | |
| P4 | 10 phút | |
| P5 | 11 phút | |
| P6 | 20 phút | |
| P7 | 2 phút | Dừng ở M1 |

Trừ P1 và P7, thời lượng từ 10 đến 21 phút, gần mức test plan mục 5 dự kiến cho ba phần làm nhiệm vụ, form SUS và câu hỏi mở (khoảng 9 đến 18 phút).

## 10. Lưu ý khi dùng số liệu

- Mẫu nhỏ (7 người, SUS 6 người), 6/7 người cùng đặc điểm (sinh viên, bán qua mạng xã hội): Các tỷ lệ chỉ để mô tả, không suy rộng.
- P1 có 2 lần can thiệp nằm ngoài quy trình (`sessions/P1/notes.md` mục 5); P7 bị người điều phối dừng sớm, không theo kịch bản mục 6 (`sessions/P7/notes.md` mục 5).
- D6 của P4 không xác định được vì cách kiểm (form "Sửa" trên trang chưa tải lại) bị bug #67 làm sai.
- Không có âm thanh ở cả 7 phiên: Lời nói là ghi tay ngay lúc nghe.
