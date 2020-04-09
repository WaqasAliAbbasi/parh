import React from "react";
import { Flex } from "rebass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, SindhiRead } from "./features";

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <Flex p={2} flex={1}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sindhi" exact>
            <SindhiRead />
          </Route>
        </Switch>
      </Flex>
    </Flex>
  </Router>
);
