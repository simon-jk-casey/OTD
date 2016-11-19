exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bowl', function(table){
    table.increments('id')
    table.integer('bowlPlayerId')
    table.integer('overs')
    table.integer('maidens')
    table.integer('bowlRuns')
    table.integer('wickets')
    table.integer('wides')
    table.integer('noBalls')
    table.integer('matchId')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bowl')
};
