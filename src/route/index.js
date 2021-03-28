import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Update from "../views/Update"

import App from "../App";

const router = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
      </Switch>
    </App>
  </Router>
);
export default router;
