# Kịch bản nhiệm vụ: Luồng <mã luồng>

<!-- Đầu file theo ai_raw_header.md (bản AI) hoặc rules.md mục 7 (bản review) -->

---

## 0. Căn cứ

| Nguồn | Dùng cho |
|---|---|
| `01_test_plan.md` mục 3.2 (chặng), mục 8 (số liệu), mục 11 (quyết định) | Khung kịch bản, số liệu cần thu |
| Đề | Kịch bản dạng mục tiêu, không đưa từng bước |
| Slide S13 "Task components" | Task, Machine state, Successful completion criteria, Benchmark |
| SRS <FR> | Ràng buộc dữ liệu, cơ chế có thể gặp |
| Ảnh `flow_..` | Trạng thái giao diện thật |
| Sinh viên thử <ô, thao tác> (<ngày>) | <Hành vi quan sát được> |

---

## 1. Nguyên tắc viết kịch bản

1. **Mục tiêu, không phải các bước.**
2. **Không dùng nhãn nút làm gợi ý.**
3. **Bối cảnh thật**, đúng chân dung người dùng.
4. **Cùng một kịch bản cho mọi người.**
5. **Người tham gia tự quyết định khi nào xong**, bằng câu: "<câu cố định>".

---

## 2. Kịch bản đưa cho người tham gia

### 2.1 Câu chữ

> <Bối cảnh>
>
> Nhiệm vụ của bạn: <Mục tiêu>. Thông tin <...> có trong phiếu dữ liệu.
>
> Bạn cứ làm theo cách bạn thấy hợp lý. Khi thấy đã xong, hãy nói: "<câu cố định>".

### 2.2 Phiếu dữ liệu

| Thông tin | Giá trị |
|---|---|

Ghi chú về dữ liệu: <Không trùng dữ liệu mẫu và dữ liệu đã dùng khi chụp ảnh; cách ghi giá trị có định dạng theo kết quả sinh viên thử; dữ liệu dài đưa dạng sao chép được>

Cách đưa kịch bản và phiếu dữ liệu: ⏳ QĐ<n>: (a) ...; (b) ...

---

## 3. Trạng thái ban đầu (Machine state)

| Mục | Trạng thái |
|---|---|
| Dữ liệu | Đã reset: `<lệnh>` |
| Hệ thống | Đang chạy (`<URL>`) |
| Trình duyệt | Đang mở `<URL>`, trang <...>, chưa đăng nhập, một tab, zoom 100% |
| Mật khẩu đã lưu | Không có (hồ sơ trình duyệt riêng hoặc chế độ khách) |
| Tiện ích trình duyệt | Tắt dịch tự động và tiện ích chèn gợi ý |
| Dữ liệu bên ngoài | <URL ảnh đã kiểm trong ngày> |
| Quay màn hình | Đã bật trước khi người tham gia đọc kịch bản |

---

## 4. Các thành phần nhiệm vụ (Task components)

### 4.1 Theo chặng

| Chặng | Nhiệm vụ | Trạng thái ban đầu | Tiêu chí hoàn thành | Thời gian chuẩn |
|---|---|---|---|---|
| M1 | | | <Đúng cái người điều phối nhìn thấy, dẫn ảnh> | Mục 4.4 |

### 4.2 Toàn luồng

| Thành phần | Nội dung |
|---|---|
| Nhiệm vụ | Kịch bản ở mục 2.1 |
| Trạng thái ban đầu | Mục 3 |
| Tiêu chí hoàn thành | |
| Thời gian chuẩn | Mục 4.4 |
| Thời gian tối đa | |

### 4.3 Cách xếp kết quả

| Kết quả | Khi nào |
|---|---|
| Tự hoàn thành | |
| Hoàn thành nhờ can thiệp | |
| Không hoàn thành | |

### 4.4 Thời gian chuẩn

Cách đo (sinh viên làm, AI không đưa con số):

1. Sinh viên tự làm toàn bộ luồng với đúng phiếu dữ liệu, sau khi reset, bấm giờ từng chặng.
2. Thời gian chuẩn bằng thời gian đó nhân một bội số do sinh viên chọn: ⏳ QĐ<n>: (a) x3; (b) x5; (c) x10; (d) khác. <Hệ quả của từng phương án>
3. Chạy pilot, chỉnh một lần, rồi giữ cố định cho các phiên thật.

| Chặng | Thời gian SV tự làm | Bội số | Thời gian chuẩn | Sau pilot |
|---|---|---|---|---|
| M1 | | | | |
| Toàn luồng | | | | |

### 4.5 Mốc thời gian cần ghi trong mỗi phiên

| Mốc | Sự kiện quan sát được |
|---|---|
| T0 | Đọc xong kịch bản, bắt đầu thao tác |

---

## 5. Can thiệp

**Bế tắc hẳn** khi có ít nhất một dấu hiệu: <đề xuất, ⏳ QĐ<n>, kiểm ở pilot>

| Mức | Câu nói chuẩn | Có tính là can thiệp không |
|---|---|---|
| 0 | "Bạn đang nghĩ gì?", "Bạn đang tìm gì?" | Không (nhắc think-aloud) |
| 1 | Nhắc lại mục tiêu | Có |
| 2 | Chỉ ra khu vực trên màn hình | Có |
| 3 | Làm hộ hoặc nói rõ thao tác | Có; chặng đó tính là "Không hoàn thành" |

Mỗi lần can thiệp ghi: Mốc thời gian, chặng, mức, lý do, câu đã nói. Khi người tham gia hỏi: Chỉ trả lời về mục tiêu hoặc dữ liệu; câu hỏi về cách làm thì đáp "Bạn cứ làm theo cách bạn nghĩ là đúng."

---

## 6. Tình huống đặc biệt

| Tình huống | Cách xử lý | Ghi vào |
|---|---|---|

---

## 7. Trình tự đưa kịch bản trong phiên

1. <...>

---

## 8. <Câu hỏi thiết kế còn mở của plan liên quan tới kịch bản>

---

## 9. Cần kiểm ở pilot

| Điểm cần kiểm | Vì sao |
|---|---|

---

## 10. Tổng hợp các quyết định

| Mã | Quyết định | Trạng thái |
|---|---|---|

---

## Thay đổi so với bản AI

<!-- Bản AI để trống. Bản review theo changes_table.md -->
