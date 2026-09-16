export type TextContentTitleProps = {
  className?: string;
  align?: 'Start' | 'Center';
  hasSubtitle?: boolean;
  subtitle?: string;
  title?: string;
};

export function TextContentTitle({
  className,
  align = 'Start',
  hasSubtitle = true,
  subtitle = 'Subtitle',
  title = 'Title',
}: TextContentTitleProps) {
  return (
    <div className={`sds-text-content sds-text-content--${align.toLowerCase()} ${className ?? ''}`}>
      <h1>{title}</h1>
      {hasSubtitle && <p>{subtitle}</p>}
    </div>
  );
}