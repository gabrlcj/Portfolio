import { useTypedText } from '../../utils/useTypedText'
import { IconsContainer } from '../IconsContainer'

import Ilustration from '../../assets/Image-about.svg'
import { ApresentationBox, Container } from './styles'
import { Footer } from '../Footer'

export function About() {
  return (
    <Container>
      <h1>{useTypedText('About me', 35, 10)}</h1>
      <ApresentationBox>
        <h2>{useTypedText('Biography', 40, 100)}</h2>
        <h3>
          Hi people, this is the section about me. I started studiyng front-end
          programming this year with HTML and CSS, from there on I went to
          Javascript and, when I got more confident with the language, I started
          studying React.js 😁.
        </h3>
        <section>
          <img src={Ilustration} alt="Ilustration of man playing video games" />
          <div className="bio-container">
            <h3>
              I'm currently on career transition. I live in Paraná, Brasil and
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
          With you wanna contact me you can by my email on the navigation bar,
          or by my social medias on the navigation bar too.
        </h3>
      </ApresentationBox>
      <div className="divider-1"></div>
      <ApresentationBox>
        <h2>
          {useTypedText(
            "Languages and tools I'm learning & I'm working with:",
            40,
            100
          )}
        </h2>
        <IconsContainer />
      </ApresentationBox>
      <div className="divider-2"></div>
      <Footer />
    </Container>
  )
}
