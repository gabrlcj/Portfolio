import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  height: 100vh;
  padding: 2rem;

  .img-content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40vw;

    img {
      width: 25rem;
      border-radius: 6rem;
      border: 3px solid var(--white-color);
      filter: saturate(115%);
    }
  }

  .text-content {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    width: 60vw;

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
