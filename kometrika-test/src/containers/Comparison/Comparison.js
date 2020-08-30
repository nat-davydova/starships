import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";
import ErrorTxt from "components/UI/ErrorTxt/ErrorTxt";

import { sectionConfig } from "./config";
import { grabbingStarships, starshipsMinMax } from "store/actions/actions";

class Comparison extends Component {
  async componentDidMount() {
    // pass film number here
    // Star Wars V - is equal to '2' num in the SWAPI API
    await this.props.onGrabbingStarships(2);
    this.props.onSortingStarships();
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
        {this.props.isError && <ErrorTxt errorTxt={this.props.errorTxt} />}

        {!this.props.isError && (
          <ComparisonTable
            tbodyProps={tbodyProps}
            config={this.props.starships}
          />
        )}
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships,
    isError: state.isError,
    errorTxt: state.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarships: elem => dispatch(grabbingStarships(elem)),
    onSortingStarships: () => dispatch(starshipsMinMax())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
