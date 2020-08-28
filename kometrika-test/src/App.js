import React from "react";

import Layout from "./containers/Layout/Layout";
import ComparisonTable from "./containers/Comparison/ComparisonTable";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <ComparisonTable />
      </Layout>
    </div>
  );
}

export default App;
