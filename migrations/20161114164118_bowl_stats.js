exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bowl_stats', function(table){
    table.increments('id')
    table.integer('playerId')
    table.integer('overs')
    table.integer('maidens')
    table.integer('wickets')
    table.integer('avg')
    table.integer('wides')
    table.integer('noBalls')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bowl_stats')
};
