import React from "react";

import styles from "./Container.module.scss";

const container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default container;
