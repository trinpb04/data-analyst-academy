import * as React from 'react';

/**
 * Card — the base white surface used across the product.
 *
 * @startingPoint section="Core" subtitle="White surface with border + soft shadow" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable hover-lift (shadow + teal border), for clickable cards. */
  interactive?: boolean;
  /** Inner padding in px. @default 24 */
  padding?: number;
  /** Optional top accent stripe color (e.g. a module color). */
  accent?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
