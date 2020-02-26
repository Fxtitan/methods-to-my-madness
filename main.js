/******************
 * YOUR CODE HERE *
 ******************/
function repeat(str, times) {
  return new Array(times + 1).join(str);
}// (times + 1) the length of array same as str.length
repeat('omg ', 3)
console.log(repeat('omg ',3))

function includes (arr, hold){
  for (let i = 0; i < arr.length; i ++){
    if(new Array(arr + 1).join(hold)){
      return true;}
  }return false;
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
