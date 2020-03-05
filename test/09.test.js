const symmetrical = require('../src/09');

test('Test 09', () =>{
    expect(symmetrical('malam')).toEqual(true);
})

test('Test 09', () =>{
    expect(symmetrical('taat')).toEqual(true);
})

test('Test 09', () =>{
    expect(symmetrical('tidur')).toEqual(false);
})

test('Test 09', () =>{
    expect(symmetrical('1234')).toEqual(false);
})

test('Test 09', () =>{
    expect(symmetrical('108801')).toEqual(true);
})

test('Test 09', () =>{
    expect(symmetrical('8001008')).toEqual(true);
})

