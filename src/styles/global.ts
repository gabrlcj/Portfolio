import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-color: #222831;
    --brown-color: #443737;
    --white-color: #EEEEEE;

    --primary-color: #FF4D00;
    --secondary-color: #FF0000;
    --alternative-color: #68BDE1;
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
    background-color: var(--brown-color);
    font: 400 1rem 'JetBrains Mono', monospace;
  }
`
