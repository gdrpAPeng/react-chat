import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Chat from './pages/chat'
import './assets/css/app.scss'

// export const SocketContext = React.createContext('socket')

const App: React.FC = () => {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat">
              {/* <SocketContext.Provider value='APeng'> */}
                <Chat />
              {/* </SocketContext.Provider> */}
            </Route>
            <Route path="/">/</Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;