import React from "react";

import Layout from "./containers/Layout/Layout";
import Comparison from "./containers/Comparison/Comparison";
import Starships from "./containers/Starships/Starships";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Starships />
        <Comparison />
      </Layout>
    </div>
  );
}

export default App;
