import React from "react";
import PropTypes from "prop-types";

import StarshipCard from "./StarshipCard/StarshipCard";

import styles from "./StarshipsGrid.module.scss";

const starshipsGrid = ({ config, pickShip }) => {
  const starshipsArr = config.map(elem => {
    return (
      <StarshipCard
        key={elem.id}
        config={elem}
        clicked={() => pickShip(elem.id)}
      />
    );
  });

  return <div className={styles.grid}>{starshipsArr}</div>;
};

starshipsGrid.propTypes = {
  config: PropTypes.array.isRequired,
  pickShip: PropTypes.func.isRequired
};

export default starshipsGrid;
