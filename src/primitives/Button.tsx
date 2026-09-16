import type { ReactNode } from 'react';

export type ButtonSize = 'Medium' | 'Small';
export type ButtonState = 'Default' | 'Hover' | 'Disabled';
export type ButtonVariant = 'Primary' | 'Neutral' | 'Subtle';

export type ButtonProps = {
  className?: string;
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  iconEnd?: ReactNode | null;
  iconStart?: ReactNode | null;
  label?: string;
  size?: ButtonSize;
  state?: ButtonState;
  variant?: ButtonVariant;
};

function FallbackIcon({ kind }: { kind: 'start' | 'end' }) {
  return <span aria-hidden="true" className={`sds-button__fallback-icon sds-button__fallback-icon--${kind}`} />;
}

export function Button({
  className,
  hasIconEnd = false,
  hasIconStart = false,
  iconEnd = null,
  iconStart = null,
  label = 'Button',
  size = 'Medium',
  state = 'Default',
  variant = 'Primary',
}: ButtonProps) {
  const isDisabled = state === 'Disabled';

  return (
    <button
      aria-disabled={isDisabled}
      className={`sds-button sds-button--${variant.toLowerCase()} sds-button--${size.toLowerCase()} sds-button--${state.toLowerCase()} ${className ?? ''}`}
      disabled={isDisabled}
      type="button"
    >
      {hasIconStart && (iconStart ?? <FallbackIcon kind="start" />)}
      <span>{label}</span>
      {hasIconEnd && (iconEnd ?? <FallbackIcon kind="end" />)}
    </button>
  );
}