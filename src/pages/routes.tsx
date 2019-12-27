import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./containers/App";
import Chat from './components/chat'
import Session from './components/session'

const Routes = (
    <Route path="/" component={App}>
        <Switch>
            <Route path="/chat" component={Chat}></Route>
            <Route path="/" component={Session}></Route>
        </Switch>
    </Route>
);

export default Routes;
