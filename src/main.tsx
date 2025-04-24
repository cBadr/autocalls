import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Meta from './components/Meta';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Meta />
      <App />
    </>
  </StrictMode>
);
