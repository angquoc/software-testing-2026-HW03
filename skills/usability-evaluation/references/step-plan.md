# Bước `plan`: Test plan

**Mục tiêu:** Một test plan đủ 9 phần theo slide S13 ("Typical test plan format"), gắn chặt với giao diện thật của luồng, để các bước sau (kịch bản, công cụ, phân tích) dựa vào.

**Đầu ra:** `screenshots/flow_<số>_<nội dung>.png` (sinh viên chụp), `ai_raw/T2_plan.md`, `01_test_plan.md`.

## Pha 0: Ảnh khảo sát luồng

Ở lần làm đầu, bản AI của plan viết khi **chưa có ảnh**; khi review với ảnh, 10 trong 15 thay đổi là Loại "Thiếu", phần lớn với lý do "Prompt: Chưa có ảnh" hoặc "Đặc thù giao diện" (không có thông báo sau khi lưu, ô danh mục mặc định chọn sẵn, khối nhập CSV nằm trên form thêm, ô không có nhãn, trang đăng nhập tiếng Anh). Vì vậy skill yêu cầu ảnh **trước** khi viết plan.

1. Đề xuất danh sách ảnh cần chụp, đi theo luồng từ đầu tới cuối:

   | Loại ảnh | Ví dụ |
   |---|---|
   | Trang bắt đầu của luồng | Trang đăng nhập |
   | Mỗi trang chuyển tới | Trang chủ sau đăng nhập, trang danh sách |
   | Form trống và form đã điền | Form thêm mới |
   | Thành phần mở ra | Dropdown đang mở, dialog |
   | **Ngay sau mỗi lần lưu** | Có thông báo không, form có tự xóa không |
   | Nơi thấy kết quả cuối | Danh sách có bản ghi mới; trang chi tiết |

   Tên `flow_<số>_<nội dung>.png`; trang dài chụp nhiều ảnh `_1`, `_2`. Chụp cả cửa sổ trình duyệt.
2. Nhờ sinh viên **thử và mô tả** các hành vi ảnh không cho thấy: Bản ghi mới có hiện ngay ở nơi cần chọn không (không tải lại trang); có thông báo nào sau khi lưu không; giá trị mặc định của các ô chọn.
3. Nhắc sinh viên: Ảnh là ảnh khảo sát của người kiểm thử, không có người tham gia; dùng dữ liệu thử (tên bản ghi) **khác** dữ liệu sẽ dùng trong kịch bản.
4. **Dừng** chờ ảnh. Khi có ảnh, đọc hết, ảnh thiếu hay bị cắt thì liệt kê cần chụp thêm và dừng.

## Hỏi trước khi viết

- Tiêu chí người tham gia dự án đã chốt chưa (nếu chưa thì đưa vào plan dạng đề xuất).
- Đặc tả liên quan tới luồng: FR của các chặng, và FR của **màn hình khác** có thể dùng để kiểm kết quả cuối (ví dụ trang chi tiết sản phẩm hiển thị danh mục).

## Pha B: AI viết bản gốc

Theo mẫu `assets/templates/plan.md`:

0. **Phạm vi và căn cứ:** Luồng, hệ thống và URL, đặc tả liên quan, cấu trúc 9 phần, yêu cầu của đề, ảnh dùng.
1. **Mục đích:** Câu mục đích gắn với người dùng mục tiêu; loại test theo Rubin (exploratory, assessment, validation, comparison) và lý do; kết quả dùng để làm gì (gom pain point, tách bug khỏi vấn đề thiết kế, severity, đề xuất, báo bug).
2. **Câu hỏi cần trả lời `Qn`:** Bảng (mã, câu hỏi, chặng, khía cạnh probe của đề). Mỗi câu dựa trên một điểm **thấy trong ảnh** (ghi số ảnh) hoặc một yêu cầu SRS; có ít nhất một câu cho mỗi khía cạnh đề yêu cầu (ví dụ clarity, error recovery, speed, trust) và một câu cho điểm thang đo.
3. **Mục tiêu `On` và nhiệm vụ:** Mục tiêu liên kết với câu hỏi. Chia luồng thành chặng `Mn` với **dấu hiệu bắt đầu và kết thúc quan sát được trên giao diện** (theo ảnh). Kết quả nào không nhìn thấy được trong phiên (ví dụ bản ghi nằm đúng nhóm khi bảng không có cột đó) thì ghi kiểm sau phiên. Câu chữ kịch bản, dữ liệu, tiêu chí hoàn thành, thời gian chuẩn ghi "chốt ở bước `scenario`".
4. **Chân dung người dùng:** Người dùng mục tiêu thật của luồng; tiêu chí bắt buộc (đánh số); ưu tiên; đặc điểm thu qua phiếu thông tin trước phiên (không ghi tên, chỉ mã); số lượng (theo đề) cộng người pilot.
5. **Phương pháp và thiết kế:** Hình thức (moderated, một người một phiên); thu định tính (think-aloud, quan sát, câu hỏi mở); thu định lượng; thiết kế một điều kiện (cùng kịch bản, dữ liệu, trạng thái); **không** demo giao diện trước phiên; pilot; địa điểm (`QĐ`: trực tiếp, từ xa, tùy người). Bảng trình tự phiên với thời lượng ước lượng.
6. **Môi trường và thiết bị:** Kiểu phòng; máy chạy hệ thống; reset dữ liệu trước **mỗi** phiên; trình duyệt cố định; độ phân giải, zoom; thiết bị nhập; quay màn hình (video không commit); đo thời gian theo mốc video; công cụ cho phiên từ xa.
7. **Vai trò người điều phối:** Bảng theo thời điểm (trước phiên, mở đầu, trong phiên, can thiệp, ghi chú, kết thúc, sau phiên). Định nghĩa "bế tắc hẳn" và câu can thiệp chuẩn để `QĐ` chốt ở `scenario`.
8. **Số liệu:** 8.1 hiệu suất `Dn` (kết quả từng chặng, thời gian, số lỗi theo loại có chữ cái, số lần can thiệp, số lần do dự, kết quả cuối kiểm sau phiên, người tham gia có tự kiểm kết quả không); 8.2 ý kiến (thang đo, câu hỏi mở, lời think-aloud); 8.3 bảng liên kết câu hỏi với số liệu; 8.4 cách tổng hợp (trung bình, trung vị, khoảng, độ lệch chuẩn; tỷ lệ hoàn thành; điểm thang đo bằng script hoặc công thức; gom ý định tính; criticality = severity x probability). Thang đo (SUS hay UEQ-S) và thang severity để `QĐ`.
9. **Nội dung báo cáo:** Danh sách phần của báo cáo, kể cả hạn chế của nghiên cứu và phụ lục.
10. **Giả định và rủi ro:** Giả định `Gn` về giao diện, **đối chiếu với ảnh** (Đúng, Đúng một phần, Sai, chưa kiểm được) kèm căn cứ; rủi ro (ảnh hưởng, cách giảm), đặc biệt rủi ro do giao diện (ví dụ giá trị mặc định sai mà không ai nhận ra).
11. **Tổng hợp các quyết định để mở ⏳.**

Tự kiểm: `check_usability.py format`, `ids`, `privacy`; checklist bước `plan` trong `lessons.md`. **Dừng**, đưa commit message.

## Pha D: Bản review `01_test_plan.md`

- Áp quyết định của sinh viên; quyết định nào bước sau mới chốt thì giữ `⏳` kèm tên bước.
- Khi `scenario` hoặc `instruments` chốt một quyết định của plan, quay lại cập nhật `01_test_plan.md` (trạng thái, mục liên quan) và thêm dòng vào bảng thay đổi của plan.
- Viết bảng thay đổi. Chạy lại script. **Dừng.**
