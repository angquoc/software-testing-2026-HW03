/*
 * HW03 Task 1, bước exec: Kết quả NHÁP cho các mục DevTools trong checklist/02_checklist.md
 *
 * Cách dùng
 *   1. Mở trang cần kiểm: /login (W-03), /register (W-04), /profile (W-06; chạy cả khi đã đăng nhập
 *      và khi chưa đăng nhập).
 *   2. Mở DevTools (F12), tab Console. Dán toàn bộ file này vào và bấm Enter.
 *      Chrome có thể yêu cầu gõ "allow pasting" trước lần dán đầu tiên; Firefox yêu cầu gõ
 *      "allow pasting" tương tự.
 *   3. Đọc bảng in ra. Cột "Gợi ý" chỉ là gợi ý nháp: Sinh viên tự đối chiếu cột "Kết quả mong đợi"
 *      và cách kiểm trong checklist rồi mới ghi Passed / Failed vào Excel. Mục Failed vẫn phải chụp ảnh.
 *
 * Mục được kiểm (chỉ các mục có "Cách kiểm" là DevTools, đo được bằng DOM hoặc computed style):
 *   CL-13, CL-14, CL-19, CL-22, CL-28, CL-29, CL-30, CL-31, CL-32, CL-44, CL-46, CL-54, CL-62,
 *   CL-76, CL-83, CL-106, CL-109.
 *   Không kiểm: CL-23 (dùng Lighthouse / axe theo checklist), các mục Network / Application
 *   (CL-94 đến CL-96, CL-105, CL-108, CL-112), các mục bàn phím và nhìn.
 *
 * Chỉ đọc trang: Không sửa DOM, không đổi focus, không ghi storage, không gửi request.
 * Chạy được trên Chrome và Firefox (chỉ dùng API chuẩn, không dùng hàm riêng của Console như $$ hay copy).
 * Phần tử được tìm theo chữ nhìn thấy trên trang (nhãn, chữ trên nút) như ở 00_survey.md,
 * không dựa vào mã nguồn EShop.
 */
(() => {
  'use strict';

  // ---------- tiện ích chung ----------
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const isVisible = (el) => {
    if (!el || !el.getClientRects || el.getClientRects().length === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.display !== 'none';
  };
  const inNavbar = (el) => !!el.closest('nav, header, [role="navigation"], [role="banner"]');
  const ownText = (el) => norm(Array.from(el.childNodes)
    .filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => n.textContent).join(' '));
  const px = (v) => parseFloat(v) || 0;
  const desc = (el) => {
    const t = norm(el.textContent).slice(0, 25) || el.getAttribute('placeholder') || el.getAttribute('type') || '';
    return `<${el.tagName.toLowerCase()}> "${t}"`;
  };
  const firstFamily = (ff) => norm((ff || '').split(',')[0]).replace(/["']/g, '');

  const rows = [];
  const add = (code, measured, hint, note) => rows.push({
    'Mã': code, 'Màn hình': SCREEN_LABEL, 'Đo được': measured, 'Gợi ý': hint, 'Ghi chú': note || '',
  });
  const safe = (code, fn) => {
    try { fn(); } catch (e) { add(code, 'Lỗi khi đo: ' + e.message, 'Xem tay', 'Kiểm bằng DevTools theo cách kiểm trong checklist'); }
  };

  // ---------- nhận diện trang và trạng thái ----------
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const SCREEN = { '/login': 'W-03', '/register': 'W-04', '/profile': 'W-06' }[path] || null;
  // Lời chào "Chào, <Họ Tên>": Ưu tiên phần tử có chữ trực tiếp "Chào,", rồi tới link / nút có chữ đó.
  const greetCand = Array.from(document.querySelectorAll('a, button, span, div, li, p, strong, b'))
    .filter((el) => isVisible(el) && norm(el.textContent).length < 80);
  const greeting = greetCand.find((el) => /^Chào,/.test(ownText(el)))
    || greetCand.find((el) => /^(A|BUTTON)$/.test(el.tagName) && /^Chào,/.test(norm(el.textContent))) || null;
  const logoutBtn = Array.from(document.querySelectorAll('a, button'))
    .find((el) => isVisible(el) && inNavbar(el) && /^(thoát|đăng xuất)$/i.test(norm(el.textContent)));
  const LOGGED_IN = !!(greeting || logoutBtn);
  const SCREEN_LABEL = SCREEN ? `${SCREEN} (${LOGGED_IN ? 'đăng nhập' : 'chưa đăng nhập'})` : path;
  const PROFILE_FORM = SCREEN === 'W-06' && LOGGED_IN;
  const HAS_FORM = SCREEN === 'W-03' || SCREEN === 'W-04' || PROFILE_FORM;

  // ---------- tìm nhãn, ô nhập, nút gửi theo chữ nhìn thấy ----------
  const FIELD_SPEC = {
    'W-03': [
      { key: 'email', label: 'Ô thứ nhất (Email / Username)', re: /^(username|email|e-mail)\b/i },
      { key: 'password', label: 'Mật khẩu', re: /^mật khẩu/i },
    ],
    'W-04': [
      { key: 'name', label: 'Họ Tên', re: /^họ (và )?tên/i },
      { key: 'email', label: 'Email', re: /^email/i },
      { key: 'password', label: 'Mật khẩu', re: /^mật khẩu/i },
      { key: 'confirm', label: 'Xác nhận mật khẩu', re: /^(xác nhận|nhập lại) mật khẩu/i, optional: true },
    ],
    'W-06': [
      { key: 'email', label: 'Email (Không đổi)', re: /^email/i },
      { key: 'name', label: 'Họ Tên', re: /^họ (và )?tên/i },
      { key: 'phone', label: 'Số điện thoại', re: /^số điện thoại/i },
      { key: 'address', label: 'Địa chỉ giao hàng', re: /^địa chỉ/i },
    ],
  };
  const SUBMIT_RE = { 'W-03': /^(sign in|đăng nhập)$/i, 'W-04': /^đăng ký$/i, 'W-06': /^cập nhật$/i };

  const allFields = () => Array.from(document.querySelectorAll('input, textarea, select'))
    .filter((f) => !/^(hidden|submit|button|reset|image|checkbox|radio)$/i.test(f.type) && isVisible(f) && !inNavbar(f));

  const findLabel = (re) => {
    const labels = Array.from(document.querySelectorAll('label'))
      .filter((l) => isVisible(l) && !inNavbar(l) && re.test(norm(l.textContent)));
    if (labels.length) return labels[0];
    return Array.from(document.body.querySelectorAll('*')).find((el) => isVisible(el) && !inNavbar(el)
      && !/^(INPUT|TEXTAREA|SELECT|BUTTON|SCRIPT|STYLE|OPTION)$/.test(el.tagName) && re.test(ownText(el))) || null;
  };
  const fieldAfter = (labelEl) => {
    if (!labelEl) return null;
    if (labelEl.control) return labelEl.control;
    return allFields().find((f) => labelEl.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING) || null;
  };

  const FIELDS = [];
  if (HAS_FORM) {
    for (const spec of FIELD_SPEC[SCREEN]) {
      const labelEl = findLabel(spec.re);
      const field = fieldAfter(labelEl);
      if (labelEl || !spec.optional) FIELDS.push({ ...spec, labelEl, field });
    }
  }
  const fieldBy = (key) => FIELDS.find((f) => f.key === key && f.field);
  const SUBMIT = HAS_FORM ? Array.from(document.querySelectorAll('button, input[type="submit"], input[type="button"]'))
    .find((b) => isVisible(b) && !inNavbar(b) && SUBMIT_RE[SCREEN].test(norm(b.textContent || b.value))) : null;

  const accName = (el) => {
    const lb = el.getAttribute('aria-labelledby');
    if (lb) {
      const t = norm(lb.split(/\s+/).map((id) => (document.getElementById(id) || {}).textContent || '').join(' '));
      if (t) return { name: t, via: 'aria-labelledby' };
    }
    const al = norm(el.getAttribute('aria-label'));
    if (al) return { name: al, via: 'aria-label' };
    if (el.labels && el.labels.length) {
      const t = norm(Array.from(el.labels).map((l) => l.textContent).join(' '));
      if (t) return { name: t, via: '<label>' };
    }
    if (/^(A|BUTTON)$/.test(el.tagName) && norm(el.textContent)) return { name: norm(el.textContent), via: 'chữ bên trong' };
    const ti = norm(el.getAttribute('title'));
    if (ti) return { name: ti, via: 'title' };
    const ph = norm(el.getAttribute('placeholder'));
    if (ph) return { name: ph, via: 'placeholder' };
    return { name: '', via: 'không có' };
  };

  // ---------- CL-13, CL-14: thẻ <h1> ----------
  const h1s = Array.from(document.querySelectorAll('h1'));
  if (SCREEN) {
    safe('CL-13', () => {
      const vis = h1s.filter(isVisible).length;
      add('CL-13', `${h1s.length} thẻ <h1> (${vis} thẻ đang hiển thị)`, h1s.length === 1 ? 'Passed' : 'Failed', 'Mong đợi: Đúng 1 thẻ <h1>');
    });
    safe('CL-14', () => {
      const kw = { 'W-03': /đăng nhập|login|sign in/i, 'W-04': /đăng ký|register|sign up/i, 'W-06': /hồ sơ|tài khoản|profile/i }[SCREEN];
      const texts = h1s.map((h) => `"${norm(h.textContent)}"`);
      const ok = h1s.filter((h) => kw.test(h.textContent)).length;
      const hint = h1s.length === 0 ? 'Failed' : (ok === h1s.length ? 'Passed' : (ok === 0 ? 'Failed' : 'Xem tay'));
      add('CL-14', texts.join(', ') || 'Không có <h1>', hint, `Mong đợi: <h1> nói về ${SCREEN === 'W-03' ? 'đăng nhập' : SCREEN === 'W-04' ? 'đăng ký' : 'hồ sơ cá nhân'}`);
    });
  }

  // ---------- CL-19: lang ----------
  if (SCREEN) safe('CL-19', () => {
    const lang = document.documentElement.getAttribute('lang');
    add('CL-19', lang === null ? 'Không có thuộc tính lang' : `lang="${lang}"`,
      lang === 'vi' ? 'Passed' : (lang && /^vi(-|$)/i.test(lang) ? 'Xem tay' : 'Failed'), 'Mong đợi: <html lang="vi">');
  });

  // ---------- CL-22: ô Email bị khóa ở W-06 ----------
  if (PROFILE_FORM) safe('CL-22', () => {
    const f = fieldBy('email');
    if (!f) return add('CL-22', 'Không tìm thấy ô Email', 'Xem tay', 'Tìm ô cạnh nhãn "Email (Không đổi)"');
    const el = f.field;
    add('CL-22', `readonly=${el.readOnly}, disabled=${el.disabled}`, (el.readOnly || el.disabled) ? 'Passed' : 'Failed',
      'Đối chiếu dòng Read-only / Disabled trong phần Accessibility; thử Tab: readonly thì dừng ở ô, disabled thì bỏ qua');
  });

  // ---------- CL-28: font nhãn ----------
  const LABEL_KEY = [];
  if (HAS_FORM) safe('CL-28', () => {
    const labs = FIELDS.filter((f) => f.labelEl).map((f) => {
      const cs = getComputedStyle(f.labelEl);
      const v = `${firstFamily(cs.fontFamily)}, ${cs.fontSize}, ${cs.color}`;
      LABEL_KEY.push(v);
      return { name: f.label, v };
    });
    if (!labs.length) return add('CL-28', 'Không tìm thấy nhãn', 'Xem tay', '');
    const uniq = Array.from(new Set(labs.map((l) => l.v)));
    add('CL-28', labs.map((l) => `${l.name}: ${l.v}`).join(' | '),
      uniq.length === 1 ? 'Xem tay' : 'Failed',
      uniq.length === 1 ? `Đồng nhất trong trang này. So với 2 trang còn lại (dòng "Khóa so sánh CL-28" bên dưới bảng)` : 'Các nhãn trong cùng trang khác nhau');
  });

  // ---------- CL-29: nút Submit ----------
  let SUBMIT_KEY = '';
  if (HAS_FORM) safe('CL-29', () => {
    if (!SUBMIT) return add('CL-29', 'Không tìm thấy nút gửi', 'Xem tay', 'Nút "Sign In" / "Đăng Ký" / "Cập nhật"');
    const cs = getComputedStyle(SUBMIT);
    SUBMIT_KEY = `height ${Math.round(SUBMIT.getBoundingClientRect().height)}px, ${firstFamily(cs.fontFamily)}, ${cs.fontSize}, border-radius ${cs.borderRadius}`;
    add('CL-29', `"${norm(SUBMIT.textContent || SUBMIT.value)}": ${SUBMIT_KEY}`, 'Xem tay',
      'So với nút gửi của 2 trang còn lại (dòng "Khóa so sánh CL-29" bên dưới bảng)');
  });

  // ---------- CL-30: cỡ chữ tiêu đề ----------
  if (HAS_FORM) safe('CL-30', () => {
    const KNOWN = /^(hồ sơ của bạn|lịch sử đơn hàng|đăng ký tài khoản|đăng ký|đăng nhập)$/i;
    let heads = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter((h) => isVisible(h) && !inNavbar(h));
    let via = 'thẻ h1 đến h6';
    if (!heads.length) {
      heads = Array.from(document.body.querySelectorAll('*')).filter((el) => isVisible(el) && !inNavbar(el) && KNOWN.test(ownText(el)) && el.tagName !== 'BUTTON');
      via = 'tìm theo chữ tiêu đề trong survey';
    }
    if (!heads.length) return add('CL-30', 'Không tìm thấy tiêu đề', 'Xem tay', '');
    const labelSizes = FIELDS.filter((f) => f.labelEl).map((f) => px(getComputedStyle(f.labelEl).fontSize));
    const bodySize = px(getComputedStyle(document.body).fontSize);
    const ref = Math.max(bodySize, ...labelSizes);
    const hs = heads.map((h) => ({ t: norm(h.textContent).slice(0, 30), s: px(getComputedStyle(h).fontSize) }));
    add('CL-30', `${hs.map((h) => `"${h.t}" ${h.s}px`).join(', ')}; nhãn lớn nhất ${Math.max(0, ...labelSizes)}px; body ${bodySize}px (${via})`,
      hs.every((h) => h.s > ref) ? 'Passed' : 'Failed', 'Mong đợi: Mọi tiêu đề lớn hơn nhãn và nội dung thường');
  });

  // ---------- CL-31: canh lề trái nhãn và ô ----------
  if (HAS_FORM) safe('CL-31', () => {
    const lefts = [];
    FIELDS.forEach((f) => {
      if (f.labelEl) lefts.push({ n: `nhãn ${f.label}`, x: f.labelEl.getBoundingClientRect().left });
      if (f.field) lefts.push({ n: `ô ${f.label}`, x: f.field.getBoundingClientRect().left });
    });
    if (!lefts.length) return add('CL-31', 'Không tìm thấy nhãn / ô', 'Xem tay', '');
    const xs = lefts.map((l) => l.x);
    const spread = Math.max(...xs) - Math.min(...xs);
    add('CL-31', `${lefts.map((l) => `${l.n}: ${l.x.toFixed(1)}px`).join(' | ')} (lệch tối đa ${spread.toFixed(1)}px)`,
      spread <= 1 ? 'Passed' : 'Failed', 'Mong đợi: Cạnh trái mọi nhãn và ô trong form thẳng một hàng (sai số 1px)');
  });

  // ---------- CL-32, CL-109: bố cục theo kích thước cửa sổ ----------
  const layout = () => {
    const de = document.documentElement;
    const hScroll = Math.max(de.scrollWidth, document.body.scrollWidth) > de.clientWidth + 1;
    const els = Array.from(document.body.querySelectorAll('label, input, textarea, select, button, a, h1, h2, h3, h4, h5, h6, p, th, td, img, li, span'))
      .filter(isVisible).slice(0, 500);
    const rects = els.map((e) => e.getBoundingClientRect());
    const overlaps = [];
    for (let i = 0; i < els.length; i++) {
      for (let j = i + 1; j < els.length; j++) {
        if (els[i].contains(els[j]) || els[j].contains(els[i])) continue;
        const a = rects[i], b = rects[j];
        const w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (w > 2 && h > 2) overlaps.push(`${desc(els[i])} chồng ${desc(els[j])}`);
      }
    }
    const clipped = els.filter((e) => {
      const cs = getComputedStyle(e);
      return /hidden|clip/.test(cs.overflowX) && e.scrollWidth > e.clientWidth + 1 && norm(e.textContent);
    }).map(desc);
    return { hScroll, overlaps, clipped };
  };
  const layoutRow = (code, targetW, targetH) => {
    const w = window.innerWidth, h = window.innerHeight;
    const sizeOk = Math.abs(w - targetW) <= 5 && (!targetH || Math.abs(h - targetH) <= 5);
    const L = layout();
    const measured = `Cửa sổ ${w} x ${h}; cuộn ngang: ${L.hScroll ? 'CÓ' : 'không'}; chồng lấn: ${L.overlaps.length}; chữ bị cắt: ${L.clipped.length}`;
    let hint;
    if (!sizeOk) hint = `Chưa đúng kích thước: Đặt Device Toolbar ${targetW}${targetH ? ' x ' + targetH : ' px'} rồi chạy lại`;
    else if (L.hScroll) hint = 'Failed';
    else if (L.overlaps.length || (code === 'CL-32' && L.clipped.length)) hint = 'Xem tay';
    else hint = 'Passed';
    const detail = [...L.overlaps.slice(0, 5), ...(code === 'CL-32' ? L.clipped.slice(0, 5).map((c) => 'bị cắt: ' + c) : [])].join('; ');
    add(code, measured, hint, detail ? 'Xem lại: ' + detail : '');
  };
  if (SCREEN && (SCREEN !== 'W-06' || LOGGED_IN)) {
    safe('CL-32', () => layoutRow('CL-32', 1366, 768));
    safe('CL-109', () => layoutRow('CL-109', 360, 0));
  }

  // ---------- CL-44: type="email" ----------
  if (HAS_FORM) safe('CL-44', () => {
    const f = fieldBy('email');
    if (!f) return add('CL-44', 'Không tìm thấy ô Email', 'Xem tay', '');
    const t = f.field.getAttribute('type');
    add('CL-44', `${f.label}: type="${t === null ? '(không có)' : t}"`, (t || '').toLowerCase() === 'email' ? 'Passed' : 'Failed', 'Mong đợi: type="email"');
  });

  // ---------- CL-46: type="password" ----------
  if (SCREEN === 'W-03' || SCREEN === 'W-04') safe('CL-46', () => {
    const ps = FIELDS.filter((f) => (f.key === 'password' || f.key === 'confirm') && f.field);
    if (!ps.length) return add('CL-46', 'Không tìm thấy ô mật khẩu', 'Xem tay', '');
    const vals = ps.map((f) => ({ n: f.label, t: f.field.getAttribute('type') }));
    add('CL-46', vals.map((v) => `${v.n}: type="${v.t === null ? '(không có)' : v.t}"`).join(' | '),
      vals.every((v) => (v.t || '').toLowerCase() === 'password') ? 'Passed' : 'Failed', 'Mong đợi: type="password"');
  });

  // ---------- CL-54: tên đọc được bởi công cụ hỗ trợ ----------
  if (HAS_FORM) safe('CL-54', () => {
    const res = FIELDS.filter((f) => f.field).map((f) => {
      const { name, via } = accName(f.field);
      const visible = norm(f.labelEl ? f.labelEl.textContent : f.label).split('(')[0].trim().toLowerCase();
      const ok = name && name.toLowerCase().includes(visible);
      return { s: `${f.label}: "${name}" (${via})`, state: !name ? 'empty' : (ok ? 'ok' : 'diff') };
    });
    if (!res.length) return add('CL-54', 'Không tìm thấy ô', 'Xem tay', '');
    const hint = res.some((r) => r.state === 'empty') ? 'Failed' : (res.every((r) => r.state === 'ok') ? 'Passed' : 'Xem tay');
    add('CL-54', res.map((r) => r.s).join(' | '), hint, 'Tên tính gần đúng; xác nhận ở dòng "Name" trong phần Accessibility của DevTools');
  });

  // ---------- CL-62: autocomplete ----------
  if (HAS_FORM) safe('CL-62', () => {
    const want = {
      email: SCREEN === 'W-03' ? ['email', 'username'] : ['email'],
      password: SCREEN === 'W-03' ? ['current-password'] : ['new-password'],
      confirm: ['new-password'],
      phone: ['tel', 'tel-national', 'tel-local'],
    };
    const res = FIELDS.filter((f) => f.field && want[f.key]).map((f) => {
      const raw = f.field.getAttribute('autocomplete');
      const token = raw ? raw.trim().toLowerCase().split(/\s+/).pop() : '';
      return { s: `${f.label}: ${raw === null ? '(không có)' : `"${raw}"`}`, ok: want[f.key].includes(token) };
    });
    if (!res.length) return add('CL-62', 'Không tìm thấy ô Email / Mật khẩu / Số điện thoại', 'Xem tay', '');
    add('CL-62', res.map((r) => r.s).join(' | '), res.every((r) => r.ok) ? 'Passed' : 'Failed',
      `Giá trị phù hợp: Email: ${want.email.join(' / ')}; Mật khẩu: ${want.password.join(' / ')}; Số điện thoại: tel`);
  });

  // ---------- CL-76: lời chào trên navbar ----------
  if (SCREEN && LOGGED_IN) safe('CL-76', () => {
    if (!greeting) return add('CL-76', 'Không tìm thấy lời chào "Chào, ..."', 'Xem tay', 'Kiểm bằng phần Accessibility của DevTools');
    const link = greeting.closest('a, button') || greeting.querySelector('a, button') || greeting;
    const { name, via } = accName(link);
    const title = norm(link.getAttribute('title'));
    const ok = /hồ sơ|tài khoản|profile|account/i.test(`${name} ${title}`);
    add('CL-76', `<${link.tagName.toLowerCase()}> href="${link.getAttribute('href') || ''}", name "${name}" (${via}), title "${title}"`,
      ok ? 'Passed' : 'Failed', 'Mong đợi: Chữ, title hoặc Name cho biết link dẫn tới hồ sơ / tài khoản');
  });

  // ---------- CL-83: vùng <main> ----------
  if (SCREEN) safe('CL-83', () => {
    const m = document.querySelector('main, [role="main"]');
    const holdsContent = m && (h1s.some((h) => m.contains(h)) || (SUBMIT && m.contains(SUBMIT)) || norm(m.textContent).length > 0);
    add('CL-83', m ? `${desc(m)}; chứa nội dung trang: ${holdsContent ? 'có' : 'không'}` : 'Không có <main> hay role="main"',
      m && holdsContent ? 'Passed' : 'Failed', 'Mong đợi: Nội dung trang nằm trong <main> (hoặc vai trò main)');
  });

  // ---------- CL-106: vùng thông báo đọc tự động ----------
  if (SCREEN) safe('CL-106', () => {
    const live = Array.from(document.querySelectorAll('[role="alert"], [role="status"], [aria-live]'));
    add('CL-106', live.length ? live.map((e) => `${desc(e)} [${e.getAttribute('role') || 'aria-live=' + e.getAttribute('aria-live')}]`).join(' | ') : 'Không có phần tử role="alert" / role="status" / aria-live',
      'Xem tay', 'Chạy lại script ngay khi thông báo lỗi / thành công đang hiện. Passed nếu phần tử chứa thông báo có trong danh sách này');
  });

  // ---------- in kết quả ----------
  console.log(`%cHW03 Task 1: Kết quả NHÁP DevTools cho ${SCREEN_LABEL}`, 'font-weight:bold;font-size:14px');
  console.log(`URL: ${location.href} | Cửa sổ ${window.innerWidth} x ${window.innerHeight} | devicePixelRatio ${window.devicePixelRatio} | ${new Date().toLocaleString('vi-VN')}`);
  console.log(navigator.userAgent);
  if (!SCREEN) console.warn('Trang này không phải /login, /register hay /profile: Chỉ chạy script trên 3 trang trong phạm vi.');
  if (HAS_FORM) {
    const miss = FIELDS.filter((f) => !f.field).map((f) => f.label);
    if (miss.length) console.warn('Không tìm thấy ô nhập cho nhãn: ' + miss.join(', ') + '. Các dòng liên quan cần kiểm tay.');
  }
  console.table(rows);
  if (LABEL_KEY.length) console.log(`Khóa so sánh CL-28 (${SCREEN}): ${Array.from(new Set(LABEL_KEY)).join(' || ')}`);
  if (SUBMIT_KEY) console.log(`Khóa so sánh CL-29 (${SCREEN}): ${SUBMIT_KEY}`);
  console.log('Cột "Gợi ý" là nháp. Sinh viên đối chiếu checklist rồi mới ghi kết quả vào Excel; mục Failed cần ảnh chụp.');
})();
