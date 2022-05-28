'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      img: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      dept_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'ProductDepartments' } }
      },
      inv_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'ProductInventories' } }
      },
      discount_id: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: 'Discounts' } }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
