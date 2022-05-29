"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "OrderItems",
      [
        {
          order_id: 1,
          product_id: 1,
          quantity: 1,
        },
        {
          order_id: 1,
          product_id: 2,
          quantity: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("OrderItems", null, {});
  },
};
