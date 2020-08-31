import React, { Component } from "react";

import Section from "components/Section/Section";

import { sectionConfig } from "./config";

class Starships extends Component {
  render() {
    return <Section sectionConfig={sectionConfig}>Starships!</Section>;
  }
}

export default Starships;
