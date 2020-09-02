import React from "react";
import PropTypes from "prop-types";

import styles from "./StarshipModel.module.scss";

const starshipModel = ({ model }) => <p className={styles.model}>{model}</p>;

starshipModel.propTypes = {
  model: PropTypes.string.isRequired
};

export default starshipModel;
