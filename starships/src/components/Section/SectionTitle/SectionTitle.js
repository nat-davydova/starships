import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionTitle.module.scss";

const sectionTitle = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

sectionTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default sectionTitle;
