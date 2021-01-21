import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssGlobalContext, CssGlobalContextDefaultState } from './contexts/cssGlobal';
import smoothscroll from 'smoothscroll-polyfill';

/**
 * run the smooth scroll polyfill
 *
 **/
smoothscroll.polyfill()



ReactDOM.render(
  <React.StrictMode>
    <CssGlobalContext.Provider value={CssGlobalContextDefaultState}>
      <App />
    </CssGlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
