import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Load the design tokens once for the whole app (base theme on :root,
// plus the [data-theme="dark"] and [data-theme="brand"] variants).
import '@rgrmdesign/rgrm-ds-tokens/tokens.css';

import { App } from './App.tsx';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
