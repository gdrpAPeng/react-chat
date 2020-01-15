import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Router } from '@reach/router'

// import App from './containers/App'
import Login from 'pages/components/login'
import Chat from "./components/chat";
import Session from "./components/session";
import Friend from './components/friend'
import SearchFriend from './components/search-friend'
import InfoDetail from './components/info-detail'

const Routes = (
    // <Router>
    //     <App path="/">
    //         <Chat path="chat" className="chat-page"/>
    //         <Session path="/" />
    //     </App>
    // </Router>
  <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/friend/search" component={SearchFriend}></Route>
    <Route path="/friend" component={Friend}></Route>
    <Route path="/info/detail" component={InfoDetail}></Route>
    <Route path="/chat" component={Chat}></Route>
    <Route path="/" component={Session}></Route>
  </Switch>
);


export default Routes
