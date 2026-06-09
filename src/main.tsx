import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '@rgrmdesign/rgrm-ds-react';

import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-react/fonts';

import { App } from './App.tsx';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>,
);
