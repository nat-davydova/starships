import axios from "axios/axios-starships";

import * as actionTypes from "./actionTypes";

const grabbingSuccess = config => {
  return {
    type: actionTypes.STARSHIPS_SUCCESS,
    payload: {
      config: config
    }
  };
};

const grabbingError = errorTxt => {
  return {
    type: actionTypes.STARSHIPS_ERROR,
    payload: {
      errorTxt: errorTxt
    }
  };
};

export const grabbingStarships = num => {
  return async dispatch => {
    try {
      const filmData = await axios.get(`/${num}/`);
      const starshipsArr = filmData.data.starships;

      for (const shipElem of starshipsArr) {
        const ship = await axios.get(`${shipElem}`);
        const shipData = ship.data;
        dispatch(grabbingSuccess(shipData));
      }
    } catch (e) {
      dispatch(grabbingError(e));
    }
  };
};
