export type CalendarButtonState = 'Default' | 'Hover' | 'Active' | 'Disabled' | 'Range' | 'Range Disabled' | 'Hidden';

export type CalendarButtonProps = { className?: string; number?: string; state?: CalendarButtonState };

export function CalendarButton({ className, number = '1', state = 'Default' }: CalendarButtonProps) {
  return <button className={`sds-calendar-button sds-calendar-button--${state.toLowerCase().replace(' ', '-')} ${className ?? ''}`} disabled={state === 'Disabled' || state === 'Range Disabled'} type="button">{state === 'Hidden' ? '' : number}</button>;
}

export type CalendarMonthFieldProps = { className?: string; hasLabel?: boolean; label?: string; open?: boolean; value?: string };

export function CalendarMonthField({ className, hasLabel = false, label = 'Label', open = false, value = 'September' }: CalendarMonthFieldProps) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return <label className={`sds-calendar-field ${className ?? ''}`}>{hasLabel && <span>{label}</span>}<select defaultValue={value} aria-expanded={open}>{months.map((month) => <option key={month}>{month}</option>)}</select></label>;
}

export function CalendarYearField({ className, value = '2025' }: { className?: string; value?: string }) {
  return <label className={`sds-calendar-field ${className ?? ''}`}><select defaultValue={value}><option>{value}</option></select></label>;
}