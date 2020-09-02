import React from "react";
import PropTypes from "prop-types";

import styles from "./ErrorTxt.module.scss";

const errorTxt = ({ errorTxt }) => (
  <p className={styles.error}>{errorTxt.toString()}</p>
);

errorTxt.propTypes = {
  errorTxt: PropTypes.object.isRequired
};

export default errorTxt;
