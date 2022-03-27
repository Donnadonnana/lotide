//assertArrayEqual and eqArrays function
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === false) {
    console.log(`Assertion failed`)
  } else {
    console.log(`Assertion Passed`)
  }
};

const without = function (sourceArray, itemsToRemove) {
  let newArray = [];
  for (var i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== itemsToRemove[i]) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);