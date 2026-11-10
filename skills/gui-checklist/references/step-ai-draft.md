# Bước `ai-draft`: AI sinh checklist theo từng IA

**Mục tiêu:** Bản checklist ban đầu do AI sinh, mỗi IA một file, để sinh viên review. Đây là phần "AI tạo" mà đề yêu cầu; mọi mục sau này đều truy về mã `AI-<IA>-<nn>` ở đây.

**Đầu ra:** `ai_raw/T1_draft_IA-01.md`, `..._IA-02.md`, `..._IA-03.md`, `..._IA-04.md`.

## Cách chạy bước này

- Viết **lần lượt** 4 file theo thứ tự IA-01, IA-02, IA-03, IA-04, mỗi file một IA, trong cùng một lượt. Viết xong mỗi file thì tự kiểm file đó rồi mới sang file sau.
- Dừng **một lần** khi đã đủ 4 file, để sinh viên review cả 4 cùng lúc. Đây là ngoại lệ so với quy trình của dự án nếu dự án ghi "mỗi lượt một IA" (xem mục "Ngoại lệ so với quy trình của dự án" trong `SKILL.md`); báo sinh viên một câu khi áp dụng.
- Đánh số liên tục qua 4 file cho `CHD-nn` và `ĐK-nn`. Điều kiện đã định nghĩa ở file trước thì file sau dẫn mã, không định nghĩa lại.
- Bỏ một câu hỏi CHD trước khi giao (vì đã tự trả lời được): Không dùng lại số đó; ghi lại cho bản review biết số nào bị bỏ.

## Hỏi trước khi viết

- Dữ liệu cụ thể dùng khi chạy: Tài khoản có dữ liệu và tài khoản trống, cách tạo bản ghi ở các trạng thái cần kiểm (script, thao tác tay). AI không tự đặt dữ liệu mà sinh viên không tạo được.
- Nguồn ngoài SRS được dùng: Slide nào, template nào của môn đọc được. Không đọc được thì hỏi sinh viên, không viết nguồn theo trí nhớ như thể đã đọc.
- Khi một mục phụ thuộc mục khác (ví dụ kiểm nội dung thông báo lỗi trong khi có thể không có thông báo) thì ghi kết quả thế nào. Nếu sinh viên chưa muốn chốt, đưa thành câu hỏi CHD.

## Đầu vào

- `01_oracle.md` (bản review): Mục tổng hợp theo IA và màn hình, quyết định CH, giả định GĐ, mục `NR-nn`.
- `00_survey.md` và ảnh: **Chỉ** để biết màn hình có những ô, nút, link, khối nào và gọi đúng tên. Không dùng để đoán kết quả.
- Nguồn ngoài SRS đã xác nhận (`references/sources.md` liệt kê các nguồn đã dùng ở lần đầu).
- Thông tin dữ liệu sinh viên cung cấp.

## Nội dung mỗi file

Theo mẫu `assets/templates/draft_ia.md`:

1. **Đầu vào và quy ước:** Liệt kê mã oracle của IA này theo từng màn hình; quy ước mã, cột, cách kiểm. File IA-02 đến IA-04 ghi "Quy ước: Giống bản nháp IA-01" và chỉ thêm điểm riêng. Tên thành phần trên giao diện khác với đặc tả (ví dụ nhãn "Username" trong khi đặc tả nói Email) thì ghi rõ bản nháp gọi theo tên nào.
2. **Điều kiện chuẩn bị `ĐK-nn`:** Reset dữ liệu, tài khoản, kích thước cửa sổ, trạng thái giỏ hàng, giả lập mạng chậm, thứ tự chạy các mục làm đổi dữ liệu hoặc khóa tài khoản. Cột "Dùng cho" ghi mã mục.
3. **Bảng checklist**, chia 2 phần: Mục căn cứ SRS; mục căn cứ ngoài SRS (khuyến nghị).

   | Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
   |---|---|---|---|---|---|---|

   Mỗi mục đạt chuẩn ở `rules.md` mục 8. Thêm:
   - Nội dung kiểm viết dạng câu hỏi Có / Không ("... có ... không?").
   - Màn hình ghi kèm trạng thái ("W-06 (đăng nhập, có đơn)").
   - Cách kiểm ghi dữ liệu cụ thể và thao tác (giá trị nhập, nút bấm, tab DevTools, mức cửa sổ).
   - Mục cần DevTools hay công cụ (Lighthouse, axe) vẫn được viết; ghi rõ chỉ chạy ở bước `exec`.
   - Ý chung lặp ở nhiều nơi (ví dụ "thông báo bằng tiếng Việt") gom vào **một** mục, các mục khác không nhắc lại.
4. **Ma trận** (nếu có): Khi nhiều mục kiểm cùng một tập trạng thái (ví dụ trạng thái đơn), lập bảng ma trận với cột mong đợi và cột "(ghi khi chạy)". Script Excel nhận ra cột này.
5. **Truy vết oracle IA:** Bảng mã `UI-Rnn` hoặc `NR-nn` và các mục phủ; dòng "Ngoài SRS (khuyến nghị)"; tổng số mục (căn cứ SRS, khuyến nghị).
6. **Ý đã xét nhưng không đưa vào:** Ý và lý do (thuộc IA khác, không áp dụng cho màn hình này, không có nguồn rõ, không kiểm được). Mảng đề gợi ý xét thêm (accessibility, RTL, dark mode) mà bản này không làm thì ghi ở đây, để sinh viên xét ở `add`.
7. **Câu hỏi mở cho bước `review` (`CHD-nn`):** Chỗ AI phân vân (tách hay gộp, theo template hay theo chuẩn, mong đợi lấy theo survey hay theo lúc chạy, cách hiểu một chữ trong SRS). Có phương án thì đánh chữ cái.

## Tự kiểm

- `check_checklist.py draft ai_raw/T1_draft_IA-0*.md --oracle 01_oracle.md`: Mã trùng, sai IA, ô trống, oracle không tồn tại hoặc không áp dụng.
- `check_checklist.py format`.
- Mọi mã `Áp dụng` của IA này trong mục tổng hợp của oracle đều có mục, hoặc có lý do ở mục 6.
- Checklist bước `ai-draft` trong `lessons.md`.

## Dừng

Báo sinh viên: Số mục mỗi IA (căn cứ SRS, khuyến nghị), danh sách câu hỏi CHD, 4 commit message (mỗi IA một commit). Hỏi sinh viên muốn tự review hay để AI lọc trước (xem `step-review-add.md`). Dừng.
