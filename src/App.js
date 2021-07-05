import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import SecondPage from "./pages/page-2";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <IndexPage />
          </Route>
          <Route path="/page-2">
            <SecondPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
