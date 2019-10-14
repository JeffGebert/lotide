// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️️❤️️❤️️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

let newArray = [];
let x;

const tail = function(array) {
  for (x = 1; x <= array.length; x++) {
    newArray.push(array[x]);
    return newArray;
  }

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!