import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import Starship from "components/Starship/Starship";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";

const tempConfig = {
  imgSrc: StarDestroyerImg,
  name: "Star Destroyer",
  model: "Imperial I-class Star Destroyer",
  manufacturer: "Kuat Drive Yards",
  starship_class: "Star Destroyer"
};

const starshipCard = props => {
  return (
    <Card>
      <Starship config={tempConfig} />
    </Card>
  );
};

starshipCard.propTypes = {};

export default starshipCard;
