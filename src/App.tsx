import React from 'react';
import './assets/css/app.scss'
import { Router } from 'react-router-dom'
// import { Router } from '@reach/router'

import { createBrowserHistory } from 'history'

import routes from './pages/routes'

import SocketContainer from 'pages/containers/Socket'


const history = createBrowserHistory()


const renderDom = () => {
    return (
      <SocketContainer>
        <Router children={routes} history={history}></Router>
      </SocketContainer>
    )
}

const App: React.FC = (props: any) => {
  return (
      <div className="App">
        {
            renderDom() 
        }
      </div>
  );
}

export default App;