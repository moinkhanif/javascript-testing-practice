const analysis = require('../functions/analysis');

it('returns average, min, max and length of an array', () => {
  expect(analysis([10, 6, 8, 4, 2])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });

  expect(analysis([10, 6, 8, 4, 2])).not.toEqual({
    average: 6,
    min: 4,
    max: 10,
    length: 6,
  });
});