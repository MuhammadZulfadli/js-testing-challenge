const repeatLetter = require('../src/07');

test('repeatLetter', () =>{
    expect(repeatLetter('Hello World!')).toBe('HHeelllloo WWoorrlldd!!');
});