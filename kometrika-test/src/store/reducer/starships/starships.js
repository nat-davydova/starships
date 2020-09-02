import * as actionTypes from "store/actions/actionTypes";
import { starshipConfigAddImgs } from "./utils";
import { v4 as uuid } from "uuid";

const initState = {
  starships: [],
  isError: false,
  errorTxt: ""
};

const starshipsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_SUCCESS:
      const starships = state.starships.concat(action.payload.config);

      const starshipsDataTransformed = starships.map(elem => {
        elem.id = uuid();
        return starshipConfigAddImgs(elem);
      });

      return {
        ...state,
        isError: false,
        errorTxt: "",
        starships: starshipsDataTransformed
      };

    case actionTypes.STARSHIPS_ERROR:
      const errorTxt = action.payload.errorTxt;

      return {
        ...state,
        isError: true,
        errorTxt: errorTxt
      };

    default:
      return state;
  }
};

export default starshipsReducer;
