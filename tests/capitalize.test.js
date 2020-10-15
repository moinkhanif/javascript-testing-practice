const capitalize = require('../functions/capitalize');

it('capitalizes the first letter', () => {
  expect(capitalize('cat')).toBe('Cat');
});