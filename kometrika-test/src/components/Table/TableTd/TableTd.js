import React from "react";
import PropTypes from "prop-types";

const tableTd = ({ children }) => <td>{children}</td>;

tableTd.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ])
};

export default tableTd;
