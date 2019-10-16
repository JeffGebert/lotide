const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};




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


const letterPositions = function(stringToCount) {
  let returnObject = {};
  let string = stringToCount.split(" ");
  string = string.join("").split("");




  for (x=0; x < string.length; x++) {


  if (returnObject[string[x]]) {
      returnObject[string[x]].push(x);
    } else {
      returnObject[string[x]] = [x];
    }

  }
  console.log(returnObject);
  return returnObject;

    
    


};


assertArraysEqual(letterPositions("hello").e, [1]);


