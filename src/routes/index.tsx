import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Projects } from '../pages/Projects'

export function Routes() {
  return (
    <Switch>
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
