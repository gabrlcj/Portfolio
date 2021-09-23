import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
  width: 10rem;
  padding: 5rem 0;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--black-color);
  border-radius: 0 0.75rem 0.75rem 0;
  box-shadow: 0 0 0.5rem 0.15rem rgba(0, 0, 0, 0.5);

  img {
    height: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3.5rem;

    padding: 1rem;
    width: 100%;
    list-style: none;

    a {
      position: relative;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 700;
      width: 100%;

      transition: all ease 0.3s;

      &::after {
        content: '';
        width: 0;
        height: 0.2rem;
        background: var(--primary-color);

        position: absolute;
        left: 0;
        bottom: -0.25rem;

        transition: width ease 0.3s;
      }

      &:hover {
        filter: saturate(200%);

        &::after {
          width: 100%;
          color: var(--primary-color);
        }
      }
    }
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  a {
    color: var(--white-color);
    transition: all ease 0.3s;

    &:nth-child(1) {
      &:hover {
        color: #181717;
        transform: translateY(-20%);
      }
    }

    &:nth-child(2) {
      &:hover {
        color: #ea4335;
        transform: translateY(-20%);
      }
    }

    &:nth-child(3) {
      &:hover {
        color: #0a66c2;
        transform: translateY(-20%);
      }
    }

    svg {
      font-size: 1.75rem;
    }
  }
`
