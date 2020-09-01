import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import Starship from "components/Starship/Starship";

const starshipCard = ({ config }) => {
  return (
    <Card>
      <Starship config={config} />
    </Card>
  );
};

starshipCard.propTypes = {
  config: PropTypes.object.isRequired
};

export default starshipCard;
