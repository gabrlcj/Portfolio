import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo-name.png'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5'
import { Container, Socials } from './styles'

export function NavBar() {
  const [active, setActive] = useState('')
  const [hidden, setHidden] = useState(false)

  function handleNavBar() {
    if (window.innerWidth <= 720) setHidden(!hidden)
  }

  return (
    <>
      <button className="menu-icon" onClick={handleNavBar}>
        <BiMenuAltLeft />
      </button>
      <Container className={hidden === true ? 'hidden' : ''}>
        <img src={Logo} alt="Logo of the project" />
        <li>
          <ul>
            <Link
              to="/"
              onClick={() => {
                setActive('home')
                handleNavBar()
              }}
              className={active === 'home' ? 'active' : ''}
            >
              Home
            </Link>
          </ul>
          <ul>
            <Link
              to="/about"
              onClick={() => {
                setActive('about')
                handleNavBar()
              }}
              className={active === 'about' ? 'active' : ''}
            >
              About
            </Link>
          </ul>
          <ul>
            <Link
              to="/projects"
              onClick={() => {
                setActive('projects')
                handleNavBar()
              }}
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
    </>
  )
}
