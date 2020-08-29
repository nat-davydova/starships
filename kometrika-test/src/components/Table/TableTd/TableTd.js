import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./TableTd.module.scss";

const tableTd = ({ isCriteria = false, children }) => {
  let tdContent;

  if (isCriteria) {
    tdContent = <strong>{children}</strong>;
  } else {
    tdContent = children;
  }

  const tdClassnames = classnames({
    [styles.isCriteria]: isCriteria
  });

  return <td className={tdClassnames}>{tdContent}</td>;
};

tableTd.propTypes = {
  isCriteria: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ])
};

export default tableTd;
