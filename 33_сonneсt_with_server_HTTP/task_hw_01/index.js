/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = arg => {
  // put you code here
  const promiseFromFunc = new Promise(resolve => {
    resolve(arg);
  });
  return promiseFromFunc;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
