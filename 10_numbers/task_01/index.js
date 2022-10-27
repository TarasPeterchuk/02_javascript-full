const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

const array = [-10, 'a', -10, NaN];
console.log(getFiniteNumbers(array)); // ===> 10
console.log(getFiniteNumbersV2(array)); // ===> 10
console.log(getNaN(array)); // ===> 10
console.log(getNaNV2(array)); // ===> 10
console.log(getIntegers(array)); // ===> 10
