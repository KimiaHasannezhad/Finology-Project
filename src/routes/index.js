import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from '../containers/Home'
import Header from '../components/NavBar/Header'
import Footer from '../components/Footer'

const PanelContainer = styled.div`
  text-align: center;
  .fade-enter {
    opacity: 0.01;
    transform: scale(1.1);
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transform: scale(1.1);
    transition: all 300ms;
  }
`

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <PanelContainer>
        <Header/>
        <Route
          render={({ location }) => {
            const currentKey = location.pathname.split('/')[1] || '/'
            const timeout = { enter: 300, exit: 200 }
            return (
              <TransitionGroup className="RTG">
                <CSSTransition timeout={timeout} classNames="fade" key={currentKey}>
                  <Switch location={location}>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="/home" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
          }}
        />
        <Footer />
      </PanelContainer>
    </Router>
  )
}

export default Routes
