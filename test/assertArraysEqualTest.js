const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');


middle([1,2]);
middle([1,2,3]);
middle([1,2,3,4]);
console.log(middle([1,2,3]));



assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); 