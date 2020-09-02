import * as actionTypes from "../../actions/actionTypes";

import { starshipsCriteriaMinMax } from "./utils";

const initState = {
  starshipsComparisonMinMax: {}
};

const comparison = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_MINMAX:
      const criteriaArr = action.payload.criteriaArr;
      const starshipsArr = action.payload.starshipsArr;

      const starshipsComparisonMinMax = starshipsCriteriaMinMax(
        criteriaArr,
        starshipsArr
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
