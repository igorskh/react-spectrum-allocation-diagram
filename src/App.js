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
import SpectrumMapPage from "./pages/SpectrumMapPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <Router>
    <Header />
    <Container fluid>
      <Route render={({ location }) => (
        <Switch location={location}>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/map" component={SpectrumMapPage} />
          <Route path="*" component={NoMatch} status={404} />
        </Switch>
      )} />

      <Footer />
    </Container>
  </Router>;
}

export default App;
