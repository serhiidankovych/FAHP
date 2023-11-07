const {
  calculateGeometricMeans,
  calculateVectorSummation,
  calculateInversionVector,
  calculateFuzzyWeights,
  useCentreOfAreaMethod,
  normalizeWeight,
  calculateAlternativeScores,
} = require("../fuzzyLogic/fuzzyLogic.js");

function fuzzyAHP(criteriaMatrix, alternativesMatrix) {
  //Determining weights of criteria
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

  // Determining the weight of alternatives in relation to the criteria
  const alternativesNormalizedWeights = Object.keys(alternativesMatrix).reduce(
    (result, criteria) => {
      const alternativeMatrix = alternativesMatrix[criteria];
      const alternativeGeometricMeans =
        calculateGeometricMeans(alternativeMatrix);
      const alternativeVectorSummation = calculateVectorSummation(
        alternativeGeometricMeans
      );
      const alternativeInversionVector = calculateInversionVector(
        alternativeVectorSummation
      );
      constalternativeFuzzyWeights = calculateFuzzyWeights(
        alternativeGeometricMeans,
        alternativeInversionVector
      );
      const alternativeDefuzzificatedValues = useCentreOfAreaMethod(
        alternativeFuzzyWeights
      );
      result[criteria] = normalizeWeight(alternativeDefuzzificatedValues);
      return result;
    },
    {}
  );

  //Resulting scores of each alternative
  const fuzzyAHP = {
    criteriaNormalizedWeights,
    alternativesNormalizedWeights,
    alternativeScores: calculateAlternativeScores(
      alternativesNormalizedWeights,
      criteriaNormalizedWeights
    ),
  };

  return fuzzyAHP;
}

module.exports = { fuzzyAHP };
