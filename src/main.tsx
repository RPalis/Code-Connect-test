import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavigationButtonList } from './NavigationButtonList';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="demo-shell">
      <p className="eyebrow">Simple Design System</p>
      <h1>Navigation Button List</h1>
      <NavigationButtonList />
    </main>
  </StrictMode>,
);