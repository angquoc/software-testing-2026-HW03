# Bước `exec` và `bugs`: Khung, bổ sung sau

Hai bước này **chưa làm xong** ở lần làm đầu, nên skill chưa có quy trình đã kiểm chứng. Phần dưới chỉ là khung: Những ràng buộc đã chốt từ trước (ở `rules.md` và quy trình của dự án) và các quyết định còn mở. Không tự điền nội dung cho các quyết định mở; khi sinh viên làm tới bước này, hỏi và ghi lại, rồi cập nhật file này sau khi làm thật.

Khi được gọi ở bước này: Đọc quy trình của dự án, làm theo quy trình đó, và báo cho sinh viên rằng skill chưa có hướng dẫn đã kiểm chứng cho bước này.

---

## Bước `exec`: Chạy checklist

**Trạng thái:** Bổ sung sau.

Ràng buộc đã có (không phải quy trình mới):

- Kết quả thực tế chỉ lấy từ lần chạy thật của sinh viên. AI không ghi Passed hay Failed, không điền Notes thay sinh viên, không tạo hay chỉnh ảnh.
- DevTools và công cụ kiểm tra chỉ dùng để kiểm những gì **mục checklist yêu cầu**, không để tìm thêm mục.

Quyết định mở:

- ⏳ AI có hỗ trợ gì ở bước này không, và hỗ trợ tới đâu (ví dụ script DevTools chỉ đọc trang, in kết quả nháp để sinh viên đối chiếu; lần làm đầu có thử một script như vậy, nhưng chưa xong bước nên chưa đưa vào skill).
- ⏳ Cách ghi kết quả ngoài Excel (file tóm tắt kết quả, cấu trúc của nó).
- ⏳ Cách xử lý mục phát hiện thêm trong lúc chạy.
- ⏳ Cách đặt tên và lưu ảnh mục Failed (theo quy trình của dự án nếu có).
- ⏳ Cách ghi môi trường của lần chạy.

---

## Bước `bugs`: Báo bug

**Trạng thái:** Bổ sung sau.

Quyết định mở:

- ⏳ AI có soạn nội dung issue không, và theo mẫu nào (quy ước issue của nhóm, nếu có).
- ⏳ Cách kiểm issue trùng trước khi tạo.
- ⏳ Cấu trúc file bug report trong repo cá nhân.
- ⏳ Cách xếp severity (do sinh viên chốt; AI có được đề xuất không).
