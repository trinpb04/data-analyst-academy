import * as React from 'react';

/**
 * Avatar — circular user token (image or initials).
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Falls back to initials when absent. */
  src?: string | null;
  /** Full name — initials are derived from it. */
  name?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar(props: AvatarProps): JSX.Element;
