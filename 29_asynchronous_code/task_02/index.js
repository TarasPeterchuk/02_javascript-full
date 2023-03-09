'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */

export const pinger = (count, period) => {
  let i = count;
  console.log('ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('ping');
    } else {
      clearInterval(interval);
    }
  }, period);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, count * period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval

// export const pinger = (count, period) => {
//   const interval = setInterval(() => {
//     console.log('ping');
//   }, period);

//   setTimeout(() => {
//     clearInterval(interval);
//   }, count * period);
// };
