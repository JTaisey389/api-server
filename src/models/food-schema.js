'use strict';

const mongoose = require('mongoose');

<<<<<<< HEAD
// eslint-disable-next-line new-cap
const foodCart = mongoose.Schema({
  name: { type: String, required: true}, // CHECK NUMBER!!!!!!!
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, emun: ['FRUIT', 'VEG', 'LEGUMES']} // possibly update to shirt, pants, shorts, dress, jacket
});

const foodModel = mongoose.model('food', foodCart);

module.exports = foodModel;
=======
const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGITABLE', 'SNACK'] }
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
>>>>>>> 004c68e2848c4568a8288d6c3f92b966000df1b3
