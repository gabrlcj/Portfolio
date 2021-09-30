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
    scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    overscroll-behavior: none;

    @media (max-width: 720px) {
      margin-left: 0;
    }
  }

  .menu-icon {
    display: none;
    visibility: hidden;

    margin: 2rem 0 0 2rem;
    height: 3rem;
    font-size: 3rem;
    color: var(--primary-color);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;

    @media (max-width: 720px) {
      display: inline;
      visibility: visible;
    }
  }

  &::-webkit-scrollbar {
    background: var(--brown-color);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.2);
  }

  .divider-1 {
    height: 3px;
    margin: 4rem 0;
    background: linear-gradient(
      270deg,
      var(--primary-color),
      var(--brown-color)
    );
  }

  .divider-2 {
    height: 3px;
    margin: 4rem 0;
    background: linear-gradient(
      270deg,
      var(--brown-color),
      var(--primary-color)
    );
  }
`
