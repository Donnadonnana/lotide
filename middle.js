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

const middle = function (array) {
  let middleArray = [];

  if (array.length === 1 || array.length === 2) return [];

  const isOdd = array.length % 2 === 1;
  if (isOdd) {
    const middleIndex = ((array.length + 1) / 2) - 1;
    middleArray.push(array[middleIndex])
  } else {
    const middleIndexLower = array.length / 2 - 1;
    const middleIndexHigher = middleIndexLower + 1;
    middleArray.push(array[middleIndexLower]);
    middleArray.push(array[middleIndexHigher]);
  }
  return middleArray;
}




module.exports = middle;