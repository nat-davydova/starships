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

export const grabbingStarship = num => {
  return async dispatch => {
    try {
      const shipsConfig = await axios.get(`/${num}/`);
      dispatch(grabbingSuccess(shipsConfig.data));
    } catch (e) {
      console.log(e);
    }
  };
};
