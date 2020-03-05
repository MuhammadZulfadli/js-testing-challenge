const user = require('../src/11');

test('Test 11', () =>{
    expect(user.findByUsername('johndoe')).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' });
});