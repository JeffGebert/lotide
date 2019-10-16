const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(stringToCount) {
  let returnObject = {};
  let string = stringToCount.slice(" ");
  string = string.replace(/\s/g,''); 
  console.log(string);

  for (const item of string) {
    console.log(item);

    if (returnObject[item]) {
      returnObject[item] += 1;
    } else {
      returnObject[item] = 1;
    }

    
    }


console.log(returnObject)

return returnObject;


}
countLetters("lighthouse in the house")
