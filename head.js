// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion failed`)
  } else {
    console.log(`Assertion Passed`)
  }
};

const head = function (element) {
  return element[0];
}
//test
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");