exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('squad', function(table){
    table.increments('playerId')
    table.string('firstName').notNullable()
    table.string('lastName')
    table.string('imgUrl')
    table.integer('phoneNo')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('squad')
};
