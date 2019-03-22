
// test('it should pass', () => {
//     expect(true).toBe(true);
//     })

const { isRequiredsNeeded, } = require('../services/utils')

test('An empty body returns true', () => {
    expect(isRequiredsNeeded({})).toBe(true)
})

test('A fully expected body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
        "address": "ccc",
        "payment_info": "ddd",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeeded(mockValidBody)).toBe(false)
})