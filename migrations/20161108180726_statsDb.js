
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bat_stats', function(table){
    table.integer('playerId')
    table.integer('innings')
    table.integer('runs')
    table.integer('n/o')
    table.integer('avg')
    table.integer('4s')
    table.integer('6s')
  })
};

exports.down = function(knex, Promise) {
  return knex.schem.dropTableIfExists('bat_stats')
};
