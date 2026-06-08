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
};
