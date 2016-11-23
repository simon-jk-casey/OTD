exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fixtures', function(table){
    table.increments('id')
    table.integer('oppositionId').notNullable
    table.string('groundId').notNullable
    table.date('date').notNullable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fixtures')
};
