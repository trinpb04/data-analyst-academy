// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// calc.steps dạng { vi: [...], en: [...] }.
export const statisticsLessons = {
  'stat-desc': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Tóm tắt và mô tả các đặc điểm cơ bản của một tập dữ liệu: xu hướng trung tâm (central tendency) và độ phân tán (dispersion).',
      en: 'Summarise and describe the basic features of a dataset: central tendency and dispersion.',
    },
    source: { vi: 'Nguồn tham khảo: Practical Statistics for Data Scientists.', en: 'Reference: Practical Statistics for Data Scientists.' },
    body: [
      { h: { vi: 'Xu hướng trung tâm (Central Tendency)', en: 'Central Tendency' },
        p: { vi: 'Đâu là giá trị "đại diện" cho tập dữ liệu của bạn?', en: 'What single value best represents your dataset?' } },
      { list: [
        [{ vi: 'Mean (Trung bình cộng)', en: 'Mean' }, { vi: 'Dễ tính nhưng cực nhạy với Outliers. Trung bình tài sản của bạn và Bill Gates là vài tỷ đô.', en: 'Easy to compute but extremely sensitive to outliers. The average wealth of you and Bill Gates is billions.' }],
        [{ vi: 'Median (Trung vị)', en: 'Median' }, { vi: 'Giá trị nằm chính giữa khi sắp xếp. Rất "lì" trước outliers. Với dữ liệu lệch (skewed) như thu nhập, Median phản ánh thực tế tốt hơn Mean.', en: 'The middle value once sorted. Very robust to outliers. For skewed data like income, the median reflects reality far better than the mean.' }],
        [{ vi: 'Mode (Yếu vị)', en: 'Mode' }, { vi: 'Giá trị xuất hiện nhiều nhất. Thường dùng cho dữ liệu phân loại (categorical).', en: 'The most frequent value. Typically used for categorical data.' }],
      ]},
      { h: { vi: 'Độ phân tán (Dispersion)', en: 'Dispersion' },
        p: { vi: 'Mean/Median không nói lên việc dữ liệu "chụm" hay "tản". Ta cần đo độ phân tán.', en: 'Mean/median say nothing about whether data is tightly clustered or spread out. We need a measure of spread.' } },
      { formula: 'σ²  =  Σ (xᵢ − μ)²\n      ──────────\n           N', caption: { vi: 'Variance (Phương sai σ²) đo trung bình bình phương khoảng cách từ mỗi điểm tới Mean (μ). Độ lệch chuẩn (Standard Deviation σ) là căn bậc hai của σ².', en: 'Variance (σ²) is the average squared distance of each point from the mean (μ). Standard deviation (σ) is the square root of σ².' } },
      { calc: { vi: 'Tính Độ lệch chuẩn cho mẫu [2, 4, 4, 6]', en: 'Compute the standard deviation of [2, 4, 4, 6]' }, steps: {
        vi: [
          '1. Mean (μ) = (2+4+4+6) / 4 = 4',
          '2. Tính (xᵢ − μ)²: (2-4)²=4, (4-4)²=0, (4-4)²=0, (6-4)²=4',
          '3. Variance (σ²) = (4 + 0 + 0 + 4) / 4 = 2',
          '4. Std Dev (σ) = √2 ≈ 1.41',
        ],
        en: [
          '1. Mean (μ) = (2+4+4+6) / 4 = 4',
          '2. Compute (xᵢ − μ)²: (2-4)²=4, (4-4)²=0, (4-4)²=0, (6-4)²=4',
          '3. Variance (σ²) = (4 + 0 + 0 + 4) / 4 = 2',
          '4. Std Dev (σ) = √2 ≈ 1.41',
        ],
      }},
      { note: { vi: 'Tứ phân vị (Quartiles) & IQR: dữ liệu chia 4 phần. IQR = Q3 − Q1 (50% dữ liệu ở giữa). Quy tắc tìm Outlier: điểm < [Q1 − 1.5·IQR] hoặc > [Q3 + 1.5·IQR] là nghi phạm.', en: 'Quartiles & IQR: split data into four parts. IQR = Q3 − Q1 (the middle 50%). Outlier rule: any point < [Q1 − 1.5·IQR] or > [Q3 + 1.5·IQR] is a suspect.' } },
    ],
  },
  'stat-prob': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Xác suất định lượng khả năng xảy ra của một sự kiện — nền tảng toán học của mọi suy luận thống kê và Machine Learning.',
      en: 'Probability quantifies how likely an event is — the mathematical foundation of all statistical inference and Machine Learning.',
    },
    source: { vi: 'Nguồn tham khảo: The Art of Statistics.', en: 'Reference: The Art of Statistics.' },
    body: [
      { h: { vi: 'Khái niệm nền tảng', en: 'Foundational concepts' },
        p: { vi: 'Probability P luôn là một số từ 0 (không bao giờ xảy ra) đến 1 (chắc chắn xảy ra).', en: 'A probability P is always a number from 0 (never) to 1 (certain).' } },
      { list: [
        [{ vi: 'Independent Events (Sự kiện độc lập)', en: 'Independent Events' }, { vi: 'Tung đồng xu lần 1 không ảnh hưởng lần 2. P(A và B) = P(A) × P(B).', en: 'The first coin flip doesn’t affect the second. P(A and B) = P(A) × P(B).' }],
        [{ vi: 'Conditional Probability (Xác suất có điều kiện)', en: 'Conditional Probability' }, { vi: 'Xác suất để A xảy ra khi ĐÃ BIẾT B xảy ra. Ký hiệu P(A|B).', en: 'The probability of A given that B has occurred. Written P(A|B).' }],
      ]},
      { h: { vi: "Định lý Bayes (Bayes' Theorem)", en: "Bayes' Theorem" },
        p: { vi: 'Cơ chế toán học để CẬP NHẬT NIỀM TIN khi có BẰNG CHỨNG MỚI. Nó giải quyết những trực giác sai lầm kinh điển của con người.', en: 'The mathematical machinery for UPDATING BELIEF in light of NEW EVIDENCE. It corrects classic human intuition failures.' } },
      { formula: 'P(A│B)  =  P(B│A) · P(A)\n           ─────────────\n                P(B)', caption: { vi: 'Xác suất hậu nghiệm ∝ Likelihood × Xác suất tiên nghiệm.', en: 'Posterior probability ∝ Likelihood × Prior probability.' } },
      { calc: { vi: 'Ví dụ: Test bệnh hiếm. Bạn ra kết quả DƯƠNG TÍNH. Bạn có thực sự bị bệnh?', en: 'Example: a rare-disease test comes back POSITIVE. Are you actually sick?' }, steps: {
        vi: [
          'Prevalence P(bệnh) = 1% (rất hiếm). Đây là Prior P(A).',
          'Sensitivity P(+|bệnh) = 99%.',
          'False Positive P(+|khỏe) = 5%.',
          '--- Tổng tỷ lệ Dương tính P(B):',
          'P(+) = [0.99 × 0.01] + [0.05 × 0.99] = 0.0099 + 0.0495 = 0.0594',
          '--- Áp dụng Bayes:',
          'P(bệnh|+) = (0.99 × 0.01) / 0.0594 ≈ 0.167',
          'Kết luận: chỉ ~16.7% khả năng mắc bệnh, dù test chính xác 99%!',
        ],
        en: [
          'Prevalence P(disease) = 1% (very rare). This is the prior P(A).',
          'Sensitivity P(+|disease) = 99%.',
          'False Positive P(+|healthy) = 5%.',
          '--- Total positive rate P(B):',
          'P(+) = [0.99 × 0.01] + [0.05 × 0.99] = 0.0099 + 0.0495 = 0.0594',
          '--- Apply Bayes:',
          'P(disease|+) = (0.99 × 0.01) / 0.0594 ≈ 0.167',
          'Conclusion: only ~16.7% chance of disease, even with a 99%-accurate test!',
        ],
      }},
      { note: { vi: 'Tại sao thấp vậy? Vì bệnh quá hiếm (1%). Trong 100 người, test "chỉ điểm sai" 5 người khỏe. Nên phần lớn kết quả dương tính là dương tính giả (Base Rate Fallacy).', en: 'Why so low? Because the disease is so rare (1%). Among 100 people the test wrongly flags 5 healthy ones, so most positives are false positives (the Base Rate Fallacy).' } },
    ],
  },
  'stat-infer': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Rút ra kết luận về một quần thể khổng lồ (population) dựa trên việc đo đạc một mẫu nhỏ (sample).',
      en: 'Draw conclusions about a huge population based on measuring a small sample.',
    },
    source: { vi: 'Nguồn tham khảo: Practical Statistics for Data Scientists.', en: 'Reference: Practical Statistics for Data Scientists.' },
    body: [
      { h: { vi: 'Định lý Giới hạn Trung tâm (CLT)', en: 'Central Limit Theorem (CLT)' },
        p: { vi: 'Phép màu của thống kê. Dù quần thể ban đầu kỳ dị thế nào (lệch, rời rạc), nếu lấy mẫu (n ≥ 30) LẶP ĐI LẶP LẠI và tính trung bình, phân phối của CÁC TRUNG BÌNH ĐÓ luôn tiến về Phân phối Chuẩn (hình chuông).', en: 'Statistics’ great miracle. No matter how strange the original population (skewed, discrete), if you REPEATEDLY sample (n ≥ 30) and take means, the distribution of THOSE MEANS approaches a Normal (bell) distribution.' } },
      { h: { vi: 'Khoảng tin cậy (Confidence Interval)', en: 'Confidence Interval' },
        p: { vi: 'Thay vì một con số duy nhất, ta đưa ra một khoảng: "Tôi tự tin 95% rằng chi tiêu trung bình thực của TOÀN BỘ khách hàng nằm trong khoảng $45–$55."', en: 'Instead of a single number, we give a range: “I’m 95% confident the true average spend of ALL customers lies between $45 and $55.”' } },
      { formula: 'CI  =  x̄  ±  Z · (σ / √n)', caption: { vi: 'x̄ là trung bình mẫu. Z = 1.96 cho 95% tin cậy. (σ / √n) là Sai số chuẩn (Standard Error). Mẫu càng lớn (n), CI càng hẹp (chính xác hơn).', en: 'x̄ is the sample mean. Z = 1.96 for 95% confidence. (σ / √n) is the Standard Error. The larger n, the narrower (more precise) the CI.' } },
      { h: { vi: 'Kiểm định giả thuyết (Hypothesis Testing)', en: 'Hypothesis Testing' },
        p: { vi: 'Khung tư duy để chứng minh một phát hiện là "thật" chứ không phải may rủi ngẫu nhiên.', en: 'A framework to prove a finding is “real” and not just random luck.' } },
      { list: [
        [{ vi: 'Null Hypothesis (H₀)', en: 'Null Hypothesis (H₀)' }, { vi: 'Giả thuyết vô thực: "Không có gì xảy ra, không có khác biệt, chiến dịch chẳng tác dụng."', en: 'The default of no effect: “Nothing happened, there is no difference, the campaign did nothing.”' }],
        [{ vi: 'Alternative Hypothesis (H₁)', en: 'Alternative Hypothesis (H₁)' }, { vi: 'Điều bạn đang cố chứng minh: "Phương án B đem lại nhiều doanh thu hơn A."', en: 'What you’re trying to prove: “Variant B drives more revenue than A.”' }],
        [{ vi: 'p-value', en: 'p-value' }, { vi: 'Xác suất thấy được kết quả (hoặc kỳ lạ hơn) NẾU H₀ ĐÚNG.', en: 'The probability of seeing this result (or more extreme) IF H₀ were true.' }],
      ]},
      { note: { vi: 'Nếu p-value rất nhỏ (thường < 0.05), kết quả quá hiếm khi H₀ đúng → bác bỏ H₀, gọi là "có ý nghĩa thống kê". Nhưng ý nghĩa thống kê KHÔNG đồng nghĩa ý nghĩa thực tiễn (practical significance).', en: 'If p-value is tiny (usually < 0.05), the result is too rare under H₀ → reject H₀ and call it “statistically significant”. But statistical significance is NOT the same as practical significance.' } },
    ],
  },
  'stat-abtest': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Ứng dụng mang lại nhiều tiền nhất của Thống kê trong tech: So sánh A và B để tìm giải pháp tối ưu.',
      en: 'The most lucrative application of statistics in tech: compare A vs B to find the optimal solution.',
    },
    body: [
      { h: { vi: 'A/B Testing (Kiểm định A/B)', en: 'A/B Testing' },
        p: { vi: 'Chia ngẫu nhiên người dùng thành 2 nhóm: Control (giữ nguyên — A) và Variant (tính năng mới — B). Đo một chỉ số chung, rồi dùng kiểm định giả thuyết xem khác biệt có thực hay do nhiễu.', en: 'Randomly split users into two groups: Control (unchanged — A) and Variant (new feature — B). Measure a shared metric, then use hypothesis testing to see if the difference is real or noise.' } },
      { list: [
        [{ vi: '1. Chọn 1 OEC (Overall Evaluation Criterion)', en: '1. Pick ONE OEC (Overall Evaluation Criterion)' }, { vi: 'Một metric cốt lõi. Đừng đo 20 metric rồi thấy cái nào tăng thì chọn (Multiple Testing Problem).', en: 'One core metric. Don’t measure 20 metrics and cherry-pick whichever went up (the Multiple Testing Problem).' }],
        [{ vi: '2. Tính Sample Size', en: '2. Compute the sample size' }, { vi: 'Biết trước cần bao nhiêu người để bài test đủ "độ nhạy" (Statistical Power) phát hiện khác biệt.', en: 'Know in advance how many users you need for enough sensitivity (statistical power) to detect the effect.' }],
        [{ vi: '3. Chạy test', en: '3. Run the test' }, { vi: 'Tuyệt đối không xem kết quả mỗi ngày rồi dừng sớm khi p-value < 0.05 (lỗi Peeking / p-hacking). Phải đợi đủ Sample size.', en: 'Never peek daily and stop early the moment p-value < 0.05 (peeking / p-hacking). Wait for the full sample size.' }],
      ]},
      { formula: 'n  ≈  16 · σ²\n      ────────\n          δ²', caption: { vi: 'Ước lượng siêu tốc cỡ mẫu (cho 1 nhóm); δ là Mức khác biệt tối thiểu muốn phát hiện (Minimum Detectable Effect).', en: 'A back-of-envelope sample-size estimate (per group); δ is the Minimum Detectable Effect you want to detect.' } },
      { calc: { vi: 'Thiết kế bài test đổi màu nút Mua Hàng', en: 'Designing a “change the Buy button colour” test' }, steps: {
        vi: [
          'Baseline CR (nút xanh) = 10% (p = 0.1)',
          'Kỳ vọng nút đỏ tăng CR lên 12% → δ = 0.02',
          'Phương sai (phân phối nhị thức): σ² ≈ p(1−p) = 0.1 × 0.9 = 0.09',
          'n ≈ (16 × 0.09) / (0.02)²',
          'n ≈ 1.44 / 0.0004 = 3,600',
          '→ Cần 3,600 người cho nhóm A VÀ 3,600 cho nhóm B rồi mới đọc kết quả!',
        ],
        en: [
          'Baseline CR (blue button) = 10% (p = 0.1)',
          'Expect red button to lift CR to 12% → δ = 0.02',
          'Variance (binomial): σ² ≈ p(1−p) = 0.1 × 0.9 = 0.09',
          'n ≈ (16 × 0.09) / (0.02)²',
          'n ≈ 1.44 / 0.0004 = 3,600',
          '→ You need 3,600 users in group A AND 3,600 in group B before reading results!',
        ],
      }},
    ],
  },
  'stat-dist': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Các Phân phối Xác suất (Probability Distributions) kinh điển mô tả cách dữ liệu thực tế hình thành.',
      en: 'The classic probability distributions that describe how real-world data is shaped.',
    },
    body: [
      { h: { vi: 'Phân phối Chuẩn (Normal/Gaussian)', en: 'Normal (Gaussian) Distribution' },
        p: { vi: 'Đỉnh cao của thống kê. Hầu hết hiện tượng tự nhiên (chiều cao, IQ, sai số đo lường) tuân theo phân phối này.', en: 'The pinnacle of statistics. Most natural phenomena (height, IQ, measurement error) follow it.' } },
      { list: [
        [{ vi: 'Đặc điểm', en: 'Characteristics' }, { vi: 'Hình chuông đối xứng. Mean = Median = Mode ở đỉnh.', en: 'A symmetric bell shape. Mean = Median = Mode at the peak.' }],
        [{ vi: 'Quy tắc 68-95-99.7', en: 'The 68-95-99.7 rule' }, { vi: '68% dữ liệu trong ±1 σ, 95% trong ±2 σ, 99.7% trong ±3 σ.', en: '68% of data lies within ±1 σ, 95% within ±2 σ, 99.7% within ±3 σ.' }],
      ]},
      { formula: 'Z  =  (x − μ)\n      ───────\n         σ', caption: { vi: 'Z-score: cho biết x cách Mean (μ) bao nhiêu lần độ lệch chuẩn (σ). Z > 3 thường coi là Outlier.', en: 'Z-score: how many standard deviations (σ) x is from the mean (μ). Z > 3 is usually treated as an outlier.' } },
      { h: { vi: 'Các phân phối khác', en: 'Other distributions' },
        p: { vi: 'Tùy loại dữ liệu mà nó tuân theo các quy luật khác nhau:', en: 'Depending on the data type, different laws apply:' } },
      { list: [
        [{ vi: 'Binomial (Nhị thức)', en: 'Binomial' }, { vi: 'Đếm số lần Thành Công trong N phép thử độc lập (tung xu 10 lần được mấy lần ngửa?). Dùng nhiều trong A/B Testing.', en: 'Counts successes in N independent trials (10 coin flips, how many heads?). Heavily used in A/B testing.' }],
        [{ vi: 'Poisson', en: 'Poisson' }, { vi: 'Đếm số sự kiện trong một khoảng thời gian/không gian cố định (số khách vào cửa hàng mỗi giờ, số server sập mỗi ngày).', en: 'Counts events in a fixed interval of time/space (customers per hour, server crashes per day).' }],
        [{ vi: 'Log-Normal', en: 'Log-Normal' }, { vi: 'Dữ liệu lệch phải rất mạnh, chỉ nhận giá trị dương (thu nhập, giá nhà, lượt xem). Lấy logarit của nó sẽ thành Phân phối Chuẩn.', en: 'Strongly right-skewed, strictly positive data (income, house prices, views). Take its log and it becomes Normal.' }],
      ]},
      { note: { vi: 'Nhận biết dữ liệu thuộc phân phối nào là bước đầu tiên cực kỳ quan trọng để chọn đúng công cụ tính toán và tránh kết luận sai.', en: 'Recognising which distribution your data follows is a crucial first step to pick the right tools and avoid wrong conclusions.' } },
    ],
  },
  'stat-corr': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Tương quan (Correlation): đo độ mạnh và chiều của quan hệ giữa hai biến — cùng bẫy kinh điển "tương quan ≠ nhân quả".',
      en: 'Correlation: measure the strength and direction of a relationship between two variables — plus the classic “correlation ≠ causation” trap.',
    },
    body: [
      { h: { vi: 'Hệ số tương quan Pearson (r)', en: 'Pearson correlation (r)' },
        p: { vi: 'r nằm trong [−1, 1]. r = 1 quan hệ tuyến tính dương hoàn hảo, r = −1 âm hoàn hảo, r = 0 không có quan hệ TUYẾN TÍNH (vẫn có thể có quan hệ phi tuyến).', en: 'r ranges in [−1, 1]. r = 1 is a perfect positive linear relationship, r = −1 perfect negative, r = 0 means no LINEAR relationship (a non-linear one may still exist).' } },
      { list: [
        [{ vi: 'Pearson', en: 'Pearson' }, { vi: 'Đo quan hệ TUYẾN TÍNH giữa hai biến liên tục. Nhạy với outliers.', en: 'Measures the LINEAR relationship between two continuous variables. Sensitive to outliers.' }],
        [{ vi: 'Spearman', en: 'Spearman' }, { vi: 'Dựa trên thứ hạng (rank). Bắt được quan hệ đơn điệu (monotonic), bền với outliers hơn.', en: 'Rank-based. Captures monotonic relationships and is more robust to outliers.' }],
        [{ vi: 'R² (hệ số xác định)', en: 'R² (coefficient of determination)' }, { vi: 'Bình phương của r — tỷ lệ phương sai của biến này được giải thích bởi biến kia.', en: 'The square of r — the proportion of variance in one variable explained by the other.' }],
      ]},
      { note: { vi: 'Bẫy kinh điển: doanh số kem và số vụ đuối nước tương quan dương mạnh — không phải vì kem gây đuối nước, mà vì cả hai cùng tăng vào mùa hè (biến gây nhiễu / confounder). Luôn hỏi: có biến thứ ba ẩn nào không?', en: 'Classic trap: ice-cream sales and drownings are strongly correlated — not because ice cream causes drowning, but because both rise in summer (a confounder). Always ask: is there a hidden third variable?' } },
      { note: { vi: 'Mẹo thực chiến: luôn VẼ scatter plot trước khi tin vào r. Bộ dữ liệu "Anscombe’s Quartet" có cùng r nhưng hình dạng hoàn toàn khác nhau — con số không thay được mắt nhìn.', en: 'Field tip: always PLOT a scatter before trusting r. Anscombe’s Quartet shares the same r yet looks completely different — a number can’t replace looking at the data.' } },
    ],
  },
  'stat-regression': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Hồi quy tuyến tính (Linear Regression): mô hình dự báo nền tảng và cách đọc đúng hệ số, R² và p-value của nó.',
      en: 'Linear Regression: the foundational predictive model and how to correctly read its coefficients, R² and p-values.',
    },
    body: [
      { h: { vi: 'Mô hình hồi quy', en: 'The regression model' },
        p: { vi: 'Hồi quy tìm đường thẳng "khớp nhất" qua đám dữ liệu bằng cách tối thiểu hóa tổng bình phương sai số (Ordinary Least Squares — OLS).', en: 'Regression finds the line of best fit through the data by minimising the sum of squared errors (Ordinary Least Squares — OLS).' } },
      { formula: 'y  =  β₀  +  β₁·x₁  +  β₂·x₂  +  …  +  ε', caption: { vi: 'β₀ là hệ số chặn (intercept), βᵢ là hệ số góc của từng biến, ε là phần dư (residual / sai số không giải thích được).', en: 'β₀ is the intercept, βᵢ the slope for each variable, ε the residual (unexplained error).' } },
      { list: [
        [{ vi: 'Đọc hệ số β₁', en: 'Reading coefficient β₁' }, { vi: '"Khi x₁ tăng 1 đơn vị, y thay đổi β₁ đơn vị, GIỮ NGUYÊN các biến khác." Cụm "giữ nguyên các biến khác" là chìa khóa của hồi quy đa biến.', en: '“When x₁ rises by 1 unit, y changes by β₁ units, HOLDING the other variables constant.” That “holding others constant” clause is the heart of multiple regression.' }],
        [{ vi: 'p-value của hệ số', en: 'Coefficient p-value' }, { vi: 'Kiểm định xem β có khác 0 một cách có ý nghĩa không. p < 0.05 → biến này thực sự có liên hệ với y.', en: 'Tests whether β is significantly different from 0. p < 0.05 → this variable is genuinely associated with y.' }],
        [{ vi: 'R² & Adjusted R²', en: 'R² & Adjusted R²' }, { vi: 'Tỷ lệ phương sai của y được mô hình giải thích. Adjusted R² phạt việc thêm biến vô dụng — dùng nó khi so sánh các mô hình.', en: 'The share of variance in y the model explains. Adjusted R² penalises adding useless variables — use it when comparing models.' }],
      ]},
      { note: { vi: 'Đa cộng tuyến (Multicollinearity): khi các biến độc lập tương quan mạnh với nhau, hệ số β trở nên bất ổn và khó diễn giải. Kiểm tra bằng VIF (Variance Inflation Factor); VIF > 5–10 là đáng lo.', en: 'Multicollinearity: when independent variables are strongly correlated with each other, the β coefficients become unstable and hard to interpret. Check with VIF (Variance Inflation Factor); VIF > 5–10 is a red flag.' } },
    ],
  },
  'stat-sampling': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Lấy mẫu (Sampling) & Thiên lệch (Bias): một mẫu tệ sẽ phá hủy mọi phân tích phía sau, dù toán học có đẹp đến đâu.',
      en: 'Sampling & Bias: a bad sample destroys every downstream analysis, no matter how elegant the math.',
    },
    body: [
      { h: { vi: 'Vì sao lấy mẫu quan trọng', en: 'Why sampling matters' },
        p: { vi: 'Bạn hiếm khi đo được cả quần thể (population). Chất lượng kết luận phụ thuộc vào việc mẫu có ĐẠI DIỆN cho quần thể không, chứ không phải mẫu lớn cỡ nào.', en: 'You rarely measure the whole population. The quality of your conclusions depends on whether the sample is REPRESENTATIVE — not on how large it is.' } },
      { list: [
        [{ vi: 'Random Sampling', en: 'Random Sampling' }, { vi: 'Mỗi cá thể có xác suất được chọn như nhau — tiêu chuẩn vàng để tránh thiên lệch.', en: 'Every unit has an equal chance of selection — the gold standard for avoiding bias.' }],
        [{ vi: 'Stratified Sampling', en: 'Stratified Sampling' }, { vi: 'Chia quần thể thành các tầng (strata) rồi lấy mẫu trong từng tầng — đảm bảo nhóm nhỏ không bị bỏ sót.', en: 'Split the population into strata, then sample within each — ensures small groups aren’t missed.' }],
        [{ vi: 'Selection Bias', en: 'Selection Bias' }, { vi: 'Mẫu bị méo do cách thu thập (ví dụ: khảo sát online bỏ sót người không dùng internet).', en: 'The sample is skewed by how it’s collected (e.g. an online survey misses non-internet users).' }],
        [{ vi: 'Survivorship Bias', en: 'Survivorship Bias' }, { vi: 'Chỉ nhìn vào "người sống sót" (công ty còn tồn tại, khách còn dùng) mà bỏ qua phần đã rời đi.', en: 'Only looking at “survivors” (firms still alive, customers still active) while ignoring those who left.' }],
      ]},
      { note: { vi: 'Câu chuyện kinh điển (WWII): quân đội định gia cố nơi máy bay trở về bị bắn nhiều nhất. Abraham Wald chỉ ra phải gia cố nơi KHÔNG có vết đạn — vì máy bay trúng đạn ở đó đã không trở về. Đó là survivorship bias.', en: 'Classic WWII story: the military wanted to armour where returning planes had the most bullet holes. Abraham Wald argued to armour where there were NO holes — planes hit there never came back. That is survivorship bias.' } },
    ],
  },
  'stat-errors': {
    cluster: 'STATISTICS',
    summary: {
      vi: 'Sai lầm Loại I & Loại II, Statistical Power: hiểu cái giá của việc kết luận sai theo cả hai hướng.',
      en: 'Type I & Type II errors and Statistical Power: understand the cost of being wrong in both directions.',
    },
    body: [
      { h: { vi: 'Hai loại sai lầm', en: 'The two error types' },
        p: { vi: 'Mọi kiểm định đều có thể sai theo hai hướng đối nghịch. Hiểu rõ cái giá của mỗi loại giúp bạn chọn ngưỡng phù hợp với bối cảnh kinh doanh.', en: 'Every test can be wrong in two opposite directions. Understanding the cost of each helps you pick a threshold that fits the business context.' } },
      { list: [
        [{ vi: 'Type I Error (Dương tính giả, α)', en: 'Type I Error (False Positive, α)' }, { vi: 'Bác bỏ H₀ khi nó ĐÚNG. Tin có hiệu ứng trong khi không có. Ngưỡng α (thường 0.05) chính là tỷ lệ chấp nhận loại lỗi này.', en: 'Rejecting H₀ when it is TRUE. Believing there’s an effect when there isn’t. The α threshold (usually 0.05) is exactly the rate you accept for this error.' }],
        [{ vi: 'Type II Error (Âm tính giả, β)', en: 'Type II Error (False Negative, β)' }, { vi: 'Không bác bỏ H₀ khi nó SAI. Bỏ lỡ một hiệu ứng thật sự tồn tại.', en: 'Failing to reject H₀ when it is FALSE. Missing an effect that genuinely exists.' }],
        [{ vi: 'Statistical Power (1 − β)', en: 'Statistical Power (1 − β)' }, { vi: 'Khả năng phát hiện được hiệu ứng khi nó có thật. Thường nhắm ≥ 80%. Tăng cỡ mẫu → tăng power.', en: 'The probability of detecting an effect when it’s real. Usually targeted at ≥ 80%. Larger sample → higher power.' }],
      ]},
      { note: { vi: 'Đánh đổi theo bối cảnh: với test sàng lọc ung thư, Type II (bỏ sót bệnh) nguy hiểm hơn nhiều Type I → hạ ngưỡng để tăng độ nhạy. Với hệ thống tư pháp ("không kết tội người vô tội"), Type I bị coi nặng hơn. Không có ngưỡng đúng tuyệt đối — nó phụ thuộc cái giá thực tế.', en: 'Context-dependent trade-off: for cancer screening, a Type II error (missing the disease) is far worse than Type I → lower the threshold to raise sensitivity. For the justice system (“don’t convict the innocent”), Type I weighs heavier. There is no universally correct threshold — it depends on real-world costs.' } },
    ],
  },
};
