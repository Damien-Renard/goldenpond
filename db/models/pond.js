const Sequelize = require('sequelize');
const db = require('../db');

const Pond = db.define('ponds', {
  name: Sequelize.STRING,
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER,
});

module.exports = Pond;
