/******************
 * YOUR CODE HERE *
 ******************/
function repeat(str,times) {
  let string = '';
  while (times > 0){
    string += str; times --;
  }return string;
}console.log(repeat('omg ', 3))

function includes (arr, hold){
  for (let i = 0; i < arr.length; i ++){
    if(arr[i] === hold){
      return true;}
  }
return false;
}

function slice (str,num,num1){
let sprung = '';//empty string
if(num === undefined && num1 === undefined){//.slice(no value,no value) so it just returns string.
return str;
} if(num >= 0 && num1 === undefined){//.slice(value,no value) returns string from that index on.
for(i = 0; i < str.length; i ++){
  sprung += str[i];
}return str[i];
}
}


function join (arr) {
  const array = [];
  while(arr > 0){
    return array
  }

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
