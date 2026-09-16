import type { ReactNode } from 'react';

export type TooltipProps = {
  className?: string;
  body?: string;
  children?: ReactNode;
  hasBody?: boolean;
  placement?: 'Top' | 'Left' | 'Right' | 'Bottom';
  title?: string;
};

export function Tooltip({ className, body = 'Body text', children, hasBody = true, placement = 'Top', title = 'Title' }: TooltipProps) {
  return (
    <div className={`sds-tooltip sds-tooltip--${placement.toLowerCase()} ${className ?? ''}`}>
      {children ?? <><strong>{title}</strong>{hasBody && <span>{body}</span>}</>}
    </div>
  );
}