import React from 'react';

// build probe
const SIZES = {
  sm: { height: 32, padding: '0 12px', fontSize: 13, gap: 6, icon: 15 },
  md: { height: 38, padding: '0 16px', fontSize: 14, gap: 8, icon: 16 },
  lg: { height: 44, padding: '0 20px', fontSize: 15, gap: 8, icon: 18 },
};

const VARIANTS = {
  ink: {
    background: 'var(--ink)', color: 'var(--text-onbrand)', border: '1px solid transparent',
    hover: 'var(--ink-hover)',
  },
  brand: {
    background: 'var(--brand)', color: 'var(--text-onbrand)', border: '1px solid transparent',
    hover: 'var(--brand-hover)',
  },
  secondary: {
    background: 'var(--surface-sunken)', color: 'var(--text-strong)', border: '1px solid transparent',
    hover: 'var(--surface-hover)',
  },
  outline: {
    background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-strong)',
    hover: 'var(--surface-hover)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent',
    hover: 'var(--surface-hover)',
  },
  danger: {
    background: 'var(--danger)', color: '#fff', border: '1px solid transparent',
    hover: '#cf3535',
  },
};

/**
 * Button — the primary action control.
 * `brand` (teal) is the primary action; `ink` (slate-950) is the dark alternative.
 */
export function Button({
  variant = 'brand',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ink;
  const [hover, setHover] = React.useState(false);

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    font: `var(--fw-semibold) ${s.fontSize}px/1 var(--font-sans)`,
    color: v.color,
    backgroundColor: disabled ? 'var(--surface-sunken)' : (hover ? v.hover : v.background),
    border: v.border,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: variant === 'ghost' ? 'none' : 'var(--shadow-xs)',
    transition: 'box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...style,
  };

  const iconStyle = { width: s.icon, height: s.icon, display: 'inline-flex', flexShrink: 0 };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {icon && <span style={iconStyle}>{icon}</span>}
      {children}
      {iconRight && <span style={iconStyle}>{iconRight}</span>}
    </button>
  );
}
