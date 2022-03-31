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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual,expected) === true) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};