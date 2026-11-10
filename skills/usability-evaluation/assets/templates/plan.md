# Test plan usability cho luồng <mã luồng>

<!-- Đầu file theo ai_raw_header.md (bản AI) hoặc rules.md mục 7 (bản review) -->

---

## 0. Phạm vi và căn cứ

| Mục | Nội dung |
|---|---|
| Luồng | <Mã> (<nền tảng>): <Chặng 1> → <Chặng 2> → <Chặng 3> |
| Hệ thống | <Tên>, `<URL>` |
| Đặc tả liên quan | <FR của các chặng; FR của màn hình khác dùng để kiểm kết quả cuối; FR giao diện chung> |
| Cấu trúc test plan | 9 phần theo slide S13 "Typical test plan format" |
| Yêu cầu của đề | <Số người, hình thức, think-aloud, quay màn hình, thang đo, khía cạnh câu hỏi mở, pilot> |
| Ảnh giao diện | `screenshots/flow_01` đến `flow_<nn>` (sinh viên chụp ngày <...>) |

---

## 1. Mục đích (Purpose)

<Đánh giá xem <người dùng mục tiêu> lần đầu dùng hệ thống có tự hoàn thành được <mục tiêu> không, và tìm những chỗ làm họ chậm, sai, do dự, mất tin tưởng.>

Loại test theo Rubin (slide S13): **<Loại>**. Lý do: <...>.

Kết quả dùng để: <...>

---

## 2. Câu hỏi cần trả lời (Problem statement)

| Mã | Câu hỏi | Chặng | Khía cạnh probe của đề |
|---|---|---|---|
| Q1 | <Câu hỏi, dẫn ảnh `flow_nn` hoặc FR> | | |

---

## 3. Mục tiêu và nhiệm vụ (Test objectives & tasks)

### 3.1 Mục tiêu

| Mã | Mục tiêu | Trả lời câu hỏi |
|---|---|---|
| O1 | | |

### 3.2 Nhiệm vụ

Luồng được giao như **một kịch bản dạng mục tiêu** (không đưa từng bước). Người điều phối chia luồng thành các chặng để đo (người tham gia không thấy cách chia này):

| Chặng | Nội dung | Dấu hiệu bắt đầu | Dấu hiệu kết thúc |
|---|---|---|---|
| M1 | | | <Quan sát được trên giao diện, dẫn ảnh> |

- Câu chữ kịch bản, dữ liệu, trạng thái ban đầu, tiêu chí hoàn thành, thời gian chuẩn: Chốt ở bước `scenario`.

---

## 4. Chân dung người dùng (User profile)

<Người dùng mục tiêu thật của luồng>

Tiêu chí bắt buộc, mọi người tham gia phải đạt đủ:

1. <...>

Đặc điểm thu qua phiếu thông tin trước phiên (chỉ dùng mã, không ghi tên):

| Đặc điểm | Dạng câu trả lời |
|---|---|

Số lượng: <n> người cộng 1 người pilot.

---

## 5. Phương pháp và thiết kế (Method & test design)

| Mục | Lựa chọn |
|---|---|
| Hình thức | Có người điều phối (moderated), một người tham gia một phiên |
| Thu thập định tính | Think-aloud đồng thời, quan sát, câu hỏi mở sau phiên |
| Thu thập định lượng | Thời gian từng chặng, hoàn thành hay không, số lỗi, số lần can thiệp, điểm thang đo |
| Thiết kế | Một điều kiện: Mọi người làm cùng kịch bản, cùng dữ liệu, cùng trạng thái ban đầu |
| Hướng dẫn trước phiên | Không demo giao diện |
| Pilot | 1 phiên trước các phiên thật |
| Địa điểm | ⏳ QĐ<n>: (a) Trực tiếp; (b) Từ xa; (c) Tùy từng người |

Trình tự một phiên (thời lượng ước lượng, chỉnh sau pilot):

| Bước | Nội dung | Thời lượng |
|---|---|---|

---

## 6. Môi trường và thiết bị (Test environment & equipment)

| Thành phần | Chi tiết |
|---|---|

---

## 7. Vai trò người điều phối (Test monitor role)

| Thời điểm | Việc làm |
|---|---|
| Trước phiên | |
| Mở đầu | |
| Trong phiên | |
| Can thiệp | |
| Ghi chú | |
| Kết thúc | |
| Sau phiên | |

---

## 8. Số liệu thu thập và cách đánh giá (Evaluation measures & data)

### 8.1 Số liệu hiệu suất

| Mã | Số liệu | Cách thu | Phục vụ |
|---|---|---|---|
| D1 | | | |

### 8.2 Số liệu ý kiến

| Mã | Số liệu | Cách thu |
|---|---|---|

### 8.3 Liên kết câu hỏi với số liệu

| Câu hỏi | Hiệu suất | Ý kiến |
|---|---|---|

### 8.4 Cách tổng hợp và đánh giá

- <Thời gian, độ chính xác, thang đo, định tính, phân tích, ưu tiên>

---

## 9. Nội dung báo cáo (Report contents)

1. <...>

---

## 10. Giả định và rủi ro

### 10.1 Giả định đối chiếu với ảnh

| Mã | Giả định | Kết quả | Căn cứ |
|---|---|---|---|
| G1 | | <Đúng / Đúng một phần / Sai / Chưa kiểm được> | <flow_nn, SV xác nhận> |

### 10.2 Rủi ro

| Rủi ro | Ảnh hưởng | Cách giảm |
|---|---|---|

---

## 11. Tổng hợp các quyết định

| Mã | Quyết định | Trạng thái |
|---|---|---|
| QĐ1 | | ⏳ <bước sẽ chốt> |

---

## Thay đổi so với bản AI

<!-- Bản AI để trống. Bản review theo changes_table.md -->
