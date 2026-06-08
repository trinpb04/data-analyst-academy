/* Data Analyst Academy — Atlas content for the UI kit.
   Titles & bilingual copy mirror the real codebase content modules
   (src/content/*.ts). Positions are hand-laid clusters for a static
   knowledge-graph canvas. Lesson bodies carry real theory, formulas,
   worked calculations and runnable code so a learner can actually study. */
export const ATLAS = {
  modules: [
    { id: 'business',   label: 'Business & Analysis', color: '#e53e3e', soft: '#fdeaea' },
    { id: 'excel',      label: 'Excel',               color: '#107c41', soft: '#e4f3eb' },
    { id: 'statistics', label: 'Statistics',          color: '#805ad5', soft: '#efeafb' },
    { id: 'sql',        label: 'SQL',                 color: '#0078d7', soft: '#e3f0fb' },
    { id: 'python',     label: 'Python',              color: '#4b8bbe', soft: '#eaf1f7' },
    { id: 'powerbi',    label: 'DataViz & Power BI',  color: '#f2c811', soft: '#fdf6dc' },
  ],
  clusters: [
    { module: 'business',   label: 'BUSINESS ACUMEN',   x: 215, y: 120 },
    { module: 'excel',      label: 'SPREADSHEETS',      x: 540, y: 95  },
    { module: 'statistics', label: 'STATISTICS',        x: 845, y: 140 },
    { module: 'sql',        label: 'SQL & DATABASES',   x: 220, y: 470 },
    { module: 'powerbi',    label: 'DATAVIZ & POWER BI',x: 540, y: 520 },
    { module: 'python',     label: 'PYTHON FOR DATA',   x: 845, y: 475 },
  ],
  nodes: [
    { id: 'bus-intro',   m: 'business', t: 'What is Data Analytics?', x: 150, y: 70,  v: 9 },
    { id: 'bus-problem', m: 'business', t: 'Problem Formulation',     x: 270, y: 130, v: 7 },
    { id: 'bus-kpi',     m: 'business', t: 'Metrics & KPIs',          x: 145, y: 175, v: 7 },
    { id: 'bus-frame',   m: 'business', t: 'Analytical Frameworks',   x: 290, y: 215, v: 6 },
    { id: 'ex-formulas', m: 'excel', t: 'Core Formulas',     x: 470, y: 60,  v: 8 },
    { id: 'ex-pivot',    m: 'excel', t: 'Pivot Tables',      x: 590, y: 75,  v: 8 },
    { id: 'ex-pq',       m: 'excel', t: 'Power Query',       x: 520, y: 150, v: 7 },
    { id: 'ex-pp',       m: 'excel', t: 'Power Pivot & DAX', x: 630, y: 165, v: 6 },
    { id: 'stat-desc',   m: 'statistics', t: 'Descriptive Stats', x: 800, y: 90,  v: 8 },
    { id: 'stat-prob',   m: 'statistics', t: 'Probability',       x: 905, y: 120, v: 7 },
    { id: 'stat-infer',  m: 'statistics', t: 'Inferential Stats', x: 825, y: 185, v: 7 },
    { id: 'stat-abtest', m: 'statistics', t: 'A/B Testing',       x: 930, y: 205, v: 6 },
    { id: 'sql-intro',   m: 'sql', t: 'RDBMS Basics',  x: 150, y: 430, v: 7 },
    { id: 'sql-query',   m: 'sql', t: 'Basic Queries', x: 265, y: 440, v: 9 },
    { id: 'sql-joins',   m: 'sql', t: 'JOINs',         x: 175, y: 510, v: 9 },
    { id: 'sql-window',  m: 'sql', t: 'Window Functions', x: 300, y: 525, v: 7 },
    { id: 'sql-etl',     m: 'sql', t: 'ETL & Warehousing', x: 205, y: 575, v: 6 },
    { id: 'pbi-prep',    m: 'powerbi', t: 'Data Prep',     x: 475, y: 480, v: 7 },
    { id: 'pbi-model',   m: 'powerbi', t: 'Star Schema',   x: 590, y: 490, v: 8 },
    { id: 'pbi-dax',     m: 'powerbi', t: 'DAX Measures',  x: 520, y: 560, v: 7 },
    { id: 'pbi-viz',     m: 'powerbi', t: 'Dashboards',    x: 615, y: 565, v: 7 },
    { id: 'py-pandas',  m: 'python', t: 'Pandas',          x: 800, y: 430, v: 9 },
    { id: 'py-eda',     m: 'python', t: 'EDA',             x: 910, y: 455, v: 7 },
    { id: 'py-viz',     m: 'python', t: 'Matplotlib',      x: 830, y: 520, v: 6 },
    { id: 'py-ml',      m: 'python', t: 'Intro to ML',     x: 925, y: 540, v: 7 },
  ],
  links: [
    ['bus-intro','bus-problem'],['bus-problem','bus-kpi'],['bus-kpi','bus-frame'],['bus-intro','bus-kpi'],
    ['ex-formulas','ex-pivot'],['ex-pivot','ex-pq'],['ex-pq','ex-pp'],['ex-formulas','ex-pq'],
    ['stat-desc','stat-prob'],['stat-prob','stat-infer'],['stat-infer','stat-abtest'],
    ['sql-intro','sql-query'],['sql-query','sql-joins'],['sql-joins','sql-window'],['sql-window','sql-etl'],
    ['pbi-prep','pbi-model'],['pbi-model','pbi-dax'],['pbi-dax','pbi-viz'],['pbi-model','pbi-viz'],
    ['py-pandas','py-eda'],['py-eda','py-viz'],['py-eda','py-ml'],
    ['bus-kpi','stat-desc'],['bus-problem','sql-intro'],['ex-formulas','sql-query'],
    ['ex-pq','pbi-prep'],['ex-pp','pbi-model'],['sql-query','py-pandas'],['sql-etl','pbi-prep'],
    ['stat-desc','py-eda'],['stat-infer','py-ml'],['py-eda','pbi-viz'],
  ],

  lessons: {
    /* ─────────────── BUSINESS & ANALYSIS ─────────────── */
    'bus-intro': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Data Analytics là quá trình biến dữ liệu thô thành quyết định kinh doanh (data-driven decision making).',
      source: 'Nguồn: Data Analytics Made Accessible.',
      body: [
        { h: 'Khái niệm cơ bản', p: 'Data Analytics là quá trình thu thập, xử lý và phân tích dữ liệu để đưa ra quyết định kinh doanh. Mục tiêu cuối cùng không phải là biểu đồ đẹp — mà là một quyết định tốt hơn.' },
        { h: '4 loại phân tích', p: 'Mỗi loại trả lời một câu hỏi khác nhau và khó dần lên:' },
        { list: [
          ['Descriptive', 'Chuyện gì đã xảy ra? (Báo cáo, Dashboard).'],
          ['Diagnostic', 'Tại sao nó xảy ra? (Phân tích nguyên nhân gốc rễ).'],
          ['Predictive', 'Chuyện gì sẽ xảy ra tiếp? (Dự báo, Machine Learning).'],
          ['Prescriptive', 'Nên làm gì? (Tối ưu hóa, đề xuất hành động).'],
        ]},
        { note: 'Phần lớn giá trị doanh nghiệp đến từ Descriptive + Diagnostic. Đừng vội nhảy sang ML khi báo cáo cơ bản còn chưa vững.' },
      ],
    },
    'bus-problem': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Bước quan trọng nhất của Data Analyst không phải là code, mà là hiểu đúng bài toán kinh doanh.',
      body: [
        { h: 'Problem Formulation', p: 'Một câu hỏi mơ hồ ("doanh số dạo này sao rồi?") luôn dẫn tới phân tích lãng phí. Hãy diễn đạt lại bài toán theo khung SMART:' },
        { list: [
          ['Specific', 'Cụ thể — về sản phẩm/khu vực/khoảng thời gian nào?'],
          ['Measurable', 'Đo lường được bằng một metric rõ ràng.'],
          ['Actionable', 'Kết quả có thể dẫn tới hành động.'],
          ['Relevant', 'Liên quan tới mục tiêu chiến lược.'],
          ['Time-bound', 'Có thời hạn / khung thời gian.'],
        ]},
        { note: '"Tỷ lệ chuyển đổi (conversion rate) của khách mới trên mobile trong Q2 có giảm so với Q1 không?" — đó mới là một câu hỏi phân tích được.' },
      ],
    },
    'bus-kpi': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Không phải con số nào cũng là KPI. KPI là những metric quan trọng nhất gắn với chiến lược.',
      body: [
        { h: 'Metric vs KPI', p: 'Metric là bất cứ con số nào bạn đo (lượt truy cập). KPI là tập nhỏ những metric quan trọng nhất gắn với mục tiêu công ty (conversion rate).' },
        { h: 'Các metric phổ biến theo ngành', p: '' },
        { list: [
          ['E-commerce', 'AOV (Average Order Value), CAC, LTV, Conversion Rate.'],
          ['SaaS', 'MRR (Monthly Recurring Revenue), Churn Rate, NRR.'],
          ['Marketing', 'CTR (Click-Through Rate), ROAS (Return on Ad Spend).'],
        ]},
        { formula: 'LTV  =  ARPU × Gross Margin %\n──────────────────────\n      Churn Rate', caption: 'Lifetime Value — giá trị một khách hàng mang lại trong suốt vòng đời.' },
        { calc: 'Ví dụ tính LTV', steps: [
          'ARPU = $50 / tháng,  Gross Margin = 80%',
          'Churn = 5% / tháng  (0.05)',
          'LTV = (50 × 0.8) / 0.05',
          'LTV = $800',
        ]},
      ],
    },
    'bus-frame': {
      cluster: 'BUSINESS ACUMEN',
      summary: 'Các framework giúp cấu trúc tư duy phân tích thay vì mò mẫm trong dữ liệu.',
      body: [
        { h: 'Analytical Frameworks', p: 'Framework là "khuôn" tư duy để không bỏ sót góc nhìn quan trọng.' },
        { list: [
          ['AARRR (Pirate Metrics)', 'Acquisition → Activation → Retention → Referral → Revenue. Cho startup/product.'],
          ['RFM Analysis', 'Recency, Frequency, Monetary — phân khúc khách hàng.'],
          ['Cohort Analysis', 'Theo dõi hành vi của nhóm khách theo thời gian.'],
          ['5 Whys', 'Hỏi "Tại sao?" 5 lần để tới nguyên nhân gốc rễ.'],
        ]},
        { note: 'Expected Value = P(thành công) × Lợi ích − P(thất bại) × Chi phí. Dùng để xếp hạng các quyết định khi chưa chắc chắn.' },
      ],
    },

    /* ─────────────── EXCEL ─────────────── */
    'ex-formulas': {
      cluster: 'SPREADSHEETS',
      summary: 'Bộ công thức cốt lõi giải quyết 80% công việc hằng ngày trên Excel.',
      body: [
        { h: 'Công thức Excel cốt lõi', p: '' },
        { list: [
          ['Logic', 'IF, AND, OR, IFERROR.'],
          ['Lookup', 'VLOOKUP, INDEX & MATCH (quan trọng!), XLOOKUP.'],
          ['Text', 'LEFT, RIGHT, MID, CONCATENATE, TRIM.'],
          ['Date', 'TODAY, DATEDIF, EOMONTH.'],
        ]},
        { h: 'INDEX + MATCH > VLOOKUP', p: 'VLOOKUP chỉ tra từ trái sang phải và dễ vỡ khi chèn cột. INDEX + MATCH linh hoạt hơn:' },
        { code: '=INDEX(Sales[Revenue],\n       MATCH("Laptop", Sales[Product], 0))', lang: 'excel' },
        { code: '=XLOOKUP("Laptop", Sales[Product], Sales[Revenue], "Not found")', lang: 'excel' },
      ],
    },
    'ex-pivot': {
      cluster: 'SPREADSHEETS',
      summary: 'Công cụ mạnh nhất của Excel để tổng hợp dữ liệu chỉ bằng kéo–thả.',
      body: [
        { h: 'Pivot Tables', p: 'Tóm tắt hàng nghìn dòng thành một bảng tổng hợp trong vài giây, không cần công thức.' },
        { list: [
          ['Values', 'Sum, Count, Average, % of Total.'],
          ['Rows / Columns', 'Nhóm dữ liệu theo chiều (Region, Month…).'],
          ['Slicers & Timelines', 'Bộ lọc tương tác cho người xem.'],
          ['Pivot Charts', 'Biểu đồ vẽ trực tiếp từ Pivot.'],
        ]},
        { note: 'Mẹo: bật "Show Values As → % of Grand Total" để biến con số tuyệt đối thành tỷ trọng — insight thường nằm ở tỷ lệ, không phải con số thô.' },
      ],
    },
    'ex-pq': {
      cluster: 'SPREADSHEETS',
      summary: 'Power Query là công cụ ETL tích hợp trong Excel — tự động hóa làm sạch dữ liệu, không cần VBA.',
      body: [
        { h: 'Power Query (Get & Transform)', p: 'Kết nối tới nhiều nguồn (CSV, Web, Database), làm sạch dữ liệu, và lưu lại các bước để chạy lại bất cứ lúc nào.' },
        { list: [
          ['Extract', 'Kết nối CSV, Excel, SQL, Web API.'],
          ['Transform', 'Unpivot, Split, Merge, Append, Replace.'],
          ['Applied Steps', 'Mỗi thao tác được ghi lại → tái sử dụng cho file tháng sau.'],
        ]},
        { note: 'Quy tắc vàng: làm sạch dữ liệu trong Power Query, KHÔNG sửa tay trên sheet. Thao tác tay không lặp lại được tháng sau.' },
      ],
    },
    'ex-pp': {
      cluster: 'SPREADSHEETS',
      summary: 'Power Pivot xóa giới hạn 1 triệu dòng và cho phép nối nhiều bảng bằng ngôn ngữ DAX.',
      body: [
        { h: 'Power Pivot & DAX', p: 'Một data model thực thụ ngay trong Excel: nối nhiều bảng (data modeling) và viết measure bằng DAX.' },
        { code: 'Total Revenue := SUMX(\n    Sales,\n    Sales[Qty] * Sales[Price]\n)', lang: 'dax' },
        { note: 'Đây chính là cây cầu sang Power BI — cùng engine (VertiPaq), cùng ngôn ngữ DAX. Học ở Excel, dùng lại được ở Power BI.' },
      ],
    },

    /* ─────────────── STATISTICS ─────────────── */
    'stat-desc': {
      cluster: 'STATISTICS',
      summary: 'Tóm tắt và mô tả các đặc điểm cơ bản của một tập dữ liệu: xu hướng trung tâm và độ phân tán.',
      source: 'Nguồn: Practical Statistics for Data Scientists.',
      body: [
        { h: 'Xu hướng trung tâm', p: 'Mean rất nhạy với outliers; Median chống chịu tốt hơn. Khi dữ liệu lệch (skewed), Median phản ánh "điển hình" tốt hơn Mean.' },
        { h: 'Độ phân tán — Phương sai & Độ lệch chuẩn', p: 'Cho biết dữ liệu trải rộng thế nào quanh giá trị trung bình.' },
        { formula: 'σ²  =  Σ (xᵢ − μ)²\n      ──────────\n           N', caption: 'Variance σ² là trung bình bình phương khoảng cách tới mean μ. Std dev σ = √σ².' },
        { calc: 'Tính std dev cho [2, 4, 4, 6]', steps: [
          'μ = (2+4+4+6) / 4 = 4',
          'Σ(xᵢ − μ)² = 4 + 0 + 0 + 4 = 8',
          'σ² = 8 / 4 = 2',
          'σ = √2 ≈ 1.41',
        ]},
        { note: 'IQR = Q3 − Q1. Một điểm là outlier nếu nằm ngoài [Q1 − 1.5·IQR, Q3 + 1.5·IQR] (boxplot rule).' },
      ],
    },
    'stat-prob': {
      cluster: 'STATISTICS',
      summary: 'Xác suất định lượng khả năng xảy ra của một sự kiện — nền tảng của mọi suy luận thống kê.',
      body: [
        { h: 'Khái niệm', p: 'Probability P là số từ 0 đến 1. Conditional probability P(A|B) là xác suất A xảy ra khi đã biết B.' },
        { h: "Bayes' Theorem", p: 'Cập nhật niềm tin khi có bằng chứng mới — nền tảng của nhiều thuật toán ML.' },
        { formula: 'P(A│B)  =  P(B│A) · P(A)\n           ─────────────\n                P(B)', caption: 'Posterior ∝ Likelihood × Prior.' },
        { calc: 'Test bệnh: prevalence 1%, sensitivity 99%, false-positive 5%', steps: [
          'P(bệnh) = 0.01,  P(+|bệnh) = 0.99',
          'P(+) = 0.99·0.01 + 0.05·0.99 = 0.0594',
          'P(bệnh|+) = (0.99 · 0.01) / 0.0594',
          'P(bệnh|+) ≈ 16.7%  (thấp đến bất ngờ!)',
        ]},
      ],
    },
    'stat-infer': {
      cluster: 'STATISTICS',
      summary: 'Rút ra kết luận về một quần thể (population) dựa trên một mẫu (sample).',
      source: 'Nguồn: The Art of Statistics.',
      body: [
        { h: 'Central Limit Theorem', p: 'Bất kể phân phối gốc thế nào, khi lấy mẫu đủ lớn (n > 30) và tính trung bình, phân phối của các trung bình mẫu sẽ xấp xỉ Phân phối Chuẩn.' },
        { h: 'Confidence Interval 95%', p: '"Tự tin 95% rằng mean thật của quần thể nằm trong khoảng A → B."' },
        { formula: 'CI  =  x̄  ±  z · σ/√n', caption: 'z = 1.96 cho mức tin cậy 95%. Mẫu càng lớn (n↑) thì khoảng càng hẹp.' },
        { h: 'Hypothesis Testing', p: 'H₀ (null): không có khác biệt. H₁: có khác biệt. p-value là xác suất thấy kết quả này (hoặc cực đoan hơn) nếu H₀ đúng.' },
        { note: 'p-value < 0.05 ⇒ bác bỏ H₀. Nhưng "có ý nghĩa thống kê" ≠ "quan trọng về kinh doanh" — luôn nhìn cả effect size.' },
      ],
    },
    'stat-abtest': {
      cluster: 'STATISTICS',
      summary: 'Ứng dụng thực tế lớn nhất của Hypothesis Testing: so sánh hai phiên bản A vs B để ra quyết định.',
      body: [
        { h: 'A/B Testing', p: 'Chia traffic giữa Control (A) và Variant (B), đo một metric, rồi kiểm định xem khác biệt có thật hay chỉ do ngẫu nhiên.' },
        { list: [
          ['Chọn 1 metric', 'Ví dụ conversion rate — đừng đo 10 thứ cùng lúc.'],
          ['Sample size đủ lớn', 'Để đạt statistical power (thường ≥ 80%).'],
          ['Tránh p-hacking', 'Không dừng test sớm khi vừa thấy kết quả có lợi.'],
        ]},
        { formula: 'n  ≈  16 · σ²\n      ────────\n          δ²', caption: 'Ước lượng nhanh sample size mỗi nhánh; δ = hiệu ứng tối thiểu muốn phát hiện.' },
        { calc: 'Cần bao nhiêu user mỗi nhánh?', steps: [
          'Baseline CR = 10%,  muốn phát hiện +2% (δ = 0.02)',
          'σ² ≈ p(1−p) = 0.10 · 0.90 = 0.09',
          'n ≈ 16 · 0.09 / 0.02² = 1.44 / 0.0004',
          'n ≈ 3,600 user / nhánh',
        ]},
      ],
    },

    /* ─────────────── SQL ─────────────── */
    'sql-intro': {
      cluster: 'SQL & DATABASES',
      summary: 'CSDL quan hệ lưu dữ liệu trong các bảng (rows & columns) có quan hệ với nhau.',
      body: [
        { h: 'Hệ quản trị CSDL Quan hệ (RDBMS)', p: 'Dữ liệu được lưu trong các bảng liên kết. Hai khái niệm khóa là nền tảng:' },
        { list: [
          ['Primary Key', 'Định danh duy nhất cho mỗi dòng trong bảng.'],
          ['Foreign Key', 'Cột trỏ tới Primary Key của bảng khác → tạo quan hệ.'],
        ]},
        { code: 'CREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  total       DECIMAL(10,2)\n);', lang: 'sql' },
        { note: 'OLTP (ghi/giao dịch hằng ngày) khác OLAP (đọc/phân tích). Data Analyst hầu như làm việc trên hệ OLAP.' },
      ],
    },
    'sql-query': {
      cluster: 'SQL & DATABASES',
      summary: 'Bộ khung SELECT … FROM … WHERE … GROUP BY là xương sống của mọi truy vấn phân tích.',
      body: [
        { h: 'Truy vấn cơ bản', p: 'Thứ tự viết: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY.' },
        { code: "SELECT category,\n       SUM(sales) AS total_sales,\n       COUNT(*)   AS n_orders\nFROM orders\nWHERE status = 'paid'\nGROUP BY category\nHAVING SUM(sales) > 1000\nORDER BY total_sales DESC;", lang: 'sql' },
        { list: [
          ['WHERE', 'Lọc dòng TRƯỚC khi gom nhóm.'],
          ['HAVING', 'Lọc kết quả SAU khi đã gom nhóm.'],
          ['GROUP BY', 'Gom các dòng cùng giá trị để tổng hợp.'],
        ]},
      ],
    },
    'sql-joins': {
      cluster: 'SQL & DATABASES',
      summary: 'Kỹ năng quan trọng bậc nhất của Data Analyst — kết nối dữ liệu từ nhiều bảng.',
      body: [
        { h: 'JOINs — kết nối các bảng', p: 'Ghép các dòng từ hai (hay nhiều) bảng dựa trên một cột chung. Đây là kỹ năng dùng nhiều nhất hằng ngày.' },
        { list: [
          ['INNER JOIN', 'Chỉ lấy dòng có ở CẢ hai bảng.'],
          ['LEFT JOIN', 'Tất cả dòng bảng trái + dữ liệu khớp ở bảng phải (NULL nếu không khớp).'],
          ['RIGHT JOIN', 'Ngược lại LEFT JOIN.'],
          ['FULL OUTER JOIN', 'Mọi dòng có mặt ở một trong hai bảng.'],
        ]},
        { code: "SELECT c.name, COALESCE(SUM(o.total), 0) AS spent\nFROM customers c\nLEFT JOIN orders o\n  ON o.customer_id = c.id\nGROUP BY c.name\nORDER BY spent DESC;", lang: 'sql' },
        { note: 'Dùng LEFT JOIN khi bạn muốn GIỮ tất cả khách hàng — kể cả người chưa mua gì (spent = 0).' },
      ],
    },
    'sql-window': {
      cluster: 'SQL & DATABASES',
      summary: 'Tính toán trên một tập dòng liên quan mà KHÔNG làm "mất" các dòng đó (khác GROUP BY).',
      body: [
        { h: 'Window Functions', p: 'Chạy phép tính trên một "cửa sổ" các dòng liên quan tới dòng hiện tại, nhưng vẫn giữ nguyên từng dòng trong kết quả.' },
        { code: "SELECT employee, department, salary,\n  RANK() OVER (\n    PARTITION BY department\n    ORDER BY salary DESC\n  ) AS dept_rank,\n  salary - AVG(salary) OVER (PARTITION BY department) AS vs_avg\nFROM employees;", lang: 'sql' },
        { list: [
          ['ROW_NUMBER()', 'Đánh số thứ tự duy nhất.'],
          ['RANK() / DENSE_RANK()', 'Xếp hạng (RANK để trống thứ hạng khi đồng hạng).'],
          ['LAG() / LEAD()', 'Lấy giá trị dòng trước / sau — tính tăng trưởng MoM.'],
        ]},
      ],
    },
    'sql-etl': {
      cluster: 'SQL & DATABASES',
      summary: 'ETL = Extract → Transform → Load. Data Warehouse là CSDL tối ưu cho phân tích (OLAP).',
      body: [
        { h: 'ETL & Data Warehousing', p: 'Trích xuất dữ liệu từ nhiều nguồn, biến đổi cho sạch & nhất quán, rồi nạp vào kho dữ liệu để phân tích.' },
        { list: [
          ['Extract', 'Kéo dữ liệu từ app DB, API, file.'],
          ['Transform', 'Làm sạch, chuẩn hóa, gộp.'],
          ['Load', 'Nạp vào warehouse: BigQuery, Redshift, Snowflake.'],
        ]},
        { note: 'Xu hướng hiện đại là ELT: nạp dữ liệu thô vào warehouse trước, rồi transform bằng SQL ngay trong warehouse (vd dbt).' },
      ],
    },

    /* ─────────────── DATAVIZ & POWER BI ─────────────── */
    'pbi-prep': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Dùng Power Query Editor để Extract & Transform dữ liệu trước khi đưa vào Data Model.',
      body: [
        { h: 'Chuẩn bị dữ liệu trong Power BI', p: 'Cùng engine Power Query như Excel, nhưng kết nối được hàng trăm nguồn dữ liệu. Mọi thao tác làm sạch nên xảy ra ở đây.' },
        { list: [
          ['Kết nối', 'SQL, CSV, SharePoint, Web, Service.'],
          ['Làm sạch', 'Đổi kiểu dữ liệu, bỏ cột thừa, unpivot.'],
          ['Refresh', 'Lên lịch tự động làm mới dữ liệu.'],
        ]},
        { note: 'Quy tắc: Transform ở Power Query, KHÔNG ở biểu đồ. Model càng gọn thì DAX càng dễ và báo cáo càng nhanh.' },
      ],
    },
    'pbi-model': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Bước quan trọng nhất để Power BI chạy nhanh và DAX viết dễ: mô hình sao (Star Schema).',
      body: [
        { h: 'Data Modeling — Star Schema', p: 'Một Fact Table ở giữa, nhiều Dimension Tables xung quanh, nối bằng quan hệ 1-N.' },
        { list: [
          ['Fact Table', 'Sự kiện/giao dịch: Sales, Orders. Nhiều con số, nhiều dòng.'],
          ['Dimension Table', 'Bối cảnh để lọc/gom: Products, Customers, Calendar.'],
          ['Quan hệ 1-N', 'One-to-Many là loại quan hệ lý tưởng nhất.'],
        ]},
        { note: 'Tránh bảng phẳng (flat table) khổng lồ. Star schema giúp filter lan truyền đúng và giảm dung lượng nhờ nén VertiPaq.' },
      ],
    },
    'pbi-dax': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'DAX (Data Analysis Expressions) tạo ra các metric tính toán động theo ngữ cảnh lọc.',
      body: [
        { h: 'Measure vs Calculated Column', p: 'Calculated Column tính từng dòng, tốn RAM (dùng cho slicer). Measure tính "on-the-fly" khi thả vào biểu đồ — nhẹ và linh hoạt.' },
        { code: 'Total Sales = SUM( Sales[Amount] )\n\nSales YoY % =\nVAR ThisYear = [Total Sales]\nVAR LastYear =\n    CALCULATE( [Total Sales],\n        SAMEPERIODLASTYEAR( Calendar[Date] ) )\nRETURN\n    DIVIDE( ThisYear - LastYear, LastYear )', lang: 'dax' },
        { note: 'CALCULATE là hàm quan trọng nhất của DAX — nó thay đổi Filter Context, nền tảng của mọi phép tính nâng cao (YTD, % of total…).' },
      ],
    },
    'pbi-viz': {
      cluster: 'DATAVIZ & POWER BI',
      summary: 'Kể chuyện với dữ liệu: chọn đúng biểu đồ, loại bỏ lộn xộn, dẫn dắt sự chú ý.',
      source: 'Nguồn: Storytelling with Data (Cole Nussbaumer Knaflic).',
      body: [
        { h: 'Chọn đúng biểu đồ', p: 'Loại biểu đồ phải khớp với câu hỏi:' },
        { list: [
          ['So sánh', 'Bar / Column chart.'],
          ['Xu hướng theo thời gian', 'Line / Area chart.'],
          ['Tỷ trọng', 'Stacked bar, Treemap. Pie chỉ khi < 4 phần.'],
          ['Phân tán / quan hệ', 'Scatter plot, Histogram.'],
        ]},
        { note: 'Decluttering: làm mờ gridline, bỏ viền, bỏ shadow. Dùng MỘT màu nhấn để chỉ vào insight quan trọng nhất, phần còn lại để xám.' },
      ],
    },

    /* ─────────────── PYTHON ─────────────── */
    'py-pandas': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Thư viện quan trọng nhất để thao tác dữ liệu dạng bảng — "SQL cho Python".',
      body: [
        { h: 'Pandas', p: 'DataFrame với Python cũng như Table với SQL. Lọc, gom nhóm, nối và biến đổi dữ liệu trong vài dòng.' },
        { code: "import pandas as pd\n\ndf = pd.read_csv('orders.csv')\n\ntop = (df[df['total'] > 1000]\n       .groupby('region')['total']\n       .sum()\n       .sort_values(ascending=False))\n\nprint(top.head())", lang: 'python' },
        { list: [
          ['Series', 'Mảng 1 chiều có nhãn.'],
          ['DataFrame', 'Bảng 2 chiều (như Excel/SQL table).'],
          ['.groupby() / .merge()', 'Tương đương GROUP BY và JOIN của SQL.'],
        ]},
      ],
    },
    'py-eda': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Exploratory Data Analysis — bước đầu tiên khi nhận một dataset mới.',
      body: [
        { h: 'Khám phá dữ liệu (EDA)', p: 'Trước khi mô hình hóa, hãy hiểu hình dạng, chất lượng và quan hệ trong dữ liệu.' },
        { code: "df.info()           # kiểu dữ liệu & missing\ndf.describe()       # mean, std, min, quartiles\ndf.isna().sum()     # đếm giá trị thiếu\ndf.corr(numeric_only=True)  # ma trận tương quan", lang: 'python' },
        { list: [
          ['Distribution', 'Vẽ histogram để xem độ lệch (skew).'],
          ['Outliers', 'Boxplot + quy tắc IQR.'],
          ['Correlation', 'Heatmap để tìm biến liên quan.'],
        ]},
        { note: 'Correlation ≠ Causation. Tương quan cao chỉ là gợi ý để điều tra tiếp, không phải bằng chứng nhân quả.' },
      ],
    },
    'py-viz': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Matplotlib & Seaborn để trực quan hóa nhanh trong quá trình phân tích.',
      body: [
        { h: 'Matplotlib / Seaborn', p: 'Matplotlib là nền tảng; Seaborn là lớp cao cấp đẹp hơn cho biểu đồ thống kê.' },
        { code: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.histplot(df['total'], bins=30, kde=True)\nplt.title('Distribution of Order Value')\nplt.xlabel('Total ($)')\nplt.show()", lang: 'python' },
        { note: 'Biểu đồ trong EDA là để BẠN hiểu dữ liệu — nhanh và xấu cũng được. Biểu đồ trong báo cáo là để NGƯỜI KHÁC hiểu — lúc đó mới chăm chút.' },
      ],
    },
    'py-ml': {
      cluster: 'PYTHON FOR DATA',
      summary: 'Machine Learning cơ bản với Scikit-Learn: học có giám sát vs không giám sát.',
      body: [
        { h: 'Intro to Machine Learning', p: 'Hai nhóm lớn của ML:' },
        { list: [
          ['Supervised', 'Có label/target. Regression (dự đoán giá), Classification (lọc spam).'],
          ['Unsupervised', 'Không có label. Clustering (phân cụm khách hàng — K-Means).'],
        ]},
        { code: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42)\n\nmodel = LinearRegression().fit(X_train, y_train)\nprint('R² =', model.score(X_test, y_test))", lang: 'python' },
        { note: 'Luôn chia Train/Test. Đánh giá mô hình trên dữ liệu nó CHƯA thấy — nếu không bạn chỉ đang đo khả năng học thuộc lòng (overfitting).' },
      ],
    },
  },
};
