const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion failed`)
  } else {
    console.log(`Assertion Passed`)
  }
};

const findKey = (obj,callback) => {
  let result = '';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++){
    const currentKey = keys[i];
    const value = obj[currentKey];
    if (callback(value)){
      result = currentKey;
      break;
    }
  }
  return result;
}




//example
const res = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(res);