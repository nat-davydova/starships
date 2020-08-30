import React from "react";

import styles from "./ErrorTxt.module.scss";

const errorTxt = ({ errorTxt }) => (
  <p className={styles.error}>{errorTxt.toString()}</p>
);

export default errorTxt;
