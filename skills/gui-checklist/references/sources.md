# Nguồn ngoài SRS

Mục checklist không có căn cứ trong SRS được phép dùng nguồn trong slide môn học, nhưng phải ghi rõ nguồn và ghi là **khuyến nghị**. Bảng dưới là các nguồn đã dùng ở lần làm đầu (HW03, EShop), kèm ví dụ mục, để tra cách ghi. Đây không phải danh sách bắt buộc phải phủ hết.

Trước khi dùng một nguồn, kiểm tra dự án có cho đọc slide hoặc template đó không. Không đọc được thì hỏi sinh viên; không viết nguồn theo trí nhớ như thể đã đọc.

## Cách ghi ở cột Oracle

```
Khuyến nghị: <Nguồn 1>; <Nguồn 2>
```

Ví dụ: `Khuyến nghị: WCAG 2.2 SC 3.3.1 Error Identification; Nielsen heuristic 9`. Mục có phần nội dung đối chiếu với một mã SRS thì ghi thêm: `...; nội dung đối chiếu với UI-R03`. Mục khuyến nghị đã chốt ở `oracle` dẫn mã `NR-nn` trước: `Khuyến nghị: NR-01 (Nielsen heuristic 1, Visibility of system status)`.

## Các nguồn đã dùng

| Nguồn | Đã dùng cho | Ví dụ mục |
|---|---|---|
| Nielsen 10 heuristics: 1 Visibility of system status; 3 User control and freedom; 4 Consistency and standards; 5 Error prevention; 9 Help users recognize, diagnose, and recover from errors | Loading, trạng thái sau thao tác, nút Back, dialog xác nhận, thông báo lỗi và đường thoát | Có dấu hiệu đang tải khi lịch sử đơn đang tải |
| Shneiderman 8 Golden Rules: 1 Strive for consistency; 3 Offer informative feedback; 4 Design dialogues to yield closure; 5 Offer simple error handling | Nhất quán kiểu viết hoa, thông báo thành công, giữ dữ liệu khi báo lỗi | Sau khi form báo lỗi, các ô không lỗi giữ nguyên dữ liệu |
| WCAG 2.2: SC 1.3.1, 1.3.5, 1.4.3, 1.4.4, 1.4.10, 2.1.1, 2.4.1, 2.4.2, 2.4.4, 2.4.7, 3.1.1, 3.2.3, 3.3.1, 3.3.2, 3.3.3, 3.3.8, 4.1.2, 4.1.3 | Accessibility: Ngôn ngữ trang, tiêu đề tab, focus nhìn thấy, tương phản, zoom 200%, khổ hẹp (reflow), nhãn gắn với ô, `autocomplete`, thông báo lỗi, thông báo trạng thái, `<main>` | Thẻ `<html>` khai báo `lang="vi"` |
| Slide "GUI + Usability + Compatibility Testing AI-First": Checklist theo loại control (Text Box, Button, Hyperlink, Date field); "Golden rule" về lỗi (đưa focus về ô lỗi, làm nổi bật ô lỗi); bảng phân loại lỗi GUI ("Control/menu state not aligned with data state"); ví dụ double-submit; kiểm ở nhiều độ rộng | Giá trị điền sẵn, ô bị khóa nhìn khác, Enter gửi form, link mở đúng trang, trạng thái giao diện khớp dữ liệu sau thao tác | Sau khi hủy đơn, chữ trạng thái đổi ngay không cần tải lại |
| Slide S13 GUI Testing & Usability Testing: Localization và Internationalization; text overflow, misalignment; responsive | Định dạng ngày theo địa phương, tên dài tràn navbar | Họ Tên 50 ký tự không làm tràn navbar |
| Template GUI checklist của môn (`GUI checklist_Template_Vi.xlsx`), các mục 1.08, 1.12, 1.15, 1.17, 3.01, 3.04, 3.12 đến 3.14 | Hiệu ứng khi rê chuột, font nhất quán, cỡ tiêu đề, kích thước cửa sổ, link về trang chủ | Logo là link về trang chủ |
| HTML Living Standard (thuộc tính `readonly`, `disabled`) | Ô bị khóa được khai báo đúng | Ô Email bị khóa có `readonly` hoặc `disabled` |

## Lưu ý khi dùng

- Template của môn được viết cho một loại trang web cụ thể; mục đặc thù của loại trang đó (màu nền tối, ảnh món ăn, ô tìm nhà hàng) không áp dụng, ghi ở mục "Ý đã xét nhưng không đưa vào".
- Template mâu thuẫn với chuẩn (ví dụ "ô read-only không nhận focus" so với chuẩn HTML cho ô `readonly` nhận focus): Đưa thành câu hỏi CHD, không tự chọn. Lần làm đầu sinh viên chọn theo chuẩn.
- Tiêu chí WCAG có phạm vi riêng (ví dụ SC 3.3.8 chỉ cho bước xác thực): Chỉ áp cho màn hình thuộc phạm vi đó.
- Đơn vị hay số liệu không kiểm được trên web (ví dụ cỡ chữ theo pt dành cho in ấn): Không đưa vào.
