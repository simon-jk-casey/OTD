
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fixtures').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('fixtures').insert(
          {id: 1, oppositionId: 1, groundId: 1, date: '2016-11-5'}),
        knex('fixtures').insert(
          {id: 2, oppositionId: 4, groundId: 2, date: '2016-11-12'}),
        knex('fixtures').insert(
          {id: 3, oppositionId: 6, groundId: 3, date: '2016-11-19'}),
        knex('fixtures').insert(
          {id: 4, oppositionId: 2, groundId: 1, date: '2016-11-26'})
      ]);
    });
};
