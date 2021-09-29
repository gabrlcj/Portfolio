import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  height: 100vh;
  padding: 2rem;
  line-height: 2.5rem;
  animation: fadeIn 3s forwards;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .img-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;

    img {
      width: 20rem;
      border-radius: 5rem;
      border: 3px solid var(--white-color);
      filter: saturate(115%);
      box-shadow: 0 0 0.5rem 0.35rem rgba(255, 255, 255, 0.2);
      animation: float1 3s infinite;

      @media (max-width: 1080px) {
        width: 15rem;
      }

      @keyframes float1 {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(0, 0.5rem);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    }
  }

  .text-content {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    width: 60vw;

    @media (max-width: 1080px) {
      width: 100%;
    }

    h1 {
      color: var(--primary-color);
      text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
      margin-bottom: 1rem;
    }

    h3 {
      color: var(--white-color);
      text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
      margin-left: 2rem;
      text-overflow: clip;
    }
  }
`
