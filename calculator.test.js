const calculator = require('./calculator');

describe('valid additions', () => {
  test('8 + 6 = 14', () => {
    expect(calculator.add(8, 6)).toEqual(14);
  });
});

describe('valid subtractions', () => {
  test('8 - 6 = 2', () => {
    expect(calculator.subtract(8, 6)).toEqual(2);
  });
});

describe('valid multiplications', () => {
  test('8 * 6 = 48', () => {
    expect(calculator.multiply(8, 6)).toEqual(48);
  });
});

describe('valid divisions', () => {
  test('6 / 2 = 3', () => {
    expect(calculator.divide(6, 2)).toEqual(3);
  });
});
