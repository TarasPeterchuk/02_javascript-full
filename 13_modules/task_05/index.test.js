import { reverseArray } from './task1.js';
import { withdraw } from './task2.js';
import { getAdults } from './task3.js';

it('should reverse if good', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('should reverse if text', () => {
  const result = reverseArray(1, 2, 3);
  expect(result).toEqual(null);
});
it('should reverse if empty', () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});

it('should withdwraw clients money if enough', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('should not withdwraw clients money if not enough', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
it('should do nothing if client not found', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Mike', 10);
  expect(result).toEqual(-1);
});

it('should filter not adult', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should filter not adult', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('should return empty object for empty object in input', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
