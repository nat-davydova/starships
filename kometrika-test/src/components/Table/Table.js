import React from "react";
import PropTypes from "prop-types";

import TableThead from "./TableThead/TableThead";
import TableTbody from "./TableTbody/TableTbody";

import styles from "./Table.module.scss";

const table = ({ config }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableThead config={config} />
        <TableTbody config={config} />
      </table>
    </div>
  );
};

table.propTypes = {
  config: PropTypes.array.isRequired
};

export default table;
