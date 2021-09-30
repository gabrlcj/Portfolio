import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavigationBar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ButtonGoToTop } from './components/ButtonGoToTop'

import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <ButtonGoToTop />
    </Router>
  )
}

export default App
