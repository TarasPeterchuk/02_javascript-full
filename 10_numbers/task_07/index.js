'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => [
  Math.floor(num * Math.pow(10, prec)) / Math.pow(10, prec),
  Math.trunc(num * Math.pow(10, prec)) / Math.pow(10, prec),
  Math.ceil(num * Math.pow(10, prec)) / Math.pow(10, prec),
  Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec),
  Number(num.toFixed(prec)),
];

// examples
console.log(superRound(11.12556, 4)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 2)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
