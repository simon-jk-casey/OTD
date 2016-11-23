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
  getFixtureEntryData,
  addPlayer,
  createCard,
  addBowlingData,
  addFieldingData
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
    .innerJoin('grounds', 'fixtures.ground', '=', 'grounds.groundName')
    .where('fixtures.id', '=', `${id}`)
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
    .leftJoin('matchDB_Bat', 'squad.playerId', '=', 'matchDB_Bat.batPlayerId')
    .leftJoin('matchDB_Bowl', function(){
      this.on('squad.playerId', '=', 'matchDB_Bowl.bowlPlayerId').andOn('matchDB_Bat.matchId', '=', 'matchDB_Bowl.matchId')
    })
    .leftJoin('matchDB_Field', function(){
      this.on('squad.playerId', '=', 'matchDB_Field.fieldPlayerId').andOn('matchDB_Bowl.matchId', '=', 'matchDB_Field.matchId')
    })
    .where('playerId', '=', `${id}`)
}



function getFixtureEntryData () {
  return knex('opposition')
    .innerJoin('grounds')
    .distinct('opposition.name')
    .distinct('grounds.groundName')
}

function addPlayer(player) {
  return knex('squad').insert(player)
}

// function inputBatting(card) {
//   return knex('matchDB_Bat').insert(card)
// }
function createCard(req) {
  var card = []
  var matchId = req.body.matchId
  for (var i=0; i < req.body.batPlayerId.length; i++){
      card.push({matchId: matchId, batPlayerId: req.body.batPlayerId[i], batRuns: req.body.batRuns[i]})
  }
  console.log({card})
  return knex('matchDB_Bat').insert(card)
}

function addBowlingData(req){
  var bowlStats = []
  var matchId = req.body.matchId
  for(var i=0; i<req.body.bowlPlayerId.length; i++){
    bowlStats.push({
      matchId: matchId,
      bowlPlayerId: req.body.bowlPlayerId[i],
      overs: req.body.Overs[i],
      maidens: req.body.Maidens[i],
      bowlRuns: req.body.Runs[i],
      wickets: req.body.Wickets[i],
      wides: req.body.Wides[i],
      noBalls: req.body.noBalls[i]
    })
  }
  console.log({bowlStats})
  return knex('matchDB_Bowl').insert(bowlStats)
}

function addFieldingData(req){
  var fieldStats = []
  var matchId = req.body.matchId
  for (var i=0; i<req.body.fieldPlayerId.length; i++){
    fieldStats.push({
      matchId: matchId,
      fieldPlayerId: req.body.fieldPlayerId[i],
      catches: req.body.Catches[i],
      stumpings: req.body.Stumpings[i]
    })
  }
  return knex('matchDB_Field').insert(fieldStats)
}
