import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";
import TableTd from "components/Table/TableTd/TableTd";

const tableTbody = ({ config }) => {
  return <tbody></tbody>;
};

tableTbody.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableTbody;
