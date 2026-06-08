import * as React from 'react';

/**
 * IconButton — a square, icon-only button for toolbars and sheet headers.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Control size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Visual style. @default 'ghost' */
  variant?: 'ghost' | 'outline' | 'ink' | 'brand';
  disabled?: boolean;
  /** The icon node (Lucide <svg> recommended). */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
