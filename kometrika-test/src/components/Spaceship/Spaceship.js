import React, { Fragment } from "react";

import SpaceshipName from "./SpaceshipName/SpaceshipName";
import SpaceshipModel from "./SpaceshipModel/SpaceshipModel";

const spaceship = ({ name, model }) => {
  return (
    <Fragment>
      <SpaceshipName name={name} />
      <SpaceshipModel model={model} />
    </Fragment>
  );
};

export default spaceship;
