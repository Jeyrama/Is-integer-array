/*
Write a function with the signature shown below:
  function isIntArray(arr) {
    return true
  }

  returns true  / True if every element in an array is an integer or a float with no decimals.
  returns true  / True if array is empty.
  returns false / False for every other input.
*/


// Solution

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

// or

Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
         isFinite(value) && 
         Math.floor(value) === value;
};

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(Number.isInteger)
}