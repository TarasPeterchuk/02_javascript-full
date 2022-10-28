import getMinSquaredNumber from './getMinSquaredNumber';
it('shold get square numbers if empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(10);
});
it('shold get square numbers if string', () => {
  const result = getMinSquaredNumber('3');
  expect(result).toEqual(9);
});
it('shold get square numbers', () => {
  const result = getMinSquaredNumber([1, 2, 3]);
  expect(result).toEqual(1);
});
