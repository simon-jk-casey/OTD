var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getSquad,
  getPlayer,
  getFixtures,
  getFixture,
  getTotalRuns
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

function getFixtures() {
  return knex('fixtures')
}

function getFixture(id) {
  return knex('fixtures')
    .select()
    .where('id', '=', `${id}`)
} //Do a join here to get ground image to go with fixture

function getTotalRuns(id) {
  return knex('matchDB_Bat')
    .sum('runs as totalRuns')
    .where('playerId', '=', `${id}`)
}
