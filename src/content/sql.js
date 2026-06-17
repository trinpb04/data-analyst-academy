// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Block `code` để chuỗi chung; comment trong code dùng tiếng Anh cho trung lập.
export const sqlLessons = {
  'sql-intro': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Cơ sở dữ liệu quan hệ (RDBMS) lưu trữ dữ liệu trong các bảng (rows & columns) liên kết chặt chẽ với nhau. SQL là ngôn ngữ để trò chuyện với nó.',
      en: 'A relational database (RDBMS) stores data in tightly linked tables (rows & columns). SQL is the language you use to talk to it.',
    },
    source: { vi: 'Nguồn tham khảo: SQL Quickstart Guide.', en: 'Reference: SQL Quickstart Guide.' },
    body: [
      { h: { vi: 'Hệ quản trị CSDL Quan hệ (RDBMS)', en: 'Relational Database Management System (RDBMS)' },
        p: { vi: 'Khác với Excel nơi mọi thứ có thể là một đống hỗn độn, RDBMS duy trì sự toàn vẹn dữ liệu cực kỳ khắt khe. Nó dựa trên hai hòn đá tảng:', en: 'Unlike Excel where everything can become a mess, an RDBMS enforces data integrity very strictly. It rests on two cornerstones:' } },
      { list: [
        [{ vi: 'Primary Key (Khóa chính)', en: 'Primary Key' }, { vi: 'Một hoặc một tập cột nhận diện ĐỘC NHẤT mỗi dòng (ví dụ `user_id`). Không bao giờ trùng, không bao giờ rỗng.', en: 'One or a set of columns that UNIQUELY identifies each row (e.g. `user_id`). Never duplicated, never null.' }],
        [{ vi: 'Foreign Key (Khóa ngoại)', en: 'Foreign Key' }, { vi: 'Cột trong bảng này trỏ đến Primary Key của bảng khác. Đây là "sợi dây" tạo ra mối Quan hệ (Relationship) giữa các bảng.', en: 'A column that points to another table’s primary key. It is the “thread” that creates relationships between tables.' }],
      ]},
      { code: 'CREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  order_date  DATE NOT NULL,\n  total       DECIMAL(10,2)\n);', lang: 'sql' },
      { h: { vi: 'OLTP vs. OLAP', en: 'OLTP vs. OLAP' },
        p: { vi: 'Hiểu môi trường bạn đang làm việc là vô cùng quan trọng:', en: 'Knowing which environment you’re working in matters a lot:' } },
      { list: [
        [{ vi: 'OLTP (Online Transaction Processing)', en: 'OLTP (Online Transaction Processing)' }, { vi: 'DB của ứng dụng. Thiết kế để ghi/xóa/sửa hàng triệu giao dịch nhỏ mỗi giây. Nhanh, chuẩn hóa cao (nhiều bảng). VD: MySQL, PostgreSQL.', en: 'The application’s database. Built to write/update/delete millions of tiny transactions per second. Fast, highly normalised (many tables). E.g. MySQL, PostgreSQL.' }],
        [{ vi: 'OLAP (Online Analytical Processing)', en: 'OLAP (Online Analytical Processing)' }, { vi: 'Data Warehouse của bạn. Thiết kế để đọc hàng triệu dòng cùng lúc cho báo cáo. Lưu lịch sử, ít bảng hơn (star schema). VD: BigQuery, Snowflake, Redshift.', en: 'Your data warehouse. Built to read millions of rows at once for reporting. Stores history, fewer tables (star schema). E.g. BigQuery, Snowflake, Redshift.' }],
      ]},
      { note: { vi: 'Data Analyst thường chỉ được cấp quyền SELECT (đọc) trên OLAP để phân tích, tránh làm sập hệ thống OLTP đang phục vụ khách hàng.', en: 'Analysts usually get SELECT (read) access only on OLAP, to avoid crashing the live OLTP system serving customers.' } },
    ],
  },
  'sql-query': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Bộ khung SELECT … FROM … WHERE … GROUP BY là xương sống của 90% truy vấn phân tích hằng ngày.',
      en: 'The SELECT … FROM … WHERE … GROUP BY skeleton is the backbone of 90% of everyday analytical queries.',
    },
    body: [
      { h: { vi: 'Thứ tự Viết vs. Thứ tự Thực thi', en: 'Written order vs. Execution order' },
        p: { vi: 'Để tối ưu SQL, bạn phải biết máy chủ đọc câu lệnh theo thứ tự nào. Lưu ý: nó KHÔNG bắt đầu từ SELECT.', en: 'To optimise SQL, you must know the order the engine reads your statement. Note: it does NOT start at SELECT.' } },
      { list: [
        [{ vi: '1. FROM / JOIN', en: '1. FROM / JOIN' }, { vi: 'Đầu tiên, máy chủ tìm các bảng và ghép chúng lại.', en: 'First the engine finds the tables and joins them.' }],
        [{ vi: '2. WHERE', en: '2. WHERE' }, { vi: 'Sau đó vứt bỏ ngay các dòng không thỏa điều kiện.', en: 'Then it immediately drops rows that fail the condition.' }],
        [{ vi: '3. GROUP BY', en: '3. GROUP BY' }, { vi: 'Tiếp theo, gom các dòng còn lại thành nhóm.', en: 'Next it groups the remaining rows.' }],
        [{ vi: '4. HAVING', en: '4. HAVING' }, { vi: 'Bây giờ mới lọc các nhóm (ví dụ chỉ lấy nhóm có doanh thu > 1000).', en: 'Only now does it filter the groups (e.g. keep groups with revenue > 1000).' }],
        [{ vi: '5. SELECT', en: '5. SELECT' }, { vi: 'Bây giờ mới xuất các cột bạn yêu cầu và tính SUM, AVG…', en: 'Only now does it output your columns and compute SUM, AVG…' }],
        [{ vi: '6. ORDER BY / LIMIT', en: '6. ORDER BY / LIMIT' }, { vi: 'Cuối cùng, sắp xếp và giới hạn kết quả trả về.', en: 'Finally it sorts and limits the returned result.' }],
      ]},
      { code: "-- Goal: top 3 best-selling categories (excluding 'Promotion')\n-- with total sales over $10,000\nSELECT category,\n       SUM(sales) AS total_sales,\n       COUNT(*)   AS n_orders\nFROM orders\nWHERE category != 'Promotion'\nGROUP BY category\nHAVING SUM(sales) > 10000\nORDER BY total_sales DESC\nLIMIT 3;", lang: 'sql' },
      { note: { vi: 'Lỗi kinh điển: không thể dùng Alias (ví dụ `total_sales`) trong WHERE, vì WHERE chạy TRƯỚC khi SELECT tạo ra cái tên `total_sales`!', en: 'Classic mistake: you can’t use an alias (e.g. `total_sales`) in WHERE, because WHERE runs BEFORE SELECT creates the name `total_sales`!' } },
    ],
  },
  'sql-joins': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Nghệ thuật kết nối (JOIN) là kỹ năng quan trọng bậc nhất. Hiểu sai JOIN, dữ liệu sẽ bị nhân bản (duplicate) hoặc biến mất (drop).',
      en: 'The art of the JOIN is a top-tier skill. Get it wrong and your data gets duplicated or silently dropped.',
    },
    body: [
      { h: { vi: 'Tại sao phải JOIN?', en: 'Why JOIN?' },
        p: { vi: 'Dữ liệu được chia nhỏ thành nhiều bảng để tránh trùng lặp. JOIN khâu chúng lại thành một bảng nhìn toàn cảnh.', en: 'Data is split across tables to avoid duplication. JOIN stitches them back into one full picture.' } },
      { list: [
        [{ vi: 'INNER JOIN', en: 'INNER JOIN' }, { vi: 'Mặc định. Chỉ giữ những dòng có "sự bắt tay" ở CẢ HAI bảng.', en: 'The default. Keeps only rows that match in BOTH tables.' }],
        [{ vi: 'LEFT JOIN', en: 'LEFT JOIN' }, { vi: 'Giữ TẤT CẢ dòng bảng trái. Nếu bảng phải không khớp, điền NULL. (RIGHT JOIN thì ngược lại.)', en: 'Keeps ALL left-table rows. If the right table doesn’t match, fills NULL. (RIGHT JOIN is the mirror.)' }],
        [{ vi: 'FULL OUTER JOIN', en: 'FULL OUTER JOIN' }, { vi: 'Giữ lại mọi dòng từ cả hai bảng.', en: 'Keeps every row from both tables.' }],
        [{ vi: 'CROSS JOIN', en: 'CROSS JOIN' }, { vi: 'Tích Đề-các. Mỗi dòng bảng A nhân với mọi dòng bảng B. Rất nguy hiểm nếu bảng lớn; thường dùng để tạo lưới lịch.', en: 'A Cartesian product. Every row of A times every row of B. Dangerous on large tables; often used to build a calendar grid.' }],
      ]},
      { code: "-- Total spend per customer. If a customer bought nothing, still show them as 0.\nSELECT \n    c.customer_id,\n    c.name, \n    COALESCE(SUM(o.total), 0) AS lifetime_spent\nFROM customers c\nLEFT JOIN orders o\n  ON c.customer_id = o.customer_id\nGROUP BY \n    c.customer_id, \n    c.name\nORDER BY \n    lifetime_spent DESC;", lang: 'sql' },
      { note: { vi: 'Mẹo: COALESCE(column, 0) cực hữu ích kết hợp LEFT JOIN để biến các giá trị NULL (do không khớp) thành 0 gọn gàng cho tính toán.', en: 'Tip: COALESCE(column, 0) pairs beautifully with LEFT JOIN to turn unmatched NULLs into a clean 0 for calculations.' } },
    ],
  },
  'sql-window': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Kỹ năng Advanced SQL: tính toán trên một tập dòng liên quan (Window) mà KHÔNG làm "mất" các dòng đó (như GROUP BY làm).',
      en: 'Advanced SQL: compute over a related set of rows (a window) WITHOUT collapsing them away (the way GROUP BY does).',
    },
    body: [
      { h: { vi: 'Sự kỳ diệu của OVER()', en: 'The magic of OVER()' },
        p: { vi: 'GROUP BY nén 100 dòng thành 1 dòng tổng. Window Function tính ra giá trị tổng đó và DÁN nó cạnh ĐỦ 100 dòng gốc.', en: 'GROUP BY compresses 100 rows into 1 total. A window function computes that total and PASTES it next to all 100 original rows.' } },
      { list: [
        [{ vi: 'PARTITION BY', en: 'PARTITION BY' }, { vi: 'Đóng vai trò như GROUP BY bên trong Window, dùng để chia khung cửa sổ.', en: 'Acts like GROUP BY inside the window — it splits the window into partitions.' }],
        [{ vi: 'ORDER BY', en: 'ORDER BY' }, { vi: 'Quy định thứ tự dòng chảy bên trong cửa sổ để tính Running Total hoặc Ranking.', en: 'Defines the row order inside the window for running totals or ranking.' }],
      ]},
      { code: "-- Rank employee salaries WITHIN each department\n-- and show how far each sits from the department average.\nSELECT \n  employee_name, \n  department, \n  salary,\n  RANK() OVER (\n    PARTITION BY department \n    ORDER BY salary DESC\n  ) AS dept_rank,\n  AVG(salary) OVER (\n    PARTITION BY department\n  ) AS dept_avg_salary,\n  salary - AVG(salary) OVER (PARTITION BY department) AS diff_vs_avg\nFROM employees;", lang: 'sql' },
      { h: { vi: 'Các hàm Window thiết yếu', en: 'Essential window functions' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'ROW_NUMBER()', en: 'ROW_NUMBER()' }, { vi: 'Đánh số 1, 2, 3… liên tục. Dùng để lấy dòng mới nhất (WHERE rn = 1).', en: 'Numbers rows 1, 2, 3… with no gaps. Used to grab the latest row (WHERE rn = 1).' }],
        [{ vi: 'RANK() / DENSE_RANK()', en: 'RANK() / DENSE_RANK()' }, { vi: 'Xếp hạng. RANK() bỏ qua số nếu đồng hạng (1, 1, 3). DENSE_RANK() thì không (1, 1, 2).', en: 'Ranking. RANK() skips numbers on ties (1, 1, 3). DENSE_RANK() does not (1, 1, 2).' }],
        [{ vi: 'LAG() / LEAD()', en: 'LAG() / LEAD()' }, { vi: 'Đỉnh cao cho Time-series. Lấy giá trị dòng NGAY TRƯỚC (hoặc sau). Dùng tính % tăng trưởng tháng này so tháng trước (MoM).', en: 'Time-series gold. Grabs the value of the PREVIOUS (or next) row. Used for month-over-month (MoM) growth %.' }],
      ]},
      { h: { vi: 'Frame Clause: Running Total & Moving Average', en: 'Frame Clause: Running Total & Moving Average' },
        p: { vi: 'Mặc định nhiều DB tính cửa sổ từ đầu nhóm đến dòng hiện tại. Mệnh đề ROWS/RANGE BETWEEN cho bạn kiểm soát chính xác "khung trượt" — chìa khóa để tính tổng lũy kế và trung bình trượt.', en: 'By default many databases frame from the start of the partition to the current row. The ROWS/RANGE BETWEEN clause gives you precise control of the sliding frame — the key to running totals and moving averages.' } },
      { code: "-- Running total + 7-day moving average\nSELECT\n  order_date,\n  daily_rev,\n  SUM(daily_rev) OVER (\n    ORDER BY order_date\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS running_total,\n  AVG(daily_rev) OVER (\n    ORDER BY order_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_7d\nFROM daily_sales;", lang: 'sql' },
      { note: { vi: 'Phân biệt ROWS vs RANGE: ROWS đếm theo số DÒNG vật lý, RANGE gom các dòng có cùng GIÁ TRỊ ORDER BY. Khi có ngày trùng, hai cái cho kết quả khác nhau — bẫy phỏng vấn senior.', en: 'ROWS vs RANGE: ROWS counts physical rows, RANGE groups rows sharing the same ORDER BY value. With duplicate dates the two differ — a classic senior interview trap.' } },
    ],
  },
  'sql-etl': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Hệ sinh thái luân chuyển dữ liệu: từ ứng dụng thô, qua pipelines, vào kho (warehouse) để bạn phân tích.',
      en: 'The data-movement ecosystem: from raw apps, through pipelines, into the warehouse for you to analyse.',
    },
    body: [
      { h: { vi: 'Quy trình ETL truyền thống', en: 'The traditional ETL process' },
        p: { vi: 'Extract (Trích xuất) → Transform (Biến đổi) → Load (Nạp).', en: 'Extract → Transform → Load.' } },
      { list: [
        [{ vi: 'Extract', en: 'Extract' }, { vi: 'Kéo dữ liệu từ app DB (MySQL), CRM (Salesforce), Ads API (Facebook).', en: 'Pull data from app DBs (MySQL), CRMs (Salesforce), ad APIs (Facebook).' }],
        [{ vi: 'Transform', en: 'Transform' }, { vi: 'Làm sạch, định dạng ngày tháng, tính toán trên một server trung gian.', en: 'Clean, format dates, compute on an intermediate server.' }],
        [{ vi: 'Load', en: 'Load' }, { vi: 'Đổ kết quả cuối cùng vào Data Warehouse.', en: 'Dump the final result into the data warehouse.' }],
      ]},
      { h: { vi: 'Sự trỗi dậy của ELT và dbt', en: 'The rise of ELT and dbt' },
        p: { vi: 'Nhờ năng lực điện toán khổng lồ của các Cloud Warehouse (BigQuery, Snowflake), quy trình hiện đại đổi thành ELT.', en: 'Thanks to the massive compute of cloud warehouses (BigQuery, Snowflake), the modern flow flips to ELT.' } },
      { list: [
        [{ vi: 'E & L trước', en: 'E & L first' }, { vi: 'Nạp thẳng toàn bộ dữ liệu thô (raw) vào Warehouse.', en: 'Load all raw data straight into the warehouse.' }],
        [{ vi: 'T sau cùng (In-warehouse Transformation)', en: 'T last (in-warehouse transformation)' }, { vi: 'Analyst giờ dùng chính SQL để viết mã chuyển đổi ngay trong Warehouse, qua công cụ như dbt (Data Build Tool).', en: 'Analysts now use SQL itself to transform data right inside the warehouse, with tools like dbt (Data Build Tool).' }],
      ]},
      { h: { vi: 'Common Table Expressions (CTEs)', en: 'Common Table Expressions (CTEs)' },
        p: { vi: 'Kỹ năng thiết yếu để viết mã Transform phức tạp một cách rõ ràng (thay vì lồng hàng tá subquery vào nhau).', en: 'An essential skill for writing complex transformations clearly (instead of nesting dozens of subqueries).' } },
      { code: "-- Use WITH to build readable temporary tables\nWITH monthly_revenue AS (\n    SELECT \n        DATE_TRUNC('month', order_date) as mth,\n        SUM(amount) as rev\n    FROM orders\n    GROUP BY 1\n),\nprev_month AS (\n    SELECT \n        mth,\n        rev,\n        LAG(rev) OVER (ORDER BY mth) as last_rev\n    FROM monthly_revenue\n)\nSELECT \n    mth, \n    rev, \n    last_rev,\n    (rev - last_rev) / last_rev * 100 AS mom_growth\nFROM prev_month;", lang: 'sql' },
    ],
  },
  'sql-opt': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Tối ưu hóa truy vấn (Query Optimization): làm sao để câu SQL chạy trong 2 giây thay vì 20 phút.',
      en: 'Query optimization: how to make your SQL run in 2 seconds instead of 20 minutes.',
    },
    body: [
      { h: { vi: 'Đọc Kế hoạch Thực thi (Execution Plan)', en: 'Reading the Execution Plan' },
        p: { vi: 'Trước khi chạy, máy chủ lập một bản kế hoạch. Thêm EXPLAIN trước câu SELECT để xem nó. Hãy tìm "nghẽn cổ chai" như Full Table Scan (quét toàn bộ bảng).', en: 'Before running, the engine builds a plan. Put EXPLAIN before your SELECT to see it. Hunt for bottlenecks like a Full Table Scan.' } },
      { list: [
        [{ vi: 'Index (Chỉ mục)', en: 'Index' }, { vi: 'Giống mục lục cuối sách. Thay vì lật từng trang (Full Scan), máy chủ nhìn Index để nhảy thẳng đến dòng cần (Index Seek).', en: 'Like the index at the back of a book. Instead of flipping every page (full scan), the engine uses the index to jump straight to the row (index seek).' }],
        [{ vi: 'SARGable', en: 'SARGable' }, { vi: 'Viết điều kiện WHERE sao cho máy chủ dùng được Index. SARGable = Search ARGument ABLE.', en: 'Write the WHERE clause so the engine can use an index. SARGable = Search ARGument ABLE.' }],
      ]},
      { code: "-- NOT SARGable (must compute per row, ignores the index)\nSELECT * FROM orders \nWHERE YEAR(order_date) = 2023;\n\n-- SARGable (engine can use the index on order_date)\nSELECT * FROM orders \nWHERE order_date >= '2023-01-01' \n  AND order_date < '2024-01-01';", lang: 'sql' },
      { h: { vi: 'Các Best Practice khác', en: 'Other best practices' },
        p: { vi: 'Những nguyên tắc nhỏ tạo ra thay đổi lớn về hiệu năng:', en: 'Small rules that make a big performance difference:' } },
      { list: [
        [{ vi: '1. SELECT *', en: '1. SELECT *' }, { vi: 'Tránh tuyệt đối trong production. Nó bắt máy chủ đọc các cột rác, tốn RAM và làm chậm vận chuyển dữ liệu qua mạng.', en: 'Avoid entirely in production. It forces the engine to read junk columns, wastes RAM and slows the network transfer.' }],
        [{ vi: '2. Lọc sớm nhất có thể', en: '2. Filter as early as possible' }, { vi: 'Dùng WHERE loại bỏ dữ liệu rác TRƯỚC KHI thực hiện JOIN lớn hoặc GROUP BY.', en: 'Use WHERE to drop junk rows BEFORE big JOINs or GROUP BY.' }],
        [{ vi: '3. JOIN trên cột có Index', en: '3. JOIN on indexed columns' }, { vi: 'Thường là khóa chính / khóa ngoại. JOIN trên cột text (tên người) sẽ rất chậm.', en: 'Usually primary/foreign keys. Joining on a text column (a person’s name) is very slow.' }],
      ]},
    ],
  },
  'sql-aggregate': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Làm chủ Aggregation: từ GROUP BY cơ bản đến Conditional Aggregation và GROUPING SETS — kỹ năng tạo báo cáo tổng hợp trực tiếp bằng SQL.',
      en: 'Master aggregation: from basic GROUP BY to conditional aggregation and GROUPING SETS — building summary reports directly in SQL.',
    },
    body: [
      { h: { vi: 'Conditional Aggregation (Pivot bằng CASE)', en: 'Conditional Aggregation (pivot with CASE)' },
        p: { vi: 'Thay vì kéo dữ liệu ra rồi pivot ở Excel, bạn "xoay bảng" ngay trong SQL bằng cách lồng CASE WHEN vào hàm tổng hợp (SUM/COUNT). Một trong những pattern hữu dụng nhất.', en: 'Instead of exporting and pivoting in Excel, you “rotate the table” right in SQL by nesting CASE WHEN inside an aggregate (SUM/COUNT). One of the most useful patterns for an analyst.' } },
      { code: "-- One row per customer, columns = revenue per year\nSELECT\n  customer_id,\n  SUM(CASE WHEN YEAR(order_date) = 2024 THEN amount ELSE 0 END) AS rev_2024,\n  SUM(CASE WHEN YEAR(order_date) = 2025 THEN amount ELSE 0 END) AS rev_2025,\n  -- Conditional count: high-value orders\n  COUNT(*) FILTER (WHERE amount > 1000)               AS high_value_orders\nFROM orders\nGROUP BY customer_id;", lang: 'sql' },
      { note: { vi: 'Cú pháp COUNT(*) FILTER (WHERE ...) là chuẩn ANSI (PostgreSQL, DuckDB). DB cũ hơn (MySQL, SQL Server) dùng SUM(CASE WHEN cond THEN 1 ELSE 0 END) cho kết quả tương đương.', en: 'COUNT(*) FILTER (WHERE ...) is ANSI standard (PostgreSQL, DuckDB). Older DBs (MySQL, SQL Server) use SUM(CASE WHEN cond THEN 1 ELSE 0 END) for the same result.' } },
      { h: { vi: 'GROUPING SETS, ROLLUP & CUBE', en: 'GROUPING SETS, ROLLUP & CUBE' },
        p: { vi: 'Khi cần tổng ở NHIỀU mức chi tiết trong cùng một truy vấn (tổng theo từng vùng VÀ tổng toàn quốc), đừng UNION ALL nhiều câu — dùng GROUPING SETS.', en: 'When you need totals at MULTIPLE levels in one query (per-region AND nationwide), don’t UNION ALL many statements — use GROUPING SETS.' } },
      { list: [
        [{ vi: 'ROLLUP(a, b)', en: 'ROLLUP(a, b)' }, { vi: 'Tạo subtotal theo cấp bậc: (a,b) → (a) → (). Lý tưởng cho dữ liệu phân cấp như Vùng > Tỉnh.', en: 'Hierarchical subtotals: (a,b) → (a) → (). Ideal for hierarchical data like Region > Province.' }],
        [{ vi: 'CUBE(a, b)', en: 'CUBE(a, b)' }, { vi: 'Tạo MỌI tổ hợp: (a,b), (a), (b), (). Dùng khi muốn cross-tab đầy đủ.', en: 'Every combination: (a,b), (a), (b), (). Use for a full cross-tab.' }],
        [{ vi: 'GROUPING SETS(...)', en: 'GROUPING SETS(...)' }, { vi: 'Kiểm soát thủ công chính xác các mức tổng bạn muốn.', en: 'Manually control exactly which total levels you want.' }],
      ]},
      { code: "-- Revenue by (region, category), by (region), and grand total\nSELECT region, category, SUM(amount) AS revenue\nFROM sales\nGROUP BY ROLLUP(region, category)\nORDER BY region, category;", lang: 'sql' },
      { note: { vi: 'Bẫy phỏng vấn: COUNT(col) bỏ qua NULL, còn COUNT(*) đếm cả dòng NULL. AVG(col) cũng tự loại NULL khỏi mẫu số — muốn coi NULL = 0 phải dùng AVG(COALESCE(col, 0)).', en: 'Interview trap: COUNT(col) ignores NULLs while COUNT(*) counts every row. AVG(col) also drops NULLs from the denominator — to treat NULL as 0, use AVG(COALESCE(col, 0)).' } },
    ],
  },
  'sql-pivot': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Pivot & Unpivot trong SQL: chuyển dữ liệu giữa dạng dài (long) và rộng (wide) — bước chuẩn bị dữ liệu cho dashboard và time-series.',
      en: 'Pivot & Unpivot in SQL: reshape data between long and wide form — a key prep step for dashboards and time-series.',
    },
    body: [
      { h: { vi: 'Long vs. Wide Format', en: 'Long vs. Wide format' },
        p: { vi: 'Database lưu dữ liệu dạng "long" (mỗi metric một dòng) để dễ mở rộng. Nhưng con người và một số biểu đồ lại muốn "wide" (mỗi metric một cột). SQL phải dịch qua lại.', en: 'Databases store data “long” (one metric per row) for scalability. But people and some charts want it “wide” (one metric per column). SQL has to translate between them.' } },
      { list: [
        [{ vi: 'Pivot (Long → Wide)', en: 'Pivot (Long → Wide)' }, { vi: 'Biến giá trị trong cột thành tên cột. Dùng Conditional Aggregation (CASE + SUM/MAX).', en: 'Turn column values into column names. Use conditional aggregation (CASE + SUM/MAX).' }],
        [{ vi: 'Unpivot (Wide → Long)', en: 'Unpivot (Wide → Long)' }, { vi: 'Biến nhiều cột thành cặp key-value. Dùng UNION ALL hoặc hàm UNPIVOT/CROSS JOIN LATERAL.', en: 'Turn many columns into key-value pairs. Use UNION ALL or UNPIVOT / CROSS JOIN LATERAL.' }],
      ]},
      { code: "-- Manual UNPIVOT: fold 3 quarter columns into long form via UNION ALL\nSELECT product, 'Q1' AS quarter, q1_sales AS sales FROM report\nUNION ALL\nSELECT product, 'Q2', q2_sales FROM report\nUNION ALL\nSELECT product, 'Q3', q3_sales FROM report;", lang: 'sql' },
      { note: { vi: 'SQL không pivot động được số cột (số cột phải biết trước khi viết query). Nếu giá trị pivot thay đổi liên tục, hãy để SQL trả dạng long và để Power BI / Pandas lo phần pivot — đúng công cụ cho đúng việc.', en: 'SQL can’t dynamically pivot a varying number of columns (the columns must be known when you write the query). If the pivot values change constantly, return long from SQL and let Power BI / Pandas pivot — the right tool for the job.' } },
    ],
  },
  'sql-date': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Xử lý Date/Time và xây Cohort: nhóm theo thời gian, lấp khoảng trống ngày (gap-filling), và tính retention — nền tảng của mọi phân tích tăng trưởng.',
      en: 'Date/time handling and cohorts: bucketing by time, gap-filling missing dates, and computing retention — the foundation of all growth analysis.',
    },
    body: [
      { h: { vi: 'Truncate & Bucket thời gian', en: 'Truncate & bucket time' },
        p: { vi: 'Phân tích theo thời gian luôn bắt đầu bằng việc "gom" timestamp về một mốc chuẩn (ngày, tuần, tháng). DATE_TRUNC là người bạn thân nhất.', en: 'Time analysis always starts by snapping timestamps to a standard boundary (day, week, month). DATE_TRUNC is your best friend.' } },
      { code: "-- Weekly revenue + week-over-week (WoW) comparison\nWITH weekly AS (\n  SELECT DATE_TRUNC('week', order_date) AS wk,\n         SUM(amount)                    AS rev\n  FROM orders\n  GROUP BY 1\n)\nSELECT wk, rev,\n       LAG(rev) OVER (ORDER BY wk)                       AS prev_wk,\n       ROUND(100.0 * (rev - LAG(rev) OVER (ORDER BY wk))\n             / NULLIF(LAG(rev) OVER (ORDER BY wk), 0), 1) AS wow_pct\nFROM weekly\nORDER BY wk;", lang: 'sql' },
      { h: { vi: 'Gap-filling (lấp ngày trống)', en: 'Gap-filling (filling missing dates)' },
        p: { vi: 'Vấn đề kinh điển: những ngày KHÔNG có giao dịch sẽ biến mất khỏi kết quả, làm biểu đồ bị "nhảy cóc". Giải pháp: tạo bảng lịch (date spine) đầy đủ rồi LEFT JOIN dữ liệu vào.', en: 'A classic problem: days with NO transactions vanish from the result, making charts “jump”. Fix: build a full calendar (date spine) and LEFT JOIN the data onto it.' } },
      { code: "-- Build a date spine and fill empty days with 0\nWITH calendar AS (\n  SELECT generate_series(\n           DATE '2025-01-01', DATE '2025-01-31', INTERVAL '1 day'\n         )::date AS d\n)\nSELECT c.d,\n       COALESCE(SUM(o.amount), 0) AS daily_rev\nFROM calendar c\nLEFT JOIN orders o ON o.order_date = c.d\nGROUP BY c.d\nORDER BY c.d;", lang: 'sql' },
      { h: { vi: 'Cohort Retention', en: 'Cohort Retention' },
        p: { vi: 'Đo bằng cách gắn mỗi user với cohort (tháng họ lần đầu hoạt động), rồi đếm số tháng họ còn quay lại — chênh lệch giữa tháng hoạt động và tháng cohort.', en: 'Measure it by tagging each user with a cohort (the month they first acted), then counting which later months they return — the gap between activity month and cohort month.' } },
      { note: { vi: 'Mẹo: tính "month_number = số tháng kể từ lần đầu" bằng DATE_TRUNC tháng hoạt động trừ DATE_TRUNC tháng cohort. Nhóm theo (cohort_month, month_number) là ra ma trận retention chuẩn để đổ vào heatmap.', en: 'Tip: compute “month_number = months since first activity” as DATE_TRUNC(activity month) minus DATE_TRUNC(cohort month). Group by (cohort_month, month_number) and you get a clean retention matrix to feed a heatmap.' } },
    ],
  },
  'sql-quality': {
    cluster: 'SQL & DATABASES',
    summary: {
      vi: 'Defensive SQL: xử lý NULL đúng cách, khử trùng lặp (deduplication), và kiểm thử chất lượng dữ liệu trước khi báo cáo — thứ phân biệt Analyst cẩn thận với người vội vàng.',
      en: 'Defensive SQL: handle NULLs correctly, deduplicate, and run data-quality checks before reporting — what separates a careful analyst from a hasty one.',
    },
    body: [
      { h: { vi: 'Logic 3 trạng thái của NULL', en: 'NULL’s three-valued logic' },
        p: { vi: 'NULL không phải 0 hay rỗng — nó là "không biết". Mọi phép so sánh với NULL đều trả về UNKNOWN (không phải TRUE/FALSE), nguồn gốc của vô số bug âm thầm.', en: 'NULL is neither 0 nor empty — it means “unknown”. Every comparison with NULL returns UNKNOWN (not TRUE/FALSE), the source of countless silent bugs.' } },
      { list: [
        [{ vi: 'NULL = NULL → UNKNOWN', en: 'NULL = NULL → UNKNOWN' }, { vi: 'Phải dùng IS NULL / IS NOT NULL, không bao giờ dùng = NULL.', en: 'Use IS NULL / IS NOT NULL, never = NULL.' }],
        [{ vi: 'NOT IN (subquery có NULL)', en: 'NOT IN (subquery with NULL)' }, { vi: 'Bẫy chết người: nếu subquery chứa dù chỉ 1 NULL, NOT IN trả về 0 dòng. Luôn ưu tiên NOT EXISTS.', en: 'A deadly trap: if the subquery holds even one NULL, NOT IN returns 0 rows. Always prefer NOT EXISTS.' }],
        [{ vi: 'Aggregate bỏ qua NULL', en: 'Aggregates ignore NULL' }, { vi: 'SUM/AVG/COUNT(col) tự loại NULL. Có thể đúng ý hoặc sai ý bạn — phải ý thức rõ.', en: 'SUM/AVG/COUNT(col) drop NULLs automatically. That may be what you want or not — be aware.' }],
      ]},
      { h: { vi: 'Deduplication (khử trùng lặp)', en: 'Deduplication' },
        p: { vi: 'Pattern chuẩn để giữ 1 dòng "mới nhất / tốt nhất" cho mỗi nhóm: dùng ROW_NUMBER() rồi lọc rn = 1.', en: 'The standard pattern to keep one “latest / best” row per group: use ROW_NUMBER() then filter rn = 1.' } },
      { code: "-- Keep the LATEST record per customer_id\nWITH ranked AS (\n  SELECT *,\n         ROW_NUMBER() OVER (\n           PARTITION BY customer_id\n           ORDER BY updated_at DESC\n         ) AS rn\n  FROM customer_snapshots\n)\nSELECT * FROM ranked WHERE rn = 1;", lang: 'sql' },
      { h: { vi: 'Data Quality Checks', en: 'Data Quality Checks' },
        p: { vi: 'Trước khi gửi báo cáo, chạy vài câu kiểm tra nhanh để tránh đưa số sai cho sếp:', en: 'Before sending a report, run a few quick checks so you don’t hand the boss wrong numbers:' } },
      { code: "-- Basic data health checks\nSELECT\n  COUNT(*)                                    AS total_rows,\n  COUNT(*) - COUNT(customer_id)               AS null_customer_ids,\n  COUNT(*) - COUNT(DISTINCT order_id)         AS duplicate_orders,\n  SUM(CASE WHEN amount < 0 THEN 1 ELSE 0 END) AS negative_amounts\nFROM orders;", lang: 'sql' },
      { note: { vi: 'Quy tắc vàng: số liệu chỉ đáng tin bằng dòng dữ liệu tệ nhất trong bảng. COUNT(*) vs COUNT(DISTINCT key) chênh nhau là dấu hiệu JOIN bị fan-out (nhân bản) — phải truy ngay trước khi báo cáo.', en: 'Golden rule: your numbers are only as trustworthy as the worst row in the table. A gap between COUNT(*) and COUNT(DISTINCT key) signals a fan-out (duplication) from a JOIN — chase it down before reporting.' } },
    ],
  },
};
