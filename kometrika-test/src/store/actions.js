import axios from "axios/axios-starships";

const grabbingSuccess = config => {
  return {
    type: "STARSHIPS_SUCCESS",
    payload: {
      config: config
    }
  };
};

export const grabbingStarship = () => {
  return async dispatch => {
    try {
      const shipsConfig = await axios.get("/3/");
      dispatch(grabbingSuccess(shipsConfig.data));
    } catch (e) {
      console.log(e);
    }
  };
};
