import { NavBar } from './components/NavigationBar'
import { ButtonGoToTop } from './components/ButtonGoToTop'
import { GlobalStyle } from './styles/global'
import { Routes } from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes />
      <ButtonGoToTop />
    </Router>
  )
}

export default App
