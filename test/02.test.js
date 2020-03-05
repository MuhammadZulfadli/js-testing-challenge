const sum = require('../src/02');

test('tambah 10 + 20 to equal 30', () => {
  expect(sum(10, 20)).toBe(30);
});