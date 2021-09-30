import styled from 'styled-components'

export const BackToTop = styled.button`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  padding: 1rem;
  clip-path: circle();
  background: var(--white-color);
  border: 0;
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;

  visibility: hidden;
  opacity: 0;
  cursor: pointer;

  transition: 0.2s;
  transform: translateY(100%);

  &.show {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`
