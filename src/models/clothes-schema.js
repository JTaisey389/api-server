'use strict';

const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const clothesCart = mongoose.Schema({
  name: { type: Number, required: true}, // CHECK NUMBER!!!!!!!
  color: { type: String, required: true },
  type: { type: String, uppercase: true, emun: ['SHIRT', 'SIZE', 'COLOR']} // possibly update to shirt, pants, shorts, dress, jacket
});

const clothingModel = mongoose.model('clothes', clothesCart);

module.exports = clothingModel;