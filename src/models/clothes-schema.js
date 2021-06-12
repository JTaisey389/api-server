'use strict';

const mongoose = require('mongoose');

<<<<<<< HEAD
// eslint-disable-next-line new-cap
const clothesCart = mongoose.Schema({
  name: { type: Number, required: true}, // CHECK NUMBER!!!!!!!
  color: { type: String, required: true },
  type: { type: String, uppercase: true, emun: ['SHIRT', 'SIZE', 'COLOR']} // possibly update to shirt, pants, shorts, dress, jacket
});

const clothingModel = mongoose.model('clothes', clothesCart);

module.exports = clothingModel;
=======
const clothesSchema = mongoose.Schema({
  size: { type: Number, required: true },
  color: { type: String, required: true },
  type: { type: String, uppercase: true, enum: ['SHIRT', 'PANTS', 'HAT'] }
});

const clothesModel = mongoose.model('food', clothesSchema);

module.exports = clothesModel;
>>>>>>> 004c68e2848c4568a8288d6c3f92b966000df1b3
