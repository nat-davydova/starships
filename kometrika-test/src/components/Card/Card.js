import React from "react";
import PropTypes from "prop-types";

const card = ({ children }) => {
  return <div>{children}</div>;
};

card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.element.isRequired
  ])
};

export default card;
