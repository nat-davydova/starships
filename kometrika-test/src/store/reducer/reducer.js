import * as actionTypes from "../actions/actionTypes";

import { starshipConfigAddImgs, starshipsCriteriaMinMax } from "./utils";

const initState = {
  starships: [],
  starshipsComparisonMinMax: {},
  isError: false,
  errorTxt: ""
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
      const criteriaArr = action.payload.criteriaArr;

      const starshipsComparisonMinMax = starshipsCriteriaMinMax(
        criteriaArr,
        state.starships
      );

      return {
        ...state,
        starshipsComparisonMinMax: starshipsComparisonMinMax
      };

    default:
      return state;
  }
};

export default reducer;
