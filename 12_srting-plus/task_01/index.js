const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPos = 0;
  while (true) {
    const chunk = text.substr(startPos, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPos += len;
  }
  return strArr.join('\n');
};

console.log(splitText('abcd efgh', 2));
