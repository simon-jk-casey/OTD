
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fixtures').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('fixtures').insert(
          {id: 1, opposition: 'Karori Wildcats', ground: 'Ian Galloway Park 4'}),
        knex('fixtures').insert(
          {id: 2, opposition: 'Onslow Stale Deyns', ground: 'Liardet Park 2'}),
        knex('fixtures').insert(
          {id: 3, opposition: 'Easts Indies', ground: 'Miramar Park 2A'}),
        knex('fixtures').insert(
          {id: 4, opposition: 'Johnsonville Full Tossers', ground: 'Ian Galloway 2'})
      ]);
    });
};
