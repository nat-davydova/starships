import React from "react";
import PropTypes from "prop-types";

import TableThead from "./TableThead/TableThead";
import TableTbody from "./TableTbody/TableTbody";

import styles from "./Table.module.scss";

const table = ({ config, theadContent = [], tbodyProps = [] }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableThead theadContent={theadContent} />
        <TableTbody tbodyProps={tbodyProps} config={config} />
      </table>
    </div>
  );
};

table.propTypes = {
  tbodyProps: PropTypes.array,
  config: PropTypes.array.isRequired
};

export default table;
