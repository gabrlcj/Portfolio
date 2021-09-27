import styled from 'styled-components'

export const Container = styled.main`
  padding: 2rem;
  line-height: 2.5rem;
  animation: fadeIn 3s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 4rem;
    color: var(--secondary-color);
    margin: 2rem 0 3rem 3rem;
    text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  }

  h3 {
    color: var(--white-color);
  }

  h2 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
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

    img {
      margin-top: 1rem;
      width: 25rem;
      animation: float2 3s infinite;

      @keyframes float2 {
        0% {
          transform: translate(0, 0.5rem);
        }
        50% {
          transform: translate(0.5rem, 0);
        }
        100% {
          transform: translate(0, 0.5rem);
        }
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

  .icons-container {
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(4, 20%);
    grid-template-rows: 10rem 10rem 10rem;
    position: relative;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      svg {
        color: var(--white-color);
        width: 5rem;
        height: 5rem;

        transition: transform ease 0.3s;

        &:hover {
          transform: translateY(-25%);
        }
      }

      strong {
        margin-top: 0.75rem;
        color: var(--white-color);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        padding: 0 0.75rem;
        text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
      }
    }
  }
`
