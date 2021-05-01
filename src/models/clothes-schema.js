'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.schema({
  size: { type: Number, required: true },
  color: { type: String, required: true },
  type: { type: String, uppercase: true, enum: ['SHIRT', 'PANTS', 'HAT'] }
});

const clothesModel = mongoose.model('food', clothesSchema);

module.exports = clothesModel;