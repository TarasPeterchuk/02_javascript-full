const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);

console.log(getSpecialNumbers([1, 10, 9, 11, 12, 3, 1, 8, 21]));

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i]);
//     }
//   }
//   return specialNumbers;
// };

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   function checkIfSpecialNumber(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   }
//   numbers.forEach(checkIfSpecialNumber);
//   return specialNumbers;
// };

// const getSpecialNumbers = numbers => {
//   let specialNumbers = [];
//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };
