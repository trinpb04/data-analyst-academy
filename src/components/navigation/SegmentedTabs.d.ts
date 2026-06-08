import * as React from 'react';

export interface SegmentedTabItem {
  id: string;
  label: React.ReactNode;
  /** Optional leading icon node (16px). */
  icon?: React.ReactNode;
}

/**
 * SegmentedTabs — the product's primary view switcher.
 *
 * @startingPoint section="Core" subtitle="Pill segmented control (Atlas · Paths · Lessons)" viewport="700x100"
 */
export interface SegmentedTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SegmentedTabItem[];
  /** Id of the active item. */
  value: string;
  /** Fired with the next item's id. */
  onChange?: (id: string) => void;
}

export function SegmentedTabs(props: SegmentedTabsProps): JSX.Element;
