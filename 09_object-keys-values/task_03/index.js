'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
const getKeys = obj => Object.keys(obj).map(el => console.log(el));
// put you code here

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
