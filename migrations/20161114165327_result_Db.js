
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists("results", (table) => {
    table.increments('id')
    table.integer('fixture_Id')
    table.boolean('win')
    table.integer('run_Margin')
    table.integer('wkt_Margin')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("results")
};
