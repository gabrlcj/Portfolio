import { ApresentationBox, Container } from './styles'
import Ilustration from '../../assets/Image-about.svg'
import { useTypedText } from '../../utils/useTypedText'
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiNpm,
  SiReact,
  SiReactrouter,
  SiSass,
  SiStyledComponents,
  SiTypescript,
  SiYarn,
} from 'react-icons/si'

export function About() {
  return (
    <Container>
      <h1>{useTypedText('About me', 50, 20)}</h1>
      <ApresentationBox>
        <h2>{useTypedText('Biography', 60, 25)}</h2>
        <h3>
          Hi people, this is a section more about me I started studiyng
          front-end programming this year with HTML and CSS, from there on I
          went to Javascript, and when I got more confident with the language I
          began with React.js 😁.
        </h3>
        <section>
          <img src={Ilustration} alt="Ilustration of man playing video games" />
          <div className="bio-container">
            <h3>
              I live in Paraná, Brasil and I'm pursuing my first job as a
              front-end programmer, very excited to have this experience. I'm
              currently on career transition.
            </h3>
            <h3>
              I have some experience working with a team from a hackathon that I
              participate and individual experience with some projects that I
              use to practice some of the languages I'm trying to know and work
              with.
            </h3>
            <h3>
              Some of my hobbies are play video games with my friends 🎮, hang
              out with my friends 🎉, watch NBA 🏀 and do exercises 🏃🏽‍♂️.
            </h3>
          </div>
        </section>
      </ApresentationBox>
      <br />
      <ApresentationBox>
        <h2>
          {useTypedText(
            "Languages and tools I'm learning & I'm working with:",
            60,
            25
          )}
        </h2>
        <div className="icons-container">
          <div>
            <SiHtml5 style={{ color: '#e34f26' }} />
            <strong>HTML5</strong>
          </div>
          <div>
            <SiCss3 style={{ color: '#1572B6' }} />
            <strong>CSS3</strong>
          </div>
          <div>
            <SiSass style={{ color: '#CC6699' }} />
            <strong>SASS</strong>
          </div>
          <div>
            <SiJavascript style={{ color: '#F7DF1E' }} />
            <strong>JAVASCRIPT</strong>
          </div>
          <div>
            <SiGit style={{ color: '#F05032' }} />
            <strong>GIT</strong>
          </div>
          <div>
            <SiNpm style={{ color: '#CB3837' }} />
            <strong>NPM</strong>
          </div>
          <div>
            <SiYarn style={{ color: '#2C8EBB' }} />
            <strong>YARN</strong>
          </div>
          <div>
            <SiReact style={{ color: '#61DAFB' }} />
            <strong>REACT.JS</strong>
          </div>
          <div>
            <SiReactrouter style={{ color: '#CA4245' }} />
            <strong>REACT ROUTER</strong>
          </div>
          <div>
            <SiStyledComponents style={{ color: '#DB7093' }} />
            <strong>STYLED-COMPONENTS</strong>
          </div>
          <div>
            <SiNextDotJs style={{ color: '#000000' }} />
            <strong>NEXT.JS</strong>
          </div>
          <div>
            <SiTypescript style={{ color: '#3178C6' }} />
            <strong>TYPESCRIPT</strong>
          </div>
        </div>
      </ApresentationBox>
    </Container>
  )
}
