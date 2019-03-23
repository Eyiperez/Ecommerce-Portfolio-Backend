const express = require('express');
const sellerRouter = express.Router();
const SellerService = require('../services/seller');

// POST - CREATE
sellerRouter.post('/', (req, res, next) => {
    const {name, email, seller_id} = req.body;
  
    SellerService.create(name, email, seller_id)
      .then(data => {
        res.json({success: `Created seller named ${name} with generated ID: ${data.id}`});
      })
      .catch(err => {
        next(err);
      })
  });

//GET - READ
sellerRouter.get('/:name/', (req, res, next) => {
    const {name} = req.params;
  
    SellerService.read(name)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  });


// PUT - UPDATE
sellerRouter.put('/:name', (req, res, next) => {
    const {email} = req.body;
    const {name} = req.params;
  
    SellerService.update(name,email)
      .then(data => {
        res.json({success: `Updated seller named ${name}`});
      })
      .catch(err => {
        next(err);
      })
  });
  
  // DELETE - DELETE
  sellerRouter.delete('/:name', (req, res, next) => {
    const {name} = req.params;
  
    SellerService.delete(name)
      .then(data => {
        res.json({success: `Deleted seller ${name}`});
      })
      .catch(err => {
        next(err);
      })
  });


module.exports = sellerRouter;