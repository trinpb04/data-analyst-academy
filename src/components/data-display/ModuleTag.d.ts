import * as React from 'react';

/**
 * ModuleTag — a chip keyed to one of the six learning modules.
 *
 * @startingPoint section="Core" subtitle="Module-colored category chip" viewport="700x120"
 */
export interface ModuleTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which learning module's color to use. @default 'sql' */
  module?: 'business' | 'excel' | 'statistics' | 'sql' | 'python' | 'powerbi';
  /** `soft` = dot + tinted fill; `solid` = full color fill. @default 'soft' */
  variant?: 'soft' | 'solid';
  /** Override the label (defaults to the module's name). */
  children?: React.ReactNode;
}

export function ModuleTag(props: ModuleTagProps): JSX.Element;
