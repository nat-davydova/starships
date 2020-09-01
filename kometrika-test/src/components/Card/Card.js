import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

const card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ])
};

export default card;
