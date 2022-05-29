"use strict";
const { faker } = require("@faker-js/faker");
const { generate } = require('../../utils/seed')

const deptList = []
const deptSeed = generate(faker.commerce.department, 100, true)

deptSeed.forEach(dept => { deptList.push({name: dept}) })

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "ProductDepartments", deptList, {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("ProductDepartments", null, {});
  },
};
