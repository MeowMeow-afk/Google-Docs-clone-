import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorLogger/ErrorLogger';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
