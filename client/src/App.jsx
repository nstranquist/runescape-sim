import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import page components
// import { Game, Profile } from './pages'
import { PageHeader, Footer } from './components/layout'
import { StyledApp } from './styles/app-layout.style'
import asyncComponent from './hocs/asyncComponent'
// import styles
import './App.css';

// Async Route Components (Lazy Loading)
const AsyncComponent = (uri) => asyncComponent(() => {
  console.log('uri of async component:', uri)
  return import(`${uri}`)
})

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp className="app-container noselect">
        <PageHeader playerName={"darthbitcoin"} />
        <Switch>
          <Route exact path="/" component={AsyncComponent("./pages/Game")} />
          <Route exact path="/game" component={AsyncComponent("./pages/Game")} />
          <Route exact path="/profile" component={AsyncComponent("./pages/Profile")} />
        </Switch>
        <Footer />
      </StyledApp>
    </BrowserRouter>
  )
}

export default App