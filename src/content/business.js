export const businessLessons = {
  'bus-intro': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Data Analytics là quá trình biến dữ liệu thô thành quyết định kinh doanh (data-driven decision making).',
    source: 'Nguồn tham khảo: Data Analytics Made Accessible.',
    body: [
      { h: 'Khái niệm cơ bản', p: 'Data Analytics là quá trình thu thập, xử lý và phân tích dữ liệu để đưa ra quyết định kinh doanh. Mục tiêu cuối cùng không phải là tạo ra một biểu đồ đẹp — mà là một quyết định tốt hơn, mang lại giá trị cao hơn cho doanh nghiệp.' },
      { h: '4 Cấp độ Phân tích (Analytics Maturity Model)', p: 'Quá trình phân tích thường trải qua 4 cấp độ, mỗi cấp độ trả lời một câu hỏi khó hơn và mang lại nhiều giá trị hơn:' },
      { list: [
        ['1. Descriptive (Mô tả)', 'Chuyện gì đã xảy ra? (Hầu hết các Báo cáo, Dashboard truyền thống nằm ở đây).'],
        ['2. Diagnostic (Chẩn đoán)', 'Tại sao nó xảy ra? (Phân tích nguyên nhân gốc rễ, Drill-down dữ liệu).'],
        ['3. Predictive (Dự báo)', 'Chuyện gì sẽ xảy ra tiếp theo? (Dự báo doanh số, Machine Learning, Phân khúc khách hàng).'],
        ['4. Prescriptive (Đề xuất)', 'Nên làm gì để tối ưu kết quả? (Khuyến nghị hành động, Tối ưu hóa, A/B Testing).'],
      ]},
      { note: 'Thực tế phũ phàng: 80% giá trị của doanh nghiệp thường đến từ Descriptive và Diagnostic chuẩn xác. Đừng vội áp dụng Machine Learning khi các báo cáo cơ bản của công ty còn chưa đáng tin cậy.' },
    ],
  },
  'bus-problem': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Bước quan trọng nhất của Data Analyst không phải là viết code, mà là hiểu đúng bài toán kinh doanh cần giải quyết.',
    source: 'Nguồn tham khảo: Data Science for Business.',
    body: [
      { h: 'Problem Formulation (Định hình Bài toán)', p: 'Một stakeholder chạy đến và hỏi: "Doanh số dạo này sao rồi em?". Một câu hỏi mơ hồ sẽ luôn dẫn tới một phân tích lãng phí và không có tính ứng dụng. Hãy chủ động diễn đạt lại bài toán theo khung SMART:' },
      { list: [
        ['Specific (Cụ thể)', 'Bạn đang muốn xem doanh số của sản phẩm nào? Khu vực nào? Kênh bán hàng nào?'],
        ['Measurable (Đo lường)', 'Định nghĩa "tốt/xấu" là gì? Doanh thu tuyệt đối (Revenue) hay Tỷ suất lợi nhuận (Margin)?'],
        ['Actionable (Khả thi)', 'Nếu tôi tìm ra câu trả lời, bạn sẽ dùng nó để ra quyết định gì?'],
        ['Relevant (Liên quan)', 'Nó có thực sự phục vụ cho mục tiêu chiến lược của quý này không?'],
        ['Time-bound (Thời hạn)', 'Khoảng thời gian cần phân tích là bao lâu (ví dụ: Q2 so với Q1)?'],
      ]},
      { note: 'Ví dụ về câu hỏi chuẩn: "Tỷ lệ chuyển đổi (conversion rate) của khách hàng mới trên nền tảng Mobile app trong Q2 có giảm đáng kể so với Q1 không? Nếu có, giảm ở bước nào trong phễu mua hàng?" — Đây mới là một câu hỏi mà Analyst có thể thực sự bắt tay vào làm.' },
    ],
  },
  'bus-kpi': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Không phải con số nào cũng là KPI. KPI là những metric quan trọng nhất phản ánh sức khỏe chiến lược của doanh nghiệp.',
    source: 'Nguồn tham khảo: Data Science for Business.',
    body: [
      { h: 'Metric vs KPI (Chỉ số vs Chỉ số Hiệu suất Chính)', p: 'Metric là bất cứ con số nào bạn có thể đo đạc được (lượt truy cập, số người theo dõi, số lần nhấp chuột). KPI là một tập con rất nhỏ những metric quan trọng nhất, gắn liền trực tiếp với mục tiêu sống còn của công ty (Tỷ lệ chuyển đổi, Chi phí mua khách hàng).' },
      { h: 'Các KPIs cốt lõi theo từng ngành', p: 'Là Analyst, bạn phải thuộc nằm lòng ngôn ngữ của ngành mình đang làm:' },
      { list: [
        ['E-commerce (Thương mại điện tử)', 'AOV (Average Order Value - Giá trị đơn hàng trung bình), CAC (Customer Acquisition Cost), LTV (Lifetime Value), Conversion Rate.'],
        ['SaaS (Phần mềm dịch vụ)', 'MRR (Monthly Recurring Revenue), Churn Rate (Tỷ lệ rời bỏ), NRR (Net Retention Rate).'],
        ['Marketing / Ads', 'CTR (Click-Through Rate), ROAS (Return on Ad Spend), CPC (Cost Per Click).'],
      ]},
      { h: 'LTV & CAC - Cặp bài trùng của sự tăng trưởng', p: 'Một doanh nghiệp chỉ khỏe mạnh khi LTV (giá trị vòng đời) lớn hơn đáng kể so với CAC (chi phí có được khách hàng).' },
      { formula: 'LTV  =  ARPU × Gross Margin %\n──────────────────────\n      Churn Rate', caption: 'Công thức ước tính Lifetime Value cơ bản.' },
      { calc: 'Ví dụ tính toán LTV', steps: [
        'ARPU (Doanh thu trung bình 1 khách/tháng) = $50',
        'Gross Margin (Biên lợi nhuận gộp) = 80%',
        'Churn Rate (Tỷ lệ hủy dịch vụ / tháng) = 5% (tương đương 0.05)',
        'LTV = ($50 × 0.8) / 0.05',
        'LTV = $40 / 0.05 = $800',
      ]},
      { note: 'Nghĩa là một khách hàng mang về trung bình $800 lợi nhuận. Nếu chi phí marketing để lấy 1 khách (CAC) < $250 (Tỷ lệ LTV/CAC > 3) thì công ty đang tăng trưởng rất tốt.' },
    ],
  },
  'bus-frame': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Các framework (khuôn mẫu) giúp cấu trúc tư duy phân tích của bạn, giúp bạn không bị lạc lối trong mớ bùng nhùng dữ liệu.',
    body: [
      { h: 'Analytical Frameworks là gì?', p: 'Framework là "khung xương" tư duy để đảm bảo bạn tiếp cận vấn đề một cách có hệ thống, đầy đủ các góc nhìn thay vì chỉ mò mẫm vô định trong dữ liệu.' },
      { list: [
        ['Phễu AARRR (Pirate Metrics)', 'Acquisition (Thu hút) → Activation (Kích hoạt) → Retention (Giữ chân) → Referral (Giới thiệu) → Revenue (Doanh thu). Framework chuẩn mực cho startup và product analysis.'],
        ['RFM Analysis', 'Recency (Gần đây), Frequency (Tần suất), Monetary (Tiền bạc). Phương pháp kinh điển để phân khúc khách hàng bán lẻ.'],
        ['Cohort Analysis (Phân tích thuần tập)', 'Chia người dùng thành các nhóm có chung một đặc điểm thời gian (ví dụ: nhóm đăng ký vào tháng 1) để theo dõi hành vi theo thời gian.'],
        ['5 Whys (5 Câu hỏi tại sao)', 'Phương pháp tìm nguyên nhân gốc rễ (Root-cause analysis). Hỏi "Tại sao?" liên tục 5 lần để đào sâu qua bề mặt vấn đề.'],
      ]},
      { h: 'Expected Value (Giá trị kỳ vọng)', p: 'Khi kết quả là không chắc chắn, Analyst dùng Expected Value để giúp sếp lựa chọn quyết định đầu tư.' },
      { formula: 'EV = [ P(Thành công) × Giá trị ]  −  [ P(Thất bại) × Chi phí ]', caption: 'Nếu EV > 0, đó là một quyết định có lợi về mặt toán học dài hạn.' },
      { calc: 'Bài toán ra mắt tính năng mới', steps: [
        'Chi phí phát triển tính năng: -$50,000',
        'Nếu thành công: Lợi nhuận +$200,000. Xác suất thành công ước tính: 40%',
        'Nếu thất bại: Mất trắng chi phí. Xác suất thất bại: 60%',
        'EV = (0.4 × 200,000) - (0.6 × 50,000) = 80,000 - 30,000',
        'EV = $50,000 (Dương -> Nên làm!)'
      ]},
    ],
  },
  'bus-story': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Data Storytelling & Stakeholder Management: Làm sao để sếp tin và dùng báo cáo của bạn.',
    body: [
      { h: 'Đừng ném dữ liệu vào mặt sếp', p: 'Sai lầm lớn nhất của Junior DA là làm một cái dashboard 20 biểu đồ và bắt người xem tự tìm hiểu. Nhiệm vụ của bạn là chắt lọc ra 1 thông điệp duy nhất và dẫn dắt họ đến đó.' },
      { list: [
        ['The "So What?" Test', 'Mỗi khi đưa ra một con số, hãy tự hỏi: "Thì sao?". "Doanh thu giảm 10%" -> "Thì sao?" -> "Vì miền Nam đóng cửa 3 cửa hàng" -> "Thì sao?" -> "Cần dồn ngân sách marketing sang kênh Online".'],
        ['Giao tiếp với Non-Tech', 'Sếp Marketing không quan tâm bạn dùng thuật toán K-Means hay XGBoost. Họ chỉ quan tâm "Khách hàng này có khả năng mua lại cao không?". Hãy nói ngôn ngữ của họ.'],
      ]},
      { note: 'Quy tắc Minto Pyramid (Kim tự tháp Minto): Bắt đầu bằng Kết luận -> Các luận điểm chính -> Dữ liệu chứng minh. Ngược lại hoàn toàn với cách viết văn thông thường.' },
    ],
  },
  'bus-cases': {
    cluster: 'BUSINESS ACUMEN',
    summary: 'Giải phẫu các Case Study kinh điển trong phân tích dữ liệu.',
    body: [
      { h: 'Case 1: Phân tích Phễu (Funnel Drop-off)', p: 'Khách hàng vào web rất đông nhưng tỷ lệ mua hàng (CR) < 1%.' },
      { list: [
        ['Phân tích', 'Phân rã phễu thành: Trang chủ -> Xem sản phẩm -> Thêm vào giỏ -> Thanh toán. Phát hiện tỷ lệ rớt từ Giỏ hàng -> Thanh toán lên tới 80%.'],
        ['Hành động', 'Đề xuất thêm nút "Mua ngay" (Bỏ qua giỏ hàng) hoặc gửi Email nhắc nhở (Cart Abandonment Email).'],
      ]},
      { h: 'Case 2: Dự đoán rời bỏ (Churn Prediction)', p: 'Công ty SaaS có tỷ lệ hủy gói cao.' },
      { list: [
        ['Phân tích', 'Tìm điểm chung của những người đã hủy. Phát hiện: 90% những người không login trong tuần đầu tiên sẽ hủy gói sau 1 tháng.'],
        ['Hành động', 'Kích hoạt chiến dịch Onboarding qua email ngay khi họ không login trong 3 ngày đầu.'],
      ]},
    ],
  },
};
