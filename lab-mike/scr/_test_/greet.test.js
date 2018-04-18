// jest test file

const greet = require('../lib/greet');

// Write a test that expects the greet module to return 'hello name'
// This should happen when invoked with 'name' as the first argument.

describe('Greet should only be a string', () => {
  test('should return hello, name if returns a string value', () => {
    expect(greet.hi('Mike')).toEqual('Hello, Mike!');
  });
});

// Write a test that expects the greet module to return null when you supply non-string values

describe('Greet should return null if name is not a string', () => {
  test('should return null if name does not equal a string', () => {
    expect(greet.hi(null)).toEqual(null);
  });
});
