# 📱 Mobile Plan — Data Analyst Academy

> **Cho AI agent (Antigravity):** đọc `AGENTS.md` ở root TRƯỚC. Tuân thủ design system:
> chỉ dùng CSS variables / semantic token (`--surface-*`, `--text-*`, `--brand`, `--border`,
> `--type-*`, `--radius-*`, `--header-h`…), KHÔNG hardcode màu/px rời rạc. Không phá desktop.
>
> Mục tiêu: app dùng mượt trên **mobile (≤ 480px)** và **tablet (≤ 768px)**, giữ nguyên desktop.
> Thực thi tuần tự Phase 0 → 3. Mỗi task có **Acceptance** — chỉ chuyển task khi đạt.

---

## Bối cảnh kỹ thuật (đã audit)

- Stack: React 18 + Vite, deploy GitHub Pages, `vite.config.js` có `base: '/data-analyst-academy/'`.
- `index.html` **đã có** `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- `src/styles.css` **chưa có `@media` nào** → layout đang fix cứng cho desktop.
- **Cạm bẫy quan trọng:** Header và nhiều view dùng **inline style** (vd `minWidth: 200`).
  CSS `@media` KHÔNG override được inline style. → Với component inline-style, đổi layout bằng
  **JS hook `useMediaQuery`** (render khác nhau theo bề rộng). Với phần dùng `className` hoặc
  token toàn cục, dùng `@media` trong CSS.
- Token sẵn có: `--header-h: 56px`, `--sidebar-w: 450px`, `--content-max: 1280px`;
  `--type-display/h2/h3/body` build từ `--text-3xl/2xl/xl/base` (trong `tokens/typography.css`).
- Atlas dùng `react-force-graph-2d` (có ref method `zoomToFit(ms, padding)`, hỗ trợ touch sẵn).
- Classes đã tồn tại trong header: `daa-lockup`, `daa-legend` (hiện chưa có rule responsive).

**Breakpoints thống nhất:** `768px` (tablet) và `480px` (mobile). Dùng đúng 2 mốc này xuyên suốt.

---

## Phase 0 — Setup

**Task 0.1 — Nhánh & chạy thử**
- Tạo branch `feat/mobile-responsive`.
- `npm install` → `npm run dev`. Mở DevTools > Device toolbar, test ở **390px** (iPhone 12) và **768px** (iPad).
- *Acceptance:* app chạy local, bạn quan sát được lỗi tràn header/graph ở 390px.

**Task 0.2 — Hook `useMediaQuery`**
- Tạo `src/useMediaQuery.js`:
  ```js
  import { useState, useEffect } from 'react';
  export function useMediaQuery(query) {
    const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches;
    const [match, setMatch] = useState(get);
    useEffect(() => {
      const m = window.matchMedia(query);
      const on = () => setMatch(m.matches);
      on();
      m.addEventListener('change', on);
      return () => m.removeEventListener('change', on);
    }, [query]);
    return match;
  }
  // tiện dùng
  export const useIsMobile = () => useMediaQuery('(max-width: 480px)');
  export const useIsTablet = () => useMediaQuery('(max-width: 768px)');
  ```
- *Acceptance:* import được, không lỗi SSR (guard `typeof window`).

**Task 0.3 — Lớp CSS responsive toàn cục**
- Tạo `src/tokens/responsive.css`, import ở CUỐI danh sách `@import` trong `src/styles.css`
  (sau `base.css`) để override token.
- *Acceptance:* file rỗng có comment, đã import, app vẫn build.

---

## Phase 1 — Responsive layout (Cấp 1) — *ưu tiên cao nhất, ~80% giá trị*

**Task 1.1 — Token co giãn theo màn hình** (`tokens/responsive.css`)
- Trong `@media (max-width: 768px)`: giảm `--header-h` (vd 52px), `--content-max: 100%`,
  và downscale type ramp (giảm `--text-3xl`, `--text-2xl`, `--text-xl` ~15–20%).
- Trong `@media (max-width: 480px)`: giảm thêm type ramp + spacing scale nếu cần.
- *Acceptance:* ở 390px, tiêu đề `Roadmap`/`Lessons` không còn quá to/tràn; desktop không đổi.

**Task 1.2 — Header responsive** (`src/views/AppHeader.jsx` + `tokens/responsive.css`)
- Dùng `useIsTablet()` / `useIsMobile()`:
  - **Ẩn `daa-legend`** (6 chấm module) ở ≤ 768px — qua CSS: `@media(max-width:768px){.daa-legend{display:none}}` (legend dùng className nên CSS đủ).
  - Bỏ `minWidth: 200` ở 2 cụm trái/phải khi mobile (thay bằng `minWidth: 0`) để không đẩy tràn.
  - **SegmentedTabs icon-only** ở ≤ 480px: truyền prop để ẩn label. Sửa `SegmentedTabs.jsx` nhận
    prop `iconOnly` (khi true thì không render `{it.label}`, padding co còn `0 10px`). Trong
    AppHeader truyền `iconOnly={isMobile}`.
  - Lockup: ở ≤ 480px ẩn phần chữ (`daa-lockup__name`/`__eyebrow`), chỉ giữ logo.
  - Giảm `padding` header còn `0 12px` ở mobile.
- *Acceptance:* ở 390px header gọn trên 1 hàng, KHÔNG tràn ngang, vẫn đủ: logo · 4 tab (icon) · VI/EN · theme.

**Task 1.3 — LessonsView responsive** (`src/views/LessonsView.jsx`)
- Grid card: ở ≤ 480px về **1 cột** (hoặc `minmax(150px,1fr)`), giảm `gap`.
- Padding ngoài `40px 32px` → `20px 14px` ở mobile.
- Reading view: `padding: 36` → `18px 14px`; `maxWidth: 760` giữ nguyên (đã co theo `%`).
- Header thanh reading (nút Back / Mark): cho `flex-wrap`, hạ size; đảm bảo nút cao ≥ 44px.
- *Acceptance:* đọc bài 1 cột, không scroll ngang, nút bấm đủ to cho ngón tay.

**Task 1.4 — PathsView & ReviseView responsive**
- Paths: giảm `padding 48px 32px`→`28px 16px`; timeline `marginLeft 24`/`paddingLeft 48` → nhỏ lại; card `padding 22`→`16`.
- Revise: grid `minmax(300px,1fr)` → 1 cột ở ≤ 480px; padding nhỏ lại.
- *Acceptance:* cả 2 view không tràn ngang ở 390px.

**Task 1.5 — Chống tràn ngang toàn cục**
- Thêm vào `responsive.css`: `@media(max-width:768px){ html,body{ overflow-x:hidden } }`.
- Soát mọi `width`/`minWidth` cố định > 360px trong các view; đổi sang `max-width` + `%`.
- *Acceptance:* không có thanh cuộn ngang ở bất kỳ tab nào, mọi mốc 360/390/414/768.

---

## Phase 2 — Atlas cho mobile (Cấp 2)

**Task 2.1 — Auto fit-to-width graph** (`src/views/AtlasView.jsx`)
- Lấy `ref` của `<ForceGraph2D>` (nếu chưa có). Sau khi graph ổn định và khi resize, gọi
  `ref.current.zoomToFit(400, 40)` để toàn bộ node lọt khung. Đặt trong `useEffect` phụ thuộc
  kích thước container + `useIsTablet()`.
- Đảm bảo `enableZoomInteraction` / pan vẫn bật (đang bật) → cảm ứng pinch-zoom & kéo hoạt động.
- *Acceptance:* mở Atlas ở 390px thấy được TẤT CẢ cụm node vừa khung, pinch-zoom & kéo mượt.

**Task 2.2 — Sidebar bài học full-width trên mobile**
- Sidebar Atlas đang `width: var(--sidebar-w)` (450px), `maxWidth: 92%`. Ở ≤ 480px cho `width: 100%`,
  `maxWidth: 100%` (panel trượt che full màn khi đọc bài). Nút đóng (X) ≥ 44px.
- *Acceptance:* chọn node → panel đọc chiếm trọn màn, đóng lại quay về graph dễ dàng.

**Task 2.3 — (Tùy chọn) Mặc định tab thân thiện mobile**
- Cân nhắc: lần đầu mở trên mobile, default `tab='lessons'` thay vì `atlas` (danh sách dễ đọc hơn
  graph trên màn nhỏ). Có thể đọc `useIsMobile()` trong `App.jsx` để set initial tab.
- *Acceptance:* (nếu làm) mobile mở vào Lessons; desktop vẫn mở Atlas. Đừng ép — chỉ là default lần đầu.

---

## Phase 3 — PWA / Installable (Cấp 3)

**Task 3.1 — Cài & cấu hình `vite-plugin-pwa`**
- `npm i -D vite-plugin-pwa`.
- Trong `vite.config.js` thêm plugin với `registerType: 'autoUpdate'` và `manifest`:
  ```js
  import { VitePWA } from 'vite-plugin-pwa';
  // base hiện tại: '/data-analyst-academy/'
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['logo-mark-light.png', 'logo-mark-dark.png'],
    manifest: {
      name: 'Data Analyst Academy',
      short_name: 'DA Academy',
      start_url: '/data-analyst-academy/',
      scope: '/data-analyst-academy/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#0E7C6F',           // --brand
      icons: [
        { src: 'logo-mark-light.png', sizes: '192x192', type: 'image/png' },
        { src: 'logo-mark-light.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
  })
  ```
- *Lưu ý:* `start_url`/`scope` PHẢI khớp `base`. Nếu icon hiện chưa đủ 512×512, tạo thêm
  `public/icon-512.png` & `public/icon-192.png` (vuông, nền an toàn cho maskable).

**Task 3.2 — Meta theme-color & iOS** (`index.html`)
- Thêm `<meta name="theme-color" content="#0E7C6F">` và
  `<meta name="apple-mobile-web-app-capable" content="yes">`,
  `<link rel="apple-touch-icon" href="...icon-192.png">`.
- *Acceptance:* `npm run build && npm run preview` → Chrome DevTools > Application > Manifest
  không báo lỗi; có nút **Install** / "Add to Home Screen".

**Task 3.3 — Offline cơ bical**
- Workbox (qua plugin) tự precache asset build. Kiểm tra: build → preview → tắt mạng (DevTools >
  Network > Offline) → reload vẫn mở được app (đọc được bài đã cache).
- *Acceptance:* mở lại được khi offline; lần deploy mới tự cập nhật (autoUpdate).

---

## Phase 4 — QA & Acceptance tổng

**Ma trận test** (Chrome DevTools device + máy thật nếu có):

| Mốc | Thiết bị đại diện | Phải đạt |
|---|---|---|
| 360px | Android nhỏ | Không tràn ngang; header gọn; đọc bài 1 cột |
| 390px | iPhone 12/13 | Atlas fit khung; toggle VI/EN + theme bấm được |
| 414px | iPhone Plus | Card Lessons xếp đẹp |
| 768px | iPad dọc | Legend ẩn hợp lý; layout chuyển mượt giữa 2 mốc |
| ≥1024px | Desktop | **Không thay đổi gì so với hiện tại** (regression check) |

**Checklist:**
- [ ] Không có horizontal scroll ở mọi tab/mốc.
- [ ] Touch target ≥ 44×44px (nút, tab, node đóng panel).
- [ ] Toggle ngôn ngữ (VI/EN) và theme (sáng/tối) hoạt động trên mobile.
- [ ] Atlas: pinch-zoom, kéo pan, chọn node → panel full-width.
- [ ] Desktop không regression (so layout trước/sau).
- [ ] (Cấp 3) Cài được lên màn hình chính; mở offline được.

---

## Thứ tự khuyến nghị & ước lượng

1. **Phase 0 + Phase 1** — bắt buộc, đem lại 80% trải nghiệm (ưu tiên 1).
2. **Phase 2** — Atlas fit-to-width (ưu tiên 2; sidebar full-width là phần đáng giá nhất).
3. **Phase 3** — PWA (tùy chọn, làm khi đã ổn responsive).

**Quy ước commit:** mỗi Phase một (hoặc vài) commit nhỏ, message rõ:
`mobile: responsive header (Task 1.2)`. Mở PR cuối cùng từ `feat/mobile-responsive`.

**Nguyên tắc xuyên suốt:** không hardcode màu/size — luôn qua token; không sửa nội dung bài học
(content `{vi,en}` ở `src/content/*`); không phá desktop. Đọc lại `AGENTS.md` khi nghi ngờ.
