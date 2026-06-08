import React from 'react';

/**
 * Card — the base white surface: border, soft shadow, lg radius.
 * Set `interactive` for the hover-lift used by lesson cards.
 */
export function Card({ interactive = false, padding = 24, accent = null, style = {}, children, ...props }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderTop: accent ? `3px solid ${accent}` : '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding,
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...(hover ? { borderColor: 'var(--teal-300)' } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
