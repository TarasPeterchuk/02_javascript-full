const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

// console.log(promiseNumber1.then(val => console.log(val)));
/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

export const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);
console.log(resultPromise);
// (...promisesInArg) =>
//   Promise.all(promisesInArg)
//     .then(numbers => {
//       return numbers;
//     })

resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });

// export const resultPromise = (...promisesInArg) => {
//   return Promise.all(promisesInArg)
//     .then(numbers => {
//       return numbers;
//     })
//     .catch(() => Promise.reject(new Error("Can't calculate")));
// };

// export const resultPromise = (...promisesInArg) => {
//   return Promise.all(promisesInArg).then(numbers => {
//     return numbers;
//   });
// };

// resultPromise(promiseNumber1, promiseNumber2, promiseNumber3)
//   .then(numbersList => {
//     // console.log(numbersList);
//     const sum = numbersList.reduce((acc, num) => acc + num, 0);
//     return sum;
//   })
//   .then(result => {
//     console.log(result); // 98
//   });

// export const resultPromise = (...promisesInArg) =>
//   Promise.all(promisesInArg)
//     .then(numbersList => {
//       console.log(numbersList);
//       const sum = numbersList.reduce((acc, num) => acc + num, 0);
//       return sum;
//     })
//     .then(result => {
//       console.log(result); // 98
//     });
// resultPromise(promiseNumber1, promiseNumber2, promiseNumber3);

// export const resultPromise = (...promisesInArg) =>
//   Promise.all(promisesInArg)
//     .then(numbers => {
//       new Promise(resolve => {
//         console.log(numbers);
//         resolve(numbers);
//       });
//     })
//     .then(numbersList => {
//       console.log(numbersList);
//       const sum = numbersList.reduce((acc, num) => acc + num, 0);
//       return sum;
//     })
//     .then(result => {
//       console.log(result); // 98
//     });
