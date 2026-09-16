import type { ReactNode } from 'react';
import { NavigationPill } from './NavigationPill';
import { Tab } from './Tab';

export type NavigationButtonProps = { className?: string; direction?: 'Column' | 'Row'; hasIcon?: boolean; hasLabel?: boolean; icon?: ReactNode; label?: string; state?: 'Default' | 'Hover' | 'Active'; type?: 'Small' | 'Medium' };

export function NavigationButton({ className, direction = 'Column', hasIcon = true, hasLabel = true, icon = '☆', label = 'Label', state = 'Default', type = 'Small' }: NavigationButtonProps) {
  return <button className={`sds-navigation-button sds-navigation-button--${direction.toLowerCase()} sds-navigation-button--${type.toLowerCase()} sds-navigation-button--${state.toLowerCase()} ${className ?? ''}`} type="button">{hasIcon && state !== 'Active' && <span>{icon}</span>}{hasLabel && <span>{label}</span>}</button>;
}

export type NavigationPillListProps = { className?: string; direction?: 'Row' | 'Column'; link1?: boolean; link2?: boolean; link3?: boolean; link4?: boolean; link5?: boolean; link6?: boolean; link7?: boolean; slot?: ReactNode; slot2?: ReactNode };

export function NavigationPillList({ className, direction = 'Row', slot, slot2, ...links }: NavigationPillListProps) {
  const visible = Object.values(links).filter(Boolean).length || (direction === 'Row' ? 7 : 6);
  const items = Array.from({ length: visible }, (_, index) => <NavigationPill key={index} label="Link" state={index === 0 ? 'Active' : 'Default'} />);
  return <div className={`sds-navigation-pill-list sds-navigation-pill-list--${direction.toLowerCase()} ${className ?? ''}`}>{direction === 'Row' ? slot ?? items : slot2 ?? items}</div>;
}

export function PaginationNext({ state = 'Default' }: { state?: 'Default' | 'Hover' | 'Disabled' }) {
  return <button className={`sds-pagination__next sds-pagination__next--${state.toLowerCase()}`} disabled={state === 'Disabled'} type="button"><span>Next</span> →</button>;
}

export function Tabs({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-tabs ${className ?? ''}`}>{children ?? Array.from({ length: 6 }, (_, index) => <Tab key={index} active={index === 0} label="Label" />)}</div>;
}