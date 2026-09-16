import type { ReactNode } from 'react';
import cardImage from '../assets/card-image.png';
import cardInfo from '../assets/card-info.svg';

export type CardProps = {
  className?: string;
  asset?: boolean;
  assetType?: 'Icon' | 'Image';
  body?: string;
  children?: ReactNode;
  direction?: 'Horizontal' | 'Vertical';
  heading?: string;
  icon?: ReactNode;
  variant?: 'Stroke' | 'Default';
};

export function Card({ className, asset = true, assetType = 'Icon', body = 'Body text for whatever you would like to say.', children, direction = 'Horizontal', heading = 'Title', icon, variant = 'Stroke' }: CardProps) {
  return <article className={`sds-card sds-card--${direction.toLowerCase()} sds-card--${variant.toLowerCase()} ${className ?? ''}`}>
    {assetType === 'Icon' && asset && <div className="sds-card__icon">{icon ?? <img alt="" src={cardInfo} />}</div>}
    {assetType === 'Image' && <img alt="" className="sds-card__image" src={cardImage} />}
    {children ?? <div className="sds-card__body"><div><h2>{heading}</h2><p>{body}</p></div><button type="button">Button</button></div>}
  </article>;
}