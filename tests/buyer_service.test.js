jest.mock('../services/pgp')
const { db, } = require('../services/pgp')
const { BuyerService, } = require('../services/buyer')

describe('testing the buyer service', () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    it('add buyer returns promise', done => {
        db.one.mockImplementation((...rest) => Promise.resolve())
        BuyerService.create('a', 'b', 'c', 'd')
            .then(_ => {
                expect(db.one.mock.calls[0][0]).toBe(`INSERT INTO buyers (buyer_name, address, email, payment_info) VALUES ($[name], $[address], $[email], $[payment_info]) RETURNING id;`);
                expect(db.one.mock.calls[0][1]).toEqual({ "address": "b", "email": "c", "name": "a", "payment_info": "d" });
                done()
            })

    })

    it('get buyer returns promise', done => {
        db.any.mockImplementation((...rest) => Promise.resolve())

        BuyerService.read(name)
            .then(_ => {
                expect(db.one.mock.calls[0][0]).toBe(`
    SELECT 
    buyers.*,
    order_item.id AS order_id,
    order_item.product_id AS product_id,
    products.name AS product_name,
    products.price AS price
  FROM buyers
  INNER JOIN order_item
  ON buyers.id= buyer_id
  INNER JOIN products ON order_item.product_id = products.id
  WHERE
    buyers.buyer_name = $[name];
    `
                )
                done()
            })

    })

})