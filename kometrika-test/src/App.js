import React from "react";

import Layout from "./containers/Layout/Layout";
import Comparison from "./containers/Comparison/Comparison";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Comparison />
      </Layout>
    </div>
  );
}

export default App;
