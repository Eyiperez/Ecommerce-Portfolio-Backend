const express = require('express');
const sellerRouter = express.Router();
const { SellerService } = require('../services/seller');

const { isRequiredsNeededSeller, isRequiredsNeededUpdateSeller } = require('../services/utils')

// POST - CREATE
sellerRouter.post('/', (req, res, next) => {
  const { name, email, seller_id } = req.body;
  if (isRequiredsNeededSeller(req.body)) {
    res.status(400)
    res.send({
      "msg": "some required values are missing",
    })
  }
  SellerService.create(name, email, seller_id)
    .then(data => {
      res.status(200)
      res.json({ success: `Created seller named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      res.status(400)
      next(err);
    })
});


//GET - READ
sellerRouter.get('/:name', (req, res, next) => {
  const { name } = req.params;

  SellerService.read(name)
    .then(data => {
      res.status(200)
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      res.send({ success: false })
    })
})

// PUT - UPDATE
sellerRouter.put('/:name', (req, res, next) => {
  const { email } = req.body;
  const { name } = req.params;
  if (isRequiredsNeededUpdateSeller(req.body)) {
    res.status(400)
    res.send({
      "msg": "some required values are missing",
    })
  }
  SellerService.update(name, email)
    .then(data => {
      res.status(200)
      res.json({ success: `Updated seller named ${name}` });
    })
    .catch(err => {
      res.status(400)
      next(err);
    })
});

// DELETE - DELETE
sellerRouter.delete('/:name', (req, res, next) => {
  const { name } = req.params;

  SellerService.delete(name)
    .then(data => {
      res.status(200)
      res.json({ success: `Deleted seller ${name}` });
    })
    .catch(err => {
      res.status(400)
      next(err);
    })
});


module.exports = { sellerRouter, };