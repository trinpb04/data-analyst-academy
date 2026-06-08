import React from 'react';

const TONES = {
  neutral: { bg: 'var(--surface-sunken)', fg: 'var(--text-body)', bd: 'var(--border)' },
  brand:   { bg: 'var(--brand-soft)', fg: 'var(--teal-700)', bd: 'var(--teal-200)' },
  success: { bg: 'var(--success-soft)', fg: 'var(--success)', bd: 'transparent' },
  warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)', bd: 'transparent' },
  danger:  { bg: 'var(--danger-soft)', fg: 'var(--danger)', bd: 'transparent' },
  info:    { bg: 'var(--info-soft)', fg: 'var(--info)', bd: 'transparent' },
  solid:   { bg: 'var(--ink)', fg: '#fff', bd: 'transparent' },
};

/**
 * Badge — a small status / category pill. Soft tinted fills by default.
 */
export function Badge({ tone = 'neutral', dot = false, style = {}, children, ...props }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 22, padding: '0 9px',
        background: t.bg, color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: 'var(--radius-full)',
        font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'currentColor' }} />}
      {children}
    </span>
  );
}
