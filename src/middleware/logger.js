'use strict';

module.exports = (req, res, next) => {
  console.log('requested data', req.path, req.method);
  next();
};