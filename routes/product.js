const express = require('express');
const productRouter = express.Router();
const ProductService = require('../services/product');

// POST - CREATE
productRouter.post('/', (req, res, next) => {
  const { shop_id, name, price, image, description, category, color } = req.body;

  ProductService.create(shop_id, name, price, image, description, category, color)
    .then(data => {
      res.json({ success: `Created product named ${name} with generated ID: ${data.id}` });
    })
    .catch(err => {
      next(err);
    })
});

//GET - READ PRODUCT BY ID PARAMS
productRouter.get('/:id/', (req, res, next) => {
  const { id } = req.params;

  ProductService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET - READ PRODUCT BY ID QUERY
productRouter.get('/', (req, res, next) => {
  const { id } = req.query;

  ProductService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//GET - ALL PRODUCTS BY COLOR
productRouter.get('/:color/all', (req, res, next) => {
  const {color} = req.params;

  ProductService.readAll(color)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

// //GET - READ SHOP BY ID
// shopRouter.get('/:id/', (req, res, next) => {
//   const { id } = req.params;

//   ShopService.read(id)
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET- SEARCH SHOP BY NAME
// shopRouter.get('/name', (req, res, next) => {
//   const { name } = req.query;

//   ShopService.searchShop(name)
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET SHOP'S ORDERS
// shopRouter.get('/:id/orders', (req, res, next) => {
//   const { id } = req.params;

//   ShopService.getOrders(id)
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //GET SHOP'S PRODUCTS
// shopRouter.get('/:id/products', (req, res, next) => {
//   const { id } = req.params;
//   const { category, color } = req.query;

//   if (category) {
//     ShopService.getCategoryProducts(id, category)
//       .then(data => {
//         res.json(data);
//       })
//       .catch(err => {
//         next(err);
//       })
//   }
//   if (color) {
//     ShopService.getColorProducts(id, color)
//       .then(data => {
//         res.json(data);
//       })
//       .catch(err => {
//         next(err);
//       })
//   } else {
//     ShopService.getAllProducts(id)
//       .then(data => {
//         res.json(data);
//       })
//       .catch(err => {
//         next(err);
//       })
//   }
// });


// // PUT - UPDATE
// shopRouter.put('/:id', (req, res, next) => {
//   const { name, description } = req.body;
//   const { id } = req.params;

//   ShopService.update(name, description, id)
//     .then(data => {
//       res.json({ success: `Updated shop named ${name} with id ${id}` });
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //PUT - UPDATE ORDER STATUS
// shopRouter.put('/:id/orders', (req, res, next) => {
//   const { id } = req.params;
//   const { status, order_id } = req.body;

//   ShopService.putOrderStatus(id, status, order_id)
//     .then(data => {
//       res.json({ success: `Updated order with id ${id} with status ${status}` });
//     })
//     .catch(err => {
//       next(err);
//     })
// });

// //   // DELETE - DELETE
// //   shopRouter.delete('/:id', (req, res, next) => {
// //     const {id} = req.params;

// //     ShopService.delete(id)
// //       .then(data => {
// //         res.json({success: `Deleted seller ${id}`});
// //       })
// //       .catch(err => {
// //         next(err);
// //       })
// //   });


module.exports = productRouter;