"use strict";
const { faker } = require("@faker-js/faker");
const { generate, getRandomIntInclusive, getRandomFloatInclusive } = require('../../utils/seed')

const prodList = [];
const prodSeed = generate(faker.commerce.product, 1000).sort()

prodSeed.forEach((prod, idx) => {
  prodList.push(
    {
      name: prod,
      desc: faker.commerce.productDescription(),
      price: getRandomFloatInclusive(3, 100, 2),
      dept_id: getRandomIntInclusive(1,22),
      inv_id: idx+1,
      discount_id: null,
    }
  )
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Products", prodList, {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Products", null, {});
  },
};
