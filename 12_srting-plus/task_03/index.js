const cleanTransactionsList = arrInput =>
  arrInput
    .map(val => val.toString().trim())
    .filter(Number)
    .map(val => '$' + Number.parseFloat(val).toFixed(2));

const arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(arr));

// const cleanTransactionsList = arrInput => {
//   let result = arrInput.map(val => val.toString().trim());
//   result = result.filter(Number);
//   result = result.map(val => Number.parseFloat(val).toFixed(2));
//   result = result.map(val => '$' + val);
//   return result;
// };
