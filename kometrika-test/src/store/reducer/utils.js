import { shipsImgs } from "./config";

// *** APPLYING IMAGES TO STARSHIPS CONFIG

export const starshipConfigAddImgs = starshipConfig => {
  const starshipName = starshipConfig.name;

  starshipConfig.imgSrc = shipsImgs[starshipName];

  return starshipConfig;
};

// *** TRANSFORMING DATA TO FIND MIN AND MAX STARSHIP CRITERIA VALUES

// adding all the data to a single object
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

// transforming plain numerical data
// (removing ',' symbols, ignoring NaN data)
// additional separator can be any units, like 'km' or 'kg' etc
const _transformNumericalData = (dataArr, additionalSeparator) => {
  const newDataArr = [];

  dataArr.forEach((elem, index) => {
    if (additionalSeparator) {
      elem = elem.split(additionalSeparator)[0];
    }

    elem = elem
      .toString()
      .split(",")
      .join("");
    if (!isNaN(parseFloat(elem))) {
      newDataArr.push({ [`${index}`]: parseFloat(elem) });
    }
  });

  return newDataArr;
};

// consumables data transforming
// weeks, months, years -> to days for simpler comparison
// week -> 7 days, month -> 30 days, year -> 365 days
export const _transformConsumablesData = dataArr => {
  const newDataArr = dataArr.map((elem, index) => {
    const [numVal, units] = elem.split(" ");
    let newNumVal = parseInt(numVal);

    if (units === "week" || units === "weeks") {
      newNumVal *= 7;
    } else if (units === "month" || units === "months") {
      newNumVal *= 30;
    } else if (units === "year" || units === "years") {
      newNumVal *= 365;
    }

    return { [`${index}`]: newNumVal };
  });

  return newDataArr;
};

export const starshipsCriteriaMinMax = (criteriaArr, shipsArr) => {
  const fullData = _starshipsFullData(criteriaArr, shipsArr);

  const minMaxVals = {};
  let dataArr = [];

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
      dataArr = _transformNumericalData(fullData[criteria]);

      // const min = Math.min(...dataArr);
      // const max = Math.max(...dataArr);
      //
      // minMaxVals[criteria] = [min, max];
    } else if (criteria === "max_atmosphering_speed") {
      dataArr = _transformNumericalData(fullData[criteria], "km");

      // const min = Math.min(...dataArr);
      // const max = Math.max(...dataArr);
      //
      // minMaxVals[criteria] = [min, max];
    } else if (criteria === "consumables") {
      dataArr = _transformConsumablesData(fullData["consumables"]);
      // const min = Math.min(...dataArr);
      // const max = Math.max(...dataArr);
      //
      // minMaxVals[criteria] = [min, max];
    }
    console.log(dataArr);
  }
  //console.log(minMaxVals);
};
