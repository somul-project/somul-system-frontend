import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

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
