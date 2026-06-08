import * as React from 'react';

/**
 * Badge — a small status / category pill with soft tinted fills.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default 'neutral' */
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'solid';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
