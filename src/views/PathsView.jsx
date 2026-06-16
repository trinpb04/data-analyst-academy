import React from 'react';
import { Icons } from './icons.jsx';
import { ATLAS } from '../content/index.js';
import * as DS from '../components/index.js';
import { useLang, pick, UI } from '../i18n.jsx';
/* PathsView — the sequential roadmap as a vertical timeline. */
function PathsView({ onNavigateToModule }) {
  const { Button } = DS;
  const I = Icons;
  const lang = useLang();
  const T = (f) => pick(f, lang);
  const steps = [
    { n: '1', moduleId: 'business', title: 'Business Acumen & Foundations', desc: { vi: 'Hiểu bài toán kinh doanh, KPI và tư duy phân tích trước khi chạm vào dữ liệu.', en: 'Understand the business problem, KPIs and analytical thinking before touching any data.' }, color: '#e53e3e', icon: <I.Compass/> },
    { n: '2', moduleId: 'excel', title: 'Master Spreadsheets (Excel)', desc: { vi: 'Thành thạo công cụ phổ biến nhất: VLOOKUP, Pivot Table, Power Query.', en: 'Master the most ubiquitous tool: VLOOKUP, Pivot Tables, Power Query.' }, color: '#107c41', icon: <I.Sheet/> },
    { n: '3', moduleId: 'statistics', title: 'Statistics & Probability', desc: { vi: 'Nền tảng toán học để tránh bị dữ liệu đánh lừa (A/B Testing, Distributions).', en: 'The mathematical foundation that keeps data from fooling you (A/B testing, distributions).' }, color: '#805ad5', icon: <I.Trend/> },
    { n: '4', moduleId: 'sql', title: 'SQL & Databases', desc: { vi: 'Trích xuất dữ liệu từ Database. Thành thạo JOINs, Window Functions.', en: 'Extract data from databases. Master JOINs and window functions.' }, color: '#0078d7', icon: <I.Database/> },
    { n: '5', moduleId: 'powerbi', title: 'DataViz & Power BI', desc: { vi: 'Kể chuyện với dữ liệu. Xây dựng Data Model (Star Schema) và Dashboards.', en: 'Tell stories with data. Build a data model (star schema) and dashboards.' }, color: '#f2c811', icon: <I.Chart/> },
    { n: '6', moduleId: 'python', title: 'Python for Data (Advanced)', desc: { vi: 'Tự động hóa, xử lý dữ liệu lớn bằng Pandas và Machine Learning cơ bản.', en: 'Automate and process large data with Pandas and introductory Machine Learning.' }, color: '#4b8bbe', icon: <I.Code/> },
  ];
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)', padding: '48px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ font: 'var(--type-display)', color: 'var(--text-strong)', marginBottom: 12 }}>{T(UI.roadmapTitle)}</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto' }}>
            {T(UI.roadmapDesc)}
          </p>
        </div>
        <div style={{ position: 'relative', borderLeft: '2px solid var(--border)', marginLeft: 24,
          display: 'flex', flexDirection: 'column', gap: 36 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: 48 }}>
              <div style={{ position: 'absolute', left: -22, top: 2, width: 42, height: 42, borderRadius: 9999,
                background: 'var(--surface-card)', border: `4px solid ${s.color}`, color: s.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ width: 20, height: 20, display: 'inline-flex' }}>{s.icon}</span>
              </div>
              <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: 22 }}>
                <div style={{ font: 'var(--type-meta)', color: s.color, marginBottom: 4 }}>{T(UI.step)} {s.n}</div>
                <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-strong)', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ font: 'var(--type-body)', fontSize: 15, color: 'var(--text-body)', marginBottom: 14 }}>{T(s.desc)}</p>
                <Button variant="ghost" size="sm" iconRight={<I.Arrow/>} style={{ color: 'var(--text-link)', padding: '0 4px' }}
                        onClick={() => onNavigateToModule && onNavigateToModule(s.moduleId)}>
                  {T(UI.viewModule)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PathsView;
