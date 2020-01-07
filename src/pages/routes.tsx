import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Router } from '@reach/router'

// import App from './containers/App'
import Chat from "./components/chat";
import Session from "./components/session";

const Routes = (
    // <Router>
    //     <App path="/">
    //         <Chat path="chat" className="chat-page"/>
    //         <Session path="/" />
    //     </App>
    // </Router>
  <Switch>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/" component={Session}></Route>
  </Switch>
);


export default Routes
