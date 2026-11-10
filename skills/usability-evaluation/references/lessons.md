# Bài học: Checklist tự kiểm trước khi giao

Rút từ các bảng "Thay đổi so với bản AI" của lần làm đầu (HW03 Task 2, EShop, luồng FL-05 Web Admin). Mỗi mục ghi lỗi đã gặp để hiểu vì sao có quy tắc. Đi qua checklist của bước đang làm **trước khi giao** bản AI và bản review.

## Chung cho mọi bước

- [ ] Không có thông tin cá nhân của người tham gia; chạy `check_usability.py privacy`.
- [ ] Không có dữ liệu "của người thật" do AI tạo (thời gian đo, câu trả lời, ghi chú).
- [ ] Mỗi điểm cần chọn có mã `QĐ`, phương án đánh chữ, dấu `⏳`; AI không chọn thay.
- [ ] Quyết định bước này chốt cho bước trước đã được cập nhật ở cả bản review của bước trước.
  *Đã gặp:* Plan có 5 quyết định để mở, chốt dần ở `scenario` và `instruments`; phải quay lại cập nhật trạng thái ở plan.
- [ ] Hành vi của giao diện mà ảnh không cho thấy đã được hỏi sinh viên thử, không đoán.
- [ ] Bảng thay đổi ghi đúng người phát hiện và ghi rõ khi sinh viên chọn khác gợi ý của AI.

## `plan`

- [ ] Đã có ảnh luồng trước khi viết, gồm trạng thái **ngay sau mỗi lần lưu**.
  *Đã gặp:* Bản AI viết khi chưa có ảnh; khi review với ảnh có 10 dòng loại Thiếu: Không có thông báo sau khi lưu, form tự xóa trắng, khối nhập CSV nằm trên form thêm, ô danh mục mặc định chọn sẵn, ô không có nhãn và không có dấu `*`, trang đăng nhập tiếng Anh, dấu hiệu kết thúc chặng chưa theo giao diện thật.
- [ ] Mỗi câu hỏi `Qn` dựa trên một điểm thấy trong ảnh hoặc một yêu cầu SRS, gắn chặng và khía cạnh probe.
- [ ] Dấu hiệu kết thúc chặng quan sát được trên giao diện; kết quả không thấy được trong phiên ghi là kiểm sau phiên, kèm cách kiểm.
  *Đã gặp:* Bảng sản phẩm không có cột danh mục; phải kiểm bằng trang chi tiết trên web bán hàng (một FR ngoài phân hệ Admin) hoặc form sửa (loại Thiếu, "Đặc thù giao diện").
- [ ] Đã xét FR của màn hình khác có thể dùng để kiểm kết quả cuối.
- [ ] Rủi ro do giao diện đã nêu (giá trị mặc định cộng với không có thông báo khiến dữ liệu sai mà không ai nhận ra).
- [ ] Giả định về giao diện đã đối chiếu với ảnh; rủi ro đã loại trừ bằng ảnh thì bỏ.
  *Đã gặp:* Rủi ro "danh mục mới không hiện trong form sản phẩm" đã được ảnh và sinh viên xác nhận là không xảy ra (loại Thừa).

## `scenario`

- [ ] Kịch bản không dùng nguyên văn nhãn nút, menu; từ khóa trùng nhãn có ghi lưu ý khi phân tích.
- [ ] Cách ghi dữ liệu trên phiếu đã được sinh viên thử trên ô thật.
  *Đã gặp:* Phiếu đề xuất ghi giá `2.990.000 ₫`; sinh viên thử thì ô tự đổi thành `2.990000` và không sửa được, nên phiếu ghi `2990000` (loại Thiếu, "Prompt").
- [ ] Tiêu chí hoàn thành ghi đúng **cái người điều phối nhìn thấy** trên giao diện, không theo định dạng mong muốn.
  *Đã gặp:* Tiêu chí "giá đúng 2.990.000 ₫" trong khi bảng hiện `2990000 ₫` (loại Sai).
- [ ] Không có con số thời gian chuẩn chưa có căn cứ đo; có cách đo và bảng để sinh viên điền.
  *Đã gặp:* Bản AI đưa 1, 2, 4, 7 phút; sinh viên tự đo (toàn luồng 46 giây) và chọn bội số x5.
- [ ] Trạng thái ban đầu loại trừ mật khẩu đã lưu và tiện ích tự dịch.
- [ ] Tình huống đặc biệt đi theo lỗi dễ xảy ra trên giao diện thật, tách các biến thể khác nhau (nhập sai số chữ số 0 khác với gõ dấu chấm theo thói quen).
- [ ] Có mục "Cần kiểm ở pilot" cho mọi giả định và con số chưa chắc.

## `instruments`

- [ ] Mục đích của văn bản đọc cho người tham gia được nói rõ.
  *Đã gặp:* Sinh viên hỏi "đọc nguyên văn" là để ghi âm nộp hay để nói với người tham gia (loại Mơ hồ).
- [ ] Có cách xử lý khi think-aloud không đủ: Người nói ít, người làm nhanh ít nói, người không đồng ý ghi âm.
  *Đã gặp:* Bản AI không nghĩ tới việc think-aloud không thu được khi không có âm thanh, dù plan ghi ghi âm là không bắt buộc (loại Thiếu, "Giới hạn model").
- [ ] Cách đưa thang đo nêu hạn chế: Trả lời trước mặt người điều phối có thể làm điểm cao hơn.
  *Đã gặp:* Bản AI đề xuất người điều phối đọc từng câu cho phiên từ xa mà không nêu hạn chế này; sinh viên đổi sang tự điền form (loại Thiếu, "Giới hạn model").
- [ ] Bằng chứng đồng ý có tên hoặc ảnh đại diện được lưu ngoài repo.
- [ ] Mã nhắc think-aloud (mức 0) ghi rõ không tính là can thiệp.
  *Đã gặp:* Bản AI gộp mã nhắc với mã can thiệp mà không nói rõ mức nào được tính (loại Mơ hồ).
- [ ] Mã sự kiện ở phiếu ghi chú khớp số liệu của plan và tình huống của kịch bản.
- [ ] Câu hỏi mở phủ đủ khía cạnh đề yêu cầu, câu chữ trung lập; có phần hỏi theo tình huống và hỏi lại điểm vướng.
- [ ] Danh sách chuẩn bị đã cập nhật theo mọi quyết định (form thang đo, tin nhắn đồng ý).
