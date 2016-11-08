exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('squad', function(table){
    table.increments('playerId')
    table.string('firstName')
    table.string('lastName')
    table.string('imgUrl')
    table.string('phoneNo')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('squad')
};
