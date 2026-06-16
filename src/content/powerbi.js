export const powerbiLessons = {
  'pbi-prep': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Data Prep (Power Query) trong Power BI - Nơi làm sạch và định hình dữ liệu trước khi nạp vào bộ nhớ.',
    body: [
      { h: 'Power Query Editor', p: 'Cùng một công cụ như trong Excel, nhưng ở Power BI nó đóng vai trò cốt yếu hơn. Đây là lớp đầu tiên của giải pháp Power BI của bạn (lớp Extract và Transform).' },
      { list: [
        ['DirectQuery vs Import', 'Import: Kéo toàn bộ dữ liệu vào RAM (Nhanh, Full DAX). DirectQuery: Query trực tiếp xuống Database khi người dùng bấm report (Chậm hơn, giới hạn DAX, dùng cho dữ liệu Real-time hoặc quá lớn).'],
        ['Shape of Data', 'Dữ liệu ở Power Query phải có dạng "Tidy Data": Mỗi biến là một cột, mỗi quan sát là một dòng.'],
      ]},
      { note: 'Nguyên tắc vàng: Gấp gọn mọi logic có thể ở phía Database (SQL). Những gì còn lại, làm ở Power Query. ĐỪNG BAO GIỜ dọn dẹp dữ liệu bằng cách viết Calculated Column (DAX).' },
    ],
  },
  'pbi-model': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Mô hình sao (Star Schema) - Chìa khóa quyết định báo cáo của bạn load trong 1 giây hay 1 phút.',
    body: [
      { h: 'Data Modeling', p: 'Power BI không phải là một file phẳng lớn. Nó là một cơ sở dữ liệu quan hệ thu nhỏ trong bộ nhớ (VertiPaq engine).' },
      { list: [
        ['Fact Tables', 'Bảng sự kiện (Sale, Click, View). Thường dài (nhiều dòng), hẹp (ít cột), chứa các con số để cộng trừ.'],
        ['Dimension Tables', 'Bảng danh mục (Khách hàng, Sản phẩm, Lịch). Thường ngắn (ít dòng), rộng (nhiều cột chữ), dùng để CẮT, LỌC và NHÓM dữ liệu.'],
        ['Mối quan hệ 1-N', 'Đây là quan hệ chuẩn mực. 1 Product có N Sales. Filter Flow (dòng chảy bộ lọc) sẽ đi từ bảng (1) xuống bảng (N).'],
      ]},
      { note: 'Lỗi thường gặp: Tạo quan hệ Many-to-Many (N-N) hoặc Cross-Filter Both Directions. Nó có thể khiến DAX trả về kết quả sai hoàn toàn hoặc làm báo cáo treo.' },
    ],
  },
  'pbi-dax': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'DAX (Data Analysis Expressions) là ngôn ngữ tạo ra các chỉ số linh hoạt, thay đổi theo bối cảnh người dùng đang lọc (Filter Context).',
    body: [
      { h: 'Measure vs. Calculated Column', p: 'Phân biệt 2 khái niệm này là bài học vỡ lòng của DAX:' },
      { list: [
        ['Calculated Column', 'Tính toán trên từng DÒNG (Row Context). Lưu xuống ổ cứng, tốn dung lượng RAM, không thay đổi theo Filter. (Chỉ dùng khi cần tạo cột để thả vào ô Category/Axis của Slicer).'],
        ['Measure', 'Chỉ chứa CÔNG THỨC. Chỉ tính toán khi bạn kéo nó vào biểu đồ. Rất nhẹ, kết quả nhảy linh hoạt theo bất kỳ Filter nào người dùng đang chọn (Filter Context). Luôn ưu tiên Measure.'],
      ]},
      { h: 'CALCULATE() - Hàm định hình Filter Context', p: 'Đây là hàm quyền lực nhất trong DAX. Khả năng thay đổi bối cảnh lọc của nó tạo nên sức mạnh cho Power BI (ví dụ: Tính "Doanh thu năm ngoái" khi báo cáo đang filter "Năm nay").' },
      { code: "-- Phân tích Time Intelligence: Tính tăng trưởng Năm qua Năm (YoY)\nSales_Amount = SUM(Sales[Revenue])\n\nSales_LY =\nCALCULATE(\n    [Sales_Amount],\n    SAMEPERIODLASTYEAR('Calendar'[Date])\n)\n\nSales_YoY_Growth_Pct =\nDIVIDE(\n    [Sales_Amount] - [Sales_LY],\n    [Sales_LY],\n    BLANK()\n)", lang: 'dax' },
    ],
  },
  'pbi-viz': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Data Storytelling - Thiết kế báo cáo không chỉ để "trưng bày" số, mà để dẫn dắt sự chú ý và thúc đẩy hành động.',
    source: 'Nguồn tham khảo: Storytelling with Data (Cole Nussbaumer Knaflic).',
    body: [
      { h: 'Decluttering (Loại bỏ sự lộn xộn)', p: 'Bộ não con người bị quá tải trước các biểu đồ sặc sỡ. Quy tắc của Cole Nussbaumer Knaflic: Xóa bỏ tất cả các đường viền, lưới dọc/ngang (Gridlines), đổ bóng, và màu sắc không cần thiết.' },
      { list: [
        ['Màu sắc chiến lược', 'Đừng để Power BI tự động tô màu cầu vồng. Chọn TẤT CẢ các cột màu Xám nhạt, và chỉ tô MÀU NHẤN (Đỏ/Xanh) cho cột dữ liệu bạn muốn Stakeholder nhìn vào.'],
        ['Tiêu đề báo cáo (Actionable Title)', 'Thay vì viết "Biểu đồ Doanh thu", hãy viết "Doanh thu Q3 giảm 15% do sự sụt giảm tại Miền Nam". Tiêu đề nên là một kết luận.'],
      ]},
      { h: 'Quy tắc chọn biểu đồ', p: '' },
      { list: [
        ['Pie Chart', 'Tránh xa nó, hoặc giới hạn dưới 3 phần. Mắt người rất kém trong việc ước lượng diện tích.'],
        ['Bar Chart (Biểu đồ thanh ngang)', 'Dễ đọc nhất cho việc So Sánh các danh mục.'],
        ['Line Chart (Biểu đồ đường)', 'Tốt nhất cho Dữ liệu chuỗi thời gian (Time-series).'],
        ['Scatter Plot', 'Hoàn hảo để hiển thị mối tương quan (Correlation) giữa 2 chỉ số.'],
      ]},
    ],
  },
  'pbi-dax-adv': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Master class về DAX: Hiểu sâu về Context Transition và Time Intelligence.',
    body: [
      { h: 'Context Transition (Chuyển đổi bối cảnh)', p: 'Lý thuyết khó nhất nhưng quan trọng nhất của DAX. Nó xảy ra khi một Row Context (bối cảnh dòng) bị biến thành một Filter Context (bối cảnh lọc). Hàm CALCULATE là tác nhân chính gây ra điều này.' },
      { code: "-- Ví dụ: Tính tổng doanh thu cho từng khách hàng, SAU ĐÓ\n-- đếm xem có bao nhiêu khách hàng mua trên $10,000.\nHigh_Value_Customers =\nCOUNTROWS(\n    FILTER(\n        Customers,\n        -- [Total Sales] là một Measure (có ẩn chứa CALCULATE bên trong).\n        -- Nó kích hoạt Context Transition, biến dòng hiện tại của \n        -- khách hàng thành một bộ lọc để tính doanh thu.\n        [Total Sales] > 10000 \n    )\n)", lang: 'dax' },
      { h: 'Mẹo tối ưu DAX', p: 'DAX rất nhanh nếu dùng đúng, và cực chậm nếu dùng sai.' },
      { list: [
        ['Dùng DIVIDE thay vì /', 'Hàm DIVIDE an toàn với lỗi chia cho 0 (trả về BLANK thay vì báo lỗi toàn biểu đồ).'],
        ['Tránh FILTER() trên toàn bộ bảng', 'Hàm FILTER là hàm lặp (iterator). Đừng bao giờ dùng `FILTER(Sales, Sales[Year]=2023)`. Hãy dùng thẳng `Sales[Year]=2023` trong CALCULATE, vì nó dùng VertiPaq engine siêu nhanh.'],
      ]},
    ],
  },
  'pbi-serv': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Power BI Service: Cách đưa báo cáo từ máy cá nhân lên Cloud để chia sẻ cho sếp và tự động làm mới.',
    body: [
      { h: 'Hệ sinh thái Cloud của Power BI', p: 'Bạn làm báo cáo bằng Power BI Desktop, nhưng sếp bạn sẽ xem nó trên Power BI Service (app.powerbi.com).' },
      { list: [
        ['Workspace', 'Giống như thư mục chia sẻ. Nơi bạn chứa Report (bản vẽ) và Dataset (dữ liệu).'],
        ['Scheduled Refresh', 'Thay vì sáng nào cũng mở máy bấm nút F5, bạn thiết lập trên Service để nó tự động lên database lấy số liệu mới lúc 6h sáng mỗi ngày qua On-premises Data Gateway.'],
        ['Row-Level Security (RLS)', 'Bảo mật cấp dòng. Sếp miền Bắc chỉ nhìn thấy số liệu miền Bắc, sếp miền Nam chỉ nhìn thấy miền Nam TRÊN CÙNG MỘT BÁO CÁO. Rất quyền lực!'],
      ]},
      { note: 'App: Sau khi hoàn thiện nhiều báo cáo trong Workspace, bạn sẽ đóng gói chúng lại thành một "App" chuyên nghiệp để gửi cho người dùng cuối. Họ chỉ có quyền xem, không sợ họ lỡ tay sửa xóa gì cả.' },
    ],
  },
  'pbi-context': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Evaluation Context — lý thuyết nền tảng của DAX. Hiểu Row Context vs Filter Context là ranh giới giữa người "gõ công thức" và người thực sự làm chủ DAX.',
    body: [
      { h: 'Hai loại Context', p: 'Mọi công thức DAX đều được tính trong một "bối cảnh" (context). Có đúng hai loại, và 90% lỗi DAX đến từ việc nhầm lẫn chúng:' },
      { list: [
        ['Row Context (Bối cảnh dòng)', 'DAX đang "đứng" ở một dòng cụ thể và biết giá trị các cột của dòng đó. Tự động xuất hiện trong Calculated Column và bên trong các hàm iterator (SUMX, FILTER).'],
        ['Filter Context (Bối cảnh lọc)', 'Tập hợp các bộ lọc đang áp lên mô hình, đến từ slicer, hàng/cột của visual, hoặc CALCULATE. Quyết định Measure "nhìn thấy" những dòng nào.'],
      ]},
      { note: 'Điểm mấu chốt: Row Context KHÔNG tự động lọc dữ liệu. Một Calculated Column viết SUM(Sales[Amount]) sẽ ra TỔNG TOÀN BẢNG ở mọi dòng, chứ không phải giá trị của riêng dòng đó — vì SUM cần Filter Context, mà Row Context lại không tạo ra Filter Context.' },
      { h: 'Context Transition — cây cầu nối', p: 'CALCULATE (và Measure, vì Measure ngầm chứa CALCULATE) biến Row Context hiện tại thành Filter Context tương đương. Đây là cơ chế khiến SUMX(Customers, [Total Sales]) tính đúng doanh thu riêng từng khách.' },
      { code: "-- Cùng một biểu thức, hai context khác nhau\n-- Calculated Column (có Row Context): lặp qua từng dòng\nLine_Total = Sales[Qty] * Sales[Price]   -- OK, dùng cột của dòng hiện tại\n\n-- Measure (có Filter Context): phản ứng theo slicer\nTotal_Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])\n-- SUMX tạo Row Context để nhân từng dòng, rồi cộng lại trong Filter Context", lang: 'dax' },
      { note: 'Câu thần chú để nhớ: "Calculated Column tính MỘT LẦN khi refresh và lưu xuống ổ. Measure tính MỖI LẦN bạn nhìn vào visual, theo đúng filter lúc đó." Khi phân vân — luôn chọn Measure.' },
    ],
  },
  'pbi-calc': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'CALCULATE engine: VAR để viết DAX sạch, iterators (SUMX) và các filter modifier (ALL, KEEPFILTERS, REMOVEFILTERS) — bộ công cụ để bẻ cong Filter Context theo ý muốn.',
    body: [
      { h: 'VAR / RETURN — viết DAX sạch và nhanh', p: 'Dùng biến (VAR) để tính một lần, tái sử dụng nhiều lần. Vừa dễ đọc, vừa tăng hiệu năng (engine không tính lại), vừa dễ debug.' },
      { code: "% Doanh thu trên Tổng =\nVAR CurrentSales = [Total Sales]\nVAR AllSales     = CALCULATE([Total Sales], ALL(Product))\nRETURN\n    DIVIDE(CurrentSales, AllSales)", lang: 'dax' },
      { h: 'Các Filter Modifier trong CALCULATE', p: 'Đây là nhóm hàm điều khiển Filter Context — kiến thức cốt lõi để tạo các chỉ số "% trên tổng", "so với toàn bộ", "bỏ qua slicer".' },
      { list: [
        ['ALL(Table/Col)', 'Xóa MỌI bộ lọc — dùng làm mẫu số cho phép tính tỷ trọng (% of total).'],
        ['REMOVEFILTERS()', 'Tên gọi rõ nghĩa hơn của ALL khi dùng để xóa filter (DAX hiện đại).'],
        ['ALLEXCEPT(T, col)', 'Xóa hết filter TRỪ những cột bạn chỉ định giữ lại.'],
        ['KEEPFILTERS()', 'Giao (AND) bộ lọc mới với bộ lọc đang có, thay vì ghi đè — quan trọng khi không muốn CALCULATE "thổi bay" filter của visual.'],
      ]},
      { code: "-- % đóng góp trong NHÓM danh mục hiện tại (giữ filter danh mục, bỏ filter sản phẩm)\n% In Category =\nDIVIDE(\n    [Total Sales],\n    CALCULATE([Total Sales], ALLEXCEPT(Product, Product[Category]))\n)", lang: 'dax' },
      { note: 'Bẫy thường gặp: CALCULATE([Sales], Product[Color]="Red") sẽ GHI ĐÈ filter màu của visual. Nếu muốn "Red AND màu user đang chọn", bọc trong KEEPFILTERS. Hiểu sai chỗ này là ra số sai mà không báo lỗi.' },
    ],
  },
  'pbi-time': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Time Intelligence: YTD, MTD, rolling average, YoY — các pattern thời gian xuất hiện trong gần như mọi dashboard kinh doanh. Bắt buộc phải có bảng Calendar riêng.',
    body: [
      { h: 'Điều kiện tiên quyết: Date Table', p: 'Mọi hàm Time Intelligence của DAX yêu cầu một bảng Lịch (Calendar) chuyên dụng, liên tục (không thiếu ngày) và được đánh dấu "Mark as Date Table". Không có nó, SAMEPERIODLASTYEAR và bạn bè sẽ trả về kết quả sai.' },
      { code: "-- Tạo bảng Calendar bằng DAX\nCalendar =\nADDCOLUMNS(\n    CALENDAR(DATE(2023,1,1), DATE(2025,12,31)),\n    \"Year\",    YEAR([Date]),\n    \"Month\",   FORMAT([Date], \"MMM\"),\n    \"MonthNo\", MONTH([Date]),\n    \"Quarter\", \"Q\" & QUARTER([Date])\n)", lang: 'dax' },
      { h: 'Bộ pattern thời gian thiết yếu', p: 'Học thuộc bốn pattern này là đủ xài cho 95% báo cáo:' },
      { code: "Sales YTD   = TOTALYTD([Total Sales], 'Calendar'[Date])\nSales LY    = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))\nYoY %       = DIVIDE([Total Sales] - [Sales LY], [Sales LY])\nRolling 3M  =\n    CALCULATE(\n        [Total Sales],\n        DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -3, MONTH)\n    )", lang: 'dax' },
      { note: 'Lỗi kinh điển: dùng cột Date nằm trong bảng Fact (Sales) thay vì bảng Calendar. Time Intelligence cần một chiều thời gian liên tục, độc lập — luôn trỏ các hàm này vào Calendar[Date].' },
    ],
  },
  'pbi-interact': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Tương tác báo cáo: Bookmarks, Drill-through, Tooltips tùy biến và Field Parameters — biến một bảng số tĩnh thành công cụ khám phá mà stakeholder tự dùng được.',
    body: [
      { h: 'Từ báo cáo "xem" sang báo cáo "dùng"', p: 'Một dashboard tốt để người xem tự trả lời câu hỏi tiếp theo của họ mà không cần gọi bạn. Bốn tính năng tương tác cốt lõi:' },
      { list: [
        ['Bookmarks', 'Lưu lại trạng thái trang (filter, visual đang hiện). Kết hợp với nút bấm để tạo điều hướng, hoặc "show/hide" panel — nền tảng của mọi báo cáo trông như một app.'],
        ['Drill-through', 'Click chuột phải vào một điểm dữ liệu (ví dụ 1 khách hàng) để nhảy sang trang chi tiết đã được lọc sẵn theo điểm đó.'],
        ['Custom Tooltips', 'Tạo một trang nhỏ làm tooltip — khi rê chuột lên cột, hiện hẳn một mini-chart thay vì chỉ một con số.'],
        ['Field Parameters', 'Cho người dùng tự chọn metric hoặc chiều phân tích muốn xem qua slicer (ví dụ đổi trục từ Doanh thu sang Lợi nhuận) — giảm số visual phải làm.'],
      ]},
      { note: 'Nguyên tắc UX: mỗi trang báo cáo nên trả lời ĐÚNG MỘT câu hỏi. Nếu một trang cố trả lời 5 câu, hãy tách thành 5 trang và nối bằng drill-through / nút điều hướng. Stakeholder ghét sự lộn xộn.' },
    ],
  },
  'pbi-perf': {
    cluster: 'DATAVIZ & POWER BI',
    summary: 'Tối ưu hiệu năng: hiểu VertiPaq engine, dùng Performance Analyzer và DAX Studio để tìm điểm nghẽn — kỹ năng khiến báo cáo load trong 1 giây thay vì 30 giây.',
    body: [
      { h: 'VertiPaq — vì sao Power BI nhanh', p: 'Power BI nén dữ liệu theo CỘT (columnar) trong RAM. Hệ quả thực tế cho việc tối ưu: số cột và độ "đa dạng" (cardinality) của cột quan trọng hơn số dòng rất nhiều.' },
      { list: [
        ['Giảm Cardinality', 'Cột có càng ít giá trị khác nhau càng nén tốt. Cột datetime đầy đủ (giây) là kẻ thù — tách thành Date + Time riêng nếu cần.'],
        ['Bỏ cột không dùng', 'Mỗi cột thừa = thêm RAM + chậm refresh. Xóa ở Power Query, đừng mang vào model.'],
        ['Star Schema', 'Không chỉ để DAX đúng — mô hình sao còn nén và quét nhanh hơn hẳn snowflake hay one-big-table.'],
      ]},
      { h: 'Công cụ chẩn đoán', p: 'Đừng đoán mò điểm chậm — đo nó:' },
      { list: [
        ['Performance Analyzer', 'Tab có sẵn trong Power BI Desktop. Bấm record, tương tác báo cáo, xem mỗi visual tốn bao nhiêu ms ở phần DAX query vs Visual rendering.'],
        ['DAX Studio', 'Công cụ ngoài (miễn phí). Xem Server Timings, phân biệt thời gian Storage Engine (nhanh, đa luồng) vs Formula Engine (chậm, đơn luồng). Mục tiêu: đẩy việc về Storage Engine.'],
      ]},
      { note: 'Quy tắc 80/20 của tối ưu Power BI: phần lớn báo cáo chậm KHÔNG phải do DAX, mà do mô hình dữ liệu tệ (thiếu star schema, cột cardinality cao, dùng DirectQuery khi không cần). Sửa model trước, tinh chỉnh DAX sau.' },
    ],
  },
};
