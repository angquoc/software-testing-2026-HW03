# DEMO ai-draft: Checklist IA-04 Phản hồi và trạng thái (bản AI)

- Bước: `[demo][ai-draft]`, IA-04
- Thời gian tạo: 2026-11-11 10:04 (UTC+7)
- Công cụ: Claude Code, model Claude Opus 5.5, skill `gui-checklist`
- Căn cứ: `01_oracle.md` (bản review, cập nhật 09:56) mục 2.4, 3, 4, 5.2; `00_survey.md` (bản đã đối chiếu) mục 3.4, 3.5 và ảnh `survey_02`, `survey_06`; `ai_raw/DEMO_draft_IA-01.md` (quy ước, ĐK-01 đến ĐK-05), `ai_raw/DEMO_draft_IA-03.md` (ĐK-06); `references/sources.md` của skill

---

## 1. Đầu vào và quy ước

Đầu vào:

- `01_oracle.md` (bản đã review): Mã có IA-04 ở mục tổng hợp (A-01: UI-R17); mục khuyến nghị NR-01, NR-02, NR-03, NR-04, NR-06; quyết định CH-08 đến CH-11; giả định GĐ-04 (bảng trống là "trang trống").
- `00_survey.md` và ảnh: Trạng thái trống chỉ còn dòng tên cột; bấm "Xóa" thì dòng biến mất ngay. Chỉ dùng để biết thành phần và trạng thái nào có trên màn hình; **không** dùng để đoán kết quả.
- Dữ liệu và nguồn ngoài SRS: Giống bản nháp IA-01.

Quy ước: Giống bản nháp IA-01. Điểm riêng:

- Ngôn ngữ và chữ kỹ thuật trong thông báo kiểm ở AI-01-04, không nhắc lại ở đây. Riêng câu của trạng thái trống có điều kiện "không dùng từ kỹ thuật" vì SV chốt như vậy ở CH-11, nên nằm trong AI-04-02.
- Mục kiểm chi tiết của một thông báo hay hộp xác nhận phụ thuộc mục kiểm "có xuất hiện không" (AI-04-06, AI-04-13 phụ thuộc AI-04-05; AI-04-10, AI-04-11 phụ thuộc AI-04-08); cách ghi khi không xuất hiện theo CHD-02.
- Mục kiểm sau khi thêm hoặc xóa chỉ nói phần nhìn thấy được (thông báo, dấu hiệu), không kiểm dữ liệu có thật sự đổi không (SV chốt chỉ kiểm hiển thị).

---

## 2. Điều kiện chuẩn bị khi chạy

Dùng ĐK-01 đến ĐK-06 của bản nháp IA-01 và IA-03. Thêm:

| Mã | Điều kiện | Dùng cho |
|---|---|---|
| ĐK-07 | Giả lập mạng chậm: DevTools, tab Network, chọn mức chậm (mức cụ thể: CHD-15). Vì bấm F5 sẽ về Dashboard, bật giả lập khi đang ở Dashboard rồi bấm "Danh mục" (ĐK-06). Tắt giả lập sau khi chạy xong mục | AI-04-04, AI-04-09 |
| ĐK-08 | Giả lập mất kết nối: Đang ở trang Danh mục, DevTools, tab Network, chọn "Offline". Tắt sau khi chạy xong mục | AI-04-12 |

---

## 3. Bảng checklist IA-04

### 3.1 Mục căn cứ SRS

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-04-01 | Khi danh sách danh mục trống, trang có icon hoặc hình minh họa cho trạng thái trống không? | IA-04 | A-01 (trống) | UI-R17 | Nhìn (ĐK-03) | Có icon hoặc hình minh họa ở vùng bảng (GĐ-04) |
| AI-04-02 | Khi danh sách trống, trang có một câu tiếng Việt đầy đủ cho biết chưa có danh mục nào, không dùng từ kỹ thuật không? | IA-04 | A-01 (trống) | UI-R17 | Nhìn (ĐK-03) | Có một câu tiếng Việt nói rõ chưa có danh mục (ví dụ "Chưa có danh mục nào."); không phải một từ đơn như "Trống", không có chữ như "null", "No data", "0 rows" (CH-11 ý 1). Tiêu chí "câu đầy đủ": CHD-16 |

### 3.2 Mục căn cứ ngoài SRS (khuyến nghị)

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi |
|---|---|---|---|---|---|---|
| AI-04-03 | Khi danh sách trống, trang có gợi ý bước tiếp theo cho người dùng không? | IA-04 | A-01 (trống) | Khuyến nghị: NR-06 (Nielsen heuristic 10, Help and documentation; Shneiderman rule 3) | Nhìn (ĐK-03) | Có chữ gợi ý việc nên làm tiếp (ví dụ "Nhập tên ở ô phía trên và bấm Thêm mới để tạo danh mục đầu tiên") |
| AI-04-04 | Khi danh sách danh mục đang tải, trang có dấu hiệu đang tải không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-04 (Nielsen heuristic 1, Visibility of system status) | DevTools (chỉ ở `exec`): ĐK-07, bấm "Danh mục" từ Dashboard, nhìn vùng bảng trước khi các dòng hiện ra | Có dấu hiệu đang tải (vòng quay, chữ "Đang tải...", khung xám) ở vùng bảng; không hiện bảng trống hay trạng thái trống trong lúc đang tải |
| AI-04-05 | Sau khi bấm "Thêm mới" với tên hợp lệ, có phản hồi nhìn thấy được cho biết đã thêm xong không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-01 (Nielsen heuristic 1; Shneiderman rule 3, Offer informative feedback) | Bàn phím, chuột: Gõ `Thời trang` (ĐK-05), bấm "Thêm mới" (ĐK-04) | Có thông báo thành công (toast, dòng chữ) hoặc dòng mới được làm nổi bật trong giây lát. Chỉ có dòng mới xuất hiện mà không có dấu hiệu nào khác thì chưa đạt |
| AI-04-06 | Thông báo thêm thành công có nêu tên danh mục vừa thêm không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Shneiderman rule 3 (Offer informative feedback) | Nhìn: Đọc thông báo của AI-04-05 | Thông báo có tên "Thời trang". Không có thông báo thì ghi theo CHD-02 |
| AI-04-07 | Sau khi xóa một danh mục, có phản hồi nhìn thấy được cho biết đã xóa xong không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-02 (Nielsen heuristic 1; Shneiderman rule 3) | Chuột: Bấm "Xóa" ở một dòng (đồng ý nếu có hộp xác nhận) (ĐK-04) | Có thông báo cho biết đã xóa (toast, dòng chữ). Chỉ có dòng biến mất thì chưa đạt |
| AI-04-08 | Bấm "Xóa" ở một dòng có hiện hộp xác nhận trước khi xóa không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: NR-03 (Nielsen heuristic 5, Error prevention) | Chuột: Bấm "Xóa" ở một dòng (ĐK-04: Reset nếu dòng bị xóa) | Hiện hộp xác nhận (hộp của trình duyệt hoặc hộp trong trang); dòng chưa biến mất khi hộp đang mở |
| AI-04-09 | Khi đang gửi yêu cầu thêm (mạng chậm), nút "Thêm mới" có dấu hiệu đang xử lý không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 1 (Visibility of system status) | DevTools (chỉ ở `exec`): ĐK-07; gõ `Thời trang 2` (ĐK-05), bấm "Thêm mới", nhìn nút ngay sau khi bấm (ĐK-04) | Trong lúc chờ, nút bị khóa (mờ, không bấm được) hoặc đổi chữ (ví dụ "Đang thêm...") hoặc có vòng quay |
| AI-04-10 | Hộp xác nhận khi xóa có nêu tên danh mục sắp bị xóa không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 5 (Error prevention) | Nhìn: Đọc hộp xác nhận của AI-04-08 | Nội dung hộp có tên danh mục của dòng vừa bấm. Không có hộp xác nhận thì ghi theo CHD-02 |
| AI-04-11 | Bấm hủy trong hộp xác nhận thì dòng danh mục có còn trong bảng không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 3 (User control and freedom) | Chuột: Bấm "Xóa" ở một dòng, bấm nút hủy (hoặc đóng hộp) | Hộp đóng; dòng vẫn hiện trong bảng như trước. Không có hộp xác nhận thì ghi theo CHD-02 |
| AI-04-12 | Khi mất kết nối, bấm "Thêm mới" với tên hợp lệ có thông báo lỗi nhìn thấy được không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Nielsen heuristic 9 (Help users recognize, diagnose, and recover from errors) | DevTools (chỉ ở `exec`): ĐK-08; gõ `Thời trang 3` (ĐK-05), bấm "Thêm mới" | Có thông báo lỗi nhìn thấy được trên trang cho biết không thêm được; không im lặng, không hiện như đã thêm thành công |
| AI-04-13 | Thông báo thêm thành công có được khai báo để trình đọc màn hình tự đọc không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: WCAG 2.2 SC 4.1.3 Status Messages | DevTools (chỉ ở `exec`): Khi thông báo của AI-04-05 đang hiện, Inspect thông báo | Thông báo hoặc phần tử chứa nó có `role="status"`, `role="alert"` hoặc `aria-live`. Không có thông báo thì ghi theo CHD-02 |
| AI-04-14 | Sau khi thêm thành công, dòng danh mục mới có hiện trong bảng ngay mà không cần tải lại trang không? | IA-04 | A-01 (có dữ liệu) | Khuyến nghị: Slide "GUI + Usability + Compatibility Testing AI-First", bảng lỗi GUI "Control/menu state not aligned with data state" (theo `references/sources.md`) | Nhìn: Sau thao tác của AI-04-05, không bấm F5, nhìn bảng | Dòng "Thời trang" hiện trong bảng ngay sau khi bấm. Mục này có trái quyết định chỉ kiểm hiển thị không: CHD-14 |

---

## 4. Ma trận

Không có.

---

## 5. Truy vết oracle IA-04

| Oracle | Mục |
|---|---|
| UI-R17 | AI-04-01, AI-04-02 |
| NR-01 | AI-04-05 |
| NR-02 | AI-04-07 |
| NR-03 | AI-04-08 |
| NR-04 | AI-04-04 |
| NR-06 | AI-04-03 |
| Ngoài SRS (khuyến nghị) khác | AI-04-06, AI-04-09 đến AI-04-14 |

Tổng: 14 mục (2 căn cứ SRS, 12 khuyến nghị, trong đó 5 từ NR).

---

## 6. Ý đã xét nhưng không đưa vào

| Ý | Lý do |
|---|---|
| Toast sau "Thêm vào giỏ" (UI-R15), dialog khi xóa khỏi giỏ (UI-R16, UI-R26), giỏ trống (UI-R27) | `Không áp dụng`: Yêu cầu của giỏ hàng; ý tương ứng cho danh mục đã thành NR-01 đến NR-03 |
| `alt` của ảnh sản phẩm (UI-R18) | `Không áp dụng`: A-01 không có ảnh sản phẩm |
| Báo cáo import (UI-R30) | `Không áp dụng`: A-01 không có import |
| Thông báo thành công tự tắt sau vài giây hoặc có nút đóng | Không có nguồn đã đọc nêu mức đo được; phụ thuộc AI-04-05 |
| Phản hồi khi mất kết nối lúc bấm "Xóa" | Một mục mất kết nối (AI-04-12) đủ cho ý "báo lỗi khi máy chủ không phản hồi"; thêm mục nữa là lặp |
| Ngôn ngữ của thông báo thành công, thông báo lỗi | Đã có ở AI-01-04 |
| Dòng bị xóa có biến mất khỏi bảng | Là kết quả xóa dữ liệu (SV chốt không kiểm); phản hồi sau xóa kiểm ở AI-04-07 |
| Trạng thái của trang khi tải danh sách bị lỗi (máy chủ tắt khi đang mở trang) | Cần tắt backend giữa chừng; gần với AI-04-12. SV xét ở bước `add` nếu cần |

---

## 7. Câu hỏi mở cho bước `review`

| Mã | Câu hỏi | Các phương án | Liên quan |
|---|---|---|---|
| CHD-14 | AI-04-14 kiểm dòng mới hiện ngay sau khi thêm. Đây là trạng thái hiển thị của bảng, nhưng cũng gần với kiểm "thêm có thành công không", mà SV đã chốt không kiểm. Giữ không? | (a) Giữ, vì chỉ xét bảng có cập nhật mà không cần tải lại; (b) Bỏ | AI-04-14 |
| CHD-15 | Mức giả lập mạng chậm ở ĐK-07 là gì? | (a) Preset "Slow 4G" của Chrome; (b) Preset "3G"; (c) Mức tự đặt (ví dụ độ trễ 2000 ms) | ĐK-07, AI-04-04, AI-04-09 |
| CHD-16 | AI-04-02 "câu tiếng Việt đầy đủ" đo bằng tiêu chí nào để trả lời được Passed / Failed? | (a) Một câu có nhắc tới "danh mục" và cho biết danh sách đang trống (ví dụ "Chưa có danh mục nào."); một từ đơn như "Trống" không đạt; (b) SV định nghĩa khác | AI-04-02 |
