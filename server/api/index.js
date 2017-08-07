const api = require('express').Router();

api
  .use('/duck', require('./duck.js'))
  .use('/pond', require('./pond.js'));

api.use((req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
});

module.exports = api;
