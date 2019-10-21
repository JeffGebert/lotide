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
module.exports = middle;
