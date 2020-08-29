import React from "react";

import styles from "./StarshipManufactured.module.scss";

const starshipManufactured = ({ manufactured }) => (
  <p className={styles.manufactured}>{manufactured}</p>
);

export default starshipManufactured;
