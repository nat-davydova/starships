import { shipsImgs } from "./config";

// *** APPLYING IMAGES TO STARSHIPS CONFIG

export const starshipConfigAddImgs = starshipConfig => {
  const starshipName = starshipConfig.name;

  starshipConfig.imgSrc = shipsImgs[starshipName];

  return starshipConfig;
};

// find an object element and index of the element in an array by prop and value
export const findArrayElemObj = (array, prop, val) => {
  let result = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i][prop] === val) {
      result = [array[i], i];
      break;
    }
  }

  return result;
};
