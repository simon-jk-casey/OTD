
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Bowl').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Bowl').insert({id: 1, playerId: 1, overs: 4, maidens: 0, runs: 16, wickets: 3, wides: 2, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 2, playerId: 2, overs: 2, maidens: 1, runs: 5, wickets: 1, wides: 0, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 3, playerId: 3, overs: 3, maidens: 0, runs: 12, wickets: 3, wides: 1, noBalls: 1, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 4, playerId: 5, overs: 1, maidens: 0, runs: 2, wickets: 2, wides: 0, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 5, playerId: 1, overs: 2, maidens: 1, runs: 2, wickets: 2, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 6, playerId: 3, overs: 4, maidens: 1, runs: 13, wickets: 3, wides: 0, noBalls: 1, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 7, playerId: 4, overs: 1, maidens: 0, runs: 1, wickets: 1, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 8, playerId: 5, overs: 4, maidens: 0, runs: 15, wickets: 4, wides: 2, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 9, playerId: 2, overs: 4, maidens: 0, runs: 22, wickets: 2, wides: 1, noBalls: 1, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 10, playerId: 3, overs: 3, maidens: 0, runs: 15, wickets: 1, wides: 2, noBalls: 0, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 11, playerId: 5, overs: 4, maidens: 1, runs: 13, wickets: 3, wides: 1, noBalls: 0, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 12, playerId: 1, overs: 4, maidens: 0, runs: 20, wickets: 4, wides: 2, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 13, playerId: 2, overs: 3, maidens: 0, runs: 15, wickets: 2, wides: 1, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 14, playerId: 3, overs: 2, maidens: 0, runs: 10, wickets: 2, wides: 1, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 15, playerId: 5, overs: 3, maidens: 1, runs: 5, wickets: 2, wides: 0, noBalls: 0, matchId: 4})
      ]);
    });
};
