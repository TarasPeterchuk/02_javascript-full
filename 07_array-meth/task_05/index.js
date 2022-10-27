'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(num => num * num);
}

// examples
console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]

// if (!Array.isArray(arr)) {
//   return null;
// }
// const square = [];
// arr.forEach(num => square.push(num * num));
// console.log(square);
// return square;
