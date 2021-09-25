import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-color: #222831;
    --brown-color: #443737;
    --white-color: #E6E6E6;

    --primary-color: #FF4D00;
    --secondary-color: #E79E4F;
    --alternative-color: #00A19D;
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
    background: url(${BackgroundImage}) repeat-y;
    background-position: center center;
    background-size: cover;
  }
`
