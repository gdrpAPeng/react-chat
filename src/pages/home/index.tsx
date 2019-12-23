import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { socket, SocketContext } from "context/socket";

import "./index.scss";
import Chat from 'pages/chat'
import SessionList from 'pages/session'

class HomeLayout extends React.Component<{}> {
  render() {
    return (
      <section className="home-layout">
        {/* 两种布局，一种有底部 bar */}
        <Router>
          <Switch>
            <Route path="/chat">
              <SocketContext.Provider value={socket}>
                <Chat />
              </SocketContext.Provider>
            </Route>
            <Route path="/">
              <SessionList />
            </Route>
          </Switch>
        </Router>
      </section>
    );
  }
}

export default HomeLayout;
