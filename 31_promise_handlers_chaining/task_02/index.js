const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(value => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    });

const p = asyncCalculator(4);

// p.then(value => console.log(value));
// p.then(value => {
//   const result = value * 2;
//   console.log(`Doubled value: ${result}`);
//   return result;
// });
// p.then(value => {
//   const result = value * 2;
//   console.log(`Doubled value: ${result}`);
//   return result;
// });
// const asyncCalculator = num => {
//   const pr = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(num);
//     }, 500);
//   });
//   return pr;
// };
