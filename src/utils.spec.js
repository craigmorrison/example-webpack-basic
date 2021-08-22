import { expect } from '@jest/globals';
import { double, square } from './utils';

describe('double', () => {
  it('return 2x the provided value', () => {
    expect(double(2)).toBe(4);
    expect(double(9)).toBe(18);
    expect(double(55)).toBe(110);
  });
});

describe('square', () => {
  it('returns the square of the provided value', () => {
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
    expect(square(25)).toBe(625);
  });
});
