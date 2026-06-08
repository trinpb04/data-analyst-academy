import * as React from 'react';

/**
 * Button — the primary action control for Data Analyst Academy.
 *
 * @startingPoint section="Core" subtitle="Action button — ink, brand, secondary, ghost" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `brand` (teal) is the primary action; `ink` is the dark alternative. */
  variant?: 'ink' | 'brand' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Control height. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Leading icon node (e.g. a Lucide <svg> at 16px). */
  icon?: React.ReactNode;
  /** Trailing icon node (e.g. an arrow). */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
