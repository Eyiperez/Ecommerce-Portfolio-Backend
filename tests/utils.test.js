const { isRequiredsNeededBuyer, isRequiredsNeededSeller, isRequiredsNeededUpdateSeller } = require('../services/utils')


//TEST BUYER INPUT
test('An empty buyer body returns true', () => {
    expect(isRequiredsNeededBuyer({})).toBe(true)
})

test('A fully expected buyer body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
        "address": "ccc",
        "payment_info": "ddd",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeededBuyer(mockValidBody)).toBe(false)
})

//TEST SELLER INPUT

test('An empty seller body returns true', () => {
    expect(isRequiredsNeededSeller({})).toBe(true)
})


test('A fully expected seller body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
        "seller_id": "ccc",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeededSeller(mockValidBody)).toBe(false)
})

//TEST SELLER UPDATE
test('An empty  update seller body returns true', () => {
    expect(isRequiredsNeededUpdateSeller({})).toBe(true)
})


test('A fully expected update seller body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeededUpdateSeller(mockValidBody)).toBe(false)
})