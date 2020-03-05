const mebiToKibi = require('../src/03');

test('konversi ', () => {
  expect(mebiToKibi(2)).toBe(2048);
});