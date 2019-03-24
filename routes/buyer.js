const express = require('express');
const buyerRouter = express.Router();
const BuyerService = require('../services/buyer');

const { isRequiredsNeededBuyer, } = require('../services/utils')

// POST - CREATE BUYER
buyerRouter.post('/', (req, res, next) => {
  const { name, address, email, payment_info } = req.body;
  if (isRequiredsNeededBuyer(req.body)) {
    res.status(400)
    res.send({
      "msg": "some required values are missing",
    })
  }
  BuyerService.create(name, email, address, payment_info)
    .then(data => {
      res.status(200)
      res.json({ success: `Created buyer named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      res.status(400)
      next(err);
    })
});

//GET- READ BUYER WITH ORDERS INFO
buyerRouter.get('/:name', (req, res, next) => {
  const { name } = req.params;
  BuyerService.read(name)
    .then(data => {
      res.status(200)
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      next(err);
    })
})


module.exports = { buyerRouter, }