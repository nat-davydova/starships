import React, { Fragment } from "react";

import StarshipName from "./StarshipName/StarshipName";
import StarshipModel from "./StarshipModel/StarshipModel";
import StarshipClass from "./StarshipClass/StarshipClass";

const starship = ({ name, model, spaceClass }) => {
  return (
    <Fragment>
      <StarshipName name={name} />
      <StarshipModel model={model} />
      <StarshipClass spaceClass={spaceClass} />
    </Fragment>
  );
};

export default starship;
