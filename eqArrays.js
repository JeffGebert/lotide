// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(x,y) {
  var length;
  var tracker;
  var similar;
  console.log(x);
  console.log(y);

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



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
