import React from "react";
import PropTypes from "prop-types";

import styles from "./SpaceshipModel.module.scss";

const spaceshipModel = ({ model }) => <p className={styles.model}>{model}</p>;

spaceshipModel.propTypes = {
  model: PropTypes.string.isRequired
};

export default spaceshipModel;
