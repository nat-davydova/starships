import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Comparison from "./containers/Comparison/Comparison";
import Starships from "./containers/Starships/Starships";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/comparison" component={Comparison} exact />
          <Route path="/" component={Starships} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
