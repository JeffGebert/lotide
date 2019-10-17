const eqArrays = function(x,y) {
  let length;
  let tracker;
  let similar;


  similar = true;

  if (x.length === y.length) {
    length = x.length;
    for (tracker = 0; tracker <= length; tracker++) {
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


const findKey = function(object, callback) {
  let item;

  for (item in object) {
  
    if (callback(object[item])) {
      return item;
    }
  }

};


assertArraysEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma"); // => "noma"