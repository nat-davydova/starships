import React, { Fragment } from "react";

import StarshipName from "./StarshipName/StarshipName";
import StarshipModel from "./StarshipModel/StarshipModel";
import StarshipClass from "./StarshipClass/StarshipClass";
import StarshipManufactured from "./StarshipManufactured/StarshipManufactured";

const starship = ({ name, model, spaceClass, manufactured }) => {
  return (
    <Fragment>
      <StarshipName name={name} />
      <StarshipModel model={model} />
      <StarshipClass spaceClass={spaceClass} />
      <StarshipManufactured manufactured={manufactured} />
    </Fragment>
  );
};

export default starship;
