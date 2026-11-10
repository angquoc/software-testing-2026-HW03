# Bước `bugs`: Bug report và GitHub Issues

**Mục tiêu:** Mỗi bug thật tìm được ở `exec` có một issue (hoặc một bình luận vào issue đã có), có ảnh, đúng quy ước của nhóm; bug report trong repo cá nhân liệt kê đủ issue và lý do mục Failed nào không báo.

**Đầu ra:** `bugs/bug_report.md`; issue và bình luận trên repo nhóm; `bugs/screenshots/issues_list_<task>_<n>.png` (danh sách issue đã lọc).

Quy trình dưới đây rút từ lần làm đầu (HW03 Task 1, NT1): 54 mục Failed thành 33 issue mới (#33 đến #65) và 2 bình luận vào issue của thành viên khác.

## Hỏi trước khi làm

- Quy ước của nhóm: Tiêu đề, template issue, label bắt buộc, cách chọn severity, cách xử lý issue trùng (đọc README của repo nhóm).
- Ai chạy lệnh `gh`: Sinh viên, hay AI chạy sau khi sinh viên duyệt. Tạo issue và bình luận là **đăng công khai**; AI chỉ chạy khi sinh viên đã duyệt nội dung và cho phép rõ ràng.

## Pha 1: Chọn bug (AI đề xuất, sinh viên chốt)

Đi qua mọi mục Failed của NT1:

| Trường hợp | Xử lý ở lần đầu |
|---|---|
| Mục Failed căn cứ SRS (`UI-Rnn`) | Báo hết |
| Mục Failed theo khuyến nghị | Chỉ báo khi ảnh đã có cho thấy rõ lỗi |
| Nhiều mục cùng một lỗi gốc | Gộp vào một issue; cột "Mục CL" ghi đủ các mục |
| Lỗi ở thành phần dùng chung (navbar) đã có issue của người khác | Không tạo issue mới; bình luận vào issue đó |
| Lỗi cùng loại đã có issue ở màn hình của người khác | Tạo issue riêng, ghi `Related #<số>` |
| Mục Failed mà ảnh không thấy lỗi (rê chuột, đang tải, tab Network, hộp xác nhận không xuất hiện) | Không báo; ghi lý do ở bug report |

Tìm issue trùng trước khi tạo, ví dụ:

```bash
gh issue list -R <owner>/<repo> --state all --limit 200 --search "<từ khóa>"
gh issue list -R <owner>/<repo> --state all --label "task: T1 checklist"
```

Severity: Theo câu hỏi của nhóm (đi lần lượt, gặp "Có" đầu tiên thì dừng). AI đề xuất kèm lý do; sinh viên chốt.

Đưa sinh viên bảng đề xuất (mã `B-nn`, mục CL, tiêu đề, severity, IA, liên quan, tạo mới hay bình luận). **Dừng** chờ chốt.

## Pha 2: Soạn nội dung issue

- Tiêu đề theo quy ước nhóm, ví dụ `[MSSV][T1][<Mã màn hình>][<Nền tảng>] <Mô tả ngắn: Hành vi sai so với đặc tả>`; nhiều màn hình ghi `[W-03, W-04, W-06]`.
- Thân issue theo đúng các trường của template "Bug report" của nhóm, mỗi trường một tiêu đề `### <nhãn trường>` (khi tạo bằng `gh`, form của template không hiện nên phải viết đúng các tiêu đề này). Ở lần đầu: MSSV người báo, Task, Màn hình hoặc luồng, Khía cạnh giao diện (IA), Mục checklist hoặc phiên phát hiện lỗi, Phân hệ, Trình duyệt / OS / thiết bị, Mức độ (Severity), Điều kiện tiên quyết, Các bước tái hiện, Kết quả mong đợi, Kết quả thực tế, Ảnh chụp, Ghi chú.
- "Mục checklist": Mục chính, kèm các mục bị lỗi này chặn ("Không chạy được vì lỗi này").
- "Kết quả mong đợi": Trích oracle (`UI-Rnn` và FR, hoặc nguồn khuyến nghị) và kết quả mong đợi của mục CL.
- "Kết quả thực tế": Chép nguyên văn thông báo trên giao diện.
- "Ghi chú": `Related #<số>` nếu có.
- Bình luận vào issue dùng chung: "Bổ sung từ <MSSV> (<task>, <môi trường>): Lỗi cũng xuất hiện ở <màn hình>", từng mục CL một gạch đầu dòng, kết quả mong đợi, ảnh.

Sinh viên duyệt nội dung. **Dừng.**

## Pha 3: Tạo issue và chèn ảnh

1. Tạo issue (sau khi sinh viên cho phép), gắn đủ label (một `severity`, một `platform`, một `task`, ít nhất một `ia`, và `bug`) và gán cho người báo:

   ```bash
   gh issue create -R <owner>/<repo> --title "<tiêu đề>" --body-file <file thân issue> \
     --label "bug" --label "severity: <mức>" --label "platform: web" --label "task: T1 checklist" --label "ia: IA-0n" \
     --assignee @me
   ```

2. Lấy link ảnh: Kéo nhiều ảnh cùng lúc vào **một ô bình luận** trên GitHub (không gửi), chép các thẻ ảnh GitHub sinh ra vào một file (lần đầu: `bugs/image_links.txt`).
3. Ghép link với tên file theo `alt`. Nếu `alt` không phải tên file (lần đầu mọi link có `alt="Image"`) thì ghép theo **thứ tự kéo thả**: Kéo theo một thứ tự đã ghi sẵn, rồi kiểm lại từng ảnh sau khi chèn.
4. Chèn ảnh vào trường "Ảnh chụp" bằng `gh issue edit <số> --body-file <file>`, mỗi ảnh có tên file in đậm ngay trên:

   ```markdown
   **CL-65_chrome.png**

   ![CL-65_chrome.png](https://github.com/user-attachments/assets/...)
   ```

5. Bình luận vào issue dùng chung bằng `gh issue comment <số> --body-file <file>`; chép link bình luận vào bug report.

## Pha 4: Bug report và ảnh danh sách issue

`bugs/bug_report.md` gồm:

1. Đầu file: Người báo, repo Issues, nguồn (cột nền tảng nào của Excel, ngày chạy), môi trường, nơi để ảnh.
2. **Cách chọn bug** (các quy tắc ở Pha 1).
3. **Issue đã tạo:** Bảng Mã `B-nn`, Issue (link), Tiêu đề, Mục CL, Severity, IA, Liên quan; câu cuối nêu label chung.
4. **Bình luận vào issue đã có:** Issue, Mục CL, nội dung, link bình luận.
5. **Mục Failed không báo lên Issues:** Mục CL và lý do; các mục đã gộp vào issue khác.
6. **Ảnh danh sách issue:** Sau khi chèn ảnh xong, chụp trang Issues đã lọc theo người báo và task (ví dụ `author:<login> label:"task: T1 checklist"`), chụp đủ mọi issue, lưu `bugs/screenshots/issues_list_<task>_<n>.png`.

Sau đó hoàn thiện `checklist/03_results.md` (`step-exec.md`, mục "Tóm tắt kết quả"): Mục "Mục Failed chính", cột Issue của danh sách mục Failed, mục "Bug" có bảng chỉ số và câu đối chiếu.

## Tự kiểm

- Mọi mục Failed có mặt ở đúng một nơi: Một issue, một bình luận, hoặc bảng "không báo" (có lý do).
- Mỗi issue có ảnh; ảnh đúng mục (đối chiếu tên in đậm với ảnh); label đủ; tiêu đề đúng quy ước.
- Số issue trong bug report khớp với trang Issues và với mục "Bug" của `03_results.md`.
- Checklist bước `bugs` trong `lessons.md`.

**Dừng**, đưa commit message (ví dụ `[T1][bugs] Report GUI bugs`).
