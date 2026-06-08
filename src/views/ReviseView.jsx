import React from 'react';
import { Icons } from './icons.jsx';
import { ATLAS } from './data.js';
import * as DS from '../components/index.js';
/* ReviseView — quick-reference cheat sheets for interviews & daily tasks. */
function ReviseView() {
  const { Card, ModuleTag, Badge } = DS;
  const sheets = [
    { m: 'sql', title: 'SQL Quick Reference', items: ['SELECT · FROM · WHERE · GROUP BY', 'JOINs — INNER, LEFT, RIGHT, FULL', 'Window Functions — ROW_NUMBER, RANK', 'CTEs — WITH name AS (...)'] },
    { m: 'excel', title: 'Excel Power Functions', items: ['XLOOKUP / INDEX + MATCH', 'SUMIFS · COUNTIFS · AVERAGEIFS', 'Pivot Tables & Slicers', 'Power Query — unpivot, merge'] },
    { m: 'statistics', title: 'Stats for Interviews', items: ['Mean vs Median vs Mode', 'Normal distribution & z-score', 'p-value < 0.05 ⇒ reject H₀', 'Correlation ≠ Causation'] },
    { m: 'python', title: 'Pandas Cheat Sheet', items: ['df.groupby().agg()', 'df.merge(other, on=...)', 'df.pivot_table()', 'df.loc / df.iloc selection'] },
    { m: 'powerbi', title: 'DAX Essentials', items: ['CALCULATE — modify filter context', 'SUMX / AVERAGEX iterators', 'Time intelligence — TOTALYTD', 'Star schema > flat tables'] },
    { m: 'business', title: 'Metrics Glossary', items: ['AOV · CAC · LTV · Churn', 'MRR · ARR · NRR (SaaS)', 'CTR · ROAS (Marketing)', 'AARRR — pirate metrics'] },
  ];
  const colorOf = (id) => ATLAS.modules.find(m => m.id === id).color;
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)', padding: '40px 32px' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
        <h2 style={{ font: 'var(--type-h2)', color: 'var(--text-strong)', marginBottom: 6 }}>Revision &amp; Cheat Sheets</h2>
        <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', marginBottom: 28 }}>Quick references for interviews and daily tasks.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {sheets.map((s, i) => (
            <Card key={i} accent={colorOf(s.m)} padding={20}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <h3 style={{ font: 'var(--type-title)', color: 'var(--text-strong)' }}>{s.title}</h3>
                <ModuleTag module={s.m}/>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <span style={{ width: 5, height: 5, borderRadius: 9999, background: colorOf(s.m), marginTop: 7, flexShrink: 0 }}/>
                    <span style={{ font: 'var(--type-code)', color: 'var(--text-body)' }}>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ReviseView;
