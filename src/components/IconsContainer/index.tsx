import { Container } from './styles'
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

export function IconsContainer() {
  return (
    <Container>
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
    </Container>
  )
}
