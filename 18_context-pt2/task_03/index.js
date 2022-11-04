function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem ** 2;
  }, 0);
}
console.log(sumOfSquares(1, 2, 3));

// let sum = 0;
// for (let i = 0; i < arguments.length; i += 1) {
//   sum += arguments[i] ** 2;
// }
// return sum;

// function sumOfSquares() {
//   return [].reduce.call(
//     arguments,
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   );
// }
