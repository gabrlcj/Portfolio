import { useTypedText } from '../../utils/useTypedText'

import ProfileImg from '../../assets/fotoPerfil.jpeg'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <div className="img-content">
        <img src={ProfileImg} alt="Gabriel Bittencourt" />
      </div>
      <div className="text-content">
        <h1>
          {useTypedText("Hi, I'm Gabriel.", 35)}
          <br />
          {useTypedText('Welcome to my personal portfolio!', 40, 100)}
        </h1>
        <h3>
          {useTypedText(
            "Here I'm gonna show some of my works and a little about me. I'm currently studying front-end development with React.js and Typescript.",
            30,
            250
          )}
        </h3>
      </div>
    </Container>
  )
}
