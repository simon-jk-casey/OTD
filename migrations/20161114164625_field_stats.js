
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('field_stats', function(table){
    table.increments('id')
    table.integer('playerId')
    table.integer('catches')
    table.integer('runOuts')
    table.integer('stumpings')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('field_stats')
};
