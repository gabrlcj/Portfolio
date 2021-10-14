import styled from 'styled-components'
import BarberShop from '../../assets/projects-background/barber-shop.png'
import Calculator from '../../assets/projects-background/calculator.png'
import dtmoney from '../../assets/projects-background/dtmoney.png'
import OrangeSpace from '../../assets/projects-background/orange-space.png'
import PopularRepos from '../../assets/projects-background/popular-repos.png'
import AnimeQuotes from '../../assets/projects-background/animequotes.png'
import { FadeIn } from '../../styles/animations'

export const Container = styled.main`
  padding: 2rem;
  text-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  animation: ${FadeIn} 3s forwards;

  h1 {
    font-size: 3rem;
    color: var(--primary-color);
    margin: 2rem 0 3rem 3rem;
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 25rem);
  gap: 2rem;

  text-overflow: clip;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 25rem);
  }
`

export const Project = styled.div`
  border-radius: 1rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--white-color);
    padding: 0.75rem;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 1rem 1rem 0 0;

    .links {
      display: flex;
      gap: 1rem;

      a {
        color: var(--white-color);

        svg {
          font-size: 2rem;
          transition: transform ease 0.3s;

          &:hover {
            transform: translateY(-15%);
          }
        }
      }
    }
  }

  p {
    color: var(--alternative-color);
    text-decoration: underline;
    font-weight: 700;
    padding: 0 0.5rem;
    background: rgba(0, 0, 0, 0.75);
  }

  &.orangespace {
    background: url(${OrangeSpace}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 2s forwards;
  }

  &.dtmoney {
    background: url(${dtmoney}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 2s forwards;
  }

  &.popularrepos {
    background: url(${PopularRepos}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 2.5s forwards;
  }

  &.animequotes {
    background: url(${AnimeQuotes}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 2.5s forwards;
  }

  &.barbershop {
    background: url(${BarberShop}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 3s forwards;
  }

  &.calculator {
    background: url(${Calculator}) no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${FadeIn} 3s forwards;
  }
`
