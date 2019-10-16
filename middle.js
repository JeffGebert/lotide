`aconst eqArrays = function(x,y) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(x) {
  let length = x.length;
  let newArray = [];

  if (length <= 2) {
    newArray = [];
  } else if ((length % 2) === 0) {
    newArray.push(x[(length/2)-1], x[(length/2)]);
  } else {

    newArray.push(x[Math.floor(length/2)]);
  }

  return newArray;

}
middle([1,2]);
middle([1,2,3]);
middle([1,2,3,4]);
console.log(middle([1,2,3]));



assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
