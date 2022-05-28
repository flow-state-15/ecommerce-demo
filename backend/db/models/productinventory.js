'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductInventory = sequelize.define('ProductInventory', {
    quantity: DataTypes.INTEGER
  }, {});
  ProductInventory.associate = function(models) {
    // associations can be defined here
  };
  return ProductInventory;
};