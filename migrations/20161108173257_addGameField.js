exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Field', function(table){
    table.increments('id')
    table.integer('playerId')
    table.integer('catches')
    table.integer('runOuts')
    table.integer('stumpings')
    table.integer('matchId')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Field')
};
