// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Block `code` để chuỗi chung; comment dùng tiếng Anh cho trung lập.
export const dbtLessons = {
  'dbt-intro': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'dbt (data build tool) là công cụ biến đổi dữ liệu (chữ "T" trong ELT) ngay trong Data Warehouse, dùng SQL + Jinja. Nó đưa kỷ luật software engineering (version control, test, docs, CI/CD) vào công việc của Analyst.',
      en: 'dbt (data build tool) is the transformation tool (the “T” in ELT) that runs inside your data warehouse using SQL + Jinja. It brings software-engineering discipline (version control, tests, docs, CI/CD) to the analyst’s workflow.',
    },
    source: { vi: 'Nguồn: docs.getdbt.com — Introduction & Best Practices.', en: 'Source: docs.getdbt.com — Introduction & Best Practices.' },
    body: [
      { h: { vi: 'Analytics Engineering là gì?', en: 'What is analytics engineering?' },
        p: { vi: 'dbt nằm đúng chữ "T" (Transform) trong ELT hiện đại: dữ liệu thô đã được nạp (E & L) vào Warehouse (BigQuery, Snowflake, Redshift), dbt biến đổi nó thành các bảng/mô hình sạch, sẵn sàng phân tích — toàn bộ bằng SELECT statements.', en: 'dbt owns the “T” (Transform) of modern ELT: once raw data is loaded (E & L) into the warehouse (BigQuery, Snowflake, Redshift), dbt transforms it into clean, analysis-ready tables/models — entirely with SELECT statements.' } },
      { list: [
        [{ vi: 'Bạn chỉ viết SELECT', en: 'You only write SELECT' }, { vi: 'dbt tự lo phần DDL/DML (CREATE TABLE, INSERT). Bạn viết logic biến đổi, dbt biên dịch và chạy.', en: 'dbt handles the DDL/DML (CREATE TABLE, INSERT). You write the transformation logic; dbt compiles and runs it.' }],
        [{ vi: 'Jinja + SQL', en: 'Jinja + SQL' }, { vi: 'Jinja là ngôn ngữ template cho phép dùng biến, vòng lặp, macro ngay trong SQL — biến SQL tĩnh thành SQL động, tái sử dụng được.', en: 'Jinja is a templating language that lets you use variables, loops and macros inside SQL — turning static SQL into dynamic, reusable code.' }],
        [{ vi: 'DAG tự động', en: 'Automatic DAG' }, { vi: 'Nhờ hàm ref(), dbt tự suy ra thứ tự phụ thuộc giữa các model và dựng thành đồ thị (DAG) — chạy đúng thứ tự, không cần bạn xếp tay.', en: 'Thanks to ref(), dbt infers the dependencies between models and builds a DAG — running them in the right order with no manual scheduling.' }],
      ]},
      { h: { vi: 'ref() và source() — trái tim của dbt', en: 'ref() and source() — the heart of dbt' },
        p: { vi: 'Đừng bao giờ hard-code tên bảng. Dùng ref() để trỏ tới model khác và source() để trỏ tới bảng thô. Đây là thứ tạo ra DAG và giúp đổi môi trường dev/prod tự động.', en: 'Never hard-code a table name. Use ref() to point to another model and source() to point to a raw table. This is what builds the DAG and swaps dev/prod environments automatically.' } },
      { code: `-- models/marts/dim_customer.sql
SELECT
    c.customer_id,
    c.name,
    o.first_order_date
FROM {{ source('raw', 'customers') }} AS c   -- raw landed table
LEFT JOIN {{ ref('stg_orders') }}      AS o   -- another dbt model
  ON c.customer_id = o.customer_id`, lang: 'sql' },
      { note: { vi: 'Vì sao Analyst nên học dbt: nó là cầu nối giữa SQL và kỹ năng kỹ sư. dbt chính là công cụ thực thi lớp "Transform" mà bài SQL → ETL & Warehousing đã nói tới (ELT + dbt).', en: 'Why analysts should learn dbt: it’s the bridge between SQL and engineering skills. dbt is exactly the tool that executes the “Transform” layer described in the SQL → ETL & Warehousing lesson (ELT + dbt).' } },
    ],
  },

  'dbt-commands': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Bộ lệnh CLI cốt lõi của dbt: từ setup (deps, debug), build (run, test, build), đến inspect (compile, ls, docs) và operate (retry, run-operation). Thuộc nhóm này là chạy được một dự án dbt thật.',
      en: 'dbt’s core CLI commands: from setup (deps, debug), to build (run, test, build), inspect (compile, ls, docs) and operate (retry, run-operation). Know these and you can run a real dbt project.',
    },
    source: { vi: 'Nguồn: dbt CLI reference + cheat sheet "Main Commands & Node Selection" (Matthew Schembri).', en: 'Source: dbt CLI reference + the “Main Commands & Node Selection” cheat sheet (Matthew Schembri).' },
    body: [
      { h: { vi: 'Setup & kết nối', en: 'Setup & connection' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'dbt deps', en: 'dbt deps' }, { vi: 'Cài các package phụ thuộc (từ packages.yml).', en: 'Install package dependencies (from packages.yml).' }],
        [{ vi: 'dbt debug', en: 'dbt debug' }, { vi: 'Kiểm tra kết nối Warehouse và cấu hình dự án.', en: 'Check the warehouse connection and project config.' }],
        [{ vi: 'dbt clean', en: 'dbt clean' }, { vi: 'Xóa các artefact đã biên dịch (target/, dbt_packages/).', en: 'Remove compiled artefacts (target/, dbt_packages/).' }],
      ]},
      { h: { vi: 'Build dự án', en: 'Build the project' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'dbt seed', en: 'dbt seed' }, { vi: 'Nạp các file CSV (seed) vào schema raw.', en: 'Load seed CSVs into the raw schema.' }],
        [{ vi: 'dbt run', en: 'dbt run' }, { vi: 'Chạy tất cả model, KHÔNG chạy test.', en: 'Run all models, no tests.' }],
        [{ vi: 'dbt test', en: 'dbt test' }, { vi: 'Chỉ chạy test.', en: 'Run tests only.' }],
        [{ vi: 'dbt snapshot', en: 'dbt snapshot' }, { vi: 'Chạy snapshot (SCD Type 2) mà không chạy cả pipeline build.', en: 'Run snapshots (SCD Type 2) without the full build pipeline.' }],
        [{ vi: 'dbt build', en: 'dbt build' }, { vi: 'Chạy MỌI loại resource theo đúng thứ tự DAG: seeds → models → snapshots → tests. Lệnh dùng nhiều nhất.', en: 'Run ALL resource types in DAG order: seeds → models → snapshots → tests. The most-used command.' }],
        [{ vi: 'dbt build --full-refresh', en: 'dbt build --full-refresh' }, { vi: 'Ép các incremental model dựng lại từ đầu (rebuild from scratch).', en: 'Force incremental models to rebuild from scratch.' }],
      ]},
      { h: { vi: 'Inspect & tài liệu', en: 'Inspect & document' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: 'dbt compile', en: 'dbt compile' }, { vi: 'Render Jinja thành SQL thuần, KHÔNG chạy. Dùng để debug logic.', en: 'Render Jinja to raw SQL, no execution. Great for debugging logic.' }],
        [{ vi: 'dbt parse', en: 'dbt parse' }, { vi: 'Parse dự án + dựng manifest (kiểm tra CI nhanh).', en: 'Parse the project + build the manifest (a fast CI check).' }],
        [{ vi: 'dbt ls', en: 'dbt ls' }, { vi: 'Liệt kê resource — rất hữu ích để test cú pháp selector.', en: 'List project resources — very useful for testing selectors.' }],
        [{ vi: 'dbt show -s dim_customer', en: 'dbt show -s dim_customer' }, { vi: 'Xem trước kết quả truy vấn của model mà không materialize.', en: 'Preview a model’s query results without materializing it.' }],
        [{ vi: 'dbt docs generate / serve', en: 'dbt docs generate / serve' }, { vi: 'Dựng manifest.json / catalog.json rồi mở trang docs (localhost:8080).', en: 'Build manifest.json / catalog.json then serve the docs site (localhost:8080).' }],
        [{ vi: 'dbt source freshness', en: 'dbt source freshness' }, { vi: 'Kiểm tra độ "tươi" của bảng nguồn (dữ liệu có cập nhật không).', en: 'Check source-table freshness (is the data up to date?).' }],
      ]},
      { h: { vi: 'Vận hành & khắc phục', en: 'Operate & recover' }, p: { vi: '', en: '' } },
      { code: `# Run a macro standalone (grants, admin SQL, etc.)
dbt run-operation grant_select --args '{role: bi}'

# Re-run only the FAILED nodes from the last invocation
dbt retry

# Pass run-time variables
dbt build --vars '{start_date: 2024-01-01}'`, lang: 'bash' },
      { note: { vi: 'Mẹo CI/CD: dbt parse cực nhanh để kiểm tra dự án có hợp lệ không trong pipeline. dbt retry tiết kiệm thời gian khi chỉ một vài node fail — không phải chạy lại từ đầu.', en: 'CI/CD tip: dbt parse is blazing fast for validating a project in a pipeline. dbt retry saves time when only a few nodes fail — no need to rerun everything.' } },
    ],
  },

  'dbt-selection': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Node Selection — cú pháp chọn đúng tập node để chạy thay vì build cả dự án. Làm chủ toán tử +, @, tag:, state:modified là chìa khóa để chạy nhanh và làm CI hiệu quả.',
      en: 'Node selection — the syntax to run exactly the right set of nodes instead of the whole project. Mastering the +, @, tag:, state:modified operators is key to fast runs and efficient CI.',
    },
    source: { vi: 'Nguồn: dbt node selection syntax + cheat sheet (Matthew Schembri).', en: 'Source: dbt node selection syntax + cheat sheet (Matthew Schembri).' },
    body: [
      { h: { vi: 'Chọn cái gì để chạy (-s / --select)', en: 'Selecting what to run (-s / --select)' }, p: { vi: '', en: '' } },
      { code: `# Full pipeline excluding seeds
dbt build --exclude resource_type:seed

# Only models carrying a tag
dbt build -s tag:staging

# A model and everything UPSTREAM (its parents)
dbt build -s +dim_customer

# A model and everything DOWNSTREAM (its children)
dbt build -s dim_customer+

# One layer without tripping the next layer's relationship tests
dbt build -s tag:staging --exclude tag:intermediate

# Only nodes changed since the last manifest, plus downstream
dbt build -s state:modified+ --state prev_state/

# Build changes, but defer unchanged refs to prod
dbt build -s state:modified+ --defer --state prod/`, lang: 'bash' },
      { h: { vi: 'Bảng cú pháp Selector', en: 'Selector syntax legend' },
        p: { vi: 'Toán tử graph quanh tên model điều khiển phạm vi chạy:', en: 'Graph operators around a model name control the run scope:' } },
      { list: [
        [{ vi: '+model', en: '+model' }, { vi: 'model và tất cả node phía trên (parents / upstream).', en: 'the model and all upstream (parents).' }],
        [{ vi: 'model+', en: 'model+' }, { vi: 'model và tất cả node phía dưới (children / downstream).', en: 'the model and all downstream (children).' }],
        [{ vi: '+model+', en: '+model+' }, { vi: 'model cộng cả phía trên lẫn phía dưới.', en: 'the model plus everything up- and downstream.' }],
        [{ vi: '@model', en: '@model' }, { vi: 'model + downstream + upstream của những downstream đó.', en: 'the model + downstream + upstream of those downstream.' }],
        [{ vi: '2+model', en: '2+model' }, { vi: 'Giới hạn 2 bậc upstream (model+3 = 3 bậc downstream).', en: 'limit to 2 levels upstream (model+3 = 3 levels downstream).' }],
        [{ vi: 'tag:name', en: 'tag:name' }, { vi: 'mọi resource mang một tag.', en: 'all resources carrying a tag.' }],
        [{ vi: 'path:dir/', en: 'path:dir/' }, { vi: 'mọi resource nằm dưới một thư mục.', en: 'all resources under a path.' }],
        [{ vi: 'resource_type:seed', en: 'resource_type:seed' }, { vi: 'mọi node của một loại (seed, model, snapshot, test, source).', en: 'all nodes of a type (seed, model, snapshot, test, source).' }],
        [{ vi: 'state:modified', en: 'state:modified' }, { vi: 'các node thay đổi so với manifest của --state.', en: 'nodes changed vs the --state manifest.' }],
      ]},
      { note: { vi: 'Slim CI: kết hợp state:modified+ với --defer giúp pipeline chỉ build phần thay đổi và "mượn" các bảng prod chưa đổi — tiết kiệm thời gian và chi phí Warehouse cực lớn.', en: 'Slim CI: combining state:modified+ with --defer makes a pipeline build only what changed and “borrow” unchanged prod tables — a huge saving in time and warehouse cost.' } },
    ],
  },

  'dbt-models': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Model & Materialization: mỗi file .sql là một model. Cấu hình materialized quyết định dbt tạo VIEW, TABLE, INCREMENTAL hay EPHEMERAL. Tổ chức dự án theo layer staging → intermediate → marts.',
      en: 'Models & materializations: each .sql file is a model. The materialized config decides whether dbt creates a VIEW, TABLE, INCREMENTAL or EPHEMERAL object. Organise the project in layers: staging → intermediate → marts.',
    },
    body: [
      { h: { vi: '4 kiểu Materialization', en: 'The 4 materializations' },
        p: { vi: 'Cùng một SQL, materialization quyết định nó được lưu thế nào trong Warehouse:', en: 'For the same SQL, the materialization decides how it’s stored in the warehouse:' } },
      { list: [
        [{ vi: 'view', en: 'view' }, { vi: 'Mặc định. Tạo một VIEW — luôn tươi, không tốn lưu trữ, nhưng tính lại mỗi lần query.', en: 'The default. Creates a VIEW — always fresh, no storage cost, but recomputed on every query.' }],
        [{ vi: 'table', en: 'table' }, { vi: 'Tạo bảng vật lý, query nhanh, nhưng dựng lại toàn bộ mỗi lần dbt run.', en: 'Creates a physical table — fast to query, but fully rebuilt on every dbt run.' }],
        [{ vi: 'incremental', en: 'incremental' }, { vi: 'Chỉ xử lý dòng MỚI/đổi từ lần chạy trước. Dùng cho bảng fact lớn (sự kiện, log). Tiết kiệm chi phí lớn nhất.', en: 'Only processes NEW/changed rows since the last run. Used for large fact tables (events, logs). The biggest cost saver.' }],
        [{ vi: 'ephemeral', en: 'ephemeral' }, { vi: 'Không tạo object nào — code được "tiêm" vào model khác như một CTE. Dùng cho logic trung gian nhỏ.', en: 'Creates no object — the code is inlined into downstream models as a CTE. Used for small intermediate logic.' }],
      ]},
      { code: `-- models/marts/fct_orders.sql
{{ config(
    materialized = 'incremental',
    unique_key   = 'order_id'
) }}

SELECT * FROM {{ ref('stg_orders') }}

{% if is_incremental() %}
  -- only process new rows on incremental runs
  WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
{% endif %}`, lang: 'sql' },
      { h: { vi: 'Cấu trúc dự án theo layer', en: 'Layered project structure' },
        p: { vi: 'Best practice của dbt là chia model thành 3 lớp rõ ràng — đây cũng chính là tư duy Medallion (xem node Data Modeling Frameworks):', en: 'dbt best practice splits models into three clear layers — the same idea as the Medallion architecture (see the Data Modeling Frameworks node):' } },
      { list: [
        [{ vi: 'staging (stg_)', en: 'staging (stg_)' }, { vi: 'Làm sạch 1-1 từ source: đổi tên cột, ép kiểu, chuẩn hóa. Một staging model cho mỗi bảng nguồn.', en: 'A 1-to-1 clean-up of a source: rename columns, cast types, standardise. One staging model per source table.' }],
        [{ vi: 'intermediate (int_)', en: 'intermediate (int_)' }, { vi: 'Logic nghiệp vụ trung gian: join, tính toán phức tạp, tách bước cho dễ đọc.', en: 'Intermediate business logic: joins, complex calculations, split into readable steps.' }],
        [{ vi: 'marts (dim_ / fct_)', en: 'marts (dim_ / fct_)' }, { vi: 'Bảng cuối phục vụ phân tích & BI: dimension và fact theo mô hình sao (Kimball).', en: 'The final analysis- & BI-ready tables: dimensions and facts in a star schema (Kimball).' }],
      ]},
      { note: { vi: 'Quy tắc: staging luôn là view (nhẹ), marts thường là table/incremental (nhanh khi BI query). Mọi model chỉ tham chiếu nhau qua ref() — không bao giờ gọi thẳng tên bảng.', en: 'Rule of thumb: staging is always a view (light); marts are usually table/incremental (fast for BI queries). Models reference each other only via ref() — never a raw table name.' } },
    ],
  },

  'dbt-test': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Testing & Documentation — điều khiến dbt vượt trội so với SQL thuần. Generic tests (unique, not_null, relationships, accepted_values), singular tests, source freshness và docs tự sinh đảm bảo dữ liệu đáng tin.',
      en: 'Testing & documentation — what sets dbt apart from plain SQL. Generic tests (unique, not_null, relationships, accepted_values), singular tests, source freshness and auto-generated docs keep data trustworthy.',
    },
    body: [
      { h: { vi: 'Generic Tests (khai báo trong YAML)', en: 'Generic tests (declared in YAML)' },
        p: { vi: 'Khai báo test ngay cạnh định nghĩa cột trong file .yml — dbt tự sinh câu SQL kiểm tra và fail nếu có dòng vi phạm.', en: 'Declare tests right next to the column definition in a .yml file — dbt generates the checking SQL and fails if any row violates it.' } },
      { code: `# models/marts/_marts.yml
models:
  - name: dim_customer
    columns:
      - name: customer_id
        tests:
          - unique
          - not_null
      - name: status
        tests:
          - accepted_values:
              values: ['active', 'churned', 'lead']
      - name: region_id
        tests:
          - relationships:
              to: ref('dim_region')
              field: region_id`, lang: 'yaml' },
      { list: [
        [{ vi: 'unique', en: 'unique' }, { vi: 'Cột không được trùng giá trị (kiểm tra khóa chính).', en: 'No duplicate values in the column (checks a primary key).' }],
        [{ vi: 'not_null', en: 'not_null' }, { vi: 'Cột không được rỗng.', en: 'The column must not be null.' }],
        [{ vi: 'accepted_values', en: 'accepted_values' }, { vi: 'Giá trị phải nằm trong danh sách cho phép.', en: 'Values must be within an allowed list.' }],
        [{ vi: 'relationships', en: 'relationships' }, { vi: 'Mọi foreign key phải tồn tại ở bảng cha (toàn vẹn tham chiếu).', en: 'Every foreign key must exist in the parent table (referential integrity).' }],
      ]},
      { h: { vi: 'Singular Tests & Source Freshness', en: 'Singular tests & source freshness' },
        p: { vi: 'Singular test là một file .sql trả về các dòng "sai" — nếu trả về ≥ 1 dòng là test fail. Source freshness cảnh báo khi dữ liệu nguồn quá cũ.', en: 'A singular test is a .sql file that returns the “bad” rows — if it returns ≥ 1 row, the test fails. Source freshness warns when source data is too stale.' } },
      { code: `-- tests/assert_positive_revenue.sql
-- Fails if any order has non-positive revenue
SELECT order_id, revenue
FROM {{ ref('fct_orders') }}
WHERE revenue <= 0`, lang: 'sql' },
      { note: { vi: 'Liên hệ với SQL → Data Quality: dbt tự động hóa chính các kiểm tra NULL/trùng lặp/toàn vẹn mà bạn từng viết tay. docs generate còn dựng cả sơ đồ DAG (lineage) để biết một cột chảy từ nguồn nào tới đâu.', en: 'Tie-in to SQL → Data Quality: dbt automates the very NULL/duplicate/integrity checks you used to write by hand. docs generate also builds a DAG (lineage) graph showing where a column flows from source to mart.' } },
    ],
  },

  'dbt-modeling': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Data Modeling Frameworks — các khung thiết kế kho dữ liệu mà bạn hiện thực hóa bằng dbt: Kimball (mô hình sao), Data Vault 2.0, Medallion (Bronze/Silver/Gold), và lựa chọn Normalize vs Denormalize. Đây là node liên kết tới SQL, Power BI và Excel.',
      en: 'Data Modeling Frameworks — the warehouse-design frameworks you implement with dbt: Kimball (star schema), Data Vault 2.0, Medallion (Bronze/Silver/Gold), and the Normalize vs Denormalize choice. This node links across SQL, Power BI and Excel.',
    },
    source: {
      vi: 'Nguồn: docs.getdbt.com/blog/kimball-dimensional-model · docs.getdbt.com/blog/data-vault-with-dbt-cloud · tsaiprabhanj.medium.com (Medallion with dbt) · medium.com/analytics-vidhya (Normalization vs Denormalization).',
      en: 'Sources: docs.getdbt.com/blog/kimball-dimensional-model · docs.getdbt.com/blog/data-vault-with-dbt-cloud · tsaiprabhanj.medium.com (Medallion with dbt) · medium.com/analytics-vidhya (Normalization vs Denormalization).',
    },
    body: [
      { h: { vi: 'Kimball — Mô hình chiều (Dimensional)', en: 'Kimball — dimensional modeling' },
        p: { vi: 'Phổ biến nhất cho BI. Chia dữ liệu thành Fact (sự kiện đo được) và Dimension (bối cảnh để cắt/lọc), tạo thành Star Schema. dbt marts (dim_/fct_) chính là nơi hiện thực hóa Kimball.', en: 'The most popular for BI. Splits data into facts (measurable events) and dimensions (context to slice/filter), forming a star schema. dbt marts (dim_/fct_) are exactly where you implement Kimball.' } },
      { h: { vi: 'Data Vault 2.0', en: 'Data Vault 2.0' },
        p: { vi: 'Dành cho kho dữ liệu lớn, cần audit và mở rộng cao. Ba thành phần: Hubs (khóa nghiệp vụ), Links (quan hệ), Satellites (thuộc tính theo thời gian). Linh hoạt khi nguồn dữ liệu thay đổi liên tục, nhưng phức tạp hơn Kimball.', en: 'For large, highly auditable, scalable warehouses. Three components: Hubs (business keys), Links (relationships), Satellites (time-varying attributes). Flexible when sources change constantly, but more complex than Kimball.' } },
      { h: { vi: 'Medallion (Bronze / Silver / Gold)', en: 'Medallion (Bronze / Silver / Gold)' },
        p: { vi: 'Kiến trúc theo lớp chất lượng dữ liệu: Bronze (thô), Silver (đã làm sạch, chuẩn hóa), Gold (tổng hợp phục vụ business). Ánh xạ gần như 1-1 với layer staging → intermediate → marts của dbt.', en: 'A layering by data quality: Bronze (raw), Silver (cleaned, conformed), Gold (business-level aggregates). It maps almost 1-to-1 onto dbt’s staging → intermediate → marts layers.' } },
      { h: { vi: 'Normalize vs Denormalize', en: 'Normalize vs Denormalize' },
        p: { vi: 'Đánh đổi nền tảng của mọi mô hình:', en: 'The fundamental trade-off behind every model:' } },
      { list: [
        [{ vi: 'Normalized (3NF)', en: 'Normalized (3NF)' }, { vi: 'Tách nhỏ bảng, không trùng lặp dữ liệu. Lý tưởng cho OLTP (ghi nhanh, toàn vẹn cao) nhưng cần nhiều JOIN khi đọc.', en: 'Many small tables, no duplicated data. Ideal for OLTP (fast writes, strong integrity) but needs many JOINs to read.' }],
        [{ vi: 'Denormalized', en: 'Denormalized' }, { vi: 'Gộp dữ liệu vào bảng rộng, chấp nhận trùng lặp để đọc nhanh. Lý tưởng cho OLAP/BI — chính là bảng mart phẳng mà Power BI thích.', en: 'Merge data into wide tables, accepting duplication for fast reads. Ideal for OLAP/BI — exactly the flat mart tables Power BI loves.' }],
      ]},
      { note: { vi: 'Cách chọn: Bắt đầu với Kimball + Medallion (đủ cho 90% công ty). Chỉ dùng Data Vault khi quy mô và yêu cầu audit thực sự lớn. Node này liên kết tới: SQL (ETL & Warehousing, RDBMS OLTP/OLAP), Power BI (Star Schema), Excel (Power Pivot Data Model).', en: 'How to choose: start with Kimball + Medallion (enough for 90% of companies). Reach for Data Vault only when scale and audit requirements are genuinely large. This node links to: SQL (ETL & Warehousing, RDBMS OLTP/OLAP), Power BI (star schema), Excel (Power Pivot data model).' } },
    ],
  },
};
