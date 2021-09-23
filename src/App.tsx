import { Home } from './components/Home'
import { NavBar } from './components/NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { About } from './components/About'
import { Projects } from './components/Projects'

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
    </Router>
  )
}

export default App
