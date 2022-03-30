const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion failed`)
  } else {
    console.log(`Assertion Passed`)
  }
};

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
const findKeyByValue = (obj, propName) => {
  // const result = {};
  // for (let name of Object.keys(objectName)) {
  //   if (propName === objectName[name]) {
  //     Object.keys(result) = Object.keys(objectName[name]);
  //   } else {
  //     return undefined;
  //   }
  //   return result;
  // }
  let result = undefined;
  Object.keys(obj).forEach(function (key) {
    if (propName === obj[key]) {
      result = key;
    }
  })
  return result;
}


//test, have to be passed
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);