import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionSubtitle.module.scss";

const sectionSubtitle = ({ children }) => (
  <h2 className={styles.subtitle}>{children}</h2>
);

sectionSubtitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default sectionSubtitle;
