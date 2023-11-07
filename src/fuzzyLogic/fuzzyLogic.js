const {
  reverseArray,
  transposeArray,
  multiplyArrayElements,
  addArrayElements,
} = require("../utils/fuzzyUtils.js");

function calculateGeometricMeans(criteriaMatrix) {
  const geometricMeans = {};

  for (const key in criteriaMatrix) {
    geometricMeans[key] = [];

    const transposedMatrix = transposeArray(criteriaMatrix[key]);

    transposedMatrix.forEach((comparisonValues) => {
      const multipledComparisonValues = multiplyArrayElements(comparisonValues);
      const powedComparisonValues = Math.pow(
        multipledComparisonValues,
        1 / comparisonValues.length
      );
      geometricMeans[key].push(powedComparisonValues);
    });
  }

  return geometricMeans;
}

// function calculateAlternativesGeometricMeans(alternativesMatrix) {
//   const geometricMeans = [];

//   const transposedMatrix = transposeArray(alternativesMatrix);

//   transposedMatrix.forEach((comparisonValues) => {
//     const multipledComparisonValues = multiplyArrayElements(comparisonValues);
//     console.log(comparisonValues);
//     const powedComparisonValues = Math.pow(
//       multipledComparisonValues,
//       1 / comparisonValues.length
//     );
//     geometricMeans.push(powedComparisonValues);
//     console.log("__________");
//   });

//   return geometricMeans;
// }
function calculateVectorSummation(geometricMeans) {
  const transposedMatrix = transposeArray(Object.values(geometricMeans));
  const vectorSummation = [];
  transposedMatrix.forEach((comparisonValues) => {
    const summation = addArrayElements(comparisonValues);
    vectorSummation.push(summation);
  });
  return vectorSummation;
}
function calculateInversionVector(matrix) {
  const inversionVector = [];
  const reverseMatrix = reverseArray(matrix);
  reverseMatrix.forEach((comparisonValues) => {
    const inversion = 1 / comparisonValues;
    inversionVector.push(inversion);
  });
  return inversionVector;
}
function calculateFuzzyWeights(geometricMeans, inversionVector) {
  const fuzzyWeights = [];
  Object.values(geometricMeans).forEach((geometricMean, index) => {
    const fuzzyWeight = geometricMean.map(
      (value, index) => value * inversionVector[index]
    );
    fuzzyWeights.push(fuzzyWeight);
  });
  return fuzzyWeights;
}
function useCentreOfAreaMethod(matrix) {
  const defuzzificatedValues = [];
  matrix.forEach((fuzzyWeight, index) => {
    const summation = addArrayElements(fuzzyWeight);
    defuzzificatedValues.push(summation / 3);
  });
  return defuzzificatedValues;
}
function normalizeWeight(defuzzificatedValues) {
  const normalizedWeights = [];
  const defuzzificatedValuesSum = addArrayElements(defuzzificatedValues);
  defuzzificatedValues.forEach((value, index) => {
    const normalizedWeight = value / defuzzificatedValuesSum;
    normalizedWeights.push(normalizedWeight);
  });
  return normalizedWeights;
}

module.exports = {
  calculateGeometricMeans,

  calculateVectorSummation,
  calculateInversionVector,
  calculateFuzzyWeights,
  useCentreOfAreaMethod,
  normalizeWeight,
};
