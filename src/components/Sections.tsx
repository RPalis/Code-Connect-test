import type { ReactNode } from 'react';
import { Button } from '../primitives/Button';
import { InputField } from '../primitives/InputField';
import { TextContentHeading } from './TextContentHeading';
import { Card } from './Card';
import { AccordionItem } from './AccordionItem';
import { FormNewsletter } from './Forms';
import { ProductInfoCard } from './CardsExtended';
import { AIConversation, AIChatSidebar } from './AIChatPrimitives';
import { AIChatBox } from './AIChatBox';

export type Platform = 'Desktop' | 'Mobile';

function platformClass(className: string | undefined, platform: Platform) {
  return `${className ?? ''} ${platform === 'Mobile' ? 'sds-platform--mobile' : 'sds-platform--desktop'}`;
}

export function Header({ className, platform = 'Desktop', state = 'Default' }: { className?: string; platform?: Platform; state?: string }) {
  return <header className={platformClass(className, platform)} data-state={state}><strong>Logo</strong><nav><a href="#">Link</a><a href="#">Link</a></nav></header>;
}

export function HeaderAuth({ className, state = 'Default' }: { className?: string; state?: string }) {
  return <header className={`sds-section ${className ?? ''}`} data-state={state}><strong>Logo</strong><nav><a href="#">Log in</a><Button label="Sign up" /></nav></header>;
}

export function Footer({ className, platform = 'Desktop', title = 'Footer' }: { className?: string; platform?: Platform; title?: string }) {
  return <footer className={platformClass(className, platform)}><strong>{title}</strong><p>Footer content.</p></footer>;
}

export function HeroBasic({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><Button label="Action" /></section>;
}

export function HeroActions({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><div><Button label="Primary" /><Button label="Secondary" variant="Neutral" /></div></section>;
}

export function HeroNewsletter({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><FormNewsletter /></section>;
}

export function HeroForm({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><InputField label="Email" /><Button label="Submit" /></section>;
}

export function HeroImage({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><div className="sds-hero__image" /></section>;
}

export function HeroSlot({ className, platform = 'Desktop', slot }: { className?: string; platform?: Platform; slot?: ReactNode }) {
  return <section className={platformClass(className, platform)}>{slot ?? <TextContentHeading />}</section>;
}

export function PanelImageContent({ className, platform = 'Desktop', textContentFlow = 'Default' }: { className?: string; platform?: Platform; textContentFlow?: string }) {
  return <section className={platformClass(className, platform)} data-flow={textContentFlow}><div className="sds-panel__image" /><TextContentHeading /></section>;
}

export function PanelImageContentReverse({ className, platform = 'Desktop', textContentFlow = 'Default' }: { className?: string; platform?: Platform; textContentFlow?: string }) {
  return <section className={platformClass(className, platform)} data-flow={textContentFlow}><TextContentHeading /><div className="sds-panel__image" /></section>;
}

export function PanelImage({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><div className="sds-panel__image" /></section>;
}

export function PanelImageDouble({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><div className="sds-panel__image" /><div className="sds-panel__image" /></section>;
}

export function PageAccordion({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><AccordionItem /><AccordionItem state /></section>;
}

export function PageNewsletter({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><TextContentHeading /><FormNewsletter /></section>;
}

export function PageProduct({ className, platform = 'Desktop', column = 1 }: { className?: string; platform?: Platform; column?: number }) {
  return <section className={platformClass(className, platform)} style={{ gridTemplateColumns: `repeat(${column}, 1fr)` }}><ProductInfoCard /><ProductInfoCard /></section>;
}

export function PageProductResults({ className, platform = 'Desktop', slot }: { className?: string; platform?: Platform; slot?: ReactNode }) {
  return <section className={platformClass(className, platform)}>{slot ?? <><ProductInfoCard /><ProductInfoCard /><ProductInfoCard /></>}</section>;
}

export function CardGridIcon({ className, platform = 'Desktop', cards = 3 }: { className?: string; platform?: Platform; cards?: number }) {
  return <section className={platformClass(className, platform)}>{Array.from({ length: cards }, (_, index) => <Card key={index} assetType="Icon" />)}</section>;
}

export function CardGridImage({ className, platform = 'Desktop', slot }: { className?: string; platform?: Platform; slot?: ReactNode }) {
  return <section className={platformClass(className, platform)}>{slot ?? <Card assetType="Image" />}</section>;
}

export function CardGridContentList({ className, platform = 'Desktop', cards = 3 }: { className?: string; platform?: Platform; cards?: number }) {
  return <section className={platformClass(className, platform)}>{Array.from({ length: cards }, (_, index) => <Card key={index} />)}</section>;
}

export function CardGridPricing({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><Card /><Card /><Card /></section>;
}

export function CardGridReviews({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><Card /><Card /><Card /></section>;
}

export function CardGridTestimonials({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <section className={platformClass(className, platform)}><Card /><Card /></section>;
}

export function AIChatbot({ className, device = 'Desktop' }: { className?: string; device?: string }) {
  return <section className={`${className ?? ''} ${device === 'Mobile' ? 'sds-platform--mobile' : ''}`}><AIChatSidebar /><AIConversation /><AIChatBox /></section>;
}
