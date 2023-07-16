import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('index 이야')

root.render(
  <>
    <div>test</div>
    <App />
  </>
);

