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
  const result = inputArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return result;
}

module.exports = {
  reverseArray,
  transposeArray,
  multiplyArrayElements,
  addArrayElements,
};
