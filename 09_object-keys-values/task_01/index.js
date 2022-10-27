const getAdults = usersObj =>
  Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
// const usersArray = Object.entries(usersObj);
// const filteredUsersArray = usersArray.filter(user => user[1] >= 18);
// const usersName = filteredUsersArray.map(user => user[0]);
// return usersName;

const user = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
// console.log(getAdults(user));
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(getAdults(user));
