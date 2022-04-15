
const eqArrays = require('./test/assertArrayTest');
const assertArraysEqual = require('./test/assertArrayTest');

const tail = function (elements) {
  elements.shift();
  return elements;
}


assertArraysEqual(tail([1, 2, 3, 4, 45]), [2, 3, 4, 45]);
