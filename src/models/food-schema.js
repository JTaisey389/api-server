'use strict';

const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const foodCart = mongoose.Schema({
  name: { type: String, required: true}, // CHECK NUMBER!!!!!!!
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, emun: ['FRUIT', 'VEG', 'LEGUMES']} // possibly update to shirt, pants, shorts, dress, jacket
});

const foodModel = mongoose.model('food', foodCart);

module.exports = foodModel;
