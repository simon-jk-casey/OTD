
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bat', function(table){
    table.increments('id')
    table.integer('playerId')
    table.integer('runs')
    table.integer('fours')
    table.integer('sixes')
    table.boolean('notOut')
    table.boolean('dnb')
    table.integer('matchId')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bat')
};
