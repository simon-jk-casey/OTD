
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Bowl').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Bowl').insert({id: 1, bowlPlayerId: 1, overs: 4, maidens: 0, bowlRuns: 16, wickets: 3, wides: 2, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 2, bowlPlayerId: 2, overs: 2, maidens: 1, bowlRuns: 5, wickets: 1, wides: 0, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 3, bowlPlayerId: 3, overs: 3, maidens: 0, bowlRuns: 12, wickets: 3, wides: 1, noBalls: 1, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 4, bowlPlayerId: 4, overs: 0, maidens: 0, bowlRuns: 0, wickets: 0, wides: 0, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 5, bowlPlayerId: 5, overs: 1, maidens: 0, bowlRuns: 2, wickets: 2, wides: 0, noBalls: 0, matchId: 1}),
        knex('matchDB_Bowl').insert({id: 6, bowlPlayerId: 1, overs: 2, maidens: 1, bowlRuns: 2, wickets: 2, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 7, bowlPlayerId: 2, overs: 0, maidens: 0, bowlRuns: 0, wickets: 0, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 8, bowlPlayerId: 3, overs: 4, maidens: 1, bowlRuns: 13, wickets: 3, wides: 0, noBalls: 1, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 9, bowlPlayerId: 4, overs: 1, maidens: 0, bowlRuns: 1, wickets: 1, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 10, bowlPlayerId: 5, overs: 4, maidens: 0, bowlRuns: 15, wickets: 4, wides: 2, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 11, bowlPlayerId: 1, overs: 0, maidens: 0, bowlRuns: 0, wickets: 0, wides: 0, noBalls: 0, matchId: 2}),
        knex('matchDB_Bowl').insert({id: 12, bowlPlayerId: 2, overs: 4, maidens: 0, bowlRuns: 22, wickets: 2, wides: 1, noBalls: 1, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 13, bowlPlayerId: 3, overs: 3, maidens: 0, bowlRuns: 15, wickets: 1, wides: 2, noBalls: 0, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 14, bowlPlayerId: 4, overs: 0, maidens: 0, bowlRuns: 0, wickets: 0, wides: 0, noBalls: 0, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 15, bowlPlayerId: 5, overs: 4, maidens: 1, bowlRuns: 13, wickets: 3, wides: 1, noBalls: 0, matchId: 3}),
        knex('matchDB_Bowl').insert({id: 16, bowlPlayerId: 1, overs: 4, maidens: 0, bowlRuns: 20, wickets: 4, wides: 2, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 17, bowlPlayerId: 2, overs: 3, maidens: 0, bowlRuns: 15, wickets: 2, wides: 1, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 18, bowlPlayerId: 3, overs: 2, maidens: 0, bowlRuns: 10, wickets: 2, wides: 1, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 19, bowlPlayerId: 4, overs: 0, maidens: 0, bowlRuns: 0, wickets: 0, wides: 0, noBalls: 0, matchId: 4}),
        knex('matchDB_Bowl').insert({id: 20, bowlPlayerId: 5, overs: 3, maidens: 1, bowlRuns: 5, wickets: 2, wides: 0, noBalls: 0, matchId: 4})
      ]);
    });
};
