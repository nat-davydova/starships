import * as actionTypes from "./actionTypes";

export const starshipsMinMax = (starshipsArr, criteriaArr) => {
  return {
    type: actionTypes.STARSHIPS_MINMAX,
    payload: {
      criteriaArr: criteriaArr,
      starshipsArr: starshipsArr
    }
  };
};
