const sortDesc = numbers => numbers.slice().sort((a, b) => b - a);

const arr = [1, 10, 9, 11, 12, 3, 1, 8, 21];
console.log(sortDesc(arr));
console.log(arr);

// const sortDesc = numbers => {
//   const sortedArray = numbers.sort((a, b) => b - a);
//   return sortedArray;
// };

// const sortDesc = numbers => {
//   return numbers.slice().sort((a, b) => b - a);
// };
