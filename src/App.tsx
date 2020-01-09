import React from 'react';
import './assets/css/app.scss'
import { Router } from 'react-router-dom'
// import { Router } from '@reach/router'

import { createBrowserHistory } from 'history'

import routes from './pages/routes'

import AppContainer from 'pages/containers/App'
import SocketContainer from 'pages/containers/Socket'

import Login from 'pages/components/login'

const history = createBrowserHistory()


const renderDom = () => {
  let token = localStorage.access_token
  if(token) {
    return (
      <SocketContainer>
          <Router children={routes} history={history}></Router>
        </SocketContainer>
    )
  } else {
    return (
      <AppContainer>
          <Login />
        </AppContainer>
    )
  }
}

const App: React.FC = () => {
  return (
      <div className="App">
        { renderDom() }
      </div>
  );
}

export default App;