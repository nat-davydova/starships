import React from "react";
import PropTypes from "prop-types";

const tableTh = ({ children }) => <th>{children}</th>;

tableTh.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ])
};

export default tableTh;
