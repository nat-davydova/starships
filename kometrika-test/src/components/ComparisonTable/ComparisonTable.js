import React from "react";
import PropTypes from "prop-types";

import Table from "components/Table/Table";
import Starship from "components/Starship/Starship";

const comparisonTable = ({ config, tbodyProps }) => {
  const theadContent = [];

  config.forEach(elem => {
    theadContent.push(<Starship config={elem} />);
  });

  return (
    <Table
      config={config}
      tbodyProps={tbodyProps}
      theadContent={theadContent}
    />
  );
};

comparisonTable.propTypes = {
  config: PropTypes.array.isRequired,
  tbodyProps: PropTypes.array
};

export default comparisonTable;
