// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Block `code` để chuỗi chung; comment DAX dùng tiếng Anh cho trung lập.
export const powerbiLessons = {
  'pbi-prep': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Data Prep (Power Query) trong Power BI — nơi làm sạch và định hình dữ liệu trước khi nạp vào bộ nhớ.',
      en: 'Data prep (Power Query) in Power BI — where you clean and shape data before loading it into memory.',
    },
    body: [
      { h: { vi: 'Power Query Editor', en: 'Power Query Editor' },
        p: { vi: 'Cùng công cụ như trong Excel, nhưng ở Power BI nó cốt yếu hơn. Đây là lớp đầu tiên của giải pháp Power BI (lớp Extract và Transform).', en: 'The same tool as in Excel, but even more central in Power BI. It’s the first layer of your Power BI solution (the Extract and Transform layer).' } },
      { list: [
        [{ vi: 'DirectQuery vs Import', en: 'DirectQuery vs Import' }, { vi: 'Import: kéo toàn bộ dữ liệu vào RAM (nhanh, full DAX). DirectQuery: query trực tiếp xuống database khi user bấm report (chậm hơn, giới hạn DAX, dùng cho real-time hoặc dữ liệu quá lớn).', en: 'Import: pull all data into RAM (fast, full DAX). DirectQuery: query the database live when the user interacts (slower, limited DAX, for real-time or very large data).' }],
        [{ vi: 'Shape of Data', en: 'Shape of the data' }, { vi: 'Dữ liệu ở Power Query phải có dạng "Tidy Data": mỗi biến một cột, mỗi quan sát một dòng.', en: 'Data in Power Query should be “tidy”: one variable per column, one observation per row.' }],
      ]},
      { note: { vi: 'Nguyên tắc vàng: gấp gọn mọi logic có thể ở phía Database (SQL). Phần còn lại làm ở Power Query. ĐỪNG BAO GIỜ dọn dữ liệu bằng Calculated Column (DAX).', en: 'Golden rule: push as much logic as possible down to the database (SQL). Do the rest in Power Query. NEVER clean data with a calculated column (DAX).' } },
    ],
  },
  'pbi-model': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Mô hình sao (Star Schema) — chìa khóa quyết định báo cáo load trong 1 giây hay 1 phút.',
      en: 'The star schema — the key that decides whether your report loads in 1 second or 1 minute.',
    },
    body: [
      { h: { vi: 'Data Modeling', en: 'Data Modeling' },
        p: { vi: 'Power BI không phải một file phẳng lớn. Nó là một cơ sở dữ liệu quan hệ thu nhỏ trong bộ nhớ (VertiPaq engine).', en: 'Power BI isn’t one big flat file. It’s a miniature in-memory relational database (the VertiPaq engine).' } },
      { list: [
        [{ vi: 'Fact Tables', en: 'Fact tables' }, { vi: 'Bảng sự kiện (Sale, Click, View). Thường dài (nhiều dòng), hẹp (ít cột), chứa các con số để cộng trừ.', en: 'Event tables (sales, clicks, views). Usually long (many rows), narrow (few columns), holding numbers to aggregate.' }],
        [{ vi: 'Dimension Tables', en: 'Dimension tables' }, { vi: 'Bảng danh mục (Khách hàng, Sản phẩm, Lịch). Thường ngắn (ít dòng), rộng (nhiều cột chữ), dùng để CẮT, LỌC và NHÓM dữ liệu.', en: 'Lookup tables (customer, product, calendar). Usually short (few rows), wide (many text columns), used to slice, filter and group.' }],
        [{ vi: 'Mối quan hệ 1-N', en: 'One-to-many relationships' }, { vi: 'Quan hệ chuẩn mực. 1 Product có N Sales. Filter flow đi từ bảng (1) xuống bảng (N).', en: 'The canonical relationship. One product has many sales. The filter flows from the “one” side down to the “many” side.' }],
      ]},
      { note: { vi: 'Lỗi thường gặp: tạo quan hệ Many-to-Many (N-N) hoặc Cross-Filter Both Directions. Nó có thể khiến DAX trả về kết quả sai hoàn toàn hoặc làm báo cáo treo.', en: 'Common mistake: creating many-to-many relationships or bidirectional cross-filtering. It can make DAX return completely wrong results or hang the report.' } },
    ],
  },
  'pbi-dax': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'DAX (Data Analysis Expressions) là ngôn ngữ tạo ra các chỉ số linh hoạt, thay đổi theo bối cảnh người dùng đang lọc (Filter Context).',
      en: 'DAX (Data Analysis Expressions) is the language for flexible metrics that change with the user’s current filter context.',
    },
    body: [
      { h: { vi: 'Measure vs. Calculated Column', en: 'Measure vs. Calculated Column' },
        p: { vi: 'Phân biệt 2 khái niệm này là bài học vỡ lòng của DAX:', en: 'Telling these two apart is DAX lesson #1:' } },
      { list: [
        [{ vi: 'Calculated Column', en: 'Calculated Column' }, { vi: 'Tính trên từng DÒNG (Row Context). Lưu xuống ổ, tốn RAM, không đổi theo Filter. (Chỉ dùng khi cần cột để thả vào Category/Axis của Slicer.)', en: 'Computes per ROW (row context). Stored on disk, costs RAM, doesn’t react to filters. (Use only when you need a column for a slicer/axis/category.)' }],
        [{ vi: 'Measure', en: 'Measure' }, { vi: 'Chỉ chứa CÔNG THỨC. Chỉ tính khi bạn kéo vào biểu đồ. Rất nhẹ, kết quả nhảy linh hoạt theo bất kỳ Filter nào (Filter Context). Luôn ưu tiên Measure.', en: 'Holds only a FORMULA. Computes only when dragged into a visual. Very light, reacts to any filter (filter context). Always prefer measures.' }],
      ]},
      { h: { vi: 'CALCULATE() — hàm định hình Filter Context', en: 'CALCULATE() — the filter-context shaper' },
        p: { vi: 'Hàm quyền lực nhất trong DAX. Khả năng thay đổi bối cảnh lọc tạo nên sức mạnh cho Power BI (ví dụ: tính "Doanh thu năm ngoái" khi báo cáo đang filter "Năm nay").', en: 'The most powerful function in DAX. Its ability to change the filter context is what makes Power BI strong (e.g. compute “last year’s revenue” while the report is filtered to “this year”).' } },
      { code: "-- Time Intelligence: year-over-year (YoY) growth\nSales_Amount = SUM(Sales[Revenue])\n\nSales_LY =\nCALCULATE(\n    [Sales_Amount],\n    SAMEPERIODLASTYEAR('Calendar'[Date])\n)\n\nSales_YoY_Growth_Pct =\nDIVIDE(\n    [Sales_Amount] - [Sales_LY],\n    [Sales_LY],\n    BLANK()\n)", lang: 'dax' },
    ],
  },
  'pbi-viz': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Data Storytelling — thiết kế báo cáo không chỉ để "trưng bày" số, mà để dẫn dắt sự chú ý và thúc đẩy hành động.',
      en: 'Data storytelling — designing reports not to “display” numbers but to direct attention and drive action.',
    },
    source: { vi: 'Nguồn tham khảo: Storytelling with Data (Cole Nussbaumer Knaflic).', en: 'Reference: Storytelling with Data (Cole Nussbaumer Knaflic).' },
    body: [
      { h: { vi: 'Decluttering (Loại bỏ sự lộn xộn)', en: 'Decluttering' },
        p: { vi: 'Bộ não con người quá tải trước biểu đồ sặc sỡ. Quy tắc của Cole Nussbaumer Knaflic: xóa hết đường viền, gridlines, đổ bóng, và màu sắc không cần thiết.', en: 'The human brain overloads on busy charts. Cole Nussbaumer Knaflic’s rule: remove all borders, gridlines, shadows and unnecessary colour.' } },
      { list: [
        [{ vi: 'Màu sắc chiến lược', en: 'Strategic colour' }, { vi: 'Đừng để Power BI tô màu cầu vồng. Tô TẤT CẢ cột màu xám nhạt, chỉ tô MÀU NHẤN (đỏ/xanh) cho cột bạn muốn stakeholder nhìn vào.', en: 'Don’t let Power BI rainbow-colour everything. Make ALL bars light grey and reserve an ACCENT colour (red/green) for the one bar you want the stakeholder to look at.' }],
        [{ vi: 'Tiêu đề báo cáo (Actionable Title)', en: 'Actionable titles' }, { vi: 'Thay vì "Biểu đồ Doanh thu", viết "Doanh thu Q3 giảm 15% do sụt giảm tại Miền Nam". Tiêu đề nên là một kết luận.', en: 'Instead of “Revenue chart”, write “Q3 revenue fell 15% due to a decline in the South”. A title should be a conclusion.' }],
      ]},
      { h: { vi: 'Quy tắc chọn biểu đồ', en: 'Chart-selection rules' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'Pie Chart', en: 'Pie chart' }, { vi: 'Tránh xa, hoặc giới hạn dưới 3 phần. Mắt người rất kém ước lượng diện tích.', en: 'Avoid it, or keep it under 3 slices. The eye is poor at judging areas.' }],
        [{ vi: 'Bar Chart (thanh ngang)', en: 'Bar chart' }, { vi: 'Dễ đọc nhất cho việc So Sánh các danh mục.', en: 'The easiest to read for comparing categories.' }],
        [{ vi: 'Line Chart (biểu đồ đường)', en: 'Line chart' }, { vi: 'Tốt nhất cho dữ liệu chuỗi thời gian (time-series).', en: 'Best for time-series data.' }],
        [{ vi: 'Scatter Plot', en: 'Scatter plot' }, { vi: 'Hoàn hảo để hiển thị mối tương quan (correlation) giữa 2 chỉ số.', en: 'Perfect for showing the correlation between two metrics.' }],
      ]},
    ],
  },
  'pbi-dax-adv': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Master class về DAX: hiểu sâu Context Transition và Time Intelligence.',
      en: 'A DAX master class: a deep look at context transition and time intelligence.',
    },
    body: [
      { h: { vi: 'Context Transition (Chuyển đổi bối cảnh)', en: 'Context Transition' },
        p: { vi: 'Lý thuyết khó nhất nhưng quan trọng nhất của DAX. Nó xảy ra khi một Row Context bị biến thành một Filter Context. Hàm CALCULATE là tác nhân chính.', en: 'The hardest but most important DAX theory. It happens when a row context is turned into a filter context. CALCULATE is the main trigger.' } },
      { code: "-- Compute total revenue per customer, THEN\n-- count how many customers spent over $10,000.\nHigh_Value_Customers =\nCOUNTROWS(\n    FILTER(\n        Customers,\n        -- [Total Sales] is a Measure (it hides a CALCULATE inside).\n        -- It triggers context transition, turning the current\n        -- customer row into a filter to compute their revenue.\n        [Total Sales] > 10000 \n    )\n)", lang: 'dax' },
      { h: { vi: 'Mẹo tối ưu DAX', en: 'DAX optimisation tips' },
        p: { vi: 'DAX rất nhanh nếu dùng đúng, và cực chậm nếu dùng sai.', en: 'DAX is very fast when used right, and brutally slow when used wrong.' } },
      { list: [
        [{ vi: 'Dùng DIVIDE thay vì /', 'en': 'Use DIVIDE instead of /' }, { vi: 'Hàm DIVIDE an toàn với lỗi chia cho 0 (trả về BLANK thay vì lỗi toàn biểu đồ).', en: 'DIVIDE is safe against divide-by-zero (returns BLANK instead of erroring the whole visual).' }],
        [{ vi: 'Tránh FILTER() trên toàn bộ bảng', en: 'Avoid FILTER() on a whole table' }, { vi: 'FILTER là hàm lặp (iterator). Đừng dùng `FILTER(Sales, Sales[Year]=2023)`. Hãy dùng thẳng `Sales[Year]=2023` trong CALCULATE — nó dùng VertiPaq engine siêu nhanh.', en: 'FILTER is an iterator. Don’t write `FILTER(Sales, Sales[Year]=2023)`. Put `Sales[Year]=2023` directly inside CALCULATE — it uses the blazing-fast VertiPaq engine.' }],
      ]},
    ],
  },
  'pbi-serv': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Power BI Service: cách đưa báo cáo từ máy cá nhân lên Cloud để chia sẻ cho sếp và tự động làm mới.',
      en: 'Power BI Service: how to publish reports from your machine to the cloud to share with leadership and auto-refresh.',
    },
    body: [
      { h: { vi: 'Hệ sinh thái Cloud của Power BI', en: 'The Power BI cloud ecosystem' },
        p: { vi: 'Bạn làm báo cáo bằng Power BI Desktop, nhưng sếp sẽ xem nó trên Power BI Service (app.powerbi.com).', en: 'You build reports in Power BI Desktop, but leadership views them in the Power BI Service (app.powerbi.com).' } },
      { list: [
        [{ vi: 'Workspace', en: 'Workspace' }, { vi: 'Giống thư mục chia sẻ. Nơi chứa Report (bản vẽ) và Dataset (dữ liệu).', en: 'Like a shared folder. It holds reports (the visuals) and datasets (the data).' }],
        [{ vi: 'Scheduled Refresh', en: 'Scheduled Refresh' }, { vi: 'Thay vì sáng nào cũng mở máy bấm F5, bạn thiết lập trên Service để nó tự lấy số liệu mới lúc 6h sáng mỗi ngày qua On-premises Data Gateway.', en: 'Instead of hitting F5 every morning, configure the Service to auto-pull fresh data at 6 a.m. daily via the On-premises Data Gateway.' }],
        [{ vi: 'Row-Level Security (RLS)', en: 'Row-Level Security (RLS)' }, { vi: 'Bảo mật cấp dòng. Sếp miền Bắc chỉ thấy số miền Bắc, sếp miền Nam chỉ thấy miền Nam TRÊN CÙNG MỘT BÁO CÁO. Rất quyền lực!', en: 'Row-level security. The North manager sees only North data, the South manager only South — ON THE SAME REPORT. Very powerful!' }],
      ]},
      { note: { vi: 'App: sau khi hoàn thiện nhiều báo cáo trong Workspace, bạn đóng gói thành một "App" chuyên nghiệp gửi cho người dùng cuối. Họ chỉ có quyền xem, không sợ lỡ tay sửa xóa.', en: 'App: once several reports are polished in a workspace, package them into a professional “App” for end users. They get view-only access, so nothing gets accidentally edited or deleted.' } },
    ],
  },
  'pbi-context': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Evaluation Context — lý thuyết nền tảng của DAX. Hiểu Row Context vs Filter Context là ranh giới giữa người "gõ công thức" và người thực sự làm chủ DAX.',
      en: 'Evaluation context — the foundational DAX theory. Understanding row vs filter context is the line between someone who “types formulas” and someone who truly masters DAX.',
    },
    body: [
      { h: { vi: 'Hai loại Context', en: 'The two contexts' },
        p: { vi: 'Mọi công thức DAX đều được tính trong một "bối cảnh" (context). Có đúng hai loại, và 90% lỗi DAX đến từ việc nhầm lẫn chúng:', en: 'Every DAX formula is evaluated in a “context”. There are exactly two, and 90% of DAX bugs come from confusing them:' } },
      { list: [
        [{ vi: 'Row Context (Bối cảnh dòng)', en: 'Row Context' }, { vi: 'DAX đang "đứng" ở một dòng cụ thể và biết giá trị các cột của dòng đó. Tự động có trong Calculated Column và bên trong iterator (SUMX, FILTER).', en: 'DAX is “standing” on a specific row and knows that row’s column values. Appears automatically in calculated columns and inside iterators (SUMX, FILTER).' }],
        [{ vi: 'Filter Context (Bối cảnh lọc)', en: 'Filter Context' }, { vi: 'Tập các bộ lọc đang áp lên mô hình, đến từ slicer, hàng/cột của visual, hoặc CALCULATE. Quyết định Measure "nhìn thấy" những dòng nào.', en: 'The set of filters applied to the model — from slicers, the visual’s rows/columns, or CALCULATE. It decides which rows a measure can “see”.' }],
      ]},
      { note: { vi: 'Điểm mấu chốt: Row Context KHÔNG tự lọc dữ liệu. Một Calculated Column viết SUM(Sales[Amount]) sẽ ra TỔNG TOÀN BẢNG ở mọi dòng — vì SUM cần Filter Context, mà Row Context không tạo ra Filter Context.', en: 'The crux: row context does NOT filter data. A calculated column with SUM(Sales[Amount]) returns the GRAND TOTAL on every row — because SUM needs a filter context, and row context doesn’t create one.' } },
      { h: { vi: 'Context Transition — cây cầu nối', en: 'Context transition — the bridge' },
        p: { vi: 'CALCULATE (và Measure, vì Measure ngầm chứa CALCULATE) biến Row Context hiện tại thành Filter Context tương đương. Đây là cơ chế khiến SUMX(Customers, [Total Sales]) tính đúng doanh thu riêng từng khách.', en: 'CALCULATE (and measures, since a measure implicitly wraps CALCULATE) turns the current row context into an equivalent filter context. This is what makes SUMX(Customers, [Total Sales]) correctly compute each customer’s own revenue.' } },
      { code: "-- Same expression, two different contexts\n-- Calculated Column (has row context): iterates row by row\nLine_Total = Sales[Qty] * Sales[Price]   -- OK, uses the current row's columns\n\n-- Measure (has filter context): reacts to slicers\nTotal_Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])\n-- SUMX creates a row context to multiply each row, then sums in the filter context", lang: 'dax' },
      { note: { vi: 'Câu thần chú: "Calculated Column tính MỘT LẦN khi refresh và lưu xuống ổ. Measure tính MỖI LẦN bạn nhìn vào visual, theo đúng filter lúc đó." Khi phân vân — luôn chọn Measure.', en: 'Mantra: “A calculated column computes ONCE on refresh and is stored. A measure computes EVERY time you look at a visual, under that moment’s filters.” When in doubt — choose a measure.' } },
    ],
  },
  'pbi-calc': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'CALCULATE engine: VAR để viết DAX sạch, iterators (SUMX) và các filter modifier (ALL, KEEPFILTERS, REMOVEFILTERS) — bộ công cụ để bẻ cong Filter Context theo ý muốn.',
      en: 'The CALCULATE engine: VAR for clean DAX, iterators (SUMX) and filter modifiers (ALL, KEEPFILTERS, REMOVEFILTERS) — the toolkit to bend filter context to your will.',
    },
    body: [
      { h: { vi: 'VAR / RETURN — viết DAX sạch và nhanh', en: 'VAR / RETURN — clean, fast DAX' },
        p: { vi: 'Dùng biến (VAR) để tính một lần, tái sử dụng nhiều lần. Vừa dễ đọc, vừa tăng hiệu năng (engine không tính lại), vừa dễ debug.', en: 'Use variables (VAR) to compute once and reuse many times. More readable, faster (the engine doesn’t recompute), and easier to debug.' } },
      { code: "% of Total Sales =\nVAR CurrentSales = [Total Sales]\nVAR AllSales     = CALCULATE([Total Sales], ALL(Product))\nRETURN\n    DIVIDE(CurrentSales, AllSales)", lang: 'dax' },
      { h: { vi: 'Các Filter Modifier trong CALCULATE', en: 'Filter modifiers inside CALCULATE' },
        p: { vi: 'Nhóm hàm điều khiển Filter Context — kiến thức cốt lõi để tạo các chỉ số "% trên tổng", "so với toàn bộ", "bỏ qua slicer".', en: 'The functions that steer filter context — core knowledge for building “% of total”, “vs everything”, and “ignore the slicer” metrics.' } },
      { list: [
        [{ vi: 'ALL(Table/Col)', en: 'ALL(Table/Col)' }, { vi: 'Xóa MỌI bộ lọc — dùng làm mẫu số cho phép tính tỷ trọng (% of total).', en: 'Removes ALL filters — used as the denominator for share-of-total (% of total).' }],
        [{ vi: 'REMOVEFILTERS()', en: 'REMOVEFILTERS()' }, { vi: 'Tên gọi rõ nghĩa hơn của ALL khi dùng để xóa filter (DAX hiện đại).', en: 'A clearer-named version of ALL when used to strip filters (modern DAX).' }],
        [{ vi: 'ALLEXCEPT(T, col)', en: 'ALLEXCEPT(T, col)' }, { vi: 'Xóa hết filter TRỪ những cột bạn chỉ định giữ lại.', en: 'Removes all filters EXCEPT the columns you choose to keep.' }],
        [{ vi: 'KEEPFILTERS()', en: 'KEEPFILTERS()' }, { vi: 'Giao (AND) bộ lọc mới với bộ lọc đang có thay vì ghi đè — quan trọng khi không muốn CALCULATE "thổi bay" filter của visual.', en: 'Intersects (ANDs) the new filter with the existing one instead of overwriting — crucial when you don’t want CALCULATE to wipe out the visual’s filter.' }],
      ]},
      { code: "-- % contribution within the CURRENT category (keep category filter, drop product filter)\n% In Category =\nDIVIDE(\n    [Total Sales],\n    CALCULATE([Total Sales], ALLEXCEPT(Product, Product[Category]))\n)", lang: 'dax' },
      { note: { vi: 'Bẫy thường gặp: CALCULATE([Sales], Product[Color]="Red") sẽ GHI ĐÈ filter màu của visual. Muốn "Red AND màu user đang chọn", bọc trong KEEPFILTERS. Hiểu sai chỗ này là ra số sai mà không báo lỗi.', en: 'Common trap: CALCULATE([Sales], Product[Color]="Red") OVERWRITES the visual’s colour filter. For “Red AND the user’s selected colour”, wrap it in KEEPFILTERS. Get this wrong and you get wrong numbers with no error.' } },
    ],
  },
  'pbi-time': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Time Intelligence: YTD, MTD, rolling average, YoY — các pattern thời gian xuất hiện trong gần như mọi dashboard. Bắt buộc phải có bảng Calendar riêng.',
      en: 'Time intelligence: YTD, MTD, rolling average, YoY — time patterns in nearly every dashboard. A dedicated calendar table is mandatory.',
    },
    body: [
      { h: { vi: 'Điều kiện tiên quyết: Date Table', en: 'Prerequisite: a date table' },
        p: { vi: 'Mọi hàm Time Intelligence yêu cầu một bảng Lịch (Calendar) chuyên dụng, liên tục (không thiếu ngày) và được "Mark as Date Table". Không có nó, SAMEPERIODLASTYEAR và bạn bè sẽ trả về kết quả sai.', en: 'Every time-intelligence function needs a dedicated calendar table that is continuous (no missing dates) and “Marked as Date Table”. Without it, SAMEPERIODLASTYEAR and friends return wrong results.' } },
      { code: "-- Build a Calendar table with DAX\nCalendar =\nADDCOLUMNS(\n    CALENDAR(DATE(2023,1,1), DATE(2025,12,31)),\n    \"Year\",    YEAR([Date]),\n    \"Month\",   FORMAT([Date], \"MMM\"),\n    \"MonthNo\", MONTH([Date]),\n    \"Quarter\", \"Q\" & QUARTER([Date])\n)", lang: 'dax' },
      { h: { vi: 'Bộ pattern thời gian thiết yếu', en: 'The essential time patterns' },
        p: { vi: 'Học thuộc bốn pattern này là đủ xài cho 95% báo cáo:', en: 'Memorise these four and you’ll cover 95% of reports:' } },
      { code: "Sales YTD   = TOTALYTD([Total Sales], 'Calendar'[Date])\nSales LY    = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))\nYoY %       = DIVIDE([Total Sales] - [Sales LY], [Sales LY])\nRolling 3M  =\n    CALCULATE(\n        [Total Sales],\n        DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -3, MONTH)\n    )", lang: 'dax' },
      { note: { vi: 'Lỗi kinh điển: dùng cột Date nằm trong bảng Fact (Sales) thay vì bảng Calendar. Time Intelligence cần một chiều thời gian liên tục, độc lập — luôn trỏ các hàm này vào Calendar[Date].', en: 'Classic mistake: using a date column inside the fact table (Sales) instead of the calendar table. Time intelligence needs a continuous, independent date dimension — always point these functions at Calendar[Date].' } },
    ],
  },
  'pbi-interact': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Tương tác báo cáo: Bookmarks, Drill-through, Tooltips tùy biến và Field Parameters — biến một bảng số tĩnh thành công cụ khám phá mà stakeholder tự dùng được.',
      en: 'Report interactivity: bookmarks, drill-through, custom tooltips and field parameters — turning a static table of numbers into an exploration tool stakeholders can drive themselves.',
    },
    body: [
      { h: { vi: 'Từ báo cáo "xem" sang báo cáo "dùng"', en: 'From a report you “view” to one you “use”' },
        p: { vi: 'Một dashboard tốt để người xem tự trả lời câu hỏi tiếp theo mà không cần gọi bạn. Bốn tính năng tương tác cốt lõi:', en: 'A good dashboard lets viewers answer their own next question without calling you. Four core interactive features:' } },
      { list: [
        [{ vi: 'Bookmarks', en: 'Bookmarks' }, { vi: 'Lưu trạng thái trang (filter, visual đang hiện). Kết hợp nút bấm để điều hướng, hoặc show/hide panel — nền tảng của mọi báo cáo trông như một app.', en: 'Save a page state (filters, which visuals show). Combine with buttons for navigation or show/hide panels — the basis of any report that feels like an app.' }],
        [{ vi: 'Drill-through', en: 'Drill-through' }, { vi: 'Chuột phải vào một điểm dữ liệu (ví dụ 1 khách hàng) để nhảy sang trang chi tiết đã lọc sẵn theo điểm đó.', en: 'Right-click a data point (e.g. a customer) to jump to a detail page pre-filtered to that point.' }],
        [{ vi: 'Custom Tooltips', en: 'Custom tooltips' }, { vi: 'Tạo một trang nhỏ làm tooltip — khi rê chuột lên cột, hiện hẳn một mini-chart thay vì chỉ một con số.', en: 'Build a small page as a tooltip — hovering a bar shows a whole mini-chart instead of just a number.' }],
        [{ vi: 'Field Parameters', en: 'Field parameters' }, { vi: 'Cho user tự chọn metric hoặc chiều phân tích qua slicer (ví dụ đổi trục từ Doanh thu sang Lợi nhuận) — giảm số visual phải làm.', en: 'Let users pick the metric or dimension via a slicer (e.g. switch an axis from Revenue to Profit) — fewer visuals to build.' }],
      ]},
      { note: { vi: 'Nguyên tắc UX: mỗi trang nên trả lời ĐÚNG MỘT câu hỏi. Nếu một trang cố trả lời 5 câu, hãy tách thành 5 trang và nối bằng drill-through / nút điều hướng. Stakeholder ghét sự lộn xộn.', en: 'UX rule: each page should answer EXACTLY ONE question. If a page tries to answer five, split it into five pages linked by drill-through / navigation buttons. Stakeholders hate clutter.' } },
    ],
  },
  'pbi-perf': {
    cluster: 'DATAVIZ & POWER BI',
    summary: {
      vi: 'Tối ưu hiệu năng: hiểu VertiPaq engine, dùng Performance Analyzer và DAX Studio để tìm điểm nghẽn — kỹ năng khiến báo cáo load trong 1 giây thay vì 30 giây.',
      en: 'Performance tuning: understand the VertiPaq engine, use Performance Analyzer and DAX Studio to find bottlenecks — the skill that makes a report load in 1 second instead of 30.',
    },
    body: [
      { h: { vi: 'VertiPaq — vì sao Power BI nhanh', en: 'VertiPaq — why Power BI is fast' },
        p: { vi: 'Power BI nén dữ liệu theo CỘT (columnar) trong RAM. Hệ quả thực tế: số cột và độ "đa dạng" (cardinality) của cột quan trọng hơn số dòng rất nhiều.', en: 'Power BI compresses data by COLUMN (columnar) in RAM. The practical consequence: the number of columns and their cardinality matter far more than the number of rows.' } },
      { list: [
        [{ vi: 'Giảm Cardinality', en: 'Reduce cardinality' }, { vi: 'Cột càng ít giá trị khác nhau càng nén tốt. Cột datetime đầy đủ (giây) là kẻ thù — tách thành Date + Time riêng nếu cần.', en: 'The fewer distinct values a column has, the better it compresses. A full datetime column (down to the second) is the enemy — split into separate Date + Time if needed.' }],
        [{ vi: 'Bỏ cột không dùng', en: 'Drop unused columns' }, { vi: 'Mỗi cột thừa = thêm RAM + chậm refresh. Xóa ở Power Query, đừng mang vào model.', en: 'Every extra column = more RAM + slower refresh. Remove it in Power Query; don’t bring it into the model.' }],
        [{ vi: 'Star Schema', en: 'Star schema' }, { vi: 'Không chỉ để DAX đúng — mô hình sao còn nén và quét nhanh hơn hẳn snowflake hay one-big-table.', en: 'Not just for correct DAX — a star schema also compresses and scans far faster than a snowflake or one-big-table.' }],
      ]},
      { h: { vi: 'Công cụ chẩn đoán', en: 'Diagnostic tools' },
        p: { vi: 'Đừng đoán mò điểm chậm — đo nó:', en: 'Don’t guess the slow part — measure it:' } },
      { list: [
        [{ vi: 'Performance Analyzer', en: 'Performance Analyzer' }, { vi: 'Tab có sẵn trong Power BI Desktop. Bấm record, tương tác, xem mỗi visual tốn bao nhiêu ms ở phần DAX query vs Visual rendering.', en: 'A built-in tab in Power BI Desktop. Hit record, interact, and see how many ms each visual spends on DAX query vs visual rendering.' }],
        [{ vi: 'DAX Studio', en: 'DAX Studio' }, { vi: 'Công cụ ngoài (miễn phí). Xem Server Timings, phân biệt Storage Engine (nhanh, đa luồng) vs Formula Engine (chậm, đơn luồng). Mục tiêu: đẩy việc về Storage Engine.', en: 'A free external tool. View Server Timings and separate Storage Engine (fast, multi-threaded) from Formula Engine (slow, single-threaded). Goal: push work onto the Storage Engine.' }],
      ]},
      { note: { vi: 'Quy tắc 80/20 của tối ưu Power BI: phần lớn báo cáo chậm KHÔNG phải do DAX, mà do mô hình dữ liệu tệ (thiếu star schema, cột cardinality cao, dùng DirectQuery khi không cần). Sửa model trước, tinh chỉnh DAX sau.', en: 'The 80/20 rule of Power BI tuning: most slow reports are NOT due to DAX but to a bad data model (no star schema, high-cardinality columns, needless DirectQuery). Fix the model first, then tune DAX.' } },
    ],
  },
};
