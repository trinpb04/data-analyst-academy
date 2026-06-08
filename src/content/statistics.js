export const statisticsLessons = {
  'stat-desc': {
    cluster: 'STATISTICS',
    summary: 'Tóm tắt và mô tả các đặc điểm cơ bản của một tập dữ liệu: xu hướng trung tâm (central tendency) và độ phân tán (dispersion).',
    source: 'Nguồn tham khảo: Practical Statistics for Data Scientists.',
    body: [
      { h: 'Xu hướng trung tâm (Central Tendency)', p: 'Đâu là giá trị "đại diện" cho tập dữ liệu của bạn?' },
      { list: [
        ['Mean (Trung bình cộng)', 'Dễ tính, nhưng cực kỳ nhạy cảm với Outliers (giá trị ngoại lai). Ví dụ, trung bình tài sản của bạn và Bill Gates là vài tỷ đô.'],
        ['Median (Trung vị)', 'Giá trị nằm chính giữa khi sắp xếp dữ liệu. Rất "lì lợm" trước outliers. Khi dữ liệu bị lệch (skewed) như phân phối thu nhập, Median là thước đo phản ánh thực tế tốt hơn nhiều so với Mean.'],
        ['Mode (Yếu vị)', 'Giá trị xuất hiện nhiều nhất. Thường dùng cho dữ liệu phân loại (Categorical data).'],
      ]},
      { h: 'Độ phân tán (Dispersion)', p: 'Mean/Median không nói lên việc dữ liệu "chụm" lại hay "tản" ra. Ta cần đo độ phân tán.' },
      { formula: 'σ²  =  Σ (xᵢ − μ)²\n      ──────────\n           N', caption: 'Variance (Phương sai σ²) đo trung bình của bình phương khoảng cách từ mỗi điểm tới Mean (μ). Độ lệch chuẩn (Standard Deviation σ) là căn bậc hai của σ².' },
      { calc: 'Tính Độ lệch chuẩn (Std Dev) cho mẫu [2, 4, 4, 6]', steps: [
        '1. Mean (μ) = (2+4+4+6) / 4 = 4',
        '2. Tính (xᵢ − μ)² cho từng điểm: (2-4)²=4, (4-4)²=0, (4-4)²=0, (6-4)²=4',
        '3. Variance (σ²) = (4 + 0 + 0 + 4) / 4 = 8 / 4 = 2',
        '4. Std Dev (σ) = √2 ≈ 1.41',
      ]},
      { note: 'Tứ phân vị (Quartiles) & IQR: Dữ liệu chia làm 4 phần. IQR = Q3 - Q1 (vùng chứa 50% dữ liệu ở giữa). Quy tắc phổ biến để tìm Outlier: Điểm nào nhỏ hơn [Q1 - 1.5*IQR] hoặc lớn hơn [Q3 + 1.5*IQR] thì là nghi phạm.' },
    ],
  },
  'stat-prob': {
    cluster: 'STATISTICS',
    summary: 'Xác suất định lượng khả năng xảy ra của một sự kiện — nền tảng toán học của mọi suy luận thống kê và Machine Learning.',
    source: 'Nguồn tham khảo: The Art of Statistics.',
    body: [
      { h: 'Khái niệm Nền tảng', p: 'Probability P luôn là một số từ 0 (không bao giờ xảy ra) đến 1 (chắc chắn xảy ra).' },
      { list: [
        ['Independent Events (Sự kiện Độc lập)', 'Tung đồng xu lần 1 không ảnh hưởng đến lần 2. P(A và B) = P(A) × P(B).'],
        ['Conditional Probability (Xác suất có điều kiện)', 'Xác suất để A xảy ra, khi ĐÃ BIẾT B xảy ra. Ký hiệu: P(A|B).'],
      ]},
      { h: "Định lý Bayes (Bayes' Theorem)", p: 'Đây là cơ chế toán học để CHÚNG TA CẬP NHẬT NIỀM TIN khi có BẰNG CHỨNG MỚI. Nó giải quyết những trực giác sai lầm kinh điển của con người.' },
      { formula: 'P(A│B)  =  P(B│A) · P(A)\n           ─────────────\n                P(B)', caption: 'Xác suất hậu nghiệm ∝ Likelihood × Xác suất tiên nghiệm.' },
      { calc: 'Ví dụ: Test bệnh hiếm. Bạn đi test và ra kết quả DƯƠNG TÍNH. Bạn có thực sự bị bệnh?', steps: [
        'Prevalence (P(bệnh) trong dân số) = 1% (Rất hiếm). Đây là Prior P(A).',
        'Sensitivity (Độ nhạy của test: P(+|bệnh)) = 99%.',
        'False Positive (Sai lầm của test: P(+|khỏe)) = 5%.',
        '--- Tính tổng tỷ lệ ra Dương Tính (P(B)):',
        'P(+) = [P(+|bệnh) × P(bệnh)] + [P(+|khỏe) × P(khỏe)]',
        'P(+) = [0.99 × 0.01] + [0.05 × 0.99] = 0.0099 + 0.0495 = 0.0594',
        '--- Áp dụng Bayes:',
        'P(bệnh|+) = (0.99 × 0.01) / 0.0594 ≈ 0.1667',
        'Kết luận: Bạn chỉ có ~16.7% khả năng mắc bệnh, dù test có độ chính xác 99%!',
      ]},
      { note: 'Tại sao lại thấp vậy? Vì căn bệnh quá hiếm (1%). Trong 100 người, test sẽ "chỉ điểm sai" 5 người khỏe mạnh. Vậy nên phần lớn kết quả dương tính là dương tính giả (Base Rate Fallacy).' },
    ],
  },
  'stat-infer': {
    cluster: 'STATISTICS',
    summary: 'Rút ra kết luận (suy diễn) về một quần thể khổng lồ (population) dựa trên việc đo đạc một mẫu nhỏ (sample).',
    source: 'Nguồn tham khảo: Practical Statistics for Data Scientists.',
    body: [
      { h: 'Định lý Giới hạn Trung tâm (Central Limit Theorem - CLT)', p: 'Phép màu của thống kê. Bất kể quần thể ban đầu có hình dạng kỳ dị thế nào (lệch, rời rạc), nếu bạn lấy mẫu (n ≥ 30) LẶP ĐI LẶP LẠI và tính trung bình, phân phối của CÁC TRUNG BÌNH ĐÓ sẽ luông có dạng Phân Phối Chuẩn (hình quả chuông).' },
      { h: 'Khoảng tin cậy (Confidence Interval)', p: 'Thay vì dùng một con số duy nhất để dự đoán, ta đưa ra một khoảng: "Tôi tự tin 95% rằng mức chi tiêu trung bình thực sự của TOÀN BỘ khách hàng nằm trong khoảng $45 đến $55."' },
      { formula: 'CI  =  x̄  ±  Z · (σ / √n)', caption: 'x̄ là trung bình mẫu. Z là 1.96 cho độ tin cậy 95%. (σ / √n) gọi là Sai số chuẩn (Standard Error). Mẫu càng lớn (n), khoảng CI càng hẹp (chính xác hơn).' },
      { h: 'Kiểm định giả thuyết (Hypothesis Testing)', p: 'Khung tư duy để chứng minh một phát hiện là "thật" chứ không phải do ăn may ngẫu nhiên.' },
      { list: [
        ['Null Hypothesis (H₀)', 'Giả thuyết vô thực. Luôn cho rằng: "Không có chuyện gì xảy ra cả, không có khác biệt, chiến dịch marketing chẳng có tác dụng."'],
        ['Alternative Hypothesis (H₁)', 'Điều bạn đang cố chứng minh: "Chiến dịch B đem lại nhiều doanh thu hơn A."'],
        ['p-value', 'Xác suất để thấy được kết quả (như hiện tại hoặc kỳ lạ hơn) NẾU NHƯ H₀ LÀ ĐÚNG.'],
      ]},
      { note: 'Nếu p-value rất nhỏ (thường < 0.05), kết quả này quá hiếm nếu H₀ đúng → Ta bác bỏ H₀, và gọi kết quả là "có ý nghĩa thống kê (statistically significant)". Tuy nhiên, ý nghĩa thống kê KHÔNG đồng nghĩa với ý nghĩa thực tiễn (practical significance).' },
    ],
  },
  'stat-abtest': {
    cluster: 'STATISTICS',
    summary: 'Ứng dụng mang lại nhiều tiền nhất của Thống kê trong kinh doanh công nghệ: So sánh A và B để tìm ra giải pháp tối ưu.',
    body: [
      { h: 'A/B Testing (Kiểm định A/B)', p: 'Bạn chia ngẫu nhiên người dùng thành 2 nhóm: Control (Giữ nguyên - A) và Variant (Tính năng mới - B). Đo lường một chỉ số chung, rồi dùng kiểm định giả thuyết xem khác biệt có thực sự tồn tại hay do nhiễu.' },
      { list: [
        ['1. Chọn 1 OEC (Overall Evaluation Criterion)', 'Thường là 1 metric cốt lõi. Đừng đo 20 metric rồi thấy cái nào tăng thì chọn cái đó (Multiple Testing Problem).'],
        ['2. Tính Sample Size', 'Bạn cần biết trước cần bao nhiêu người tham gia để bài test có "độ nhạy" (Statistical Power) đủ để phát hiện ra sự khác biệt.'],
        ['3. Chạy test', 'Tuyệt đối không được xem kết quả mỗi ngày và dừng test sớm ngay khi thấy p-value < 0.05 (Lỗi Peeking / p-hacking). Phải đợi đủ Sample size.'],
      ]},
      { formula: 'n  ≈  16 · σ²\n      ────────\n          δ²', caption: 'Ước lượng siêu tốc kích thước mẫu (cho 1 nhóm); δ (delta) là Mức khác biệt tối thiểu bạn muốn phát hiện (Minimum Detectable Effect).' },
      { calc: 'Thiết kế bài test Đổi màu nút Mua Hàng', steps: [
        'Baseline CR (Tỷ lệ chuyển đổi gốc của nút xanh) = 10% (p = 0.1)',
        'Bạn kỳ vọng nút đỏ (Variant) sẽ tăng CR lên 12% -> Khác biệt δ = 0.02 (2%)',
        'Tính phương sai ước tính (cho phân phối nhị thức): σ² ≈ p(1−p) = 0.1 × 0.9 = 0.09',
        'Cần bao nhiêu User? n ≈ (16 × 0.09) / (0.02)²',
        'n ≈ 1.44 / 0.0004 = 3,600',
        '=> Bạn cần thu thập đủ 3,600 người cho nhóm A VÀ 3,600 người cho nhóm B rồi mới được đọc kết quả!'
      ]},
    ],
  },
  'stat-dist': {
    cluster: 'STATISTICS',
    summary: 'Các Phân phối Xác suất (Probability Distributions) kinh điển mô tả cách dữ liệu thực tế hình thành.',
    body: [
      { h: 'Phân phối Chuẩn (Normal/Gaussian Distribution)', p: 'Đỉnh cao của Thống kê. Hầu hết các hiện tượng tự nhiên (Chiều cao, IQ, Sai số đo lường) đều tuân theo phân phối này.' },
      { list: [
        ['Đặc điểm', 'Hình quả chuông đối xứng. Mean = Median = Mode ở ngay đỉnh.'],
        ['Quy tắc 68-95-99.7', '68% dữ liệu nằm trong ±1 Std Dev. 95% nằm trong ±2 Std Dev. 99.7% nằm trong ±3 Std Dev.'],
      ]},
      { formula: 'Z  =  (x − μ)\n      ───────\n         σ', caption: 'Z-score (Điểm Z): Cho biết giá trị x cách giá trị trung bình (μ) bao nhiêu lần độ lệch chuẩn (σ). Z > 3 thường được coi là Outlier.' },
      { h: 'Các Phân phối khác', p: 'Tùy vào loại dữ liệu mà nó sẽ tuân theo các quy luật khác nhau:' },
      { list: [
        ['Phân phối Nhị thức (Binomial)', 'Đếm số lần Thành Công trong N phép thử độc lập (ví dụ: Tung đồng xu 10 lần, có bao nhiêu lần ngửa?). Dùng nhiều trong A/B Testing.'],
        ['Phân phối Poisson', 'Đếm số lượng sự kiện xảy ra trong một khoảng thời gian/không gian cố định. (Ví dụ: Số khách vào cửa hàng mỗi giờ, số máy chủ bị sập mỗi ngày).'],
        ['Phân phối Log-Normal', 'Dữ liệu bị lệch phải (Right-skewed) cực mạnh, chỉ nhận giá trị dương. (Ví dụ: Thu nhập, Giá nhà, Lượt xem YouTube). Nếu bạn lấy Logarit của nó, nó sẽ biến thành Phân phối Chuẩn.'],
      ]},
      { note: 'Nhận biết dữ liệu của bạn thuộc phân phối nào là bước đầu tiên cực kỳ quan trọng để chọn đúng công cụ tính toán và tránh đưa ra kết luận sai lầm.' },
    ],
  },
};
