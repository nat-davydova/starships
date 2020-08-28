import React, { Fragment } from "react";

import SpaceshipName from "./SpaceshipName/SpaceshipName";

const spaceship = ({ name }) => {
  return (
    <Fragment>
      <SpaceshipName name={name} />
    </Fragment>
  );
};

export default spaceship;
