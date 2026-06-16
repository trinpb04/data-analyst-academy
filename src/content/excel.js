// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
export const excelLessons = {
  'ex-formulas': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Bộ công thức cốt lõi (Lookup, Logic, Text, Date) quyết định sự nhạy bén của bạn với dữ liệu hằng ngày.',
      en: 'The core formula toolkit (Lookup, Logic, Text, Date) that determines how fluent you are with everyday data.',
    },
    body: [
      { h: { vi: 'IFERROR — Vị cứu tinh của các bảng tính xấu', en: 'IFERROR — the rescuer of ugly spreadsheets' },
        p: { vi: 'Một file Excel xuất sắc là file không hiện lỗi #N/A hay #DIV/0! trước mặt sếp đang xem.', en: 'An excellent Excel file is one that never flashes #N/A or #DIV/0! at the manager looking over your shoulder.' } },
      { code: '=IFERROR(VLOOKUP(A2, Customers!A:D, 4, FALSE), "Not registered")', lang: 'excel' },
      { h: { vi: 'INDEX & MATCH (và bản thay thế XLOOKUP)', en: 'INDEX & MATCH (and the XLOOKUP replacement)' },
        p: { vi: 'VLOOKUP phổ biến nhất nhưng nhiều giới hạn: chỉ tra từ trái qua phải, dễ gãy khi chèn cột, tốn tài nguyên nếu chọn nguyên cột (A:Z). Bạn phải làm chủ INDEX + MATCH.', en: 'VLOOKUP is the most common but the most limited: it only looks left-to-right, breaks when columns are inserted, and is wasteful on full-column references (A:Z). You must master INDEX + MATCH.' } },
      { list: [
        [{ vi: 'MATCH', en: 'MATCH' }, { vi: 'Trả về "vị trí" (số dòng) của một giá trị trong một mảng.', en: 'Returns the position (row number) of a value within an array.' }],
        [{ vi: 'INDEX', en: 'INDEX' }, { vi: 'Nhìn vào vị trí đó và lôi giá trị ra.', en: 'Looks at that position and pulls the value out.' }],
        [{ vi: 'Sự kết hợp', en: 'The combo' }, { vi: '`INDEX(Cột_Cần_Lấy, MATCH(Giá_Trị_Tìm, Cột_Tìm_Kiếm, 0))`', en: '`INDEX(ReturnColumn, MATCH(LookupValue, LookupColumn, 0))`' }],
      ]},
      { code: '=INDEX(Sales[Revenue],\n       MATCH("Laptop Dell", Sales[Product_Name], 0))', lang: 'excel' },
      { note: { vi: 'XLOOKUP (Excel 365) thay thế cả VLOOKUP lẫn INDEX/MATCH với cú pháp thân thiện: `=XLOOKUP(Giá_trị_tìm, Cột_tìm, Cột_trả_về, "Lỗi nếu ko thấy")`. Nếu môi trường dùng bản mới, hãy ưu tiên XLOOKUP.', en: 'XLOOKUP (Excel 365) replaces both VLOOKUP and INDEX/MATCH with a friendlier syntax: `=XLOOKUP(lookup_value, lookup_array, return_array, "if_not_found")`. If your environment is on the new build, prefer XLOOKUP.' } },
    ],
  },
  'ex-pivot': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Công cụ báo cáo mạnh nhất của Excel — tổng hợp hàng triệu dòng chỉ bằng kéo thả.',
      en: 'Excel’s most powerful reporting tool — aggregate millions of rows with drag-and-drop.',
    },
    body: [
      { h: { vi: 'Thiết kế báo cáo với Pivot Table', en: 'Designing reports with PivotTables' },
        p: { vi: 'Bản chất Pivot Table tương đương lệnh GROUP BY trong SQL. Người giỏi Pivot Table giải quyết được 80% yêu cầu báo cáo nhanh.', en: 'A PivotTable is essentially SQL’s GROUP BY. Someone fluent in PivotTables can handle 80% of quick reporting requests.' } },
      { list: [
        [{ vi: 'Rows', en: 'Rows' }, { vi: 'Trục Y của bạn — các biến phân loại (ví dụ: tên nhóm hàng).', en: 'Your Y axis — categorical variables (e.g. product group name).' }],
        [{ vi: 'Columns', en: 'Columns' }, { vi: 'Trục X — thường là Thời gian (Tháng, Quý) hoặc Phân khúc.', en: 'Your X axis — usually time (month, quarter) or a segment.' }],
        [{ vi: 'Values', en: 'Values' }, { vi: 'Các metric cần tính (Sum, Count, Average).', en: 'The metrics to compute (Sum, Count, Average).' }],
        [{ vi: 'Slicers', en: 'Slicers' }, { vi: 'Bộ "Filter" trực quan, giúp người xem tự tương tác (VD: click chọn vùng Miền Nam).', en: 'A visual filter that lets viewers interact themselves (e.g. click to pick the South region).' }],
      ]},
      { h: { vi: '% of Grand Total thay vì số tuyệt đối', en: '% of Grand Total instead of absolute numbers' },
        p: { vi: 'Insight thực sự hiếm khi nằm ở con số tuyệt đối. Nó nằm ở tỷ lệ phần trăm.', en: 'Real insight rarely lives in an absolute number. It lives in the percentage.' } },
      { note: { vi: 'Mẹo thực chiến: chuột phải vào cột Values > Show Values As > % of Column Total. Đột nhiên bạn thấy "À, nhóm hàng này doanh thu thấp nhưng đóng góp tới 80% biên lợi nhuận của chi nhánh!"', en: 'Field tip: right-click a Values column > Show Values As > % of Column Total. Suddenly you see “Ah, this group has low revenue but contributes 80% of the branch’s margin!”' } },
    ],
  },
  'ex-pq': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Power Query (Get & Transform) — tự động hóa việc dọn dẹp dữ liệu, thay thế vĩnh viễn copy-paste tay.',
      en: 'Power Query (Get & Transform) — automate data cleaning and retire manual copy-paste for good.',
    },
    body: [
      { h: { vi: 'ETL thu nhỏ', en: 'A miniature ETL' },
        p: { vi: 'Power Query chính là bước "Extract" và "Transform" của quy trình ETL. Bạn kéo dữ liệu từ CSV 5 triệu dòng, dọn sạch, và trả về 100 dòng gọn gàng ra Excel.', en: 'Power Query is the “Extract” and “Transform” of ETL. Pull data from a 5-million-row CSV, clean it, and return a tidy 100 rows to Excel.' } },
      { list: [
        [{ vi: 'Applied Steps (Các bước đã áp dụng)', en: 'Applied Steps' }, { vi: 'Thay vì viết VBA, mọi nút bấm (Xóa cột, Split Text, Unpivot) được ghi lại thành "kịch bản". Tháng sau có file mới, chỉ cần Refresh là toàn bộ chạy lại tự động 100%.', en: 'Instead of writing VBA, every click (remove column, split text, unpivot) is recorded as a script. Next month’s file? Just hit Refresh and the whole script re-runs automatically.' }],
        [{ vi: 'Unpivot (Chuyển cột thành dòng)', en: 'Unpivot (columns to rows)' }, { vi: 'Tính năng thần thánh nhất. Hầu hết sếp làm báo cáo dạng ma trận (năm trải dài theo cột). Để đưa vào Pivot/Power BI, bạn phải làm phẳng về dạng bảng (cột Year, cột Value).', en: 'The most magical feature. Most managers build matrix reports (years spread across columns). To feed Pivot/Power BI you must flatten it into table form (a Year column, a Value column).' }],
      ]},
      { note: { vi: 'Quy tắc tối thượng: BẤT CỨ thứ gì có tính lặp lại (tháng nào cũng tải file, xóa 3 dòng đầu, tách cột tên) đều PHẢI bỏ vào Power Query.', en: 'Golden rule: ANYTHING repetitive (download the file each month, delete the top 3 rows, split the name column) MUST go into Power Query.' } },
    ],
  },
  'ex-pp': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Power Pivot: Data Modeling trong Excel. Vượt giới hạn 1 triệu dòng và liên kết nhiều bảng bằng DAX.',
      en: 'Power Pivot: data modeling inside Excel. Break the 1-million-row limit and relate tables with DAX.',
    },
    body: [
      { h: { vi: 'Cầu nối tới Power BI', en: 'The bridge to Power BI' },
        p: { vi: 'Excel thường chỉ chứa tối đa 1.048.576 dòng. Power Pivot dùng Data Model (công nghệ nén xVelocity/VertiPaq) để giữ hàng chục triệu dòng ngay trong RAM.', en: 'A normal sheet holds at most 1,048,576 rows. Power Pivot uses the Data Model (xVelocity/VertiPaq compression) to keep tens of millions of rows right in RAM.' } },
      { list: [
        [{ vi: 'Data Modeling', en: 'Data Modeling' }, { vi: 'Thay vì VLOOKUP để ghép dữ liệu, bạn nối các bảng bằng Relationship (Star Schema). Nhờ đó file Excel siêu nhẹ.', en: 'Instead of VLOOKUP to stitch data, you relate tables with relationships (star schema). That keeps the file featherweight.' }],
        [{ vi: 'DAX (Data Analysis Expressions)', en: 'DAX (Data Analysis Expressions)' }, { vi: 'Ngôn ngữ công thức cực mạnh. Một Measure DAX viết ở Power Pivot dùng lại được trên vô số báo cáo Pivot khác nhau.', en: 'A very powerful formula language. One DAX measure written in Power Pivot is reusable across countless different pivot reports.' }],
      ]},
      { code: '-- A canonical DAX measure in Power Pivot\nGross_Profit := SUMX(\n    Sales,\n    Sales[Quantity] * (Sales[Unit_Price] - Sales[Unit_Cost])\n)', lang: 'dax' },
      { note: { vi: 'Lời khuyên: Nếu định học Power BI, hãy học Data Model và DAX ngay trên Excel qua Power Pivot. Đó chính là bộ não lõi của Power BI.', en: 'Advice: if you’re heading toward Power BI, learn the Data Model and DAX right inside Excel via Power Pivot — it is literally Power BI’s core engine.' } },
    ],
  },
  'ex-adv': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Vượt mức cơ bản: những tính năng "nhỏ nhưng có võ" giúp bạn kiểm soát hoàn toàn file báo cáo.',
      en: 'Beyond the basics: small-but-mighty features that give you full control of a report file.',
    },
    body: [
      { h: { vi: 'What-If Analysis (Phân tích giả định)', en: 'What-If Analysis' },
        p: { vi: 'Dùng nhiều nhất trong Financial Modeling (mô hình tài chính) hoặc lập kế hoạch kinh doanh.', en: 'Used most in financial modeling or business planning.' } },
      { list: [
        [{ vi: 'Goal Seek', en: 'Goal Seek' }, { vi: 'Biết trước kết quả mong muốn, bắt Excel tính ngược tham số đầu vào. (Để đạt lợi nhuận 1 tỷ, cần bán bao nhiêu sản phẩm?)', en: 'Know the target result, make Excel solve backwards for the input. (To hit $1B profit, how many units must we sell?)' }],
        [{ vi: 'Data Table', en: 'Data Table' }, { vi: 'Ma trận 2 chiều mô phỏng kết quả khi thay đổi 2 biến cùng lúc (ví dụ: giá bán và chi phí marketing).', en: 'A two-way matrix simulating outcomes as two variables change at once (e.g. price and marketing spend).' }],
      ]},
      { h: { vi: 'Data Validation & Conditional Formatting', en: 'Data Validation & Conditional Formatting' },
        p: { vi: 'Tạo dashboard tương tác và an toàn mà không cần code.', en: 'Build interactive, safe dashboards without any code.' } },
      { list: [
        [{ vi: 'Data Validation (List)', en: 'Data Validation (List)' }, { vi: 'Tạo drop-down để sếp tự chọn Tháng hoặc Vùng miền, rồi dùng INDEX/MATCH lấy dữ liệu tương ứng.', en: 'Create a drop-down so a manager picks a month or region, then use INDEX/MATCH to fetch the matching data.' }],
        [{ vi: 'Conditional Formatting', en: 'Conditional Formatting' }, { vi: 'Tô màu tự động (heatmap) hoặc thêm Data Bars trực tiếp trong ô để người xem nhận ra số âm/dương trong 1 giây.', en: 'Auto color (heatmaps) or in-cell data bars so viewers spot negative/positive numbers in one second.' }],
      ]},
      { note: { vi: 'VBA/Macros từng là vua, nhưng ngày nay nếu một tác vụ quá phức tạp để dùng công thức, hãy dùng Power Query hoặc chuyển hẳn sang Python thay vì cố viết VBA.', en: 'VBA/Macros used to be king, but today if a task is too complex for formulas, reach for Power Query or move to Python rather than fighting with VBA.' } },
    ],
  },
  'ex-arrays': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Dynamic Arrays (Excel 365): một công thức "tràn" (spill) ra cả vùng kết quả — FILTER, SORT, UNIQUE thay thế cả rừng công thức phụ.',
      en: 'Dynamic Arrays (Excel 365): one formula that “spills” into a whole range — FILTER, SORT, UNIQUE replace a jungle of helper formulas.',
    },
    body: [
      { h: { vi: 'Spill — một công thức, nhiều kết quả', en: 'Spill — one formula, many results' },
        p: { vi: 'Trước đây mỗi ô một công thức. Dynamic Arrays cho một công thức tự "tràn" xuống/ngang để lấp đầy kết quả. Ô gốc gọi là anchor; tham chiếu cả vùng bằng `A2#`.', en: 'Previously one formula per cell. Dynamic Arrays let a single formula spill down/across to fill the result. The source cell is the anchor; reference the whole range with `A2#`.' } },
      { list: [
        [{ vi: 'FILTER', en: 'FILTER' }, { vi: 'Lọc một bảng theo điều kiện ngay trong công thức — không cần AutoFilter thủ công.', en: 'Filter a table by condition right in a formula — no manual AutoFilter needed.' }],
        [{ vi: 'SORT / SORTBY', en: 'SORT / SORTBY' }, { vi: 'Sắp xếp động; kết quả tự cập nhật khi dữ liệu gốc đổi.', en: 'Dynamic sorting; results auto-update when the source changes.' }],
        [{ vi: 'UNIQUE', en: 'UNIQUE' }, { vi: 'Lấy danh sách giá trị duy nhất — nền tảng cho drop-down động.', en: 'Get a distinct list of values — the basis for dynamic drop-downs.' }],
      ]},
      { code: '=SORT(\n   FILTER(Sales, Sales[Region]="South", "No data"),\n   3, -1)\n-- Filter rows where Region = South, then sort by column 3 descending', lang: 'excel' },
      { note: { vi: 'Bẫy #SPILL!: nếu vùng tràn bị chặn bởi dữ liệu khác, Excel báo lỗi #SPILL!. Hãy dọn trống vùng phía dưới/bên phải anchor. Dynamic Arrays chỉ có ở Excel 365 / 2021 — bản cũ hơn không chạy được.', en: '#SPILL! trap: if the spill range is blocked by other data, Excel throws #SPILL!. Clear the area below/right of the anchor. Dynamic Arrays exist only in Excel 365 / 2021 — older versions can’t run them.' } },
    ],
  },
  'ex-dashboard': {
    cluster: 'SPREADSHEETS',
    summary: {
      vi: 'Dashboard trong Excel: ghép PivotTable + PivotChart + Slicer + Timeline thành một bảng điều khiển tương tác mà sếp tự dùng được.',
      en: 'Excel dashboards: combine PivotTables + PivotCharts + Slicers + Timelines into one interactive control panel a manager can drive themselves.',
    },
    body: [
      { h: { vi: 'Kiến trúc 3 lớp', en: 'A three-layer architecture' },
        p: { vi: 'Một dashboard Excel bền vững luôn tách 3 lớp: dữ liệu thô (Power Query) → lớp tính toán (PivotTable/Data Model) → lớp trình bày (chart + slicer). Đừng trộn chúng trên cùng một sheet.', en: 'A durable Excel dashboard always separates three layers: raw data (Power Query) → calculation layer (PivotTable/Data Model) → presentation layer (charts + slicers). Never mix them on one sheet.' } },
      { list: [
        [{ vi: 'Slicer dùng chung', en: 'Shared slicers' }, { vi: 'Một Slicer có thể điều khiển NHIỀU PivotTable cùng lúc qua Report Connections — bấm một lần, cả dashboard đổi theo.', en: 'One slicer can drive MULTIPLE PivotTables at once via Report Connections — click once, the whole dashboard reacts.' }],
        [{ vi: 'Timeline', en: 'Timeline' }, { vi: 'Slicer chuyên cho cột ngày: kéo để lọc theo Tháng/Quý/Năm trực quan.', en: 'A slicer specialised for date columns: drag to filter by month/quarter/year visually.' }],
        [{ vi: 'KPI Cards', en: 'KPI Cards' }, { vi: 'Dùng GETPIVOTDATA hoặc CUBEVALUE để rút một con số ra ô riêng, định dạng to làm thẻ chỉ số.', en: 'Use GETPIVOTDATA or CUBEVALUE to pull a single number into its own cell, formatted large as a metric card.' }],
      ]},
      { note: { vi: 'Nguyên tắc thiết kế: mỗi dashboard nên trả lời ĐÚNG MỘT câu hỏi kinh doanh. Đặt số quan trọng nhất ở góc trên-trái (nơi mắt nhìn đầu tiên), chi tiết phụ ở dưới.', en: 'Design rule: each dashboard should answer EXACTLY ONE business question. Put the most important number top-left (where the eye lands first), supporting detail below.' } },
    ],
  },
};
