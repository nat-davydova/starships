import React from "react";
import PropTypes from "prop-types";

import Table from "components/Table/Table";
import Starship from "components/Starship/Starship";

const comparisonTable = ({ config, tbodyProps, comparisonCriteria }) => {
  const theadContent = [];

  config.forEach(elem => {
    theadContent.push(<Starship config={elem} />);
  });

  return (
    <Table
      config={config}
      tbodyProps={tbodyProps}
      theadContent={theadContent}
      comparisonCriteria={comparisonCriteria}
    />
  );
};

comparisonTable.propTypes = {
  config: PropTypes.array.isRequired,
  tbodyProps: PropTypes.array,
  comparisonCriteria: PropTypes.object
};

export default comparisonTable;
