const createArrayOfFunctions = num => {
  let arr = [];
  if (num === undefined) {
    // console.log('undef');
    return arr;
  } else if (isNaN(num)) {
    // console.log('not num');
    return null;
  }
  if (num !== 'undefined') {
    for (let i = 0; i < num; i += 1) {
      arr[i] = function () {
        return i;
      };
    }
  }
  return arr;
};

console.log(createArrayOfFunctions());
