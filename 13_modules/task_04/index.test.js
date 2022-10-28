import { calc } from './calculator.js';

it('should check +', () => {
  const result = calc('2 + 7');
  expect(result).toEqual('2 + 7 = 9');
});
it('should check -', () => {
  const result = calc('2 - 7');
  expect(result).toEqual('2 - 7 = -5');
});
it('should check *', () => {
  const result = calc('2 * 7');
  expect(result).toEqual('2 * 7 = 14');
});
it('should check /', () => {
  const result = calc('2 / 7');
  expect(result).toEqual('2 / 7 = 0.2857142857142857');
});
it('should check if not string', () => {
  const result = calc(2 + 7);
  expect(result).toEqual(null);
});
