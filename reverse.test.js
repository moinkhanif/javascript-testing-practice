const reverseString = require('./reverse');

it('reverse the string sentence', () => {
  expect(reverseString('strawberry')).toBe('yrrebwarts');
});