import { tempConfig } from "./config";

const initState = {
  starships: [...tempConfig]
};

const reducer = (state = initState, action) => {
  return state;
};

export default reducer;
