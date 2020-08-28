import React from "react";
import PropTypes from "prop-types";

import styles from "./SpaceshipClass.module.scss";

const spaceshipClass = ({ spaceClass }) => (
  <p className={styles.starshipClass}>({spaceClass})</p>
);

spaceshipClass.propTypes = {
  spaceClass: PropTypes.string.isRequired
};

export default spaceshipClass;
