const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4, 45] for [1, 2, 3, 4, 45]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 45]), [2, 3, 4, 45]);
  });  
});


