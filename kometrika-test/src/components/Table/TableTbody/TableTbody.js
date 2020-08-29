import React from "react";
import PropTypes from "prop-types";

const tableTbody = ({ config }) => <tbody></tbody>;

tableTbody.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableTbody;
