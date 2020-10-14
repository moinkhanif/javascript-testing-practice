const reverseString = require('../functions/reverse');

it('reverse the string sentence', () => {
  expect(reverseString('strawberry')).toBe('yrrebwarts');
});