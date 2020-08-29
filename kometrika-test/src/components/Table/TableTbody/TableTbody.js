import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";
import TableTd from "components/Table/TableTd/TableTd";

const tableTbody = ({ config }) => (
  <tbody>
    <TableTr>
      <TableTd>
        <strong>Cost (in credits)</strong>
      </TableTd>
      <TableTd>150000000</TableTd>
      <TableTd>100000</TableTd>
    </TableTr>
    <TableTr>
      <TableTd>
        <strong>Length</strong>
      </TableTd>
      <TableTd>1,600</TableTd>
      <TableTd>34.37</TableTd>
    </TableTr>
  </tbody>
);

tableTbody.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableTbody;
