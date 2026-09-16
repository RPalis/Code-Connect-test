export type TextVariantProps = { className?: string; text?: string };

export function TextSmall({ className, text = 'Text Small' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-small ${className ?? ''}`}>{text}</span>;
}

export function TextCode({ className, text = 'Text Code' }: TextVariantProps) {
  return <code className={`sds-text-variant sds-text-code ${className ?? ''}`}>{text}</code>;
}

export function TextStrong({ className, text = 'Text Strong' }: TextVariantProps) {
  return <strong className={`sds-text-variant sds-text-strong ${className ?? ''}`}>{text}</strong>;
}

export function TextLink({ className, text = 'Text Link' }: TextVariantProps) {
  return <a className={`sds-text-variant sds-text-link ${className ?? ''}`} href="#">{text}</a>;
}

export function TextEmphasis({ className, text = 'Text Emphasis' }: TextVariantProps) {
  return <em className={`sds-text-variant sds-text-emphasis ${className ?? ''}`}>{text}</em>;
}

export function TextSubheading({ className, text = 'Text Subheading' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-subheading ${className ?? ''}`}>{text}</span>;
}

export function TextHeading({ className, text = 'Text Heading' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-heading ${className ?? ''}`}>{text}</span>;
}

export function TextSubtitle({ className, text = 'Text Subtitle' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-subtitle ${className ?? ''}`}>{text}</span>;
}

export function TextTitlePage({ className, text = 'Text Title Page' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-title-page ${className ?? ''}`}>{text}</span>;
}

export function TextTitleHero({ className, text = 'Text Title Hero' }: TextVariantProps) {
  return <span className={`sds-text-variant sds-text-title-hero ${className ?? ''}`}>{text}</span>;
}