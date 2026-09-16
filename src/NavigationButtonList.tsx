import { useState } from 'react';

export type NavigationButtonListDirection = 'row' | 'column';

export type NavigationButtonListProps = {
  direction?: NavigationButtonListDirection;
  links?: boolean[];
};

const labels = ['Overview', 'Activity', 'Files', 'Members', 'Settings'];

function StarIcon() {
  return (
    <svg aria-hidden="true" className="navigation-button__icon" viewBox="0 0 24 24">
      <path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z" />
    </svg>
  );
}

export function NavigationButtonList({
  direction = 'row',
  links = [true, true, true, true, true],
}: NavigationButtonListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav aria-label="Primary navigation" className={`navigation-button-list navigation-button-list--${direction}`}>
      {labels.map((label, index) =>
        links[index] ? (
          <button
            aria-current={activeIndex === index ? 'page' : undefined}
            className={`navigation-button${activeIndex === index ? ' navigation-button--active' : ''}`}
            key={label}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <StarIcon />
            <span>{label}</span>
          </button>
        ) : null,
      )}
    </nav>
  );
}