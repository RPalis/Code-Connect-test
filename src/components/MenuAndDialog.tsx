import type { ReactNode } from 'react';
import { Avatar } from './Avatar';

export function Menu({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-menu ${className ?? ''}`}>{children ?? <><strong>Menu Header</strong><h3>Menu Heading</h3><button>Menu Item</button><hr /><small>Menu Shortcut</small></>}</div>;
}

export type DialogBodyProps = { className?: string; body?: string; dismissible?: boolean; heading?: string; slot?: ReactNode; type?: 'Card' };

export function DialogBody({ className, body = 'Body text', dismissible = true, heading = 'Text Heading', slot, type = 'Card' }: DialogBodyProps) {
  return <section className={`sds-dialog-body sds-dialog-body--${type.toLowerCase()} ${className ?? ''}`}>{slot ?? <><div><h2>{heading}</h2><p>{body}</p></div><div className="sds-dialog-body__actions"><button>Button</button><button>Button</button></div></>}{dismissible && <button className="sds-dialog-body__close" aria-label="Close" type="button">×</button>}</section>;
}

export function Dialog({ className }: { className?: string }) {
  return <div className={`sds-dialog ${className ?? ''}`}><DialogBody /></div>;
}

export function AvatarBlock({ className, description = 'Description', title = 'Title' }: { className?: string; description?: string; title?: string }) {
  return <div className={`sds-avatar-block ${className ?? ''}`}><Avatar /><div><strong>{title}</strong><span>{description}</span></div></div>;
}

export type AvatarGroupProps = { className?: string; avatars?: ReactNode; avatars2?: ReactNode; number?: string; showOverflow?: boolean; spacing?: 'Overlap' | 'Spaced' };

export function AvatarGroup({ className, avatars, avatars2, number = '+1', showOverflow = true, spacing = 'Spaced' }: AvatarGroupProps) {
  const children = <>{Array.from({ length: 3 }, (_, index) => <Avatar key={index} />)}</>;
  return <div className={`sds-avatar-group sds-avatar-group--${spacing.toLowerCase()} ${className ?? ''}`}>{spacing === 'Overlap' ? avatars ?? children : avatars2 ?? children}{showOverflow && <span>{number}</span>}</div>;
}