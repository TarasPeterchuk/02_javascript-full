export const getAdults = obj => {
  const objResult = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      objResult[key] = obj[key];
    }
  }
  return objResult;
};
