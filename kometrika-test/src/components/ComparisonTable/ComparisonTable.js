import React from "react";

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

export default comparisonTable;
