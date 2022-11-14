'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};

console.log(requestUserData('userid777'));
// requestUserData('id').then(data => console.log(data));
// requestUserData('broken')
//   .catch(error => {
//     console.log(error);
//     throw new Error('Error');
//   })
//   .then(data => console.log(data))
//   .finally(() => console.log('finally'));
// requestUserData('broken').catch(error => console.log(error));
// requestUserData('userid777');
