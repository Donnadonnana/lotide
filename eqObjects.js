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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  let result = true;
  let obj1Length = Object.keys(object1).length;
  let obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) {
    return false;
  } 

  Object.keys(object1).forEach(function (key) {
    if (object1[key] !== object2[key]) {
      result = false;
    }
    })
  return result;
}
const ab = { a: "6", b: "2" };
const ba = { b: "2", a: "6" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false