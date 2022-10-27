const getTotalRevenue = transactions =>
  transactions.map(val => val.amount).reduce((acc, val) => val + acc, 0);

// put your code here
// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);

// const actions = transactions.map(val => val.amount);
// return actions.reduce((acc, val) => val + acc, 0);
