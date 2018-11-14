import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const About = () => (
  <div data-testid="about-screen">You are on the about page</div>
)
const Home = () => <div data-testid="home-screen">You are home</div>
const NoMatch = () => <div data-testid="no-match-screen">No match</div>

const Main: React.FunctionComponent = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default Main
