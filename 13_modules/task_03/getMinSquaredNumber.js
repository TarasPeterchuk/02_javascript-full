export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.min(...arr.map(el => el * el));
};
