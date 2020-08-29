import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipClass.module.scss";

const starshipClass = ({ spaceClass }) => (
  <p className={styles.starshipClass}>({spaceClass})</p>
);

starshipClass.propTypes = {
  spaceClass: PropTypes.string.isRequired
};

export default starshipClass;
