export type TabState = 'Default' | 'Hover';

export type TabProps = {
  className?: string;
  active?: boolean;
  label?: string;
  state?: TabState;
};

export function Tab({ className, active = false, label = 'Label', state = 'Default' }: TabProps) {
  return (
    <button
      className={`sds-tab sds-tab--${state.toLowerCase()}${active ? ' sds-tab--active' : ''} ${className ?? ''}`}
      type="button"
    >
      {label}
    </button>
  );
}