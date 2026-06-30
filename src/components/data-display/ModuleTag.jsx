import React from 'react';

const MODULES = {
  business:   { c: 'var(--mod-business)',   s: 'var(--mod-business-soft)',   label: 'Business' },
  excel:      { c: 'var(--mod-excel)',      s: 'var(--mod-excel-soft)',      label: 'Excel' },
  statistics: { c: 'var(--mod-statistics)', s: 'var(--mod-statistics-soft)', label: 'Statistics' },
  sql:        { c: 'var(--mod-sql)',        s: 'var(--mod-sql-soft)',        label: 'SQL' },
  python:     { c: 'var(--mod-python)',     s: 'var(--mod-python-soft)',     label: 'Python' },
  powerbi:    { c: 'var(--mod-powerbi)',    s: 'var(--mod-powerbi-soft)',    label: 'Power BI' },
  dbt:        { c: 'var(--mod-dbt)',        s: 'var(--mod-dbt-soft)',        label: 'dbt' },
  apidata:    { c: 'var(--mod-apidata)',    s: 'var(--mod-apidata-soft)',    label: 'APIs' },
};

/**
 * ModuleTag — a chip keyed to one of the six learning modules. The signature
 * categorical color appears as a leading dot (soft) or full fill (solid).
 */
export function ModuleTag({ module = 'sql', variant = 'soft', children, style = {}, ...props }) {
  const m = MODULES[module] || MODULES.sql;
  const solid = variant === 'solid';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        height: 24, padding: '0 10px',
        background: solid ? m.c : `color-mix(in srgb, ${m.c} 15%, transparent)`,
        color: solid ? '#fff' : m.c,
        borderRadius: 'var(--radius-full)',
        font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {!solid && <span style={{ width: 8, height: 8, borderRadius: 9999, background: m.c }} />}
      {children || m.label}
    </span>
  );
}
