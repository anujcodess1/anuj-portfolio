import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initKeepAlive } from './keepAlive';

// Keep Render service active every 12-14 minutes
initKeepAlive();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
