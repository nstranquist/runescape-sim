import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import page components
import { Game, Profile } from './pages'
import { PageHeader } from './components/layout'
import { StyledApp } from './styles/app-layout.style'
// import styles
import './App.css';

// TODO: make lazy imports (use HOC)
const App = () => {
  return (
    <BrowserRouter>
      <StyledApp className="app-container noselect">
        <PageHeader playerName={"darthbitcoin"} />
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <footer>
          <p className="footer-text">Made by Nico and Eric during the Great Coronavirus Lockdown of 2020</p>
        </footer>
      </StyledApp>
    </BrowserRouter>
  )
}

export default App