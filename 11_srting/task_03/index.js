const splitString = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPos = 0;
  while (text.length % len !== 0) {
    text += '.';
  }
  while (true) {
    const chunk = text.substr(startPos, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0] + chunk.slice(1));
    startPos += len;
  }
  // while (strArr[strArr.length - 1].length < 4) {
  //   strArr[strArr.length - 1] += '.';
  // }
  return strArr;
};

console.log(splitString('abaaasasasc', 6));
