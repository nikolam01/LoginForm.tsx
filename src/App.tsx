import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import "./App.css";
import Login from "./components/Login/Login";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
