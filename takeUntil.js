const eqArrays = function(x,y) {
  var length;
  var tracker;
  var similar;


  similar = true;

  if (x.length === y.length){
    length = x.length;
    for (tracker=0; tracker <= length; tracker++){
      if(x[tracker] !== y[tracker]){
        similar = false;
      }
    }

  }else{
    similar = false;
  }
return similar;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

let numbers = [4,4,4,8,4,6,7,1,5,7,8];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    
    if (!callback(item)) { //very important because callback(item) executes the function which returns true or false.  No need to set to variable.
      results.push(item);
      
    } else {
      break;
    }
  }
  return results;
}

const results1 = takeUntil(numbers, number => number!==4);

console.log(results1);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results3 = takeUntil(data1, x => x < 0);
console.log(results3);

assertArraysEqual(results1, [4, 4, 4]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [1, 2, 5, 7, 2]);
