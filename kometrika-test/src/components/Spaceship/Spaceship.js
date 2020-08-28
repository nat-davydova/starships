import React, { Fragment } from "react";

import SpaceshipName from "./SpaceshipName/SpaceshipName";
import SpaceshipModel from "./SpaceshipModel/SpaceshipModel";
import SpaceshipClass from "./SpaceshipClass/SpaceshipClass";

const spaceship = ({ name, model, spaceClass }) => {
  return (
    <Fragment>
      <SpaceshipName name={name} />
      <SpaceshipModel model={model} />
      <SpaceshipClass spaceClass={spaceClass} />
    </Fragment>
  );
};

export default spaceship;
