const repeatString = require('../src/06');

test('Makan!', () =>{
    expect(repeatString('Makan!' + ' ')).toMatch('Makan! Makan! Makan!');
});