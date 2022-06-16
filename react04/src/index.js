import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App01 from './App01';
import App02 from './App02';
import App03 from './App03';
import App04 from './App04';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App04/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();