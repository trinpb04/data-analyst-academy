import React from 'react';

const SIZES = { sm: 32, md: 38, lg: 44 };
const ICON = { sm: 16, md: 18, lg: 20 };

/**
 * IconButton — a square, icon-only button for toolbars and sheet headers
 * (close, refresh, zoom). Always pass an `aria-label`.
 */
export function IconButton({
  size = 'md',
  variant = 'ghost',
  disabled = false,
  style = {},
  children,
  ...props
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: { bg: 'transparent', hover: 'var(--surface-hover)', color: 'var(--text-muted)', border: 'transparent' },
    outline: { bg: 'var(--surface-card)', hover: 'var(--surface-hover)', color: 'var(--text-body)', border: 'var(--border-strong)' },
    ink: { bg: 'var(--ink)', hover: 'var(--ink-hover)', color: '#fff', border: 'transparent' },
    brand: { bg: 'var(--brand)', hover: 'var(--brand-hover)', color: '#fff', border: 'transparent' },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: hover ? v.hover : v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'box-shadow var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...props}
    >
      <span style={{ width: ICON[size], height: ICON[size], display: 'inline-flex' }}>{children}</span>
    </button>
  );
}
