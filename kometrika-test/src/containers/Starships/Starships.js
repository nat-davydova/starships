import React, { Component } from "react";
import { Link } from "react-router-dom";

import Section from "components/Section/Section";

import { sectionConfig } from "./config";

class Starships extends Component {
  render() {
    return (
      <Section sectionConfig={sectionConfig}>
        <Link to="/comparison">Go To Comparison</Link>
      </Section>
    );
  }
}

export default Starships;
