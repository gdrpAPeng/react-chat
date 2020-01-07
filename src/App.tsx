import React from 'react';
import './assets/css/app.scss'
import { Router } from 'react-router-dom'
// import { Router } from '@reach/router'

import { createBrowserHistory } from 'history'

import routes from './pages/routes'

import AppContainer from 'pages/containers/App'

const history = createBrowserHistory()

const App: React.FC = () => {
  return (
      <div className="App">
        {/* { routes } */}
        <AppContainer>
          <Router children={routes} history={history}></Router>
        </AppContainer>
      </div>
  );
}

export default App;