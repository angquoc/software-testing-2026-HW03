# Bài học: Checklist tự kiểm trước khi giao

Rút từ các bảng "Thay đổi so với bản AI" và mục đối chiếu của lần làm đầu (HW03 Task 1, EShop, W-06, W-04, W-03). Mỗi mục ghi lỗi đã gặp để hiểu vì sao có quy tắc. Đi qua checklist của bước đang làm **trước khi giao** bản AI và bản review.

## Chung cho mọi bước

- [ ] Các quyết định ảnh hưởng tới cấu trúc cả bản đã được hỏi **trước** khi viết.
  *Đã gặp:* Câu hỏi "checklist GUI có kiểm logic, phân quyền, bảo mật không" để tới bản AI của `oracle`, nên 8 mã phải ghi `⏳ SV quyết định` và cả bước `ai-draft` sau đó vẫn sinh mục lẫn kết quả chức năng.
- [ ] Không khẳng định quá căn cứ; chỗ SRS không nói thành câu hỏi có phương án; AI không tự chọn.
- [ ] Bảng thay đổi ghi đúng loại và **đúng người phát hiện**; không rõ thì hỏi.
- [ ] Đếm, đánh mã, tham chiếu bằng `scripts/check_checklist.py`, không đếm tay.
- [ ] Khi một bước trước được bổ sung (ví dụ survey có ảnh mới), đã báo những bước sau bị ảnh hưởng.

## `survey`

- [ ] Đã nhắc sinh viên thử rê chuột và bấm vào các chữ có thể là link (lời chào, logo, chữ khác màu).
  *Đã gặp:* Ảnh tĩnh không cho thấy lời chào "Chào, <Họ Tên>" trên navbar là link tới `/profile`. Survey và cả bản AI của `oracle` ghi "navbar không có mục riêng cho trang hồ sơ"; sinh viên phát hiện sau và chụp thêm ảnh (loại Sai ở `oracle`).
- [ ] Ảnh chụp cả cửa sổ trình duyệt; nếu ảnh bị cắt mất thanh tab thì nhờ sinh viên ghi tay tiêu đề tab.
  *Đã gặp:* Ảnh bắt đầu từ thanh địa chỉ nên không thấy tiêu đề tab; sinh viên phải bổ sung bằng tay.
- [ ] Các ô ảnh không cho thấy (ô có che ký tự không, ô có khóa không) để `?` cho sinh viên điền, không suy đoán.
- [ ] Ngày giờ chụp đối chiếu với đồng hồ trong ảnh nếu thấy.
  *Đã gặp:* Sinh viên ghi một mốc giờ; ảnh cho thấy cả khoảng 20:40 đến 20:54.
- [ ] Đã hỏi cách tạo dữ liệu cho các trạng thái (danh sách trống, đủ các trạng thái bản ghi).

## `oracle`

- [ ] Câu hỏi phân nhóm (nút nào là "tích cực", nút nào là "nguy hiểm") có phương án đánh chữ.
  *Đã gặp:* Câu trả lời vòng một của sinh viên nêu hai dạng cho nút đăng xuất, chưa chọn; phải có vòng hai.
- [ ] Chuẩn địa phương khác cách viết trong SRS (ví dụ dấu phân cách hàng nghìn): Hỏi kiểm theo bên nào, không tự chọn.
- [ ] Mục sinh viên muốn kiểm ngoài SRS ghi `NR-nn` là **khuyến nghị**, kèm nguồn, kể cả khi sinh viên dùng chữ "bắt buộc".
- [ ] Đề xuất bỏ ý không kiểm được bằng Passed / Failed.
  *Đã gặp:* Ý "dấu `*` được canh lề chuẩn xác" bị bỏ vì mơ hồ.

## `ai-draft`

- [ ] Mỗi mục kiểm **một** điều.
  *Đã gặp:* 4 mục kiểm hai điều (nội dung thông báo lỗi nêu ô sai và nêu điều kiện; dữ liệu và navbar sau đăng xuất; hai tiêu chí "thân thiện"; tên đọc được và bấm nhãn), phải tách (loại Mơ hồ).
- [ ] Kết quả mong đợi chỉ nói phần nhìn thấy được nếu đã chốt không kiểm logic.
  *Đã gặp:* "Form từ chối, không đăng ký", "không đăng nhập vào" là kết quả chức năng (loại Thừa).
- [ ] Không biến checklist GUI thành domain testing: Một giá trị dữ liệu đủ làm hiện thông báo là đủ.
  *Đã gặp:* 6 giá trị mật khẩu yếu, kiểm biên số điện thoại; giảm còn 1 giá trị hoặc bỏ (loại Thừa).
- [ ] Ý chung (ví dụ "thông báo bằng tiếng Việt, không có chữ kỹ thuật") chỉ nằm ở một mục.
  *Đã gặp:* Ý này lặp ở 8 mục IA-04, phải gom về một mục IA-01 (loại Thừa).
- [ ] Định nghĩa khái niệm dễ hiểu sai được kiểm với giao diện thật.
  *Đã gặp:* "Highlight mục navbar" định nghĩa là khác các mục khác; nhưng lời chào luôn khác màu các mục khác, nên mục kiểm "không có mục nào bị highlight sai" sẽ luôn Failed. Sửa thành so mục với **chính nó** ở trang khác (loại Sai).
- [ ] Mong đợi theo template không trái với chuẩn; nếu trái thì đưa thành CHD.
  *Đã gặp:* Template ghi ô read-only không nhận focus; chuẩn HTML cho ô `readonly` nhận focus (loại Sai).
- [ ] Giá trị test thật sự cho kết quả mong đợi theo chuẩn của trình duyệt.
  *Đã gặp:* `abc@domain` được ô `type="email"` chấp nhận, không dùng làm email sai (loại Mơ hồ).
- [ ] Dữ liệu chuẩn bị tạo được bằng cách sinh viên có.
  *Đã gặp:* Điều kiện "đơn có ngày lớn hơn 12" không tạo được vì các đơn do script tạo dữ liệu sinh ra đều mang ngày 9 hoặc 10 (loại Sai).
- [ ] Mục áp cho màn hình phải có cơ sở ở màn hình đó; chuẩn áp đúng phạm vi.
  *Đã gặp:* Kiểm "từ chối chuỗi chỉ có khoảng trắng" ở màn hình SRS không quy định trường bắt buộc; WCAG 3.3.8 áp cho trang đăng ký (loại Thừa).
- [ ] Mục không mâu thuẫn với mã oracle khác.
  *Đã gặp:* Đòi thông báo đăng nhập sai nêu ô nào sai, trái với yêu cầu không lộ chi tiết nguyên nhân (loại Sai).
- [ ] Cách kiểm làm được bằng thao tác người dùng, không đòi biết nội bộ.
  *Đã gặp:* "Xóa token trong storage" đòi biết hệ thống lưu token ở đâu; đổi thành "Clear site data" (loại Mơ hồ).
- [ ] Không có chữ mơ hồ: "hoặc tương đương", "đầy đủ", "so với dữ liệu đã lưu" mà không nêu giá trị.
- [ ] Mục phụ thuộc mục khác có ghi chú cách ghi kết quả khi không chạy được.
- [ ] Không có hai mục cho cùng một quan sát ở hai IA (ví dụ hiệu ứng rê chuột trên nút ở IA-03 và IA-04).

## `review`

- [ ] Mỗi mục AI có đúng một xử lý (giữ, sửa, bỏ, gộp, tách); mục bỏ hoặc gộp nằm ở bảng riêng có lý do.
- [ ] Mã `CL` liên tục; mục tách giữ cùng mã AI gốc; mục mới từ câu trả lời CHD ghi `SV thêm (từ CHD-nn)`.
- [ ] Quy ước mới phát sinh khi review (cách ghi "Không chạy được", định nghĩa highlight) đã vào mục Quy ước và các mục liên quan.
- [ ] Đã kiểm mâu thuẫn giữa các quyết định CHD với nhau và với `01_oracle.md`.

## `add`

- [ ] AI không viết mục mới thay sinh viên.
- [ ] Mỗi mục thêm có "Vì sao AI bỏ sót" hợp lệ; mục AI đã xét và loại thì ghi "Không áp dụng" và Loại "Quyết định của SV".
  *Đã gặp:* 2 trong 4 mục sinh viên thêm là mục bản AI đã xét và loại (nút hiện / ẩn mật khẩu, chống gửi trùng), không phải bỏ sót.
- [ ] Mục thêm không trùng mục có sẵn; nếu gần trùng thì cách kiểm làm rõ khác biệt.
  *Đã gặp:* Mục chống gửi trùng gần với mục "có dấu hiệu đang xử lý"; phân biệt bằng cách đếm request trong tab Network.
- [ ] Có kết luận cho từng mảng đề gợi ý (accessibility, RTL, dark mode), kể cả khi không thêm mục.

Các mục sinh viên thêm ở lần đầu, để thấy AI hay bỏ sót gì: Khổ màn hình điện thoại (AI chỉ kiểm 1366 x 768 và zoom 200%); số điện thoại hợp lệ dính khoảng trắng hai đầu khi dán (AI chỉ kiểm chuỗi toàn khoảng trắng).

## `excel`

- [ ] Excel sinh lại từ `02_checklist.md`, không sửa nội dung trong Excel.
- [ ] Số mục trong Excel khớp mục tổng hợp; không ghi đè file đã có kết quả chạy.

## `exec`

- [ ] Kết quả nháp của script chưa phải kết quả cuối; đã chạy tay mọi mục "Chạy tay".
  *Đã gặp:* Bảng cuối của script NT1 có 39 Passed, 44 Failed, 7 Không chạy được, 22 Chạy tay; sau khi sinh viên chạy tay, chụp bổ sung và AI xem ảnh, kết quả chốt là 51 Passed, 54 Failed, 7 Không chạy được.
- [ ] Mục AI kết luận bằng cách xem ảnh có nhãn `(AI xem ảnh)` trong Notes, và sinh viên đã review.
  *Đã gặp:* 21 mục NT1 do AI kết luận từ ảnh (ngôn ngữ, highlight, zoom 200%); ghi nhãn để sinh viên biết mục nào cần xem kỹ.
- [ ] Ảnh tự chụp thật sự thấy lỗi; chụp bổ sung đúng lúc lỗi hiện.
  *Đã gặp:* Hộp thoại `alert` tự đóng trước khi chụp nên không có trong ảnh; phải thêm một nhóm chụp riêng lúc hộp thoại đang mở. 8 mục Failed (focus sau khi báo lỗi, lỗi lúc rê chuột, lúc đang tải, trong tab Network, hộp xác nhận không xuất hiện, bước xóa dữ liệu site) không báo lên Issues được vì ảnh không thấy lỗi.
- [ ] Bug chặn điều kiện của mục khác thì mục đó ghi "Không chạy được" kèm lý do, không ghi Failed.
  *Đã gặp:* Trang Đăng ký từ chối mọi mật khẩu hợp lệ, nên 5 mục (email sai định dạng, email trùng, Họ Tên chỉ có khoảng trắng, chuyển trang và thông báo sau khi đăng ký thành công) ghi "Không chạy được"; issue của lỗi này ghi đủ các mục bị chặn.
- [ ] Giá trị thay thế để vượt một bug chỉ dùng cho mục không kiểm quy tắc đó, và ghi trong Notes.
  *Đã gặp:* Trang hồ sơ từ chối số điện thoại hợp lệ `0912345678`; script dùng số trang chấp nhận cho các mục chỉ cần một lần gửi thành công (đang chờ, mất kết nối, gửi trùng).
- [ ] Script đổi dữ liệu thì ghi rõ ở đầu script và nhắc reset sau khi chạy; mục khóa tài khoản chạy cuối.
- [ ] Ảnh mục Failed chụp toàn màn hình (thấy thanh địa chỉ, tab, taskbar), đúng tên quy ước; ảnh đã có thì không ghi đè.
- [ ] Sheet "Môi trường" ghi cả kích thước vùng trang của script và cửa sổ khi chạy tay nếu khác nhau.

## `bugs`

- [ ] Nhiều mục cùng một lỗi gốc gộp một issue.
  *Đã gặp:* Số điện thoại hợp lệ bị từ chối làm Failed 3 mục (cập nhật thành công, khoảng trắng hai đầu, dữ liệu điền sẵn sau khi lưu), gộp vào một issue.
- [ ] Lỗi ở thành phần dùng chung đã có issue thì bình luận, không tạo mới; lỗi cùng loại ở màn hình khác thì ghi `Related #<số>`.
- [ ] Ô "Mục checklist" của issue ghi cả các mục bị lỗi này chặn.
- [ ] Ảnh ghép đúng tên file.
  *Đã gặp:* Kéo 31 ảnh vào một ô bình luận, GitHub sinh mọi thẻ với `alt="Image"`, nên alt không cho biết tên file; phải ghép theo thứ tự kéo thả và kiểm lại từng ảnh sau khi chèn.
- [ ] Mọi mục Failed có mặt ở đúng một nơi (issue, bình luận, hoặc bảng "không báo" có lý do).
- [ ] Chụp danh sách issue đã lọc **sau** khi chèn ảnh xong.
