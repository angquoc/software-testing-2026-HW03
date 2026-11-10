# Bước `instruments`: Bộ công cụ cho phiên

**Mục tiêu:** Mọi văn bản và biểu mẫu người điều phối dùng trong một phiên, để các phiên giống nhau và số liệu ghi được đúng mã đã định ở plan và kịch bản. Đề yêu cầu tối thiểu: Thang đo chuẩn sau phiên (SUS hoặc UEQ-S, hoặc thang tự chọn có lý do) và câu hỏi mở về clarity, error recovery, speed, trust.

**Đầu ra:** `ai_raw/T2_instruments.md`, `03_instruments.md`.

## Hỏi trước khi viết

- Cách xin và lưu bằng chứng đồng ý (lời nói trong video, phiếu ký, tin nhắn trước ngày phiên). Ở lần làm đầu, bản AI đưa hai phương án, sinh viên chọn cách thứ ba (tin nhắn); hỏi trước giúp bản AI viết đúng hướng. Nếu sinh viên chưa muốn chốt thì để `QĐ`.
- Cách người tham gia trả lời thang đo (tự điền trên giấy hoặc form, hay người điều phối đọc). Nêu rõ hạn chế của từng cách, đặc biệt **trả lời trước mặt người điều phối có thể làm điểm cao hơn**.

## Pha B: AI viết bản gốc

Theo mẫu `assets/templates/instruments.md`. Mục 0 liệt kê căn cứ và bảng công cụ (mã, công cụ, dùng lúc, lưu ở đâu). Sau đó:

- **I1. Danh sách chuẩn bị phiên:** Lấy từ môi trường của plan và trạng thái ban đầu của kịch bản; mỗi dòng một việc kiểm được, có ô đánh dấu. Gồm cả việc của phiên trước (đã kiểm kết quả cuối chưa) và việc riêng của phiên từ xa.
- **I2. Đồng ý, lời dặn mở đầu, think-aloud:**
  - Nói rõ mục đích: Đây là văn bản người điều phối **đọc cho người tham gia nghe** để họ nắm tình hình và để các phiên mở đầu giống nhau.
  - Xin đồng ý: Các ý cần đồng ý tách riêng (quay màn hình, ghi âm, được gọi xác minh nếu đề có); ý nào bắt buộc theo tiêu chí, ý nào không; lưu bằng chứng ở đâu (bằng chứng có tên, ảnh đại diện thì lưu ngoài repo).
  - Lời dặn: "Đang kiểm tra sản phẩm, không kiểm tra bạn"; được dừng bất cứ lúc nào.
  - Giới thiệu think-aloud; người điều phối sẽ không giải thích hay chỉ cách.
  - **Khi think-aloud không đủ:** Người nói ít (nhắc bằng câu mức 0 sau một khoảng im lặng, đề xuất để kiểm ở pilot; hỏi lại sau phiên); người rành công nghệ làm nhanh, ít nói (không ép; lấy "vì sao" qua câu hỏi mở); người không đồng ý ghi âm (ghi tay câu nói ngay lúc nghe, đánh dấu "(ghi tay)").
- **I3. Phiếu thông tin trước phiên:** Phần A xác nhận tiêu chí (Có / Không, ghi rõ câu nào phải là gì); phần B đặc điểm theo plan. Không có câu hỏi tên, liên lạc. Câu AI đề xuất thêm ngoài plan thì ghi rõ để sinh viên quyết định giữ hay bỏ.
- **I4. Phiếu ghi chú quan sát** (mẫu cho hồ sơ mỗi phiên): Thông tin phiên (mã, ngày giờ, hình thức, trình duyệt, OS, thiết bị nhập, đồng ý, có âm thanh không, kết quả, số can thiệp); bảng mốc `Tn`; kết quả theo chặng (thời gian, thời gian chuẩn, vượt chuẩn, kết quả); nhật ký sự kiện (mốc video, chặng, mã, mô tả, trích lời); **bảng mã sự kiện** gắn với từng số liệu `Dn` của plan; kiểm kết quả cuối sau phiên (làm trước khi reset); ba điểm vướng nổi bật để hỏi lại.
- **I5. Thang đo:** Đưa các phương án đề cho phép (ví dụ SUS và UEQ-S) với ưu nhược, để `QĐ`. Với mỗi phương án: Câu hỏi đúng thứ tự, thang điểm, cách tính (nguồn), mẫu ghi câu trả lời nguyên văn. Bản dịch câu hỏi do AI dịch thì ghi rõ "bản dịch của AI, cần kiểm ở pilot". Cách đưa thang đo theo quyết định đã hỏi.
- **I6. Câu hỏi mở:** Hỏi **sau** thang đo; câu chữ trung lập, không gợi ý. Bắt buộc: Mỗi khía cạnh đề yêu cầu ít nhất một câu, kèm câu hỏi thêm và liên kết với `Qn`; một câu mở đầu "kể lại", hai câu tổng kết (dễ nhất, muốn sửa gì). Theo tình huống (branching, slide S13): Chỉ hỏi khi phiếu ghi chú có mã tương ứng. Phần hỏi lại các điểm vướng và đoạn im lặng. Mẫu ghi câu trả lời theo ý.
- **I7. Lời kết:** Cảm ơn; nhắc lại chỗ khó là của trang web; nhắc việc được gọi xác minh và quyền rút dữ liệu; ghi chú việc sau khi dừng quay.
- **Cần kiểm ở pilot** và **Tổng hợp các quyết định để mở ⏳**.

Tự kiểm: `format`, `ids`, `privacy`; mã sự kiện ở I4 khớp với `Dn` của plan và tình huống của kịch bản; câu hỏi mở phủ đủ khía cạnh; checklist bước `instruments` trong `lessons.md`. **Dừng**, đưa commit message.

## Pha D: Bản review `03_instruments.md`

- Giữ phương án thang đo đã chọn, bỏ phương án kia (ghi "bản đầy đủ vẫn ở `ai_raw/...`").
- Áp các quyết định về đồng ý, cách đưa thang đo; cập nhật I1 và trình tự I5, I7 cho khớp (ví dụ người tham gia tự điền form trên điện thoại thì người điều phối làm việc kiểm kết quả cuối song song).
- Cập nhật trạng thái quyết định của plan (ví dụ chọn thang đo) ở cả `01_test_plan.md`.
- Viết bảng thay đổi. Chạy lại script. **Dừng.**
