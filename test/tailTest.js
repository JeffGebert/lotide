const assert = require('chai').assert;
const tail   = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 3 for original array", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns equal for passing through ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
