# Quy tắc chung

Đây là mặc định của skill. Nếu dự án có tài liệu quy trình riêng (ví dụ `WORKFLOW.md`), tài liệu đó ưu tiên hơn.

## Mục lục

1. Nguồn được đọc và không được đọc
2. Riêng tư người tham gia
3. Dữ liệu của người thật
4. Kiểm thử hộp đen
5. Thư mục, tên file và mã
6. Bản AI trong `ai_raw/`
7. Bản review và bảng "Thay đổi so với bản AI"
8. Quyết định để mở
9. Commit
10. Định dạng văn bản
11. Rà bước trước

---

## 1. Nguồn được đọc và không được đọc

| Được đọc | Không được đọc |
|---|---|
| Đề bài, tài liệu quy trình và README của dự án | Mã nguồn của hệ thống được test |
| Đặc tả của hệ thống (SRS) | **File danh sách người tham gia** và mọi file có họ tên, số điện thoại, email, tài khoản mạng xã hội của người tham gia |
| Slide môn học về usability testing; template usability của môn | Video, ghi âm của các phiên; ảnh chụp từ video chưa che mặt và thông tin cá nhân |
| Chính skill này | Prompt log, ghi chú cá nhân của sinh viên (nếu dự án nêu tên); lịch sử git; log phiên AI |
| File trong **thư mục làm việc** và ảnh `flow_*` | Hồ sơ phiên (`sessions/`), trừ khi dự án cho phép và dữ liệu đã ẩn danh |
| Hồ sơ pilot đã ẩn danh (`pilot/notes.md`, `probe.md`, `scale.md`, mã `PL`) khi sinh viên cho phép | Video pilot |
| File do chính phiên này tạo ra | Thư mục làm việc của luồng khác, trừ khi sinh viên cho phép |

Liệt kê thư mục để biết tên file không phải là đọc nội dung, nhưng không mở file bị cấm dù tên có vẻ hữu ích.

## 2. Riêng tư người tham gia

- Họ tên, số điện thoại, Zalo, email, khuôn mặt, giọng nói của người tham gia chỉ nằm trong file danh sách người tham gia và video gốc. Hai thứ này **không** đưa vào AI.
- Mọi file khác chỉ dùng mã `P1` đến `Pn` và `PL` cho người pilot.
- Bằng chứng có tên hoặc ảnh đại diện của người tham gia (ví dụ ảnh chụp tin nhắn đồng ý) lưu **ngoài** repo, không commit, không đưa vào AI.
- Mẫu AI soạn (Google Form, phiếu) không có câu hỏi về tên, số điện thoại, email; tắt thu thập email.
- Trước khi giao file: Chạy `check_usability.py privacy`. Dữ liệu test của hệ thống (tài khoản demo, số điện thoại mẫu) có thể bị báo; ghi chú lại, không phải lỗi.

## 3. Dữ liệu của người thật

AI **không** tạo, bịa, đoán hay "điền mẫu cho có" những thứ sau: Danh sách người tham gia; ghi chú quan sát; thời gian đo được; câu trả lời thang đo; câu trả lời câu hỏi mở; kết quả hoàn thành; ảnh chụp. AI chỉ đưa **mẫu trống** và cách ghi, hoặc **chép** ghi chú đã ẩn danh mà sinh viên đưa (ví dụ ghi chú tay sau phiên) vào đúng mẫu. Khi chép: Không thêm quan sát, lời nói, mốc hay câu trả lời mà ghi chú không có; chỗ thiếu thì hỏi, hoặc dùng mặc định mà sinh viên đã chốt cho dự án (`step-sessions.md`); không tự tính điểm thang đo lúc chép.

Ví dụ minh họa cách ghi (nếu cần) ghi rõ "ví dụ minh họa, không phải dữ liệu thật" và không dùng mã người tham gia thật.

## 4. Kiểm thử hộp đen

- Căn cứ: Đặc tả, ảnh luồng do sinh viên chụp, và những gì sinh viên tự thử rồi mô tả lại.
- Không tự mở giao diện, không tải HTML hay JS, không gọi API.
- Cần biết một hành vi mà ảnh không cho thấy (ô giá tự đổi định dạng khi gõ dấu chấm, danh mục mới có hiện ngay trong dropdown không, sau khi lưu có thông báo không): **Nhờ sinh viên thử** và mô tả lại. Không đoán.

## 5. Thư mục, tên file và mã

```
<thư mục làm việc>/               mặc định usability/
├── 01_test_plan.md               plan: Bản review
├── 02_scenario.md                scenario: Bản review
├── 03_instruments.md             instruments: Bản review
├── 04_scores.md                  score: Bản review
├── 05_findings.md                analysis: Bản review
├── participants.md               participants: Sinh viên giữ, AI không đọc
├── pilot/                        pilot: notes.md, probe.md, scale.md (mã PL)
├── sessions/P1/ ... Pn/          từng phiên: notes.md, scale.md, probe.md, P<n>_<số>_<nội dung>.png
├── tools/                        score: Script tính điểm; bugs: Script tái hiện bug và log
├── ai_raw/
│   ├── T2_plan.md
│   ├── T2_scenario.md
│   ├── T2_instruments.md
│   ├── T2_score.md
│   └── T2_analysis.md
└── screenshots/                  flow_<số>_<nội dung>.png (khảo sát luồng và ảnh tái hiện bug, sinh viên chụp)
bugs/bug_report.md                cạnh thư mục làm việc; mục Task 2
```

Nhiều ảnh cho cùng một nội dung: Hậu tố `_1`, `_2` (`flow_06_product_list_1.png`).

| Mã | Ý nghĩa | Bước tạo |
|---|---|---|
| `Qn` | Câu hỏi cần trả lời (problem statement), mỗi câu gắn chặng và khía cạnh probe | `plan` |
| `On` | Mục tiêu đo | `plan` |
| `Mn` | Chặng của luồng (người tham gia không thấy cách chia) | `plan` |
| `Dn` | Số liệu thu thập (hiệu suất và ý kiến); loại lỗi đánh `D3 (a)`, `D3 (b)` | `plan` |
| `Gn` | Giả định về giao diện, đối chiếu với ảnh | `plan` |
| `Tn` | Mốc thời gian trong phiên | `scenario` |
| `In`, `In.m` | Công cụ của phiên và mục con | `instruments` |
| `Cn` | Câu hỏi mở bắt buộc | `instruments` |
| `QĐn`, `QĐna`, `QĐ-In`, `QĐ-Sn`, `QĐ-An` | Quyết định cần sinh viên chốt | Mọi bước |
| `Fn` | Phát hiện usability | `analysis` |
| `B-T2-nn` | Bug báo lên Issues từ phiên usability | `bugs` |

Mã đã dùng thì không dùng lại cho thứ khác. Mục bổ sung đánh số tiếp.

## 6. Bản AI trong `ai_raw/`

- Đầu file theo `assets/templates/ai_raw_header.md`: Bước, thời gian tạo (có múi giờ), công cụ, căn cứ. Sau đó là nguyên văn câu trả lời của AI. Không chép prompt.
- **Không bao giờ sửa hay ghi đè** sau khi đã giao. Sinh viên yêu cầu làm lại cả bước: File mới `_v2`, `_v3`, đầu file ghi lần sửa, thời gian, lý do.
- Bản AI đưa nhiều phương án (ví dụ cả SUS và UEQ-S) thì bản review giữ phương án đã chọn và ghi "bản đầy đủ vẫn ở `ai_raw/...`".

## 7. Bản review và bảng "Thay đổi so với bản AI"

Bản review là bản đầy đủ của bước. Đầu file:

```
# <Tên tài liệu>

- Bước: `[T2][<bước>]`, bản đã review
- Bản AI gốc: `ai_raw/T2_<bước>.md` (<thời gian>)
- <Ngày review; ảnh dùng khi review; tài liệu bước trước>
```

Phần thân áp mọi quyết định, đổi `⏳` thành "Đã chốt: ..." ở mục tổng hợp quyết định. Mục cuối cùng là bảng thay đổi:

| Vị trí | Thay đổi | Loại | Vì sao AI bỏ sót (chỉ với Loại "Thiếu") | Lý do hoặc căn cứ |
|---|---|---|---|---|

- Loại chỉ nhận: `Sai`, `Thiếu`, `Thừa`, `Mơ hồ`, `Quyết định của SV` (nghĩa như skill `gui-checklist`: Sai là trái đặc tả hoặc giao diện; Thiếu là có mà không đưa vào; Thừa là tự đặt quy tắc hoặc trùng; Mơ hồ là không kiểm chứng được; Quyết định của SV là chọn phương án hoặc chốt điểm chưa rõ).
- "Vì sao AI bỏ sót" chỉ ghi với Loại "Thiếu", bắt đầu bằng `Prompt`, `Giới hạn model` hoặc `Đặc thù giao diện`, kèm giải thích.
- Ghi **mọi** thay đổi về nội dung; ghi rõ người phát hiện ("SV hỏi", "SV thử ô giá", "SV đề xuất"); không rõ thì hỏi.
- Quyết định của sinh viên khác gợi ý của AI: Ghi rõ "SV chọn B thay cho gợi ý A của AI".

## 8. Quyết định để mở

- Mỗi điểm cần sinh viên chốt có mã, các phương án đánh chữ cái, ưu nhược ngắn, và dấu `⏳`. AI có thể ghi "gợi ý của AI" nhưng không chọn thay.
- Mỗi bản có mục cuối "Tổng hợp các quyết định" với cột Trạng thái (`⏳ <bước sẽ chốt>` hoặc `Đã chốt: <phương án>`).
- Quyết định thuộc bước chưa làm giữ `⏳` kèm tên bước. Khi bước sau chốt, cập nhật trạng thái ở **cả** bản review của bước trước (và ghi dòng "Quyết định của SV" vào bảng thay đổi của bước trước).
- `check_usability.py open` liệt kê các dòng còn `⏳`.

## 9. Commit

- AI chỉ đưa commit message và lệnh; sinh viên tự commit.
- Định dạng mặc định: `[T2][<bước>] <Verb> <nội dung>`, tiếng Anh, động từ mệnh lệnh, không dấu chấm cuối.
- Mỗi bước thiết kế: (1) Bản AI (`... (AI draft)`); (2) bản review. Ảnh luồng: Một commit riêng. Bản `_vN`: `... (AI revision N)`.
- `pilot`: Hồ sơ pilot và các chỗ sửa sau pilot (ví dụ `[T2][pilot] Run pilot session and refine scenario`); video không commit nếu dự án chặn.
- `P1` đến `Pn`: **Mỗi phiên một commit** (ví dụ `[T2][P3] Record session P3 notes and SUS answers`).
- `score`, `analysis`: (1) Bản AI (kèm script); (2) bản review. `bugs`: Mục Task 2 của bug report, ảnh tái hiện, script và log.

## 10. Định dạng văn bản

- Tiếng Việt; giữ nguyên chữ trên giao diện.
- Không dùng dấu "—" và "·" làm dấu ngăn cách.
- Chữ cái đầu tiên sau dấu ":" viết hoa (trừ code, tên label, đường dẫn, giờ).
- Văn bản người điều phối đọc cho người tham gia đặt trong khối trích dẫn (`>`); ghi chú cho người điều phối đặt trong `[ ]`.
- Thời gian ghi dạng `phút:giây.phần trăm giây` khi đo bằng đồng hồ bấm giờ, `mm:ss` khi lấy theo mốc video.

## 11. Rà bước trước

| Bước | Kiểm tra |
|---|---|
| `plan` | Có ảnh luồng; đủ 9 phần; câu hỏi gắn chặng và khía cạnh probe; số liệu liên kết với câu hỏi; giả định đã đối chiếu ảnh; quyết định có trạng thái; có bảng thay đổi |
| `scenario` | Kịch bản không dùng nhãn nút; có phiếu dữ liệu, trạng thái ban đầu, tiêu chí hoàn thành theo cái người điều phối nhìn thấy, thời gian chuẩn có căn cứ đo; có can thiệp và tình huống đặc biệt; có mục "Cần kiểm ở pilot" |
| `instruments` | Đủ công cụ của đề (thang đo, câu hỏi mở đủ khía cạnh); câu hỏi trung lập; phiếu ghi chú dùng mã của plan và kịch bản; không thu thông tin cá nhân |
| `P1` đến `Pn` | Mỗi phiên có `notes.md`, `scale.md`, `probe.md`; chỉ dùng mã; mốc đúng thứ tự; sai lệch quy trình đã ghi |
| `score` | Mọi con số lấy từ script hoặc bảng tổng hợp có dẫn mục; cách tính ghi ở mục 0; quyết định `QĐ-S` đã chốt |
| `analysis` | Mọi phát hiện có quan sát dẫn mốc; bug có câu SRS; severity theo thang đã chốt và có lý do; có trả lời câu hỏi test plan và hạn chế |
| `bugs` | Mỗi phát hiện loại bug có một issue có ảnh tái hiện ngoài phiên; không có issue cho vấn đề thiết kế |
| `pilot` | Hồ sơ pilot đủ (I3, I4, I5, I6) và có bảng "Kết quả kiểm bộ công cụ"; mọi điểm "Cần kiểm ở pilot" có quan sát; mỗi chỗ sửa có dòng trong bảng thay đổi của file đó; con số giống nhau ở 3 file |
| Mọi bước | `ai_raw/` có bản AI; tên file đúng; `check_usability.py format`, `changes`, `privacy` không lỗi |
