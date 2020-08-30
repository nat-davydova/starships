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

export const grabbingStarship = num => {
  return async dispatch => {
    try {
      const shipsConfig = await axios.get(`ee/${num}/`);
      dispatch(grabbingSuccess(shipsConfig.data));
    } catch (e) {
      dispatch(grabbingError(e));
    }
  };
};
