import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import RoutingBtn from "components/UI/RoutingBtn/RoutingBtn";
import StarshipsGrid from "components/StarshipsGrid/StarshipsGrid";
import ErrorTxt from "components/UI/ErrorTxt/ErrorTxt";

import { sectionConfig } from "./config";
import { grabbingStarships, pickStarshipCard } from "store/actions/actions";

class Starships extends Component {
  async componentDidMount() {
    // pass film number here
    // Star Wars V - is equal to '2' num in the SWAPI API
    if (this.props.starships.length === 0) {
      await this.props.onGrabbingStarships(2);
    }
  }

  render() {
    const routingBtnDisabled = this.props.pickedStarships.length < 2;

    return (
      <Section sectionConfig={sectionConfig}>
        {this.props.isError && <ErrorTxt errorTxt={this.props.errorTxt} />}
        {!this.props.isError && (
          <Fragment>
            <RoutingBtn to="/comparison" isDisabled={routingBtnDisabled}>
              Go To Comparison
            </RoutingBtn>
            <StarshipsGrid
              config={this.props.starships}
              pickShip={this.props.onPickingShip}
              pickedShipsArr={this.props.pickedStarships}
            />
          </Fragment>
        )}
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships.starships,
    pickedStarships: state.starships.pickedStarships,
    isError: state.starships.isError,
    errorTxt: state.starships.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarships: elem => dispatch(grabbingStarships(elem)),
    onPickingShip: key => dispatch(pickStarshipCard(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
