const { criteriaMatrix } = require("./dataExamples/criteriaMatrix.js");
const { alternativesMatrix } = require("./dataExamples/alternativesMatrix.js");
const {
  calculateGeometricMeans,

  calculateVectorSummation,
  calculateInversionVector,
  calculateFuzzyWeights,
  useCentreOfAreaMethod,
  normalizeWeight,
} = require("./fuzzyLogic/fuzzyLogic.js");

function fuzzyAHP(criteriaMatrix, alternativesMatrix) {
  const fuzzyAHP = {};

  const criteriaGeometricMeans = calculateGeometricMeans(criteriaMatrix);
  const criteriaVectorSummation = calculateVectorSummation(
    criteriaGeometricMeans
  );
  const criteriaInversionVector = calculateInversionVector(
    criteriaVectorSummation
  );
  const criteriaFuzzyWeights = calculateFuzzyWeights(
    criteriaGeometricMeans,
    criteriaInversionVector
  );
  const criteriaDefuzzificatedValues =
    useCentreOfAreaMethod(criteriaFuzzyWeights);
  const criteriaNormalizedWeights = normalizeWeight(
    criteriaDefuzzificatedValues
  );
  console.log(criteriaNormalizedWeights);
  alternativesGeometricMeans = {};

  for (const key in alternativesMatrix) {
    alternativesGeometricMeans[key] = calculateGeometricMeans(
      alternativesMatrix[key]
    );
  }
  console.log(alternativesGeometricMeans);
  return fuzzyAHP;
}

fuzzyAHP(criteriaMatrix, alternativesMatrix);
