import React, { Component } from "react";

import Section from "components/Section/Section";
import Table from "components/Table/Table";

import { sectionConfig, tempConfig } from "./config";

class ComparisonTable extends Component {
  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        <Table config={tempConfig} />
      </Section>
    );
  }
}

export default ComparisonTable;
