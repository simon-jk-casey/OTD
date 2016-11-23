exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bowl', function(table){
    table.increments('id')
    table.integer('bowlPlayerId').notNullable()
    table.integer('overs').defaultTo(0)
    table.integer('maidens').defaultTo(0)
    table.integer('bowlRuns').defaultTo(0)
    table.integer('wickets').defaultTo(0)
    table.integer('wides').defaultTo(0)
    table.integer('noBalls').defaultTo(0)
    table.integer('matchId').notNullable()
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bowl')
};
