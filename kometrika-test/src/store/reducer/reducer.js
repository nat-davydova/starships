import * as actionTypes from "../actions/actionTypes";

import { shipsImgs } from "./config";

const initState = {
  starships: []
};

const starshipConfigAddImgs = starshipConfig => {
  const starshipName = starshipConfig.name;

  starshipConfig.imgSrc = shipsImgs[starshipName];

  return starshipConfig;
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_SUCCESS:
      const starships = state.starships.concat(action.payload.config);

      const starshipsWithImgs = starships.map(elem =>
        starshipConfigAddImgs(elem)
      );

      return {
        ...state,
        starships: starshipsWithImgs
      };
    default:
      return state;
  }
};

export default reducer;
