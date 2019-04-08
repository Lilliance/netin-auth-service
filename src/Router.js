import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login";
import NoMatch from "./pages/no-match";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Router;
