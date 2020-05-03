import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.scss";

import { Container } from "react-bootstrap";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";

function App() {
  return <Router>
    <Container fluid>

      <Route render={({ location }) => (
        <Switch location={location}>
          <Route exact={true} path="/" component={Main} />
          <Route path="*" component={NoMatch} status={404} />
        </Switch>
      )} />
    </Container>
  </Router>;
}

export default App;
