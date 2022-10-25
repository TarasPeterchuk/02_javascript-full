getSpecialNumbers;
function getSpecialNumbers(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

// examples
getSpecialNumbers([1, 10, 9, 11]); // ==> [4, 1, 11]
getSpecialNumbers(10, 12, 14); // ==> null
getSpecialNumbers([1]); // ==> [1, 1, 1]
