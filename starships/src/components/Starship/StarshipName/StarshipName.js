import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipName.module.scss";

const starshipName = ({ name }) => <p className={styles.name}>{name}</p>;

starshipName.propTypes = {
  name: PropTypes.string.isRequired
};

export default starshipName;
