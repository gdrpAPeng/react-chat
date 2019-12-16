import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Chat from './pages/chat'
import './assets/css/app.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">/</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
