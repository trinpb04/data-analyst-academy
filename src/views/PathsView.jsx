import React from 'react';
import { Icons } from './icons.jsx';
import { ATLAS } from '../content/index.js';
import * as DS from '../components/index.js';
/* PathsView — the sequential roadmap as a vertical timeline. */
function PathsView({ onNavigateToModule }) {
  const { Button } = DS;
  const I = Icons;
  const steps = [
    { n: '1', moduleId: 'business', title: 'Business Acumen & Foundations', desc: 'Hiểu bài toán kinh doanh, KPI và tư duy phân tích trước khi chạm vào dữ liệu.', color: '#e53e3e', icon: <I.Compass/> },
    { n: '2', moduleId: 'excel', title: 'Master Spreadsheets (Excel)', desc: 'Thành thạo công cụ phổ biến nhất: VLOOKUP, Pivot Table, Power Query.', color: '#107c41', icon: <I.Sheet/> },
    { n: '3', moduleId: 'statistics', title: 'Statistics & Probability', desc: 'Nền tảng toán học để tránh bị dữ liệu đánh lừa (A/B Testing, Distributions).', color: '#805ad5', icon: <I.Trend/> },
    { n: '4', moduleId: 'sql', title: 'SQL & Databases', desc: 'Trích xuất dữ liệu từ Database. Thành thạo JOINs, Window Functions.', color: '#0078d7', icon: <I.Database/> },
    { n: '5', moduleId: 'powerbi', title: 'DataViz & Power BI', desc: 'Kể chuyện với dữ liệu. Xây dựng Data Model (Star Schema) và Dashboards.', color: '#f2c811', icon: <I.Chart/> },
    { n: '6', moduleId: 'python', title: 'Python for Data (Advanced)', desc: 'Tự động hóa, xử lý dữ liệu lớn bằng Pandas và Machine Learning cơ bản.', color: '#4b8bbe', icon: <I.Code/> },
  ];
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)', padding: '48px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ font: 'var(--type-display)', color: 'var(--text-strong)', marginBottom: 12 }}>The Data Analyst Roadmap</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto' }}>
            Học theo lộ trình tuần tự này sẽ giúp bạn xây dựng nền tảng vững chắc nhất. Đừng vội học Python khi chưa rành Excel và Business.
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
                <div style={{ font: 'var(--type-meta)', color: s.color, marginBottom: 4 }}>STEP {s.n}</div>
                <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-strong)', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ font: 'var(--type-body)', fontSize: 15, color: 'var(--text-body)', marginBottom: 14 }}>{s.desc}</p>
                <Button variant="ghost" size="sm" iconRight={<I.Arrow/>} style={{ color: 'var(--text-link)', padding: '0 4px' }} 
                        onClick={() => onNavigateToModule && onNavigateToModule(s.moduleId)}>
                  Xem bài học thuộc học phần này
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
