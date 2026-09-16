export type TextContentHeadingProps = {
  className?: string;
  align?: 'Start' | 'Center';
  hasSubheading?: boolean;
  heading?: string;
  subheading?: string;
};

export function TextContentHeading({
  className,
  align = 'Start',
  hasSubheading = true,
  heading = 'Heading',
  subheading = 'Subheading',
}: TextContentHeadingProps) {
  return (
    <div className={`sds-text-content sds-text-content--${align.toLowerCase()} ${className ?? ''}`}>
      <h2>{heading}</h2>
      {hasSubheading && <p>{subheading}</p>}
    </div>
  );
}