
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bat', function(table){
    table.increments('playerId')
    table.integer('runs')
    table.integer('fours')
    table.integer('sixes')
    table.boolean('notOut')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bat')
};
