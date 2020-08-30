import { tempConfig } from "./config";

const initState = {
  starships: [...tempConfig]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "STARSHIPS_SUCCESS":
      console.log(action.payload.config);
      return state;
    default:
      return state;
  }
};

export default reducer;
