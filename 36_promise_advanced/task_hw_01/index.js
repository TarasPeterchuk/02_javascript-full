'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const fetchUserData = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

const getUserBlog = async users => {
  const userData = await fetchUserData(users);
  return userData.blog;
};

export const getUsersBlogs = users => {
  const result = Promise.all(
    users.map(el => {
      return new Promise(resolve => {
        resolve(getUserBlog(el));
      });
    }),
  );
  return result;
};

getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
