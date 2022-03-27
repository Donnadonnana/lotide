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

const flatten = function (arrayWithElements) {
  let flattenedArray = [];
  for (var i = 0; i < arrayWithElements.length; i++) {
    const currentItem = arrayWithElements[i];
    // if it is an array
    if (Array.isArray(currentItem)) {
      currentItem.forEach((item) => {
        flattenedArray.push(item);
      })
    } else {
      flattenedArray.push(currentItem);
    }
  }
  return flattenedArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));