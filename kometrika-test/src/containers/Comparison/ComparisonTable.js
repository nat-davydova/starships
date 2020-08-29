import React, { Component } from "react";

import Section from "components/Section/Section";
import Table from "components/Table/Table";

import { sectionConfig, tempConfig } from "./config";

class ComparisonTable extends Component {
  render() {
    const theadProps = ["name", "model", "manufactured", "starship_class"];
    const tbodyProps = [
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "hyperdrive_rating",
      "MGLT"
    ];

    return (
      <Section sectionConfig={sectionConfig}>
        <Table
          theadProps={theadProps}
          tbodyProps={tbodyProps}
          config={tempConfig}
        />
      </Section>
    );
  }
}

export default ComparisonTable;
