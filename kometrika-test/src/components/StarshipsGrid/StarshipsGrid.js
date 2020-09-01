import React from "react";
import PropTypes from "prop-types";

import StarshipCard from "./StarshipCard/StarshipCard";

const starshipsGrid = props => {
  return (
    <div>
      <StarshipCard />
    </div>
  );
};

starshipsGrid.propTypes = {};

export default starshipsGrid;
