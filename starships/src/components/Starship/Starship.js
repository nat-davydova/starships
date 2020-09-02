import React, { Fragment } from "react";
import PropTypes from "prop-types";

import StarshipName from "./StarshipName/StarshipName";
import StarshipModel from "./StarshipModel/StarshipModel";
import StarshipClass from "./StarshipClass/StarshipClass";
import StarshipManufactured from "./StarshipManufactured/StarshipManufactured";
import StarshipImg from "./StarshipImg/StarshipImg";

const starship = ({ config }) => {
  const {
    name,
    model,
    starship_class: starshipClass,
    manufacturer,
    imgSrc
  } = config;

  return (
    <Fragment>
      <StarshipImg imgSrc={imgSrc} imgAlt={`${name} Image`} />
      <StarshipName name={name} />
      <StarshipModel model={model} />
      <StarshipClass starshipClass={starshipClass} />
      <StarshipManufactured manufacturer={manufacturer} />
    </Fragment>
  );
};

starship.propTypes = {
  config: PropTypes.object.isRequired
};

export default starship;
