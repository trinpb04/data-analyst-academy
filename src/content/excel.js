export const excelLessons = {
  'ex-formulas': {
    cluster: 'SPREADSHEETS',
    summary: 'Bộ công thức cốt lõi (Lookup, Logic, Text, Date) quyết định sự nhạy bén của bạn với dữ liệu hàng ngày.',
    body: [
      { h: 'IFERROR - Vị cứu tinh của các bảng tính xấu', p: 'Một file Excel xuất sắc là file không hiện lỗi #N/A hay #DIV/0! cho người sếp đang xem.' },
      { code: '=IFERROR(VLOOKUP(A2, Customers!A:D, 4, FALSE), "Chưa đăng ký")', lang: 'excel' },
      { h: 'INDEX & MATCH (và sự thay thế XLOOKUP)', p: 'VLOOKUP là hàm phổ biến nhất nhưng lại có quá nhiều giới hạn: chỉ tra cứu từ trái qua phải, dễ bị gãy nếu chèn thêm cột, và rất tốn tài nguyên nếu chọn nguyên cột (A:Z). Bạn phải làm chủ INDEX + MATCH.' },
      { list: [
        ['MATCH', 'Cho biết "vị trí" (số dòng) của một giá trị trong một mảng.'],
        ['INDEX', 'Nhìn vào vị trí đó, lôi giá trị ra.'],
        ['Sự kết hợp', '`INDEX(Cột_Cần_Lấy, MATCH(Giá_Trị_Tìm, Cột_Tìm_Kiếm, 0))`'],
      ]},
      { code: '=INDEX(Sales[Revenue],\n       MATCH("Laptop Dell", Sales[Product_Name], 0))', lang: 'excel' },
      { note: 'XLOOKUP (ở Excel 365) thay thế cho cả VLOOKUP và INDEX/MATCH với cú pháp thân thiện: `=XLOOKUP(Giá_trị_tìm, Cột_tìm, Cột_trả_về, "Lỗi nếu ko thấy")`. Nếu sếp dùng bản mới, hãy dùng XLOOKUP.' },
    ],
  },
  'ex-pivot': {
    cluster: 'SPREADSHEETS',
    summary: 'Công cụ báo cáo mạnh nhất của Excel, cho phép tổng hợp hàng triệu dòng dữ liệu chỉ bằng kéo thả.',
    body: [
      { h: 'Thiết kế Báo cáo với Pivot Table', p: 'Bản chất Pivot Table tương đương với lệnh GROUP BY trong SQL. Một người giỏi Pivot Table có thể giải quyết 80% yêu cầu báo cáo nhanh.' },
      { list: [
        ['Rows', 'Trục Y của bạn. Các biến phân loại (ví dụ: Tên nhóm hàng).'],
        ['Columns', 'Trục X của bạn. Thường là Thời gian (Tháng, Quý) hoặc Phân khúc.'],
        ['Values', 'Các Metric cần tính toán (Sum, Count, Average).'],
        ['Slicers', 'Công cụ "Filter" mang tính trực quan, giúp người xem báo cáo tự tương tác (VD: click để chọn vùng Miền Nam).'],
      ]},
      { h: '% of Grand Total thay vì Số tuyệt đối', p: 'Insight thực sự hiếm khi nằm ở một con số tuyệt đối. Nó nằm ở tỷ lệ phần trăm.' },
      { note: 'Mẹo thực chiến: Hãy click chuột phải vào cột Values > Show Values As > % of Column Total. Đột nhiên bạn sẽ thấy "À, nhóm hàng này tuy doanh thu thấp nhưng đóng góp tới 80% biên lợi nhuận của toàn chi nhánh!"' },
    ],
  },
  'ex-pq': {
    cluster: 'SPREADSHEETS',
    summary: 'Power Query (Get & Transform) - Khả năng tự động hóa việc dọn dẹp dữ liệu, thay thế vĩnh viễn việc copy-paste tay.',
    body: [
      { h: 'ETL thu nhỏ', p: 'Power Query chính là bước "Extract" và "Transform" trong quy trình ETL. Bạn có thể kéo dữ liệu từ file CSV 5 triệu dòng, dọn dẹp nó, và trả kết quả sạch sẽ 100 dòng ra Excel.' },
      { list: [
        ['Applied Steps (Các bước đã áp dụng)', 'Thay vì viết code VBA, mọi nút bấm của bạn (Xóa cột, Split Text, Unpivot) đều được Power Query ghi lại thành một "Kịch bản". Tháng sau có file mới, bạn chỉ việc ấn Refresh, toàn bộ kịch bản sẽ chạy lại tự động 100%.'],
        ['Unpivot (Chuyển cột thành dòng)', 'Tính năng thần thánh nhất. Hầu hết sếp làm báo cáo dạng ma trận (Năm trải dài theo cột). Để đưa vào Pivot/Power BI, bạn phải làm phẳng (Unpivot) để trả về dạng bảng (Cột Year, Cột Value).'],
      ]},
      { note: 'Quy tắc tối thượng: BẤT CỨ thứ gì có tính lặp lại (tháng nào cũng tải file từ hệ thống về, xóa 3 dòng đầu, tách cột tên thành họ tên) thì đều PHẢI bỏ vào Power Query.' },
    ],
  },
  'ex-pp': {
    cluster: 'SPREADSHEETS',
    summary: 'Power Pivot: Data Modeling trong Excel. Vượt qua giới hạn 1 triệu dòng và liên kết nhiều bảng bằng DAX.',
    body: [
      { h: 'Cầu nối tới Power BI', p: 'Excel bình thường chỉ chứa tối đa 1.048.576 dòng. Power Pivot dùng Data Model (Công nghệ nén xVelocity/VertiPaq) giúp nó giữ được hàng chục triệu dòng ngay trong RAM.' },
      { list: [
        ['Data Modeling', 'Thay vì dùng VLOOKUP để ghép dữ liệu, bạn nối các bảng lại với nhau bằng Relationship (Star Schema). Nhờ đó file Excel siêu nhẹ.'],
        ['DAX (Data Analysis Expressions)', 'Ngôn ngữ công thức cực mạnh. Một Measure DAX được viết ra ở Power Pivot có thể dùng lại trên vô số báo cáo Pivot khác nhau.'],
      ]},
      { code: '-- Một DAX Measure chuẩn mực trong Power Pivot\nLoi_Nhuan_Gop := SUMX(\n    Sales,\n    Sales[Quantity] * (Sales[Unit_Price] - Sales[Unit_Cost])\n)', lang: 'dax' },
      { note: 'Lời khuyên: Nếu bạn định học Power BI, hãy học Data Model và DAX ngay trên Excel qua Power Pivot. Nó chính là bộ não lõi của Power BI.' },
    ],
  },
  'ex-adv': {
    cluster: 'SPREADSHEETS',
    summary: 'Vượt qua mức cơ bản: Những tính năng "nhỏ nhưng có võ" giúp bạn kiểm soát hoàn toàn file báo cáo.',
    body: [
      { h: 'What-If Analysis (Phân tích Giả định)', p: 'Dùng nhiều nhất trong Financial Modeling (Mô hình Tài chính) hoặc lập Kế hoạch Kinh doanh.' },
      { list: [
        ['Goal Seek', 'Biết trước kết quả mong muốn, bắt Excel tính ngược lại tham số đầu vào. (Ví dụ: Để đạt lợi nhuận 1 tỷ, cần bán bao nhiêu sản phẩm?).'],
        ['Data Table', 'Tạo ra một ma trận 2 chiều mô phỏng kết quả khi thay đổi 2 biến số cùng lúc (ví dụ: Giá bán và Chi phí marketing).'],
      ]},
      { h: 'Data Validation & Conditional Formatting', p: 'Tạo ra các Dashboard tương tác và an toàn mà không cần code.' },
      { list: [
        ['Data Validation (List)', 'Tạo Drop-down menu để sếp có thể tự chọn Tháng hoặc Vùng miền. Sau đó dùng INDEX/MATCH để lấy dữ liệu tương ứng.'],
        ['Conditional Formatting', 'Tô màu tự động (Heatmap) hoặc thêm Data Bars trực tiếp vào trong ô (cell) để người xem nhận ra con số âm/dương chỉ trong 1 giây.'],
      ]},
      { note: 'VBA/Macros đã từng là vua, nhưng ngày nay, nếu một tác vụ quá phức tạp để dùng công thức, hãy dùng Power Query hoặc chuyển hẳn sang Python thay vì cố viết VBA.' },
    ],
  },
};
