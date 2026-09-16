export type AccordionItemProps = {
  className?: string;
  content?: string;
  state?: boolean;
  title?: string;
};

export function AccordionItem({ className, content = 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.', state = false, title = 'Title' }: AccordionItemProps) {
  return (
    <details className={`sds-accordion-item ${state ? 'sds-accordion-item--open' : ''} ${className ?? ''}`} open={state}>
      <summary>{title}<span aria-hidden="true">⌄</span></summary>
      {state && <p>{content}</p>}
    </details>
  );
}