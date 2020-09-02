import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";
import RoutingBtn from "components/UI/RoutingBtn/RoutingBtn";

import { sectionConfig } from "./config";
import { starshipsMinMax } from "store/actions/actions";

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
  componentDidMount() {
    if (this.props.pickedStarships.length > 0) {
      this.props.onSortingStarships(this.props.pickedStarships, criteriaArr);
    }
  }

  render() {
    const isRedirected = this.props.pickedStarships.length < 2;

    return (
      <Fragment>
        {isRedirected && <Redirect to="/" />}

        {!isRedirected && (
          <Section sectionConfig={sectionConfig}>
            <RoutingBtn to="/">Change Your Choice</RoutingBtn>
            <ComparisonTable
              tbodyProps={criteriaArr}
              config={this.props.pickedStarships}
              comparisonCriteria={this.props.starshipsMinMax}
            />
          </Section>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pickedStarships: state.starships.pickedStarships,
    starshipsMinMax: state.comparison.starshipsComparisonMinMax
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortingStarships: (starshipsArr, criteriaArr) =>
      dispatch(starshipsMinMax(starshipsArr, criteriaArr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
