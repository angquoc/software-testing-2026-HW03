# Demo Agent Skill

Kết quả khi chạy hai skill trong `skills/` trên màn hình và luồng **khác** phạm vi HW03, dùng cho video demo (đề §7). Không ghi đè `checklist/` hay `usability/`.

| Thư mục | Skill | Phạm vi demo |
|---|---|---|
| `gui-checklist/` | `skills/gui-checklist` | ⏳ Chốt khi quay video |
| `usability-evaluation/` | `skills/usability-evaluation` | ⏳ Chốt khi quay video |

Mỗi thư mục có cấu trúc giống thư mục của task tương ứng: Bản AI nguyên văn ở `ai_raw/`, bản đã review, ảnh ở `screenshots/`. Phiên demo không đọc `checklist/`, `usability/` (kết quả trên chính các màn hình này làm lệch bản AI).
