const Duck = require('./duck');
const Pond = require('./pond');

Pond.hasMany(Duck); // pond: getDuck and setDuck, addDuck
Duck.belongsTo(Pond); // getPond, setPond, duck has foreign key for Pond

module.exports = {
  Duck,
  Pond,
};
