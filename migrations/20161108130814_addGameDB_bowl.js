exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Bat', function(table){
    table.integer('playerId')
    table.integer('overs')
    table.integer('maidens')
    table.integer('runs')
    table.integer('wickets')
    table.integer('wides')
    table.integer('noBalls')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Bat')
};
