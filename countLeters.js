// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`Assertion failed`)
//   } else {
//     console.log(`Assertion Passed`)
//   }
// };

// const eqArrays = function (arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (var i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArrayEqual = function (array1, array2) {
//   if (eqArrays(array1, array2) === false) {
//     console.log(`Assertion failed`)
//   } else {
//     console.log(`Assertion Passed`)
//   }
// };

const countLetters = function (str) {
  let result = {};
  for (let letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  // Object.keys(result) => ['a', 'b', 'c', ....]
  Object.keys(result).forEach(function (key) {
    console.log(`${key}: ${result[key]}`);
  })
}

countLetters('aaaaabbbbbbbcdf')
