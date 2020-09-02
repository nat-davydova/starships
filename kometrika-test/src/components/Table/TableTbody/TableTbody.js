import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import TableTr from "components/Table/TableTr/TableTr";
import TableTd from "components/Table/TableTd/TableTd";

const tableTbody = ({ config, tbodyProps = [], comparisonCriteria }) => {
  const tableData = [];
  const defaultConfigElem = config[0];

  for (let configKey in defaultConfigElem) {
    const trData = [];

    // if we have a list of table body properties and data item is not in the list - it's not rendered
    if (tbodyProps && tbodyProps.indexOf(configKey) < 0) {
      continue;
    }

    // rendering row title criteria
    trData.push(
      <TableTd key={uuid()} isCriteria>
        {configKey.split("_").join(" ")}
      </TableTd>
    );

    // rendering table cells with data
    config.forEach((configElem, index) => {
      let isMin = false;
      let isMax = false;

      if (comparisonCriteria && comparisonCriteria[configKey]) {
        const minIndexes = comparisonCriteria[configKey].minIndexes;
        const maxIndexes = comparisonCriteria[configKey].maxIndexes;

        if (
          maxIndexes.indexOf(index) > -1 ||
          // if we have only 2 items and one of them is not a number (like n/a or unknown), so it's index is not in minIndexes
          (maxIndexes.length === 0 &&
            minIndexes.indexOf(index) > -1 &&
            minIndexes.length < 2)
        ) {
          isMax = true;
        }

        if (minIndexes.indexOf(index) > -1) {
          isMin = true;
        }
      }

      trData.push(
        <TableTd key={uuid()} isMin={isMin} isMax={isMax}>
          {configElem[configKey]}
        </TableTd>
      );
    });

    // rendering single table row
    tableData.push(<TableTr key={uuid()}>{trData}</TableTr>);
  }

  return <tbody>{tableData}</tbody>;
};

tableTbody.propTypes = {
  tbodyProps: PropTypes.array,
  config: PropTypes.array.isRequired
};

export default tableTbody;
