import React, { Fragment } from "react";

import SpaceshipName from "./StarshipName/StarshipName";
import SpaceshipModel from "./StarshipModel/StarshipModel";
import SpaceshipClass from "./StarshipClass/StarshipClass";

const starship = ({ name, model, spaceClass }) => {
  return (
    <Fragment>
      <SpaceshipName name={name} />
      <SpaceshipModel model={model} />
      <SpaceshipClass spaceClass={spaceClass} />
    </Fragment>
  );
};

export default starship;
