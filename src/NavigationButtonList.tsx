import { useState } from 'react';
import starActive from './assets/star-active.svg';
import starDefault from './assets/star-default.svg';

export type NavigationButtonDirection = 'Row' | 'Column';

export type NavigationButtonProps = {
  direction: NavigationButtonDirection;
  active?: boolean;
  label?: string;
  onClick?: () => void;
};

export type NavigationButtonListProps = {
  className?: string;
  children?: React.ReactNode;
  direction?: NavigationButtonDirection;
  link1?: boolean;
  link2?: boolean;
  link3?: boolean;
  link4?: boolean;
  link5?: boolean;
};

const labels = ['Label', 'Label', 'Label', 'Label', 'Label'];

export function NavigationButton({ direction, active = false, label = 'Label', onClick }: NavigationButtonProps) {
  return (
    <button
      aria-current={active ? 'page' : undefined}
      className={`navigation-button navigation-button--${direction.toLowerCase()}${active ? ' navigation-button--active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <img alt="" className="navigation-button__icon" src={active ? starActive : starDefault} />
      <span>{label}</span>
    </button>
  );
}

export function NavigationButtonList({
  className,
  children = null,
  direction = 'Row',
  link1 = true,
  link2 = true,
  link3 = true,
  link4 = true,
  link5 = true,
}: NavigationButtonListProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const links = [link1, link2, link3, link4, link5];

  return (
    <nav aria-label="Primary navigation" className={`${className ?? ''} navigation-button-list navigation-button-list--${direction.toLowerCase()}`}>
      {children ?? (
        <div className={`navigation-button-list__slot navigation-button-list__slot--${direction.toLowerCase()}`}>
          {links.map((visible, index) =>
            visible ? (
              <NavigationButton
                active={activeIndex === index}
                direction={direction}
                key={`link-${index + 1}`}
                label={labels[index]}
                onClick={() => setActiveIndex(index)}
              />
            ) : null,
          )}
        </div>
      )}
    </nav>
  );
}