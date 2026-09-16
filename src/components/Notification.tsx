import type { ReactNode } from 'react';

export type NotificationProps = {
  className?: string;
  body?: string;
  children?: ReactNode;
  dismissible?: boolean;
  title?: string;
  variant?: 'Message' | 'Alert';
};

export function Notification({ className, body = 'Body text.', children, dismissible = true, title = 'Title', variant = 'Message' }: NotificationProps) {
  const isAlert = variant === 'Alert';
  return (
    <aside className={`sds-notification sds-notification--${variant.toLowerCase()} ${className ?? ''}`}>
      {children ?? <>
        <span className="sds-notification__icon" aria-hidden="true">i</span>
        <div className="sds-notification__stack">
          <div><strong>{title}</strong><p>{body}</p></div>
          <button className="sds-notification__button" type="button">Button</button>
        </div>
        {dismissible && <button aria-label="Dismiss" className="sds-notification__dismiss" type="button">×</button>}
      </>}
      <span aria-hidden="true" data-variant={isAlert ? 'alert' : 'message'} />
    </aside>
  );
}