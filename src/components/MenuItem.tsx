import type { ReactNode } from 'react';
import { Icon } from '../primitives/Icon';

export type MenuItemProps = {
  className?: string;
  description?: string;
  hasDescription?: boolean;
  hasIcon?: boolean;
  hasShortcut?: boolean;
  icon?: ReactNode;
  label?: string;
  shortcut?: string;
  state?: 'Default' | 'Hover' | 'Disabled';
};

export function MenuItem({ className, description = 'Menu description.', hasDescription = true, hasIcon = true, hasShortcut = true, icon, label = 'Menu Label', shortcut = '⇧A', state = 'Default' }: MenuItemProps) {
  const isHover = state === 'Hover';
  const isDisabled = state === 'Disabled';
  return (
    <div className={`sds-menu-item sds-menu-item--${state.toLowerCase()} ${className ?? ''}`}>
      {hasIcon && <span className="sds-menu-item__icon">{icon ?? <Icon name="Star" size={16} />}</span>}
      <div className="sds-menu-item__body">
        <div className="sds-menu-item__row"><span>{label}</span>{hasShortcut && <kbd>{shortcut}</kbd>}</div>
        {hasDescription && <small>{description}</small>}
      </div>
      <span aria-hidden="true" data-state={isHover ? 'hover' : isDisabled ? 'disabled' : 'default'} />
    </div>
  );
}