// Mỗi field text dạng { vi, en } để hỗ trợ toggle ngôn ngữ (xem src/i18n.jsx).
// Block `code` để chuỗi chung; comment dùng tiếng Anh cho trung lập.
// Trình tự học: Concepts -> Commands -> Building models -> Data Modeling Frameworks.
export const dbtLessons = {

  // ─── CONCEPTS ────────────────────────────────────────────────────────────
  'dbt-intro': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'dbt (data build tool) là công cụ biến đổi dữ liệu — chữ "T" trong ELT — chạy ngay trong Data Warehouse bằng SQL + Jinja. Nó đưa kỷ luật software engineering (version control, test, docs, CI/CD) vào công việc của Analyst.',
      en: 'dbt (data build tool) is the transformation tool — the “T” in ELT — running inside your data warehouse with SQL + Jinja. It brings software-engineering discipline (version control, tests, docs, CI/CD) to the analyst’s workflow.',
    },
    source: { vi: 'Nguồn: docs.getdbt.com — Introduction.', en: 'Source: docs.getdbt.com — Introduction.' },
    body: [
      { h: { vi: 'Vị trí của dbt trong ELT', en: 'Where dbt sits in ELT' },
        p: { vi: 'Dữ liệu thô được nạp (Extract & Load) vào Warehouse (BigQuery, Snowflake, Redshift). dbt lo phần Transform: biến dữ liệu thô thành các bảng/mô hình sạch, sẵn sàng phân tích — toàn bộ bằng SELECT statements.', en: 'Raw data is loaded (Extract & Load) into the warehouse (BigQuery, Snowflake, Redshift). dbt owns the Transform step: turning raw data into clean, analysis-ready tables/models — entirely with SELECT statements.' } },
      { list: [
        [{ vi: 'Bạn chỉ viết SELECT', en: 'You only write SELECT' }, { vi: 'dbt tự lo DDL/DML (CREATE TABLE, INSERT). Bạn viết logic biến đổi, dbt biên dịch và chạy.', en: 'dbt handles the DDL/DML (CREATE TABLE, INSERT). You write the transformation logic; dbt compiles and runs it.' }],
        [{ vi: 'Analytics Engineer', en: 'The analytics engineer' }, { vi: 'Vai trò lai giữa Data Analyst và Data Engineer — người dùng dbt để xây lớp dữ liệu đáng tin cho cả tổ chức.', en: 'A hybrid of analyst and engineer — the person who uses dbt to build a trustworthy data layer for the whole org.' }],
        [{ vi: 'Vì sao Analyst nên học', en: 'Why analysts should learn it' }, { vi: 'Nó là cầu nối giữa SQL bạn đã biết và kỹ năng kỹ sư. Đây là công cụ thực thi lớp "Transform" mà bài SQL → ETL & Warehousing đã nói tới.', en: 'It bridges the SQL you know with engineering skills. It is the tool that executes the “Transform” layer described in the SQL → ETL & Warehousing lesson.' }],
      ]},
      { note: { vi: 'Triết lý cốt lõi: coi phân tích như code. Mọi transform đều được version control (Git), test tự động, và tài liệu hóa — thay cho những file SQL rời rạc, không ai dám sửa.', en: 'Core philosophy: treat analytics like code. Every transform is version-controlled (Git), automatically tested, and documented — replacing scattered SQL files nobody dares touch.' } },
    ],
  },

  'dbt-project': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Giải phẫu một dự án dbt: thư mục models/, file dbt_project.yml, và hai hàm linh hồn ref() + source() — thứ tạo nên đồ thị phụ thuộc (DAG) tự động.',
      en: 'Anatomy of a dbt project: the models/ folder, dbt_project.yml, and the two soul functions ref() + source() — what builds the dependency graph (DAG) automatically.',
    },
    body: [
      { h: { vi: 'Cấu trúc thư mục', en: 'Folder structure' },
        p: { vi: 'Một model đơn giản là một file `.sql` trong thư mục `models/`. dbt_project.yml là file cấu hình gốc.', en: 'A model is simply a `.sql` file in the `models/` folder. dbt_project.yml is the root config file.' } },
      { code: `my_project/
├── dbt_project.yml      # root config
├── models/
│   ├── staging/         # stg_*  (1:1 cleanup of sources)
│   ├── intermediate/    # int_*  (business logic)
│   └── marts/           # dim_* / fct_*  (final tables)
├── seeds/               # CSV files
├── snapshots/           # SCD2 snapshots
├── tests/               # singular tests
└── macros/              # reusable Jinja`, lang: 'bash' },
      { h: { vi: 'ref() và source() — trái tim của dbt', en: 'ref() and source() — the heart of dbt' },
        p: { vi: 'Đừng bao giờ hard-code tên bảng. Dùng source() để trỏ tới bảng thô, ref() để trỏ tới model khác. Đây là thứ tạo ra DAG và tự đổi môi trường dev/prod.', en: 'Never hard-code a table name. Use source() for raw tables and ref() for other models. This builds the DAG and swaps dev/prod environments automatically.' } },
      { code: `-- models/marts/dim_customer.sql
SELECT
    c.customer_id,
    c.name,
    o.first_order_date
FROM {{ source('raw', 'customers') }} AS c   -- raw landed table
LEFT JOIN {{ ref('stg_orders') }}      AS o   -- another dbt model
  ON c.customer_id = o.customer_id`, lang: 'sql' },
      { note: { vi: 'Vì ref() tạo phụ thuộc, dbt biết stg_orders phải chạy TRƯỚC dim_customer — bạn không bao giờ phải tự xếp thứ tự chạy. Đó là sức mạnh của DAG.', en: 'Because ref() creates a dependency, dbt knows stg_orders must run BEFORE dim_customer — you never order runs by hand. That is the power of the DAG.' } },
    ],
  },

  'dbt-jinja': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Jinja & Macros — biến SQL tĩnh thành SQL động. Dùng biến, vòng lặp, điều kiện và macro (như "function" của SQL) để viết code DRY, tái sử dụng được.',
      en: 'Jinja & Macros — turn static SQL into dynamic SQL. Use variables, loops, conditionals and macros (SQL’s “functions”) to write DRY, reusable code.',
    },
    body: [
      { h: { vi: 'Jinja là gì?', en: 'What is Jinja?' },
        p: { vi: 'Jinja là ngôn ngữ template. `{{ ... }}` để in ra giá trị, `{% ... %}` để chạy logic (if, for). dbt biên dịch Jinja thành SQL thuần trước khi gửi xuống Warehouse.', en: 'Jinja is a templating language. `{{ ... }}` prints a value, `{% ... %}` runs logic (if, for). dbt compiles Jinja to plain SQL before sending it to the warehouse.' } },
      { code: `-- A macro = a reusable SQL function (in macros/cents_to_dollars.sql)
{% macro cents_to_dollars(column_name) %}
    ({{ column_name }} / 100)::numeric(16, 2)
{% endmacro %}

-- Use it in a model, and loop to build many columns
SELECT
    order_id,
    {{ cents_to_dollars('amount') }} AS amount_usd,
    {% for status in ['paid', 'refunded', 'pending'] %}
        SUM(CASE WHEN status = '{{ status }}' THEN 1 ELSE 0 END) AS {{ status }}_count
        {% if not loop.last %},{% endif %}
    {% endfor %}
FROM {{ ref('stg_orders') }}
GROUP BY order_id`, lang: 'sql' },
      { note: { vi: 'Mẹo debug: dùng `dbt compile` để xem Jinja biến thành SQL gì TRƯỚC khi chạy. Đừng lạm dụng Jinja — code quá "ma thuật" sẽ khó đọc. Dùng package dbt_utils cho các macro phổ biến (date_spine, pivot, surrogate_key).', en: 'Debug tip: use `dbt compile` to see what your Jinja becomes BEFORE running. Don’t over-use Jinja — overly “magic” code is hard to read. Reach for the dbt_utils package for common macros (date_spine, pivot, surrogate_key).' } },
    ],
  },

  // ─── COMMANDS (each cheat-sheet folder = one node) ───────────────────────
  'dbt-setup': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Nhóm lệnh Setup & Connection: chuẩn bị môi trường và kiểm tra kết nối trước khi build bất cứ thứ gì.',
      en: 'The Setup & Connection command group: prepare the environment and verify the connection before building anything.',
    },
    body: [
      { list: [
        [{ vi: 'dbt deps', en: 'dbt deps' }, { vi: 'Cài các package phụ thuộc (khai trong packages.yml, ví dụ dbt_utils).', en: 'Install package dependencies (declared in packages.yml, e.g. dbt_utils).' }],
        [{ vi: 'dbt debug', en: 'dbt debug' }, { vi: 'Kiểm tra kết nối Warehouse và cấu hình dự án — chạy đầu tiên khi setup máy mới.', en: 'Check the warehouse connection and project config — run it first on a fresh machine.' }],
        [{ vi: 'dbt clean', en: 'dbt clean' }, { vi: 'Xóa các artefact đã biên dịch (target/, dbt_packages/) khi cần "dọn nhà".', en: 'Remove compiled artefacts (target/, dbt_packages/) when you need a clean slate.' }],
      ]},
      { code: `dbt deps      # install packages
dbt debug     # test the connection + config
dbt clean     # delete target/ and dbt_packages/`, lang: 'bash' },
      { note: { vi: 'profiles.yml (nằm ngoài repo, ở ~/.dbt/) chứa thông tin kết nối Warehouse và credential. Không bao giờ commit file này lên Git.', en: 'profiles.yml (outside the repo, in ~/.dbt/) holds the warehouse connection and credentials. Never commit it to Git.' } },
    ],
  },

  'dbt-build': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Nhóm lệnh Build: chạy seeds, models, snapshots, tests. `dbt build` là lệnh dùng nhiều nhất — chạy tất cả theo đúng thứ tự DAG.',
      en: 'The Build command group: run seeds, models, snapshots, tests. `dbt build` is the most-used command — it runs everything in DAG order.',
    },
    body: [
      { list: [
        [{ vi: 'dbt seed', en: 'dbt seed' }, { vi: 'Nạp các file CSV (seed) vào schema raw.', en: 'Load seed CSVs into the raw schema.' }],
        [{ vi: 'dbt run', en: 'dbt run' }, { vi: 'Chạy tất cả model, KHÔNG chạy test.', en: 'Run all models, no tests.' }],
        [{ vi: 'dbt test', en: 'dbt test' }, { vi: 'Chỉ chạy test.', en: 'Run tests only.' }],
        [{ vi: 'dbt snapshot', en: 'dbt snapshot' }, { vi: 'Chạy snapshot (SCD Type 2) mà không chạy cả pipeline.', en: 'Run snapshots (SCD Type 2) without the full pipeline.' }],
        [{ vi: 'dbt build', en: 'dbt build' }, { vi: 'MỌI loại resource theo thứ tự DAG: seeds → models → snapshots → tests.', en: 'ALL resource types in DAG order: seeds → models → snapshots → tests.' }],
        [{ vi: 'dbt build --full-refresh', en: 'dbt build --full-refresh' }, { vi: 'Ép các incremental model dựng lại từ đầu.', en: 'Force incremental models to rebuild from scratch.' }],
      ]},
      { code: `dbt build                  # the daily driver: build everything in order
dbt run                    # models only
dbt build --full-refresh   # rebuild incrementals from scratch`, lang: 'bash' },
      { note: { vi: 'Ưu tiên `dbt build` hơn `dbt run` + `dbt test` riêng lẻ: build chạy test ngay sau mỗi model, nên nếu một bảng hỏng nó dừng sớm thay vì lan lỗi xuống cả pipeline.', en: 'Prefer `dbt build` over separate `dbt run` + `dbt test`: build tests each model right after it’s created, so a broken table stops early instead of cascading down the pipeline.' } },
    ],
  },

  'dbt-selection': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Node Selection — chọn đúng tập node để chạy thay vì build cả dự án. Làm chủ toán tử +, @, tag:, state:modified là chìa khóa để chạy nhanh và làm CI hiệu quả.',
      en: 'Node selection — run exactly the right set of nodes instead of the whole project. Mastering +, @, tag:, state:modified is key to fast runs and efficient CI.',
    },
    source: { vi: 'Nguồn: dbt node selection syntax + cheat sheet (Matthew Schembri).', en: 'Source: dbt node selection syntax + cheat sheet (Matthew Schembri).' },
    body: [
      { h: { vi: 'Chọn cái gì để chạy (-s / --exclude)', en: 'Selecting what to run (-s / --exclude)' }, p: { vi: '', en: '' } },
      { code: `dbt build --exclude resource_type:seed      # full pipeline excluding seeds
dbt build -s tag:staging                    # only models with a tag
dbt build -s +dim_customer                  # a model + everything UPSTREAM
dbt build -s dim_customer+                  # a model + everything DOWNSTREAM
dbt build -s state:modified+ --state prev/  # changed nodes since last manifest + downstream
dbt build -s state:modified+ --defer --state prod/   # build changes, defer the rest to prod`, lang: 'bash' },
      { h: { vi: 'Bảng cú pháp Selector', en: 'Selector syntax legend' }, p: { vi: '', en: '' } },
      { list: [
        [{ vi: '+model', en: '+model' }, { vi: 'model và tất cả node phía trên (parents / upstream).', en: 'the model and all upstream (parents).' }],
        [{ vi: 'model+', en: 'model+' }, { vi: 'model và tất cả node phía dưới (children / downstream).', en: 'the model and all downstream (children).' }],
        [{ vi: '+model+', en: '+model+' }, { vi: 'cả phía trên lẫn phía dưới.', en: 'everything up- and downstream.' }],
        [{ vi: '@model', en: '@model' }, { vi: 'model + downstream + upstream của những downstream đó.', en: 'the model + downstream + upstream of those downstream.' }],
        [{ vi: '2+model', en: '2+model' }, { vi: 'giới hạn 2 bậc upstream (model+3 = 3 bậc downstream).', en: 'limit to 2 levels upstream (model+3 = 3 levels downstream).' }],
        [{ vi: 'tag: / path: / resource_type:', en: 'tag: / path: / resource_type:' }, { vi: 'chọn theo tag, theo thư mục, hoặc theo loại (seed/model/snapshot/test/source).', en: 'select by tag, by folder, or by type (seed/model/snapshot/test/source).' }],
        [{ vi: 'state:modified', en: 'state:modified' }, { vi: 'các node thay đổi so với manifest của --state.', en: 'nodes changed vs the --state manifest.' }],
      ]},
      { note: { vi: 'Slim CI: state:modified+ kết hợp --defer giúp pipeline chỉ build phần thay đổi và "mượn" bảng prod chưa đổi — tiết kiệm thời gian và chi phí Warehouse cực lớn. Xem node Deployment & CI/CD.', en: 'Slim CI: state:modified+ with --defer makes a pipeline build only what changed and “borrow” unchanged prod tables — a huge saving in time and warehouse cost. See the Deployment & CI/CD node.' } },
    ],
  },

  'dbt-inspect': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Nhóm lệnh Inspect & Document: xem dbt sẽ làm gì mà không thực thi — compile, parse, ls, show — cộng tài liệu (docs).',
      en: 'The Inspect & Document command group: see what dbt will do without executing — compile, parse, ls, show — plus documentation (docs).',
    },
    body: [
      { list: [
        [{ vi: 'dbt compile', en: 'dbt compile' }, { vi: 'Render Jinja thành SQL thuần, KHÔNG chạy. Dùng để debug logic.', en: 'Render Jinja to raw SQL, no execution. For debugging logic.' }],
        [{ vi: 'dbt parse', en: 'dbt parse' }, { vi: 'Parse dự án + dựng manifest (kiểm tra CI nhanh).', en: 'Parse the project + build the manifest (a fast CI check).' }],
        [{ vi: 'dbt ls', en: 'dbt ls' }, { vi: 'Liệt kê resource — rất hữu ích để test cú pháp selector trước khi build.', en: 'List resources — great for testing selector syntax before a build.' }],
        [{ vi: 'dbt show -s model', en: 'dbt show -s model' }, { vi: 'Xem trước kết quả truy vấn của model mà không materialize.', en: 'Preview a model’s query results without materializing it.' }],
        [{ vi: 'dbt docs generate / serve', en: 'dbt docs generate / serve' }, { vi: 'Dựng manifest.json / catalog.json rồi mở trang docs (localhost:8080) — xem cả sơ đồ lineage.', en: 'Build manifest.json / catalog.json then serve the docs site (localhost:8080) — including the lineage graph.' }],
      ]},
      { code: `dbt compile             # see the compiled SQL
dbt ls -s tag:staging   # which nodes does this selector match?
dbt show -s dim_customer --limit 5   # preview results
dbt docs generate && dbt docs serve  # build + open the docs site`, lang: 'bash' },
      { note: { vi: 'dbt ls là cách an toàn nhất để kiểm tra một selector phức tạp khớp đúng node nào TRƯỚC KHI chạy build thật trên đó.', en: 'dbt ls is the safest way to confirm which nodes a complex selector matches BEFORE running a real build on them.' } },
    ],
  },

  'dbt-operate': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Nhóm lệnh Operate & Recover: chạy macro độc lập, chạy lại node lỗi, và truyền biến run-time.',
      en: 'The Operate & Recover command group: run macros standalone, re-run failed nodes, and pass run-time variables.',
    },
    body: [
      { code: `# Run a macro standalone (grants, admin SQL, etc.)
dbt run-operation grant_select --args '{role: bi}'

# Re-run only the FAILED nodes from the last invocation
dbt retry

# Pass run-time variables into the run
dbt build --vars '{start_date: 2024-01-01}'`, lang: 'bash' },
      { list: [
        [{ vi: 'dbt run-operation', en: 'dbt run-operation' }, { vi: 'Chạy một macro độc lập (cấp quyền, SQL quản trị) mà không cần build model.', en: 'Run a macro on its own (grants, admin SQL) without building a model.' }],
        [{ vi: 'dbt retry', en: 'dbt retry' }, { vi: 'Chỉ chạy lại các node ĐÃ FAIL ở lần chạy trước — tiết kiệm thời gian khi pipeline lớn.', en: 'Re-run only the nodes that FAILED last time — saves time on a big pipeline.' }],
        [{ vi: 'dbt build --vars', en: 'dbt build --vars' }, { vi: 'Truyền biến run-time (đọc trong code bằng hàm var() với key start_date).', en: 'Pass run-time variables (read in code via the var() function with key start_date).' }],
      ]},
      { note: { vi: 'dbt retry đọc lại run_results.json của lần trước, nên nó biết chính xác node nào hỏng và chỉ chạy lại từ đó xuống — không phải build lại từ đầu.', en: 'dbt retry reads the previous run_results.json, so it knows exactly which nodes failed and reruns only from there downward — no full rebuild.' } },
    ],
  },

  // ─── BUILDING MODELS ──────────────────────────────────────────────────────
  'dbt-models': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Model & Materialization: mỗi file .sql là một model. Cấu hình materialized quyết định dbt tạo VIEW, TABLE, INCREMENTAL hay EPHEMERAL.',
      en: 'Models & materializations: each .sql file is a model. The materialized config decides whether dbt creates a VIEW, TABLE, INCREMENTAL or EPHEMERAL object.',
    },
    body: [
      { h: { vi: '4 kiểu Materialization', en: 'The 4 materializations' },
        p: { vi: 'Cùng một SQL, materialization quyết định nó được lưu thế nào trong Warehouse:', en: 'For the same SQL, the materialization decides how it’s stored in the warehouse:' } },
      { list: [
        [{ vi: 'view', en: 'view' }, { vi: 'Mặc định. Luôn tươi, không tốn lưu trữ, nhưng tính lại mỗi lần query.', en: 'The default. Always fresh, no storage cost, but recomputed on every query.' }],
        [{ vi: 'table', en: 'table' }, { vi: 'Bảng vật lý, query nhanh, nhưng dựng lại toàn bộ mỗi lần dbt run.', en: 'A physical table — fast to query, but fully rebuilt on every dbt run.' }],
        [{ vi: 'incremental', en: 'incremental' }, { vi: 'Chỉ xử lý dòng MỚI/đổi từ lần trước. Cho bảng fact lớn (sự kiện, log). Tiết kiệm chi phí nhất.', en: 'Only processes NEW/changed rows. For large fact tables (events, logs). The biggest cost saver.' }],
        [{ vi: 'ephemeral', en: 'ephemeral' }, { vi: 'Không tạo object — code được "tiêm" vào model khác như một CTE.', en: 'Creates no object — inlined into downstream models as a CTE.' }],
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
      { note: { vi: 'Quy tắc: staging luôn là view (nhẹ), marts thường là table/incremental (nhanh khi BI query). Cấu hình materialized theo thư mục ngay trong dbt_project.yml để không lặp lại config từng file.', en: 'Rule: staging is always a view (light); marts are usually table/incremental (fast for BI). Set materialization per folder in dbt_project.yml so you don’t repeat config in every file.' } },
    ],
  },

  'dbt-layers': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Cấu trúc dự án theo lớp: staging → intermediate → marts. Đây là best practice của dbt và ánh xạ gần như 1-1 với kiến trúc Medallion.',
      en: 'Layered project structure: staging → intermediate → marts. dbt best practice that maps almost 1-to-1 onto the Medallion architecture.',
    },
    body: [
      { list: [
        [{ vi: 'staging (stg_)', en: 'staging (stg_)' }, { vi: 'Làm sạch 1-1 từ source: đổi tên cột, ép kiểu, chuẩn hóa. Một staging model cho mỗi bảng nguồn. Luôn là view.', en: 'A 1-to-1 clean-up of a source: rename columns, cast types, standardise. One staging model per source. Always a view.' }],
        [{ vi: 'intermediate (int_)', en: 'intermediate (int_)' }, { vi: 'Logic nghiệp vụ trung gian: join, tính toán phức tạp, tách bước cho dễ đọc. Thường ephemeral.', en: 'Intermediate business logic: joins, complex calculations, split into readable steps. Often ephemeral.' }],
        [{ vi: 'marts (dim_ / fct_)', en: 'marts (dim_ / fct_)' }, { vi: 'Bảng cuối phục vụ phân tích & BI: dimension và fact theo mô hình sao (Kimball). Thường table/incremental.', en: 'The final analysis- & BI-ready tables: dimensions and facts in a star schema (Kimball). Usually table/incremental.' }],
      ]},
      { note: { vi: 'Vì sao tách lớp: dễ debug (lỗi ở tầng nào?), tái sử dụng (nhiều mart dùng chung một staging), và phân quyền rõ ràng. Mọi model chỉ tham chiếu nhau qua ref().', en: 'Why layer: easier debugging (which layer broke?), reuse (many marts share one staging), and clear ownership. Models reference each other only via ref().' } },
    ],
  },

  'dbt-sources': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Sources & Freshness: khai báo các bảng thô đầu vào trong YAML để dùng source(), và kiểm tra dữ liệu nguồn có "tươi" (cập nhật đúng hạn) hay không.',
      en: 'Sources & freshness: declare raw input tables in YAML to use source(), and check whether source data is “fresh” (updated on time).',
    },
    body: [
      { h: { vi: 'Khai báo Source', en: 'Declaring sources' },
        p: { vi: 'Source là điểm vào của dữ liệu thô. Khai báo một lần trong .yml, sau đó dùng source() khắp nơi — đổi schema chỉ sửa một chỗ.', en: 'A source is the entry point of raw data. Declare it once in .yml, then use source() everywhere — change a schema in just one place.' } },
      { code: `# models/staging/_sources.yml
sources:
  - name: raw
    schema: raw_data
    tables:
      - name: customers
      - name: orders
        freshness:
          warn_after:  {count: 12, period: hour}
          error_after: {count: 24, period: hour}
        loaded_at_field: _loaded_at`, lang: 'yaml' },
      { note: { vi: 'dbt source freshness so giờ hiện tại với loaded_at_field. Nếu dữ liệu nguồn cũ quá ngưỡng → cảnh báo/lỗi. Đây là tuyến phòng thủ đầu tiên: báo cáo sai thường bắt nguồn từ nguồn chưa cập nhật.', en: 'dbt source freshness compares now with loaded_at_field. If the source is older than the threshold → warn/error. This is your first line of defence: bad reports usually start with a stale source.' } },
    ],
  },

  'dbt-test': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Testing — điều khiến dbt vượt trội so với SQL thuần. Generic tests (unique, not_null, relationships, accepted_values) khai trong YAML, và singular tests là file .sql trả về dòng "sai".',
      en: 'Testing — what sets dbt apart from plain SQL. Generic tests (unique, not_null, relationships, accepted_values) declared in YAML, and singular tests as a .sql file returning the “bad” rows.',
    },
    body: [
      { code: `# models/marts/_marts.yml
models:
  - name: dim_customer
    columns:
      - name: customer_id
        tests: [unique, not_null]
      - name: status
        tests:
          - accepted_values: {values: ['active', 'churned', 'lead']}
      - name: region_id
        tests:
          - relationships: {to: ref('dim_region'), field: region_id}`, lang: 'yaml' },
      { list: [
        [{ vi: 'unique', en: 'unique' }, { vi: 'Cột không trùng giá trị (kiểm tra khóa chính).', en: 'No duplicate values (checks a primary key).' }],
        [{ vi: 'not_null', en: 'not_null' }, { vi: 'Cột không được rỗng.', en: 'The column must not be null.' }],
        [{ vi: 'accepted_values', en: 'accepted_values' }, { vi: 'Giá trị phải nằm trong danh sách cho phép.', en: 'Values must be within an allowed list.' }],
        [{ vi: 'relationships', en: 'relationships' }, { vi: 'Mọi foreign key phải tồn tại ở bảng cha (toàn vẹn tham chiếu).', en: 'Every foreign key must exist in the parent table (referential integrity).' }],
      ]},
      { code: `-- tests/assert_positive_revenue.sql  (a singular test)
-- Fails if it returns any rows
SELECT order_id, revenue
FROM {{ ref('fct_orders') }}
WHERE revenue <= 0`, lang: 'sql' },
      { note: { vi: 'Liên hệ SQL → NULLs & Data Quality: dbt tự động hóa chính các kiểm tra NULL/trùng lặp/toàn vẹn bạn từng viết tay — nhưng chạy mỗi lần build và fail sớm.', en: 'Tie-in to SQL → NULLs & Data Quality: dbt automates the very NULL/duplicate/integrity checks you used to write by hand — but runs them every build and fails early.' } },
    ],
  },

  'dbt-docs': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Documentation & Lineage: mô tả model/cột ngay trong YAML, dbt tự dựng một trang web tài liệu kèm sơ đồ DAG (lineage) cho thấy dữ liệu chảy từ nguồn tới mart.',
      en: 'Documentation & lineage: describe models/columns in YAML, and dbt auto-builds a documentation website with a DAG (lineage) graph showing data flow from source to mart.',
    },
    body: [
      { code: `# models/marts/_marts.yml
models:
  - name: dim_customer
    description: "One row per customer, conformed across systems."
    columns:
      - name: customer_id
        description: "Surrogate primary key."
      - name: lifetime_value
        description: "Total gross profit attributed to the customer."`, lang: 'yaml' },
      { list: [
        [{ vi: 'docs generate', en: 'docs generate' }, { vi: 'Quét toàn dự án, dựng manifest.json + catalog.json (mô tả + metadata cột thực tế).', en: 'Scans the whole project, building manifest.json + catalog.json (descriptions + real column metadata).' }],
        [{ vi: 'docs serve', en: 'docs serve' }, { vi: 'Mở trang web tài liệu ở localhost:8080.', en: 'Serves the documentation website at localhost:8080.' }],
        [{ vi: 'Lineage graph', en: 'Lineage graph' }, { vi: 'Sơ đồ DAG tương tác: click một model thấy ngay nguồn của nó và mọi báo cáo phụ thuộc nó.', en: 'An interactive DAG: click a model to see its upstream sources and every downstream report that depends on it.' }],
      ]},
      { note: { vi: 'Lineage là "siêu năng lực" của dbt cho Analyst: trước khi sửa một bảng, bạn thấy ngay nó ảnh hưởng tới những dashboard nào — không còn "sửa đại rồi sếp la".', en: 'Lineage is dbt’s superpower for analysts: before changing a table you instantly see which dashboards it affects — no more “change it and hope nothing breaks”.' } },
    ],
  },

  'dbt-snapshots': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Snapshots — chụp lại lịch sử thay đổi của một bảng theo thời gian (Slowly Changing Dimension Type 2). Trả lời câu hỏi "giá trị của field này là gì vào ngày X?".',
      en: 'Snapshots — capture a table’s change history over time (Slowly Changing Dimension Type 2). They answer “what was this field’s value on date X?”.',
    },
    body: [
      { h: { vi: 'Vì sao cần Snapshot?', en: 'Why snapshots?' },
        p: { vi: 'Bảng nguồn thường bị GHI ĐÈ (status khách đổi từ "lead" sang "active", giá trị cũ mất luôn). Snapshot lưu lại từng phiên bản kèm khoảng thời gian hiệu lực.', en: 'Source tables are usually OVERWRITTEN (a customer’s status changes from “lead” to “active”, the old value is gone). A snapshot stores each version with its valid time range.' } },
      { code: `-- snapshots/customers_snapshot.sql
{% snapshot customers_snapshot %}
{{ config(
    target_schema='snapshots',
    unique_key='customer_id',
    strategy='timestamp',
    updated_at='updated_at'
) }}
SELECT * FROM {{ source('raw', 'customers') }}
{% endsnapshot %}`, lang: 'sql' },
      { note: { vi: 'dbt thêm các cột dbt_valid_from / dbt_valid_to. Mỗi lần `dbt snapshot` chạy, nếu một dòng đổi giá trị, bản cũ được "đóng" lại và bản mới mở ra — đó chính là SCD Type 2 mà mô hình Kimball cần.', en: 'dbt adds dbt_valid_from / dbt_valid_to columns. Each time `dbt snapshot` runs, if a row’s value changed, the old version is “closed” and a new one opens — exactly the SCD Type 2 the Kimball model needs.' } },
    ],
  },

  'dbt-deploy': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Deployment & CI/CD: chạy dbt tự động trên môi trường prod theo lịch, và kiểm tra mọi Pull Request bằng Slim CI (chỉ build phần thay đổi).',
      en: 'Deployment & CI/CD: run dbt automatically in production on a schedule, and check every pull request with Slim CI (build only what changed).',
    },
    body: [
      { list: [
        [{ vi: 'Environments (dev / prod)', en: 'Environments (dev / prod)' }, { vi: 'Mỗi dev có schema riêng (dbt_tri), prod ghi vào schema chung. Nhờ ref() và target, cùng một code chạy đúng ở mọi môi trường.', en: 'Each dev gets their own schema (dbt_tri); prod writes to a shared one. Thanks to ref() and target, the same code runs correctly in every environment.' }],
        [{ vi: 'Scheduled jobs', en: 'Scheduled jobs' }, { vi: 'dbt Cloud (hoặc Airflow/cron) chạy `dbt build` mỗi sáng để làm mới toàn bộ dữ liệu.', en: 'dbt Cloud (or Airflow/cron) runs `dbt build` each morning to refresh all data.' }],
        [{ vi: 'Slim CI', en: 'Slim CI' }, { vi: 'Trên mỗi Pull Request, chỉ build & test các node `state:modified+` so với prod, dùng --defer cho phần còn lại. Nhanh và rẻ.', en: 'On each pull request, build & test only `state:modified+` nodes vs prod, using --defer for the rest. Fast and cheap.' }],
      ]},
      { code: `# Typical Slim CI step on a pull request
dbt build -s state:modified+ --defer --state prod_manifest/`, lang: 'bash' },
      { note: { vi: 'Đây là lúc kỷ luật "analytics as code" trả công: mọi thay đổi đều qua PR, được test tự động trước khi vào prod — giống hệt quy trình của software engineer.', en: 'This is where the “analytics as code” discipline pays off: every change goes through a PR and is auto-tested before reaching prod — just like a software engineer’s workflow.' } },
    ],
  },

  // ─── DATA MODELING FRAMEWORKS (hub + 4 detail nodes) ─────────────────────
  'dbt-modeling': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Data Modeling Frameworks — node tổng quan các khung thiết kế kho dữ liệu mà bạn hiện thực hóa bằng dbt. Liên kết tới 4 framework chi tiết và sang SQL / Power BI / Excel.',
      en: 'Data Modeling Frameworks — an overview hub of the warehouse-design frameworks you implement with dbt. Links to the 4 detailed frameworks and across to SQL / Power BI / Excel.',
    },
    source: {
      vi: 'Nguồn: docs.getdbt.com/blog/kimball-dimensional-model · docs.getdbt.com/blog/data-vault-with-dbt-cloud · tsaiprabhanj.medium.com (Medallion with dbt) · medium.com/analytics-vidhya (Normalization vs Denormalization).',
      en: 'Sources: docs.getdbt.com/blog/kimball-dimensional-model · docs.getdbt.com/blog/data-vault-with-dbt-cloud · tsaiprabhanj.medium.com (Medallion with dbt) · medium.com/analytics-vidhya (Normalization vs Denormalization).',
    },
    body: [
      { h: { vi: 'Vì sao cần một framework?', en: 'Why use a framework?' },
        p: { vi: 'Không có framework, kho dữ liệu nhanh chóng thành "đầm lầy" — bảng chồng bảng, không ai biết bảng nào đáng tin. Framework cho bạn một bộ quy tắc nhất quán để đặt tên, tổ chức và mở rộng.', en: 'Without a framework, a warehouse quickly becomes a swamp — tables on tables, nobody knows which is trustworthy. A framework gives consistent rules for naming, organising and scaling.' } },
      { list: [
        [{ vi: 'Kimball (Dimensional)', en: 'Kimball (Dimensional)' }, { vi: 'Phổ biến nhất cho BI. Fact + Dimension → Star Schema. (Node riêng)', en: 'The most popular for BI. Facts + dimensions → star schema. (Its own node.)' }],
        [{ vi: 'Medallion', en: 'Medallion' }, { vi: 'Bronze → Silver → Gold theo chất lượng dữ liệu. (Node riêng)', en: 'Bronze → Silver → Gold by data quality. (Its own node.)' }],
        [{ vi: 'Data Vault 2.0', en: 'Data Vault 2.0' }, { vi: 'Hubs/Links/Satellites cho quy mô lớn & audit. (Node riêng)', en: 'Hubs/Links/Satellites for scale & auditability. (Its own node.)' }],
        [{ vi: 'Normalize vs Denormalize', en: 'Normalize vs Denormalize' }, { vi: 'Đánh đổi nền tảng đứng sau mọi framework. (Node riêng)', en: 'The fundamental trade-off behind every framework. (Its own node.)' }],
      ]},
      { note: { vi: 'Cách chọn: bắt đầu với Kimball + Medallion (đủ cho 90% công ty). Chỉ dùng Data Vault khi quy mô và yêu cầu audit thực sự lớn. Node này nối tới: SQL (ETL, RDBMS), Power BI (Star Schema), Excel (Power Pivot).', en: 'How to choose: start with Kimball + Medallion (enough for 90% of companies). Use Data Vault only when scale and audit needs are truly large. This node links to: SQL (ETL, RDBMS), Power BI (star schema), Excel (Power Pivot).' } },
    ],
  },

  'dbt-kimball': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Kimball Dimensional Modeling — chuẩn mực cho BI. Chia dữ liệu thành Fact (sự kiện đo được) và Dimension (bối cảnh để cắt/lọc) tạo thành Star Schema. dbt marts (dim_/fct_) chính là nơi hiện thực hóa nó.',
      en: 'Kimball dimensional modeling — the BI standard. Split data into facts (measurable events) and dimensions (context to slice/filter) forming a star schema. dbt marts (dim_/fct_) are where you implement it.',
    },
    source: { vi: 'Nguồn: docs.getdbt.com/blog/kimball-dimensional-model.', en: 'Source: docs.getdbt.com/blog/kimball-dimensional-model.' },
    body: [
      { list: [
        [{ vi: 'Fact table (fct_)', en: 'Fact table (fct_)' }, { vi: 'Sự kiện đo được (đơn hàng, click). Dài (nhiều dòng), hẹp (ít cột), chứa số để cộng + foreign key tới dimension.', en: 'Measurable events (orders, clicks). Long (many rows), narrow (few columns), holding numbers to aggregate + foreign keys to dimensions.' }],
        [{ vi: 'Dimension table (dim_)', en: 'Dimension table (dim_)' }, { vi: 'Bối cảnh mô tả (khách hàng, sản phẩm, ngày). Ngắn, rộng (nhiều cột chữ), dùng để lọc/nhóm.', en: 'Descriptive context (customer, product, date). Short, wide (many text columns), used to filter/group.' }],
        [{ vi: 'Grain (độ hạt)', en: 'Grain' }, { vi: 'Bước quan trọng nhất: định nghĩa "một dòng của fact đại diện cho cái gì" (1 dòng = 1 dòng hóa đơn? 1 đơn hàng?). Chốt grain trước khi viết SQL.', en: 'The most important step: define what “one fact row represents” (one invoice line? one order?). Lock the grain before writing SQL.' }],
        [{ vi: 'SCD Type 2', en: 'SCD Type 2' }, { vi: 'Dimension thay đổi theo thời gian được lưu lịch sử bằng snapshot (xem node Snapshots).', en: 'Dimensions that change over time keep history via snapshots (see the Snapshots node).' }],
      ]},
      { note: { vi: 'Vì sao Star Schema thắng cho BI: ít JOIN, dễ hiểu cho người dùng, và chính là cấu trúc Power BI / Power Pivot tối ưu (xem node Star Schema). Đây là điểm hội tụ của dbt và Power BI.', en: 'Why star schema wins for BI: fewer JOINs, intuitive for users, and exactly the structure Power BI / Power Pivot optimise for (see the Star Schema node). This is where dbt and Power BI converge.' } },
    ],
  },

  'dbt-medallion': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Medallion Architecture — phân lớp dữ liệu theo chất lượng: Bronze (thô) → Silver (sạch, chuẩn hóa) → Gold (tổng hợp phục vụ business). Ánh xạ gần như 1-1 với layer staging → intermediate → marts của dbt.',
      en: 'Medallion architecture — layering data by quality: Bronze (raw) → Silver (clean, conformed) → Gold (business aggregates). Maps almost 1-to-1 onto dbt’s staging → intermediate → marts layers.',
    },
    source: { vi: 'Nguồn: tsaiprabhanj.medium.com — Medallion Architecture with dbt.', en: 'Source: tsaiprabhanj.medium.com — Medallion Architecture with dbt.' },
    body: [
      { list: [
        [{ vi: 'Bronze (thô)', en: 'Bronze (raw)' }, { vi: 'Dữ liệu nguyên trạng vừa nạp vào, chưa xử lý. Tương ứng source + một phần staging trong dbt.', en: 'Untouched data as it landed. Corresponds to sources + part of staging in dbt.' }],
        [{ vi: 'Silver (sạch)', en: 'Silver (clean)' }, { vi: 'Đã làm sạch, ép kiểu, khử trùng, join chuẩn hóa. Tương ứng staging + intermediate.', en: 'Cleaned, typed, deduplicated, conformed via joins. Corresponds to staging + intermediate.' }],
        [{ vi: 'Gold (business)', en: 'Gold (business)' }, { vi: 'Bảng tổng hợp sẵn sàng cho BI và ra quyết định. Tương ứng marts (dim_/fct_).', en: 'Aggregated tables ready for BI and decisions. Corresponds to marts (dim_/fct_).' }],
      ]},
      { note: { vi: 'Medallion phổ biến trong hệ Databricks/Lakehouse nhưng triết lý giống hệt best practice của dbt. Dùng nó để giải thích kiến trúc dbt cho stakeholder không rành kỹ thuật — ai cũng hiểu "thô → sạch → vàng".', en: 'Medallion is popular in the Databricks/Lakehouse world but the philosophy mirrors dbt best practice. Use it to explain a dbt architecture to non-technical stakeholders — everyone understands “raw → clean → gold”.' } },
    ],
  },

  'dbt-vault': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Data Vault 2.0 — phương pháp cho kho dữ liệu rất lớn, cần audit và mở rộng cao. Ba thành phần: Hubs (khóa nghiệp vụ), Links (quan hệ), Satellites (thuộc tính theo thời gian).',
      en: 'Data Vault 2.0 — a method for very large, highly auditable, scalable warehouses. Three components: Hubs (business keys), Links (relationships), Satellites (time-varying attributes).',
    },
    source: { vi: 'Nguồn: docs.getdbt.com/blog/data-vault-with-dbt-cloud.', en: 'Source: docs.getdbt.com/blog/data-vault-with-dbt-cloud.' },
    body: [
      { list: [
        [{ vi: 'Hub', en: 'Hub' }, { vi: 'Lưu các khóa nghiệp vụ duy nhất (customer_id, product_id) tách khỏi mọi thuộc tính.', en: 'Stores unique business keys (customer_id, product_id) separated from all attributes.' }],
        [{ vi: 'Link', en: 'Link' }, { vi: 'Lưu quan hệ giữa các Hub (một giao dịch nối customer với product).', en: 'Stores relationships between hubs (a transaction connecting customer to product).' }],
        [{ vi: 'Satellite', en: 'Satellite' }, { vi: 'Lưu thuộc tính mô tả + lịch sử thay đổi của Hub/Link theo thời gian.', en: 'Stores descriptive attributes + the change history of a hub/link over time.' }],
      ]},
      { note: { vi: 'Đánh đổi: cực linh hoạt khi nguồn dữ liệu thay đổi liên tục và audit là bắt buộc (ngân hàng, bảo hiểm), nhưng PHỨC TẠP và nhiều JOIN hơn Kimball. Với hầu hết công ty vừa và nhỏ, Kimball đơn giản hơn và đủ dùng — đừng chọn Data Vault chỉ vì nghe "ngầu".', en: 'Trade-off: extremely flexible when sources change constantly and auditing is mandatory (banking, insurance), but far more COMPLEX and JOIN-heavy than Kimball. For most small/mid companies Kimball is simpler and sufficient — don’t pick Data Vault just because it sounds impressive.' } },
    ],
  },

  'dbt-normalize': {
    cluster: 'DBT & ANALYTICS ENGINEERING',
    summary: {
      vi: 'Normalize vs Denormalize — đánh đổi nền tảng đứng sau mọi mô hình dữ liệu. Chuẩn hóa tối ưu cho GHI (OLTP), phi chuẩn hóa tối ưu cho ĐỌC (OLAP/BI).',
      en: 'Normalize vs Denormalize — the fundamental trade-off behind every data model. Normalization optimises for WRITES (OLTP); denormalization optimises for READS (OLAP/BI).',
    },
    source: { vi: 'Nguồn: medium.com/analytics-vidhya — Normalization vs Denormalization.', en: 'Source: medium.com/analytics-vidhya — Normalization vs Denormalization.' },
    body: [
      { list: [
        [{ vi: 'Normalized (3NF)', en: 'Normalized (3NF)' }, { vi: 'Tách nhỏ bảng, KHÔNG trùng lặp dữ liệu. Ghi nhanh, toàn vẹn cao — lý tưởng cho OLTP (database của app). Nhưng đọc cần nhiều JOIN.', en: 'Many small tables, NO duplicated data. Fast writes, strong integrity — ideal for OLTP (the app database). But reads need many JOINs.' }],
        [{ vi: 'Denormalized', en: 'Denormalized' }, { vi: 'Gộp dữ liệu vào bảng rộng, chấp nhận trùng lặp để đọc nhanh. Lý tưởng cho OLAP/BI — chính là bảng mart phẳng mà Power BI thích.', en: 'Merge data into wide tables, accepting duplication for fast reads. Ideal for OLAP/BI — exactly the flat mart tables Power BI loves.' }],
      ]},
      { note: { vi: 'Trong thực tế dbt: nguồn (OLTP) thường ở dạng chuẩn hóa; nhiệm vụ của bạn là phi chuẩn hóa dần qua các lớp staging → marts để ra bảng đọc nhanh. Đây là cầu nối tới bài SQL → RDBMS (OLTP vs OLAP).', en: 'In practice with dbt: the source (OLTP) is usually normalized; your job is to progressively denormalize through staging → marts into fast-read tables. This bridges to the SQL → RDBMS lesson (OLTP vs OLAP).' } },
    ],
  },
};
