import React from 'react';

/**
 * SegmentedTabs — the product's primary view switcher (Atlas · Paths ·
 * Lessons · Revise). A pill track with a white, shadowed active segment.
 */
export function SegmentedTabs({ items = [], value, onChange = () => {}, style = {}, ...props }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: 4, backgroundColor: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-lg)',
        ...style,
      }}
      {...props}
    >
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 32, padding: '0 16px',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              backgroundColor: active ? 'var(--surface-raised)' : 'transparent',
              boxShadow: active ? 'var(--shadow-sm)' : 'none',
              color: active ? 'var(--text-strong)' : 'var(--text-muted)',
              font: 'var(--fw-medium) 14px/1 var(--font-sans)',
              cursor: 'pointer',
              transition: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {it.icon && <span style={{ width: 16, height: 16, display: 'inline-flex' }}>{it.icon}</span>}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
