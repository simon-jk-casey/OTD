var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getSquad,
  getPlayer,
  getFixtures,
  getFixture,
  getBattingData,
  getBowlingData,
  getFieldingData,
  getPlayerData,
  getOpposition
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

function getBattingData(id) {
  return knex('matchDB_Bat')
    .sum('batruns as runs')
    .sum('fours as fours')
    .sum('sixes as sixes')
    .sum('notOut as notOut')
    .where('batPlayerId', '=', `${id}`)
}

function getBowlingData(id) {
  return knex ('matchDB_Bowl')
    .sum('overs as overs')
    .sum('maidens as maidens')
    .sum('bowlRuns bowlRuns')
    .sum('wickets as wickets')
    .sum('wides as wides')
    .sum('noBalls as noBalls')
    .where('bowlPlayerId', '=', `${id}`)
}

function getFieldingData(id) {
  return knex ('matchDB_field')
    .sum('catches as catches')
    .sum('runOuts as runOuts')
    .sum('stumpings as runOuts')
    .where('fieldPlayerId', '=', `${id}`)
}

function getPlayerData(id){
// return knex.raw ("SELECT * FROM squad RIGHT JOIN matchDB_Bat ON squad.playerId = matchDB_Bat.batPlayerId LEFT JOIN matchDB_Bowl ON squad.playerId = matchDB_Bowl.bowlPlayerId AND matchDB_Bat.matchId = matchDB_Bowl.matchId LEFT JOIN matchDB_Field ON squad.playerId = matchDB_Field.fieldPlayerId AND  matchDB_Bowl.matchId = matchDB_Field.matchId WHERE playerId = 1")
return knex ('squad')
    .select('firstName')
    .select('lastName')
    .select('imgUrl')
    .sum('batRuns as runsScored')
    .max('batRuns as highScore')
    .sum('fours as fours')
    .sum('sixes as sixes')
    .sum('notOut as notOut')
    .sum('dnb as dnb')
    .sum('overs as overs')
    .sum('maidens as maidens')
    .sum('bowlRuns as runsConceded')
    .sum('wickets as wickets')
    .max('wickets as bestBowling')
    .sum('wides as wides')
    .sum('noBalls as noBalls')
    .sum('catches as catches')
    .sum('runOuts as runOuts')
    .sum('stumpings as stumpings')
    .innerJoin('matchDB_Bat', 'squad.playerId', '=', 'matchDB_Bat.batPlayerId')
    .innerJoin('matchDB_Bowl', function(){
      this.on('squad.playerId', '=', 'matchDB_Bowl.bowlPlayerId').andOn('matchDB_Bat.matchId', '=', 'matchDB_Bowl.matchId')
    })
    .innerJoin('matchDB_Field', function(){
      this.on('squad.playerId', '=', 'matchDB_Field.fieldPlayerId').andOn('matchDB_Bowl.matchId', '=', 'matchDB_Field.matchId')
    })
    .where('playerId', '=', `${id}`)
}
function getOpposition() {
  return knex('opposition')
}
