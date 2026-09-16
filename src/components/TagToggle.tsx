import type { ReactNode } from 'react';

export type TagToggleProps = { className?: string; icon?: ReactNode; label?: string; showIcon?: boolean; state?: boolean };

export function TagToggle({ className, icon, label = 'Label', showIcon = true, state = true }: TagToggleProps) {
  return <button className={`sds-tag-toggle sds-tag-toggle--${state ? 'on' : 'off'} ${className ?? ''}`} type="button">{state && showIcon && (icon ?? <span aria-hidden="true">✓</span>)}<span>{label}</span></button>;
}

export function TagToggleGroup({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-tag-toggle-group ${className ?? ''}`}>{children ?? <><TagToggle state /><TagToggle state={false} /><TagToggle state={false} /><TagToggle state={false} /><TagToggle state={false} /></>}</div>;
}