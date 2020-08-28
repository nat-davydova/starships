import React, { Component } from "react";

import Section from "components/Section/Section";
import Table from "components/Table/Table";

import { sectionConfig } from "./config";

class ComparisonTable extends Component {
  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        <Table />
      </Section>
    );
  }
}

export default ComparisonTable;
