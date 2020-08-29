import React, { Component } from "react";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";

import { sectionConfig, tempConfig } from "./config";

class Comparison extends Component {
  render() {
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
        <ComparisonTable tbodyProps={tbodyProps} config={tempConfig} />
      </Section>
    );
  }
}

export default Comparison;
