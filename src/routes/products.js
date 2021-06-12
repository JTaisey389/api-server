'use strict';

const express = require('express');
const productSchema = require ('../models/products-schema.js')
const Product = require('../models/data-collection-class.js');
const productRoutes = new Product(productSchema);

const router = express.Router();

router.get('/product', getAllProducts);
router.get('/product/:id', getOneProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

async function getAllProducts(req, res) { // may have to turn this into a regular function and pass async later 
  let pileOfProducts = await productRoutes.read();
  res.status(200).json(pileOfProducts)
}

async function getOneProduct(req, res) {
  const id = parseInt(req.params.id); // may need to delete parseInt 
  let myProduct = await productRoutes.read(id);
  res.status(200).json(myProduct);
}
async function createProduct(req, res) { 
  let content = req.body;
  let newProduct = await productRoutes.create(content);
  res.status(201).json(newProduct);
}
async function updateProduct(req, res) {
  const id = req.params.id;
  let content = req.body;
  let gotProduct = await productRoutes.update(id, content);
  res.status(200).json(gotProduct)
}
async function deleteProduct(req, res) {
  const id = req.params.id;
  let trashProduct = await productRoutes.delete(id);
  res.status(200).json({trashProduct});
}

module.exports = router;
