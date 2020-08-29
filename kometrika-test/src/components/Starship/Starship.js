import React, { Fragment } from "react";

import StarshipName from "./StarshipName/StarshipName";
import StarshipModel from "./StarshipModel/StarshipModel";
import StarshipClass from "./StarshipClass/StarshipClass";
import StarshipManufactured from "./StarshipManufactured/StarshipManufactured";

const starship = ({ name, model, starshipClass, manufactured }) => {
  return (
    <Fragment>
      <StarshipName name={name} />
      <StarshipModel model={model} />
      <StarshipClass starshipClass={starshipClass} />
      <StarshipManufactured manufactured={manufactured} />
    </Fragment>
  );
};

export default starship;
