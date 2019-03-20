const express = require('express');
const shopRouter = express.Router();
const ShopService = require('../services/shop');

// POST - CREATE
shopRouter.post('/', (req, res, next) => {
  const { name, owner, description } = req.body;

  ShopService.create(name, owner, description)
    .then(data => {
      res.json({ success: `Created shop named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      next(err);
    })
});

//GET - READ
shopRouter.get('/:id/', (req, res, next) => {
  const { id } = req.params;

  ShopService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET SHOP"S ORDERS
shopRouter.get('/:id/orders', (req, res, next) => {
  const { id } = req.params;

  ShopService.getOrders(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET SHOP'S PRODUCTS
shopRouter.get('/:id/products', (req, res, next) => {
  const { id } = req.params;
  const { category, color } = req.query;

  if (category) {
    ShopService.getCategoryProducts(id, category)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  }
  if (color) {
    ShopService.getColorProducts(id, color)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  } else {
    ShopService.getAllProducts(id)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        next(err);
      })
  }
});


// PUT - UPDATE
shopRouter.put('/:id', (req, res, next) => {
  const { name, description } = req.body;
  const { id } = req.params;

  ShopService.update(name, description, id)
    .then(data => {
      res.json({ success: `Updated shop named ${name} with id ${id}` });
    })
    .catch(err => {
      next(err);
    })
});

//   // DELETE - DELETE
//   shopRouter.delete('/:id', (req, res, next) => {
//     const {id} = req.params;

//     ShopService.delete(id)
//       .then(data => {
//         res.json({success: `Deleted seller ${id}`});
//       })
//       .catch(err => {
//         next(err);
//       })
//   });


module.exports = shopRouter;