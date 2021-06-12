'use strict';

const express = require('express');
const app = express();

// const logger = require('./middleware/logger.js');
// const clothes = require('./routes/clothes.js');
// const food = require('./routes/food.js');

const notFound = require('./error-handlers/404.js');
const error = require('./error-handlers/500.js');
const productsRoutes = require ('./routes/products.js')

app.use(express.json());
app.use(productsRoutes);

// app.use(logger);
// app.use(clothes);
// app.use(food);

app.use('*', notFound);
app.use(error);

module.exports = {
  server:app,
  start: port => {
    app.listen(port, () => {
      console.log(`up on port ${port}`);
    });
  }
};
