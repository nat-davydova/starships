import React from "react";
import PropTypes from "prop-types";

import SectionTitle from "./SectionTitle/SectionTitle";

const section = ({ sectionConfig, children }) => {
  const { title, subtitle } = sectionConfig;

  return (
    <section>
      <header>
        <SectionTitle>{title}</SectionTitle>
        <h2>{subtitle}</h2>
      </header>
      <div>Section Content Is Here {children}</div>
    </section>
  );
};

section.propTypes = {
  sectionConfig: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ])
};

export default section;
