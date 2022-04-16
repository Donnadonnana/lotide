

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
module.exports = flatten;