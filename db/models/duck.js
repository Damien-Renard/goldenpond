const Sequelize = require('sequelize');
const db = require('../db');

const Duck = db.define('ducks', {
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER,
  heading: {
    type: Sequelize.ENUM('N', 'E', 'S', 'W'),
    defaultValue: 'E',
  },
  className: {
    type: Sequelize.STRING,
    defaultValue: 'ducks-icon-E',
  },
  pondId: Sequelize.INTEGER,
});

module.exports = Duck;
