import styled from 'styled-components'

export const Container = styled.div`
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
`
