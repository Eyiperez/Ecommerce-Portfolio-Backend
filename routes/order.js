const express = require('express');
const orderRouter = express.Router();
const OrderService = require('../services/order');

// POST - CREATE
orderRouter.post('/', (req, res, next) => {
  const { product_id, buyer_id, quantity, status } = req.body;

  OrderService.create(product_id, buyer_id, quantity, status)
    .then(data => {
      res.json({ success: `Created for product id # ${product_id} with generated ID: ${data.id}`, id: data.id });
    })
    .catch(err => {
      next(err);
    })
});

module.exports = orderRouter