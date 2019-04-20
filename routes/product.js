const express = require('express');
const productRouter = express.Router();
const ProductService = require('../services/product');

// POST - CREATE
productRouter.post('/', (req, res, next) => {
  const { shop_id, name, price, image, description, category, color, likes } = req.body;

  ProductService.create(shop_id, name, price, image, description, category, color, likes)
    .then(data => {
      res.json({ success: `Created product named ${name} with generated ID: ${data.id}`, id: data.id });
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
      res.status(400)
      res.send({ success: false })
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
      res.status(400)
      res.send({ success: false })
      next(err);
    })
});

//GET - ALL PRODUCTS BY COLOR
productRouter.get('/:color/color', (req, res, next) => {
  const { color } = req.params;

  ProductService.readAllColor(color)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      res.send({ success: false })
      next(err);
    })
});

//GET - ALL PRODUCTS BY CATEGORY
productRouter.get('/:category/category', (req, res, next) => {
  const { category } = req.params;

  ProductService.readAllCat(category)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      res.send({ success: false })
      next(err);
    })
});

//GET - ALL PRODUCTS BY NAME
productRouter.get('/:name/name', (req, res, next) => {
  const { name } = req.params;

  ProductService.readAllName(name)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      res.send({ success: false })
      next(err);
    })
});

//GET - ALL PRODUCTS BY DESCRIPTION
productRouter.get('/:description/description', (req, res, next) => {
  const { description } = req.params;

  ProductService.readAllName(description)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400)
      res.send({ success: false })
      next(err);
    })
});

// PUT - UPDATE
productRouter.put('/:id', (req, res, next) => {
  const { name, price, description } = req.body;
  const { id } = req.params;

  ProductService.update(name, price, description)
    .then(data => {
      res.json({ success: `Updated product named ${name} with id ${id}` });
    })
    .catch(err => {
      next(err);
    })
});

// DELETE - DELETE
productRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  ProductService.delete(id)
    .then(data => {
      res.json({ success: `Deleted product ${id}` });
    })
    .catch(err => {
      next(err);
    })
});


module.exports = { productRouter, };