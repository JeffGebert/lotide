const eqArrays = function(x,y) {
  let length;
  let tracker;
  let similar;
  console.log(x);
  console.log(y);

  similar = true;

  if (x.length === y.length) {
    length = x.length;
    for (tracker === 0; tracker <= length; tracker++) {
      if (x[tracker] !== y[tracker]) {
        similar = false;
      }
    }

  } else {
    similar = false;
  }
  return similar;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
 
  itemsToRemove.forEach(element => {
    
    for (let i = source.length - 1; i--;) {
      if (source[i] === element) source.splice(i, 1);
    }
    
  });
  console.log(source);
  return source;

};

without([1,2,3],[1,2]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3],[1,2]),[3]);
assertArraysEqual(without(["1",2,3],["1"]),[2,3]);
