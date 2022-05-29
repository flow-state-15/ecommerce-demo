'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('UserPayments', [{
     name: 'Saved Card',
     user_id: 1,
     provider: 'Visa',
     card_number: '1234567890123456',
     expiry: '01/25',
     sec_code: 123
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('UserPayments', null, {});
  }
};
