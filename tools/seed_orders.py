"""Tạo dữ liệu kiểm thử cho HW03 Task 1 (lịch sử đơn hàng ở màn hình W-06 Hồ sơ).

Tạo qua API của EShop (đúng đường mà giao diện dùng), không sửa DB trực tiếp:
- 5 đơn của test@eshop.com, mỗi đơn một trạng thái theo FR-10: pending, confirmed, shipping, delivered, canceled.
  Trạng thái đổi qua API Admin theo đúng thứ tự của state machine; đơn canceled do người dùng tự hủy khi còn pending.
- 1 tài khoản thường không có đơn để xem trạng thái trống: newuser@eshop.com / NewUser123! (tên "Khách Mới").

Chạy (server EShop đang chạy, DB vừa reset bằng `cd backend && node database.js`):
    python tools/seed_orders.py
"""
import json, sys, urllib.request
sys.stdout.reconfigure(encoding="utf-8")
API = "http://localhost:3000/api"

def call(method, path, body=None, token=None):
    req = urllib.request.Request(API + path, method=method,
                                 data=json.dumps(body).encode() if body is not None else None,
                                 headers={"Content-Type": "application/json", **({"Authorization": f"Bearer {token}"} if token else {})})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.status, json.loads(r.read().decode("utf-8") or "null")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8")

def login(email, pw):
    s, r = call("POST", "/login", {"email": email, "password": pw}); assert s == 200, (s, r); return r["token"]

user = login("test@eshop.com", "Test1234!")
admin = login("admin@eshop.com", "Admin123!")
addr = "227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM"
# (sản phẩm, số lượng, đường đi trạng thái); tạo theo thứ tự id tăng, trang hồ sơ hiển thị id giảm dần
plan = [
    ([(3, 1)], ["confirmed", "shipping", "delivered"], "admin"),   # Đã giao
    ([(1, 1), (4, 1)], ["confirmed", "shipping"], "admin"),        # Đang giao
    ([(2, 1)], ["confirmed"], "admin"),                            # Đã xác nhận
    ([(5, 2)], ["canceled"], "user"),                              # Đã hủy (người dùng tự hủy khi đang chờ)
    ([(4, 1), (5, 1)], [], None),                                  # Chờ xác nhận
]
prices = {p["id"]: p for p in call("GET", "/products")[1]}
for items, path, actor in plan:
    for pid, qty in items:
        p = prices[pid]
        s, r = call("POST", "/cart", {"id": pid, "name": p["name"], "price": p["price"], "quantity": qty}, user); assert s == 200, r
    total = sum(prices[pid]["price"] * q for pid, q in items)
    s, r = call("POST", "/checkout", {"total_amount": total, "shipping_address": addr}, user); assert s == 200, r
    oid = r["orderId"]
    for st in path:
        if actor == "user":
            s, r = call("PUT", f"/orders/{oid}/cancel", None, user)
        else:
            s, r = call("PUT", f"/admin/orders/{oid}/status", {"status": st}, admin)
        assert s == 200, (oid, st, s, r)
    print(f"Đơn #{oid}: tổng {total:,} đ, trạng thái {path[-1] if path else 'pending'}")

s, r = call("POST", "/register", {"name": "Khách Mới", "email": "newuser@eshop.com", "password": "NewUser123!"})
print("Tài khoản không có đơn:", s, r)
print("Kiểm tra lịch sử test@eshop.com:", [(o["id"], o["status"], o["total_amount"]) for o in call("GET", "/orders/my-orders", None, user)[1]])
