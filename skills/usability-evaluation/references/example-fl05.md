# Ví dụ rút gọn: HW03 Task 2 trên EShop, luồng FL-05

Lần làm đầu, dùng để tra cách viết. Bản đầy đủ nằm ở thư mục `usability/` của bài HW03 (chỉ các file thiết kế; không đọc hồ sơ phiên và danh sách người tham gia).

## Phạm vi

| Mục | Nội dung |
|---|---|
| Luồng | FL-05 (Web Admin): Đăng nhập Admin, tạo danh mục, thêm sản phẩm vào danh mục mới |
| Người dùng mục tiêu | Người bán hàng online đã tự đăng sản phẩm, chưa dùng hệ thống này |
| Ảnh luồng | 12 ảnh `flow_01` đến `flow_11` (trang danh sách sản phẩm chụp 2 ảnh) |
| Số liệu qua các bước | Plan: 10 câu hỏi, 5 mục tiêu, 3 chặng, 10 số liệu, 4 giả định đối chiếu ảnh. Kịch bản: 5 mốc, 4 mức can thiệp, 9 tình huống đặc biệt. Công cụ: I1 đến I7, 9 câu hỏi mở bắt buộc |
| Bảng thay đổi (trước pilot) | Plan 15 dòng (10 Thiếu); kịch bản 12 dòng; công cụ 17 dòng |
| Pilot | Phiên trực tiếp 16 phút, không ghi âm; toàn luồng 01:24, không hoàn thành (giá lưu thiếu một chữ số 0); sau pilot: Chuẩn x5 thành x3, ngưỡng "bế tắc hẳn" 3 phút thành 2 phút, thêm điều kiện bộ gõ, câu "được sao chép" trên phiếu, câu dặn đọc hết kịch bản, thời lượng phiên 15 đến 25 phút |

## Một dòng "Kết quả kiểm bộ công cụ" của pilot

| Điểm cần kiểm | Quan sát ở pilot | Cần sửa |
|---|---|---|
| Phát sinh: Bộ gõ tiếng Việt trên máy | Bộ gõ đang bật làm PL gõ sai email ở M1 và không biết tắt (`MT`) | Thêm vào I1: Trước phiên đặt bộ gõ về chế độ tiếng Anh, chỉ người tham gia cách bật lại nếu cần gõ tiếng Việt |

## Một câu hỏi của plan dựa trên ảnh

| Mã | Câu hỏi | Chặng | Khía cạnh probe |
|---|---|---|---|
| Q4 | Trong form thêm sản phẩm, người dùng có tìm và chọn **đúng danh mục vừa tạo** không? Ô danh mục mặc định chọn sẵn "Điện thoại", không có lựa chọn trống, danh mục mới nằm cuối danh sách (flow_07, flow_08) | Thêm sản phẩm | Clarity, Trust |

## Chặng có dấu hiệu quan sát được

| Chặng | Dấu hiệu bắt đầu | Dấu hiệu kết thúc |
|---|---|---|
| M2 Tạo danh mục mới | Kết thúc M1 | Danh mục mới xuất hiện ở dòng cuối bảng danh mục (flow_05) |
| M3 Thêm sản phẩm vào danh mục mới | Kết thúc M2 | Bấm "Lưu sản phẩm" và sản phẩm xuất hiện ở dòng cuối bảng (flow_11). Sản phẩm nằm đúng danh mục hay không: Người điều phối kiểm sau phiên |

## Kịch bản dạng mục tiêu

> Bạn vừa nhận quản lý một cửa hàng online bán đồ công nghệ. Cửa hàng chuẩn bị bán thêm loa Bluetooth, nhưng hiện chưa có danh mục nào cho loại hàng này.
>
> Nhiệm vụ của bạn: Vào trang quản trị của cửa hàng, tạo một danh mục mới tên là **Loa Bluetooth**, rồi đăng sản phẩm đầu tiên vào **đúng danh mục đó**. Thông tin đăng nhập và thông tin sản phẩm có trong phiếu dữ liệu.
>
> Bạn cứ làm theo cách bạn thấy hợp lý. Khi thấy đã xong, hãy nói: "Tôi làm xong rồi".

Không có chữ "Thêm mới", "Lưu sản phẩm", "Quản lý Danh mục". Từ "danh mục" trùng nhãn sidebar; sinh viên chọn giữ và ghi lưu ý khi phân tích câu hỏi tìm đường.

## Thời gian chuẩn

| Chặng | Thời gian SV tự làm | Bội số | Thời gian chuẩn | Sau pilot |
|---|---|---|---|---|
| Toàn luồng | 00:46.25 | x5 | 03:51.25 | |

Các phương án đã xét: x3 (quá chặt với người chưa thấy giao diện), x10 (chỉ chỗ vướng rất lâu mới vượt chuẩn).

## Một dòng bảng thay đổi

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|
| Mục I2.4 (mới) | Thêm cách xử lý khi think-aloud không đủ: Người nói ít, người rành công nghệ làm nhanh, người không đồng ý ghi âm | Thiếu | Giới hạn model: AI có đủ thông tin (ghi âm không bắt buộc ở test plan) nhưng không nghĩ tới việc think-aloud sẽ không thu được khi không có âm thanh | SV hỏi ba tình huống này |
