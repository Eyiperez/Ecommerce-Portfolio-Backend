const { db } = require('./pgp');
const BuyerService = {};


//CREAT BUYER
BuyerService.create = (name, address, email, payment_info) => {
    const sql = `INSERT INTO buyers (buyer_name, address, email, payment_info) VALUES ($[name], $[address], $[email], $[payment_info]) RETURNING id;`;
    return db.one(sql, { name, address, email, payment_info });
}

//READ BUYER WITh ORDERS INFO
BuyerService.read = (name) => {
    const sql = `
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
    buyers.buyer_name = $[name]
    `;
    return db.any(sql, {name});
  }
  


module.exports = BuyerService;