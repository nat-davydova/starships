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
      newDataArr.push({
        index,
        val: parseFloat(elem)
      });
    }
  });

  return newDataArr;
};

// consumables data transforming
// weeks, months, years -> to days for simpler comparison
// week -> 7 days, month -> 30 days, year -> 365 days
const _transformConsumablesData = dataArr => {
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

    return { index, val: newNumVal };
  });

  return newDataArr;
};

const findMinMax = dataArr => {
  let minVal = dataArr[0].val;
  let maxVal = dataArr[0].val;

  dataArr.forEach(({ val }) => {
    if (val < minVal) {
      minVal = val;
    } else if (val > maxVal) {
      maxVal = val;
    }
  });

  let minIndexes = [];
  let maxIndexes = [];

  dataArr.forEach(({ index, val }) => {
    if (val === minVal) {
      minIndexes.push(index);
    } else if (val === maxVal) {
      maxIndexes.push(index);
    }
  });

  return {
    minIndexes,
    maxIndexes
  };
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
    } else if (criteria === "max_atmosphering_speed") {
      dataArr = _transformNumericalData(fullData[criteria], "km");
    } else if (criteria === "consumables") {
      dataArr = _transformConsumablesData(fullData["consumables"]);
    }

    const minmax = findMinMax(dataArr);
    minMaxVals[criteria] = minmax;
  }

  return minMaxVals;
};
