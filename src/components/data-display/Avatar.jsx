import React from 'react';

const SIZES = { sm: 28, md: 36, lg: 44 };

/**
 * Avatar — circular user token. Renders an image, or initials on a tinted disc.
 */
export function Avatar({ src = null, name = '', size = 'md', style = {}, ...props }) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div
      style={{
        width: dim, height: dim, flexShrink: 0,
        borderRadius: 'var(--radius-full)',
        background: src ? 'var(--surface-sunken)' : 'var(--brand-soft)',
        color: 'var(--text-link)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        font: `var(--fw-semibold) ${dim * 0.4}px/1 var(--font-sans)`,
        overflow: 'hidden',
        boxShadow: 'inset 0 0 0 1px rgba(2,8,23,0.06)',
        ...style,
      }}
      {...props}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </div>
  );
}
