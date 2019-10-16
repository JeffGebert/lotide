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




assertEqual(eqObjects({a:"b",b:"c"}, {a:"b",b:"d"}),false);
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 

