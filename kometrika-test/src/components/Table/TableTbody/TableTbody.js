import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";

const tableTbody = ({ config }) => (
  <tbody>
    <TableTr>
      <td>
        <strong>Cost (in credits)</strong>
      </td>
      <td>150000000</td>
      <td>100000</td>
    </TableTr>
    <TableTr>
      <td>
        <strong>Length</strong>
      </td>
      <td>1,600</td>
      <td>34.37</td>
    </TableTr>
  </tbody>
);

tableTbody.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableTbody;
