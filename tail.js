const tail = function (elements) {
  elements.shift();
  return elements;
}

module.exports = tail;