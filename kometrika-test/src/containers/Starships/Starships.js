import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import RoutingBtn from "components/UI/RoutingBtn/RoutingBtn";
import StarshipsGrid from "components/StarshipsGrid/StarshipsGrid";

import { sectionConfig } from "./config";
import { grabbingStarships } from "store/actions/actions";

class Starships extends Component {
  async componentDidMount() {
    // pass film number here
    // Star Wars V - is equal to '2' num in the SWAPI API
    await this.props.onGrabbingStarships(2);
  }

  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        <RoutingBtn to="/comparison">Go To Comparison</RoutingBtn>
        <StarshipsGrid />
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships.starships,
    isError: state.starships.isError,
    errorTxt: state.starships.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarships: elem => dispatch(grabbingStarships(elem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
