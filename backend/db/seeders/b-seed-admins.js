'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('AdminUsers', [{
     username: 'jdoe',
     hashed_pw: bcrypt.hashSync('password'),
     f_name: 'John',
     l_name: 'Doe',
     level: 1,
     last_login: Sequelize.fn('now')
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('AdminUsers', null, {});
  }
};
