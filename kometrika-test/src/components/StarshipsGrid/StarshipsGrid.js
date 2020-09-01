import React from "react";
import PropTypes from "prop-types";

import StarshipCard from "./StarshipCard/StarshipCard";

import styles from "./StarshipsGrid.module.scss";

const starshipsGrid = props => {
  return (
    <div className={styles.grid}>
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
    </div>
  );
};

starshipsGrid.propTypes = {};

export default starshipsGrid;
