import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './themes/index.css';
import './themes/tailwind-config.css';

const root = document.getElementById('root');

root
  ? createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  : console.log('root not found');
