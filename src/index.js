const { criteriaMatrix } = require("./dataExamples/criteriaMatrix.js");
const { alternativesMatrix } = require("./dataExamples/alternativesMatrix.js");
const { fuzzyAHP } = require("./fuzzyAHP/fuzzyAHP.js");
// Example of usage of fuzzyAHP
const results = fuzzyAHP(criteriaMatrix, alternativesMatrix);
console.log(results);
