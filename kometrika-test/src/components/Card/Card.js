import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Card.module.scss";

const card = ({ children, clicked, isPicked }) => {
  const cardClassnames = classnames(styles.card, {
    [styles.isPicked]: isPicked
  });

  return (
    <div onClick={clicked} className={cardClassnames}>
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
