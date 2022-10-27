function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

console.log(reverseArray([10, 10, 10]));
console.log(reverseArray([0, 0, 1, 3]));
console.log(reverseArray([-1, 0, -1, 1]));
