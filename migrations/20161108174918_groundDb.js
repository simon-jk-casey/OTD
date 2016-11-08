
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("grounds", function(table){
    table.increments('id')
    table.string('groundName')
    table.string('imgUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("grounds")
};
