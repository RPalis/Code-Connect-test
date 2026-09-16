import type { ReactNode } from 'react';

export type PaginationPageProps = { number?: string; state?: 'Default' | 'Current' };

export function PaginationPage({ number = '1', state = 'Default' }: PaginationPageProps) {
  return <button className={`sds-pagination__page sds-pagination__page--${state.toLowerCase()}`} type="button">{number}</button>;
}

export function PaginationGap() {
  return <span className="sds-pagination__gap" aria-hidden="true">...</span>;
}

export function PaginationPrevious() {
  return <button className="sds-pagination__previous" disabled type="button">← <span>Previous</span></button>;
}

export function PaginationNext() {
  return <button className="sds-pagination__next" type="button"><span>Next</span> →</button>;
}

export function PaginationList({ children }: { children?: ReactNode }) {
  return <div className="sds-pagination__list">{children ?? <><PaginationPage state="Current" /><PaginationPage number="2" /><PaginationPage number="3" /><PaginationGap /><PaginationPage number="67" /><PaginationPage number="68" /></>}</div>;
}

export function Pagination() {
  return <nav aria-label="Pagination" className="sds-pagination"><PaginationPrevious /><PaginationList /><PaginationNext /></nav>;
}