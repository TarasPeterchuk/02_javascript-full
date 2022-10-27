const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
const players = {
  'John Doe': 1,
  Tom: 17,
  Bob: 18,
};

const res = Object.assign({}, players);
console.log(res);

// !!!!! task solution
const copyObj = obj => Object.assign({}, obj);
console.log(copyObj(users));
// !!!!!

const players1 = { ...players };
console.log(copyObj(players1));

const { Tom: name = 'default', ...rest } = users;
console.log(rest);
