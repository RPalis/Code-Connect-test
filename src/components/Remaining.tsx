import type { ReactNode } from 'react';
import { AccordionItem } from './AccordionItem';
import { Button } from '../primitives/Button';
import { CalendarMonthField, CalendarYearField } from './CalendarControls';

export type TagScheme = 'Brand' | 'Neutral' | 'Positive' | 'Danger' | 'Warning';
export type TagProps = { className?: string; label?: string; removable?: boolean; scheme?: TagScheme; state?: 'Default' | 'Hover'; variant?: 'Primary' | 'Secondary' };

export function Tag({ className, label = 'Tag', removable = true, scheme = 'Brand', state = 'Default', variant = 'Primary' }: TagProps) {
  return <span className={`sds-tag sds-tag--${scheme.toLowerCase()} sds-tag--${variant.toLowerCase()} sds-tag--${state.toLowerCase()} ${className ?? ''}`}>{label}{removable && <button aria-label="Remove" type="button">×</button>}</span>;
}

export function ButtonDanger({ className, label = 'Delete' }: { className?: string; label?: string }) {
  return <Button className={`sds-button-danger ${className ?? ''}`} label={label} />;
}

export function CalendarSelectGroup({ className }: { className?: string }) {
  return <div className={`sds-calendar-select-group ${className ?? ''}`}><CalendarMonthField className="sds-calendar-select-group__field" hasLabel={false} value="Sep" /><CalendarYearField className="sds-calendar-select-group__field" /></div>;
}

export function MenuHeader({ className }: { className?: string }) {
  return <div className={`sds-menu-header ${className ?? ''}`}><small>Heading</small><strong>Heading</strong></div>;
}

export function MenuHeading({ className }: { className?: string }) {
  return <h4 className={`sds-menu-heading ${className ?? ''}`}>Menu Heading</h4>;
}

export function MenuSeparator({ className }: { className?: string }) {
  return <hr className={`sds-menu-separator ${className ?? ''}`} />;
}

export function MenuShortcut({ className, shortcut = '⇧A' }: { className?: string; shortcut?: string }) {
  return <kbd className={`sds-menu-shortcut ${className ?? ''}`}>{shortcut}</kbd>;
}

export function Accordion({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-accordion ${className ?? ''}`}>{children ?? <><AccordionItem /><AccordionItem state /></>}</div>;
}

export function Calendar({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-calendar ${className ?? ''}`}>{children ?? <><CalendarSelectGroup /><div className="sds-calendar__grid">{Array.from({ length: 35 }, (_, index) => <button key={index} type="button">{index + 1}</button>)}</div></>}</div>;
}

export function TextList({ className, children }: { className?: string; children?: ReactNode }) {
  return <ul className={`sds-text-list ${className ?? ''}`}>{children ?? Array.from({ length: 5 }, (_, index) => <TextListItem key={index} />)}</ul>;
}

export function TextListItem({ className, text = 'List item' }: { className?: string; text?: string }) {
  return <li className={`sds-text-list-item ${className ?? ''}`}>{text}</li>;
}

export function TextPrice({ className, price = '$0', size = 'Large', currency = '$', hasLabel = true, label = 'Price' }: { className?: string; price?: string; size?: 'Large' | 'Small'; currency?: string; hasLabel?: boolean; label?: string }) {
  return <span className={`sds-text-price sds-text-price--${size.toLowerCase()} ${className ?? ''}`}>{hasLabel && <small>{label}</small>}<strong>{currency}{price}</strong></span>;
}
