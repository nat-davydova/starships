import React from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.scss";

const container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ])
};

export default container;
