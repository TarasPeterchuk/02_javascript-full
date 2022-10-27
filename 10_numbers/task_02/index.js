const getParsedIntegers = arr => arr.map(el => Number.parseInt(el), []);
const getParsedIntegersV2 = arr => arr.map(el => parseInt(el), []);
const getParsedFloats = arr => arr.map(el => Number.parseFloat(el), []);
const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el), []);

const array = ['11.12asa', 11.55, '11.68ddd', 11.13, 11.1];
console.log(getParsedIntegers(array)); // ===> 10
console.log(getParsedIntegersV2(array)); // ===> 10
console.log(getParsedFloats(array)); // ===> 10
console.log(getParsedFloatsV2(array)); // ===> 10
