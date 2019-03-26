jest.mock('../services/pgp')
const { db, } = require('../services/pgp')
const { SellerService, } = require('../services/seller')

describe('testing the seller service', () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    it('add seller returns promise', done => {
        db.one.mockImplementation((...rest) => Promise.resolve())
        SellerService.create('b', 'c', 'a')
            .then(_ => {
                expect(db.one.mock.calls[0][0].replace(/\s+/g, ' ')).toBe(`INSERT INTO sellers (name, email, seller_id) VALUES ($[name], $[email], $[seller_id]) RETURNING id;`.replace(/\s+/g, ' '));
                expect(db.one.mock.calls[0][1]).toEqual({ "name": "b", "email": "c", "seller_id": "a" });
                done()
            })

    })

    it('get seller returns promise', done => {
        db.one.mockImplementation((...rest) => Promise.resolve())

        SellerService.read(name)
            .then(_=> {
                expect(db.one.mock.calls[0][0].replace(/\s+/g, ' ')).toBe(`
                SELECT 
                sellers.*,
                shops.name AS shop_name
              FROM sellers
              JOIN shops
              ON shops.owner = sellers.id
              WHERE
                sellers.name = $[name];
        `.replace(/\s+/g, ' ')
                )
                done()
            })

    })

    it('update seller returns promise', done => {
        db.none.mockImplementation((...rest) => Promise.resolve())
        const sql = `
    UPDATE sellers
    SET
        email=$[email]
    WHERE
        name=$[name];
    `;
        SellerService.update('b', 'c')
            .then(_ => {
                expect(db.none.mock.calls[0][0].replace(/\s+/g, ' ')).toBe(sql.replace(/\s+/g, ' '));
                expect(db.none.mock.calls[0][1]).toEqual({ "name": "b", "email": "c" });
                done()
            })
    })

    it('delete seller returns promise', done => {
        db.none.mockImplementation((...rest) => Promise.resolve())

        SellerService.delete(name)
            .then(_ => {
                expect(db.none.mock.calls[0][0].replace(/\s+/g, ' ')).toBe(`DELETE FROM sellers WHERE name=$[name]`.replace(/\s+/g, ' '))
                done()
            })
    })
})
