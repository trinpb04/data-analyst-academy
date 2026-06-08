import React from 'react';

const SIZES = {
  sm: { h: 32, fs: 13, px: 10 },
  md: { h: 38, fs: 14, px: 12 },
  lg: { h: 44, fs: 15, px: 14 },
};

/**
 * Input — single-line text field with optional leading icon and label.
 */
export function Input({
  label = null,
  icon = null,
  size = 'md',
  invalid = false,
  hint = null,
  id,
  style = {},
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ font: 'var(--fw-medium) 13px/1 var(--font-sans)', color: 'var(--text-strong)' }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          height: s.h, padding: `0 ${s.px}px`,
          background: 'var(--surface-card)',
          border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focus ? `0 0 0 3px ${invalid ? 'var(--danger-soft)' : 'var(--ring)'}` : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        }}
      >
        {icon && <span style={{ width: 16, height: 16, color: 'var(--text-muted)', display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
        <input
          id={fieldId}
          onFocus={(e) => { setFocus(true); props.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); props.onBlur?.(e); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            font: `var(--fw-regular) ${s.fs}px/1 var(--font-sans)`, color: 'var(--text-strong)',
          }}
          {...props}
        />
      </div>
      {hint && (
        <span style={{ font: 'var(--fw-regular) 12px/1.4 var(--font-sans)', color: invalid ? 'var(--danger)' : 'var(--text-muted)' }}>
          {hint}
        </span>
      )}
    </div>
  );
}
