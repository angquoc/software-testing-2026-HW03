# T1 results: Kết quả chạy checklist trên nền tảng <NTn>

Bước: `[T1][exec]`, `[T1][bugs]`
Nguồn số liệu: Cột <NTn> của [`<file Excel>`](<file Excel>) (sheet "Checklist", "Môi trường"), [`../bugs/bug_report.md`](../bugs/bug_report.md)
Cập nhật: <YYYY-MM-DD HH:MM>

File này chỉ tóm tắt. Kết quả từng mục, Notes và tên ảnh nằm trong file Excel; nội dung mục checklist nằm trong [`02_checklist.md`](02_checklist.md).

---

## 1. Môi trường chạy (<NTn>)

| Mục | Giá trị |
|---|---|
| Tên ngắn | |
| Trình duyệt | <Tên, phiên bản, cách điều khiển> |
| OS | |
| Thiết bị | |
| Màn hình, cửa sổ | <Màn hình; vùng trang của script; cửa sổ khi chạy tay> |
| Zoom, scale | |
| Ngày giờ | <Lần chạy chính; chạy tay và chụp bổ sung; các nhóm chạy thêm> |
| Dữ liệu | <Reset và tạo dữ liệu theo ĐK-..> |
| Người chạy | <Người chạy; công cụ cho nhóm mục nào; mục chạy tay> |
| Cách chốt kết quả | <AI điền nháp từ log nào và ảnh nào; nhãn "(AI xem ảnh)"; sinh viên review và chốt> |

<Ảnh mục Failed: Thư mục, quy ước tên. Lớp chữ đè nếu nền tảng này cũng tính cho cross-platform.>

---

## 2. Tổng hợp kết quả

### 2.1 Theo IA

| IA | Số mục | Passed | Failed | Không chạy được | Đã thực thi (Passed + Failed) | Tỉ lệ Passed / đã thực thi |
|---|---|---|---|---|---|---|
| IA-01 Tiêu chuẩn giao diện chung | | | | | | |
| IA-02 Form | | | | | | |
| IA-03 Điều hướng | | | | | | |
| IA-04 Phản hồi và trạng thái | | | | | | |
| **Tổng** | | | | | | |

<Có mục N/A không. "Không chạy được" không tính vào Passed / Failed.>

### 2.2 Theo căn cứ và nguồn của mục

| Nhóm | Số mục | Passed | Failed | Không chạy được |
|---|---|---|---|---|
| Căn cứ SRS (UI-Rxx) | | | | |
| Khuyến nghị | | | | |
| Nguồn `AI` | | | | |
| Nguồn `AI, SV sửa` | | | | |
| Nguồn `SV thêm` | | | | |

---

## 3. Mục Failed chính (điền sau bước `bugs`)

| Issue | Severity | Lỗi | Mục CL |
|---|---|---|---|

<Một câu tóm tắt các lỗi severity low.>

---

## 4. Danh sách <N> mục Failed

Cột "Issue": Số issue; "Bình luận #số" là bình luận vào issue đã có; "Không báo" là mục Failed không đưa lên Issues (lý do ở `bug_report.md`).

### 4.1 IA-01 (<n> mục)

| Mã | Lỗi quan sát được | Màn hình | Issue |
|---|---|---|---|

<!-- Lặp cho IA-02, IA-03, IA-04 -->

---

## 5. Mục Không chạy được (<n> mục)

| Mã | IA | Lý do |
|---|---|---|

<Các mục chỉ một phần màn hình không chạy được.>

---

## 6. Bug (điền sau bước `bugs`)

Chi tiết: [`../bugs/bug_report.md`](../bugs/bug_report.md). Ảnh trang Issues đã lọc: <link>.

| Chỉ số | Số lượng |
|---|---|
| Issue mới | |
| Theo severity | |
| Theo căn cứ | |
| Theo IA | |
| Bình luận vào issue đã có | |
| Issue có ghi `Related` tới issue khác | |

Đối chiếu <N> mục Failed: <a> mục nằm trong <b> issue, <c> mục nằm trong <d> bình luận, <e> mục không báo (<danh sách>).
