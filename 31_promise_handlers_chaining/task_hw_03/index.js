export const delay = val => {
  const pr = new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, val),
  );
  return pr;
};

delay(300).then(() => console.log('Done'));
// строка 'Done' должна появиться в консоли через 3 секунды

// const serverResponsePromise = new Promise(resolve => {
//   const serverResponse = {
//     ok: true,
//     json() {
//       return Promise.resolve({
//         name: 'John',
//         age: 20,
//       });
//     },
//   };
//   resolve(serverResponse);
// });

// /*
//  * допиши первый обработчик, чтобы во второй попал объект пользователя
//  */

// serverResponsePromise
//   .then(response => {
//     return response.json();
//   })
//   .then(result => {
//     console.log(result); // { name: 'John', age: 20 }
//   });

// console.log(
//   '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
// );
