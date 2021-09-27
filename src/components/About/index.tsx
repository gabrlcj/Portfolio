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
          With you wanna contact me you can by this email:{' '}
          <strong>gabrielbittencourt57@gmail.com</strong>, or by my social
          medias on the navigation bar on the side.
        </h3>
      </ApresentationBox>
      <div className="divider-1"></div>
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
