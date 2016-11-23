exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bat', function(table){
    table.increments('id')
    table.integer('batPlayerId').notNullable()
    table.integer('batRuns').defaultTo(0)
    table.integer('fours').defaultTo(0)
    table.integer('sixes').defaultTo(0)
    table.integer('innings').defaultTo(0)
    table.integer('matchId').notNullable()
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bat')
};
