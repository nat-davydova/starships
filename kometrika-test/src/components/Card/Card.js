import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

const card = ({ children, clicked }) => {
  return (
    <div onClick={clicked} className={styles.card}>
      {children}
    </div>
  );
};

card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]),
  clicked: PropTypes.func
};

export default card;
