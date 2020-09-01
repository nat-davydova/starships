import React from "react";
import PropTypes, { element } from "prop-types";

import StarshipCard from "./StarshipCard/StarshipCard";

import styles from "./StarshipsGrid.module.scss";

const starshipsGrid = ({ config }) => {
  const starshipsArr = config.map(elem => {
    return <StarshipCard key={elem.id} config={elem} />;
  });

  return <div className={styles.grid}>{starshipsArr}</div>;
};

starshipsGrid.propTypes = {};

export default starshipsGrid;
