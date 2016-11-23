
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grounds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('grounds').insert({id: 1, groundName: 'Ian Galloway Park', imgUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.480746580247!2d174.75253875142494!3d-41.27664047917279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1ca2885f20d%3A0xf00ef62249daab0!2sIan+Galloway+Park!5e0!3m2!1sen!2snz!4v1479873058485'}),
        knex('grounds').insert({id: 2, groundName: 'Liardet Park', imgUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5831388430383!2d174.76838885142587!3d-41.31793137916876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b0017f1938f1%3A0xde58e199f5743ff!2sLiardet+Street+Park!5e0!3m2!1sen!2snz!4v1479873187591'}),
        knex('grounds').insert({id: 3, groundName: 'Mirarmar Park', imgUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.987144347737!2d174.8210339514257!3d-41.30914327916972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38af722e31ea85%3A0xf00ef62249db040!2sMiramar+Park!5e0!3m2!1sen!2snz!4v1479873275981'})
      ]);
    });
};
