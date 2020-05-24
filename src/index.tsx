import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { REACT_APP_SENTRY_DSN, REACT_APP_GA_ID } from './utils/constants';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: REACT_APP_SENTRY_DSN });
  ReactGA.initialize(REACT_APP_GA_ID as string);
}

// 글로벌 스타일을 적용하기 위함
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    {/* eslint-disable-next-line no-undef */}
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
