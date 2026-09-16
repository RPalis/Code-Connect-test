import type { ReactNode } from 'react';
import cardImage from '../assets/card-image.png';

export function ProductInfoCard({ className, children }: { className?: string; children?: ReactNode }) {
  return <article className={`sds-product-card ${className ?? ''}`}><div className="sds-product-card__image"><img alt="" src={cardImage} /></div>{children ?? <div><p>Text</p><strong>$0</strong><small>Body text.</small></div>}</article>;
}

export type PricingCardProps = { className?: string; device?: 'Desktop' | 'Mobile'; variant?: 'Stroke' | 'Brand'; children?: ReactNode };

export function PricingCard({ className, device = 'Desktop', variant = 'Stroke', children }: PricingCardProps) {
  return <article className={`sds-pricing-card sds-pricing-card--${device.toLowerCase()} sds-pricing-card--${variant.toLowerCase()} ${className ?? ''}`}>{children ?? <><strong>Plan</strong><p>$0</p><button type="button">Choose</button></>}</article>;
}

export function StatsCard({ className, icon = '☆' }: { className?: string; icon?: ReactNode }) {
  return <article className={`sds-stat-card ${className ?? ''}`}><span>{icon}</span><strong>0</strong><small>Label</small></article>;
}

export function ReviewCard({ className, children }: { className?: string; children?: ReactNode }) {
  return <article className={`sds-review-card ${className ?? ''}`}>{children ?? <><p>Review body text.</p><strong>Author</strong></>}</article>;
}

export function TestimonialCard({ className, children }: { className?: string; children?: ReactNode }) {
  return <article className={`sds-testimonial-card ${className ?? ''}`}>{children ?? <><p>Testimonial body text.</p><strong>Author</strong></>}</article>;
}

export function CardSlot({ className, children }: { className?: string; children?: ReactNode }) {
  return <div className={`sds-card-slot ${className ?? ''}`}>{children}</div>;
}
