import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipManufactured.module.scss";

const starshipManufactured = ({ manufactured }) => (
  <p className={styles.manufactured}>{manufactured}</p>
);

starshipManufactured.propTypes = {
  manufactured: PropTypes.string.isRequired
};

export default starshipManufactured;
