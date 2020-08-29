import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";
import TableTd from "components/Table/TableTd/TableTd";

const tableTbody = ({ config }) => {
  const tableData = [];
  const defaultConfigElem = config[0];

  for (let configKey in defaultConfigElem) {
    const trData = [];
    trData.push(<TableTd isCriteria>{configKey}</TableTd>);

    config.forEach(configElem => {
      trData.push(<TableTd>{configElem[configKey]}</TableTd>);
    });

    tableData.push(<TableTr>{trData}</TableTr>);
  }

  return <tbody>{tableData}</tbody>;
};

tableTbody.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableTbody;
