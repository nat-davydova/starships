import React from "react";
import PropTypes from "prop-types";

import StarshipCard from "./StarshipCard/StarshipCard";

import { findArrayElemObj } from "store/reducer/starships/utils";

import styles from "./StarshipsGrid.module.scss";

const starshipsGrid = ({ config, pickShip, pickedShipsArr }) => {
  const starshipsArr = config.map(elem => {
    const isPicked = findArrayElemObj(pickedShipsArr, "id", elem.id);

    return (
      <StarshipCard
        key={elem.id}
        config={elem}
        clicked={() => pickShip(elem.id)}
        isPicked={!!isPicked}
        className={styles.grid_item}
      />
    );
  });

  return <div className={styles.grid}>{starshipsArr}</div>;
};

starshipsGrid.propTypes = {
  config: PropTypes.array.isRequired,
  pickShip: PropTypes.func.isRequired,
  pickedShipsArr: PropTypes.array.isRequired
};

export default starshipsGrid;
