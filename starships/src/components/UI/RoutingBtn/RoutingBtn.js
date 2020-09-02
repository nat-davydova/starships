import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./RoutingBtn.module.scss";

const disabledLink = (e, isDisabled) => {
  if (isDisabled) {
    e.preventDefault();
  }
};

const routingBtn = ({ children, isDisabled = false, ...props }) => {
  const routingClassnames = classnames(styles.routingBtn, {
    [styles.isDisabled]: isDisabled
  });

  return (
    <Link
      className={routingClassnames}
      onClick={e => disabledLink(e, isDisabled)}
      {...props}
    >
      {children}
    </Link>
  );
};

routingBtn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ]),
  isDisabled: PropTypes.bool
};

export default routingBtn;
