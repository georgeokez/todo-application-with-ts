import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Add Google Fonts for Josefin Sans
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

