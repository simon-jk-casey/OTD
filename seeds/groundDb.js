
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grounds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grounds').insert({id: 1, groundName: 'Ian Galloway Park', imgUrl:'https://www.google.co.nz/maps/place/Ian+Galloway+Park/@-41.2762121,174.7541279,18.25z/data=!4m5!3m4!1s0x6d38b1ca2885f20d:0xf00ef62249daab0!8m2!3d-41.2766405!4d174.7547328'}),
        knex('grounds').insert({id: 2, groundName: 'Liardet Park', imgUrl:'https://www.google.co.nz/maps/place/Liardet+Street+Park/@-41.3184264,174.7705512,17.75z/data=!4m13!1m7!3m6!1s0x6d38b0030653864b:0x98f70b0699dceab2!2sLiardet+St,+Wellington!3b1!8m2!3d-41.3148866!4d174.770219!3m4!1s0x0:0xde58e199f5743ff!8m2!3d-41.3179314!4d174.7705829'}),
        knex('grounds').insert({id: 3, groundName: 'Mirarmar Park', imgUrl:'https://www.google.co.nz/maps/place/Miramar+Park/@-41.3094536,174.8217264,17z/data=!4m8!1m2!2m1!1smiramar+park!3m4!1s0x6d38af722e31ea85:0xf00ef62249db040!8m2!3d-41.3091433!4d174.823228'})
      ]);
    });
};
