// export const sum = (a, b) => a + b;
// const sum2 = a => b => a + b;
// // console.log(sum2(2)(3));

// export const mult = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

export const mult = a => b => a * b;
export const twice = a => mult(a)(2);
export const triple = a => mult(a)(3);
console.log(mult(3)(5));
console.log(twice(3));
