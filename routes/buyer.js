const express = require('express');
const buyerRouter = express.Router();
const BuyerService = require('../services/buyer');

// POST - CREATE BUYER
buyerRouter.post('/', (req, res, next) => {
  const { name, address, email, payment_info } = req.body;

  BuyerService.create(name, address, email, payment_info)
    .then(data => {
      res.json({ success: `Created buyer named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      next(err);
    })
});


module.exports = buyerRouter;