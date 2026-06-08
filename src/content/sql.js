export const sqlLessons = {
  'sql-intro': {
    cluster: 'SQL & DATABASES',
    summary: 'Cơ sở dữ liệu quan hệ (RDBMS) lưu trữ dữ liệu trong các bảng (rows & columns) có liên kết chặt chẽ với nhau. SQL là ngôn ngữ để trò chuyện với nó.',
    source: 'Nguồn tham khảo: SQL Quickstart Guide.',
    body: [
      { h: 'Hệ quản trị CSDL Quan hệ (RDBMS)', p: 'Khác với Excel nơi mọi thứ có thể là một đống hỗn độn, RDBMS duy trì sự toàn vẹn dữ liệu cực kỳ khắt khe. Nó được xây dựng dựa trên hai hòn đá tảng:' },
      { list: [
        ['Primary Key (Khóa chính)', 'Một hoặc một tập hợp cột giúp nhận diện ĐỘC NHẤT mỗi dòng trong bảng (ví dụ: `user_id`). Không bao giờ trùng lặp, không bao giờ rỗng.'],
        ['Foreign Key (Khóa ngoại)', 'Cột trong bảng này trỏ đến Primary Key của bảng khác. Đây là "sợi dây" tạo ra mối Quan hệ (Relationship) giữa các bảng.'],
      ]},
      { code: 'CREATE TABLE orders (\n  id          INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  order_date  DATE NOT NULL,\n  total       DECIMAL(10,2)\n);', lang: 'sql' },
      { h: 'OLTP vs. OLAP', p: 'Hiểu môi trường bạn đang làm việc là vô cùng quan trọng:' },
      { list: [
        ['OLTP (Online Transaction Processing)', 'DB của ứng dụng (app). Thiết kế để ghi/xóa/sửa hàng triệu giao dịch nhỏ mỗi giây. Nhanh, chuẩn hóa cao (Nhiều bảng). Ví dụ: MySQL, PostgreSQL.'],
        ['OLAP (Online Analytical Processing)', 'Data Warehouse của bạn. Thiết kế để đọc hàng triệu dòng cùng lúc để làm báo cáo. Lưu trữ lịch sử, ít bảng hơn (Star schema). Ví dụ: BigQuery, Snowflake, Redshift.'],
      ]},
      { note: 'Data Analyst thường chỉ được cấp quyền SELECT (đọc) trên OLAP để phân tích, tránh làm sập hệ thống OLTP đang phục vụ khách hàng.' },
    ],
  },
  'sql-query': {
    cluster: 'SQL & DATABASES',
    summary: 'Bộ khung SELECT … FROM … WHERE … GROUP BY là xương sống của 90% truy vấn phân tích hằng ngày.',
    body: [
      { h: 'Thứ tự Viết vs. Thứ tự Thực thi', p: 'Để tối ưu SQL, bạn phải biết máy chủ đọc câu lệnh của bạn theo thứ tự nào. Chú ý, nó KHÔNG bắt đầu từ SELECT:' },
      { list: [
        ['1. FROM / JOIN', 'Đầu tiên, máy chủ tìm các bảng và ghép chúng lại.'],
        ['2. WHERE', 'Sau đó, vứt bỏ ngay các dòng không thỏa mãn điều kiện.'],
        ['3. GROUP BY', 'Tiếp theo, gom các dòng còn lại thành các nhóm.'],
        ['4. HAVING', 'Bây giờ mới lọc các nhóm đó (ví dụ: chỉ lấy nhóm có doanh thu > 1000).'],
        ['5. SELECT', 'Bây giờ mới xuất các cột bạn yêu cầu và tính toán SUM, AVG...'],
        ['6. ORDER BY / LIMIT', 'Cuối cùng, sắp xếp và giới hạn kết quả trả về.'],
      ]},
      { code: "-- Bài toán: Tìm top 3 danh mục bán chạy nhất (trừ danh mục 'Khuyến mãi')\n-- và có tổng doanh số trên $10,000\nSELECT category,\n       SUM(sales) AS total_sales,\n       COUNT(*)   AS n_orders\nFROM orders\nWHERE category != 'Promotion'\nGROUP BY category\nHAVING SUM(sales) > 10000\nORDER BY total_sales DESC\nLIMIT 3;", lang: 'sql' },
      { note: 'Lỗi kinh điển: Không thể dùng Alias (ví dụ `total_sales`) ở trong mệnh đề WHERE, bởi vì WHERE được máy chủ chạy TRƯỚC khi SELECT tạo ra cái tên `total_sales`!' },
    ],
  },
  'sql-joins': {
    cluster: 'SQL & DATABASES',
    summary: 'Nghệ thuật kết nối (JOIN) là kỹ năng quan trọng bậc nhất. Hiểu sai JOIN, dữ liệu của bạn sẽ bị nhân bản (duplicate) hoặc biến mất (drop).',
    body: [
      { h: 'Tại sao phải JOIN?', p: 'Dữ liệu được chia nhỏ thành nhiều bảng để tránh trùng lặp. JOIN giúp ta khâu chúng lại để tạo thành một bảng nhìn toàn cảnh.' },
      { list: [
        ['INNER JOIN', 'Mặc định. Chỉ giữ lại những dòng có "sự bắt tay" ở CẢ HAI bảng.'],
        ['LEFT JOIN', 'Giữ LẠI TẤT CẢ các dòng ở bảng bên trái. Nếu bảng bên phải không có dữ liệu khớp, nó sẽ điền giá trị NULL. (RIGHT JOIN thì ngược lại).'],
        ['FULL OUTER JOIN', 'Giữ lại tất cả mọi dòng từ cả hai bảng.'],
        ['CROSS JOIN', 'Tích Đề-các. Mỗi dòng bảng A nhân với mọi dòng bảng B. Rất nguy hiểm nếu bảng lớn, thường dùng để tạo lưới lịch.'],
      ]},
      { code: "-- Tính tổng tiền mỗi khách đã tiêu. Nếu khách chưa mua gì, vẫn hiện tên và để là 0.\nSELECT \n    c.customer_id,\n    c.name, \n    COALESCE(SUM(o.total), 0) AS lifetime_spent\nFROM customers c\nLEFT JOIN orders o\n  ON c.customer_id = o.customer_id\nGROUP BY \n    c.customer_id, \n    c.name\nORDER BY \n    lifetime_spent DESC;", lang: 'sql' },
      { note: 'Mẹo: Hàm COALESCE(column, 0) cực kỳ hữu ích kết hợp với LEFT JOIN để biến đổi các giá trị NULL (do không khớp) thành số 0 gọn gàng để tính toán.' },
    ],
  },
  'sql-window': {
    cluster: 'SQL & DATABASES',
    summary: 'Kỹ năng Advanced SQL: Tính toán trên một tập dòng liên quan (Window) mà KHÔNG làm "mất" các dòng đó (như cách GROUP BY làm).',
    body: [
      { h: 'Sự kỳ diệu của OVER()', p: 'GROUP BY sẽ nén 100 dòng thành 1 dòng tổng. Window Function cho phép bạn tính ra giá trị tổng đó, và DÁN nó vào bên cạnh ĐỦ 100 dòng gốc.' },
      { list: [
        ['PARTITION BY', 'Đóng vai trò như GROUP BY bên trong Window, dùng để chia khung cửa sổ.'],
        ['ORDER BY', 'Quy định thứ tự dòng chảy bên trong cửa sổ để tính Running Total hoặc Ranking.'],
      ]},
      { code: "-- Bài toán: Xếp hạng lương của nhân viên TRONG TỪNG phòng ban\n-- và tính xem lương của họ cách mức trung bình phòng bao nhiêu.\nSELECT \n  employee_name, \n  department, \n  salary,\n  RANK() OVER (\n    PARTITION BY department \n    ORDER BY salary DESC\n  ) AS dept_rank,\n  AVG(salary) OVER (\n    PARTITION BY department\n  ) AS dept_avg_salary,\n  salary - AVG(salary) OVER (PARTITION BY department) AS diff_vs_avg\nFROM employees;", lang: 'sql' },
      { h: 'Các hàm Window thiết yếu', p: '' },
      { list: [
        ['ROW_NUMBER()', 'Đánh số 1, 2, 3... liên tục. Dùng để lấy dòng mới nhất (WHERE rn = 1).'],
        ['RANK() / DENSE_RANK()', 'Xếp hạng. RANK() bỏ qua số thứ tự nếu có đồng hạng (1, 1, 3). DENSE_RANK() thì không (1, 1, 2).'],
        ['LAG() / LEAD()', 'Đỉnh cao cho Time-series. Lấy giá trị của dòng NGAY TRƯỚC (hoặc sau) nó. Dùng để tính % tăng trưởng tháng này so với tháng trước (MoM).'],
      ]},
    ],
  },
  'sql-etl': {
    cluster: 'SQL & DATABASES',
    summary: 'Hệ sinh thái luân chuyển dữ liệu: Từ ứng dụng thô, qua ống nước (Pipelines), vào Kho (Warehouse) để bạn phân tích.',
    body: [
      { h: 'Quy trình ETL truyền thống', p: 'Extract (Trích xuất) → Transform (Biến đổi) → Load (Nạp).' },
      { list: [
        ['Extract', 'Kéo dữ liệu từ app DB (MySQL), CRM (Salesforce), Ads API (Facebook).'],
        ['Transform', 'Làm sạch, định dạng ngày tháng, tính toán trên một Server trung gian.'],
        ['Load', 'Đổ kết quả cuối cùng vào Data Warehouse.'],
      ]},
      { h: 'Sự trỗi dậy của ELT và dbt', p: 'Nhờ năng lực điện toán khổng lồ của các Cloud Warehouse (BigQuery, Snowflake), quy trình hiện đại đổi thành ELT.' },
      { list: [
        ['E & L trước', 'Nạp thẳng toàn bộ dữ liệu thô (Raw) vào Warehouse.'],
        ['T sau cùng (In-warehouse Transformation)', 'Data Analyst giờ đây dùng chính SQL để viết mã chuyển đổi dữ liệu ngay trong Warehouse bằng các công cụ như dbt (Data Build Tool).'],
      ]},
      { h: 'Common Table Expressions (CTEs)', p: 'Kỹ năng thiết yếu để viết mã Transform phức tạp một cách rõ ràng (thay vì lồng hàng tá Subqueries vào nhau).' },
      { code: "-- Viết CTE bằng mệnh đề WITH, tạo ra các bảng tạm thời dễ đọc\nWITH monthly_revenue AS (\n    SELECT \n        DATE_TRUNC('month', order_date) as mth,\n        SUM(amount) as rev\n    FROM orders\n    GROUP BY 1\n),\nprev_month AS (\n    SELECT \n        mth,\n        rev,\n        LAG(rev) OVER (ORDER BY mth) as last_rev\n    FROM monthly_revenue\n)\nSELECT \n    mth, \n    rev, \n    last_rev,\n    (rev - last_rev) / last_rev * 100 AS mom_growth\nFROM prev_month;", lang: 'sql' },
    ],
  },
  'sql-opt': {
    cluster: 'SQL & DATABASES',
    summary: 'Tối ưu hóa truy vấn (Query Optimization): Làm thế nào để câu SQL của bạn chạy trong 2 giây thay vì 20 phút.',
    body: [
      { h: 'Đọc Kế hoạch Thực thi (Execution Plan)', p: 'Trước khi một câu SQL chạy, máy chủ sẽ lập ra một bản kế hoạch. Thêm chữ EXPLAIN vào trước câu SELECT của bạn để xem kế hoạch đó. Hãy tìm các điểm "nghẽn cổ chai" như Full Table Scan (quét toàn bộ bảng).' },
      { list: [
        ['Index (Chỉ mục)', 'Giống như mục lục ở cuối cuốn sách. Thay vì lật từng trang (Full Scan), máy chủ nhìn vào Index để nhảy thẳng đến dòng cần thiết (Index Seek).'],
        ['SARGable', 'Viết điều kiện WHERE sao cho máy chủ có thể dùng Index. SARGable = Search ARGument ABLE.'],
      ]},
      { code: "-- KHÔNG SARGable (Phải tính toán trên từng dòng, bỏ qua Index)\nSELECT * FROM orders \nWHERE YEAR(order_date) = 2023;\n\n-- SARGable (Máy chủ dùng được Index trên cột order_date)\nSELECT * FROM orders \nWHERE order_date >= '2023-01-01' \n  AND order_date < '2024-01-01';", lang: 'sql' },
      { h: 'Các Best Practices Khác', p: 'Những nguyên tắc nhỏ tạo ra thay đổi lớn về hiệu năng:' },
      { list: [
        ['1. SELECT *', 'Tránh tuyệt đối trong môi trường production. Nó bắt máy chủ đọc các cột dữ liệu rác, tốn RAM và làm chậm quá trình vận chuyển dữ liệu qua mạng.'],
        ['2. Lọc sớm nhất có thể', 'Sử dụng WHERE để loại bỏ dữ liệu rác TRƯỚC KHI thực hiện các phép JOIN lớn hoặc GROUP BY.'],
        ['3. JOIN trên cột có Index', 'Thường là khóa chính / khóa ngoại (Primary/Foreign Keys). Nếu JOIN trên cột text (Tên người), truy vấn sẽ rất chậm.'],
      ]},
    ],
  },
};
