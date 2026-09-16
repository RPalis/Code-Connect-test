export type TextProps = {
  className?: string;
  text?: string;
};

export function Text({ className, text = 'Text' }: TextProps) {
  return (
    <div className={`sds-text ${className ?? ''}`} data-node-id="2087:8487" data-name="Text">
      <p>{text}</p>
    </div>
  );
}