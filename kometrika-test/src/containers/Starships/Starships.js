import React, { Component } from "react";

import Section from "components/Section/Section";
import RoutingBtn from "components/UI/RoutingBtn/RoutingBtn";

import { sectionConfig } from "./config";

class Starships extends Component {
  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        <RoutingBtn to="/comparison">Go To Comparison</RoutingBtn>
      </Section>
    );
  }
}

export default Starships;
