const sum = val => {
  console.log(val);
  if (val === 1) return val;
  return val + sum(val - 1);
};
console.log(sum(4));
