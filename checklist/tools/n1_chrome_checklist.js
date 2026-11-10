'use strict';
/*
 * HW03 Task 1, bước exec, nền tảng N1: Chrome trên Windows.
 * Chạy checklist/02_checklist.md bằng Playwright trên Chrome thật (có giao diện), cho KẾT QUẢ NHÁP.
 * Sinh viên xem lại và chốt kết quả trong Excel; mục Failed sinh viên tự chụp ảnh.
 *
 * Chuẩn bị (PHIÊN ĐIỀU PHỐI làm, script KHÔNG tự làm):
 *   1. Không có phiên usability nào đang dùng backend / DB.
 *   2. Reset DB: cd backend && node database.js
 *   3. Chạy tools/seed_orders.py (5 đơn ở 5 trạng thái cho test@eshop.com; newuser@eshop.com không có đơn).
 *   4. Backend và frontend web đang chạy; frontend ở BASE (mặc định http://localhost:5173).
 *
 * Cách chạy (chỉ khi sinh viên cho phép):
 *   cd Homeworks/HW03/checklist/tools
 *   npm install            (lần đầu; chỉ cài playwright-core và axe-core, không tải trình duyệt)
 *   node n1_chrome_checklist.js
 *   Đổi địa chỉ frontend: đặt biến môi trường ESHOP_URL.
 *   Chạy thử để gỡ lỗi script: node n1_chrome_checklist.js --dry-run
 *     (gặp Failed chỉ ghi lại rồi chạy tiếp, không dừng chờ Enter; bỏ qua 2 bước chuẩn bị giỏ hàng; không hỏi xác nhận).
 *   Chỉ chạy một số nhóm: --only=A,B (nhóm A đến G, xem hàm main).
 *
 * Script KHÔNG: Bật server, reset DB, chạy seed, có cấu hình webServer / globalSetup.
 * Script CÓ đổi dữ liệu (vì checklist yêu cầu thao tác thật): Tạo vài tài khoản hw03.n1.*@eshop.com,
 *   sửa Số điện thoại / Địa chỉ của test@eshop.com và đổi Họ Tên rồi trả lại, hủy đơn pending và confirmed,
 *   cuối cùng làm test@eshop.com bị khóa tạm 30 giây (CL-89). CL-63 ghi mật khẩu mẫu vào clipboard của Windows.
 *   Vì vậy sau lần chạy, phiên điều phối cần reset DB và seed lại trước khi dùng tiếp.
 *
 * Phần tử được tìm theo chữ nhìn thấy trên trang (00_survey.md), không dựa vào mã nguồn EShop.
 * Gặp mục Failed: Script dừng, in mã CL và lý do, giữ nguyên màn hình; bấm Enter để chạy tiếp.
 * Mục cần nhìn (ngôn ngữ, màu, chính tả, highlight, căn lề, kiểu viết hoa...) được ghi "Chạy tay".
 */
const readline = require('readline');
const { chromium } = require('playwright-core');

// ---------------------------------------------------------------- cấu hình
const DRY = process.argv.includes('--dry-run');
const ONLY = ((process.argv.find((a) => a.startsWith('--only=')) || '').split('=')[1] || '').toUpperCase().split(',').filter(Boolean);
const T0 = Date.now();
const stamp = () => `${((Date.now() - T0) / 1000).toFixed(0)}s`;
const BASE = (process.env.ESHOP_URL || 'http://localhost:5173').replace(/\/+$/, '');
const ORIGIN = new URL(BASE).origin;
const VIEWPORT = { width: 1366, height: 768 }; // cửa sổ cố định; trùng kích thước của CL-32
const VIEWPORT_PHONE = { width: 360, height: 800 }; // CL-109
const WAIT = 1500;
const ACC = {
  test: { email: 'test@eshop.com', pw: 'Test1234!' }, // 00_survey.md mục 1
  newuser: { email: 'newuser@eshop.com', pw: 'NewUser123!' },
};
const WRONG_PW = 'Sai12345!';
// Số điện thoại mà trang hồ sơ chấp nhận khi chạy thử (9 chữ số, không có số 0 đầu; khác quy tắc UI-R14).
// Chỉ dùng cho các mục cần một lần gửi thành công mà checklist không quy định số (CL-96, CL-105, CL-108, CL-112 ở W-06).
const APP_OK_PHONE = '912345678';
const ERR_RE = /lỗi|không hợp lệ|sai|thất bại|vui lòng|phải|yếu|cannot|error|failed/i;
const OK_RE = /thành công|đã cập nhật|đã lưu|đã hủy|success/i;
const VALID_PW = 'Abcdef1!';
// Chữ trạng thái nhìn thấy ở 00_survey.md mục 3.4 (dùng để biết dòng nào là đơn pending, confirmed...)
const STATUS_TEXT = { pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', shipping: 'Đang giao', delivered: 'Đã giao', canceled: 'Đã hủy' };
const STATUS_NAMES = new Set(Object.values(STATUS_TEXT));
// Ngày của các đơn do tools/seed_orders.py tạo (sinh viên cho biết: ngày 9 hoặc 10)
const SEED_DAYS = [9, 10];
const RUN_ID = Date.now().toString(36);
const newEmail = (tag) => `hw03.n1.${tag}.${RUN_ID}@eshop.com`;

const RE = {
  loginEmail: /^(username|email|e-mail)\b/i,
  password: /^mật khẩu/i,
  confirm: /^(xác nhận|nhập lại) mật khẩu/i,
  name: /^họ (và )?tên/i,
  email: /^email/i,
  phone: /^số điện thoại/i,
  address: /^địa chỉ/i,
  submitLogin: /^(sign in|đăng nhập)$/i,
  submitRegister: /^đăng ký$/i,
  submitProfile: /^cập nhật$/i,
  logout: /^(thoát|đăng xuất)$/i,
  greeting: /^chào,/i,
  logo: /^eshop$/i,
  cart: /^giỏ hàng/i,
  yes: /^(có|đồng ý|xác nhận|ok|yes|có, hủy đơn|hủy đơn)$/i,
  no: /^(không|đóng|quay lại|thôi|no|cancel|hủy bỏ)$/i,
};
const KW = { 'W-03': /đăng nhập|login|sign in/i, 'W-04': /đăng ký|register|sign up/i, 'W-06': /hồ sơ|tài khoản|profile/i };
const KW_NAME = { 'W-03': 'đăng nhập', 'W-04': 'đăng ký', 'W-06': 'hồ sơ cá nhân' };
const FORM_SPEC = {
  'W-03': [['email', 'Ô thứ nhất (Username / Email)', RE.loginEmail], ['password', 'Mật khẩu', RE.password]],
  'W-04': [['name', 'Họ Tên', RE.name], ['email', 'Email', RE.email], ['password', 'Mật khẩu', RE.password],
    ['confirm', 'Xác nhận mật khẩu', RE.confirm, true]],
  'W-06': [['email', 'Email (Không đổi)', RE.email], ['name', 'Họ Tên', RE.name], ['phone', 'Số điện thoại', RE.phone],
    ['address', 'Địa chỉ giao hàng', RE.address]],
};
const SUBMIT = { 'W-03': RE.submitLogin, 'W-04': RE.submitRegister, 'W-06': RE.submitProfile };

// Mục cần nhìn hoặc làm tay
const MANUAL = {
  'CL-01': 'Cần nhìn: Ngôn ngữ của nhãn và placeholder',
  'CL-02': 'Cần nhìn: Ngôn ngữ của nút và link',
  'CL-03': 'Cần nhìn: Ngôn ngữ của tiêu đề',
  'CL-04': 'Cần nhìn: Ngôn ngữ của navbar và footer',
  'CL-05': 'Cần nhìn: Ngôn ngữ của thông báo (script in các thông báo bắt được ở cuối dòng này)',
  'CL-06': 'Cần nhìn: Ngôn ngữ của tiêu đề tab',
  'CL-07': 'Cần nhìn: Chữ trạng thái đơn (ma trận)',
  'CL-08': 'Cần nhìn: Màu nút tích cực',
  'CL-09': 'Cần nhìn: Màu nút nguy hiểm / hủy bỏ',
  'CL-25': 'Cần nhìn: Dùng từ nhất quán',
  'CL-26': 'Cần nhìn: Kiểu viết hoa tiêu đề',
  'CL-27': 'Cần nhìn: Kiểu viết hoa nút và navbar',
  'CL-31': 'Cần nhìn: Căn lề nhãn và ô nhập',
  'CL-33': 'Làm tay: Zoom 200% bằng bàn phím (Ctrl và dấu +)',
  'CL-34': 'Cần nhìn: Họ Tên dài trên navbar',
  'CL-35': 'Cần nhìn: Chính tả',
  'CL-56': 'Cần nhìn: Thông báo có nêu điều kiện cần đạt không',
  'CL-66': 'Cần nhìn: Highlight mục navbar',
  'CL-67': 'Cần nhìn: Highlight sai trên navbar',
  'CL-84': 'Cần nhìn: Tên màu nền nhãn trạng thái (ma trận)',
  'CL-92': 'Cần nhìn: Câu thông báo lịch sử đơn trống',
};

// ---------------------------------------------------------------- hàm chạy trong trang (chỉ đọc DOM)
function pageLib() {
  if (window.__hw) return;
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const vis = (el) => {
    if (!el || !el.getClientRects || el.getClientRects().length === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity || '1') > 0;
  };
  const ownText = (el) => norm(Array.from(el.childNodes).filter((n) => n.nodeType === 3).map((n) => n.textContent).join(' '));
  const navRoot = () => {
    const sem = Array.from(document.querySelectorAll('nav, header, [role="navigation"], [role="banner"]'))
      .find((n) => /giỏ hàng/i.test(n.textContent));
    if (sem) return sem;
    const cart = Array.from(document.querySelectorAll('a, button')).find((a) => /^giỏ hàng/i.test(norm(a.textContent)));
    let n = cart;
    while (n && n !== document.body) {
      if (/eshop/i.test(n.textContent) && n.getBoundingClientRect().height < 160) return n;
      n = n.parentElement;
    }
    return null;
  };
  const inNav = (el) => { const r = navRoot(); return !!(r && r.contains(el)); };
  const fields = () => Array.from(document.querySelectorAll('input, textarea, select'))
    .filter((f) => !/^(hidden|submit|button|reset|image|checkbox|radio)$/i.test(f.type) && vis(f) && !inNav(f));
  const findLabel = (re) => {
    const ls = Array.from(document.querySelectorAll('label')).filter((l) => vis(l) && !inNav(l) && re.test(norm(l.textContent)));
    if (ls.length) return ls[0];
    return Array.from(document.body.querySelectorAll('*')).find((el) => vis(el) && !inNav(el)
      && !/^(INPUT|TEXTAREA|SELECT|BUTTON|SCRIPT|STYLE|OPTION|A)$/.test(el.tagName) && re.test(ownText(el))) || null;
  };
  const fieldAfter = (lab) => {
    if (!lab) return null;
    if (lab.control) return lab.control;
    return fields().find((f) => lab.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING) || null;
  };
  const field = (re) => fieldAfter(findLabel(re));
  const button = (re) => Array.from(document.querySelectorAll('button, input[type="submit"], input[type="button"], a, [role="button"]'))
    .find((b) => vis(b) && !inNav(b) && re.test(norm(b.textContent || b.value))) || null;
  const navEl = (re) => {
    const r = navRoot();
    if (!r) return null;
    return Array.from(r.querySelectorAll('a, button, [role="button"]')).find((e) => vis(e) && re.test(norm(e.textContent))) || null;
  };
  const navItems = () => {
    const r = navRoot();
    if (!r) return [];
    return Array.from(r.querySelectorAll('a, button, [role="button"]')).filter(vis).map((e) => {
      const b = e.getBoundingClientRect();
      return { text: norm(e.textContent), tag: e.tagName, href: e.getAttribute('href'), x: Math.round(b.left), y: Math.round(b.top) };
    });
  };
  const snapshot = () => Array.from(document.body.querySelectorAll('*'))
    .filter((e) => !/^(SCRIPT|STYLE|NOSCRIPT|OPTION|TEMPLATE)$/.test(e.tagName) && vis(e) && !inNav(e) && ownText(e))
    .map((e) => {
      const r = e.getBoundingClientRect();
      return { t: ownText(e), live: !!e.closest('[role="alert"],[role="status"],[aria-live]'),
        top: r.top + scrollY, bottom: r.bottom + scrollY, left: r.left, right: r.right };
    });
  const rectOf = (e) => { const r = e.getBoundingClientRect(); return { top: r.top + scrollY, bottom: r.bottom + scrollY, left: r.left, right: r.right }; };
  const invalidFields = () => fields().filter((f) => f.willValidate && !f.validity.valid).map((f) => f.validationMessage);
  const sig = (el) => {
    const c = getComputedStyle(el);
    return [c.outlineStyle, c.outlineWidth, c.outlineColor, c.boxShadow, c.borderTopColor, c.borderBottomColor,
      c.backgroundColor, c.color, c.textDecorationLine].join('|');
  };
  const base = new WeakMap();
  const markBase = () => document.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach((e) => base.set(e, sig(e)));
  const active = () => {
    const e = document.activeElement;
    if (!e || e === document.body || e === document.documentElement) return { body: true };
    const r = e.getBoundingClientRect();
    return { body: false, tag: e.tagName, text: norm(e.textContent || e.value || e.getAttribute('aria-label') || e.getAttribute('placeholder') || ''),
      inNav: inNav(e), x: r.left, y: r.top + scrollY, focusVisible: base.has(e) ? base.get(e) !== sig(e) : null, isMark: e === window.__hw.mark };
  };
  const histTable = () => Array.from(document.querySelectorAll('table')).find((x) => /tổng tiền/i.test(x.textContent) && vis(x)) || null;
  const history = () => {
    const t = histTable();
    if (!t) return null;
    const hdr = Array.from(t.querySelectorAll('th')).map((th) => norm(th.textContent));
    const si = hdr.findIndex((h) => /trạng thái/i.test(h));
    const rows = Array.from(t.querySelectorAll('tbody tr')).filter(vis).map((tr) => {
      const tds = Array.from(tr.querySelectorAll('td'));
      const b = Array.from(tr.querySelectorAll('button, a, [role="button"]')).find((x) => /hủy đơn/i.test(norm(x.textContent)));
      let style = '';
      if (si >= 0 && tds[si]) { const e = tds[si].querySelector('*') || tds[si]; const c = getComputedStyle(e); style = `nền ${c.backgroundColor}, chữ ${c.color}`; }
      return { cells: tds.map((td) => norm(td.textContent)), style, top: tr.getBoundingClientRect().top + scrollY,
        cancel: b ? { visible: vis(b), disabled: !!(b.disabled || b.getAttribute('aria-disabled') === 'true') } : null };
    });
    return { hdr, rows };
  };
  const rowCancelBtn = (id) => {
    const t = histTable();
    if (!t) return null;
    const tr = Array.from(t.querySelectorAll('tbody tr')).find((r) => Array.from(r.querySelectorAll('td')).some((td) => norm(td.textContent) === id));
    if (!tr) return null;
    return Array.from(tr.querySelectorAll('button, a, [role="button"]')).find((x) => /hủy đơn/i.test(norm(x.textContent))) || null;
  };
  const layout = () => {
    const de = document.documentElement;
    const hScroll = Math.max(de.scrollWidth, document.body.scrollWidth) > de.clientWidth + 1;
    const els = Array.from(document.body.querySelectorAll('label, input, textarea, select, button, a, h1, h2, h3, h4, h5, h6, p, th, td, img, li, span'))
      .filter(vis).slice(0, 500);
    const rects = els.map((e) => e.getBoundingClientRect());
    const ov = [];
    for (let i = 0; i < els.length; i++) {
      for (let j = i + 1; j < els.length; j++) {
        if (els[i].contains(els[j]) || els[j].contains(els[i])) continue;
        const a = rects[i]; const b = rects[j];
        const w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (w > 2 && h > 2) ov.push(`<${els[i].tagName.toLowerCase()}> "${norm(els[i].textContent).slice(0, 20)}" chồng <${els[j].tagName.toLowerCase()}> "${norm(els[j].textContent).slice(0, 20)}"`);
      }
    }
    const clipped = els.filter((e) => /hidden|clip/.test(getComputedStyle(e).overflowX) && e.scrollWidth > e.clientWidth + 1 && norm(e.textContent))
      .map((e) => `<${e.tagName.toLowerCase()}> "${norm(e.textContent).slice(0, 20)}"`);
    return { w: innerWidth, h: innerHeight, hScroll, ov: ov.slice(0, 6), nOv: ov.length, clipped: clipped.slice(0, 5) };
  };
  const hasStar = (lab) => {
    if (!lab) return false;
    if (/\*/.test(lab.textContent)) return true;
    if (lab.nextElementSibling && /^\*$/.test(norm(lab.nextElementSibling.textContent))) return true;
    return [lab, ...lab.querySelectorAll('*')].some((e) => ['::before', '::after'].some((p) => /\*/.test(getComputedStyle(e, p).content || '')));
  };
  const eyeNear = (inp) => {
    const ir = inp.getBoundingClientRect();
    let p = inp.parentElement;
    for (let i = 0; i < 2 && p; i++, p = p.parentElement) {
      const c = Array.from(p.querySelectorAll('button, [role="button"], svg, i, [class*="eye" i], [class*="icon" i]')).find((e) => {
        if (e === inp || e.contains(inp) || !vis(e)) return false;
        const r = e.getBoundingClientRect();
        return r.top < ir.bottom + 2 && r.bottom > ir.top - 2 && !/^(sign in|đăng ký|đăng nhập|cập nhật)$/i.test(norm(e.textContent));
      });
      if (c) return c.closest('button, [role="button"]') || c;
    }
    return null;
  };
  const historyBlock = () => {
    const h = Array.from(document.body.querySelectorAll('*')).find((e) => vis(e) && /^lịch sử đơn hàng$/i.test(ownText(e)));
    if (!h) return null;
    let n = h.parentElement;
    while (n && n !== document.body && norm(n.textContent) === norm(h.textContent)) n = n.parentElement;
    return n;
  };
  const emptyState = () => {
    const n = historyBlock();
    if (!n) return null;
    const head = Array.from(n.querySelectorAll('*')).find((e) => /^lịch sử đơn hàng$/i.test(ownText(e)));
    const icon = Array.from(n.querySelectorAll('img, svg, i[class], [class*="icon" i], [role="img"]')).find((e) => vis(e) && !(head && head.contains(e)));
    const action = Array.from(n.querySelectorAll('a, button, [role="button"]')).find(vis);
    const msg = Array.from(n.querySelectorAll('*')).filter((e) => vis(e) && ownText(e) && e !== head).map(ownText);
    return { icon: icon ? `<${icon.tagName.toLowerCase()}>` : null, action: action ? norm(action.textContent) : null, msg: msg.join(' | ') };
  };
  const loading = () => {
    const sig1 = Array.from(document.body.querySelectorAll('[role="progressbar"], [aria-busy="true"], [class*="spin" i], [class*="loading" i], [class*="loader" i], [class*="skeleton" i]'))
      .filter((e) => vis(e) && !inNav(e)).length > 0;
    const sig2 = Array.from(document.body.querySelectorAll('*')).some((e) => vis(e) && !inNav(e) && /đang tải|loading/i.test(ownText(e)));
    const empty = Array.from(document.body.querySelectorAll('*')).some((e) => vis(e) && /bạn chưa có đơn hàng nào/i.test(ownText(e)));
    return { any: sig1 || sig2, empty, table: !!histTable() };
  };
  const btnState = (b) => {
    const spinner = Array.from(document.body.querySelectorAll('[role="progressbar"], [aria-busy="true"], [class*="spin" i], [class*="loader" i]')).filter((e) => vis(e) && !inNav(e)).length;
    return { disabled: !!(b.disabled || b.getAttribute('aria-disabled') === 'true'), text: norm(b.textContent || b.value), spinner };
  };
  const modal = () => {
    const m = Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], [aria-modal="true"], dialog[open]')).find(vis);
    if (m) return { text: norm(m.textContent).slice(0, 120) };
    const yes = Array.from(document.querySelectorAll('button')).find((b) => vis(b) && !inNav(b) && /^(có|đồng ý|xác nhận|ok|yes|có, hủy đơn)$/i.test(norm(b.textContent)));
    return yes ? { text: norm(yes.parentElement ? yes.parentElement.textContent : yes.textContent).slice(0, 120) } : null;
  };
  const modalBtn = (re) => {
    const m = Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], [aria-modal="true"], dialog[open]')).find(vis);
    const scope = m || document;
    return Array.from(scope.querySelectorAll('button, [role="button"]')).find((b) => vis(b) && !inNav(b) && re.test(norm(b.textContent))
      && !(m === undefined && b.closest('table'))) || null;
  };
  const accName = (el) => {
    const lb = el.getAttribute('aria-labelledby');
    if (lb) {
      const t = norm(lb.split(/\s+/).map((id) => (document.getElementById(id) || {}).textContent || '').join(' '));
      if (t) return t;
    }
    const al = norm(el.getAttribute('aria-label'));
    if (al) return al;
    if (el.labels && el.labels.length) { const t = norm(Array.from(el.labels).map((l) => l.textContent).join(' ')); if (t) return t; }
    if (/^(A|BUTTON)$/.test(el.tagName) && norm(el.textContent)) return norm(el.textContent);
    return norm(el.getAttribute('title')) || norm(el.getAttribute('placeholder')) || '';
  };
  const headingSizes = () => {
    let hs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter((h) => vis(h) && !inNav(h));
    let via = 'thẻ h1 đến h6';
    if (!hs.length) {
      hs = Array.from(document.body.querySelectorAll('*')).filter((e) => vis(e) && !inNav(e) && e.tagName !== 'BUTTON'
        && /^(hồ sơ của bạn|lịch sử đơn hàng|đăng ký tài khoản|đăng ký|đăng nhập)$/i.test(ownText(e)));
      via = 'chữ tiêu đề trong survey';
    }
    return { via, list: hs.map((h) => ({ t: norm(h.textContent).slice(0, 30), s: parseFloat(getComputedStyle(h).fontSize) })),
      body: parseFloat(getComputedStyle(document.body).fontSize) };
  };
  const fontSig = (e) => { const c = getComputedStyle(e); return `${c.fontFamily.split(',')[0].replace(/["']/g, '').trim()}, ${c.fontSize}, ${c.color}`; };
  const submitSig = (e) => { const c = getComputedStyle(e); return `cao ${Math.round(e.getBoundingClientRect().height)}px, ${c.fontFamily.split(',')[0].replace(/["']/g, '').trim()}, ${c.fontSize}, bo góc ${c.borderRadius}`; };
  const hintText = () => Array.from(document.body.querySelectorAll('*')).filter((e) => vis(e) && !inNav(e) && /ký tự/i.test(ownText(e))).map(ownText);
  const h1s = () => Array.from(document.querySelectorAll('h1')).map((h) => norm(h.textContent));
  const headTexts = () => Array.from(document.querySelectorAll('h1, h2, h3')).filter(vis).map((h) => norm(h.textContent));
  window.__hw = { norm, vis, ownText, navRoot, inNav, fields, findLabel, fieldAfter, field, button, navEl, navItems, snapshot, rectOf,
    invalidFields, sig, markBase, active, history, rowCancelBtn, layout, hasStar, eyeNear, emptyState, loading, btnState, modal,
    modalBtn, accName, headingSizes, fontSig, submitSig, hintText, h1s, headTexts, mark: null };
}

// ---------------------------------------------------------------- ghi kết quả
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const R = new Map(); // mã CL -> danh sách kết quả từng phần (theo màn hình)
const NOTES = { messages: new Set(), titles: {}, statuses: [], colors: [], empty: '' };
const color = { Passed: '\x1b[32m', Failed: '\x1b[31m' };

async function check(code, scr, res, why, page) {
  if (!R.has(code)) R.set(code, []);
  R.get(code).push({ scr, res, why });
  console.log(`${color[res] || '\x1b[33m'}${code} [${scr}] ${res}: ${why}\x1b[0m`);
  if (res === 'Failed' && page && !DRY) {
    try { await page.bringToFront(); } catch (e) { /* trang đã đóng */ }
    await ask(`\n>>> ${code} FAILED (${scr}): ${why}\n    Màn hình đang giữ nguyên để chụp. Chụp xong bấm Enter để chạy tiếp... `);
  }
}
async function T(code, scr, page, fn) {
  try { await fn(); } catch (e) {
    const at = DRY ? ` @ ${(String(e.stack || '').split('\n').find((l) => /n1_chrome_checklist/.test(l)) || '').trim()}` : '';
    await check(code, scr, 'Lỗi script', String(e.message || e).split('\n')[0] + at);
  }
}
const skip = (code, scr, why) => check(code, scr, 'Không chạy được', why);

function finalOf(parts) {
  const has = (r) => parts.some((p) => p.res === r);
  if (has('Failed')) return 'Failed';
  if (has('Lỗi script')) return 'Chạy tay (lỗi script)';
  if (has('Chạy tay')) return 'Chạy tay';
  if (parts.every((p) => p.res === 'Không chạy được')) return 'Không chạy được';
  if (has('Không chạy được')) return 'Passed (một phần không chạy được)';
  return 'Passed';
}

// ---------------------------------------------------------------- tiện ích phía Node
const DIALOGS = [];
let dialogMode = 'accept';
const CDP = new WeakMap();
const pathOf = (page) => { try { return new URL(page.url()).pathname.replace(/\/+$/, '') || '/'; } catch (e) { return ''; } };

function setupPage(page) {
  page.on('dialog', async (d) => {
    DIALOGS.push({ type: d.type(), msg: d.message() });
    NOTES.messages.add(`(hộp ${d.type()}) ${d.message()}`);
    try { if (dialogMode === 'dismiss' && d.type() === 'confirm') await d.dismiss(); else await d.accept(); } catch (e) { /* bỏ qua */ }
  });
  return page;
}
async function go(page, p) {
  await page.goto(BASE + p, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
  await sleep(500);
}
async function handle(page, fn, re) {
  const h = await page.evaluateHandle(([n, s, f]) => window.__hw[n](new RegExp(s, f)), [fn, re.source, re.flags]);
  const el = h.asElement();
  if (!el) await h.dispose();
  return el;
}
const fieldH = (page, re) => handle(page, 'field', re);
const labelH = (page, re) => handle(page, 'findLabel', re);
const buttonH = (page, re) => handle(page, 'button', re);
const navH = (page, re) => handle(page, 'navEl', re);
const ev = (page, fn, arg) => page.evaluate(fn, arg);
const val = (el) => el.inputValue();
const away = (page) => page.mouse.move(VIEWPORT.width - 3, VIEWPORT.height - 3);

async function fillF(page, re, v) {
  const f = await fieldH(page, re);
  if (!f) throw new Error(`Không tìm thấy ô theo nhãn ${re}`);
  await f.fill(v);
  return f;
}
async function clickBtn(page, re) {
  const b = await buttonH(page, re);
  if (!b) throw new Error(`Không tìm thấy nút ${re}`);
  await b.click();
  return b;
}
async function getCdp(page) {
  if (!CDP.has(page)) { const s = await page.context().newCDPSession(page); await s.send('Network.enable'); CDP.set(page, s); }
  return CDP.get(page);
}
async function slow(page, on) { // gần với preset "Slow 4G" của DevTools
  const s = await getCdp(page);
  await s.send('Network.emulateNetworkConditions', on
    ? { offline: false, latency: 563, downloadThroughput: Math.round((1.44 * 1024 * 1024) / 8), uploadThroughput: Math.round((675 * 1024) / 8) }
    : { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
}
async function observe(page, action, ms = WAIT + 1500) {
  const before = new Set((await ev(page, () => window.__hw.snapshot())).map((s) => s.t));
  const nd = DIALOGS.length;
  const reqs = [];
  const onReq = (r) => { if (!['GET', 'HEAD', 'OPTIONS'].includes(r.method())) reqs.push(`${r.method()} ${r.url()}`); };
  page.on('request', onReq);
  await action();
  const seen = new Map();
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    try {
      const snap = await ev(page, () => (window.__hw ? window.__hw.snapshot() : []));
      for (const s of snap) if (!before.has(s.t) && !seen.has(s.t)) seen.set(s.t, s);
    } catch (e) { /* trang đang chuyển */ }
    await sleep(150);
  }
  page.off('request', onReq);
  const invalid = await ev(page, () => (window.__hw ? window.__hw.invalidFields() : [])).catch(() => []);
  const dialogs = DIALOGS.slice(nd);
  const msgs = [...seen.values()].filter((s) => !STATUS_NAMES.has(s.t) && s.t.length > 1);
  msgs.forEach((m) => NOTES.messages.add(m.t));
  return { msgs, texts: msgs.map((m) => m.t), dialogs, path: pathOf(page), invalid, reqs };
}
const anyMsg = (o) => o.msgs.length > 0 || o.dialogs.some((d) => d.type === 'alert');
const allText = (o) => [...o.texts, ...o.dialogs.map((d) => d.msg)];
const hasErr = (o) => o.invalid.length > 0 || allText(o).some((t) => ERR_RE.test(t));
const hasOk = (o) => allText(o).some((t) => OK_RE.test(t));
const msgText = (o) => [...o.texts, ...o.dialogs.map((d) => `(hộp) ${d.msg}`)].join(' | ').slice(0, 160) || '(không có)';

async function isLoggedIn(page) { return !!(await navH(page, RE.logout)) || !!(await navH(page, RE.greeting)); }
async function logout(page) {
  const b = await navH(page, RE.logout);
  if (b) { await b.click(); await sleep(WAIT); }
}
async function login(page, acc) {
  await go(page, '/login');
  if (await isLoggedIn(page)) { await logout(page); await go(page, '/login'); }
  await fillF(page, RE.loginEmail, acc.email);
  await fillF(page, RE.password, acc.pw);
  await clickBtn(page, RE.submitLogin);
  for (let i = 0; i < 20; i++) { if (await navH(page, RE.greeting)) return true; await sleep(250); }
  return false;
}
async function formOf(page, scr) {
  const out = [];
  for (const [key, label, re, optional] of FORM_SPEC[scr]) {
    const lab = await labelH(page, re);
    const f = lab ? await fieldH(page, re) : null;
    if (lab || !optional) out.push({ key, label, re, lab, f });
  }
  return out;
}
async function hoverChanged(page, el) {
  await away(page); await sleep(150);
  const a = await ev(page, (e) => window.__hw.sig(e), el);
  await el.hover(); await sleep(250);
  const b = await ev(page, (e) => window.__hw.sig(e), el);
  await away(page);
  return a !== b;
}
async function fillRegister(page, { name, email, pw, confirm }) {
  await go(page, '/register');
  await fillF(page, RE.name, name);
  await fillF(page, RE.email, email);
  await fillF(page, RE.password, pw);
  const c = await fieldH(page, RE.confirm);
  if (c) await c.fill(confirm === undefined ? pw : confirm);
}
const X = { label: {}, submit: {}, navOut: {}, navIn: {} };

// ---------------------------------------------------------------- nhóm kiểm dùng chung
async function staticChecks(page, scr, sl, hasForm) {
  NOTES.titles[sl] = await page.title();
  await T('CL-13', sl, page, async () => {
    const hs = await ev(page, () => window.__hw.h1s());
    await check('CL-13', sl, hs.length === 1 ? 'Passed' : 'Failed', `${hs.length} thẻ <h1>: ${hs.map((t) => `"${t}"`).join(', ')}`, page);
  });
  await T('CL-14', sl, page, async () => {
    const hs = await ev(page, () => window.__hw.h1s());
    const ok = hs.length > 0 && hs.every((t) => KW[scr].test(t));
    await check('CL-14', sl, ok ? 'Passed' : 'Failed', `<h1>: ${hs.map((t) => `"${t}"`).join(', ') || '(không có)'}; mong đợi nói về ${KW_NAME[scr]}`, page);
  });
  await T('CL-19', sl, page, async () => {
    const lang = await ev(page, () => document.documentElement.getAttribute('lang'));
    await check('CL-19', sl, lang === 'vi' ? 'Passed' : 'Failed', `lang=${lang === null ? '(không có)' : `"${lang}"`}`, page);
  });
  await T('CL-23', sl, page, async () => {
    await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
    const r = await ev(page, async () => {
      const out = await window.axe.run(document, { runOnly: { type: 'rule', values: ['color-contrast'] } });
      return { n: out.violations.reduce((s, v) => s + v.nodes.length, 0), inc: out.incomplete.reduce((s, v) => s + v.nodes.length, 0),
        sample: out.violations.flatMap((v) => v.nodes.map((nd) => `${nd.target.join(' ')} (${nd.any[0] ? nd.any[0].data && nd.any[0].data.contrastRatio : '?'}:1)`)).slice(0, 4) };
    });
    await check('CL-23', sl, r.n === 0 ? 'Passed' : 'Failed',
      r.n === 0 ? `axe-core: 0 lỗi tương phản (${r.inc} phần tử axe không tự kết luận được, xem tay)` : `axe-core: ${r.n} lỗi tương phản, ví dụ ${r.sample.join('; ')}`, page);
  });
  await T('CL-83', sl, page, async () => {
    const r = await ev(page, () => { const m = document.querySelector('main, [role="main"]'); return m ? (window.__hw.norm(m.textContent).length > 0) : null; });
    await check('CL-83', sl, r ? 'Passed' : 'Failed', r === null ? 'Không có <main> hay role="main"' : `Có vùng main, chứa nội dung: ${r ? 'có' : 'không'}`, page);
  });
  if (!hasForm) return;
  const F = await formOf(page, scr);
  const missing = F.filter((x) => !x.f).map((x) => x.label);
  if (missing.length) console.log(`  (Không tìm thấy ô cho nhãn: ${missing.join(', ')})`);
  X.label[sl] = [];
  for (const x of F) if (x.lab) X.label[sl].push(`${x.label}: ${await ev(page, (e) => window.__hw.fontSig(e), x.lab)}`);
  const sb = await buttonH(page, SUBMIT[scr]);
  if (sb) X.submit[sl] = await ev(page, (e) => window.__hw.submitSig(e), sb);
  await T('CL-30', sl, page, async () => {
    const hs = await ev(page, () => window.__hw.headingSizes());
    const labs = [];
    for (const x of F) if (x.lab) labs.push(await ev(page, (e) => parseFloat(getComputedStyle(e).fontSize), x.lab));
    const ref = Math.max(hs.body, ...labs);
    if (!hs.list.length) return check('CL-30', sl, 'Chạy tay', 'Không tìm thấy tiêu đề');
    await check('CL-30', sl, hs.list.every((h) => h.s > ref) ? 'Passed' : 'Failed',
      `${hs.list.map((h) => `"${h.t}" ${h.s}px`).join(', ')}; nhãn lớn nhất ${Math.max(0, ...labs)}px; body ${hs.body}px (${hs.via})`, page);
  });
  await T('CL-44', sl, page, async () => {
    const e = F.find((x) => x.key === 'email' && x.f);
    if (!e) return check('CL-44', sl, 'Chạy tay', 'Không tìm thấy ô Email');
    const t = await e.f.getAttribute('type');
    await check('CL-44', sl, (t || '').toLowerCase() === 'email' ? 'Passed' : 'Failed', `${e.label}: type=${t === null ? '(không có)' : `"${t}"`}`, page);
  });
  if (scr !== 'W-06') {
    await T('CL-46', sl, page, async () => {
      const ps = F.filter((x) => (x.key === 'password' || x.key === 'confirm') && x.f);
      if (!ps.length) return check('CL-46', sl, 'Chạy tay', 'Không tìm thấy ô mật khẩu');
      const vals = [];
      for (const x of ps) vals.push(`${x.label}: type="${await x.f.getAttribute('type')}"`);
      await check('CL-46', sl, vals.every((v) => /"password"$/.test(v)) ? 'Passed' : 'Failed', vals.join(' | '), page);
    });
  }
  await T('CL-54', sl, page, async () => {
    const res = [];
    for (const x of F.filter((y) => y.f)) {
      const name = await ev(page, (e) => window.__hw.accName(e), x.f);
      const visible = (x.lab ? await ev(page, (e) => window.__hw.norm(e.textContent), x.lab) : x.label).split('(')[0].replace(/\*/g, '').trim().toLowerCase();
      res.push({ s: `${x.label}: "${name}"`, st: !name ? 'empty' : (name.toLowerCase().includes(visible) ? 'ok' : 'diff') });
    }
    const r = res.some((x) => x.st === 'empty') || res.some((x) => x.st === 'diff') ? 'Failed' : 'Passed';
    await check('CL-54', sl, r, `${res.map((x) => x.s).join(' | ')} (tên tính gần đúng; xác nhận ở dòng Name trong Accessibility)`, page);
  });
  await T('CL-62', sl, page, async () => {
    const want = { email: scr === 'W-03' ? ['email', 'username'] : ['email'], password: scr === 'W-03' ? ['current-password'] : ['new-password'],
      confirm: ['new-password'], phone: ['tel', 'tel-national', 'tel-local'] };
    const res = [];
    for (const x of F.filter((y) => y.f && want[y.key])) {
      const raw = await x.f.getAttribute('autocomplete');
      const tok = raw ? raw.trim().toLowerCase().split(/\s+/).pop() : '';
      res.push({ s: `${x.label}: ${raw === null ? '(không có)' : `"${raw}"`}`, ok: want[x.key].includes(tok) });
    }
    if (!res.length) return check('CL-62', sl, 'Chạy tay', 'Không tìm thấy ô');
    await check('CL-62', sl, res.every((x) => x.ok) ? 'Passed' : 'Failed', res.map((x) => x.s).join(' | '), page);
  });
}

async function layoutCheck(page, code, sl) {
  await T(code, sl, page, async () => {
    const L = await ev(page, () => window.__hw.layout());
    const m = `cửa sổ ${L.w} x ${L.h}; cuộn ngang: ${L.hScroll ? 'CÓ' : 'không'}; chồng lấn: ${L.nOv}${code === 'CL-32' ? `; chữ bị cắt: ${L.clipped.length}` : ''}`;
    const extra = [...L.ov, ...(code === 'CL-32' ? L.clipped.map((c) => `bị cắt ${c}`) : [])].join('; ');
    if (L.hScroll) return check(code, sl, 'Failed', m, page);
    if (L.nOv || (code === 'CL-32' && L.clipped.length)) return check(code, sl, 'Chạy tay', `${m}. Xem lại: ${extra}`);
    await check(code, sl, 'Passed', m, page);
  });
}

async function tabChecks(page, scr, sl, opts = {}) {
  await go(page, pathOf(page) === '' ? '/' : new URL(page.url()).pathname);
  await away(page);
  if (opts.markEmail) { const e = await fieldH(page, RE.email); if (e) await ev(page, (el) => { window.__hw.mark = el; }, e); }
  await ev(page, () => window.__hw.markBase());
  const navCount = (await ev(page, () => window.__hw.navItems())).length;
  const seq = [];
  const seenKeys = new Set();
  for (let i = 0; i < 45; i++) {
    await page.keyboard.press('Tab');
    const a = await ev(page, () => window.__hw.active());
    if (a.body) break;
    const key = `${a.tag}|${a.text}|${Math.round(a.x)}|${Math.round(a.y)}`;
    if (seenKeys.has(key)) break; // đã đi hết một vòng
    seenKeys.add(key);
    seq.push(a);
  }
  const show = (s) => s.map((a) => `"${a.text.slice(0, 18)}"`).join(' > ');
  const content = seq.filter((a) => !a.inNav);
  await T('CL-15', sl, page, async () => {
    const head = seq.slice(0, navCount);
    const ok = navCount > 0 && head.length === navCount && head.every((a) => a.inNav)
      && head.every((a, i) => i === 0 || a.x > head[i - 1].x) && (!seq[navCount] || !seq[navCount].inNav);
    await check('CL-15', sl, ok ? 'Passed' : 'Failed', `navbar có ${navCount} mục; ${navCount + 1} lần Tab đầu: ${show(seq.slice(0, navCount + 1))}`, page);
  });
  let formPart = content;
  if (scr === 'W-06') { const k = content.findIndex((a) => RE.submitProfile.test(a.text)); formPart = k >= 0 ? content.slice(0, k + 1) : content; }
  await T('CL-16', sl, page, async () => {
    const bad = [];
    formPart.forEach((a, i) => { if (i === 0) return; const p = formPart[i - 1]; if (!(a.y > p.y + 2 || (Math.abs(a.y - p.y) <= 2 && a.x > p.x))) bad.push(`"${p.text.slice(0, 15)}" > "${a.text.slice(0, 15)}"`); });
    await check('CL-16', sl, formPart.length && !bad.length ? 'Passed' : 'Failed', `thứ tự focus: ${show(formPart)}${bad.length ? `; ngược bố cục ở: ${bad.join(', ')}` : ''}`, page);
  });
  if (scr === 'W-06' && opts.hasOrders) {
    await T('CL-17', sl, page, async () => {
      const k = content.findIndex((a) => RE.submitProfile.test(a.text));
      const H = await ev(page, () => window.__hw.history());
      const nCancel = H ? H.rows.filter((r) => r.cancel && r.cancel.visible && !r.cancel.disabled).length : 0;
      const after = k >= 0 ? content.slice(k + 1, k + 1 + nCancel) : [];
      const ok = k >= 0 && nCancel > 0 && after.length === nCancel && after.every((a, i) => /hủy đơn/i.test(a.text) && (i === 0 || a.y > after[i - 1].y));
      await check('CL-17', sl, ok ? 'Passed' : 'Failed', `sau "Cập nhật": ${show(content.slice(k + 1, k + 1 + Math.max(nCancel, 3)))}; số nút Hủy đơn bấm được: ${nCancel}`, page);
    });
  }
  await T('CL-21', sl, page, async () => {
    const no = seq.filter((a) => a.focusVisible === false);
    await check('CL-21', sl, seq.length && !no.length ? 'Passed' : 'Failed',
      no.length ? `Không thấy thay đổi khi focus ở: ${show(no)}` : `${seq.length} phần tử nhận focus đều đổi hình thức`, page);
  });
  if (opts.markEmail) {
    await T('CL-22', sl, page, async () => {
      const e = await fieldH(page, RE.email);
      if (!e) return check('CL-22', sl, 'Chạy tay', 'Không tìm thấy ô Email');
      const st = await ev(page, (el) => ({ ro: el.readOnly, dis: el.disabled }), e);
      const inSeq = seq.some((a) => a.isMark);
      const ok = (st.ro && inSeq) || (st.dis && !inSeq);
      await check('CL-22', sl, ok ? 'Passed' : 'Failed', `readonly=${st.ro}, disabled=${st.dis}; Tab ${inSeq ? 'có' : 'không'} dừng ở ô Email`, page);
    });
  }
}

async function linkCheck(page, sl, start, label, getEl, okPath) {
  for (const mode of ['CL-71', 'CL-73']) {
    await T(mode, sl, page, async () => {
      await go(page, start);
      const el = await getEl(page);
      if (!el) return check(mode, sl, 'Chạy tay', `Không tìm thấy link "${label}"`);
      if (mode === 'CL-71') await el.click(); else { await el.focus(); await page.keyboard.press('Enter'); }
      await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
      await sleep(800);
      const p = pathOf(page);
      const heads = await ev(page, () => window.__hw.headTexts()).catch(() => []);
      const ok = okPath(p, heads);
      await check(mode, sl, ok ? 'Passed' : 'Failed', `${mode === 'CL-73' ? 'Enter trên' : 'Bấm'} "${label}": tới ${p}`, page);
    });
  }
}
const toCart = (p, h) => /cart|gio-?hang/i.test(p) || h.some((t) => /giỏ hàng/i.test(t));
const toForgot = (p, h) => /forgot|quen|reset|password/i.test(p) || h.some((t) => /quên mật khẩu/i.test(t));
const exact = (q) => (p) => p === q;

async function logoCheck(page, sl, start) {
  await T('CL-72', sl, page, async () => {
    await go(page, start);
    let el = await navH(page, RE.logo);
    let kind = 'link / nút';
    if (!el) {
      const h = await page.evaluateHandle(() => { const r = window.__hw.navRoot(); return r ? Array.from(r.querySelectorAll('*')).find((e) => /^eshop$/i.test(window.__hw.ownText(e))) || null : null; });
      el = h.asElement(); kind = 'không phải <a> / <button>';
    }
    if (!el) return check('CL-72', sl, 'Failed', 'Không tìm thấy logo "EShop" trên navbar', page);
    await el.click(); await sleep(WAIT);
    await check('CL-72', sl, pathOf(page) === '/' ? 'Passed' : 'Failed', `Bấm logo (${kind}): tới ${pathOf(page)}`, page);
  });
}

async function hoverLinks(page, sl, inPage) {
  await T('CL-74', sl, page, async () => {
    const items = (await ev(page, () => window.__hw.navItems())).filter((n) => !RE.logout.test(n.text));
    const bad = [];
    for (const it of items) {
      const re = new RegExp('^' + it.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$', 'i');
      const el = await navH(page, re);
      if (el && !(await hoverChanged(page, el))) bad.push(it.text);
    }
    for (const t of inPage) { const el = await buttonH(page, t); if (el && !(await hoverChanged(page, el))) bad.push(String(t)); }
    await check('CL-74', sl, bad.length ? 'Failed' : 'Passed', bad.length ? `Không đổi khi rê chuột: ${bad.join(', ')}` : `${items.length + inPage.length} link / mục navbar đổi hình thức khi rê chuột`, page);
  });
}
async function hoverButtons(page, sl, list) {
  await T('CL-107', sl, page, async () => {
    const bad = []; let n = 0;
    for (const [where, re] of list) {
      const el = where === 'nav' ? await navH(page, re) : await buttonH(page, re);
      if (!el) continue;
      n++;
      if (!(await hoverChanged(page, el))) bad.push(String(re));
    }
    if (!n) return check('CL-107', sl, 'Chạy tay', 'Không tìm thấy nút');
    await check('CL-107', sl, bad.length ? 'Failed' : 'Passed', bad.length ? `Không đổi khi rê chuột: ${bad.join(', ')}` : `${n} nút đổi hình thức khi rê chuột`, page);
  });
}

async function waitingCheck(page, sl, btnRe) {
  await T('CL-96', sl, page, async () => {
    const b = await buttonH(page, btnRe);
    if (!b) return check('CL-96', sl, 'Chạy tay', 'Không tìm thấy nút gửi');
    const s0 = await ev(page, (e) => window.__hw.btnState(e), b);
    await slow(page, true);
    await b.click({ noWaitAfter: true });
    let seen = null; const t0 = Date.now();
    while (Date.now() - t0 < 4000) {
      const s = await ev(page, (e) => window.__hw.btnState(e), b).catch(() => null);
      if (!s) break;
      if (s.disabled || s.text !== s0.text || s.spinner > s0.spinner) { seen = s; break; }
      await sleep(60);
    }
    await sleep(3000); await slow(page, false);
    await check('CL-96', sl, seen ? 'Passed' : 'Failed', seen ? `Trong lúc chờ: nút ${seen.disabled ? 'bị khóa' : ''} ${seen.text !== s0.text ? `đổi chữ "${seen.text}"` : ''} ${seen.spinner > s0.spinner ? 'có vòng xoay' : ''}` : 'Không thấy nút bị khóa, đổi chữ hay vòng xoay trong 4 giây đầu (mạng chậm)', page);
  });
}
async function multiClickCheck(page, sl, btnRe) {
  await T('CL-112', sl, page, async () => {
    const b = await buttonH(page, btnRe);
    if (!b) return check('CL-112', sl, 'Chạy tay', 'Không tìm thấy nút gửi');
    const reqs = [];
    const onReq = (r) => { if (!['GET', 'HEAD', 'OPTIONS'].includes(r.method())) reqs.push(`${r.method()} ${new URL(r.url()).pathname}`); };
    await slow(page, true);
    page.on('request', onReq);
    await b.click({ noWaitAfter: true });
    await b.click({ force: true, noWaitAfter: true, timeout: 1500 }).catch(() => {});
    await b.click({ force: true, noWaitAfter: true, timeout: 1500 }).catch(() => {});
    await sleep(6000);
    page.off('request', onReq);
    await slow(page, false);
    await check('CL-112', sl, reqs.length === 1 ? 'Passed' : 'Failed', `Bấm nhanh 3 lần: ${reqs.length} request gửi form (${reqs.join(', ') || 'không có'})`, page);
  });
}
async function offlineCheck(page, ctx, sl, action) {
  await T('CL-105', sl, page, async () => {
    await ctx.setOffline(true);
    const o = await observe(page, action, 3500);
    await ctx.setOffline(false);
    const net = allText(o).some((t) => /kết nối|mạng|network|offline|thử lại sau|máy chủ|server/i.test(t));
    await check('CL-105', sl, net ? 'Passed' : (anyMsg(o) ? 'Chạy tay' : 'Failed'),
      `Mất kết nối, bấm gửi: thông báo ${msgText(o)}${!net && anyMsg(o) ? ' (có thông báo nhưng không nói về kết nối)' : ''}`, page);
  });
}
async function liveCheck(page, sl, o) {
  await T('CL-106', sl, page, async () => {
    if (!o.msgs.length) return skip('CL-106', sl, o.dialogs.length ? 'Thông báo là hộp thoại của trình duyệt (alert), không phải phần tử của trang' : 'Không có thông báo của trang để kiểm');
    const live = o.msgs.filter((m) => m.live);
    await check('CL-106', sl, live.length ? 'Passed' : 'Failed', `${live.length}/${o.msgs.length} thông báo nằm trong role="alert" / "status" / aria-live: ${o.texts.join(' | ').slice(0, 120)}`, page);
  });
}
async function aboveSubmit(page, sl, o, btnRe) {
  await T('CL-47', sl, page, async () => {
    if (!o.msgs.length) return skip('CL-47', sl, 'Không có thông báo lỗi của trang');
    const b = await buttonH(page, btnRe);
    if (!b) return check('CL-47', sl, 'Chạy tay', 'Không tìm thấy nút gửi');
    const r = await ev(page, (e) => window.__hw.rectOf(e), b);
    const below = o.msgs.filter((m) => m.bottom > r.top + 1);
    await check('CL-47', sl, below.length ? 'Failed' : 'Passed', below.length ? `Thông báo nằm dưới / ngang nút gửi: ${below.map((m) => m.t).join(' | ').slice(0, 120)}` : `Thông báo nằm trên nút gửi: ${o.texts.join(' | ').slice(0, 120)}`, page);
  });
}
async function namesField(page, sl, o, f, word) {
  await T('CL-55', sl, page, async () => {
    if (!anyMsg(o)) return skip('CL-55', sl, `Không có thông báo (dữ liệu sai cho ô ${word})`);
    const r = await ev(page, (e) => window.__hw.rectOf(e), f);
    const ok = allText(o).some((t) => t.toLowerCase().includes(word))
      || o.msgs.some((m) => m.top >= r.bottom - 2 && m.top - r.bottom < 60 && m.right > r.left && m.left < r.right);
    await check('CL-55', sl, ok ? 'Passed' : 'Failed', `Ô ${word}: thông báo ${msgText(o)}`, page);
  });
}
async function focusOnError(page, sl, f, word) {
  await T('CL-57', sl, page, async () => {
    const ok = await ev(page, (e) => document.activeElement === e, f);
    const a = await ev(page, () => window.__hw.active());
    await check('CL-57', sl, ok ? 'Passed' : 'Failed', `Sau khi báo lỗi, focus ở: ${a.body ? '(body)' : `"${a.text.slice(0, 25)}"`}; mong đợi ô ${word}`, page);
  });
}
async function highlightError(page, sl, errF, otherF, word) {
  await T('CL-58', sl, page, async () => {
    await ev(page, () => { if (document.activeElement) document.activeElement.blur(); });
    await away(page); await sleep(200);
    const a = await ev(page, (e) => window.__hw.sig(e), errF);
    const b = await ev(page, (e) => window.__hw.sig(e), otherF);
    await check('CL-58', sl, a !== b ? 'Passed' : 'Failed', a !== b ? `Ô ${word} khác các ô còn lại` : `Ô ${word} trông giống hệt các ô còn lại (viền, nền, bóng)`, page);
  });
}

// ---------------------------------------------------------------- A. Chưa đăng nhập
async function phaseLoggedOut(ctx, page) {
  console.log('\n=== A. Chưa đăng nhập: /login, /register, /profile ===');
  await go(page, '/login');
  if (await isLoggedIn(page)) { await logout(page); await go(page, '/login'); }

  // W-03
  await staticChecks(page, 'W-03', 'W-03', true);
  await layoutCheck(page, 'CL-32', 'W-03');
  X.navOut['W-03'] = await ev(page, () => window.__hw.navItems());
  const F3 = await formOf(page, 'W-03');
  await T('CL-42', 'W-03', page, async () => {
    const lab = F3.find((x) => x.key === 'email');
    const t = lab && lab.lab ? await ev(page, (e) => window.__hw.norm(e.textContent), lab.lab) : '(không tìm thấy)';
    await check('CL-42', 'W-03', /email/i.test(t) ? 'Passed' : 'Failed', `Nhãn ô thứ nhất: "${t}"`, page);
  });
  await T('CL-43', 'W-03', page, async () => {
    const res = [];
    for (const x of F3) res.push(`${x.label}: ${(await ev(page, (e) => window.__hw.hasStar(e), x.lab)) ? 'có *' : 'KHÔNG có *'}`);
    await check('CL-43', 'W-03', res.every((r) => /có \*$/.test(r) && !/KHÔNG/.test(r)) ? 'Passed' : 'Failed', res.join(' | '), page);
  });
  await T('CL-111', 'W-03', page, async () => eyeCheck(page, 'W-03', F3));
  await tabChecks(page, 'W-03', 'W-03');
  await go(page, '/login');
  await hoverLinks(page, 'W-03', [/^quên mật khẩu\??$/i, /^đăng ký ngay$/i]);
  await hoverButtons(page, 'W-03', [['page', RE.submitLogin]]);
  await linkCheck(page, 'W-03', '/login', 'Giỏ hàng (navbar)', (p) => navH(p, RE.cart), toCart);
  await linkCheck(page, 'W-03', '/login', 'Đăng nhập (navbar)', (p) => navH(p, /^đăng nhập$/i), exact('/login'));
  await linkCheck(page, 'W-03', '/login', 'Đăng ký (navbar)', (p) => navH(p, /^đăng ký$/i), exact('/register'));
  await linkCheck(page, 'W-03', '/login', 'Quên mật khẩu?', (p) => buttonH(p, /^quên mật khẩu\??$/i), toForgot);
  await linkCheck(page, 'W-03', '/login', 'Đăng ký ngay', (p) => buttonH(p, /^đăng ký ngay$/i), exact('/register'));
  await logoCheck(page, 'W-03', '/login');
  await T('CL-63', 'W-03', page, async () => {
    await go(page, '/login');
    const f = await fieldH(page, RE.password);
    await ev(page, (t) => navigator.clipboard.writeText(t), ACC.test.pw);
    await f.click(); await page.keyboard.press('Control+V'); await sleep(200);
    const v = await val(f);
    await check('CL-63', 'W-03', v === ACC.test.pw ? 'Passed' : 'Failed', `Dán "${ACC.test.pw}": ô nhận ${v.length} ký tự`, page);
  });
  await T('CL-45', 'W-03', page, async () => {
    await go(page, '/login');
    const e = await fillF(page, RE.loginEmail, 'abc');
    await fillF(page, RE.password, 'x');
    await clickBtn(page, RE.submitLogin); await sleep(800);
    const r = await ev(page, (el) => ({ valid: el.validity.valid, msg: el.validationMessage }), e);
    await check('CL-45', 'W-03', !r.valid && pathOf(page) === '/login' ? 'Passed' : 'Failed', r.valid ? 'Ô không báo lỗi định dạng HTML5 khi nhập "abc"' : `Bong bóng trình duyệt: "${r.msg}"`, page);
  });
  await T('CL-77', 'W-03', page, async () => {
    await go(page, '/login');
    const h0 = await ev(page, () => window.__hw.h1s());
    await clickBtn(page, /^đăng ký ngay$/i); await sleep(WAIT);
    await page.goBack(); await sleep(WAIT);
    const h1 = await ev(page, () => window.__hw.h1s()).catch(() => []);
    const form = !!(await buttonH(page, RE.submitLogin));
    const ok = pathOf(page) === '/login' && JSON.stringify(h0) === JSON.stringify(h1) && form;
    await check('CL-77', 'W-03', ok ? 'Passed' : 'Failed', `Back về ${pathOf(page)}; <h1> ${JSON.stringify(h1)}; form ${form ? 'có' : 'KHÔNG'}`, page);
  });

  // W-04
  await go(page, '/register');
  await staticChecks(page, 'W-04', 'W-04', true);
  await layoutCheck(page, 'CL-32', 'W-04');
  X.navOut['W-04'] = await ev(page, () => window.__hw.navItems());
  const F4 = await formOf(page, 'W-04');
  await T('CL-36', 'W-04', page, async () => {
    const need = ['name', 'email', 'password'].map((k) => F4.find((x) => x.key === k));
    await check('CL-36', 'W-04', need.every((x) => x && x.f) ? 'Passed' : 'Failed', need.map((x, i) => `${['Họ Tên', 'Email', 'Mật khẩu'][i]}: ${x && x.f ? 'có' : 'KHÔNG'}`).join(' | '), page);
  });
  await T('CL-37', 'W-04', page, async () => {
    const c = F4.find((x) => x.key === 'confirm');
    await check('CL-37', 'W-04', c && c.f ? 'Passed' : 'Failed', c ? `Có ô "${await ev(page, (e) => window.__hw.norm(e.textContent), c.lab)}"` : 'Không có ô Xác nhận mật khẩu / Nhập lại mật khẩu', page);
  });
  await T('CL-43', 'W-04', page, async () => {
    const res = [];
    for (const x of F4) res.push(`${x.label}: ${(await ev(page, (e) => window.__hw.hasStar(e), x.lab)) ? 'có *' : 'KHÔNG có *'}`);
    await check('CL-43', 'W-04', res.every((r) => !/KHÔNG/.test(r)) ? 'Passed' : 'Failed', res.join(' | '), page);
  });
  await T('CL-64', 'W-04', page, async () => {
    const t = (await ev(page, () => window.__hw.hintText())).join(' ');
    const need = [['8 ký tự', /8 ký tự/i], ['chữ hoa', /chữ hoa|in hoa/i], ['chữ thường', /chữ thường/i], ['chữ số', /số/i], ['ký tự đặc biệt', /ký tự đặc biệt/i]];
    const miss = need.filter(([, re]) => !re.test(t)).map(([n]) => n);
    await check('CL-64', 'W-04', t && !miss.length ? 'Passed' : 'Failed', `Hướng dẫn: "${t.slice(0, 120) || '(không có)'}"${miss.length ? `; thiếu: ${miss.join(', ')}` : ''}`, page);
  });
  await T('CL-111', 'W-04', page, async () => eyeCheck(page, 'W-04', F4));
  await tabChecks(page, 'W-04', 'W-04');
  await go(page, '/register');
  await hoverLinks(page, 'W-04', [/^đăng nhập$/i]);
  await hoverButtons(page, 'W-04', [['page', RE.submitRegister]]);
  await linkCheck(page, 'W-04', '/register', 'Đăng nhập (trong trang)', (p) => buttonH(p, /^đăng nhập$/i), exact('/login'));
  await logoCheck(page, 'W-04', '/register');

  // W-06 chưa đăng nhập
  await go(page, '/profile');
  const sl6 = 'W-06 (chưa đăng nhập)';
  await T('CL-78', sl6, page, async () => {
    if (pathOf(page) === '/login') return check('CL-78', sl6, 'Passed', 'Trang tự chuyển sang /login');
    const link = await ev(page, () => Array.from(document.querySelectorAll('a[href]')).some((a) => window.__hw.vis(a) && !window.__hw.inNav(a) && /login/i.test(a.getAttribute('href'))));
    const btn = await buttonH(page, /đăng nhập/i);
    await check('CL-78', sl6, link || btn ? 'Passed' : 'Failed', link || btn ? 'Có link / nút tới đăng nhập trong trang' : `Ở lại ${pathOf(page)}, không có link / nút tới /login`, page);
  });
  if (pathOf(page) === '/profile') {
    await staticChecks(page, 'W-06', sl6, false);
    X.navOut['W-06'] = await ev(page, () => window.__hw.navItems());
    await logoCheck(page, sl6, '/profile');
  } else {
    for (const c of ['CL-13', 'CL-14', 'CL-19', 'CL-23', 'CL-83']) await skip(c, sl6, 'Trang tự chuyển sang /login (CHD-11)');
  }
}

async function eyeCheck(page, sl, F) {
  const ps = F.filter((x) => (x.key === 'password' || x.key === 'confirm') && x.f);
  if (!ps.length) return check('CL-111', sl, 'Chạy tay', 'Không tìm thấy ô mật khẩu');
  const res = [];
  for (const x of ps) {
    const h = await page.evaluateHandle((e) => window.__hw.eyeNear(e), x.f);
    const eye = h.asElement();
    if (!eye) { res.push(`${x.label}: không có nút hiện / ẩn`); continue; }
    await x.f.fill(VALID_PW);
    const t0 = await x.f.getAttribute('type');
    await eye.click(); await sleep(200);
    const t1 = await x.f.getAttribute('type');
    await eye.click(); await sleep(200);
    const t2 = await x.f.getAttribute('type');
    res.push(`${x.label}: ${t0} > ${t1} > ${t2}${t0 === 'password' && t1 === 'text' && t2 === 'password' ? ' (đúng)' : ''}`);
  }
  await check('CL-111', sl, res.every((r) => /\(đúng\)$/.test(r)) ? 'Passed' : 'Failed', res.join(' | '), page);
}

// ---------------------------------------------------------------- B. Lỗi form khi chưa đăng nhập
async function phaseForms(ctx, page) {
  console.log('\n=== B. Thông báo lỗi và phản hồi của form (chưa đăng nhập) ===');
  const sl4 = 'W-04'; const sl3 = 'W-03';
  const weakOnly = (o) => o.texts.length > 0 && o.texts.every((t) => /quá yếu/i.test(t));
  // Thử một lần đăng ký với dữ liệu hợp lệ: Trang có chặn mật khẩu hợp lệ không?
  await fillRegister(page, { name: 'HW03 Test', email: newEmail('probe'), pw: VALID_PW });
  const o0 = await observe(page, () => clickBtn(page, RE.submitRegister));
  const BLOCK = o0.path === '/register' && weakOnly(o0);
  const BLOCK_WHY = `Trang Đăng ký từ chối mật khẩu hợp lệ theo UI-R03 ("${VALID_PW}") với thông báo "${o0.texts[0] || ''}", nên form không gửi đi được`;
  if (BLOCK) console.log(`  (${BLOCK_WHY})`);
  else if (o0.path === '/login') console.log('  (Lần thử đăng ký hợp lệ đã thành công; tạo thêm 1 tài khoản hw03.n1.probe)');

  await T('CL-38', sl4, page, async () => {
    await go(page, '/register');
    if (!(await fieldH(page, RE.confirm))) return skip('CL-38', sl4, 'Không có ô Xác nhận mật khẩu (CL-37)');
    await fillRegister(page, { name: 'HW03 Test', email: newEmail('mm'), pw: VALID_PW, confirm: 'Abcdef2!' });
    const o = await observe(page, () => clickBtn(page, RE.submitRegister));
    await check('CL-38', sl4, (anyMsg(o) || o.invalid.length) && o.path === '/register' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; ${o.invalid.join(' ')}; trang ${o.path}`, page);
  });
  await T('CL-39', sl4, page, async () => {
    let bad = 0; let blocked = 0;
    for (const v of ['abc', 'abc@', '@domain.com']) {
      await fillRegister(page, { name: 'HW03 Test', email: v, pw: VALID_PW });
      const o = await observe(page, () => clickBtn(page, RE.submitRegister));
      if (BLOCK && weakOnly(o) && !o.invalid.length) { blocked++; continue; }
      const ok = (anyMsg(o) || o.invalid.length) && o.path === '/register';
      if (!ok) { bad++; await check('CL-39', `${sl4} "${v}"`, 'Failed', `Không có thông báo hoặc rời trang (${o.path})`, page); }
      if (o.msgs.length && !weakOnly(o)) await namesField(page, `${sl4} "${v}"`, o, await fieldH(page, RE.email), 'email');
    }
    if (blocked) await skip('CL-39', sl4, `${blocked}/3 giá trị chỉ nhận thông báo mật khẩu yếu. ${BLOCK_WHY}; chưa kiểm được thông báo về email`);
    else if (!bad) await check('CL-39', sl4, 'Passed', 'Cả 3 giá trị đều bị báo lỗi, vẫn ở /register');
    if (blocked) await skip('CL-55', `${sl4} email`, 'Không có thông báo về email (mật khẩu bị chặn trước)');
  });
  await T('CL-40', sl4, page, async () => {
    await fillRegister(page, { name: 'HW03 Test', email: ACC.test.email, pw: VALID_PW });
    const o = await observe(page, () => clickBtn(page, RE.submitRegister));
    if (BLOCK && weakOnly(o)) return skip('CL-40', sl4, `${BLOCK_WHY}; chưa tới bước kiểm email trùng`);
    await check('CL-40', sl4, o.msgs.length && o.path === '/register' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; trang ${o.path}`, page);
    const ef = await fieldH(page, RE.email); const nf = await fieldH(page, RE.name);
    await aboveSubmit(page, `${sl4} email trùng`, o, RE.submitRegister);
    if (ef && o.msgs.length) await focusOnError(page, `${sl4} email trùng`, ef, 'Email'); else await skip('CL-57', sl4, 'Không có thông báo lỗi của trang');
    if (ef && nf && o.msgs.length) await highlightError(page, `${sl4} email trùng`, ef, nf, 'Email'); else await skip('CL-58', sl4, 'Không có thông báo lỗi của trang');
    await liveCheck(page, `${sl4} email trùng`, o);
  });
  await T('CL-41', sl4, page, async () => {
    const em = newEmail('weak');
    await fillRegister(page, { name: 'HW03 Test', email: em, pw: 'abcdefgh' });
    const o = await observe(page, () => clickBtn(page, RE.submitRegister));
    await check('CL-41', sl4, (anyMsg(o) || o.invalid.length) && o.path === '/register' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; ${o.invalid.join(' ')}; trang ${o.path}`, page);
    const pf = await fieldH(page, RE.password); const nf = await fieldH(page, RE.name);
    if (pf) await namesField(page, `${sl4} mật khẩu`, o, pf, 'mật khẩu');
    if (BLOCK && o.msgs.length && pf) {
      // Không tạo được lỗi email trùng: dùng lỗi mật khẩu yếu để kiểm vị trí, focus, làm nổi bật, đọc tự động
      await aboveSubmit(page, `${sl4} mật khẩu yếu`, o, RE.submitRegister);
      await focusOnError(page, `${sl4} mật khẩu yếu (thay email trùng)`, pf, 'Mật khẩu');
      if (nf) await highlightError(page, `${sl4} mật khẩu yếu (thay email trùng)`, pf, nf, 'Mật khẩu');
      await liveCheck(page, `${sl4} mật khẩu yếu`, o);
    }
    await T('CL-59', sl4, page, async () => {
      const n = await val(await fieldH(page, RE.name)); const e = await val(await fieldH(page, RE.email));
      await check('CL-59', sl4, n === 'HW03 Test' && e === em ? 'Passed' : 'Failed', `Sau khi báo lỗi: Họ Tên "${n}", Email "${e}"`, page);
    });
  });
  await T('CL-60', sl4, page, async () => {
    await fillRegister(page, { name: '   ', email: newEmail('space'), pw: VALID_PW });
    const o = await observe(page, () => clickBtn(page, RE.submitRegister));
    if (BLOCK && weakOnly(o)) return skip('CL-60', sl4, `${BLOCK_WHY}; chưa tới bước kiểm Họ Tên`);
    await check('CL-60', sl4, (anyMsg(o) || o.invalid.length) && o.path === '/register' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; ${o.invalid.join(' ')}; trang ${o.path}`, page);
  });
  await T('CL-61', sl4, page, async () => {
    await fillRegister(page, { name: 'HW03 Test', email: ACC.test.email, pw: VALID_PW });
    const f = await fieldH(page, RE.password);
    const o = await observe(page, async () => { await f.focus(); await page.keyboard.press('Enter'); });
    const resp = anyMsg(o) || o.invalid.length || o.path !== '/register';
    await check('CL-61', sl4, resp ? 'Passed' : (o.reqs.length ? 'Chạy tay' : 'Failed'), `Enter trong ô Mật khẩu: ${resp ? `phản hồi ${msgText(o)}` : `không thấy phản hồi (${o.reqs.length} request)`}`, page);
  });
  if (BLOCK) {
    for (const c of ['CL-96', 'CL-105', 'CL-112']) await skip(c, sl4, `${BLOCK_WHY}; không có lần gửi nào để kiểm`);
    await skip('CL-65', sl4, `${BLOCK_WHY}; không đăng ký thành công được`);
    await skip('CL-104', sl4, `${BLOCK_WHY}; không đăng ký thành công được`);
  } else {
    await fillRegister(page, { name: 'HW03 Test', email: ACC.test.email, pw: VALID_PW });
    await waitingCheck(page, sl4, RE.submitRegister);
    await fillRegister(page, { name: 'HW03 Test', email: newEmail('offline'), pw: VALID_PW });
    await offlineCheck(page, ctx, sl4, () => clickBtn(page, RE.submitRegister));
    await fillRegister(page, { name: 'HW03 Multi', email: newEmail('multi'), pw: VALID_PW });
    await multiClickCheck(page, sl4, RE.submitRegister);
    await T('CL-65', sl4, page, async () => {
      await fillRegister(page, { name: 'HW03 New', email: newEmail('ok'), pw: VALID_PW });
      const o = await observe(page, () => clickBtn(page, RE.submitRegister), 4500);
      const form = !!(await buttonH(page, RE.submitLogin));
      await check('CL-65', sl4, o.path === '/login' && form ? 'Passed' : 'Failed', `Sau khi đăng ký: trang ${o.path}, form đăng nhập ${form ? 'có' : 'KHÔNG'}`, page);
      await check('CL-104', sl4, hasOk(o) ? 'Passed' : 'Failed', `Thông báo bắt được: ${msgText(o)}`, page);
    });
  }

  // W-03: một lần đăng nhập sai dùng cho CL-103, 47, 59, 106 (chỉ 1 lần để không chạm ngưỡng khóa)
  await T('CL-103', sl3, page, async () => {
    await go(page, '/login');
    await fillF(page, RE.loginEmail, ACC.test.email);
    await fillF(page, RE.password, WRONG_PW);
    const o = await observe(page, () => clickBtn(page, RE.submitLogin));
    await check('CL-103', sl3, anyMsg(o) && o.path === '/login' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; trang ${o.path}`, page);
    await aboveSubmit(page, sl3, o, RE.submitLogin);
    const e = await val(await fieldH(page, RE.loginEmail));
    await check('CL-59', sl3, e === ACC.test.email ? 'Passed' : 'Failed', `Sau khi báo lỗi: ô thứ nhất "${e}"`, page);
    await check('CL-58', sl3, 'Chạy tay', 'Đăng nhập sai không xác định ô bị lỗi; xem tay');
    await liveCheck(page, sl3, o);
  });
  await T('CL-61', sl3, page, async () => {
    await go(page, '/login');
    await fillF(page, RE.loginEmail, ACC.test.email);
    const f = await fillF(page, RE.password, ACC.test.pw);
    const o = await observe(page, async () => { await f.focus(); await page.keyboard.press('Enter'); });
    const resp = o.path !== '/login' || (await isLoggedIn(page)) || anyMsg(o);
    await check('CL-61', sl3, resp ? 'Passed' : 'Failed', `Enter trong ô Mật khẩu: ${resp ? `có phản hồi (trang ${o.path})` : 'không thấy phản hồi'}`, page);
    await logout(page);
  });
  await go(page, '/login');
  await fillF(page, RE.loginEmail, ACC.test.email);
  await fillF(page, RE.password, ACC.test.pw);
  await waitingCheck(page, sl3, RE.submitLogin);
  if (await isLoggedIn(page)) await logout(page);
  await go(page, '/login');
  await fillF(page, RE.loginEmail, ACC.test.email);
  await fillF(page, RE.password, ACC.test.pw);
  await offlineCheck(page, ctx, sl3, () => clickBtn(page, RE.submitLogin));
  await go(page, '/login');
  if (await isLoggedIn(page)) await logout(page);
  await go(page, '/login');
  await fillF(page, RE.loginEmail, ACC.test.email);
  await fillF(page, RE.password, ACC.test.pw);
  await multiClickCheck(page, sl3, RE.submitLogin);
  await sleep(WAIT);
  if (await isLoggedIn(page)) await logout(page);
}

// ---------------------------------------------------------------- C. Đã đăng nhập test@eshop.com
async function phaseLoggedIn(ctx, page) {
  console.log('\n=== C. Đã đăng nhập test@eshop.com ===');
  const sl6 = 'W-06 (đăng nhập)';
  await T('CL-80', 'W-03', page, async () => {
    const ok = await login(page, ACC.test);
    const g = await navH(page, RE.greeting); const lo = await navH(page, RE.logout);
    await check('CL-80', 'W-03', ok && g && lo ? 'Passed' : 'Failed', `Sau khi đăng nhập: lời chào ${g ? 'có' : 'KHÔNG'}, nút đăng xuất ${lo ? 'có' : 'KHÔNG'}`, page);
  });
  if (!(await isLoggedIn(page))) throw new Error('Không đăng nhập được test@eshop.com; dừng nhóm C');

  // Trạng thái W-03, W-04 khi đã đăng nhập (CL-79)
  for (const [scr, p] of [['W-03', '/login'], ['W-04', '/register']]) {
    await go(page, p);
    const stay = pathOf(page) === p;
    const form = !!(await buttonH(page, SUBMIT[scr]));
    await check('CL-79', `${scr} (đăng nhập)`, !stay ? 'Passed' : (form ? 'Failed' : 'Chạy tay'),
      !stay ? `Tự chuyển sang ${pathOf(page)}` : (form ? 'Vẫn hiện form như chưa đăng nhập' : 'Ở lại trang nhưng không thấy form; xem có báo đã đăng nhập không'), page);
    if (stay) X.navIn[scr] = await ev(page, () => window.__hw.navItems());
  }
  await go(page, '/profile');
  X.navIn['W-06'] = await ev(page, () => window.__hw.navItems());
  await T('CL-70', sl6, page, async () => {
    const b = await navH(page, RE.logout);
    const t = b ? await ev(page, (e) => window.__hw.norm(e.textContent), b) : '(không thấy)';
    await check('CL-70', sl6, t === 'Đăng xuất' ? 'Passed' : 'Failed', `Chữ trên nút: "${t}"`, page);
  });
  await T('CL-76', sl6, page, async () => {
    const g = await navH(page, RE.greeting);
    if (!g) return check('CL-76', sl6, 'Chạy tay', 'Không tìm thấy lời chào');
    const r = await ev(page, (e) => ({ name: window.__hw.accName(e), title: e.getAttribute('title') || '', tag: e.tagName, href: e.getAttribute('href') }), g);
    const ok = /hồ sơ|tài khoản|profile|account/i.test(`${r.name} ${r.title}`);
    await check('CL-76', sl6, ok ? 'Passed' : 'Failed', `<${r.tag.toLowerCase()}> href="${r.href}", tên "${r.name}", title "${r.title}"`, page);
  });
  await linkCheck(page, sl6, '/', 'Chào, <Họ Tên>', (p) => navH(p, RE.greeting), exact('/profile'));
  await T('CL-77', sl6, page, async () => {
    await go(page, '/');
    const h0 = await ev(page, () => window.__hw.h1s());
    const g = await navH(page, RE.greeting); await g.click(); await sleep(WAIT);
    await page.goBack(); await sleep(WAIT);
    const h1 = await ev(page, () => window.__hw.h1s()).catch(() => []);
    const ok = pathOf(page) === '/' && JSON.stringify(h0) === JSON.stringify(h1);
    await check('CL-77', sl6, ok ? 'Passed' : 'Failed', `Back về ${pathOf(page)}; <h1> ${JSON.stringify(h1)}`, page);
  });

  // Giỏ hàng (CL-68, CL-69): sinh viên tự chuẩn bị trong cửa sổ này
  for (const [code, dk, prompt] of [['CL-68', 'ĐK-04', '2 sản phẩm KHÁC NHAU, mỗi sản phẩm số lượng 1'], ['CL-69', 'ĐK-05', 'ĐÚNG 1 sản phẩm, số lượng 2 (xóa giỏ cũ trước)']]) {
    if (DRY) {
      const scs = code === 'CL-69' ? ['W-06 (đăng nhập)'] : ['W-06 (đăng nhập)', 'W-04 (đăng nhập)', 'W-03 (đăng nhập)'];
      for (const sc of scs) await skip(code, sc, `Chạy thử: bỏ qua bước chuẩn bị giỏ hàng (${dk})`);
      continue;
    }
    await page.bringToFront();
    await ask(`\n>>> ${code} (${dk}): Trong cửa sổ Chrome này, đang đăng nhập test@eshop.com, hãy chuẩn bị giỏ hàng có ${prompt}. Xong bấm Enter... `);
    const screens = code === 'CL-69' ? [['W-06', '/profile']] : [['W-06', '/profile'], ['W-04', '/register'], ['W-03', '/login']];
    for (const [scr, p] of screens) {
      const sl = `${scr} (đăng nhập)`;
      await T(code, sl, page, async () => {
        await go(page, p);
        if (pathOf(page) !== p) return skip(code, sl, 'Trang tự chuyển đi khi đã đăng nhập (CHD-11)');
        const c = await navH(page, RE.cart);
        const t = c ? await ev(page, (e) => window.__hw.norm(e.textContent), c) : '';
        const num = (t.replace(/giỏ hàng/i, '').match(/\d+/) || [''])[0];
        await check(code, sl, num === '2' ? 'Passed' : 'Failed', `Link giỏ hàng: "${t}"; badge "${num || '(không có)'}"`, page);
      });
    }
  }

  // W-06: kiểm tĩnh, Tab, bảng lịch sử
  await go(page, '/profile');
  await staticChecks(page, 'W-06', sl6, true);
  await layoutCheck(page, 'CL-32', sl6);
  await tabChecks(page, 'W-06', sl6, { markEmail: true, hasOrders: true });
  await go(page, '/profile');
  await logoCheck(page, sl6, '/profile');
  await go(page, '/profile');
  await hoverLinks(page, sl6, []);
  await hoverButtons(page, sl6, [['page', RE.submitProfile], ['page', /^hủy đơn$/i], ['nav', RE.logout]]);
  let shippingClickable = false;
  await T('CL-18', sl6, page, async () => {
    const H = await ev(page, () => window.__hw.history());
    if (!H) {
      for (const c of ['CL-18', 'CL-10', 'CL-11', 'CL-12', 'CL-24', 'CL-85', 'CL-86', 'CL-87']) await check(c, sl6, 'Chạy tay', 'Không tìm thấy bảng có cột "Tổng tiền"');
      return;
    }
    const ix = (re) => H.hdr.findIndex((h) => re.test(h));
    const iId = ix(/^mã/i); const iDate = ix(/ngày/i); const iTot = ix(/tổng tiền/i); const iSt = ix(/trạng thái/i);
    const cols = [iId, iDate, iTot, iSt];
    const emptyRows = H.rows.filter((r) => cols.some((i) => i < 0 || !r.cells[i])).length;
    await check('CL-18', sl6, cols.every((i) => i >= 0) && H.rows.length && !emptyRows ? 'Passed' : 'Failed', `Tiêu đề cột: ${H.hdr.join(', ')}; ${H.rows.length} đơn; ${emptyRows} dòng thiếu thông tin`, page);
    const tots = H.rows.map((r) => r.cells[iTot] || '');
    await check('CL-10', sl6, tots.length && tots.every((t) => t.includes('₫')) ? 'Passed' : 'Failed', `Tổng tiền: ${tots.join(' | ')}`, page);
    const amt = (t) => t.replace(/[^\d.,]/g, '');
    await check('CL-11', sl6, tots.length && tots.every((t) => /^\d{1,3}(,\d{3})*$/.test(amt(t))) ? 'Passed' : 'Failed', `Phần số: ${tots.map(amt).join(' | ')}`, page);
    await check('CL-12', sl6, tots.length && tots.every((t) => /\d[  ]₫$/.test(t)) ? 'Passed' : 'Failed', `Tổng tiền: ${tots.join(' | ')}`, page);
    const dates = H.rows.map((r) => r.cells[iDate] || '');
    const dv = dates.map((d) => { const m = d.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/); if (!m) return 'x'; const a = +m[1]; const b = +m[2];
      if (SEED_DAYS.includes(a) && !SEED_DAYS.includes(b)) return 'ok'; if (SEED_DAYS.includes(b) && !SEED_DAYS.includes(a)) return 'bad'; return 'x'; });
    await check('CL-24', sl6, dv.includes('bad') ? 'Failed' : (dv.every((d) => d === 'ok') ? 'Passed' : 'Chạy tay'),
      `Ngày đặt: ${dates.join(' | ')} (đơn seed mang ngày ${SEED_DAYS.join(' hoặc ')})`, page);
    NOTES.statuses = H.rows.map((r) => r.cells[iSt]);
    NOTES.colors = H.rows.map((r) => `${r.cells[iSt]}: ${r.style}`);
    const row = (k) => H.rows.find((r) => r.cells[iSt] === STATUS_TEXT[k]);
    const can = (r) => !!(r && r.cancel && r.cancel.visible && !r.cancel.disabled);
    const desc = (k) => { const r = row(k); return `${STATUS_TEXT[k]}: ${!r ? 'không có dòng' : (r.cancel ? (r.cancel.disabled ? 'nút bị làm mờ' : 'có nút bấm được') : 'không có nút')}`; };
    const need = (ks) => ks.every((k) => row(k));
    if (!need(['pending', 'confirmed'])) await skip('CL-85', sl6, `Thiếu đơn: ${desc('pending')}; ${desc('confirmed')}`);
    else await check('CL-85', sl6, can(row('pending')) && can(row('confirmed')) ? 'Passed' : 'Failed', `${desc('pending')}; ${desc('confirmed')}`, page);
    if (!need(['delivered', 'canceled'])) await skip('CL-86', sl6, `Thiếu đơn: ${desc('delivered')}; ${desc('canceled')}`);
    else await check('CL-86', sl6, !can(row('delivered')) && !can(row('canceled')) ? 'Passed' : 'Failed', `${desc('delivered')}; ${desc('canceled')}`, page);
    if (!need(['shipping'])) await skip('CL-87', sl6, 'Không có đơn Đang giao');
    else { shippingClickable = can(row('shipping')); await check('CL-87', sl6, !shippingClickable ? 'Passed' : 'Failed', desc('shipping'), page); }
  });

  // W-06: các ô của form
  await go(page, '/profile');
  const name0 = await val(await fieldH(page, RE.name));
  await T('CL-48', sl6, page, async () => {
    const res = [];
    for (const [n, re] of [['Họ Tên', RE.name], ['Số điện thoại', RE.phone], ['Địa chỉ giao hàng', RE.address]]) {
      const f = await fieldH(page, re);
      if (!f) { res.push(`${n}: không tìm thấy`); continue; }
      await f.click(); await page.keyboard.press('End'); await page.keyboard.type('x');
      res.push(`${n}: ${(await val(f)).endsWith('x') ? 'gõ được' : 'KHÔNG gõ được'}`);
    }
    await check('CL-48', sl6, res.every((r) => /gõ được$/.test(r) && !/KHÔNG/.test(r)) ? 'Passed' : 'Failed', res.join(' | '), page);
    await go(page, '/profile');
  });
  await T('CL-49', sl6, page, async () => {
    const f = await fieldH(page, RE.email);
    const v0 = await val(f);
    await f.click({ force: true, timeout: 2000 }).catch(() => {});
    await page.keyboard.type('x');
    const v1 = await val(f);
    await check('CL-49', sl6, v0 === v1 ? 'Passed' : 'Failed', `Ô Email trước "${v0}", sau khi gõ "${v1}"`, page);
    await go(page, '/profile');
  });
  await T('CL-51', sl6, page, async () => {
    const hit = await ev(page, () => Array.from(document.querySelectorAll('label, option, select, input, textarea')).filter((e) => window.__hw.vis(e) && !window.__hw.inNav(e))
      .map((e) => window.__hw.norm(e.textContent || e.getAttribute('placeholder') || e.getAttribute('name') || '')).filter((t) => /vai trò|\brole\b|quyền|admin/i.test(t)));
    await check('CL-51', sl6, hit.length ? 'Failed' : 'Passed', hit.length ? `Có phần tử liên quan vai trò: ${hit.join(', ')}` : 'Không có ô / lựa chọn nào về vai trò', page);
  });
  await T('CL-53', sl6, page, async () => {
    const e = await fieldH(page, RE.email); const n = await fieldH(page, RE.name);
    const a = await ev(page, (el) => getComputedStyle(el).backgroundColor, e);
    const b = await ev(page, (el) => getComputedStyle(el).backgroundColor, n);
    await check('CL-53', sl6, a !== b ? 'Passed' : 'Failed', `Nền ô Email ${a}; nền ô Họ Tên ${b}`, page);
  });

  // W-06: lỗi số điện thoại (CL-50, 47, 55, 57, 58, 59, 106)
  await T('CL-50', sl6, page, async () => {
    await go(page, '/profile');
    const nf = await fillF(page, RE.name, 'HW03 Tam');
    const addr0 = await val(await fieldH(page, RE.address));
    const pf = await fillF(page, RE.phone, '123');
    const o = await observe(page, () => clickBtn(page, RE.submitProfile));
    await check('CL-50', sl6, (anyMsg(o) || o.invalid.length) && o.path === '/profile' ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}; ${o.invalid.join(' ')}`, page);
    await aboveSubmit(page, sl6, o, RE.submitProfile);
    await namesField(page, sl6, o, pf, 'số điện thoại');
    if (anyMsg(o)) await focusOnError(page, sl6, pf, 'Số điện thoại'); else await skip('CL-57', sl6, 'Không có thông báo lỗi');
    if (anyMsg(o)) await highlightError(page, sl6, pf, nf, 'Số điện thoại'); else await skip('CL-58', sl6, 'Không có thông báo lỗi');
    const n1 = await val(nf); const a1 = await val(await fieldH(page, RE.address));
    await check('CL-59', sl6, n1 === 'HW03 Tam' && a1 === addr0 ? 'Passed' : 'Failed', `Sau khi báo lỗi: Họ Tên "${n1}", Địa chỉ ${a1 === addr0 ? 'giữ nguyên' : `đổi thành "${a1}"`}`, page);
    await liveCheck(page, sl6, o);
  });
  await T('CL-61', sl6, page, async () => {
    await go(page, '/profile');
    await fillF(page, RE.name, name0);
    const f = await fieldH(page, RE.name);
    const o = await observe(page, async () => { await f.focus(); await page.keyboard.press('Enter'); });
    const resp = anyMsg(o) || o.invalid.length || o.path !== '/profile';
    await check('CL-61', sl6, resp ? 'Passed' : (o.reqs.length ? 'Chạy tay' : 'Failed'), `Enter trong ô Họ Tên: ${resp ? `phản hồi ${msgText(o)}` : `không thấy phản hồi (${o.reqs.length} request)`}`, page);
  });
  await T('CL-110', sl6, page, async () => {
    await go(page, '/profile');
    await fillF(page, RE.name, name0);
    await fillF(page, RE.phone, ' 0912345678 ');
    const o = await observe(page, () => clickBtn(page, RE.submitProfile));
    const err = hasErr(o);
    await check('CL-110', sl6, err ? 'Failed' : 'Passed', `Số " 0912345678 ": ${msgText(o)} ${o.invalid.join(' ')}`, page);
  });
  await T('CL-101', sl6, page, async () => {
    await go(page, '/profile');
    await fillF(page, RE.name, name0);
    await fillF(page, RE.phone, '0912345678');
    const o = await observe(page, () => clickBtn(page, RE.submitProfile));
    const ok = hasOk(o) && !hasErr(o);
    await check('CL-101', sl6, ok ? 'Passed' : 'Failed', `Cập nhật với Số điện thoại 0912345678: thông báo ${msgText(o)}`, page);
    await liveCheck(page, `${sl6} (thành công)`, o);
  });
  await T('CL-52', sl6, page, async () => {
    await go(page, '/profile');
    await fillF(page, RE.name, name0);
    await fillF(page, RE.phone, '0912345678');
    await fillF(page, RE.address, '227 Nguyễn Văn Cừ');
    const o = await observe(page, () => clickBtn(page, RE.submitProfile));
    await go(page, '/profile');
    const v = { e: await val(await fieldH(page, RE.email)), n: await val(await fieldH(page, RE.name)), p: await val(await fieldH(page, RE.phone)), a: await val(await fieldH(page, RE.address)) };
    const ok = v.e === ACC.test.email && v.n === name0 && v.p === '0912345678' && v.a === '227 Nguyễn Văn Cừ';
    await check('CL-52', sl6, ok ? 'Passed' : 'Failed', `Sau khi tải lại: Email "${v.e}", Họ Tên "${v.n}", SĐT "${v.p}", Địa chỉ "${v.a}"; lúc bấm Cập nhật: ${msgText(o)}`, page);
  });
  await T('CL-102', sl6, page, async () => {
    const greet = async () => { let t = ''; for (let i = 0; i < 16; i++) { const g = await navH(page, RE.greeting); t = g ? await ev(page, (e) => window.__hw.norm(e.textContent), g) : ''; if (/Test User Moi/.test(t)) break; await sleep(250); } return t; };
    await go(page, '/profile');
    await fillF(page, RE.name, 'Test User Moi');
    const o = await observe(page, () => clickBtn(page, RE.submitProfile));
    const t = await greet();
    let extra = '';
    if (!/Test User Moi/.test(t) && hasErr(o)) {
      // Thử thêm để biết lời chào có tự cập nhật khi lưu thành công không (số điện thoại app chấp nhận)
      await go(page, '/profile');
      await fillF(page, RE.name, 'Test User Moi');
      await fillF(page, RE.phone, APP_OK_PHONE);
      const o2 = await observe(page, () => clickBtn(page, RE.submitProfile));
      extra = `. Thử thêm với SĐT ${APP_OK_PHONE} (app chấp nhận): ${msgText(o2)}; lời chào "${await greet()}"`;
    }
    await check('CL-102', sl6, /Test User Moi/.test(t) ? 'Passed' : 'Failed', `Lời chào sau khi cập nhật (không tải lại): "${t}"; lúc bấm Cập nhật: ${msgText(o)}${extra}`, page);
    await go(page, '/profile');
    await fillF(page, RE.name, name0);
    await fillF(page, RE.phone, APP_OK_PHONE);
    await clickBtn(page, RE.submitProfile); await sleep(WAIT);
    console.log(`  (Đã trả Họ Tên về "${name0}")`);
  });
  // Các mục chỉ cần một lần gửi thành công: dùng số điện thoại mà app chấp nhận (xem APP_OK_PHONE)
  const okForm = async () => { await go(page, '/profile'); await fillF(page, RE.phone, APP_OK_PHONE); };
  await okForm();
  await waitingCheck(page, `${sl6} (SĐT ${APP_OK_PHONE})`, RE.submitProfile);
  await okForm();
  await multiClickCheck(page, `${sl6} (SĐT ${APP_OK_PHONE})`, RE.submitProfile);
  await okForm();
  await offlineCheck(page, ctx, `${sl6} (SĐT ${APP_OK_PHONE})`, () => clickBtn(page, RE.submitProfile));

  // CL-94, CL-95: tải lịch sử đơn khi mạng chậm
  await T('CL-94', sl6, page, async () => {
    await go(page, '/profile');
    await slow(page, true);
    await page.reload({ waitUntil: 'commit' });
    let loadingSeen = false; let emptySeen = false; let table = false; const t0 = Date.now();
    while (Date.now() - t0 < 60000) {
      const s = await ev(page, () => (window.__hw ? window.__hw.loading() : null)).catch(() => null);
      if (s) { if (s.table) { table = true; break; } if (s.any) loadingSeen = true; if (s.empty) emptySeen = true; }
      await sleep(50);
    }
    await slow(page, false);
    if (!table) { await check('CL-94', sl6, 'Chạy tay', 'Bảng lịch sử đơn không hiện trong 60 giây'); return check('CL-95', sl6, 'Chạy tay', 'Bảng lịch sử đơn không hiện trong 60 giây'); }
    await check('CL-94', sl6, loadingSeen ? 'Passed' : 'Failed', loadingSeen ? 'Có dấu hiệu đang tải trước khi bảng hiện' : 'Không thấy dấu hiệu đang tải trước khi bảng hiện (mạng chậm)', page);
    await check('CL-95', sl6, emptySeen ? 'Failed' : 'Passed', emptySeen ? 'Có lúc hiện "Bạn chưa có đơn hàng nào." trước khi bảng hiện' : 'Không hiện nhầm thông báo chưa có đơn', page);
  });

  // Hủy đơn: CL-97, 98, 99, 100, rồi CL-88 (dùng đơn confirmed và 2 tab)
  await cancelFlows(ctx, page, sl6, shippingClickable);

  // CL-81, CL-82: đăng xuất ở trang hồ sơ
  await T('CL-81', sl6, page, async () => {
    await go(page, '/profile');
    await logout(page); await sleep(WAIT);
    const r = await ev(page, (em) => ({ name: !!window.__hw.field(/^họ (và )?tên/i), table: !!window.__hw.history(),
      email: Array.from(document.body.querySelectorAll('*')).some((e) => window.__hw.vis(e) && !window.__hw.inNav(e) && window.__hw.ownText(e).includes(em))
        || Array.from(document.querySelectorAll('input')).some((i) => i.value === em && window.__hw.vis(i)) }), ACC.test.email);
    await check('CL-81', sl6, !r.name && !r.table && !r.email ? 'Passed' : 'Failed', `Sau khi đăng xuất (trang ${pathOf(page)}): ô Họ Tên ${r.name ? 'CÒN' : 'không'}, bảng đơn ${r.table ? 'CÒN' : 'không'}, email ${r.email ? 'CÒN' : 'không'}`, page);
    const items = (await ev(page, () => window.__hw.navItems())).map((n) => n.text);
    const ok = items.some((t) => /^đăng nhập$/i.test(t)) && items.some((t) => /^đăng ký$/i.test(t)) && !items.some((t) => RE.greeting.test(t));
    await check('CL-82', sl6, ok ? 'Passed' : 'Failed', `Navbar sau khi đăng xuất: ${items.join(', ')}`, page);
  });

  // CL-108: xóa dữ liệu site (không tải lại), rồi bấm Cập nhật
  await T('CL-108', sl6, page, async () => {
    await login(page, ACC.test);
    await go(page, '/profile');
    const s = await getCdp(page);
    await fillF(page, RE.phone, APP_OK_PHONE);
    await s.send('Storage.clearDataForOrigin', { origin: ORIGIN, storageTypes: 'all' });
    const o = await observe(page, () => clickBtn(page, RE.submitProfile), 3500);
    const relog = o.path === '/login' || allText(o).some((t) => /đăng nhập|phiên|hết hạn|session|token|unauthori|401/i.test(t));
    const res = relog ? 'Passed' : (hasOk(o) ? 'Failed' : (anyMsg(o) ? 'Chạy tay' : 'Failed'));
    await check('CL-108', `${sl6} (SĐT ${APP_OK_PHONE})`, res, `Sau Clear site data, bấm Cập nhật: trang ${o.path}; thông báo ${msgText(o)}`, page);
  });

}

async function cancelFlows(ctx, page, sl6, shippingClickable) {
  const idOf = async (p, k) => {
    const H = await ev(p, () => window.__hw.history());
    if (!H) return null;
    const iSt = H.hdr.findIndex((h) => /trạng thái/i.test(h)); const iId = H.hdr.findIndex((h) => /^mã/i.test(h));
    const r = H.rows.find((x) => x.cells[iSt] === STATUS_TEXT[k]);
    return r ? r.cells[iId] : null;
  };
  const statusOf = async (p, id) => {
    const H = await ev(p, () => window.__hw.history());
    if (!H) return null;
    const iSt = H.hdr.findIndex((h) => /trạng thái/i.test(h)); const iId = H.hdr.findIndex((h) => /^mã/i.test(h));
    const r = H.rows.find((x) => x.cells[iId] === id);
    return r ? r.cells[iSt] : null;
  };
  const cancelBtn = async (p, id) => { const h = await p.evaluateHandle((x) => window.__hw.rowCancelBtn(x), id); return h.asElement(); };
  const modalBtn = (p, re) => handle(p, 'modalBtn', re);
  const confirmYes = async (p) => { await sleep(400); const y = await modalBtn(p, RE.yes); if (y) await y.click(); };

  await go(page, '/profile');
  const idP = await idOf(page, 'pending');
  let dlg = null; let firstObs = null;
  await T('CL-97', sl6, page, async () => {
    if (!idP) { for (const c of ['CL-97', 'CL-98', 'CL-99', 'CL-100']) await skip(c, sl6, 'Không có đơn Chờ xác nhận'); return; }
    dialogMode = 'dismiss';
    const nd = DIALOGS.length;
    const b = await cancelBtn(page, idP);
    firstObs = await observe(page, () => b.click(), 2500);
    const native = DIALOGS.slice(nd).find((d) => d.type === 'confirm');
    const m = await ev(page, () => window.__hw.modal());
    dlg = native ? 'native' : (m ? 'modal' : null);
    const st = await statusOf(page, idP);
    await check('CL-97', sl6, dlg ? 'Passed' : 'Failed', dlg ? `Có hộp xác nhận ${native ? `của trình duyệt: "${native.msg}"` : `của trang: "${m.text}"`}` : `Bấm "Hủy đơn" đơn ${idP}: không có hộp xác nhận; trạng thái sau khi bấm "${st}"`, page);
  });
  dialogMode = 'accept';
  if (!idP) return;
  if (dlg) {
    await T('CL-98', sl6, page, async () => {
      if (dlg === 'modal') { const no = await modalBtn(page, RE.no); if (no) await no.click(); else await page.keyboard.press('Escape'); await sleep(WAIT); }
      const s1 = await statusOf(page, idP); const b1 = !!(await cancelBtn(page, idP));
      await go(page, '/profile');
      const s2 = await statusOf(page, idP); const b2 = !!(await cancelBtn(page, idP));
      const ok = s1 === STATUS_TEXT.pending && s2 === STATUS_TEXT.pending && b1 && b2;
      await check('CL-98', sl6, ok ? 'Passed' : 'Failed', `Chọn không: trạng thái "${s1}" (sau tải lại "${s2}"), nút Hủy đơn ${b2 ? 'còn' : 'MẤT'}`, page);
    });
    await T('CL-99', sl6, page, async () => {
      const b = await cancelBtn(page, idP);
      const o = await observe(page, async () => { await b.click(); if (dlg === 'modal') await confirmYes(page); }, 3000);
      const st = await statusOf(page, idP);
      await check('CL-99', sl6, st === STATUS_TEXT.canceled ? 'Passed' : 'Failed', `Sau khi xác nhận hủy (không tải lại): trạng thái "${st}"`, page);
      await check('CL-100', sl6, anyMsg(o) ? 'Passed' : 'Failed', `Thông báo: ${msgText(o)}`, page);
    });
  } else {
    await skip('CL-98', sl6, 'Không có hộp xác nhận (CL-97 Failed)');
    const st = await statusOf(page, idP);
    await check('CL-99', sl6, st === STATUS_TEXT.canceled ? 'Passed' : 'Failed', `Lần bấm ở CL-97 đã hủy luôn; trạng thái (không tải lại): "${st}"`, page);
    await check('CL-100', sl6, firstObs && anyMsg(firstObs) ? 'Passed' : 'Failed', `Thông báo: ${firstObs ? msgText(firstObs) : '(không có)'}`, page);
  }

  // CL-88 tình huống 1: hủy cùng một đơn confirmed ở 2 tab
  await T('CL-88', `${sl6} 2 tab`, page, async () => {
    await go(page, '/profile');
    const idC = await idOf(page, 'confirmed');
    if (!idC) return skip('CL-88', `${sl6} 2 tab`, 'Không có đơn Đã xác nhận');
    const pageB = setupPage(await ctx.newPage());
    await go(pageB, '/profile');
    const bB = await cancelBtn(pageB, idC);
    await bB.click(); await confirmYes(pageB); await sleep(WAIT);
    const sB = await statusOf(pageB, idC);
    await pageB.close();
    await page.bringToFront();
    const bA = await cancelBtn(page, idC);
    if (!bA) return check('CL-88', `${sl6} 2 tab`, 'Chạy tay', 'Tab A không còn nút Hủy đơn (trang tự cập nhật)');
    const o = await observe(page, async () => { await bA.click(); await confirmYes(page); }, 3000);
    await check('CL-88', `${sl6} 2 tab`, anyMsg(o) ? 'Passed' : 'Failed', `Tab B đã hủy (trạng thái "${sB}"); tab A bấm Hủy đơn: thông báo ${msgText(o)}`, page);
  });
  // CL-88 tình huống 2: chỉ khi đơn shipping có nút bấm được (CHD-16)
  if (shippingClickable) {
    await T('CL-88', `${sl6} đơn Đang giao`, page, async () => {
      await go(page, '/profile');
      const idS = await idOf(page, 'shipping');
      const b = idS ? await cancelBtn(page, idS) : null;
      if (!b) return skip('CL-88', `${sl6} đơn Đang giao`, 'Không còn nút Hủy đơn ở đơn Đang giao');
      const o = await observe(page, async () => { await b.click(); await confirmYes(page); }, 3000);
      const st = await statusOf(page, idS);
      await check('CL-88', `${sl6} đơn Đang giao`, anyMsg(o) && st === STATUS_TEXT.shipping ? 'Passed' : 'Failed', `Bấm Hủy đơn ở đơn Đang giao: thông báo ${msgText(o)}; trạng thái "${st}"`, page);
    });
  }
}

// ---------------------------------------------------------------- D. Khổ điện thoại 360 px (CL-109)
async function phasePhone(browser) {
  console.log('\n=== D. Khổ màn hình điện thoại, rộng 360 px (CL-109) ===');
  const ctx = await browser.newContext({ viewport: VIEWPORT_PHONE });
  await ctx.addInitScript(pageLib);
  const page = setupPage(await ctx.newPage());
  try {
    await go(page, '/login'); await layoutCheck(page, 'CL-109', 'W-03');
    await go(page, '/register'); await layoutCheck(page, 'CL-109', 'W-04');
    if (await login(page, ACC.test)) { await go(page, '/profile'); await layoutCheck(page, 'CL-109', 'W-06 (đăng nhập)'); }
    else await check('CL-109', 'W-06 (đăng nhập)', 'Chạy tay', 'Không đăng nhập được ở khổ 360 px');
  } finally {
    await ctx.close();
  }
}

// ---------------------------------------------------------------- E. Tài khoản không có đơn
async function phaseNewUser(page) {
  console.log('\n=== E. newuser@eshop.com (lịch sử đơn trống) ===');
  const sl = 'W-06 (đăng nhập, không có đơn)';
  if (!(await login(page, ACC.newuser))) { for (const c of ['CL-91', 'CL-93']) await check(c, sl, 'Chạy tay', 'Không đăng nhập được newuser@eshop.com'); return; }
  await go(page, '/profile');
  const e = await ev(page, () => window.__hw.emptyState());
  if (!e) { for (const c of ['CL-91', 'CL-93']) await check(c, sl, 'Chạy tay', 'Không tìm thấy khối "Lịch sử đơn hàng"'); return; }
  NOTES.empty = e.msg;
  await check('CL-91', sl, e.icon ? 'Passed' : 'Failed', e.icon ? `Có ${e.icon} trong khối` : `Khối chỉ có: "${e.msg}"`, page);
  await check('CL-93', sl, e.action ? 'Passed' : 'Failed', e.action ? `Có link / nút "${e.action}"` : `Không có link / nút; khối chỉ có: "${e.msg}"`, page);
  await logout(page);
}

// ---------------------------------------------------------------- F. Khóa tài khoản (chạy sau cùng)
async function phaseLockout(page) {
  console.log('\n=== F. Khóa tài khoản sau 3 lần sai (test@eshop.com sẽ bị khóa 30 giây) ===');
  await go(page, '/login');
  if (await isLoggedIn(page)) { await logout(page); }
  const attempts = [];
  for (let i = 1; i <= 4; i++) {
    await go(page, '/login');
    await fillF(page, RE.loginEmail, ACC.test.email);
    await fillF(page, RE.password, i <= 3 ? WRONG_PW : ACC.test.pw);
    const o = await observe(page, () => clickBtn(page, RE.submitLogin));
    attempts.push({ i, o, logged: await isLoggedIn(page) });
    if (attempts[i - 1].logged) break;
  }
  const lock = attempts.find((a) => a.o.texts.some((t) => /khóa|thử lại|tạm/i.test(t)) || a.o.dialogs.some((d) => /khóa|thử lại|tạm/i.test(d.msg)));
  const last = attempts[attempts.length - 1];
  const sum = attempts.map((a) => `lần ${a.i}: ${msgText(a.o).slice(0, 60)}${a.logged ? ' (ĐĂNG NHẬP ĐƯỢC)' : ''}`).join(' || ');
  const blocked4 = !lock && attempts.length === 4 && !last.logged;
  await check('CL-89', 'W-03', lock && lock.i <= 4 && !last.logged ? 'Passed' : 'Failed',
    lock ? `Thông báo khóa ở lần ${lock.i}. ${sum}` : (blocked4 ? `Lần 4 (mật khẩu đúng) vẫn bị từ chối, tức tài khoản đã bị chặn, nhưng thông báo không nói bị khóa / thử lại sau. ${sum}` : `Không thấy thông báo khóa. ${sum}`), page);
  const lockMsg = lock || (blocked4 ? last : null);
  if (!lockMsg) return skip('CL-90', 'W-03', 'Không có thông báo khi bị khóa (CL-89)');
  const t = msgText(lockMsg.o);
  const leak = /\d+\s*lần|lần thứ|còn \d+|sai mật khẩu|mật khẩu (sai|không đúng)|email (không tồn tại|sai|không đúng)/i.test(t);
  await check('CL-90', 'W-03', leak ? 'Failed' : 'Passed', `Thông báo khóa: "${t}"`, page);
  if (last.logged) await logout(page);
}

// ---------------------------------------------------------------- G. So sánh giữa các trang
async function crossPage(page) {
  console.log('\n=== G. So sánh giữa các trang ===');
  const t = { 'W-03': NOTES.titles['W-03'], 'W-04': NOTES.titles['W-04'], 'W-06': NOTES.titles['W-06 (đăng nhập)'] };
  const vals = Object.values(t);
  const ok20 = new Set(vals).size === 3 && Object.entries(t).every(([k, v]) => KW[k].test(v || ''));
  await check('CL-20', 'Cả 3', ok20 ? 'Passed' : 'Failed', Object.entries(t).map(([k, v]) => `${k}: "${v}"`).join(' | '), page);
  const labs = Object.entries(X.label);
  const uniqL = new Set(labs.flatMap(([, l]) => l.map((s) => s.split(': ').slice(1).join(': '))));
  await check('CL-28', 'Cả 3', uniqL.size === 1 ? 'Passed' : 'Failed', labs.map(([k, l]) => `${k}: ${l.join('; ')}`).join(' || ').slice(0, 300), page);
  const subs = Object.entries(X.submit);
  await check('CL-29', 'Cả 3', subs.length === 3 && new Set(subs.map(([, s]) => s)).size === 1 ? 'Passed' : 'Failed', subs.map(([k, s]) => `${k}: ${s}`).join(' | '), page);
  const normNav = (l) => (l || []).map((n) => n.text.replace(/^chào,.*$/i, 'Chào,').replace(/\d+/g, '').trim());
  for (const [state, data] of [['chưa đăng nhập', X.navOut], ['đăng nhập', X.navIn]]) {
    const keys = Object.keys(data);
    if (keys.length < 2) { await skip('CL-75', state, 'Chỉ có dưới 2 trang ở trạng thái này'); continue; }
    const ref = data[keys[0]];
    const same = keys.every((k) => JSON.stringify(normNav(data[k])) === JSON.stringify(normNav(ref))
      && data[k].every((n, i) => ref[i] && Math.abs(n.x - ref[i].x) <= 3));
    await check('CL-75', state, same ? 'Passed' : 'Failed', keys.map((k) => `${k}: ${normNav(data[k]).join(', ')}`).join(' | '), page);
  }
}

// ---------------------------------------------------------------- in bảng cuối
function printFinal() {
  for (const [code, why] of Object.entries(MANUAL)) {
    let extra = '';
    if (code === 'CL-05' || code === 'CL-56') extra = ` | Thông báo bắt được: ${[...NOTES.messages].join(' | ').slice(0, 300)}`;
    if (code === 'CL-06') extra = ` | Tiêu đề tab: ${Object.entries(NOTES.titles).map(([k, v]) => `${k} "${v}"`).join(', ')}`;
    if (code === 'CL-07') extra = ` | Chữ trạng thái: ${NOTES.statuses.join(', ')}`;
    if (code === 'CL-84') extra = ` | Màu đo được: ${NOTES.colors.join('; ')}`;
    if (code === 'CL-92') extra = ` | Khối lịch sử trống: "${NOTES.empty}"`;
    R.set(code, [{ scr: '-', res: 'Chạy tay', why: why + extra }]);
  }
  const rows = [];
  for (let i = 1; i <= 112; i++) {
    const code = `CL-${String(i).padStart(2, '0')}`;
    const parts = R.get(code);
    if (!parts) { rows.push({ 'Mã CL': code, 'Kết quả nháp': 'Chưa chạy', 'Lý do': 'Script dừng hoặc bỏ qua trước khi tới mục này' }); continue; }
    const fin = finalOf(parts);
    const show = fin === 'Passed' ? parts : parts.filter((p) => p.res !== 'Passed');
    rows.push({ 'Mã CL': code, 'Kết quả nháp': fin, 'Lý do': show.map((p) => `[${p.scr}] ${p.why}`).join(' || ').slice(0, 220) });
  }
  console.log('\n=== KẾT QUẢ NHÁP N1 (Chrome trên Windows). Sinh viên chốt trong Excel; mục Failed cần ảnh ===');
  console.table(rows);
  const count = (r) => rows.filter((x) => x['Kết quả nháp'].startsWith(r)).length;
  console.log(`Passed ${count('Passed')} | Failed ${count('Failed')} | Không chạy được ${count('Không chạy được')} | Chạy tay ${count('Chạy tay')} | Chưa chạy ${count('Chưa chạy')}`);
}

// ---------------------------------------------------------------- chạy
async function main() {
  console.log([
    '=== HW03 Task 1, exec N1: Chrome trên Windows (kết quả NHÁP) ===',
    'BƯỚC 0, PHIÊN ĐIỀU PHỐI làm trước (script KHÔNG tự làm):',
    '  1. Không có phiên usability nào đang dùng chung backend / DB.',
    '  2. Reset DB: cd backend && node database.js',
    '  3. Chạy tools/seed_orders.py (5 đơn ở 5 trạng thái cho test@eshop.com; newuser@eshop.com không có đơn).',
    `  4. Backend và frontend web đang chạy; frontend ở ${BASE}.`,
    'Script sẽ đổi dữ liệu: Tạo tài khoản hw03.n1.*, sửa hồ sơ test@eshop.com, hủy 2 đơn, khóa tạm test@eshop.com 30 giây ở cuối.',
    'Sau lần chạy này cần reset DB và seed lại. Có 2 lần dừng để bạn tự chuẩn bị giỏ hàng (CL-68, CL-69).',
  ].join('\n'));
  if (DRY) console.log('*** CHẠY THỬ (--dry-run): Kết quả chỉ để gỡ lỗi script, không ghi vào Excel ***');
  const okRun = DRY ? 'co' : await ask('Đã làm đủ BƯỚC 0? Gõ "co" rồi Enter để bắt đầu (Enter trống để thoát): ');
  if (!/^c[oó]$/i.test(okRun.trim())) { console.log('Dừng: Chưa chuẩn bị dữ liệu.'); rl.close(); return; }

  const browser = await chromium.launch({ channel: 'chrome', headless: false, args: ['--window-position=0,0'] });
  const ctx = await browser.newContext({ viewport: VIEWPORT });
  await ctx.addInitScript(pageLib);
  await ctx.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: ORIGIN });
  const page = setupPage(await ctx.newPage());
  const phases = [
    ['A', () => phaseLoggedOut(ctx, page)],
    ['B', () => phaseForms(ctx, page)],
    ['C', () => phaseLoggedIn(ctx, page)],
    ['D', () => phasePhone(browser)],
    ['E', () => phaseNewUser(page)],
    ['F', () => phaseLockout(page)],
    ['G', () => crossPage(page)],
  ];
  for (const [name, fn] of phases) {
    if (ONLY.length && !ONLY.includes(name)) continue;
    console.log(`\n[${stamp()}] Bắt đầu nhóm ${name}`);
    try { await fn(); } catch (e) {
      console.error(`\nNhóm ${name} dừng vì lỗi: ${String(e.stack || e).split('\n').slice(0, 3).join(' / ')}`);
      if (!DRY) await ask('Bấm Enter để chạy nhóm tiếp theo... ');
    }
  }
  printFinal();
  console.log(`Tổng thời gian: ${stamp()}`);
  if (!DRY) await ask('\nBấm Enter để đóng Chrome và kết thúc... ');
  await browser.close();
  rl.close();
}

main().catch((e) => { console.error(e); rl.close(); process.exitCode = 1; });
