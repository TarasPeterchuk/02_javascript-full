const getTotalPrice = arr => '$' + Math.floor(arr.reduce((total, val) => total + val) * 100) / 100;

const array = [234, 11.55, 11.68, 11.13, 11.1];
console.log(getTotalPrice(array)); // ===> 10
