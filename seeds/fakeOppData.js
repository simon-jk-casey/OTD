
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('opposition').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('opposition').insert({id: 1, name: 'Karori Wildcats'}),
        knex('opposition').insert({id: 2, name: 'Easts Indies'}),
        knex('opposition').insert({id: 3, name: 'Northern Boom'}),
        knex('opposition').insert({id: 4, name: 'Black Caps'}),
        knex('opposition').insert({id: 5, name: 'Brooklyn Jamaicans'}),
        knex('opposition').insert({id: 6, name: 'Johnsonvill Run Chargers'})
      ]);
    });
};
