const arithmetic = require('../lib/arithmetic');

describe('add should be invoked with two numbers', () => {
  test('should return a number', () => {
    expect(arithmetic.add(2, 2)).toEqual(4);
  });
});

describe('sub should be invoked with two numbers', () => {
  test('should return a number', () => {
    expect(arithmetic.add(2, 2)).toEqual(0);
  });
});

describe('add should be invoked with two Numbers', () => {
  test('should return a null if not a number', () => {
    expect(arithmetic.add(null, null)).toEqual(null);
  });
});
