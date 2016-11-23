
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Bat').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Bat').insert({id: 1, batPlayerId: 1, batRuns: 24, fours: 3, sixes: 1, innings: 1, matchId: 1}),
        knex('matchDB_Bat').insert({id: 2, batPlayerId: 2, batRuns: 56, fours: 8, sixes: 2, innings: 1, matchId: 1}),
        knex('matchDB_Bat').insert({id: 3, batPlayerId: 3, batRuns: 30, fours: 4, sixes: 2, innings: 1, matchId: 1}),
        knex('matchDB_Bat').insert({id: 4, batPlayerId: 4, batRuns: 112, fours: 13, sixes: 5, innings: 1, matchId: 1}),
        knex('matchDB_Bat').insert({id: 5, batPlayerId: 5, batRuns: 5, fours: 0, sixes: 0, innings: 1, matchId: 1}),
        knex('matchDB_Bat').insert({id: 6, batPlayerId: 1, batRuns: 5, fours: 0, sixes: 0, innings: 1, matchId: 2}),
        knex('matchDB_Bat').insert({id: 7, batPlayerId: 2, batRuns: 101, fours: 12, sixes: 6, innings: 1, matchId: 2}),
        knex('matchDB_Bat').insert({id: 8, batPlayerId: 3, batRuns: 42, fours: 3, sixes: 4, innings: 1, matchId: 2}),
        knex('matchDB_Bat').insert({id: 9, batPlayerId: 4, batRuns: 21, fours: 2, sixes: 2, innings: 1, matchId: 2}),
        knex('matchDB_Bat').insert({id: 10, batPlayerId: 5, batRuns: 18, fours: 1, sixes: 2, innings: 1, matchId: 2}),
        knex('matchDB_Bat').insert({id: 11, batPlayerId: 1, batRuns: 58, fours: 6, sixes: 4, innings: 1, matchId: 3}),
        knex('matchDB_Bat').insert({id: 12, batPlayerId: 2, batRuns: 4, fours: 1, sixes: 0, innings: 1, matchId: 3}),
        knex('matchDB_Bat').insert({id: 13, batPlayerId: 3, batRuns: 61, fours: 3, sixes: 6, innings: 1, matchId: 3}),
        knex('matchDB_Bat').insert({id: 14, batPlayerId: 4, batRuns: 55, fours: 4, sixes: 3, innings: 1, matchId: 3}),
        knex('matchDB_Bat').insert({id: 15, batPlayerId: 5, batRuns: 26, fours: 1, sixes: 2, innings: 1, matchId: 3}),
        knex('matchDB_Bat').insert({id: 16, batPlayerId: 1, batRuns: 69, fours: 5, sixes: 4, innings: 1, matchId: 4}),
        knex('matchDB_Bat').insert({id: 17, batPlayerId: 2, batRuns: 88, fours: 5, sixes: 7, innings: 1, matchId: 4}),
        knex('matchDB_Bat').insert({id: 18, batPlayerId: 3, batRuns: 16, fours: 4, sixes: 0, innings: 1, matchId: 4}),
        knex('matchDB_Bat').insert({id: 19, batPlayerId: 4, batRuns: 46, fours: 5, sixes: 2, innings: 1, matchId: 4}),
        knex('matchDB_Bat').insert({id: 20, batPlayerId: 5, batRuns: 0, fours: 0, sixes: 0, innings: 1, matchId: 4}),
      ]);
    });
};
