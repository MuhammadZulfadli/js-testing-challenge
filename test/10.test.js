const censor = require('../src/10');

test('Test 10', () =>{
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toBe('#### ingin makan #### goreng.');
});