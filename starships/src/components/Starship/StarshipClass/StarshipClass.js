import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipClass.module.scss";

const starshipClass = ({ starshipClass }) => (
  <p className={styles.starshipClass}>({starshipClass})</p>
);

starshipClass.propTypes = {
  starshipClass: PropTypes.string.isRequired
};

export default starshipClass;
