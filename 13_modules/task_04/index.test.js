import { calc } from './calculator.js';

it('shold check +', () => {
  const result = calc('2 + 7');
  expect(result).toEqual('2 + 7 = 9');
});
it('shold check -', () => {
  const result = calc('2 - 7');
  expect(result).toEqual('2 - 7 = -5');
});
it('shold check *', () => {
  const result = calc('2 * 7');
  expect(result).toEqual('2 * 7 = 14');
});
it('shold check /', () => {
  const result = calc('2 / 7');
  expect(result).toEqual('2 / 7 = 0.2857142857142857');
});
it('shold check if not string', () => {
  const result = calc(2 + 7);
  expect(result).toEqual(null);
});
