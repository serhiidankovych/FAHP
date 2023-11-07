# Fuzzy Analytic Hierarchy Process (FAHP)

## Overview

This repository contains a JavaScript implementation of the Fuzzy Analytic Hierarchy Process (FAHP) algorithm. FAHP is a decision-making technique that extends the Analytic Hierarchy Process (AHP) by incorporating fuzzy logic. It is widely used in various fields such as engineering, economics, and management for handling decision-making problems involving imprecise or uncertain information.

## Usage

### Here's an example of how to use the FuzzyAHP library in your project:

```javascript
const { criteriaMatrix } = require("./dataExamples/criteriaMatrix.js");
const { alternativesMatrix } = require("./dataExamples/alternativesMatrix.js");
const { fuzzyAHP } = require("./fuzzyAHP/fuzzyAHP.js");

const results = fuzzyAHP(criteriaMatrix, alternativesMatrix);
console.log(results);
```

### Pair wise comparison matrix of the criteria (C1,C2,C3,C4,C5...)

| C/C            |C1       | C2      | C3      | C4       |       C5  |
|-------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| C1          | (1, 1, 1)         | (2, 3, 4)         | (3, 4, 5)         | (1, 1, 1)         | (1/3, 1/2, 1/1)   |
|  C2          | (1/4, 1/3, 1/2)   | (1, 1, 1)         | (1, 2, 3)         | (1/4, 1/3, 1/2)   | (1, 1, 1)         |
| C3        | (1/5, 1/4, 1/3)   | (1/3, 1/2, 1/1)   | (1, 1, 1)         | (1/6, 1/5, 1/4)   | (1/4, 1/3, 1/2)   |
|  C4            | (1, 1, 1)         | (2, 3, 4)         | (4, 5, 6)         | (1, 1, 1)         | (1/3, 1/2, 1/1)   |
|  C5    | (1, 2, 3)         | (1, 1, 1)         | (2, 3, 4)         | (1, 2, 3)         | (1, 1, 1)         |

```javascript
const criteriaMatrix = {
  C1: [
    [1, 1, 1],
    [2, 3, 4],
    [3, 4, 5],
    [1, 1, 1],
    [1 / 3, 1 / 2, 1 / 1],
  ],
  // ... other pair wise comparison matrix of the criteria
};

```

### Pair wise comparison matrix of the alternatives(A1,A2,A3...) by criteria (C1,C2,C3,C4,C5...)

| Company   | A1      | A2      | A3      |
|-----------|-------------------|-------------------|-------------------|
| A1 | (1, 1, 1)         | (1, 2, 3)         | (3, 4, 5)         |
| A2 | (1/3, 1/2, 1/1)   | (1, 1, 1)         | (2, 3, 4)         |
| A3 | (1/5, 1/4, 1/3)   | (1/4, 1/3, 1/2)   | (1, 1, 1)         |

```javascript
const alternativesMatrix = {
  C1: {
    A1: [
      [1, 1, 1],
      [1, 2, 3],
      [3, 4, 5],
    ],
    A2: [
      [1 / 3, 1 / 2, 1],
      [1, 1, 1],
      [2, 3, 4],
    ],
    // ... other alternatives for C1...
  },
  // ... other pair wise comparison matrix of the cof the alternatives by criteria
};
```

### Result of fuzzyAHP

```javascript
{
  criteriaNormalizedWeights: [
    0.2534073392477892,
    0.13040267998489025,
    0.07086028209185775,
    0.26455386266193665,
    0.2807758360135261
  ],
  alternativesNormalizedWeights: {
    C1: [ 0.5428604816737826, 0.3337402635447386, 0.1233992547814787 ],
    C2: [ 0.10731533304998214, 0.2631862970222221, 0.6294983699277957 ],
    C3: [ 0.2509583269165383, 0.5798631986144785, 0.169178474468983 ],
    C4: [ 0.3865862916166412, 0.3865862916166412, 0.2268274167667176 ],
    C5: [ 0.2414745123166331, 0.14542439029497914, 0.6131010973883877 ]
  },
  alternativeScores: [ 0.3394151198865193, 0.30308625194140054, 0.35749862817208017 ]
}
```

## License

This FAHP is licensed under the MIT License. You are free to use, modify, and distribute the code according to the terms of the license. See the LICENSE file for more details.
