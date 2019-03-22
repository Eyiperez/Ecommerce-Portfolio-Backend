const express = require('express');
const buyerRouter = express.Router();
const BuyerService = require('../services/buyer');

const { isRequiredsNeeded, } = require('../services/utils')

// POST - CREATE BUYER
buyerRouter.post('/', (req, res, next) => {
  const { name, address, email, payment_info } = req.body;
  if (isRequiredsNeeded(req.body)) {
    res.status(400)
    res.send({
      "msg": "some required valsues are missing",
    })
  }
  res.status(204)
  res.send()
  BuyerService.create(name, email, address, payment_info)
    .then(data => {
      res.json({ success: `Created buyer named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      next(err);
    })
});


module.exports = { buyerRouter, }