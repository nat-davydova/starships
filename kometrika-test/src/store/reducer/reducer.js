import * as actionTypes from "../actions/actionTypes";

import { shipsImgs } from "./config";

const initState = {
  starships: [],
  isError: false,
  errorTxt: ""
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
        isError: false,
        errorTxt: "",
        starships: starshipsWithImgs
      };

    case actionTypes.STARSHIPS_ERROR:
      const errorTxt = action.payload.errorTxt;

      return {
        ...state,
        isError: true,
        errorTxt: errorTxt
      };

    case actionTypes.STARSHIPS_MINMAX:
      console.log(action.payload.criteriaArr);

      return state;

    default:
      return state;
  }
};

export default reducer;
