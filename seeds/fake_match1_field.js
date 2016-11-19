
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Field').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Field').insert({id: 1, fieldPlayerId: 1, catches: 2, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 2, fieldPlayerId: 2, catches: 1, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 3, fieldPlayerId: 3, catches: 0, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 4, fieldPlayerId: 4, catches: 0, runOuts: 0, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 5, fieldPlayerId: 5, catches: 0, runOuts: 1, stumpings: 0, matchId: 1}),
        knex('matchDB_Field').insert({id: 6, fieldPlayerId: 1, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 7, fieldPlayerId: 2, catches: 1, runOuts: 1, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 8, fieldPlayerId: 3, catches: 0, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 9, fieldPlayerId: 4, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 10, fieldPlayerId: 5, catches: 1, runOuts: 0, stumpings: 0, matchId: 2}),
        knex('matchDB_Field').insert({id: 11, fieldPlayerId: 1, catches: 1, runOuts: 1, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 12, fieldPlayerId: 2, catches: 2, runOuts: 0, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 13, fieldPlayerId: 3, catches: 0, runOuts: 1, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 14, fieldPlayerId: 4, catches: 2, runOuts: 0, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 15, fieldPlayerId: 5, catches: 0, runOuts: 0, stumpings: 0, matchId: 3}),
        knex('matchDB_Field').insert({id: 16, fieldPlayerId: 1, catches: 2, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 17, fieldPlayerId: 2, catches: 0, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 18, fieldPlayerId: 3, catches: 1, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 19, fieldPlayerId: 4, catches: 2, runOuts: 0, stumpings: 0, matchId: 4}),
        knex('matchDB_Field').insert({id: 20, fieldPlayerId: 5, catches: 0, runOuts: 0, stumpings: 0, matchId: 4}),
      ]);
    });
};
