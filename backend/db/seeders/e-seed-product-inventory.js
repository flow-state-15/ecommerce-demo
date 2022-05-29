"use strict";

const { getRandomIntInclusive } = require('../../utils/seed')

const invList = []

for(let i=0; i<1000; ++i){
  invList.push({ quantity: getRandomIntInclusive(5,100) })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "ProductInventories", invList, {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("ProductInventories", null, {});
  },
};
