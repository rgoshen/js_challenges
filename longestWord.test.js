const findLongestWord = require('./longestWord');

test('should return "hello"', () => {
  expect(findLongestWord('Hello my name is John')).toBe('Hello');
});

test('should return "jumped"', () => {
  expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toBe(
    'jumped'
  );
});

test('should return "Google"', () => {
  expect(findLongestWord('Google do a barrel roll')).toBe('Google');
});
