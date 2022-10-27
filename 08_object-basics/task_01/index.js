const transformToObject = arr => {
  // put your code here
  const obj = {};
  arr.forEach(el => {
    obj[el] = el;
  });
  return obj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
console.log(transformToObject([]));
// const prop = 'my';
// const obj = {
//   name: 'Tom',
//   age: 12,
//   'my name': 'bob',
//   [prop + 'name']: 'value',
// };
// console.log(obj.age);
// obj.age = 21;
// console.log(obj.age);
// console.log(obj['my name']);
// console.log(obj[prop + 'name']);
