import React, { Fragment } from "react";
import PropTypes from "prop-types";

import StarshipName from "./StarshipName/StarshipName";
import StarshipModel from "./StarshipModel/StarshipModel";
import StarshipClass from "./StarshipClass/StarshipClass";
import StarshipManufactured from "./StarshipManufactured/StarshipManufactured";
import StarshipImg from "./StarshipImg/StarshipImg";

const starship = ({ name, model, starshipClass, manufactured, imgSrc }) => {
  return (
    <Fragment>
      <StarshipImg imgSrc={imgSrc} imgAlt={`${name} Image`} />
      <StarshipName name={name} />
      <StarshipModel model={model} />
      <StarshipClass starshipClass={starshipClass} />
      <StarshipManufactured manufactured={manufactured} />
    </Fragment>
  );
};

starship.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  starshipClass: PropTypes.string.isRequired,
  manufactured: PropTypes.string.isRequired,
  imgSrc: PropTypes.string
};

export default starship;
