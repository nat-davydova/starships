import React from "react";
import PropTypes from "prop-types";

import SectionTitle from "./SectionTitle/SectionTitle";
import SectionSubtitle from "./SectionSubtitle/SectionSubtitle";

import styles from "./Section.module.scss";

const section = ({ sectionConfig, children }) => {
  const { title, subtitle } = sectionConfig;

  return (
    <section>
      <header className={styles.header}>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
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
