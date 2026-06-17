# AGENTS.md — Hướng dẫn cho AI Agent (Antigravity / Claude / Copilot)

> Đọc file này TRƯỚC khi sửa nội dung học. Nó mô tả chính xác cách thêm/sửa một bài học
> để node hiển thị đúng trên Knowledge Atlas mà không làm vỡ build.

## 1. Dự án là gì

**Data Analyst Academy** — encyclopedia học Data Analytics dạng interactive, build bằng
**React 18 + Vite**. Giao diện chính là một **force-directed graph** (Atlas): mỗi "node" là
một bài học, click vào hiện nội dung rich-text ở sidebar.

- Ngôn ngữ nội dung: **Tiếng Việt + thuật ngữ tiếng Anh** trong ngoặc, xưng hô với người học là **"bạn"**.
- Tiêu đề bài học (`t` trong atlas): **English title-case**.
- 6 module màu: `business` (đỏ), `excel` (xanh lá), `statistics` (tím), `sql` (xanh dương),
  `python` (xanh nhạt), `powerbi` (vàng).

## 2. Bản đồ file — content sống ở đâu

```
src/content/
  index.js        ← gộp mọi module thành object ATLAS. Sửa khi thêm FILE module mới (hiếm).
  atlasData.js    ← ĐĂNG KÝ node + toạ độ + links của graph. BẮT BUỘC sửa khi thêm bài.
  business.js     ← nội dung bài học module Business (key: bus-*)
  sql.js          ← nội dung SQL (key: sql-*)
  powerbi.js      ← nội dung Power BI (key: pbi-*)
  statistics.js   ← (stat-*)
  excel.js        ← (ex-*)
  python.js       ← (py-*)  — module sâu nhất, dùng làm mẫu chuẩn về độ chi tiết
src/views/LessonContent.jsx  ← RENDERER. Đây là nguồn chân lý về block type được hỗ trợ.
```

**Quy ước key**: `<prefix>-<slug>`, prefix theo module (`bus`, `sql`, `pbi`, `stat`, `ex`, `py`).
Key trong file content PHẢI khớp 1-1 với `id` của node trong `atlasData.js`.

## 3. Schema một bài học (object trong `*.js`)

```js
'sql-window': {
  cluster: 'SQL & DATABASES',   // PHẢI khớp đúng 1 trong các cluster.label ở atlasData.js
  summary: 'Một câu tóm tắt hiện ở đầu sidebar.',
  source: 'Nguồn tham khảo: ...',   // optional, in nghiêng cuối bài
  body: [ /* mảng các block, render theo thứ tự */ ],
}
```

### Các block type hợp lệ (chỉ những loại này — xem `LessonContent.jsx`)

| Block | Cú pháp | Dùng cho |
|---|---|---|
| Heading + prose | `{ h: 'Tiêu đề', p: 'Đoạn văn...' }` | đầu mục + giải thích |
| Prose | `{ p: '...' }` | đoạn văn đơn |
| Glossary list | `{ list: [['Thuật ngữ', 'Định nghĩa. Có thể \`code inline\`.'], ...] }` | liệt kê khái niệm |
| Code | `{ code: 'SELECT ...', lang: 'sql' }` | `lang`: `sql` \| `python` \| `dax` |
| Formula | `{ formula: 'EV = p×V − ...', caption: 'Ghi chú.' }` | công thức (mono, canh giữa) |
| Worked calc | `{ calc: 'Tiêu đề bài tính', steps: ['B1', 'B2', 'Kết quả'] }` | tính từng bước, dòng cuối bôi đậm |
| Callout | `{ note: 'Mẹo / cảnh báo / bẫy phỏng vấn.' }` | hộp nhấn mạnh viền màu module |
| Image | `{ img: '/pdf_images/p042_0.png', caption: '...' }` | ảnh trong `public/` |

**KHÔNG** tự bịa thêm key block khác — renderer bỏ qua, content sẽ không hiện.
Code highlight chỉ tô màu một số keyword (xem regex trong `highlightCode`); inline code dùng dấu `` ` ``.

## 4. Quy trình thêm MỘT bài học mới (checklist 3 bước)

1. **Viết nội dung** → thêm object vào file module tương ứng (vd `sql.js`), key duy nhất `sql-xyz`.
2. **Đăng ký node** trong `atlasData.js` → mảng `nodes`:
   ```js
   { id: 'sql-xyz', m: 'sql', t: 'Tên Tiếng Anh', x: 380, y: 545, v: 7 },
   ```
   - `m` = module id · `t` = nhãn hiển thị · `x,y` = toạ độ khởi tạo (đặt gần cluster của module,
     xem `clusters[]` để biết tâm cụm) · `v` = "độ quan trọng" 1–9 (chi phối kích thước node).
3. **Nối links** trong `atlasData.js` → mảng `links`: thêm `['node-nguồn','sql-xyz']` nối với
   ≥1 bài cùng module; thêm link cross-module nếu liên quan (vd `['pbi-time','sql-date']`).

> Bỏ bước 2 → bài học "mồ côi", không có node để click. Bỏ bước 3 → node trôi nổi, rời khỏi cụm.

## 4b. Song ngữ EN ⇄ VI (i18n)

App có **toggle ngôn ngữ** ở header (nút `VI | EN`), state lưu trong `localStorage('daa-lang')`.
Engine ở `src/i18n.jsx`:

- `LangContext` + `useLang()` → ngôn ngữ hiện tại (`'vi'` | `'en'`).
- `pick(field, lang)` → resolve một "localized field":
  - **chuỗi thường** → trả y nguyên (fallback, dùng cho module CHƯA dịch).
  - **`{ vi, en }`** → trả theo ngôn ngữ, fallback `vi` rồi `en`.
- `UI` → bảng chuỗi giao diện dùng chung (nút, tiêu đề view).

**Quy ước viết content song ngữ**: mọi field text (`summary`, `h`, `p`, `note`, `formula`,
`caption`, `calc`, từng phần tử trong `list`) viết dạng `{ vi: '…', en: '…' }`.
Riêng `steps` của block `calc` viết `{ vi: [...], en: [...] }`. Block `code` để **một chuỗi
chung** (comment nên bằng tiếng Anh cho trung lập), KHÔNG tách `{vi,en}`.

```js
'ex-arrays': {
  cluster: 'SPREADSHEETS',
  summary: { vi: '…', en: '…' },
  body: [
    { h: { vi: '…', en: '…' }, p: { vi: '…', en: '…' } },
    { list: [ [ { vi:'FILTER', en:'FILTER' }, { vi:'…', en:'…' } ] ] },
    { code: '=SORT(FILTER(...))', lang: 'excel' },   // code: chuỗi chung
    { calc: { vi:'…', en:'…' }, steps: { vi:[ '…' ], en:[ '…' ] } },
    { note: { vi: '…', en: '…' } },
  ],
}
```

**Trạng thái dịch hiện tại** (06/2026): **TẤT CẢ 6 module** (Business, Excel, Statistics, SQL,
Power BI, Python) + toàn bộ **UI chrome** đã song ngữ `{vi,en}` đầy đủ. Toggle EN/VI đổi được
mọi nội dung bài học. Khi thêm lesson mới, **viết song ngữ ngay từ đầu** (đừng để chuỗi VI thuần).

Renderer `LessonContent.jsx` đã gọi `pick()` cho mọi field, nên chỉ cần đổi data sang `{vi,en}`
là tự động chuyển ngôn ngữ — không phải sửa renderer.

## 5. Bất biến cần giữ (đừng phá)

- Mọi `id` trong `atlasData.nodes` có đúng 1 object content cùng key, và ngược lại.
- `cluster` trong content == `label` của cluster trong atlas (string khớp tuyệt đối).
- Mỗi node xuất hiện trong ≥1 cặp `links` (không để node cô lập).
- Giữ giọng văn: tiếng Việt, xưng "bạn", thuật ngữ Anh trong ngoặc, ưu tiên ví dụ thực chiến + 1 `note` "bẫy".

## 6. Verify trước khi commit

```bash
npm run dev        # mở http://localhost:5175/data-analyst-academy/ , click thử node mới
npm run build      # phải build sạch, không lỗi import/parse
```
Kiểm tra nhanh tính nhất quán id ↔ content (script gợi ý, chạy bằng Node):
xem mọi `nodes[].id` đều có lesson, và mọi lesson key đều có node.

## 7. Lịch sử mở rộng

- **2026-06**: +4 node SQL (`sql-aggregate`, `sql-pivot`, `sql-date`, `sql-quality`),
  +5 Power BI (`pbi-context`, `pbi-calc`, `pbi-time`, `pbi-interact`, `pbi-perf`),
  +4 Business (`bus-northstar`, `bus-experiment`, `bus-unit`, `bus-forecast`); đào sâu `sql-window`.
