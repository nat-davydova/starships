import * as actionTypes from "store/actions/actionTypes";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash.clonedeep";

import { starshipConfigAddImgs } from "./utils";

const initState = {
  starships: [],
  pickedStarships: [],
  isError: false,
  errorTxt: ""
};

const starshipsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_SUCCESS:
      const starshipsArr = cloneDeep(state.starships);

      starshipsArr.push(action.payload.config);

      const starshipsDataTransformed = starshipsArr.map(elem => {
        elem.id = uuid();
        return starshipConfigAddImgs(elem);
      });

      return {
        ...state,
        isError: false,
        errorTxt: "",
        starships: [...starshipsDataTransformed]
      };

    case actionTypes.STARSHIPS_ERROR:
      const errorTxt = action.payload.errorTxt;

      return {
        ...state,
        isError: true,
        errorTxt: errorTxt
      };

    case actionTypes.STARSHIPS_PICK:
      const pickedShipId = action.payload.cardKey;
      const pickedShipsArr = cloneDeep(state.pickedStarships);

      if (pickedShipsArr.indexOf(pickedShipId) < 0) {
        pickedShipsArr.push(pickedShipId);
      } else {
        const indexToRemove = pickedShipsArr.indexOf(pickedShipId);

        pickedShipsArr.splice(indexToRemove, 1);
      }

      console.log(pickedShipsArr);

      return {
        ...state,
        pickedStarships: [...pickedShipsArr]
      };

    default:
      return state;
  }
};

export default starshipsReducer;
