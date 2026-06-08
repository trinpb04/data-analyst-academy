import * as React from 'react';

/**
 * Input — single-line text field with optional leading icon, label and hint.
 *
 * @startingPoint section="Core" subtitle="Text field with icon, label & validation" viewport="700x140"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: React.ReactNode;
  /** Leading icon node (16px). */
  icon?: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Error styling. */
  invalid?: boolean;
  /** Helper or error text below the field. */
  hint?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
