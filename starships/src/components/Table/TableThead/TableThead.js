import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import TableTr from "components/Table/TableTr/TableTr";
import TableTh from "components/Table/TableTh/TableTh";

const tableThead = ({ theadContent }) => {
  const theadArr = theadContent.map(elem => (
    <TableTh key={uuid()}>{elem}</TableTh>
  ));

  return (
    <thead>
      <TableTr>
        <TableTh></TableTh>
        {theadArr}
      </TableTr>
    </thead>
  );
};

tableThead.propTypes = {
  theadContent: PropTypes.array.isRequired
};

export default tableThead;
