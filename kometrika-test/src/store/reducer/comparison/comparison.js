import * as actionTypes from "../../actions/actionTypes";

import { starshipsCriteriaMinMax } from "./utils";

const initState = {
  starshipsComparisonMinMax: {}
};

const comparison = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_MINMAX:
      const criteriaArr = action.payload.criteriaArr;

      const starshipsComparisonMinMax = starshipsCriteriaMinMax(
        criteriaArr,
        state.starships.starships
      );

      return {
        ...state,
        starshipsComparisonMinMax: starshipsComparisonMinMax
      };

    default:
      return state;
  }
};

export default comparison;
