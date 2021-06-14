import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Login from "./components/Login/Login";

const history = createBrowserHistory();

let App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};
export default App;
