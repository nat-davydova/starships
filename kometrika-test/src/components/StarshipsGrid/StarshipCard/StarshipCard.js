import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import Starship from "components/Starship/Starship";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";

const starshipCard = ({ config }) => {
  return (
    <Card>
      <Starship config={config} />
    </Card>
  );
};

starshipCard.propTypes = {};

export default starshipCard;
