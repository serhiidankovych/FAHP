const { criteriaMatrix, alternativesMatrix } = require("./data.js");
function reverseArray(inputArray) {
  const reversedArray = [...inputArray].reverse();
  return reversedArray;
}
function transposeArray(array) {
  const rows = array.length;
  const columns = array[0].length;
  const transposedArray = [];
  for (let j = 0; j < columns; j++) {
    transposedArray[j] = [];
    for (let i = 0; i < rows; i++) {
      transposedArray[j][i] = array[i][j];
    }
  }
  return transposedArray;
}
function multiplyArrayElements(inputArray) {
  const result = inputArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return result;
}
function addArrayElements(inputArray) {
  // Use the reduce() method to add all elements in the array
  const result = inputArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return result;
}

function calculateGeometricMean(matrix) {
  const geometricMean = [];
  const transposedMatrix = transposeArray(matrix);
  transposedMatrix.forEach((comparisonValues) => {
    const multipledComparisonValues = multiplyArrayElements(comparisonValues);
    const powedComparisonValues = Math.pow(
      multipledComparisonValues,
      1 / comparisonValues.length
    );
    geometricMean.push(powedComparisonValues);
  });
  return geometricMean;
}
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

const geometricMeans = {};
for (const criterion in criteriaMatrix) {
  geometricMeans[criterion] = calculateGeometricMean(criteriaMatrix[criterion]);
}
const vectorSummation = calculateVectorSummation(geometricMeans);

const inversionVector = calculateInversionVector(vectorSummation);
console.log(inversionVector);

const fuzzyWeights = calculateFuzzyWeights(geometricMeans, inversionVector);
const defuzzificatedValues = useCentreOfAreaMethod(fuzzyWeights);
console.log(defuzzificatedValues);
const normalizedWeights = normalizeWeight(defuzzificatedValues);
console.log(normalizedWeights);
