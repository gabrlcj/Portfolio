import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-color: #393E46;
    --white-color: #f0f0e4;

    --primary-color: #DB5F29;
    --secondary-color: #68BDE1;
    --alternative-color: #7B3C3C;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    min-height: 100vh;
    margin-left: 10rem;
    background-color: var(--black-color);
    font: 400 1rem 'JetBrains Mono', monospace;
  }
`
