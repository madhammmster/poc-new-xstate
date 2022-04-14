import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { inspect } from '@xstate/inspect';

inspect({
    iframe: false ,
    url: 'https://stately.ai/viz?inspect'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);