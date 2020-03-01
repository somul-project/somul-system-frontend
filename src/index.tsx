import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from "./theme";
import {createGlobalStyle, ThemeProvider} from "styled-components";

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
        <App/>
    </ThemeProvider>, document.getElementById('root'));

serviceWorker.unregister();
