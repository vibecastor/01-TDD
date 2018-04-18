// jest test file

// Write a test that expects the greet module to return null when you supply non-string values

const greet = require('./greet');
const arithmetic = require('./arithmetic');

describe('Greet should only be a string', () => {
  test('should return null if not a string value', () => {
    expect(greet.helloWorld('')).toEqual('');
    expect(greet.helloWorld('')).not.toBeNull();
  });
});
