var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getSquad,
  getPlayer,
}

//LIST PLAYERS
function getSquad() {
  return knex('squad')
}

function getPlayer(id) {
  return knex('squad')
     .select()
     .where('playerId', '=', `${id}`)
}
