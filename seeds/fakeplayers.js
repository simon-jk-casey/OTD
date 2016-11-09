
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('squad').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('squad').insert(
          {playerId: 1, firstName: 'Simon', lastName: 'Casey', imgUrl: 'https://placekitten.com/200/200', phoneNo: '021123456', email: 'fake@email.com'}
        ),
        knex('squad').insert(
          {playerId: 2, firstName: 'Dave', lastName: 'Murphy', imgUrl: 'https://placekitten.com/200/200', phoneNo: '021123456', email: 'fake@email.com'}
        ),
        knex('squad').insert(
          {playerId: 3, firstName: 'Justin', lastName: 'Murphy', imgUrl: 'https://placekitten.com/200/200', phoneNo: '021123456', email: 'fake@email.com'}
        ),
        knex('squad').insert(
          {playerId: 4, firstName: 'Eugene', lastName: 'Rees', imgUrl: 'https://placekitten.com/200/200', phoneNo: '021123456', email: 'fake@email.com'}
        ),
        knex('squad').insert(
          {playerId: 5, firstName: 'Chris', lastName: 'Bolton', imgUrl: 'https://placekitten.com/200/200', phoneNo: '021123456', email: 'fake@email.com'}
        ),
      ]);
    });
};
