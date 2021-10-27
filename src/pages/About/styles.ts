import styled from 'styled-components'
import { FadeIn, Float2 } from '../../styles/animations'

export const Container = styled.main`
  padding: 2rem;
  line-height: 2.5rem;
  animation: ${FadeIn} 3s forwards;

  h1 {
    font-size: 3rem;
    color: var(--primary-color);
    margin: 2rem 0 3rem 3rem;
    text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  h2 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  h3 {
    color: var(--white-color);

    strong {
      text-decoration: underline;
      color: var(--secondary-color);
    }
  }
`

export const ApresentationBox = styled.div`
  text-overflow: clip;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2.5rem;

    @media (max-width: 1080px) {
      flex-direction: column;
    }

    img {
      margin-top: 1rem;
      width: 25rem;
      animation: ${Float2} 3s infinite;

      @media (max-width: 1080px) {
        width: 20rem;
      }
    }

    .bio-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      gap: 3rem;
    }
  }
`
