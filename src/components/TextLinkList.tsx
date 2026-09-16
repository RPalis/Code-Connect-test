import type { ReactNode } from 'react';

export type TextLinkListItemProps = {
  className?: string;
  text?: string;
};

export function TextLinkListItem({ className, text = 'List item' }: TextLinkListItemProps) {
  return <a className={`sds-text-link-list__item ${className ?? ''}`} href="#">{text}</a>;
}

export type TextLinkListProps = {
  className?: string;
  children?: ReactNode;
  density?: 'Default' | 'Tight';
  hasTitle?: boolean;
};

export function TextLinkList({ className, children, density = 'Default', hasTitle = true }: TextLinkListProps) {
  return (
    <div className={`sds-text-link-list sds-text-link-list--${density.toLowerCase()} ${className ?? ''}`}>
      {hasTitle && <strong>Text Strong</strong>}
      <div className="sds-text-link-list__slot">
        {children ?? Array.from({ length: 7 }, (_, index) => <TextLinkListItem key={index} />)}
      </div>
    </div>
  );
}