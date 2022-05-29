'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('UserAddresses', [{
    user_id: 1,
    address_line1: '123 Address Way',
    address_line2: null,
    city: 'Nowhere Town',
    postal_code: 12345,
    phone: 123456789
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('UserAddresses', null, {});
  }
};
