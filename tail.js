// FUNCTION IMPLEMENTATION
let newArray = [];
let x;

const tail = function(array) {
  for (x = 1; x <= array.length; x++) {
    newArray.push(array[x]);
    return newArray;
  }

};



module.exports = tail;