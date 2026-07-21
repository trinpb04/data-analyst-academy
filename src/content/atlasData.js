export const baseGraph = {
  modules: [
    { id: 'business',   label: 'Business & Analysis', color: '#e53e3e', soft: '#fdeaea' },
    { id: 'excel',      label: 'Excel',               color: '#107c41', soft: '#e4f3eb' },
    { id: 'statistics', label: 'Statistics',          color: '#805ad5', soft: '#efeafb' },
    { id: 'sql',        label: 'SQL',                 color: '#0078d7', soft: '#e3f0fb' },
    { id: 'python',     label: 'Python',              color: '#4b8bbe', soft: '#eaf1f7' },
    { id: 'powerbi',    label: 'DataViz & Power BI',  color: '#f2c811', soft: '#fdf6dc' },
    { id: 'dbt',        label: 'dbt & Analytics Eng', color: '#ff694b', soft: '#ffe7e0' },
  ],
  clusters: [
    { module: 'business',   label: 'BUSINESS ACUMEN',   x: 215, y: 120 },
    { module: 'excel',      label: 'SPREADSHEETS',      x: 540, y: 95  },
    { module: 'statistics', label: 'STATISTICS',        x: 845, y: 140 },
    { module: 'sql',        label: 'SQL & DATABASES',   x: 220, y: 470 },
    { module: 'powerbi',    label: 'DATAVIZ & POWER BI',x: 540, y: 520 },
    { module: 'python',     label: 'PYTHON FOR DATA',   x: 900, y: 500 },
    { module: 'dbt',        label: 'DBT & ANALYTICS ENGINEERING', x: 480, y: 880 },
  ],
  nodes: [
    // Business
    { id: 'bus-intro',   m: 'business', t: 'What is Data Analytics?', x: 150, y: 70,  v: 9 },
    { id: 'bus-problem', m: 'business', t: 'Problem Formulation',     x: 270, y: 130, v: 7 },
    { id: 'bus-kpi',     m: 'business', t: 'Metrics & KPIs',          x: 145, y: 175, v: 7 },
    { id: 'bus-frame',   m: 'business', t: 'Analytical Frameworks',   x: 290, y: 215, v: 6 },
    { id: 'bus-story',   m: 'business', t: 'Stakeholder Comms',       x: 120, y: 230, v: 8 },
    { id: 'bus-cases',   m: 'business', t: 'Case Studies',            x: 280, y: 270, v: 7 },
    { id: 'bus-northstar', m: 'business', t: 'North Star & Metric Trees', x: 360, y: 175, v: 7 },
    { id: 'bus-experiment',m: 'business', t: 'Experimentation',          x: 200, y: 310, v: 7 },
    { id: 'bus-unit',      m: 'business', t: 'Unit Economics',           x: 90,  y: 130, v: 8 },
    { id: 'bus-forecast',  m: 'business', t: 'Forecasting & Variance',   x: 360, y: 110, v: 7 },
    { id: 'bus-genai',     m: 'business', t: 'GenAI & ML Tools',         x: 280, y: 360, v: 8 },
    // Excel
    { id: 'ex-formulas', m: 'excel', t: 'Core Formulas',     x: 470, y: 60,  v: 8 },
    { id: 'ex-pivot',    m: 'excel', t: 'Pivot Tables',      x: 590, y: 75,  v: 8 },
    { id: 'ex-pq',       m: 'excel', t: 'Power Query',       x: 520, y: 150, v: 7 },
    { id: 'ex-pp',       m: 'excel', t: 'Power Pivot & DAX', x: 630, y: 165, v: 6 },
    { id: 'ex-adv',      m: 'excel', t: 'Advanced Tools',    x: 670, y: 60,  v: 6 },
    { id: 'ex-arrays',   m: 'excel', t: 'Dynamic Arrays',    x: 700, y: 130, v: 7 },
    { id: 'ex-dashboard',m: 'excel', t: 'Excel Dashboards',  x: 560, y: 30,  v: 6 },
    // Statistics
    { id: 'stat-desc',   m: 'statistics', t: 'Descriptive Stats', x: 800, y: 90,  v: 8 },
    { id: 'stat-prob',   m: 'statistics', t: 'Probability',       x: 905, y: 120, v: 7 },
    { id: 'stat-infer',  m: 'statistics', t: 'Inferential Stats', x: 825, y: 185, v: 7 },
    { id: 'stat-abtest', m: 'statistics', t: 'A/B Testing',       x: 930, y: 205, v: 6 },
    { id: 'stat-dist',   m: 'statistics', t: 'Distributions',     x: 870, y: 70,  v: 7 },
    { id: 'stat-corr',       m: 'statistics', t: 'Correlation',        x: 800, y: 235, v: 7 },
    { id: 'stat-regression', m: 'statistics', t: 'Linear Regression',  x: 935, y: 270, v: 8 },
    { id: 'stat-sampling',   m: 'statistics', t: 'Sampling & Bias',    x: 765, y: 165, v: 6 },
    { id: 'stat-errors',     m: 'statistics', t: 'Type I/II & Power',  x: 990, y: 175, v: 7 },
    // SQL
    { id: 'sql-intro',   m: 'sql', t: 'RDBMS Basics',  x: 150, y: 430, v: 7 },
    { id: 'sql-query',   m: 'sql', t: 'Basic Queries', x: 265, y: 440, v: 9 },
    { id: 'sql-joins',   m: 'sql', t: 'JOINs',         x: 175, y: 510, v: 9 },
    { id: 'sql-window',  m: 'sql', t: 'Window Functions', x: 300, y: 525, v: 7 },
    { id: 'sql-etl',     m: 'sql', t: 'ETL & Warehousing', x: 205, y: 575, v: 6 },
    { id: 'sql-opt',     m: 'sql', t: 'Query Optimization',x: 320, y: 585, v: 8 },
    { id: 'sql-aggregate', m: 'sql', t: 'Aggregation & GROUP BY', x: 140, y: 470, v: 8 },
    { id: 'sql-pivot',     m: 'sql', t: 'Pivot & Unpivot',        x: 380, y: 475, v: 6 },
    { id: 'sql-date',      m: 'sql', t: 'Date & Cohorts',         x: 385, y: 545, v: 7 },
    { id: 'sql-quality',   m: 'sql', t: 'NULLs & Data Quality',   x: 110, y: 560, v: 7 },
    // Power BI
    { id: 'pbi-prep',    m: 'powerbi', t: 'Data Prep',     x: 475, y: 480, v: 7 },
    { id: 'pbi-model',   m: 'powerbi', t: 'Star Schema',   x: 590, y: 490, v: 8 },
    { id: 'pbi-dax',     m: 'powerbi', t: 'DAX Measures',  x: 520, y: 560, v: 7 },
    { id: 'pbi-viz',     m: 'powerbi', t: 'Dashboards',    x: 615, y: 565, v: 7 },
    { id: 'pbi-dax-adv', m: 'powerbi', t: 'Advanced DAX',  x: 450, y: 600, v: 8 },
    { id: 'pbi-serv',    m: 'powerbi', t: 'PBI Service',   x: 670, y: 610, v: 6 },
    { id: 'pbi-context', m: 'powerbi', t: 'Evaluation Context', x: 545, y: 445, v: 9 },
    { id: 'pbi-calc',    m: 'powerbi', t: 'CALCULATE Engine',   x: 725, y: 545, v: 8 },
    { id: 'pbi-time',    m: 'powerbi', t: 'Time Intelligence',  x: 715, y: 490, v: 7 },
    { id: 'pbi-interact',m: 'powerbi', t: 'Report Interactivity', x: 480, y: 660, v: 6 },
    { id: 'pbi-perf',    m: 'powerbi', t: 'Performance Tuning', x: 620, y: 655, v: 7 },
    // dbt & Analytics Engineering — own region at the bottom band (y 700-1000)
    // Concepts
    { id: 'dbt-intro',    m: 'dbt', t: 'What is dbt?',          x: 300, y: 720, v: 9 },
    { id: 'dbt-project',  m: 'dbt', t: 'Project & ref()',       x: 410, y: 705, v: 8 },
    { id: 'dbt-jinja',    m: 'dbt', t: 'Jinja & Macros',        x: 520, y: 720, v: 7 },
    // Commands (each cheat-sheet folder = one node)
    { id: 'dbt-setup',    m: 'dbt', t: 'Setup & Connection',    x: 190, y: 770, v: 6 },
    { id: 'dbt-build',    m: 'dbt', t: 'Build Commands',        x: 320, y: 790, v: 8 },
    { id: 'dbt-selection',m: 'dbt', t: 'Node Selection',        x: 640, y: 745, v: 8 },
    { id: 'dbt-inspect',  m: 'dbt', t: 'Inspect & Document',    x: 740, y: 785, v: 6 },
    { id: 'dbt-operate',  m: 'dbt', t: 'Operate & Recover',     x: 800, y: 730, v: 6 },
    // Building models
    { id: 'dbt-models',   m: 'dbt', t: 'Models & Materializations', x: 380, y: 855, v: 8 },
    { id: 'dbt-layers',   m: 'dbt', t: 'Project Layers',        x: 490, y: 845, v: 7 },
    { id: 'dbt-sources',  m: 'dbt', t: 'Sources & Freshness',   x: 600, y: 865, v: 7 },
    { id: 'dbt-test',     m: 'dbt', t: 'Tests',                 x: 680, y: 895, v: 8 },
    { id: 'dbt-docs',     m: 'dbt', t: 'Docs & Lineage',        x: 760, y: 870, v: 7 },
    { id: 'dbt-snapshots',m: 'dbt', t: 'Snapshots (SCD2)',      x: 560, y: 920, v: 6 },
    { id: 'dbt-deploy',   m: 'dbt', t: 'Deployment & CI/CD',    x: 700, y: 945, v: 7 },
    // Data Modeling Frameworks (hub + 4 detail nodes)
    { id: 'dbt-modeling', m: 'dbt', t: 'Data Modeling Frameworks', x: 270, y: 855, v: 9 },
    { id: 'dbt-kimball',  m: 'dbt', t: 'Kimball Dimensional',   x: 175, y: 905, v: 8 },
    { id: 'dbt-medallion',m: 'dbt', t: 'Medallion Architecture',x: 320, y: 945, v: 7 },
    { id: 'dbt-vault',    m: 'dbt', t: 'Data Vault 2.0',        x: 165, y: 975, v: 6 },
    { id: 'dbt-normalize',m: 'dbt', t: 'Normalize vs Denormalize', x: 400, y: 960, v: 7 },
    // Python — Module 1: Basics
    { id: 'py-jupyter',  m: 'python', t: 'Jupyter & Setup',      x: 720, y: 340, v: 6 },
    { id: 'py-basics',   m: 'python', t: 'Python Basics',        x: 810, y: 355, v: 8 },
    { id: 'py-ds',       m: 'python', t: 'Data Structures',      x: 730, y: 415, v: 8 },
    // Python — Module 2-3: Programming Fundamentals
    { id: 'py-control',  m: 'python', t: 'Control Flow',         x: 820, y: 415, v: 7 },
    { id: 'py-loops',    m: 'python', t: 'Loops',                x: 910, y: 375, v: 7 },
    { id: 'py-functions',m: 'python', t: 'Functions',            x: 970, y: 415, v: 8 },
    { id: 'py-oop',      m: 'python', t: 'OOP & Classes',        x: 1050, y: 375, v: 7 },
    { id: 'py-except',   m: 'python', t: 'Exception Handling',   x: 1080, y: 440, v: 6 },
    // Python — Module 4: Working with Data
    { id: 'py-fileio',   m: 'python', t: 'File I/O',             x: 740, y: 490, v: 6 },
    { id: 'py-numpy',    m: 'python', t: 'NumPy',                x: 855, y: 490, v: 7 },
    { id: 'py-pandas',   m: 'python', t: 'Pandas',               x: 830, y: 565, v: 9 },
    // Python — Module 4/5: Advanced
    { id: 'py-eda',      m: 'python', t: 'EDA',                  x: 950, y: 540, v: 7 },
    { id: 'py-viz',      m: 'python', t: 'Matplotlib',           x: 870, y: 630, v: 6 },
    { id: 'py-ml',       m: 'python', t: 'Intro to ML',          x: 1000, y: 600, v: 7 },
    { id: 'py-scrape',   m: 'python', t: 'Web Scraping',         x: 750, y: 570, v: 6 },
    { id: 'py-api',      m: 'python', t: 'APIs & REST',          x: 690, y: 520, v: 6 },
    { id: 'py-stats',    m: 'python', t: 'Stat Analysis',        x: 1070, y: 550, v: 7 },
  ],
  links: [
    // Business internal
    ['bus-intro','bus-problem'],['bus-problem','bus-kpi'],['bus-kpi','bus-frame'],['bus-intro','bus-kpi'],['bus-frame','bus-cases'],['bus-problem','bus-story'],
    // Business internal (new)
    ['bus-kpi','bus-northstar'],['bus-northstar','bus-frame'],['bus-frame','bus-experiment'],['bus-cases','bus-experiment'],['bus-kpi','bus-unit'],['bus-intro','bus-unit'],['bus-kpi','bus-forecast'],['bus-forecast','bus-cases'],['bus-experiment','bus-genai'],
    // Excel internal
    ['ex-formulas','ex-pivot'],['ex-pivot','ex-pq'],['ex-pq','ex-pp'],['ex-formulas','ex-pq'],['ex-formulas','ex-adv'],['ex-pivot','ex-adv'],
    // Excel internal (new)
    ['ex-formulas','ex-arrays'],['ex-arrays','ex-adv'],['ex-pivot','ex-dashboard'],['ex-dashboard','ex-pp'],
    // Statistics internal
    ['stat-desc','stat-prob'],['stat-prob','stat-dist'],['stat-dist','stat-infer'],['stat-prob','stat-infer'],['stat-infer','stat-abtest'],
    // Statistics internal (new)
    ['stat-desc','stat-corr'],['stat-corr','stat-regression'],['stat-desc','stat-sampling'],['stat-sampling','stat-infer'],['stat-infer','stat-errors'],['stat-abtest','stat-errors'],['stat-corr','stat-dist'],
    // SQL internal
    ['sql-intro','sql-query'],['sql-query','sql-joins'],['sql-joins','sql-window'],['sql-window','sql-etl'],['sql-joins','sql-opt'],['sql-window','sql-opt'],
    // SQL internal (new)
    ['sql-query','sql-aggregate'],['sql-aggregate','sql-window'],['sql-aggregate','sql-pivot'],['sql-window','sql-date'],['sql-date','sql-etl'],['sql-joins','sql-quality'],['sql-quality','sql-opt'],
    // Power BI internal
    ['pbi-prep','pbi-model'],['pbi-model','pbi-dax'],['pbi-dax','pbi-viz'],['pbi-model','pbi-viz'],['pbi-dax','pbi-dax-adv'],['pbi-viz','pbi-serv'],
    // Power BI internal (new)
    ['pbi-dax','pbi-context'],['pbi-context','pbi-calc'],['pbi-context','pbi-dax-adv'],['pbi-calc','pbi-dax-adv'],['pbi-dax','pbi-time'],['pbi-time','pbi-calc'],['pbi-viz','pbi-interact'],['pbi-model','pbi-perf'],['pbi-perf','pbi-serv'],
    // Python Module 1 — Basics
    ['py-jupyter','py-basics'],
    ['py-basics','py-ds'],
    ['py-basics','py-control'],
    // Python Module 2-3 — Programming Fundamentals
    ['py-ds','py-control'],
    ['py-control','py-loops'],
    ['py-loops','py-functions'],
    ['py-functions','py-oop'],
    ['py-oop','py-except'],
    ['py-functions','py-except'],
    // Python Module 4 — Working with Data
    ['py-basics','py-fileio'],
    ['py-fileio','py-pandas'],
    ['py-numpy','py-pandas'],
    ['py-ds','py-numpy'],
    ['py-functions','py-numpy'],
    // Python Module 4/5 — Advanced
    ['py-pandas','py-eda'],
    ['py-eda','py-viz'],
    ['py-eda','py-ml'],
    ['py-eda','py-stats'],
    ['py-api','py-scrape'],
    ['py-fileio','py-scrape'],
    ['py-scrape','py-pandas'],
    // Cross-module links (existing)
    ['bus-kpi','stat-desc'],['bus-problem','sql-intro'],['ex-formulas','sql-query'],
    ['ex-pq','pbi-prep'],['ex-pp','pbi-model'],['sql-query','py-pandas'],['sql-etl','pbi-prep'],
    ['stat-desc','py-eda'],['stat-infer','py-ml'],['py-eda','pbi-viz'],
    // Cross-module links (new)
    ['sql-query','py-ds'],
    ['py-oop','py-ml'],
    ['py-numpy','py-eda'],
    // Cross-module links (expansion June 2026)
    ['bus-experiment','stat-abtest'],
    ['bus-genai','py-ml'],
    ['bus-forecast','stat-infer'],
    ['bus-unit','bus-kpi'],
    ['sql-date','py-pandas'],
    ['sql-aggregate','ex-pivot'],
    ['pbi-time','sql-date'],
    ['pbi-calc','ex-pp'],
    // Cross-module links (Excel/Stats expansion)
    ['ex-dashboard','pbi-viz'],
    ['ex-arrays','sql-aggregate'],
    ['stat-regression','py-ml'],
    ['stat-corr','py-eda'],
    ['stat-sampling','bus-experiment'],
    // dbt internal — learning sequence
    ['dbt-intro','dbt-project'],['dbt-project','dbt-jinja'],
    ['dbt-project','dbt-setup'],['dbt-setup','dbt-build'],
    ['dbt-project','dbt-models'],['dbt-models','dbt-layers'],['dbt-models','dbt-jinja'],
    ['dbt-layers','dbt-sources'],['dbt-sources','dbt-test'],['dbt-test','dbt-docs'],
    ['dbt-models','dbt-snapshots'],
    ['dbt-build','dbt-selection'],['dbt-selection','dbt-inspect'],['dbt-inspect','dbt-operate'],
    ['dbt-build','dbt-deploy'],['dbt-selection','dbt-deploy'],['dbt-test','dbt-deploy'],
    // dbt — Data Modeling Frameworks sub-cluster
    ['dbt-layers','dbt-modeling'],
    ['dbt-modeling','dbt-kimball'],['dbt-modeling','dbt-medallion'],
    ['dbt-modeling','dbt-vault'],['dbt-modeling','dbt-normalize'],
    ['dbt-kimball','dbt-medallion'],['dbt-kimball','dbt-snapshots'],
    // dbt cross-module (kept few so the cluster stays in its own region)
    ['sql-etl','dbt-intro'],
    ['sql-query','dbt-models'],
    ['sql-quality','dbt-test'],
    ['pbi-model','dbt-kimball'],
    ['ex-pp','dbt-modeling'],
    ['sql-intro','dbt-normalize'],
    ['sql-etl','dbt-medallion'],
  ]
};
