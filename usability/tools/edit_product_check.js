'use strict';
/*
 * HW03 Task 2: Tái hiện lỗi form "Sửa" sản phẩm trên Web Admin (phát hiện ở phiên P4).
 * Script chạy Chrome thật (có giao diện) bằng Playwright, làm 7 trường hợp sửa sản phẩm, chụp toàn màn hình
 * ở từng bước và ghi log. Sinh viên xem ảnh và log rồi chốt kết luận; script không tự kết luận là bug.
 *
 * Chuẩn bị (sinh viên làm, script KHÔNG tự làm):
 *   1. Không có phiên usability nào đang chạy.
 *   2. Reset DB: cd backend && node database.js  (để bảng có đúng 5 sản phẩm mẫu)
 *   3. Backend và frontend-admin đang chạy; Admin ở http://localhost:5174 (đổi bằng biến môi trường ADMIN_URL).
 *   4. checklist/tools đã có node_modules (npm install ở Task 1). Script dùng lại playwright-core ở đó.
 *
 * Cách chạy:
 *   cd Homeworks/HW03/usability/tools
 *   node edit_product_check.js --log=edit_check_log.txt
 *   Chỉ chạy một số trường hợp: --only=E1,E3      Không chụp ảnh: --no-shots
 *
 * Sau khi chạy: Reset DB lại (script sửa 5 sản phẩm mẫu và tạo thêm 1 sản phẩm "HW03 E6 ...").
 *
 * Phần tử được tìm theo chữ nhìn thấy trên trang (ảnh flow_01, flow_06 đến flow_11): Nút "Login", mục "Sản phẩm"
 *   ở thanh bên trái, ô có placeholder "Tên sản phẩm", "Giá tiền", "URL Ảnh", "Mô tả", ô chọn danh mục,
 *   nút "Lưu sản phẩm", bảng có cột "Ảnh", "Tên SP", "Giá", "Hành động" và nút "Sửa" trên mỗi dòng.
 *   Script không đọc mã nguồn EShop, không dùng DevTools, không gọi thẳng API.
 * Ảnh: usability/tools/edit_check_shots/<mã>_<bước>_<nội dung>.png (toàn màn hình Windows, qua
 *   usability/tools/capture_screen_max.ps1: phóng to cửa sổ Chrome của script rồi mới chụp; không tìm thấy cửa sổ
 *   đó thì không chụp). Hộp thoại alert được chụp trước khi script bấm OK.
 *   Trước khi chạy: Đóng file có thông tin người tham gia (participants.md) trong mọi cửa sổ.
 *
 * Mỗi trường hợp:
 *   1 Tải lại trang, vào "Sản phẩm", ghi bảng (trạng thái trước)   2 Bấm "Sửa", chụp form vừa mở
 *   3 Đổi ô cần đổi, chụp trước khi lưu                            4 Bấm lưu, chụp hộp thoại (nếu có)
 *   5 Chụp bảng ngay sau khi lưu (chưa tải lại)                     6 Tải lại trang, vào lại "Sản phẩm", chụp bảng
 *   7 Bấm "Sửa" lại đúng dòng đó, chụp form để xem giá trị đã lưu
 */
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const TOOLS_T1 = path.resolve(__dirname, '..', '..', 'checklist', 'tools');
const { chromium } = require(path.join(TOOLS_T1, 'node_modules', 'playwright-core'));

// ---------------------------------------------------------------- cấu hình
const ADMIN = (process.env.ADMIN_URL || 'http://localhost:5174').replace(/\/+$/, '');
const ACC = { email: 'admin@eshop.com', pw: 'Admin123!' }; // 02_scenario.md mục 2.2
const SHOTS_ON = !process.argv.includes('--no-shots');
const SHOT_DIR = path.resolve(__dirname, 'edit_check_shots');
const ONLY = ((process.argv.find((a) => a.startsWith('--only=')) || '').split('=')[1] || '').toUpperCase().split(',').filter(Boolean);
const LOG_FILE = (process.argv.find((a) => a.startsWith('--log=')) || '').slice(6);
const LOG_WS = LOG_FILE ? fs.createWriteStream(path.resolve(__dirname, LOG_FILE), { flags: 'a', encoding: 'utf8' }) : null;
const log = (...a) => { const s = a.join(' '); console.log(s); if (LOG_WS) LOG_WS.write(s + '\n'); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const RUN_ID = Date.now().toString(36);
const NEW_URL = 'https://cdn2.cellphones.com.vn/x/media/catalog/product/j/b/jbl_flip_6_5_1.png'; // URL ảnh trong phiếu dữ liệu
let LAUNCH_MS = 0;

// ---------------------------------------------------------------- chụp màn hình
function shot(base) {
  if (!SHOTS_ON) return Promise.resolve(null);
  if (!fs.existsSync(SHOT_DIR)) fs.mkdirSync(SHOT_DIR, { recursive: true });
  let out = path.join(SHOT_DIR, `${base}.png`);
  if (fs.existsSync(out)) out = path.join(SHOT_DIR, `${base}_${RUN_ID}.png`);
  return new Promise((resolve) => {
    execFile('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'capture_screen_max.ps1'),
      '-Out', out, '-SinceMs', String(LAUNCH_MS)], { windowsHide: true, timeout: 30000 }, (err, stdout) => {
      if (err) { log(`    (Không chụp được ${base}: ${String(err.message).split('\n')[0]})`); resolve(null); return; }
      log(`    Ảnh: ${path.relative(path.resolve(__dirname, '..', '..'), out)}`);
      resolve(out);
    });
  });
}

// ---------------------------------------------------------------- hàm chạy trong trang (chỉ đọc DOM, gắn nhãn data-hw)
function pageLib() {
  if (window.__hw) return;
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const vis = (el) => {
    if (!el || !el.getClientRects || el.getClientRects().length === 0) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.display !== 'none';
  };
  const prodTable = () => Array.from(document.querySelectorAll('table'))
    .find((t) => vis(t) && Array.from(t.querySelectorAll('th')).some((th) => /tên sp/i.test(norm(th.textContent)))) || null;
  const readTable = () => {
    const t = prodTable();
    if (!t) return null;
    return Array.from(t.querySelectorAll('tbody tr')).filter(vis).map((tr) => {
      const td = Array.from(tr.querySelectorAll('td'));
      const img = tr.querySelector('img');
      return { name: norm(td[1] && td[1].textContent), price: norm(td[2] && td[2].textContent),
        imgAlt: img ? img.getAttribute('alt') || '' : '', imgSrc: img ? img.getAttribute('src') || '' : '' };
    });
  };
  // Tìm form đang hiện (ưu tiên hộp thoại, rồi ô nhập trong bảng, rồi form trên trang); gắn data-hw cho từng ô
  const markForm = () => {
    document.querySelectorAll('[data-hw]').forEach((e) => e.removeAttribute('data-hw'));
    const all = Array.from(document.querySelectorAll('input, textarea, select'))
      .filter((f) => vis(f) && !/^(hidden|file|submit|button|checkbox|radio)$/i.test(f.type));
    const dlg = all.filter((f) => f.closest('[role="dialog"], dialog, .modal'));
    const inTable = all.filter((f) => prodTable() && prodTable().contains(f));
    const pool = dlg.length ? dlg : inTable.length ? inTable : all.filter((f) => !(prodTable() && prodTable().contains(f)));
    const where = dlg.length ? 'hộp thoại' : inTable.length ? 'trong bảng' : 'form trên trang';
    const ph = (f) => norm(f.getAttribute('placeholder'));
    const pick = (re) => pool.find((f) => re.test(ph(f)));
    const texts = pool.filter((f) => f.tagName === 'INPUT');
    const F = {
      name: pick(/tên sản phẩm/i) || texts[0],
      price: pick(/giá/i) || texts[1],
      url: pick(/url|ảnh/i) || texts[2],
      desc: pick(/mô tả/i) || pool.find((f) => f.tagName === 'TEXTAREA'),
      cat: pool.find((f) => f.tagName === 'SELECT'),
    };
    const values = {};
    for (const [k, el] of Object.entries(F)) {
      if (!el) { values[k] = null; continue; }
      el.setAttribute('data-hw', k);
      values[k] = el.tagName === 'SELECT' ? norm(el.options[el.selectedIndex] && el.options[el.selectedIndex].textContent) : el.value;
    }
    const scope = (F.name && (F.name.closest('form, [role="dialog"], dialog, .modal, tr') || F.name.parentElement && F.name.parentElement.parentElement)) || document.body;
    const btns = Array.from(document.querySelectorAll('button, input[type="submit"], [role="button"]'))
      .filter((b) => vis(b) && !(prodTable() && prodTable().contains(b) && !inTable.length))
      .filter((b) => !/import|choose|đăng xuất|^xóa$|^sửa$/i.test(norm(b.textContent || b.value)));
    const sub = btns.find((b) => scope.contains(b) && /lưu|cập nhật|update|save/i.test(norm(b.textContent || b.value)))
      || btns.find((b) => /lưu|cập nhật|update|save/i.test(norm(b.textContent || b.value)));
    if (sub) sub.setAttribute('data-hw', 'submit');
    let title = '';
    let n = F.name;
    while (n && n !== document.body && !title) {
      const h = n.querySelector && n.querySelector('h1, h2, h3, h4');
      if (h && vis(h)) title = norm(h.textContent);
      n = n.parentElement;
    }
    const options = F.cat ? Array.from(F.cat.options).map((o) => norm(o.textContent)) : [];
    return { where, title, values, options, submit: sub ? norm(sub.textContent || sub.value) : null };
  };
  const headings = () => Array.from(document.querySelectorAll('h1, h2')).filter(vis).map((h) => norm(h.textContent));
  const scrollTo = (what) => {
    const el = what === 'table' ? prodTable() : document.querySelector('[data-hw="name"]');
    if (el) el.scrollIntoView({ block: what === 'table' ? 'start' : 'center' });
  };
  window.__hw = { readTable, markForm, headings, scrollTo };
}
const ev = async (page, fn, arg) => { await page.evaluate(pageLib); return page.evaluate(({ fn, arg }) => window.__hw[fn](arg), { fn, arg }); };

// ---------------------------------------------------------------- thao tác
let DIALOGS = [];
let SHOT_PREFIX = null; // khi khác null, hộp thoại được chụp với tên này trước khi bấm OK
async function login(page) {
  await page.goto(ADMIN, { waitUntil: 'domcontentloaded' });
  await sleep(1500);
  if (await page.getByText('Sản phẩm', { exact: true }).count()) {
    log('  Đã ở trong trang quản trị, bỏ qua bước đăng nhập');
    return;
  }
  // Ô mật khẩu có type="password" (hiện dấu chấm, ảnh P7_01); ô email lấy ô nhập đầu tiên đang hiện, không phải ô mật khẩu.
  // Không lọc theo type="email" / type="text": Ô không ghi thuộc tính type thì không khớp các selector đó (lần chạy 01:07:30).
  const pw = page.locator('input[type="password"]:visible').first();
  await pw.waitFor({ timeout: 15000 });
  const email = page.locator('input:visible:not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="submit"])').first();
  await email.fill(ACC.email);
  await pw.fill(ACC.pw);
  await page.getByRole('button', { name: /^login$|đăng nhập/i }).first().click();
  await sleep(2000);
  log(`  Đăng nhập: Tiêu đề thấy được sau khi bấm Login: ${(await ev(page, 'headings')).join(' | ') || '(không có)'}`);
}
async function goProducts(page) {
  await page.getByText('Sản phẩm', { exact: true }).first().click();
  await page.waitForSelector('table', { timeout: 10000 });
  await sleep(1200);
}
async function reloadToProducts(page, note) {
  await page.reload({ waitUntil: 'domcontentloaded' });
  await sleep(1500);
  const h = (await ev(page, 'headings')).join(' | ');
  if (note) log(`  Sau khi tải lại trang: URL ${page.url()}, tiêu đề thấy được: ${h || '(không có)'}`);
  await goProducts(page);
}
const rowsLoc = (page) => page.locator('table:has(th:has-text("Tên SP")) tbody tr');
async function clickEdit(page, idx) {
  await rowsLoc(page).nth(idx).getByText('Sửa', { exact: true }).click();
  await sleep(1200);
  return ev(page, 'markForm');
}
async function setField(page, k, v) {
  const loc = page.locator(`[data-hw="${k}"]`);
  if (k === 'cat') await loc.selectOption({ label: v });
  else await loc.fill(String(v));
}
async function submit(page) {
  DIALOGS = [];
  await page.locator('[data-hw="submit"]').click();
  await sleep(2000);
}
const fmtRow = (r) => `"${r.name}" | ${r.price} | ảnh alt="${r.imgAlt}" src=${r.imgSrc.slice(0, 70)}`;
function diffTables(before, after, label) {
  const out = [];
  if (!after) { out.push(`  ${label}: Không đọc được bảng`); return out; }
  if (after.length !== before.length) out.push(`  ${label}: Số dòng đổi từ ${before.length} thành ${after.length}`);
  for (let i = 0; i < Math.max(before.length, after.length); i++) {
    const b = before[i]; const a = after[i];
    if (!b || !a) { out.push(`  ${label}: Dòng ${i + 1}: ${b ? 'mất' : 'mới'}: ${fmtRow(a || b)}`); continue; }
    const ch = [];
    if (a.name !== b.name) ch.push(`tên "${b.name}" -> "${a.name}"`);
    if (a.price !== b.price) ch.push(`giá ${b.price} -> ${a.price}`);
    if (a.imgSrc !== b.imgSrc) ch.push(`ảnh ${b.imgSrc.slice(0, 50)} -> ${a.imgSrc.slice(0, 50)}`);
    if (ch.length) out.push(`  ${label}: Dòng ${i + 1}: ${ch.join('; ')}`);
  }
  if (!out.length) out.push(`  ${label}: Bảng không đổi so với trước khi sửa`);
  return out;
}

// ---------------------------------------------------------------- 7 trường hợp
// target: tên sản phẩm mẫu (tìm trong bảng sau khi tải lại); change(form) trả về các ô cần đổi
const CASES = [
  { code: 'E1', title: 'Chỉ đổi giá (sản phẩm mẫu)', target: 'MacBook Pro M3',
    change: (f) => ({ price: String(Number(String(f.values.price).replace(/\D/g, '')) + 111) }) },
  { code: 'E2', title: 'Chỉ đổi tên (sản phẩm mẫu)', target: 'Bàn phím cơ Keychron Q1',
    change: (f) => ({ name: `${f.values.name} HW03 E2` }) },
  { code: 'E3', title: 'Chỉ đổi URL ảnh (sản phẩm mẫu)', target: 'Tai nghe AirPods Pro 2', change: () => ({ url: NEW_URL }) },
  { code: 'E4', title: 'Chỉ đổi mô tả (sản phẩm mẫu)', target: 'Samsung Galaxy S24 Ultra',
    change: () => ({ desc: `Mô tả sửa bởi HW03 E4 (${RUN_ID})` }) },
  { code: 'E5', title: 'Chỉ đổi danh mục (sản phẩm mẫu)', target: 'iPhone 15 Pro Max',
    change: (f) => ({ cat: f.options.find((o) => o && o !== f.values.cat) }) },
  { code: 'E6', title: 'Đổi cả 5 ô (sản phẩm mới tạo trong script)', target: 'HW03 E6 sản phẩm thử', create: true,
    change: (f) => ({ name: 'HW03 E6 sản phẩm thử (đã sửa)', price: '1234567', url: NEW_URL, desc: 'Mô tả E6 đã sửa',
      cat: f.options.find((o) => o && o !== f.values.cat) }) },
  { code: 'E7', title: 'Sửa giá hai sản phẩm liên tiếp, không tải lại trang giữa hai lần', target: 'iPhone 15 Pro Max',
    second: 'Samsung Galaxy S24 Ultra', change: (f) => ({ price: String(Number(String(f.values.price).replace(/\D/g, '')) + 222) }) },
  // E8 (thêm sau lần chạy 01:14:01): Giống P4, sửa cùng một sản phẩm hai lần liền, không tải lại trang.
  //   Lần 1 đổi URL ảnh và danh mục; lần 2 chỉ đổi mô tả. Xem form lần 2 hiện giá trị mới hay cũ, và sau khi tải lại
  //   thì URL ảnh, danh mục của lần 1 còn không.
  { code: 'E8', title: 'Sửa cùng một sản phẩm hai lần liền, không tải lại trang (như P4)', target: 'Tai nghe AirPods Pro 2',
    sameTwice: true,
    change: (f) => ({ url: 'https://placehold.co/300x300/png?text=HW03+E8', cat: f.options.find((o) => o && o !== f.values.cat) }) },
];

async function createProduct(page, name) {
  const f = await ev(page, 'markForm');
  log(`  Tạo sản phẩm "${name}" bằng form "${f.title}" (nút "${f.submit}")`);
  await setField(page, 'name', name);
  await setField(page, 'price', '1000000');
  // URL ban đầu khác URL sẽ đổi ở bước 3 (URL ảnh bàn phím trong flow_09)
  await setField(page, 'url', 'https://product.hstatic.net/200000420363/product/tinhocngoisao.com1__70__43ded99a314146faa022ee7a4be21884_master.png');
  await setField(page, 'desc', 'Mô tả E6 ban đầu');
  const other = f.options.find((o) => o && o !== f.values.cat);
  if (other) await setField(page, 'cat', other);
  await submit(page);
  if (DIALOGS.length) log(`  Hộp thoại khi tạo: ${DIALOGS.join(' / ')}`);
}

async function runCase(page, c) {
  log(`\n=== ${c.code}: ${c.title} | sản phẩm "${c.target}"`);
  await reloadToProducts(page, c.code === 'E1');
  if (c.create) { await createProduct(page, c.target); await reloadToProducts(page, false); }
  const before = await ev(page, 'readTable');
  const idx = before ? before.findIndex((r) => r.name === c.target) : -1;
  if (idx < 0) { log(`  Bỏ qua: Không thấy dòng "${c.target}" trong bảng (cần reset DB trước khi chạy)`); return null; }
  log(`  Bảng trước khi sửa (${before.length} dòng):`); before.forEach((r, i) => log(`    ${i + 1}. ${fmtRow(r)}`));

  const f0 = await clickEdit(page, idx);
  log(`  Bấm "Sửa" dòng ${idx + 1}: Form ở ${f0.where}, tiêu đề "${f0.title}", nút lưu "${f0.submit}"`);
  log(`  Giá trị form vừa mở: ${JSON.stringify(f0.values)}`);
  await ev(page, 'scrollTo', 'form'); await page.bringToFront(); await sleep(300);
  await shot(`${c.code}_1_form_opened`);

  const ch = c.change(f0);
  for (const [k, v] of Object.entries(ch)) { if (v != null) await setField(page, k, v); }
  log(`  Đổi: ${JSON.stringify(ch)}`);
  await ev(page, 'scrollTo', 'form'); await sleep(300);
  await shot(`${c.code}_2_form_changed`);

  SHOT_PREFIX = `${c.code}_3_dialog`;
  await submit(page);
  SHOT_PREFIX = null;
  log(`  Hộp thoại sau khi lưu: ${DIALOGS.length ? DIALOGS.join(' / ') : '(không có)'}`);

  if (c.sameTwice) {
    const fr = await clickEdit(page, idx);
    log(`  Bấm "Sửa" lại đúng dòng ${idx + 1} (chưa tải lại): Form hiện ${JSON.stringify(fr.values)}`);
    const stale = Object.entries(ch).filter(([k, v]) => v != null && fr.values[k] !== v).map(([k]) => k);
    log(`  Ô của lần 1 mà form lần 2 không hiện giá trị mới: ${stale.length ? stale.join(', ') : '(không có)'}`);
    await ev(page, 'scrollTo', 'form'); await sleep(300);
    await shot(`${c.code}_3c_form_reopened`);
    ch.desc2 = `Mô tả sửa lần 2 bởi HW03 E8 (${RUN_ID})`;
    await setField(page, 'desc', ch.desc2);
    log(`  Lần 2 chỉ đổi mô tả: "${ch.desc2}"`);
    SHOT_PREFIX = `${c.code}_3d_dialog`;
    await submit(page);
    SHOT_PREFIX = null;
    log(`  Hộp thoại sau lần lưu thứ hai: ${DIALOGS.length ? DIALOGS.join(' / ') : '(không có)'}`);
  }

  if (c.second) {
    const t1 = await ev(page, 'readTable');
    const idx2 = before.findIndex((r) => r.name === c.second);
    const f1 = await clickEdit(page, idx2);
    const ch2 = { price: String(Number(String(f1.values.price).replace(/\D/g, '')) + 222) };
    log(`  Lần sửa thứ hai: Dòng ${idx2 + 1} ("${c.second}" trước khi sửa; bảng lúc này ghi "${t1 && t1[idx2] ? t1[idx2].name : '?'}"),`
      + ` form vừa mở: ${JSON.stringify(f1.values)}; đổi: ${JSON.stringify(ch2)}`);
    await setField(page, 'price', ch2.price);
    SHOT_PREFIX = `${c.code}_3b_dialog`;
    await submit(page);
    SHOT_PREFIX = null;
    log(`  Hộp thoại sau lần lưu thứ hai: ${DIALOGS.length ? DIALOGS.join(' / ') : '(không có)'}`);
    ch.second = { idx: idx2, ...ch2 };
  }

  const after = await ev(page, 'readTable');
  diffTables(before, after, 'Ngay sau khi lưu (chưa tải lại)').forEach((l) => log(l));
  await ev(page, 'scrollTo', 'table'); await sleep(300);
  await shot(`${c.code}_4_table_after_save`);

  await reloadToProducts(page, true);
  const reloaded = await ev(page, 'readTable');
  diffTables(before, reloaded, 'Sau khi tải lại trang').forEach((l) => log(l));
  await ev(page, 'scrollTo', 'table'); await sleep(300);
  await shot(`${c.code}_5_table_after_reload`);

  const f2 = await clickEdit(page, idx);
  log(`  Bấm "Sửa" lại dòng ${idx + 1} sau khi tải lại: ${JSON.stringify(f2.values)}`);
  await ev(page, 'scrollTo', 'form'); await sleep(300);
  await shot(`${c.code}_6_form_after_reload`);

  const saved = {};
  for (const [k, v] of Object.entries(ch)) {
    if (k === 'second' || v == null) continue;
    const fk = k === 'desc2' ? 'desc' : k;
    const got = fk === 'price' ? String(f2.values.price).replace(/\D/g, '') : f2.values[fk];
    saved[k] = got === String(v) ? 'Đã lưu' : `Không lưu (form sau khi tải lại: "${got}")`;
  }
  if (ch.second) {
    const f3 = await clickEdit(page, ch.second.idx);
    const got = String(f3.values.price).replace(/\D/g, '');
    saved['giá lần 2'] = got === ch.second.price ? 'Đã lưu' : `Không lưu (form sau khi tải lại: "${got}")`;
    const b2 = before[ch.second.idx].name; const r2 = reloaded && reloaded[ch.second.idx] ? reloaded[ch.second.idx].name : '?';
    saved['tên sản phẩm sửa lần 2 (không đổi tên)'] = r2 === b2 ? 'Giữ nguyên' : `BỊ ĐỔI sau khi tải lại: "${b2}" -> "${r2}"`;
    await shot(`${c.code}_7_second_form_after_reload`);
  }
  const otherChanged = diffTables(before, after, '').some((l) => /Dòng (?!0)/.test(l)
    && !new RegExp(`Dòng ${idx + 1}:`).test(l) && !(ch.second && new RegExp(`Dòng ${ch.second.idx + 1}:`).test(l)));
  const otherChangedReload = diffTables(before, reloaded, '').some((l) => /Dòng /.test(l)
    && !new RegExp(`Dòng ${idx + 1}:`).test(l) && !(ch.second && new RegExp(`Dòng ${ch.second.idx + 1}:`).test(l)));
  log(`  Kết quả: ${JSON.stringify(saved)}; dòng khác đổi ngay sau khi lưu: ${otherChanged ? 'Có' : 'Không'};`
    + ` dòng khác đổi sau khi tải lại: ${otherChangedReload ? 'Có' : 'Không'}`);
  return { code: c.code, title: c.title, saved, otherChanged, otherChangedReload, dialogs: DIALOGS.slice() };
}

// ---------------------------------------------------------------- main
(async () => {
  log(`\n===== Lần chạy ${new Date().toLocaleString('vi-VN')} | ${process.argv.slice(2).join(' ')} | ${ADMIN}`);
  LAUNCH_MS = Date.now();
  const browser = await chromium.launch({ channel: 'chrome', headless: false, args: ['--start-maximized'] });
  const ctx = await browser.newContext({ viewport: null });
  const page = await ctx.newPage();
  page.on('dialog', async (d) => {
    DIALOGS.push(`${d.type()}: "${d.message()}"`);
    if (SHOT_PREFIX) { await sleep(400); await shot(SHOT_PREFIX); }
    await d.accept().catch(() => {});
  });
  const results = [];
  try {
    try { await login(page); } catch (e) {
      log(`  Lỗi khi đăng nhập: ${String(e.message || e).split('\n')[0]}`);
      log(`  URL lúc lỗi: ${page.url()}; tiêu đề thấy được: ${(await ev(page, 'headings').catch(() => [])).join(' | ') || '(không có)'}`);
      await shot('E0_login_error');
      throw e;
    }
    for (const c of CASES) {
      if (ONLY.length && !ONLY.includes(c.code)) continue;
      try { const r = await runCase(page, c); if (r) results.push(r); }
      catch (e) { log(`  Lỗi script ở ${c.code}: ${String(e.message || e).split('\n')[0]}`); }
    }
  } finally {
    log('\n===== Tổng hợp (kết quả nháp, sinh viên xem ảnh để chốt)');
    log(['Mã', 'Trường hợp', 'Ô đã đổi: lưu hay không', 'Dòng khác đổi ngay sau lưu', 'Dòng khác đổi sau tải lại', 'Hộp thoại'].join('\t'));
    for (const r of results) {
      log([r.code, r.title, Object.entries(r.saved).map(([k, v]) => `${k}: ${v}`).join('; '),
        r.otherChanged ? 'Có' : 'Không', r.otherChangedReload ? 'Có' : 'Không', r.dialogs.join(' / ') || '(không có)'].join('\t'));
    }
    log('Nhắc: Reset DB sau khi chạy (cd backend && node database.js).');
    await sleep(1500);
    await browser.close();
    if (LOG_WS) LOG_WS.end();
  }
})();
