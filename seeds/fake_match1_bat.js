
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matchDB_Bat').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matchDB_Bat').insert({id: 1, playerId: 1, runs: 24, fours: 3, sixes: 1, notOut: false, dnb: false, matchId: 1}),
        knex('matchDB_Bat').insert({id: 2, playerId: 2, runs: 56, fours: 8, sixes: 2, notOut: false, dnb: false, matchId: 1}),
        knex('matchDB_Bat').insert({id: 3, playerId: 3, runs: 30, fours: 4, sixes: 2, notOut: false, dnb: false, matchId: 1}),
        knex('matchDB_Bat').insert({id: 4, playerId: 4, runs: 112, fours: 13, sixes: 5, notOut: true, dnb: false, matchId: 1}),
        knex('matchDB_Bat').insert({id: 5, playerId: 5, runs: 5, fours: 0, sixes: 0, notOut: true, dnb: false, matchId: 1}),
        knex('matchDB_Bat').insert({id: 6, playerId: 1, runs: 5, fours: 0, sixes: 0, notOut: false, dnb: false, matchId: 2}),
        knex('matchDB_Bat').insert({id: 7, playerId: 2, runs: 101, fours: 12, sixes: 6, notOut: false, dnb: false, matchId: 2}),
        knex('matchDB_Bat').insert({id: 8, playerId: 3, runs: 42, fours: 3, sixes: 4, notOut: false, dnb: false, matchId: 2}),
        knex('matchDB_Bat').insert({id: 9, playerId: 4, runs: 21, fours: 2, sixes: 2, notOut: false, dnb: false, matchId: 2}),
        knex('matchDB_Bat').insert({id: 10, playerId: 5, runs: 18, fours: 1, sixes: 2, notOut: true, dnb: false, matchId: 2}),
        knex('matchDB_Bat').insert({id: 11, playerId: 1, runs: 58, fours: 6, sixes: 4, notOut: false, dnb: false, matchId: 3}),
        knex('matchDB_Bat').insert({id: 12, playerId: 2, runs: 4, fours: 1, sixes: 0, notOut: false, dnb: false, matchId: 3}),
        knex('matchDB_Bat').insert({id: 13, playerId: 3, runs: 61, fours: 3, sixes: 6, notOut: false, dnb: false, matchId: 3}),
        knex('matchDB_Bat').insert({id: 14, playerId: 4, runs: 55, fours: 4, sixes: 3, notOut: false, dnb: false, matchId: 3}),
        knex('matchDB_Bat').insert({id: 15, playerId: 5, runs: 26, fours: 1, sixes: 2, notOut: false, dnb: false, matchId: 3}),
        knex('matchDB_Bat').insert({id: 16, playerId: 1, runs: 69, fours: 5, sixes: 4, notOut: false, dnb: false, matchId: 4}),
        knex('matchDB_Bat').insert({id: 17, playerId: 2, runs: 88, fours: 5, sixes: 7, notOut: false, dnb: false, matchId: 4}),
        knex('matchDB_Bat').insert({id: 18, playerId: 3, runs: 16, fours: 4, sixes: 0, notOut: false, dnb: false, matchId: 4}),
        knex('matchDB_Bat').insert({id: 19, playerId: 4, runs: 46, fours: 5, sixes: 2, notOut: false, dnb: false, matchId: 4}),
      ]);
    });
};
