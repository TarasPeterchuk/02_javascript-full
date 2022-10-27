function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((num, index) => (num % 2 === 0 ? num + delta : num));
}
console.log([2, 5, 6, 8, 11, 9, 4]);
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

// return arr.map((num, index) => {
//   if (index % 2 == 0) {
//     return num + delta;
//   } else {
//     return num;
//   }
// });
