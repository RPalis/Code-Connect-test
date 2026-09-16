export type NavigationPillState = 'Default' | 'Active' | 'Hover';

export type NavigationPillProps = {
  className?: string;
  label?: string;
  state?: NavigationPillState;
};

export function NavigationPill({ className, label = 'Link', state = 'Default' }: NavigationPillProps) {
  return (
    <button className={`sds-navigation-pill sds-navigation-pill--${state.toLowerCase()} ${className ?? ''}`} type="button">
      {label}
    </button>
  );
}