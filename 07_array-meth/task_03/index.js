const flatArray = arr => {
  const flat = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flat.slice().sort((a, b) => a - b);
};

const numbers = [1, 10, 9, 11, [12, 3, 1, 8], 12, 3, 1, 8, 21];
console.log(flatArray(numbers));
// flatArray(arr);

// const sortDesc = numbers => numbers.slice().sort((a, b) => a - b);
// console.log(sortDesc(arr));

// console.log(sortDesc(arr));

// const flatArray = arr => {
//   // put your code here
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray;
// };
