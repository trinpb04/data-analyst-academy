// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// calc.steps dạng { vi: [...], en: [...] }.
export const businessLessons = {
  'bus-intro': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Data Analytics là quá trình biến dữ liệu thô thành quyết định kinh doanh (data-driven decision making).',
      en: 'Data Analytics is the process of turning raw data into business decisions (data-driven decision making).',
    },
    source: { vi: 'Nguồn tham khảo: Data Analytics Made Accessible.', en: 'Reference: Data Analytics Made Accessible.' },
    body: [
      { h: { vi: 'Khái niệm cơ bản', en: 'The core idea' },
        p: { vi: 'Data Analytics là quá trình thu thập, xử lý và phân tích dữ liệu để đưa ra quyết định kinh doanh. Mục tiêu cuối cùng không phải một biểu đồ đẹp — mà là một quyết định tốt hơn, mang lại giá trị cao hơn cho doanh nghiệp.', en: 'Data Analytics is collecting, processing and analysing data to make business decisions. The end goal isn’t a pretty chart — it’s a better decision that creates more value for the business.' } },
      { h: { vi: '4 Cấp độ Phân tích (Analytics Maturity Model)', en: 'The 4 levels of analytics (Maturity Model)' },
        p: { vi: 'Quá trình phân tích thường trải qua 4 cấp độ, mỗi cấp trả lời một câu hỏi khó hơn và mang lại nhiều giá trị hơn:', en: 'Analytics usually climbs four levels, each answering a harder question and delivering more value:' } },
      { list: [
        [{ vi: '1. Descriptive (Mô tả)', en: '1. Descriptive' }, { vi: 'Chuyện gì đã xảy ra? (Hầu hết báo cáo, dashboard truyền thống nằm ở đây.)', en: 'What happened? (Most traditional reports and dashboards live here.)' }],
        [{ vi: '2. Diagnostic (Chẩn đoán)', en: '2. Diagnostic' }, { vi: 'Tại sao nó xảy ra? (Phân tích nguyên nhân gốc rễ, drill-down.)', en: 'Why did it happen? (Root-cause analysis, drill-down.)' }],
        [{ vi: '3. Predictive (Dự báo)', en: '3. Predictive' }, { vi: 'Chuyện gì sẽ xảy ra tiếp theo? (Dự báo doanh số, Machine Learning, phân khúc khách hàng.)', en: 'What will happen next? (Sales forecasting, Machine Learning, customer segmentation.)' }],
        [{ vi: '4. Prescriptive (Đề xuất)', en: '4. Prescriptive' }, { vi: 'Nên làm gì để tối ưu kết quả? (Khuyến nghị hành động, tối ưu hóa, A/B Testing.)', en: 'What should we do to optimise the outcome? (Action recommendations, optimisation, A/B testing.)' }],
      ]},
      { note: { vi: 'Thực tế phũ phàng: 80% giá trị doanh nghiệp thường đến từ Descriptive và Diagnostic chuẩn xác. Đừng vội áp dụng Machine Learning khi báo cáo cơ bản còn chưa đáng tin.', en: 'Hard truth: 80% of business value usually comes from accurate Descriptive and Diagnostic work. Don’t rush into Machine Learning while the basic reports still aren’t trustworthy.' } },
    ],
  },
  'bus-problem': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Bước quan trọng nhất của Data Analyst không phải viết code, mà là hiểu đúng bài toán kinh doanh cần giải.',
      en: 'An analyst’s most important step isn’t writing code — it’s correctly understanding the business problem to solve.',
    },
    source: { vi: 'Nguồn tham khảo: Data Science for Business.', en: 'Reference: Data Science for Business.' },
    body: [
      { h: { vi: 'Problem Formulation (Định hình bài toán)', en: 'Problem Formulation' },
        p: { vi: 'Một stakeholder chạy đến hỏi: "Doanh số dạo này sao rồi em?". Câu hỏi mơ hồ luôn dẫn tới phân tích lãng phí, vô dụng. Hãy chủ động diễn đạt lại theo khung SMART:', en: 'A stakeholder runs over and asks, “How are sales doing lately?” A vague question always leads to wasted, unusable analysis. Proactively reframe it with the SMART framework:' } },
      { list: [
        [{ vi: 'Specific (Cụ thể)', en: 'Specific' }, { vi: 'Bạn muốn xem doanh số của sản phẩm nào? Khu vực nào? Kênh bán nào?', en: 'Which product’s sales? Which region? Which channel?' }],
        [{ vi: 'Measurable (Đo lường)', en: 'Measurable' }, { vi: 'Định nghĩa "tốt/xấu" là gì? Doanh thu tuyệt đối (Revenue) hay Tỷ suất lợi nhuận (Margin)?', en: 'How do we define “good/bad”? Absolute revenue or profit margin?' }],
        [{ vi: 'Actionable (Khả thi)', en: 'Actionable' }, { vi: 'Nếu tôi tìm ra câu trả lời, bạn sẽ dùng nó để ra quyết định gì?', en: 'If I find the answer, what decision will you make with it?' }],
        [{ vi: 'Relevant (Liên quan)', en: 'Relevant' }, { vi: 'Nó có thực sự phục vụ mục tiêu chiến lược của quý này không?', en: 'Does it truly serve this quarter’s strategic goal?' }],
        [{ vi: 'Time-bound (Thời hạn)', en: 'Time-bound' }, { vi: 'Khoảng thời gian cần phân tích là bao lâu (ví dụ Q2 so với Q1)?', en: 'What period are we analysing (e.g. Q2 vs Q1)?' }],
      ]},
      { note: { vi: 'Câu hỏi chuẩn: "Tỷ lệ chuyển đổi (conversion rate) của khách mới trên Mobile app trong Q2 có giảm đáng kể so Q1 không? Nếu có, giảm ở bước nào trong phễu?" — Đây mới là câu hỏi Analyst thực sự bắt tay làm được.', en: 'A well-formed question: “Did the conversion rate of new customers on the mobile app drop significantly in Q2 vs Q1? If so, at which step of the funnel?” — That’s a question an analyst can actually start working on.' } },
    ],
  },
  'bus-kpi': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Không phải con số nào cũng là KPI. KPI là những metric quan trọng nhất phản ánh sức khỏe chiến lược của doanh nghiệp.',
      en: 'Not every number is a KPI. KPIs are the few most important metrics reflecting the strategic health of the business.',
    },
    source: { vi: 'Nguồn tham khảo: Data Science for Business.', en: 'Reference: Data Science for Business.' },
    body: [
      { h: { vi: 'Metric vs KPI', en: 'Metric vs KPI' },
        p: { vi: 'Metric là bất cứ con số nào đo được (lượt truy cập, người theo dõi, lượt click). KPI là tập con rất nhỏ những metric quan trọng nhất, gắn trực tiếp với mục tiêu sống còn của công ty (conversion rate, chi phí mua khách).', en: 'A metric is any number you can measure (visits, followers, clicks). A KPI is the tiny subset of the most important metrics tied directly to the company’s make-or-break goals (conversion rate, customer acquisition cost).' } },
      { h: { vi: 'Các KPI cốt lõi theo từng ngành', en: 'Core KPIs by industry' },
        p: { vi: 'Là Analyst, bạn phải thuộc nằm lòng ngôn ngữ của ngành mình đang làm:', en: 'As an analyst, you must know your industry’s language by heart:' } },
      { list: [
        [{ vi: 'E-commerce (Thương mại điện tử)', en: 'E-commerce' }, { vi: 'AOV (Average Order Value), CAC (Customer Acquisition Cost), LTV (Lifetime Value), Conversion Rate.', en: 'AOV (Average Order Value), CAC (Customer Acquisition Cost), LTV (Lifetime Value), Conversion Rate.' }],
        [{ vi: 'SaaS (Phần mềm dịch vụ)', en: 'SaaS' }, { vi: 'MRR (Monthly Recurring Revenue), Churn Rate (tỷ lệ rời bỏ), NRR (Net Retention Rate).', en: 'MRR (Monthly Recurring Revenue), Churn Rate, NRR (Net Retention Rate).' }],
        [{ vi: 'Marketing / Ads', en: 'Marketing / Ads' }, { vi: 'CTR (Click-Through Rate), ROAS (Return on Ad Spend), CPC (Cost Per Click).', en: 'CTR (Click-Through Rate), ROAS (Return on Ad Spend), CPC (Cost Per Click).' }],
      ]},
      { h: { vi: 'LTV & CAC — Cặp bài trùng của tăng trưởng', en: 'LTV & CAC — the growth duo' },
        p: { vi: 'Doanh nghiệp chỉ khỏe khi LTV (giá trị vòng đời) lớn hơn đáng kể CAC (chi phí có được khách).', en: 'A business is only healthy when LTV (lifetime value) is meaningfully larger than CAC (cost to acquire a customer).' } },
      { formula: 'LTV  =  ARPU × Gross Margin %\n──────────────────────\n      Churn Rate', caption: { vi: 'Công thức ước tính Lifetime Value cơ bản.', en: 'A basic formula for estimating Lifetime Value.' } },
      { calc: { vi: 'Ví dụ tính LTV', en: 'Worked LTV example' }, steps: {
        vi: [
          'ARPU (doanh thu trung bình 1 khách/tháng) = $50',
          'Gross Margin (biên lợi nhuận gộp) = 80%',
          'Churn Rate (tỷ lệ hủy/tháng) = 5% (tức 0.05)',
          'LTV = ($50 × 0.8) / 0.05',
          'LTV = $40 / 0.05 = $800',
        ],
        en: [
          'ARPU (avg revenue per customer/month) = $50',
          'Gross Margin = 80%',
          'Churn Rate (monthly) = 5% (i.e. 0.05)',
          'LTV = ($50 × 0.8) / 0.05',
          'LTV = $40 / 0.05 = $800',
        ],
      }},
      { note: { vi: 'Nghĩa là một khách mang về trung bình $800 lợi nhuận. Nếu CAC (chi phí lấy 1 khách) < $250 (tỷ lệ LTV/CAC > 3) thì công ty tăng trưởng rất tốt.', en: 'So a customer brings on average $800 of profit. If CAC (cost to acquire one) < $250 (an LTV/CAC ratio > 3), the company is growing very healthily.' } },
    ],
  },
  'bus-frame': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Các framework giúp cấu trúc tư duy phân tích, để bạn không lạc lối trong mớ dữ liệu bùng nhùng.',
      en: 'Frameworks structure your analytical thinking so you don’t get lost in a tangle of data.',
    },
    body: [
      { h: { vi: 'Analytical Frameworks là gì?', en: 'What are analytical frameworks?' },
        p: { vi: 'Framework là "khung xương" tư duy đảm bảo bạn tiếp cận vấn đề có hệ thống, đủ góc nhìn, thay vì mò mẫm vô định trong dữ liệu.', en: 'A framework is a mental skeleton that ensures you approach a problem systematically and from every angle, instead of poking around aimlessly in the data.' } },
      { list: [
        [{ vi: 'Phễu AARRR (Pirate Metrics)', en: 'AARRR funnel (Pirate Metrics)' }, { vi: 'Acquisition → Activation → Retention → Referral → Revenue. Framework chuẩn cho startup và product analysis.', en: 'Acquisition → Activation → Retention → Referral → Revenue. The standard framework for startups and product analysis.' }],
        [{ vi: 'RFM Analysis', en: 'RFM Analysis' }, { vi: 'Recency, Frequency, Monetary. Phương pháp kinh điển để phân khúc khách hàng bán lẻ.', en: 'Recency, Frequency, Monetary. A classic method for segmenting retail customers.' }],
        [{ vi: 'Cohort Analysis (Phân tích thuần tập)', en: 'Cohort Analysis' }, { vi: 'Chia người dùng thành nhóm cùng đặc điểm thời gian (ví dụ nhóm đăng ký tháng 1) để theo dõi hành vi theo thời gian.', en: 'Group users by a shared time trait (e.g. the January sign-up cohort) to track behaviour over time.' }],
        [{ vi: '5 Whys (5 câu hỏi tại sao)', en: '5 Whys' }, { vi: 'Phương pháp tìm nguyên nhân gốc rễ. Hỏi "Tại sao?" liên tục 5 lần để đào qua bề mặt vấn đề.', en: 'A root-cause method. Ask “Why?” five times in a row to dig beneath the surface of a problem.' }],
      ]},
      { h: { vi: 'Expected Value (Giá trị kỳ vọng)', en: 'Expected Value' },
        p: { vi: 'Khi kết quả không chắc chắn, Analyst dùng Expected Value để giúp sếp lựa chọn quyết định đầu tư.', en: 'When outcomes are uncertain, analysts use Expected Value to help leaders choose between investment decisions.' } },
      { formula: 'EV = [ P(Success) × Value ]  −  [ P(Failure) × Cost ]', caption: { vi: 'Nếu EV > 0, đó là quyết định có lợi về mặt toán học trong dài hạn.', en: 'If EV > 0, it’s a mathematically favourable decision over the long run.' } },
      { calc: { vi: 'Bài toán ra mắt tính năng mới', en: 'Launching a new feature' }, steps: {
        vi: [
          'Chi phí phát triển: -$50,000',
          'Nếu thành công: lợi nhuận +$200,000. Xác suất thành công: 40%',
          'Nếu thất bại: mất trắng chi phí. Xác suất thất bại: 60%',
          'EV = (0.4 × 200,000) − (0.6 × 50,000) = 80,000 − 30,000',
          'EV = $50,000 (Dương → Nên làm!)',
        ],
        en: [
          'Development cost: -$50,000',
          'If it succeeds: profit +$200,000. Probability of success: 40%',
          'If it fails: lose the cost entirely. Probability of failure: 60%',
          'EV = (0.4 × 200,000) − (0.6 × 50,000) = 80,000 − 30,000',
          'EV = $50,000 (Positive → do it!)',
        ],
      }},
    ],
  },
  'bus-story': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Data Storytelling & Stakeholder Management: làm sao để sếp tin và dùng báo cáo của bạn.',
      en: 'Data Storytelling & Stakeholder Management: how to get leaders to trust and act on your report.',
    },
    body: [
      { h: { vi: 'Đừng ném dữ liệu vào mặt sếp', en: 'Don’t hurl data at your boss' },
        p: { vi: 'Sai lầm lớn nhất của Junior DA là làm dashboard 20 biểu đồ rồi bắt người xem tự hiểu. Nhiệm vụ của bạn là chắt lọc 1 thông điệp duy nhất và dẫn dắt họ đến đó.', en: 'A junior analyst’s biggest mistake is a 20-chart dashboard that makes the viewer figure it out. Your job is to distil ONE message and lead them to it.' } },
      { list: [
        [{ vi: 'The "So What?" Test', en: 'The “So What?” test' }, { vi: 'Mỗi con số, tự hỏi "Thì sao?". "Doanh thu giảm 10%" → "Thì sao?" → "Vì miền Nam đóng 3 cửa hàng" → "Thì sao?" → "Cần dồn ngân sách marketing sang kênh Online".', en: 'For every number, ask “So what?”. “Revenue dropped 10%” → “So what?” → “Because the South closed 3 stores” → “So what?” → “We should shift marketing budget to the online channel.”' }],
        [{ vi: 'Giao tiếp với Non-Tech', en: 'Talking to non-technical people' }, { vi: 'Sếp Marketing không quan tâm bạn dùng K-Means hay XGBoost. Họ chỉ quan tâm "Khách này có khả năng mua lại cao không?". Hãy nói ngôn ngữ của họ.', en: 'A marketing lead doesn’t care if you used K-Means or XGBoost. They care whether “this customer is likely to buy again”. Speak their language.' }],
      ]},
      { note: { vi: 'Quy tắc Minto Pyramid: bắt đầu bằng Kết luận → các luận điểm chính → dữ liệu chứng minh. Ngược hoàn toàn với cách viết văn thông thường.', en: 'The Minto Pyramid: start with the conclusion → key arguments → supporting data. The exact opposite of how we normally write essays.' } },
    ],
  },
  'bus-cases': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Giải phẫu các case study kinh điển trong phân tích dữ liệu.',
      en: 'Dissecting classic case studies in data analysis.',
    },
    body: [
      { h: { vi: 'Case 1: Phân tích phễu (Funnel Drop-off)', en: 'Case 1: Funnel drop-off analysis' },
        p: { vi: 'Khách vào web rất đông nhưng tỷ lệ mua hàng (CR) < 1%.', en: 'Lots of traffic, but the purchase conversion rate (CR) is under 1%.' } },
      { list: [
        [{ vi: 'Phân tích', en: 'Analysis' }, { vi: 'Phân rã phễu: Trang chủ → Xem sản phẩm → Thêm giỏ → Thanh toán. Phát hiện tỷ lệ rớt từ Giỏ → Thanh toán lên tới 80%.', en: 'Break the funnel into Home → Product view → Add to cart → Checkout. Find an 80% drop-off from Cart → Checkout.' }],
        [{ vi: 'Hành động', en: 'Action' }, { vi: 'Đề xuất thêm nút "Mua ngay" (bỏ qua giỏ) hoặc gửi Cart Abandonment Email.', en: 'Recommend a “Buy now” button (skip the cart) or a cart-abandonment email.' }],
      ]},
      { h: { vi: 'Case 2: Dự đoán rời bỏ (Churn Prediction)', en: 'Case 2: Churn prediction' },
        p: { vi: 'Công ty SaaS có tỷ lệ hủy gói cao.', en: 'A SaaS company with a high cancellation rate.' } },
      { list: [
        [{ vi: 'Phân tích', en: 'Analysis' }, { vi: 'Tìm điểm chung của người đã hủy. Phát hiện: 90% người không login trong tuần đầu sẽ hủy sau 1 tháng.', en: 'Find what churners have in common. Discovery: 90% of users who don’t log in during week one cancel within a month.' }],
        [{ vi: 'Hành động', en: 'Action' }, { vi: 'Kích hoạt chiến dịch Onboarding qua email ngay khi họ không login trong 3 ngày đầu.', en: 'Trigger an onboarding email campaign the moment they haven’t logged in for the first 3 days.' }],
      ]},
    ],
  },
  'bus-northstar': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'North Star Metric & Metric Trees: chọn MỘT chỉ số dẫn dắt toàn công ty, rồi phân rã nó thành cây chỉ số (driver tree) để biết kéo đòn bẩy nào.',
      en: 'North Star Metric & Metric Trees: pick ONE metric to steer the whole company, then break it into a driver tree to know which lever to pull.',
    },
    body: [
      { h: { vi: 'North Star Metric (NSM) là gì?', en: 'What is a North Star Metric (NSM)?' },
        p: { vi: 'Một chỉ số duy nhất phản ánh giá trị cốt lõi sản phẩm mang lại cho khách. Nó căn chỉnh mọi phòng ban về cùng hướng, tránh việc mỗi team tối ưu một KPI cục bộ rồi đá nhau.', en: 'A single metric capturing the core value your product delivers to customers. It aligns every team in one direction, preventing each from optimising a local KPI that fights the others.' } },
      { list: [
        [{ vi: 'Đặc điểm NSM tốt', en: 'Traits of a good NSM' }, { vi: 'Phản ánh giá trị khách nhận được (không phải doanh thu trực tiếp), dự báo được doanh thu dài hạn, và cả công ty tác động được vào nó.', en: 'Reflects value the customer receives (not revenue directly), predicts long-term revenue, and the whole company can influence it.' }],
        [{ vi: 'Ví dụ kinh điển', en: 'Classic examples' }, { vi: 'Airbnb: số đêm được đặt. Spotify: thời gian nghe nhạc. WhatsApp: số tin nhắn gửi. Lưu ý: đều KHÔNG phải "doanh thu".', en: 'Airbnb: nights booked. Spotify: time spent listening. WhatsApp: messages sent. Note: none of them is “revenue”.' }],
        [{ vi: 'Bẫy Vanity Metric', en: 'The vanity-metric trap' }, { vi: 'Tổng user đăng ký, lượt tải app — to và đẹp nhưng không phản ánh giá trị thực. Tránh chọn làm NSM.', en: 'Total sign-ups, app downloads — big and shiny but they don’t reflect real value. Avoid them as your NSM.' }],
      ]},
      { h: { vi: 'Metric Tree / Driver Tree', en: 'Metric Tree / Driver Tree' },
        p: { vi: 'Phân rã NSM thành các thành phần nhân/cộng để biết chính xác đòn bẩy nào tác động đến nó. Công cụ tư duy mạnh nhất để chuyển từ "số giảm" sang "làm gì để cải thiện".', en: 'Decompose the NSM into multiplicative/additive parts to see exactly which lever moves it. The most powerful tool for going from “the number dropped” to “what do we do about it”.' } },
      { formula: 'Revenue = Traffic × Conversion Rate × AOV × Purchase Frequency', caption: { vi: 'Ví dụ cây chỉ số e-commerce. Mỗi nhánh là một đòn bẩy team có thể tác động riêng.', en: 'An e-commerce driver tree. Each branch is a lever a team can move independently.' } },
      { note: { vi: 'Sức mạnh của Driver Tree: khi sếp hỏi "doanh thu giảm 10%, làm gì?", bạn không đoán mò. Bạn đi xuống từng nhánh — Traffic giảm? Conversion giảm? AOV giảm? — và khoanh đúng nguyên nhân để đề xuất hành động cụ thể.', en: 'The power of a driver tree: when the boss asks “revenue is down 10%, what now?”, you don’t guess. You walk each branch — Traffic down? Conversion down? AOV down? — and pinpoint the cause to recommend a concrete action.' } },
    ],
  },
  'bus-experiment': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Thiết kế thí nghiệm (A/B Testing) dưới góc nhìn ra quyết định kinh doanh: sizing, guardrail metrics, và các bẫy khiến kết luận sai (peeking, p-hacking, novelty effect).',
      en: 'Designing experiments (A/B testing) from a decision-making lens: sizing, guardrail metrics, and the traps that ruin conclusions (peeking, p-hacking, novelty effect).',
    },
    source: { vi: 'Nguồn tham khảo: Trustworthy Online Controlled Experiments (Kohavi).', en: 'Reference: Trustworthy Online Controlled Experiments (Kohavi).' },
    body: [
      { h: { vi: 'Vì sao A/B test thay vì xem before/after?', en: 'Why A/B test instead of before/after?' },
        p: { vi: 'So sánh "trước và sau khi đổi" trộn lẫn tác động của thay đổi với mùa vụ, marketing, xu hướng thị trường. Randomization (chia ngẫu nhiên Control/Treatment cùng thời điểm) là cách duy nhất phân lập quan hệ NHÂN QUẢ thật.', en: 'A “before vs after” comparison mixes the change’s effect with seasonality, marketing and market trends. Randomization (splitting Control/Treatment at the same time) is the only way to isolate true CAUSATION.' } },
      { h: { vi: 'Thiết kế trước khi chạy', en: 'Design before you run' },
        p: { vi: 'Mọi quyết định thống kê phải chốt TRƯỚC khi nhìn dữ liệu, nếu không bạn sẽ tự lừa mình:', en: 'Every statistical decision must be locked BEFORE you look at the data, or you’ll fool yourself:' } },
      { list: [
        [{ vi: 'Primary Metric', en: 'Primary Metric' }, { vi: 'Một chỉ số quyết định thắng/thua. Chọn trước, không đổi giữa chừng.', en: 'One metric that decides win/lose. Pick it upfront, don’t change midway.' }],
        [{ vi: 'Guardrail Metrics', en: 'Guardrail Metrics' }, { vi: 'Các chỉ số KHÔNG được phép xấu đi (tốc độ tải, tỷ lệ lỗi, churn). Tăng conversion mà làm sập trải nghiệm thì không đáng.', en: 'Metrics that must NOT degrade (load speed, error rate, churn). Lifting conversion while wrecking the experience isn’t worth it.' }],
        [{ vi: 'MDE (Minimum Detectable Effect)', en: 'MDE (Minimum Detectable Effect)' }, { vi: 'Mức cải thiện nhỏ nhất đáng quan tâm. MDE càng nhỏ, mẫu cần càng lớn.', en: 'The smallest improvement worth caring about. The smaller the MDE, the larger the sample you need.' }],
        [{ vi: 'Sample Size & Duration', en: 'Sample Size & Duration' }, { vi: 'Tính trước cỡ mẫu; chạy đủ ít nhất 1–2 chu kỳ kinh doanh (thường 1–2 tuần) để hết hiệu ứng cuối tuần.', en: 'Compute the sample size upfront; run at least 1–2 business cycles (usually 1–2 weeks) to absorb weekend effects.' }],
      ]},
      { h: { vi: 'Những bẫy giết chết kết luận', en: 'Traps that kill your conclusion' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'Peeking / Dừng sớm', en: 'Peeking / stopping early' }, { vi: 'Liên tục kiểm tra rồi dừng ngay khi thấy "có ý nghĩa" → thổi phồng tỷ lệ dương tính giả. Phải chờ đủ thời gian đã định.', en: 'Constantly checking and stopping the instant it looks “significant” → inflates the false-positive rate. Wait the full pre-set duration.' }],
        [{ vi: 'p-hacking', en: 'p-hacking' }, { vi: 'Cắt nhỏ dữ liệu theo nhiều phân khúc đến khi tìm được một segment "có ý nghĩa". Test 20 segment thì trung bình 1 cái "thắng" do ngẫu nhiên.', en: 'Slicing the data across many segments until one is “significant”. Test 20 segments and on average one “wins” by pure chance.' }],
        [{ vi: 'Novelty Effect', en: 'Novelty effect' }, { vi: 'User tăng tương tác chỉ vì tính năng MỚI lạ, không bền. Hiệu ứng thường tan sau vài tuần — đừng kết luận vội.', en: 'Users engage more simply because a feature is NEW, not because it’s better. The effect usually fades after a few weeks — don’t conclude too soon.' }],
      ]},
      { note: { vi: 'Tư duy Analyst trưởng thành: "không có ý nghĩa thống kê" KHÁC với "không có tác động". Có thể chỉ là mẫu chưa đủ lớn. Luôn báo cáo kèm khoảng tin cậy (confidence interval), đừng chỉ nói có/không.', en: 'Mature analyst mindset: “not statistically significant” is NOT the same as “no effect”. It may just be too small a sample. Always report a confidence interval — don’t just say yes/no.' } },
    ],
  },
  'bus-unit': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Unit Economics: mổ xẻ lợi nhuận trên MỘT đơn vị (1 khách / 1 đơn) qua Contribution Margin, Payback Period và LTV:CAC — tận dụng nền tảng tài chính của bạn.',
      en: 'Unit Economics: dissect the profit on ONE unit (one customer / one order) via contribution margin, payback period and LTV:CAC — leveraging your finance background.',
    },
    body: [
      { h: { vi: 'Tư duy "trên một đơn vị"', en: 'The “per-unit” mindset' },
        p: { vi: 'Một công ty có thể tăng doanh thu ngùn ngụt mà vẫn phá sản nếu mỗi đơn vị bán ra đều lỗ. Unit Economics trả lời câu hỏi sống còn: "Mỗi khách/đơn thực sự mang lại bao nhiêu lợi nhuận?"', en: 'A company can grow revenue explosively and still go bankrupt if every unit sold loses money. Unit economics answers the survival question: “How much profit does each customer/order actually generate?”' } },
      { list: [
        [{ vi: 'Contribution Margin (Biên đóng góp)', en: 'Contribution Margin' }, { vi: 'Doanh thu − chi phí biến đổi trên mỗi đơn vị. Đây là tiền thực còn lại để bù chi phí cố định và tạo lợi nhuận.', en: 'Revenue − variable cost per unit. This is the real money left to cover fixed costs and produce profit.' }],
        [{ vi: 'CAC Payback Period', en: 'CAC Payback Period' }, { vi: 'Mất bao nhiêu THÁNG để tiền khách mang về hoàn lại chi phí thu hút họ (CAC). SaaS khỏe thường < 12 tháng.', en: 'How many MONTHS for a customer’s contribution to repay the cost of acquiring them (CAC). Healthy SaaS is usually < 12 months.' }],
        [{ vi: 'LTV:CAC Ratio', en: 'LTV:CAC ratio' }, { vi: 'Tỷ lệ vàng. > 3 là mô hình lành mạnh; < 1 nghĩa là càng bán càng lỗ; > 5 có thể đang đầu tư marketing quá ít (bỏ lỡ tăng trưởng).', en: 'The golden ratio. > 3 is healthy; < 1 means you lose more the more you sell; > 5 may mean under-investing in marketing (leaving growth on the table).' }],
      ]},
      { formula: 'Contribution Margin = Price − COGS − Shipping − Payment Fees', caption: { vi: 'Chỉ trừ chi phí BIẾN ĐỔI (thay đổi theo từng đơn), không trừ chi phí cố định.', en: 'Subtract only VARIABLE costs (those that scale per order), not fixed costs.' } },
      { calc: { vi: 'Unit Economics một đơn hàng e-commerce', en: 'Unit economics of one e-commerce order' }, steps: {
        vi: [
          'Giá bán (AOV): $100',
          'Trừ COGS (giá vốn): -$55',
          'Trừ phí ship + đóng gói: -$12',
          'Trừ phí cổng thanh toán (2.5%): -$2.5',
          'Contribution Margin = $30.5 / đơn (margin 30.5%)',
          'Nếu CAC = $25 → cần >1 đơn để hoà vốn khách',
        ],
        en: [
          'Selling price (AOV): $100',
          'Less COGS (cost of goods): -$55',
          'Less shipping + packaging: -$12',
          'Less payment-gateway fee (2.5%): -$2.5',
          'Contribution Margin = $30.5 / order (30.5% margin)',
          'If CAC = $25 → need >1 order to break even on the customer',
        ],
      }},
      { note: { vi: 'Liên hệ Finance bạn đã học: Contribution Margin chính là tử số trong phân tích điểm hoà vốn (break-even = Chi phí cố định / Contribution Margin mỗi đơn vị). Unit Economics là cầu nối giữa kế toán quản trị và growth analytics.', en: 'Tie-in to your finance background: contribution margin is exactly the denominator in break-even analysis (break-even = fixed costs / contribution margin per unit). Unit economics is the bridge between managerial accounting and growth analytics.' } },
    ],
  },
  'bus-forecast': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Forecasting & Planning cho Analyst: run-rate, seasonality, budget vs actual (variance) và scenario planning — ngôn ngữ chung giữa Data và phòng Tài chính/FP&A.',
      en: 'Forecasting & planning for analysts: run-rate, seasonality, budget vs actual (variance) and scenario planning — the shared language of Data and Finance/FP&A.',
    },
    body: [
      { h: { vi: 'Từ dữ liệu quá khứ đến kế hoạch tương lai', en: 'From past data to a future plan' },
        p: { vi: 'Analyst không chỉ giải thích chuyện đã xảy ra; bạn thường được hỏi "quý tới sẽ ra sao?". Không cần model phức tạp — vài kỹ thuật nền tảng giải quyết phần lớn nhu cầu.', en: 'Analysts don’t just explain the past; you’re often asked “what will next quarter look like?”. You don’t need a complex model — a few foundational techniques cover most needs.' } },
      { list: [
        [{ vi: 'Run-rate', en: 'Run-rate' }, { vi: 'Ngoại suy đơn giản: lấy kết quả gần nhất nhân lên (doanh thu tháng × 12). Nhanh nhưng nguy hiểm nếu có mùa vụ — chỉ dùng ước lượng thô.', en: 'Simple extrapolation: take the latest result and scale it (monthly revenue × 12). Fast but dangerous with seasonality — use only for rough estimates.' }],
        [{ vi: 'Seasonality (Mùa vụ)', en: 'Seasonality' }, { vi: 'Tách yếu tố lặp theo chu kỳ. So sánh phải là YoY (cùng kỳ năm trước) chứ không phải MoM, để loại nhiễu mùa vụ.', en: 'Separate out the cyclical, repeating component. Compare YoY (same period last year), not MoM, to strip out seasonal noise.' }],
        [{ vi: 'Moving Average / Smoothing', en: 'Moving Average / Smoothing' }, { vi: 'Làm mượt nhiễu ngắn hạn để thấy xu hướng nền (trend) thật sự.', en: 'Smooth short-term noise to reveal the true underlying trend.' }],
        [{ vi: 'Scenario Planning', en: 'Scenario Planning' }, { vi: 'Luôn trình 3 kịch bản: Base / Best / Worst case, kèm giả định rõ ràng. Sếp ra quyết định dựa trên dải khả năng, không phải một con số cứng.', en: 'Always present three scenarios: Base / Best / Worst, with explicit assumptions. Leaders decide on a range of possibilities, not a single hard number.' }],
      ]},
      { h: { vi: 'Variance Analysis (Budget vs Actual)', en: 'Variance Analysis (Budget vs Actual)' },
        p: { vi: 'Cốt lõi của vai trò FP&A và là nơi Analyst tạo giá trị trực tiếp: không chỉ báo "lệch bao nhiêu" mà giải thích "vì sao lệch".', en: 'The core of the FP&A role and where an analyst adds direct value: not just reporting “how much we’re off” but explaining “why we’re off”.' } },
      { formula: 'Variance % = (Actual − Budget) / Budget × 100', caption: { vi: 'Tách variance thành Price variance (lệch giá) và Volume variance (lệch sản lượng) để biết nguyên nhân gốc.', en: 'Split the variance into Price variance and Volume variance to find the root cause.' } },
      { note: { vi: 'Giá trị thật của Analyst nằm ở phần "tại sao". "Doanh thu thấp hơn ngân sách 8%" là dữ liệu. "Thấp 8% vì Volume giảm 15% do mất 1 khách lớn, được bù một phần nhờ Price tăng 7%" mới là phân tích đáng tiền.', en: 'An analyst’s real value is in the “why”. “Revenue is 8% under budget” is data. “Down 8% because volume fell 15% from losing one major client, partly offset by a 7% price increase” is analysis worth paying for.' } },
    ],
  'bus-genai': {
    cluster: 'BUSINESS ACUMEN',
    summary: {
      vi: 'Một số công cụ AI tạo sinh và Machine Learning hỗ trợ phân tích dữ liệu chuyên sâu.',
      en: 'Several generative AI tools empower data analysts to extract deeper insights from data.',
    },
    body: [
      { p: { vi: 'Các công cụ này cung cấp nhiều khả năng khác nhau, đáp ứng nhu cầu phân tích dữ liệu cụ thể:', en: 'These tools encompass diverse capabilities, catering to specific data analytics needs:' } },
      { h: { vi: 'Nền tảng BI, Analytics & Machine Learning', en: 'BI, Analytics & Machine Learning Platforms' },
        list: [
          [{vi: 'RapidMiner', en: 'RapidMiner'}, {vi: 'Nền tảng Data Science toàn diện, tích hợp AI tạo sinh cho mô hình dự báo và tăng cường dữ liệu.', en: 'A comprehensive platform for data science and machine learning, incorporating generative AI capabilities for predictive modeling and data augmentation.'}],
          [{vi: 'Tableau', en: 'Tableau'}, {vi: 'Công cụ trực quan hóa dữ liệu hàng đầu tích hợp AI tạo sinh để chuẩn bị dữ liệu và tạo insights bằng ngôn ngữ tự nhiên.', en: 'A leading data visualization tool that has integrated generative AI features to automate data preparation and generate insights with natural language queries.'}],
          [{vi: 'IBM Cognos Analytics', en: 'IBM Cognos Analytics'}, {vi: 'Cung cấp tự động hóa và insights bằng AI, cho phép mô tả dữ liệu và kiểm định giả thuyết.', en: 'Offers AI-powered automation and insights, allowing users to describe data and test hypotheses.'}],
          [{vi: 'Salesforce Einstein GPT', en: 'Salesforce Einstein GPT'}, {vi: 'Một LLM được tích hợp vào nền tảng Salesforce để hỗ trợ dịch vụ khách hàng, bán hàng và marketing.', en: 'A large language model (LLM) integrated into the Salesforce platform. It can generate data for customer service, sales, and marketing.'}],
          [{vi: 'Các nền tảng Cloud (Google Cloud AutoML, IBM Watson Studio, Azure ML, Amazon SageMaker)', en: 'Cloud Platforms (Google Cloud AutoML, IBM Watson Studio, Azure ML, Amazon SageMaker)'}, {vi: 'Cung cấp nhiều mô hình tạo sinh cho phân loại văn bản, phân tích cảm xúc và phân loại hình ảnh.', en: 'Cloud-based machine learning platforms that include a variety of generative models for tasks such as text classification, sentiment analysis, and image classification.'}],
        ]
      },
      { h: { vi: 'Mô hình Ngôn ngữ & Code', en: 'NLP & Code Interpreters' },
        list: [
          [{vi: "OpenAI's Code Interpreter", en: "OpenAI's Code Interpreter"}, {vi: 'Plugin ChatGPT (Advanced Data Analysis) cho phép tải lên dữ liệu/code để ChatGPT phân tích, vẽ biểu đồ và tóm tắt dữ liệu.', en: 'The ChatGPT Advanced Data Analysis enables users to upload data or code and prompt ChatGPT to perform analysis, create visualizations, and summarize data.'}],
          [{vi: "Hugging Face's Transformers", en: "Hugging Face's Transformers"}, {vi: 'Thư viện NLP chứa nhiều mô hình tạo sinh như GPT-3 và BART để tạo văn bản, dịch ngôn ngữ.', en: 'An NLP library that includes a variety of generative models, such as GPT-3 and BART.'}],
          [{vi: "DeepMind's Gato", en: "DeepMind's Gato"}, {vi: 'AI Agent đa dụng có thể thực hiện nhiều tác vụ, bao gồm phân tích dữ liệu, phân loại văn bản.', en: 'A general-purpose AI agent that can perform various tasks, including data analytics and text classification.'}],
          [{vi: 'spaCy & Stanford CoreNLP', en: 'spaCy & Stanford CoreNLP'}, {vi: 'Công cụ xử lý ngôn ngữ tự nhiên (NLP) phổ biến bằng Python và Java.', en: 'Tools for natural language processing in Python and Java.'}],
        ]
      },
      { h: { vi: 'Thị giác máy tính (Computer Vision) & GAN', en: 'Computer Vision & GANs' },
        list: [
          [{vi: "Google AI's Imagen & OpenAI's DALL-E 2", en: "Google AI's Imagen & OpenAI's DALL-E 2"}, {vi: 'Mô hình Text-to-image diffusion tạo ảnh thực tế từ mô tả văn bản, dùng cho bài toán phân loại hình ảnh.', en: 'Text-to-image diffusion models that can generate realistic and creative images from text descriptions.'}],
          [{vi: 'StyleGAN, CycleGAN, BigGAN', en: 'StyleGAN, CycleGAN, BigGAN'}, {vi: 'Các mạng GAN giúp tạo ảnh khuôn mặt độ phân giải cao và chuyển đổi phong cách ảnh.', en: 'Generative adversarial networks (GANs) that generate realistic images, high-resolution images, and translate styles.'}],
        ]
      },
      { h: { vi: 'Explainable AI, Data Prep & ML Tools', en: 'Explainable AI, Data Prep & ML Tools' },
        list: [
          [{vi: 'Lime, SHAP & Captum', en: 'Lime, SHAP & Captum'}, {vi: 'Các thư viện công cụ giúp giải thích quyết định của mô hình Machine Learning.', en: 'Tools and libraries that explain the decisions made by machine learning models.'}],
          [{vi: 'DataWrangler & OpenRefine', en: 'DataWrangler & OpenRefine'}, {vi: 'Sử dụng NLP và các thao tác (lọc, nhóm) để làm sạch, biến đổi và chuẩn hóa dữ liệu.', en: 'Tools that clean, normalize, and transform data using NLP and various operations.'}],
          [{vi: 'Featuretools & H2O Driverless AI', en: 'Featuretools & H2O Driverless AI'}, {vi: 'Tự động tạo đặc trưng (features) mới và chọn lọc đặc trưng bằng Machine Learning.', en: 'Tools that automatically generate and select new features from existing data.'}],
          [{vi: 'TPOT, Prophet, LightGBM, XGBoost', en: 'TPOT, Prophet, LightGBM, XGBoost'}, {vi: 'Tối ưu hóa pipeline (TPOT), dự báo chuỗi thời gian (Prophet) và cây gradient-boosting (LightGBM, XGBoost).', en: 'Optimize machine learning pipelines, forecast time series data, and build gradient-boosting trees.'}],
        ]
      }
    ],
  },
};
