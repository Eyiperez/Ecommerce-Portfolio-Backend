// test('it should pass', () => {
//     expect(true).toBe(true);
//     })

jest.mock('../services/pgp')
const { db, } = require('../services/pgp')
const ShopService = require('../services/shop')

describe('testing the shop service', () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    it('add shop returns promise', done => {
        db.one.mockImplementation((...rest) => Promise.resolve())
        ShopService.create('a', 'b', 'c')
            .then(_ => {
                expect(db.one.mock.calls[0][0]).toBe(`INSERT INTO shops (name, owner, description) VALUES ($[name], $[owner], $[description]) RETURNING id;`);
                expect(db.one.mock.calls[0][1]).toEqual({ "name": "a", "owner": "b", "description": "c" });
                done()
            })

    })

    it('get shop returns promise', done => {
        db.one.mockImplementation((...rest) => Promise.resolve())

        ShopService.read(name)
            .then(_ => {
                expect(db.one.mock.calls[0][0]).toBe(`
    SELECT 
    shops.*,
    sellers.name AS seller_name,
    sellers.email AS seller_email,
    sellers.seller_photo AS seller_photo,
    sellers.seller_id AS seller_id
    FROM shops
    JOIN sellers
    ON shops.owner = sellers.id
    WHERE
    shops.id = $[id]
  `
                )
                done()
            })

    })

//     it('search shop by name returns promise', done => {
//         db.any.mockImplementation((...rest) => Promise.resolve())

//         ShopService.read(name)
//             .then(_ => {
//                 expect(db.any.mock.calls[0][0]).toBe(`
//     SELECT 
//     *
//     FROM shops
//     WHERE
//       shops.name LIKE $[likeName]
//   `
//                 )
//                 done()
//             })

//     })

})