const mathSequence = require('./mathSequence');

test('should log "Arithmetic"', () => {
  expect(mathSequence([2, 4, 6, 8])).toBe('Arithmetic');
});
test('should log "Geometric"', () => {
  expect(mathSequence([3, 9, 27])).toBe('Geometric');
});
test('should log "-1"', () => {
  expect(mathSequence([2, 5, 14, 89])).toBe(-1);
});
