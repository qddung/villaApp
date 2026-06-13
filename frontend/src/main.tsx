import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './root';
import './index.css';
import LocaleProvider from './components/providers/LocaleProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocaleProvider>
      <AppRouter />
    </LocaleProvider>
  </React.StrictMode>
);
