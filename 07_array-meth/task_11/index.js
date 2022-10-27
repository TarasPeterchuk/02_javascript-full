const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((sum, element) => sum + element, 0) / arr.length;
};
console.log(arrAverage([2, 5, 6, 3]));
