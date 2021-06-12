'use strict';
module.exports = (req, res, next) => {
  res.status(404).json({ messsage: 'Route not found' });
  next();
}

