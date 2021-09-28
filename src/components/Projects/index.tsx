import { useTypedText } from '../../utils/useTypedText'
import { Container, ProjectsContainer } from './styles'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

export function Projects() {
  return (
    <Container>
      <h1>{useTypedText('Personal projects', 40, 20)}</h1>
      <ProjectsContainer>
        <div className="project orangespace">
          <h2>
            Orange-space
            <div>
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
        </div>
        <div className="project dtmoney">
          <h2>
            dt-money
            <a
              href="https://github.com/gabrlcj/dt.money"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoGithub />
            </a>
          </h2>
          <p>A financial tracking app.</p>
        </div>
        <div className="project popularrepos">
          <h2>
            Popular Repos
            <div>
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
        </div>
        <div className="project randomquotes">
          <h2>
            RandomQuotes
            <a
              href="https://github.com/gabrlcj/Random-quotes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoGithub />
            </a>
          </h2>
          <p>A generator of random quotes using a API.</p>
        </div>
        <div className="project barbershop">
          <h2>
            Barber Shop
            <div>
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
        </div>
        <div className="project calculator">
          <h2>
            Calc
            <div>
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
        </div>
      </ProjectsContainer>
    </Container>
  )
}
