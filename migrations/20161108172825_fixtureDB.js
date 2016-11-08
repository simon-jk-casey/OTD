
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fixtures', function(table){
    table.increments('id')
    table.string('opposition')
    table.string('ground')
    table.boolean('win')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fixtures')
};
