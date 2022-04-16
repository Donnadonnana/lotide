
const findKeyByValue = (obj, propName) => {

  let result = undefined;
  Object.keys(obj).forEach(function (key) {
    if (propName === obj[key]) {
      result = key;
    }
  })
  return result;
}

module.exports = findKeyByValue;