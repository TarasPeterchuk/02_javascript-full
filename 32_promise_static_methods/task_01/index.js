// asyncSum(asyncNumber1, asyncNumber2, ...),

const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncSum1 = getValueWithDelay(56, 1000);
const asyncSum2 = getValueWithDelay('a', 2000);
const asyncSum3 = getValueWithDelay(1, 3000);

// getValueWithDelay(56, 1000).then(value => console.log(value));
const getsum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => {
      console.log(numbers);
      return getsum(numbers);
    })
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asyncSum1, Promise.reject(new Error('aaa')), asyncSum3).then(result =>
  console.log(result),
);
asyncSum(asyncSum1, asyncSum2, asyncSum3).then(result => console.log(result));
