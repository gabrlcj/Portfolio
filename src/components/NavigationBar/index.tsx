import { Link } from 'react-router-dom'
import { Container, Socials } from './styles'
import InitialsImage from '../../assets/G.B..svg'

import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5'

export function NavBar() {
  return (
    <Container>
      <img src={InitialsImage} alt="Initials of my name" />
      <li>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
        <ul>
          <Link to="/projects">Projects</Link>
        </ul>
      </li>
      <Socials>
        <a
          href="https://github.com/gabrlcj"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoGithub />
        </a>
        <a
          href="mailto:gabrielbittencourt57@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoMailOutline />
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielbittencourtpenteado/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoLinkedin />
        </a>
      </Socials>
    </Container>
  )
}
