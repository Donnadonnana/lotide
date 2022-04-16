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

module.exports = findKey;