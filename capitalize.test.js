const capitalize = require('./capitalize');

it('capitalizes the first letter', () => {
  expect(capitalize('cat')).toBe('Cat');
});