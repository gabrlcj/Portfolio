import { IconsContainer } from '../../components/IconsContainer'
import { Footer } from '../../components/Footer'

import Ilustration from '../../assets/Image-about.svg'
import { ApresentationBox, Container } from './styles'

export function About() {
  return (
    <Container>
      <h1>About me</h1>
      <ApresentationBox>
        <h2>Biography</h2>
        <h3>
          Hi everyone, I started studying front-end development this year with
          HTML and CSS, from there on I went to Javascript and, when I got more
          confident with the language, I started studying React.js 😁.
        </h3>
        <section>
          <img src={Ilustration} alt="Ilustration of man playing video games" />
          <div className="bio-container">
            <h3>
              I live in Paraná, Brasil and I'm currently on career transition.
              I'm pursuing my first job as a front-end programmer, very excited
              to have this experience.
            </h3>
            <h3>
              I had a amazing experience making part of a hackathon where I
              learned to work with a full team, developers and designers, and my
              individual experience working on my projects and doing some
              courses.
            </h3>
            <h3>
              Some of my hobbies are play video games with my friends 🎮, hang
              out with my friends 🎉, watch NBA 🏀 and do exercises 🏃🏽‍♂️.
            </h3>
          </div>
        </section>
        <h3>
          If you wanna contact me send a email to{' '}
          <strong>gabrielbittencourt57@gmail.com</strong>, or send a message to
          me on my social medias.
        </h3>
      </ApresentationBox>
      <div className="divider-1"></div>
      <ApresentationBox>
        <h2>Languages and tools I'm learning and I'm working with:</h2>
        <IconsContainer />
      </ApresentationBox>
      <div className="divider-2"></div>
      <Footer />
    </Container>
  )
}
