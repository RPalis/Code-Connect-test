import type { ReactNode } from 'react';
import { Platform, Header, Footer, HeroBasic, PageProduct, CardGridIcon } from './Sections';
import { TextContentHeading } from './TextContentHeading';
import { FormContact, FormNewsletter } from './Forms';
import { Button } from '../primitives/Button';

function page(className: string | undefined, platform: Platform) {
  return `${className ?? ''} ${platform === 'Mobile' ? 'sds-platform--mobile' : 'sds-platform--desktop'}`;
}

export function ExamplesHomePage({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><HeroBasic platform={platform} /><Footer platform={platform} /></div>;
}

export function ExamplesAbout({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><TextContentHeading /><Footer platform={platform} /></div>;
}

export function ExamplesContactUs({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><FormContact /><Footer platform={platform} /></div>;
}

export function ExamplesPricing({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><CardGridIcon platform={platform} /><Footer platform={platform} /></div>;
}

export function ExamplesWaitlist({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><TextContentHeading /><FormNewsletter /></div>;
}

export function ExamplesLandingPage({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><HeroBasic platform={platform} /><CardGridIcon platform={platform} /><Footer platform={platform} /></div>;
}

export function ExamplesArticle({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><TextContentHeading /><p>Article body text.</p></div>;
}

export function ExamplesShop({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><PageProduct platform={platform} /></div>;
}

export function ExamplesProductDetailPage({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><Header platform={platform} /><TextContentHeading /><Button label="Buy" /></div>;
}

export function ExamplesPortfolio({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><TextContentHeading /><CardGridIcon platform={platform} /></div>;
}

export function ExamplesAIChat({ className, platform = 'Desktop' }: { className?: string; platform?: Platform }) {
  return <div className={page(className, platform)}><TextContentHeading /><FormNewsletter /></div>;
}

export function ExamplesSlot({ className, platform = 'Desktop', container }: { className?: string; platform?: Platform; container?: ReactNode }) {
  return <div className={page(className, platform)}>{container ?? <TextContentHeading />}</div>;
}
