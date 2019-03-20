const { db } = require('./pgp');
const BuyerService = {};


//CREAT BUYER
BuyerService.create = (name, address, email, payment_info) => {
    const sql = `INSERT INTO buyers (buyer_name, address, email, payment_info) VALUES ($[name], $[address], $[email], $[payment_info]) RETURNING id;`;
    return db.one(sql, { name, address, email, payment_info });
}




module.exports = BuyerService;