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

const flatten = function(x) {
  let newArray = [];
  x.forEach(element => {
    if (Array.isArray(element) === true) {
      element.forEach(element2 =>{
        newArray.push(element2);
      })
    } else {
      newArray.push(element);
    }
    
  });
  console.log(newArray);
  return newArray;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

flatten([[4,5],5,6,8,[9,50]]);
