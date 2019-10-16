const eqObjects = function(object1, object2) {
  let similar = true;


  for (const item in object1) {
   
    if (Array.isArray(object1[item])) {
      if(eqArrays(object1[item], object2[item])=== true){
        similar = true;
      } else {
        similar = false;
      }

    }
    else if(object1[item]!==object2[item]){
      similar = false;
    }
  } 


  for (const item in object2) {
    if (Array.isArray(object2[item])) {
      if(eqArrays(object1[item], object2[item])=== true){
        similar = true;
      } else {
        similar = false;
      }

    }

    else if(object2[item]!==object1[item]){
      similar = false;
    }
  }

    
return similar;
};


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



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);



