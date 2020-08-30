import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";

import { sectionConfig } from "./config";
import { grabbingStarship } from "../../store/actions";

class Comparison extends Component {
  async componentDidMount() {
    const arr = [3, 10, 11, 12, 15, 17, 21, 22, 23];

    for (const elem of arr) {
      await this.props.onGrabbingStarship(elem);
    }
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
    onGrabbingStarship: elem => dispatch(grabbingStarship(elem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
