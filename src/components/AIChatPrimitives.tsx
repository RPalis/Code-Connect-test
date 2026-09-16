import type { ReactNode } from 'react';

export function AIChatSidebar({ className, children }: { className?: string; children?: ReactNode }) {
  return <aside className={`sds-ai-sidebar ${className ?? ''}`}>{children ?? <><strong>AI Chat</strong><button>New conversation</button></>}</aside>;
}

export function AIChatUserMessage({ className, text = 'Hey Flippy! Write me a script for building an Analog Clock.' }: { className?: string; text?: string }) {
  return <div className={`sds-ai-user-message ${className ?? ''}`}><p>{text}</p></div>;
}

export function AIChatResponse({ className, text = 'Sure. Here is a Typescript code block for your project.' }: { className?: string; text?: string }) {
  return <div className={`sds-ai-response ${className ?? ''}`}><span aria-hidden="true">F</span><p>{text}</p></div>;
}

export function AICodeBlock({ className, code = 'const example = true;' }: { className?: string; code?: string }) {
  return <pre className={`sds-ai-code-block ${className ?? ''}`}><code>{code}</code></pre>;
}

export function AIConversation({ className, children }: { className?: string; children?: ReactNode }) {
  return <section className={`sds-ai-conversation ${className ?? ''}`}>{children ?? <><AIChatUserMessage /><AIChatResponse /><AICodeBlock /></>}</section>;
}