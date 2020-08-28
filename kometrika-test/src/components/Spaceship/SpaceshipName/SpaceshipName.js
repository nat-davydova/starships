import React from "react";

import styles from "./SpaceshipName.module.scss";

const spaceshipName = ({ name }) => <p className={styles.name}>{name}</p>;

export default spaceshipName;
