import type { ReactNode } from 'react';

export type PaginationPageProps = { number?: string; state?: 'Default' | 'Hover' | 'Current' | 'Current Hover' };

export function PaginationPage({ number = '1', state = 'Default' }: PaginationPageProps) {
  return <button className={`sds-pagination__page sds-pagination__page--${state.toLowerCase().replace(' ', '-')}`} type="button">{number}</button>;
}

export function PaginationGap() {
  return <span className="sds-pagination__gap" aria-hidden="true">...</span>;
}

export type PaginationDirectionProps = { className?: string; state?: 'Default' | 'Hover' | 'Disabled' };

export function PaginationPrevious({ className, state = 'Default' }: PaginationDirectionProps) {
  const disabled = state === 'Disabled';
  return <button className={`sds-pagination__previous sds-pagination__previous--${state.toLowerCase()} ${className ?? ''}`} disabled={disabled} type="button">← <span>Previous</span></button>;
}

export function PaginationNext({ className, state = 'Default' }: PaginationDirectionProps) {
  const disabled = state === 'Disabled';
  return <button className={`sds-pagination__next sds-pagination__next--${state.toLowerCase()} ${className ?? ''}`} disabled={disabled} type="button"><span>Next</span> →</button>;
}

export function PaginationList({ children }: { children?: ReactNode }) {
  return <div className="sds-pagination__list">{children ?? <><PaginationPage state="Current" /><PaginationPage number="2" /><PaginationPage number="3" /><PaginationGap /><PaginationPage number="67" /><PaginationPage number="68" /></>}</div>;
}

export function Pagination() {
  return <nav aria-label="Pagination" className="sds-pagination"><PaginationPrevious /><PaginationList /><PaginationNext /></nav>;
}