/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const GlobalStyle = (theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  html, body {
    height: 100%;
    width: 100%;
    background-color: ${theme.color.dark};
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${theme.color.white};
  }
`;