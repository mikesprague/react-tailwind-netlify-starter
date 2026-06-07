import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App.tsx';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
