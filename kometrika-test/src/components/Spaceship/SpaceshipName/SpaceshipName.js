import React from "react";
import PropTypes from "prop-types";

import styles from "./SpaceshipName.module.scss";

const spaceshipName = ({ name }) => <p className={styles.name}>{name}</p>;

spaceshipName.propTypes = {
  name: PropTypes.string.isRequired
};

export default spaceshipName;
