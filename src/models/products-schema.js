'use strict';

const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const productCart = mongoose.Schema({
  categoryContainer: { type: String, required: true},
  name: { type: String, required: true},
  description: { type: String, required: true},
  price: { type: String, required: true},
  inventoryCount: { type: String, required: true},
  image: { type: String, required: true},
});

const productModel = mongoose.model('products', productCart);

module.exports = productModel;


