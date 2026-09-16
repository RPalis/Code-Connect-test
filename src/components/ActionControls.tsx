import type { ReactNode } from 'react';

export type IconButtonProps = { className?: string; icon?: ReactNode; size?: 'Medium' | 'Small'; state?: 'Default' | 'Hover' | 'Disabled'; variant?: 'Primary' | 'Neutral' | 'Subtle' };

export function IconButton({ className, icon = '☆', size = 'Medium', state = 'Default', variant = 'Primary' }: IconButtonProps) {
  return <button aria-disabled={state === 'Disabled'} className={`sds-icon-button sds-icon-button--${variant.toLowerCase()} sds-icon-button--${size.toLowerCase()} sds-icon-button--${state.toLowerCase()} ${className ?? ''}`} disabled={state === 'Disabled'} type="button">{icon}</button>;
}

export type ButtonGroupProps = { className?: string; align?: 'Justify' | 'Start' | 'End' | 'Center' | 'Stack'; buttonEnd?: boolean; buttonStart?: boolean };

export function ButtonGroup({ className, align = 'Justify', buttonEnd = true, buttonStart = true }: ButtonGroupProps) {
  return <div className={`sds-button-group sds-button-group--${align.toLowerCase()} ${className ?? ''}`}>{buttonStart && <button type="button">Button</button>}{buttonEnd && <button className="sds-button-group__end" type="button">Button</button>}</div>;
}

export type CheckboxFieldProps = { className?: string; description?: string; hasDescription?: boolean; label?: string; state?: 'Default' | 'Disabled'; valueType?: 'Unchecked' | 'Checked' | 'Indeterminate' };

export function CheckboxField({ className, description = 'Description', hasDescription = true, label = 'Label', state = 'Default', valueType = 'Checked' }: CheckboxFieldProps) {
  return <label className={`sds-checkbox-field sds-checkbox-field--${state.toLowerCase()} ${className ?? ''}`}><span className={`sds-checkbox sds-checkbox--${valueType.toLowerCase()}`}>{valueType === 'Checked' ? '✓' : valueType === 'Indeterminate' ? '−' : ''}</span><span>{label}</span>{hasDescription && <small>{description}</small>}</label>;
}