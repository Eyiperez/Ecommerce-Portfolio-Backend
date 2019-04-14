const { db } = require('./pgp');
const OrderService = {};


//CREAT ORDER
OrderService.create = (product_id, buyer_id, quantity, status) => {
  const sql = `INSERT INTO order_item (product_id, buyer_id, quantity, status) VALUES ($[product_id], $[buyer_id], $[quantity], $[status]) RETURNING id;`;
  return db.one(sql, { product_id, buyer_id, quantity, status });
}

module.exports = OrderService