export type AIChatBoxProps = { className?: string; state?: 'Default' | 'Active' };

export function AIChatBox({ className, state = 'Default' }: AIChatBoxProps) {
  const active = state === 'Active';
  return <section className={`sds-ai-chat-box sds-ai-chat-box--${state.toLowerCase()} ${className ?? ''}`}>
    <p>What would you like to know?</p>
    <div className="sds-ai-chat-box__actions"><div><button type="button" aria-label="Image">Image</button><button type="button" aria-label="Code">Code</button><button type="button" aria-label="Microphone">Mic</button></div><button className="sds-ai-chat-box__send" disabled={!active} type="button" aria-label="Send">↑</button></div>
  </section>;
}