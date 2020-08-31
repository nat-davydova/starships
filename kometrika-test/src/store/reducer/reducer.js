import * as actionTypes from "../actions/actionTypes";

import { shipsImgs } from "./config";

const initState = {
  starships: [],
  isError: false,
  errorTxt: ""
};

const starshipConfigAddImgs = starshipConfig => {
  const starshipName = starshipConfig.name;

  starshipConfig.imgSrc = shipsImgs[starshipName];

  return starshipConfig;
};

const _starshipsFullData = (criteriaArr, shipsArr) => {
  const fullData = {};

  for (let criteria of criteriaArr) {
    const valuesArr = [];

    shipsArr.forEach(elem => {
      valuesArr.push(elem[criteria]);
    });

    fullData[criteria] = valuesArr;
  }

  return fullData;
};

const starshipsCriteriaMinMax = (criteriaArr, shipsArr) => {
  const fullData = _starshipsFullData(criteriaArr, shipsArr);

  const minMaxVals = {};

  for (const criteria in fullData) {
    if (
      criteria === "cost_in_credits" ||
      criteria === "length" ||
      criteria === "crew" ||
      criteria === "passengers" ||
      criteria === "cargo_capacity" ||
      criteria === "hyperdrive_rating" ||
      criteria === "MGLT"
    ) {
      const dataArr = [];
      fullData[criteria].forEach(elem => {
        elem = elem
          .toString()
          .split(",")
          .join("");
        if (!isNaN(parseFloat(elem))) {
          dataArr.push(elem);
        }
      });

      const min = Math.min(...dataArr);
      const max = Math.max(...dataArr);

      minMaxVals[criteria] = [min, max];
    } else if (criteria === "max_atmosphering_speed") {
      const dataArr = [];
      fullData[criteria].forEach(elem => {
        elem = elem.toString().split("km");
        if (!isNaN(parseFloat(elem[0]))) {
          dataArr.push(parseFloat(elem[0]));
        }
      });

      const min = Math.min(...dataArr);
      const max = Math.max(...dataArr);

      minMaxVals[criteria] = [min, max];
    } else if (criteria === "consumables") {
      const dataArr = fullData[criteria].map(elem => {
        const [numVal, units] = elem.split(" ");
        let newNumVal = parseInt(numVal);

        if (units === "week" || units === "weeks") {
          newNumVal *= 7;
        } else if (units === "month" || units === "months") {
          newNumVal *= 30;
        } else if (units === "year" || units === "years") {
          newNumVal *= 365;
        }

        return newNumVal;
      });

      const min = Math.min(...dataArr);
      const max = Math.max(...dataArr);

      minMaxVals[criteria] = [min, max];
    }
  }

  console.log(minMaxVals);
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STARSHIPS_SUCCESS:
      const starships = state.starships.concat(action.payload.config);

      const starshipsWithImgs = starships.map(elem =>
        starshipConfigAddImgs(elem)
      );

      return {
        ...state,
        isError: false,
        errorTxt: "",
        starships: starshipsWithImgs
      };

    case actionTypes.STARSHIPS_ERROR:
      const errorTxt = action.payload.errorTxt;

      return {
        ...state,
        isError: true,
        errorTxt: errorTxt
      };

    case actionTypes.STARSHIPS_MINMAX:
      const criteriaArr = action.payload.criteriaArr;

      starshipsCriteriaMinMax(criteriaArr, state.starships);

      return state;

    default:
      return state;
  }
};

export default reducer;
