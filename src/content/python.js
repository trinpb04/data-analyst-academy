export const pythonLessons = {
  'py-pandas': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Pandas là thư viện quan trọng nhất để thao tác dữ liệu dạng bảng — được ví như "SQL chạy trong RAM trên Python".',
    source: 'Nguồn tham khảo: Python for Data Analysis (Wes McKinney).',
    body: [
      { h: 'DataFrame và Series', p: 'Pandas cung cấp hai cấu trúc dữ liệu cốt lõi giúp xử lý dữ liệu dễ dàng như Excel:' },
      { list: [
        ['Series', 'Mảng 1 chiều, giống như một cột trong Excel. Mỗi Series có một Index (nhãn).'],
        ['DataFrame', 'Bảng 2 chiều, là tập hợp của nhiều Series ghép lại với nhau cùng chung một Index.'],
      ]},
      { code: "import pandas as pd\n\n# Đọc file CSV thành DataFrame\ndf = pd.read_csv('orders.csv')\n\n# Khám phá nhanh (SQL: LIMIT 5)\nprint(df.head())\n\n# Lấy thông tin về cột, kiểu dữ liệu, non-null\ndf.info()", lang: 'python' },
      { h: 'Data Manipulation cốt lõi', p: 'Mọi thao tác SQL đều có bản dịch 1-1 sang Pandas:' },
      { list: [
        ['Lọc dòng (WHERE)', "`df[ df['sales'] > 100 ]` (Boolean Masking)."],
        ['Chọn cột (SELECT)', "`df[['product_name', 'sales']]`."],
        ['Gom nhóm (GROUP BY)', "`df.groupby('category')['sales'].sum()`."],
        ['Nối bảng (JOIN)', "`pd.merge(orders, customers, on='customer_id', how='left')`."],
      ]},
      { note: 'Method Chaining: Pandas hỗ trợ nối chuỗi hàm để code sạch hơn, tránh tạo ra hàng chục biến trung gian (`df1`, `df2`, `df_final`).' },
      { code: "# Ví dụ về Method Chaining siêu gọn\ntop_categories = (\n    df[df['status'] == 'completed']\n    .groupby('category')['sales']\n    .sum()\n    .sort_values(ascending=False)\n    .head(5)\n)", lang: 'python' },
    ],
  },
  'py-eda': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Exploratory Data Analysis (EDA) — Bước thám hiểm dữ liệu bắt buộc trước khi chạy bất kỳ mô hình phức tạp nào.',
    body: [
      { h: 'Quy trình Khám phá dữ liệu (EDA)', p: 'EDA là quá trình "làm quen" với dataset: tìm ra phân phối, phát hiện lỗi, và tìm kiếm tương quan.' },
      { list: [
        ['1. Đánh giá chất lượng', 'Bao nhiêu dữ liệu bị thiếu (Missing values)? Có dòng trùng lặp (Duplicates) không?'],
        ['2. Phân tích Univariate', 'Phân tích từng biến một. Nó có phân phối chuẩn không? Có bị lệch (skew) không?'],
        ['3. Phát hiện Outliers', 'Có giá trị nào vô lý không (ví dụ: tuổi = 999)?'],
        ['4. Phân tích Bivariate', 'Tìm kiếm mối quan hệ (Correlation) giữa 2 biến, đặc biệt là quan hệ với biến Target.'],
      ]},
      { code: "# 1. Kiểm tra thiếu dữ liệu\nmissing_stats = df.isna().sum() / len(df) * 100\n\n# 2. Xử lý giá trị thiếu (Imputation)\n# Điền NaN bằng giá trị Median cho cột số\ndf['age'].fillna(df['age'].median(), inplace=True)\n\n# 3. Phân tích thống kê nhanh\nstats = df.describe()  # Trả về count, mean, std, min, 25%, 50%, 75%, max\n\n# 4. Ma trận tương quan (chỉ trên cột số)\ncorr_matrix = df.corr(numeric_only=True)", lang: 'python' },
      { note: 'Nguyên tắc vàng: Đừng bao giờ vội vàng xóa (Drop) các dòng có chứa giá trị thiếu (NaN). Việc thiếu dữ liệu đôi khi chính nó mang ý nghĩa (ví dụ: khách hàng không điền ô khiếu nại nghĩa là họ hài lòng).' },
    ],
  },
  'py-viz': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Trực quan hóa bằng Python: Dùng Matplotlib làm nền móng và Seaborn để vẽ các biểu đồ thống kê đẹp mắt một cách nhanh chóng.',
    body: [
      { h: 'Matplotlib vs Seaborn', p: 'Hệ sinh thái vẽ biểu đồ của Python khá đa dạng, nhưng 2 thư viện này là cốt lõi.' },
      { list: [
        ['Matplotlib (.pyplot)', 'Mạnh mẽ, kiểm soát chi tiết đến từng pixel, nhưng cú pháp dài dòng. Giống như xây nhà từ gạch.'],
        ['Seaborn (sns)', 'Được xây dựng trên Matplotlib. Cung cấp các hàm vẽ biểu đồ thống kê phức tạp (heatmap, violin plot) chỉ bằng 1 dòng code, màu sắc mặc định rất đẹp.'],
      ]},
      { code: "import matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Đặt theme đẹp của seaborn\nsns.set_theme(style='whitegrid')\n\n# 1. Vẽ phân phối (Distribution)\nplt.figure(figsize=(10, 5))\nsns.histplot(data=df, x='salary', hue='department', kde=True)\nplt.title('Distribution of Salary by Department')\nplt.show()\n\n# 2. Vẽ ma trận tương quan (Heatmap)\nplt.figure(figsize=(8, 6))\nsns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')\nplt.show()", lang: 'python' },
      { note: 'Mẹo EDA: Dùng `sns.pairplot(df)` để ngay lập tức in ra toàn bộ biểu đồ phân tán (scatter) cho mọi cặp biến số học trong dataset. Nó giúp bạn nhìn thấy các cụm (clusters) hoặc tương quan tuyến tính bằng mắt thường chỉ trong 3 giây.' },
    ],
  },
  'py-ml': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Bước đệm từ Data Analyst sang Data Scientist: Sử dụng Scikit-Learn để dự báo tương lai hoặc phân cụm dữ liệu tự động.',
    body: [
      { h: '2 Nhóm chính của Machine Learning', p: 'Với Data Analytics, bạn giải quyết bài toán kinh doanh, không phải nghiên cứu thuật toán. Do đó, hiểu cách ứng dụng quan trọng hơn toán học bên dưới.' },
      { list: [
        ['Supervised Learning (Học có giám sát)', 'Bạn CÓ cột kết quả (Label/Target). Cố gắng tìm ra hàm f(x) ánh xạ dữ liệu (X) ra (Y). Nếu Y là số liên tục: Regression. Nếu Y là danh mục (Yes/No): Classification.'],
        ['Unsupervised Learning (Học không giám sát)', 'Dữ liệu KHÔNG có kết quả mẫu. Thuật toán tự tìm ra cấu trúc ẩn. Ứng dụng số 1: Clustering (K-Means) để phân khúc khách hàng.'],
      ]},
      { h: 'Quy trình huấn luyện cơ bản (Scikit-Learn API)', p: 'Thiết kế của thư viện `sklearn` là một kiệt tác. Mọi thuật toán đều theo đúng 3 bước: khởi tạo -> `.fit()` -> `.predict()`.' },
      { code: "from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# 1. Tách Features (X) và Target (y)\nX = df[['age', 'income', 'visit_count']]\ny = df['churn_status']\n\n# 2. LỖI KINH ĐIỂN nếu quên: Phải chia Train/Test set!\n# Giữ 20% dữ liệu để kiểm tra, model không được phép nhìn thấy phần này.\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# 3. Khởi tạo và Huấn luyện (Fit)\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# 4. Dự báo và Đánh giá (Predict & Evaluate)\npreds = model.predict(X_test)\nprint(\"Accuracy:\", accuracy_score(y_test, preds))\nprint(classification_report(y_test, preds))", lang: 'python' },
      { note: 'Leakage (Rò rỉ dữ liệu) là lỗi chết người nhất. Nếu bạn tính trung bình toàn bộ file dữ liệu (Cả Train và Test) rồi fillna TRƯỚC KHI chia Train/Test, dữ liệu từ Test (tương lai) đã rò rỉ vào Train (quá khứ). Luôn chia Train/Test đầu tiên!' },
    ],
  },
  'py-scrape': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Thu thập dữ liệu tự động (Web Scraping) bằng BeautifulSoup và Requests khi không có sẵn file CSV hay API.',
    body: [
      { h: 'Khi nào cần Web Scraping?', p: 'Data Analyst không phải lúc nào cũng được dọn sẵn dữ liệu. Đôi khi bạn phải tự đi lấy giá sản phẩm đối thủ từ website của họ.' },
      { list: [
        ['Requests', 'Thư viện dùng để "gõ cửa" một trang web và tải toàn bộ mã HTML của nó về máy.'],
        ['BeautifulSoup', 'Thư viện dùng để "đọc" mã HTML đó và bóc tách ra các thẻ (tags) chứa dữ liệu bạn cần (ví dụ: <div class="price">).'],
      ]},
      { code: "import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://example-ecommerce.com/laptops'\nhtml = requests.get(url).text\nsoup = BeautifulSoup(html, 'html.parser')\n\n# Tìm tất cả các thẻ chứa giá\nprices = soup.find_all('span', class_='product-price')\nfor p in prices:\n    print(p.text)", lang: 'python' },
      { note: 'Đạo đức và Pháp lý: Luôn kiểm tra file `robots.txt` của website trước khi scrape. Tránh gửi quá nhiều request (hãy dùng time.sleep) để không làm sập server người khác (DDoS vô ý).' },
    ],
  },
  'py-stats': {
    cluster: 'PYTHON FOR DATA',
    summary: 'Chạy các kiểm định thống kê chuyên sâu ngay trong Python bằng thư viện SciPy và Statsmodels.',
    body: [
      { h: 'Python cho Thống kê suy diễn', p: 'Khác với Scikit-Learn (thiên về Machine Learning và Dự báo), SciPy và Statsmodels thiên về diễn giải nguyên nhân và kiểm định giả thuyết.' },
      { list: [
        ['SciPy (.stats)', 'Chứa mọi kiểm định A/B Testing phổ biến: T-test, Chi-square, ANOVA.'],
        ['Statsmodels', 'Chạy mô hình Hồi quy tuyến tính (Linear Regression) và in ra bảng tóm tắt OLS với đầy đủ p-value, R-squared y hệt như phần mềm R hay SPSS.'],
      ]},
      { code: "from scipy import stats\nimport pandas as pd\n\n# Dữ liệu doanh thu của 2 nhóm trong A/B Test\ngroup_a = [100, 102, 98, 105, 101]\ngroup_b = [110, 115, 108, 112, 114]\n\n# Chạy Independent T-test\nt_stat, p_val = stats.ttest_ind(group_a, group_b)\nprint(f'P-value: {p_val}')\n\nif p_val < 0.05:\n    print('Khác biệt có ý nghĩa thống kê!')", lang: 'python' },
    ],
  },
};
