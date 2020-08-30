import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";

import { sectionConfig } from "./config";
import { grabbingStarship } from "../../store/actions";

class Comparison extends Component {
  async componentDidMount() {
    await this.props.onGrabbingStarship();
  }

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
        <ComparisonTable
          tbodyProps={tbodyProps}
          config={this.props.starships}
        />
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarship: () => dispatch(grabbingStarship())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
