import React from 'react';
import './assets/css/app.scss'
import { BrowserRouter as Router } from 'react-router-dom'

import routes from './pages/routes'

const App: React.FC = () => {
  return (
      <div className="App">
        <Router children={routes}></Router>
      </div>
  );
}

export default App;