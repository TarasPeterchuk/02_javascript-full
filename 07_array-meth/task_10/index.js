function filterNames(arr, text) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.filter(name => {
    if (name.length > 5) return name.includes(text);
  });
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
// return arr.filter(name => name.includes(text));
