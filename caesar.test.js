const caesar = require('./caesar');

it('is case sensitive', () => {
  expect(caesar('BLACKPINK', 1)).toBe('CMBDLQJOL');
});

it('considers punctuations', () => {
  expect(caesar('Fun!', 2)).toBe('Hwp!');
});

it('does not exceed the maximum alphabet limit', () => {
  expect(caesar('ZebraAnimal!', 1)).toBe('AfcsbBojnbm!');
});
