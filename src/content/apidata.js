// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Nguồn API đã kiểm chứng (06/2026): free tier & auth có thể đổi — luôn xem trang gốc.
export const apidataLessons = {

  'apidata-intro': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'Tổng quan các nguồn API & dữ liệu mở dễ lấy để luyện tập và làm portfolio. Cách đánh giá một nguồn: miễn phí tới đâu, có cần API key không, giới hạn request (rate limit), và định dạng trả về.',
      en: 'An overview of easy-to-access APIs & open data for practice and portfolio work. How to judge a source: how free is it, does it need an API key, the rate limit, and the response format.',
    },
    body: [
      { h: { vi: '4 câu hỏi trước khi chọn một API', en: '4 questions before picking an API' },
        p: { vi: 'Khi tìm nguồn dữ liệu để luyện tập, hãy hỏi nhanh 4 điều để khỏi mất thời gian:', en: 'When hunting for a data source to practise on, ask four quick questions to save time:' } },
      { list: [
        [{ vi: 'Auth?', en: 'Auth?' }, { vi: 'Không cần key (tốt nhất để học) hay cần đăng ký lấy API key miễn phí? Có cần thẻ tín dụng không?', en: 'No key (best for learning) or a free API-key signup? Does it need a credit card?' }],
        [{ vi: 'Rate limit', en: 'Rate limit' }, { vi: 'Bao nhiêu request/phút, /ngày? Free tier thường giới hạn — đủ để học nhưng không cho production.', en: 'How many requests per minute/day? Free tiers are capped — fine for learning, not production.' }],
        [{ vi: 'Format', en: 'Format' }, { vi: 'Hầu hết trả JSON (Python tự parse thành dict). Một số có CSV/XML.', en: 'Most return JSON (Python parses it into a dict). Some offer CSV/XML.' }],
        [{ vi: 'Giấy phép', en: 'Licence' }, { vi: 'Được dùng phi thương mại / portfolio công khai không? Đọc Terms trước khi đăng dữ liệu lên GitHub.', en: 'Is non-commercial / public-portfolio use allowed? Read the terms before posting data on GitHub.' }],
      ]},
      { code: `import requests

# The universal pattern for any REST API
url = "https://api.example.com/v1/data"
params  = {"symbol": "AAPL", "limit": 10}      # query filters
headers = {"Authorization": "Bearer YOUR_KEY"}  # only if auth is required

r = requests.get(url, params=params, headers=headers, timeout=10)
r.raise_for_status()        # raise on 4xx/5xx
data = r.json()             # JSON -> Python dict/list`, lang: 'python' },
      { note: { vi: 'Liên kết với bài Python → APIs & REST. Các node bên cạnh chia nguồn theo lĩnh vực (e-commerce, chứng khoán, crypto, ngân hàng, kinh tế vĩ mô…) — chọn lĩnh vực bạn quan tâm để có động lực làm dự án.', en: 'Links to the Python → APIs & REST lesson. The neighbouring nodes group sources by domain (e-commerce, stocks, crypto, banking, macroeconomics…) — pick the domain you care about to stay motivated on a project.' } },
    ],
  },

  'apidata-practice': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API mock / luyện tập KHÔNG cần đăng ký — hoàn hảo để học gọi API, phân trang, xử lý JSON trước khi đụng tới key thật.',
      en: 'Mock / practice APIs that need NO signup — perfect for learning requests, pagination and JSON handling before touching real keys.',
    },
    body: [
      { list: [
        [{ vi: 'JSONPlaceholder', en: 'JSONPlaceholder' }, { vi: 'Không cần auth. Dữ liệu giả: posts, users, comments, todos. Kinh điển để học GET/POST. (jsonplaceholder.typicode.com)', en: 'No auth. Fake posts, users, comments, todos. The classic for learning GET/POST. (jsonplaceholder.typicode.com)' }],
        [{ vi: 'DummyJSON', en: 'DummyJSON' }, { vi: 'Không cần signup. Có products, users, carts, recipes — kèm phân trang (limit/skip) và search. Rất hợp luyện ETL nhỏ. (dummyjson.com)', en: 'No signup. Products, users, carts, recipes — with pagination (limit/skip) and search. Great for a small ETL drill. (dummyjson.com)' }],
        [{ vi: 'Reqres', en: 'Reqres' }, { vi: 'Mô phỏng đăng nhập/đăng ký, phân trang user. Tốt để test luồng auth giả. (reqres.in)', en: 'Simulates login/register and user pagination. Good for testing a fake auth flow. (reqres.in)' }],
        [{ vi: 'Mockaroo', en: 'Mockaroo' }, { vi: 'Tự sinh dataset giả realistic (tên, email, số) xuất CSV/JSON — dựng dữ liệu mẫu cho dự án. (mockaroo.com)', en: 'Generate realistic fake datasets (names, emails, numbers) as CSV/JSON — build sample data for a project. (mockaroo.com)' }],
      ]},
      { code: `import requests, pandas as pd

# DummyJSON: paginate products into a DataFrame
r = requests.get("https://dummyjson.com/products", params={"limit": 100})
df = pd.DataFrame(r.json()["products"])
print(df[["title", "category", "price", "rating"]].head())`, lang: 'python' },
      { note: { vi: 'Bài tập gợi ý: kéo toàn bộ products từ DummyJSON (dùng limit & skip để phân trang), đưa vào Pandas, tính doanh thu giả theo category — luyện đúng vòng đời lấy → làm sạch → phân tích.', en: 'Suggested drill: pull all products from DummyJSON (use limit & skip to paginate), load into Pandas, compute mock revenue by category — practising the full fetch → clean → analyse loop.' } },
    ],
  },

  'apidata-ecom': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API E-commerce / bán lẻ: dữ liệu sản phẩm, đơn hàng, giỏ hàng — lý tưởng để dựng dashboard bán hàng, phân tích RFM, AOV, conversion.',
      en: 'E-commerce / retail APIs: products, orders, carts — ideal for building a sales dashboard or analysing RFM, AOV and conversion.',
    },
    body: [
      { list: [
        [{ vi: 'Fake Store API', en: 'Fake Store API' }, { vi: 'Không cần auth. Sản phẩm, danh mục, giỏ hàng, user giả của một cửa hàng — dựng nhanh dashboard bán lẻ. (fakestoreapi.com)', en: 'No auth. Fake products, categories, carts and users of a store — quickly build a retail dashboard. (fakestoreapi.com)' }],
        [{ vi: 'DummyJSON Products', en: 'DummyJSON Products' }, { vi: 'Như trên: products có price, rating, stock, category — đủ để tính AOV và tồn kho. (dummyjson.com/products)', en: 'As above: products carry price, rating, stock, category — enough to compute AOV and inventory. (dummyjson.com/products)' }],
        [{ vi: 'Platzi Fake Store API', en: 'Platzi Fake Store API' }, { vi: 'Không cần auth, có cả ảnh và CRUD đầy đủ — hợp làm demo end-to-end. (fakeapi.platzi.com)', en: 'No auth, includes images and full CRUD — good for an end-to-end demo. (fakeapi.platzi.com)' }],
        [{ vi: 'Stripe (test mode)', en: 'Stripe (test mode)' }, { vi: 'Thật nhưng có test mode miễn phí: tạo charge/customer giả để phân tích thanh toán. Cần key test (miễn phí). (stripe.com/docs)', en: 'Real but with a free test mode: create fake charges/customers to analyse payments. Needs a free test key. (stripe.com/docs)' }],
        [{ vi: 'Shopify dev store', en: 'Shopify dev store' }, { vi: 'Tạo cửa hàng dev miễn phí, có Admin API trả đơn hàng/sản phẩm thật — sát thực tế nhất. (shopify.dev)', en: 'Create a free dev store with an Admin API returning real orders/products — the most realistic. (shopify.dev)' }],
      ]},
      { note: { vi: 'Gợi ý dự án: từ Fake Store / DummyJSON, dựng một dashboard "doanh số theo danh mục" trong Power BI hoặc Pandas — gắn với bài Business → Metrics & KPIs (AOV, conversion).', en: 'Project idea: from Fake Store / DummyJSON, build a “sales by category” dashboard in Power BI or Pandas — tying into the Business → Metrics & KPIs lesson (AOV, conversion).' } },
    ],
  },

  'apidata-stock': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API chứng khoán / thị trường: giá cổ phiếu, ETF, forex, chỉ số — tận dụng nền tảng tài chính của bạn để làm dự án phân tích đầu tư.',
      en: 'Stock / market APIs: equity, ETF, forex and index prices — leverage your finance background for investment-analysis projects.',
    },
    source: { vi: 'Nguồn: alphavantage.co · finnhub.io · twelvedata.com · so sánh free tier 2026.', en: 'Sources: alphavantage.co · finnhub.io · twelvedata.com · 2026 free-tier comparisons.' },
    body: [
      { list: [
        [{ vi: 'Alpha Vantage', en: 'Alpha Vantage' }, { vi: 'API key miễn phí (chỉ cần email). Cổ phiếu, ETF, forex, crypto, chỉ số + nhiều chỉ báo kỹ thuật. Dữ liệu trễ ~15 phút, giới hạn ~25 calls/ngày. Dễ bắt đầu nhất.', en: 'Free API key (email only). Stocks, ETFs, forex, crypto, indices + many technical indicators. ~15-min delayed, ~25 calls/day. The easiest to start.' }],
        [{ vi: 'Finnhub', en: 'Finnhub' }, { vi: 'Key miễn phí. Có quote real-time (giới hạn vài symbol/phút) và WebSocket streaming — mạnh nhất cho dữ liệu thời gian thực ở free tier.', en: 'Free key. Real-time quotes (a few symbols/min) and WebSocket streaming — the strongest free tier for live data.' }],
        [{ vi: 'Twelve Data', en: 'Twelve Data' }, { vi: 'Key miễn phí, cú pháp gọn, time-series đẹp cho biểu đồ. Free ~800 calls/ngày.', en: 'Free key, clean syntax, nice time-series for charting. ~800 calls/day free.' }],
        [{ vi: 'Alpaca', en: 'Alpaca' }, { vi: 'Key miễn phí + paper-trading. Dữ liệu market US, hợp dự án "mô phỏng danh mục".', en: 'Free key + paper trading. US market data, good for a “simulated portfolio” project.' }],
        [{ vi: 'yfinance (Python)', en: 'yfinance (Python)' }, { vi: 'Thư viện không chính thức kéo dữ liệu Yahoo Finance — KHÔNG cần key, một dòng lấy cả lịch sử giá. Lý tưởng để học, không dùng production.', en: 'An unofficial library scraping Yahoo Finance — NO key, one line pulls full price history. Ideal for learning, not production.' }],
      ]},
      { code: `# yfinance: zero-key way to get price history
import yfinance as yf
df = yf.download("AAPL", start="2024-01-01", end="2025-01-01")
df["Close"].plot(title="AAPL daily close")

# Alpha Vantage (needs a free key)
# https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_KEY`, lang: 'python' },
      { note: { vi: 'Lưu ý: Polygon.io KHÔNG có free tier (chỉ trả phí). Để học, bắt đầu với yfinance (không key) rồi Alpha Vantage. Gắn với Statistics → Linear Regression để thử dự báo giá.', en: 'Note: Polygon.io has NO free tier (paid only). To learn, start with yfinance (no key) then Alpha Vantage. Pair with Statistics → Linear Regression to try price forecasting.' } },
    ],
  },

  'apidata-crypto': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API tiền mã hóa: giá, khối lượng, vốn hóa, dữ liệu on-chain — phần lớn KHÔNG cần key, cập nhật nhanh, hợp để luyện time-series.',
      en: 'Crypto APIs: price, volume, market cap, on-chain data — most need NO key, update fast, great for time-series practice.',
    },
    source: { vi: 'Nguồn: coingecko.com/en/api · docs.coingecko.com (keyless) · binance public API.', en: 'Sources: coingecko.com/en/api · docs.coingecko.com (keyless) · Binance public API.' },
    body: [
      { list: [
        [{ vi: 'CoinGecko', en: 'CoinGecko' }, { vi: 'Có Keyless Public API: KHÔNG cần đăng ký. Giá, lịch sử, vốn hóa, dữ liệu DEX on-chain. Demo ~10.000 calls/tháng, 100 calls/phút. Bao quát nhất.', en: 'Has a keyless public API: NO signup. Prices, history, market cap, on-chain DEX data. Demo ~10,000 calls/month, 100 calls/min. The broadest.' }],
        [{ vi: 'Binance (public)', en: 'Binance (public)' }, { vi: 'Endpoint market data công khai KHÔNG cần key (giá, klines/nến, order book). Chỉ trading mới cần key.', en: 'Public market-data endpoints need NO key (prices, klines/candles, order book). Only trading needs a key.' }],
        [{ vi: 'CoinMarketCap', en: 'CoinMarketCap' }, { vi: 'Free tier cần key (email). Dữ liệu xếp hạng, vốn hóa thị trường tổng.', en: 'Free tier needs a key (email). Rankings and total market-cap data.' }],
      ]},
      { code: `import requests

# CoinGecko — no key needed (keyless public API)
url = "https://api.coingecko.com/api/v3/coins/markets"
params = {"vs_currency": "usd", "order": "market_cap_desc", "per_page": 10}
data = requests.get(url, params=params, timeout=10).json()
for c in data:
    print(c["symbol"].upper(), c["current_price"], c["price_change_percentage_24h"])`, lang: 'python' },
      { note: { vi: 'Crypto chạy 24/7 và biến động mạnh → bộ dữ liệu time-series tuyệt vời để luyện moving average, volatility, và Window Functions (SQL) / rolling (Pandas).', en: 'Crypto trades 24/7 and is highly volatile → an excellent time-series dataset to practise moving averages, volatility, and Window Functions (SQL) / rolling (Pandas).' } },
    ],
  },

  'apidata-finance': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API ngân hàng / FinTech (sandbox) + tỉ giá: dữ liệu giao dịch, tài khoản giả lập an toàn, và tỉ giá hối đoái miễn phí — hợp dự án phân tích chi tiêu/dòng tiền.',
      en: 'Banking / FinTech (sandbox) APIs + FX rates: safe simulated transactions/accounts and free exchange rates — good for spend/cash-flow analysis projects.',
    },
    source: { vi: 'Nguồn: plaid.com (sandbox) · frankfurter.dev · openbankingtracker.com (free providers 2026).', en: 'Sources: plaid.com (sandbox) · frankfurter.dev · openbankingtracker.com (free providers 2026).' },
    body: [
      { list: [
        [{ vi: 'Plaid (Sandbox)', en: 'Plaid (Sandbox)' }, { vi: 'Sandbox MIỄN PHÍ không giới hạn: tài khoản, giao dịch, số dư giả lập của ngân hàng. Tiêu chuẩn ngành để học open banking. (plaid.com)', en: 'Free unlimited sandbox: simulated bank accounts, transactions, balances. The industry standard for learning open banking. (plaid.com)' }],
        [{ vi: 'Teller', en: 'Teller' }, { vi: 'Cho dev miễn phí tới 100 kết nối ngân hàng (US) — dữ liệu giao dịch thật trong giới hạn.', en: 'Free for devs up to 100 bank connections (US) — real transaction data within limits.' }],
        [{ vi: 'Enable Banking', en: 'Enable Banking' }, { vi: 'Đăng ký tự phục vụ, thay thế tốt cho Nordigen ở châu Âu (whitelist tài khoản của chính bạn để test live).', en: 'Self-serve signup, a good Nordigen replacement in Europe (whitelist your own accounts for live testing).' }],
        [{ vi: 'Frankfurter (tỉ giá)', en: 'Frankfurter (FX)' }, { vi: 'KHÔNG cần key. Tỉ giá hối đoái hằng ngày từ dữ liệu ECB, 200+ tiền tệ, có lịch sử. (api.frankfurter.dev)', en: 'NO key. Daily exchange rates from ECB data, 200+ currencies, with history. (api.frankfurter.dev)' }],
        [{ vi: 'exchangerate.host / Open Exchange Rates', en: 'exchangerate.host / Open Exchange Rates' }, { vi: 'Tỉ giá + chuyển đổi tiền tệ; free tier cần key miễn phí. Lựa chọn thay thế Frankfurter.', en: 'FX rates + currency conversion; free tier needs a free key. An alternative to Frankfurter.' }],
      ]},
      { note: { vi: 'Lưu ý: GoCardless (Nordigen cũ) từng miễn phí rộng rãi nhưng nay đã giới hạn / khóa đăng ký mới. Để học an toàn, ưu tiên Plaid Sandbox (giả lập, không rủi ro dữ liệu thật) + Frankfurter cho tỉ giá.', en: 'Note: GoCardless (formerly Nordigen) used to be broadly free but is now limited / closed to new signups. For safe learning, prefer Plaid Sandbox (simulated, no real-data risk) + Frankfurter for FX.' } },
    ],
  },

  'apidata-econ': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API kinh tế vĩ mô: GDP, lạm phát, lãi suất, thất nghiệp, thương mại — dữ liệu chính thống, miễn phí, hợp phân tích vĩ mô và dự báo.',
      en: 'Macroeconomic APIs: GDP, inflation, interest rates, unemployment, trade — authoritative, free data for macro analysis and forecasting.',
    },
    source: { vi: 'Nguồn: fred.stlouisfed.org/docs/api · data.worldbank.org · imf.org/en/data.', en: 'Sources: fred.stlouisfed.org/docs/api · data.worldbank.org · imf.org/en/data.' },
    body: [
      { list: [
        [{ vi: 'FRED (Fed St. Louis)', en: 'FRED (St. Louis Fed)' }, { vi: 'Key miễn phí. 800.000+ chuỗi thời gian kinh tế Mỹ (lãi suất, CPI, GDP, việc làm). Chuẩn vàng cho dữ liệu vĩ mô. Có thư viện Python fredapi.', en: 'Free key. 800,000+ US economic time series (rates, CPI, GDP, jobs). The gold standard for macro data. Has the Python fredapi library.' }],
        [{ vi: 'World Bank', en: 'World Bank' }, { vi: 'KHÔNG cần key, mở hoàn toàn. Chỉ số phát triển toàn cầu theo quốc gia: GDP, nghèo đói, dân số, thương mại. (data.worldbank.org)', en: 'NO key, fully open. Global development indicators by country: GDP, poverty, population, trade. (data.worldbank.org)' }],
        [{ vi: 'IMF Data', en: 'IMF Data' }, { vi: 'Mở. Dữ liệu cán cân thanh toán, tài chính quốc tế, dự báo WEO. (imf.org/en/data)', en: 'Open. Balance of payments, international finance, WEO forecasts. (imf.org/en/data)' }],
        [{ vi: 'Eurostat', en: 'Eurostat' }, { vi: 'Mở. Thống kê chính thức của EU (REST API + tải bộ dữ liệu).', en: 'Open. Official EU statistics (REST API + dataset downloads).' }],
      ]},
      { note: { vi: 'Gắn với Business → Forecasting & Variance và Statistics → Sampling: kéo CPI/lãi suất từ FRED để làm một bài phân tích vĩ mô có nguồn chính thống — rất "ăn điểm" trong portfolio tài chính.', en: 'Ties into Business → Forecasting & Variance and Statistics → Sampling: pull CPI/rates from FRED for a macro analysis with authoritative sourcing — a strong piece in a finance portfolio.' } },
    ],
  },

  'apidata-weather': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API thời tiết & khí hậu: dự báo, dữ liệu lịch sử, thời gian thực — phần lớn miễn phí, dữ liệu time-series sạch để luyện trực quan hóa.',
      en: 'Weather & climate APIs: forecasts, historical data, real-time — mostly free, with clean time-series for visualisation practice.',
    },
    body: [
      { list: [
        [{ vi: 'Open-Meteo', en: 'Open-Meteo' }, { vi: 'KHÔNG cần key! Dự báo, thời tiết lịch sử, chất lượng không khí cho mọi tọa độ. Miễn phí cho phi thương mại. Tốt nhất để học. (open-meteo.com)', en: 'NO key! Forecast, historical weather, air quality for any coordinates. Free for non-commercial use. The best for learning. (open-meteo.com)' }],
        [{ vi: 'OpenWeatherMap', en: 'OpenWeatherMap' }, { vi: 'Key miễn phí. Thời tiết hiện tại + dự báo 5 ngày; phổ biến, nhiều ví dụ sẵn. (openweathermap.org)', en: 'Free key. Current weather + 5-day forecast; popular with many examples. (openweathermap.org)' }],
      ]},
      { code: `import requests, pandas as pd

# Open-Meteo — no key needed
url = "https://api.open-meteo.com/v1/forecast"
params = {"latitude": 10.82, "longitude": 106.63,   # Ho Chi Minh City
          "hourly": "temperature_2m"}
data = requests.get(url, params=params, timeout=10).json()
df = pd.DataFrame(data["hourly"])
print(df.head())`, lang: 'python' },
      { note: { vi: 'Open-Meteo cho cả dữ liệu lịch sử miễn phí — hợp để luyện cohort/seasonality (so sánh nhiệt độ cùng kỳ các năm) và biểu đồ đường trong Matplotlib/Power BI.', en: 'Open-Meteo also gives free historical data — good for cohort/seasonality practice (compare temperatures year over year) and line charts in Matplotlib/Power BI.' } },
    ],
  },

  'apidata-geo': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'API địa lý, bản đồ & quốc gia: dữ liệu nước/thành phố, geocoding (địa chỉ → tọa độ), IP → vị trí — phần lớn không cần key, hợp phân tích theo vùng.',
      en: 'Geo, maps & countries APIs: country/city data, geocoding (address → coordinates), IP → location — mostly keyless, good for regional analysis.',
    },
    body: [
      { list: [
        [{ vi: 'REST Countries', en: 'REST Countries' }, { vi: 'KHÔNG cần key. Dân số, diện tích, tiền tệ, thủ đô, vùng của mọi quốc gia — bảng dimension "Country" sẵn dùng. (restcountries.com)', en: 'NO key. Population, area, currency, capital, region for every country — a ready-made “Country” dimension table. (restcountries.com)' }],
        [{ vi: 'OpenStreetMap Nominatim', en: 'OpenStreetMap Nominatim' }, { vi: 'KHÔNG cần key (có usage policy, rate-limit nhẹ). Geocoding: đổi địa chỉ ↔ tọa độ. (nominatim.org)', en: 'NO key (usage policy, light rate-limit). Geocoding: convert address ↔ coordinates. (nominatim.org)' }],
        [{ vi: 'IP geolocation (ipapi / ip-api)', en: 'IP geolocation (ipapi / ip-api)' }, { vi: 'Đổi địa chỉ IP → quốc gia/thành phố. Free tier không cần key cho lượng nhỏ.', en: 'Convert an IP address → country/city. Free tier needs no key for small volumes.' }],
      ]},
      { note: { vi: 'REST Countries là bảng dimension hoàn hảo để JOIN vào dữ liệu bán hàng theo quốc gia — luyện đúng tư duy Star Schema (dim_country) của bài Power BI & dbt Kimball.', en: 'REST Countries is a perfect dimension table to JOIN onto sales-by-country data — practising the star-schema thinking (dim_country) from the Power BI & dbt Kimball lessons.' } },
    ],
  },

  'apidata-gov': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'Dữ liệu mở của chính phủ & tổ chức: bộ dữ liệu công khai khổng lồ (dân số, y tế, giao thông, môi trường) — tải CSV hoặc qua API, miễn phí.',
      en: 'Government & institutional open data: huge public datasets (population, health, transport, environment) — download as CSV or via API, free.',
    },
    body: [
      { list: [
        [{ vi: 'data.gov (US)', en: 'data.gov (US)' }, { vi: 'Cổng dữ liệu mở liên bang Mỹ: hàng trăm nghìn bộ dữ liệu, nhiều cái có API/CSV.', en: 'The US federal open-data portal: hundreds of thousands of datasets, many with API/CSV.' }],
        [{ vi: 'data.gov.vn', en: 'data.gov.vn' }, { vi: 'Cổng dữ liệu mở Việt Nam — dữ liệu hành chính, kinh tế - xã hội trong nước.', en: 'Vietnam’s open-data portal — domestic administrative and socio-economic data.' }],
        [{ vi: 'Our World in Data', en: 'Our World in Data' }, { vi: 'Bộ dữ liệu sạch về dân số, năng lượng, y tế, khí hậu — tải CSV trực tiếp, đã chuẩn hóa. (ourworldindata.org)', en: 'Clean datasets on population, energy, health, climate — direct CSV downloads, already tidy. (ourworldindata.org)' }],
        [{ vi: 'Kaggle Datasets', en: 'Kaggle Datasets' }, { vi: 'Hàng chục nghìn dataset thực tế + có API (kaggle CLI) để tải. Nguồn số 1 để tìm dữ liệu làm portfolio.', en: 'Tens of thousands of real datasets + an API (kaggle CLI) to download. The #1 source for portfolio data. ' }],
      ]},
      { note: { vi: 'Mẹo: dữ liệu chính phủ thường "bẩn" (định dạng lạ, thiếu giá trị) — chính là cơ hội vàng để khoe kỹ năng làm sạch (Power Query, Pandas, dbt staging) trong portfolio.', en: 'Tip: government data is often “dirty” (odd formats, missing values) — a golden chance to show off cleaning skills (Power Query, Pandas, dbt staging) in your portfolio.' } },
    ],
  },

  'apidata-aggregators': {
    cluster: 'APIS & DATA SOURCES',
    summary: {
      vi: 'Nơi TÌM THÊM nguồn: các danh mục tổng hợp hàng nghìn API miễn phí, có lọc theo lĩnh vực và yêu cầu auth — dùng khi bạn cần một loại API cụ thể.',
      en: 'Where to FIND more sources: directories aggregating thousands of free APIs, filterable by domain and auth — use when you need a specific kind of API.',
    },
    body: [
      { list: [
        [{ vi: 'public-apis (GitHub)', en: 'public-apis (GitHub)' }, { vi: 'Danh sách cộng đồng nổi tiếng nhất: hàng nghìn API miễn phí, ghi rõ có cần Auth/HTTPS/CORS không, phân theo danh mục. (github.com/public-apis/public-apis)', en: 'The most famous community list: thousands of free APIs, marked for Auth/HTTPS/CORS, grouped by category. (github.com/public-apis/public-apis)' }],
        [{ vi: 'API Ninjas', en: 'API Ninjas' }, { vi: 'Key miễn phí, hàng trăm API nhỏ gọn (giá vàng, dinh dưỡng, trích dẫn, thành phố…). Dễ gọi, hợp prototype nhanh. (api-ninjas.com)', en: 'Free key, hundreds of tiny APIs (gold price, nutrition, quotes, cities…). Easy to call, great for quick prototypes. (api-ninjas.com)' }],
        [{ vi: 'RapidAPI Hub', en: 'RapidAPI Hub' }, { vi: 'Chợ API lớn nhất: nhiều API (gồm cả stock, sports) có free tier, một key dùng chung. (rapidapi.com)', en: 'The largest API marketplace: many APIs (incl. stock, sports) have a free tier, one shared key. (rapidapi.com)' }],
        [{ vi: 'Postman Public API Network', en: 'Postman Public API Network' }, { vi: 'Bộ sưu tập API công khai có sẵn ví dụ chạy thử ngay trong Postman.', en: 'A collection of public APIs with ready-to-run examples inside Postman.' }],
      ]},
      { note: { vi: 'Quy trình tìm nguồn: vào public-apis trên GitHub → lọc danh mục (Finance, Sports, Open Data…) → ưu tiên cái "Auth: No" để học nhanh, rồi mới tới cái cần key. Đây là node bạn quay lại mỗi khi bắt đầu dự án mới.', en: 'Sourcing workflow: open public-apis on GitHub → filter by category (Finance, Sports, Open Data…) → prefer “Auth: No” to learn fast, then move to key-required ones. This is the node you return to whenever you start a new project.' } },
    ],
  },
};
