import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Titillium Web'
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    };

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    };

    ul {
      padding-inline-start: 0;
    };
  
    li {
      list-style: none;
    };

    h1 {
      font-family: 'Titillium Web', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      line-height: 120%;
      margin-block-end: 1rem;
      margin-block-start: 0;
    }
    h2 {
      font-family: 'Titillium Web', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 130%;
      margin-block-end: 1rem;
      margin-block-start: 0;
    }

    h3 {
      font-family: 'Titillium Web', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 700;
      margin-block-end: 1rem;
      margin-block-start: 0;
    }

    h4 {
      font-family: 'Titillium Web', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 700;
      margin-block-end: 1rem;
      margin-block-start: 0;
    }

    h5 {
      font-family: 'Titillium Web', sans-serif;
      font-size: 1.125rem;
      line-height: 150%;
      font-weight: 700;
      margin-block-end: 1rem;
      margin-block-start: 0;
    }

    p{
      font-family: 'Titillium Web', sans-serif;
      font-size: 1rem;
      line-height: 150%;
      font-weight: 400;
      color: rgba(0,0,0,0.6);
      margin-block-end: 1.5rem;
      margin-block-start: 0;
    }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
