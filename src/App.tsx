import React from "react";
import "./assets/css/app.scss";
import { Router } from "react-router-dom";
// import { Router } from '@reach/router'

import { createBrowserHistory } from "history";

import routes from "./pages/routes";

import SocketContainer from "pages/containers/Socket";
import Header from 'components/header'
import TabBar from 'components/tabBar'

const history = createBrowserHistory();

const renderDom = () => {
  return (
    <Router history={history}>
      <Header history={history}/>
      <section className="body-container">
        <SocketContainer history={history}>{routes}</SocketContainer>
      </section>
      <TabBar history={history}/>
    </Router>
  );
};

const App: React.FC = (props: any) => {
  return (
    <div className="App">
        {renderDom()}
    </div>
  )
};

export default App;
