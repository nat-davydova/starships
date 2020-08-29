import React from "react";
import PropTypes from "prop-types";

import TableThead from "./TableThead/TableThead";

import styles from "./Table.module.scss";

const table = ({ config }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableThead config={config} />
        <tbody>
          <tr>
            <td>
              <strong>Cost (in credits)</strong>
            </td>
            <td>150000000</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>
              <strong>Length</strong>
            </td>
            <td>1,600</td>
            <td>34.37</td>
          </tr>
          <tr>
            <td>
              <strong>Max Atmosphering Speed</strong>
            </td>
            <td>975</td>
            <td>1050</td>
          </tr>
          <tr>
            <td>
              <strong>Crew</strong>
            </td>
            <td>47,060</td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              <strong>Passengers</strong>
            </td>
            <td>N/A</td>
            <td>6</td>
          </tr>
          <tr>
            <td>
              <strong>Cargo Capacity</strong>
            </td>
            <td>36000000</td>
            <td>100000</td>
          </tr>
          <tr>
            <td>
              <strong>Consumables</strong>
            </td>
            <td>2 years</td>
            <td>2 months</td>
          </tr>
          <tr>
            <td>
              <strong>Hyperdrive Rating</strong>
            </td>
            <td>2.0</td>
            <td>0.5</td>
          </tr>
          <tr>
            <td>
              <strong>MGLT</strong>
            </td>
            <td>60</td>
            <td>75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

table.propTypes = {
  config: PropTypes.array.isRequired
};

export default table;
