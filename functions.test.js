const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 5 to equal 7', () => {
    expect(functions.add(2, 5)).toBe(7)
})

test('Adds 3 + 5 to equal 8', () => {
    expect(functions.add(2,8)).toBe(10)
})

test('Adds 2 + 5 to NOT equal 5', () => {
    expect(functions.add(2,5)).not.toBe(5)
})

test('Null function should return null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
})

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Ryan',
        lastName: 'Booth'
    })
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

test('Should be equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toEqual(1600)
})  

test('There is no I in team', () => {
    const team = 'Team';
    expect(team).not.toMatch(/I/)
})

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
    expect(usernames).toContain('john')
})

test('John should be in usernames', () => {
    usernames = ['John', 'Karen'];
    expect(usernames).toContain('John');
})

describe('removeSNames', () => {
    it('should contain correct names', () => {
        const names = ['Scott', 'Courtney', 'Sarah'];
        expect(functions.removeSNames(names)).not.toContain('Scott');
        expect(functions.removeSNames(names)).not.toContain('Sarah');
        })
    it('should not remove other names', () => {
        const names = ['Scott', 'Courtney'];
        expect(functions.removeSNames(names)).toContain('Courtney');
        expect(functions.removeSNames(names)).not.toContain('Scott');
        })
    it('should account for case', () => {
        const names = ['scott', 'Courtney'];
        expect(functions.removeSNames(names)).not.toContain('Scott');
        expect(functions.removeSNames(names)).not.toContain('scott');
        })
    })

test('Fetch user should return data', () => {
    expect(functions.fetchUser()).toBeDefined();
})