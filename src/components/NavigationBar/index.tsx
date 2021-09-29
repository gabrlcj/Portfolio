import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Socials } from './styles'
import InitialsImage from '../../assets/Logo.svg'
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5'

export function NavBar() {
  const [active, setActive] = useState('')

  return (
    <Container>
      <img src={InitialsImage} alt="Initials of my name" />
      <li>
        <ul>
          <Link
            to="/"
            onClick={() => setActive('home')}
            className={active === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </ul>
        <ul>
          <Link
            to="/about"
            onClick={() => setActive('about')}
            className={active === 'about' ? 'active' : ''}
          >
            About
          </Link>
        </ul>
        <ul>
          <Link
            to="/projects"
            onClick={() => setActive('projects')}
            className={active === 'projects' ? 'active' : ''}
          >
            Projects
          </Link>
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
