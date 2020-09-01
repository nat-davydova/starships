import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";
import ErrorTxt from "components/UI/ErrorTxt/ErrorTxt";

import { sectionConfig } from "./config";
import { grabbingStarships, starshipsMinMax } from "store/actions/actions";

const criteriaArr = [
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

class Comparison extends Component {
  async componentDidMount() {
    // pass film number here
    // Star Wars V - is equal to '2' num in the SWAPI API
    await this.props.onGrabbingStarships(2);
    await this.props.onSortingStarships(criteriaArr);
  }

  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        {this.props.isError && <ErrorTxt errorTxt={this.props.errorTxt} />}

        {!this.props.isError && (
          <Fragment>
            <Link to="/">Change your choice</Link>
            <ComparisonTable
              tbodyProps={criteriaArr}
              config={this.props.starships}
              comparisonCriteria={this.props.starshipsMinMax}
            />
          </Fragment>
        )}
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships,
    starshipsMinMax: state.starshipsComparisonMinMax,
    isError: state.isError,
    errorTxt: state.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarships: elem => dispatch(grabbingStarships(elem)),
    onSortingStarships: criteriaArr => dispatch(starshipsMinMax(criteriaArr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
