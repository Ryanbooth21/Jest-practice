const concat = require('./concatstring')

test('function returns expected array', () => {
    var array1 = ['Hey there '];
    var array2 = ['hows it going?'];
    expect(concat(array1, array2)).toBe('Hey there hows it going?')

})