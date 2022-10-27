'use strict';

/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  if (Math.ceil(from) - Math.floor(to) > 0) {
    return null;
  }
  return Array(length)
    .fill(undefined)
    .map(() => Math.round(Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.ceil(from)));
};

// const getRandomNumbers = (length, from, to) => {
//   let arr = Array(length)
//     .fill(undefined)
//     .map(Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.ceil(from));
//   return arr;
// };

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
