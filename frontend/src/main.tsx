import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './root';
import './index.css';
import LocaleProvider from './components/providers/LocaleProvider';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <Toaster position="top-right" richColors />
      <AppRouter />
    </LocaleProvider>
  </React.StrictMode>
);
