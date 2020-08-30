import { tempConfig } from "./config";

const initState = {
  starships: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "STARSHIPS_SUCCESS":
      const starships = state.starships.concat(action.payload.config);

      return {
        ...state,
        starships: starships
      };
    default:
      return state;
  }
};

export default reducer;
