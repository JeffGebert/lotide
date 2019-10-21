// FUNCTION IMPLEMENTATION

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

module.exports = eqArrays;
