'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define('Discount', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    discount_percent: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {});
  Discount.associate = function(models) {
    // associations can be defined here
  };
  return Discount;
};