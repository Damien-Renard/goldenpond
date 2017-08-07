/* eslint-disable global-require */
/* eslint-disable import/newline-after-import */

const db = require('./db');
const Duck = require('./models/duck');
const Pond = require('./models/pond');

module.exports = {
  db,
  Duck,
  Pond,
};
