
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Field').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Field').insert({id: 1, playerId: 1, catches: 2, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 2, playerId: 2, catches: 1, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 3, playerId: 5, catches: 0, runOuts: 1, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 4, playerId: 1, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 5, playerId: 2, catches: 1, runOuts: 1, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 6, playerId: 4, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 7, playerId: 5, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 8, playerId: 1, catches: 1, runOuts: 1, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 9, playerId: 2, catches: 2, runOuts: 0, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 10, playerId: 3, catches: 0, runOuts: 1, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 11, playerId: 4, catches: 2, runOuts: 0, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 12, playerId: 1, catches: 2, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 13, playerId: 3, catches: 1, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 14, playerId: 4, catches: 2, runOuts: 0, stumpings: 0, matchId: 4}),
      ]);
    });
};
