import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import Starship from "components/Starship/Starship";

const starshipCard = ({ config, clicked }) => {
  return (
    <Card clicked={clicked}>
      <Starship config={config} />
    </Card>
  );
};

starshipCard.propTypes = {
  config: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
};

export default starshipCard;
