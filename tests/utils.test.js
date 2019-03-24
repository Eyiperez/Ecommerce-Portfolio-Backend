
// test('it should pass', () => {
//     expect(true).toBe(true);
//     })

const { isRequiredsNeededBuyer, } = require('../services/utils')

test('An empty body returns true', () => {
    expect(isRequiredsNeededBuyer({})).toBe(true)
})

test('A fully expected body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
        "address": "ccc",
        "payment_info": "ddd",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeededBuyer(mockValidBody)).toBe(false)
})