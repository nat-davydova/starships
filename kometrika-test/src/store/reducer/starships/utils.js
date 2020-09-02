import { shipsImgs } from "./config";

// *** APPLYING IMAGES TO STARSHIPS CONFIG

export const starshipConfigAddImgs = starshipConfig => {
  const starshipName = starshipConfig.name;

  starshipConfig.imgSrc = shipsImgs[starshipName];

  return starshipConfig;
};
