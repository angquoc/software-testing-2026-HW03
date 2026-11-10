# T1 checklist: Checklist đã review

Bước: `[T1][review]` (phần mục AI) và `[T1][add]` (phần mục SV thêm)
Bản AI gốc: `ai_raw/T1_draft_IA-01.md` đến `ai_raw/T1_draft_IA-04.md` (<thời gian>)
Cập nhật: <thời gian> (bước `review`), <thời gian> (bước `add`)

Ai làm phần nào:

- Sinh viên review từng mục AI (giữ, sửa, bỏ, gộp, tách) và trả lời các câu hỏi CHD-01 đến CHD-<nn>.
- <Nếu có: Với IA-.., AI lọc trước theo yêu cầu của sinh viên; sinh viên quyết định từng đề xuất.>
- AI soạn file này theo quyết định của sinh viên; sinh viên kiểm tra lại. Mọi thay đổi về nội dung ghi ở mục 9.
- Phần mục sinh viên tự thêm (mục 5): Sinh viên viết nội dung; AI kiểm định dạng, nguồn, phạm vi và sửa theo quyết định của sinh viên.

---

## 1. Quy ước

- Mã mục cuối: `CL-<số>`, giữ cố định sau khi chốt (Excel, ảnh, issue đều dẫn chiếu mã này).
- Cột "Nguồn": `AI` (giữ nguyên nội dung của bản AI), `AI, SV sửa` (kèm mã `AI-xx-xx` gốc), `SV thêm`.
- Cột "Oracle": Mã `UI-Rnn` khi căn cứ là SRS (`01_oracle.md`). Mục căn cứ ngoài SRS ghi **"Khuyến nghị"** kèm nguồn.
- Cột "Cách kiểm": Nhìn, Bàn phím, Chuột, DevTools, Công cụ. DevTools và công cụ chỉ dùng ở bước `exec`.
- Một kiểm tra dùng cho nhiều màn hình là **một** mục; cột "Màn hình" liệt kê các màn hình áp dụng.
- Kết quả mỗi mục: **Passed** hoặc **Failed**. <Giá trị khác sinh viên đã chốt, ví dụ "Không chạy được" cho mục phụ thuộc, và khi nào dùng>
- <Định nghĩa đã chốt cho khái niệm dễ hiểu sai, trạng thái màn hình có thể không tạo được>

---

## 2. Điều kiện chuẩn bị khi chạy

| Mã | Điều kiện | Dùng cho |
|---|---|---|

---

## 3. Checklist

### 3.1 IA-01 Tiêu chuẩn giao diện chung

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn |
|---|---|---|---|---|---|---|---|
| CL-01 | | IA-01 | | | | | AI (AI-01-01) |

### 3.2 IA-02 Form

### 3.3 IA-03 Điều hướng

### 3.4 IA-04 Phản hồi và trạng thái

---

## 4. Ma trận <tên> (nếu có, dùng cho CL-..)

| <Khóa> | <Cột mong đợi> | <Cột> (ghi khi chạy) | Oracle |
|---|---|---|---|
| Mong đợi chung | | | |

---

## 5. Mục sinh viên thêm (bước `add`)

Cách ghi:

- Mã tiếp nối từ CL-<số tiếp theo>. Cột "Nguồn" ghi `SV thêm`.
- Cột "Vì sao AI bỏ sót" ghi một trong ba giá trị `Prompt`, `Giới hạn model`, `Đặc thù giao diện`, kèm giải thích ngắn. Mục mà bản AI đã xét và loại (không phải bỏ sót) ghi "Không áp dụng" và giải thích; ở mục 9 các mục này có Loại `Quyết định của SV`.
- Mỗi mục thêm có một dòng ở bảng mục 9.

| Mã | Nội dung kiểm | IA | Màn hình | Oracle | Cách kiểm | Kết quả mong đợi | Nguồn | Vì sao AI bỏ sót |
|---|---|---|---|---|---|---|---|---|

Các mảng đề gợi ý xét thêm:

| Mảng | Kết luận |
|---|---|
| Accessibility | |
| Dark mode | |
| RTL | |

---

## 6. Mục AI đã bỏ hoặc gộp

| Mã AI | Xử lý | Lý do |
|---|---|---|

---

## 7. Tổng hợp

### 7.1 Số mục

| IA | Số mục | Nguồn AI | Nguồn AI, SV sửa | Nguồn SV thêm | Căn cứ SRS | Khuyến nghị |
|---|---|---|---|---|---|---|
| IA-01 | | | | | | |
| IA-02 | | | | | | |
| IA-03 | | | | | | |
| IA-04 | | | | | | |
| Tổng | | | | | | |

Bản AI có <N> mục. Bỏ hoặc gộp <a> mục (mục 6), tách <b> mục thành <c>, thêm <d> mục từ câu trả lời CHD. Bước `add` thêm <e> mục.

### 7.2 Truy vết oracle

| Oracle | Mục |
|---|---|

---

## 8. Quyết định của sinh viên cho câu hỏi mở của bản AI

| Mã | Câu hỏi (tóm tắt) | Quyết định của SV | Ảnh hưởng |
|---|---|---|---|

---

## 9. Thay đổi so với bản AI

<!-- Theo changes_table.md -->
