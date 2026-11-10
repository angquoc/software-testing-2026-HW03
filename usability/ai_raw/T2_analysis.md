# T2 analysis: Phát hiện usability luồng FL-05 (bản AI)

- Bước: `[T2][analysis]`
- Thời gian tạo: 2026-11-11 02:00
- Công cụ: Claude Code (Claude Opus 5.5)
- Dữ liệu: `04_scores.md`; `sessions/P1/` đến `sessions/P7/` (`notes.md`, `probe.md`, `scale.md`); pilot `pilot/` chỉ dùng làm bằng chứng phụ, không tính vào số người; `bugs/bug_report.md` (B-T2-01, B-T2-02); ảnh `screenshots/`. Không đọc `participants.md`, video
- Severity của từng phát hiện là **đề xuất của AI**; sinh viên chốt (WORKFLOW mục 3.2.3)

---

## 1. Cách gom và xếp hạng

| Bước | Cách làm |
|---|---|
| Gom pain point | Bắt đầu từ chặng thất bại (M3, M1 của P7) và các mã sự kiện lặp lại (`04_scores.md` mục 4, 5, 7); gộp các quan sát cùng nguyên nhân trên giao diện thành một phát hiện; thêm ý từ câu hỏi mở (C1 đến C9) và lời think-aloud |
| Tách bug và vấn đề thiết kế | Đối chiếu SRS (FR-02, FR-14, FR-15, FR-21 đến FR-24): Hệ thống làm sai một câu cụ thể của SRS thì là **bug** (đã lên Issues); SRS không yêu cầu hoặc cho phép thì là **vấn đề thiết kế** (chỉ ghi ở đây, README nhóm mục 4.1) |
| Probability | Số người gặp / 7 (test plan mục 8.4). Pilot `PL` không tính, chỉ ghi làm bằng chứng phụ |
| Severity (đề xuất) | ⏳ QĐ6: Thang severity cho phát hiện usability. AI đề xuất **Nielsen 0 đến 4**: 0 không phải vấn đề; 1 thẩm mỹ, sửa khi có thời gian; 2 nhỏ, ưu tiên thấp; 3 lớn, ưu tiên cao; 4 thảm hoạ, phải sửa trước khi phát hành. Bug trên Issues vẫn dùng 4 mức của nhóm |
| Criticality | Severity × probability (test plan mục 8.4, slide S13 "Analyzing Data") |

## 2. Bảng phát hiện (xếp theo criticality)

| Mã | Phát hiện | Chặng | Người gặp | Probability | Loại | Severity đề xuất (⏳ SV chốt) | Criticality |
|---|---|---|---|---|---|---|---|
| F1 | Ô danh mục trong form sản phẩm bị bỏ qua: Sản phẩm vào "Điện thoại" mà người dùng không biết | M3 | P1, P4, P5 | 3/7 | Thiết kế | 4 | 1,71 |
| F2 | Không biết bước tiếp theo và khi nào là xong: Mở lại kịch bản ở Dashboard, sau khi tạo danh mục, sau khi lưu sản phẩm | M2, M3, sau T3 | P2, P3, P4, P5, P6 | 5/7 | Thiết kế (một phần do cách làm bài) | 2 | 1,43 |
| F3 | Đăng nhập: Không xem được mật khẩu, không cảnh báo Caps Lock, thông báo lỗi chung chung | M1 | P5, P7 | 2/7 | Thiết kế | 3 | 0,86 |
| F4 | Nút "Thêm mới" tạo ngay danh mục không tên khi ô tên trống | M2 | P1, P4 (P3 suýt bấm; PL) | 2/7 | **Bug** B-T2-01 (#66), kèm vấn đề thiết kế | 2 | 0,57 |
| F5 | Sau khi lưu ở form "Sửa", bảng hiện sai; lần sửa tiếp theo ghi đè dữ liệu | M3 | P4 (người điều phối cũng bị) | 1/7 | **Bug** B-T2-02 (#67) | 4 | 0,57 |
| F6 | Ô giá không có dấu phân cách: Gõ tay dễ thiếu chữ số 0 mà không thấy | M3 | P1 (PL; P3 góp ý) | 1/7 | Thiết kế | 3 | 0,43 |
| F7 | Giao diện trông lỗi thời, "giống AI làm" | Toàn luồng | P2, P6 | 2/7 | Thiết kế (thẩm mỹ) | 1 | 0,29 |
| F8 | Khối "Import sản phẩm từ CSV" ở đầu trang sản phẩm gây khó hiểu | M3 | P6 | 1/7 | Thiết kế | 1 | 0,14 |
| F9 | Nút "Xóa" xóa ngay, không hỏi xác nhận | M2 | P4 | 1/7 | Thiết kế | 1 | 0,14 |

Ghi chú về xếp hạng:

- F5 có probability thấp (1/7) chỉ vì chỉ một người dùng form "Sửa"; trong số người đã lưu bằng form "Sửa", tỷ lệ gặp là 1/1. Bug này làm mất dữ liệu (Critical trên Issues), nên đề xuất ưu tiên sửa ngang F1 dù criticality theo công thức thấp.
- F2 có probability cao nhưng một phần do cách làm bài (kịch bản dài, dữ liệu nằm ở file riêng): Xem mục 4.

## 3. Chi tiết từng phát hiện

### F1: Ô danh mục trong form sản phẩm bị bỏ qua

- **Quan sát:** P1 (01:43) và P5 (01:58) lưu sản phẩm khi chưa chọn danh mục; sản phẩm vào danh mục mặc định "Điện thoại" và cả hai nói xong mà không biết (`04_scores.md` mục 6). P4 cũng lưu khi chưa chọn (01:41), chỉ phát hiện ra khi mở form "Sửa" để tìm lỗi ảnh. P1 còn mở form "Sửa" để kiểm (01:47 đến 01:57) mà vẫn không thấy ô danh mục sai.
- **Lời người tham gia:** P1 (C7): "Không để ý lắm, tưởng có tên loa là được". P5 (C7): "Ủa có phần đó hả, chết, hình như quên bỏ rồi." Cả P1, P5 trả lời C3 ("ô nào không chắc phải điền gì") là "Không có": Họ không thấy ô danh mục, chứ không phải thấy mà không hiểu.
- **Nguyên nhân trên giao diện:** Ô danh mục là ô chọn không có nhãn, chọn sẵn "Điện thoại", không có lựa chọn trống, nằm dưới ô Mô tả, trông giống một phần đã điền xong (`flow_07`, `flow_08`). Form không bắt chọn lại. Sau khi lưu, bảng sản phẩm không có cột danh mục (`flow_11`) nên người dùng không có chỗ nào để thấy sai (`04_scores.md` mục 7: Không ai chủ động kiểm danh mục).
- **Đối chiếu SRS:** FR-15: "Danh mục: bắt buộc, phải chọn từ danh sách có sẵn." Hệ thống có ép phải có danh mục (đã chọn sẵn), nên không sai câu chữ SRS: Vấn đề thiết kế, không lên Issues.
- **Đề xuất:** Ô danh mục có nhãn "Danh mục *" và lựa chọn đầu là "Chọn danh mục" (không chọn sẵn), báo lỗi nếu chưa chọn; thêm cột "Danh mục" vào bảng sản phẩm; nếu vừa tạo danh mục, đề xuất chọn sẵn danh mục đó.
- **Liên quan câu hỏi:** Q4, Q7.

### F2: Không biết bước tiếp theo và khi nào là xong

- **Quan sát:** 11 lần mở lại kịch bản ở 5 người (`04_scores.md` mục 5): Ngay khi vào Dashboard (P2 00:58, P4 00:25, P5 00:24, P6 00:26), sau khi tạo xong danh mục (P2 01:37, P3 01:00, P4 00:52, P5 00:58), sau khi lưu sản phẩm (P2 02:45, P5 01:58). P3 còn mở lại kịch bản ở trang danh mục vì quên tên cần tạo (00:54).
- **Lời người tham gia:** P2 (01:37): "Ủa rồi làm sao nữa, chưa hiểu lắm". P5 (01:58): "Ủa ủa là xong chưa, xong rồi đó hả". P1 lúc đọc xong đề (00:16): "Là sao? Đề nói gì vậy? Chưa hiểu lắm, thôi để đăng nhập". P1 (C5): "nhanh nhưng khó hiểu"; P2 (C5): "bình thường, giao diện lạ chưa quen".
- **Nguyên nhân trên giao diện:** Dashboard không gợi ý việc cần làm; sau khi tạo danh mục không có thông báo hay đường dẫn sang "Thêm sản phẩm" (Q2, `flow_05`); sau khi lưu sản phẩm không có thông báo, form tự xoá trắng, sản phẩm nằm cuối bảng (Q7, `flow_10`, `flow_11`).
- **Phần do cách làm bài:** Kịch bản và phiếu dữ liệu nằm ở file riêng và khá dài (P3 00:05: "Đề gì mà dài thế"); người tham gia mở lại để lấy dữ liệu (ví dụ P3 quên tên danh mục), không hẳn vì giao diện. Không tách được hai nguyên nhân bằng số liệu đang có, nên severity đề xuất thấp (2).
- **Đối chiếu SRS:** Không có câu SRS bắt buộc thông báo sau khi tạo danh mục hay sản phẩm (FR-24 chỉ nói giỏ hàng, empty state, `alt` ảnh): Vấn đề thiết kế.
- **Đề xuất:** Thông báo ngắn sau khi tạo danh mục và sau khi lưu sản phẩm (có nêu tên, danh mục); sau khi tạo danh mục, có nút "Thêm sản phẩm vào danh mục này"; đưa sản phẩm mới lên đầu bảng hoặc làm nổi dòng vừa thêm.
- **Liên quan câu hỏi:** Q1, Q2, Q7, Q9.

### F3: Đăng nhập không cho thấy mình đang nhập gì và vì sao sai

- **Quan sát:** P7 gõ tay mật khẩu, vô tình bật Caps Lock, sai hai lần (00:28, 00:37), chuyển sang dán mật khẩu và bấm liên tục, lần nào cũng chỉ thấy hộp thoại "Đăng nhập thất bại" (`P7_01_login_failed_alert.png`); phiên dừng ở M1. P5 đã dán đúng mật khẩu nhưng khựng lại trước khi bấm đăng nhập vì không xem được mình đã dán gì.
- **Lời người tham gia:** P5 (hỏi sau phiên): Ô mật khẩu không xem được nên không biết đã dán đúng chưa. P5 (C9): "Cho xem cái chỗ mật khẩu được không."
- **Nguyên nhân trên giao diện:** Ô mật khẩu không có nút hiện mật khẩu; không cảnh báo Caps Lock; mọi lần sai chỉ có một câu "Đăng nhập thất bại" qua hộp thoại trình duyệt, không gợi ý kiểm Caps Lock hay việc tài khoản có thể đang bị khoá tạm.
- **Đối chiếu SRS:** FR-02: Sau 3 lần sai tài khoản bị khoá 30 giây; "Hệ thống trả về thông báo lỗi phù hợp; không để lộ chi tiết nguyên nhân." Thông báo chung chung không trái SRS; sau phiên SV đăng nhập lại được nên khoá có hết hạn. Vấn đề thiết kế, không lên Issues.
- **Đề xuất:** Nút hiện hoặc ẩn mật khẩu; cảnh báo khi Caps Lock đang bật; thông báo lỗi trên trang (không dùng hộp thoại) có gợi ý chung ("Kiểm tra email, mật khẩu và phím Caps Lock; nếu sai nhiều lần, chờ 30 giây rồi thử lại") mà không lộ nguyên nhân cụ thể.
- **Liên quan câu hỏi:** Q6, Q9.

### F4: Nút "Thêm mới" tạo ngay danh mục không tên (bug #66)

- **Quan sát:** P1 (00:48) và P4 (00:40) bấm "Thêm mới" ngay khi vào trang "Quản lý Danh mục", ô tên còn trống; hệ thống tạo ngay một dòng không tên; cả hai tự xoá dòng đó (P1 01:04, P4 00:47 đến 00:52). P3 suýt bấm (00:50) nhưng dừng lại vì quên tên. Người pilot cũng gặp (`pilot/notes.md`, 00:29).
- **Lời người tham gia:** P1 (00:48): "Cái này xài sao, nhấn rồi có gì đâu. Ủa sao tạo luôn ở đây, sao không cho chỉnh." P4 (00:40): "Ủa là sao, không điền mà cũng tạo được à". P1 (C9): "Cho sửa tên danh mục khi tạo nhầm". PL (C9): Ô nhập nên là thanh tìm kiếm, nút tạo nên mở hộp thoại tạo.
- **Nguyên nhân trên giao diện:** Người dùng hiểu "Thêm mới" là nút mở form tạo danh mục (mô hình quen từ các trang khác), không thấy ô "Tên danh mục mới" bên cạnh là ô phải điền trước. Hệ thống không chặn tên trống (bug), và danh mục không có nút sửa tên.
- **Đối chiếu SRS:** FR-14: "Tên danh mục là bắt buộc, không được để trống." Sai SRS: **Bug** B-T2-01, issue #66 (`severity: medium`).
- **Đề xuất:** Chặn tạo khi tên trống và báo lỗi cạnh ô; ô tên có nhãn rõ ("Tên danh mục mới *"); có nút sửa tên danh mục.
- **Liên quan câu hỏi:** Q2, Q6.

### F5: Form "Sửa" làm bảng hiện sai và ghi đè dữ liệu (bug #67)

- **Quan sát:** P4 lưu sản phẩm với URL ảnh gõ nhầm và chưa chọn danh mục (01:41), mở "Sửa" sửa URL và danh mục, cập nhật thành công (01:55); bảng vẫn hiện ảnh hỏng nên P4 sửa thêm hai lần (02:12, 02:18) trên trang chưa tải lại rồi bỏ cuộc. Người điều phối kiểm D6 cũng trên trang chưa tải lại nên không thấy lỗi (`sessions/P4/notes.md` mục 6).
- **Lời người tham gia:** P4 (02:18): "Cái gì ảnh mà sửa rồi sao không ăn vậy, lần cuối không được nữa là chịu đấy". P4 (C9): "Sửa lại cái url giùm cái, cập nhật mà không ăn." P4 (C5): "Lúc đầu nhanh, lúc sau lỗi nên bị chậm". P4 có điểm SUS thấp nhất (45).
- **Nguyên nhân (tái hiện bằng script, 8 trường hợp):** Sau mỗi lần lưu, bảng hiện tên của sản phẩm vừa sửa ở mọi dòng, giá và ảnh vẫn là giá trị cũ; mở lại "Sửa" trên trang chưa tải lại thì form điền giá trị cũ (hoặc tên sai), và lưu lần nữa ghi đè dữ liệu đã lưu, kể cả tên của sản phẩm khác (`flow_14` đến `flow_18`). Mọi lần đều báo "Cập nhật thành công!".
- **Đối chiếu SRS:** FR-15: "Khi Sửa một sản phẩm, chỉ sản phẩm đó bị thay đổi", "các sản phẩm khác giữ nguyên." Sai SRS: **Bug** B-T2-02, issue #67 (`severity: critical`). Có thể liên quan #9.
- **Đề xuất:** Sau khi lưu, tải lại danh sách từ máy chủ (hoặc cập nhật đúng dòng vừa sửa); form "Sửa" lấy dữ liệu mới nhất của đúng sản phẩm; thông báo thành công nêu rõ sản phẩm nào đã đổi.
- **Liên quan câu hỏi:** Q6, Q7.

### F6: Ô giá không có dấu phân cách hàng nghìn

- **Quan sát:** P1 gõ tay giá và lưu `299000` (thiếu một chữ số 0); không nhận ra kể cả khi mở form "Sửa" để kiểm, và sau khi người điều phối gợi ý sao chép (01:24). Người pilot cũng thiếu một chữ số 0 (`299900`). Cả 5 người còn lại tới M3 đều sao chép giá từ phiếu nên không sai.
- **Lời người tham gia:** P3 (C9): "Giá tiền nhìn lé mắt nên muốn thêm dấu ngăn cách". P1 (khi được gợi ý sao chép): Nhập tay dễ hơn.
- **Nguyên nhân trên giao diện:** Ô giá chỉ có placeholder "Giá tiền", không có dấu phân cách, không có đơn vị; bảng cũng hiện giá liền một dãy số (`flow_09`, `flow_11`). Khi gõ dấu chấm theo thói quen, ô tự đổi thành dạng lạ như `2.990000` (`02_scenario.md` mục 2.2).
- **Đối chiếu SRS:** FR-15 chỉ yêu cầu giá là số dương; giá thiếu một chữ số 0 vẫn hợp lệ: Vấn đề thiết kế.
- **Đề xuất:** Hiện giá có dấu phân cách khi nhập và trong bảng (ví dụ `2.990.000 ₫`); nhắc khi giá mới chênh nhiều so với giá thường gặp, hoặc hiện giá đã định dạng ngay dưới ô.
- **Lưu ý:** Probability (1/7) có thể thấp hơn thực tế, vì phiếu dữ liệu cho sao chép (QĐ2c) nên đa số không gõ tay.
- **Liên quan câu hỏi:** Q5, Q6.

### F7: Giao diện trông lỗi thời, "giống AI làm"

- **Lời người tham gia:** P2 (C9): "Giao diện hơi lỗi thời, nên cải tiến đẹp hơn". P6 (C9): "Giao diện trông đơn giản mà cũng hơi AI, nên sửa lại cho thuận mắt hơn". P6 (01:00) về biểu tượng của khối CSV: "để icon như AI vậy".
- **Ảnh hưởng:** Không làm ai sai hay chậm; có thể làm giảm cảm giác tin tưởng. P2 vẫn cho SUS cao nhất (87,5).
- **Đề xuất:** Rà lại thẩm mỹ chung (biểu tượng, khoảng cách, màu) sau khi sửa các vấn đề lớn.

### F8: Khối "Import sản phẩm từ CSV" ở đầu trang sản phẩm gây khó hiểu

- **Quan sát:** P6 vào trang sản phẩm (00:56), thấy khối "Import sản phẩm từ CSV" đầu tiên (`flow_06`), không hiểu, rời sang "Mã giảm giá" (01:00) rồi quay lại sau 2 giây (01:02).
- **Lời người tham gia:** P6: "Import cái gì là sao, để icon như AI vậy, ảnh đồ gì cũng không có".
- **Đề xuất:** Đưa form "Thêm sản phẩm mới" lên trước, hoặc thu gọn khối CSV thành một nút "Nhập từ file CSV"; giải thích ngắn khối dùng để làm gì.
- **Liên quan câu hỏi:** Q3.

### F9: Nút "Xóa" xóa ngay, không hỏi xác nhận

- **Quan sát:** P4 xoá dòng danh mục trống và nhận xét nếu trượt tay bấm nhầm dòng "Loa Bluetooth" thì phải tạo lại (00:52). Không ai xoá nhầm trong phiên.
- **Lời người tham gia:** P4: "Xóa không báo gì luôn, nãy trượt tay nhầm qua loa là phải tạo lại rồi ha ha".
- **Đối chiếu SRS:** SRS chỉ bắt buộc hộp thoại xác nhận khi xoá sản phẩm khỏi giỏ hàng (FR-07, FR-24), không nói về Admin: Vấn đề thiết kế (Nielsen heuristic 5, phòng lỗi).
- **Đề xuất:** Hỏi xác nhận trước khi xoá danh mục và sản phẩm, hoặc cho hoàn tác.

## 4. Điểm tích cực

| Điểm | Bằng chứng |
|---|---|
| Thanh menu bên trái dễ thấy: Mọi người tới M2 đều tự tìm được "Danh mục" và "Sản phẩm", không ai cần can thiệp ở chặng này | C2 ở 6/6 người: "bên trái có tên danh mục" (P1), "đập vào mắt là thấy ngay bên trái" (P2), "menu trái" (P4); M2 trung bình 00:30, không ai vượt chuẩn |
| Tạo danh mục nhanh, đơn giản khi đã nhập tên trước | C8: "tạo danh mục lẹ" (P1), "Danh mục" (P4), "Thêm danh mục" (P5); P2, P3, P5, P6 tạo đúng ngay lần đầu |
| Cảm nhận nhanh | C5: "nhanh" (P3, P5, P6), "nhanh nhưng khó hiểu" (P1); toàn luồng trung bình 01:50, dưới chuẩn 02:18.75 |
| Các ô của form sản phẩm dễ điền (khi có dữ liệu để sao chép) | C3 ở 6/6 người: Không có ô nào không chắc phải điền gì |
| Thuật ngữ tiếng Anh ở trang đăng nhập ("Admin Login", "Login") không gây vướng | Không ai hỏi hay than về chữ tiếng Anh (Q9) |

## 5. Trả lời câu hỏi của test plan

| Câu hỏi | Trả lời ngắn | Căn cứ |
|---|---|---|
| Q1 | Có. Cả 6 người tới M2 tự tìm được "Danh mục" qua menu trái; M2 trung bình 00:30 (gồm cả lúc đọc lại kịch bản) | D1, D2, C2 |
| Q2 | 4/6 tạo đúng ngay lần đầu; 2/6 (P1, P4) tạo nhầm dòng trống trước (bug #66). Người dùng biết danh mục đã tạo nhờ nhìn bảng bên dưới (C6 ở 6/6), không có thông báo | D3 (a), (e); C6; F4 |
| Q3 | 5/6 sang được form thêm sản phẩm ngay; P6 rời trang vì khối CSV rồi quay lại sau 2 giây | D3 (a); F8 |
| Q4 | Chỉ 3/6 chắc chắn chọn đúng danh mục mới; P1, P5 để mặc định "Điện thoại" mà không biết; P4 sửa lại nhờ tình cờ | D3 (c), D6; F1 |
| Q5 | Không ai nói không hiểu ô nào (C3), nhưng P1 gõ thiếu chữ số 0 ở ô giá; không ai nhận ra ô danh mục là ô phải chọn | D3 (d); F1, F6 |
| Q6 | Ở form sản phẩm, hệ thống không báo lỗi nào (không có `Lb` ở M2, M3), nên lỗi chỉ được sửa khi người dùng tự thấy (P4); ở trang đăng nhập, thông báo "Đăng nhập thất bại" không giúp P7 tự sửa | D3 (b); F3, F5 |
| Q7 | Người dùng tin là xong nhờ thấy tên và ảnh trong bảng; không ai chủ động kiểm danh mục vì bảng không có cột danh mục; sau khi sửa, chính bảng lại hiện sai (bug #67) | D7; F1, F2, F5 |
| Q8 | M3 tốn thời gian nhất (trung bình 00:54) và dao động nhiều nhất; toàn luồng trung bình 01:50, chỉ P2 vượt chuẩn (0,25 giây) | D2 |
| Q9 | Chữ tiếng Anh ở trang đăng nhập không gây vướng; vướng chủ yếu là không biết bước tiếp theo (F2) | D5, D10 |
| Q10 | SUS trung bình 61,25 (n = 6), dưới mốc tham khảo 68; nhóm tự hoàn thành 71,7, nhóm không hoàn thành 50,8 | D8 |

## 6. Đề xuất cải tiến theo thứ tự ưu tiên

1. **Sửa bug #67** (F5): Danh sách và form "Sửa" luôn lấy dữ liệu mới nhất sau khi lưu. Mất dữ liệu, ưu tiên cao nhất dù chỉ một người gặp.
2. **Ô danh mục bắt chọn, có nhãn, bảng có cột danh mục** (F1): Nguyên nhân chính khiến M3 thất bại.
3. **Thông báo sau khi tạo danh mục và lưu sản phẩm, có đường dẫn sang bước tiếp theo** (F2).
4. **Ô mật khẩu có nút hiện mật khẩu, cảnh báo Caps Lock, thông báo lỗi có gợi ý** (F3).
5. **Sửa bug #66 và làm rõ ô tên danh mục** (F4).
6. **Giá có dấu phân cách khi nhập và trong bảng** (F6).
7. **Khối CSV thu gọn hoặc đưa xuống dưới form thêm sản phẩm** (F8); **hỏi xác nhận trước khi xoá** (F9); **rà lại thẩm mỹ** (F7).

Thứ tự trên theo criticality ở mục 2, trừ F5 được đưa lên đầu vì làm mất dữ liệu (ghi chú ở mục 2).

## 7. Bug đã báo lên Issues

| Mã | Issue | Phát hiện | Severity (nhóm) |
|---|---|---|---|
| B-T2-01 | [#66](https://github.com/angquoc/software-testing-2026-HW03-group/issues/66) | F4 | medium |
| B-T2-02 | [#67](https://github.com/angquoc/software-testing-2026-HW03-group/issues/67) | F5 | critical |

Không báo lên Issues: F1, F2, F3, F6, F7, F8, F9 (vấn đề thiết kế, không sai câu cụ thể của SRS); việc tải lại trang Admin bị đưa về Dashboard (ghi chú ở B-T2-02).

## 8. Hạn chế

- **Mẫu nhỏ và đồng nhất:** 7 người, 6 là sinh viên 18 đến 24 tuổi, bán qua mạng xã hội, quen máy tính (B6 mức 4, 5); chỉ P7 khác nhóm và lại dừng ở M1. Kết quả khó suy rộng cho người bán lớn tuổi hoặc ít dùng máy tính.
- **Một người điều phối kiêm ghi chú, không có âm thanh:** Lời nói ghi tay ngay lúc nghe, có thể thiếu hoặc không nguyên văn; một số mốc không ghi được (ví dụ lúc P4 bị chuột trượt).
- **Sai lệch quy trình của người điều phối:** P1 nhận 2 lần gợi ý ngoài quy trình (tính là `CT1`); P7 bị dừng sớm thay vì can thiệp mức 1 theo `02_scenario.md` mục 6; P3 hỏi cách làm (00:05) nhưng không được đáp bằng câu chuẩn.
- **Cách kiểm D6 bị bug làm sai:** Kiểm danh mục bằng form "Sửa" trên trang chưa tải lại không đáng tin khi người tham gia đã lưu bằng form "Sửa" (P4, bug #67). Lần sau nên tải lại trang trước khi kiểm.
- **Kịch bản và phiếu dữ liệu ở file riêng:** Làm tăng số lần mở lại kịch bản (F2) và giảm lỗi gõ tay (F6) vì người tham gia sao chép; hai phát hiện này có thể bị đánh giá lệch.
- **Máy của người điều phối:** Chuột lạ (P2, P4) làm thao tác chậm hơn một chút (`MT`); không ảnh hưởng kết quả hoàn thành.
- **SUS chỉ có 6 người:** P7 không điền vì chưa vào được trang quản trị; P1 có kiểu trả lời không nhất quán (`04_scores.md` QĐ-S2).
- **Chạy trên localhost với dữ liệu demo:** Không phản ánh độ trễ mạng hay số lượng sản phẩm lớn.

## 9. Quyết định còn mở

| Mã | Nội dung | Phương án |
|---|---|---|
| QĐ6 | Thang severity cho phát hiện usability | ⏳ (a) Nielsen 0 đến 4 (AI đề xuất); (b) 4 mức của nhóm (critical, high, medium, low); (c) Thang khác do SV chọn |
| QĐ-A1 | Severity từng phát hiện F1 đến F9 | ⏳ SV chốt từng dòng ở mục 2 (AI đã đề xuất) |
| QĐ-A2 | Thứ tự ưu tiên: Giữ F5 lên đầu (vì mất dữ liệu) hay xếp thuần theo criticality | ⏳ (a) F5 lên đầu (AI đề xuất); (b) Thuần theo criticality |
