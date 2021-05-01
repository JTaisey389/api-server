'use strict';

// Third party modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require ('dotenv');

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food' ;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGODB_URI, options);

// Event handlers
const notFound = require('../src/error-handlers/404');
const Errors = require('../src/error-handlers/500');
const logger = require('./middleware/logger');

//Routes 
const clothesRoutes = require('./routes/clothes');
const foodRoutes = require('./routes/food');

// Global Middleware
app.use(express.json());
app.use(logger);
app.use(clothesRoutes);
app.use(foodRoutes);

// Error handlers 
app.use('*', notFound)
app.use(Errors);

// Export to index.js
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Up on port ${port}`);
    })
  }
}

