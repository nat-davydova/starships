import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipManufactured.module.scss";

const starshipManufactured = ({ manufacturer }) => (
  <p className={styles.manufactured}>{manufacturer}</p>
);

starshipManufactured.propTypes = {
  manufactured: PropTypes.string.isRequired
};

export default starshipManufactured;
