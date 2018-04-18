// jest test file

// Write a test that expects the greet module to return null when you supply non-string values

const greet = require('../lib/greet');

describe('Greet should only be a string', () => {
  test('should return hello, name if returns a string value', () => {
    expect(greet.hi('Mike')).toEqual('Hello, Mike!');
  });
});
