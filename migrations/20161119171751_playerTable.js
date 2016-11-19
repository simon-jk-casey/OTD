
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('simonCasey', function(table){
    table.increments('id')
    table.integer('matchId')
    table.integer('batRuns')
    table.integer('notOut')
    table.integer('fours')
    table.integer('sixes')
    table.integer('oversBowled')
    table.integer('maidens')
    table.integer('wickets')
    table.integer('wides')
    table.integer('noBalls')
    table.integer('catches')
    table.integer('runOuts')
    table.integer('stumpings')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('simonCasey')
};
