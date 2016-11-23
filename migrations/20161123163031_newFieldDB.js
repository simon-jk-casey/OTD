exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('matchDB_Field', function(table){
    table.increments('id')
    table.integer('fieldPlayerId').notNullable()
    table.integer('catches').defaultTo(0)
    table.integer('runOuts').defaultTo(0)
    table.integer('stumpings').defaultTo(0)
    table.integer('matchId').notNullable()
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('matchDB_Field')
};
