import { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Float1 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 0.5rem);
  }
  100% {
    transform: translate(0, 0);
  }
`

export const Float2 = keyframes`
  0% {
    transform: translate(0, 0.5rem);
  }
  50% {
    transform: translate(0.5rem, 0);
  }
  100% {
    transform: translate(0, 0.5rem);
  }
`
