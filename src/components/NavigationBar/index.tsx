import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo-name.png'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5'
import { Container, Socials } from './styles'

export function NavBar() {
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
            <NavLink
              exact
              to="/"
              onClick={() => handleNavBar()}
              activeClassName="active"
            >
              Home
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/about"
              onClick={() => handleNavBar()}
              activeClassName="active"
            >
              About
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/projects"
              onClick={() => handleNavBar()}
              activeClassName="active"
            >
              Projects
            </NavLink>
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
