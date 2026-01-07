import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { measurePageLoad } from './utils/performance';
import { reportWebVitals, sendToAnalytics } from './utils/reportWebVitals';

// Measure page load performance in development
if (process.env.NODE_ENV === 'development') {
  measurePageLoad();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report Web Vitals
reportWebVitals(sendToAnalytics);

