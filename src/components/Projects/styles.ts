import styled from 'styled-components'
import BarberShop from '../../assets/projects-background/barber-shop.png'
import Calculator from '../../assets/projects-background/calculator.png'
import dtmoney from '../../assets/projects-background/dtmoney.png'
import OrangeSpace from '../../assets/projects-background/orange-space.png'
import PopularRepos from '../../assets/projects-background/popular-repos.png'
import RandomQuote from '../../assets/projects-background/random-quotes.png'

export const Container = styled.main`
  padding: 2rem;
  text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
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
    font-size: 3rem;
    color: var(--primary-color);
    margin: 2rem 0 3rem 3rem;
  }

  h2 {
    color: var(--white-color);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0.95rem 0.95rem 0 0;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: var(--white-color);

      svg {
        font-size: 2rem;
        margin-right: 0.5rem;
        transition: transform ease 0.3s;

        &:hover {
          transform: translateY(-15%);
        }
      }
    }
  }

  p {
    color: var(--alternative-color);
    background: rgba(0, 0, 0, 0.8);
    text-decoration: underline;
    font-weight: 700;
    padding: 0 0.5rem;
  }
`

export const ProjectsContainer = styled.section`
  text-overflow: clip;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 25rem);
  gap: 2rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 25rem);
  }

  .project {
    border-radius: 1rem;

    &.orangespace {
      background: url(${OrangeSpace}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 3.5s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &.dtmoney {
      background: url(${dtmoney}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 4s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &.popularrepos {
      background: url(${PopularRepos}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 4.5s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &.randomquotes {
      background: url(${RandomQuote}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 5s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &.barbershop {
      background: url(${BarberShop}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 5.5s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }

    &.calculator {
      background: url(${Calculator}) no-repeat;
      background-size: cover;
      background-position: center;
      animation: fadeIn 6s forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
`
