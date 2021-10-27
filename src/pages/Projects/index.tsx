import { Footer } from '../../components/Footer'

import { IoLogoGithub, IoLink } from 'react-icons/io5'
import { Container, Project, ProjectsContainer } from './styles'

export function Projects() {
  return (
    <Container>
      <h1>Personal projects</h1>
      <ProjectsContainer>
        <Project className="orangespace">
          <h2>
            Orange-space
            <div className="links">
              <a
                href="https://github.com/gabrlcj/squad4-frontend"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://orange-space.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLink />
              </a>
            </div>
          </h2>
          <p>Project made in the FCamara hackathon.</p>
        </Project>
        <Project className="dtmoney">
          <h2>
            dt-money
            <div className="links">
              <a
                href="https://github.com/gabrlcj/dt.money"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
            </div>
          </h2>
          <p>A financial tracking app.</p>
        </Project>
        <Project className="popularrepos">
          <h2>
            Popular Repos
            <div className="links">
              <a
                href="https://github.com/gabrlcj/Popular-repos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://popular-repos.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLink />
              </a>
            </div>
          </h2>
          <p>The most popular repositories on Github.</p>
        </Project>
        <Project className="animequotes">
          <h2>
            AnimeQuotes
            <div className="links">
              <a
                href="https://github.com/gabrlcj/Random-quotes"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://worldofanimequotes.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLink />
              </a>
            </div>
          </h2>
          <p>A generator of random anime quotes using a API.</p>
        </Project>
        <Project className="barbershop">
          <h2>
            Barber Shop
            <div className="links">
              <a
                href="https://github.com/gabrlcj/Barber-Shop"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://barber-shop-example.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLink />
              </a>
            </div>
          </h2>
          <p>Website for a barbershop.</p>
        </Project>
        <Project className="calculator">
          <h2>
            Calc
            <div className="links">
              <a
                href="https://github.com/gabrlcj/calculator-app"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://calculator-app-beige.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IoLink />
              </a>
            </div>
          </h2>
          <p>Calculator with different themes.</p>
        </Project>
      </ProjectsContainer>
      <div className="divider-1"></div>
      <Footer />
    </Container>
  )
}
