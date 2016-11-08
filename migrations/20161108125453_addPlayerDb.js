
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('squad', function(table){
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
    table.string('phoneNo')
    table.string('email')

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('squad')
};
