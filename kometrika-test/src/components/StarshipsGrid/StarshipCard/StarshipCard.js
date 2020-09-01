import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import Starship from "components/Starship/Starship";

const starshipCard = props => {
  return (
    <Card>
      <Starship config={} />
    </Card>
  );
};

starshipCard.propTypes = {};

export default starshipCard;
