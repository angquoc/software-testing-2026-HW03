# Bước `oracle`: Trích yêu cầu giao diện từ SRS

**Mục tiêu:** Có danh sách yêu cầu giao diện trích **nguyên văn** từ SRS, mỗi yêu cầu có mã, IA, màn hình áp dụng và lý do áp dụng hay không, làm oracle cho checklist. Đồng thời gom các câu hỏi mà sinh viên phải chốt trước khi AI sinh checklist.

**Đầu ra:** `ai_raw/T1_oracle.md`, `01_oracle.md` (bản review).

## Hỏi trước khi viết

- **Checklist GUI có kiểm logic nghiệp vụ, phân quyền, bảo mật hay API không**, hay chỉ kiểm trạng thái hiển thị của giao diện? Câu trả lời quyết định cột Áp dụng của nhiều mã cùng lúc. Ở lần làm đầu, câu hỏi này để tới bản AI (CH-05) nên 8 mã phải ghi `⏳ SV quyết định`; hỏi trước thì bản AI gọn hơn. Nếu sinh viên muốn để mở thì giữ dạng `⏳`.
- Phạm vi trích: Ngoài mục giao diện chung của SRS và FR của các màn hình đã chọn, có trích các ý giao diện ở FR khác (để ghi rõ vì sao không áp dụng) và yêu cầu bảo mật có phần hiển thị không? Đề xuất: Có, để bước sau không dùng nhầm làm oracle.

## Pha B: AI viết bản gốc

Theo mẫu `assets/templates/oracle.md`:

1. **Phạm vi và cách đọc:** Nguồn trích (file, phiên bản SRS); bảng màn hình; thành phần dùng chung tính cho màn hình nào; cách trích; ý nghĩa cột Áp dụng; cách gán IA; ghi rõ bảng chỉ trích và xét áp dụng, **không** đánh giá giao diện hiện tại.
2. **Bảng yêu cầu**, nhóm theo FR của SRS:

   | Mã | Nguyên văn SRS | IA | Màn hình | Áp dụng | Lý do / ghi chú |
   |---|---|---|---|---|---|

   - Mỗi gạch đầu dòng của SRS là **một** mã, giữ nguyên văn (kể cả in đậm, code, dấu câu, ký tự "—" nếu SRS có). Một gạch đầu dòng nhiều ý vẫn một mã; ghi "Gồm 2 ý: ..." ở cột ghi chú để `ai-draft` tách thành nhiều mục.
   - Cột Áp dụng nhận đúng một trong bốn giá trị: `Áp dụng`, `Áp dụng một phần` (ghi rõ phần nào), `Không áp dụng` (ghi lý do), `⏳ SV quyết định` (kèm mã câu hỏi CH).
   - IA: Ý thuộc mục giao diện chung của SRS lấy theo ánh xạ của dự án; ý nằm ở FR khác ghi IA là đề xuất của AI dựa trên nội dung.
   - Ý chỉ áp dụng ở một trạng thái (ví dụ nút chỉ có khi đã đăng nhập) ghi rõ ở cột Màn hình.
   - Hai mã trùng ý (ví dụ một FR riêng và mục giao diện chung nói cùng điều): Ghi "Trùng ý với UI-Rxx; ở bước `ai-draft` chỉ tạo một mục".
   - Ý của sơ đồ hay bảng (không có câu chữ trong SRS): Ghi rõ "phần sau là diễn giải từ sơ đồ".
   - Kết thúc bằng bảng "Các FR không trích" và lý do.
3. **Tổng hợp theo IA và màn hình:** Bảng IA x màn hình, chỉ gồm mã `Áp dụng` và `Áp dụng một phần`; đếm số mã theo cột Áp dụng (dùng `check_checklist.py oracle`, không đếm tay).
4. **Câu hỏi mở `CH-nn`** (⏳ SV quyết định): Mọi điểm SRS không nói mà ảnh hưởng tới mục checklist, ví dụ trường nào bắt buộc ở màn hình SRS không nói; nút nào thuộc nhóm màu nào; thuật ngữ tiếng Anh nào được giữ; định dạng chuẩn địa phương khác cách viết trong SRS; có kiểm loading, dialog xác nhận khi SRS chỉ yêu cầu ở màn hình khác không. Câu nào có phương án thì đánh chữ cái.
5. **Giả định `GĐ-nn`:** Cách hiểu AI dùng khi viết (ví dụ danh sách trang trong SRS là danh sách đóng). Sinh viên xác nhận hoặc sửa.
6. **Điểm thấy ở survey mà SRS không có yêu cầu:** Bảng (màn hình, điểm quan sát, ghi chú). Nếu muốn kiểm thì oracle phải là nguồn ngoài SRS, ghi là khuyến nghị. Chỉ để không bỏ sót, không kết luận đúng sai.
7. Mục "Thay đổi so với bản AI" để trống (điền ở bản review).

Tự kiểm: `check_checklist.py oracle` và `format`; checklist bước `oracle` trong `lessons.md`. **Dừng**, đưa commit message, chờ sinh viên trả lời từng CH.

## Pha D: Bản review `01_oracle.md`

1. Áp từng câu trả lời: Đổi `⏳` thành giá trị Áp dụng cụ thể; thêm cột "Quyết định của SV" và "Ảnh hưởng" vào bảng CH.
2. Câu trả lời của sinh viên nêu nhiều phương án hoặc chưa chọn hẳn: Đưa thành **điểm chốt vòng hai** (mục riêng, có phương án đánh chữ), dừng chờ chọn; không tự chọn.
3. Sinh viên muốn kiểm một điểm mà SRS không yêu cầu cho các màn hình này (ví dụ loading, dialog xác nhận): Giữ mã SRS ở `Không áp dụng`, thêm mục **`NR-nn`** ở phần "Mục kiểm theo nguồn ngoài SRS sinh viên đã chốt" (nội dung, màn hình, IA, nguồn đề xuất, từ câu hỏi nào). Ghi là **khuyến nghị**, kể cả khi câu trả lời của sinh viên dùng chữ "bắt buộc"; báo sinh viên điều này.
4. Ý mơ hồ không kiểm được bằng Passed / Failed (ví dụ "canh lề chuẩn xác"): Đề xuất bỏ, chờ sinh viên đồng ý.
5. Giả định mới phát sinh khi cập nhật: Đánh số tiếp `GĐ-nn`, ghi "AI đề xuất khi cập nhật theo CH-xx; SV xác nhận".
6. Survey được bổ sung sau khi viết bản AI: Sửa các mã bị ảnh hưởng; dòng sai do survey cũ ghi Loại "Sai" kèm căn cứ là ảnh mới.
7. Cập nhật mục tổng hợp, ghi "Cập nhật: <thời gian> (vòng ...)" ở đầu file, viết bảng thay đổi. Chạy lại `oracle`, `changes`, `format`. **Dừng.**

## Ghi chú cho bước sau

- `ai-draft` dùng mục tổng hợp theo IA và màn hình, các quyết định CH, giả định GĐ và mục `NR-nn` làm đầu vào.
- Cặp mã trùng ý chỉ sinh **một** mục checklist.
- Mã `Áp dụng một phần` chỉ sinh mục cho phần đã ghi là áp dụng.
